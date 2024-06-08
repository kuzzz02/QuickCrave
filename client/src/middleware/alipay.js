import http from '../http';

class AlipayService {
  pay(){
    return http.post('/alipay/pay');
  }
}

export default new AlipayService();