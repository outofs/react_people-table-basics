(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{20:function(e,t,c){},22:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var n=c(9),s=(c(18),c(19),c(5)),a=c(2),r=(c(20),c(6)),j=c.n(r),i=c(0),l=function(e){var t=e.isActive;return j()("navbar-item",{"has-background-grey-lighter":t})},b=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(s.c,{className:l,to:"/",children:"Home"}),Object(i.jsx)(s.c,{className:l,to:"people",children:"People"})]})})})},o=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(b,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(a.b,{})})})]})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},h=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},x=c(4),O=c(1),u=(c(22),function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})});function m(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(e){var t=e.person;return Object(i.jsx)(s.b,{to:t.slug,className:j()({"has-text-danger":"f"===t.sex}),children:t.name})},f=function(e,t){var c=t.find((function(t){return t.name===e}));return c?Object(i.jsx)(p,{person:c}):e},g=function(e){var t=e.people,c=e.slug;return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsxs)("tr",{"data-cy":"person",className:j()({"has-background-warning":e.slug===c}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(p,{person:e})}),Object(i.jsx)("td",{children:e.sex}),Object(i.jsx)("td",{children:e.born}),Object(i.jsx)("td",{children:e.died}),Object(i.jsx)("td",{children:e.motherName?f(e.motherName,t):"-"}),Object(i.jsx)("td",{children:e.fatherName?f(e.fatherName,t):"-"})]})}))})]})},v=function(){var e=Object(O.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],s=Object(O.useState)(!1),r=Object(x.a)(s,2),j=r[0],l=r[1],b=Object(O.useState)(!1),o=Object(x.a)(b,2),d=o[0],h=o[1],p=Object(a.i)().slug;return Object(O.useEffect)((function(){l(!0),m().then(n).catch((function(){return h(!0)})).finally((function(){return l(!1)}))}),[]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsx)("div",{className:"box table-container",children:j?Object(i.jsx)(u,{}):Object(i.jsxs)(i.Fragment,{children:[d&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0===c.length&&!j&&Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(i.jsx)(g,{people:c,slug:p})]})})})]})},N=function(){return Object(i.jsx)(s.a,{children:Object(i.jsx)(a.e,{children:Object(i.jsxs)(a.c,{path:"/",element:Object(i.jsx)(o,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(d,{})}),Object(i.jsx)(a.c,{path:"home",element:Object(i.jsx)(a.a,{to:"/",replace:!0})}),Object(i.jsxs)(a.c,{path:"people",element:Object(i.jsx)(v,{}),children:[Object(i.jsx)(a.c,{index:!0,element:Object(i.jsx)(v,{})}),Object(i.jsx)(a.c,{path:":slug",element:Object(i.jsx)(v,{})})]}),Object(i.jsx)(a.c,{path:"*",element:Object(i.jsx)(h,{})})]})})})};Object(n.createRoot)(document.getElementById("root")).render(Object(i.jsx)(N,{}))}},[[23,1,2]]]);
//# sourceMappingURL=main.f61ff1cc.chunk.js.map