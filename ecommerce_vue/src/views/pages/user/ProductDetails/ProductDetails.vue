<template>
  <Header />
  <Section />
  <section class="product-details spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6">
          <div class="product__details__pic">
            <div class="product__details__pic__item">
              <img
                class="product__details__pic__item--large"
                :src="product.pictures"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="product__details__text">
            <h3>{{ product.product_name }}</h3>
            <div class="product__details__price">
              {{ formatPrice(product.price) }}
            </div>
            <p>
              {{ product.product_describe }}
            </p>
            <div class="product__details__quantity">
              <div class="quantity">
                <div class="pro-qty">
                  <span class="dec qtybtn" @click="decreaseQuantity">-</span>
                  <input type="text" :value="quantity" />
                  <span class="inc qtybtn" @click="increaseQuantity">+</span>
                </div>
              </div>
            </div>
            <a href="#" class="primary-btn" @click="addCart(product.id)">ADD TO CARD</a>
            <!-- <a href="#" class="heart-icon"
              ><span class="icon_heart_alt"></span
            ></a> -->
            <ul>
              <li>
                <b>Screen Size</b> <span>{{ product.screenSize }}</span>
              </li>
              <li>
                <b>OS</b> <span>{{ product.os }}</span>
              </li>
              <li>
                <b>Back Camera</b> <span>{{ product.back_Camera }}</span>
              </li>
              <li>
                <b>Front Camera</b> <span>{{ product.front_Camera }}</span>
              </li>
              <li>
                <b>Memory Storage Capacity</b>
                <span>{{ product.memory_Storage_Capacity }}</span>
              </li>
              <li>
                <b>Share on</b>
                <div class="share">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-pinterest"></i></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="product__details__tab">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  data-toggle="tab"
                  href="#tabs-1"
                  role="tab"
                  aria-selected="true"
                  >Description</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#tabs-2"
                  role="tab"
                  aria-selected="false"
                  >Information</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="tab"
                  href="#tabs-3"
                  role="tab"
                  aria-selected="false"
                  >Reviews <span>(1)</span></a
                >
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane active" id="tabs-1" role="tabpanel">
                <div class="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>
                    {{ product.product_describe }}
                  </p>
                </div>
              </div>
              <div class="tab-pane" id="tabs-2" role="tabpanel">
                <div class="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                    eget tortor risus. Vivamus suscipit tortor eget felis
                    porttitor volutpat. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Donec rutrum congue leo
                    eget malesuada. Vivamus suscipit tortor eget felis porttitor
                    volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec velit neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                    risus.
                  </p>
                  <p>
                    Praesent sapien massa, convallis a pellentesque nec, egestas
                    non nisi. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Mauris blandit aliquet elit, eget tincidunt nibh
                    pulvinar a. Cras ultricies ligula sed magna dictum porta.
                    Cras ultricies ligula sed magna dictum porta. Sed porttitor
                    lectus nibh. Mauris blandit aliquet elit, eget tincidunt
                    nibh pulvinar a.
                  </p>
                </div>
              </div>
              <div class="tab-pane" id="tabs-3" role="tabpanel">
                <div class="product__details__tab__desc">
                  <h6>Products Infomation</h6>
                  <p>
                    Vestibulum ac diam sit amet quam vehicula elementum sed sit
                    amet dui. Pellentesque in ipsum id orci porta dapibus. Proin
                    eget tortor risus. Vivamus suscipit tortor eget felis
                    porttitor volutpat. Vestibulum ac diam sit amet quam
                    vehicula elementum sed sit amet dui. Donec rutrum congue leo
                    eget malesuada. Vivamus suscipit tortor eget felis porttitor
                    volutpat. Curabitur arcu erat, accumsan id imperdiet et,
                    porttitor at sem. Praesent sapien massa, convallis a
                    pellentesque nec, egestas non nisi. Vestibulum ac diam sit
                    amet quam vehicula elementum sed sit amet dui. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia Curae; Donec velit neque, auctor sit amet
                    aliquam vel, ullamcorper sit amet ligula. Proin eget tortor
                    risus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Product Details Section End -->

  <!-- Related Product Section Begin -->
  <!-- <section class="related-product">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title related__product__title">
            <h2>Related Product</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 col-md-4 col-sm-6"
          v-for="pro in ProductList"
          :key="pro.id"
        >
          <div class="product__item">
            <div
              class="product__item__pic set-bg"
              :style="{
                'background-image': 'url(' + pro.pictures + ')',
                width: '200px',
                height: '150px',
              }"
            >
              <ul class="product__item__pic__hover">
                <li>
                  <a href="#"><i class="fa fa-heart"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-retweet"></i></a>
                </li>
                <li>
                  <a href="#"><i class="fa fa-shopping-cart"></i></a>
                </li>
              </ul>
            </div>
            <div class="product__item__text">
              <h6>
                <a href="#">{{ pro.product_name }}</a>
              </h6>
              <h5>${{ pro.price }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <Footer />
</template>

<script>
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import Section from "@/components/user/Section";
import ProductService from "@/services/admin/ProductService";
import CartService from "@/services/CartService";

export default {
  name: "ProductDetails",
  components: {
    Footer,
    Header,
    Section,
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
      ProductList: [],
      quantity: 1,
      cart: {
        productID: "",
        quantity: "",
      },
    };
  },
  methods: {
    getProductById() {
      ProductService.getProductById(this.$route.params.id)
        .then((response) => {
          this.product = response.data;
          this.getProductByCategoryId(this.product.category_ID);
          console.log(this.product);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    getProductByCategoryId(id) {
      ProductService.getProductByCategoryID(id)
        .then((response) => {
          this.ProductList = response.data;
          console.error("List", this.ProductList);
        })
        .catch((error) => {
          console.error("Error fetching products by category:", error);
        });
    },
    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity -= 1;
      }
    },
    increaseQuantity() {
      this.quantity += 1;
    },
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
    addCart(id) {
      const token = localStorage.getItem("token");
      this.cart.productID = id;
      this.cart.quantity = this.quantity;
      CartService.addToCart(this.cart, token)
        .then((response) => {
          console.log(response.data);
          alert("Add to Cart success");
        })
        .catch((error) => {
          console.error("Error adding to cart:", error, this.cart, token);
        });
    },
  },
  created() {
    this.getProductById();
  },
};
</script>

<style></style>
