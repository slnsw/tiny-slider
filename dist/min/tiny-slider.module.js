"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tns=void 0;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_raf=require("./helpers/raf.js"),_caf=require("./helpers/caf.js"),_extend=require("./helpers/extend.js"),_checkStorageValue=require("./helpers/checkStorageValue.js"),_setLocalStorage=require("./helpers/setLocalStorage.js"),_getSlideId=require("./helpers/getSlideId.js"),_calc=require("./helpers/calc.js"),_percentageLayout=require("./helpers/percentageLayout.js"),_mediaquerySupport=require("./helpers/mediaquerySupport.js"),_createStyleSheet=require("./helpers/createStyleSheet.js"),_addCSSRule=require("./helpers/addCSSRule.js"),_removeCSSRule=require("./helpers/removeCSSRule.js"),_getCssRulesLength=require("./helpers/getCssRulesLength.js"),_toDegree=require("./helpers/toDegree.js"),_getTouchDirection=require("./helpers/getTouchDirection.js"),_forEach=require("./helpers/forEach.js"),_hasClass=require("./helpers/hasClass.js"),_addClass=require("./helpers/addClass.js"),_removeClass=require("./helpers/removeClass.js"),_hasAttr=require("./helpers/hasAttr.js"),_getAttr=require("./helpers/getAttr.js"),_setAttrs=require("./helpers/setAttrs.js"),_removeAttrs=require("./helpers/removeAttrs.js"),_arrayFromNodeList=require("./helpers/arrayFromNodeList.js"),_hideElement=require("./helpers/hideElement.js"),_showElement=require("./helpers/showElement.js"),_isVisible=require("./helpers/isVisible.js"),_whichProperty=require("./helpers/whichProperty.js"),_has3DTransforms=require("./helpers/has3DTransforms.js"),_getEndProperty=require("./helpers/getEndProperty.js"),_addEvents=require("./helpers/addEvents.js"),_removeEvents=require("./helpers/removeEvents.js"),_events=require("./helpers/events.js"),_jsTransform=require("./helpers/jsTransform.js");"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var tns=exports.tns=function e(t){t=(0,_extend.extend)({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0,nonce:!1},t||{});var n=document,r=window,a={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},s={},o=t.useLocalStorage;if(o){var i=navigator.userAgent,l=new Date;try{(s=r.localStorage)?(s.setItem(l,l),o=s.getItem(l)==l,s.removeItem(l)):o=!1,o||(s={})}catch(e){o=!1}o&&(s.tnsApp&&s.tnsApp!==i&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach((function(e){s.removeItem(e)})),localStorage.tnsApp=i)}var d=s.tC?(0,_checkStorageValue.checkStorageValue)(s.tC):(0,_setLocalStorage.setLocalStorage)(s,"tC",(0,_calc.calc)(),o),u=s.tPL?(0,_checkStorageValue.checkStorageValue)(s.tPL):(0,_setLocalStorage.setLocalStorage)(s,"tPL",(0,_percentageLayout.percentageLayout)(),o),c=s.tMQ?(0,_checkStorageValue.checkStorageValue)(s.tMQ):(0,_setLocalStorage.setLocalStorage)(s,"tMQ",(0,_mediaquerySupport.mediaquerySupport)(),o),f=s.tTf?(0,_checkStorageValue.checkStorageValue)(s.tTf):(0,_setLocalStorage.setLocalStorage)(s,"tTf",(0,_whichProperty.whichProperty)("transform"),o),v=s.t3D?(0,_checkStorageValue.checkStorageValue)(s.t3D):(0,_setLocalStorage.setLocalStorage)(s,"t3D",(0,_has3DTransforms.has3DTransforms)(f),o),h=s.tTDu?(0,_checkStorageValue.checkStorageValue)(s.tTDu):(0,_setLocalStorage.setLocalStorage)(s,"tTDu",(0,_whichProperty.whichProperty)("transitionDuration"),o),m=s.tTDe?(0,_checkStorageValue.checkStorageValue)(s.tTDe):(0,_setLocalStorage.setLocalStorage)(s,"tTDe",(0,_whichProperty.whichProperty)("transitionDelay"),o),p=s.tADu?(0,_checkStorageValue.checkStorageValue)(s.tADu):(0,_setLocalStorage.setLocalStorage)(s,"tADu",(0,_whichProperty.whichProperty)("animationDuration"),o),g=s.tADe?(0,_checkStorageValue.checkStorageValue)(s.tADe):(0,_setLocalStorage.setLocalStorage)(s,"tADe",(0,_whichProperty.whichProperty)("animationDelay"),o),_=s.tTE?(0,_checkStorageValue.checkStorageValue)(s.tTE):(0,_setLocalStorage.setLocalStorage)(s,"tTE",(0,_getEndProperty.getEndProperty)(h,"Transition"),o),E=s.tAE?(0,_checkStorageValue.checkStorageValue)(s.tAE):(0,_setLocalStorage.setLocalStorage)(s,"tAE",(0,_getEndProperty.getEndProperty)(p,"Animation"),o),C=r.console&&"function"==typeof r.console.warn,y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],S={};if(y.forEach((function(e){if("string"==typeof t[e]){var r=t[e],a=n.querySelector(r);if(S[e]=r,!a||!a.nodeName)return void(C&&console.warn("Can't find",t[e]));t[e]=a}})),!(t.container.children.length<1)){var x=t.responsive,A=t.nested,b="carousel"===t.mode;if(x){0 in x&&(t=(0,_extend.extend)(t,x[0]),delete x[0]);var L={};for(var w in x){var T=x[w];T="number"==typeof T?{items:T}:T,L[w]=T}x=L,L=null}if(b||function e(t){for(var n in t)b||("slideBy"===n&&(t[n]="page"),"edgePadding"===n&&(t[n]=!1),"autoHeight"===n&&(t[n]=!1)),"responsive"===n&&e(t[n])}(t),!b){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var M=t.animateIn,R=t.animateOut,D=t.animateDelay,P=t.animateNormal}var q,j,N="horizontal"===t.axis,B=n.createElement("div"),k=n.createElement("div"),H=t.container,V=H.parentNode,I=H.outerHTML,O=H.children,W=O.length,z=tn(),F=!1;x&&xn(),b&&(H.className+=" tns-vpfix");var G,Q,X,Y,K,J=t.autoWidth,U=on("fixedWidth"),Z=on("edgePadding"),$=on("gutter"),ee=an(),te=on("center"),ne=J?1:Math.floor(on("items")),re=on("slideBy"),ae=t.viewportMax||t.fixedWidthViewportWidth,se=on("arrowKeys"),oe=on("speed"),ie=t.rewind,le=!ie&&t.loop,de=on("autoHeight"),ue=on("controls"),ce=on("controlsText"),fe=on("nav"),ve=on("touch"),he=on("mouseDrag"),me=on("autoplay"),pe=on("autoplayTimeout"),ge=on("autoplayText"),_e=on("autoplayHoverPause"),Ee=on("autoplayResetOnVisibility"),Ce=(0,_createStyleSheet.createStyleSheet)(null,on("nonce")),ye=t.lazyload,Se=t.lazyloadSelector,xe=[],Ae=le?(Y=function(){if(J||U&&!ae)return W-1;var e=U?"fixedWidth":"items",n=[];if((U||t[e]<W)&&n.push(t[e]),x)for(var r in x){var a=x[r][e];a&&(U||a<W)&&n.push(a)}return n.length||n.push(0),Math.ceil(U?ae/Math.min.apply(null,n):Math.max.apply(null,n))}(),K=b?Math.ceil((5*Y-W)/2):4*Y-W,K=Math.max(Y,K),sn("edgePadding")?K+1:K):0,be=b?W+2*Ae:W+Ae,Le=!(!U&&!J||le),we=U?Kn():null,Te=!b||!le,Me=N?"left":"top",Re="",De="",Pe=U?function(){return te&&!le?W-1:Math.ceil(-we/(U+$))}:J?function(){for(var e=0;e<be;e++)if(G[e]>=-we)return e}:function(){return te&&b&&!le?W-1:le||b?Math.max(0,be-Math.ceil(ne)):be-1},qe=Zt(on("startIndex")),je=qe,Ne=(Ut(),0),Be=J?null:Pe(),ke=t.preventActionWhenRunning,He=t.swipeAngle,Ve=!He||"?",Ie=!1,Oe=t.onInit,We=new _events.Events,ze=" tns-slider tns-"+t.mode,Fe=H.id||(0,_getSlideId.getSlideId)(),Ge=on("disable"),Qe=!1,Xe=t.freezable,Ye=!(!Xe||J)&&Sn(),Ke=!1,Je={click:ar,keydown:function(e){e=fr(e);var t=[a.LEFT,a.RIGHT].indexOf(e.keyCode);t>=0&&(0===t?_t.disabled||ar(e,-1):Et.disabled||ar(e,1))}},Ue={click:function(e){if(Ie){if(ke)return;nr()}var t=vr(e=fr(e));for(;t!==xt&&!(0,_hasAttr.hasAttr)(t,"data-nav");)t=t.parentNode;if((0,_hasAttr.hasAttr)(t,"data-nav")){var n=wt=Number((0,_getAttr.getAttr)(t,"data-nav")),r=U||J?n*W/bt:n*ne;rr(st?n:Math.min(Math.ceil(r),W-1),e),Tt===n&&(jt&&dr(),wt=-1)}},keydown:function(e){e=fr(e);var t=n.activeElement;if(!(0,_hasAttr.hasAttr)(t,"data-nav"))return;var r=[a.LEFT,a.RIGHT,a.ENTER,a.SPACE].indexOf(e.keyCode),s=Number((0,_getAttr.getAttr)(t,"data-nav"));r>=0&&(0===r?s>0&&cr(St[s-1]):1===r?s<bt-1&&cr(St[s+1]):(wt=s,rr(s,e)))}},Ze={mouseover:function(){jt&&(or(),Nt=!0)},mouseout:function(){Nt&&(sr(),Nt=!1)}},$e={visibilitychange:function(){n.hidden?jt&&(or(),kt=!0):kt&&(sr(),kt=!1)}},et={keydown:function(e){e=fr(e);var t=[a.LEFT,a.RIGHT].indexOf(e.keyCode);t>=0&&ar(e,0===t?-1:1)}},tt={touchstart:gr,touchmove:_r,touchend:Cr,touchcancel:Cr},nt={mousedown:gr,mousemove:_r,mouseup:Cr,mouseleave:Cr},rt=sn("controls"),at=sn("nav"),st=!!J||t.navAsThumbnails,ot=sn("autoplay"),it=sn("touch"),lt=sn("mouseDrag"),dt="tns-slide-active",ut="tns-slide-cloned",ct="tns-complete",ft={load:function(e){Pn(vr(e))},error:function(e){t=vr(e),(0,_addClass.addClass)(t,"failed"),qn(t);var t}},vt="force"===t.preventScrollOnTouch;if(rt)var ht,mt,pt=t.controlsContainer,gt=t.controlsContainer?t.controlsContainer.outerHTML:"",_t=t.prevButton,Et=t.nextButton,Ct=t.prevButton?t.prevButton.outerHTML:"",yt=t.nextButton?t.nextButton.outerHTML:"";if(at)var St,xt=t.navContainer,At=t.navContainer?t.navContainer.outerHTML:"",bt=J?W:Sr(),Lt=0,wt=-1,Tt=en(),Mt=Tt,Rt="tns-nav-active",Dt="Carousel Page ",Pt=" (Current Slide)";if(ot)var qt,jt,Nt,Bt,kt,Ht="forward"===t.autoplayDirection?1:-1,Vt=t.autoplayButton,It=t.autoplayButton?t.autoplayButton.outerHTML:"",Ot=["<span class='tns-visually-hidden'>"," animation</span>"];if(it||lt)var Wt,zt,Ft={},Gt={},Qt=!1,Xt=N?function(e,t){return e.x-t.x}:function(e,t){return e.y-t.y};J||Jt(Ge||Ye),f&&(Me=f,Re="translate",v?(Re+=N?"3d(":"3d(0px, ",De=N?", 0px, 0px)":", 0px)"):(Re+=N?"X(":"Y(",De=")")),b&&(H.className=H.className.replace("tns-vpfix","")),function(){sn("gutter");B.className="tns-outer",k.className="tns-inner",B.id=Fe+"-ow",k.id=Fe+"-iw",""===H.id&&(H.id=Fe);ze+=u||J?" tns-subpixel":" tns-no-subpixel",ze+=d?" tns-calc":" tns-no-calc",J&&(ze+=" tns-autowidth");ze+=" tns-"+t.axis,H.className+=ze,b?((q=n.createElement("div")).id=Fe+"-mw",q.className="tns-ovh",B.appendChild(q),q.appendChild(k)):B.appendChild(k);if(de){(q||k).className+=" tns-ah"}if(V.insertBefore(B,H),k.appendChild(H),(0,_forEach.forEach)(O,(function(e,t){(0,_addClass.addClass)(e,"tns-item"),e.id||(e.id=Fe+"-item"+t),!b&&P&&(0,_addClass.addClass)(e,P),(0,_setAttrs.setAttrs)(e,{"aria-hidden":"true",tabindex:"-1"})})),Ae){for(var e=n.createDocumentFragment(),r=n.createDocumentFragment(),a=Ae;a--;){var s=a%W,o=O[s].cloneNode(!0);if((0,_addClass.addClass)(o,ut),(0,_removeAttrs.removeAttrs)(o,"id"),r.insertBefore(o,r.firstChild),b){var i=O[W-1-s].cloneNode(!0);(0,_addClass.addClass)(i,ut),(0,_removeAttrs.removeAttrs)(i,"id"),e.appendChild(i)}}H.insertBefore(e,H.firstChild),H.appendChild(r),O=H.children}}(),function(){if(!b)for(var e=qe,n=qe+Math.min(W,ne);e<n;e++){var a=O[e];a.style.left=100*(e-qe)/ne+"%",(0,_addClass.addClass)(a,M),(0,_removeClass.removeClass)(a,P)}N&&(u||J?((0,_addCSSRule.addCSSRule)(Ce,"#"+Fe+" > .tns-item","font-size:"+r.getComputedStyle(O[0]).fontSize+";",(0,_getCssRulesLength.getCssRulesLength)(Ce)),(0,_addCSSRule.addCSSRule)(Ce,"#"+Fe,"font-size:0;",(0,_getCssRulesLength.getCssRulesLength)(Ce))):b&&(0,_forEach.forEach)(O,(function(e,t){e.style.marginLeft=function(e){return d?d+"("+100*e+"% / "+be+")":100*e/be+"%"}(t)})));if(c){if(h){var s=q&&t.autoHeight?vn(t.speed):"";(0,_addCSSRule.addCSSRule)(Ce,"#"+Fe+"-mw",s,(0,_getCssRulesLength.getCssRulesLength)(Ce))}s=ln(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),(0,_addCSSRule.addCSSRule)(Ce,"#"+Fe+"-iw",s,(0,_getCssRulesLength.getCssRulesLength)(Ce)),b&&(s=N&&!J?"width:"+dn(t.fixedWidth,t.gutter,t.items)+";":"",h&&(s+=vn(oe)),(0,_addCSSRule.addCSSRule)(Ce,"#"+Fe,s,(0,_getCssRulesLength.getCssRulesLength)(Ce))),s=N&&!J?un(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(s+=cn(t.gutter)),b||(h&&(s+=vn(oe)),p&&(s+=hn(oe))),s&&(0,_addCSSRule.addCSSRule)(Ce,"#"+Fe+" > .tns-item",s,(0,_getCssRulesLength.getCssRulesLength)(Ce))}else{b&&de&&(q.style[h]=oe/1e3+"s"),k.style.cssText=ln(Z,$,U,de),b&&N&&!J&&(H.style.width=dn(U,$,ne));s=N&&!J?un(U,$,ne):"";$&&(s+=cn($)),s&&(0,_addCSSRule.addCSSRule)(Ce,"#"+Fe+" > .tns-item",s,(0,_getCssRulesLength.getCssRulesLength)(Ce))}if(x&&c)for(var o in x){o=parseInt(o);var i=x[o],l=(s="",""),f="",v="",m="",g=J?null:on("items",o),_=on("fixedWidth",o),E=on("speed",o),C=on("edgePadding",o),y=on("autoHeight",o),S=on("gutter",o);h&&q&&on("autoHeight",o)&&"speed"in i&&(l="#"+Fe+"-mw{"+vn(E)+"}"),("edgePadding"in i||"gutter"in i)&&(f="#"+Fe+"-iw{"+ln(C,S,_,E,y)+"}"),b&&N&&!J&&("fixedWidth"in i||"items"in i||U&&"gutter"in i)&&(v="width:"+dn(_,S,g)+";"),h&&"speed"in i&&(v+=vn(E)),v&&(v="#"+Fe+"{"+v+"}"),("fixedWidth"in i||U&&"gutter"in i||!b&&"items"in i)&&(m+=un(_,S,g)),"gutter"in i&&(m+=cn(S)),!b&&"speed"in i&&(h&&(m+=vn(E)),p&&(m+=hn(E))),m&&(m="#"+Fe+" > .tns-item{"+m+"}"),(s=l+f+v+m)&&Ce.insertRule("@media (min-width: "+o/16+"em) {"+s+"}",Ce.cssRules.length)}}(),mn();var Yt=le?b?function(){var e=Ne,t=Be;e+=re,t-=re,Z?(e+=1,t-=1):U&&(ee+$)%(U+$)&&(t-=1),Ae&&(qe>t?qe-=W:qe<e&&(qe+=W))}:function(){if(qe>Be)for(;qe>=Ne+W;)qe-=W;else if(qe<Ne)for(;qe<=Be-W;)qe+=W}:function(){qe=Math.max(Ne,Math.min(Be,qe))},Kt=b?function(){Xn(H,""),h||!oe?(Zn(),oe&&(0,_isVisible.isVisible)(H)||nr()):(0,_jsTransform.jsTransform)(H,Me,Re,De,Jn(),oe,nr),N||yr()}:function(){xe=[];var e={};e[_]=e[E]=nr,(0,_removeEvents.removeEvents)(O[je],e),(0,_addEvents.addEvents)(O[qe],e),$n(je,M,R,!0),$n(qe,P,M),_&&E&&oe&&(0,_isVisible.isVisible)(H)||nr()};return{version:"2.9.3",getInfo:Ar,events:We,goTo:rr,play:function(){me&&!jt&&(lr(),Bt=!1)},pause:function(){jt&&(dr(),Bt=!0)},isOn:F,updateSliderHeight:Vn,refresh:mn,destroy:function(){if(Ce.disabled=!0,Ce.ownerNode&&Ce.ownerNode.remove(),(0,_removeEvents.removeEvents)(r,{resize:Cn}),se&&(0,_removeEvents.removeEvents)(n,et),pt&&(0,_removeEvents.removeEvents)(pt,Je),xt&&(0,_removeEvents.removeEvents)(xt,Ue),(0,_removeEvents.removeEvents)(H,Ze),(0,_removeEvents.removeEvents)(H,$e),Vt&&(0,_removeEvents.removeEvents)(Vt,{click:ur}),me&&clearInterval(qt),b&&_){var e={};e[_]=nr,(0,_removeEvents.removeEvents)(H,e)}ve&&(0,_removeEvents.removeEvents)(H,tt),he&&(0,_removeEvents.removeEvents)(H,nt);var a=[I,gt,Ct,yt,At,It];for(var s in y.forEach((function(e,n){var r="container"===e?B:t[e];if("object"===(void 0===r?"undefined":_typeof(r))&&r){var s=!!r.previousElementSibling&&r.previousElementSibling,o=r.parentNode;r.outerHTML=a[n],t[e]=s?s.nextElementSibling:o.firstElementChild}})),y=M=R=D=P=N=B=k=H=V=I=O=W=j=z=J=U=Z=$=ee=ne=re=ae=se=oe=ie=le=de=Ce=ye=G=xe=Ae=be=Le=we=Te=Me=Re=De=Pe=qe=je=Ne=Be=He=Ve=Ie=Oe=We=ze=Fe=Ge=Qe=Xe=Ye=Ke=Je=Ue=Ze=$e=et=tt=nt=rt=at=st=ot=it=lt=dt=ct=ft=Q=ue=ce=pt=gt=_t=Et=ht=mt=fe=xt=At=St=bt=Lt=wt=Tt=Mt=Rt=Dt=Pt=me=pe=Ht=ge=_e=Vt=It=Ee=Ot=qt=jt=Nt=Bt=kt=Ft=Gt=Wt=Qt=zt=Xt=ve=he=null,this)"rebuild"!==s&&(this[s]=null);F=!1},rebuild:function(){return e((0,_extend.extend)(t,S))}}}function Jt(e){e&&(ue=fe=ve=he=se=me=_e=Ee=!1)}function Ut(){for(var e=b?qe-Ae:qe;e<0;)e+=W;return e%W+1}function Zt(e){return e=e?Math.max(0,Math.min(le?W-1:W-ne,e)):0,b?e+Ae:e}function $t(e){for(null==e&&(e=qe),b&&(e-=Ae);e<0;)e+=W;return Math.floor(e%W)}function en(){var e,t=$t();return e=st?t:U||J?Math.ceil((t+1)*bt/W-1):Math.floor(t/ne),!le&&b&&qe===Be&&(e=bt-1),e}function tn(){return r.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function nn(e){return"top"===e?"afterbegin":"beforeend"}function rn(e){if(null!=e){var t,r,a=n.createElement("div");return e.appendChild(a),r=(t=a.getBoundingClientRect()).right-t.left,a.remove(),r||rn(e.parentNode)}}function an(){var e=Z?2*Z-$:0;return rn(V)-e}function sn(e){if(t[e])return!0;if(x)for(var n in x)if(x[n][e])return!0;return!1}function on(e,n){if(null==n&&(n=z),"items"===e&&U)return Math.floor((ee+$)/(U+$))||1;var r=t[e];if(x)for(var a in x)n>=parseInt(a)&&e in x[a]&&(r=x[a][e]);return"slideBy"===e&&"page"===r&&(r=on("items")),b||"slideBy"!==e&&"items"!==e||(r=Math.floor(r)),r}function ln(e,t,n,r,a){var s="";if(void 0!==e){var o=e;t&&(o-=t),s=N?"margin: 0 "+o+"px 0 "+e+"px;":"margin: "+e+"px 0 "+o+"px 0;"}else if(t&&!n){var i="-"+t+"px";s="margin: 0 "+(N?i+" 0 0":"0 "+i+" 0")+";"}return!b&&a&&h&&r&&(s+=vn(r)),s}function dn(e,t,n){return e?(e+t)*be+"px":d?d+"("+100*be+"% / "+n+")":100*be/n+"%"}function un(e,t,n){var r;if(e)r=e+t+"px";else{b||(n=Math.floor(n));var a=b?be:n;r=d?d+"(100% / "+a+")":100/a+"%"}return r="width:"+r,"inner"!==A?r+";":r+" !important;"}function cn(e){var t="";!1!==e&&(t=(N?"padding-":"margin-")+(N?"right":"bottom")+": "+e+"px;");return t}function fn(e,t){var n=e.substring(0,e.length-t).toLowerCase();return n&&(n="-"+n+"-"),n}function vn(e){return fn(h,18)+"transition-duration:"+e/1e3+"s;"}function hn(e){return fn(p,17)+"animation-duration:"+e/1e3+"s;"}function mn(){if(sn("autoHeight")||J||!N){var e=H.querySelectorAll("img");(0,_forEach.forEach)(e,(function(e){var t=e.src;ye||(t&&t.indexOf("data:image")<0?(e.src="",(0,_addEvents.addEvents)(e,ft),(0,_addClass.addClass)(e,"loading"),e.src=t):Pn(e))})),(0,_raf.raf)((function(){Bn((0,_arrayFromNodeList.arrayFromNodeList)(e),(function(){Q=!0}))})),sn("autoHeight")&&(e=jn(qe,Math.min(qe+ne-1,be-1))),ye?pn():(0,_raf.raf)((function(){Bn((0,_arrayFromNodeList.arrayFromNodeList)(e),pn)}))}else b&&Un(),_n(),En()}function pn(){if(J&&W>1){var e=le?qe:W-1;!function t(){var n=O[e].getBoundingClientRect().left,r=O[e-1].getBoundingClientRect().right;Math.abs(n-r)<=1?gn():setTimeout((function(){t()}),16)}()}else gn()}function gn(){N&&!J||(In(),J?(we=Kn(),Xe&&(Ye=Sn()),Be=Pe(),Jt(Ge||Ye)):yr()),b&&Un(),_n(),En()}function _n(){if(On(),B.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion visually-hidden">slide <span class="current">'+Mn()+"</span> of "+W+"</div>"),X=B.querySelector(".tns-liveregion .current"),ot){var e=me?"stop":"start";Vt?(0,_setAttrs.setAttrs)(Vt,{"data-action":e}):t.autoplayButtonOutput&&(B.insertAdjacentHTML(nn(t.autoplayPosition),'<button type="button" data-action="'+e+'">'+Ot[0]+e+Ot[1]+ge[0]+"</button>"),Vt=B.querySelector("[data-action]")),Vt&&(0,_addEvents.addEvents)(Vt,{click:ur}),me&&(lr(),_e&&(0,_addEvents.addEvents)(H,Ze),Ee&&(0,_addEvents.addEvents)(H,$e))}if(at){if(xt)(0,_setAttrs.setAttrs)(xt,{"aria-label":"Carousel Pagination"}),St=xt.children,(0,_forEach.forEach)(St,(function(e,t){(0,_setAttrs.setAttrs)(e,{"data-nav":t,tabindex:"-1","aria-label":Dt+(t+1),"aria-controls":Fe})}));else{for(var n="",r=st?"":'style="display:none"',a=0;a<W;a++)n+='<button type="button" data-nav="'+a+'" tabindex="-1" aria-controls="'+Fe+'" '+r+' aria-label="'+Dt+(a+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",B.insertAdjacentHTML(nn(t.navPosition),n),xt=B.querySelector(".tns-nav"),St=xt.children}if(xr(),h){var s=h.substring(0,h.length-18).toLowerCase(),o="transition: all "+oe/1e3+"s";s&&(o="-"+s+"-"+o),(0,_addCSSRule.addCSSRule)(Ce,"[aria-controls^="+Fe+"-item]",o,(0,_getCssRulesLength.getCssRulesLength)(Ce))}(0,_setAttrs.setAttrs)(St[Tt],{"aria-label":Dt+(Tt+1)+Pt}),(0,_removeAttrs.removeAttrs)(St[Tt],"tabindex"),(0,_addClass.addClass)(St[Tt],Rt),(0,_addEvents.addEvents)(xt,Ue)}rt&&(pt||_t&&Et||(B.insertAdjacentHTML(nn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="'+Fe+'">'+ce[0]+'</button><button type="button" data-controls="next" tabindex="-1" aria-controls="'+Fe+'">'+ce[1]+"</button></div>"),pt=B.querySelector(".tns-controls")),_t&&Et||(_t=pt.children[0],Et=pt.children[1]),t.controlsContainer&&(0,_setAttrs.setAttrs)(pt,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(0,_setAttrs.setAttrs)([_t,Et],{"aria-controls":Fe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&((0,_setAttrs.setAttrs)(_t,{"data-controls":"prev"}),(0,_setAttrs.setAttrs)(Et,{"data-controls":"next"})),ht=zn(_t),mt=zn(Et),Qn(),pt?(0,_addEvents.addEvents)(pt,Je):((0,_addEvents.addEvents)(_t,Je),(0,_addEvents.addEvents)(Et,Je))),An()}function En(){if(b&&_){var e={};e[_]=nr,(0,_addEvents.addEvents)(H,e)}ve&&(0,_addEvents.addEvents)(H,tt,t.preventScrollOnTouch),he&&(0,_addEvents.addEvents)(H,nt),se&&(0,_addEvents.addEvents)(n,et),"inner"===A?We.on("outerResized",(function(){yn(),We.emit("innerLoaded",Ar())})):(x||U||J||de||!N)&&(0,_addEvents.addEvents)(r,{resize:Cn}),de&&("outer"===A?We.on("innerLoaded",Nn):Ge||Nn()),Dn(),Ge?wn():Ye&&Ln(),We.on("indexChanged",kn),"inner"===A&&We.emit("innerLoaded",Ar()),"function"==typeof Oe&&Oe(Ar()),F=!0}function Cn(e){(0,_raf.raf)((function(){yn(fr(e))}))}function yn(e){if(F){"outer"===A&&We.emit("outerResized",Ar(e)),z=tn();var r,a=j,s=!1;x&&(xn(),(r=a!==j)&&We.emit("newBreakpointStart",Ar(e)));var o,i,l=ne,d=Ge,u=Ye,f=se,v=ue,h=fe,m=ve,p=he,g=me,_=_e,E=Ee,C=qe;if(r){var y=U,S=de,L=ce,w=te,T=ge;if(!c)var D=$,q=Z}if(se=on("arrowKeys"),ue=on("controls"),fe=on("nav"),ve=on("touch"),te=on("center"),he=on("mouseDrag"),me=on("autoplay"),_e=on("autoplayHoverPause"),Ee=on("autoplayResetOnVisibility"),r&&(Ge=on("disable"),U=on("fixedWidth"),oe=on("speed"),de=on("autoHeight"),ce=on("controlsText"),ge=on("autoplayText"),pe=on("autoplayTimeout"),c||(Z=on("edgePadding"),$=on("gutter"))),Jt(Ge),ee=an(),N&&!J||Ge||(In(),N||(yr(),s=!0)),(U||J)&&(we=Kn(),Be=Pe()),(r||U)&&(ne=on("items"),re=on("slideBy"),(i=ne!==l)&&(U||J||(Be=Pe()),Yt())),r&&Ge!==d&&(Ge?wn():function(){if(!Qe)return;if(Ce.disabled=!1,H.className+=ze,Un(),le)for(var e=Ae;e--;)b&&(0,_showElement.showElement)(O[e]),(0,_showElement.showElement)(O[be-e-1]);if(!b)for(var t=qe,n=qe+W;t<n;t++){var r=O[t],a=t<qe+ne?M:P;r.style.left=100*(t-qe)/ne+"%",(0,_addClass.addClass)(r,a)}bn(),Qe=!1}()),Xe&&(r||U||J)&&(Ye=Sn())!==u&&(Ye?(Zn(Jn(Zt(0))),Ln()):(!function(){if(!Ke)return;Z&&c&&(k.style.margin="");if(Ae)for(var e="tns-transparent",t=Ae;t--;)b&&(0,_removeClass.removeClass)(O[t],e),(0,_removeClass.removeClass)(O[be-t-1],e);bn(),Ke=!1}(),s=!0)),Jt(Ge||Ye),me||(_e=Ee=!1),se!==f&&(se?(0,_addEvents.addEvents)(n,et):(0,_removeEvents.removeEvents)(n,et)),ue!==v&&(ue?pt?(0,_showElement.showElement)(pt):(_t&&(0,_showElement.showElement)(_t),Et&&(0,_showElement.showElement)(Et)):pt?(0,_hideElement.hideElement)(pt):(_t&&(0,_hideElement.hideElement)(_t),Et&&(0,_hideElement.hideElement)(Et))),fe!==h&&(fe?((0,_showElement.showElement)(xt),xr()):(0,_hideElement.hideElement)(xt)),ve!==m&&(ve?(0,_addEvents.addEvents)(H,tt,t.preventScrollOnTouch):(0,_removeEvents.removeEvents)(H,tt)),he!==p&&(he?(0,_addEvents.addEvents)(H,nt):(0,_removeEvents.removeEvents)(H,nt)),me!==g&&(me?(Vt&&(0,_showElement.showElement)(Vt),jt||Bt||lr()):(Vt&&(0,_hideElement.hideElement)(Vt),jt&&dr())),_e!==_&&(_e?(0,_addEvents.addEvents)(H,Ze):(0,_removeEvents.removeEvents)(H,Ze)),Ee!==E&&(Ee?(0,_addEvents.addEvents)(n,$e):(0,_removeEvents.removeEvents)(n,$e)),r){if(U===y&&te===w||(s=!0),de!==S&&(de||(k.style.height="")),ue&&ce!==L&&(_t.innerHTML=ce[0],Et.innerHTML=ce[1]),Vt&&ge!==T){var B=me?1:0,V=Vt.innerHTML,I=V.length-T[B].length;V.substring(I)===T[B]&&(Vt.innerHTML=V.substring(0,I)+ge[B])}}else te&&(U||J)&&(s=!0);if((i||U&&!J)&&(bt=Sr(),xr()),(o=qe!==C)?(We.emit("indexChanged",Ar()),s=!0):i?o||kn():(U||J)&&(Dn(),On(),Tn()),i&&!b&&function(){for(var e=qe+Math.min(W,ne),t=be;t--;){var n=O[t];t>=qe&&t<e?((0,_addClass.addClass)(n,"tns-moving"),n.style.left=100*(t-qe)/ne+"%",(0,_addClass.addClass)(n,M),(0,_removeClass.removeClass)(n,P)):n.style.left&&(n.style.left="",(0,_addClass.addClass)(n,P),(0,_removeClass.removeClass)(n,M)),(0,_removeClass.removeClass)(n,R)}setTimeout((function(){(0,_forEach.forEach)(O,(function(e){(0,_removeClass.removeClass)(e,"tns-moving")}))}),300)}(),!Ge&&!Ye){if(r&&!c&&(Z===q&&$===D||(k.style.cssText=ln(Z,$,U,oe,de)),N)){b&&(H.style.width=dn(U,$,ne));var G=un(U,$,ne)+cn($);(0,_removeCSSRule.removeCSSRule)(Ce,(0,_getCssRulesLength.getCssRulesLength)(Ce)-1),(0,_addCSSRule.addCSSRule)(Ce,"#"+Fe+" > .tns-item",G,(0,_getCssRulesLength.getCssRulesLength)(Ce))}de&&Nn(),s&&(Un(),je=qe)}r&&We.emit("newBreakpointEnd",Ar(e))}}function Sn(){if(!U&&!J)return W<=(te?ne-(ne-1)/2:ne);var e=U?(U+$)*W:G[W],t=Z?ee+2*Z:ee+$;return te&&(t-=U?(ee-U)/2:(ee-(G[qe+1]-G[qe]-$))/2),e<=t}function xn(){for(var e in j=0,x)e=parseInt(e),z>=e&&(j=e)}function An(){!me&&Vt&&(0,_hideElement.hideElement)(Vt),!fe&&xt&&(0,_hideElement.hideElement)(xt),ue||(pt?(0,_hideElement.hideElement)(pt):(_t&&(0,_hideElement.hideElement)(_t),Et&&(0,_hideElement.hideElement)(Et)))}function bn(){me&&Vt&&(0,_showElement.showElement)(Vt),fe&&xt&&(0,_showElement.showElement)(xt),ue&&(pt?(0,_showElement.showElement)(pt):(_t&&(0,_showElement.showElement)(_t),Et&&(0,_showElement.showElement)(Et)))}function Ln(){if(!Ke){if(Z&&(k.style.margin="0px"),Ae)for(var e="tns-transparent",t=Ae;t--;)b&&(0,_addClass.addClass)(O[t],e),(0,_addClass.addClass)(O[be-t-1],e);An(),Ke=!0}}function wn(){if(!Qe){if(Ce.disabled=!0,H.className=H.className.replace(ze.substring(1),""),(0,_removeAttrs.removeAttrs)(H,["style"]),le)for(var e=Ae;e--;)b&&(0,_hideElement.hideElement)(O[e]),(0,_hideElement.hideElement)(O[be-e-1]);if(N&&b||(0,_removeAttrs.removeAttrs)(k,["style"]),!b)for(var t=qe,n=qe+W;t<n;t++){var r=O[t];(0,_removeAttrs.removeAttrs)(r,["style"]),(0,_removeClass.removeClass)(r,M),(0,_removeClass.removeClass)(r,P)}An(),Qe=!0}}function Tn(){var e=Mn();X.innerHTML!==e&&(X.innerHTML=e)}function Mn(){var e=Rn();return e[0]+1===e[1]+1?e[0]:e[0]+" to "+e[1]}function Rn(e){null==e&&(e=Jn());var t,n,r,a=qe;if(te||Z?(J||U)&&(n=-(parseFloat(e)+Z),r=n+ee+2*Z):J&&(n=G[qe],r=n+ee),J)G.forEach((function(e,s){s<be&&((te||Z)&&e<=n+.5&&(a=s),r-e>=.5&&(t=s))}));else{if(U){var s=U+$;te||Z?(a=Math.floor(n/s),t=Math.ceil(r/s-1)):t=a+Math.ceil(ee/s)-1}else if(te||Z){var o=ne-1;if(te?(a-=o/2,t=qe+o/2):t=qe+o,Z){var i=Z*ne/ee;a-=i,t+=i}a=Math.floor(a),t=Math.ceil(t)}else t=a+ne-1;a=$t(Math.max(a,0))+1,t=$t(Math.min(t,be-1))+1}return[a,t]}function Dn(){if(ye&&!Ge){var e=Rn();e.push(Se),jn.apply(null,e).forEach((function(e){if(!(0,_hasClass.hasClass)(e,ct)){var t={};t[_]=function(e){e.stopPropagation()},(0,_addEvents.addEvents)(e,t),(0,_addEvents.addEvents)(e,ft),e.src=(0,_getAttr.getAttr)(e,"data-src");var n=(0,_getAttr.getAttr)(e,"data-srcset");n&&(e.srcset=n),(0,_addClass.addClass)(e,"loading")}}))}}function Pn(e){(0,_addClass.addClass)(e,"loaded"),qn(e)}function qn(e){(0,_addClass.addClass)(e,ct),(0,_removeClass.removeClass)(e,"loading"),(0,_removeEvents.removeEvents)(e,ft)}function jn(e,t,n){var r=[];for(n||(n="img");e<=t;)(0,_forEach.forEach)(O[e].querySelectorAll(n),(function(e){r.push(e)})),e++;return r}function Nn(){var e=jn.apply(null,Rn());(0,_raf.raf)((function(){Bn(e,Vn)}))}function Bn(e,t){return Q?t():(e.forEach((function(t,n){!ye&&t.complete&&qn(t),(0,_hasClass.hasClass)(t,ct)&&e.splice(n,1)})),e.length?void(0,_raf.raf)((function(){Bn(e,t)})):t())}function kn(){Dn(),On(),Tn(),Qn(),function(){if(fe&&(Tt=wt>=0?wt:en(),wt=-1,Tt!==Mt)){var e=St[Mt],t=St[Tt];(0,_setAttrs.setAttrs)(e,{tabindex:"-1","aria-label":Dt+(Mt+1)}),(0,_removeClass.removeClass)(e,Rt),(0,_setAttrs.setAttrs)(t,{"aria-label":Dt+(Tt+1)+Pt}),(0,_removeAttrs.removeAttrs)(t,"tabindex"),(0,_addClass.addClass)(t,Rt),Mt=Tt}}()}function Hn(e,t){for(var n=[],r=e,a=Math.min(e+t,be);r<a;r++)n.push(O[r].offsetHeight);return Math.max.apply(null,n)}function Vn(){var e=de?Hn(qe,ne):Hn(Ae,W),t=q||k;t.style.height!==e&&(t.style.height=e+"px")}function In(){G=[0];var e=N?"left":"top",t=N?"right":"bottom",n=O[0].getBoundingClientRect()[e];(0,_forEach.forEach)(O,(function(r,a){a&&G.push(r.getBoundingClientRect()[e]-n),a===be-1&&G.push(r.getBoundingClientRect()[t]-n)}))}function On(){var e=Rn(),t=e[0],n=e[1];(0,_forEach.forEach)(O,(function(e,r){r>=t&&r<=n?(0,_hasAttr.hasAttr)(e,"aria-hidden")&&((0,_removeAttrs.removeAttrs)(e,["aria-hidden","tabindex"]),(0,_addClass.addClass)(e,dt)):(0,_hasAttr.hasAttr)(e,"aria-hidden")||((0,_setAttrs.setAttrs)(e,{"aria-hidden":"true",tabindex:"-1"}),(0,_removeClass.removeClass)(e,dt))}))}function Wn(e){return e.nodeName.toLowerCase()}function zn(e){return"button"===Wn(e)}function Fn(e){return"true"===e.getAttribute("aria-disabled")}function Gn(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function Qn(){if(ue&&!ie&&!le){var e=ht?_t.disabled:Fn(_t),t=mt?Et.disabled:Fn(Et),n=qe<=Ne,r=!ie&&qe>=Be;n&&!e&&Gn(ht,_t,!0),!n&&e&&Gn(ht,_t,!1),r&&!t&&Gn(mt,Et,!0),!r&&t&&Gn(mt,Et,!1)}}function Xn(e,t){h&&(e.style[h]=t)}function Yn(e){return null==e&&(e=qe),J?(ee-(Z?$:0)-(G[e+1]-G[e]-$))/2:U?(ee-U)/2:(ne-1)/2}function Kn(){var e=ee+(Z?$:0)-(U?(U+$)*be:G[be]);return te&&!le&&(e=U?-(U+$)*(be-1)-Yn():Yn(be-1)-G[be-1]),e>0&&(e=0),e}function Jn(e){var t;if(null==e&&(e=qe),N&&!J)if(U)t=-(U+$)*e,te&&(t+=Yn());else{var n=f?be:ne;te&&(e-=Yn()),t=100*-e/n}else t=-G[e],te&&J&&(t+=Yn());return Le&&(t=Math.max(t,we)),t+=!N||J||U?"px":"%"}function Un(e){Xn(H,"0s"),Zn(e)}function Zn(e){null==e&&(e=Jn()),H.style[Me]=Re+e+De}function $n(e,t,n,r){var a=e+ne;le||(a=Math.min(a,be));for(var s=e;s<a;s++){var o=O[s];r||(o.style.left=100*(s-qe)/ne+"%"),D&&m&&(o.style[m]=o.style[g]=D*(s-e)/1e3+"s"),(0,_removeClass.removeClass)(o,t),(0,_addClass.addClass)(o,n),r&&xe.push(o)}}function er(e,t){Te&&Yt(),(qe!==je||t)&&(We.emit("indexChanged",Ar()),We.emit("transitionStart",Ar()),de&&Nn(),jt&&e&&["click","keydown"].indexOf(e.type)>=0&&dr(),Ie=!0,Kt())}function tr(e){return e.toLowerCase().replace(/-/g,"")}function nr(e){if(b||Ie){if(We.emit("transitionEnd",Ar(e)),!b&&xe.length>0)for(var t=0;t<xe.length;t++){var n=xe[t];n.style.left="",g&&m&&(n.style[g]="",n.style[m]=""),(0,_removeClass.removeClass)(n,R),(0,_addClass.addClass)(n,P)}if(!e||!b&&e.target.parentNode===H||e.target===H&&tr(e.propertyName)===tr(Me)){if(!Te){var r=qe;Yt(),qe!==r&&(We.emit("indexChanged",Ar()),Un())}"inner"===A&&We.emit("innerLoaded",Ar()),Ie=!1,je=qe}}}function rr(e,t){if(!Ye)if("prev"===e)ar(t,-1);else if("next"===e)ar(t,1);else{if(Ie){if(ke)return;nr()}var n=$t(),r=0;if("first"===e?r=-n:"last"===e?r=b?W-ne-n:W-1-n:("number"!=typeof e&&(e=parseInt(e)),isNaN(e)||(t||(e=Math.max(0,Math.min(W-1,e))),r=e-n)),!b&&r&&Math.abs(r)<ne){var a=r>0?1:-1;r+=qe+r-W>=Ne?W*a:2*W*a*-1}qe+=r,b&&le&&(qe<Ne&&(qe+=W),qe>Be&&(qe-=W)),$t(qe)!==$t(je)&&er(t)}}function ar(e,t){if(Ie){if(ke)return;nr()}var n;if(!t){for(var r=vr(e=fr(e));r!==pt&&[_t,Et].indexOf(r)<0;)r=r.parentNode;var a=[_t,Et].indexOf(r);a>=0&&(n=!0,t=0===a?-1:1)}if(ie){if(qe===Ne&&-1===t)return void rr("last",e);if(qe===Be&&1===t)return void rr("first",e)}t&&(qe+=re*t,J&&(qe=Math.floor(qe)),er(n||e&&"keydown"===e.type?e:null))}function sr(){qt=setInterval((function(){ar(null,Ht)}),pe),jt=!0}function or(){clearInterval(qt),jt=!1}function ir(e,t){(0,_setAttrs.setAttrs)(Vt,{"data-action":e}),Vt.innerHTML=Ot[0]+e+Ot[1]+t}function lr(){sr(),Vt&&ir("stop",ge[1])}function dr(){or(),Vt&&ir("start",ge[0])}function ur(){jt?(dr(),Bt=!0):(lr(),Bt=!1)}function cr(e){e.focus()}function fr(e){return hr(e=e||r.event)?e.changedTouches[0]:e}function vr(e){return e.target||r.event.srcElement}function hr(e){return e.type.indexOf("touch")>=0}function mr(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function pr(){return(0,_getTouchDirection.getTouchDirection)((0,_toDegree.toDegree)(Gt.y-Ft.y,Gt.x-Ft.x),He)===t.axis}function gr(e){if(Ie){if(ke)return;nr()}me&&jt&&or(),Qt=!0,zt&&((0,_caf.caf)(zt),zt=null);var t=fr(e);We.emit(hr(e)?"touchStart":"dragStart",Ar(e)),!hr(e)&&["img","a"].indexOf(Wn(vr(e)))>=0&&mr(e),Gt.x=Ft.x=t.clientX,Gt.y=Ft.y=t.clientY,b&&(Wt=parseFloat(H.style[Me].replace(Re,"")),Xn(H,"0s"))}function _r(e){if(Qt){var t=fr(e);Gt.x=t.clientX,Gt.y=t.clientY,b?zt||(zt=(0,_raf.raf)((function(){Er(e)}))):("?"===Ve&&(Ve=pr()),Ve&&(vt=!0)),("boolean"!=typeof e.cancelable||e.cancelable)&&vt&&e.preventDefault()}}function Er(e){if(Ve){if((0,_caf.caf)(zt),Qt&&(zt=(0,_raf.raf)((function(){Er(e)}))),"?"===Ve&&(Ve=pr()),Ve){!vt&&hr(e)&&(vt=!0);try{e.type&&We.emit(hr(e)?"touchMove":"dragMove",Ar(e))}catch(e){}var t=Wt,n=Xt(Gt,Ft);if(!N||U||J)t+=n,t+="px";else t+=f?n*ne*100/((ee+$)*be):100*n/(ee+$),t+="%";H.style[Me]=Re+t+De}}else Qt=!1}function Cr(e){if(Qt){zt&&((0,_caf.caf)(zt),zt=null),b&&Xn(H,""),Qt=!1;var n=fr(e);Gt.x=n.clientX,Gt.y=n.clientY;var r=Xt(Gt,Ft);if(Math.abs(r)){if(!hr(e)){var a=vr(e);(0,_addEvents.addEvents)(a,{click:function e(t){mr(t),(0,_removeEvents.removeEvents)(a,{click:e})}})}b?zt=(0,_raf.raf)((function(){if(N&&!J){var t=-r*ne/(ee+$);t=r>0?Math.floor(t):Math.ceil(t),qe+=t}else{var n=-(Wt+r);if(n<=0)qe=Ne;else if(n>=G[be-1])qe=Be;else for(var a=0;a<be&&n>=G[a];)qe=a,n>G[a]&&r<0&&(qe+=1),a++}er(e,r),We.emit(hr(e)?"touchEnd":"dragEnd",Ar(e))})):Ve&&ar(e,r>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(vt=!1),He&&(Ve="?"),me&&!jt&&sr()}function yr(){(q||k).style.height=G[qe+ne]-G[qe]+"px"}function Sr(){var e=U?(U+$)*W/ee:W/ne;return Math.min(Math.ceil(e),W)}function xr(){if(fe&&!st&&bt!==Lt){var e=Lt,t=bt,n=_showElement.showElement;for(Lt>bt&&(e=bt,t=Lt,n=_hideElement.hideElement);e<t;)n(St[e]),e++;Lt=bt}}function Ar(e){return{container:H,slideItems:O,navContainer:xt,navItems:St,controlsContainer:pt,hasControls:rt,prevButton:_t,nextButton:Et,items:ne,slideBy:re,cloneCount:Ae,slideCount:W,slideCountNew:be,index:qe,indexCached:je,displayIndex:Ut(),navCurrentIndex:Tt,navCurrentIndexCached:Mt,pages:bt,pagesCached:Lt,sheet:Ce,isOn:F,event:e||{}}}C&&console.warn("No slides found in",t.container)};
//# sourceMappingURL=../sourcemaps/tiny-slider.module.js.map
