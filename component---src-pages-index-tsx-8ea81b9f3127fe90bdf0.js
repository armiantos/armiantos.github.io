(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"6GSr":function(e,t,a){},"8/g6":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n.createSvgIcon}});var n=a("kNCj")},PsDL:function(e,t,a){"use strict";var n=a("wx14"),r=a("Ff2n"),o=a("q1tI"),i=a("iuhU"),c=a("H2TA"),l=a("ye/S"),u=a("VD++"),s=a("NqtD"),d=o.forwardRef((function(e,t){var a=e.edge,c=void 0!==a&&a,l=e.children,d=e.classes,m=e.className,f=e.color,p=void 0===f?"default":f,v=e.disabled,h=void 0!==v&&v,b=e.disableFocusRipple,g=void 0!==b&&b,y=e.size,E=void 0===y?"medium":y,w=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(u.a,Object(n.a)({className:Object(i.a)(d.root,m,"default"!==p&&d["color".concat(Object(s.a)(p))],h&&d.disabled,"small"===E&&d["size".concat(Object(s.a)(E))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!g,disabled:h,ref:t},w),o.createElement("span",{className:d.label},l))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},QeBL:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("qhky"),i=a("ofer"),c=a("tRbT"),l=a("Ji2X"),u=a("hlFM"),s=a("kKAo"),d=a("KQm4"),m=a("EgnG"),f=(a("6GSr"),["#FF2525","#FFB800","#FF007A","#0E8BFF","#00FFA3","#8DEF5F","#7000FF"]);function p(e){var t=e.index,a=.8*Math.random()+.2,o=360*Math.random();return Object(n.useEffect)((function(){Object(m.a)({targets:".spiral"+t,rotateZ:"1turn",loop:!0,duration:3e4*(1+Math.random()),easing:"linear"})}),[t]),r.a.createElement("path",{className:"spiral spiral"+t,d:"M621.3 0C639.36 0 654.085 14.6496 653.183 32.6867C649.444 107.404 632.908 181.01 604.217 250.275C571.351 329.622 523.177 401.718 462.448 462.448C401.718 523.177 329.622 571.351 250.275 604.217C181.01 632.908 107.404 649.444 32.6867 653.183C14.6495 654.085 -2.79473e-05 639.36 -2.71579e-05 621.3V621.3C-2.63685e-05 603.24 14.6519 588.695 32.6838 587.692C98.8077 584.015 163.918 569.199 225.247 543.795C296.66 514.216 361.546 470.86 416.203 416.203C470.86 361.546 514.216 296.66 543.795 225.247C569.199 163.918 584.015 98.8077 587.692 32.6838C588.695 14.6519 603.24 0 621.3 0V0Z",fill:"url(#paint"+Math.floor(Math.random()*f.length)+"_linear)",style:{mixBlendMode:"screen",transform:"scale("+a+") rotate("+o+"deg)"},opacity:0})}var v=function(){return Object(n.useEffect)((function(){Object(m.a)({targets:".spiral",opacity:[0,1],duration:3e3,delay:m.a.stagger(200)})}),[]),r.a.createElement("div",{className:"Background"},r.a.createElement("div",{className:"Spirals"},r.a.createElement("svg",{width:"100%",height:"100%",viewBox:"-654 -654 1308 1308",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(d.a)(Array(15).keys()).map((function(e,t){return r.a.createElement(p,{index:t,key:"spiral-"+t})})),r.a.createElement("defs",null,f.map((function(e,t){return r.a.createElement("linearGradient",{key:"paints"+t+"_linear",id:"paint"+t+"_linear",x1:"-1.17961e-05",y1:"621.5",x2:"620",y2:"-2.575e-05",gradientUnits:"userSpaceOnUse"},r.a.createElement("stop",{stopColor:e}),r.a.createElement("stop",{offset:"1",stopColor:e,stopOpacity:"0"}))}))))))},h=a("R/WZ"),b=a("hlie"),g=a("PsDL"),y=a("RwSH"),E=a.n(y),w=a("lJuC"),S=a.n(w),O=a("lopY"),j=a("gYRD"),C=(a("VxdY"),Object(h.a)((function(e){return{root:{padding:e.spacing(3)}}})));function x(e){var t=e.imgSource,a=(Object(O.a)((function(e){return e.breakpoints.up("sm")})),Object(h.a)((function(e){var t;return{root:{display:"flex",alignItems:"center",height:"100%",width:"100%"},img:(t={borderRadius:"50%",width:"70%"},t[e.breakpoints.up("sm")]={width:"100%"},t)}}))());return r.a.createElement("div",{className:a.root+" Avatar"},r.a.createElement("img",{className:a.img,alt:"user-avatar",src:t}))}t.default=function(){var e=C();return Object(n.useEffect)((function(){Object(m.a)({targets:".Banner",translateY:["-20px",0],opacity:[0,1],easing:"easeOutCubic",duration:1e3})}),[]),r.a.createElement("div",{className:"About FullPage"},r.a.createElement(o.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Armi's Portfolio")),r.a.createElement(j.a,null),r.a.createElement(v,null),r.a.createElement(l.a,{maxWidth:"md",className:"Banner"},r.a.createElement(s.a,{className:e.root,elevation:0},r.a.createElement(c.a,{container:!0},r.a.createElement(c.a,{item:!0,xs:12,sm:3},r.a.createElement(x,{imgSource:"/img/profile.jpg"})),r.a.createElement(c.a,{item:!0,xs:12,sm:8},r.a.createElement(i.a,{variant:"h3",gutterBottom:!0},"Hi!"),r.a.createElement(i.a,{variant:"body1"},"My name is Armi. I am a 4",r.a.createElement("sup",null,"th")," year Software Engineering Student at the University of Alberta."),r.a.createElement(i.a,{variant:"body1",gutterBottom:!0},"My passion is to empower others by developing programs that will enhance their productivity and is visually appealing."),r.a.createElement(u.a,{display:"flex"},r.a.createElement(g.a,{"aria-label":"source",component:b.a,href:"https://github.com/armiantos",disableRipple:!0},r.a.createElement(E.a,null)),r.a.createElement(g.a,{"aria-label":"source",component:b.a,href:"https://www.linkedin.com/in/armiantos/",disableRipple:!0},r.a.createElement(S.a,null))))))))}},RwSH:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),i=(0,n(a("8/g6")).default)(o.createElement("path",{d:"M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"}),"GitHub");t.default=i},VxdY:function(e,t,a){},kNCj:function(e,t,a){"use strict";a.r(t),a.d(t,"capitalize",(function(){return n.a})),a.d(t,"createChainedFunction",(function(){return r})),a.d(t,"createSvgIcon",(function(){return f})),a.d(t,"debounce",(function(){return p})),a.d(t,"deprecatedPropType",(function(){return v})),a.d(t,"isMuiElement",(function(){return h})),a.d(t,"ownerDocument",(function(){return b})),a.d(t,"ownerWindow",(function(){return g})),a.d(t,"requirePropFactory",(function(){return y.a})),a.d(t,"setRef",(function(){return E.a})),a.d(t,"unsupportedProp",(function(){return w})),a.d(t,"useControlled",(function(){return S})),a.d(t,"useEventCallback",(function(){return O.a})),a.d(t,"useForkRef",(function(){return j.a})),a.d(t,"unstable_useId",(function(){return C})),a.d(t,"useIsFocusVisible",(function(){return x.a}));var n=a("NqtD");a("E9XD");function r(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce((function(e,t){return null==t?e:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),(function(){}))}var o=a("wx14"),i=a("q1tI"),c=a.n(i),l=a("Ff2n"),u=a("iuhU"),s=a("H2TA"),d=i.forwardRef((function(e,t){var a=e.children,r=e.classes,c=e.className,s=e.color,d=void 0===s?"inherit":s,m=e.component,f=void 0===m?"svg":m,p=e.fontSize,v=void 0===p?"default":p,h=e.htmlColor,b=e.titleAccess,g=e.viewBox,y=void 0===g?"0 0 24 24":g,E=Object(l.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(f,Object(o.a)({className:Object(u.a)(r.root,c,"inherit"!==d&&r["color".concat(Object(n.a)(d))],"default"!==v&&r["fontSize".concat(Object(n.a)(v))]),focusable:"false",viewBox:y,color:h,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},E),a,b?i.createElement("title",null,b):null)}));d.muiName="SvgIcon";var m=Object(s.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(d);function f(e,t){var a=function(t,a){return c.a.createElement(m,Object(o.a)({ref:a},t),e)};return a.muiName=m.muiName,c.a.memo(c.a.forwardRef(a))}function p(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function n(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=this,c=function(){e.apply(i,r)};clearTimeout(t),t=setTimeout(c,a)}return n.clear=function(){clearTimeout(t)},n}function v(e,t){return function(){return null}}function h(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function b(e){return e&&e.ownerDocument||document}function g(e){return b(e).defaultView||window}var y=a("ueBp"),E=a("GIek");function w(e,t,a,n,r){return null}function S(e){var t=e.controlled,a=e.default,n=(e.name,e.state,i.useRef(void 0!==t).current),r=i.useState(a),o=r[0],c=r[1];return[n?t:o,i.useCallback((function(e){n||c(e)}),[])]}var O=a("Ovef"),j=a("bfFb");function C(e){var t=i.useState(e),a=t[0],n=t[1],r=e||a;return i.useEffect((function(){null==a&&n("mui-".concat(Math.round(1e5*Math.random())))}),[a]),r}var x=a("G7As")},lJuC:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(a("q1tI")),i=(0,n(a("8/g6")).default)(o.createElement("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn");t.default=i},lopY:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("wx14"),r=a("q1tI"),o=a("aXM8"),i=a("A+CX");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(o.a)(),c=Object(i.a)({theme:a,name:"MuiUseMediaQuery",props:{}});var l="function"==typeof e?e(a):e;l=l.replace(/^@media( ?)/m,"");var u="undefined"!=typeof window&&void 0!==window.matchMedia,s=Object(n.a)({},c,t),d=s.defaultMatches,m=void 0!==d&&d,f=s.matchMedia,p=void 0===f?u?window.matchMedia:null:f,v=s.noSsr,h=void 0!==v&&v,b=s.ssrMatchMedia,g=void 0===b?null:b,y=r.useState((function(){return h&&u?p(l).matches:g?g(l).matches:m})),E=y[0],w=y[1];return r.useEffect((function(){var e=!0;if(u){var t=p(l),a=function(){e&&w(t.matches)};return a(),t.addListener(a),function(){e=!1,t.removeListener(a)}}}),[l,p,u]),E}},ueBp:function(e,t,a){"use strict";function n(e){return function(){return null}}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-index-tsx-8ea81b9f3127fe90bdf0.js.map