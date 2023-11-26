import axios from "axios";

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
}
export default new OrderService();
