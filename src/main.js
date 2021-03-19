import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from "firebase"

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
// Make BootstrapVue available throughout your project
Vue.config.productionTip = false;
Vue.use(BootstrapVue)

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAjzRezzpabYh0WTa2Zjq1ik0FM8M8FN7E",
    authDomain: "project444-47632.firebaseapp.com",
    projectId: "project444-47632",
    storageBucket: "project444-47632.appspot.com",
    messagingSenderId: "321765162258",
    appId: "1:321765162258:web:4e4036f4eaf89506cc07cb",
    measurementId: "G-JWGEKRY34E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");