(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return s}));var a=n(45),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"cc04c49f-da84-4c6c-9a4d-92c62f81b89c"}}),u={getUser:function(e,t){return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},deleteUser:function(e){return r.delete("follow/".concat(e)).then((function(e){return e.data}))},postUser:function(e){return r.post("follow/".concat(e),{}).then((function(e){return e.data}))}},s={getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},authme:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},28:function(e,t,n){"use strict";var a=n(0),r=n.n(a),u=n(61),s=n.n(u);t.a=function(){return r.a.createElement("img",{src:s.a})}},35:function(e,t,n){e.exports={paginator:"Pagination_paginator__35ytz",pageNumber:"Pagination_pageNumber__Th9n9",selectedPage:"Pagination_selectedPage__1fWev"}},40:function(e,t,n){e.exports={header:"Header_header__3y5Q3",loginBlock:"Header_loginBlock__38Kh1"}},41:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return v}));var a=n(1),r=n.n(a),u=n(7),s=n(29),c=n(3),i=n(11),o="samurai-network/profile/ADD_POST",l="samurai-network/profile/SET_PROPFILE_INFO",p="samurai-network/profile/SET_STATUS",m={posts:[{id:1,message:"Hey man what a you doing",likes:10},{id:2,message:"You a losser man",likes:51},{id:3,message:"React easy",likes:25},{id:4,message:"React easy",likes:25}],profile:null,status:""},f=function(e){return{type:o,text:e}},d=function(e){return{type:p,status:e}},g=function(e){return{type:l,profile:e}},h=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.getStatus(e);case 2:a=t.sent,n(d(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(u.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(d(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(c.a)({},e,{posts:[].concat(Object(s.a)(e.posts),[{id:5,message:t.text,likes:10}])});case l:return Object(c.a)({},e,{profile:t.profile});case p:return Object(c.a)({},e,{status:t.status});default:return e}}},54:function(e,t,n){},55:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c}));var a=n(29),r=n(3),u={dialogs:[{id:1,name:"Leva"},{id:2,name:"Ved"},{id:3,name:"Lexa"},{id:4,name:"Nekit"},{id:5,name:"Kiril"}],messages:[{id:1,message:"Hey man what a you doing"},{id:2,message:"You a losser man"},{id:3,message:"React easy"},{id:4,message:"React easy"}],newMessageBody:""},s=function(){return{type:"SEND_MESSAGE"}},c=function(e){return{type:"UPDATE_NEW_MESSAGE_BADY",newBady:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_NEW_MESSAGE_BADY":return Object(r.a)({},e,{newMessageBody:t.newBady});case"SEND_MESSAGE":var n=e.newMessageBody;return Object(r.a)({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}]),newMessageBody:""});default:return e}}},6:function(e,t,n){e.exports={nav:"Navbar_nav__2My2L",item:"Navbar_item__30k2B",activeLink:"Navbar_activeLink__T8vDt"}},61:function(e,t,n){e.exports=n.p+"static/media/Spinner-1.5s-224px.358377a4.svg"},65:function(e,t,n){e.exports=n(97)},70:function(e,t,n){},71:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),u=n(31),s=n.n(u),c=(n(70),n(22)),i=n(23),o=n(25),l=n(24),p=n(26),m=(n(71),n(6)),f=n.n(m),d=n(5);var g=function(){return r.a.createElement("nav",{className:f.a.nav},r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:f.a.activeLink},"Profile")),r.a.createElement("div",{className:"".concat(f.a.item," ").concat(f.a.active)},r.a.createElement(d.b,{to:"/dialogs",activeClassName:f.a.activeLink},"Messages")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:f.a.activeLink},"News")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:f.a.activeLink},"Music")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:f.a.activeLink},"Settings")),r.a.createElement("div",{className:f.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:f.a.activeLink},"Users")))},h=n(19),v=n(13),E=n(1),b=n.n(E),w=n(7),k=n(29),O=n(3),y=n(11),C=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(O.a)({},e,{},a):e}))},_="samurai-network/users/FOLLOW",j="samurai-network/users/UNFOLLOW",S="samurai-network/users/SET_USERS",P="samurai-network/users/SET_CURRENT_PAGE",U="samurai-network/users/SET_TOTAL_USERS",T="samurai-network/users/TOGGLE_TO_LOADER",N={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1},x=function(e){return{type:_,userId:e}},L=function(e){return{type:j,userId:e}},A=function(e){return{type:T,isFetching:e}},z=function(){var e=Object(w.a)(b.a.mark((function e(t,n,a,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(n);case 2:0===e.sent.resultCode&&t(r(n));case 4:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(O.a)({},e,{users:C(e.users,t.userId,"id",{followed:!0})});case j:return Object(O.a)({},e,{users:C(e.users,t.userId,"id",{followed:!1})});case S:return Object(O.a)({},e,{users:Object(k.a)(t.users)});case P:return Object(O.a)({},e,{currentPage:t.currentPage});case U:return Object(O.a)({},e,{totalUsersCount:t.totalUsers});case T:return Object(O.a)({},e,{isFetching:t.isFetching});default:return e}},M=n(42),R=n(32),B=n(56),D=n(35),I=n.n(D),G=n(60),W=n.n(G),H=function(e){for(var t=e.totalUsersCount,n=e.pageSize,u=e.currentPage,s=e.changeCurrentPage,c=e.portionSize,i=void 0===c?10:c,o=Math.ceil(t/n),l=[],p=1;p<=o;p++)l.push(p);var m=Math.ceil(o/i),f=Object(a.useState)(1),d=Object(B.a)(f,2),g=d[0],h=d[1],v=(g-1)*i+1,E=g*i;return r.a.createElement("div",{className:I.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=v&&e<=E})).map((function(e){return r.a.createElement("span",{className:W()(Object(R.a)({},I.a.selectedPage,u===e),I.a.pageNumber),key:e,onClick:function(t){s(e)}},e)})),m>g&&r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},Y=(n(54),function(e){var t=e.user,n=e.unFollowUserThankCreator,a=e.followUserThankCreator;return r.a.createElement("div",{key:t.id},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:t.photos.small?t.photos.small:"https://www.speexx.com/wp-content/uploads/icon-think-user-centric-1.png",className:"userphoto"}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{onClick:function(){n(t.id)}},"UnFollow"):r.a.createElement("button",{onClick:function(){a(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status))))}),V=function(e){var t=e.users,n=e.totalUsersCount,a=e.pageSize,u=e.currentPage,s=e.changeCurrentPage,c=Object(M.a)(e,["users","totalUsersCount","pageSize","currentPage","changeCurrentPage"]);return r.a.createElement("div",null,r.a.createElement(H,{totalUsersCount:n,pageSize:a,currentPage:u,changeCurrentPage:s}),t.map((function(e){return r.a.createElement(Y,{key:e.id,user:e,unFollowUserThankCreator:c.unFollowUserThankCreator,followUserThankCreator:c.followUserThankCreator})})))},K=n(28),X=function(e){return e.usersPage.users},J=function(e){return e.usersPage.pageSize},q=function(e){return e.usersPage.totalUsersCount},Q=function(e){return e.usersPage.currentPage},Z=function(e){return e.usersPage.isFetching},$=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(o.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).changeCurrentPage=function(e){n.props.getUserThunkCreator(e,n.props.pageSize),n.props.setCurrentPage(e)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.getUserThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(K.a,null):null,r.a.createElement(V,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,changeCurrentPage:this.changeCurrentPage,users:this.props.users,followUserThankCreator:this.props.followUserThankCreator,unFollowUserThankCreator:this.props.unFollowUserThankCreator}))}}]),t}(r.a.Component),ee=Object(v.b)((function(e){return{users:X(e),pageSize:J(e),totalUsersCount:q(e),currentPage:Q(e),isFetching:Z(e)}}),{setCurrentPage:function(e){return{type:P,currentPage:e}},getUserThunkCreator:function(e,t){return function(){var n=Object(w.a)(b.a.mark((function n(a){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(A(!0)),n.next=3,y.b.getUser(e,t);case 3:r=n.sent,a(A(!1)),a((s=r.items,{type:S,users:s})),a((u=r.totalCount,{type:U,totalUsers:u}));case 7:case"end":return n.stop()}var u,s}),n)})));return function(e){return n.apply(this,arguments)}}()},followUserThankCreator:function(e){return function(){var t=Object(w.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,y.b.postUser.bind(y.b),x);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowUserThankCreator:function(e){return function(){var t=Object(w.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:z(n,e,y.b.deleteUser.bind(y.b),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})($),te=n(40),ne=n.n(te),ae=function(e){return r.a.createElement("header",{className:ne.a.header},r.a.createElement("img",{src:"https://avatanplus.com/files/resources/mid/5815dbd5106d21581562b84b.png"}),r.a.createElement("div",{className:ne.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,r.a.createElement("div",null,r.a.createElement("button",{onClick:e.LogoutUserTC},"logout"))):r.a.createElement(d.b,{to:"./login"},"Login")))},re="samurai-network/auth/SET_USER_AUTH",ue={id:null,email:null,login:null,isAuth:!1},se=function(e,t,n,a){return{type:re,payload:{id:e,email:t,login:n,isAuth:a}}},ce=function(){return function(){var e=Object(w.a)(b.a.mark((function e(t){var n,a,r,u,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.authme();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,u=a.email,s=a.login,t(se(r,u,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(O.a)({},e,{},t.payload);default:return e}},oe=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(ae,this.props)}}]),t}(r.a.Component),le=Object(v.b)((function(e){return{login:e.auth.login,isAuth:e.auth.isAuth}}),{LogoutUserTC:function(){return function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(se(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(oe),pe=n(21),me=function(){var e=Object(v.c)();return Object(v.d)((function(e){return e.auth.isAuth}))?r.a.createElement(h.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(pe.d,{initialValues:{email:"",password:""},validate:function(e){var t={};return e.email||(t.email="Required"),t},onSubmit:function(t,n){var a,r,u,s=n.setSubmitting;e((a=t.email,r=t.password,function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.login(a,r,u);case 2:0===e.sent.data.resultCode&&t(ce());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),s(!1)}},(function(e){var t=e.isSubmitting;return r.a.createElement(pe.c,null,r.a.createElement(pe.b,{type:"email",name:"email",placeholder:"email"}),r.a.createElement(pe.a,{name:"email"}),r.a.createElement("div",null,r.a.createElement(pe.b,{type:"password",name:"password",placeholder:"password"})),r.a.createElement(pe.a,{name:"password",component:"div"}),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",disabled:t},"Login")))})))},fe=(n(96),function(e){return r.a.createElement(h.a,{to:"/login"})}),de=n(16),ge="samurai-network/app/INITIALIZE_APP",he={initialized:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge:return Object(O.a)({},e,{initialized:!0});default:return e}},Ee=n(41),be=n(55),we=n(64),ke=Object(de.c)({profilePage:Ee.b,dialogsPage:be.a,usersPage:F,auth:ie,app:ve}),Oe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.d,ye=Object(de.e)(ke,Oe(Object(de.a)(we.a)));window.__store__=ye;var Ce=ye,_e=r.a.lazy((function(){return n.e(4).then(n.bind(null,102))})),je=r.a.lazy((function(){return n.e(3).then(n.bind(null,101))})),Se=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(le,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(h.b,{path:"/dialogs",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(K.a,null)},r.a.createElement(_e,null))}}),r.a.createElement(h.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(K.a,null)},r.a.createElement(je,null))}}),r.a.createElement(h.b,{path:"/users",render:function(){return r.a.createElement(ee,null)}}),r.a.createElement(h.b,{path:"/login",render:function(){return r.a.createElement(me,null)}}),r.a.createElement(h.b,{path:"/news",render:function(){return r.a.createElement(fe,null)}}))):r.a.createElement(K.a,null)}}]),t}(r.a.Component),Pe=Object(de.d)(h.f,Object(v.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(w.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ce()).then((function(){t({type:ge})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(Se),Ue=function(e){return r.a.createElement(d.a,null,r.a.createElement(v.a,{store:Ce},r.a.createElement(Pe,null)))};s.a.render(r.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.2b5312f3.chunk.js.map