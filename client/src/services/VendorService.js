import http from "../http";

class VendorService {
  getAll() {
    return http.get("/vendor/selectAll");
  }

  getByName(name) {
    return http.get(`/vendor/selectByName/${name}`);
  }

  getById(id) {
    return http.get(`/vendor/selectById/${id}`);
  }
  
  getByCategory(category) {
    return http.get(`/vendor/selectByCategory/${category}`);
  }

  getWithProducts(id) {
    return http.get(`/vendor/selectVendorWithGoods/${id}`);
  }

  create(data) {
    return http.post("/vendor/insert", data);
  }

  update(id, data) {
    return http.put(`/vendor/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/vendor/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/vendor/deleteAll`);
  }

  login(data) {
    return http.post(`/vendor/login`, data);
  }

  signup(data) {
    return http.post(`/vendor/signup`, data);
  }
}

export default new VendorService();