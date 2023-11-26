<template>
<body class="bg-gradient-primary">

<div class="container">

    <div class="card o-hidden border-0 shadow-lg my-5">
        <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
                <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                <div class="col-lg-7">
                    <div class="p-5">
                        <div class="text-center">
                            <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                        </div>
                        <form class="user">
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="text" class="form-control form-control-user" id="exampleFirstName"
                                        placeholder="Name" v-model="register.name">
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control form-control-user" id="exampleLastName"
                                        placeholder="Email Address" v-model="register.email">
                                </div>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control form-control-user" id="exampleInputEmail"
                                    placeholder="Phone Number"  v-model="register.phone">
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-6 mb-3 mb-sm-0">
                                    <input type="password" class="form-control form-control-user"
                                        id="exampleInputPassword" placeholder="Password"  v-model="register.password">
                                </div>
                            </div>
                            <a @click="submit()" class="btn btn-primary btn-user btn-block">
                                Register Account
                            </a>
                            <hr>
                        </form>
                        <hr>
                        <div class="text-center">
                            <a class="small" href="/login">Already have an account? Login!</a>
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

export default {
    name:"register",
    data() {
    return {
      register: {
        phone: "",
        password: "",
        email:"",
        name:"",
      },
    };
  },
  methods: {
    submit() {
      LoginRegisterService.register(this.register)
        .then((response) => {
          console.log("Login Success",response.data);
          alert("Create Success")
          this.$router.push("/login")
        })
        .catch((error) => {
          console.error("Login Fail:", error);
          console.log(this.login);
        });
    },
  },
}
</script>

<style>

</style>