(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"6xyR":function(e,t,a){"use strict";var n=a("RAs/"),r=a("hVfy"),c=a("TSYQ"),s=a.n(c),o=a("q1tI"),l=a.n(o),u=a("vUet"),i=a("YdCC"),d=a("U1MP"),b=a("Wzyw"),m=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,o=e.variant,i=e.as,d=void 0===i?"img":i,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),m=Object(u.a)(a,"card-img");return l.a.createElement(d,Object(n.a)({ref:t,className:s()(o?m+"-"+o:m,c)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var j=m,f=Object(d.a)("h5"),v=Object(d.a)("h6"),h=Object(i.a)("card-body"),O=Object(i.a)("card-title",{Component:f}),x=Object(i.a)("card-subtitle",{Component:v}),p=Object(i.a)("card-link",{Component:"a"}),N=Object(i.a)("card-text",{Component:"p"}),g=Object(i.a)("card-header"),y=Object(i.a)("card-footer"),C=Object(i.a)("card-img-overlay"),E=l.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.className,i=e.bg,d=e.text,m=e.border,j=e.body,f=e.children,v=e.as,O=void 0===v?"div":v,x=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),p=Object(u.a)(a,"card"),N=Object(o.useMemo)((function(){return{cardHeaderBsPrefix:p+"-header"}}),[p]);return l.a.createElement(b.a.Provider,{value:N},l.a.createElement(O,Object(n.a)({ref:t},x,{className:s()(c,p,i&&"bg-"+i,d&&"text-"+d,m&&"border-"+m)}),j?l.a.createElement(h,null,f):f))}));E.displayName="Card",E.defaultProps={body:!1},E.Img=j,E.Title=O,E.Subtitle=x,E.Body=h,E.Link=p,E.Text=N,E.Header=g,E.Footer=y,E.ImgOverlay=C;t.a=E},"E+pF":function(e,t,a){e.exports={heading_container:"HeadingComponent_heading_container__2R-mu",heading:"HeadingComponent_heading__1Y79W"}},Vu2W:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("nKUr"),r=(a("q1tI"),a("7vrA")),c=a("E+pF"),s=a.n(c);function o(e){var t=e.heading;return Object(n.jsx)(r.a,{className:" ".concat(s.a.heading_container," "),children:Object(n.jsx)("h1",{className:" ".concat(s.a.heading," "),children:t})})}},fBv8:function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n=a("nKUr"),r=a("q1tI"),c=a.n(r),s=a("RAs/"),o=a("hVfy"),l=a("ZCiN");var u=function(e,t){var a=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(!a.current)return e();a.current=!1}),t)},i=a("Xyuu"),d=a("XcHJ"),b=a("i52p"),m=Math.pow(2,31)-1;function j(e,t,a){var n=a-Date.now();e.current=n<=m?setTimeout(t,n):setTimeout((function(){return j(e,t,a)}),m)}function f(){var e=Object(d.a)(),t=Object(r.useRef)();return Object(b.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var a=function(){return clearTimeout(t.current)};return{set:function(n,r){void 0===r&&(r=0),e()&&(a(),r<=m?t.current=setTimeout(n,r):j(t,n,Date.now()+r))},clear:a}}),[])}var v=a("TSYQ"),h=a.n(v),O=a("dRu9"),x=a("17x9"),p=a.n(x),N=a("y8DL"),g=a("YdCC"),y=Object(g.a)("carousel-caption"),C=a("vUet"),E=c.a.forwardRef((function(e,t){var a=e.as,n=void 0===a?"div":a,r=e.bsPrefix,l=e.children,u=e.className,i=Object(o.a)(e,["as","bsPrefix","children","className"]),d=h()(u,Object(C.a)(r,"carousel-item"));return c.a.createElement(n,Object(s.a)({ref:t},i,{className:d}),l)}));E.displayName="CarouselItem";var _=E;function I(e,t){var a=0;return c.a.Children.map(e,(function(e){return c.a.isValidElement(e)?t(e,a++):e}))}var k=a("dbZe"),w=a("wsUu"),L=a("z+q/"),S={bsPrefix:p.a.string,as:p.a.elementType,slide:p.a.bool,fade:p.a.bool,controls:p.a.bool,indicators:p.a.bool,activeIndex:p.a.number,onSelect:p.a.func,onSlide:p.a.func,onSlid:p.a.func,interval:p.a.number,keyboard:p.a.bool,pause:p.a.oneOf(["hover",!1]),wrap:p.a.bool,touch:p.a.bool,prevIcon:p.a.node,prevLabel:p.a.string,nextIcon:p.a.node,nextLabel:p.a.string},T={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:c.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function P(e,t){var a=Object(N.a)(e,{activeIndex:"onSelect"}),n=a.as,d=void 0===n?"div":n,b=a.bsPrefix,m=a.slide,j=a.fade,v=a.controls,x=a.indicators,p=a.activeIndex,g=a.onSelect,y=a.onSlide,E=a.onSlid,_=a.interval,S=a.keyboard,T=a.onKeyDown,P=a.pause,M=a.onMouseOver,F=a.onMouseOut,R=a.wrap,D=a.touch,z=a.onTouchStart,A=a.onTouchMove,H=a.onTouchEnd,B=a.prevIcon,U=a.prevLabel,q=a.nextIcon,K=a.nextLabel,Y=a.className,V=a.children,G=Object(o.a)(a,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),W=Object(C.a)(b,"carousel"),X=Object(r.useRef)(null),J=Object(r.useState)("next"),Q=J[0],Z=J[1],$=Object(r.useState)(!1),ee=$[0],te=$[1],ae=Object(r.useState)(!1),ne=ae[0],re=ae[1],ce=Object(r.useState)(p||0),se=ce[0],oe=ce[1];ne||p===se||(X.current?Z(X.current):Z((p||0)>se?"next":"prev"),m&&re(!0),oe(p||0)),Object(r.useEffect)((function(){X.current&&(X.current=null)}));var le,ue=0;!function(e,t){var a=0;c.a.Children.forEach(e,(function(e){c.a.isValidElement(e)&&t(e,a++)}))}(V,(function(e,t){++ue,t===p&&(le=e.props.interval)}));var ie=Object(i.a)(le),de=Object(r.useCallback)((function(e){if(!ne){var t=se-1;if(t<0){if(!R)return;t=ue-1}X.current="prev",g&&g(t,e)}}),[ne,se,g,R,ue]),be=Object(l.a)((function(e){if(!ne){var t=se+1;if(t>=ue){if(!R)return;t=0}X.current="next",g&&g(t,e)}})),me=Object(r.useRef)();Object(r.useImperativeHandle)(t,(function(){return{element:me.current,prev:de,next:be}}));var je=Object(l.a)((function(){!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(me.current)&&be()})),fe="next"===Q?"left":"right";u((function(){m||(y&&y(se,fe),E&&E(se,fe))}),[se]);var ve=W+"-item-"+Q,he=W+"-item-"+fe,Oe=Object(r.useCallback)((function(e){Object(L.a)(e),y&&y(se,fe)}),[y,se,fe]),xe=Object(r.useCallback)((function(){re(!1),E&&E(se,fe)}),[E,se,fe]),pe=Object(r.useCallback)((function(e){if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void de(e);case"ArrowRight":return e.preventDefault(),void be(e)}T&&T(e)}),[S,T,de,be]),Ne=Object(r.useCallback)((function(e){"hover"===P&&te(!0),M&&M(e)}),[P,M]),ge=Object(r.useCallback)((function(e){te(!1),F&&F(e)}),[F]),ye=Object(r.useRef)(0),Ce=Object(r.useRef)(0),Ee=f(),_e=Object(r.useCallback)((function(e){ye.current=e.touches[0].clientX,Ce.current=0,"hover"===P&&te(!0),z&&z(e)}),[P,z]),Ie=Object(r.useCallback)((function(e){e.touches&&e.touches.length>1?Ce.current=0:Ce.current=e.touches[0].clientX-ye.current,A&&A(e)}),[A]),ke=Object(r.useCallback)((function(e){if(D){var t=Ce.current;Math.abs(t)>40&&(t>0?de(e):be(e))}"hover"===P&&Ee.set((function(){te(!1)}),_||void 0),H&&H(e)}),[D,P,de,be,Ee,_,H]),we=null!=_&&!ee&&!ne,Le=Object(r.useRef)();Object(r.useEffect)((function(){var e,t;if(we)return Le.current=window.setInterval(document.visibilityState?je:be,null!=(e=null!=(t=ie.current)?t:_)?e:void 0),function(){null!==Le.current&&clearInterval(Le.current)}}),[we,be,ie,_,je]);var Se=Object(r.useMemo)((function(){return x&&Array.from({length:ue},(function(e,t){return function(e){g&&g(t,e)}}))}),[x,ue,g]);return c.a.createElement(d,Object(s.a)({ref:me},G,{onKeyDown:pe,onMouseOver:Ne,onMouseOut:ge,onTouchStart:_e,onTouchMove:Ie,onTouchEnd:ke,className:h()(Y,W,m&&"slide",j&&W+"-fade")}),x&&c.a.createElement("ol",{className:W+"-indicators"},I(V,(function(e,t){return c.a.createElement("li",{key:t,className:t===se?"active":void 0,onClick:Se?Se[t]:void 0})}))),c.a.createElement("div",{className:W+"-inner"},I(V,(function(e,t){var a=t===se;return m?c.a.createElement(O.e,{in:a,onEnter:a?Oe:void 0,onEntered:a?xe:void 0,addEndListener:w.a},(function(t){return c.a.cloneElement(e,{className:h()(e.props.className,a&&"entered"!==t&&ve,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&he)})})):c.a.cloneElement(e,{className:h()(e.props.className,a&&"active")})}))),v&&c.a.createElement(c.a.Fragment,null,(R||0!==p)&&c.a.createElement(k.a,{className:W+"-control-prev",onClick:de},B,U&&c.a.createElement("span",{className:"sr-only"},U)),(R||p!==ue-1)&&c.a.createElement(k.a,{className:W+"-control-next",onClick:be},q,K&&c.a.createElement("span",{className:"sr-only"},K))))}var M=c.a.forwardRef(P);M.displayName="Carousel",M.propTypes=S,M.defaultProps=T,M.Caption=y,M.Item=_;var F=M,R=a("lzbO"),D=a("xNfz"),z=a.n(D);function A(e){var t=e.data;return Object(n.jsx)(F,{style:{marginTop:"-56px"},children:t.map((function(e){return e.text_disable?Object(n.jsxs)(F.Item,{children:[Object(n.jsx)("img",{className:"d-block w-100",src:"".concat(e.src),alt:e.alt}),Object(n.jsx)(F.Caption,{className:"d-flex flex-column h-100 align-items-center",style:{position:"absolute",transform:"translateY(51%)!important"},children:Object(n.jsx)(R.a,{})})]},e.id):Object(n.jsxs)(F.Item,{children:[Object(n.jsx)("img",{className:"d-block w-100",src:"".concat(e.src),alt:e.alt}),Object(n.jsxs)(F.Caption,{className:"d-flex flex-column h-100 align-items-center justify-content-center",children:[Object(n.jsx)("h3",{className:" ".concat(z.a.h3_background," "),children:e.h3}),Object(n.jsx)("p",{className:" ".concat(z.a.p_background," "),children:e.p}),Object(n.jsx)(R.a,{})]})]},e.id)}))})}},lzbO:function(e,t,a){"use strict";a.d(t,"a",(function(){return L}));var n=a("nKUr"),r=a("7vrA"),c=a("cWnB"),s=a("q1tI"),o=a("zM5D"),l=a("QojX"),u=a("KYPV"),i=a("D5Hz"),d=a.n(i),b="\u0418\u043c\u044f",m="\u0424\u0430\u043c\u0438\u043b\u0438\u044f",j="\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",f="\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",v="+7 (999) 999-99-99",h="\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",O="email@email.ru",x="\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0438 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435",p="\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f",N={userFirstName_null:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",userLastName_null:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043c\u0438\u043b\u0438\u044e",userPatronymic_null:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e",userName_long:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043a\u043e\u0440\u043e\u0447\u0435 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",userNumber_null:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",userNumber_numb:"\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0438\u0444\u0440\u044b",userEmail_null:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",userEmail_numb:"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0437\u043d\u0430\u043a @ \u0438 \u0442\u043e\u0447\u043a\u0443: abc@de.ru",userMessage_null:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448 \u0434\u0438\u0430\u0433\u043d\u043e\u0437 / \u0447\u0442\u043e \u0432\u0430\u0441 \u0431\u0435\u0441\u043f\u043e\u043a\u043e\u0438\u0442"},g=function(e){var t={};return e.userFirstName?e.userFirstName.length>30&&(t.userFirstName="".concat(N.userName_long)):t.userFirstName="".concat(N.userFirstName_null),e.userLastName?e.userLastName.length>30&&(t.userLastName="".concat(N.userName_long)):t.userLastName="".concat(N.userLastName_null),e.userNumber?/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(e.userNumber)||(t.userNumber="".concat(N.userNumber_numb)):t.userNumber="".concat(N.userNumber_null),e.userEmail?/.+@.+\..+/i.test(e.userEmail)||(t.userEmail="".concat(N.userEmail_numb)):t.userEmail="".concat(N.userEmail_null),t},y=function(){var e=Object(u.a)({initialValues:{userLastName:"",userFirstName:"",userPatronymic:"",userNumber:"",userEmail:"",userMessage:""},validate:g,onSubmit:function(e){console.log(JSON.stringify(e,null,2)),d.a.send("service_8cqz3af","template_nsjdoql",e,"user_gdhNtxqQYlTaHNchyfpym").then((function(t){alert("".concat(e.userFirstName,", \u0441\u043a\u043e\u0440\u043e \u0432\u0430\u043c \u043f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u044f\u0442 \u0438\u0437 \u0446\u0435\u043d\u0442\u0440\u0430 \u041a\u0438\u043d\u0435\u0437\u0438\u0441!")),console.log("SUCCESS!",t.status,t.text),window.location.href="/"}),(function(t){alert("".concat(e.userFirstName,", \u0447\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!")),console.log("FAILED...",t)}))}}),t=document.getElementById("basic-navbar-nav"),a=document.getElementById("basic-navbar-nav-button");return t.classList.contains("show")&&a.click(),Object(n.jsxs)(l.a,{onSubmit:e.handleSubmit,children:[Object(n.jsxs)(l.a.Group,{controlId:"formLastName",children:[Object(n.jsx)(l.a.Label,{children:m}),Object(n.jsx)(l.a.Control,{type:"text",name:"userLastName",onChange:e.handleChange,value:e.values.userLastName}),Object(n.jsx)(l.a.Text,{className:"text-muted",children:e.errors.userLastName?"".concat(e.errors.userLastName):null})]}),Object(n.jsxs)(l.a.Group,{controlId:"formFirstName",children:[Object(n.jsx)(l.a.Label,{children:b}),Object(n.jsx)(l.a.Control,{type:"text",name:"userFirstName",onChange:e.handleChange,value:e.values.userFirstName}),Object(n.jsx)(l.a.Text,{className:"text-muted",children:e.errors.userFirstName?"".concat(e.errors.userFirstName):null})]}),Object(n.jsxs)(l.a.Group,{controlId:"formPatronymic",children:[Object(n.jsx)(l.a.Label,{children:j}),Object(n.jsx)(l.a.Control,{type:"text",name:"userPatronymic",onChange:e.handleChange,value:e.values.userPatronymic})]}),Object(n.jsxs)(l.a.Group,{controlId:"formBasicNumber",children:[Object(n.jsx)(l.a.Label,{children:f}),Object(n.jsx)(l.a.Control,{type:"tel",name:"userNumber",placeholder:v,onChange:e.handleChange,value:e.values.userNumber}),Object(n.jsx)(l.a.Text,{className:"text-muted",children:e.errors.userNumber?"".concat(e.errors.userNumber):null})]}),Object(n.jsxs)(l.a.Group,{controlId:"formEmail",children:[Object(n.jsx)(l.a.Label,{children:h}),Object(n.jsx)(l.a.Control,{type:"email",name:"userEmail",placeholder:O,onChange:e.handleChange,value:e.values.userEmail}),Object(n.jsx)(l.a.Text,{className:"text-muted",children:e.errors.userEmail?"".concat(e.errors.userEmail):null})]}),Object(n.jsxs)(l.a.Group,{controlId:"formMessage",children:[Object(n.jsx)(l.a.Label,{children:p}),Object(n.jsx)(l.a.Control,{type:"text",name:"userMessage",onChange:e.handleChange,value:e.values.userMessage}),Object(n.jsx)(l.a.Text,{className:"text-muted",children:N.userMessage_null})]}),Object(n.jsx)("div",{style:{textAlign:"center"},children:Object(n.jsx)(c.a,{className:"button_green_color",type:"submit",children:x})})]})},C=a("IujW"),E=a.n(C),_=a("kUpR"),I="\u041a\u0443\u043f\u0438\u0442\u044c \u0441\u043e \u0441\u043a\u0438\u0434\u043a\u043e\u0439",k="\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443";function w(){var e=Object(s.useState)(!1),t=e[0],a=e[1];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{onClick:function(){return a(!0)},children:I}),Object(n.jsxs)(o.a,{onHide:function(){return a(!1)},show:t,keyboard:!1,backdrop:"static",children:[Object(n.jsx)(o.a.Header,{closeButton:!0,children:Object(n.jsx)(o.a.Title,{children:k})}),Object(n.jsx)(o.a.Body,{children:Object(n.jsx)(y,{})}),Object(n.jsx)(o.a.Footer,{children:Object(n.jsx)(E.a,{source:_.a[0].text})})]})]})}function L(){return Object(n.jsx)("div",{children:Object(n.jsx)(r.a,{children:Object(n.jsx)(c.a,{variant:"success",size:"lg",block:!0,children:Object(n.jsx)(w,{})})})})}},xNfz:function(e,t,a){e.exports={h3_background:"Carousel_h3_background__2C8KS",p_background:"Carousel_p_background__1OxaP"}}}]);