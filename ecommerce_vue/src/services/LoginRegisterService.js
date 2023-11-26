import axios from "axios";

const api = "http://localhost:8080/api/v1/auth/";
class LoginRegisterService {
  login(data) {
    return axios.post(`${api}login`, data, {
      header: {
        "Content-Type": "application/json",
      },
    });
  }
  register(data) {
    return axios.post(`${api}register`, data, {
      header: {
        "Content-Type": "application/json",
      },
    });
  }
}
export default new LoginRegisterService();
