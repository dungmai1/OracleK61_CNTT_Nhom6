import axios from "axios";

const api = "http://localhost:8080/cart/";
class CartService {
  addToCart(data, token) {
    return axios.post(`${api}add`, data, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  }
  getAllCart(token){
    return axios.get((api),{
        headers:{
            "Authorization": `Bearer ${token}`,
        },
    });
  }
  IncreaseQuantity(id,token){
    return axios.post(`${api}update/increase?product_id=${id}`, null, {
        headers:{
            "Authorization": `Bearer ${token}`,
        },
    })
  }
  DecreaseQuantity(id,token){
    return axios.post(`${api}update/decrease?product_id=${id}`, null, {
        headers:{
            "Authorization": `Bearer ${token}`,
        },
    })
  }
  delete(id,token){
    return axios.delete(`${api}delete?cartItemId=${id}`, {
        headers:{
            "Authorization": `Bearer ${token}`,
        },
    })
  }
}
export default new CartService();
