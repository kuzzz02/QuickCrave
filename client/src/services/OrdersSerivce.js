import http from "../http";

class OrdersService {
  /**
   * @param {Long} goods_id
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
  create(goods_id,user_id,vendor_id,delivery_id,state,date,address,phone,payment,total) {
    return http.post(`/orders/insert?goods_id=${goods_id}
      &user_id=${user_id}
      &vendor_id=${vendor_id}
      &delivery_id=${delivery_id}
      &state=${state}
      &date=${date}
      &address=${address}
      &phone=${phone}
      &payment=${payment}
      &total=${total}`);
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