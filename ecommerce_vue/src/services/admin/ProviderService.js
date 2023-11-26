import axios from "axios";

const api = "http://localhost:8080/provider/";
const admin_api = "http://localhost:8080/admin/provider/";
class ProviderService {
  getProvider() {
    return axios.get(api);
  }
  addProvider(providerData,token) {
    return axios.post(`${admin_api}create`, providerData, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
  deleteProvider(providerId,token) {
    return axios.delete(`${admin_api}delete/${providerId}`,{
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
  }
  updateProvider(providerData,token) {
    return axios.put(`${admin_api}update`, providerData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  }
  getProviderById(providerId) {
    return axios.get(`${api}${providerId}`);
  }
}
export default new ProviderService();
