import axios from "axios";
const api = "http://localhost:8080/order/user";

const admin_api = "http://localhost:8080/admin/order/";
class OrderService {
  getOrder(token) {
    return axios.get(admin_api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getOrderDetails(id, token) {
    return axios.get(`${admin_api}details/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getOrderByUser(token) {
    return axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new OrderService();
