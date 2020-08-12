(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.floating = factory());
}(this, (function () { 'use strict';

function floating(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{},b=a.content,c=b===void 0?'\uD83D\uDC4C':b,d=a.number,e=d===void 0?1:d,f=a.duration,g=f===void 0?10:f,h=a.repeat,j=h===void 0?'infinite':h,k=a.direction,l=k===void 0?'normal':k,m=a.size,n=m===void 0?2:m,o=document.createElement('style');o.id='floating-style',document.getElementById('floating-style')||document.head.appendChild(o);var p=201,q='\n  .float-container {\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    left: 0;\n    pointer-events: none;\n  }\n\n  .float-container div * {\n    width: 1em;\n    height: 1em\n  }\n\n  @keyframes float{\n    '+Array.apply(null,{length:p+1}).map(function(a,b){return{percent:100*b/p,width:10*Math.sin(b/10),height:110+b*(-120/p)}}).map(function(a){var b=a.percent,c=a.width,d=a.height;return b+'% {\n          transform: translate(\n            '+c+'vw,\n            '+d+'vh\n          )\n        }'}).join('')+'\n  }';document.getElementById('floating-style').innerHTML=q;var r=document.createElement('div');r.className='float-container';for(var s=Array.isArray(n)?Math.floor(Math.random()*(n[1]-n[0]+1))+n[0]:n,t=function(a){var b=document.createElement('div');b.innerHTML=c,b.style.cssText='\n     position: absolute;\n     left: 0;\n     font-size: '+s+'em;\n     transform: translateY(110vh);\n     animation: \n       float\n       '+g+'s\n       linear\n       '+a*Math.random()+'s\n       '+j+'\n       '+l+';\n    margin-left: '+100*Math.random()+'vw;',b.addEventListener('animationend',function(a){'float'===a.animationName&&r.removeChild(b);}),r.appendChild(b);},u=0;u<e;u++)t(u);document.body.appendChild(r);}

return floating;

})));