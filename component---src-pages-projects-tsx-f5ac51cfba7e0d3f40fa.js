(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8/g6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.createSvgIcon}});var a=n("kNCj")},"8Koj":function(e,t,n){"use strict";var a=n("TqRt"),r=n("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n("q1tI")),i=(0,a(n("8/g6")).default)(o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code");t.default=i},Bq7A:function(e,t,n){"use strict";var a=n("KQm4"),r=n("q1tI"),o=n.n(r),i=n("EgnG"),c=(n("PxVv"),["#FF2525","#FFB800","#FF007A","#0E8BFF","#00FFA3","#8DEF5F","#7000FF"]);function l(e){var t=e.index,n=.8*Math.random()+.2;return Object(r.useEffect)((function(){var e=733*Math.random()*2-733,n=3e4*(1+Math.random());Object(i.a)({targets:".diagonal"+t,translateY:[e,e+800],loop:!0,opacity:[{value:0,duration:0},{value:1,duration:2e3},{value:0,duration:2e3,delay:n-2e3}],delay:200*t,duration:n,easing:"linear"})}),[t]),o.a.createElement("rect",{className:"diagonal diagonal"+t,x:"690.136",width:"60",height:"976",rx:"30",opacity:"0",fill:"url(#paint"+Math.floor(Math.random()*c.length)+"_linear)",style:{mixBlendMode:"screen",transform:"scale("+n+") rotate(45deg)"}})}t.a=function(){return o.a.createElement("div",{className:"background"},o.a.createElement("div",{className:"Diagonals"},o.a.createElement("svg",{width:"100%",height:"100%",viewBox:"-733 0 1466 1466",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Object(a.a)(Array(15).keys()).map((function(e,t){return o.a.createElement(l,{index:t,key:"diagonal-"+t})})),o.a.createElement("defs",null,c.map((function(e,t){return o.a.createElement("linearGradient",{key:"paints"+t+"_linear",id:"paint"+t+"_linear",x1:"720.136",y1:"966.313",x2:"720.136",y2:"-16.565",gradientUnits:"userSpaceOnUse"},o.a.createElement("stop",{stopColor:e}),o.a.createElement("stop",{offset:"1",stopColor:e,stopOpacity:"0"}))}))))))}},PsDL:function(e,t,n){"use strict";var a=n("wx14"),r=n("Ff2n"),o=n("q1tI"),i=n("iuhU"),c=n("H2TA"),l=n("ye/S"),u=n("VD++"),s=n("NqtD"),d=o.forwardRef((function(e,t){var n=e.edge,c=void 0!==n&&n,l=e.children,d=e.classes,m=e.className,p=e.color,f=void 0===p?"default":p,h=e.disabled,g=void 0!==h&&h,b=e.disableFocusRipple,v=void 0!==b&&b,y=e.size,w=void 0===y?"medium":y,E=Object(r.a)(e,["edge","children","classes","className","color","disabled","disableFocusRipple","size"]);return o.createElement(u.a,Object(a.a)({className:Object(i.a)(d.root,m,"default"!==f&&d["color".concat(Object(s.a)(f))],g&&d.disabled,"small"===w&&d["size".concat(Object(s.a)(w))],{start:d.edgeStart,end:d.edgeEnd}[c]),centerRipple:!0,focusRipple:!v,disabled:g,ref:t},E),o.createElement("span",{className:d.label},l))}));t.a=Object(c.a)((function(e){return{root:{textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:12,borderRadius:"50%",overflow:"visible",color:e.palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{backgroundColor:Object(l.b)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{backgroundColor:"transparent",color:e.palette.action.disabled}},edgeStart:{marginLeft:-12,"$sizeSmall&":{marginLeft:-3}},edgeEnd:{marginRight:-12,"$sizeSmall&":{marginRight:-3}},colorInherit:{color:"inherit"},colorPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},colorSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},disabled:{},sizeSmall:{padding:3,fontSize:e.typography.pxToRem(18)},label:{width:"100%",display:"flex",alignItems:"inherit",justifyContent:"inherit"}}}),{name:"MuiIconButton"})(d)},PxVv:function(e,t,n){},gZkK:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("hlFM"),i=n("tRbT"),c=n("PsDL"),l=n("Ji2X"),u=n("kKAo"),s=n("hlie"),d=n("ofer"),m=n("8Koj"),p=n.n(m),f=n("gYRD"),h=n("Bq7A"),g=n("R/WZ"),b=n("lopY"),v=n("EgnG"),y=[{name:"GrokJS",source:"https://github.com/cyrusdiego/grok-js",thumbnail:"/img/projects/grokjs.gif",summary:"This was our entry for HackED 2021. We implemented a Visual Studio Extension to help developers learn Javascript through reading. Googling for syntax can be difficult so our plugin explains code snippets that can be triggered by highlighting a code segment. The entire project was written in Typescript with the help of Acorn to parse JS files and we handle the mapping to appropriate documentation."},{name:"Unlibrary",source:"https://github.com/CMPUT301F20T24/Unlibrary/",thumbnail:"/img/projects/unlibrary.png",summary:"Unlibrary is an Android app used to track book lendings and borrowings. This was developed for a course project. With Unlibrary, people can search for books that other people have and is available for borrowing and can arrange a physical meet up to retrieve or return the book. We used Firebase as our backend service and Material design for the front end components. We used Android best practices including MVVM architecture, dependency injection using Hilt, set-up both unit and UI tests using Firebase emulator and Espresso respectively."},{name:"PongAI",source:"https://github.com/n30phyte/HackEDBeta2018",thumbnail:"/img/projects/pong-ai.gif",summary:"This was our entry for HackED Beta 2019 (the beginner friendly version of HackED). We implemented Pong from scratch in C++ using SFML and trained a model under 24 hours using Keras and Python to play against humans. Though we could not integrate the model in our game in time (the model produced outputs but we could not get our game to recognize the model outputs), we still had lots of fun (as seen in our commit messages) and was able to make it up to the semifinals."},{name:"ARVP",source:"https://arvp.org/",thumbnail:"/img/projects/auri-current-randomizer.png",summary:"I had the opportunity to help develop a self-driving underwater robot to participate in the annual RoboSub competition! The project involves developing our own simulator to reduce the number of pool trips we need to make to test our robot, use image and signal processing to locate objectives and obstacles from our camera and sonar sensors. The project uses ROS, Python and C++. One of my contributions was to add random currents to the simulator."}],w=Object(g.a)((function(e){return{root:{padding:e.spacing(1),opacity:0},title:{marginTop:"50px"},img:{maxWidth:"100%"}}}));function E(e){var t=e.project,n=w(),a=Object(b.a)((function(e){return e.breakpoints.up("sm")}));return r.a.createElement(i.a,{container:!0,key:t.name,justify:"center",alignItems:"center"},""!==t.thumbnail&&r.a.createElement(i.a,{item:!0,xs:12,sm:4},r.a.createElement("img",{className:n.img,src:t.thumbnail,alt:t.name+"-thumbnail"})),r.a.createElement(i.a,{item:!0,xs:12,sm:7},r.a.createElement(d.a,{variant:"h4",gutterBottom:!0,align:a?"left":"center"},t.name),r.a.createElement(d.a,{variant:"body1",align:a?"left":"center"},t.summary),r.a.createElement(o.a,{display:"flex"},r.a.createElement(c.a,{"aria-label":"source",component:s.a,href:t.source,disableRipple:!0},r.a.createElement(p.a,null)))))}t.default=function(){var e=w();return Object(a.useEffect)((function(){Object(v.a)({targets:".project",translateY:["-20px",0],opacity:[0,1],easing:"easeOutCubic",duration:1e3,delay:v.a.stagger(200)})}),[]),r.a.createElement("div",{className:"Projects"},r.a.createElement(f.a,null),r.a.createElement(h.a,null),r.a.createElement(d.a,{variant:"h3",className:e.title,gutterBottom:!0,align:"center"},"My projects"),r.a.createElement(l.a,{maxWidth:"md"},r.a.createElement(i.a,{container:!0},y.map((function(t){return r.a.createElement(i.a,{item:!0},r.a.createElement(u.a,{className:e.root+" project"},r.a.createElement(E,{project:t})))})))))}},kNCj:function(e,t,n){"use strict";n.r(t),n.d(t,"capitalize",(function(){return a.a})),n.d(t,"createChainedFunction",(function(){return r})),n.d(t,"createSvgIcon",(function(){return p})),n.d(t,"debounce",(function(){return f})),n.d(t,"deprecatedPropType",(function(){return h})),n.d(t,"isMuiElement",(function(){return g})),n.d(t,"ownerDocument",(function(){return b})),n.d(t,"ownerWindow",(function(){return v})),n.d(t,"requirePropFactory",(function(){return y.a})),n.d(t,"setRef",(function(){return w.a})),n.d(t,"unsupportedProp",(function(){return E})),n.d(t,"useControlled",(function(){return j})),n.d(t,"useEventCallback",(function(){return k.a})),n.d(t,"useForkRef",(function(){return O.a})),n.d(t,"unstable_useId",(function(){return S})),n.d(t,"useIsFocusVisible",(function(){return x.a}));var a=n("NqtD");n("E9XD");function r(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){return null==t?e:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),(function(){}))}var o=n("wx14"),i=n("q1tI"),c=n.n(i),l=n("Ff2n"),u=n("iuhU"),s=n("H2TA"),d=i.forwardRef((function(e,t){var n=e.children,r=e.classes,c=e.className,s=e.color,d=void 0===s?"inherit":s,m=e.component,p=void 0===m?"svg":m,f=e.fontSize,h=void 0===f?"default":f,g=e.htmlColor,b=e.titleAccess,v=e.viewBox,y=void 0===v?"0 0 24 24":v,w=Object(l.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(p,Object(o.a)({className:Object(u.a)(r.root,c,"inherit"!==d&&r["color".concat(Object(a.a)(d))],"default"!==h&&r["fontSize".concat(Object(a.a)(h))]),focusable:"false",viewBox:y,color:g,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:t},w),n,b?i.createElement("title",null,b):null)}));d.muiName="SvgIcon";var m=Object(s.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(d);function p(e,t){var n=function(t,n){return c.a.createElement(m,Object(o.a)({ref:n},t),e)};return n.muiName=m.muiName,c.a.memo(c.a.forwardRef(n))}function f(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function a(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=this,c=function(){e.apply(i,r)};clearTimeout(t),t=setTimeout(c,n)}return a.clear=function(){clearTimeout(t)},a}function h(e,t){return function(){return null}}function g(e,t){return i.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}function b(e){return e&&e.ownerDocument||document}function v(e){return b(e).defaultView||window}var y=n("ueBp"),w=n("GIek");function E(e,t,n,a,r){return null}function j(e){var t=e.controlled,n=e.default,a=(e.name,e.state,i.useRef(void 0!==t).current),r=i.useState(n),o=r[0],c=r[1];return[a?t:o,i.useCallback((function(e){a||c(e)}),[])]}var k=n("Ovef"),O=n("bfFb");function S(e){var t=i.useState(e),n=t[0],a=t[1],r=e||n;return i.useEffect((function(){null==n&&a("mui-".concat(Math.round(1e5*Math.random())))}),[n]),r}var x=n("G7As")},lopY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("wx14"),r=n("q1tI"),o=n("aXM8"),i=n("A+CX");function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(o.a)(),c=Object(i.a)({theme:n,name:"MuiUseMediaQuery",props:{}});var l="function"==typeof e?e(n):e;l=l.replace(/^@media( ?)/m,"");var u="undefined"!=typeof window&&void 0!==window.matchMedia,s=Object(a.a)({},c,t),d=s.defaultMatches,m=void 0!==d&&d,p=s.matchMedia,f=void 0===p?u?window.matchMedia:null:p,h=s.noSsr,g=void 0!==h&&h,b=s.ssrMatchMedia,v=void 0===b?null:b,y=r.useState((function(){return g&&u?f(l).matches:v?v(l).matches:m})),w=y[0],E=y[1];return r.useEffect((function(){var e=!0;if(u){var t=f(l),n=function(){e&&E(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[l,f,u]),w}},ueBp:function(e,t,n){"use strict";function a(e){return function(){return null}}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-projects-tsx-f5ac51cfba7e0d3f40fa.js.map