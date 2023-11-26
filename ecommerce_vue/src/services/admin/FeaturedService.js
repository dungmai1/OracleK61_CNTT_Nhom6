import axios from "axios";

const api = "http://localhost:8080/featured/";
const admin_api = "http://localhost:8080/admin/featured/";

class FeaturedService {
  getFeaturedProduct() {
    return axios.get(api);
  }
  deleteFeaturedProduct(id,token) {
    return axios.delete(`${admin_api}delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  addFeaturedProduct(productData,token) {
    return axios.post(`${admin_api}create`,productData, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new FeaturedService();
