import axios from "axios";

const api = "http://localhost:8080/wishlist/";
class Wishlist {
  addToWishlist(data, token) {
    return axios.post(`${api}add`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  getWishlist(token) {
    return axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
  DeleteWishlist(token,id) {
    return axios.delete(`${api}delete/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
export default new Wishlist();
