package com.quickcrave.client;

import android.annotation.SuppressLint;
import android.os.Handler;
import android.os.Looper;
import android.os.Message;
import android.util.Log;
import android.os.Bundle;

import java.util.Map;
import com.alipay.sdk.app.PayTask;
import com.alipay.sdk.app.EnvUtils;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;


public class Alipay extends ReactContextBaseJavaModule {

  private static ReactApplicationContext reactContext;
  public static Promise promise;

  public Alipay(ReactApplicationContext context) {
      super(context);
      reactContext = context;
      EnvUtils.setEnv(EnvUtils.EnvEnum.SANDBOX);
  }

  private static final int SDK_PAY_FLAG = 1;

  @Override
  public String getName() {
      return "Alipay";
  }

  @SuppressLint("HandlerLeak")
  private Handler mHandler = new Handler(Looper.getMainLooper()) {
      @SuppressWarnings("unused")
      public void handleMessage(Message msg) {
          switch (msg.what) {
              case SDK_PAY_FLAG: {
                  @SuppressWarnings("unchecked")
                  PayResult payResult = new PayResult((Map<String, String>) msg.obj);
                  /**
                   * 对于支付结果，请商户依赖服务端的异步通知结果。同步通知结果，仅作为支付结束的通知。
                   */
                  String resultInfo = payResult.getResult();// 同步返回需要验证的信息
                  String resultStatus = payResult.getResultStatus();
                  // resultStatus 为9000则代表支付成功
                  Alipay.promise.resolve(resultStatus);
                  break;
              }
              default:
                  break;
          }
      };
    };

  @ReactMethod
  public void pay(String orderInfo, Promise promise) {
      Alipay.promise = promise;

      final Runnable payRunnable = new Runnable() {
          @Override
          public void run() {
              PayTask alipay = new PayTask(getCurrentActivity());
              Map<String, String> result = alipay.payV2(orderInfo, true);
              Log.i("msp", result.toString());

              Message msg = new Message();
              msg.what = SDK_PAY_FLAG;
              msg.obj = result;
              mHandler.sendMessage(msg);
          }
      };

      // 必须异步调用
      Thread payThread = new Thread(payRunnable);
      payThread.start();
  }
  
}
