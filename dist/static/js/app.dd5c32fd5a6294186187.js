webpackJsonp([13],{120:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(2),o=e(80),r=e.n(o),u=e(44),i=e(79),c=(e.n(i),e(76)),s=e(43),l=e.n(s),f=e(77),m=e.n(f),p=e(78);e.n(p);a.default.prototype.$axios=l.a,a.default.use(m.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:u.a,store:c.a,template:"<App/>",components:{App:r.a}})},121:function(t,n,e){"use strict";var a,o=e(54),r=e.n(o),u=e(131),i=e.n(u),c=e(53),s=e(52);n.a={state:{leftNav:[],tabList:[],breadcrumb:[],nowTab:"",nowPages:""},getters:{leftNav:function(t){return t.leftNav},tabList:function(t){return t.tabList},breadcrumb:function(t){return t.breadcrumb},nowPages:function(t){return t.nowPages},nowTab:function(t){return t.nowTab}},mutations:(a={},r()(a,c.a,function(t,n){t.leftNav=n.leftNav}),r()(a,c.b,function(t,n){var e=n.index;t.nowPages=t.tabList[e].link}),r()(a,c.c,function(t,n){var e=t.tabList;t.nowTab=n.name,e.push({title:n.title,name:n.name,link:n.link});var a=[],o=new i.a;e.forEach(function(t){o.has(t.link)||(a.push(t),o.add(t.link))}),t.tabList=a,t.breadcrumb=n.breadcrumb,t.activedIndex=n.link}),r()(a,c.d,function(t,n){var e=t.tabList,a=t.nowTab,o=t.nowPages;a===n&&(o="",a="",e.forEach(function(t,r){if(t.name===n){var u=e[r+1]||e[r-1];u&&(o=u.link,a=u.name)}})),t.nowTab=a,t.nowPages=o,t.tabList=e.filter(function(t){return t.name!==n}),1===e.length&&location.reload()}),a),actions:{getItems:function(t,n){var e=t.commit;s.a.get("/contain").then(function(t){e("GET_ITEMS",t.data)})},tabCut:function(t,n){return(0,t.commit)("TAB_CUT",n)},addTab:function(t,n){return(0,t.commit)("ADD_TAB",n)},removeTab:function(t,n){return(0,t.commit)("REMOVE_TAB",n)}}}},122:function(t,n,e){"use strict";var a=e(54),o=e.n(a),r=e(53),u=e(44),i=e(52),c=e(196),s=e.n(c);n.a={state:{form:{username:"",password:""},msg:""},getters:{form:function(t){return t.form},msg:function(t){return t.msg}},mutations:o()({},r.e,function(t,n){localStorage.setItem("login",n.info.token),u.a.go(-1)}),actions:{logIn:function(t,n){var e=t.commit,a=t.state;i.a.post("/user",s.a.stringify(n)).then(function(t){a.form.username="",a.form.password="",200===t.data.code?(e("LOGIN",t.data),a.msg=""):a.msg=t.data.message})}}}},123:function(t,n,e){"use strict";n.a={state:{user:{name:"小明001"}},getters:{user:function(t){return t.user}},mutations:{logOut:function(t){localStorage.clear(),location.reload()}},actions:{logOut:function(t,n){return(0,t.commit)("logOut",n)}}}},124:function(t,n,e){"use strict";n.a={state:{topNav:[{link:"/index",title:"首页"},{link:"/main",title:"内容"}]},getters:{topNav:function(t){return t.topNav}},mutations:{},actions:{reset:function(t,n){t.commit,t.getters;t.rootState.contain.nowTab&&location.reload()}}}},125:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(200),o=e.n(a),r=e(201),u=e.n(r),i=e(199),c=e.n(i);n.default={components:{topExit:o.a,topNav:u.a,footerNav:c.a}}},126:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={}},127:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(45),o=e.n(a),r=e(23);n.default={computed:o()({},e.i(r.a)(["user"])),methods:o()({},e.i(r.b)(["logOut"]))}},128:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=e(45),o=e.n(a),r=e(23);n.default={computed:o()({},e.i(r.a)(["topNav"])),methods:o()({},e.i(r.b)(["reset"]))}},190:function(t,n){},191:function(t,n){},192:function(t,n){},193:function(t,n){},199:function(t,n,e){function a(t){e(193)}var o=e(19)(e(126),e(205),a,"data-v-c9fdbc98",null);t.exports=o.exports},200:function(t,n,e){function a(t){e(192)}var o=e(19)(e(127),e(204),a,"data-v-8b7f6102",null);t.exports=o.exports},201:function(t,n,e){function a(t){e(190)}var o=e(19)(e(128),e(202),a,"data-v-36851b5c",null);t.exports=o.exports},202:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ul",{staticClass:"topnav"},t._l(t.topNav,function(n,a){return e("li",{key:n.index,on:{click:t.reset}},[e("router-link",{attrs:{to:n.link}},[t._v(t._s(n.title))])],1)}))},staticRenderFns:[]}},203:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("top-exit"),t._v(" "),e("top-nav"),t._v(" "),e("transition",{attrs:{name:"slide-fade",mode:"out-in"}},[e("keep-alive",[e("router-view")],1)],1),t._v(" "),e("footer-nav")],1)},staticRenderFns:[]}},204:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"topexit"},[e("div",{staticClass:"topexit-main"},[e("router-link",{attrs:{to:"/user"}},[t._v(t._s(t.user.name))]),t._v(" "),e("a",{attrs:{href:"#/login"},on:{click:t.logOut}},[t._v("退出")])],1)])},staticRenderFns:[]}},205:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"footernav"},[t._v("\n  © vue-elementUI\n")])},staticRenderFns:[]}},44:function(t,n,e){"use strict";var a=e(2),o=e(206);a.default.use(o.a);var r=function(t){return e.e(2).then(function(){var n=[e(221)];t.apply(null,n)}.bind(this)).catch(e.oe)},u=function(t){return e.e(3).then(function(){var n=[e(222)];t.apply(null,n)}.bind(this)).catch(e.oe)},i=function(t){return e.e(4).then(function(){var n=[e(220)];t.apply(null,n)}.bind(this)).catch(e.oe)},c=function(t){return e.e(5).then(function(){var n=[e(219)];t.apply(null,n)}.bind(this)).catch(e.oe)},s=function(t){return e.e(0).then(function(){var n=[e(218)];t.apply(null,n)}.bind(this)).catch(e.oe)},l=function(t){return e.e(7).then(function(){var n=[e(214)];t.apply(null,n)}.bind(this)).catch(e.oe)},f=function(t){return e.e(9).then(function(){var n=[e(212)];t.apply(null,n)}.bind(this)).catch(e.oe)},m=function(t){return e.e(11).then(function(){var n=[e(217)];t.apply(null,n)}.bind(this)).catch(e.oe)},p=function(t){return e.e(10).then(function(){var n=[e(211)];t.apply(null,n)}.bind(this)).catch(e.oe)},d=function(t){return e.e(8).then(function(){var n=[e(213)];t.apply(null,n)}.bind(this)).catch(e.oe)},v=function(t){return e.e(1).then(function(){var n=[e(216)];t.apply(null,n)}.bind(this)).catch(e.oe)},h=function(t){return e.e(6).then(function(){var n=[e(215)];t.apply(null,n)}.bind(this)).catch(e.oe)},b=new o.a({routes:[{path:"/",redirect:"index"},{path:"/login",name:"login",component:i},{path:"*",name:"404",component:r,meta:{requiresAuth:!0}},{path:"/index",name:"index",component:c,meta:{requiresAuth:!0}},{path:"/user",name:"user",component:u,meta:{requiresAuth:!0}},{path:"/main",component:s,meta:{requiresAuth:!0},children:[{path:"/main/vuetable",name:"vuetable",component:l,meta:{requiresAuth:!0}},{path:"/main/vueform",name:"vueform",component:f,meta:{requiresAuth:!0}},{path:"/main/vueupload",name:"vueupload",component:m,meta:{requiresAuth:!0}},{path:"/main/vuecascader",name:"vuecascader",component:p,meta:{requiresAuth:!0}},{path:"/main/vueslider",name:"vueslider",component:d,meta:{requiresAuth:!0}},{path:"/main/vuetree",name:"vuetree",component:v,meta:{requiresAuth:!0}},{path:"/main/vuetransfer",name:"vuetransfer",component:h,meta:{requiresAuth:!0}}]}]});b.beforeEach(function(t,n,e){var a=sessionStorage.getItem("login");t.meta.requiresAuth&&(a||e({path:"/login",query:{redirect:t.fullPath}})),e()}),n.a=b},52:function(t,n,e){"use strict";var a=e(43),o=e.n(a);o.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",o.a.defaults.baseURL="https://www.easy-mock.com/mock/599166d8a1d30433d86158f0/elem/",o.a.defaults.timeout=5e3,n.a={get:function(t,n){return o()({method:"get",url:t,params:n}).catch(function(t){console.log(t)})},post:function(t,n){return o()({method:"post",url:t,data:n}).catch(function(t){console.log(t)})}}},53:function(t,n,e){"use strict";e.d(n,"e",function(){return a}),e.d(n,"a",function(){return o}),e.d(n,"c",function(){return r}),e.d(n,"b",function(){return u}),e.d(n,"d",function(){return i});var a="LOGIN",o="GET_ITEMS",r="ADD_TAB",u="TAB_CUT",i="REMOVE_TAB"},76:function(t,n,e){"use strict";var a=e(2),o=e(23),r=e(122),u=e(123),i=e(124),c=e(121);a.default.use(o.c),n.a=new o.c.Store({modules:{login:r.a,topexit:u.a,topnav:i.a,contain:c.a}})},78:function(t,n){},79:function(t,n){},80:function(t,n,e){function a(t){e(191)}var o=e(19)(e(125),e(203),a,"data-v-6594bb50",null);t.exports=o.exports}},[120]);