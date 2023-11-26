<template>
  <body>
    <!-- Page Preloder -->

    <!-- Humberger Begin -->
    <div class="humberger__menu__overlay"></div>
    <div class="humberger__menu__wrapper">
      <div class="humberger__menu__logo">
        <a href="#"><img src="/assets/img/logo.png" alt="" /></a>
      </div>
      <div class="humberger__menu__cart">
        <ul>
          <li>
            <a href="#"><i class="fa fa-heart"></i> <span>1</span></a>
          </li>
          <li>
            <a href="#"><i class="fa fa-shopping-bag"></i> <span>3</span></a>
          </li>
        </ul>
        <div class="header__cart__price">item: <span>$150.00</span></div>
      </div>
      <div class="humberger__menu__widget">
        <div class="header__top__right__language">
          <img src="/assets/img/language.png" alt="" />
          <div>English</div>
          <span class="arrow_carrot-down"></span>
          <ul>
            <li><a href="#">Spanis</a></li>
            <li><a href="#">English</a></li>
          </ul>
        </div>
        <div class="header__top__right__auth">
          <a href="#"><i class="fa fa-user"></i> Login</a>
        </div>
      </div>
      <nav class="humberger__menu__nav mobile-menu">
        <ul>
          <li class="active"><a href="./index.html">Home</a></li>
          <li><a href="./shop-grid.html">Shop</a></li>
          <li>
            <a href="#">Pages</a>
            <ul class="header__menu__dropdown">
              <li><a href="./shop-details.html">Shop Details</a></li>
              <li><a href="./shoping-cart.html">Shoping Cart</a></li>
              <li><a href="./checkout.html">Check Out</a></li>
              <li><a href="./blog-details.html">Blog Details</a></li>
            </ul>
          </li>
          <li><a href="./blog.html">Blog</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap"></div>
      <div class="header__top__right__social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-pinterest-p"></i></a>
      </div>
      <div class="humberger__menu__contact">
        <ul>
          <li><i class="fa fa-envelope"></i> hello@colorlib.com</li>
          <li>Free Shipping for all Order of $99</li>
        </ul>
      </div>
    </div>
    <!-- Humberger End -->

    <!-- Header Section Begin -->
    <Header />
    <!-- Header Section End -->

    <!-- Hero Section Begin -->
    <!-- Hero Section End -->

    <!-- Categories Section Begin -->
    <Section_Hero />
    <!-- Categories Section End -->

    <!-- Featured Section Begin -->
    <section class="featured spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">
              <h2>Featured Product</h2>
            </div>
            <!-- <div class="featured__controls">
              <ul>
                <li class="active" data-filter="*" @click="getProduct()">
                  All
                </li>
                <li
                  v-for="category in CategoryList"
                  :key="category.id"
                  :data-filter="'.' + category.slug"
                  @click="getProductByCategoryId(category.id)"
                >
                  {{ category.category_name }}
                </li>
              </ul>
            </div> -->
          </div>
        </div>
        <div class="container">
          <div class="row featured__filter">
            <div
              v-for="featured in FeaturedList"
              :key="featured.id"
              class="col-lg-3 col-md-4 col-sm-6 mix"
            >
              <router-link :to="`/product_details/${featured.product.id}`">
                <div class="featured__item">
                  <div
                    class="featured__item__pic set-bg"
                    :style="{
                      'background-image':
                        'url(' + featured.product.pictures + ')',
                      'background-size': 'cover',
                      width: '200px',
                      height: '150px',
                    }"
                    :alt="featured.product.product_name"
                  >
                    <ul class="featured__item__pic__hover">
                      <li>
                        <a href="#" @click.stop="addWishlist(featured.product)">
                          <i class="fa fa-heart"></i
                        ></a>
                      </li>
                      <li>
                        <a href="#" @click.stop="addCart(featured.product.id)">
                          <i class="fa fa-shopping-cart"> </i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  <div class="featured__item__text">
                    <h6>
                      <a :href="featured.link">{{
                        featured.product.product_name
                      }}</a>
                    </h6>
                    <h5>{{ formatPrice(featured.product.price) }}</h5>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Featured Section End -->

    <!-- Banner Begin -->
    <div class="banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img
                style="width: 555px; height: 250px"
                src="https://au2-images.shop.samsung.com/medias/Banner-2000x600-3E-1-.jpg?context=bWFzdGVyfGltYWdlc3w1Nzg5NDd8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZ3pNeTlvWlRVdk9USTFNVGd6T0RnMU16RTFNQzVxY0djfDM0YjlmZjFmNTdlZWIyMjM0ODljMjU1MzkzOTI4ZGZjNDczMWY4YmQ4OTVhYTk5YzkwMmQ5NGY5NDUwODc1MDU"
                alt=""
              />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="banner__pic">
              <img
                style="width: 555px; height: 250px"
                src="https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-cool-new-mobile-phone-promotion-purple-banner-image_183067.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner End -->

    <!-- Latest Product Section Begin -->
    <section class="latest-product spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <h4>Latest Products</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
                <div class="latest-prdouct__slider__item">
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <h4>Top Rated Products</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
                <div class="latest-prdouct__slider__item">
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="latest-product__text">
              <h4>Review Products</h4>
              <div class="latest-product__slider owl-carousel">
                <div class="latest-prdouct__slider__item">
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
                <div class="latest-prdouct__slider__item">
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-1.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-2.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                  <a href="#" class="latest-product__item">
                    <div class="latest-product__item__pic">
                      <img src="/assets/img/latest-product/lp-3.jpg" alt="" />
                    </div>
                    <div class="latest-product__item__text">
                      <h6>Crab Pool Security</h6>
                      <span>$30.00</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Latest Product Section End -->

    <!-- Blog Section Begin -->
    <!-- Blog Section End -->

    <!-- Footer Section Begin -->
    <Footer />
    <!-- Footer Section End -->

    <!-- Js Plugins -->
  </body>
</template>

<script>
import Footer from "@/components/user/Footer";
import Header from "@/components/user/Header";
import Section from "@/components/user/Section";
import Section_Hero from "@/components/user/Section_Hero";

import ProductService from "@/services/admin/ProductService";
import CategoryService from "@/services/admin/CategoryService";
import FeaturedService from "@/services/admin/FeaturedService";
import WishlistService from "@/services/WishlistService";
import CartService from "@/services/CartService";

import { jwtDecode } from "jwt-decode";

export default {
  name: "Dashboard",
  components: {
    Footer,
    Header,
    Section,
    Section_Hero,
  },
  data() {
    return {
      ProductList: [],
      CategoryList: [],
      userRole: null,
      FeaturedList: [],
      imageurl:
        "https://cdn-v2.didongviet.vn/files/page/2023/9/1/0/1696136879292_iphone_15_pro_max.png",
      cart: {
        productID: "",
        quantity: 1,
      },
    };
  },
  methods: {
    // getProduct() {
    //   ProductService.getProduct()
    //     .then((response) => {
    //       this.ProductList = response.data;
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching products:", error);
    //     });
    // },
    getCategory() {
      CategoryService.getCategory()
        .then((response) => {
          this.CategoryList = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
    // getProductByCategoryId(id) {
    //   ProductService.getProductByCategoryID(id)
    //     .then((response) => {
    //       this.ProductList = response.data;
    //       console.error("List", this.ProductList);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching products by category:", error);
    //     });
    // },
    getFeaturedProduct() {
      FeaturedService.getFeaturedProduct().then((response) => {
        this.FeaturedList = response.data;
        console.log("fail,", this.FeaturedList);
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
          alert("Add to Favorites Product");
        })
        .catch((error) => {
          console.error("Error add to wishlist:", error);
        });
    },
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
  },
  created() {
    this.getCategory();
    this.getFeaturedProduct();
  },
};
$(document).ready(function () {
  $(".categories__slider").owlCarousel();
});
</script>

<style>
.featured__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.featured {
  padding-top: 50px;
}
.featured__item__pic {
  width: 200px;
  height: 150px;
  background-size: cover;
  background-position: center;
}
.categories__item {
  height: 270px;
  position: relative;
}
</style>
