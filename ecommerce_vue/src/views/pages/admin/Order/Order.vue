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
              <div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Order Date</th>
                      <th scope="col">Total</th>
                      <th scope="col">Payment Method</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Address</th>
                      <th scope="col">View Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="order,index in sortedOrderList" :key="order.id">
                      <td>{{ index+1 }}</td>
                      <td>{{ formatOrderDate(order.order_date) }}</td>
                      <td>{{ formatPrice(order.order_total) }}</td>
                      <td>{{ order.payment_Method }}</td>
                      <td>{{ order.customer.name }}</td>
                      <td>{{ order.customer.phone }}</td>
                      <td>{{ order.address }}</td>
                      <td>
                        <router-link
                        class="btn btn-primary"
                        :to="`/admin/order/details/${order.id}`"
                      >
                        View Details
                      </router-link>                      </td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <Footer/>
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
import OrderService from "@/services/admin/OrderService";
import moment from 'moment';

export default {
  name: "Order",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      OrderList: [],
    };
  },
  methods: {
    getOrder() {
      const token = localStorage.getItem("token");

      OrderService.getOrder(token).then((reponse) => {
        this.OrderList = reponse.data;
      });
    },
    formatOrderDate(date) {
      return moment(date).format('DD/MM/YYYY HH:mm:ss');
    },
    formatPrice(number) {
      return number.toLocaleString('en-US', { maximumFractionDigits: 2 });
    },
  },
  created() {
    this.getOrder();
  },
  computed: {
    sortedOrderList() {
      return [...this.OrderList].sort((a, b) => a.id - b.id);
    },
  },
};
</script>
