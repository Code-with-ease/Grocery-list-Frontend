(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{34:function(e,t,a){e.exports=a(65)},39:function(e,t,a){},40:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(31),i=a.n(o),c=(a(39),a(2)),l=a(3),s=a(5),m=a(4),u=a(6),d=(a(40),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid Home"},r.a.createElement("div",{class:"row"},r.a.createElement("div",{class:"col"},r.a.createElement("a",{href:"/Smart-List-React"},r.a.createElement("img",{src:"https://img.icons8.com/android/24/000000/left.png",alt:"Go Back"}))),r.a.createElement("div",{class:"col"},r.a.createElement("a",{href:"/Smart-List-React"},r.a.createElement("img",{src:"https://img.icons8.com/material-outlined/48/000000/home--v2.png",alt:"Go to Home"}))),r.a.createElement("div",{class:"col"},r.a.createElement("a",{href:"/Smart-List-React"},r.a.createElement("img",{src:"https://img.icons8.com/android/48/000000/logout-rounded-down.png",alt:"Logout"})))))}}]),t}(n.Component)),p=a(14),g=a.n(p),v=a(16),h=a(12),f=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onCardClick",value:function(){var e=this,t=this.cardRef.getBoundingClientRect().top-this.cardRef.getBoundingClientRect().bottom-15,a=this.props.card;this.props.beginRemoveCard(a),this.cardRef.addEventListener("transitionend",(function(a){"opacity"===a.propertyName&&e.props.moveRestUp(e.props.card,t)}))}},{key:"componentWillUpdate",value:function(e,t){var a=this;e.resetTravel&&this.cardRef.addEventListener("transitionend",(function(e){"transform"===e.propertyName&&a.props.resetTravel()}))}},{key:"render",value:function(){var e=this,t=this.props.card,a=t.travelTo||0,n="card";return 0!==a&&(n+=" traveling"),r.a.createElement("div",{className:n,style:{opacity:t.removing?0:1,transform:"translate3d(0,".concat(a,"px,0)")},ref:function(t){return e.cardRef=t},onClick:this.onCardClick.bind(this),id:t.id},r.a.createElement("div",{className:"card-inner ripple"},r.a.createElement("div",{className:"information"},r.a.createElement("img",{src:t.imageSrc,className:"card-image",alt:"some alt"}),r.a.createElement("div",{className:"value"},t.value),r.a.createElement("div",{className:"label"},t.label))))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).moveRestUp=a.moveRestUp.bind(Object(h.a)(a)),a.removeCard=a.removeCard.bind(Object(h.a)(a)),a.resetTravel=a.resetTravel.bind(Object(h.a)(a)),a.beginRemoveCard=a.beginRemoveCard.bind(Object(h.a)(a)),a.state={cards:[{name:"Card 1",imageSrc:"https://pbs.twimg.com/profile_images/655066410087940096/QSUlrrlm.png",presentedTime:"10 minutes ago",value:"Some Value 1",label:"Some Label 1",id:"1"},{name:"Card 2",imageSrc:"https://asmallorange.com/assets/img/logo/logo.png",presentedTime:"11 minutes ago",value:"Some Value 2",label:"Some Label 2",id:"2"},{name:"Card 3",imageSrc:"http://smalldata.io/startup/common-files/icons/sdl_logo.png",presentedTime:"12 minutes ago",value:"Some Value 3",label:"Some Label 3",id:"3"},{name:"Card 4",imageSrc:"http://www.worldbank.org/content/dam/Worldbank/Highlights%20&%20Features/small-states-forum-logo.png",presentedTime:"13 minutes ago",value:"Some Value 4",label:"Some Label 4",id:"4"},{name:"Card 5",imageSrc:"http://www.worldbank.org/content/dam/photos/780x439/2016/sep-1/ssf2016AEM.jpg",presentedTime:"14 minutes ago",value:"Some Value 5",label:"Some Label 5",id:"5"},{name:"Card 6",imageSrc:"https://smallbusiness.house.gov/uploadedphotos/highresolution/94df275c-e09b-4157-98a5-9f4ef77aee25.png",presentedTime:"15 minutes ago",value:"Some Value 6",label:"Some Label 6",id:"6"},{name:"Card 7",imageSrc:"https://i.ytimg.com/vi/fypkPgeQxBQ/maxresdefault.jpg",presentedTime:"16 minutes ago",value:"Some Value 7",label:"Some Label 7",id:"7"},{name:"Card 8",imageSrc:"http://smallbusinessbc.ca/wp-content/uploads/2015/01/SBBC-Logo-FC-WB.gif",presentedTime:"17 minutes ago",value:"Some Value 8",label:"Some Label 8",id:"8"},{name:"Card 9",imageSrc:"http://isbdc.org/wp-content/uploads/2014/09/ffs-logo-web-new.jpg",presentedTime:"18 minutes ago",value:"Some Value 9",label:"Some Label 9",id:"9"},{name:"Card 10",imageSrc:"https://www.bankofamerica.com/content/images/ContextualSiteGraphics/Marketing/Highlights/en_US/Small_Biz_HPYNI_column2_jan.jpg",presentedTime:"19 minutes ago",value:"Some Value 10",label:"Some Label 10",id:"10"},{name:"Card 11",imageSrc:"https://pbs.twimg.com/profile_images/459069336443822080/FpBLZE8R.png",presentedTime:"20 minutes ago",value:"Some Value 11",label:"Some Label 11",id:"11"},{name:"Card 12",imageSrc:"http://68.media.tumblr.com/d29ecb1676f74ba704e36f479e9325e2/tumblr_nm4rb0WAdK1s4ygi0o1_1280.jpg",presentedTime:"21 minutes ago",value:"Some Value 12",label:"Some Label 12",id:"12"}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"removeCard",value:function(e){var t=this.state.cards.indexOf(e);if(t>-1)return[].concat(Object(v.a)(this.state.cards.slice(0,t)),Object(v.a)(this.state.cards.slice(t+1)))}},{key:"beginRemoveCard",value:function(e){var t=Object(v.a)(this.state.cards);t[t.indexOf(e)].removing=!0,this.setState({cards:t})}},{key:"moveRestUp",value:function(e,t){var a=this.state.cards.indexOf(e),n=Object(v.a)(this.state.cards);n.forEach((function(e,n){n>a&&(e.travelTo=t)})),this.setState({cards:n})}},{key:"resetTravel",value:function(){var e=this.removeCard(this.state.cards.find((function(e){return e.removing})));e&&(e.forEach((function(e){return delete e.travelTo})),this.setState({cards:e}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"cards-list"},this.state.cards.map((function(t,a){return r.a.createElement(f,{key:t.id,card:t,moveRestUp:e.moveRestUp,resetTravel:a===e.state.cards.length-1?e.resetTravel:null,beginRemoveCard:e.beginRemoveCard})})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://smart-flask-api.herokuapp.com/ml/automate").then((function(t){console.log(t.data);var a=t.data;e.setState({result:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Automate"),r.a.createElement("form",{action:"https://smart-flask-api.herokuapp.com/ml/automate",method:"GET"},r.a.createElement("input",{name:"itemid",placeholder:"item id"}),r.a.createElement("input",{name:"",id:"",class:"btn btn-primary",type:"submit",value:"Add"})),r.a.createElement(b,null))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://smart-flask-api.herokuapp.com/ml/recommend").then((function(t){console.log(t.data);var a=t.data;e.setState({result:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{class:"container-fluid"},r.a.createElement("h1",null,"Recommend")),r.a.createElement("div",{class:"container-fluid"},r.a.createElement("ul",null,this.state.result.map((function(e){return r.a.createElement("li",{key:e.key},e.customerId)})))))}}]),t}(n.Component),j=(a(58),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;g.a.get("https://smart-flask-api.herokuapp.com/login").then((function(t){console.log(t.data);var a=t.data;e.setState({result:a})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{action:"https://smart-flask-api.herokuapp.com/login",method:"POST"},r.a.createElement("input",{name:"username",placeholder:"username"}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"password"}),r.a.createElement("br",null),r.a.createElement("input",{name:"",id:"",class:"btn btn-primary",type:"submit",value:"Login"})))}}]),t}(n.Component)),w=(a(59),a(17)),O=a(11),k=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"container-fluid",id:"container-fluid"},r.a.createElement("header",{className:"App-header"},r.a.createElement(d,null),r.a.createElement("div",{class:"item"},r.a.createElement("span",{class:"tag-font"},"Date")),r.a.createElement("div",{class:"item"},r.a.createElement("span",{class:"tag-font"},"Status"))),r.a.createElement(w.a,null,r.a.createElement("main",{id:"main"},r.a.createElement(j,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/automate",component:E}),r.a.createElement(O.a,{path:"/recommend",component:S}))),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("div",{class:"container navbar"},r.a.createElement("div",{class:"item"},r.a.createElement(w.b,{to:"/automate"},r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/684/684831.svg",alt:"Automate list"}),r.a.createElement("span",{class:"tag-font"},"Automate"))),r.a.createElement("div",{class:"item"},r.a.createElement(w.b,{to:"/recommend"},r.a.createElement("span",{class:"tag-font"},"Recommend"),r.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/684/684831.svg",alt:"Recommend Item"})))))))}}]),t}(r.a.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null))}}]),t}(n.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){console.log("sw is registered"),e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(y,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Smart-List-React",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Smart-List-React","/service-worker.js");C?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}else console.log("wont register sw current env:","production")}()}},[[34,1,2]]]);
//# sourceMappingURL=main.cb81e71e.chunk.js.map