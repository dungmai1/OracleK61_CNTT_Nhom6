import axios from "axios";

const admin_api = "http://localhost:8080/admin/customer/";
class CustomerService {
  getCustomer(token) {
    return axios.get(admin_api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new CustomerService();
