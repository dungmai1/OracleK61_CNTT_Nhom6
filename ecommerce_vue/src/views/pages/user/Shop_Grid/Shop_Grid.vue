<template>
  <Header />
  <Section />
  <section class="product spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-5">
          <div class="sidebar">
            <div class="sidebar__item">
              <h4>Categories</h4>
              <ul>
                <li>
                  <a @click="getProduct">All</a>
                </li>
                <li v-for="categories in CategoryList" :key="categories.id">
                  <a @click="getProductByCategoryId(categories.id)">{{
                    categories.category_name
                  }}</a>
                </li>
              </ul>
            </div>
            <div class="sidebar__item">
              <h4>Provider</h4>
              <ul>
                <li v-for="provider in ProviderList" :key="provider.id">
                  <a @click="getProductByProviderID(provider.id)">{{
                    provider.provider_name
                  }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-9 col-md-7">
          <div class="filter__item">
            <div class="row">
              <div class="col-lg-4 col-md-5">
                <div class="filter__sort">
                  <span>Sort By</span>
                  <select v-model="selectedSort" @change="handleSortChange">
                    <option value="lowToHigh">Price from low to high</option>
                    <option value="highToLow">Price from high to low</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="filter__found">
                  <h6>
                    <span>{{ ListItem.length }}</span> Products found
                  </h6>
                </div>
              </div>
              <div class="col-lg-4 col-md-3">
                <div class="filter__option">
                  <span class="icon_grid-2x2"></span>
                  <span class="icon_ul"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div
              class="col-lg-4 col-md-6 col-sm-6"
              v-for="product in ListItem"
              :key="product.id"
            >
              <router-link
                :to="`/product_details/${product.id}`"
                v-model="cart.productID"
              >
                <div class="product__item">
                  <div
                    class="product__item__pic set-bg"
                    :style="{
                      'background-image': 'url(' + product.pictures + ')',
                      width: '200px',
                      height: '150px',
                    }"
                  >
                    <ul class="product__item__pic__hover">
                      <li>
                        <a href="#" @click.stop="addWishlist(product)"
                          ><i class="fa fa-heart"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" @click.stop="addCart(product.id)"
                          ><i class="fa fa-shopping-cart"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div class="product__item__text">
                    <h6>
                      <a href="#">{{ product.product_name }}</a>
                    </h6>
                    <h5>{{ formatPrice(product.price) }}</h5>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div class="product__pagination">
            <a href="#" v-for="page in totalPages()" :key="page" v-on:click="paginatedProducts(page)">
              {{ page }}
            </a>
            <a href="#" v-on:click="getNextPage()"><i class="fa fa-long-arrow-right"></i></a>
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
import CartService from "@/services/CartService";
import WishlistService from "@/services/WishlistService";
import CategoryService from "@/services/admin/CategoryService";
import ProviderService from "@/services/admin/ProviderService";

export default {
  name: "Shop_Grid",
  components: {
    Footer,
    Header,
    Section,
  },
  data() {
    return {
      ProductList: [],
      cart: {
        productID: "",
        quantity: 1,
      },
      CategoryList: [],
      ProviderList: [],
      selectedSort: "",
      currentPage: 1,
      itemsPerPage: 10,
      ListItem: [],
    };
  },
  methods: {
    getProduct() {
      ProductService.getProduct()
        .then((response) => {
          this.ProductList = response.data;
          this.paginatedProducts(this.currentPage);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    addCart(id) {
      const token = localStorage.getItem("token");
      this.cart.productID = id;
      CartService.addToCart(this.cart, token)
        .then((response) => {
          console.log(response.data);
          alert("Add to Cart success");
        })
        .catch((error) => {
          console.error("Error adding to cart:", error, this.cart, token);
        });
    },
    addWishlist(data) {
      const token = localStorage.getItem("token");
      WishlistService.addToWishlist(data, token)
        .then((response) => {
          console.log("Add Wishlist success" + response.data);
          alert("Add to Favorites Product ");
        })
        .catch((error) => {
          console.error("Error add to wishlist:", error);
          alert("Product already exists in favorite products");
        });
    },
    getCategory() {
      CategoryService.getCategory()
        .then((response) => {
          this.CategoryList = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    getProvider() {
      ProviderService.getProvider().then((reponse) => {
        this.ProviderList = reponse.data;
      });
    },
    handleSortChange() {
      if (this.selectedSort === "lowToHigh") {
        this.sortProductsLowToHigh();
      } else if (this.selectedSort === "highToLow") {
        this.sortProductsHighToLow();
      }
    },
    sortProductsLowToHigh() {
      this.ListItem.sort((a, b) => a.price - b.price);
    },
    sortProductsHighToLow() {
      this.ListItem.sort((a, b) => b.price - a.price);
    },
    getProductByCategoryId(id) {
      ProductService.getProductByCategoryID(id)
        .then((response) => {
          this.ListItem = response.data;
          console.error("List", this.ListItem);
          this.handleSortChange();
        })
        .catch((error) => {
          console.error("Error fetching products by category:", error);
        });
    },
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
    getProductByProviderID(id) {
      ProductService.getProductByProviderID(id)
        .then((response) => {
          this.ListItem = response.data;
          console.error("List", this.ListItem);
          this.handleSortChange();
        })
        .catch((error) => {
          console.error("Error fetching products by category:", error);
        });
    },
    totalPages() {
      return Math.ceil(this.ProductList.length / this.itemsPerPage);
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
  },
  created() {
    this.getProduct();
    this.getCategory();
    this.getProvider();
  },
};
</script>

<style>
.product__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.product__item__pic {
  width: 200px;
  height: 150px;
  background-size: cover;
  background-position: center;
}
</style>
