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
          <div class="container-fluid">
            <!-- Page Heading -->

            <!-- DataTales Example -->
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
                <div v-if="successMessage" class="alert alert-success">
                  {{ successMessage }}
                </div>
                <div v-if="dangerMessage" class="alert alert-danger">
                  {{ dangerMessage }}
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a
                          class="page-link"
                          href="#"
                          v-on:click="getPreviousPage()"
                          >Previous</a
                        >
                      </li>
                      <li
                        class="page-item"
                        v-for="pagination in totalPages()"
                        v-on:click="paginatedProducts(pagination)"
                      >
                        <a class="page-link" href="#">{{ pagination }}</a>
                      </li>
                      <li class="page-item">
                        <a class="page-link" href="#" v-on:click="getNextPage()"
                          >Next</a
                        >
                      </li>
                    </ul>
                  </nav>
                  <div class="input-group rounded">
                    <input
                      v-model="searchTerm"
                      type="search"
                      class="form-control rounded"
                      placeholder="Search by product name"
                      aria-label="Search"
                      aria-describedby="search-addon"
                      @input="search"
                    />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>
                  <table
                    class="table table-bordered"
                    id="dataTable"
                    width="100%"
                    cellspacing="0"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Picture</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Featured Product</th>
                      </tr>
                    </thead>
                    <tfoot>
                      <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Picture</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Featured Product</th>
                      </tr>
                    </tfoot>
                    <tbody>
                      <tr
                        v-for="(product, index) in ListItem"
                        :key="product.id"
                      >
                        <td>
                          {{ (currentPage - 1) * itemsPerPage + index + 1 }}
                        </td>
                        <td>{{ product.product_name }}</td>
                        <td>{{ formatPrice(product.price) }}</td>
                        <td>
                          <img
                            :src="product.pictures"
                            style="width: 150px"
                            alt="Product Image"
                          />
                        </td>
                        <td>
                          <router-link
                            class="collapse-item btn btn-primary"
                            :to="`/admin/product/update/${product.id}`"
                          >
                            Edit
                          </router-link>
                        </td>
                        <td>
                          <a class="btn btn-danger" href="#">Delete</a>
                        </td>
                        <td>
                          <button
                            class="btn btn-success"
                            @click="addOutStanding(product.id)"
                          >
                            Add to Featured Product
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
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
import ProductService from "@/services/admin/ProductService";
import FeaturedService from "@/services/admin/FeaturedService";
import Paginate from "vuejs-paginate";

export default {
  name: "Product",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
    Paginate,
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
      },
      ProductList: [], 
      ListItem: [],
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  methods: {
    getProduct() {
      ProductService.getProduct().then((response) => {
        this.ProductList = response.data;
        this.ProductList = response.data.sort((a, b) => a.id - b.id);
        this.paginatedProducts(this.currentPage);
      });
    },
    addOutStanding(id) {
      ProductService.getProductById(id)
        .then((response) => {
          const productData = response.data;
          const token = localStorage.getItem("token");
          FeaturedService.addFeaturedProduct(productData, token)
            .then((response) => {
              this.successMessage = "Add Featured Product successfully";
              this.$router.push("/admin/product");
              this.getProduct();
            })
            .catch((error) => {
              console.error("Error adding featured product:", error);
              this.dangerMessage = "Featured Product Exists";
              this.$router.push("/admin/product");
              this.getProduct();
            });
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
        });
    },

    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
    totalPages() {
      const listToUse = this.searchTerm ? this.ListItem : this.ProductList;
      return Math.ceil(listToUse.length / this.itemsPerPage);
    },
    paginatedProducts(noPagina) {
      this.currentPage = noPagina;
      this.ListItem = [];
      const startIndex = noPagina * this.itemsPerPage - this.itemsPerPage;
      const endIndex = noPagina * this.itemsPerPage;
      this.ListItem = this.ProductList.slice(startIndex, endIndex);
    },
    getPreviousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
      this.paginatedProducts(this.currentPage);
    },
    getNextPage() {
      if (this.currentPage < this.totalPages()) {
        this.currentPage++;
      }
      this.paginatedProducts(this.currentPage);
    },
    search() {
      const searchTerm = this.searchTerm.toLowerCase();
      this.ListItem = this.ProductList.filter((product) => {
        return product.product_name.toLowerCase().includes(searchTerm);
      });
      this.currentPage = 1;
    },
  },
  created() {
    this.getProduct();
  },
};
</script>
<style lang="css"></style>
