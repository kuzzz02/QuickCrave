import http from "../http";

class OrdersService {
  getAll() {
    return http.get("/orders/selectAll");
  }

  getById(id) {
    return http.get(`/orders/selectById?id=${id}`);
  }

  create(data) {
    return http.post("/orders/insert", data);
  }

  delete(id) {
    return http.delete(`/orders/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/orders/deleteAll`);
  }
}

export default new OrdersService();