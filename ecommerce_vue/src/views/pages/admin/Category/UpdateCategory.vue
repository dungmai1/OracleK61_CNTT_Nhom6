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
            <form @submit.prevent="updateCategory">
              <input type="hidden" class="form-control" id="" name="categoryId" v-model="CategoryList.id">
              <!-- Category Name -->
              <div class="mb-3">
                <label for="categoryName" class="form-label"
                  >Category Name</label
                >
                <input
                  v-model="CategoryList.category_name"
                  type="text"
                  class="form-control"
                  id="categoryName"
                />
              </div>
              <!-- Other product-related form fields go here -->
              <!-- Submit Button -->
              <button type="submit" class="btn btn-primary" onclick="return confirm('Save Changes?')">Submit</button>
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
import { CAMELIZE } from "@vue/compiler-core";

export default {
  name: "Category",
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
    Bottom,
  },
  data() {
    return {
      CategoryList:{
        id:'',
        category_name:''
      }
    };
  },
  methods: {
    getCategory() {
      CategoryService.getCategoryById(this.$route.params.id).then((reponse) => {
        this.CategoryList = reponse.data;
      });
    },
    updateCategory(){
      const token = localStorage.getItem("token");
      CategoryService.updateCategory(this.CategoryList,token)
      .then(response => {
          console.log('Category updated successfully:', response.data);
          this.$router.push('/admin/category');
        })
        .catch(error => {
          console.error('Error adding category:', error);
        });
    }
  },
  created() {
    this.getCategory();
  },

};
</script>
