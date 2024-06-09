import http from '../http';

class DeliveryService {
  create(name, password) {
    return http.post(`/delivery/insert?name=${name}&password=${password}`);
  }

  login(data) {
    return http.post(`/delivery/login`, data);
  }

  signup(data) {
    return http.post(`/delivery/signup`, data);
  }

  getAll() {
    return http.get('/delivery/selectAll');
  }

  getByName(name) {
    return http.get(`/delivery/selectByName?name=${name}`);
  }

  getById(id) {
    return http.get(`/delivery/selectById?id=${id}`);
  }

  delete(id) {
    return http.delete(`/delivery/delete?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/delivery/deleteAll`);
  }

  update(id, name, password) {
    return http.put(`/delivery/update?id=${id}&${name}&${password}`);
  }
}

export default new DeliveryService();