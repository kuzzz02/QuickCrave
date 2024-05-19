import http from '../http';

class ImageService {
  getVendorImage(imageName) {
    return http.get(`/image/vendor/getVendorImage?imageName=${imageName}`);
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

export default new ImageService();
