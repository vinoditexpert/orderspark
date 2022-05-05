(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{216:function(t,e,r){"use strict";var n=r(272);e.a=function(t){var e=t.store;Object(n.a)()(e)}},258:function(t,e,r){var content=r(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("48517564",content,!0,{sourceMap:!1})},274:function(t,e,r){"use strict";r(11),r(8),r(10),r(4),r(14),r(9),r(15);var n=r(1),o=r(96);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={name:"DefaultLayout",data:function(){return{clipped:!1,rightDrawer:!1,snackbar:!0,headers:[{text:"Product Name",align:"start",value:"name",sortable:!1},{text:"Price",value:"price",sortable:!1},{text:"Qty",value:"qty",align:"center",width:"120px",sortable:!1},{text:"Total",value:"total",sortable:!1},{text:"",value:"action",sortable:!1}]}},computed:l({},Object(o.c)({cartProducts:"carts/getAllCartProducts",cartAmount:"carts/getCartAmount",notify:"carts/getNotify"})),mounted:function(){this.cartAmountInit()},methods:l({},Object(o.b)({remove:"carts/remove",cartAmountInit:"carts/cartAmountCalculation",updateNotify:"carts/notify"}))},f=r(108),v=r(172),m=r.n(v),y=r(465),_=r(473),h=r(474),w=r(211),O=r(466),C=r(475),A=r(471),P=r(467),k=r(152),x=r(468),D=r(472),T=r(469),E=r(470),S=r(107),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("img",{staticClass:"vuetify-logo",attrs:{alt:"order spark Logo",src:"https://orderspark.com/_nuxt/d43b1e1ef8c9f6ad865d42eb3a077f95.svg"}}),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"mr-5",attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[0===t.cartProducts.length?r("v-icon",[t._v("mdi-cart")]):r("v-badge",{attrs:{color:"green",content:t.cartProducts.length}},[r("v-icon",[t._v("mdi-cart")])],1)],1)],1),t._v(" "),r("v-main",[r("v-container",{attrs:{fluid:""}},[r("Nuxt")],1),t._v(" "),r("v-snackbar",{attrs:{top:!0,color:"success"===t.notify.type?"green accent-4":"yellow darken-4",elevation:"24"},scopedSlots:t._u([{key:"action",fn:function(e){var n=e.attrs;return[r("v-btn",t._b({attrs:{text:"",small:"",rounded:""},on:{click:function(e){return t.updateNotify({flag:!1,message:""})}}},"v-btn",n,!1),[r("v-icon",{attrs:{color:"red"}},[t._v("mdi-close")])],1)]}}]),model:{value:t.notify.flag,callback:function(e){t.$set(t.notify,"flag",e)},expression:"notify.flag"}},[t._v("\n        "+t._s(t.notify.message)+"\n        ")])],1),t._v(" "),r("v-navigation-drawer",{attrs:{width:"600px",right:!0,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[r("v-container",{staticClass:"pt-0"},[r("div",{staticClass:"d-flex"},[r("v-btn",{staticClass:"my-3",attrs:{color:"lightgrey",icon:""},on:{click:function(e){t.rightDrawer=!t.rightDrawer}}},[r("v-icon",{attrs:{color:"black"}},[t._v("mdi-close")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("h3",{staticClass:"mt-4"},[t._v("CART DETAIL")]),t._v(" "),r("v-spacer")],1),t._v(" "),t.cartProducts.length>0?r("v-data-table",{attrs:{headers:t.headers,items:t.cartProducts,"hide-default-footer":""},scopedSlots:t._u([{key:"item.price",fn:function(e){var r=e.item;return[t._v("\n           $"+t._s(r.price.toFixed(2))+" USD\n          ")]}},{key:"item.qty",fn:function(e){var n=e.item;return[r("v-text-field",{attrs:{outlined:"",required:"",dense:"","hide-details":"",min:"1",type:"number",onkeydown:"return false"},on:{input:function(e){return t.cartAmountInit()}},model:{value:n.qty,callback:function(e){t.$set(n,"qty",e)},expression:"item.qty"}})]}},{key:"item.total",fn:function(e){var r=e.item;return[t._v("\n           $"+t._s(r.total.toFixed(2))+" USD\n          ")]}},{key:"item.action",fn:function(e){var n=e.item;return[r("v-btn",{staticClass:"my-3",attrs:{color:"lightgrey",icon:""},on:{click:function(e){t.remove(n),t.cartAmountInit()}}},[r("v-icon",{attrs:{color:"red"}},[t._v("mdi-close")])],1)]}}],null,!0)}):t._e(),t._v(" "),t.cartProducts.length>0?r("v-card",{staticClass:"ma-2 pa-4 text-center",attrs:{outlined:""}},[t._v("\n          Total Amount: "),r("b",[t._v("$"+t._s(t.cartAmount.toFixed(2))+" USD")]),t._v(" "),r("v-btn",{staticClass:"ml-4",attrs:{dark:"",color:"green"}},[t._v("\n              CHECKOUT\n          ")])],1):t._e(),t._v(" "),0===t.cartProducts.length?r("v-card",{staticClass:"ma-2 pa-4 text-center",attrs:{outlined:""}},[t._v("\n          Your cart is empty!\n        ")]):t._e()],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!0,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear())+" Order Spark Demo")])])],1)}),[],!1,null,null,null);e.a=component.exports;m()(component,{VApp:y.a,VAppBar:_.a,VBadge:h.a,VBtn:w.a,VCard:O.a,VContainer:C.a,VDataTable:A.a,VFooter:P.a,VIcon:k.a,VMain:x.a,VNavigationDrawer:D.a,VSnackbar:T.a,VSpacer:E.a,VTextField:S.a})},293:function(t,e,r){r(294),t.exports=r(295)},339:function(t,e,r){"use strict";r(258)},340:function(t,e,r){var n=r(16)(!1);n.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=n},447:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"getters",(function(){return c})),r.d(e,"actions",(function(){return l}));r(83),r(95),r(4),r(9);var n={cartProducts:[],cartAmount:0,notify:{flag:!1,type:"",message:""}},o={ADD_CART_PRODUCT:function(t,e){t.cartProducts.push(e)},REMOVE_CART_PRODUCT:function(t,e){var r=t.cartProducts.findIndex((function(t){return t.id===e.id}));-1!==r&&t.cartProducts.splice(r,1)},SET_CART_AMOUNT:function(t,e){t.cartAmount=e},SET_NOTIFY:function(t,e){t.notify=e}},c={getAllCartProducts:function(t){return t.cartProducts},getCartAmount:function(t){return t.cartAmount},getNotify:function(t){return t.notify}},l={add:function(t,e){var r=t.commit,n=t.dispatch;-1===t.state.cartProducts.findIndex((function(t){return t.id===e.id}))?(e.qty=1,e.total=e.price,r("ADD_CART_PRODUCT",e),n("cartAmountCalculation"),n("notify",{flag:!0,type:"success",message:"Product added in cart successfully."})):n("notify",{flag:!0,type:"warning",message:"Already in cart!"})},remove:function(t,e){var r=t.commit,n=t.dispatch;r("REMOVE_CART_PRODUCT",e),n("notify",{flag:!0,type:"success",message:"Product removed from cart successfully."})},cartAmountCalculation:function(t){var e=t.commit,r=t.state,n=0;r.cartProducts.forEach((function(t){t.total=t.qty*t.price,n+=t.total})),e("SET_CART_AMOUNT",n)},notify:function(t,e){var r=t.commit;t.state;r("SET_NOTIFY",e)}}},448:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"getters",(function(){return c})),r.d(e,"actions",(function(){return l}));var n={products:[]},o={SET_PRODUCTS:function(t,e){t.products=e}},c={getAllProducts:function(t){return t.products}},l={fetchProducts:function(t,e){var r=t.commit,n=(t.state,[{id:2,photoURL:"https://images.ctfassets.net/p3w8f4svwgcg/3cDwW57McUOqWW8kgeeMcE/2c262ac315fd209bbb0aa4eb1de21248/boybrow-silo.png",name:"Boy Brow",price:123,description:"Our award-winning instant brow groomer fluffs and shapes brows while thickening and grooming them into place."},{id:3,photoURL:"https://images.ctfassets.net/p3w8f4svwgcg/64gYS3gxX2WMmoww2k6kCY/18c77bf091443901aa46847bbdbe55c6/cloudpaint-dawn.png",name:"Cloud Paint",price:12.3,description:"A seamless, bailable gel-cream blush that’s fun and easy to wear."},{id:4,photoURL:"https://images.ctfassets.net/p3w8f4svwgcg/2uE4965Ah2cucyEoCeouAY/b6301ecdad5d5a6ddcd7588d48f103ac/makeup_set.png",name:"The Makeup Set",price:128.54,description:"Three easy-to-apply makeup essentials for your brows, cheeks, and lashes."}]);return r("SET_PRODUCTS",n),n}}},99:function(t,e,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(339),r(108)),c=r(172),l=r.n(c),d=r(465),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[293,7,1,8]]]);