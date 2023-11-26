import axios from "axios";

const api = "http://localhost:8080/product/";
const admin_api = "http://localhost:8080/admin/product/";

class ProductService {
  getProduct() {
    return axios.get(api);
  }
  addProduct(productData,token) {
    return axios.post(`${admin_api}create`, productData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  }
  updateProduct(productData,token) {
    return axios.put(`${admin_api}update`, productData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  }
  getProductById(productId) {
    return axios.get(`${api}singleProduct/${productId}`);
  }
  getProductByCategoryID(categoryId){
    return axios.get(`${api}${categoryId}`);
  }
  getProductByProviderID(providerID){
    return axios.get(`${api}provider/${providerID}`);
  }
  searchProduct(product_name){
    return axios.get(`${api}search?product_name=${product_name}`);
  }
}
export default new ProductService();
