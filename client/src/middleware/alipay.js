import http from '../http';

class AlipayService {
  /**
   * @param {Long} id
   * @param {String} goods_id
   * @param {long} user_id
   * @param {Long} vendor_id
   * @param {Long} delivery_id
   * @param {*} state
   * @param {*} date
   * @param {*} address
   * @param {*} phone
   * @param {*} payment
   * @param {*} total
   */
  pay(data){
    return http.post('/alipay/pay', data);
  }
}

export default new AlipayService();