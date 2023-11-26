<template>
  <section class="hero hero-normal">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="hero__categories">
            <div class="hero__categories__all">
              <i class="fa fa-bars"></i>
              <span>All categories</span>
            </div>
            <ul>
            </ul>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="hero__search">
            <div class="hero__search__form">
              <form action="#">
                <input type="text"   placeholder="Search product name" v-model="name" />
                <router-link :to="`/search/${name}`" type="submit" class="site-btn">SEARCH</router-link>
              </form>
            </div>
            <div class="hero__search__phone">
              <div class="hero__search__phone__icon">
                <i class="fa fa-phone"></i>
              </div>
              <div class="hero__search__phone__text">
                <h5>+84 328.657.868</h5>
                <span>support 24/7 time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Hero Section End -->

  <!-- Breadcrumb Section Begin -->
  <section class="breadcrumb-section" :style="{ 'background-image': 'url(/assets/img/breadcrumb.jpg)' }">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <div class="breadcrumb__text">
            <h2>Ecommerce Sell Phone Shop</h2>
            <div class="breadcrumb__option">
              <a href="./index.html">Ecommerce Sell Phone</a>
              <span>Shop</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section",
  data() {
    return {
      name: ""
    }
  }
};
</script>

<style></style>
