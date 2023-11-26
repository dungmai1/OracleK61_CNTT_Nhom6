import axios from "axios";

const api = "http://localhost:8080/category/";
const admin_api = "http://localhost:8080/admin/category/";

class CategoryService {
  getCategoryById(categoryId) {
    return axios.get(`${api}${categoryId}`);
  }
  getCategory() {
    return axios.get(api);
  }
  addCategory(categoryData,token) {
    return axios.post(`${admin_api}create`, categoryData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  }
  deleteCategory(categoryId,token) {
    return axios.delete(`${admin_api}delete/${categoryId}`,{
      headers: {
      "Authorization": `Bearer ${token}`,
      },
    });
  }
  updateCategory(categoryData,token) {
    return axios.put(`${admin_api}update`, categoryData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });
  }
}
export default new CategoryService();
