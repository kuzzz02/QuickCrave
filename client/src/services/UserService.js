import http from '../http';

class UserService {
  create(name, password) {
    return http.post(`/user/insert?name=${name}&password=${password}`);
  }

  login(data) {
    return http.post(`/user/login`, data);
  }

  signup(data) {
    return http.post(`/user/signup`, data);
  }
  
  getAll() {
    return http.get('/user/selectAll');
  }

  getByName(name) {
    return http.get(`/user/selectByName?name=${name}`);
  }

  getById(id) {
    return http.get(`/user/selectById?id=${id}`);
  }

  delete(id) {
    return http.delete(`/user/delete?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/user/deleteAll`);
  }

  update(id, name, password) {
    return http.put(`/user/update?id=${id}&${name}&${password}`);
  }
}

export default new UserService();
