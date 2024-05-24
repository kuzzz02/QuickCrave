import http from "../http";

class GoodsService {
  getAll() {
    return http.get("/goods/selectAll");
  }

  getByName(name) {
    return http.get(`/goods/selectByName?name=${name}`);
  }

  getById(id) {
    return http.get(`/goods/selectById?id=${id}`);
  }

  create(data) {
    return http.post("/goods/insert", data);
  }

  delete(id) {
    return http.delete(`/goods/delete?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/goods/deleteAll`);
  }

  update(id, data) {
    return http.put(`/goods/update?id=${id}`, data);
  }

  updateName(id, data) {
    return http.put(`/goods/updateName?id=${id}`, data);
  }

  updateDescription(id, data) {
    return http.put(`/goods/updateDescription?id=${id}`, data);
  }

  updateImage(id, data) {
    return http.put(`/goods/updateImage?id=${id}`, data);
  }

  updateState(id, data) {
    return http.put(`/goods/updateState?id=${id}`, data);
  }

  updateDate(id, data) {
    return http.put(`/goods/updateDate?id=${id}`, data);
  }

  updatePrice(id, data) {
    return http.put(`/goods/updatePrice?id=${id}`, data);
  }

  updateDiscount(id, data) {
    return http.put(`/goods/updateDiscount?id=${id}`, data);
  }

  updateQuantity(id, data) {
    return http.put(`/goods/updateQuantity?id=${id}`, data);
  }

  updateVendor(id, data) {
    return http.put(`/goods/updateVendor?id=${id}`, data);
  }
}

export default new GoodsService();