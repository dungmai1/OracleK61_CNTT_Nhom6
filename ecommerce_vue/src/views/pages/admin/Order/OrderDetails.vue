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
                    <th scope="col">Pictures</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Product Total Money</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="orderdetails in OrderDetailsList" :key="orderdetails.id">
                    <td>{{ orderdetails.id }}</td>
                    <td>
                      <img
                            :src="orderdetails.product.pictures"
                            style="width: 150px"
                            alt="Product Image"
                          />                  </td>
                    <td>{{ orderdetails.product.product_name }}</td>
                    <td>{{ orderdetails.quantity }}</td>
                    <td>{{ formatPrice(orderdetails.product_total_money) }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Footer />
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
      OrderDetailsList: [],
    };
  },
  methods: {
    getDetails() {
      const token = localStorage.getItem("token");
      OrderService.getOrderDetails(this.$route.params.id, token).then((response) => {
        this.OrderDetailsList = response.data;
        console.log("DAta",response.data);
      });
    },
    formatPrice(number) {
      return number.toLocaleString('en-US', { maximumFractionDigits: 2 });
    },
  },
  created() {
    this.getDetails();
  },
};
</script>
