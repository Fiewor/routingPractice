(this.webpackJsonprouting=this.webpackJsonprouting||[]).push([[0],{24:function(t,n,e){},25:function(t,n,e){},33:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e.n(c),o=e(17),s=e.n(o),i=(e(24),e(25),e(9)),a=e(7),u=e(1),j=function(){var t={color:"white",textDecoration:"none"},n=Object(c.useState)(!1),e=Object(i.a)(n,2),r=e[0],o=e[1];return Object(u.jsxs)("nav",{children:[Object(u.jsx)("h3",{children:"Johnny-Putty"}),Object(u.jsxs)("ul",{className:"nav-links",children:[Object(u.jsx)(a.b,{onClick:function(){return o(!0)},style:r?t:null,to:"/",children:Object(u.jsx)("li",{children:"Home"})}),Object(u.jsx)(a.b,{onClick:function(){return o(!0)},style:r?t:null,to:"/about",children:Object(u.jsx)("li",{children:"About"})}),Object(u.jsx)(a.b,{onClick:function(){return o(!0)},style:r?t:null,to:"/shop",children:Object(u.jsx)("li",{children:"Shop"})})]})]})},h=function(){return Object(u.jsx)("h1",{children:"About Page"})},l=e(10),b=e.n(l),f=e(12),O=function(){var t=Object(c.useState)([]),n=Object(i.a)(t,2),e=n[0],r=n[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fortnite-api.com/v1/banners").then((function(t){return t.json()})).then((function(t){return r(t.data)})).catch((function(t){return console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"Shop Page"}),e.map((function(t){return Object(u.jsx)("h1",{children:Object(u.jsx)(a.b,{to:"/shop/".concat(t.id),children:t.devName})},t.id)}))]})},p=function(t){var n=t.match,e=Object(c.useState)({}),r=Object(i.a)(e,2),o=r[0],s=r[1];Object(c.useEffect)((function(){a(),console.log(n)}),[]);var a=function(){var t=Object(f.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fortnite-api.com/images/banners/").then((function(t){return t.json()})).then((function(t){return s(t)}),console.log(o)).catch((function(t){return console.error(t)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{children:o.name}),Object(u.jsx)("img",{src:o.images.smallIcon,alt:""})]})},x=e(2);var d=function(){return Object(u.jsx)("h1",{children:"Home Page"})},m=function(){return Object(u.jsx)(a.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsxs)(x.c,{children:[Object(u.jsx)(x.a,{path:"/",exact:!0,component:d}),Object(u.jsx)(x.a,{path:"/about",component:h}),Object(u.jsx)(x.a,{path:"/shop",exact:!0,component:O}),Object(u.jsx)(x.a,{path:"/shop/shop:id",component:p})]})]})})},g=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,34)).then((function(n){var e=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,s=n.getTTFB;e(t),c(t),r(t),o(t),s(t)}))};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.a859f153.chunk.js.map