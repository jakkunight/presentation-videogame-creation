(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{289:function(e,t,i){"use strict";var a=i(0),o=i(68),n=i(412),r=i(19),s=i.n(r),l=i(9),c=i.n(l),d=i(20),u=i.n(d),j=i(91),h=Object(a.createContext)({}),g=i(22),b=function(e){var t=e.children,i=e.homeScreenId,n=Object(a.useState)(i),r=c()(n,2),l=r[0],d=r[1],b=Object(o.a)(),p=function(){for(var e=a.Children.toArray(t),i=[],o=0;o<e.length;o++)i=[].concat(s()(i),o!==l?[!1]:[!0]);return i},x=Object(a.useState)(p()),v=c()(x,2),m=v[0],O=v[1];Object(a.useEffect)((function(){O(p()),console.log("Navigator Screens:",m)}),[]);var w={navigate:function(e){var t;return u.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:(t=m)[l]=!1,t[e]=!0,d(e),O(t);case 5:case"end":return i.stop()}}),null,null,null,Promise)},screens:m,activeScreen:l};return Object(g.jsx)(h.Provider,{value:w,children:Object(g.jsx)(j.a,{bgColor:"black",w:b.width,h:b.height,children:t})})},p=i(415),x=i(409),v=i(288),m=function(e){var t=e.children,i=e.initial,n=e.animate,r=e.exit,s=e.id,l=e.next,c=e.prev,d=Object(a.useContext)(h),u=Object(o.a)();return Object(a.useEffect)((function(){console.log("Screen:",s,"Status:",d.screens[s])}),[]),Object(g.jsx)(p.a,{initial:i,animate:n,exit:r,visible:d.screens[s],children:Object(g.jsx)(v.a,{onActivated:function(e){e.nativeEvent.x>u.width/2?(console.log("Tap event on screen",s),d.navigate(l)):(console.log("Tap event on screen",s),d.navigate(c))},children:Object(g.jsx)(x.a,{w:u.width,h:u.height,position:"fixed",top:0,left:0,children:t})})})},O=i(410),w=function(e){var t=e.title,i=e.subtitle;t||(t="Title"),i||(i="Subtitle");var a=Object(o.a)();return Object(g.jsxs)(x.a,{w:a.width,h:a.height,textAlign:"center",bgColor:"darkBlue.900",children:[Object(g.jsx)(O.a,{color:"green.500",size:"4xl",children:"\u300e"+t+"\u300f"}),Object(g.jsx)(O.a,{color:"white",size:"xl",children:"\u300c"+i+"\u300d"})]})},S=i(204),f=i(411),C=i(414),T=i(184),k=i(413),y=function(e){var t=e.title,i=e.paragraphs,a=Object(o.a)();return Object(g.jsxs)(S.a,{w:a.width,h:a.height,p:"5%",bgColor:"darkBlue.900",space:5,children:[Object(g.jsx)(j.a,{children:Object(g.jsx)(O.a,{fontSize:"6xl",color:"green.500",children:t})}),i.map((function(e,t){return Object(g.jsxs)(f.a,{space:5,children:[Object(g.jsx)(C.a,{as:k.a,name:"moon",color:"yellow.400",size:"2xl"}),Object(g.jsx)(T.a,{fontSize:"2xl",color:"white",children:e})]},t)}))]})},R=function(e){var t=e.title,i=Object(o.a)();return t||(t="Title"),Object(g.jsx)(x.a,{textAlign:"center",w:i.width,h:i.height,bgColor:"darkBlue.900",children:Object(g.jsx)(O.a,{color:"green.500",size:"4xl",children:"\u300e"+t+"\u300f"})})},F=i(34).a.get("window"),D={},z={},N={};D.Fade={opacity:0},z.Fade={opacity:0},N.Fade={opacity:1,transition:{useNativeDriver:!1,duration:2e3}},D.SlideToRight={translateX:-F.width},z.SlideToRight={translateX:F.width},N.SlideToRight={translateX:0,transition:{useNativeDriver:!1,duration:2e3}},D.SlideToLeft={translateX:F.width},z.SlideToLeft={translateX:-F.width},N.SlideToLeft={translateX:0,transition:{useNativeDriver:!1,duration:2e3}},D.SlideToUp={translateY:-F.height},z.SlideToUp={translateY:F.height},N.SlideToUp={translateY:0,transition:{useNativeDriver:!1,duration:2e3}},D.SlideToDown={translateY:F.height},z.SlideToDown={translateY:-F.height},N.SlideToDown={translateY:0,transition:{useNativeDriver:!1,duration:2e3}},D.RotateClockwise={rotate:"0deg"},z.RotateClockwise={rotate:"0deg"},N.RotateClockwise={rotation:"-360deg",transition:{useNativeDriver:!1,duration:2e3}},D.RotateCounterClockwise={rotate:"0deg"},z.RotateCounterClockwise={rotate:"0deg"},N.RotateCounterClockwise={rotation:"360deg",transition:{useNativeDriver:!1,duration:2e3}},D.Zoom={scale:0},z.Zoom={scale:0},N.Zoom={scale:1,transition:{useNativeDriver:!1,duration:2e3}};t.a=function(){Object(o.a)();return Object(g.jsx)(n.a,{children:Object(g.jsxs)(b,{homeScreenId:0,children:[Object(g.jsx)(m,{id:0,prev:0,next:1,initial:D.Fade,animate:N.Fade,exit:z.Fade,children:Object(g.jsx)(w,{title:"Creaci\xf3n de Videojuegos",subtitle:"ft. Construct 2"})}),Object(g.jsx)(m,{id:1,prev:0,next:2,initial:D.Fade,animate:N.Fade,exit:z.Fade,children:Object(g.jsx)(R,{title:"Introducci\xf3n"})}),Object(g.jsx)(m,{id:2,prev:1,next:3,initial:D.Fade,animate:N.Fade,exit:z.Fade,children:Object(g.jsx)(y,{title:"Sobre m\xed:",paragraphs:["Soy Santiago Wu, conocido en Internet como Jakku Night.","Soy un creador de contenido en Twitch y YouTube.","Me especializo en la creaci\xf3n de videojuegos.","Hago dibujos estilo manga/anime.","Compongo mis propias canciones para mis streams y videos.","Trabajo con programas libres y gratuitos.","Hago todo desde una tablet Android, sin PC o port\xe1til."]})}),Object(g.jsx)(m,{id:3,prev:2,next:4,initial:D.SlideToRight,animate:N.SlideToRight,exit:z.SlideToRight,children:Object(g.jsx)(R,{title:"Motivaci\xf3n"})}),Object(g.jsx)(m,{id:4,prev:3,next:5,initial:D.RotateClockwise,animate:N.RotateClockwise,exit:z.RotateClockwise,children:Object(g.jsx)(y,{title:"\xbfPor qu\xe9 nos divertimos?",paragraphs:["\xbfQu\xe9 es la diversi\xf3n?","\xbfPor qu\xe9 los videojuegos son divertidos?","\xbfQu\xe9 habilidades adquiero en el proceso?","\xbfQu\xe9 puedo aprender de ello?","\xbfPuedo vivir de ello?","\xbfC\xf3mo es la industria de los videojuegos?","\xbfEs DIF\xcdCIL?"]})}),Object(g.jsx)(m,{id:5,prev:4,next:6,initial:D.Zoom,animate:N.Zoom,exit:z.Zoom,children:Object(g.jsx)(y,{title:"\xbfPor d\xf3nde iniciar?",paragraphs:['Lo mejor es y ser\xe1 siempre el cd\xf3igo. Todo videojuego, pasa por el c\xf3digo sin falta, ya que es lo que mueve el juego y los programas utilizados durante el desarrollo. Por lo general, para no perder tiempo en el proceso y ahorrar gastos innecesarios, las empresas utilizan lo que se llama un "game engine" o "motor de juego", el cual es un software que realiza ciertas tareas b\xe1sicas de los videojuegos por nosotros adem\xe1s nos deja implementar nuestras mejoras sobre plantillas de juegos predeterminadas y otras caracter\xedsticas casi sin saber programaci\xf3n. El game engine que vamos a utilizar es Construct 2, un game engine usado en juegos de la Web.']})}),Object(g.jsx)(m,{id:6,prev:5,next:6,initial:D.SlideToUp,animate:N.SlideToUp,exit:z.SlideToUp,children:Object(g.jsx)(R,{title:"Gracias por su atenci\xf3n"})})]})})}},300:function(e,t,i){e.exports=i(398)}},[[300,1,2]]]);
//# sourceMappingURL=app.10bc8b8e.chunk.js.map