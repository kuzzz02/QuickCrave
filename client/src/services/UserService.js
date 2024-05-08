import http from "../http";

class UserService {
  getAll() {
    return http.get("/user/selectAll");
  }

  getByName(name) {
    return http.get(`/user/selectByName/${name}`);
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
    return http.delete(`/users`);
  }
  login(name, password) {
    return http.post(`/user/login`, {name, password});
  }

  signup(name, password) {
    return http.post(`/user/signup`, {name, password});
  }
}

export default new UserService();