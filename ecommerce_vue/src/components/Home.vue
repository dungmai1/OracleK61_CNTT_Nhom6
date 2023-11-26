<template>
  <body id="page-top">
    <!-- Page Wrapper -->
    <div id="wrapper">
      <SideBar />
      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <TopBar />
          <Content />
        </div>
        <Footer />
      </div>
      <!-- End of Content Wrapper -->
    </div>
    <!-- End of Page Wrapper -->
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
    <!-- Logout Modal-->
  </body>
</template>

<script>
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default {
  components: {
    SideBar,
    TopBar,
    Content,
    Footer,
  },
};
</script>

<style></style>
