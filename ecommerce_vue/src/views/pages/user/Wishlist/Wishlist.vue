<template>
  <Header />
  <Section />
  <section class="featured spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>Favorite Product</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row featured__filter">
          <div
            v-for="wishlist in Wishlist"
            :key="wishlist.id"
            class="col-lg-3 col-md-4 col-sm-6 mix"
          >
            <div class="featured__item">
              <div
                class="featured__item__pic set-bg"
                :style="{
                  'background-image': 'url(' + wishlist.pictures + ')',
                  'background-size': 'cover',
                  width: '200px',
                  height: '150px',
                }"
              >
              <ul class="featured__item__pic__hover">
                    <li>
                      <a href="#" @click="addCart(wishlist.id)">
                        <i class="fa fa-shopping-cart">
                        </i></a>
                    </li>
                    <li>
                      <a href="#" @click="deleteWishlist(wishlist.id)">
                        <i class="fa fa-trash">
                        </i></a>
                    </li>
                  </ul>
            </div>

              <div class="featured__item__text">
                <h6>
                  <a>{{ wishlist.product_name }}</a>
                </h6>
                <h5>{{ formatPrice(wishlist.price) }}</h5>
              </div>
            </div>
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
import WishlistService from "@/services/WishlistService";
import CartService from "@/services/CartService";

export default {
  name: "Wishlist",
  components: {
    Footer,
    Section,
    Header,
  },
  data() {
    return {
      Wishlist:[],
      cart: {
        productID: "",
        quantity: 1,
      },
    };
  },
  methods: {
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
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
    deleteWishlist(id){
      const token = localStorage.getItem("token");
      WishlistService.DeleteWishlist(token,id).then((response)=>{
        this.getWishlist();
        console.log("Success",response.data);
      })
      .catch((error) => {
          console.error("Error deleteWishlist:", error);
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
  created(){
    this.getWishlist();
  }
};
</script>

<style></style>
