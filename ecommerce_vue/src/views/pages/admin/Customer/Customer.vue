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
                      <th scope="col">Customer Name</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Email</th>
                      <th scope="col">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="customer,index in sortedCustomerList" :key="customer.id">
                      <td>{{ index+1 }}</td>
                      <td>{{ customer.name }}</td>
                      <td>{{ customer.phone }}</td>
                      <td>{{ customer.email }}</td>
                      <td>{{ maskPassword(customer.password)  }}</td>
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
import CustomerService from "@/services/admin/CustomerService";

export default {
  name: "Customer",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      CustomerList: [],
    };
  },
  methods: {
    getCustomer() {
      const token = localStorage.getItem("token");
      CustomerService.getCustomer(token).then((reponse) => {
        this.CustomerList = reponse.data;
      });
    },
    maskPassword(password) {
    return password.replace(/./g, '*');
  }
  },
  created() {
    this.getCustomer();
  },
  computed: {
    sortedCustomerList() {
      return [...this.CustomerList].sort((a, b) => a.id - b.id);
    },
  },
};
</script>
