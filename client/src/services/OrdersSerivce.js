import http from "../http";

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
    return http.get("/orders/selectAll");
  }

  getById(id) {
    return http.get(`/orders/selectById?id=${id}`);
  }

  delete(id) {
    return http.delete(`/orders/delete?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/orders/deleteAll`);
  }
}

export default new OrdersService();