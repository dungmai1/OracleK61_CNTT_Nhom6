<template>
  <body class="background">
    <div class="container">
      <!-- Outer Row -->
      <div class="row justify-content-center">
        <div class="col-xl-10 col-lg-12 col-md-9">
          <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
              <!-- Nested Row within Card Body -->
              <div class="row">
                <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form class="user">
                      <div class="form-group">
                        <input
                          type="number"
                          class="form-control form-control-user"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Phone Number...."
                          v-model="login.phone"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="password"
                          class="form-control form-control-user"
                          id="exampleInputPassword"
                          placeholder="Password"
                          v-model="login.password"
                        />
                      </div>
                      <div class="form-group">
                        <div class="custom-control custom-checkbox small">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="customCheck"
                          />
                          <label class="custom-control-label" for="customCheck"
                            >Remember Me</label
                          >
                        </div>
                      </div>
                      <a
                        @click="submit()"
                        class="btn btn-primary btn-user btn-block"
                      >
                        Login
                      </a>
                      <hr />
                      <a
                        href="index.html"
                        class="btn btn-google btn-user btn-block"
                      >
                        <i class="fab fa-google fa-fw"></i> Login with Google
                      </a>
                      <a
                        href="index.html"
                        class="btn btn-facebook btn-user btn-block"
                      >
                        <i class="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </a>
                    </form>
                    <hr />
                    <div class="text-center">
                      <a class="small" href="forgot-password.html"
                        >Forgot Password?</a
                      >
                    </div>
                    <div class="text-center">
                      <a class="small" href="register.html"
                        >Create an Account!</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import LoginRegisterService from "@/services/LoginRegisterService";
import { jwtDecode } from "jwt-decode";

export default {
  name: "login",
  data() {
    return {
      login: {
        phone: "",
        password: "",
      },
      token: "",
    };
  },
  methods: {
    submit() {
      LoginRegisterService.login(this.login)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.checkUserRole();
        })
        .catch((error) => {
          console.error("Login Fail:", error);
        });
    },
    checkUserRole() {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtDecode(token);
        if (decodedToken.role.includes("ROLE_ADMIN")) {
          this.$router.push("/admin")
          console.log("ROLE_ADMIN");
        } else {
          this.$router.push("/dashboard")
          console.log("ROLE_USER");
        }
      }
    },
  },
};
</script>
<style>
/* fallback for old browsers */
.background {
  background-color: #4e73df;
}
.btn-google {
  color: #fff;
  background-color: #ea4335;
  border-color: #fff;
}
.btn-facebook {
  color: #fff;
  background-color: #3b5998;
  border-color: #fff;
}
a {
  color: #4e73df;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #ea4335;
}
</style>
