"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[123],{123:function(e,t,n){n.r(t);var r=n(885),i=n(791),o=n(739),c=n(184);t.default=function(){var e=(0,o.UO)().movieId,t=(0,i.useState)(null),n=(0,r.Z)(t,2),s=n[0],l=n[1];return(0,i.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=315cc20a868775627c92df79e063ea7f&language=en-US")).then((function(e){return e.json()})).then((function(e){l(e.results)})).catch((function(e){return console.log(e)}))}),[e]),s?(0,c.jsx)("div",{children:(0,c.jsxs)("ul",{children:[0===s.length&&(0,c.jsx)("li",{children:"We don't have reviews for this movie"}),s.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,c.jsxs)("li",{children:[(0,c.jsxs)("p",{style:{fontWeight:800},children:["Author: ",n]}),(0,c.jsx)("p",{style:{marginTop:10,marginBottom:10},children:r})]},t)}))]})}):null}}}]);
//# sourceMappingURL=123.c9c07ba0.chunk.js.map