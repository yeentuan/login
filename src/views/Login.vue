<template>
  <div id="Login">
    <form>
         <img src="https://4.bp.blogspot.com/-0tHuNzlHuxg/XW2E6BiIpkI/AAAAAAAA6Yc/mx89fbEe8asCcy9rLCOH_OB5Yy1ejaV6gCK4BGAYYCw/s1600/bf7d6ee0-469e-4a5e-812b-395ac0b32f27-727644.JPG" />
      <h1>Login </h1>
      <br />
      <div class="container">
        <div class="mb-3">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Email </label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter email"
                v-model="email"
                required
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4">
              <label class="form-label">Password </label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter password"
                v-model="password"
                required
              />
            </div>
          </div>
        </div>

        <b-button variant="outline-primary" @click="login">Login</b-button>
      </div>
    </form>

    <p>
      Don’t have an account? 
      <router-link to="/Signup">Sign Up</router-link><br>
      Exam Email :tuanzy@gmail.com
      Exam Password : 111111
    </p>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          () => {
            alert("Login Completed");
            this.$router.replace('/about');
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style>
form {
  margin-top: 10%;
}
p {
  padding-top: 10px;
  color: gray;
  font-size: 14px;
}
</style>