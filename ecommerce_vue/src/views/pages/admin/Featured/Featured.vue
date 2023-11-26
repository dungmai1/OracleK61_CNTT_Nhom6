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
            <div v-if="successMessage" class="alert alert-success">
              {{ successMessage }}
            </div>
            <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Picture</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(featured, index) in sortedFeaturedProductList"
                    :key="featured.id"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ featured.product.product_name }}</td>
                    <td>{{ formatPrice(featured.product.price) }}</td>
                    <td>
                      <img
                        :src="featured.product.pictures"
                        style="width: 150px"
                        alt="Product Image"
                      />
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="deletefeatured(featured.id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import FeaturedService from "@/services/admin/FeaturedService";

export default {
  name: "Featured",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      FeaturedProductList: [],
    };
  },
  methods: {
    getFeaturedProduct() {
      FeaturedService.getFeaturedProduct().then((reponse) => {
        this.FeaturedProductList = reponse.data;
      });
    },
    deletefeatured(id) {
      if (confirm("Are you sure?")) {
        const token = localStorage.getItem("token");
        FeaturedService.deleteFeaturedProduct(id,token)
          .then((response) => {
            console.log("Delete featured Product success", response.data);
            this.successMessage = "featured deleted successfully";
            this.getFeaturedProduct();
          })
          .catch((error) => {
            console.error("Delete fail:", error);
          });
      }
    },
    formatPrice(number) {
      return number.toLocaleString('en-US', { maximumFractionDigits: 2 });
    },
  },
  created() {
    this.getFeaturedProduct();
  },
  computed: {
    sortedFeaturedProductList() {
      return [...this.FeaturedProductList].sort((a, b) => a.id - b.id);
    },
  },
};
</script>
