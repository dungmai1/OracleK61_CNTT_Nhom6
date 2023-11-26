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
                    <th scope="col">Provider Name</th>
                    <th scope="col">Provider Address</th>
                    <th scope="col">Provider Phone</th>
                    <th scope="col">Provider Email</th>
                    <th scope="col">Provider Website</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="provider,index in sortedProviderList" :key="provider.id">
                    <td>{{ index+1 }}</td>
                    <td>{{ provider.provider_name }}</td>
                    <td>{{ provider.provider_address }}</td>
                    <td>{{ provider.provider_phone }}</td>
                    <td>{{ provider.provider_email }}</td>
                    <td>{{ provider.provider_website }}</td>
                    <td>
                      <router-link
                        class="collapse-item btn btn-primary"
                        :to="`/admin/provider/update/${provider.id}`"
                      >
                        Edit
                      </router-link>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="deleteProvider(provider.id)"
                      >
                        Delete
                      </button>
                    </td>
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
import ProviderService from "@/services/admin/ProviderService";
export default {
  name: "Provider",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      ProviderList: [],
    };
  },
  methods: {
    getProvider() {
      ProviderService.getProvider().then((reponse) => {
        this.ProviderList = reponse.data;
      });
    },
    deleteProvider(id) {
      const token = localStorage.getItem("token");
      if (confirm("Are you sure?")) {
        ProviderService.deleteProvider(id,token)
          .then((response) => {
            console.log("Delete provider success", response.data);
            this.successMessage = "Provider deleted successfully";
            this.getProvider();
          })
          .catch((error) => {
            console.error("Delete fail:", error);
          });
      }
    },
  },
  created() {
    this.getProvider();
  },
  computed: {
    sortedProviderList() {
      return [...this.ProviderList].sort((a, b) => a.id - b.id);
    },
  },

};
</script>
