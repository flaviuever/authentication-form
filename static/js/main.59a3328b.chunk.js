(this["webpackJsonpmail-app"]=this["webpackJsonpmail-app"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),c=a.n(r),o=a(3),s=a(7),m=a(1),u=(a(25),function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},l.a.createElement("div",{className:"navbar-collapse"},l.a.createElement("div",{className:"navbar-nav"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(s.b,{className:"nav-item nav-link",to:"/register"},"SignUp")),l.a.createElement("li",null,l.a.createElement(s.b,{className:"nav-item nav-link",to:"/login"},"Login")),l.a.createElement("li",null,l.a.createElement(s.b,{className:"nav-item nav-link",to:"/logout"},"Log OUT")),l.a.createElement("li",null,l.a.createElement(s.b,{className:"nav-item nav-link",to:"/dashboard"},"Dashboard"))))))}),i=a(8),p=a.n(i),b=a(9),d=function(e){var t=e.setIsAuth,a=Object(n.useState)(""),r=Object(o.a)(a,2),c=r[0],s=r[1],u=Object(n.useState)(""),i=Object(o.a)(u,2),d=i[0],E=i[1],h=Object(n.useState)(""),f=Object(o.a)(h,2),v=(f[0],f[1]),g=Object(m.g)(),O=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:6789/login",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:c,password:d})});case 2:if(200===e.sent.status){e.next=7;break}return v("Wrong credentials"),setTimeout((function(){v("")}),2e3),e.abrupt("return");case 7:t(!0),g.push("./dashboard");case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"container mt-5 w-25"},l.a.createElement("div",null,l.a.createElement("h1",{className:"h1"},"Log In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{value:c,onChange:function(e){s(e.target.value)},type:"email",className:"form-control",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{value:d,onChange:function(e){E(e.target.value)},type:"password",className:"form-control",placeholder:"Password"})),l.a.createElement("button",{onClick:O,className:"btn btn-primary"},"Submit")))},E=function(e){var t=e.setIsAuth;return fetch("http://localhost:6789/logout",{credentials:"include"}),t(!1),l.a.createElement("div",{className:"alert alert-danger",role:"alert"},"You have been logged out")},h=Object(m.h)((function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),s=Object(o.a)(c,2),m=s[0],u=s[1],i=Object(n.useState)(""),d=Object(o.a)(i,2),E=d[0],h=d[1],f=Object(n.useState)(""),v=Object(o.a)(f,2),g=v[0],O=v[1],j=Object(n.useState)(!1),N=Object(o.a)(j,2),x=N[0],y=(N[1],function(){var e=Object(b.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:6789/mails",{credentials:"include"});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(a);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),S=function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:6789/mails",{method:"POST",credentials:"include",headers:{"Content-type":"application/json"},body:JSON.stringify({subject:E,to:g,text:m})});case 2:200===e.sent.status&&(console.log("OK"),h(""),O(""),u(""));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y()}),[]),Object(n.useEffect)((function(){x||y()}),[x]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Welcome !"),l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,a.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.id),l.a.createElement("td",null,e.subject),l.a.createElement("td",null,e.to),l.a.createElement("td",null,e.from),l.a.createElement("td",null,e.text))})))),l.a.createElement("div",{className:"form"},l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"Subject"),l.a.createElement("input",{value:E,type:"text",className:"form-control",id:"exampleFormControlInput1",onChange:function(e){h(e.target.value)}})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlInput1",className:"form-label"},"To: "),l.a.createElement("input",{value:g,type:"email",className:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com",onChange:function(e){return O(e.target.value)}})),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"exampleFormControlTextarea1",className:"form-label"},"Example textarea"),l.a.createElement("textarea",{className:"form-control",id:"exampleFormControlTextarea1",rows:"3",value:m,onChange:function(e){return u(e.target.value)}})),l.a.createElement("button",{type:"submit",onClick:S,disabled:E.length<5||0===m.length},"Send Email")))})),f=function(){var e=Object(m.g)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),i=u[0],d=u[1],E=Object(n.useState)(""),h=Object(o.a)(E,2),f=h[0],v=h[1],g=function(){var t=Object(b.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:6789/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:r,password:i})});case 2:if(200===t.sent.status){t.next=7;break}return v("User already registered"),setTimeout((function(){v("")}),2e3),t.abrupt("return");case 7:e.push("/login");case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("div",{className:"container mt-5 w-25"},l.a.createElement("h1",{className:"h1"},"Register"),l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{value:r,type:"email",className:"form-control",placeholder:"Enter email",onChange:function(e){c(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{value:i,type:"password",className:"form-control",placeholder:"Password",onChange:function(e){d(e.target.value)}})),l.a.createElement("button",{onClick:g,disabled:i.length<6||""===r,className:"btn btn-primary"},"Register")),f&&l.a.createElement("div",{className:"alert alert-danger",role:"alert"},f)))},v=a(19),g=function(e){var t=e.isAuth,a=e.component,n=Object(v.a)(e,["isAuth","component"]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.b,Object.assign({},n,{render:function(e){return t?l.a.createElement(a,null):l.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}})))};var O=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement(u,null),l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/Register",component:f}),l.a.createElement(m.b,{path:"/Login"},l.a.createElement(d,{setIsAuth:r})),l.a.createElement(m.b,{path:"/Logout"},l.a.createElement(E,{setIsAuth:r})),l.a.createElement(g,{path:"/Dashboard",component:h,isAuth:a}))))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.59a3328b.chunk.js.map