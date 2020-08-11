(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e846793"],{1799:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("nav",{staticClass:"mb-3",attrs:{"aria-label":"Page navigation example"}},[e("ul",{staticClass:"pagination justify-content-center"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.changePage(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.changePage(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])])},s=[],n={name:"Pagination",props:{pages:{type:Object,required:!0}},methods:{changePage:function(t){this.$emit("changePage",t)}}},r=n,o=e("2877"),c=Object(o["a"])(r,i,s,!1,null,null,null);a["a"]=c.exports},faa6:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("i",{staticClass:"loading-box"})]),e("div",{staticClass:"col-md-10 ml-sm-auto px-4 mt"},[e("table",{staticClass:"table table-striped mt-5"},[t._m(0),t.orders.length?e("tbody",{staticClass:"flex text-left"},t._l(t.orders,(function(a,i){return e("tr",{key:i,class:{"text-secondary":!a.is_paid}},[e("td",[t._v(t._s(a.created.datetime))]),e("td",[e("ul",{staticClass:"list-unstyled"},t._l(a.products,(function(a,i){return e("li",{key:i},[t._v(" "+t._s(a.product.title)+" 數量："+t._s(a.quantity)+" "+t._s(a.product.unit)+" ")])})),0)]),e("td",[t._v(" "+t._s(a.payment)+" ")]),e("td",[t._v(" "+t._s(t._f("currency")(a.amount))+" ")]),e("td",{staticClass:"text-left"},[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.paid,expression:"item.paid"}],staticClass:"custom-control-input",attrs:{id:a.id,type:"checkbox"},domProps:{checked:Array.isArray(a.paid)?t._i(a.paid,null)>-1:a.paid},on:{change:[function(e){var i=a.paid,s=e.target,n=!!s.checked;if(Array.isArray(i)){var r=null,o=t._i(i,r);s.checked?o<0&&t.$set(a,"paid",i.concat([r])):o>-1&&t.$set(a,"paid",i.slice(0,o).concat(i.slice(o+1)))}else t.$set(a,"paid",n)},function(e){return t.setOrderPaid(a)}]}}),e("label",{staticClass:"custom-control-label",attrs:{for:a.id}},[a.paid?e("strong",{staticClass:"text-success",staticStyle:{"line-height":"23px"}},[t._v("已付款")]):e("span",{staticClass:"text-muted",staticStyle:{"line-height":"23px"}},[t._v("尚未付款")])])])]),e("td",[e("button",{staticClass:"btn btn-outline-primary btn-sm mr-1",on:{click:function(e){return e.preventDefault(),t.openModal(a)}}},[e("font-awesome-icon",{attrs:{icon:["fa","id-card"],size:"lg"}})],1)])])})),0):t._e()]),e("Pagination",{attrs:{pages:t.pagination},on:{changePage:t.getOrders}}),e("OrderModal",{ref:"orderModal"})],1)],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"ord-thead-col font-weight-bold"},[e("tr",{staticClass:"text-left"},[e("th",[t._v("下單時間")]),e("th",[t._v("購買款項")]),e("th",[t._v("付款方式")]),e("th",[t._v("應付金額")]),e("th",[t._v("是否付款")]),e("th",[t._v("客戶資料")])])])}],n=(e("99af"),e("1799")),r=e("eebb"),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("i",{staticClass:"loading-box"})]),e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}},[e("i",{staticClass:"loading-box"})]),e("div",{staticClass:"modal fade",attrs:{id:"orderModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-sm",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header modal-order-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(" 顧客資料 ")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[e("font-awesome-icon",{attrs:{icon:["fa","times"]}})],1)])]),e("div",{staticClass:"modal-bod modal-order-shadow"},[e("ul",{staticClass:"text-left py-3 px-3"},[e("li",{staticClass:"py-2"},[t._v("Email: "+t._s(t.order.user.email))]),e("li",{staticClass:"py-2"},[t._v("收件人姓名: "+t._s(t.order.user.name))]),e("li",{staticClass:"py-2"},[t._v("收件人電話: "+t._s(t.order.user.tel))]),e("li",{staticClass:"py-2"},[t._v("收件人地址: "+t._s(t.order.user.address))])])])])])])],1)],1)},c=[],d=e("1157"),l=e.n(d),u={data:function(){return{order:{user:{}},isLoading:!1,uuid:"c7010afc-c576-4a2b-9f0e-5a42977d6066"}},methods:{getOrder:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat(this.uuid,"/admin/ec/orders/").concat(t);this.$http.get(e).then((function(t){a.order=t.data.data,l()("#orderModal").modal("show"),a.isLoading=!1})).catch((function(){r["a"].fire({title:"資料讀取失敗，請稍後再試",icon:"error"}),a.isLoading=!1}))}}},p=u,g=e("2877"),h=Object(g["a"])(p,o,c,!1,null,null,null),f=h.exports,m={name:"BackOrders",components:{Pagination:n["a"],OrderModal:f},data:function(){return{orders:{user:{}},isNew:!1,pagination:{},isLoading:!1,uuid:"c7010afc-c576-4a2b-9f0e-5a42977d6066"}},created:function(){this.getOrders()},methods:{getOrders:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat(this.uuid,"/admin/ec/orders?page=").concat(a);this.$http.get(e).then((function(a){t.orders=a.data.data,t.pagination=a.data.meta.pagination,t.isLoading=!1})).catch((function(){r["a"].fire({title:"資料讀取失敗，請稍後再試",icon:"error"}),t.isLoading=!1}))},setOrderPaid:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat(this.uuid,"/admin/ec/orders/").concat(t.id,"/paid");t.paid||(e="".concat("https://course-ec-api.hexschool.io/api","/").concat(this.uuid,"/admin/ec/orders/").concat(t.id,"/unpaid")),this.$http.patch(e,t.id).then((function(){r["a"].fire({title:"付款狀態已修改",icon:"success"}),a.isLoading=!1,a.getOrders()})).catch((function(){r["a"].fire({title:"付款失敗",icon:"error"}),a.isLoading=!1}))},openModal:function(t){this.$refs.orderModal.getOrder(t.id)}}},v=m,_=Object(g["a"])(v,i,s,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=chunk-7e846793.5596e4ed.js.map