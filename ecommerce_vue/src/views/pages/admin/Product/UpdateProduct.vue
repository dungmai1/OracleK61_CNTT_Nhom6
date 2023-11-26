<template lang="html">
  <body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <SideBar />
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <TopBar />
          <div class="container">
            <form @submit.prevent="updateProduct">
              <!-- Category -->
              <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <select
                  class="form-select"
                  id="category"
                  name="category"
                  v-model="product.category_ID"
                  required
                >
                  <option
                    v-for="category in CategoryList"
                    :key="category.id"
                    :value="category.id"
                    v-text="category.category_name"
                  ></option>
                </select>
              </div>
              <!-- Provider -->
              <div class="mb-3">
                <label for="provider" class="form-label">Provider</label>
                <select
                  class="form-select"
                  id="provider"
                  name="provider"
                  v-model="product.provider_ID"
                  required
                >
                  <option
                    v-for="provider in ProviderList"
                    :key="provider.id"
                    :value="provider.id"
                    v-text="provider.provider_name"
                  ></option>
                </select>
              </div>
              <!-- Product Name -->
              <div class="mb-3">
                <label for="productName" class="form-label">Product Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="productName"
                  name="productName"
                  v-model="product.product_name"
                  required
                />
              </div>
              <!-- Price -->
              <div class="mb-3">
                <label for="price" class="form-label">Price</label>
                <input
                  type="number"
                  class="form-control"
                  id="price"
                  name="price"
                  v-model="product.price"
                  required
                />
              </div>
              <!-- Product Description -->
              <div class="mb-3">
                <label for="productDescription" class="form-label"
                  >Product Description</label
                >
                <textarea
                  class="form-control"
                  id="productDescription"
                  name="productDescription"
                  rows="3"
                  v-model="product.product_describe"
                  required
                ></textarea>
              </div>

              <!-- Pictures -->
              <div class="mb-3">
                <label for="pictures" class="form-label">Pictures</label>
                <input
                  type="text"
                  class="form-control"
                  id="pictures"
                  name="pictures"
                  v-model="product.pictures"
                  v-on:input="updateImagePreview"
                  required
                />
                <img
                  id="image-preview0"
                  :src="product.pictures"
                  style="width: 150px; height: 150px"
                />
              </div>
              <!-- Screen Size -->
              <div class="mb-3">
                <label for="screenSize" class="form-label">Screen Size</label>
                <input
                  type="text"
                  class="form-control"
                  id="screenSize"
                  name="screenSize"
                  v-model="product.screenSize"
                  required
                />
              </div>

              <!-- OS -->
              <div class="mb-3">
                <label for="os" class="form-label">Operating System</label>
                <input
                  type="text"
                  class="form-control"
                  id="os"
                  name="os"
                  v-model="product.os"
                  required
                />
              </div>

              <!-- Memory Storage Capacity -->
              <div class="mb-3">
                <label for="memoryCapacity" class="form-label"
                  >Memory Storage Capacity</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="memoryCapacity"
                  name="memoryCapacity"
                  v-model="product.memory_Storage_Capacity"
                  required
                />
              </div>

              <!-- Front Camera -->
              <div class="mb-3">
                <label for="frontCamera" class="form-label">Front Camera</label>
                <input
                  type="text"
                  class="form-control"
                  id="frontCamera"
                  name="frontCamera"
                  v-model="product.front_Camera"
                  required
                />
              </div>
              <!-- Back Camera -->
              <div class="mb-3">
                <label for="backCamera" class="form-label">Back Camera</label>
                <input
                  type="text"
                  class="form-control"
                  id="backCamera"
                  name="backCamera"
                  v-model="product.back_Camera"
                  required
                />
              </div>
              <!-- Category (Assuming you have a select dropdown for categories) -->
              <!-- Submit Button -->
              <button
                type="submit"
                class="btn btn-primary"
                onclick="return confirm('Save Changes?')"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    <Bottom />
  </body>
</template>
<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Bottom from "@/components/Bottom";
import CategoryService from "@/services/admin/CategoryService";
import ProductService from "@/services/admin/ProductService";
import ProviderService from "@/services/admin/ProviderService";
import { CAMELIZE } from "@vue/compiler-core";

export default {
  name: "Category",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      product: {
        product_name: "",
        os: "",
        pictures: "",
        screenSize: "",
        front_Camera: "",
        back_Camera: "",
        product_describe: "",
        memory_Storage_Capacity: "",
        price: "",
        provider_ID: "",
        category_ID: "",
      },
      ProviderList: [],
      CategoryList: [],
      imagePreview: "",
    };
  },
  methods: {
    getProvider() {
      ProviderService.getProvider().then((reponse) => {
        this.ProviderList = reponse.data;
        console.log(reponse.data);
      });
    },
    getCategory() {
      CategoryService.getCategory().then((reponse) => {
        this.CategoryList = reponse.data;
        console.log(reponse.data);
      });
    },
    getProductById() {
      ProductService.getProductById(this.$route.params.id).then((reponse) => {
        this.product = reponse.data;
      });
    },
    updateProduct() {
      const token = localStorage.getItem("token");
      ProductService.updateProduct(this.product,token)
        .then((response) => {
          console.log("Product updated successfully:", response.data);
          this.$router.push("/admin/product");
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    },
    updateImagePreview() {
      this.imagePreview = this.product.pictures;
    },
  },
  created() {
    this.getCategory();
    this.getProvider();
    this.getProductById();
  },
};
</script>
