<template>
  <Header />
  <Section />
  <section class="checkout spad">
    <div class="container">
      <div class="checkout__form">
        <h4>Billing Details</h4>
        <form action="#">
          <div class="row">
            <div class="col-lg-8 col-md-6">
              <div class="checkout__input">
                <p>Province<span>*</span></p>
                <select v-model="ProvinceCode" @change="onProvinceChange">
                  <option disable value="">Chọn</option>
                  <option
                    v-for="province in Province"
                    :key="province.code"
                    :value="province"
                  >
                    {{ province.name }}
                  </option>
                </select>
              </div>
              <div class="checkout__input">
                <p>District<span>*</span></p>
                <select
                  id="district"
                  v-model="DistrictCode"
                  @change="onDistrictChange"
                >
                  <option disable value="">Chọn</option>
                  <option
                    v-for="district in District.districts"
                    :key="district.code"
                    :value="district"
                  >
                    {{ district.name }}
                  </option>
                </select>
              </div>
              <div class="checkout__input">
                <p>Ward<span>*</span></p>
                <select id="ward" v-model="WardCode" @change="onWardChange">
                  <option disable value="">Chọn</option>
                  <option
                    v-for="ward in Ward.wards"
                    :key="ward.code"
                    :value="ward"
                  >
                    {{ ward.name }}
                  </option>
                </select>
              </div>
              <div class="checkout__input">
                <p>Address<span>*</span></p>
                <input v-model="address" type="text" />
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="checkout__order">
                <h4>Your Order</h4>
                <div class="checkout__order__products">
                  Products <span>Total</span>
                </div>
                <ul v-for="cart in Cart.cartItemDTOList" :key="cart.id">
                  <li>
                    {{ cart.product.product_name
                    }}<span> {{ formatPrice(cart.product.price) }}</span>
                  </li>
                </ul>
                <div class="checkout__order__subtotal">
                  Subtotal <span>{{ formatPrice(Cart.totalCost) }}</span>
                </div>
                <div class="checkout__order__total">
                  Total <span>{{ formatPrice(Cart.totalCost) }}</span>
                </div>
                <p>Payment Method:</p>
                <div class="checkout__input__radio">
                  <input
                    type="radio"
                    id="payment_momo"
                    name="payment_method"
                    value="Momo"
                    checked
                    v-model="PaymentMethod"
                  />
                  <label for="payment_momo">Momo</label>
                </div>

                <div class="checkout__input__radio">
                  <input
                    type="radio"
                    id="payment_cod"
                    name="payment_method"
                    value="Payment on Delivery"
                    v-model="PaymentMethod"
                  />
                  <label for="payment_cod">Payment on Delivery</label>
                </div>
                <button type="submit" class="site-btn" @click="createOrder()">
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </form>
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
import ApiAddress from "@/services/ApiAddress";
import CheckoutService from "@/services/CheckoutService";

export default {
  name: "Checkout",
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
      Province: [],
      ProvinceCode: "",
      District: [],
      DistrictCode: "",
      Ward: [],
      WardCode: "",
      Address: "",
      PaymentMethod: "",
      address: "",
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
    getProvince() {
      ApiAddress.getProvince().then((response) => {
        this.Province = response.data;
        if (this.Province.length > 0) {
          this.ProvinceCode = this.Province[0];
          this.getDistrict();
        }
      });
    },
    getDistrict() {
      ApiAddress.getDistrict(this.ProvinceCode.code).then((response) => {
        this.District = response.data;
        if (this.District.length > 0) {
          this.DistrictCode = this.District[0];
          this.getWard();
        }
      });
    },
    getWard() {
      ApiAddress.getWard(this.DistrictCode.code).then((response) => {
        this.Ward = response.data;
        if (this.Ward.length > 0) {
          this.WardCode = this.Ward[0];
        }
      });
    },
    onProvinceChange() {
      this.getDistrict();
    },
    onDistrictChange() {
      this.getWard();
    },
    createOrder() {
      this.Address =
        this.ProvinceCode.name +
        this.DistrictCode.name +
        this.WardCode.name +
        this.address;
      const token = localStorage.getItem("token");
      CheckoutService.createOrder(
        this.PaymentMethod,
        this.Address,
        token,
        this.Cart
      )
        .then((response) => {
          console.log("Order Sucess" + response.data);
        })
        .catch((error) => {
          console.error("Error createOrder:", error);
        });
    },
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
  },
  created() {
    this.getCart();
  },
  mounted() {
    this.getProvince();
  },
};
</script>

<style></style>
