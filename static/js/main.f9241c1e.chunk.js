(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{56:function(e,c,t){},57:function(e,c,t){},58:function(e,c,t){},59:function(e,c,t){},67:function(e,c,t){},69:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t.n(s),n=t(20),i=t.n(n),r=(t(56),t(57),t(58),t(6)),o=t(46),l=t.n(o),j=t(90),h=t(40),d=t(19),b=(t(59),t(31)),u=t.n(b),g=t(45),O=t.n(g),m=t(89),x=t(4),_=t(2),v=Object(s.createContext)(),p=function(e){var c=e.reducer,t=e.initialState,a=e.children;return Object(_.jsx)(v.Provider,{value:Object(s.useReducer)(c,t),children:a})},f=function(){return Object(s.useContext)(v)},N=t(38),P="SET_SEARCH_TERM",w=function(e,c){switch(console.log(c),c.type){case P:return Object(N.a)(Object(N.a)({},e),{},{term:c.term});default:return e}};var S=function(e){var c=e.hideButtons,t=void 0!==c&&c,a=f(),n=Object(d.a)(a,2);Object(h.a)(n[0]);var i=n[1],r=Object(s.useState)(""),o=Object(d.a)(r,2),l=o[0],j=o[1],b=Object(x.f)(),g=function(e){e.preventDefault(),console.log("You hit search "+l),i({type:P,term:l}),b.push("/search")};return Object(_.jsxs)("form",{className:"search",children:[Object(_.jsxs)("div",{className:"search__input",children:[Object(_.jsx)(u.a,{className:"search__inputIcon"}),Object(_.jsx)("input",{value:l,onChange:function(e){return j(e.target.value)}}),Object(_.jsx)(O.a,{})]}),t?Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(m.a,{className:"search__buttonsHidden",type:"submit",onClick:g,variant:"outlined",children:"Google Search"}),Object(_.jsx)(m.a,{className:"search__buttonsHidden",variant:"outlined",children:"I'm Feeling Lucky"})]}):Object(_.jsxs)("div",{className:"search__buttons",children:[Object(_.jsx)(m.a,{type:"submit",onClick:g,variant:"outlined",children:"Google Search"}),Object(_.jsx)(m.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})};var k=function(){return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsxs)("div",{className:"home__header",children:[Object(_.jsxs)("div",{className:"home__headerLeft",children:[Object(_.jsx)(r.b,{to:"/about",children:"About"}),Object(_.jsx)(r.b,{to:"/store",children:"Store"})]}),Object(_.jsxs)("div",{className:"home__headerRight",children:[Object(_.jsx)(r.b,{to:"/gmail",children:"Gmail"}),Object(_.jsx)(r.b,{to:"/images",children:"Images"}),Object(_.jsx)(l.a,{}),Object(_.jsx)(j.a,{})]})]}),Object(_.jsxs)("div",{className:"home__body",children:[Object(_.jsx)("img",{src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",alt:""}),Object(_.jsx)("div",{className:"home__inputContainer",children:Object(_.jsx)(S,{})})]})]})},y=(t(67),t(37)),I=t.n(y),C=t(47),T=function(e){var c=Object(s.useState)(null),t=Object(d.a)(c,2),a=t[0],n=t[1];return Object(s.useEffect)((function(){(function(){var c=Object(C.a)(I.a.mark((function c(){return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyDgh6GOhl83LxQkfIBU6gM3es3ik0hDsbY","&cx=").concat("d1a47e7208711706c","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]),{data:a}},L=t(85),A=t(86),B=t(87),F=t(88),R=t(48),E=t.n(R);var M=function(){var e=f(),c=Object(d.a)(e,2),t=c[0].term,s=(c[1],T(t).data);return console.log(s),Object(_.jsxs)("div",{className:"searchPage",children:[Object(_.jsxs)("div",{className:"searchPage__header",children:[Object(_.jsx)(r.b,{to:"/",children:Object(_.jsx)("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",alt:""})}),Object(_.jsxs)("div",{className:"searchPage__headerBody",children:[Object(_.jsx)(S,{hideButtons:!0}),Object(_.jsxs)("div",{className:"searchPage__options",children:[Object(_.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(u.a,{}),Object(_.jsx)(r.b,{to:"/all",children:"All"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(L.a,{}),Object(_.jsx)(r.b,{to:"/news",children:"News"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(E.a,{}),Object(_.jsx)(r.b,{to:"/images",children:"Images"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(A.a,{}),Object(_.jsx)(r.b,{to:"/shopping",children:"Shopping"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(B.a,{}),Object(_.jsx)(r.b,{to:"/maps",children:"Maps"})]}),Object(_.jsxs)("div",{className:"searchPage__option",children:[Object(_.jsx)(F.a,{}),Object(_.jsx)(r.b,{to:"/more",children:"More"})]})]}),Object(_.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/settings",children:"Settings"})}),Object(_.jsx)("div",{className:"searchPage__option",children:Object(_.jsx)(r.b,{to:"/tools",children:"Tools"})})]})]})]})]}),t&&Object(_.jsxs)("div",{className:"searchPage__results",children:[Object(_.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===s||void 0===s?void 0:s.searchInformation.formattedTotalResults," results (",null===s||void 0===s?void 0:s.searchInformation.formattedSearchTime," seconds) for ",t]}),null===s||void 0===s?void 0:s.items.map((function(e){var c,t,s,a,n,i,r,o;return Object(_.jsxs)("div",{className:"searchPage__result",children:[Object(_.jsxs)("a",{href:e.link,children:[(null===(c=e.pagemap)||void 0===c||null===(t=c.cse_image)||void 0===t?void 0:t.length)>0&&(null===(s=e.pagemap)||void 0===s||null===(a=s.cse_image[0])||void 0===a?void 0:a.src)&&Object(_.jsx)("img",{className:"searchPage__resultImage",src:(null===(n=e.pagemap)||void 0===n||null===(i=n.cse_image)||void 0===i?void 0:i.length)>0&&(null===(r=e.pagemap)||void 0===r||null===(o=r.cse_image[0])||void 0===o?void 0:o.src),alt:""}),e.displayLink,"\u1401"]}),Object(_.jsx)("a",{className:"searchPage__resultTitle",href:e.link,children:Object(_.jsx)("h2",{children:e.title})}),Object(_.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]})}))]})]})};var D=function(){return Object(_.jsx)("div",{className:"app",children:Object(_.jsx)(r.a,{children:Object(_.jsxs)(x.c,{children:[Object(_.jsx)(x.a,{path:"/search",children:Object(_.jsx)(M,{})}),Object(_.jsx)(x.a,{path:"/about",children:Object(_.jsx)("h1",{children:"This is the About page"})}),Object(_.jsx)(x.a,{path:"/",children:Object(_.jsx)(k,{})})]})})})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,91)).then((function(c){var t=c.getCLS,s=c.getFID,a=c.getFCP,n=c.getLCP,i=c.getTTFB;t(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(p,{initialState:{term:null},reducer:w,children:Object(_.jsx)(D,{})})}),document.getElementById("root")),G()}},[[69,1,2]]]);
//# sourceMappingURL=main.f9241c1e.chunk.js.map