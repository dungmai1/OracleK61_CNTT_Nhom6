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
                  <th>#</th>
                  <th class="shoping__product">Products</th>
                  <th class="shoping__product">Address</th>
                  <th>Payment Method</th>
                  <th>Total</th>
                  <th>View Details</th>
                </tr>
              </thead>
                <tbody>
                  <tr v-for="(order, index) in OrderList" :key="order.id">
                    <td class="shoping__cart__total">
                      <h5>{{ index + 1 }}</h5>
                    </td>
                    <td class="shoping__cart__item">
                      <h5>{{ formatOrderDate(order.order_date) }}</h5>
                    </td>
                    <td class="shoping__cart__item">
                      {{ formatPrice(order.address) }}
                    </td>
                    <td class="shoping__cart__price">
                      {{ order.payment_Method }}
                    </td>
                    <td class="shoping__cart__price">
                      {{ formatPrice(order.order_total) }}
                    </td>
                    <td class="shoping__cart__price">
                      <a href="#">View Details</a>
                    </td>
                  </tr>
                </tbody>
            </table>
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
import OrderService from "@/services/admin/OrderService";
import moment from 'moment';

export default {
  name: "OrderHistory",
  components: {
    Footer,
    Section,
    Header,
  },
  data() {
    return {
      OrderList: [],
    };
  },
  methods: {
    getOrder() {
      const token = localStorage.getItem("token");
      OrderService.getOrderByUser(token)
        .then((response) => {
          this.OrderList = response.data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
    formatPrice(number) {
      return number.toLocaleString("en-US", { maximumFractionDigits: 2 });
    },
    formatOrderDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm:ss');
    },
  },
  created() {
    this.getOrder();
  },
};
</script>

<style></style>
