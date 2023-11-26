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
            <div v-if="successMessage" class="alert alert-success">
              {{ successMessage }}
            </div>
            <div>
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="m-0 font-weight-bold text-primary">
                    Category List
                  </h6>
                  <div v-if="successMessage" class="alert alert-success">
                    {{ successMessage }}
                  </div>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table
                      class="table table-bordered"
                      id="dataTable"
                      width="100%"
                      cellspacing="0"
                    >
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Category Name</th>
                          <th scope="col">Edit</th>
                          <th scope="col">Delete</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(category, index) in sortedCategoryList"
                          :key="category.id"
                          :sort="category.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ category.category_name }}</td>
                          <td>
                            <router-link
                              class="collapse-item btn btn-primary"
                              :to="`/admin/category/update/${category.id}`"
                            >
                              Edit
                            </router-link>
                          </td>
                          <td>
                            <button
                              class="btn btn-danger"
                              @click="deleteCategory(category.id)"
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
              <!-- <table class="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(category, index) in sortedCategoryList"
                    :key="category.id"
                    :sort="category.id"
                  >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ category.category_name }}</td>
                    <td>
                      <router-link
                        class="collapse-item btn btn-primary"
                        :to="`/admin/category/update/${category.id}`"
                      >
                        Edit
                      </router-link>
                    </td>
                    <td>
                      <button
                        class="btn btn-danger"
                        @click="deleteCategory(category.id)"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table> -->
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
      CategoryList: [],
    };
  },
  methods: {
    getCategory() {
      CategoryService.getCategory().then((reponse) => {
        this.CategoryList = reponse.data;
      });
    },
    deleteCategory(id) {
      if (
        confirm(
          "When deleting a category, all products in the category will be deleted. Are you sure?"
        )
      ) {
        const token = localStorage.getItem("token");
        CategoryService.deleteCategory(id, token)
          .then((response) => {
            console.log("Delete category success", response.data);
            this.successMessage = "Category deleted successfully";
            this.getCategory();
          })
          .catch((error) => {
            console.error("Delete fail:", error);
          });
      }
    },
  },
  created() {
    this.getCategory();
  },
  computed: {
    sortedCategoryList() {
      return [...this.CategoryList].sort((a, b) => a.id - b.id);
    },
  },
};
</script>
