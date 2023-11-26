<template>
  <Header />
  <Section />
  <section class="shoping-cart spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="shoping__cart__table">
            <table>
              <thead>
                <tr>
                  <th class="shoping__product">Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="cart in Cart.cartItemDTOList" :key="cart.id">
                  <td class="shoping__cart__item">
                    <img
                      :src="cart.product.pictures"
                      alt=""
                      style="width: 150px; height: 100px"
                    />
                    <h5>{{ cart.product.product_name }}</h5>
                  </td>
                  <td class="shoping__cart__price">{{ formatPrice(cart.product.price) }}</td>
                  <td class="shoping__cart__quantity">
                    <div class="quantity">
                      <div class="pro-qty">
                        <span
                          class="dec qtybtn"
                          v-if="cart.quantity > 1"
                          @click="decreaseQuantity(cart.product.id)"
                          >-</span
                        >
                        <input type="text" :value="cart.quantity" />
                        <span
                          class="inc qtybtn"
                          @click="increaseQuantity(cart.product.id)"
                          >+</span
                        >
                      </div>
                    </div>
                  </td>
                  <td class="shoping__cart__total">
                    {{ formatPrice(cart.quantity * cart.product.price) }}
                  </td>
                  <td class="shoping__cart__item__close">
                    <span
                      class="icon_close"
                      @click="deleteCart(cart.id)"
                    ></span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="shoping__checkout">
            <h5>Cart Total</h5>
            <ul>
              <li>
                Subtotal <span>{{ formatPrice(Cart.totalCost) }}</span>
              </li>
              <li>
                Total <span>{{ formatPrice(Cart.totalCost) }}</span>
              </li>
            </ul>
            <a href="/checkout" class="primary-btn">PROCEED TO CHECKOUT</a>
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
import CartService from "@/services/CartService";
export default {
  name: "Cart",
  components: {
    Footer,
    Header,
    Section,
  },
  data() {
    return {
      Cart: {
        cartItemDTOList: [],
        totalCost: "",
      },
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
    deleteCart(id) {
      const token = localStorage.getItem("token");
      CartService.delete(id, token)
        .then((response) => {
          console.log("Delete Success:", response.data);
          this.getCart();
        })
        .catch((error) => {
          console.error("Error Delete:", error);
        });
    },
    decreaseQuantity(id) {
      const token = localStorage.getItem("token");
      CartService.DecreaseQuantity(id, token).then((response) => {
        console.log("Success" + response.data);
        this.getCart();
      });
    },
    increaseQuantity(id) {
      const token = localStorage.getItem("token");
      CartService.IncreaseQuantity(id, token).then((response) => {
        console.log("Success" + response.data);
        this.getCart();
      });
    },
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style></style>
