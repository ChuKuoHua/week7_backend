(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bff15"],{4058:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}},[i("i",{staticClass:"loading-box"})]),i("Navbar"),i("div",[i("Sidebar"),t.checkSuccess?i("router-view",{attrs:{token:t.token}}):t._e()],1)],1)},a=[],s=(i("ac1f"),i("5319"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"navbar navbar-fixed-top fixed-top d-flex justify-content-between"},[i("div",{staticClass:"back-logo"},[i("router-link",{attrs:{to:"/"}},[t._v("logo")])],1),i("div",{staticClass:"back-menu"},[i("a",{staticClass:"ml-3 ani",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signout(e)}}},[i("span",{staticClass:"sign-span"},[t._v("登出")]),i("font-awesome-icon",{staticClass:"opt-signout-icon",attrs:{icon:["fa","sign-out-alt"],size:"lg"}})],1)])])}),o=[],c={methods:{signout:function(){document.cookie="hexToken=; expires=; path=/",this.$router.push("/login")}}},r=c,u=i("2877"),d=Object(u["a"])(r,s,o,!1,null,null,null),l=d.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[i("div",{staticClass:"mt-3"},[i("h6",{staticClass:"sidebar-tit"},[t._v("管理員")]),i("ul",{staticClass:"sidebar-menu"},t._l(t.sidebarList,(function(e){return i("li",{key:e.id,attrs:{to:e.router},on:{click:function(i){return t.addActive(e.id)}}},[i("router-link",{class:{active:t.active===e.id},attrs:{to:e.router}},[i("font-awesome-icon",{attrs:{icon:["fa",""+e.icon]}}),t._v(" "+t._s(e.name)+" ")],1)],1)})),0)])])])},f=[],v={data:function(){return{active:"",sidebarList:[{id:1,name:"產品列表",router:"/admin/products",icon:"boxes"},{id:2,name:"訂單列表",router:"/admin/orders",icon:"stream"},{id:3,name:"優惠券",router:"/admin/coupons",icon:"percent"},{id:4,name:"圖片儲存列表",router:"/admin/storages",icon:"images"}]}},methods:{addActive:function(t){this.active=t}}},m=v,p=Object(u["a"])(m,h,f,!1,null,null,null),k=p.exports,b={name:"BackDashboard",components:{Navbar:l,Sidebar:k},data:function(){return{token:"",isLoading:!1,checkSuccess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this;this.isLoading=!0,this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token);var e="".concat("https://course-ec-api.hexschool.io/api","/auth/check");this.$http.post(e,{api_token:this.token}).then((function(e){e.data.success&&(t.isLoading=!1,t.checkSuccess=!0)})).catch((function(){t.isLoading=!1,t.$router.push("/login")}))}}},g=b,_=Object(u["a"])(g,n,a,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0bff15.89cec04a.js.map