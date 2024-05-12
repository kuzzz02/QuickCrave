import http from "../http";

class UserService {
  getAll() {
    return http.get("/user/selectAll");
  }

  getByName(name) {
    return http.get(`/user/selectByName/${name}`);
  }

  getById(id) {
    return http.get(`/user/selectById/${id}`);
  }

  create(data) {
    return http.post("/user/insert", data);
  }

  update(id, data) {
    return http.put(`/user/update/${id}`, data);
  }

  delete(id) {
    return http.delete(`/user/delete/${id}`);
  }

  deleteAll() {
    return http.delete(`/user/deleteAll`);
  }

  login(data) {
    return http.post(`/user/login`, data);
  }


  signup(data) {
    return http.post(`/user/signup`, data);
  }
}

export default new UserService();