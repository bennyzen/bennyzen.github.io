const rg=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}};rg();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="139",sg=0,vu=1,og=2,Of=1,ag=2,io=3,wo=0,Gn=1,Ms=2,Bf=1,Hi=0,ps=1,bu=2,wu=3,Mu=4,lg=5,ns=100,cg=101,hg=102,Su=103,Tu=104,ug=200,dg=201,fg=202,pg=203,zf=204,kf=205,mg=206,gg=207,_g=208,xg=209,yg=210,vg=0,bg=1,wg=2,Gc=3,Mg=4,Sg=5,Tg=6,Eg=7,bl=0,Ag=1,Cg=2,vi=0,Lg=1,Rg=2,Pg=3,Dg=4,Ig=5,Uf=300,Ss=301,Ts=302,Wc=303,Xc=304,wl=306,$c=1e3,kn=1001,qc=1002,De=1003,Eu=1004,Au=1005,sn=1006,Fg=1007,Ml=1008,Er=1009,Ng=1010,Og=1011,Mo=1012,Bg=1013,Ua=1014,dr=1015,ms=1016,zg=1017,kg=1018,gs=1020,Ug=1021,Hg=1022,Un=1023,Vg=1024,Gg=1025,_r=1026,Es=1027,Wg=1028,Xg=1029,$g=1030,qg=1031,Yg=1033,Ul=33776,Hl=33777,Vl=33778,Gl=33779,Cu=35840,Lu=35841,Ru=35842,Pu=35843,jg=36196,Du=37492,Iu=37496,Fu=37808,Nu=37809,Ou=37810,Bu=37811,zu=37812,ku=37813,Uu=37814,Hu=37815,Vu=37816,Gu=37817,Wu=37818,Xu=37819,$u=37820,qu=37821,Yu=36492,Jg=2200,Zg=2201,Kg=2202,Qa=2300,tl=2301,Wl=2302,rs=2400,ss=2401,el=2402,Th=2500,Hf=2501,Qg=0,Mi=3e3,he=3001,t_=3200,e_=3201,Ns=0,n_=1,fi="srgb",fr="srgb-linear",Xl=7680,i_=519,So=35044,nl=35048,ju="300 es",Yc=1035;class Rr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Be=[];for(let s=0;s<256;s++)Be[s]=(s<16?"0":"")+s.toString(16);const $l=Math.PI/180,jc=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Xe(s,t,e){return Math.max(t,Math.min(e,s))}function r_(s,t){return(s%t+t)%t}function ql(s,t,e){return(1-e)*s+e*t}function Ju(s){return(s&s-1)===0&&s!==0}function Jc(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}class st{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}st.prototype.isVector2=!0;class ke{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],p=i[0],m=i[3],_=i[6],v=i[1],w=i[4],b=i[7],x=i[2],E=i[5],A=i[8];return r[0]=o*p+a*v+l*x,r[3]=o*m+a*w+l*E,r[6]=o*_+a*b+l*A,r[1]=c*p+h*v+u*x,r[4]=c*m+h*w+u*E,r[7]=c*_+h*b+u*A,r[2]=d*p+f*v+g*x,r[5]=d*m+f*w+g*E,r[8]=d*_+f*b+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=u*p,t[1]=(i*c-h*n)*p,t[2]=(a*n-i*o)*p,t[3]=d*p,t[4]=(h*e-i*l)*p,t[5]=(i*r-a*e)*p,t[6]=f*p,t[7]=(n*l-c*e)*p,t[8]=(o*e-n*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*r+n*l,i[3]=e*o+n*c,i[6]=e*a+n*h,i[1]=-n*r+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}ke.prototype.isMatrix3=!0;function Vf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>65535)return!0;return!1}function To(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Yl={[fi]:{[fr]:xr},[fr]:{[fi]:Ha}},Nn={legacyMode:!0,get workingColorSpace(){return fr},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if(Yl[t]&&Yl[t][e]!==void 0){const n=Yl[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},Gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Te={r:0,g:0,b:0},On={h:0,s:0,l:0},Yo={h:0,s:0,l:0};function jl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function jo(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}class Et{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nn.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=fr){return this.r=t,this.g=e,this.b=n,Nn.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=fr){if(t=r_(t,1),e=Xe(e,0,1),n=Xe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=jl(o,r,t+1/3),this.g=jl(o,r,t),this.b=jl(o,r,t-1/3)}return Nn.toWorkingColorSpace(this,i),this}setStyle(t,e=fi){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Nn.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Nn.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseInt(r[2],10)/100,h=parseInt(r[3],10)/100;return n(r[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Nn.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Nn.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=fi){const n=Gf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xr(t.r),this.g=xr(t.g),this.b=xr(t.b),this}copyLinearToSRGB(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Nn.fromWorkingColorSpace(jo(this,Te),t),Xe(Te.r*255,0,255)<<16^Xe(Te.g*255,0,255)<<8^Xe(Te.b*255,0,255)<<0}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fr){Nn.fromWorkingColorSpace(jo(this,Te),e);const n=Te.r,i=Te.g,r=Te.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=fr){return Nn.fromWorkingColorSpace(jo(this,Te),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=fi){return Nn.fromWorkingColorSpace(jo(this,Te),t),t!==fi?`color(${t} ${Te.r} ${Te.g} ${Te.b})`:`rgb(${Te.r*255|0},${Te.g*255|0},${Te.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(On),On.h+=t,On.s+=e,On.l+=n,this.setHSL(On.h,On.s,On.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(On),t.getHSL(Yo);const n=ql(On.h,Yo.h,e),i=ql(On.s,Yo.s,e),r=ql(On.l,Yo.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}Et.NAMES=Gf;Et.prototype.isColor=!0;Et.prototype.r=1;Et.prototype.g=1;Et.prototype.b=1;let Or;class Pr{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Or===void 0&&(Or=To("canvas")),Or.width=t.width,Or.height=t.height;const n=Or.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Or}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=To("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=xr(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xr(e[n]/255)*255):e[n]=xr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Wf{constructor(t=null){this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Jl(i[o].image)):r.push(Jl(i[o]))}else r=Jl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Jl(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?Pr.getDataURL(s):s.data?{data:Array.prototype.slice.call(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}Wf.prototype.isSource=!0;let s_=0;class Fe extends Rr{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=kn,i=kn,r=sn,o=Ml,a=Un,l=Er,c=1,h=Mi){super();Object.defineProperty(this,"id",{value:s_++}),this.uuid=ei(),this.name="",this.source=new Wf(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case $c:t.x=t.x-Math.floor(t.x);break;case kn:t.x=t.x<0?0:1;break;case qc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case $c:t.y=t.y-Math.floor(t.y);break;case kn:t.y=t.y<0?0:1;break;case qc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Uf;Fe.prototype.isTexture=!0;class se{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,b=(f+1)/2,x=(_+1)/2,E=(h+d)/4,A=(u+p)/4,D=(g+m)/4;return w>b&&w>x?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=E/n,r=A/n):b>x?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=E/i,r=D/i):x<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(x),n=A/r,i=D/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-p)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}se.prototype.isVector4=!0;class xn extends Rr{constructor(t,e,n={}){super();this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:sn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}xn.prototype.isWebGLRenderTarget=!0;class Sl extends Fe{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Sl.prototype.isDataArrayTexture=!0;class o_ extends xn{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new Sl(null,t,e,n),this.texture.isRenderTargetTexture=!0}}o_.prototype.isWebGLArrayRenderTarget=!0;class Eh extends Fe{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Eh.prototype.isData3DTexture=!0;class a_ extends xn{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new Eh(null,t,e,n),this.texture.isRenderTargetTexture=!0}}a_.prototype.isWebGL3DRenderTarget=!0;class l_ extends xn{constructor(t,e,n,i={}){super(t,e,i);const r=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=r.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.texture.length;i<r;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}l_.prototype.isWebGLMultipleRenderTargets=!0;class ln{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],p=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=p;return}if(u!==p||l!==d||c!==f||h!==g){let m=1-a;const _=l*d+c*f+h*g+u*p,v=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const x=Math.sqrt(w),E=Math.atan2(x,_*v);m=Math.sin(m*E)/x,a=Math.sin(a*E)/x}const b=a*v;if(l=l*m+d*b,c=c*m+f*b,h=h*m+g*b,u=u*m+p*b,m===1-a){const x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}ln.prototype.isQuaternion=!0;class R{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Zu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-r*i,u=l*i+r*n-o*e,d=-r*e-o*n-a*i;return this.x=c*l+d*-r+h*-a-u*-o,this.y=h*l+d*-o+u*-r-c*-a,this.z=u*l+d*-a+c*-o-h*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zl.copy(this).projectOnVector(t),this.sub(Zl)}reflect(t){return this.sub(Zl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}R.prototype.isVector3=!0;const Zl=new R,Zu=new ln;class $n{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>r&&(r=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=er.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)er.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(er)}else n.boundingBox===null&&n.computeBoundingBox(),Kl.copy(n.boundingBox),Kl.applyMatrix4(t.matrixWorld),this.union(Kl);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,er),er.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($s),Jo.subVectors(this.max,$s),Br.subVectors(t.a,$s),zr.subVectors(t.b,$s),kr.subVectors(t.c,$s),Ci.subVectors(zr,Br),Li.subVectors(kr,zr),nr.subVectors(Br,kr);let e=[0,-Ci.z,Ci.y,0,-Li.z,Li.y,0,-nr.z,nr.y,Ci.z,0,-Ci.x,Li.z,0,-Li.x,nr.z,0,-nr.x,-Ci.y,Ci.x,0,-Li.y,Li.x,0,-nr.y,nr.x,0];return!Ql(e,Br,zr,kr,Jo)||(e=[1,0,0,0,1,0,0,0,1],!Ql(e,Br,zr,kr,Jo))?!1:(Zo.crossVectors(Ci,Li),e=[Zo.x,Zo.y,Zo.z],Ql(e,Br,zr,kr,Jo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return er.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(er).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ai),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}$n.prototype.isBox3=!0;const ai=[new R,new R,new R,new R,new R,new R,new R,new R],er=new R,Kl=new $n,Br=new R,zr=new R,kr=new R,Ci=new R,Li=new R,nr=new R,$s=new R,Jo=new R,Zo=new R,ir=new R;function Ql(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ir.fromArray(s,r);const a=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=t.dot(ir),c=e.dot(ir),h=n.dot(ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const c_=new $n,Ku=new R,Ko=new R,tc=new R;class Os{constructor(t=new R,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):c_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){tc.subVectors(t,this.center);const e=tc.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(tc.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Ko.set(0,0,1).multiplyScalar(t.radius):Ko.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Ku.copy(t.center).add(Ko)),this.expandByPoint(Ku.copy(t.center).sub(Ko)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new R,ec=new R,Qo=new R,Ri=new R,nc=new R,ta=new R,ic=new R;class Bs{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.direction).multiplyScalar(e).add(this.origin),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ec.copy(t).add(e).multiplyScalar(.5),Qo.copy(e).sub(t).normalize(),Ri.copy(this.origin).sub(ec);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Qo),a=Ri.dot(this.direction),l=-Ri.dot(Qo),c=Ri.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Qo).multiplyScalar(d).add(ec),f}intersectSphere(t,e){li.subVectors(t.center,this.origin);const n=li.dot(this.direction),i=li.dot(li)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||n!==n)&&(n=r),(o<i||i!==i)&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,i,r){nc.subVectors(e,t),ta.subVectors(n,t),ic.crossVectors(nc,ta);let o=this.direction.dot(ic),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ri.subVectors(this.origin,t);const l=a*this.direction.dot(ta.crossVectors(Ri,ta));if(l<0)return null;const c=a*this.direction.dot(nc.cross(Ri));if(c<0||l+c>o)return null;const h=-a*Ri.dot(ic);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,r,o,a,l,c,h,u,d,f,g,p,m){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=u,_[14]=d,_[3]=f,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ur.setFromMatrixColumn(t,0).length(),r=1/Ur.setFromMatrixColumn(t,1).length(),o=1/Ur.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-p*c,e[9]=-a*l,e[2]=p-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,p=c*u;e[0]=d+p*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=p+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,p=c*u;e[0]=d-p*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=p-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,p=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+p,e[1]=l*u,e[5]=p*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=p-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-p*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,p=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+p,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=p*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(h_,t,u_)}lookAt(t,e,n){const i=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Pi.crossVectors(n,dn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Pi.crossVectors(n,dn)),Pi.normalize(),ea.crossVectors(dn,Pi),i[0]=Pi.x,i[4]=ea.x,i[8]=dn.x,i[1]=Pi.y,i[5]=ea.y,i[9]=dn.y,i[2]=Pi.z,i[6]=ea.z,i[10]=dn.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],p=n[6],m=n[10],_=n[14],v=n[3],w=n[7],b=n[11],x=n[15],E=i[0],A=i[4],D=i[8],k=i[12],F=i[1],y=i[5],C=i[9],G=i[13],P=i[2],z=i[6],O=i[10],V=i[14],N=i[3],J=i[7],L=i[11],Q=i[15];return r[0]=o*E+a*F+l*P+c*N,r[4]=o*A+a*y+l*z+c*J,r[8]=o*D+a*C+l*O+c*L,r[12]=o*k+a*G+l*V+c*Q,r[1]=h*E+u*F+d*P+f*N,r[5]=h*A+u*y+d*z+f*J,r[9]=h*D+u*C+d*O+f*L,r[13]=h*k+u*G+d*V+f*Q,r[2]=g*E+p*F+m*P+_*N,r[6]=g*A+p*y+m*z+_*J,r[10]=g*D+p*C+m*O+_*L,r[14]=g*k+p*G+m*V+_*Q,r[3]=v*E+w*F+b*P+x*N,r[7]=v*A+w*y+b*z+x*J,r[11]=v*D+w*C+b*O+x*L,r[15]=v*k+w*G+b*V+x*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],p=t[7],m=t[11],_=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+p*(+e*l*f-e*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+e*c*u-e*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+_*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],p=t[13],m=t[14],_=t[15],v=u*m*c-p*d*c+p*l*f-a*m*f-u*l*_+a*d*_,w=g*d*c-h*m*c-g*l*f+o*m*f+h*l*_-o*d*_,b=h*p*c-g*u*c+g*a*f-o*p*f-h*a*_+o*u*_,x=g*u*l-h*p*l-g*a*d+o*p*d+h*a*m-o*u*m,E=e*v+n*w+i*b+r*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(p*d*r-u*m*r-p*i*f+n*m*f+u*i*_-n*d*_)*A,t[2]=(a*m*r-p*l*r+p*i*c-n*m*c-a*i*_+n*l*_)*A,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*A,t[4]=w*A,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*_+e*d*_)*A,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*_-e*l*_)*A,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*f+e*l*f)*A,t[8]=b*A,t[9]=(g*u*r-h*p*r-g*n*f+e*p*f+h*n*_-e*u*_)*A,t[10]=(o*p*r-g*a*r+g*n*c-e*p*c-o*n*_+e*a*_)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*f-e*a*f)*A,t[12]=x*A,t[13]=(h*p*i-g*u*i+g*n*d-e*p*d-h*n*m+e*u*m)*A,t[14]=(g*a*i-o*p*i-g*n*l+e*p*l+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,g=r*u,p=o*h,m=o*u,_=a*u,v=l*c,w=l*h,b=l*u,x=n.x,E=n.y,A=n.z;return i[0]=(1-(p+_))*x,i[1]=(f+b)*x,i[2]=(g-w)*x,i[3]=0,i[4]=(f-b)*E,i[5]=(1-(d+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(g+w)*A,i[9]=(m-v)*A,i[10]=(1-(d+p))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ur.set(i[0],i[1],i[2]).length();const o=Ur.set(i[4],i[5],i[6]).length(),a=Ur.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Bn.copy(this);const c=1/r,h=1/o,u=1/a;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=h,Bn.elements[5]*=h,Bn.elements[6]*=h,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*r/(e-t),c=2*r/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+r)/(o-r),f=-2*o*r/(o-r);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-r),u=(e+t)*l,d=(n+i)*c,f=(o+r)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}Ft.prototype.isMatrix4=!0;const Ur=new R,Bn=new Ft,h_=new R(0,0,0),u_=new R(1,1,1),Pi=new R,ea=new R,dn=new R,Qu=new Ft,td=new ln;class Dr{constructor(t=0,e=0,n=0,i=Dr.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Xe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return td.setFromEuler(this),this.setFromQuaternion(td,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Dr.prototype.isEuler=!0;Dr.DefaultOrder="XYZ";Dr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Xf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let d_=0;const ed=new R,Hr=new ln,ci=new Ft,na=new R,qs=new R,f_=new R,p_=new ln,nd=new R(1,0,0),id=new R(0,1,0),rd=new R(0,0,1),m_={type:"added"},sd={type:"removed"};class ne extends Rr{constructor(){super();Object.defineProperty(this,"id",{value:d_++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ne.DefaultUp.clone();const t=new R,e=new Dr,n=new ln,i=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ke}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=ne.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Xf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,e){return Hr.setFromAxisAngle(t,e),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(nd,t)}rotateY(t){return this.rotateOnAxis(id,t)}rotateZ(t){return this.rotateOnAxis(rd,t)}translateOnAxis(t,e){return ed.copy(t).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(nd,t)}translateY(t){return this.translateOnAxis(id,t)}translateZ(t){return this.translateOnAxis(rd,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?na.copy(t):na.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(qs,na,this.up):ci.lookAt(na,qs,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Hr.setFromRotationMatrix(ci),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(m_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(sd)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ci.multiply(t.parent.matrixWorld)),t.applyMatrix4(ci),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,t,f_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qs,p_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ne.DefaultUp=new R(0,1,0);ne.DefaultMatrixAutoUpdate=!0;ne.prototype.isObject3D=!0;const zn=new R,hi=new R,rc=new R,ui=new R,Vr=new R,Gr=new R,od=new R,sc=new R,oc=new R,ac=new R;class Me{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){zn.subVectors(i,e),hi.subVectors(n,e),rc.subVectors(t,e);const o=zn.dot(zn),a=zn.dot(hi),l=zn.dot(rc),c=hi.dot(hi),h=hi.dot(rc),u=o*c-a*a;if(u===0)return r.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ui),ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,ui),l.set(0,0),l.addScaledVector(r,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),hi.subVectors(t,e),zn.cross(hi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),zn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Me.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Me.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Me.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Me.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Me.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Vr.subVectors(i,n),Gr.subVectors(r,n),sc.subVectors(t,n);const l=Vr.dot(sc),c=Gr.dot(sc);if(l<=0&&c<=0)return e.copy(n);oc.subVectors(t,i);const h=Vr.dot(oc),u=Gr.dot(oc);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Vr,o);ac.subVectors(t,r);const f=Vr.dot(ac),g=Gr.dot(ac);if(g>=0&&f<=g)return e.copy(r);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Gr,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return od.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(od,a);const _=1/(m+p+d);return o=p*_,a=d*_,e.copy(n).addScaledVector(Vr,o).addScaledVector(Gr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let g_=0;class Ee extends Rr{constructor(){super();Object.defineProperty(this,"id",{value:g_++}),this.uuid=ei(),this.name="",this.type="Material",this.fog=!0,this.blending=ps,this.side=wo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=zf,this.blendDst=kf,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Gc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=i_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Bf;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==wo&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}Ee.prototype.isMaterial=!0;Ee.fromType=function(){return null};class Tl extends Ee{constructor(t){super();this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Tl.prototype.isMeshBasicMaterial=!0;const ye=new R,ia=new st;class Se{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=So,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new Et),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new st),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new R),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,r=t.length;i<r;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new se),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ia.fromBufferAttribute(this,e),ia.applyMatrix3(t),this.setXY(e,ia.x,ia.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==So&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}Se.prototype.isBufferAttribute=!0;class $f extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class qf extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class __ extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}}__.prototype.isFloat16BufferAttribute=!0;class de extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}}let x_=0;const bn=new Ft,lc=new ne,Wr=new R,fn=new $n,Ys=new $n,Ce=new R;class le extends Rr{constructor(){super();Object.defineProperty(this,"id",{value:x_++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vf(t)?qf:$f)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return lc.lookAt(t),lc.updateMatrix(),this.applyMatrix4(lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wr).negate(),this.translate(Wr.x,Wr.y,Wr.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Ce.addVectors(fn.min,Ys.min),fn.expandByPoint(Ce),Ce.addVectors(fn.max,Ys.max),fn.expandByPoint(Ce)):(fn.expandByPoint(Ys.min),fn.expandByPoint(Ys.max))}fn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ce.fromBufferAttribute(a,c),l&&(Wr.fromBufferAttribute(t,c),Ce.add(Wr)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let F=0;F<a;F++)c[F]=new R,h[F]=new R;const u=new R,d=new R,f=new R,g=new st,p=new st,m=new st,_=new R,v=new R;function w(F,y,C){u.fromArray(i,F*3),d.fromArray(i,y*3),f.fromArray(i,C*3),g.fromArray(o,F*2),p.fromArray(o,y*2),m.fromArray(o,C*2),d.sub(u),f.sub(u),p.sub(g),m.sub(g);const G=1/(p.x*m.y-m.x*p.y);!isFinite(G)||(_.copy(d).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(G),v.copy(f).multiplyScalar(p.x).addScaledVector(d,-m.x).multiplyScalar(G),c[F].add(_),c[y].add(_),c[C].add(_),h[F].add(v),h[y].add(v),h[C].add(v))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let F=0,y=b.length;F<y;++F){const C=b[F],G=C.start,P=C.count;for(let z=G,O=G+P;z<O;z+=3)w(n[z+0],n[z+1],n[z+2])}const x=new R,E=new R,A=new R,D=new R;function k(F){A.fromArray(r,F*3),D.copy(A);const y=c[F];x.copy(y),x.sub(A.multiplyScalar(A.dot(y))).normalize(),E.crossVectors(D,y);const G=E.dot(h[F])<0?-1:1;l[F*4]=x.x,l[F*4+1]=x.y,l[F*4+2]=x.z,l[F*4+3]=G}for(let F=0,y=b.length;F<y;++F){const C=b[F],G=C.start,P=C.count;for(let z=G,O=G+P;z<O;z+=3)k(n[z+0]),k(n[z+1]),k(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),p=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],l=a.array,c=a.itemSize*e,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let _=0;_<h;_++)d[g++]=c[f++]}return new Se(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new le,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}le.prototype.isBufferGeometry=!0;const ad=new Ft,Xr=new Bs,cc=new Os,Di=new R,Ii=new R,Fi=new R,hc=new R,uc=new R,dc=new R,ra=new R,sa=new R,oa=new R,aa=new st,la=new st,ca=new st,fc=new R,ha=new R;class Ue extends ne{constructor(t=new le,e=new Tl){super();this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(r),t.ray.intersectsSphere(cc)===!1)||(ad.copy(r).invert(),Xr.copy(t.ray).applyMatrix4(ad),n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const _=f[p],v=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let x=w,E=b;x<E;x+=3){const A=a.getX(x),D=a.getX(x+1),k=a.getX(x+2);o=ua(this,v,t,Xr,l,c,h,u,d,A,D,k),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),m=Math.min(a.count,g.start+g.count);for(let _=p,v=m;_<v;_+=3){const w=a.getX(_),b=a.getX(_+1),x=a.getX(_+2);o=ua(this,i,t,Xr,l,c,h,u,d,w,b,x),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,m=f.length;p<m;p++){const _=f[p],v=i[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let x=w,E=b;x<E;x+=3){const A=x,D=x+1,k=x+2;o=ua(this,v,t,Xr,l,c,h,u,d,A,D,k),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=_.materialIndex,e.push(o))}}else{const p=Math.max(0,g.start),m=Math.min(l.count,g.start+g.count);for(let _=p,v=m;_<v;_+=3){const w=_,b=_+1,x=_+2;o=ua(this,i,t,Xr,l,c,h,u,d,w,b,x),o&&(o.faceIndex=Math.floor(_/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}Ue.prototype.isMesh=!0;function y_(s,t,e,n,i,r,o,a){let l;if(t.side===Gn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side!==Ms,a),l===null)return null;ha.copy(a),ha.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ha);return c<e.near||c>e.far?null:{distance:c,point:ha.clone(),object:s}}function ua(s,t,e,n,i,r,o,a,l,c,h,u){Di.fromBufferAttribute(i,c),Ii.fromBufferAttribute(i,h),Fi.fromBufferAttribute(i,u);const d=s.morphTargetInfluences;if(r&&d){ra.set(0,0,0),sa.set(0,0,0),oa.set(0,0,0);for(let g=0,p=r.length;g<p;g++){const m=d[g],_=r[g];m!==0&&(hc.fromBufferAttribute(_,c),uc.fromBufferAttribute(_,h),dc.fromBufferAttribute(_,u),o?(ra.addScaledVector(hc,m),sa.addScaledVector(uc,m),oa.addScaledVector(dc,m)):(ra.addScaledVector(hc.sub(Di),m),sa.addScaledVector(uc.sub(Ii),m),oa.addScaledVector(dc.sub(Fi),m)))}Di.add(ra),Ii.add(sa),Fi.add(oa)}s.isSkinnedMesh&&(s.boneTransform(c,Di),s.boneTransform(h,Ii),s.boneTransform(u,Fi));const f=y_(s,t,e,n,Di,Ii,Fi,fc);if(f){a&&(aa.fromBufferAttribute(a,c),la.fromBufferAttribute(a,h),ca.fromBufferAttribute(a,u),f.uv=Me.getUV(fc,Di,Ii,Fi,aa,la,ca,new st)),l&&(aa.fromBufferAttribute(l,c),la.fromBufferAttribute(l,h),ca.fromBufferAttribute(l,u),f.uv2=Me.getUV(fc,Di,Ii,Fi,aa,la,ca,new st));const g={a:c,b:h,c:u,normal:new R,materialIndex:0};Me.getNormal(Di,Ii,Fi,g.normal),f.face=g}return f}class zs extends le{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(p,m,_,v,w,b,x,E,A,D,k){const F=b/A,y=x/D,C=b/2,G=x/2,P=E/2,z=A+1,O=D+1;let V=0,N=0;const J=new R;for(let L=0;L<O;L++){const Q=L*y-G;for(let nt=0;nt<z;nt++){const at=nt*F-C;J[p]=at*v,J[m]=Q*w,J[_]=P,c.push(J.x,J.y,J.z),J[p]=0,J[m]=0,J[_]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(nt/A),u.push(1-L/D),V+=1}}for(let L=0;L<D;L++)for(let Q=0;Q<A;Q++){const nt=d+Q+z*L,at=d+Q+z*(L+1),Rt=d+(Q+1)+z*(L+1),gt=d+(Q+1)+z*L;l.push(nt,at,gt),l.push(at,Rt,gt),N+=6}a.addGroup(f,N,k),f+=N,d+=V}}static fromJSON(t){return new zs(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function As(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=As(s[e]);for(const i in n)t[i]=n[i]}return t}const v_={clone:As,merge:Ge};var b_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,w_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends Ee{constructor(t){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=b_,this.fragmentShader=w_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Wn.prototype.isShaderMaterial=!0;class Ah extends ne{constructor(){super();this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ah.prototype.isCamera=!0;class tn extends Ah{constructor(t=50,e=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=jc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($l*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return jc*2*Math.atan(Math.tan($l*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($l*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}tn.prototype.isPerspectiveCamera=!0;const $r=90,qr=1;class Ch extends ne{constructor(t,e,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new tn($r,qr,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new R(1,0,0)),this.add(i);const r=new tn($r,qr,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(-1,0,0)),this.add(r);const o=new tn($r,qr,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new tn($r,qr,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new tn($r,qr,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new tn($r,qr,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.outputEncoding,d=t.toneMapping,f=t.xr.enabled;t.outputEncoding=Mi,t.toneMapping=vi,t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.outputEncoding=u,t.toneMapping=d,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class El extends Fe{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ss;super(t,e,n,i,r,o,a,l,c,h);this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}El.prototype.isCubeTexture=!0;class Yf extends xn{constructor(t,e={}){super(t,t,e);const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new El(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new zs(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Gn,blending:Hi});r.uniforms.tEquirect.value=e;const o=new Ue(i,r),a=e.minFilter;return e.minFilter===Ml&&(e.minFilter=sn),new Ch(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}Yf.prototype.isWebGLCubeRenderTarget=!0;const pc=new R,M_=new R,S_=new ke;class gi{constructor(t=new R(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=pc.subVectors(n,e).cross(M_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||S_.getNormalMatrix(t),i=this.coplanarPoint(pc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}gi.prototype.isPlane=!0;const Yr=new Os,da=new R;class Al{constructor(t=new gi,e=new gi,n=new gi,i=new gi,r=new gi,o=new gi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],p=n[11],m=n[12],_=n[13],v=n[14],w=n[15];return e[0].setComponents(a-i,u-l,p-d,w-m).normalize(),e[1].setComponents(a+i,u+l,p+d,w+m).normalize(),e[2].setComponents(a+r,u+c,p+f,w+_).normalize(),e[3].setComponents(a-r,u-c,p-f,w-_).normalize(),e[4].setComponents(a-o,u-h,p-g,w-v).normalize(),e[5].setComponents(a+o,u+h,p+g,w+v).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Yr)}intersectsSprite(t){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(da.x=i.normal.x>0?t.max.x:t.min.x,da.y=i.normal.y>0?t.max.y:t.min.y,da.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(da)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function T_(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function r(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(e?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(r(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Lh extends le{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],p=[],m=[];for(let _=0;_<h;_++){const v=_*d-o;for(let w=0;w<c;w++){const b=w*u-r;g.push(b,-v,0),p.push(0,0,1),m.push(w/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){const w=v+c*_,b=v+c*(_+1),x=v+1+c*(_+1),E=v+1+c*_;f.push(w,b,E),f.push(b,x,E)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(p,3)),this.setAttribute("uv",new de(m,2))}static fromJSON(t){return new Lh(t.width,t.height,t.widthSegments,t.heightSegments)}}var E_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,A_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,L_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D_="vec3 transformed = vec3( position );",I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,F_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,N_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,U_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,W_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,X_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z_="gl_FragColor = linearToOutputTexel( gl_FragColor );",K_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,c0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,d0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,x0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,v0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,b0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,N0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,B0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,z0=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,W0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,X0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Y0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,J0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,K0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,ex=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,ox=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ax=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,px=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,mx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,gx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,_x=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,xx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,yx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ex=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ax=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Zx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Xt={alphamap_fragment:E_,alphamap_pars_fragment:A_,alphatest_fragment:C_,alphatest_pars_fragment:L_,aomap_fragment:R_,aomap_pars_fragment:P_,begin_vertex:D_,beginnormal_vertex:I_,bsdfs:F_,bumpmap_pars_fragment:N_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:k_,color_fragment:U_,color_pars_fragment:H_,color_pars_vertex:V_,color_vertex:G_,common:W_,cube_uv_reflection_fragment:X_,defaultnormal_vertex:$_,displacementmap_pars_vertex:q_,displacementmap_vertex:Y_,emissivemap_fragment:j_,emissivemap_pars_fragment:J_,encodings_fragment:Z_,encodings_pars_fragment:K_,envmap_fragment:Q_,envmap_common_pars_fragment:t0,envmap_pars_fragment:e0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:r0,fog_pars_vertex:s0,fog_fragment:o0,fog_pars_fragment:a0,gradientmap_pars_fragment:l0,lightmap_fragment:c0,lightmap_pars_fragment:h0,lights_lambert_vertex:u0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:x0,lights_physical_pars_fragment:y0,lights_fragment_begin:v0,lights_fragment_maps:b0,lights_fragment_end:w0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:E0,map_fragment:A0,map_pars_fragment:C0,map_particle_fragment:L0,map_particle_pars_fragment:R0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:D0,morphcolor_vertex:I0,morphnormal_vertex:F0,morphtarget_pars_vertex:N0,morphtarget_vertex:O0,normal_fragment_begin:B0,normal_fragment_maps:z0,normal_pars_fragment:k0,normal_pars_vertex:U0,normal_vertex:H0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:W0,clearcoat_pars_fragment:X0,output_fragment:$0,packing:q0,premultiplied_alpha_fragment:Y0,project_vertex:j0,dithering_fragment:J0,dithering_pars_fragment:Z0,roughnessmap_fragment:K0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:tx,shadowmap_pars_vertex:ex,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:rx,skinning_pars_vertex:sx,skinning_vertex:ox,skinnormal_vertex:ax,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:hx,tonemapping_pars_fragment:ux,transmission_fragment:dx,transmission_pars_fragment:fx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,uv2_pars_fragment:_x,uv2_pars_vertex:xx,uv2_vertex:yx,worldpos_vertex:vx,background_vert:bx,background_frag:wx,cube_vert:Mx,cube_frag:Sx,depth_vert:Tx,depth_frag:Ex,distanceRGBA_vert:Ax,distanceRGBA_frag:Cx,equirect_vert:Lx,equirect_frag:Rx,linedashed_vert:Px,linedashed_frag:Dx,meshbasic_vert:Ix,meshbasic_frag:Fx,meshlambert_vert:Nx,meshlambert_frag:Ox,meshmatcap_vert:Bx,meshmatcap_frag:zx,meshnormal_vert:kx,meshnormal_frag:Ux,meshphong_vert:Hx,meshphong_frag:Vx,meshphysical_vert:Gx,meshphysical_frag:Wx,meshtoon_vert:Xx,meshtoon_frag:$x,points_vert:qx,points_frag:Yx,shadow_vert:jx,shadow_frag:Jx,sprite_vert:Zx,sprite_frag:Kx},ft={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ke},uv2Transform:{value:new ke},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ke}}},Qn={basic:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.fog,ft.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ge([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ge([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ge([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Et(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ge([ft.points,ft.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ge([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ge([ft.common,ft.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ge([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ge([ft.sprite,ft.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},cube:{uniforms:Ge([ft.envmap,{opacity:{value:1}}]),vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ge([ft.common,ft.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ge([ft.lights,ft.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Qn.physical={uniforms:Ge([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new st(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};function Qx(s,t,e,n,i,r){const o=new Et(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(p,m){let _=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=t.get(v));const w=s.xr,b=w.getSession&&w.getSession();b&&b.environmentBlendMode==="additive"&&(v=null),v===null?g(o,a):v&&v.isColor&&(g(v,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===wl)?(c===void 0&&(c=new Ue(new zs(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:As(Qn.cube.uniforms),vertexShader:Qn.cube.vertexShader,fragmentShader:Qn.cube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,(h!==v||u!==v.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),p.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ue(new Lh(2,2),new Wn({name:"BackgroundMaterial",uniforms:As(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:wo,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=s.toneMapping),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,m){e.buffers.color.setClear(p.r,p.g,p.b,m,r)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),a=m,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:f}}function ty(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=m(null);let c=l,h=!1;function u(P,z,O,V,N){let J=!1;if(o){const L=p(V,O,z);c!==L&&(c=L,f(c.object)),J=_(V,N),J&&v(V,N)}else{const L=z.wireframe===!0;(c.geometry!==V.id||c.program!==O.id||c.wireframe!==L)&&(c.geometry=V.id,c.program=O.id,c.wireframe=L,J=!0)}P.isInstancedMesh===!0&&(J=!0),N!==null&&e.update(N,34963),(J||h)&&(h=!1,D(P,z,O,V),N!==null&&s.bindBuffer(34963,e.get(N).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function p(P,z,O){const V=O.wireframe===!0;let N=a[P.id];N===void 0&&(N={},a[P.id]=N);let J=N[z.id];J===void 0&&(J={},N[z.id]=J);let L=J[V];return L===void 0&&(L=m(d()),J[V]=L),L}function m(P){const z=[],O=[],V=[];for(let N=0;N<i;N++)z[N]=0,O[N]=0,V[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:O,attributeDivisors:V,object:P,attributes:{},index:null}}function _(P,z){const O=c.attributes,V=P.attributes;let N=0;for(const J in V){const L=O[J],Q=V[J];if(L===void 0||L.attribute!==Q||L.data!==Q.data)return!0;N++}return c.attributesNum!==N||c.index!==z}function v(P,z){const O={},V=P.attributes;let N=0;for(const J in V){const L=V[J],Q={};Q.attribute=L,L.data&&(Q.data=L.data),O[J]=Q,N++}c.attributes=O,c.attributesNum=N,c.index=z}function w(){const P=c.newAttributes;for(let z=0,O=P.length;z<O;z++)P[z]=0}function b(P){x(P,0)}function x(P,z){const O=c.newAttributes,V=c.enabledAttributes,N=c.attributeDivisors;O[P]=1,V[P]===0&&(s.enableVertexAttribArray(P),V[P]=1),N[P]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,z),N[P]=z)}function E(){const P=c.newAttributes,z=c.enabledAttributes;for(let O=0,V=z.length;O<V;O++)z[O]!==P[O]&&(s.disableVertexAttribArray(O),z[O]=0)}function A(P,z,O,V,N,J){n.isWebGL2===!0&&(O===5124||O===5125)?s.vertexAttribIPointer(P,z,O,N,J):s.vertexAttribPointer(P,z,O,V,N,J)}function D(P,z,O,V){if(n.isWebGL2===!1&&(P.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const N=V.attributes,J=O.getAttributes(),L=z.defaultAttributeValues;for(const Q in J){const nt=J[Q];if(nt.location>=0){let at=N[Q];if(at===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(at=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(at=P.instanceColor)),at!==void 0){const Rt=at.normalized,gt=at.itemSize,Y=e.get(at);if(Y===void 0)continue;const Pt=Y.buffer,Ot=Y.type,Dt=Y.bytesPerElement;if(at.isInterleavedBufferAttribute){const ot=at.data,H=ot.stride,$=at.offset;if(ot.isInstancedInterleavedBuffer){for(let Z=0;Z<nt.locationSize;Z++)x(nt.location+Z,ot.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Z=0;Z<nt.locationSize;Z++)b(nt.location+Z);s.bindBuffer(34962,Pt);for(let Z=0;Z<nt.locationSize;Z++)A(nt.location+Z,gt/nt.locationSize,Ot,Rt,H*Dt,($+gt/nt.locationSize*Z)*Dt)}else{if(at.isInstancedBufferAttribute){for(let ot=0;ot<nt.locationSize;ot++)x(nt.location+ot,at.meshPerAttribute);P.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ot=0;ot<nt.locationSize;ot++)b(nt.location+ot);s.bindBuffer(34962,Pt);for(let ot=0;ot<nt.locationSize;ot++)A(nt.location+ot,gt/nt.locationSize,Ot,Rt,gt*Dt,gt/nt.locationSize*ot*Dt)}}else if(L!==void 0){const Rt=L[Q];if(Rt!==void 0)switch(Rt.length){case 2:s.vertexAttrib2fv(nt.location,Rt);break;case 3:s.vertexAttrib3fv(nt.location,Rt);break;case 4:s.vertexAttrib4fv(nt.location,Rt);break;default:s.vertexAttrib1fv(nt.location,Rt)}}}}E()}function k(){C();for(const P in a){const z=a[P];for(const O in z){const V=z[O];for(const N in V)g(V[N].object),delete V[N];delete z[O]}delete a[P]}}function F(P){if(a[P.id]===void 0)return;const z=a[P.id];for(const O in z){const V=z[O];for(const N in V)g(V[N].object),delete V[N];delete z[O]}delete a[P.id]}function y(P){for(const z in a){const O=a[z];if(O[P.id]===void 0)continue;const V=O[P.id];for(const N in V)g(V[N].object),delete V[N];delete O[P.id]}}function C(){G(),h=!0,c!==l&&(c=l,f(c.object))}function G(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:G,dispose:k,releaseStatesOfGeometry:F,releaseStatesOfProgram:y,initAttributes:w,enableAttribute:b,disableUnusedAttributes:E}}function ey(s,t,e,n){const i=n.isWebGL2;let r;function o(c){r=c}function a(c,h){s.drawArrays(r,c,h),e.update(h,r,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=s,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](r,c,h,u),e.update(h,r,u)}this.setMode=o,this.render=a,this.renderInstances=l}function ny(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&s instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),g=s.getParameter(34076),p=s.getParameter(34921),m=s.getParameter(36347),_=s.getParameter(36348),v=s.getParameter(36349),w=d>0,b=o||t.has("OES_texture_float"),x=w&&b,E=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:w,floatFragmentTextures:b,floatVertexTextures:x,maxSamples:E}}function iy(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new gi,a=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,f,0),n=u.length,g},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,_=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:n,w=v*4;let b=_.clippingState||null;l.value=b,b=h(g,d,w,f);for(let x=0;x!==w;++x)b[x]=e[x];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const p=u!==null?u.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=f+p*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let w=0,b=f;w!==p;++w,b+=4)o.copy(u[w]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,m}}function ry(s){let t=new WeakMap;function e(o,a){return a===Wc?o.mapping=Ss:a===Xc&&(o.mapping=Ts),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Wc||a===Xc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Yf(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rh extends Ah{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Rh.prototype.isOrthographicCamera=!0;const os=4,ld=[.125,.215,.35,.446,.526,.582],hr=20,mc=new Rh,cd=new Et;let gc=null;const or=(1+Math.sqrt(5))/2,jr=1/or,hd=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,or,jr),new R(0,or,-jr),new R(jr,0,or),new R(-jr,0,or),new R(or,jr,0),new R(-or,jr,0)];class ud{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){gc=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(gc),t.scissorTest=!1,fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gc=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize-32,n={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:ms,format:Un,encoding:Mi,depthBuffer:!1},i=dd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sy(r)),this._blurMaterial=oy(r,t,e)}return i}_compileMaterial(t){const e=new Ue(this._lodPlanes[0],t);this._renderer.compile(e,mc)}_sceneToCubeUV(t,e,n,i){const a=new tn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(cd),h.toneMapping=vi,h.autoClear=!1;const f=new Tl({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),g=new Ue(new zs,f);let p=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,p=!0):(f.color.copy(cd),p=!0);for(let _=0;_<6;_++){const v=_%3;v===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):v===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;fa(i,v*w,_>2?w:0,w,w),h.setRenderTarget(i),p&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ss||t.mapping===Ts;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ue(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,mc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=hd[(i-1)%hd.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ue(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*hr-1),p=r/g,m=isFinite(r)?1+Math.floor(h*p):hr;m>hr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const _=[];let v=0;for(let A=0;A<hr;++A){const D=A/p,k=Math.exp(-D*D/2);_.push(k),A===0?v+=k:A<m&&(v+=2*k)}for(let A=0;A<_.length;A++)_[A]=_[A]/v;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=_,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const b=this._sizeLods[i],x=3*b*(i>w-os?i-w+os:0),E=4*(this._cubeSize-b);fa(e,x,E,3*b,2*b),l.setRenderTarget(e),l.render(u,mc)}}function sy(s){const t=[],e=[],n=[];let i=s;const r=s-os+1+ld.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-os?l=ld[o-s+os-1]:o===0&&(l=0),n.push(l);const c=1/(a-1),h=-c/2,u=1+c/2,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,p=3,m=2,_=1,v=new Float32Array(p*g*f),w=new Float32Array(m*g*f),b=new Float32Array(_*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,D=E>2?0:-1,k=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];v.set(k,p*g*E),w.set(d,m*g*E);const F=[E,E,E,E,E,E];b.set(F,_*g*E)}const x=new le;x.setAttribute("position",new Se(v,p)),x.setAttribute("uv",new Se(w,m)),x.setAttribute("faceIndex",new Se(b,_)),t.push(x),i>os&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dd(s,t,e){const n=new xn(s,t,e);return n.texture.mapping=wl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function oy(s,t,e){const n=new Float32Array(hr),i=new R(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function fd(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function pd(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hi,depthTest:!1,depthWrite:!1})}function Ph(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ay(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wc||l===Xc,h=l===Ss||l===Ts;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ud(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new ud(s));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ly(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cy(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const p=f[g];for(let m=0,_=p.length;m<_;m++)t.update(p[m],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let p=0;if(f!==null){const v=f.array;p=f.version;for(let w=0,b=v.length;w<b;w+=3){const x=v[w+0],E=v[w+1],A=v[w+2];d.push(x,E,E,A,A,x)}}else{const v=g.array;p=g.version;for(let w=0,b=v.length/3-1;w<b;w+=3){const x=w+0,E=w+1,A=w+2;d.push(x,E,E,A,A,x)}}const m=new(Vf(d)?qf:$f)(d,1);m.version=p;const _=r.get(u);_&&t.remove(_),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hy(s,t,e,n){const i=n.isWebGL2;let r;function o(d){r=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(r,f,a,d*l),e.update(f,r,1)}function u(d,f,g){if(g===0)return;let p,m;if(i)p=s,m="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](r,f,a,d*l,g),e.update(f,r,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function uy(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dy(s,t){return s[0]-t[0]}function fy(s,t){return Math.abs(t[1])-Math.abs(s[1])}function _c(s,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),s.divideScalar(e)}function py(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=p!==void 0?p.length:0;let _=r.get(h);if(_===void 0||_.count!==m){let O=function(){P.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var g=O;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,E=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let F=0;b===!0&&(F=1),x===!0&&(F=2),E===!0&&(F=3);let y=h.attributes.position.count*F,C=1;y>t.maxTextureSize&&(C=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const G=new Float32Array(y*C*4*m),P=new Sl(G,y,C,m);P.type=dr,P.needsUpdate=!0;const z=F*4;for(let V=0;V<m;V++){const N=A[V],J=D[V],L=k[V],Q=y*C*4*V;for(let nt=0;nt<N.count;nt++){const at=nt*z;b===!0&&(o.fromBufferAttribute(N,nt),N.normalized===!0&&_c(o,N),G[Q+at+0]=o.x,G[Q+at+1]=o.y,G[Q+at+2]=o.z,G[Q+at+3]=0),x===!0&&(o.fromBufferAttribute(J,nt),J.normalized===!0&&_c(o,J),G[Q+at+4]=o.x,G[Q+at+5]=o.y,G[Q+at+6]=o.z,G[Q+at+7]=0),E===!0&&(o.fromBufferAttribute(L,nt),L.normalized===!0&&_c(o,L),G[Q+at+8]=o.x,G[Q+at+9]=o.y,G[Q+at+10]=o.z,G[Q+at+11]=L.itemSize===4?o.w:1)}}_={count:m,texture:P,size:new st(y,C)},r.set(h,_),h.addEventListener("dispose",O)}let v=0;for(let b=0;b<f.length;b++)v+=f[b];const w=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{const p=f===void 0?0:f.length;let m=n[h.id];if(m===void 0||m.length!==p){m=[];for(let x=0;x<p;x++)m[x]=[x,0];n[h.id]=m}for(let x=0;x<p;x++){const E=m[x];E[0]=x,E[1]=f[x]}m.sort(fy);for(let x=0;x<8;x++)x<p&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(dy);const _=h.morphAttributes.position,v=h.morphAttributes.normal;let w=0;for(let x=0;x<8;x++){const E=a[x],A=E[0],D=E[1];A!==Number.MAX_SAFE_INTEGER&&D?(_&&h.getAttribute("morphTarget"+x)!==_[A]&&h.setAttribute("morphTarget"+x,_[A]),v&&h.getAttribute("morphNormal"+x)!==v[A]&&h.setAttribute("morphNormal"+x,v[A]),i[x]=D,w+=D):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const b=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(s,"morphTargetBaseInfluence",b),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function my(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Jf=new Fe,Zf=new Sl,Kf=new Eh,Qf=new El,md=[],gd=[],_d=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);function ks(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=md[i];if(r===void 0&&(r=new Float32Array(i),md[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function nn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function je(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Cl(s,t){let e=gd[t];e===void 0&&(e=new Int32Array(t),gd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function gy(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function _y(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;s.uniform2fv(this.addr,t),je(e,t)}}function xy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;s.uniform3fv(this.addr,t),je(e,t)}}function yy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;s.uniform4fv(this.addr,t),je(e,t)}}function vy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(nn(e,n))return;yd.set(n),s.uniformMatrix2fv(this.addr,!1,yd),je(e,n)}}function by(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(nn(e,n))return;xd.set(n),s.uniformMatrix3fv(this.addr,!1,xd),je(e,n)}}function wy(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(nn(e,n))return;_d.set(n),s.uniformMatrix4fv(this.addr,!1,_d),je(e,n)}}function My(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Sy(s,t){const e=this.cache;nn(e,t)||(s.uniform2iv(this.addr,t),je(e,t))}function Ty(s,t){const e=this.cache;nn(e,t)||(s.uniform3iv(this.addr,t),je(e,t))}function Ey(s,t){const e=this.cache;nn(e,t)||(s.uniform4iv(this.addr,t),je(e,t))}function Ay(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Cy(s,t){const e=this.cache;nn(e,t)||(s.uniform2uiv(this.addr,t),je(e,t))}function Ly(s,t){const e=this.cache;nn(e,t)||(s.uniform3uiv(this.addr,t),je(e,t))}function Ry(s,t){const e=this.cache;nn(e,t)||(s.uniform4uiv(this.addr,t),je(e,t))}function Py(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Jf,i)}function Dy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kf,i)}function Iy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Qf,i)}function Fy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Zf,i)}function Ny(s){switch(s){case 5126:return gy;case 35664:return _y;case 35665:return xy;case 35666:return yy;case 35674:return vy;case 35675:return by;case 35676:return wy;case 5124:case 35670:return My;case 35667:case 35671:return Sy;case 35668:case 35672:return Ty;case 35669:case 35673:return Ey;case 5125:return Ay;case 36294:return Cy;case 36295:return Ly;case 36296:return Ry;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Dy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Fy}}function Oy(s,t){s.uniform1fv(this.addr,t)}function By(s,t){const e=ks(t,this.size,2);s.uniform2fv(this.addr,e)}function zy(s,t){const e=ks(t,this.size,3);s.uniform3fv(this.addr,e)}function ky(s,t){const e=ks(t,this.size,4);s.uniform4fv(this.addr,e)}function Uy(s,t){const e=ks(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Hy(s,t){const e=ks(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Vy(s,t){const e=ks(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Gy(s,t){s.uniform1iv(this.addr,t)}function Wy(s,t){s.uniform2iv(this.addr,t)}function Xy(s,t){s.uniform3iv(this.addr,t)}function $y(s,t){s.uniform4iv(this.addr,t)}function qy(s,t){s.uniform1uiv(this.addr,t)}function Yy(s,t){s.uniform2uiv(this.addr,t)}function jy(s,t){s.uniform3uiv(this.addr,t)}function Jy(s,t){s.uniform4uiv(this.addr,t)}function Zy(s,t,e){const n=t.length,i=Cl(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Jf,i[r])}function Ky(s,t,e){const n=t.length,i=Cl(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Kf,i[r])}function Qy(s,t,e){const n=t.length,i=Cl(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Qf,i[r])}function tv(s,t,e){const n=t.length,i=Cl(e,n);s.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Zf,i[r])}function ev(s){switch(s){case 5126:return Oy;case 35664:return By;case 35665:return zy;case 35666:return ky;case 35674:return Uy;case 35675:return Hy;case 35676:return Vy;case 5124:case 35670:return Gy;case 35667:case 35671:return Wy;case 35668:case 35672:return Xy;case 35669:case 35673:return $y;case 5125:return qy;case 36294:return Yy;case 36295:return jy;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Zy;case 35679:case 36299:case 36307:return Ky;case 35680:case 36300:case 36308:case 36293:return Qy;case 36289:case 36303:case 36311:case 36292:return tv}}function nv(s,t,e){this.id=s,this.addr=e,this.cache=[],this.setValue=Ny(t.type)}function tp(s,t,e){this.id=s,this.addr=e,this.cache=[],this.size=t.size,this.setValue=ev(t.type)}tp.prototype.updateCache=function(s){const t=this.cache;s instanceof Float32Array&&t.length!==s.length&&(this.cache=new Float32Array(s.length)),je(t,s)};function ep(s){this.id=s,this.seq=[],this.map={}}ep.prototype.setValue=function(s,t,e){const n=this.seq;for(let i=0,r=n.length;i!==r;++i){const o=n[i];o.setValue(s,t[o.id],e)}};const xc=/(\w+)(\])?(\[|\.)?/g;function vd(s,t){s.seq.push(t),s.map[t.id]=t}function iv(s,t,e){const n=s.name,i=n.length;for(xc.lastIndex=0;;){const r=xc.exec(n),o=xc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){vd(e,c===void 0?new nv(a,s,t):new tp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new ep(a),vd(e,u)),e=u}}}function Vi(s,t){this.seq=[],this.map={};const e=s.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=s.getActiveUniform(t,n),r=s.getUniformLocation(t,i.name);iv(i,r,this)}}Vi.prototype.setValue=function(s,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(s,e,n)};Vi.prototype.setOptional=function(s,t,e){const n=t[e];n!==void 0&&this.setValue(s,e,n)};Vi.upload=function(s,t,e,n){for(let i=0,r=t.length;i!==r;++i){const o=t[i],a=e[o.id];a.needsUpdate!==!1&&o.setValue(s,a.value,n)}};Vi.seqWithValue=function(s,t){const e=[];for(let n=0,i=s.length;n!==i;++n){const r=s[n];r.id in t&&e.push(r)}return e};function bd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let rv=0;function sv(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++)n.push(o+1+": "+e[o]);return n.join(`
`)}function ov(s){switch(s){case Mi:return["Linear","( value )"];case he:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function wd(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return e.toUpperCase()+`

`+i+`

`+sv(s.getShaderSource(t),r)}function av(s,t){const e=ov(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function lv(s,t){let e;switch(t){case Lg:e="Linear";break;case Rg:e="Reinhard";break;case Pg:e="OptimizedCineon";break;case Dg:e="ACESFilmic";break;case Ig:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function cv(s){return[s.extensionDerivatives||!!s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ro).join(`
`)}function hv(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function uv(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ro(s){return s!==""}function Md(s,t){return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(s){return s.replace(dv,fv)}function fv(s,t){const e=Xt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Zc(e)}const pv=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(s){return s.replace(mv,np).replace(pv,gv)}function gv(s,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),np(s,t,e,n)}function np(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ed(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function _v(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Of?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ag?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===io&&(t="SHADOWMAP_TYPE_VSM"),t}function xv(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ss:case Ts:t="ENVMAP_TYPE_CUBE";break;case wl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yv(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function vv(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bl:t="ENVMAP_BLENDING_MULTIPLY";break;case Ag:t="ENVMAP_BLENDING_MIX";break;case Cg:t="ENVMAP_BLENDING_ADD";break}return t}function bv(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t/32+1)+3,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wv(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=_v(e),c=xv(e),h=yv(e),u=vv(e),d=bv(e),f=e.isWebGL2?"":cv(e),g=hv(r),p=i.createProgram();let m,_,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(ro).join(`
`),m.length>0&&(m+=`
`),_=[f,g].filter(ro).join(`
`),_.length>0&&(_+=`
`)):(m=[Ed(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ro).join(`
`),_=[f,Ed(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==vi?lv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.encodings_pars_fragment,av("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ro).join(`
`)),o=Zc(o),o=Md(o,e),o=Sd(o,e),a=Zc(a),a=Md(a,e),a=Sd(a,e),o=Td(o),a=Td(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",e.glslVersion===ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=v+m+o,b=v+_+a,x=bd(i,35633,w),E=bd(i,35632,b);if(i.attachShader(p,x),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),s.debug.checkShaderErrors){const k=i.getProgramInfoLog(p).trim(),F=i.getShaderInfoLog(x).trim(),y=i.getShaderInfoLog(E).trim();let C=!0,G=!0;if(i.getProgramParameter(p,35714)===!1){C=!1;const P=wd(i,x,"vertex"),z=wd(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+k+`
`+P+`
`+z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||y==="")&&(G=!1);G&&(this.diagnostics={runnable:C,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:y,prefix:_}})}i.deleteShader(x),i.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new Vi(i,p)),A};let D;return this.getAttributes=function(){return D===void 0&&(D=uv(i,p)),D},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=rv++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=x,this.fragmentShader=E,this}let Mv=0;class Sv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new Tv(t);e.set(t,n)}return e.get(t)}}class Tv{constructor(t){this.id=Mv++,this.code=t,this.usedTimes=0}}function Ev(s,t,e,n,i,r,o){const a=new Xf,l=new Sv,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,g=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){const G=y.skeleton.bones;if(d)return 1024;{const z=Math.floor((f-20)/4),O=Math.min(z,G.length);return O<G.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+G.length+" bones. This GPU supports "+O+"."),0):O}}function v(y,C,G,P,z){const O=P.fog,V=z.geometry,N=y.isMeshStandardMaterial?P.environment:null,J=(y.isMeshStandardMaterial?e:t).get(y.envMap||N),L=!!J&&J.mapping===wl?J.image.height:null,Q=m[y.type],nt=z.isSkinnedMesh?_(z):0;y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const at=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Rt=at!==void 0?at.length:0;let gt=0;V.morphAttributes.position!==void 0&&(gt=1),V.morphAttributes.normal!==void 0&&(gt=2),V.morphAttributes.color!==void 0&&(gt=3);let Y,Pt,Ot,Dt;if(Q){const it=Qn[Q];Y=it.vertexShader,Pt=it.fragmentShader}else Y=y.vertexShader,Pt=y.fragmentShader,l.update(y),Ot=l.getVertexShaderID(y),Dt=l.getFragmentShaderID(y);const ot=s.getRenderTarget(),H=y.alphaTest>0,$=y.clearcoat>0;return{isWebGL2:h,shaderID:Q,shaderName:y.type,vertexShader:Y,fragmentShader:Pt,defines:y.defines,customVertexShaderID:Ot,customFragmentShaderID:Dt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:z.isInstancedMesh===!0,instancingColor:z.isInstancedMesh===!0&&z.instanceColor!==null,supportsVertexTextures:g,outputEncoding:ot===null?s.outputEncoding:ot.isXRRenderTarget===!0?ot.texture.encoding:Mi,map:!!y.map,matcap:!!y.matcap,envMap:!!J,envMapMode:J&&J.mapping,envMapCubeUVHeight:L,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===n_,tangentSpaceNormalMap:y.normalMapType===Ns,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===he,clearcoat:$,clearcoatMap:$&&!!y.clearcoatMap,clearcoatRoughnessMap:$&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:$&&!!y.clearcoatNormalMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===ps,alphaMap:!!y.alphaMap,alphaTest:H,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!V.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatNormalMap||y.transmission>0||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||y.sheen>0||!!y.sheenColorMap||!!y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!O,useFog:y.fog,fogExp2:O&&O.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:z.isSkinnedMesh===!0&&nt>0,maxBones:nt,useVertexTexture:d,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:gt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:y.toneMapped?s.toneMapping:vi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ms,flipSided:y.side===Gn,depthPacking:y.depthPacking!==void 0?y.depthPacking:!1,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function w(y){const C=[];if(y.shaderID?C.push(y.shaderID):(C.push(y.customVertexShaderID),C.push(y.customFragmentShaderID)),y.defines!==void 0)for(const G in y.defines)C.push(G),C.push(y.defines[G]);return y.isRawShaderMaterial===!1&&(b(C,y),x(C,y),C.push(s.outputEncoding)),C.push(y.customProgramCacheKey),C.join()}function b(y,C){y.push(C.precision),y.push(C.outputEncoding),y.push(C.envMapMode),y.push(C.envMapCubeUVHeight),y.push(C.combine),y.push(C.vertexUvs),y.push(C.fogExp2),y.push(C.sizeAttenuation),y.push(C.maxBones),y.push(C.morphTargetsCount),y.push(C.morphAttributeCount),y.push(C.numDirLights),y.push(C.numPointLights),y.push(C.numSpotLights),y.push(C.numHemiLights),y.push(C.numRectAreaLights),y.push(C.numDirLightShadows),y.push(C.numPointLightShadows),y.push(C.numSpotLightShadows),y.push(C.shadowMapType),y.push(C.toneMapping),y.push(C.numClippingPlanes),y.push(C.numClipIntersection)}function x(y,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.displacementMap&&a.enable(18),C.specularMap&&a.enable(19),C.roughnessMap&&a.enable(20),C.metalnessMap&&a.enable(21),C.gradientMap&&a.enable(22),C.alphaMap&&a.enable(23),C.alphaTest&&a.enable(24),C.vertexColors&&a.enable(25),C.vertexAlphas&&a.enable(26),C.vertexUvs&&a.enable(27),C.vertexTangents&&a.enable(28),C.uvsVertexOnly&&a.enable(29),C.fog&&a.enable(30),y.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.useVertexTexture&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.depthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),y.push(a.mask)}function E(y){const C=m[y.type];let G;if(C){const P=Qn[C];G=v_.clone(P.uniforms)}else G=y.uniforms;return G}function A(y,C){let G;for(let P=0,z=c.length;P<z;P++){const O=c[P];if(O.cacheKey===C){G=O,++G.usedTimes;break}}return G===void 0&&(G=new wv(s,C,y,r),c.push(G)),G}function D(y){if(--y.usedTimes===0){const C=c.indexOf(y);c[C]=c[c.length-1],c.pop(),y.destroy()}}function k(y){l.remove(y)}function F(){l.dispose()}return{getParameters:v,getProgramCacheKey:w,getUniforms:E,acquireProgram:A,releaseProgram:D,releaseShaderCache:k,programs:c,dispose:F}}function Av(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Cv(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ad(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Cd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,p,m){let _=s[t];return _===void 0?(_={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},s[t]=_):(_.id=u.id,_.object=u,_.geometry=d,_.material=f,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=p,_.group=m),t++,_}function a(u,d,f,g,p,m){const _=o(u,d,f,g,p,m);f.transmission>0?n.push(_):f.transparent===!0?i.push(_):e.push(_)}function l(u,d,f,g,p,m){const _=o(u,d,f,g,p,m);f.transmission>0?n.unshift(_):f.transparent===!0?i.unshift(_):e.unshift(_)}function c(u,d){e.length>1&&e.sort(u||Cv),n.length>1&&n.sort(d||Ad),i.length>1&&i.sort(d||Ad)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Lv(){let s=new WeakMap;function t(n,i){let r;return s.has(n)===!1?(r=new Cd,s.set(n,[r])):i>=s.get(n).length?(r=new Cd,s.get(n).push(r)):r=s.get(n)[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Rv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new Et};break;case"SpotLight":e={position:new R,direction:new R,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new R,halfWidth:new R,halfHeight:new R};break}return s[t.id]=e,e}}}function Pv(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Dv=0;function Iv(s,t){return(t.castShadow?1:0)-(s.castShadow?1:0)}function Fv(s,t){const e=new Rv,n=Pv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new R);const r=new R,o=new Ft,a=new Ft;function l(h,u){let d=0,f=0,g=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,m=0,_=0,v=0,w=0,b=0,x=0,E=0;h.sort(Iv);const A=u!==!0?Math.PI:1;for(let k=0,F=h.length;k<F;k++){const y=h[k],C=y.color,G=y.intensity,P=y.distance,z=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)d+=C.r*G*A,f+=C.g*G*A,g+=C.b*G*A;else if(y.isLightProbe)for(let O=0;O<9;O++)i.probe[O].addScaledVector(y.sh.coefficients[O],G);else if(y.isDirectionalLight){const O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity*A),y.castShadow){const V=y.shadow,N=n.get(y);N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=z,i.directionalShadowMatrix[p]=y.shadow.matrix,b++}i.directional[p]=O,p++}else if(y.isSpotLight){const O=e.get(y);if(O.position.setFromMatrixPosition(y.matrixWorld),O.color.copy(C).multiplyScalar(G*A),O.distance=P,O.coneCos=Math.cos(y.angle),O.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),O.decay=y.decay,y.castShadow){const V=y.shadow,N=n.get(y);N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=z,i.spotShadowMatrix[_]=y.shadow.matrix,E++}i.spot[_]=O,_++}else if(y.isRectAreaLight){const O=e.get(y);O.color.copy(C).multiplyScalar(G),O.halfWidth.set(y.width*.5,0,0),O.halfHeight.set(0,y.height*.5,0),i.rectArea[v]=O,v++}else if(y.isPointLight){const O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity*A),O.distance=y.distance,O.decay=y.decay,y.castShadow){const V=y.shadow,N=n.get(y);N.shadowBias=V.bias,N.shadowNormalBias=V.normalBias,N.shadowRadius=V.radius,N.shadowMapSize=V.mapSize,N.shadowCameraNear=V.camera.near,N.shadowCameraFar=V.camera.far,i.pointShadow[m]=N,i.pointShadowMap[m]=z,i.pointShadowMatrix[m]=y.shadow.matrix,x++}i.point[m]=O,m++}else if(y.isHemisphereLight){const O=e.get(y);O.skyColor.copy(y.color).multiplyScalar(G*A),O.groundColor.copy(y.groundColor).multiplyScalar(G*A),i.hemi[w]=O,w++}}v>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==p||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==v||D.hemiLength!==w||D.numDirectionalShadows!==b||D.numPointShadows!==x||D.numSpotShadows!==E)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=v,i.point.length=m,i.hemi.length=w,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotShadowMatrix.length=E,D.directionalLength=p,D.pointLength=m,D.spotLength=_,D.rectAreaLength=v,D.hemiLength=w,D.numDirectionalShadows=b,D.numPointShadows=x,D.numSpotShadows=E,i.version=Dv++)}function c(h,u){let d=0,f=0,g=0,p=0,m=0;const _=u.matrixWorldInverse;for(let v=0,w=h.length;v<w;v++){const b=h[v];if(b.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),d++}else if(b.isSpotLight){const x=i.spot[g];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),x.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const x=i.rectArea[p];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),p++}else if(b.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(_),f++}else if(b.isHemisphereLight){const x=i.hemi[m];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(_),x.direction.normalize(),m++}}}return{setup:l,setupView:c,state:i}}function Ld(s,t){const e=new Fv(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Nv(s,t){let e=new WeakMap;function n(r,o=0){let a;return e.has(r)===!1?(a=new Ld(s,t),e.set(r,[a])):o>=e.get(r).length?(a=new Ld(s,t),e.get(r).push(a)):a=e.get(r)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Dh extends Ee{constructor(t){super();this.type="MeshDepthMaterial",this.depthPacking=t_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}Dh.prototype.isMeshDepthMaterial=!0;class Ih extends Ee{constructor(t){super();this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Ih.prototype.isMeshDistanceMaterial=!0;const Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ip(s,t,e){let n=new Al;const i=new st,r=new st,o=new se,a=new Dh({depthPacking:e_}),l=new Ih,c={},h=e.maxTextureSize,u={0:Gn,1:wo,2:Ms},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:Ov,fragmentShader:Bv}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new le;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Ue(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Of,this.render=function(b,x,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const A=s.getRenderTarget(),D=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Hi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let y=0,C=b.length;y<C;y++){const G=b[y],P=G.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const z=P.getFrameExtents();if(i.multiply(z),r.copy(P.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/z.x),i.x=r.x*z.x,P.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/z.y),i.y=r.y*z.y,P.mapSize.y=r.y)),P.map===null&&!P.isPointLightShadow&&this.type===io&&(P.map=new xn(i.x,i.y),P.map.texture.name=G.name+".shadowMap",P.mapPass=new xn(i.x,i.y),P.camera.updateProjectionMatrix()),P.map===null){const V={minFilter:De,magFilter:De,format:Un};P.map=new xn(i.x,i.y,V),P.map.texture.name=G.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const O=P.getViewportCount();for(let V=0;V<O;V++){const N=P.getViewport(V);o.set(r.x*N.x,r.y*N.y,r.x*N.z,r.y*N.w),F.viewport(o),P.updateMatrices(G,V),n=P.getFrustum(),w(x,E,P.camera,G,this.type)}!P.isPointLightShadow&&this.type===io&&_(P,E),P.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(A,D,k)};function _(b,x){const E=t.update(p);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(x,null,E,d,p,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(x,null,E,f,p,null)}function v(b,x,E,A,D,k){let F=null;const y=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(y!==void 0?F=y:F=E.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0){const C=F.uuid,G=x.uuid;let P=c[C];P===void 0&&(P={},c[C]=P);let z=P[G];z===void 0&&(z=F.clone(),P[G]=z),F=z}return F.visible=x.visible,F.wireframe=x.wireframe,k===io?F.side=x.shadowSide!==null?x.shadowSide:x.side:F.side=x.shadowSide!==null?x.shadowSide:u[x.side],F.alphaMap=x.alphaMap,F.alphaTest=x.alphaTest,F.clipShadows=x.clipShadows,F.clippingPlanes=x.clippingPlanes,F.clipIntersection=x.clipIntersection,F.displacementMap=x.displacementMap,F.displacementScale=x.displacementScale,F.displacementBias=x.displacementBias,F.wireframeLinewidth=x.wireframeLinewidth,F.linewidth=x.linewidth,E.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(E.matrixWorld),F.nearDistance=A,F.farDistance=D),F}function w(b,x,E,A,D){if(b.visible===!1)return;if(b.layers.test(x.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===io)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const y=t.update(b),C=b.material;if(Array.isArray(C)){const G=y.groups;for(let P=0,z=G.length;P<z;P++){const O=G[P],V=C[O.materialIndex];if(V&&V.visible){const N=v(b,V,A,E.near,E.far,D);s.renderBufferDirect(E,null,y,N,b,O)}}}else if(C.visible){const G=v(b,C,A,E.near,E.far,D);s.renderBufferDirect(E,null,y,G,b,null)}}const F=b.children;for(let y=0,C=F.length;y<C;y++)w(F[y],x,E,A,D)}}function zv(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const ct=new se;let tt=null;const Ct=new se(0,0,0,0);return{setMask:function(pt){tt!==pt&&!I&&(s.colorMask(pt,pt,pt,pt),tt=pt)},setLocked:function(pt){I=pt},setClear:function(pt,Mt,K,rt,Tt){Tt===!0&&(pt*=rt,Mt*=rt,K*=rt),ct.set(pt,Mt,K,rt),Ct.equals(ct)===!1&&(s.clearColor(pt,Mt,K,rt),Ct.copy(ct))},reset:function(){I=!1,tt=null,Ct.set(-1,0,0,0)}}}function r(){let I=!1,ct=null,tt=null,Ct=null;return{setTest:function(pt){pt?gt(2929):Y(2929)},setMask:function(pt){ct!==pt&&!I&&(s.depthMask(pt),ct=pt)},setFunc:function(pt){if(tt!==pt){if(pt)switch(pt){case vg:s.depthFunc(512);break;case bg:s.depthFunc(519);break;case wg:s.depthFunc(513);break;case Gc:s.depthFunc(515);break;case Mg:s.depthFunc(514);break;case Sg:s.depthFunc(518);break;case Tg:s.depthFunc(516);break;case Eg:s.depthFunc(517);break;default:s.depthFunc(515)}else s.depthFunc(515);tt=pt}},setLocked:function(pt){I=pt},setClear:function(pt){Ct!==pt&&(s.clearDepth(pt),Ct=pt)},reset:function(){I=!1,ct=null,tt=null,Ct=null}}}function o(){let I=!1,ct=null,tt=null,Ct=null,pt=null,Mt=null,K=null,rt=null,Tt=null;return{setTest:function(St){I||(St?gt(2960):Y(2960))},setMask:function(St){ct!==St&&!I&&(s.stencilMask(St),ct=St)},setFunc:function(St,ce,Ae){(tt!==St||Ct!==ce||pt!==Ae)&&(s.stencilFunc(St,ce,Ae),tt=St,Ct=ce,pt=Ae)},setOp:function(St,ce,Ae){(Mt!==St||K!==ce||rt!==Ae)&&(s.stencilOp(St,ce,Ae),Mt=St,K=ce,rt=Ae)},setLocked:function(St){I=St},setClear:function(St){Tt!==St&&(s.clearStencil(St),Tt=St)},reset:function(){I=!1,ct=null,tt=null,Ct=null,pt=null,Mt=null,K=null,rt=null,Tt=null}}}const a=new i,l=new r,c=new o;let h={},u={},d=new WeakMap,f=[],g=null,p=!1,m=null,_=null,v=null,w=null,b=null,x=null,E=null,A=!1,D=null,k=null,F=null,y=null,C=null;const G=s.getParameter(35661);let P=!1,z=0;const O=s.getParameter(7938);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),P=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),P=z>=2);let V=null,N={};const J=s.getParameter(3088),L=s.getParameter(2978),Q=new se().fromArray(J),nt=new se().fromArray(L);function at(I,ct,tt){const Ct=new Uint8Array(4),pt=s.createTexture();s.bindTexture(I,pt),s.texParameteri(I,10241,9728),s.texParameteri(I,10240,9728);for(let Mt=0;Mt<tt;Mt++)s.texImage2D(ct+Mt,0,6408,1,1,0,6408,5121,Ct);return pt}const Rt={};Rt[3553]=at(3553,3553,1),Rt[34067]=at(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),gt(2929),l.setFunc(Gc),it(!1),mt(vu),gt(2884),$(Hi);function gt(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Y(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Pt(I,ct){return u[I]!==ct?(s.bindFramebuffer(I,ct),u[I]=ct,n&&(I===36009&&(u[36160]=ct),I===36160&&(u[36009]=ct)),!0):!1}function Ot(I,ct){let tt=f,Ct=!1;if(I)if(tt=d.get(ct),tt===void 0&&(tt=[],d.set(ct,tt)),I.isWebGLMultipleRenderTargets){const pt=I.texture;if(tt.length!==pt.length||tt[0]!==36064){for(let Mt=0,K=pt.length;Mt<K;Mt++)tt[Mt]=36064+Mt;tt.length=pt.length,Ct=!0}}else tt[0]!==36064&&(tt[0]=36064,Ct=!0);else tt[0]!==1029&&(tt[0]=1029,Ct=!0);Ct&&(e.isWebGL2?s.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function Dt(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const ot={[ns]:32774,[cg]:32778,[hg]:32779};if(n)ot[Su]=32775,ot[Tu]=32776;else{const I=t.get("EXT_blend_minmax");I!==null&&(ot[Su]=I.MIN_EXT,ot[Tu]=I.MAX_EXT)}const H={[ug]:0,[dg]:1,[fg]:768,[zf]:770,[yg]:776,[_g]:774,[mg]:772,[pg]:769,[kf]:771,[xg]:775,[gg]:773};function $(I,ct,tt,Ct,pt,Mt,K,rt){if(I===Hi){p===!0&&(Y(3042),p=!1);return}if(p===!1&&(gt(3042),p=!0),I!==lg){if(I!==m||rt!==A){if((_!==ns||b!==ns)&&(s.blendEquation(32774),_=ns,b=ns),rt)switch(I){case ps:s.blendFuncSeparate(1,771,1,771);break;case bu:s.blendFunc(1,1);break;case wu:s.blendFuncSeparate(0,769,0,1);break;case Mu:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ps:s.blendFuncSeparate(770,771,1,771);break;case bu:s.blendFunc(770,1);break;case wu:s.blendFuncSeparate(0,769,0,1);break;case Mu:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,w=null,x=null,E=null,m=I,A=rt}return}pt=pt||ct,Mt=Mt||tt,K=K||Ct,(ct!==_||pt!==b)&&(s.blendEquationSeparate(ot[ct],ot[pt]),_=ct,b=pt),(tt!==v||Ct!==w||Mt!==x||K!==E)&&(s.blendFuncSeparate(H[tt],H[Ct],H[Mt],H[K]),v=tt,w=Ct,x=Mt,E=K),m=I,A=null}function Z(I,ct){I.side===Ms?Y(2884):gt(2884);let tt=I.side===Gn;ct&&(tt=!tt),it(tt),I.blending===ps&&I.transparent===!1?$(Hi):$(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ct=I.stencilWrite;c.setTest(Ct),Ct&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),It(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?gt(32926):Y(32926)}function it(I){D!==I&&(I?s.frontFace(2304):s.frontFace(2305),D=I)}function mt(I){I!==sg?(gt(2884),I!==k&&(I===vu?s.cullFace(1029):I===og?s.cullFace(1028):s.cullFace(1032))):Y(2884),k=I}function ht(I){I!==F&&(P&&s.lineWidth(I),F=I)}function It(I,ct,tt){I?(gt(32823),(y!==ct||C!==tt)&&(s.polygonOffset(ct,tt),y=ct,C=tt)):Y(32823)}function dt(I){I?gt(3089):Y(3089)}function wt(I){I===void 0&&(I=33984+G-1),V!==I&&(s.activeTexture(I),V=I)}function Yt(I,ct){V===null&&wt();let tt=N[V];tt===void 0&&(tt={type:void 0,texture:void 0},N[V]=tt),(tt.type!==I||tt.texture!==ct)&&(s.bindTexture(I,ct||Rt[I]),tt.type=I,tt.texture=ct)}function Bt(){const I=N[V];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function T(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function M(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ut(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){Q.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Q.copy(I))}function zt(I){nt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),nt.copy(I))}function _t(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},V=null,N={},u={},d=new WeakMap,f=[],g=null,p=!1,m=null,_=null,v=null,w=null,b=null,x=null,E=null,A=!1,D=null,k=null,F=null,y=null,C=null,Q.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:gt,disable:Y,bindFramebuffer:Pt,drawBuffers:Ot,useProgram:Dt,setBlending:$,setMaterial:Z,setFlipSided:it,setCullFace:mt,setLineWidth:ht,setPolygonOffset:It,setScissorTest:dt,activeTexture:wt,bindTexture:Yt,unbindTexture:Bt,compressedTexImage2D:T,texImage2D:At,texImage3D:q,texStorage2D:lt,texStorage3D:ut,texSubImage2D:M,texSubImage3D:X,compressedTexSubImage2D:et,scissor:Nt,viewport:zt,reset:_t}}function kv(s,t,e,n,i,r,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,M){return _?new OffscreenCanvas(T,M):To("canvas")}function w(T,M,X,et){let lt=1;if((T.width>et||T.height>et)&&(lt=et/Math.max(T.width,T.height)),lt<1||M===!0)if(typeof HTMLImageElement!="undefined"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&T instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&T instanceof ImageBitmap){const ut=M?Jc:Math.floor,At=ut(lt*T.width),q=ut(lt*T.height);p===void 0&&(p=v(At,q));const Nt=X?v(At,q):p;return Nt.width=At,Nt.height=q,Nt.getContext("2d").drawImage(T,0,0,At,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+At+"x"+q+")."),Nt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return Ju(T.width)&&Ju(T.height)}function x(T){return a?!1:T.wrapS!==kn||T.wrapT!==kn||T.minFilter!==De&&T.minFilter!==sn}function E(T,M){return T.generateMipmaps&&M&&T.minFilter!==De&&T.minFilter!==sn}function A(T){s.generateMipmap(T)}function D(T,M,X,et,lt=!1){if(a===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ut=M;return M===6403&&(X===5126&&(ut=33326),X===5131&&(ut=33325),X===5121&&(ut=33321)),M===33319&&(X===5126&&(ut=33328),X===5131&&(ut=33327),X===5121&&(ut=33323)),M===6408&&(X===5126&&(ut=34836),X===5131&&(ut=34842),X===5121&&(ut=et===he&&lt===!1?35907:32856),X===32819&&(ut=32854),X===32820&&(ut=32855)),(ut===33325||ut===33326||ut===33327||ut===33328||ut===34842||ut===34836)&&t.get("EXT_color_buffer_float"),ut}function k(T,M,X){return E(T,X)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==sn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function F(T){return T===De||T===Eu||T===Au?9728:9729}function y(T){const M=T.target;M.removeEventListener("dispose",y),G(M),M.isVideoTexture&&g.delete(M)}function C(T){const M=T.target;M.removeEventListener("dispose",C),z(M)}function G(T){const M=n.get(T);if(M.__webglInit===void 0)return;const X=T.source,et=m.get(X);if(et){const lt=et[M.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&P(T),Object.keys(et).length===0&&m.delete(X)}n.remove(T)}function P(T){const M=n.get(T);s.deleteTexture(M.__webglTexture);const X=T.source,et=m.get(X);delete et[M.__cacheKey],o.memory.textures--}function z(T){const M=T.texture,X=n.get(T),et=n.get(M);if(et.__webglTexture!==void 0&&(s.deleteTexture(et.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++)s.deleteFramebuffer(X.__webglFramebuffer[lt]),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[lt]);else s.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer&&s.deleteRenderbuffer(X.__webglColorRenderbuffer),X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer);if(T.isWebGLMultipleRenderTargets)for(let lt=0,ut=M.length;lt<ut;lt++){const At=n.get(M[lt]);At.__webglTexture&&(s.deleteTexture(At.__webglTexture),o.memory.textures--),n.remove(M[lt])}n.remove(M),n.remove(T)}let O=0;function V(){O=0}function N(){const T=O;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),O+=1,T}function J(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function L(T,M){const X=n.get(T);if(T.isVideoTexture&&Yt(T),T.isRenderTargetTexture===!1&&T.version>0&&X.__version!==T.version){const et=T.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(X,T,M);return}}e.activeTexture(33984+M),e.bindTexture(3553,X.__webglTexture)}function Q(T,M){const X=n.get(T);if(T.version>0&&X.__version!==T.version){Ot(X,T,M);return}e.activeTexture(33984+M),e.bindTexture(35866,X.__webglTexture)}function nt(T,M){const X=n.get(T);if(T.version>0&&X.__version!==T.version){Ot(X,T,M);return}e.activeTexture(33984+M),e.bindTexture(32879,X.__webglTexture)}function at(T,M){const X=n.get(T);if(T.version>0&&X.__version!==T.version){Dt(X,T,M);return}e.activeTexture(33984+M),e.bindTexture(34067,X.__webglTexture)}const Rt={[$c]:10497,[kn]:33071,[qc]:33648},gt={[De]:9728,[Eu]:9984,[Au]:9986,[sn]:9729,[Fg]:9985,[Ml]:9987};function Y(T,M,X){if(X?(s.texParameteri(T,10242,Rt[M.wrapS]),s.texParameteri(T,10243,Rt[M.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,Rt[M.wrapR]),s.texParameteri(T,10240,gt[M.magFilter]),s.texParameteri(T,10241,gt[M.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(M.wrapS!==kn||M.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,F(M.magFilter)),s.texParameteri(T,10241,F(M.minFilter)),M.minFilter!==De&&M.minFilter!==sn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(M.type===dr&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===ms&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(T,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Pt(T,M){let X=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",y));const et=M.source;let lt=m.get(et);lt===void 0&&(lt={},m.set(et,lt));const ut=J(M);if(ut!==T.__cacheKey){lt[ut]===void 0&&(lt[ut]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,X=!0),lt[ut].usedTimes++;const At=lt[T.__cacheKey];At!==void 0&&(lt[T.__cacheKey].usedTimes--,At.usedTimes===0&&P(M)),T.__cacheKey=ut,T.__webglTexture=lt[ut].texture}return X}function Ot(T,M,X){let et=3553;M.isDataArrayTexture&&(et=35866),M.isData3DTexture&&(et=32879);const lt=Pt(T,M),ut=M.source;if(e.activeTexture(33984+X),e.bindTexture(et,T.__webglTexture),ut.version!==ut.__currentVersion||lt===!0){s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const At=x(M)&&b(M.image)===!1;let q=w(M.image,At,!1,h);q=Bt(M,q);const Nt=b(q)||a,zt=r.convert(M.format,M.encoding);let _t=r.convert(M.type),I=D(M.internalFormat,zt,_t,M.encoding,M.isVideoTexture);Y(et,M,Nt);let ct;const tt=M.mipmaps,Ct=a&&M.isVideoTexture!==!0,pt=T.__version===void 0,Mt=k(M,q,Nt);if(M.isDepthTexture)I=6402,a?M.type===dr?I=36012:M.type===Ua?I=33190:M.type===gs?I=35056:I=33189:M.type===dr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===_r&&I===6402&&M.type!==Mo&&M.type!==Ua&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Mo,_t=r.convert(M.type)),M.format===Es&&I===6402&&(I=34041,M.type!==gs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=gs,_t=r.convert(M.type))),Ct&&pt?e.texStorage2D(3553,1,I,q.width,q.height):e.texImage2D(3553,0,I,q.width,q.height,0,zt,_t,null);else if(M.isDataTexture)if(tt.length>0&&Nt){Ct&&pt&&e.texStorage2D(3553,Mt,I,tt[0].width,tt[0].height);for(let K=0,rt=tt.length;K<rt;K++)ct=tt[K],Ct?e.texSubImage2D(3553,K,0,0,ct.width,ct.height,zt,_t,ct.data):e.texImage2D(3553,K,I,ct.width,ct.height,0,zt,_t,ct.data);M.generateMipmaps=!1}else Ct?(pt&&e.texStorage2D(3553,Mt,I,q.width,q.height),e.texSubImage2D(3553,0,0,0,q.width,q.height,zt,_t,q.data)):e.texImage2D(3553,0,I,q.width,q.height,0,zt,_t,q.data);else if(M.isCompressedTexture){Ct&&pt&&e.texStorage2D(3553,Mt,I,tt[0].width,tt[0].height);for(let K=0,rt=tt.length;K<rt;K++)ct=tt[K],M.format!==Un?zt!==null?Ct?e.compressedTexSubImage2D(3553,K,0,0,ct.width,ct.height,zt,ct.data):e.compressedTexImage2D(3553,K,I,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?e.texSubImage2D(3553,K,0,0,ct.width,ct.height,zt,_t,ct.data):e.texImage2D(3553,K,I,ct.width,ct.height,0,zt,_t,ct.data)}else if(M.isDataArrayTexture)Ct?(pt&&e.texStorage3D(35866,Mt,I,q.width,q.height,q.depth),e.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,zt,_t,q.data)):e.texImage3D(35866,0,I,q.width,q.height,q.depth,0,zt,_t,q.data);else if(M.isData3DTexture)Ct?(pt&&e.texStorage3D(32879,Mt,I,q.width,q.height,q.depth),e.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,zt,_t,q.data)):e.texImage3D(32879,0,I,q.width,q.height,q.depth,0,zt,_t,q.data);else if(M.isFramebufferTexture)Ct&&pt?e.texStorage2D(3553,Mt,I,q.width,q.height):e.texImage2D(3553,0,I,q.width,q.height,0,zt,_t,null);else if(tt.length>0&&Nt){Ct&&pt&&e.texStorage2D(3553,Mt,I,tt[0].width,tt[0].height);for(let K=0,rt=tt.length;K<rt;K++)ct=tt[K],Ct?e.texSubImage2D(3553,K,0,0,zt,_t,ct):e.texImage2D(3553,K,I,zt,_t,ct);M.generateMipmaps=!1}else Ct?(pt&&e.texStorage2D(3553,Mt,I,q.width,q.height),e.texSubImage2D(3553,0,0,0,zt,_t,q)):e.texImage2D(3553,0,I,zt,_t,q);E(M,Nt)&&A(et),ut.__currentVersion=ut.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Dt(T,M,X){if(M.image.length!==6)return;const et=Pt(T,M),lt=M.source;if(e.activeTexture(33984+X),e.bindTexture(34067,T.__webglTexture),lt.version!==lt.__currentVersion||et===!0){s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const ut=M.isCompressedTexture||M.image[0].isCompressedTexture,At=M.image[0]&&M.image[0].isDataTexture,q=[];for(let K=0;K<6;K++)!ut&&!At?q[K]=w(M.image[K],!1,!0,c):q[K]=At?M.image[K].image:M.image[K],q[K]=Bt(M,q[K]);const Nt=q[0],zt=b(Nt)||a,_t=r.convert(M.format,M.encoding),I=r.convert(M.type),ct=D(M.internalFormat,_t,I,M.encoding),tt=a&&M.isVideoTexture!==!0,Ct=T.__version===void 0;let pt=k(M,Nt,zt);Y(34067,M,zt);let Mt;if(ut){tt&&Ct&&e.texStorage2D(34067,pt,ct,Nt.width,Nt.height);for(let K=0;K<6;K++){Mt=q[K].mipmaps;for(let rt=0;rt<Mt.length;rt++){const Tt=Mt[rt];M.format!==Un?_t!==null?tt?e.compressedTexSubImage2D(34069+K,rt,0,0,Tt.width,Tt.height,_t,Tt.data):e.compressedTexImage2D(34069+K,rt,ct,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?e.texSubImage2D(34069+K,rt,0,0,Tt.width,Tt.height,_t,I,Tt.data):e.texImage2D(34069+K,rt,ct,Tt.width,Tt.height,0,_t,I,Tt.data)}}}else{Mt=M.mipmaps,tt&&Ct&&(Mt.length>0&&pt++,e.texStorage2D(34067,pt,ct,q[0].width,q[0].height));for(let K=0;K<6;K++)if(At){tt?e.texSubImage2D(34069+K,0,0,0,q[K].width,q[K].height,_t,I,q[K].data):e.texImage2D(34069+K,0,ct,q[K].width,q[K].height,0,_t,I,q[K].data);for(let rt=0;rt<Mt.length;rt++){const St=Mt[rt].image[K].image;tt?e.texSubImage2D(34069+K,rt+1,0,0,St.width,St.height,_t,I,St.data):e.texImage2D(34069+K,rt+1,ct,St.width,St.height,0,_t,I,St.data)}}else{tt?e.texSubImage2D(34069+K,0,0,0,_t,I,q[K]):e.texImage2D(34069+K,0,ct,_t,I,q[K]);for(let rt=0;rt<Mt.length;rt++){const Tt=Mt[rt];tt?e.texSubImage2D(34069+K,rt+1,0,0,_t,I,Tt.image[K]):e.texImage2D(34069+K,rt+1,ct,_t,I,Tt.image[K])}}}E(M,zt)&&A(34067),lt.__currentVersion=lt.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ot(T,M,X,et,lt){const ut=r.convert(X.format,X.encoding),At=r.convert(X.type),q=D(X.internalFormat,ut,At,X.encoding);n.get(M).__hasExternalTextures||(lt===32879||lt===35866?e.texImage3D(lt,0,q,M.width,M.height,M.depth,0,ut,At,null):e.texImage2D(lt,0,q,M.width,M.height,0,ut,At,null)),e.bindFramebuffer(36160,T),wt(M)?d.framebufferTexture2DMultisampleEXT(36160,et,lt,n.get(X).__webglTexture,0,dt(M)):s.framebufferTexture2D(36160,et,lt,n.get(X).__webglTexture,0),e.bindFramebuffer(36160,null)}function H(T,M,X){if(s.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let et=33189;if(X||wt(M)){const lt=M.depthTexture;lt&&lt.isDepthTexture&&(lt.type===dr?et=36012:lt.type===Ua&&(et=33190));const ut=dt(M);wt(M)?d.renderbufferStorageMultisampleEXT(36161,ut,et,M.width,M.height):s.renderbufferStorageMultisample(36161,ut,et,M.width,M.height)}else s.renderbufferStorage(36161,et,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const et=dt(M);X&&wt(M)===!1?s.renderbufferStorageMultisample(36161,et,35056,M.width,M.height):wt(M)?d.renderbufferStorageMultisampleEXT(36161,et,35056,M.width,M.height):s.renderbufferStorage(36161,34041,M.width,M.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const et=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,lt=r.convert(et.format,et.encoding),ut=r.convert(et.type),At=D(et.internalFormat,lt,ut,et.encoding),q=dt(M);X&&wt(M)===!1?s.renderbufferStorageMultisample(36161,q,At,M.width,M.height):wt(M)?d.renderbufferStorageMultisampleEXT(36161,q,At,M.width,M.height):s.renderbufferStorage(36161,At,M.width,M.height)}s.bindRenderbuffer(36161,null)}function $(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const et=n.get(M.depthTexture).__webglTexture,lt=dt(M);if(M.depthTexture.format===_r)wt(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,et,0,lt):s.framebufferTexture2D(36160,36096,3553,et,0);else if(M.depthTexture.format===Es)wt(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,et,0,lt):s.framebufferTexture2D(36160,33306,3553,et,0);else throw new Error("Unknown depthTexture format")}function Z(T){const M=n.get(T),X=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");$(M.__webglFramebuffer,T)}else if(X){M.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(36160,M.__webglFramebuffer[et]),M.__webglDepthbuffer[et]=s.createRenderbuffer(),H(M.__webglDepthbuffer[et],T,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),H(M.__webglDepthbuffer,T,!1);e.bindFramebuffer(36160,null)}function it(T,M,X){const et=n.get(T);M!==void 0&&ot(et.__webglFramebuffer,T,T.texture,36064,3553),X!==void 0&&Z(T)}function mt(T){const M=T.texture,X=n.get(T),et=n.get(M);T.addEventListener("dispose",C),T.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=M.version,o.memory.textures++);const lt=T.isWebGLCubeRenderTarget===!0,ut=T.isWebGLMultipleRenderTargets===!0,At=b(T)||a;if(lt){X.__webglFramebuffer=[];for(let q=0;q<6;q++)X.__webglFramebuffer[q]=s.createFramebuffer()}else if(X.__webglFramebuffer=s.createFramebuffer(),ut)if(i.drawBuffers){const q=T.texture;for(let Nt=0,zt=q.length;Nt<zt;Nt++){const _t=n.get(q[Nt]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&T.samples>0&&wt(T)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=s.createRenderbuffer(),s.bindRenderbuffer(36161,X.__webglColorRenderbuffer);const q=r.convert(M.format,M.encoding),Nt=r.convert(M.type),zt=D(M.internalFormat,q,Nt,M.encoding),_t=dt(T);s.renderbufferStorageMultisample(36161,_t,zt,T.width,T.height),e.bindFramebuffer(36160,X.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064,36161,X.__webglColorRenderbuffer),s.bindRenderbuffer(36161,null),T.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),H(X.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(36160,null)}if(lt){e.bindTexture(34067,et.__webglTexture),Y(34067,M,At);for(let q=0;q<6;q++)ot(X.__webglFramebuffer[q],T,M,36064,34069+q);E(M,At)&&A(34067),e.unbindTexture()}else if(ut){const q=T.texture;for(let Nt=0,zt=q.length;Nt<zt;Nt++){const _t=q[Nt],I=n.get(_t);e.bindTexture(3553,I.__webglTexture),Y(3553,_t,At),ot(X.__webglFramebuffer,T,_t,36064+Nt,3553),E(_t,At)&&A(3553)}e.unbindTexture()}else{let q=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?q=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(q,et.__webglTexture),Y(q,M,At),ot(X.__webglFramebuffer,T,M,36064,q),E(M,At)&&A(q),e.unbindTexture()}T.depthBuffer&&Z(T)}function ht(T){const M=b(T)||a,X=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let et=0,lt=X.length;et<lt;et++){const ut=X[et];if(E(ut,M)){const At=T.isWebGLCubeRenderTarget?34067:3553,q=n.get(ut).__webglTexture;e.bindTexture(At,q),A(At),e.unbindTexture()}}}function It(T){if(a&&T.samples>0&&wt(T)===!1){const M=T.width,X=T.height;let et=16384;const lt=[36064],ut=T.stencilBuffer?33306:36096;T.depthBuffer&&lt.push(ut);const At=n.get(T),q=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;q===!1&&(T.depthBuffer&&(et|=256),T.stencilBuffer&&(et|=1024)),e.bindFramebuffer(36008,At.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,At.__webglFramebuffer),q===!0&&(s.invalidateFramebuffer(36008,[ut]),s.invalidateFramebuffer(36009,[ut])),s.blitFramebuffer(0,0,M,X,0,0,M,X,et,9728),f&&s.invalidateFramebuffer(36008,lt),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,At.__webglMultisampledFramebuffer)}}function dt(T){return Math.min(u,T.samples)}function wt(T){const M=n.get(T);return a&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Yt(T){const M=o.render.frame;g.get(T)!==M&&(g.set(T,M),T.update())}function Bt(T,M){const X=T.encoding,et=T.format,lt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Yc||X!==Mi&&(X===he?a===!1?t.has("EXT_sRGB")===!0&&et===Un?(T.format=Yc,T.minFilter=sn,T.generateMipmaps=!1):M=Pr.sRGBToLinear(M):(et!==Un||lt!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),M}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.setTexture2D=L,this.setTexture2DArray=Q,this.setTexture3D=nt,this.setTextureCube=at,this.rebindTextures=it,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=wt}function Uv(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===Er)return 5121;if(r===zg)return 32819;if(r===kg)return 32820;if(r===Ng)return 5120;if(r===Og)return 5122;if(r===Mo)return 5123;if(r===Bg)return 5124;if(r===Ua)return 5125;if(r===dr)return 5126;if(r===ms)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Ug)return 6406;if(r===Un)return 6408;if(r===Vg)return 6409;if(r===Gg)return 6410;if(r===_r)return 6402;if(r===Es)return 34041;if(r===Wg)return 6403;if(r===Hg)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Yc)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Xg)return 36244;if(r===$g)return 33319;if(r===qg)return 33320;if(r===Yg)return 36249;if(r===Ul||r===Hl||r===Vl||r===Gl)if(o===he)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ul)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ul)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Hl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Cu||r===Lu||r===Ru||r===Pu)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Cu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Lu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ru)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===jg)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Du||r===Iu)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Du)return o===he?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Iu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Fu||r===Nu||r===Ou||r===Bu||r===zu||r===ku||r===Uu||r===Hu||r===Vu||r===Gu||r===Wu||r===Xu||r===$u||r===qu)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Fu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Nu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ou)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Bu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ku)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Vu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Gu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Wu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Xu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$u)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qu)return o===he?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yu)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Yu)return o===he?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===gs)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class rp extends tn{constructor(t=[]){super();this.cameras=t}}rp.prototype.isArrayCamera=!0;class as extends ne{constructor(){super();this.type="Group"}}as.prototype.isGroup=!0;const Hv={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new as,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new as,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new as,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Hv))),c&&t.hand){o=!0;for(const p of t.hand.values()){const m=e.getJointPose(p,n);if(c.joints[p.jointName]===void 0){const v=new as;v.matrixAutoUpdate=!1,v.visible=!1,c.joints[p.jointName]=v,c.add(v)}const _=c.joints[p.jointName];m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}}class sp extends Fe{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:_r,h!==_r&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_r&&(n=Mo),n===void 0&&h===Es&&(n=gs);super(null,i,r,o,a,l,h,n,c);this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1}}sp.prototype.isDepthTexture=!0;class Vv extends Rr{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null;const f=e.getContextAttributes();let g=null,p=null;const m=[],_=new Map,v=new tn;v.layers.enable(1),v.viewport=new se;const w=new tn;w.layers.enable(2),w.viewport=new se;const b=[v,w],x=new rp;x.layers.enable(1),x.layers.enable(2);let E=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let J=m[N];return J===void 0&&(J=new yc,m[N]=J),J.getTargetRaySpace()},this.getControllerGrip=function(N){let J=m[N];return J===void 0&&(J=new yc,m[N]=J),J.getGripSpace()},this.getHand=function(N){let J=m[N];return J===void 0&&(J=new yc,m[N]=J),J.getHandSpace()};function D(N){const J=_.get(N.inputSource);J&&J.dispatchEvent({type:N.type,data:N.inputSource})}function k(){_.forEach(function(N,J){N.disconnect(J)}),_.clear(),E=null,A=null,t.setRenderTarget(g),u=null,h=null,c=null,i=null,p=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return c},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",k),i.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:u}),p=new xn(u.framebufferWidth,u.framebufferHeight,{format:Un,type:Er,encoding:t.outputEncoding})}else{let J=null,L=null,Q=null;f.depth&&(Q=f.stencil?35056:33190,J=f.stencil?Es:_r,L=f.stencil?gs:Mo);const nt={colorFormat:t.outputEncoding===he?35907:32856,depthFormat:Q,scaleFactor:r};c=new XRWebGLBinding(i,e),h=c.createProjectionLayer(nt),i.updateRenderState({layers:[h]}),p=new xn(h.textureWidth,h.textureHeight,{format:Un,type:Er,depthTexture:new sp(h.textureWidth,h.textureHeight,L,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const at=t.properties.get(p);at.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),V.setContext(i),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function F(N){const J=i.inputSources;for(let L=0;L<m.length;L++)_.set(J[L],m[L]);for(let L=0;L<N.removed.length;L++){const Q=N.removed[L],nt=_.get(Q);nt&&(nt.dispatchEvent({type:"disconnected",data:Q}),_.delete(Q))}for(let L=0;L<N.added.length;L++){const Q=N.added[L],nt=_.get(Q);nt&&nt.dispatchEvent({type:"connected",data:Q})}}const y=new R,C=new R;function G(N,J,L){y.setFromMatrixPosition(J.matrixWorld),C.setFromMatrixPosition(L.matrixWorld);const Q=y.distanceTo(C),nt=J.projectionMatrix.elements,at=L.projectionMatrix.elements,Rt=nt[14]/(nt[10]-1),gt=nt[14]/(nt[10]+1),Y=(nt[9]+1)/nt[5],Pt=(nt[9]-1)/nt[5],Ot=(nt[8]-1)/nt[0],Dt=(at[8]+1)/at[0],ot=Rt*Ot,H=Rt*Dt,$=Q/(-Ot+Dt),Z=$*-Ot;J.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Z),N.translateZ($),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const it=Rt+$,mt=gt+$,ht=ot-Z,It=H+(Q-Z),dt=Y*gt/mt*it,wt=Pt*gt/mt*it;N.projectionMatrix.makePerspective(ht,It,dt,wt,it,mt)}function P(N,J){J===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(J.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;x.near=w.near=v.near=N.near,x.far=w.far=v.far=N.far,(E!==x.near||A!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,A=x.far);const J=N.parent,L=x.cameras;P(x,J);for(let nt=0;nt<L.length;nt++)P(L[nt],J);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),N.position.copy(x.position),N.quaternion.copy(x.quaternion),N.scale.copy(x.scale),N.matrix.copy(x.matrix),N.matrixWorld.copy(x.matrixWorld);const Q=N.children;for(let nt=0,at=Q.length;nt<at;nt++)Q[nt].updateMatrixWorld(!0);L.length===2?G(x,v,w):x.projectionMatrix.copy(v.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(N){h!==null&&(h.fixedFoveation=N),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=N)};let z=null;function O(N,J){if(l=J.getViewerPose(o),d=J,l!==null){const Q=l.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let nt=!1;Q.length!==x.cameras.length&&(x.cameras.length=0,nt=!0);for(let at=0;at<Q.length;at++){const Rt=Q[at];let gt=null;if(u!==null)gt=u.getViewport(Rt);else{const Pt=c.getViewSubImage(h,Rt);gt=Pt.viewport,at===0&&(t.setRenderTargetTextures(p,Pt.colorTexture,h.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(p))}const Y=b[at];Y.matrix.fromArray(Rt.transform.matrix),Y.projectionMatrix.fromArray(Rt.projectionMatrix),Y.viewport.set(gt.x,gt.y,gt.width,gt.height),at===0&&x.matrix.copy(Y.matrix),nt===!0&&x.cameras.push(Y)}}const L=i.inputSources;for(let Q=0;Q<m.length;Q++){const nt=m[Q],at=L[Q];nt.update(at,J,o)}z&&z(N,J),d=null}const V=new jf;V.setAnimationLoop(O),this.setAnimationLoop=function(N){z=N},this.dispose=function(){}}}function Gv(s,t){function e(p,m){p.fogColor.value.copy(m.color),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,_,v,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(p,m):m.isMeshToonMaterial?(i(p,m),h(p,m)):m.isMeshPhongMaterial?(i(p,m),c(p,m)):m.isMeshStandardMaterial?(i(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,w)):m.isMeshMatcapMaterial?(i(p,m),f(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),g(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(r(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?a(p,m,_,v):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Gn&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Gn&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=t.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=s.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let v;m.map?v=m.map:m.specularMap?v=m.specularMap:m.displacementMap?v=m.displacementMap:m.normalMap?v=m.normalMap:m.bumpMap?v=m.bumpMap:m.roughnessMap?v=m.roughnessMap:m.metalnessMap?v=m.metalnessMap:m.alphaMap?v=m.alphaMap:m.emissiveMap?v=m.emissiveMap:m.clearcoatMap?v=m.clearcoatMap:m.clearcoatNormalMap?v=m.clearcoatNormalMap:m.clearcoatRoughnessMap?v=m.clearcoatRoughnessMap:m.specularIntensityMap?v=m.specularIntensityMap:m.specularColorMap?v=m.specularColorMap:m.transmissionMap?v=m.transmissionMap:m.thicknessMap?v=m.thicknessMap:m.sheenColorMap?v=m.sheenColorMap:m.sheenRoughnessMap&&(v=m.sheenRoughnessMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix));let w;m.aoMap?w=m.aoMap:m.lightMap&&(w=m.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uv2Transform.value.copy(w.matrix))}function r(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function a(p,m,_,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=v*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w;m.map?w=m.map:m.alphaMap&&(w=m.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Gn&&p.clearcoatNormalScale.value.negate())),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function f(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Wv(){const s=To("canvas");return s.style.display="block",s}function ie(s={}){const t=s.canvas!==void 0?s.canvas:Wv(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;s.context!==void 0?h=e.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Mi,this.physicallyCorrectLights=!1,this.toneMapping=vi,this.toneMappingExposure=1;const p=this;let m=!1,_=0,v=0,w=null,b=-1,x=null;const E=new se,A=new se;let D=null,k=t.width,F=t.height,y=1,C=null,G=null;const P=new se(0,0,k,F),z=new se(0,0,k,F);let O=!1;const V=new Al;let N=!1,J=!1,L=null;const Q=new Ft,nt=new st,at=new R,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return w===null?y:1}let Y=e;function Pt(S,B){for(let W=0;W<S.length;W++){const U=S[W],j=t.getContext(U,B);if(j!==null)return j}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sh}`),t.addEventListener("webglcontextlost",I,!1),t.addEventListener("webglcontextrestored",ct,!1),Y===null){const B=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&B.shift(),Y=Pt(B,S),Y===null)throw Pt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Y.getShaderPrecisionFormat===void 0&&(Y.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Ot,Dt,ot,H,$,Z,it,mt,ht,It,dt,wt,Yt,Bt,T,M,X,et,lt,ut,At,q,Nt;function zt(){Ot=new ly(Y),Dt=new ny(Y,Ot,s),Ot.init(Dt),q=new Uv(Y,Ot,Dt),ot=new zv(Y,Ot,Dt),H=new uy(Y),$=new Av,Z=new kv(Y,Ot,ot,$,Dt,q,H),it=new ry(p),mt=new ay(p),ht=new T_(Y,Dt),Nt=new ty(Y,Ot,ht,Dt),It=new cy(Y,ht,H,Nt),dt=new my(Y,It,ht,H),lt=new py(Y,Dt,Z),M=new iy($),wt=new Ev(p,it,mt,Ot,Dt,Nt,M),Yt=new Gv(p,$),Bt=new Lv,T=new Nv(Ot,Dt),et=new Qx(p,it,ot,dt,h,o),X=new ip(p,dt,Dt),ut=new ey(Y,Ot,H,Dt),At=new hy(Y,Ot,H,Dt),H.programs=wt.programs,p.capabilities=Dt,p.extensions=Ot,p.properties=$,p.renderLists=Bt,p.shadowMap=X,p.state=ot,p.info=H}zt();const _t=new Vv(p,Y);this.xr=_t,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const S=Ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return y},this.setPixelRatio=function(S){S!==void 0&&(y=S,this.setSize(k,F,!1))},this.getSize=function(S){return S.set(k,F)},this.setSize=function(S,B,W){if(_t.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=S,F=B,t.width=Math.floor(S*y),t.height=Math.floor(B*y),W!==!1&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(k*y,F*y).floor()},this.setDrawingBufferSize=function(S,B,W){k=S,F=B,y=W,t.width=Math.floor(S*W),t.height=Math.floor(B*W),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(P)},this.setViewport=function(S,B,W,U){S.isVector4?P.set(S.x,S.y,S.z,S.w):P.set(S,B,W,U),ot.viewport(E.copy(P).multiplyScalar(y).floor())},this.getScissor=function(S){return S.copy(z)},this.setScissor=function(S,B,W,U){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,B,W,U),ot.scissor(A.copy(z).multiplyScalar(y).floor())},this.getScissorTest=function(){return O},this.setScissorTest=function(S){ot.setScissorTest(O=S)},this.setOpaqueSort=function(S){C=S},this.setTransparentSort=function(S){G=S},this.getClearColor=function(S){return S.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor.apply(et,arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha.apply(et,arguments)},this.clear=function(S=!0,B=!0,W=!0){let U=0;S&&(U|=16384),B&&(U|=256),W&&(U|=1024),Y.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",I,!1),t.removeEventListener("webglcontextrestored",ct,!1),Bt.dispose(),T.dispose(),$.dispose(),it.dispose(),mt.dispose(),dt.dispose(),Nt.dispose(),wt.dispose(),_t.dispose(),_t.removeEventListener("sessionstart",rt),_t.removeEventListener("sessionend",Tt),L&&(L.dispose(),L=null),St.stop()};function I(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ct(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const S=H.autoReset,B=X.enabled,W=X.autoUpdate,U=X.needsUpdate,j=X.type;zt(),H.autoReset=S,X.enabled=B,X.autoUpdate=W,X.needsUpdate=U,X.type=j}function tt(S){const B=S.target;B.removeEventListener("dispose",tt),Ct(B)}function Ct(S){pt(S),$.remove(S)}function pt(S){const B=$.get(S).programs;B!==void 0&&(B.forEach(function(W){wt.releaseProgram(W)}),S.isShaderMaterial&&wt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,W,U,j,yt){B===null&&(B=Rt);const xt=j.isMesh&&j.matrixWorld.determinant()<0,vt=jt(S,B,W,U,j);ot.setMaterial(U,xt);let bt=W.index;const $t=W.attributes.position;if(bt===null){if($t===void 0||$t.count===0)return}else if(bt.count===0)return;let Gt=1;U.wireframe===!0&&(bt=It.getWireframeAttribute(W),Gt=2),Nt.setup(j,U,vt,W,bt);let Lt,Ht=ut;bt!==null&&(Lt=ht.get(bt),Ht=At,Ht.setIndex(Lt));const Oe=bt!==null?bt.count:$t.count,qn=W.drawRange.start*Gt,oi=W.drawRange.count*Gt,He=yt!==null?yt.start*Gt:0,Qt=yt!==null?yt.count*Gt:1/0,Nr=Math.max(qn,He),xe=Math.min(Oe,qn+oi,He+Qt)-1,Yn=Math.max(0,xe-Nr+1);if(Yn!==0){if(j.isMesh)U.wireframe===!0?(ot.setLineWidth(U.wireframeLinewidth*gt()),Ht.setMode(1)):Ht.setMode(4);else if(j.isLine){let Ai=U.linewidth;Ai===void 0&&(Ai=1),ot.setLineWidth(Ai*gt()),j.isLineSegments?Ht.setMode(1):j.isLineLoop?Ht.setMode(2):Ht.setMode(3)}else j.isPoints?Ht.setMode(0):j.isSprite&&Ht.setMode(4);if(j.isInstancedMesh)Ht.renderInstances(Nr,Yn,j.count);else if(W.isInstancedBufferGeometry){const Ai=Math.min(W.instanceCount,W._maxInstanceCount);Ht.renderInstances(Nr,Yn,Ai)}else Ht.render(Nr,Yn)}},this.compile=function(S,B){d=T.get(S),d.init(),g.push(d),S.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights(p.physicallyCorrectLights),S.traverse(function(W){const U=W.material;if(U)if(Array.isArray(U))for(let j=0;j<U.length;j++){const yt=U[j];Wt(yt,S,W)}else Wt(U,S,W)}),g.pop(),d=null};let Mt=null;function K(S){Mt&&Mt(S)}function rt(){St.stop()}function Tt(){St.start()}const St=new jf;St.setAnimationLoop(K),typeof self!="undefined"&&St.setContext(self),this.setAnimationLoop=function(S){Mt=S,_t.setAnimationLoop(S),S===null?St.stop():St.start()},_t.addEventListener("sessionstart",rt),_t.addEventListener("sessionend",Tt),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;S.autoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.updateMatrixWorld(),_t.enabled===!0&&_t.isPresenting===!0&&(_t.cameraAutoUpdate===!0&&_t.updateCamera(B),B=_t.getCamera()),S.isScene===!0&&S.onBeforeRender(p,S,B,w),d=T.get(S,g.length),d.init(),g.push(d),Q.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),V.setFromProjectionMatrix(Q),J=this.localClippingEnabled,N=M.init(this.clippingPlanes,J,B),u=Bt.get(S,f.length),u.init(),f.push(u),ce(S,B,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(C,G),N===!0&&M.beginShadows();const W=d.state.shadowsArray;if(X.render(W,S,B),N===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),et.render(u,S),d.setupLights(p.physicallyCorrectLights),B.isArrayCamera){const U=B.cameras;for(let j=0,yt=U.length;j<yt;j++){const xt=U[j];Ae(u,S,xt,xt.viewport)}}else Ae(u,S,B);w!==null&&(Z.updateMultisampleRenderTarget(w),Z.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(p,S,B),Nt.resetDefaultState(),b=-1,x=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function ce(S,B,W,U){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||V.intersectsSprite(S)){U&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);const xt=dt.update(S),vt=S.material;vt.visible&&u.push(S,xt,vt,W,at.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==H.render.frame&&(S.skeleton.update(),S.skeleton.frame=H.render.frame),!S.frustumCulled||V.intersectsObject(S))){U&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Q);const xt=dt.update(S),vt=S.material;if(Array.isArray(vt)){const bt=xt.groups;for(let $t=0,Gt=bt.length;$t<Gt;$t++){const Lt=bt[$t],Ht=vt[Lt.materialIndex];Ht&&Ht.visible&&u.push(S,xt,Ht,W,at.z,Lt)}}else vt.visible&&u.push(S,xt,vt,W,at.z,null)}}const yt=S.children;for(let xt=0,vt=yt.length;xt<vt;xt++)ce(yt[xt],B,W,U)}function Ae(S,B,W,U){const j=S.opaque,yt=S.transmissive,xt=S.transparent;d.setupLightsView(W),yt.length>0&&Ei(j,B,W),U&&ot.viewport(E.copy(U)),j.length>0&&Fr(j,B,W),yt.length>0&&Fr(yt,B,W),xt.length>0&&Fr(xt,B,W),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Ei(S,B,W){const U=Dt.isWebGL2;L===null&&(L=new xn(1,1,{generateMipmaps:!0,type:q.convert(ms)!==null?ms:Er,minFilter:Ml,samples:U&&r===!0?4:0})),p.getDrawingBufferSize(nt),U?L.setSize(nt.x,nt.y):L.setSize(Jc(nt.x),Jc(nt.y));const j=p.getRenderTarget();p.setRenderTarget(L),p.clear();const yt=p.toneMapping;p.toneMapping=vi,Fr(S,B,W),p.toneMapping=yt,Z.updateMultisampleRenderTarget(L),Z.updateRenderTargetMipmap(L),p.setRenderTarget(j)}function Fr(S,B,W){const U=B.isScene===!0?B.overrideMaterial:null;for(let j=0,yt=S.length;j<yt;j++){const xt=S[j],vt=xt.object,bt=xt.geometry,$t=U===null?xt.material:U,Gt=xt.group;vt.layers.test(W.layers)&&Vt(vt,B,W,bt,$t,Gt)}}function Vt(S,B,W,U,j,yt){S.onBeforeRender(p,B,W,U,j,yt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),j.onBeforeRender(p,B,W,U,S,yt),j.transparent===!0&&j.side===Ms?(j.side=Gn,j.needsUpdate=!0,p.renderBufferDirect(W,B,U,j,S,yt),j.side=wo,j.needsUpdate=!0,p.renderBufferDirect(W,B,U,j,S,yt),j.side=Ms):p.renderBufferDirect(W,B,U,j,S,yt),S.onAfterRender(p,B,W,U,j,yt)}function Wt(S,B,W){B.isScene!==!0&&(B=Rt);const U=$.get(S),j=d.state.lights,yt=d.state.shadowsArray,xt=j.state.version,vt=wt.getParameters(S,j.state,yt,B,W),bt=wt.getProgramCacheKey(vt);let $t=U.programs;U.environment=S.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(S.isMeshStandardMaterial?mt:it).get(S.envMap||U.environment),$t===void 0&&(S.addEventListener("dispose",tt),$t=new Map,U.programs=$t);let Gt=$t.get(bt);if(Gt!==void 0){if(U.currentProgram===Gt&&U.lightsStateVersion===xt)return Kt(S,vt),Gt}else vt.uniforms=wt.getUniforms(S),S.onBuild(W,vt,p),S.onBeforeCompile(vt,p),Gt=wt.acquireProgram(vt,bt),$t.set(bt,Gt),U.uniforms=vt.uniforms;const Lt=U.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Lt.clippingPlanes=M.uniform),Kt(S,vt),U.needsLights=Ut(S),U.lightsStateVersion=xt,U.needsLights&&(Lt.ambientLightColor.value=j.state.ambient,Lt.lightProbe.value=j.state.probe,Lt.directionalLights.value=j.state.directional,Lt.directionalLightShadows.value=j.state.directionalShadow,Lt.spotLights.value=j.state.spot,Lt.spotLightShadows.value=j.state.spotShadow,Lt.rectAreaLights.value=j.state.rectArea,Lt.ltc_1.value=j.state.rectAreaLTC1,Lt.ltc_2.value=j.state.rectAreaLTC2,Lt.pointLights.value=j.state.point,Lt.pointLightShadows.value=j.state.pointShadow,Lt.hemisphereLights.value=j.state.hemi,Lt.directionalShadowMap.value=j.state.directionalShadowMap,Lt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Lt.spotShadowMap.value=j.state.spotShadowMap,Lt.spotShadowMatrix.value=j.state.spotShadowMatrix,Lt.pointShadowMap.value=j.state.pointShadowMap,Lt.pointShadowMatrix.value=j.state.pointShadowMatrix);const Ht=Gt.getUniforms(),Oe=Vi.seqWithValue(Ht.seq,Lt);return U.currentProgram=Gt,U.uniformsList=Oe,Gt}function Kt(S,B){const W=$.get(S);W.outputEncoding=B.outputEncoding,W.instancing=B.instancing,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function jt(S,B,W,U,j){B.isScene!==!0&&(B=Rt),Z.resetTextureUnits();const yt=B.fog,xt=U.isMeshStandardMaterial?B.environment:null,vt=w===null?p.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Mi,bt=(U.isMeshStandardMaterial?mt:it).get(U.envMap||xt),$t=U.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Gt=!!U.normalMap&&!!W.attributes.tangent,Lt=!!W.morphAttributes.position,Ht=!!W.morphAttributes.normal,Oe=!!W.morphAttributes.color,qn=U.toneMapped?p.toneMapping:vi,oi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,He=oi!==void 0?oi.length:0,Qt=$.get(U),Nr=d.state.lights;if(N===!0&&(J===!0||S!==x)){const Fn=S===x&&U.id===b;M.setState(U,S,Fn)}let xe=!1;U.version===Qt.__version?(Qt.needsLights&&Qt.lightsStateVersion!==Nr.state.version||Qt.outputEncoding!==vt||j.isInstancedMesh&&Qt.instancing===!1||!j.isInstancedMesh&&Qt.instancing===!0||j.isSkinnedMesh&&Qt.skinning===!1||!j.isSkinnedMesh&&Qt.skinning===!0||Qt.envMap!==bt||U.fog&&Qt.fog!==yt||Qt.numClippingPlanes!==void 0&&(Qt.numClippingPlanes!==M.numPlanes||Qt.numIntersection!==M.numIntersection)||Qt.vertexAlphas!==$t||Qt.vertexTangents!==Gt||Qt.morphTargets!==Lt||Qt.morphNormals!==Ht||Qt.morphColors!==Oe||Qt.toneMapping!==qn||Dt.isWebGL2===!0&&Qt.morphTargetsCount!==He)&&(xe=!0):(xe=!0,Qt.__version=U.version);let Yn=Qt.currentProgram;xe===!0&&(Yn=Wt(U,B,j));let Ai=!1,Ws=!1,zl=!1;const Ve=Yn.getUniforms(),Xs=Qt.uniforms;if(ot.useProgram(Yn.program)&&(Ai=!0,Ws=!0,zl=!0),U.id!==b&&(b=U.id,Ws=!0),Ai||x!==S){if(Ve.setValue(Y,"projectionMatrix",S.projectionMatrix),Dt.logarithmicDepthBuffer&&Ve.setValue(Y,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),x!==S&&(x=S,Ws=!0,zl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Fn=Ve.map.cameraPosition;Fn!==void 0&&Fn.setValue(Y,at.setFromMatrixPosition(S.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Ve.setValue(Y,"isOrthographic",S.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||j.isSkinnedMesh)&&Ve.setValue(Y,"viewMatrix",S.matrixWorldInverse)}if(j.isSkinnedMesh){Ve.setOptional(Y,j,"bindMatrix"),Ve.setOptional(Y,j,"bindMatrixInverse");const Fn=j.skeleton;Fn&&(Dt.floatVertexTextures?(Fn.boneTexture===null&&Fn.computeBoneTexture(),Ve.setValue(Y,"boneTexture",Fn.boneTexture,Z),Ve.setValue(Y,"boneTextureSize",Fn.boneTextureSize)):Ve.setOptional(Y,Fn,"boneMatrices"))}const kl=W.morphAttributes;return(kl.position!==void 0||kl.normal!==void 0||kl.color!==void 0&&Dt.isWebGL2===!0)&&lt.update(j,W,U,Yn),(Ws||Qt.receiveShadow!==j.receiveShadow)&&(Qt.receiveShadow=j.receiveShadow,Ve.setValue(Y,"receiveShadow",j.receiveShadow)),Ws&&(Ve.setValue(Y,"toneMappingExposure",p.toneMappingExposure),Qt.needsLights&&rn(Xs,zl),yt&&U.fog&&Yt.refreshFogUniforms(Xs,yt),Yt.refreshMaterialUniforms(Xs,U,y,F,L),Vi.upload(Y,Qt.uniformsList,Xs,Z)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Vi.upload(Y,Qt.uniformsList,Xs,Z),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Ve.setValue(Y,"center",j.center),Ve.setValue(Y,"modelViewMatrix",j.modelViewMatrix),Ve.setValue(Y,"normalMatrix",j.normalMatrix),Ve.setValue(Y,"modelMatrix",j.matrixWorld),Yn}function rn(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Ut(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return v},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,B,W){$.get(S.texture).__webglTexture=B,$.get(S.depthTexture).__webglTexture=W;const U=$.get(S);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=W===void 0,U.__autoAllocateDepthBuffer||Ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const W=$.get(S);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,W=0){w=S,_=B,v=W;let U=!0;if(S){const bt=$.get(S);bt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),U=!1):bt.__webglFramebuffer===void 0?Z.setupRenderTarget(S):bt.__hasExternalTextures&&Z.rebindTextures(S,$.get(S.texture).__webglTexture,$.get(S.depthTexture).__webglTexture)}let j=null,yt=!1,xt=!1;if(S){const bt=S.texture;(bt.isData3DTexture||bt.isDataArrayTexture)&&(xt=!0);const $t=$.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(j=$t[B],yt=!0):Dt.isWebGL2&&S.samples>0&&Z.useMultisampledRTT(S)===!1?j=$.get(S).__webglMultisampledFramebuffer:j=$t,E.copy(S.viewport),A.copy(S.scissor),D=S.scissorTest}else E.copy(P).multiplyScalar(y).floor(),A.copy(z).multiplyScalar(y).floor(),D=O;if(ot.bindFramebuffer(36160,j)&&Dt.drawBuffers&&U&&ot.drawBuffers(S,j),ot.viewport(E),ot.scissor(A),ot.setScissorTest(D),yt){const bt=$.get(S.texture);Y.framebufferTexture2D(36160,36064,34069+B,bt.__webglTexture,W)}else if(xt){const bt=$.get(S.texture),$t=B||0;Y.framebufferTextureLayer(36160,36064,bt.__webglTexture,W||0,$t)}b=-1},this.readRenderTargetPixels=function(S,B,W,U,j,yt,xt){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=$.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&xt!==void 0&&(vt=vt[xt]),vt){ot.bindFramebuffer(36160,vt);try{const bt=S.texture,$t=bt.format,Gt=bt.type;if($t!==Un&&q.convert($t)!==Y.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Lt=Gt===ms&&(Ot.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&Ot.has("EXT_color_buffer_float"));if(Gt!==Er&&q.convert(Gt)!==Y.getParameter(35738)&&!(Gt===dr&&(Dt.isWebGL2||Ot.has("OES_texture_float")||Ot.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-U&&W>=0&&W<=S.height-j&&Y.readPixels(B,W,U,j,q.convert($t),q.convert(Gt),yt)}finally{const bt=w!==null?$.get(w).__webglFramebuffer:null;ot.bindFramebuffer(36160,bt)}}},this.copyFramebufferToTexture=function(S,B,W=0){if(B.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const U=Math.pow(2,-W),j=Math.floor(B.image.width*U),yt=Math.floor(B.image.height*U);Z.setTexture2D(B,0),Y.copyTexSubImage2D(3553,W,0,0,S.x,S.y,j,yt),ot.unbindTexture()},this.copyTextureToTexture=function(S,B,W,U=0){const j=B.image.width,yt=B.image.height,xt=q.convert(W.format),vt=q.convert(W.type);Z.setTexture2D(W,0),Y.pixelStorei(37440,W.flipY),Y.pixelStorei(37441,W.premultiplyAlpha),Y.pixelStorei(3317,W.unpackAlignment),B.isDataTexture?Y.texSubImage2D(3553,U,S.x,S.y,j,yt,xt,vt,B.image.data):B.isCompressedTexture?Y.compressedTexSubImage2D(3553,U,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,xt,B.mipmaps[0].data):Y.texSubImage2D(3553,U,S.x,S.y,xt,vt,B.image),U===0&&W.generateMipmaps&&Y.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(S,B,W,U,j=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const yt=S.max.x-S.min.x+1,xt=S.max.y-S.min.y+1,vt=S.max.z-S.min.z+1,bt=q.convert(U.format),$t=q.convert(U.type);let Gt;if(U.isData3DTexture)Z.setTexture3D(U,0),Gt=32879;else if(U.isDataArrayTexture)Z.setTexture2DArray(U,0),Gt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y.pixelStorei(37440,U.flipY),Y.pixelStorei(37441,U.premultiplyAlpha),Y.pixelStorei(3317,U.unpackAlignment);const Lt=Y.getParameter(3314),Ht=Y.getParameter(32878),Oe=Y.getParameter(3316),qn=Y.getParameter(3315),oi=Y.getParameter(32877),He=W.isCompressedTexture?W.mipmaps[0]:W.image;Y.pixelStorei(3314,He.width),Y.pixelStorei(32878,He.height),Y.pixelStorei(3316,S.min.x),Y.pixelStorei(3315,S.min.y),Y.pixelStorei(32877,S.min.z),W.isDataTexture||W.isData3DTexture?Y.texSubImage3D(Gt,j,B.x,B.y,B.z,yt,xt,vt,bt,$t,He.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Y.compressedTexSubImage3D(Gt,j,B.x,B.y,B.z,yt,xt,vt,bt,He.data)):Y.texSubImage3D(Gt,j,B.x,B.y,B.z,yt,xt,vt,bt,$t,He),Y.pixelStorei(3314,Lt),Y.pixelStorei(32878,Ht),Y.pixelStorei(3316,Oe),Y.pixelStorei(3315,qn),Y.pixelStorei(32877,oi),j===0&&U.generateMipmaps&&Y.generateMipmap(Gt),ot.unbindTexture()},this.initTexture=function(S){Z.setTexture2D(S,0),ot.unbindTexture()},this.resetState=function(){_=0,v=0,w=null,ot.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}ie.prototype.isWebGLRenderer=!0;class Xv extends ie{}Xv.prototype.isWebGL1Renderer=!0;class Fh extends ne{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}Fh.prototype.isScene=!0;class Vo{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=So,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ei()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ei()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Vo.prototype.isInterleavedBuffer=!0;const Je=new R;class Eo{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Eo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Eo.prototype.isInterleavedBufferAttribute=!0;class Nh extends Ee{constructor(t){super();this.type="SpriteMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}Nh.prototype.isSpriteMaterial=!0;let Jr;const js=new R,Zr=new R,Kr=new R,Qr=new st,Js=new st,op=new Ft,pa=new R,Zs=new R,ma=new R,Rd=new st,vc=new st,Pd=new st;class $v extends ne{constructor(t){super();if(this.type="Sprite",Jr===void 0){Jr=new le;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Vo(e,5);Jr.setIndex([0,1,2,0,2,3]),Jr.setAttribute("position",new Eo(n,3,0,!1)),Jr.setAttribute("uv",new Eo(n,2,3,!1))}this.geometry=Jr,this.material=t!==void 0?t:new Nh,this.center=new st(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zr.setFromMatrixScale(this.matrixWorld),op.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Kr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zr.multiplyScalar(-Kr.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;ga(pa.set(-.5,-.5,0),Kr,o,Zr,i,r),ga(Zs.set(.5,-.5,0),Kr,o,Zr,i,r),ga(ma.set(.5,.5,0),Kr,o,Zr,i,r),Rd.set(0,0),vc.set(1,0),Pd.set(1,1);let a=t.ray.intersectTriangle(pa,Zs,ma,!1,js);if(a===null&&(ga(Zs.set(-.5,.5,0),Kr,o,Zr,i,r),vc.set(0,1),a=t.ray.intersectTriangle(pa,ma,Zs,!1,js),a===null))return;const l=t.ray.origin.distanceTo(js);l<t.near||l>t.far||e.push({distance:l,point:js.clone(),uv:Me.getUV(js,pa,Zs,ma,Rd,vc,Pd,new st),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}$v.prototype.isSprite=!0;function ga(s,t,e,n,i,r){Qr.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Js.x=r*Qr.x-i*Qr.y,Js.y=i*Qr.x+r*Qr.y):Js.copy(Qr),s.copy(t),s.x+=Js.x,s.y+=Js.y,s.applyMatrix4(op)}const Dd=new R,Id=new se,Fd=new se,qv=new R,Nd=new Ft;class ap extends Ue{constructor(t,e){super(t,e);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ft,this.bindMatrixInverse=new Ft}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new se,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;Id.fromBufferAttribute(i.attributes.skinIndex,t),Fd.fromBufferAttribute(i.attributes.skinWeight,t),Dd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const o=Fd.getComponent(r);if(o!==0){const a=Id.getComponent(r);Nd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(qv.copy(Dd).applyMatrix4(Nd),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}ap.prototype.isSkinnedMesh=!0;class Yv extends ne{constructor(){super();this.type="Bone"}}Yv.prototype.isBone=!0;class jv extends Fe{constructor(t=null,e=1,n=1,i,r,o,a,l,c=De,h=De,u,d){super(null,o,a,l,c,h,i,r,u,d);this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}jv.prototype.isDataTexture=!0;class Kc extends Se{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(t,e,n);this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Kc.prototype.isInstancedBufferAttribute=!0;const Od=new Ft,Bd=new Ft,_a=[],Ks=new Ue;class Jv extends Ue{constructor(t,e,n){super(t,e);this.instanceMatrix=new Kc(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0)for(let r=0;r<i;r++){this.getMatrixAt(r,Od),Bd.multiplyMatrices(n,Od),Ks.matrixWorld=Bd,Ks.raycast(t,_a);for(let o=0,a=_a.length;o<a;o++){const l=_a[o];l.instanceId=r,l.object=this,e.push(l)}_a.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Kc(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}Jv.prototype.isInstancedMesh=!0;class Us extends Ee{constructor(t){super();this.type="LineBasicMaterial",this.color=new Et(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}Us.prototype.isLineBasicMaterial=!0;const zd=new R,kd=new R,Ud=new Ft,bc=new Bs,xa=new Os;class Oh extends ne{constructor(t=new le,e=new Us){super();this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)zd.fromBufferAttribute(e,i-1),kd.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=zd.distanceTo(kd);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(i),xa.radius+=r,t.ray.intersectsSphere(xa)===!1)return;Ud.copy(i).invert(),bc.copy(t.ray).applyMatrix4(Ud);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,h=new R,u=new R,d=new R,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let w=_,b=v-1;w<b;w+=f){const x=g.getX(w),E=g.getX(w+1);if(c.fromBufferAttribute(m,x),h.fromBufferAttribute(m,E),bc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(d);D<t.near||D>t.far||e.push({distance:D,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let w=_,b=v-1;w<b;w+=f){if(c.fromBufferAttribute(m,w),h.fromBufferAttribute(m,w+1),bc.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=t.ray.origin.distanceTo(d);E<t.near||E>t.far||e.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Oh.prototype.isLine=!0;const Hd=new R,Vd=new R;class Bh extends Oh{constructor(t,e){super(t,e);this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Hd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hd.distanceTo(Vd);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Bh.prototype.isLineSegments=!0;class Zv extends Oh{constructor(t,e){super(t,e);this.type="LineLoop"}}Zv.prototype.isLineLoop=!0;class Ll extends Ee{constructor(t){super();this.type="PointsMaterial",this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}Ll.prototype.isPointsMaterial=!0;const Gd=new Ft,Qc=new Bs,ya=new Os,va=new R;class lp extends ne{constructor(t=new le,e=new Ll){super();this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;Gd.copy(i).invert(),Qc.copy(t.ray).applyMatrix4(Gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,p=f;g<p;g++){const m=c.getX(g);va.fromBufferAttribute(u,m),Wd(va,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,p=f;g<p;g++)va.fromBufferAttribute(u,g),Wd(va,g,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}lp.prototype.isPoints=!0;function Wd(s,t,e,n,i,r,o){const a=Qc.distanceSqToPoint(s);if(a<e){const l=new R;Qc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Kv extends Fe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c);this.minFilter=o!==void 0?o:sn,this.magFilter=r!==void 0?r:sn,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}Kv.prototype.isVideoTexture=!0;class Qv extends Fe{constructor(t,e,n){super({width:t,height:e});this.format=n,this.magFilter=De,this.minFilter=De,this.generateMipmaps=!1,this.needsUpdate=!0}}Qv.prototype.isFramebufferTexture=!0;class tb extends Fe{constructor(t,e,n,i,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,r,u,d);this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}tb.prototype.isCompressedTexture=!0;class eb extends Fe{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c);this.needsUpdate=!0}}eb.prototype.isCanvasTexture=!0;class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new st:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new R,i=[],r=[],o=[],a=new R,l=new Ft;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Xe(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Xe(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Rl extends Pn{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new st,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Rl.prototype.isEllipseCurve=!0;class cp extends Rl{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o);this.type="ArcCurve"}}cp.prototype.isArcCurve=!0;function zh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ba=new R,wc=new zh,Mc=new zh,Sc=new zh;class hp extends Pn{constructor(t=[],e=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new R){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ba.subVectors(i[0],i[1]).add(i[0]),c=ba);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ba.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ba),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),wc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,p,m),Mc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,p,m),Sc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(wc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Mc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Sc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(wc.calc(l),Mc.calc(l),Sc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new R().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}hp.prototype.isCatmullRomCurve3=!0;function Xd(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function nb(s,t){const e=1-s;return e*e*t}function ib(s,t){return 2*(1-s)*s*t}function rb(s,t){return s*s*t}function uo(s,t,e,n){return nb(s,t)+ib(s,e)+rb(s,n)}function sb(s,t){const e=1-s;return e*e*e*t}function ob(s,t){const e=1-s;return 3*e*e*s*t}function ab(s,t){return 3*(1-s)*s*s*t}function lb(s,t){return s*s*s*t}function fo(s,t,e,n,i){return sb(s,t)+ob(s,e)+ab(s,n)+lb(s,i)}class kh extends Pn{constructor(t=new st,e=new st,n=new st,i=new st){super();this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,i.x,r.x,o.x,a.x),fo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}kh.prototype.isCubicBezierCurve=!0;class up extends Pn{constructor(t=new R,e=new R,n=new R,i=new R){super();this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(fo(t,i.x,r.x,o.x,a.x),fo(t,i.y,r.y,o.y,a.y),fo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}up.prototype.isCubicBezierCurve3=!0;class Pl extends Pn{constructor(t=new st,e=new st){super();this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new st;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Pl.prototype.isLineCurve=!0;class cb extends Pn{constructor(t=new R,e=new R){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new R){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends Pn{constructor(t=new st,e=new st,n=new st){super();this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(uo(t,i.x,r.x,o.x),uo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Uh.prototype.isQuadraticBezierCurve=!0;class dp extends Pn{constructor(t=new R,e=new R,n=new R){super();this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(uo(t,i.x,r.x,o.x),uo(t,i.y,r.y,o.y),uo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}dp.prototype.isQuadraticBezierCurve3=!0;class Hh extends Pn{constructor(t=[]){super();this.type="SplineCurve",this.points=t}getPoint(t,e=new st){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Xd(a,l.x,c.x,h.x,u.x),Xd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new st().fromArray(i))}return this}}Hh.prototype.isSplineCurve=!0;var fp=Object.freeze({__proto__:null,ArcCurve:cp,CatmullRomCurve3:hp,CubicBezierCurve:kh,CubicBezierCurve3:up,EllipseCurve:Rl,LineCurve:Pl,LineCurve3:cb,QuadraticBezierCurve:Uh,QuadraticBezierCurve3:dp,SplineCurve:Hh});class hb extends Pn{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Pl(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new fp[i.type]().fromJSON(i))}return this}}class th extends hb{constructor(t){super();this.type="Path",this.currentPoint=new st,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Pl(this.currentPoint.clone(),new st(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Uh(this.currentPoint.clone(),new st(t,e),new st(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new kh(this.currentPoint.clone(),new st(t,e),new st(n,i),new st(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Rl(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Vh extends le{constructor(t=1,e=1,n=1,i=8,r=1,o=!1,a=0,l=Math.PI*2){super();this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const p=[],m=n/2;let _=0;v(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function v(){const b=new R,x=new R;let E=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const k=[],F=D/r,y=F*(e-t)+t;for(let C=0;C<=i;C++){const G=C/i,P=G*l+a,z=Math.sin(P),O=Math.cos(P);x.x=y*z,x.y=-F*n+m,x.z=y*O,u.push(x.x,x.y,x.z),b.set(z,A,O).normalize(),d.push(b.x,b.y,b.z),f.push(G,1-F),k.push(g++)}p.push(k)}for(let D=0;D<i;D++)for(let k=0;k<r;k++){const F=p[k][D],y=p[k+1][D],C=p[k+1][D+1],G=p[k][D+1];h.push(F,y,G),h.push(y,C,G),E+=6}c.addGroup(_,E,0),_+=E}function w(b){const x=g,E=new st,A=new R;let D=0;const k=b===!0?t:e,F=b===!0?1:-1;for(let C=1;C<=i;C++)u.push(0,m*F,0),d.push(0,F,0),f.push(.5,.5),g++;const y=g;for(let C=0;C<=i;C++){const P=C/i*l+a,z=Math.cos(P),O=Math.sin(P);A.x=k*O,A.y=m*F,A.z=k*z,u.push(A.x,A.y,A.z),d.push(0,F,0),E.x=z*.5+.5,E.y=O*.5*F+.5,f.push(E.x,E.y),g++}for(let C=0;C<i;C++){const G=x+C,P=y+C;b===!0?h.push(P,P+1,G):h.push(P+1,P,G),D+=3}c.addGroup(_,D,b===!0?1:2),_+=D}}static fromJSON(t){return new Vh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Gh extends Vh{constructor(t=1,e=1,n=8,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a);this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Gh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}new R;new R;new R;new Me;class Go extends th{constructor(t){super(t);this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new th().fromJSON(i))}return this}}const ub={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=pp(s,0,i,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,h,u,d,f;if(n&&(r=gb(s,t,r,e)),s.length>80*e){a=c=s[0],l=h=s[1];for(let g=e;g<i;g+=e)u=s[g],d=s[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return Ao(r,o,e,a,l,f),o}};function pp(s,t,e,n,i){let r,o;if(i===Ab(s,t,e,n)>0)for(r=t;r<e;r+=n)o=$d(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=$d(r,s[r],s[r+1],o);return o&&Dl(o,o.next)&&(Lo(o),o=o.next),o}function qi(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Dl(e,e.next)||pe(e.prev,e,e.next)===0)){if(Lo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ao(s,t,e,n,i,r,o){if(!s)return;!o&&r&&bb(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?fb(s,n,i,r):db(s)){t.push(l.i/e),t.push(s.i/e),t.push(c.i/e),Lo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=pb(qi(s),t,e),Ao(s,t,e,n,i,r,2)):o===2&&mb(s,t,e,n,i,r):Ao(qi(s),t,e,n,i,r,1);break}}}function db(s){const t=s.prev,e=s,n=s.next;if(pe(t,e,n)>=0)return!1;let i=s.next.next;for(;i!==s.prev;){if(ls(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&pe(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function fb(s,t,e,n){const i=s.prev,r=s,o=s.next;if(pe(i,r,o)>=0)return!1;const a=i.x<r.x?i.x<o.x?i.x:o.x:r.x<o.x?r.x:o.x,l=i.y<r.y?i.y<o.y?i.y:o.y:r.y<o.y?r.y:o.y,c=i.x>r.x?i.x>o.x?i.x:o.x:r.x>o.x?r.x:o.x,h=i.y>r.y?i.y>o.y?i.y:o.y:r.y>o.y?r.y:o.y,u=eh(a,l,t,e,n),d=eh(c,h,t,e,n);let f=s.prevZ,g=s.nextZ;for(;f&&f.z>=u&&g&&g.z<=d;){if(f!==s.prev&&f!==s.next&&ls(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&pe(f.prev,f,f.next)>=0||(f=f.prevZ,g!==s.prev&&g!==s.next&&ls(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&pe(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=u;){if(f!==s.prev&&f!==s.next&&ls(i.x,i.y,r.x,r.y,o.x,o.y,f.x,f.y)&&pe(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==s.prev&&g!==s.next&&ls(i.x,i.y,r.x,r.y,o.x,o.y,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function pb(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Dl(i,r)&&mp(i,n,n.next,r)&&Co(i,r)&&Co(r,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(r.i/e),Lo(n),Lo(n.next),n=s=r),n=n.next}while(n!==s);return qi(n)}function mb(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sb(o,a)){let l=gp(o,a);o=qi(o,o.next),l=qi(l,l.next),Ao(o,t,e,n,i,r),Ao(l,t,e,n,i,r);return}a=a.next}o=o.next}while(o!==s)}function gb(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=pp(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Mb(c));for(i.sort(_b),r=0;r<i.length;r++)xb(i[r],e),e=qi(e,e.next);return e}function _b(s,t){return s.x-t.x}function xb(s,t){if(t=yb(s,t),t){const e=gp(t,s);qi(t,t.next),qi(e,e.next)}}function yb(s,t){let e=t;const n=s.x,i=s.y;let r=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r){if(r=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===r)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&ls(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),Co(e,s)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&vb(o,e)))&&(o=e,h=u)),e=e.next;while(e!==a);return o}function vb(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function bb(s,t,e,n){let i=s;do i.z===null&&(i.z=eh(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,wb(i)}function wb(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function eh(s,t,e,n,i){return s=32767*(s-e)*i,t=32767*(t-n)*i,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Mb(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function ls(s,t,e,n,i,r,o,a){return(i-o)*(t-a)-(s-o)*(r-a)>=0&&(s-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(r-a)-(i-o)*(n-a)>=0}function Sb(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Tb(s,t)&&(Co(s,t)&&Co(t,s)&&Eb(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||Dl(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Dl(s,t){return s.x===t.x&&s.y===t.y}function mp(s,t,e,n){const i=Ma(pe(s,t,e)),r=Ma(pe(s,t,n)),o=Ma(pe(e,n,s)),a=Ma(pe(e,n,t));return!!(i!==r&&o!==a||i===0&&wa(s,e,t)||r===0&&wa(s,n,t)||o===0&&wa(e,s,n)||a===0&&wa(e,t,n))}function wa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ma(s){return s>0?1:s<0?-1:0}function Tb(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&mp(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Co(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function Eb(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function gp(s,t){const e=new nh(s.i,s.x,s.y),n=new nh(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function $d(s,t,e,n){const i=new nh(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Lo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function nh(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ab(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class Gi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return Gi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];qd(t),Yd(n,t);let o=t.length;e.forEach(qd);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Yd(n,e[l]);const a=ub.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function qd(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Yd(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Hs extends le{constructor(t=new Go([new st(.5,.5),new st(-.5,.5),new st(-.5,-.5),new st(.5,-.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(r,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const _=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Cb;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let w,b=!1,x,E,A,D;_&&(w=_.getSpacedPoints(h),b=!0,d=!1,x=_.computeFrenetFrames(h,!1),E=new R,A=new R,D=new R),d||(m=0,f=0,g=0,p=0);const k=a.extractPoints(c);let F=k.shape;const y=k.holes;if(!Gi.isClockWise(F)){F=F.reverse();for(let $=0,Z=y.length;$<Z;$++){const it=y[$];Gi.isClockWise(it)&&(y[$]=it.reverse())}}const G=Gi.triangulateShape(F,y),P=F;for(let $=0,Z=y.length;$<Z;$++){const it=y[$];F=F.concat(it)}function z($,Z,it){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(it).add($)}const O=F.length,V=G.length;function N($,Z,it){let mt,ht,It;const dt=$.x-Z.x,wt=$.y-Z.y,Yt=it.x-$.x,Bt=it.y-$.y,T=dt*dt+wt*wt,M=dt*Bt-wt*Yt;if(Math.abs(M)>Number.EPSILON){const X=Math.sqrt(T),et=Math.sqrt(Yt*Yt+Bt*Bt),lt=Z.x-wt/X,ut=Z.y+dt/X,At=it.x-Bt/et,q=it.y+Yt/et,Nt=((At-lt)*Bt-(q-ut)*Yt)/(dt*Bt-wt*Yt);mt=lt+dt*Nt-$.x,ht=ut+wt*Nt-$.y;const zt=mt*mt+ht*ht;if(zt<=2)return new st(mt,ht);It=Math.sqrt(zt/2)}else{let X=!1;dt>Number.EPSILON?Yt>Number.EPSILON&&(X=!0):dt<-Number.EPSILON?Yt<-Number.EPSILON&&(X=!0):Math.sign(wt)===Math.sign(Bt)&&(X=!0),X?(mt=-wt,ht=dt,It=Math.sqrt(T)):(mt=dt,ht=wt,It=Math.sqrt(T/2))}return new st(mt/It,ht/It)}const J=[];for(let $=0,Z=P.length,it=Z-1,mt=$+1;$<Z;$++,it++,mt++)it===Z&&(it=0),mt===Z&&(mt=0),J[$]=N(P[$],P[it],P[mt]);const L=[];let Q,nt=J.concat();for(let $=0,Z=y.length;$<Z;$++){const it=y[$];Q=[];for(let mt=0,ht=it.length,It=ht-1,dt=mt+1;mt<ht;mt++,It++,dt++)It===ht&&(It=0),dt===ht&&(dt=0),Q[mt]=N(it[mt],it[It],it[dt]);L.push(Q),nt=nt.concat(Q)}for(let $=0;$<m;$++){const Z=$/m,it=f*Math.cos(Z*Math.PI/2),mt=g*Math.sin(Z*Math.PI/2)+p;for(let ht=0,It=P.length;ht<It;ht++){const dt=z(P[ht],J[ht],mt);Pt(dt.x,dt.y,-it)}for(let ht=0,It=y.length;ht<It;ht++){const dt=y[ht];Q=L[ht];for(let wt=0,Yt=dt.length;wt<Yt;wt++){const Bt=z(dt[wt],Q[wt],mt);Pt(Bt.x,Bt.y,-it)}}}const at=g+p;for(let $=0;$<O;$++){const Z=d?z(F[$],nt[$],at):F[$];b?(A.copy(x.normals[0]).multiplyScalar(Z.x),E.copy(x.binormals[0]).multiplyScalar(Z.y),D.copy(w[0]).add(A).add(E),Pt(D.x,D.y,D.z)):Pt(Z.x,Z.y,0)}for(let $=1;$<=h;$++)for(let Z=0;Z<O;Z++){const it=d?z(F[Z],nt[Z],at):F[Z];b?(A.copy(x.normals[$]).multiplyScalar(it.x),E.copy(x.binormals[$]).multiplyScalar(it.y),D.copy(w[$]).add(A).add(E),Pt(D.x,D.y,D.z)):Pt(it.x,it.y,u/h*$)}for(let $=m-1;$>=0;$--){const Z=$/m,it=f*Math.cos(Z*Math.PI/2),mt=g*Math.sin(Z*Math.PI/2)+p;for(let ht=0,It=P.length;ht<It;ht++){const dt=z(P[ht],J[ht],mt);Pt(dt.x,dt.y,u+it)}for(let ht=0,It=y.length;ht<It;ht++){const dt=y[ht];Q=L[ht];for(let wt=0,Yt=dt.length;wt<Yt;wt++){const Bt=z(dt[wt],Q[wt],mt);b?Pt(Bt.x,Bt.y+w[h-1].y,w[h-1].x+it):Pt(Bt.x,Bt.y,u+it)}}}Rt(),gt();function Rt(){const $=i.length/3;if(d){let Z=0,it=O*Z;for(let mt=0;mt<V;mt++){const ht=G[mt];Ot(ht[2]+it,ht[1]+it,ht[0]+it)}Z=h+m*2,it=O*Z;for(let mt=0;mt<V;mt++){const ht=G[mt];Ot(ht[0]+it,ht[1]+it,ht[2]+it)}}else{for(let Z=0;Z<V;Z++){const it=G[Z];Ot(it[2],it[1],it[0])}for(let Z=0;Z<V;Z++){const it=G[Z];Ot(it[0]+O*h,it[1]+O*h,it[2]+O*h)}}n.addGroup($,i.length/3-$,0)}function gt(){const $=i.length/3;let Z=0;Y(P,Z),Z+=P.length;for(let it=0,mt=y.length;it<mt;it++){const ht=y[it];Y(ht,Z),Z+=ht.length}n.addGroup($,i.length/3-$,1)}function Y($,Z){let it=$.length;for(;--it>=0;){const mt=it;let ht=it-1;ht<0&&(ht=$.length-1);for(let It=0,dt=h+m*2;It<dt;It++){const wt=O*It,Yt=O*(It+1),Bt=Z+mt+wt,T=Z+ht+wt,M=Z+ht+Yt,X=Z+mt+Yt;Dt(Bt,T,M,X)}}}function Pt($,Z,it){l.push($),l.push(Z),l.push(it)}function Ot($,Z,it){ot($),ot(Z),ot(it);const mt=i.length/3,ht=v.generateTopUV(n,i,mt-3,mt-2,mt-1);H(ht[0]),H(ht[1]),H(ht[2])}function Dt($,Z,it,mt){ot($),ot(Z),ot(mt),ot(Z),ot(it),ot(mt);const ht=i.length/3,It=v.generateSideWallUV(n,i,ht-6,ht-3,ht-2,ht-1);H(It[0]),H(It[1]),H(It[3]),H(It[1]),H(It[2]),H(It[3])}function ot($){i.push(l[$*3+0]),i.push(l[$*3+1]),i.push(l[$*3+2])}function H($){r.push($.x),r.push($.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Lb(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new fp[i.type]().fromJSON(i)),new Hs(n,t.options)}}const Cb={generateTopUV:function(s,t,e,n,i){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new st(r,o),new st(a,l),new st(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],p=t[r*3],m=t[r*3+1],_=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new st(o,1-l),new st(c,1-u),new st(d,1-g),new st(p,1-_)]:[new st(a,1-l),new st(h,1-u),new st(f,1-g),new st(m,1-_)]}};function Lb(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wh extends le{constructor(t=new Go([new st(0,.5),new st(-.5,-.5),new st(.5,-.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new de(i,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;Gi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,_=g.length;m<_;m++){const v=g[m];Gi.isClockWise(v)===!0&&(g[m]=v.reverse())}const p=Gi.triangulateShape(f,g);for(let m=0,_=g.length;m<_;m++){const v=g[m];f=f.concat(v)}for(let m=0,_=f.length;m<_;m++){const v=f[m];i.push(v.x,v.y,0),r.push(0,0,1),o.push(v.x,v.y)}for(let m=0,_=p.length;m<_;m++){const v=p[m],w=v[0]+u,b=v[1]+u,x=v[2]+u;n.push(w,b,x),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Rb(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Wh(n,t.curveSegments)}}function Rb(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class Xh extends le{constructor(t=1,e=.4,n=8,i=6,r=Math.PI*2){super();this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new R,u=new R,d=new R;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const p=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(p),u.y=(t+e*Math.cos(m))*Math.sin(p),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(p),h.y=t*Math.sin(p),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const p=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,_=(i+1)*(f-1)+g,v=(i+1)*f+g;o.push(p,m,v),o.push(m,_,v)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}static fromJSON(t){return new Xh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _p extends Ee{constructor(t){super();this.type="ShadowMaterial",this.color=new Et(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}_p.prototype.isShadowMaterial=!0;class xp extends Wn{constructor(t){super(t);this.type="RawShaderMaterial"}}xp.prototype.isRawShaderMaterial=!0;class $h extends Ee{constructor(t){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}$h.prototype.isMeshStandardMaterial=!0;class yp extends $h{constructor(t){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new st(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Xe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}yp.prototype.isMeshPhysicalMaterial=!0;class vp extends Ee{constructor(t){super();this.type="MeshPhongMaterial",this.color=new Et(16777215),this.specular=new Et(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}vp.prototype.isMeshPhongMaterial=!0;class bp extends Ee{constructor(t){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Et(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}bp.prototype.isMeshToonMaterial=!0;class Wo extends Ee{constructor(t){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}Wo.prototype.isMeshNormalMaterial=!0;class wp extends Ee{constructor(t){super();this.type="MeshLambertMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}wp.prototype.isMeshLambertMaterial=!0;class Mp extends Ee{constructor(t){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Et(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ns,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}Mp.prototype.isMeshMatcapMaterial=!0;class Sp extends Us{constructor(t){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Sp.prototype.isLineDashedMaterial=!0;const Pb={ShadowMaterial:_p,SpriteMaterial:Nh,RawShaderMaterial:xp,ShaderMaterial:Wn,PointsMaterial:Ll,MeshPhysicalMaterial:yp,MeshStandardMaterial:$h,MeshPhongMaterial:vp,MeshToonMaterial:bp,MeshNormalMaterial:Wo,MeshLambertMaterial:wp,MeshDepthMaterial:Dh,MeshDistanceMaterial:Ih,MeshBasicMaterial:Tl,MeshMatcapMaterial:Mp,LineDashedMaterial:Sp,LineBasicMaterial:Us,Material:Ee};Ee.fromType=function(s){return new Pb[s]};const ue={arraySlice:function(s,t,e){return ue.isTypedArray(s)?new s.constructor(s.subarray(t,e!==void 0?e:s.length)):s.slice(t,e)},convertArray:function(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)},isTypedArray:function(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)},getKeyframeOrder:function(s){function t(i,r){return s[i]-s[r]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(s,t,e){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=e[r]*t;for(let l=0;l!==t;++l)i[o++]=s[a+l]}return i},flattenJSON:function(s,t,e,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(t.push(r.time),e.push.apply(e,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(t.push(r.time),o.toArray(e,e.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(t.push(r.time),e.push(o)),r=s[i++];while(r!==void 0)},subclip:function(s,t,e,n,i=30){const r=s.clone();r.name=t;const o=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<e||g>=n)){u.push(c.times[f]);for(let p=0;p<h;++p)d.push(c.values[f*h+p])}}u.length!==0&&(c.times=ue.convertArray(u,c.times.constructor),c.values=ue.convertArray(d,c.values.constructor),o.push(c))}r.tracks=o;let a=1/0;for(let l=0;l<r.tracks.length;++l)a>r.tracks[l].times[0]&&(a=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*a);return r.resetDuration(),r},makeClipAdditive:function(s,t=0,e=s,n=30){n<=0&&(n=30);const i=e.tracks.length,r=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(_){return _.name===a.name&&_.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let p;if(r<=a.times[0]){const _=h,v=u-h;p=ue.arraySlice(a.values,_,v)}else if(r>=a.times[g]){const _=g*u+h,v=_+u-h;p=ue.arraySlice(a.values,_,v)}else{const _=a.createInterpolant(),v=h,w=u-h;_.evaluate(r),p=ue.arraySlice(_.resultBuffer,v,w)}l==="quaternion"&&new ln().fromArray(p).normalize().conjugate().toArray(p);const m=c.times.length;for(let _=0;_<m;++_){const v=_*f+d;if(l==="quaternion")ln.multiplyQuaternionsFlat(c.values,v,p,0,c.values,v);else{const w=f-d*2;for(let b=0;b<w;++b)c.values[v+b]-=p[b]}}}return s.blendMode=Hf,s}};class Yi{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,r)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,r,t)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Yi.prototype.beforeStart_=Yi.prototype.copySampleValue_;Yi.prototype.afterEnd_=Yi.prototype.copySampleValue_;class Db extends Yi{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rs,endingEnd:rs}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ss:r=t,a=2*e-n;break;case el:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ss:o=t,l=2*n-e;break;case el:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),p=g*g,m=p*g,_=-d*m+2*d*p-d*g,v=(1+d)*m+(-1.5-2*d)*p+(-.5+d)*g+1,w=(-1-f)*m+(1.5+f)*p+.5*g,b=f*m-f*p;for(let x=0;x!==a;++x)r[x]=_*o[h+x]+v*o[c+x]+w*o[l+x]+b*o[u+x];return r}}class Tp extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Ib extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class si{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ue.convertArray(e,this.TimeBufferType),this.values=ue.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ue.convertArray(t.times,Array),values:ue.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ib(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Tp(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Db(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Qa:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case Wl:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Wl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=ue.arraySlice(n,r,o),this.values=ue.arraySlice(this.values,r*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&ue.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=ue.arraySlice(this.times),e=ue.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Wl,r=t.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const p=e[u+g];if(p!==e[d+g]||p!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=ue.arraySlice(t,0,o),this.values=ue.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=ue.arraySlice(this.times,0),e=ue.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}si.prototype.TimeBufferType=Float32Array;si.prototype.ValueBufferType=Float32Array;si.prototype.DefaultInterpolation=tl;class Vs extends si{}Vs.prototype.ValueTypeName="bool";Vs.prototype.ValueBufferType=Array;Vs.prototype.DefaultInterpolation=Qa;Vs.prototype.InterpolantFactoryMethodLinear=void 0;Vs.prototype.InterpolantFactoryMethodSmooth=void 0;class Ep extends si{}Ep.prototype.ValueTypeName="color";class il extends si{}il.prototype.ValueTypeName="number";class Fb extends Yi{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Xo extends si{InterpolantFactoryMethodLinear(t){return new Fb(this.times,this.values,this.getValueSize(),t)}}Xo.prototype.ValueTypeName="quaternion";Xo.prototype.DefaultInterpolation=tl;Xo.prototype.InterpolantFactoryMethodSmooth=void 0;class Gs extends si{}Gs.prototype.ValueTypeName="string";Gs.prototype.ValueBufferType=Array;Gs.prototype.DefaultInterpolation=Qa;Gs.prototype.InterpolantFactoryMethodLinear=void 0;Gs.prototype.InterpolantFactoryMethodSmooth=void 0;class rl extends si{}rl.prototype.ValueTypeName="vector";class jd{constructor(t,e=-1,n,i=Th){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ei(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(Ob(n[o]).scale(i));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,o=n.length;r!==o;++r)e.push(si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const r=e.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=ue.getKeyframeOrder(l);l=ue.sortedArray(l,1,h),c=ue.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new il(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,p){if(f.length!==0){const m=[],_=[];ue.flattenJSON(f,m,_,g),m.length!==0&&p.push(new u(d,m,_))}},i=[],r=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)f[d[g].morphTargets[p]]=-1;for(const p in f){const m=[],_=[];for(let v=0;v!==d[g].morphTargets.length;++v){const w=d[g];m.push(w.time),_.push(w.morphTarget===p?1:0)}i.push(new il(".morphTargetInfluence["+p+"]",m,_))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(rl,f+".position",d,"pos",i),n(Xo,f+".quaternion",d,"rot",i),n(rl,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Nb(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return il;case"vector":case"vector2":case"vector3":case"vector4":return rl;case"color":return Ep;case"quaternion":return Xo;case"bool":case"boolean":return Vs;case"string":return Gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Ob(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=Nb(s.type);if(s.times===void 0){const e=[],n=[];ue.flattenJSON(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}const Cs={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Bb{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const zb=new Bb;class Qi{constructor(t){this.manager=t!==void 0?t:zb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const di={};class kb extends Qi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Cs.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(di[t]!==void 0){di[t].push({onLoad:e,onProgress:n,onError:i});return}di[t]=[],di[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=di[t],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let p=0;const m=new ReadableStream({start(_){v();function v(){u.read().then(({done:w,value:b})=>{if(w)_.close();else{p+=b.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let E=0,A=h.length;E<A;E++){const D=h[E];D.onProgress&&D.onProgress(x)}_.enqueue(b),v()}})}}});return new Response(m)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Cs.add(t,c);const h=di[t];delete di[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=di[t];if(h===void 0)throw this.manager.itemError(t),c;delete di[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class Ap extends Qi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Cs.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=To("img");function l(){h(),Cs.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Ub extends Qi{constructor(t){super(t)}load(t,e,n,i){const r=new El,o=new Ap(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){r.images[c]=h,a++,a===6&&(r.needsUpdate=!0,e&&e(r))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return r}}class Hb extends Qi{constructor(t){super(t)}load(t,e,n,i){const r=new Fe,o=new Ap(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class ri extends ne{constructor(t,e=1){super();this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}ri.prototype.isLight=!0;class Vb extends ri{constructor(t,e,n){super(t,n);this.type="HemisphereLight",this.position.copy(ne.DefaultUp),this.updateMatrix(),this.groundColor=new Et(e)}copy(t){return ri.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}Vb.prototype.isHemisphereLight=!0;const Jd=new Ft,Zd=new R,Kd=new R;class qh{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Al,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Zd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zd),Kd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kd),e.updateMatrixWorld(),Jd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jd),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Cp extends qh{constructor(){super(new tn(50,1,.5,500));this.focus=1}updateMatrices(t){const e=this.camera,n=jc*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}Cp.prototype.isSpotLightShadow=!0;class Gb extends ri{constructor(t,e,n=0,i=Math.PI/3,r=0,o=1){super(t,e);this.type="SpotLight",this.position.copy(ne.DefaultUp),this.updateMatrix(),this.target=new ne,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.shadow=new Cp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Gb.prototype.isSpotLight=!0;const Qd=new Ft,Qs=new R,Tc=new R;class Lp extends qh{constructor(){super(new tn(90,1,.5,500));this._frameExtents=new st(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Qs),Tc.copy(n.position),Tc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tc),n.updateMatrixWorld(),i.makeTranslation(-Qs.x,-Qs.y,-Qs.z),Qd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd)}}Lp.prototype.isPointLightShadow=!0;class Wb extends ri{constructor(t,e,n=0,i=1){super(t,e);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Lp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}Wb.prototype.isPointLight=!0;class Rp extends qh{constructor(){super(new Rh(-5,5,5,-5,.5,500))}}Rp.prototype.isDirectionalLightShadow=!0;class Xb extends ri{constructor(t,e){super(t,e);this.type="DirectionalLight",this.position.copy(ne.DefaultUp),this.updateMatrix(),this.target=new ne,this.shadow=new Rp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Xb.prototype.isDirectionalLight=!0;class $b extends ri{constructor(t,e){super(t,e);this.type="AmbientLight"}}$b.prototype.isAmbientLight=!0;class qb extends ri{constructor(t,e,n=10,i=10){super(t,e);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}qb.prototype.isRectAreaLight=!0;class Pp{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new R)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*r),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*r)),e.addScaledVector(o[6],.315392*(3*r*r-1)),e.addScaledVector(o[7],1.092548*(n*r)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,r=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*r),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*r),e.addScaledVector(o[6],.743125*r*r-.247708),e.addScaledVector(o[7],2*.429043*n*r),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,r=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*r,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*r,e[6]=.315392*(3*r*r-1),e[7]=1.092548*n*r,e[8]=.546274*(n*n-i*i)}}Pp.prototype.isSphericalHarmonics3=!0;class Yh extends ri{constructor(t=new Pp,e=1){super(void 0,e);this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}Yh.prototype.isLightProbe=!0;class Yb{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class jb extends le{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}jb.prototype.isInstancedBufferGeometry=!0;class Jb extends Qi{constructor(t){super(t);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Cs.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){Cs.add(t,l),e&&e(l),r.manager.itemEnd(t)}).catch(function(l){i&&i(l),r.manager.itemError(t),r.manager.itemEnd(t)}),r.manager.itemStart(t)}}Jb.prototype.isImageBitmapLoader=!0;let Sa;const Zb={getContext:function(){return Sa===void 0&&(Sa=new(window.AudioContext||window.webkitAudioContext)),Sa},setContext:function(s){Sa=s}};class Kb extends Qi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new kb(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const l=a.slice(0);Zb.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}}class Qb extends Yh{constructor(t,e,n=1){super(void 0,n);const i=new Et().set(t),r=new Et().set(e),o=new R(i.r,i.g,i.b),a=new R(r.r,r.g,r.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}Qb.prototype.isHemisphereLightProbe=!0;class tw extends Yh{constructor(t,e=1){super(void 0,e);const n=new Et().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}tw.prototype.isAmbientLightProbe=!0;class ew{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=tf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=tf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function tf(){return(typeof performance=="undefined"?Date:performance).now()}class nw extends ne{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class iw{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,r,o;switch(e){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,r=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-r,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let r=n,o=i;r!==o;++r)e[r]=e[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){ln.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,r){const o=this._workIndex*r;ln.multiplyQuaternionsFlat(t,o,t,e,t,n),ln.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,r){for(let o=0;o!==r;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const jh="\\[\\]\\.:\\/",rw=new RegExp("["+jh+"]","g"),Jh="[^"+jh+"]",sw="[^"+jh.replace("\\.","")+"]",ow=/((?:WC+[\/:])*)/.source.replace("WC",Jh),aw=/(WCOD+)?/.source.replace("WCOD",sw),lw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),cw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),hw=new RegExp("^"+ow+aw+lw+cw+"$"),uw=["material","materials","bones"];class dw{constructor(t,e,n){const i=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ee{constructor(t,e,n){this.path=e,this.parsedPath=n||ee.parseTrackName(e),this.node=ee.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ee.Composite(t,e,n):new ee(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rw,"")}static parseTrackName(t){const e=hw.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);uw.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let r=e.propertyIndex;if(t||(t=ee.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ee.Composite=dw;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class fw{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const r=e.tracks,o=r.length,a=new Array(o),l={endingStart:rs,endingEnd:rs};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Zg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,r=t._clip.duration,o=r/i,a=i/r;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Hf:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Th:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,r=this._loopCount;const o=n===Kg;if(t===0)return r===-1?i:o&&(r&1)===1?e-i:i;if(n===Jg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=ss,i.endingEnd=ss):(t?i.endingStart=this.zeroSlopeAtStart?ss:rs:i.endingStart=el,e?i.endingEnd=this.zeroSlopeAtEnd?ss:rs:i.endingEnd=el)}_scheduleFading(t,e,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=e,a[1]=r+t,l[1]=n,this}}class pw extends Rr{constructor(t){super();this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,r=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const p=e&&e._propertyBindings[u].binding.parsedPath;g=new iw(ee.create(n,f,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,r=this._actionsByClip[i];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,r=this._actionsByClip;let o=r[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,r=e[i];t._cacheIndex=i,e[i]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Tp(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,r=e[i];t.__cacheIndex=i,e[i]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const i=e||this._root,r=i.uuid;let o=typeof t=="string"?jd.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Th),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new fw(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(t,e){const n=e||this._root,i=n.uuid,r=typeof t=="string"?jd.findByName(n,t):t,o=r?r.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,r=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[e];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}pw.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class mw extends Vo{constructor(t,e,n=1){super(t,e);this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}mw.prototype.isInstancedInterleavedBuffer=!0;const Ni=new R,Ta=new Ft,Ec=new Ft;class gw extends Bh{constructor(t){const e=Dp(t),n=new le,i=[],r=[],o=new Et(0,0,1),a=new Et(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),r.push(o.r,o.g,o.b),r.push(a.r,a.g,a.b))}n.setAttribute("position",new de(i,3)),n.setAttribute("color",new de(r,3));const l=new Us({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Ec.copy(this.root.matrixWorld).invert();for(let r=0,o=0;r<e.length;r++){const a=e[r];a.parent&&a.parent.isBone&&(Ta.multiplyMatrices(Ec,a.matrixWorld),Ni.setFromMatrixPosition(Ta),i.setXYZ(o,Ni.x,Ni.y,Ni.z),Ta.multiplyMatrices(Ec,a.parent.matrixWorld),Ni.setFromMatrixPosition(Ta),i.setXYZ(o+1,Ni.x,Ni.y,Ni.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function Dp(s){const t=[];s.isBone===!0&&t.push(s);for(let e=0;e<s.children.length;e++)t.push.apply(t,Dp(s.children[e]));return t}class _w extends Bh{constructor(t=10,e=10,n=4473924,i=8947848){n=new Et(n),i=new Et(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=d===r?n:i;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}const h=new le;h.setAttribute("position",new de(l,3)),h.setAttribute("color",new de(c,3));const u=new Us({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}const jn=new Uint32Array(512),Jn=new Uint32Array(512);for(let s=0;s<256;++s){const t=s-127;t<-27?(jn[s]=0,jn[s|256]=32768,Jn[s]=24,Jn[s|256]=24):t<-14?(jn[s]=1024>>-t-14,jn[s|256]=1024>>-t-14|32768,Jn[s]=-t-1,Jn[s|256]=-t-1):t<=15?(jn[s]=t+15<<10,jn[s|256]=t+15<<10|32768,Jn[s]=13,Jn[s|256]=13):t<128?(jn[s]=31744,jn[s|256]=64512,Jn[s]=24,Jn[s|256]=24):(jn[s]=31744,jn[s|256]=64512,Jn[s]=13,Jn[s|256]=13)}const Ip=new Uint32Array(2048),$o=new Uint32Array(64),xw=new Uint32Array(64);for(let s=1;s<1024;++s){let t=s<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Ip[s]=t|e}for(let s=1024;s<2048;++s)Ip[s]=939524096+(s-1024<<13);for(let s=1;s<31;++s)$o[s]=s<<23;$o[31]=1199570944;$o[32]=2147483648;for(let s=33;s<63;++s)$o[s]=2147483648+(s-32<<23);$o[63]=3347054592;for(let s=1;s<64;++s)s!==32&&(xw[s]=1024);Pn.create=function(s,t){return console.log("THREE.Curve.create() has been deprecated"),s.prototype=Object.create(Pn.prototype),s.prototype.constructor=s,s.prototype.getPoint=t,s};th.prototype.fromPoints=function(s){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(s)};_w.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};gw.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Qi.prototype.extractUrlBase=function(s){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),Yb.extractUrlBase(s)};Qi.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};$n.prototype.center=function(s){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(s)};$n.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};$n.prototype.isIntersectionBox=function(s){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};$n.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};$n.prototype.size=function(s){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(s)};Dr.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Os.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Al.prototype.setFromMatrix=function(s){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(s)};ke.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};ke.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ke.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ke.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),s.applyMatrix3(this)};ke.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ke.prototype.getInverse=function(s){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};Ft.prototype.extractPosition=function(s){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(s)};Ft.prototype.flattenToArrayOffset=function(s,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(s,t)};Ft.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new R().setFromMatrixColumn(this,3)};Ft.prototype.setRotationFromQuaternion=function(s){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(s)};Ft.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};Ft.prototype.multiplyVector3=function(s){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Ft.prototype.multiplyVector4=function(s){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Ft.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};Ft.prototype.rotateAxis=function(s){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),s.transformDirection(this)};Ft.prototype.crossVector=function(s){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Ft.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};Ft.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};Ft.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};Ft.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};Ft.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};Ft.prototype.applyToBufferAttribute=function(s){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),s.applyMatrix4(this)};Ft.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};Ft.prototype.makeFrustum=function(s,t,e,n,i,r){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(s,t,n,e,i,r)};Ft.prototype.getInverse=function(s){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(s).invert()};gi.prototype.isIntersectionLine=function(s){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(s)};ln.prototype.multiplyVector3=function(s){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),s.applyQuaternion(this)};ln.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};Bs.prototype.isIntersectionBox=function(s){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(s)};Bs.prototype.isIntersectionPlane=function(s){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(s)};Bs.prototype.isIntersectionSphere=function(s){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(s)};Me.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};Me.prototype.barycoordFromPoint=function(s,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(s,t)};Me.prototype.midpoint=function(s){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(s)};Me.prototypenormal=function(s){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(s)};Me.prototype.plane=function(s){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(s)};Me.barycoordFromPoint=function(s,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),Me.getBarycoord(s,t,e,n,i)};Me.normal=function(s,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),Me.getNormal(s,t,e,n)};Go.prototype.extractAllPoints=function(s){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(s)};Go.prototype.extrude=function(s){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Hs(this,s)};Go.prototype.makeGeometry=function(s){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Wh(this,s)};st.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};st.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};st.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};R.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};R.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};R.prototype.getPositionFromMatrix=function(s){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(s)};R.prototype.getScaleFromMatrix=function(s){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(s)};R.prototype.getColumnFromMatrix=function(s,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,s)};R.prototype.applyProjection=function(s){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(s)};R.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};R.prototype.distanceToManhattan=function(s){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(s)};R.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};se.prototype.fromAttribute=function(s,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(s,t,e)};se.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};ne.prototype.getChildByName=function(s){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(s)};ne.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};ne.prototype.translate=function(s,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,s)};ne.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};ne.prototype.applyMatrix=function(s){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(ne.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(s){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=s}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Ue.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(Ue.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Qg},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});ap.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};tn.prototype.setLens=function(s,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(s)};Object.defineProperties(ri.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(s){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=s}},shadowCameraLeft:{set:function(s){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=s}},shadowCameraRight:{set:function(s){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=s}},shadowCameraTop:{set:function(s){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=s}},shadowCameraBottom:{set:function(s){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=s}},shadowCameraNear:{set:function(s){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=s}},shadowCameraFar:{set:function(s){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=s}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(s){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=s}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(s){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=s}},shadowMapHeight:{set:function(s){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=s}}});Object.defineProperties(Se.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===nl},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(nl)}}});Se.prototype.setDynamic=function(s){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?nl:So),this};Se.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},Se.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};le.prototype.addIndex=function(s){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(s)};le.prototype.addAttribute=function(s,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(s,new Se(arguments[1],arguments[2]))):s==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(s,t)};le.prototype.addDrawCall=function(s,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(s,t)};le.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};le.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};le.prototype.removeAttribute=function(s){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(s)};le.prototype.applyMatrix=function(s){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(s)};Object.defineProperties(le.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Vo.prototype.setDynamic=function(s){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(s===!0?nl:So),this};Vo.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Hs.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Hs.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Hs.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};Fh.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(Ee.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new Et}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(s){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=s===Bf}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(s){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=s}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Wn.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(s){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=s}}});ie.prototype.clearTarget=function(s,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(s),this.clear(t,e,n)};ie.prototype.animate=function(s){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(s)};ie.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};ie.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};ie.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};ie.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};ie.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};ie.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};ie.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};ie.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};ie.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};ie.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};ie.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};ie.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};ie.prototype.enableScissorTest=function(s){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(s)};ie.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};ie.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};ie.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};ie.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};ie.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};ie.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};ie.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};ie.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};ie.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};ie.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(ie.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=s}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(s){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=s}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(s){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=s===!0?he:Mi}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(ip.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(xn.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=s}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(s){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=s}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=s}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(s){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=s}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(s){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=s}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(s){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=s}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(s){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=s}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(s){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=s}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(s){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=s}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(s){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=s}}});nw.prototype.load=function(s){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new Kb().load(s,function(n){t.setBuffer(n)}),this};Ch.prototype.updateCubeMap=function(s,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(s,t)};Ch.prototype.clear=function(s,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(s,t,e,n)};Pr.crossOrigin=void 0;Pr.loadTexture=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new Hb;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Pr.loadTextureCube=function(s,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new Ub;i.setCrossOrigin(this.crossOrigin);const r=i.load(s,e,void 0,n);return t&&(r.mapping=t),r};Pr.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Pr.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);function pi(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Fp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.10.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var yn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ls={duration:.5,overwrite:!1,delay:0},Zh,An=1e8,ae=1/An,ih=Math.PI*2,yw=ih/4,vw=0,Np=Math.sqrt,bw=Math.cos,ww=Math.sin,Ne=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},Si=function(t){return typeof t=="number"},Kh=function(t){return typeof t=="undefined"},Ti=function(t){return typeof t=="object"},cn=function(t){return t!==!1},Op=function(){return typeof window!="undefined"},Ea=function(t){return Ie(t)||Ne(t)},Bp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Ye=Array.isArray,rh=/(?:-?\.?\d|\.)+/gi,zp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ac=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kp=/[+-]=-?[.\d]+/,Up=/[^,'"\[\]\s]+/gi,Mw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fe,Zn,sh,Qh,vn={},sl={},Hp,Vp=function(t){return(sl=Ar(t,vn))&&Xn},tu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ol=function(t,e){return!e&&console.warn(t)},Gp=function(t,e){return t&&(vn[t]=e)&&sl&&(sl[t]=e)||vn},Ro=function(){return 0},eu={},Wi=[],oh={},Wp,gn={},Cc={},ef=30,Va=[],nu="",iu=function(t){var e=t[0],n,i;if(Ti(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Va.length;i--&&!Va[i].targetTest(e););n=Va[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new dm(t[i],n)))||t.splice(i,1);return t},yr=function(t){return t._gsap||iu(Cn(t))[0]._gsap},Xp=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():Kh(n)&&t.getAttribute&&t.getAttribute(e)||n},hn=function(t,e){return(t=t.split(",")).forEach(e)||t},_e=function(t){return Math.round(t*1e5)/1e5||0},$e=function(t){return Math.round(t*1e7)/1e7||0},_s=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},Sw=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},al=function(){var t=Wi.length,e=Wi.slice(0),n,i;for(oh={},Wi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},$p=function(t,e,n,i){Wi.length&&al(),t.render(e,n,i),Wi.length&&al()},qp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Up).length<2?e:Ne(t)?t.trim():t},Yp=function(t){return t},Dn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Tw=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ar=function(t,e){for(var n in e)t[n]=e[n];return t},nf=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ti(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},ll=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},po=function(t){var e=t.parent||fe,n=t.keyframes?Tw(Ye(t.keyframes)):Dn;if(cn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},Ew=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},jp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Il=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},bi=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},vr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Aw=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Cw=function s(t){return!t||t._ts&&s(t.parent)},rf=function(t){return t._repeat?Rs(t._tTime,t=t.duration()+t._rDelay)*t:0},Rs=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},cl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Fl=function(t){return t._end=$e(t._start+(t._tDur/Math.abs(t._ts||t._rts||ae)||0))},ru=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=$e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Fl(t),n._dirty||vr(n,t)),t},Jp=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=cl(t.rawTime(),e),(!e._dur||qo(0,e.totalDuration(),n)-e._tTime>ae)&&e.render(n,!0)),vr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ae}},ti=function(t,e,n,i){return e.parent&&bi(e),e._start=$e((Si(n)?n:n||t!==fe?wn(t,n,e):t._time)+e._delay),e._end=$e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),jp(t,e,"_first","_last",t._sort?"_start":0),ah(e)||(t._recent=e),i||Jp(t,e),t},Zp=function(t,e){return(vn.ScrollTrigger||tu("scrollTrigger",e))&&vn.ScrollTrigger.create(e,t)},Kp=function(t,e,n,i){if(ou(t,e),!t._initted)return 1;if(!n&&t._pt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Wp!==_n.frame)return Wi.push(t),t._lazy=[e,i],1},Lw=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ah=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Rw=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&Lw(t)&&!(!t._initted&&ah(t))||(t._ts<0||t._dp._ts<0)&&!ah(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=qo(0,t._tDur,e),h=Rs(l,a),t._yoyo&&h&1&&(o=1-o),h!==Rs(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||i||t._zTime===ae||!e&&t._zTime){if(!t._initted&&Kp(t,e,i,n))return;for(u=t._zTime,t._zTime=e||(n?ae:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!n&&Ln(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&bi(t,1),n||(Ln(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Pw=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ps=function(t,e,n,i){var r=t._repeat,o=$e(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:$e(o*(r+1)+t._rDelay*r):o,a>0&&!i?ru(t,t._tTime=t._tDur*a):t.parent&&Fl(t),n||vr(t.parent,t),t},sf=function(t){return t instanceof on?vr(t):Ps(t,t._dur)},Dw={_start:0,endTime:Ro,totalDuration:Ro},wn=function s(t,e,n){var i=t.labels,r=t._recent||Dw,o=t.duration()>=An?r.endTime(!1):t._dur,a,l,c;return Ne(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Ye(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},mo=function(t,e,n){var i=Si(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=cn(l.vars.inherit)&&l.parent;o.immediateRender=cn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Pe(e[0],o,e[r+1])},tr=function(t,e){return t||t===0?e(t):e},qo=function(t,e,n){return n<t?t:n>e?e:n},qe=function(t,e){return!Ne(t)||!(e=Mw.exec(t))?"":e[1]},Iw=function(t,e,n){return tr(n,function(i){return qo(t,e,i)})},lh=[].slice,Qp=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==Zn},Fw=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Ne(i)&&!e||Qp(i,1)?(r=n).push.apply(r,Cn(i)):n.push(i)})||n},Cn=function(t,e,n){return Ne(t)&&!n&&(sh||!Ds())?lh.call((e||Qh).querySelectorAll(t),0):Ye(t)?Fw(t,n):Qp(t)?lh.call(t,0):t?[t]:[]},Nw=function(t){return t=Cn(t)[0]||ol("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Cn(e,n.querySelectorAll?n:n===t?ol("Invalid scope")||Qh.createElement("div"):t)}},tm=function(t){return t.sort(function(){return .5-Math.random()})},em=function(t){if(Ie(t))return t;var e=Ti(t)?t:{each:t},n=br(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return Ne(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,g){var p=(g||e).length,m=o[p],_,v,w,b,x,E,A,D,k;if(!m){if(k=e.grid==="auto"?0:(e.grid||[1,An])[1],!k){for(A=-An;A<(A=g[k++].getBoundingClientRect().left)&&k<p;);k--}for(m=o[p]=[],_=l?Math.min(k,p)*h-.5:i%k,v=k===An?0:l?p*u/k-.5:i/k|0,A=0,D=An,E=0;E<p;E++)w=E%k-_,b=v-(E/k|0),m[E]=x=c?Math.abs(c==="y"?b:w):Np(w*w+b*b),x>A&&(A=x),x<D&&(D=x);i==="random"&&tm(m),m.max=A-D,m.min=D,m.v=p=(parseFloat(e.amount)||parseFloat(e.each)*(k>p?p-1:c?c==="y"?p/k:k:Math.max(k,p/k))||0)*(i==="edges"?-1:1),m.b=p<0?r-p:r,m.u=qe(e.amount||e.each)||0,n=n&&p<0?cm(n):n}return p=(m[d]-m.min)/m.max||0,$e(m.b+(n?n(p):p)*m.v)+m.u}},ch=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Math.round(parseFloat(n)/t)*t*e;return(i-i%1)/e+(Si(n)?0:qe(n))}},nm=function(t,e){var n=Ye(t),i,r;return!n&&Ti(t)&&(i=n=t.radius||An,t.values?(t=Cn(t.values),(r=!Si(t[0]))&&(i*=i)):t=ch(t.increment)),tr(e,n?Ie(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=An,h=0,u=t.length,d,f;u--;)r?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,r||h===o||Si(o)?h:h+qe(o)}:ch(t))},im=function(t,e,n,i){return tr(Ye(t)?!e:n===!0?!!(n=0):!i,function(){return Ye(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Ow=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},Bw=function(t,e){return function(n){return t(parseFloat(n))+(e||qe(n))}},zw=function(t,e,n){return sm(t,e,0,1,n)},rm=function(t,e,n){return tr(n,function(i){return t[~~e(i)]})},kw=function s(t,e,n){var i=e-t;return Ye(t)?rm(t,s(0,t.length),e):tr(n,function(r){return(i+(r-t)%i)%i+t})},Uw=function s(t,e,n){var i=e-t,r=i*2;return Ye(t)?rm(t,s(0,t.length-1),e):tr(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Po=function(t){for(var e=0,n="",i,r,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,o-i-7).match(a?Up:rh),n+=t.substr(e,i-e)+im(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},sm=function(t,e,n,i,r){var o=e-t,a=i-n;return tr(r,function(l){return n+((l-t)/o*a||0)})},Hw=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=Ne(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Ye(t)&&!Ye(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(g){g*=u;var p=Math.min(d,~~g);return h[p](g-p)},n=e}else i||(t=Ar(Ye(t)?[]:{},t));if(!h){for(l in e)su.call(a,t,l,"get",e[l]);r=function(g){return cu(g,a)||(o?t.p:t)}}}return tr(n,r)},of=function(t,e,n){var i=t.labels,r=An,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ln=function(t,e,n){var i=t.vars,r=i[e],o,a;if(!!r)return o=i[e+"Params"],a=i.callbackScope||t,n&&Wi.length&&al(),o?r.apply(a,o):r.call(a)},so=function(t){return bi(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Ln(t,"onInterrupt"),t},hs,Vw=function(t){t=!t.name&&t.default||t;var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ro,render:cu,add:su,kill:rM,modifier:iM,rawVars:0},o={targetTest:0,get:0,getSetter:lu,aliases:{},register:0};if(Ds(),t!==i){if(gn[e])return;Dn(i,Dn(ll(t,r),o)),Ar(i.prototype,Ar(r,ll(t,o))),gn[i.prop=e]=i,t.targetTest&&(Va.push(i),eu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Gp(e,i),t.register&&t.register(Xn,i,un)},oe=255,oo={aqua:[0,oe,oe],lime:[0,oe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,oe],navy:[0,0,128],white:[oe,oe,oe],olive:[128,128,0],yellow:[oe,oe,0],orange:[oe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[oe,0,0],pink:[oe,192,203],cyan:[0,oe,oe],transparent:[oe,oe,oe,0]},Lc=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*oe+.5|0},om=function(t,e,n){var i=t?Si(t)?[t>>16,t>>8&oe,t&oe]:0:oo.black,r,o,a,l,c,h,u,d,f,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),oo[t])i=oo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&oe,i&oe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&oe,t&oe]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(rh),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Lc(l+1/3,r,o),i[1]=Lc(l,r,o),i[2]=Lc(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(zp),n&&i.length<4&&(i[3]=1),i}else i=t.match(rh)||oo.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/oe,o=i[1]/oe,a=i[2]/oe,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===r?(o-a)/f+(o<a?6:0):u===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},am=function(t){var e=[],n=[],i=-1;return t.split(Xi).forEach(function(r){var o=r.match(cs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},af=function(t,e,n){var i="",r=(t+i).match(Xi),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=om(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=am(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Xi,"1").split(cs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Xi),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},Xi=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in oo)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),Gw=/hsl[a]?\(/,lm=function(t){var e=t.join(" "),n;if(Xi.lastIndex=0,Xi.test(e))return n=Gw.test(e),t[1]=af(t[1],n),t[0]=af(t[0],n,am(t[1])),!0},Do,_n=function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,f,g=function p(m){var _=s()-i,v=m===!0,w,b,x,E;if(_>t&&(n+=_-e),i+=_,x=i-n,w=x-o,(w>0||v)&&(E=++u.frame,d=x-u.time*1e3,u.time=x=x/1e3,o+=w+(w>=r?4:r-w),b=1),v||(l=c(p)),b)for(f=0;f<a.length;f++)a[f](x,d,E,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Hp&&(!sh&&Op()&&(Zn=sh=window,Qh=Zn.document||{},vn.gsap=Xn,(Zn.gsapVersions||(Zn.gsapVersions=[])).push(Xn.version),Vp(sl||Zn.GreenSockGlobals||!Zn.gsap&&Zn||{}),h=Zn.requestAnimationFrame),l&&u.sleep(),c=h||function(m){return setTimeout(m,o-u.time*1e3+1|0)},Do=1,g(2))},sleep:function(){(h?Zn.cancelAnimationFrame:clearTimeout)(l),Do=0,c=Ro},lagSmoothing:function(m,_){t=m||1/ae,e=Math.min(_,t,0)},fps:function(m){r=1e3/(m||240),o=u.time*1e3+r},add:function(m,_,v){var w=_?function(b,x,E,A){m(b,x,E,A),u.remove(w)}:m;return u.remove(m),a[v?"unshift":"push"](w),Ds(),w},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},u}(),Ds=function(){return!Do&&_n.wake()},qt={},Ww=/^[\d.\-M][\d.\-,\s]/,Xw=/["']/g,$w=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Xw,"").trim():+c,i=l.substr(a+1).trim();return e},qw=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Yw=function(t){var e=(t+"").split("("),n=qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[$w(e[1])]:qw(t).split(",").map(qp)):qt._CE&&Ww.test(t)?qt._CE("",t):n},cm=function(t){return function(e){return 1-t(1-e)}},hm=function s(t,e){for(var n=t._first,i;n;)n instanceof on?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},br=function(t,e){return t&&(Ie(t)?t:qt[t]||Yw(t))||e},Ir=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return hn(t,function(a){qt[a]=vn[a]=r,qt[o=a.toLowerCase()]=n;for(var l in r)qt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[a+"."+l]=r[l]}),r},um=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Rc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ih*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ww((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:um(a);return r=ih/r,l.config=function(c,h){return s(t,c,h)},l},Pc=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:um(n);return i.config=function(r){return s(t,r)},i};hn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Ir(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;Ir("Elastic",Rc("in"),Rc("out"),Rc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Ir("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Ir("Expo",function(s){return s?Math.pow(2,10*(s-1)):0});Ir("Circ",function(s){return-(Np(1-s*s)-1)});Ir("Sine",function(s){return s===1?1:-bw(s*yw)+1});Ir("Back",Pc("in"),Pc("out"),Pc());qt.SteppedEase=qt.steps=vn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ae;return function(a){return((i*qo(0,o,a)|0)+r)*n}}};Ls.ease=qt["quad.out"];hn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return nu+=s+","+s+"Params,"});var dm=function(t,e){this.id=vw++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xp,this.set=e?e.getSetter:lu},Io=function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ps(this,+e.duration,1,1),this.data=e.data,Do||_n.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ps(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Ds(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ru(this,n),!r._dp||r.parent||Jp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ti(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ae||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),$p(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+rf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+rf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Rs(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-ae?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?cl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ae?0:this._rts,this.totalTime(qo(-this._delay,this._tDur,i),!0),Fl(this),Aw(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ds(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ae&&(this._tTime-=ae)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ti(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(cn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cl(i.rawTime(n),this):this._tTime:this._tTime},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,sf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(wn(this,n),cn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,cn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ae:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ae,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ae)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(r){var o=Ie(n)?n:Yp,a=function(){var c=i.then;i.then=null,Ie(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),r(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){so(this)},s}();Dn(Io.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ae,_prom:0,_ps:!1,_rts:1});var on=function(s){Fp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=cn(n.sortChildren),fe&&ti(n.parent||fe,pi(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Zp(pi(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return mo(0,arguments,this),this},e.from=function(i,r,o){return mo(1,arguments,this),this},e.fromTo=function(i,r,o,a){return mo(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,po(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Pe(i,r,wn(this,o),1),this},e.call=function(i,r,o){return ti(this,Pe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Pe(i,o,wn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,po(o).immediateRender=cn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,po(a).immediateRender=cn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:$e(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,g,p,m,_,v,w,b,x,E,A;if(this!==fe&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,b=this._start,w=this._ts,_=!w,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(d=$e(h%m),h===l?(p=this._repeat,d=c):(p=~~(h/m),p&&p===h/m&&(d=c,p--),d>c&&(d=c)),x=Rs(this._tTime,m),!a&&this._tTime&&x!==p&&(x=p),E&&p&1&&(d=c-d,A=1),p!==x&&!this._lock){var D=E&&x&1,k=D===(E&&p&1);if(p<x&&(D=!D),a=D?0:c,this._lock=1,this.render(a||(A?0:$e(p*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,k&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;hm(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Pw(this,$e(a),$e(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!r&&(Ln(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!_){v=0,g&&(h+=this._zTime=-ae);break}}f=g}else{f=this._last;for(var F=i<0?i:d;f;){if(g=f._prev,(f._act||F<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(F-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(F-f._start)*f._ts,r,o),d!==this._time||!this._ts&&!_){v=0,g&&(h+=this._zTime=F?-ae:ae);break}}f=g}}if(v&&!r&&(this.pause(),v.render(d>=a?0:-ae)._zTime=d>=a?1:-1,this._ts))return this._start=b,Fl(this),this.render(i,r,o);this._onUpdate&&!r&&Ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(b===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&bi(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Ln(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Si(r)||(r=wn(this,r,i)),!(i instanceof Io)){if(Ye(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Ne(i))return this.addLabel(i,r);if(Ie(i))i=Pe.delayedCall(0,i);else return this}return this!==i?ti(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-An);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Pe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Ne(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(Il(this,i),i===this._recent&&(this._recent=this._last),vr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$e(_n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=wn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Pe.delayedCall(0,r||Ro,o);return a.data="isPause",this._hasPause=1,ti(this,a,wn(this,i))},e.removePause=function(i){var r=this._first;for(i=wn(this,i);r;)r._start===i&&r.data==="isPause"&&bi(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Bi!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Cn(i),l=this._first,c=Si(r),h;l;)l instanceof Pe?Sw(l._targets,a)&&(c?(!Bi||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=wn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,g=Pe.to(o,Dn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ae,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ps(g,m,0,1).render(g._time,!0,!0),f=1}h&&h.apply(g,u||[])}},r));return d?g.render(0):g},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,Dn({startAt:{time:wn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),of(this,wn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),of(this,wn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ae)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return vr(this)},e.invalidate=function(){var i=this._first;for(this._lock=0;i;)i.invalidate(),i=i._next;return s.prototype.invalidate.call(this)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),vr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=An,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ti(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Ps(o,o===fe&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(fe._ts&&($p(fe,cl(i,fe)),Wp=_n.frame),_n.frame>=ef){ef+=yn.autoSleep||120;var r=fe._first;if((!r||!r._ts)&&yn.autoSleep&&_n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||_n.sleep()}}},t}(Io);Dn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var jw=function(t,e,n,i,r,o,a){var l=new un(this._pt,t,e,0,1,xm,null,r),c=0,h=0,u,d,f,g,p,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Po(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),d=n.match(Ac)||[];u=Ac.exec(i);)g=u[0],p=i.substring(c,u.index),f?f=(f+1)%5:p.substr(-5)==="rgba("&&(f=1),g!==d[h++]&&(m=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:m,c:g.charAt(1)==="="?_s(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Ac.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(kp.test(i)||_)&&(l.e=0),this._pt=l,l},su=function(t,e,n,i,r,o,a,l,c){Ie(i)&&(i=i(r||0,t,o));var h=t[e],u=n!=="get"?n:Ie(h)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=Ie(h)?c?tM:gm:au,f;if(Ne(i)&&(~i.indexOf("random(")&&(i=Po(i)),i.charAt(1)==="="&&(f=_s(u,i)+(qe(u)||0),(f||f===0)&&(i=f))),u!==i||hh)return!isNaN(u*i)&&i!==""?(f=new un(this._pt,t,e,+u||0,i-(u||0),typeof h=="boolean"?nM:_m,0,d),c&&(f.fp=c),a&&f.modifier(a,this,t),this._pt=f):(!h&&!(e in t)&&tu(e,i),jw.call(this,t,e,u,i,d,l||yn.stringFilter,c))},Jw=function(t,e,n,i,r){if(Ie(t)&&(t=go(t,r,e,n,i)),!Ti(t)||t.style&&t.nodeType||Ye(t)||Bp(t))return Ne(t)?go(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=go(t[a],r,e,n,i);return o},fm=function(t,e,n,i,r,o){var a,l,c,h;if(gn[t]&&(a=new gn[t]).init(r,a.rawVars?e[t]:Jw(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new un(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==hs))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Bi,hh,ou=function s(t,e){var n=t.vars,i=n.ease,r=n.startAt,o=n.immediateRender,a=n.lazy,l=n.onUpdate,c=n.onUpdateParams,h=n.callbackScope,u=n.runBackwards,d=n.yoyoEase,f=n.keyframes,g=n.autoRevert,p=t._dur,m=t._startAt,_=t._targets,v=t.parent,w=v&&v.data==="nested"?v.parent._targets:_,b=t._overwrite==="auto"&&!Zh,x=t.timeline,E,A,D,k,F,y,C,G,P,z,O,V,N;if(x&&(!f||!i)&&(i="none"),t._ease=br(i,Ls.ease),t._yEase=d?cm(br(d===!0?i:d,Ls.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!x&&!!n.runBackwards,!x||f&&!n.stagger){if(G=_[0]?yr(_[0]).harness:0,V=G&&n[G.prop],E=ll(n,eu),m&&(bi(m.render(-1,!0)),m._lazy=0),r)if(bi(t._startAt=Pe.set(_,Dn({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:cn(a),startAt:null,delay:0,onUpdate:l,onUpdateParams:c,callbackScope:h,stagger:0},r))),e<0&&!o&&!g&&t._startAt.render(-1,!0),o){if(e>0&&!g&&(t._startAt=0),p&&e<=0){e&&(t._zTime=e);return}}else g===!1&&(t._startAt=0);else if(u&&p){if(m)!g&&(t._startAt=0);else if(e&&(o=!1),D=Dn({overwrite:!1,data:"isFromStart",lazy:o&&cn(a),immediateRender:o,stagger:0,parent:v},E),V&&(D[G.prop]=V),bi(t._startAt=Pe.set(_,D)),e<0&&t._startAt.render(-1,!0),t._zTime=e,!o)s(t._startAt,ae);else if(!e)return}for(t._pt=t._ptCache=0,a=p&&cn(a)||a&&!p,A=0;A<_.length;A++){if(F=_[A],C=F._gsap||iu(_)[A]._gsap,t._ptLookup[A]=z={},oh[C.id]&&Wi.length&&al(),O=w===_?A:w.indexOf(F),G&&(P=new G).init(F,V||E,t,O,w)!==!1&&(t._pt=k=new un(t._pt,F,P.name,0,1,P.render,P,0,P.priority),P._props.forEach(function(J){z[J]=k}),P.priority&&(y=1)),!G||V)for(D in E)gn[D]&&(P=fm(D,E,t,O,F,w))?P.priority&&(y=1):z[D]=k=su.call(t,F,D,"get",E[D],O,w,0,n.stringFilter);t._op&&t._op[A]&&t.kill(F,t._op[A]),b&&t._pt&&(Bi=t,fe.killTweensOf(F,z,t.globalTime(e)),N=!t.parent,Bi=0),t._pt&&a&&(oh[C.id]=1)}y&&ym(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!N,f&&e<=0&&x.render(An,!0,!0)},Zw=function(t,e,n,i,r,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,h,u;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,u=t._targets.length;u--;){if(c=h[u][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e;)c=c._next;if(!c)return hh=1,t.vars[e]="+=0",ou(t,a),hh=0,1;l.push(c)}for(u=l.length;u--;)c=l[u],c.s=(i||i===0)&&!r?i:c.s+(i||0)+o*c.c,c.c=n-c.s,c.e&&(c.e=_e(n)+qe(c.e)),c.b&&(c.b=c.s+qe(c.b))},Kw=function(t,e){var n=t[0]?yr(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Ar({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Qw=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Ye(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},go=function(t,e,n,i,r){return Ie(t)?t.call(e,n,i,r):Ne(t)&&~t.indexOf("random(")?Po(t):t},pm=nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mm={};hn(pm+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return mm[s]=1});var Pe=function(s){Fp(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:po(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,v=i.parent||fe,w=(Ye(n)||Bp(n)?Si(n[0]):"length"in i)?[n]:Cn(n),b,x,E,A,D,k,F,y;if(a._targets=w.length?iu(w):ol("GSAP target "+n+" not found. https://greensock.com",!yn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,g||d||Ea(c)||Ea(h)){if(i=a.vars,b=a.timeline=new on({data:"nested",defaults:p||{}}),b.kill(),b.parent=b._dp=pi(a),b._start=0,d||Ea(c)||Ea(h)){if(A=w.length,F=d&&em(d),Ti(d))for(D in d)~pm.indexOf(D)&&(y||(y={}),y[D]=d[D]);for(x=0;x<A;x++)E=ll(i,mm),E.stagger=0,_&&(E.yoyoEase=_),y&&Ar(E,y),k=w[x],E.duration=+go(c,pi(a),x,k,w),E.delay=(+go(h,pi(a),x,k,w)||0)-a._delay,!d&&A===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),b.to(k,E,F?F(x,k,w):0),b._ease=qt.none;b.duration()?c=h=0:a.timeline=0}else if(g){po(Dn(b.vars.defaults,{ease:"none"})),b._ease=br(g.ease||i.ease||"none");var C=0,G,P,z;if(Ye(g))g.forEach(function(O){return b.to(w,O,">")});else{E={};for(D in g)D==="ease"||D==="easeEach"||Qw(D,g[D],E,g.easeEach);for(D in E)for(G=E[D].sort(function(O,V){return O.t-V.t}),C=0,x=0;x<G.length;x++)P=G[x],z={ease:P.e,duration:(P.t-(x?G[x-1].t:0))/100*c},z[D]=P.v,b.to(w,z,C),C+=z.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||a.duration(c=b.duration())}else a.timeline=0;return f===!0&&!Zh&&(Bi=pi(a),fe.killTweensOf(w),Bi=0),ti(v,pi(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===$e(v._time)&&cn(u)&&Cw(pi(a))&&v.data!=="nested")&&(a._tTime=-ae,a.render(Math.max(0,-h))),m&&Zp(pi(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i>l-ae&&i>=0?l:i<ae?0:i,u,d,f,g,p,m,_,v,w;if(!c)Rw(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=i<0){if(u=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(u=$e(h%g),h===l?(f=this._repeat,u=c):(f=~~(h/g),f&&f===h/g&&(u=c,f--),u>c&&(u=c)),m=this._yoyo&&f&1,m&&(w=this._yEase,u=c-u),p=Rs(this._tTime,g),u===a&&!o&&this._initted)return this._tTime=h,this;f!==p&&(v&&this._yEase&&hm(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=o=1,this.render($e(g*f),!0).invalidate()._lock=0))}if(!this._initted){if(Kp(this,i<0?i:u,o,r))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=h,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(w||this._ease)(u/c),this._from&&(this.ratio=_=1-_),u&&!a&&!r&&(Ln(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(_,d.d),d=d._next;v&&v.render(i<0?i:!u&&m?-ae:v._dur*v._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(i<0&&this._startAt&&this._startAt.render(i,!0,o),Ln(this,"onUpdate")),this._repeat&&f!==p&&this.vars.onRepeat&&!r&&this.parent&&Ln(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(i<0&&this._startAt&&!this._onUpdate&&this._startAt.render(i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&bi(this,1),!r&&!(i<0&&!a)&&(h||a)&&(Ln(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),s.prototype.invalidate.call(this)},e.resetTo=function(i,r,o,a){Do||_n.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ou(this,l),c=this._ease(l/this._dur),Zw(this,i,r,o,a,c,l)?this.resetTo(i,r,o,a):(ru(this,0),this.parent||jp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?so(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Bi&&Bi.vars.overwrite!==!0)._first||so(this),this.parent&&o!==this.timeline.totalDuration()&&Ps(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Cn(i):a,c=this._ptLookup,h=this._pt,u,d,f,g,p,m,_;if((!r||r==="all")&&Ew(a,l))return r==="all"&&(this._pt=0),so(this);for(u=this._op=this._op||[],r!=="all"&&(Ne(r)&&(p={},hn(r,function(v){return p[v]=1}),r=p),r=Kw(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){d=c[_],r==="all"?(u[_]=r,g=d,f={}):(f=u[_]=u[_]||{},g=r);for(p in g)m=d&&d[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&Il(this,m,"_pt"),delete d[p]),f!=="all"&&(f[p]=1)}return this._initted&&!this._pt&&h&&so(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return mo(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return mo(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return fe.killTweensOf(i,r,o)},t}(Io);Dn(Pe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});hn("staggerTo,staggerFrom,staggerFromTo",function(s){Pe[s]=function(){var t=new on,e=lh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var au=function(t,e,n){return t[e]=n},gm=function(t,e,n){return t[e](n)},tM=function(t,e,n,i){return t[e](i.fp,n)},eM=function(t,e,n){return t.setAttribute(e,n)},lu=function(t,e){return Ie(t[e])?gm:Kh(t[e])&&t.setAttribute?eM:au},_m=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},nM=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},xm=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},cu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},iM=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},rM=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Il(this,e,"_pt"):e.dep||(n=1),e=i;return!n},sM=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ym=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},un=function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||_m,this.d=l||this,this.set=c||au,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=sM,this.m=n,this.mt=r,this.tween=i},s}();hn(nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return eu[s]=1});vn.TweenMax=vn.TweenLite=Pe;vn.TimelineLite=vn.TimelineMax=on;fe=new on({sortChildren:!1,defaults:Ls,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});yn.stringFilter=lm;var hl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Vw(i)})},timeline:function(t){return new on(t)},getTweensOf:function(t,e){return fe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ne(t)&&(t=Cn(t)[0]);var r=yr(t||{}).get,o=n?Yp:qp;return n==="native"&&(n=""),t&&(e?o((gn[e]&&gn[e].get||r)(t,e,n,i)):function(a,l,c){return o((gn[a]&&gn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Cn(t),t.length>1){var i=t.map(function(h){return Xn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=gn[e],a=yr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;hs._pt=0,u.init(t,n?h+n:h,hs,0,[t]),u.render(1,u),hs._pt&&cu(1,hs)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Xn.to(t,Ar((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return fe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=br(t.ease,Ls.ease)),nf(Ls,t||{})},config:function(t){return nf(yn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!gn[a]&&!vn[a]&&ol(e+" effect requires "+a+" plugin.")}),Cc[e]=function(a,l,c){return n(Cn(a),Dn(l||{},r),c)},o&&(on.prototype[e]=function(a,l,c){return this.add(Cc[e](a,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=br(e)},parseEase:function(t,e){return arguments.length?br(t,e):qt},getById:function(t){return fe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new on(t),i,r;for(n.smoothChildTiming=cn(t.smoothChildTiming),fe.remove(n),n._dp=0,n._time=n._tTime=fe._time,i=fe._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Pe&&i.vars.onComplete===i._targets[0]))&&ti(n,i,i._start-i._delay),i=r;return ti(fe,n,0),n},utils:{wrap:kw,wrapYoyo:Uw,distribute:em,random:im,snap:nm,normalize:zw,getUnit:qe,clamp:Iw,splitColor:om,toArray:Cn,selector:Nw,mapRange:sm,pipe:Ow,unitize:Bw,interpolate:Hw,shuffle:tm},install:Vp,effects:Cc,ticker:_n,updateRoot:on.updateRoot,plugins:gn,globalTimeline:fe,core:{PropTween:un,globals:Gp,Tween:Pe,Timeline:on,Animation:Io,getCache:yr,_removeLinkedListItem:Il,suppressOverwrites:function(t){return Zh=t}}};hn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return hl[s]=Pe[s]});_n.add(on.updateRoot);hs=hl.to({},{duration:0});var oM=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},aM=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=oM(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Dc=function(t,e){return{name:t,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Ne(r)&&(l={},hn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}aM(a,r)}}}},Xn=hl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a;for(o in e)a=this.add(t,"setAttribute",(t.getAttribute(o)||0)+"",e[o],i,r,0,0,o),a&&(a.op=o),this._props.push(o)}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n])}},Dc("roundProps",ch),Dc("modifiers"),Dc("snap",nm))||hl;Pe.version=on.version=Xn.version="3.10.2";Hp=1;Op()&&Ds();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.10.2
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var lf,zi,xs,hu,pr,cf,lM=function(){return typeof window!="undefined"},ji={},ar=180/Math.PI,ys=Math.PI/180,ts=Math.atan2,hf=1e8,vm=/([A-Z])/g,cM=/(left|right|width|margin|padding|x)/i,hM=/[\s,\(]\S/,ki={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},uM=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dM=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fM=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Mm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},pM=function(t,e,n){return t.style[e]=n},mM=function(t,e,n){return t.style.setProperty(e,n)},gM=function(t,e,n){return t._gsap[e]=n},_M=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},xM=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},yM=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},ze="transform",Ji=ze+"Origin",Sm,uh=function(t,e){var n=zi.createElementNS?zi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):zi.createElement(t);return n.style?n:zi.createElement(t)},wi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(vm,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Is(e)||e,1)||""},uf="O,Moz,ms,Ms,Webkit".split(","),Is=function(t,e,n){var i=e||pr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(uf[o]+t in r););return o<0?null:(o===3?"ms":o>=0?uf[o]:"")+t},dh=function(){lM()&&window.document&&(lf=window,zi=lf.document,xs=zi.documentElement,pr=uh("div")||{style:{}},uh("div"),ze=Is(ze),Ji=ze+"Origin",pr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sm=!!Is("perspective"),hu=1)},Ic=function s(t){var e=uh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,o;if(xs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=s}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),xs.removeChild(e),this.style.cssText=r,o},df=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Tm=function(t){var e;try{e=t.getBBox()}catch{e=Ic.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ic||(e=Ic.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+df(t,["x","cx","x1"])||0,y:+df(t,["y","cy","y1"])||0,width:0,height:0}:e},Em=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Tm(t))},Fo=function(t,e){if(e){var n=t.style;e in ji&&e!==Ji&&(e=ze),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(vm,"-$1").toLowerCase())):n.removeAttribute(e)}},Ui=function(t,e,n,i,r,o){var a=new un(t._pt,e,n,0,1,o?Mm:wm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},ff={deg:1,rad:1,turn:1},Zi=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=pr.style,l=cM.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",g,p,m,_;return i===o||!r||ff[i]||ff[o]?r:(o!=="px"&&!d&&(r=s(t,e,n,"px")),_=t.getCTM&&Em(t),(f||o==="%")&&(ji[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[h],_e(f?r/g*u:r/100*g)):(a[l?"width":"height"]=u+(d?o:i),p=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===zi||!p.appendChild)&&(p=zi.body),m=p._gsap,m&&f&&m.width&&l&&m.time===_n.time?_e(r/m.width*u):((f||o==="%")&&(a.position=wi(t,"position")),p===t&&(a.position="static"),p.appendChild(pr),g=pr[h],p.removeChild(pr),a.position="absolute",l&&f&&(m=yr(p),m.time=_n.time,m.width=p[h]),_e(d?g*r/u:g&&r?u/g*r:0))))},lr=function(t,e,n,i){var r;return hu||dh(),e in ki&&e!=="transform"&&(e=ki[e],~e.indexOf(",")&&(e=e.split(",")[0])),ji[e]&&e!=="transform"?(r=Oo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:dl(wi(t,Ji))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ul[e]&&ul[e](t,e,n)||wi(t,e)||Xp(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zi(t,e,r,n)+n:r},vM=function(t,e,n,i){if(!n||n==="none"){var r=Is(e,t,1),o=r&&wi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=wi(t,"borderTopColor"))}var a=new un(this._pt,t.style,e,0,1,xm),l=0,c=0,h,u,d,f,g,p,m,_,v,w,b,x;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=wi(t,e)||i,t.style[e]=n),h=[n,i],lm(h),n=h[0],i=h[1],d=n.match(cs)||[],x=i.match(cs)||[],x.length){for(;u=cs.exec(i);)m=u[0],v=i.substring(l,u.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(p=d[c++]||"")&&(f=parseFloat(p)||0,b=p.substr((f+"").length),m.charAt(1)==="="&&(m=_s(f,m)+b),_=parseFloat(m),w=m.substr((_+"").length),l=cs.lastIndex-w.length,w||(w=w||yn.units[e]||b,l===i.length&&(i+=w,a.e+=w)),b!==w&&(f=Zi(t,e,p,w)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:_-f,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Mm:wm;return kp.test(i)&&(a.e=0),this._pt=a,a},pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},bM=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=pf[n]||n,e[1]=pf[i]||i,e.join(" ")},wM=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ji[a]&&(l=1,a=a==="transformOrigin"?Ji:ze),Fo(n,a);l&&(Fo(n,ze),o&&(o.svg&&n.removeAttribute("transform"),Oo(n,1),o.uncache=1))}},ul={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new un(t._pt,e,n,0,0,wM);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},No=[1,0,0,1,0,0],Am={},Cm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},mf=function(t){var e=wi(t,ze);return Cm(e)?No:e.substr(7).match(zp).map(_e)},uu=function(t,e){var n=t._gsap||yr(t),i=t.style,r=mf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?No:r):(r===No&&!t.offsetParent&&t!==xs&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextSibling,xs.appendChild(t)),r=mf(t),l?i.display=l:Fo(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):xs.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},fh=function(t,e,n,i,r,o){var a=t._gsap,l=r||uu(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],g=l[1],p=l[2],m=l[3],_=l[4],v=l[5],w=e.split(" "),b=parseFloat(w[0])||0,x=parseFloat(w[1])||0,E,A,D,k;n?l!==No&&(A=f*m-g*p)&&(D=b*(m/A)+x*(-p/A)+(p*v-m*_)/A,k=b*(-g/A)+x*(f/A)-(f*v-g*_)/A,b=D,x=k):(E=Tm(t),b=E.x+(~w[0].indexOf("%")?b/100*E.width:b),x=E.y+(~(w[1]||w[0]).indexOf("%")?x/100*E.height:x)),i||i!==!1&&a.smooth?(_=b-c,v=x-h,a.xOffset=u+(_*f+v*p)-_,a.yOffset=d+(_*g+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=b,a.yOrigin=x,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Ji]="0px 0px",o&&(Ui(o,a,"xOrigin",c,b),Ui(o,a,"yOrigin",h,x),Ui(o,a,"xOffset",u,a.xOffset),Ui(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",b+" "+x)},Oo=function(t,e){var n=t._gsap||new dm(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=wi(t,Ji)||"0",c,h,u,d,f,g,p,m,_,v,w,b,x,E,A,D,k,F,y,C,G,P,z,O,V,N,J,L,Q,nt,at,Rt;return c=h=u=g=p=m=_=v=w=0,d=f=1,n.svg=!!(t.getCTM&&Em(t)),E=uu(t,n.svg),n.svg&&(O=(!n.uncache||l==="0px 0px")&&!e&&t.getAttribute("data-svg-origin"),fh(t,O||l,!!O||n.originIsAbsolute,n.smooth!==!1,E)),b=n.xOrigin||0,x=n.yOrigin||0,E!==No&&(F=E[0],y=E[1],C=E[2],G=E[3],c=P=E[4],h=z=E[5],E.length===6?(d=Math.sqrt(F*F+y*y),f=Math.sqrt(G*G+C*C),g=F||y?ts(y,F)*ar:0,_=C||G?ts(C,G)*ar+g:0,_&&(f*=Math.abs(Math.cos(_*ys))),n.svg&&(c-=b-(b*F+x*C),h-=x-(b*y+x*G))):(Rt=E[6],nt=E[7],J=E[8],L=E[9],Q=E[10],at=E[11],c=E[12],h=E[13],u=E[14],A=ts(Rt,Q),p=A*ar,A&&(D=Math.cos(-A),k=Math.sin(-A),O=P*D+J*k,V=z*D+L*k,N=Rt*D+Q*k,J=P*-k+J*D,L=z*-k+L*D,Q=Rt*-k+Q*D,at=nt*-k+at*D,P=O,z=V,Rt=N),A=ts(-C,Q),m=A*ar,A&&(D=Math.cos(-A),k=Math.sin(-A),O=F*D-J*k,V=y*D-L*k,N=C*D-Q*k,at=G*k+at*D,F=O,y=V,C=N),A=ts(y,F),g=A*ar,A&&(D=Math.cos(A),k=Math.sin(A),O=F*D+y*k,V=P*D+z*k,y=y*D-F*k,z=z*D-P*k,F=O,P=V),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=_e(Math.sqrt(F*F+y*y+C*C)),f=_e(Math.sqrt(z*z+Rt*Rt)),A=ts(P,z),_=Math.abs(A)>2e-4?A*ar:0,w=at?1/(at<0?-at:at):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Cm(wi(t,ze)),O&&t.setAttribute("transform",O))),Math.abs(_)>90&&Math.abs(_)<270&&(r?(d*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(f*=-1,_+=_<=0?180:-180)),e=e||n.uncache,n.x=c-((n.xPercent=c&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=_e(d),n.scaleY=_e(f),n.rotation=_e(g)+a,n.rotationX=_e(p)+a,n.rotationY=_e(m)+a,n.skewX=_+a,n.skewY=v+a,n.transformPerspective=w+o,(n.zOrigin=parseFloat(l.split(" ")[2])||0)&&(i[Ji]=dl(l)),n.xOffset=n.yOffset=0,n.force3D=yn.force3D,n.renderTransform=n.svg?SM:Sm?Lm:MM,n.uncache=0,n},dl=function(t){return(t=t.split(" "))[0]+" "+t[1]},Fc=function(t,e,n){var i=qe(e);return _e(parseFloat(e)+parseFloat(Zi(t,"x",n+"px",i)))+i},MM=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Lm(t,e)},rr="0deg",to="0px",sr=") ",Lm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,g=n.scaleX,p=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,w=n.zOrigin,b="",x=_==="auto"&&t&&t!==1||_===!0;if(w&&(u!==rr||h!==rr)){var E=parseFloat(h)*ys,A=Math.sin(E),D=Math.cos(E),k;E=parseFloat(u)*ys,k=Math.cos(E),o=Fc(v,o,A*k*-w),a=Fc(v,a,-Math.sin(E)*-w),l=Fc(v,l,D*k*-w+w)}m!==to&&(b+="perspective("+m+sr),(i||r)&&(b+="translate("+i+"%, "+r+"%) "),(x||o!==to||a!==to||l!==to)&&(b+=l!==to||x?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+sr),c!==rr&&(b+="rotate("+c+sr),h!==rr&&(b+="rotateY("+h+sr),u!==rr&&(b+="rotateX("+u+sr),(d!==rr||f!==rr)&&(b+="skew("+d+", "+f+sr),(g!==1||p!==1)&&(b+="scale("+g+", "+p+sr),v.style[ze]=b||"translate(0, 0)"},SM=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,g=n.xOrigin,p=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,w=parseFloat(o),b=parseFloat(a),x,E,A,D,k;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ys,c*=ys,x=Math.cos(l)*u,E=Math.sin(l)*u,A=Math.sin(l-c)*-d,D=Math.cos(l-c)*d,c&&(h*=ys,k=Math.tan(c-h),k=Math.sqrt(1+k*k),A*=k,D*=k,h&&(k=Math.tan(h),k=Math.sqrt(1+k*k),x*=k,E*=k)),x=_e(x),E=_e(E),A=_e(A),D=_e(D)):(x=u,D=d,E=A=0),(w&&!~(o+"").indexOf("px")||b&&!~(a+"").indexOf("px"))&&(w=Zi(f,"x",o,"px"),b=Zi(f,"y",a,"px")),(g||p||m||_)&&(w=_e(w+g-(g*x+p*A)+m),b=_e(b+p-(g*E+p*D)+_)),(i||r)&&(k=f.getBBox(),w=_e(w+i/100*k.width),b=_e(b+r/100*k.height)),k="matrix("+x+","+E+","+A+","+D+","+w+","+b+")",f.setAttribute("transform",k),v&&(f.style[ze]=k)},TM=function(t,e,n,i,r){var o=360,a=Ne(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ar:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*hf)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*hf)%o-~~(c/o)*o)),t._pt=d=new un(t._pt,e,n,i,c,uM),d.e=h,d.u="deg",t._props.push(n),d},gf=function(t,e){for(var n in e)t[n]=e[n];return t},EM=function(t,e,n){var i=gf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[ze]=e,a=Oo(n,1),Fo(n,ze),n.setAttribute("transform",c)):(c=getComputedStyle(n)[ze],o[ze]=e,a=Oo(n,1),o[ze]=c);for(l in ji)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=qe(c),g=qe(h),u=f!==g?Zi(n,l,c,g):parseFloat(c),d=parseFloat(h),t._pt=new un(t._pt,a,l,u,d-u,bm),t._pt.u=g||0,t._props.push(l));gf(a,i)};hn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});ul[t>1?"border"+s:s]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(g){return lr(a,g,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(g,p){return f[g]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(l,f,u)}});var Rm={name:"css",register:dh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,g,p,m,_,v,w,b,x,E,A;hu||dh();for(p in e)if(p!=="autoRound"&&(h=e[p],!(gn[p]&&fm(p,e,n,i,t,r)))){if(f=typeof h,g=ul[p],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Po(h)),g)g(this,t,p,h,n)&&(A=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(p)+"").trim(),h+="",Xi.lastIndex=0,Xi.test(c)||(m=qe(c),_=qe(h)),_?m!==_&&(c=Zi(t,p,c,_)+_):m&&(h+=m),this.add(a,"setProperty",c,h,i,r,0,0,p),o.push(p);else if(f!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,t,r):l[p],Ne(c)&&~c.indexOf("random(")&&(c=Po(c)),qe(c+"")||(c+=yn.units[p]||qe(lr(t,p))||""),(c+"").charAt(1)==="="&&(c=lr(t,p))):c=lr(t,p),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),p in ki&&(p==="autoAlpha"&&(d===1&&lr(t,"visibility")==="hidden"&&u&&(d=0),Ui(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=ki[p],~p.indexOf(",")&&(p=p.split(",")[0]))),w=p in ji,w){if(b||(x=t._gsap,x.renderTransform&&!e.parseTransform||Oo(t,e.parseTransform),E=e.smoothOrigin!==!1&&x.smooth,b=this._pt=new un(this._pt,a,ze,0,1,x.renderTransform,x,0,-1),b.dep=1),p==="scale")this._pt=new un(this._pt,x,"scaleY",x.scaleY,(v?_s(x.scaleY,v+u):u)-x.scaleY||0),o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){h=bM(h),x.svg?fh(t,h,0,E,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==x.zOrigin&&Ui(this,x,"zOrigin",x.zOrigin,_),Ui(this,a,p,dl(c),dl(h)));continue}else if(p==="svgOrigin"){fh(t,h,1,E,0,this);continue}else if(p in Am){TM(this,x,p,d,v?_s(d,v+h):h);continue}else if(p==="smoothOrigin"){Ui(this,x,"smooth",x.smooth,h);continue}else if(p==="force3D"){x[p]=h;continue}else if(p==="transform"){EM(this,h,t);continue}}else p in a||(p=Is(p)||p);if(w||(u||u===0)&&(d||d===0)&&!hM.test(h)&&p in a)m=(c+"").substr((d+"").length),u||(u=0),_=qe(h)||(p in yn.units?yn.units[p]:m),m!==_&&(d=Zi(t,p,c,_)),this._pt=new un(this._pt,w?x:a,p,d,(v?_s(d,v+u):u)-d,!w&&(_==="px"||p==="zIndex")&&e.autoRound!==!1?fM:bm),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=dM);else if(p in a)vM.call(this,t,p,c,v?v+h:h);else if(p in t)this.add(t,p,c||t[p],v?v+h:h,i,r);else{tu(p,h);continue}o.push(p)}}A&&ym(this)},get:lr,aliases:ki,getSetter:function(t,e,n){var i=ki[e];return i&&i.indexOf(",")<0&&(e=i),e in ji&&e!==Ji&&(t._gsap.x||lr(t,"x"))?n&&cf===n?e==="scale"?_M:gM:(cf=n||{})&&(e==="scale"?xM:yM):t.style&&!Kh(t.style[e])?pM:~e.indexOf("-")?mM:lu(t,e)},core:{_removeProperty:Fo,_getMatrix:uu}};Xn.utils.checkPrefix=Is;(function(s,t,e,n){var i=hn(s+","+t+","+e,function(r){ji[r]=1});hn(t,function(r){yn.units[r]="deg",Am[r]=1}),ki[i[13]]=s+","+t,hn(n,function(r){var o=r.split(":");ki[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");hn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){yn.units[s]="px"});Xn.registerPlugin(Rm);var du=Xn.registerPlugin(Rm)||Xn;du.core.Tween;function _f(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function AM(s,t,e){return t&&_f(s.prototype,t),e&&_f(s,e),s}/*!
 * Observer 3.10.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var an,Ga,En,mr,wr,vs,Pm,cr,ao,Dm,Mr,Im=function(){return an||typeof window!="undefined"&&(an=window.gsap)&&an.registerPlugin&&an},Fm=1,us=[],re=[],ni=[],Nc=Date.now,ph=function(t,e){return e},CM=function(){var t=ao.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,re),i.push.apply(i,ni),re=n,ni=i,ph=function(o,a){return e[o](a)}},$i=function(t,e){return~ni.indexOf(t)&&ni[ni.indexOf(t)+1][e]},mh=function(t){return!!~Dm.indexOf(t)},pn=function(t,e,n,i){return t.addEventListener(e,n,{passive:!i})},mn=function(t,e,n){return t.removeEventListener(e,n)},Aa="scrollLeft",Ca="scrollTop",xf=function(){return Mr&&Mr.isPressed||re.cache++},Nm=function(t){return function(e){return e||e===0?(Fm&&(En.history.scrollRestoration="manual"),t(e),t.v=e,t.c=re.cache,Mr&&Mr.isPressed&&ph("ss",e)):(re.cache!==t.c||ph("ref"))&&(t.c=re.cache,t.v=t()),t.v}},en={s:Aa,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Nm(function(s){return arguments.length?En.scrollTo(s,we.sc()):En.pageXOffset||mr[Aa]||wr[Aa]||vs[Aa]||0})},we={s:Ca,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:en,sc:Nm(function(s){return arguments.length?En.scrollTo(en.sc(),s):En.pageYOffset||mr[Ca]||wr[Ca]||vs[Ca]||0})},Mn=function(t){return an.utils.toArray(t)[0]||(typeof t=="string"&&an.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Ki=function(t,e){var n=e.s,i=e.sc,r=re.indexOf(t),o=i===we.sc?1:2;return!~r&&(r=re.push(t)-1),re[r+o]||(re[r+o]=$i(t,n)||(mh(t)?i:function(a){return arguments.length?t[n]=a:t[n]}))},gh=function(t,e,n){var i=t,r=t,o=Nc(),a=o,l=e||50,c=Math.max(500,l*3),h=function(g,p){var m=Nc();p||m-o>l?(r=i,i=g,a=o,o=m):n?i+=g:i=r+(g-r)/(m-a)*(o-a)},u=function(){r=i=n?0:i,a=o=0},d=function(g){var p=a,m=r,_=Nc();return(g||g===0)&&g!==i&&h(g),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-p)*1e3};return{update:h,reset:u,getVelocity:d}},La=function(t,e){return e&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},yf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Om=function(t){return an=t||Im(),an&&!Ga&&typeof document!="undefined"&&document.body&&(En=window,mr=document,wr=mr.documentElement,vs=mr.body,Dm=[En,mr,wr,vs],an.utils.clamp,cr="onpointerenter"in vs?"pointer":"mouse",Pm=In.isTouch=En.matchMedia&&En.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in En||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,setTimeout(function(){return Fm=0},500),Ga=1),Ga};en.op=we;re.cache=0;var In=function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Ga||Om(an)||console.warn("Please gsap.registerPlugin(Observer)"),ao||(ao=an.core.globals().ScrollTrigger,ao&&ao.core&&CM());var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,g=n.wheelSpeed,p=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,w=n.onPress,b=n.onRelease,x=n.onRight,E=n.onLeft,A=n.onUp,D=n.onDown,k=n.onChangeX,F=n.onChangeY,y=n.onChange,C=n.onToggleX,G=n.onToggleY,P=n.onHover,z=n.onHoverEnd,O=n.onMove,V=n.ignoreCheck,N=n.isNormalizer,J=n.onGestureStart,L=n.onGestureEnd,Q=n.onWheel,nt=n.onEnable,at=n.onDisable,Rt=n.onClick,gt=n.scrollSpeed;this.target=a=Mn(a)||wr,this.vars=n,f&&(f=an.utils.toArray(f)),i=i||0,r=r||0,g=g||1,gt=gt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(En.getComputedStyle(vs).lineHeight)||22);var Y,Pt,Ot,Dt,ot,H=this,$=0,Z=0,it=Ki(a,en),mt=Ki(a,we),ht=it(),It=mt(),dt=("ontouchstart"in wr?"touchstart,touchmove,touchcancel,touchend":o.indexOf("pointer")>=0&&!("onpointerdown"in wr)?"mousedown,mousemove,mouseup,mouseup":"pointerdown,pointermove,pointercancel,pointerup").split(","),wt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&dt[0]==="pointerdown",Yt=mh(a),Bt=a.ownerDocument||mr,T=[0,0,0],M=[0,0,0],X=function(rt,Tt){return(H.event=rt)&&f&&~f.indexOf(rt.target)||Tt&&wt&&rt.pointerType!=="touch"||V&&V(rt)},et=function(){H._vx.reset(),H._vy.reset(),Pt.pause(),u&&u(H)},lt=function(){var rt=H.deltaX=yf(T),Tt=H.deltaY=yf(M),St=Math.abs(rt)>=i,ce=Math.abs(Tt)>=i;y&&(St||ce)&&y(H,rt,Tt,T,M),St&&(x&&H.deltaX>0&&x(H),E&&H.deltaX<0&&E(H),k&&k(H),C&&H.deltaX<0!=$<0&&C(H),$=H.deltaX,T[0]=T[1]=T[2]=0),ce&&(D&&H.deltaY>0&&D(H),A&&H.deltaY<0&&A(H),F&&F(H),G&&H.deltaY<0!=Z<0&&G(H),Z=H.deltaY,M[0]=M[1]=M[2]=0),Dt&&(O(H),Dt=!1),Ot&&(v(H),Ot=!1),ot&&(Q(H),ot=!1),Y=0},ut=function(rt,Tt,St){T[St]+=rt,M[St]+=Tt,H._vx.update(rt,St===2),H._vy.update(Tt,St===2),c?Y||(Y=requestAnimationFrame(lt)):lt()},At=function(rt){if(!X(rt,1)){rt=La(rt,h);var Tt=rt.clientX,St=rt.clientY,ce=Tt-H.x,Ae=St-H.y,Ei=H.isDragging;H.x=Tt,H.y=St,(Ei||Math.abs(H.startX-Tt)>=r||Math.abs(H.startY-St)>=r)&&(v&&(Ot=!0),Ei||(H.isDragging=!0),ut(ce,Ae,2),Ei||m&&m(H))}},q=H.onPress=function(K){X(K,1)||(Pt.pause(),H.isPressed=!0,K=La(K,h),$=Z=0,H.startX=H.x=K.clientX,H.startY=H.y=K.clientY,H._vx.reset(),H._vy.reset(),pn(N?a:Bt,dt[1],At,h),H.deltaX=H.deltaY=0,w&&w(H))},Nt=function(rt){if(!X(rt,1)){mn(N?a:Bt,dt[1],At);var Tt=H.isDragging;Tt||(H._vx.reset(),H._vy.reset()),H.isDragging=H.isGesturing=H.isPressed=!1,u&&!N&&Pt.restart(!0),_&&Tt&&_(H),b&&b(H,Tt)}},zt=function(rt){return rt.touches&&rt.touches.length>1&&(H.isGesturing=!0)&&J(rt,H.isDragging)},_t=function(){return(H.isGesturing=!1)||L(H)},I=function(rt){if(!X(rt)){var Tt=it(),St=mt();ut((Tt-ht)*gt,(St-It)*gt,1),ht=Tt,It=St,u&&Pt.restart(!0)}},ct=function(rt){if(!X(rt)){rt=La(rt,h),Q&&(ot=!0);var Tt=(rt.deltaMode===1?l:rt.deltaMode===2?En.innerHeight:1)*g;ut(rt.deltaX*Tt,rt.deltaY*Tt,0),u&&!N&&Pt.restart(!0)}},tt=function(rt){if(!X(rt)){var Tt=rt.clientX,St=rt.clientY,ce=Tt-H.x,Ae=St-H.y;H.x=Tt,H.y=St,O&&(Dt=!0),(ce||Ae)&&ut(ce,Ae,2)}},Ct=function(rt){H.event=rt,P(H)},pt=function(rt){H.event=rt,z(H)},Mt=function(rt){return X(rt)||La(rt,h)&&Rt(H)};Pt=H._dc=an.delayedCall(d||.25,et).pause(),H.deltaX=H.deltaY=0,H._vx=gh(0,50,!0),H._vy=gh(0,50,!0),H.scrollX=it,H.scrollY=mt,H.isDragging=H.isGesturing=H.isPressed=!1,H.enable=function(K){return H.isEnabled||(pn(Yt?Bt:a,"scroll",xf),o.indexOf("scroll")>=0&&pn(Yt?Bt:a,"scroll",I,h),o.indexOf("wheel")>=0&&pn(a,"wheel",ct,h),(o.indexOf("touch")>=0&&Pm||o.indexOf("pointer")>=0)&&(pn(a,dt[0],q,h),pn(Bt,dt[2],Nt),pn(Bt,dt[3],Nt),Rt&&pn(a,"click",Mt),J&&pn(Bt,"gesturestart",zt),L&&pn(Bt,"gestureend",_t),P&&pn(a,cr+"enter",Ct),z&&pn(a,cr+"leave",pt),O&&pn(a,cr+"move",tt)),H.isEnabled=!0,K&&K.type&&q(K),nt&&nt(H)),H},H.disable=function(){H.isEnabled&&(us.filter(function(K){return K!==H&&mh(K.target)}).length||mn(Yt?Bt:a,"scroll",xf),mn(Yt?Bt:a,"scroll",I),mn(a,"wheel",ct),mn(a,dt[0],q),mn(Bt,dt[2],Nt),mn(Bt,dt[3],Nt),mn(a,"click",Mt),mn(Bt,"gesturestart",zt),mn(Bt,"gestureend",_t),mn(a,cr+"enter",Ct),mn(a,cr+"leave",pt),mn(a,cr+"move",tt),H.isEnabled=!1,at&&at(H))},H.kill=function(){H.disable();var K=us.indexOf(H);K>=0&&us.splice(K,1),Mr===H&&(Mr=0)},us.push(H),N&&(Mr=H),H.enable(p)},AM(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();In.version="3.10.2";In.create=function(s){return new In(s)};In.register=Om;In.getAll=function(){return us.slice()};In.getById=function(s){return us.filter(function(t){return t.vars.id===s})[0]};Im()&&an.registerPlugin(In);/*!
 * ScrollTrigger 3.10.2
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kt,ur,Zt,ve,We,me,Bm,fl,pl,ds,Wa,Ra,Le,Nl,_h,Qe,vf,bf,is,zm,Oc,km,mi,Um,Hm,Vm,Bc,lo=1,Hn=Date.now,zc=Hn(),Rn=0,Pa=0,wf=function(){return Nl=1},Mf=function(){return Nl=0},Oi=function(t){return t},xh=function(t){return Math.round(t*1e5)/1e5||0},Gm=function(){return typeof window!="undefined"},Wm=function(){return kt||Gm()&&(kt=window.gsap)&&kt.registerPlugin&&kt},Bo=function(t){return!!~Bm.indexOf(t)},Xm=function(t){return $i(t,"getBoundingClientRect")||(Bo(t)?function(){return Za.width=Zt.innerWidth,Za.height=Zt.innerHeight,Za}:function(){return yi(t)})},LM=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=$i(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?Zt["inner"+r]:t["client"+r])||0}},RM=function(t,e){return!e||~ni.indexOf(t)?Xm(t):function(){return Za}},_i=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return(n="scroll"+i)&&(o=$i(t,n))?o()-Xm(t)()[r]:Bo(t)?(We[n]||me[n])-(Zt["inner"+i]||We["client"+i]||me["client"+i]):t[n]-t["offset"+i]},Da=function(t,e){for(var n=0;n<is.length;n+=3)(!e||~e.indexOf(is[n+1]))&&t(is[n],is[n+1],is[n+2])},Kn=function(t){return typeof t=="string"},Vn=function(t){return typeof t=="function"},co=function(t){return typeof t=="number"},Xa=function(t){return typeof t=="object"},Ia=function(t){return Vn(t)&&t()},Sf=function(t,e){return function(){var n=Ia(t),i=Ia(e);return function(){Ia(n),Ia(i)}}},eo=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},kc=function(t,e){if(t.enabled){var n=e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},es=Math.abs,$m="left",qm="top",fu="right",pu="bottom",Sr="width",Tr="height",_o="Right",xo="Left",yo="Top",vo="Bottom",be="padding",Tn="margin",Fs="Width",mu="Height",Ze="px",xi=function(t){return Zt.getComputedStyle(t)},PM=function(t){var e=xi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Tf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},yi=function(t,e){var n=e&&xi(t)[_h]!=="matrix(1, 0, 0, 1, 0, 0)"&&kt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},yh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Ym=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},DM=function(t){return function(e){return kt.utils.snap(Ym(t),e)}},gu=function(t){var e=kt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},IM=function(t){return function(e,n){return gu(Ym(t))(e,n.direction)}},Fa=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},Ke=function(t,e,n,i){return t.addEventListener(e,n,{passive:!i})},Re=function(t,e,n){return t.removeEventListener(e,n)},Na=function(t,e,n){return n&&n.wheelHandler&&t(e,"wheel",n)},Ef={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Oa={toggleActions:"play",anticipatePin:0},ml={top:0,left:0,center:.5,bottom:1,right:1},$a=function(t,e){if(Kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ml?ml[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Ba=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,u=r.fontSize,d=r.indent,f=r.fontWeight,g=ve.createElement("div"),p=Bo(n)||$i(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,_=p?me:n,v=t.indexOf("start")!==-1,w=v?c:h,b="border-color:"+w+";font-size:"+u+";color:"+w+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(b+=(i===we?fu:pu)+":"+(o+parseFloat(d))+"px;"),a&&(b+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=v,g.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),g.style.cssText=b,g.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],qa(g,0,i,v),g},qa=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Fs]=1,r["border"+a+Fs]=0,r[n.p]=e+"px",kt.set(t,r)},Jt=[],vh={},bh,Af=function(){return Hn()-Rn>34&&Ol()},no=function(){(!mi||!mi.isPressed)&&(re.cache++,bh||(bh=requestAnimationFrame(Ol)),Rn||Cr("scrollStart"),Rn=Hn())},ho=function(){re.cache++,!Le&&!km&&!ve.fullscreenElement&&(!Um||Vm!==Zt.innerWidth||Math.abs(Zt.innerHeight-Hm)>Zt.innerHeight*.25)&&fl.restart(!0)},zo={},FM=[],ge=[],bs,Cf,Lf=function(t){var e=kt.ticker.frame,n=[],i=0,r;if(Cf!==e||lo){for(gl();i<ge.length;i+=4)r=Zt.matchMedia(ge[i]).matches,r!==ge[i+3]&&(ge[i+3]=r,r?n.push(i):gl(1,ge[i])||Vn(ge[i+2])&&ge[i+2]());for(Jm(),i=0;i<n.length;i++)r=n[i],bs=ge[r],ge[r+2]=ge[r+1](t);bs=0,ur&&ws(0,1),Cf=e,Cr("matchMedia")}},jm=function s(){return Re(te,"scrollEnd",s)||ws(!0)},Cr=function(t){return zo[t]&&zo[t].map(function(e){return e()})||FM},Sn=[],Jm=function(t){for(var e=0;e<Sn.length;e+=5)(!t||Sn[e+4]===t)&&(Sn[e].style.cssText=Sn[e+1],Sn[e].getBBox&&Sn[e].setAttribute("transform",Sn[e+2]||""),Sn[e+3].uncache=1)},gl=function(t,e){var n;for(Qe=0;Qe<Jt.length;Qe++)n=Jt[Qe],(!e||n.media===e)&&(t?n.kill(1):n.revert());e&&Jm(e),e||Cr("revert")},Zm=function(){return re.cache++&&re.forEach(function(t){return typeof t=="function"&&(t.rec=0)})},ko,Ya=0,ws=function(t,e){if(Rn&&!t){Ke(te,"scrollEnd",jm);return}ko=!0;var n=Cr("refreshInit");zm&&te.sort(),e||gl(),Jt.slice(0).forEach(function(i){return i.refresh()}),Jt.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,_i(i.scroller,i._dir))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Zm(),fl.pause(),Ya++,ko=!1,Cr("refresh")},Rf=0,ja=1,bo,Ol=function(){if(!ko){bo&&bo.update(0),te.isUpdating=!0;var t=Jt.length,e=Hn(),n=e-zc>=50,i=t&&Jt[0].scroll();if(ja=Rf>i?-1:1,Rf=i,n&&(Rn&&!Nl&&e-Rn>200&&(Rn=0,Cr("scrollEnd")),Wa=zc,zc=e),ja<0){for(Qe=t;Qe-- >0;)Jt[Qe]&&Jt[Qe].update(0,n);ja=1}else for(Qe=0;Qe<t;Qe++)Jt[Qe]&&Jt[Qe].update(0,n);te.isUpdating=!1}bh=0},wh=[$m,qm,pu,fu,Tn+vo,Tn+_o,Tn+yo,Tn+xo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ja=wh.concat([Sr,Tr,"boxSizing","max"+Fs,"max"+mu,"position",Tn,be,be+yo,be+_o,be+vo,be+xo]),NM=function(t,e,n){Uo(n);var i=t._gsap;if(i.spacerIsNative)Uo(i.spacerState);else if(t.parentNode===e){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}},Uc=function(t,e,n,i){if(t.parentNode!==e){for(var r=wh.length,o=e.style,a=t.style,l;r--;)l=wh[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[pu]=a[fu]=o.flexBasis="auto",o.overflow="visible",o.boxSizing="border-box",o[Sr]=yh(t,en)+Ze,o[Tr]=yh(t,we)+Ze,o[be]=a[Tn]=a[qm]=a[$m]="0",Uo(i),a[Sr]=a["max"+Fs]=n[Sr],a[Tr]=a["max"+mu]=n[Tr],a[be]=n[be],t.parentNode.insertBefore(e,t),e.appendChild(t)}},OM=/([A-Z])/g,Uo=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||kt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(OM,"-$1").toLowerCase())}},za=function(t){for(var e=Ja.length,n=t.style,i=[],r=0;r<e;r++)i.push(Ja[r],n[Ja[r]]);return i.t=t,i},BM=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Za={left:0,top:0},Pf=function(t,e,n,i,r,o,a,l,c,h,u,d,f){Vn(t)&&(t=t(l)),Kn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?$a("0"+t.substr(3),n):0));var g=f?f.time():0,p,m,_;if(f&&f.seek(0),co(t))a&&qa(a,n,i,!0);else{Vn(e)&&(e=e(l));var v=t.split(" "),w,b,x,E;_=Mn(e)||me,w=yi(_)||{},(!w||!w.left&&!w.top)&&xi(_).display==="none"&&(E=_.style.display,_.style.display="block",w=yi(_),E?_.style.display=E:_.style.removeProperty("display")),b=$a(v[0],w[i.d]),x=$a(v[1]||"0",n),t=w[i.p]-c[i.p]-h+b+r-x,a&&qa(a,x,i,n-x<20||a._isStart&&x>20),n-=n-x}if(o){var A=t+n,D=o._isStart;p="scroll"+i.d2,qa(o,A,i,D&&A>20||!D&&(u?Math.max(me[p],We[p]):o.parentNode[p])<=A+1),u&&(c=yi(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Ze))}return f&&_&&(p=yi(_),f.seek(d),m=yi(_),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},zM=/(webkit|moz|length|cssText|inset)/i,Df=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===me){t._stOrig=r.cssText,a=xi(t);for(o in a)!+o&&!zM.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;kt.core.getCache(t).uncache=1,e.appendChild(t)}},If=function(t,e){var n=Ki(t,e),i="_scroll"+e.p2,r,o,a=function l(c,h,u,d,f){var g=l.tween,p=h.onComplete,m={};return u=u||n(),f=d&&f||0,d=d||c-u,g&&g.kill(),r=Math.round(u),h[i]=c,h.modifiers=m,m[i]=function(_){return _=xh(n()),_!==r&&_!==o&&Math.abs(_-r)>2&&Math.abs(_-o)>2?(g.kill(),l.tween=0):_=u+d*g.ratio+f*g.ratio*g.ratio,o=r,r=xh(_)},h.onComplete=function(){l.tween=0,p&&p.call(g)},g=l.tween=kt.to(t,h),g};return t[i]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Ke(t,"wheel",n.wheelHandler),a},te=function(){function s(e,n){ur||s.register(kt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Pa){this.update=this.refresh=this.kill=Oi;return}n=Tf(Kn(n)||co(n)||n.nodeType?{trigger:n}:n,Oa);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,u=r.scrub,d=r.trigger,f=r.pin,g=r.pinSpacing,p=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,v=r.onSnapComplete,w=r.once,b=r.snap,x=r.pinReparent,E=r.pinSpacer,A=r.containerAnimation,D=r.fastScrollEnd,k=r.preventOverlaps,F=n.horizontal||n.containerAnimation&&n.horizontal!==!1?en:we,y=!u&&u!==0,C=Mn(n.scroller||Zt),G=kt.core.getCache(C),P=Bo(C),z=("pinType"in n?n.pinType:$i(C,"pinType")||P&&"fixed")==="fixed",O=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=y&&n.toggleActions.split(" "),N="markers"in n?n.markers:Oa.markers,J=P?0:parseFloat(xi(C)["border"+F.p2+Fs])||0,L=this,Q=n.onRefreshInit&&function(){return n.onRefreshInit(L)},nt=LM(C,P,F),at=RM(C,P),Rt=0,gt=Ki(C,F),Y,Pt,Ot,Dt,ot,H,$,Z,it,mt,ht,It,dt,wt,Yt,Bt,T,M,X,et,lt,ut,At,q,Nt,zt,_t,I,ct,tt,Ct,pt,Mt,K,rt,Tt,St,ce;if(L.media=bs,L._dir=F,m*=45,L.scroller=C,L.scroll=A?A.time.bind(A):gt,Dt=gt(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(zm=1,n.refreshPriority===-9999&&(bo=L)),G.tweenScroll=G.tweenScroll||{top:If(C,we),left:If(C,en)},L.tweenTo=Y=G.tweenScroll[F.p],L.scrubDuration=function(Vt){Ct=co(Vt)&&Vt,Ct?tt?tt.duration(Vt):tt=kt.to(i,{ease:"expo",totalProgress:"+=0.001",duration:Ct,paused:!0,onComplete:function(){return _&&_(L)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(u),I=0,l||(l=i.vars.id)),Jt.push(L),b&&((!Xa(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in me.style&&kt.set(P?[me,We]:C,{scrollBehavior:"auto"}),Ot=Vn(b.snapTo)?b.snapTo:b.snapTo==="labels"?DM(i):b.snapTo==="labelsDirectional"?IM(i):b.directional!==!1?function(Vt,Wt){return gu(b.snapTo)(Vt,Le?0:Wt.direction)}:kt.utils.snap(b.snapTo),pt=b.duration||{min:.1,max:2},pt=Xa(pt)?ds(pt.min,pt.max):ds(pt,pt),Mt=kt.delayedCall(b.delay||Ct/2||.1,function(){if(Math.abs(L.getVelocity())<10&&!Nl&&Rt!==gt()){var Vt=i&&!y?i.totalProgress():L.progress,Wt=(Vt-ct)/(Hn()-Wa)*1e3||0,Kt=kt.utils.clamp(-L.progress,1-L.progress,es(Wt/2)*Wt/.185),jt=L.progress+(b.inertia===!1?0:Kt),rn=ds(0,1,Ot(jt,L)),Ut=gt(),S=Math.round(H+rn*dt),B=b,W=B.onStart,U=B.onInterrupt,j=B.onComplete,yt=Y.tween;if(Ut<=$&&Ut>=H&&S!==Ut){if(yt&&!yt._initted&&yt.data<=es(S-Ut))return;b.inertia===!1&&(Kt=rn-L.progress),Y(S,{duration:pt(es(Math.max(es(jt-Vt),es(rn-Vt))*.185/Wt/.05||0)),ease:b.ease||"power3",data:es(S-Ut),onInterrupt:function(){return Mt.restart(!0)&&U&&U(L)},onComplete:function(){L.update(),Rt=gt(),I=ct=i&&!y?i.totalProgress():L.progress,v&&v(L),j&&j(L)}},Ut,Kt*dt,S-Ut-Kt*dt),W&&W(L,Y.tween)}}else L.isActive&&Mt.restart(!0)}).pause()),l&&(vh[l]=L),d=L.trigger=Mn(d||f),ce=d&&d._gsap&&d._gsap.stRevert,ce&&(ce=ce(L)),f=f===!0?d:Mn(f),Kn(a)&&(a={targets:d,className:a}),f&&(g===!1||g===Tn||(g=!g&&xi(f.parentNode).display==="flex"?!1:be),L.pin=f,n.force3D!==!1&&kt.set(f,{force3D:!0}),Pt=kt.core.getCache(f),Pt.spacer?wt=Pt.pinState:(E&&(E=Mn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Pt.spacerIsNative=!!E,E&&(Pt.spacerState=za(E))),Pt.spacer=T=E||ve.createElement("div"),T.classList.add("pin-spacer"),l&&T.classList.add("pin-spacer-"+l),Pt.pinState=wt=za(f)),L.spacer=T=Pt.spacer,_t=xi(f),At=_t[g+F.os2],X=kt.getProperty(f),et=kt.quickSetter(f,F.a,Ze),Uc(f,T,_t),Bt=za(f)),N){It=Xa(N)?Tf(N,Ef):Ef,mt=Ba("scroller-start",l,C,F,It,0),ht=Ba("scroller-end",l,C,F,It,0,mt),M=mt["offset"+F.op.d2];var Ae=Mn($i(C,"content")||C);Z=this.markerStart=Ba("start",l,Ae,F,It,M,0,A),it=this.markerEnd=Ba("end",l,Ae,F,It,M,0,A),A&&(St=kt.quickSetter([Z,it],F.a,Ze)),!z&&!(ni.length&&$i(C,"fixedMarkers")===!0)&&(PM(P?me:C),kt.set([mt,ht],{force3D:!0}),Nt=kt.quickSetter(mt,F.a,Ze),zt=kt.quickSetter(ht,F.a,Ze))}if(A){var Ei=A.vars.onUpdate,Fr=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),Ei&&Ei.apply(Fr||[])})}L.previous=function(){return Jt[Jt.indexOf(L)-1]},L.next=function(){return Jt[Jt.indexOf(L)+1]},L.revert=function(Vt){var Wt=Vt!==!1||!L.enabled,Kt=Le;Wt!==L.isReverted&&(Wt&&(L.scroll.rec||!Le||!ko||(L.scroll.rec=gt()),rt=Math.max(gt(),L.scroll.rec||0),K=L.progress,Tt=i&&i.progress()),Z&&[Z,it,mt,ht].forEach(function(jt){return jt.style.display=Wt?"none":"block"}),Wt&&(Le=1),L.update(Wt),Le=Kt,f&&(Wt?NM(f,T,wt):(!x||!L.isActive)&&Uc(f,T,xi(f),q)),L.isReverted=Wt)},L.refresh=function(Vt,Wt){if(!((Le||!L.enabled)&&!Wt)){if(f&&Vt&&Rn){Ke(s,"scrollEnd",jm);return}!ko&&Q&&Q(L),Le=1,tt&&tt.pause(),p&&i&&i.time(-.01,!0).invalidate(),L.isReverted||L.revert();for(var Kt=nt(),jt=at(),rn=A?A.duration():_i(C,F),Ut=0,S=0,B=n.end,W=n.endTrigger||d,U=n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),j=L.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer),yt=d&&Math.max(0,Jt.indexOf(L))||0,xt=yt,vt,bt,$t,Gt,Lt,Ht,Oe,qn,oi,He;xt--;)Ht=Jt[xt],Ht.end||Ht.refresh(0,1)||(Le=1),Oe=Ht.pin,Oe&&(Oe===d||Oe===f)&&!Ht.isReverted&&(He||(He=[]),He.unshift(Ht),Ht.revert()),Ht!==Jt[xt]&&(yt--,xt--);for(Vn(U)&&(U=U(L)),H=Pf(U,d,Kt,F,gt(),Z,mt,L,jt,J,z,rn,A)||(f?-.001:0),Vn(B)&&(B=B(L)),Kn(B)&&!B.indexOf("+=")&&(~B.indexOf(" ")?B=(Kn(U)?U.split(" ")[0]:"")+B:(Ut=$a(B.substr(2),Kt),B=Kn(U)?U:H+Ut,W=d)),$=Math.max(H,Pf(B||(W?"100% 0":rn),W,Kt,F,gt()+Ut,it,ht,L,jt,J,z,rn,A))||-.001,dt=$-H||(H-=.01)&&.001,Ut=0,xt=yt;xt--;)Ht=Jt[xt],Oe=Ht.pin,Oe&&Ht.start-Ht._pinPush<H&&!A&&Ht.end>0&&(vt=Ht.end-Ht.start,(Oe===d||Oe===j)&&!co(U)&&(Ut+=vt*(1-Ht.progress)),Oe===f&&(S+=vt));if(H+=Ut,$+=Ut,L._pinPush=S,Z&&Ut&&(vt={},vt[F.a]="+="+Ut,j&&(vt[F.p]="-="+gt()),kt.set([Z,it],vt)),f)vt=xi(f),Gt=F===we,$t=gt(),lt=parseFloat(X(F.a))+S,!rn&&$>1&&((P?me:C).style["overflow-"+F.a]="scroll"),Uc(f,T,vt),Bt=za(f),bt=yi(f,!0),qn=z&&Ki(C,Gt?en:we)(),g&&(q=[g+F.os2,dt+S+Ze],q.t=T,xt=g===be?yh(f,F)+dt+S:0,xt&&q.push(F.d,xt+Ze),Uo(q),z&&gt(rt)),z&&(Lt={top:bt.top+(Gt?$t-H:qn)+Ze,left:bt.left+(Gt?qn:$t-H)+Ze,boxSizing:"border-box",position:"fixed"},Lt[Sr]=Lt["max"+Fs]=Math.ceil(bt.width)+Ze,Lt[Tr]=Lt["max"+mu]=Math.ceil(bt.height)+Ze,Lt[Tn]=Lt[Tn+yo]=Lt[Tn+_o]=Lt[Tn+vo]=Lt[Tn+xo]="0",Lt[be]=vt[be],Lt[be+yo]=vt[be+yo],Lt[be+_o]=vt[be+_o],Lt[be+vo]=vt[be+vo],Lt[be+xo]=vt[be+xo],Yt=BM(wt,Lt,x)),i?(oi=i._initted,Oc(1),i.render(i.duration(),!0,!0),ut=X(F.a)-lt+dt+S,dt!==ut&&Yt.splice(Yt.length-2,2),i.render(0,!0,!0),oi||i.invalidate(),Oc(0)):ut=dt;else if(d&&gt()&&!A)for(bt=d.parentNode;bt&&bt!==me;)bt._pinOffset&&(H-=bt._pinOffset,$-=bt._pinOffset),bt=bt.parentNode;He&&He.forEach(function(Qt){return Qt.revert(!1)}),L.start=H,L.end=$,Dt=ot=gt(),A||(Dt<rt&&gt(rt),L.scroll.rec=0),L.revert(!1),Mt&&L.isActive&&gt(H+dt*K),Le=0,i&&y&&(i._initted||Tt)&&i.progress()!==Tt&&i.progress(Tt,!0).render(i.time(),!0,!0),(K!==L.progress||A)&&(i&&!y&&i.totalProgress(K,!0),L.progress=K,L.update(0,0,1)),f&&g&&(T._pinOffset=Math.round(L.progress*ut)),h&&h(L)}},L.getVelocity=function(){return(gt()-ot)/(Hn()-Wa)*1e3||0},L.endAnimation=function(){eo(L.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?y||eo(i,L.direction<0,1):eo(i,i.reversed()))},L.labelToScroll=function(Vt){return i&&i.labels&&(H||L.refresh()||H)+i.labels[Vt]/i.duration()*dt||0},L.getTrailing=function(Vt){var Wt=Jt.indexOf(L),Kt=L.direction>0?Jt.slice(0,Wt).reverse():Jt.slice(Wt+1);return(Kn(Vt)?Kt.filter(function(jt){return jt.vars.preventOverlaps===Vt}):Kt).filter(function(jt){return L.direction>0?jt.end<=H:jt.start>=$})},L.update=function(Vt,Wt,Kt){if(!(A&&!Kt&&!Vt)){var jt=L.scroll(),rn=Vt?0:(jt-H)/dt,Ut=rn<0?0:rn>1?1:rn||0,S=L.progress,B,W,U,j,yt,xt,vt,bt;if(Wt&&(ot=Dt,Dt=A?gt():jt,b&&(ct=I,I=i&&!y?i.totalProgress():Ut)),m&&!Ut&&f&&!Le&&!lo&&Rn&&H<jt+(jt-ot)/(Hn()-Wa)*m&&(Ut=1e-4),Ut!==S&&L.enabled){if(B=L.isActive=!!Ut&&Ut<1,W=!!S&&S<1,xt=B!==W,yt=xt||!!Ut!=!!S,L.direction=Ut>S?1:-1,L.progress=Ut,yt&&!Le&&(U=Ut&&!S?0:Ut===1?1:S===1?2:3,y&&(j=!xt&&V[U+1]!=="none"&&V[U+1]||V[U],bt=i&&(j==="complete"||j==="reset"||j in i))),k&&(xt||bt)&&(bt||u||!i)&&(Vn(k)?k(L):L.getTrailing(k).forEach(function(Ht){return Ht.endAnimation()})),y||(tt&&!Le&&!lo?((A||bo&&bo!==L)&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",Ut,i._tTime/i._tDur):(tt.vars.totalProgress=Ut,tt.invalidate().restart())):i&&i.totalProgress(Ut,!!Le)),f){if(Vt&&g&&(T.style[g+F.os2]=At),!z)et(xh(lt+ut*Ut));else if(yt){if(vt=!Vt&&Ut>S&&$+1>jt&&jt+1>=_i(C,F),x)if(!Vt&&(B||vt)){var $t=yi(f,!0),Gt=jt-H;Df(f,me,$t.top+(F===we?Gt:0)+Ze,$t.left+(F===we?0:Gt)+Ze)}else Df(f,T);Uo(B||vt?Yt:Bt),ut!==dt&&Ut<1&&B||et(lt+(Ut===1&&!vt?ut:0))}}b&&!Y.tween&&!Le&&!lo&&Mt.restart(!0),a&&(xt||w&&Ut&&(Ut<1||!Bc))&&pl(a.targets).forEach(function(Ht){return Ht.classList[B||w?"add":"remove"](a.className)}),o&&!y&&!Vt&&o(L),yt&&!Le?(y&&(bt&&(j==="complete"?i.pause().totalProgress(1):j==="reset"?i.restart(!0).pause():j==="restart"?i.restart(!0):i[j]()),o&&o(L)),(xt||!Bc)&&(c&&xt&&kc(L,c),O[U]&&kc(L,O[U]),w&&(Ut===1?L.kill(!1,1):O[U]=0),xt||(U=Ut===1?1:3,O[U]&&kc(L,O[U]))),D&&!B&&Math.abs(L.getVelocity())>(co(D)?D:2500)&&(eo(L.callbackAnimation),tt?tt.progress(1):eo(i,!Ut,1))):y&&o&&!Le&&o(L)}if(zt){var Lt=A?jt/A.duration()*(A._caScrollDist||0):jt;Nt(Lt+(mt._isFlipped?1:0)),zt(Lt)}St&&St(-jt/A.duration()*(A._caScrollDist||0))}},L.enable=function(Vt,Wt){L.enabled||(L.enabled=!0,Ke(C,"resize",ho),Ke(P?ve:C,"scroll",no),Q&&Ke(s,"refreshInit",Q),Vt!==!1&&(L.progress=K=0,Dt=ot=Rt=gt()),Wt!==!1&&L.refresh())},L.getTween=function(Vt){return Vt&&Y?Y.tween:tt},L.setPositions=function(Vt,Wt){f&&(lt+=Vt-H,ut+=Wt-Vt-dt),L.start=H=Vt,L.end=$=Wt,dt=Wt-Vt,L.update()},L.disable=function(Vt,Wt){if(L.enabled&&(Vt!==!1&&L.revert(),L.enabled=L.isActive=!1,Wt||tt&&tt.pause(),rt=0,Pt&&(Pt.uncache=1),Q&&Re(s,"refreshInit",Q),Mt&&(Mt.pause(),Y.tween&&Y.tween.kill()&&(Y.tween=0)),!P)){for(var Kt=Jt.length;Kt--;)if(Jt[Kt].scroller===C&&Jt[Kt]!==L)return;Re(C,"resize",ho),Re(C,"scroll",no)}},L.kill=function(Vt,Wt){L.disable(Vt,Wt),tt&&!Wt&&tt.kill(),l&&delete vh[l];var Kt=Jt.indexOf(L);Kt>=0&&Jt.splice(Kt,1),Kt===Qe&&ja>0&&Qe--,Kt=0,Jt.forEach(function(jt){return jt.scroller===L.scroller&&(Kt=1)}),Kt||(L.scroll.rec=0),i&&(i.scrollTrigger=null,Vt&&i.render(-1),Wt||i.kill()),Z&&[Z,it,mt,ht].forEach(function(jt){return jt.parentNode&&jt.parentNode.removeChild(jt)}),f&&(Pt&&(Pt.uncache=1),Kt=0,Jt.forEach(function(jt){return jt.pin===f&&Kt++}),Kt||(Pt.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),ce&&ce(L),!i||!i.add||dt?L.refresh():kt.delayedCall(.01,function(){return H||$||L.refresh()})&&(dt=.01)&&(H=$=0)},s.register=function(n){return ur||(kt=n||Wm(),Gm()&&window.document&&s.enable(),ur=Pa),ur},s.defaults=function(n){if(n)for(var i in n)Oa[i]=n[i];return Oa},s.disable=function(n,i){Pa=0,Jt.forEach(function(o){return o[i?"kill":"disable"](n)}),Re(Zt,"wheel",no),Re(ve,"scroll",no),clearInterval(Ra),Re(ve,"touchcancel",Oi),Re(me,"touchstart",Oi),Fa(Re,ve,"pointerdown,touchstart,mousedown",wf),Fa(Re,ve,"pointerup,touchend,mouseup",Mf),fl.kill(),Da(Re);for(var r=0;r<re.length;r+=3)Na(Re,re[r],re[r+1]),Na(Re,re[r],re[r+2])},s.enable=function(){if(Zt=window,ve=document,We=ve.documentElement,me=ve.body,kt&&(pl=kt.utils.toArray,ds=kt.utils.clamp,Oc=kt.core.suppressOverwrites||Oi,kt.core.globals("ScrollTrigger",s),me)){Pa=1,s.isTouch=Zt.matchMedia&&Zt.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Zt||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bm=[Zt,ve,We,me],Hm=Zt.innerHeight,Vm=Zt.innerWidth,In.register(kt),Ke(ve,"scroll",no);var n=me.style,i=n.borderTopStyle,r,o;for(n.borderTopStyle="solid",r=yi(me),we.m=Math.round(r.top+we.sc())||0,en.m=Math.round(r.left+en.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Ra=setInterval(Af,250),kt.delayedCall(.5,function(){return lo=0}),Ke(ve,"touchcancel",Oi),Ke(me,"touchstart",Oi),Fa(Ke,ve,"pointerdown,touchstart,mousedown",wf),Fa(Ke,ve,"pointerup,touchend,mouseup",Mf),_h=kt.utils.checkPrefix("transform"),Ja.push(_h),ur=Hn(),fl=kt.delayedCall(.2,ws).pause(),is=[ve,"visibilitychange",function(){var a=Zt.innerWidth,l=Zt.innerHeight;ve.hidden?(vf=a,bf=l):(vf!==a||bf!==l)&&ho()},ve,"DOMContentLoaded",ws,Zt,"load",ws,Zt,"resize",ho],Da(Ke),Jt.forEach(function(a){return a.enable(0,1)}),o=0;o<re.length;o+=3)Na(Re,re[o],re[o+1]),Na(Re,re[o],re[o+2])}},s.config=function(n){"limitCallbacks"in n&&(Bc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Ra)||(Ra=i)&&setInterval(Af,i),"ignoreMobileResize"in n&&(Um=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Da(Re)||Da(Ke,n.autoRefreshEvents||"none"),km=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Mn(n),o=re.indexOf(r),a=Bo(r);~o&&re.splice(o,a?6:2),i&&(a?ni.unshift(Zt,i,me,i,We,i):ni.unshift(r,i))},s.matchMedia=function(n){var i,r,o,a,l;for(r in n)o=ge.indexOf(r),a=n[r],bs=r,r==="all"?a():(i=Zt.matchMedia(r),i&&(i.matches&&(l=a()),~o?(ge[o+1]=Sf(ge[o+1],a),ge[o+2]=Sf(ge[o+2],l)):(o=ge.length,ge.push(r,a,l),i.addListener?i.addListener(Lf):i.addEventListener("change",Lf)),ge[o+3]=i.matches)),bs=0;return ge},s.clearMatchMedia=function(n){n||(ge.length=0),n=ge.indexOf(n),n>=0&&ge.splice(n,4)},s.isInViewport=function(n,i,r){var o=(Kn(n)?Mn(n):n).getBoundingClientRect(),a=o[r?Sr:Tr]*i||0;return r?o.right-a>0&&o.left+a<Zt.innerWidth:o.bottom-a>0&&o.top+a<Zt.innerHeight},s.positionInViewport=function(n,i,r){Kn(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[r?Sr:Tr],l=i==null?a/2:i in ml?ml[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/Zt.innerWidth:(o.top+l)/Zt.innerHeight},s}();te.version="3.10.2";te.saveStyles=function(s){return s?pl(s).forEach(function(t){if(t&&t.style){var e=Sn.indexOf(t);e>=0&&Sn.splice(e,5),Sn.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),kt.core.getCache(t),bs)}}):Sn};te.revert=function(s,t){return gl(!s,t)};te.create=function(s,t){return new te(s,t)};te.refresh=function(s){return s?ho():(ur||te.register())&&ws(!0)};te.update=Ol;te.clearScrollMemory=Zm;te.maxScroll=function(s,t){return _i(s,t?en:we)};te.getScrollFunc=function(s,t){return Ki(Mn(s),t?en:we)};te.getById=function(s){return vh[s]};te.getAll=function(){return Jt.filter(function(s){return s.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!Rn};te.snapDirectional=gu;te.addEventListener=function(s,t){var e=zo[s]||(zo[s]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(s,t){var e=zo[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var u=[],d=[],f=kt.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(g){u.length||f.restart(!0),u.push(g.trigger),d.push(g),r<=u.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Vn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Vn(r)&&(r=r(),Ke(te,"refresh",function(){return r=t.batchMax()})),pl(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(te.create(c))}),e};var Ff=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Hc=function(t){t===!0?(me.style.removeProperty("touch-action"),We.style.removeProperty("touch-action")):me.style.touchAction=We.style.touchAction=t?"pan-"+t:"none"},kM=function(t){Xa(t)||(t={}),t.preventDefault=t.isNormalizer=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r,o,a=0,l=Ki(We,we),c=Ki(We,en),h=1,u=Vn(i)?function(){return i(r)}:function(){return i||2.8},d,f,g=function(){return a=Hn()},p=function(){return d=!1},m=Oi,_=Oi,v=function(){o=_i(We,we),_=ds(0,o),n&&(m=ds(0,_i(We,en))),f=Ya},w=te.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),b=function(){if(d)return requestAnimationFrame(p),!0;d=!0},x,E,A,D,k,F=function(){v(),x.isActive()&&x.vars.scrollY>o&&x.resetTo("scrollY",_i(We,we))};return t.ignoreCheck=function(y){return w&&y.type==="touchmove"&&b()||h>1||r.isGesturing||y.touches&&y.touches.length>1},t.onPress=function(){var y=h;h=Zt.visualViewport&&Zt.visualViewport.scale||1,x.pause(),y!==h&&Hc(h>1?!0:n?!1:"x"),d=!1,E=c(),A=l(),v(),f=Ya},t.onRelease=t.onGestureStart=function(y,C){var G=y.event,P=G.changedTouches?G.changedTouches[0]:G;if(!C||Math.abs(y.x-y.startX)<=3&&Math.abs(y.y-y.startY)<=3)kt.delayedCall(.05,function(){if(Hn()-a>300&&!G.defaultPrevented){if(G.target.click)G.target.click();else if(D.createEvent){var N=D.createEvent("MouseEvents");N.initMouseEvent("click",!0,!0,Zt,1,P.screenX,P.screenY,P.clientX,P.clientY,!1,!1,!1,!1,0,null),G.target.dispatchEvent(N)}}}),k.restart(!0);else{var z=u(),O,V;n&&(O=c(),V=O+z*.05*-y.velocityX/.227/h,z*=Ff(c,O,V,_i(We,en)),x.vars.scrollX=m(V)),O=l(),V=O+z*.05*-y.velocityY/.227/h,z*=Ff(l,O,V,_i(We,we)),x.vars.scrollY=_(V),x.invalidate().duration(z).play(.01)}},t.onWheel=function(){return x._ts&&x.pause()},t.onChange=function(y,C,G,P,z){Ya!==f&&v(),C&&n&&c(m(P[2]===C?E+(y.startX-y.x)/h:c()+C-P[1])),G&&l(_(z[2]===G?A+(y.startY-y.y)/h:l()+G-z[1])),Ol()},t.onEnable=function(y){Hc(n?!1:"x"),Ke(Zt,"resize",F),y.target.addEventListener("click",g,{capture:!0})},t.onDisable=function(y){Hc(!0),Re(Zt,"resize",F),Re(y.target,"click",g)},r=new In(t),D=r.target.ownerDocument||ve,k=r._dc,x=kt.to(r,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:k.vars.onComplete}),r};te.sort=function(s){return Jt.sort(s||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};te.observe=function(s){return new In(s)};te.normalizeScroll=function(s){if(typeof s=="undefined")return mi;if(s===!0&&mi)return mi.enable();var t=s instanceof In;return mi&&(s===!1||t&&s!==mi)&&mi.kill(),s&&!t&&(s=kM(s)),mi=s&&s.enable()};te.core={_getVelocityProp:gh,_scrollers:re,_proxies:ni,bridge:{ss:function(){Rn||Cr("scrollStart"),Rn=Hn()},ref:function(){return Le}}};Wm()&&kt.registerPlugin(te);/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.1
 * @author George Michael Brower
 * @license MIT
 */class ii{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("name"),ii.nextNameID=ii.nextNameID||0,this.$name.id=`lil-gui-name-${++ii.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class UM extends ii{constructor(t,e,n){super(t,e,n,"boolean","label");this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Mh(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const HM={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Mh,toHexString:Mh},Ho={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},VM={isPrimitive:!1,match:Array.isArray,fromHexString(s,t,e=1){const n=Ho.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Ho.toHexString(i)}},GM={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=Ho.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Ho.toHexString(i)}},WM=[HM,Ho,VM,GM];function XM(s){return WM.find(t=>t.match(s))}class $M extends ii{constructor(t,e,n,i){super(t,e,n,"color");this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=XM(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=Mh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Vc extends ii{constructor(t,e,n){super(t,e,n,"function");this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class qM extends ii{constructor(t,e,n,i,r,o){super(t,e,n,"number");this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=()=>{const _=parseFloat(this.$input.value);isNaN(_)||this.setValue(this._clamp(_))},e=_=>{const v=parseFloat(this.$input.value);isNaN(v)||(this._snapClampSetValue(v+_),this.$input.value=this.getValue())},n=_=>{_.code==="Enter"&&this.$input.blur(),_.code==="ArrowUp"&&(_.preventDefault(),e(this._step*this._arrowKeyMultiplier(_))),_.code==="ArrowDown"&&(_.preventDefault(),e(this._step*this._arrowKeyMultiplier(_)*-1))},i=_=>{this._inputFocused&&(_.preventDefault(),e(this._step*this._normalizeMouseWheel(_)))};let r=!1,o,a,l,c,h;const u=5,d=_=>{o=_.clientX,a=l=_.clientY,r=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",g)},f=_=>{if(r){const v=_.clientX-o,w=_.clientY-a;Math.abs(w)>u?(_.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(v)>u&&g()}r||(h-=(_.clientY-l)*this._step*this._arrowKeyMultiplier(_),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)),l=_.clientY},g=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",g)},p=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",n),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(_,v,w,b,x)=>(_-v)/(w-v)*(x-b)+b,e=_=>{const v=this.$slider.getBoundingClientRect();let w=t(_,v.left,v.right,this._min,this._max);this._snapClampSetValue(w)},n=_=>{this._setDraggingStyle(!0),e(_.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=_=>{e(_.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=_=>{_.preventDefault(),this._setDraggingStyle(!0),e(_.touches[0].clientX),o=!1},h=_=>{_.touches.length>1||(this._hasScrollBar?(a=_.touches[0].clientX,l=_.touches[0].clientY,o=!0):c(_),window.addEventListener("touchmove",u),window.addEventListener("touchend",d))},u=_=>{if(o){const v=_.touches[0].clientX-a,w=_.touches[0].clientY-l;Math.abs(v)>Math.abs(w)?c(_):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else _.preventDefault(),e(_.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),g=400;let p;const m=_=>{if(Math.abs(_.deltaX)<Math.abs(_.deltaY)&&this._hasScrollBar)return;_.preventDefault();const w=this._normalizeMouseWheel(_)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(p),p=setTimeout(f,g)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class YM extends ii{constructor(t,e,n,i){super(t,e,n,"option");this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(i)?i:Object.values(i),this._names=Array.isArray(i)?i:Object.keys(i),this._names.forEach(r=>{const o=document.createElement("option");o.innerHTML=r,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class jM extends ii{constructor(t,e,n){super(t,e,n,"string");this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const JM=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function ZM(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Nf=!1;class _u{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",injectStyles:o=!0,touchStyles:a=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),a&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Nf&&o&&(ZM(JM),Nf=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,i,r){if(Object(n)===n)return new YM(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new qM(this,t,e,n,i,r);case"boolean":return new UM(this,t,e);case"string":return new jM(this,t,e);case"function":return new Vc(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new $M(this,t,e,n)}addFolder(t){return new _u({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Vc||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Vc)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}var KM=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Km={exports:{}};(function(s,t){(function(e,n){s.exports=n()})(KM,function(){var e=function(){function n(f){return o.appendChild(f.dom),f}function i(f){for(var g=0;g<o.children.length;g++)o.children[g].style.display=g===f?"block":"none";r=f}var r=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(f){f.preventDefault(),i(++r%o.children.length)},!1);var a=(performance||Date).now(),l=a,c=0,h=n(new e.Panel("FPS","#0ff","#002")),u=n(new e.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var d=n(new e.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:o,addPanel:n,showPanel:i,begin:function(){a=(performance||Date).now()},end:function(){c++;var f=(performance||Date).now();if(u.update(f-a,200),f>l+1e3&&(h.update(1e3*c/(f-l),100),l=f,c=0,d)){var g=performance.memory;d.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return f},update:function(){a=this.end()},domElement:o,setMode:i}};return e.Panel=function(n,i,r){var o=1/0,a=0,l=Math.round,c=l(window.devicePixelRatio||1),h=80*c,u=48*c,d=3*c,f=2*c,g=3*c,p=15*c,m=74*c,_=30*c,v=document.createElement("canvas");v.width=h,v.height=u,v.style.cssText="width:80px;height:48px";var w=v.getContext("2d");return w.font="bold "+9*c+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=r,w.fillRect(0,0,h,u),w.fillStyle=i,w.fillText(n,d,f),w.fillRect(g,p,m,_),w.fillStyle=r,w.globalAlpha=.9,w.fillRect(g,p,m,_),{dom:v,update:function(b,x){o=Math.min(o,b),a=Math.max(a,b),w.fillStyle=r,w.globalAlpha=1,w.fillRect(0,0,h,p),w.fillStyle=i,w.fillText(l(b)+" "+n+" ("+l(o)+"-"+l(a)+")",d,f),w.drawImage(v,g+c,p,m-c,_,g,p,m-c,_),w.fillRect(g+m-c,p,c,_),w.fillStyle=r,w.globalAlpha=.9,w.fillRect(g+m-c,p,c,l((1-b/x)*_))}}},e})})(Km);var QM=Km.exports;du.registerPlugin(te);const Qm=new _u({width:400});Qm.hide();const tS=new ew(!0),gr=document.getElementById("app");let ka;["load","resize"].forEach(s=>{window.addEventListener(s,()=>{ka={width:gr.clientWidth,height:gr.clientHeight,aspect:gr.clientWidth/gr.clientHeight},Lr.aspect=ka.aspect,Lr.updateProjectionMatrix(),tg.setSize(ka.width,ka.height,!1)})});const tg=new ie({canvas:gr,alpha:!0,antialias:!0}),Bl=new Fh,fs=new as;Bl.add(fs);const Lr=new tn(45,0,.1,1e3);Lr.position.z=5;fs.add(Lr);Qm.addFolder("Camera").add(Lr.position,"z",1,100,.01).name("Camera Z");const _l=new QM;_l.showPanel(0);document.body.appendChild(_l.dom);const eg=5e4,Ka=new Float32Array(eg*3);for(let s=0;s<eg*3;s++)Ka[s*3+0]=(Math.random()-.5)*20,Ka[s*3+1]=(Math.random()-.5)*40,Ka[s*3+2]=(Math.random()-.5)*20;const ng=new le;ng.setAttribute("position",new Se(Ka,3));const eS=new Ll({sizeAttenuation:!1,size:.03}),xu=new lp(ng,eS);Bl.add(xu);xu.position.set(0,-10,0);const xl=new Ue(new Xh(1.5,.65,100,100),new Wo({opacity:.7}));xl.position.x=1;const yu=new Ue(new Gh(2,2,64,32),new Wo({}));yu.position.y=-15;const yl=new Ue(new zs(2,2,2,12,12,12),new Wo({}));yl.position.y=-20;Bl.add(xl,yu,yl);du.to(Lr.position,{scrollTrigger:{scrub:4},duration:10,y:-20});const vl={x:0,y:0};window.addEventListener("mousemove",s=>{vl.x=s.clientX/gr.clientWidth-.5,vl.y=s.clientY/gr.clientHeight-.5});const ig=()=>{_l.begin();const s=tS.getElapsedTime();xl.rotation.x=s/40,xl.rotation.y=s/50,yu.rotation.x=s/10,yl.rotation.y=s/5,yl.rotation.x=s/25,xu.rotation.y=s/100;const t=vl.x,e=-vl.y;fs.position.x+=(t-fs.position.x)*.05,fs.position.y+=(e-fs.position.y)*.05,tg.render(Bl,Lr),_l.end(),requestAnimationFrame(ig)};ig();
