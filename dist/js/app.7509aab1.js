(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div"),a("router-view")],1)},o=[],i=(a("034f"),a("2877")),s={},l=Object(i["a"])(s,n,o,!1,null,null,null),c=l.exports,u=a("8c4f"),p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("WELCOME")])])}],f={name:"About",components:{}},m=f,v=Object(i["a"])(m,p,d,!1,null,null,null),b=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"Login"}},[a("form",[a("img",{attrs:{src:"https://4.bp.blogspot.com/-0tHuNzlHuxg/XW2E6BiIpkI/AAAAAAAA6Yc/mx89fbEe8asCcy9rLCOH_OB5Yy1ejaV6gCK4BGAYYCw/s1600/bf7d6ee0-469e-4a5e-812b-395ac0b32f27-727644.JPG"}}),a("h1",[t._v("Login ")]),a("br"),a("div",{staticClass:"container"},[a("div",{staticClass:"mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"form-label"},[t._v("Email ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})])])]),a("div",{staticClass:"mb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"}),a("div",{staticClass:"col-md-4"},[a("label",{staticClass:"form-label"},[t._v("Password ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Enter password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])])]),a("b-button",{attrs:{variant:"outline-primary"},on:{click:t.login}},[t._v("Login")])],1)]),a("p",[t._v(" Don’t have an account? "),a("router-link",{attrs:{to:"/Signup"}},[t._v("Sign Up")]),a("br"),t._v(" Exam Email :tuanzy@gmail.com Exam Password : 111111 ")],1)])},g=[],w=(a("5319"),a("ac1f"),a("2591")),y={name:"login",data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;w["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(){alert("Login Completed"),t.$router.replace("/about")}),(function(t){alert(t)}))}}},_=y,C=(a("d6db"),Object(i["a"])(_,h,g,!1,null,null,null)),j=C.exports;r["default"].use(u["a"]);var E=[{path:"/",name:"Login",component:j},{path:"/about",name:"About",component:b}],O=new u["a"]({mode:"history",base:"/",routes:E}),x=O,A=a("5f5b");a("f9e3"),a("2dd8");r["default"].config.productionTip=!1,r["default"].use(A["a"]);var P={apiKey:"AIzaSyAjzRezzpabYh0WTa2Zjq1ik0FM8M8FN7E",authDomain:"project444-47632.firebaseapp.com",projectId:"project444-47632",storageBucket:"project444-47632.appspot.com",messagingSenderId:"321765162258",appId:"1:321765162258:web:4e4036f4eaf89506cc07cb",measurementId:"G-JWGEKRY34E"};w["a"].initializeApp(P),new r["default"]({router:x,render:function(t){return t(c)}}).$mount("#app")},"85ec":function(t,e,a){},d6db:function(t,e,a){"use strict";a("e67a")},e67a:function(t,e,a){}});
//# sourceMappingURL=app.7509aab1.js.map