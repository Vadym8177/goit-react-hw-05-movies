"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[566],{566:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var i,r,s,o,c=t(885),l=t(791),a=t(731),d=t(739),h=t(168),x=t(934),u=x.Z.div(i||(i=(0,h.Z)(["\n  display: flex;\n"]))),p=x.Z.p(r||(r=(0,h.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]))),j=x.Z.div(s||(s=(0,h.Z)(["\n  padding: 10px;\n"]))),v=x.Z.div(o||(o=(0,h.Z)(["\n  border-top: 1px solid black;\n  border-bottom: 1px solid black;\n  margin: 10px 0;\n"]))),f=t(184),m=function(){var e,n,t=(0,d.UO)().movieId,i=(0,l.useState)(null),r=(0,c.Z)(i,2),s=r[0],o=r[1],h=(0,d.TH)();if((0,l.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=315cc20a868775627c92df79e063ea7f&language=en-US")).then((function(e){return e.json()})).then((function(e){o(e)})).catch((function(e){return console.log(e)}))}),[t]),!s)return null;var x=s.title,m=s.release_date,g=s.vote_average,b=s.poster_path,k=s.overview,w=s.genres,Z=null!==(e=null===(n=h.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies";return(0,f.jsxs)("div",{children:[(0,f.jsx)(a.rU,{to:Z,children:"Go back"}),(0,f.jsxs)(u,{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(b),alt:x}),(0,f.jsxs)(j,{children:[(0,f.jsxs)("h2",{children:[x," (",m.slice(0,4),")"]}),(0,f.jsxs)(p,{children:["User Score: ",10*g.toFixed(1),"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)(p,{children:k}),(0,f.jsx)("h4",{children:"Genres"}),(0,f.jsx)(p,{children:w.map((function(e){return e.name})).join(" ")})]})]}),(0,f.jsxs)(v,{children:[(0,f.jsx)("h5",{style:{fontSize:24},children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"cast",state:h.state,children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"reviews",state:h.state,children:"Reviews"})})]})]}),(0,f.jsx)(l.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading page..."}),children:(0,f.jsx)(d.j3,{})})]})}}}]);
//# sourceMappingURL=566.55b196ff.chunk.js.map