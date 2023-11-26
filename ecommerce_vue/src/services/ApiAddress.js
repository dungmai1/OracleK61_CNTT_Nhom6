import axios from "axios";

const api = "https://provinces.open-api.vn/api/";
class ApiAddress {
  getProvince() {
    return axios.get(api + "?depth=1");
  }
  getDistrict(id) {
    return axios.get(`${api}p/${id}?depth=2`);
  }
  getWard(id) {
    return axios.get(`${api}d/${id}?depth=2`);
  }
}
export default new ApiAddress();
