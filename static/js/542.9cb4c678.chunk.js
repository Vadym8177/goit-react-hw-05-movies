"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[542],{542:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(885),u=n(791),a=n(731),c=n(739),i=n(184),o=function(e){var t=e.onSubmit,n=(0,u.useState)(""),a=(0,r.Z)(n,2),c=a[0],o=a[1];return(0,i.jsx)("div",{children:(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?(t(c),o("")):alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0445\u043e\u0442\u044c \u0447\u0442\u043e-\u0442\u043e")},children:[(0,i.jsx)("input",{type:"text",value:c,onChange:function(e){o(e.target.value.toLowerCase())}}),(0,i.jsx)("button",{type:"submit",children:"Search"})]})})},s=function(){var e,t=(0,u.useState)([]),n=(0,r.Z)(t,2),s=n[0],l=n[1],f=(0,u.useState)(""),h=(0,r.Z)(f,2),d=h[0],m=h[1],p=(0,a.lr)(),v=(0,r.Z)(p,2),j=v[0],x=v[1],b=(0,c.TH)(),g=null!==(e=j.get("searchValue"))&&void 0!==e?e:"";(0,u.useEffect)((function(){m(g),""!==d&&fetch("https://api.themoviedb.org/3/search/movie?api_key=315cc20a868775627c92df79e063ea7f&language=en-US&query=".concat(d,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){var t=e.results;l(t)})).catch((function(e){return console.log(e)}))}),[d,g]);return(0,i.jsxs)("div",{children:[(0,i.jsx)(o,{onSubmit:function(e){m(e),x({searchValue:e})}}),(0,i.jsx)("ul",{children:s.map((function(e){var t=e.title,n=e.id;return(0,i.jsx)("li",{children:(0,i.jsx)(a.rU,{to:"".concat(n),state:{from:b},children:t})},n)}))})]})}}}]);
//# sourceMappingURL=542.9cb4c678.chunk.js.map