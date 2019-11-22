(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},41:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),o=a.n(c),i=(a(40),a(2)),s=a(3),l=a(5),m=a(4),u=a(6),d=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid Home"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/left.png",alt:"Go Back"}))),r.a.createElement("div",{class:"col"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://img.icons8.com/material-outlined/48/000000/home--v2.png",alt:"Go to Home"}))),r.a.createElement("div",{class:"col"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"https://img.icons8.com/android/48/000000/logout-rounded-down.png",alt:"Logout"})))))}}]),t}(n.Component)),h=a(13),p=a.n(h),v=a(16),f=a(10),g=(a(59),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onCardClick",value:function(){var e=this,t=this.cardRef.getBoundingClientRect().top-this.cardRef.getBoundingClientRect().bottom-15,a=this.props.card;this.props.beginRemoveCard(a),this.cardRef.addEventListener("transitionend",(function(a){"opacity"===a.propertyName&&e.props.moveRestUp(e.props.card,t)}))}},{key:"componentWillUpdate",value:function(e,t){var a=this;e.resetTravel&&this.cardRef.addEventListener("transitionend",(function(e){"transform"===e.propertyName&&a.props.resetTravel()}))}},{key:"render",value:function(){var e=this,t=this.props.card,a=t.travelTo||0,n="card";return 0!==a&&(n+=" traveling"),r.a.createElement("div",{className:n,style:{opacity:t.removing?0:1,transform:"translate3d(0,".concat(a,"px,0)")},ref:function(t){return e.cardRef=t},onClick:this.onCardClick.bind(this),id:t.id},r.a.createElement("div",{className:"card-inner ripple"},r.a.createElement("div",{className:"information"},r.a.createElement("div",{className:"value"},t.key),r.a.createElement("div",{className:"value"},t.name),r.a.createElement("div",{className:"value"},t.value),r.a.createElement("button",{onclick:"handleClick"},"Edit"),r.a.createElement("button",{onclick:"handleClick"},"Tick"))))}}]),t}(n.Component));p.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded";var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).moveRestUp=a.moveRestUp.bind(Object(f.a)(a)),a.removeCard=a.removeCard.bind(Object(f.a)(a)),a.resetTravel=a.resetTravel.bind(Object(f.a)(a)),a.beginRemoveCard=a.beginRemoveCard.bind(Object(f.a)(a)),a.state={cards:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;p.a.get("https://smart-flask-api.herokuapp.com/ml/recommend").then((function(t){console.log(t.data);var a=t.data;e.setState({cards:a})}))}},{key:"removeCard",value:function(e){var t=this.state.cards.indexOf(e);if(t>-1)return[].concat(Object(v.a)(this.state.cards.slice(0,t)),Object(v.a)(this.state.cards.slice(t+1)))}},{key:"beginRemoveCard",value:function(e){var t=Object(v.a)(this.state.cards);t[t.indexOf(e)].removing=!0,this.setState({cards:t})}},{key:"moveRestUp",value:function(e,t){var a=this.state.cards.indexOf(e),n=Object(v.a)(this.state.cards);n.forEach((function(e,n){n>a&&(e.travelTo=t)})),this.setState({cards:n})}},{key:"resetTravel",value:function(){var e=this.removeCard(this.state.cards.find((function(e){return e.removing})));e&&(e.forEach((function(e){return delete e.travelTo})),this.setState({cards:e}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cards-list"},this.state.cards.map((function(t,a){return r.a.createElement(g,{key:t.key,card:t,moveRestUp:e.moveRestUp,resetTravel:a===e.state.cards.length-1?e.resetTravel:null,beginRemoveCard:e.beginRemoveCard})})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://smart-flask-api.herokuapp.com/ml/automate").then((function(t){console.log(t.data);var a=t.data;e.setState({result:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Automate"),r.a.createElement(b,null))}}]),t}(n.Component),O=(a(60),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://smart-flask-api.herokuapp.com/ml/recommend").then((function(t){console.log(t.data);var a=t.data;e.setState({result:a})}))}},{key:"render",value:function(){var e=this.state.result.travelTo||0,t="card";return 0!==e&&(t+=" traveling"),console.log(this.state.result),r.a.createElement("div",null,r.a.createElement("div",{class:"container-fluid"},r.a.createElement("h1",null,"Recommend")),r.a.createElement("div",{class:"container-fluid"},r.a.createElement("div",{className:"cards-list"},r.a.createElement("ul",null,this.state.result.map((function(a){return r.a.createElement("div",{className:t,style:{opacity:a.removing?0:1,transform:"translate3d(0,".concat(e,"px,0)")},id:a.key},r.a.createElement("div",{className:"card-inner ripple"},r.a.createElement("div",{className:"information",key:a.key},r.a.createElement("div",{className:"value"},a.productid),r.a.createElement("div",{className:"value"},a.item_id),r.a.createElement("div",{className:"value"},a.item_name),r.a.createElement("button",{onclick:"addToList()"},"Tick"))))}))))))}}]),t}(n.Component)),j=a(17),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",loginErrors:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{action:"https://smart-flask-list.herokuapp.com/login",method:"POST"},r.a.createElement("input",{name:"username",placeholder:"username",value:this.state.username,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.password,onChange:this.handleChange,required:!0}),r.a.createElement("button",{type:"submit"},"Login")))}}]),t}(n.Component),y=(a(61),a(18)),w=a(12),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",password_confirmation:"",registration_errors:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{action:"https://smart-flask-list.herokuapp.com/register",method:"POST"},r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:this.state.username,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"password",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"password",name:"password_confirmation",placeholder:"password_confirmation",value:this.state.password_confirmation,onChange:this.handleChange,required:!0}),r.a.createElement("input",{type:"submit",name:"",id:"",class:"btn btn-primary",value:"Register"})))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid",id:"container-fluid"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null),r.a.createElement("div",{class:"item"},r.a.createElement("span",{class:"tag-font"},"Date")),r.a.createElement("div",{class:"item"},r.a.createElement("span",{class:"tag-font"},"Status"))),r.a.createElement(y.a,null,r.a.createElement("main",{id:"main"},r.a.createElement(k,null),r.a.createElement(C,null),r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/automate",component:E}),r.a.createElement(w.a,{path:"/recommend",component:O}))),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("div",{class:"container navbar"},r.a.createElement("div",{class:"item"},r.a.createElement(y.b,{to:"/automate"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/684/684831.svg",alt:"Automate list"}),r.a.createElement("span",{class:"tag-font"},"Automate"))),r.a.createElement("div",{class:"item"},r.a.createElement(y.b,{to:"/recommend"},r.a.createElement("span",{class:"tag-font"},"Recommend"),r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/684/684831.svg",alt:"Recommend Item"})))))))}}]),t}(r.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentWillUpdate",value:function(e,t){localStorage.setItem("name","ayush")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(R,null))}}]),t}(n.Component),T=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e,t){navigator.serviceWorker.register(e).then((function(e){console.log("sw is registered"),e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(N,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Smart-List-React",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Smart-List-React","/service-worker.js");T?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):S(t,e)}))}else console.log("wont register sw current env:","production")}()}},[[35,1,2]]]);
//# sourceMappingURL=main.c8e86e03.chunk.js.map