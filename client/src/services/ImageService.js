import http from "../http";

class ImageService {
  getVendorImage(imageName) {
    return http.get(`/image/vendor/${imageName}`);
  }

  getGoodsImage(imageName) {
    return http.get(`/image/goods/${imageName}`);
  }

  getUserImage(imageName) {
    return http.get(`/image/user/${imageName}`);
  }

  getDeliveryImage(imageName) {
    return http.get(`/image/delivery/${imageName}`);
  }
}