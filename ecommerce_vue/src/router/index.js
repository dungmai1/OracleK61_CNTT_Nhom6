import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Product from "../views/pages/admin/Product/Product.vue";
import AddProduct from "../views/pages/admin/Product/AddProduct.vue";
import Category from "../views/pages/admin/Category/Category.vue";
import AddCategory from "../views/pages/admin/Category/AddCategory.vue";
import Provider from "../views/pages/admin/Provider/Provider.vue";
import AddProvider from "../views/pages/admin/Provider/AddProvider.vue";
import Customer from "../views/pages/admin/Customer/Customer.vue";
import Order from "../views/pages/admin/Order/Order.vue";
import OrderDetails from "../views/pages/admin/Order/OrderDetails.vue";
import Featured from "../views/pages/admin/Featured/Featured.vue";
import UpdateCategory from "../views/pages/admin/Category/UpdateCategory.vue";
import UpdateProvider from "../views/pages/admin/Provider/UpdateProvider.vue";
import UpdateProduct from "../views/pages/admin/Product/UpdateProduct.vue";
import DashBoard from "../views/pages/user/Dashboard/Dashboard.vue";
import login from "../views/login.vue";
import Shop_Grid from "../views/pages/user/Shop_Grid/Shop_Grid.vue";
import ProductDetails from "../views/pages/user/ProductDetails/ProductDetails.vue";
import Cart from "../views/pages/user/Cart/Cart.vue";
import Contact from "../views/pages/user/Contact/Contact.vue";
import register from "../views/register.vue";
import { jwtDecode } from "jwt-decode";
import Wishlist from "../views/pages/user/Wishlist/Wishlist.vue";
import Checkout from "../views/pages/user/Checkout/Checkout.vue";
import Search from "../views/pages/user/Search/Search.vue";

function hasToken() {
  return localStorage.token !== undefined && localStorage.token !== null;
}
function checkTokenExpiration(to, from, next) {
  if (hasToken()) {
    console.log("Token exists:", localStorage.token);
    try {
      const jwtPayload = jwtDecode(localStorage.token);
      console.log("Decoded Token:", jwtPayload);
      if (jwtPayload.exp * 1000 > Date.now()) {
        next();
      } else {
        localStorage.removeItem("token");
        next("/login");
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      next();
    }
  } else {
    next();
  }
}

function checkRole(to, from, next, role) {
  if (hasToken()) {
    const decodedToken = jwtDecode(localStorage.token);
    if (decodedToken.role.includes(role)) {
      next();
    } else {
      next("/login");
    }
  } else {
    next("/login");
  }
}

function checkRoleAdmin(to, from, next) {
  checkRole(to, from, next, "ROLE_ADMIN");
}

function checkRoleUser(to, from, next) {
  checkRole(to, from, next, "ROLE_USER");
}

function auth(to, from, next) {
  if (hasToken()) {
    const decodedToken = jwtDecode(localStorage.token);
    if (decodedToken.role.includes("ROLE_ADMIN")) {
      next("/admin");
    } else {
      next("/dashboard");
    }
  } else {
    next();
  }
}

const routes = [
  //register
  {
    path: "/register",
    name: "register",
    component: register,
  },
  //login
  {
    path: "/login",
    name: "login",
    component: login,
    beforeEnter: [auth],
  },
  //Admin
  {
    path: "/admin",
    name: "home",
    component: HomeView,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  //ShopGrid
  {
    path: "/shop_grid",
    name: "Shop_Grid",
    component: Shop_Grid,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //Dashboard
  {
    path: "/dashboard",
    name: "DashBoard",
    component: DashBoard,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //Checkout
  {
    path: "/checkout",
    name: "Checkout",
    component: Checkout,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //Wishlist
  {
    path: "/wishlist",
    name: "Wishlist",
    component: Wishlist,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //ProductDetails
  {
    path: "/product_details/:id",
    name: "ProductDetails",
    component: ProductDetails,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //Cart
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //Contact
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //Search
  {
    path: "/search/:name",
    name: "Search",
    component: Search,
    beforeEnter: [checkRoleUser, checkTokenExpiration],
  },
  //Product
  {
    path: "/admin/product",
    name: "Product",
    component: Product,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  {
    path: "/admin/product/addproduct",
    name: "AddProduct",
    component: AddProduct,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  {
    path: "/admin/product/update/:id",
    name: "UpdateProduct",
    component: UpdateProduct,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  //Cateogory
  {
    path: "/admin/category",
    name: "Category",
    component: Category,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  {
    path: "/admin/category/addcategory",
    name: "AddCategory",
    component: AddCategory,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  {
    path: "/admin/category/update/:id",
    name: "UpdateCategory",
    component: UpdateCategory,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  //Customer
  {
    path: "/admin/customer",
    name: "Customer",
    component: Customer,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  //Provider
  {
    path: "/admin/provider",
    name: "Provider",
    component: Provider,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  {
    path: "/admin/provider/addprovider",
    name: "AddProvider",
    component: AddProvider,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  {
    path: "/admin/provider/update/:id",
    name: "UpdateProvider",
    component: UpdateProvider,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  //Order
  {
    path: "/admin/order",
    name: "Order",
    component: Order,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  {
    path: "/admin/order/details/:id",
    name: "OrderDetails",
    component: OrderDetails,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
  //OutStanding Product List
  {
    path: "/admin/featured",
    name: "Featured",
    component: Featured,
    beforeEnter: [checkRoleAdmin, checkTokenExpiration],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
