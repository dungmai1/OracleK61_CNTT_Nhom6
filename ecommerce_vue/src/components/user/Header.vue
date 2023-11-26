<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="header__top__left">
              <ul>
                <li>
                  <i class="fa fa-envelope"></i
                  >ecommercesellphone@st.utc2.edu.vn
                </li>
                <li>Free Shipping for all Order</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="header__top__right">
              <div class="header__top__right__social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-linkedin"></i></a>
                <a href="#"><i class="fa fa-pinterest-p"></i></a>
              </div>
              <div class="header__top__right__language">
                <img src="/assets/img/language.png" alt="" />
                <div>English</div>
                <span class="arrow_carrot-down"></span>
                <ul>
                  <li><a href="#">Spanis</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </div>
              <span> <i class="fa fa-user"></i> {{  userName }}</span>
              <a href="/login" @click="logout"> Logout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="header__logo">
            <router-link to="/dashboard">
              <img src="/assets/img/logo.png" alt=""
            /></router-link>
          </div>
        </div>
        <div class="col-lg-6">
          <nav class="header__menu">
            <ul>
              <li class="active">
                <router-link to="/dashboard">Home</router-link>
              </li>
              <li><router-link to="/shop_grid">Shop</router-link></li>
              <li>
                <a href="#">Pages</a>
                <ul class="header__menu__dropdown">
                  <li><a href="/wishlist">Favorites Product</a></li>
                  <li><a href="/cart">Shoping Cart</a></li>
                </ul>
              </li>
              <li><a href="#">Blog</a></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </nav>
        </div>
        <div class="col-lg-3">
          <div class="header__cart">
            <ul>
              <li>
                <a href="/wishlist"
                  ><i class="fa fa-heart"></i>
                  <span>{{ Wishlist.length }}</span></a
                >
              </li>
              <li>
                <a href="/cart"
                  ><i class="fa fa-shopping-bag"></i>
                  <span>{{ Cart.cartItemDTOList.length }}</span></a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="humberger__open">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </header>
</template>

<script>
import CartService from "@/services/CartService";
import WishlistService from "@/services/WishlistService";
import { jwtDecode } from "jwt-decode";

export default {
  name: "Header",
  data() {
    return {
      Cart: {
        cartItemDTOList: [],
        totalCost: "",
      },
      Wishlist: [],
      isLoggedIn: false,
      userName: "",
    };
  },
  methods: {
    getCart() {
      const token = localStorage.getItem("token");
      CartService.getAllCart(token)
        .then((response) => {
          this.Cart = response.data;
        })
        .catch((error) => {
          console.error("Error getAllCart:", error);
        });
    },
    getWishlist() {
      const token = localStorage.getItem("token");
      WishlistService.getWishlist(token)
        .then((response) => {
          this.Wishlist = response.data;
        })
        .catch((error) => {
          console.error("Error getWishlist:", error);
        });
    },
    checkUserRole() {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        this.userName = decodedToken.sub;
      }
    },
    logout() {
      if (
        confirm(
          "Are you sure log out?"
        )
      ) {
        localStorage.removeItem("token");
        this.$router.push("/login");
      }
    },
  },
  mounted() {
    this.checkUserRole();
  },
  created() {
    this.getCart();
    this.getWishlist();
  },
};
</script>

<style></style>
