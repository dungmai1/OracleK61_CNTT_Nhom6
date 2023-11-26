<template>
  <ul
    class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <!-- Sidebar - Brand -->
    <a
      class="sidebar-brand d-flex align-items-center justify-content-center"
      href="/admin"
    >
      <div class="sidebar-brand-icon rotate-n-15">
        <i class="fas fa-laugh-wink"></i>
      </div>
      <div class="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <a class="nav-link" href="/admin">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a
      >
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Interface</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="/product/"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Product</span>
      </a>
      <div
        id="collapseTwo"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/admin/product"
            >Products List</router-link
          >
          <router-link class="collapse-item" to="/admin/product/addproduct"
            >Add Product</router-link
          >
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo1"
        aria-expanded="true"
        aria-controls="collapseTwo1"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Category</span>
      </a>
      <div
        id="collapseTwo1"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/admin/category"
            >Categorys List</router-link
          >
          <router-link class="collapse-item" to="/admin/category/addcategory"
            >Add Category</router-link
          >
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo2"
        aria-expanded="true"
        aria-controls="collapseTwo2"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Customer</span>
      </a>
      <div
        id="collapseTwo2"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/admin/customer"
            >Customers List</router-link
          >
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo3"
        aria-expanded="true"
        aria-controls="collapseTwo3"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Order</span>
      </a>
      <div
        id="collapseTwo3"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/admin/order"
            >Orders List</router-link
          >
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo4"
        aria-expanded="true"
        aria-controls="collapseTwo3"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Provider</span>
      </a>
      <div
        id="collapseTwo4"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/admin/provider"
            >Providers List</router-link
          >
          <router-link class="collapse-item" to="/admin/provider/addprovider"
            >Add Provider</router-link
          >
        </div>
      </div>
    </li>
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo5"
        aria-expanded="true"
        aria-controls="collapseTwo3"
      >
        <i class="fas fa-fw fa-cog"></i>
        <span>Featured Products</span>
      </a>
      <div
        id="collapseTwo5"
        class="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link class="collapse-item" to="/admin/featured"
            >Featured Products List</router-link
          >
        </div>
      </div>
    </li>

    <!-- Nav Item - Utilities Collapse Menu -->

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Heading -->
    <div class="sidebar-heading">Admin</div>

    <!-- Nav Item - Pages Collapse Menu -->
    <li class="nav-item">
      <a
        class="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePages"
        aria-expanded="true"
        aria-controls="collapsePages"
        @click="logout()"
      >
        <i class="fas fa-fw fa-folder"></i>
        <span>Logout</span>
      </a>
    </li>

    <!-- Nav Item - Charts -->

    <!-- Nav Item - Tables -->

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

    <!-- Sidebar Message -->
    <div class="sidebar-card d-none d-lg-flex">
      <img
        class="sidebar-card-illustration mb-2"
        src="/frontend/img/undraw_rocket.svg"
        alt="..."
      />
      <p class="text-center mb-2">
        <strong>SB Admin Pro</strong> is packed with premium features,
        components, and more!
      </p>
      <a
        class="btn btn-success btn-sm"
        href="https://startbootstrap.com/theme/sb-admin-pro"
        >Upgrade to Pro!</a
      >
    </div>
  </ul>
</template>

<script>
export default {
  methods: {
    logout() {
      if (
        confirm(
          "Are you sure log out?"
        )
      ) {
        localStorage.removeItem("token");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style></style>
