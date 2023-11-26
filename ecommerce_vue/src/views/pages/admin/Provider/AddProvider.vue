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
                <form @submit.prevent="addProvider">
                    <!-- Provider Name -->
                    <div class="mb-3">
                        <label for="providerName" class="form-label">Provider Name</label>
                        <input type="text" class="form-control" id="providerName" name="providerName" th:field="*{provider_name}" required v-model="provider.provider_name">
                    </div>

                    <!-- Provider Address -->
                    <div class="mb-3">
                        <label for="providerAddress" class="form-label">Provider Address</label>
                        <input type="text" class="form-control" id="providerAddress" name="providerAddress" th:field="*{provider_address}" required v-model="provider.provider_address">
                    </div>

                    <!-- Provider Phone -->
                    <div class="mb-3">
                        <label for="providerPhone" class="form-label">Provider Phone</label>
                        <input type="text" class="form-control" id="providerPhone" name="providerPhone" th:field="*{provider_phone}" required v-model="provider.provider_phone">
                    </div>

                    <!-- Provider Email -->
                    <div class="mb-3">
                        <label for="providerEmail" class="form-label">Provider Email</label>
                        <input type="text" class="form-control" id="providerEmail" name="providerEmail" th:field="*{provider_email}" required v-model="provider.provider_email">
                    </div>

                    <!-- Provider Website -->
                    <div class="mb-3">
                        <label for="providerWebsite" class="form-label">Provider Website</label>
                        <input type="text" class="form-control" id="providerWebsite" name="providerWebsite" th:field="*{provider_website}" required v-model="provider.provider_website">
                    </div>

                    <button type="submit" class="btn btn-primary" onclick="return confirm('Are you sure?')">Submit</button>
                </form>
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
  name: "AddProvider",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      provider: {
        id: '',
        provider_name: '',
        provider_email:'',
        provider_phone:'',
        provider_website:'',
        provider_address:'',
      },
    };
  },
  methods: {
    addProvider() {
      const token = localStorage.getItem("token");
      ProviderService.addProvider(this.provider,token)
        .then((response) => {
          console.log("Provider added successfully:", response.data);
          this.$router.push('/admin/provider');
        })
        .catch((error) => {
          console.error("Error adding provider:", error);
        });
    },
  },
};
</script>

  