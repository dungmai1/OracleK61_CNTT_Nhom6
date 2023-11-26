<template>
  <Header />
  <Section />
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Search with keywords "{{ this.$route.params.name }}"</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row featured__filter">
          <div
            v-for="product in ProductList"
            :key="product.id"
            class="col-lg-3 col-md-4 col-sm-6 mix"
          >
          <router-link :to="`/product_details/${product.id}`">

            <div class="featured__item">
              <div
                class="featured__item__pic set-bg"
                :style="{
                  'background-image': 'url(' + product.pictures + ')',
                  'background-size': 'cover',
                  width: '200px',
                  height: '150px',
                }"
              >
                <ul class="featured__item__pic__hover">
                  <li>
                    <a href="#" @click="addWishlist(product)">
                      <i class="fa fa-heart"> </i
                    ></a>
                  </li>
                  <li>
                    <a href="#" @click="addCart(product.id)">
                        <i class="fa fa-shopping-cart"></i
                    ></a>
                  </li>
                </ul>
              </div>

              <div class="featured__item__text">
                <h6>
                  <a>{{ product.product_name }}</a>
                </h6>
                <h5>{{ formatPrice(product.price) }}</h5>
              </div>
            </div>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script>
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import Section from "@/components/user/Section";
import ProductService from "@/services/admin/ProductService";
import WishlistService from "@/services/WishlistService";
import CartService from "@/services/CartService";


export default {
  name: "Search",
  components: {
    Footer,
    Section,
    Header, 
  },
  data() {
    return {
      ProductList: [],
      cart: {
        productID: "",
        quantity: 1,
      },
    };
  },
  methods: {
    getProductByFilterProductName() {
      this.ProductList = [];
      ProductService.searchProduct(this.$route.params.name)
        .then((response) => {
          this.ProductList = response.data;
          console.log("data", response.data);
        })
        .catch((error) => {
          console.error("Error getProduct:", error);
        });
    },
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
    addWishlist(data) {
      const token = localStorage.getItem("token");
      WishlistService.addToWishlist(data, token)
        .then((response) => {
          console.log("Add Wishlist success" + response.data);
        })
        .catch((error) => {
          console.error("Error add to wishlist:", error);
        });
    },
    addCart(id) {
      const token = localStorage.getItem("token");
      this.cart.productID = id;
      CartService.addToCart(this.cart, token)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error("Error adding to cart:", error, this.cart, token);
        });
    },
  },
  created() {
    this.getProductByFilterProductName();
  },
  watch: {
    "$route.params.name": function (newProductName, oldProductName) {
      // React to changes in the route parameter 'name'
      this.getProductByFilterProductName();
    },
  },
};
</script>

<style></style>
