import http from '../http';

class FileUploadService {
  async uploadVendorFile(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    // formData.append('type', type);
    try {
      const response = await http.post('/upload/vendor', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  }

  async uploadGoodsFile(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    try {
      const response = await http.post('/upload/goods', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  }

  async uploadUserFile(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    try {
      const response = await http.post('/upload/user', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  }

  async uploadDeliveryFile(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    try {
      const response = await http.post('/upload/delivery', formData);
      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  }

}

export default new FileUploadService();