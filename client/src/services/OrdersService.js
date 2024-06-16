import http from '../http';

class OrdersService {
  /**
   * @param {String} orders_id
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
  create(data) {
    return http.post(`/orders/create`, data);
  }

  getAll() {
    return http.get('/orders/selectAll');
  }

  getById(orders_id) {
    return http.get(`/orders/selectById?orders_id=${orders_id}`);
  }

  delete(id) {
    return http.delete(`/orders/delete?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/orders/deleteAll`);
  }

  updateState(orders_id, state) {
    return http.put(`/orders/updateState?orders_id=${orders_id}&state=${state}`);
  }
}

export default new OrdersService();
