(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(23)},17:function(e,a,t){},21:function(e,a,t){},23:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(9),c=t.n(r),s=(t(17),t(1)),i=t(2),o=t(4),m=t(3),u=t(5),d=t(7),p=t(10),E=t.n(p),h=(t(21),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a,t,n;return this.props.data&&(e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))})),l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Testimonials")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e),l.a.createElement("h3",null,"I'm a ",l.a.createElement("span",null,a),". ",t,". "),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},n))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component)),f=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))});return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2019 ",l.a.createElement("a",{title:"Roberto Melfi",href:"https://robmelfi.github.io/"},"Roberto Melfi")),l.a.createElement("li",null,"Design by ",l.a.createElement("a",{title:"Styleshout",href:"http://www.styleshout.com/"},"Styleshout")))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),v=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a,t,n,r,c,s,i;return this.props.data&&(e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.city,r=this.props.data.address.state,c=this.props.data.address.zip,s=this.props.data.phone,i=this.props.data.email),l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Roberto Melfi Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n,l.a.createElement("br",null),r," ",c),l.a.createElement("br",null),l.a.createElement("span",null,s),l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:melfiroberto@gmail.com"},i))))))))}}]),a}(n.Component),N=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a,t,n,r;return this.props.data&&(e=this.props.data.skillmessage,a=this.props.data.education.map(function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))}),t=this.props.data.work.map(function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",{className:"newline"},e.description))}),n=this.props.data.publication.map(function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("h5",null,e.title),l.a.createElement("p",{className:"newline"},e.journal," ",l.a.createElement("br",null),e.authors," ",l.a.createElement("br",null),l.a.createElement("a",{href:e.url},e.title)," ",l.a.createElement("br",null)))}),r=this.props.data.skills.map(function(e){var a="images/tech/"+e.image;return l.a.createElement("div",{key:e.name,className:"columns feature-item"},l.a.createElement("img",{className:"skill",alt:e.name,src:a}),l.a.createElement("h5",null,e.name),l.a.createElement("p",null,e.description))})),l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},a)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},t)),l.a.createElement("div",{className:"row publication"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Publication"))),l.a.createElement("div",{className:"nine columns main-col"},n)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Favorite Tech"))),l.a.createElement("div",null,l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("p",{className:"lead center"},e)),l.a.createElement("ul",{className:"bgrid-quarters s-bgrid-thirds cf"},r))))}}]),a}(n.Component),b=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e,a;return this.props.data&&(e=this.props.data.email,a=this.props.data.contactmessage),l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row section-head"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Get In Touch."))),l.a.createElement("div",{className:"ten columns"},l.a.createElement("p",{className:"lead"},a," \xa0\xa0",l.a.createElement("span",null,l.a.createElement("a",{href:"mailto:melfiroberto@gmail.com"},e))))))}}]),a}(n.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e;return this.props.data&&(e=this.props.data.testimonials.map(function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.linkedin?l.a.createElement("a",{href:e.linkedin},"\xa0\xa0",e.user):e.user,e.linkedin?l.a.createElement("a",{href:e.linkedin},"\xa0\xa0",l.a.createElement("i",{className:"fa fa-linkedin"})):null)))})),l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),a}(n.Component),g=function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map(function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url,title:e.title},l.a.createElement("img",{alt:e.title,src:a}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.title),l.a.createElement("p",null,e.category))),l.a.createElement("div",{className:"link-icon"},l.a.createElement("i",{className:"fa fa-link"})))))});return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Check Out Some of My Work."),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e))))}}]),a}(n.Component),j=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={resumeData:{}},d.a.initialize("UA-132692830-1"),d.a.pageview(window.location.pathname),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"getResumeData",value:function(){var e=document.getElementById("siteLoading");E.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(a){this.setState({resumeData:a}),setTimeout(function(){e.outerHTML=""},500)}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(v,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.portfolio}),l.a.createElement(w,{data:this.state.resumeData.testimonials}),l.a.createElement(b,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}))}}]),a}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(l.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):y(e)})}}()}},[[11,2,1]]]);
//# sourceMappingURL=main.a97d11a7.chunk.js.map