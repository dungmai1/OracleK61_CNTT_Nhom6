<template>
  <section class="hero">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="hero__categories">
            <div class="hero__categories__all">
              <i class="fa fa-bars"></i>
              <span>All Categories</span>
            </div>
            <ul style="height: 470px;">
              <li v-for="categories in CategoryList" :key="categories.id" >
                <a href="#">{{ categories.category_name }}</a>
            </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="hero__search">
            <div class="hero__search__form">
              <form action="#">
                <input type="text" placeholder="Search product name" v-model="name" />
                <router-link :to="`/search/${name}`" type="submit" class="site-btn">SEARCH</router-link>
              </form>
            </div>
            <div class="hero__search__phone">
              <div class="hero__search__phone__icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="hero__search__phone__text">
                <h5>+65 11.188.888</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
          <div>
            <div
              id="carouselExample"
              class="carousel slide"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div
                  v-for="(item, index) in carouselItems"
                  :key="index"
                  :class="{ 'carousel-item': true, active: index === 0 }"
                >
                  <div
                    class="hero__item set-bg"
                    :style="{
                      'background-image': 'url(' + item.imageUrl + ')',
                    }"
                  ></div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExample"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExample"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CategoryService from "@/services/admin/CategoryService";
import ProductService from "@/services/admin/ProductService";

export default {
  name: "Section_Hero",
  data() {
    return {
      carouselItems: [
        {
          imageUrl:
            "https://cdn-v2.didongviet.vn/files/banners/2023/10/24/1/1700792986373_main_bf_824x400.jpg",
        },
        {
          imageUrl:
            "https://cdn-v2.didongviet.vn/files/banners/2023/10/23/1/1700723098254_824x400_02.jpg",
        },
        {
          imageUrl:
            "https://cdn-v2.didongviet.vn/files/banners/2023/10/22/1/1700669802461_15promax_18.jpg",
        },
        {
          imageUrl:
            "https://cdn-v2.didongviet.vn/files/banners/2023/10/23/1/1700723051291_824x400_04.jpg",
        },
        {
          imageUrl:
            "https://cdn-v2.didongviet.vn/files/banners/2023/10/23/1/1700724281889_824x400_06.jpg",
        },
        {
          imageUrl:
            "https://cdn-v2.didongviet.vn/files/banners/2023/10/25/1/1700899247310_824x400_11.jpg",
        },
        // Add more items as needed
      ],
      CategoryList: [],
      name:"",
    };
  },
  methods: {
    getCategory() {
      CategoryService.getCategory()
        .then((response) => {
          this.CategoryList = response.data;
        })
        .catch((error) => {
          console.error("Error fetching categories:", error);
        });
    },
  },
  created() {
    this.getCategory();
  },
};
</script>

<style></style>
