(this.webpackJsonpphotowall=this.webpackJsonpphotowall||[]).push([[0],{56:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"startAddingPost",(function(){return P})),n.d(c,"startloadingPost",(function(){return C})),n.d(c,"startRemovingPosts",(function(){return k})),n.d(c,"startAddingComment",(function(){return w})),n.d(c,"startLoadingComments",(function(){return I})),n.d(c,"loadComments",(function(){return L})),n.d(c,"removePost",(function(){return T})),n.d(c,"addPost",(function(){return M})),n.d(c,"addComment",(function(){return R})),n.d(c,"loadPosts",(function(){return V}));var o=n(4),r=n(44),s=n.n(r),i=(n(56),n(15)),a=n(16),u=n(27),d=n(17),l=n(13),j=[];var b=Object(a.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE_POST":return[].concat(Object(u.a)(t.slice(0,e.index)),Object(u.a)(t.slice(e.index+1)));case"ADD_POST":return[].concat(Object(u.a)(t),[e.post]);case"LOAD_POSTS":return e.posts;default:return t}},comments:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_COMMENT":return t[e.postId]?Object(l.a)(Object(l.a)({},t),{},Object(d.a)({},e.postId,[].concat(Object(u.a)(t[e.postId]),[e.comment]))):Object(l.a)(Object(l.a)({},t),{},Object(d.a)({},e.postId,[e.comment]));case"LOAD_COMMENTS":return e.comments;default:return t}}}),p=n(33),m=n(18),h=n(19),O=n(21),f=n(20),v=n(5);var x=function(t){var e=t.post;return Object(v.jsxs)("figure",{className:"figure",children:[Object(v.jsxs)(i.b,{to:"/single/".concat(e.id),children:[" ",Object(v.jsx)("img",{className:"photo",src:e.imageLink,alt:e.description})]}),Object(v.jsxs)("figcaption",{children:[" ",Object(v.jsxs)("p",{children:[" ",e.description," "]}),"  "]}),Object(v.jsxs)("div",{className:"button-container",children:[Object(v.jsx)("button",{onClick:function(){t.startRemovingPosts(t.index,e.id),t.history.push("/")},children:" Remove "}),Object(v.jsx)(i.b,{className:"button",to:"/single/".concat(e.id),children:Object(v.jsxs)("div",{className:"comment-count",children:[Object(v.jsx)("div",{className:"speech-bubble"}),t.comments[e.id]?t.comments[e.id].length:0]})})]})]})};var g=function(t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(i.b,{style:{textDecoration:"none",color:"inherit"},to:"/AddPhoto",children:Object(v.jsx)("i",{class:"addIcon fa-duotone fa-plus"})}),Object(v.jsx)("div",{className:"photoGride",children:t.posts.sort((function(t,e){return e.id-t.id})).map((function(e,n){return Object(v.jsx)(x,Object(l.a)(Object(l.a)({post:e},t),{},{index:n}),n)}))})]})},y=n(24),D=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).handelsubmit=t.handelsubmit.bind(Object(y.a)(t)),t}return Object(h.a)(n,[{key:"handelsubmit",value:function(t){t.preventDefault();var e=t.target.Link.value,n=t.target.description.value,c={id:Number(new Date),imageLink:e,description:n};n&&e&&(this.props.startAddingPost(c),this.props.onHistory.push("/"))}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)("div",{className:"form",children:Object(v.jsxs)("form",{onSubmit:this.handelsubmit,children:[Object(v.jsx)("input",{type:"text",placeholder:"Link",name:"Link"}),Object(v.jsx)("input",{type:"text",placeholder:"Description",name:"description"}),Object(v.jsx)("button",{children:" Post "})]})})})}}]),n}(o.Component),S=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;return Object(m.a)(this,n),(t=e.call(this)).handleSubmit=t.handleSubmit.bind(Object(y.a)(t)),t}return Object(h.a)(n,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=t.target.elements.comment.value;this.props.startAddingComment(e,this.props.id),t.target.elements.comment.value=""}},{key:"render",value:function(){return Object(v.jsxs)("div",{className:"comment",children:[this.props.comments.map((function(t,e){return Object(v.jsxs)("p",{children:[" ",t," "]},e)})),Object(v.jsxs)("form",{className:"comment-form",onSubmit:this.handleSubmit,children:[Object(v.jsx)("input",{type:"text",placeholder:"comment ",name:"comment"}),Object(v.jsx)("input",{type:"submit",hidden:!0})]})]})}}]),n}(o.Component),E=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){return Object(m.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this.props,e=t.match,n=t.posts,c=Number(e.params.id),o=n.find((function(t){return t.id===c})),r=this.props.comments[e.params.id]||[],s=this.props.posts.findIndex((function(t){return t.id===c}));return!0===this.props.loading?Object(v.jsx)("div",{className:"loader",children:" ...loading "}):o?Object(v.jsxs)("div",{className:"single-photo",children:[Object(v.jsx)(x,Object(l.a)(Object(l.a)({post:o},this.props),{},{index:s})),Object(v.jsx)(S,{startAddingComment:this.props.startAddingComment,comments:r,id:c})]}):Object(v.jsx)("h1",{children:" ...no post found "})}}]),n}(o.Component),N=function(t){Object(O.a)(n,t);var e=Object(f.a)(n);function n(){var t;Object(m.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={loading:!0},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.props.startloadingPost().then((function(){t.setState({loading:!1})})),this.props.startLoadingComments()}},{key:"render",value:function(){var t=this;return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{children:Object(v.jsx)(i.b,{to:"/",children:" Photowall "})}),Object(v.jsx)(i.c,{exact:!0,path:"/",render:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(g,Object(l.a)({},t.props))})}}),Object(v.jsx)(i.c,{path:"/AddPhoto",render:function(e){var n=e.history;return Object(v.jsx)(D,Object(l.a)(Object(l.a)({},t.props),{},{onHistory:n}))}}),Object(v.jsx)(i.c,{path:"/single/:id",render:function(e){return Object(v.jsx)(E,Object(l.a)(Object(l.a)({loading:t.state.loading},t.props),e))}})]})}}]),n}(o.Component),_=n(38);_.a.initializeApp({apiKey:"AIzaSyBTKCbHvbI1ErC25UeRa9EkK12nsVZmjA8",authDomain:"photowall-e106b.firebaseapp.com",databaseURL:"https://photowall-e106b-default-rtdb.firebaseio.com",projectId:"photowall-e106b",storageBucket:"photowall-e106b.appspot.com",messagingSenderId:"480224168156",appId:"1:480224168156:web:f19e9c09f4416d6aaf8c19",measurementId:"G-4LRDYPHJ1E"});var A=_.a.database();function P(t){return function(e){return A.ref("posts").update(Object(d.a)({},t.id,t)).then((function(){e(M(t))})).catch((function(t){console.log(t)}))}}function C(){return function(t){return A.ref("posts").once("value").then((function(e){var n=[];e.forEach((function(t){n.push(t.val())})),t(V(n))})).catch((function(t){console.log(t)}))}}function k(t,e){var n,c=(n={},Object(d.a)(n,"posts/".concat(e),null),Object(d.a)(n,"comments/".concat(e),null),n);return function(e){return A.ref().update(c).then((function(){e(T(t))})).catch((function(t){console.log(t)}))}}function w(t,e){return function(n){return A.ref("comments/".concat(e)).push(t).then((function(){n(R(t,e))})).catch((function(t){console.log(t)}))}}function I(){return function(t){return A.ref("comments").once("value").then((function(e){var n={};e.forEach((function(t){n[t.key]=Object.values(t.val())})),t(L(n))}))}}function L(t){return{type:"LOAD_COMMENTS",comments:t}}function T(t){return{type:"REMOVE_POST",index:t}}function M(t){return{type:"ADD_POST",post:t}}function R(t,e){return{type:"ADD_COMMENT",comment:t,postId:e}}function V(t){return{type:"LOAD_POSTS",posts:t}}var H=n(47);var U=Object(H.a)(Object(p.b)((function(t){return{posts:t.posts,comments:t.comments}}),(function(t){return Object(a.b)(c,t)}))(N)),X=n(51),B=n.n(X),J=Object(a.d)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),Object(a.a)(B.a));s.a.render(Object(v.jsx)(p.a,{store:J,children:Object(v.jsx)(i.a,{children:Object(v.jsx)(U,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.66fd25b4.chunk.js.map