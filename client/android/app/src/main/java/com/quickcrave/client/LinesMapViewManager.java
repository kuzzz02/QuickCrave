package com.quickcrave.client;


import android.graphics.Color;

import com.amap.api.maps.AMap;
import com.amap.api.maps.CameraUpdateFactory;
import com.amap.api.maps.model.LatLng;
import com.amap.api.maps.model.LatLngBounds;
import com.amap.api.maps.model.Marker;
import com.amap.api.maps.model.MarkerOptions;
import com.amap.api.maps.model.Polyline;
import com.amap.api.maps.model.PolylineOptions;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.ArrayList;
import java.util.List;


public class LinesMapViewManager extends ViewGroupManager<LinesMapView> {



    @Override
    public String getName() {
        return "LinesMapView";
    }

    @Override
    protected LinesMapView createViewInstance(ThemedReactContext reactContext) {
        return  new LinesMapView(reactContext);
    }


    @ReactProp( name = "polyline")
    public  void  setPolyline(LinesMapView mapView , ReadableArray polyline){
        List<LatLng> latLngs = new ArrayList<LatLng>();
        for (int i=0 ; i < polyline.size() ; i++){
            ReadableMap map = polyline.getMap(i);
            latLngs.add(new LatLng( map.getDouble("latitude"),map.getDouble("longitude")));
        }

        Polyline polyline_ = mapView.getMap().addPolyline(new PolylineOptions().
                addAll(latLngs).width(20).color(Color.BLUE));
        polyline_.setDottedLine(true);
    }

    @ReactProp( name = "marker")
    public  void  setMarker(LinesMapView mapView , ReadableArray marker){
        AMap aMap = mapView.getMap();

        LatLngBounds.Builder boundsBuilder = new LatLngBounds.Builder();//存放所有点的经纬度

        for (int i=0 ; i < marker.size() ; i++){
            ReadableMap map = marker.getMap(i);
            Marker marker_ =  aMap.addMarker(new MarkerOptions().position(new LatLng(map.getDouble("latitude"),map.getDouble("longitude"))).title(map.getString("title")));
            if(i==0){
                marker_.showInfoWindow();
            }

            boundsBuilder.include(marker_.getPosition());

        }

        aMap.animateCamera(CameraUpdateFactory.newLatLngBounds(boundsBuilder.build(), 100));////第二个参数为四周留空宽度


    }

}