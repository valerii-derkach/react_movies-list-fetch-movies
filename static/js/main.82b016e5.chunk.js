(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var s=c(8),i=c.n(s),a=(c(15),c(10)),n=c(2),r=c(1),l=(c(16),c(17),c(18),c(0)),o=function(e){var t=e.movie;return Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("div",{className:"card-image","data-cy":"card-image",children:Object(l.jsx)("figure",{className:"image is-4by3",children:Object(l.jsx)("img",{src:t.Poster,alt:"Film logo"})})}),Object(l.jsxs)("div",{className:"card-content",children:[Object(l.jsxs)("div",{className:"media",children:[Object(l.jsx)("div",{className:"media-left",children:Object(l.jsx)("figure",{className:"image is-48x48",children:Object(l.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(l.jsx)("div",{className:"media-content",children:Object(l.jsx)("p",{className:"title is-8","data-cy":"movie-title",children:t.Title})})]}),Object(l.jsxs)("div",{className:"content","data-cy":"content",children:[t.Plot,Object(l.jsx)("br",{})]})]})]})},d=function(e){var t=e.movies;return Object(l.jsx)("div",{className:"movies",children:t.map((function(e){return Object(l.jsx)(o,{movie:e},e.imdbID)}))})},j=c(6),m=c.n(j),b=c(9),u=c(7),h=c.n(u),v="https://www.omdbapi.com/?apikey=".concat("c9d98407","&t=");function O(){return(O=Object(b.a)(h.a.mark((function e(t){var c,s;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:if("False"!==(s=e.sent).Response){e.next=8;break}throw new Error("movie does not exist");case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(21);var x=function(e){var t=e.addMovie,c=e.movies,s=Object(r.useState)(""),i=Object(n.a)(s,2),a=i[0],d=i[1],j=Object(r.useState)(null),b=Object(n.a)(j,2),u=b[0],h=b[1],v=Object(r.useState)(!1),x=Object(n.a)(v,2),f=x[0],p=x[1],N=Object(r.useState)(!1),g=Object(n.a)(N,2),y=g[0],w=g[1],S=Object(r.useState)(!1),k=Object(n.a)(S,2),F=k[0],D=k[1],I=function(e){p(!0),function(e){return O.apply(this,arguments)}(e).then((function(e){h(e),p(!1)})).catch((function(e){console.log("error",e),w(!0),p(!1)}))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),u&&!c.some((function(e){return e.imdbID===u.imdbID}))?(t(u),h(null)):D(!0),d("")},children:[Object(l.jsxs)("div",{className:"field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("input",{type:"text",id:"movie-title",onChange:function(e){d(e.target.value),w(!1),D(!1)},value:a,placeholder:"Enter a title to search",className:m()("input",{"is-danger":y})})}),y&&Object(l.jsx)("p",{className:"help is-danger",children:"Can't find a movie with such a title"}),F&&Object(l.jsx)("p",{className:"help is-danger",children:"This movie already exists in the MovieList"})]}),Object(l.jsxs)("div",{className:"field is-grouped",children:[Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"find",type:"button",className:m()("button is-light",{"is-loading":f}),onClick:function(){I(a)},children:"Find a movie"})}),Object(l.jsx)("div",{className:"control",children:Object(l.jsx)("button",{"data-cy":"add",disabled:!u,type:"submit",className:"button is-primary",children:"Add to the list"})})]})]}),Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"title",children:"Preview"}),u&&Object(l.jsx)(o,{movie:u})]})]})},f=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(l.jsxs)("div",{className:"page",children:[Object(l.jsx)("div",{className:"page-content",children:Object(l.jsx)(d,{movies:c})}),Object(l.jsx)("div",{className:"sidebar",children:Object(l.jsx)(x,{addMovie:function(e){s((function(t){return[].concat(Object(a.a)(t),[e])}))},movies:c})})]})};i.a.render(Object(l.jsx)(f,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.82b016e5.chunk.js.map