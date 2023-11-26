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
            <form @submit.prevent="addCategory">
              <!-- Category Name -->
              <div class="mb-3">
                <label for="categoryName" class="form-label"
                  >Category Name</label
                >
                <input
                  v-model="category.category_name"
                  type="text"
                  class="form-control"
                  id="categoryName"
                />
              </div>
              <!-- Other product-related form fields go here -->
              <!-- Submit Button -->
              <button
                type="submit"
                class="btn btn-primary"
                onclick="return confirm('Are you sure?')"
              >
                Submit
              </button>
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
import CategoryService from "@/services/admin/CategoryService";
export default {
  name: "AddCategory",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      category: {
        id: "",
        category_name: "",
      },
    };
  },
  methods: {
    addCategory() {
      const token = localStorage.getItem("token");
      CategoryService.addCategory(this.category,token)
        .then((response) => {
          console.log("Category added successfully:", response.data);
          this.$router.push("/admin/category");
        })
        .catch((error) => {
          console.error("Error adding category:", error);
        });
    },
  },
};
</script>
