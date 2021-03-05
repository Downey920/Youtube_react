(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],[,,function(e,t,n){e.exports={container:"video_container__tZdlk",grid:"video_grid__1yg42",list:"video_list__206Hu",video:"video_video__3ovyg",thumbnail:"video_thumbnail__1EoU5",metadata:"video_metadata__1fCG6",title:"video_title__1mmAS",channel:"video_channel__2t9Dk"}},function(e,t,n){e.exports={header:"search_header__2dJk4",logo:"search_logo__D4Lef",img:"search_img__3mePy",input:"search_input__WPyaQ",button:"search_button__2NmEY",buttonImg:"search_buttonImg__2wFOU"}},function(e,t,n){e.exports={app:"app_app__81R5l",content:"app_content__RNh8l",detail:"app_detail__fC4hN",list:"app_list__3nRK2"}},function(e,t,n){e.exports={detail:"video_detail_detail__3KK-x",description:"video_detail_description__2MudL",videoPlayer:"video_detail_videoPlayer__1Joye"}},,,,,,,function(e,t,n){e.exports={videos:"videos_videos__3kevg"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),c=n.n(i),s=n(11),o=n.n(s),r=(n(20),n(9)),l=n(3),u=n.n(l),d=Object(i.memo)((function(e){var t=Object(i.useRef)(),n=function(){var n=t.current.value;e.onSearch(n)};return Object(a.jsxs)("header",{className:u.a.header,children:[Object(a.jsxs)("div",{className:u.a.logo,children:[Object(a.jsx)("img",{className:u.a.img,src:"./images/logo.png",alt:"logo"}),Object(a.jsx)("h1",{className:u.a.title,children:"Youtube"})]}),Object(a.jsx)("input",{className:u.a.input,ref:t,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&n()}}),Object(a.jsx)("button",{className:u.a.button,type:"submit",onClick:function(){n()},children:Object(a.jsx)("img",{className:u.a.buttonImg,src:"./images/search.png",alt:"search"})})]})})),p=n(2),h=n.n(p),b=Object(i.memo)((function(e){var t="list"===e.display?h.a.list:h.a.grid;return Object(a.jsx)("li",{className:"".concat(h.a.container," ").concat(t),onClick:function(){return e.onVideoClick(e.video)},children:Object(a.jsxs)("div",{className:h.a.video,children:[Object(a.jsx)("img",{className:h.a.thumbnail,src:e.video.snippet.thumbnails.medium.url,alt:"video_thumbnail"}),Object(a.jsxs)("div",{className:h.a.metadata,children:[Object(a.jsx)("p",{className:h.a.title,children:e.video.snippet.title}),Object(a.jsx)("p",{className:h.a.channel,children:e.video.snippet.channelTitle})]})]})})})),j=n(12),m=n.n(j),_=function(e){return Object(a.jsx)("ul",{className:m.a.videos,children:e.videos.map((function(t){return Object(a.jsx)(b,{video:t,onVideoClick:e.onVideoClick,display:e.display},t.id)}))})},v=n(4),O=n.n(v),f=n(5),x=n.n(f),y=function(e){return Object(a.jsxs)("section",{className:x.a.detail,children:[Object(a.jsx)("div",{className:x.a.videoPlayer,children:Object(a.jsx)("iframe",{className:x.a.video,type:"text/html",title:"youtube video player",width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(e.video.id),frameBorder:"0",allowFullScreen:!0})}),Object(a.jsx)("h2",{children:e.video.snippet.title}),Object(a.jsx)("h3",{children:e.video.snippet.channelTitle}),Object(a.jsx)("pre",{className:x.a.description,children:e.video.snippet.description})]})},g=function(e){var t=Object(i.useState)([]),n=Object(r.a)(t,2),c=n[0],s=n[1],o=Object(i.useState)(null),l=Object(r.a)(o,2),u=l[0],p=l[1],h=Object(i.useCallback)((function(t){e.youtube.search(t).then((function(e){s(e),p(null)}))}),[e.youtube]);return Object(i.useEffect)((function(){e.youtube.mostPopular().then(s)}),[e.youtube]),Object(a.jsxs)("div",{className:O.a.app,children:[Object(a.jsx)(d,{onSearch:h}),Object(a.jsxs)("section",{className:O.a.content,children:[u&&Object(a.jsx)("div",{className:O.a.detail,children:Object(a.jsx)(y,{video:u})}),Object(a.jsx)("div",{className:O.a.list,children:Object(a.jsx)(_,{videos:c,onVideoClick:function(e){p(e),window.scrollTo(0,0)},display:u?"list":"grid"})})]})]})},k=n(10),N=n(6),w=n.n(N),C=n(8),S=n(13),P=n(14),R=new(function(){function e(t){Object(S.a)(this,e),this.key=t,this.getRequestOptions={method:"GET",redirect:"follow"}}return Object(P.a)(e,[{key:"mostPopular",value:function(){var e=Object(C.a)(w.a.mark((function e(){var t,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=".concat(this.key),this.getRequestOptions);case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,e.abrupt("return",n.items);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.log("error",e.t0));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(C.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=".concat(t,"&type=video&key=").concat(this.key),this.getRequestOptions);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a.items.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{id:e.id.videoId})})));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",console.log("error",e.t0));case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyCLa7D2kMUdQtWa8wAj2hpWciL1ksrtSA8");o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(g,{youtube:R})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.16cdda68.chunk.js.map