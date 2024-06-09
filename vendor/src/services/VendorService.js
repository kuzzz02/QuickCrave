import http from '../http';

class VendorService {
  /**
   * 默认 * 指String类型
   * @param {*} name 
   * @param {*} password 
   * @param {*} phone 
   * @param {*} address 
   * @param {*} portrait 
   * @param {*} description 
   * @param {*} image 
   * @param {*} category 
   */
  create(name,password,phone,address,portrait,description,image,category) {
    return http.post(`/vendor/insert?name=${name}
      &password=${password}
      &phone=${phone}
      &address=${address}
      &portrait=${portrait}
      &description=${description}
      &image=${image}
      &category=${category}`);
  }

  login(data) {
    return http.post(`/vendor/login`, data);
  }

  signup(data) {
    return http.post(`/vendor/signup`, data);
  }

  getAll() {
    return http.get('/vendor/selectAll');
  }

  getByName(name) {
    return http.get(`/vendor/selectByName?name=${name}`);
  }

  getById(id) {
    return http.get(`/vendor/selectById?id=${id}`);
  }

  getByCategory(category) {
    return http.get(`/vendor/selectByCategory?category=${category}`);
  }

  getWithProducts(id) {
    return http.get(`/vendor/selectVendorWithGoods?id=${id}`);
  }

  delete(id) {
    return http.delete(`/vendor/delete?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/vendor/deleteAll`);
  }

  updateName(id, name) {
    return http.put(`/vendor/updateName?id=${id}&name=${name}`);
  }

  updatePassword(id, password) {
    return http.put(`/vendor/updatePassword?id=${id}&password=${password}`);
  }

  updateEmail(id, email) {
    return http.put(`/vendor/updateEmail?id=${id}&email=${email}`);
  }

  updatePhone(id, phone) {
    return http.put(`/vendor/updatePhone?id=${id}&phone=${phone}`);
  }

  updateAddress(id, address) {
    return http.put(`/vendor/updateAddress?id=${id}&address=${address}`);
  }

  updateState(id, state) {
    return http.put(`/vendor/updateState?id=${id}&state=${state}`);
  }

  updateDate(id, date) {
    return http.put(`/vendor/updateDate?id=${id}&date=${date}`);
  }

  updatePortrait(id, portrait) {
    return http.put(`/vendor/updatePortrait?id=${id}&portrait=${portrait}`);
  }

  updateDescription(id, description) {
    return http.put(`/vendor/updateDescription?id=${id}&description=${description}`);
  }

  updateImage(id, image) {
    return http.put(`/vendor/updateImage?id=${id}&image=${image}`);
  }

  updateCategory(id, category) {
    return http.put(`/vendor/updateCategory?id=${id}&category=${category}`);
  }

  updateTime(id, time) {
    return http.put(`/vendor/updateTime?id=${id}&time=${time}`);
  }

  updateFee(id, fee) {
    return http.put(`/vendor/updateFee?id=${id}&fee=${fee}`);
  }

  updateQuantity(id, quantity) {
    return http.put(`/vendor/updateQuantity?id=${id}&quantity=${quantity}`);
  }

}

export default new VendorService();
