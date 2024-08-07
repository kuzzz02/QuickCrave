import http from '../http';

class ImageService {
  async getVendorImage(imageName) {
    try {
      const response = await http.get(`/image/vendor?imageName=${imageName}`, { responseType: 'blob' });
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(response.data);
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }

  async getGoodsImage(imageName) {
    try {
      const response = await http.get(`/image/goods?imageName=${imageName}`, { responseType: 'blob' });
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(response.data);
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }

  async getUserImage(imageName) {
    try {
      const response = await http.get(`/image/user?imageName=${imageName}`, { responseType: 'blob' });
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(response.data);
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }

  async getDeliveryImage(imageName) {
    try {
      const response = await http.get(`/image/delivery?imageName=${imageName}`, { responseType: 'blob' });
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(base64data);
        };
        reader.onerror = reject;
        reader.readAsDataURL(response.data);
      });
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  }
}

export default new ImageService();
