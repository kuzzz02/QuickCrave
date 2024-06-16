import http from "../http";

class GoodsService {
  /**
   * @param {*} name
   * @param {*} description
   * @param {*} image
   * @param {*} number
   * @param {*} price
   * @param {*} discount
   * @param {Long} vendor_id
   */
  create(name,description,image,number,price,discount,vendor_id) {
    return http.post(`/goods/insert?name=${name}
      &description=${description}
      &image=${image}
      &number=${number}
      &price=${price}
      &discount=${discount}
      &vendor_id=${vendor_id}`);
  }

  getAll() {
    return http.get("/goods/selectAll");
  }

  getByName(name) {
    return http.get(`/goods/selectByName?name=${name}`);
  }

  getById(id) {
    return http.get(`/goods/selectById?id=${id}`);
  }

  delete(id) {
    return http.delete(`/goods/delete?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/goods/deleteAll`);
  }

  updateName(id, name) {
    return http.put(`/goods/updateName?id=${id}&name=${name}`);
  }

  updateDescription(id, description) {
    return http.put(`/goods/updateDescription?id=${id}&description=${description}`);
  }

  updateImage(id, image) {
    return http.put(`/goods/updateImage?id=${id}&image=${image}`);
  }

  updateState(id, state) {
    return http.put(`/goods/updateState?id=${id}&state=${state}`);
  }

  updateDate(id, date) {
    return http.put(`/goods/updateDate?id=${id}&date=${date}`);
  }

  updatePrice(id, price) {
    return http.put(`/goods/updatePrice?id=${id}&price=${price}`);
  }

  updateDiscount(id, discount) {
    return http.put(`/goods/updateDiscount?id=${id}&discount=${discount}`);
  }

  updateQuantity(id, quantity) {
    return http.put(`/goods/updateQuantity?id=${id}&quantity=${quantity}`);
  }

  updateVendor(id, vendor_id) {
    return http.put(`/goods/updateVendor?id=${id}&vendor_id=${vendor_id}`);
  }
}

export default new GoodsService();