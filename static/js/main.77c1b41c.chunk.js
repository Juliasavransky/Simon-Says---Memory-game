(this.webpackJsonpsimon=this.webpackJsonpsimon||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(10),s=c.n(a),i=c(3),o=c.n(i),u=c(8),j=c(6),b=c(2),l=c(7),O=(c(16),c(1)),f=function(e){var t=e.lastScore,c=e.highest,r=e.currentScore;return Object(O.jsx)(n.Fragment,{children:Object(O.jsxs)("div",{className:"scoreContainer",children:[Object(O.jsxs)("div",{className:"score",children:["Current Score",Object(O.jsx)("div",{children:r})]}),Object(O.jsxs)("div",{className:"score",children:["Last Score",Object(O.jsx)("div",{children:t})]}),Object(O.jsxs)("div",{className:"score",children:["Highest Score",Object(O.jsx)("div",{children:c})]})]})})},h=function(e){var t=e.startHandle,c=e.stage,r=e.level;return Object(O.jsx)(n.Fragment,{children:Object(O.jsx)("button",{onClick:t,className:"center",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:c}),Object(O.jsx)("h4",{children:0===r?"":r})]})})})},d=function(e){var t=e.active,c=e.userChoice;return Object(O.jsx)("button",{onClick:function(){return c("green")},className:"panel bottom-right ".concat(t?"greenActive":"")})},v=function(e){var t=e.active,c=e.userChoice;return Object(O.jsx)("button",{onClick:function(){return c("yellow")},className:"panel bottom-left ".concat(t?"yellowActive":"")})},x=function(e){var t=e.active,c=e.userChoice;return Object(O.jsx)("button",{onClick:function(){return c("blue")},className:"panel top-left ".concat(t?"blueActive":"")})},m=function(e){var t=e.active,c=e.userChoice;return Object(O.jsx)("button",{onClick:function(){return c("red")},className:"panel top-right ".concat(t?"redActive":"")})};function p(e){return new Promise((function(t){return setTimeout(t,e)}))}function g(e){var t=Object(n.useState)(localStorage.getItem(e)),c=Object(b.a)(t,2),r=c[0],a=c[1];return[r,function(t){localStorage.setItem(e,t),a(t)}]}var S=c.p+"static/media/gameOver.ded355b3.wav",k=c.p+"static/media/game-start.ba70f39e.wav",C=c.p+"static/media/simonRGBY.5cc7d325.mp3",w=function(){var e=Object(n.useState)(!1),t=Object(b.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)("Start"),s=Object(b.a)(a,2),i=s[0],w=s[1],y=Object(n.useState)(!1),N=Object(b.a)(y,2),F=N[0],E=N[1],I=Object(n.useState)([]),A=Object(b.a)(I,2),B=A[0],H=A[1],L=Object(n.useState)(0),M=Object(b.a)(L,2),P=M[0],T=M[1],G=Object(n.useState)(""),J=Object(b.a)(G,2),R=J[0],Y=J[1],D=Object(n.useState)(!1),q=Object(b.a)(D,2),z=q[0],K=q[1],Q=Object(n.useState)(!1),U=Object(b.a)(Q,2),V=U[0],W=U[1],X=Object(n.useState)([]),Z=Object(b.a)(X,2),$=Z[0],_=Z[1],ee=Object(n.useState)(!1),te=Object(b.a)(ee,2),ce=te[0],ne=te[1],re=Object(n.useState)(0),ae=Object(b.a)(re,2),se=ae[0],ie=ae[1],oe=g("last-game"),ue=Object(b.a)(oe,2),je=ue[0],be=ue[1],le=g("highest-score"),Oe=Object(b.a)(le,2),fe=Oe[0],he=Oe[1],de=["blue","red","green","yellow"],ve=Object(l.a)(k,{volume:.4}),xe=Object(b.a)(ve,1)[0];Object(n.useEffect)((function(){c&&xe()}),[c]);var me=Object(l.a)(S,{volume:.4}),pe=Object(b.a)(me,1)[0];Object(n.useEffect)((function(){ce&&pe()}),[ce]);var ge=Object(l.a)(C,{sprite:{red:[0,500],blue:[1270,400],green:[675,455],yellow:[1900,415]}},{volume:.4}),Se=Object(b.a)(ge,1)[0];function ke(){return(ke=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=7;break}return w("Ready"),K(!0),e.next=5,p(800);case 5:K(!1),ie(0);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ce=function(){he(je<fe?fe:je)};function we(){return(we=Object(j.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(1500);case 2:w("Simon Says"),t=0;case 4:if(!(t<B.length)){e.next=24;break}return Y(B[t]),Se({id:B[t]}),e.next=9,p(300);case 9:return Y(""),e.next=12,p(300);case 12:if(t!==B.length-1){e.next=20;break}return c=Object(u.a)(B).reverse(),E(!1),e.next=17,p(300);case 17:W(!0),w("Your turn"),_(c);case 20:case 21:t++,e.next=4;break;case 24:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e){return Ne.apply(this,arguments)}function Ne(){return(Ne=Object(j.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F||!V){e.next=42;break}if(c=Object(u.a)($),n=c.pop(),Y(t),Se({id:t}),t!==n){e.next=20;break}if(!c.length){e.next=10;break}_(c),e.next=18;break;case 10:return e.next=12,p(1e3);case 12:w("Simon Says"),E(!0),T(B.length+1),ie(10*P),W(!1),_([]);case 18:e.next=39;break;case 20:return e.next=22,p(500);case 22:return r(!1),Y(""),W(!1),_([]),H([]),ne(!0),Ce(),be(10*(P-1)),T(0),w("I'm sorry"),e.next=34,p(2e3);case 34:return w("Game Over"),e.next=37,p(2e3);case 37:w("Start"),ne(!1);case 39:return e.next=41,p(1e3);case 41:Y("");case 42:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){c&&(!function(){ke.apply(this,arguments)}(),E(!0),T(B.length+1))}),[c]),Object(n.useEffect)((function(){if(c&&F){var e=de[Math.floor(4*Math.random())],t=[].concat(Object(u.a)(B),[e]);H(t),console.log(t,"simon order")}}),[c,F]),Object(n.useEffect)((function(){c&&F&&B.length&&function(){we.apply(this,arguments)}()}),[c&&F&&B.length]),Object(O.jsxs)(n.Fragment,{children:[Object(O.jsxs)("div",{className:"simonContainer",children:[Object(O.jsx)(x,{userChoice:ye,active:z||"blue"===R}),Object(O.jsx)(m,{userChoice:ye,active:z||"red"===R}),Object(O.jsx)(v,{userChoice:ye,active:z||"yellow"===R}),Object(O.jsx)(d,{userChoice:ye,active:z||"green"===R}),Object(O.jsx)(h,{startHandle:function(){r(!0)},stage:i,level:P})]}),Object(O.jsx)(f,{lastScore:je,highest:fe,currentScore:se})]})},y=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,21)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(w,{})}),document.getElementById("root")),y()}},[[18,1,2]]]);
//# sourceMappingURL=main.77c1b41c.chunk.js.map