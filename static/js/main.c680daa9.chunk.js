(this.webpackJsonpphotobrowser=this.webpackJsonpphotobrowser||[]).push([[0],{30:function(e,t,a){e.exports=a(42)},35:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c);a(35),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(13),l=a(16),s=a(12),u=a(29),m=a(15),p=a(14),h=a.n(p),f=a(19),b=a(25),E=a(17),d=a(10);var v=function(e){var t=e.pic;return r.a.createElement(b.a,{xl:2,lg:2,md:4,sm:4,xs:6,className:"thumbcontainer"},r.a.createElement(d.b,{to:{pathname:"/img/".concat(t.id)}},r.a.createElement(E.a,{style:{width:"auto",height:"auto",border:"0px"}},r.a.createElement(E.a.Img,{variant:"top",src:t.thumbnailUrl,alt:t.title}),r.a.createElement(E.a.Body,{className:"cardbody"},t.title))))},j="https://jsonplaceholder.typicode.com";function w(){return(w=Object(f.a)(h.a.mark((function e(t){var a,n,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/photos?_limit=").concat(t));case 2:return a=e.sent,e.next=5,a.json();case 5:return n=e.sent,c=n.map((function(e,t){var a={pic:e};return r.a.createElement(v,Object.assign({},a,{key:e.id}))})),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(f.a)(h.a.mark((function e(t){var a,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/photos/").concat(t));case 2:if(!(a=e.sent).ok){e.next=10;break}return e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw new Error("failed to fetch image");case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g={photos:function(e){return w.apply(this,arguments)},photo:function(e){return O.apply(this,arguments)}},k=a(11);var y=function(){var e=Object(k.f)().id,t=Object(n.useState)(""),a=Object(i.a)(t,2),c=a[0],o=a[1],u=Object(n.useState)(!1),p=Object(i.a)(u,2),h=p[0],f=p[1];return Object(n.useEffect)((function(){g.photo(e).then((function(e){o(e)})).catch((function(e){f(!0)}))}),[]),h?r.a.createElement(s.a,null,r.a.createElement("h1",{className:"detailstitle"},"Image not found")):r.a.createElement(s.a,null,r.a.createElement(d.b,{to:{pathname:"/"}},r.a.createElement(l.a,{variant:"info",className:"backbutton"},"Back")),r.a.createElement(s.a,{className:"detailscontainer"},r.a.createElement(m.a,null,r.a.createElement(m.a.Image,{src:c.url}),r.a.createElement(m.a.Caption,null,c.title),r.a.createElement(m.a.Caption,null,"Album: ",c.albumId))))},x=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(12),m=Object(i.a)(o,2),p=m[0],h=m[1];return Object(n.useEffect)((function(){g.photos(p).then((function(e){c(e)}))}),[p]),r.a.createElement(s.a,{className:"appcontainer"},r.a.createElement(k.c,null,r.a.createElement(k.a,{path:"/img/:id",render:function(){return r.a.createElement(y,a)}}),r.a.createElement(k.a,{path:"/"},r.a.createElement(u.a,{className:"justify-content-center thumbnails"},a),r.a.createElement("div",{className:"buttonContainer"},r.a.createElement(l.a,{variant:"info",onClick:function(){h(p+12)}},"Load more")))))};o.a.render(r.a.createElement(d.a,null,r.a.createElement(x,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.c680daa9.chunk.js.map