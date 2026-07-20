(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="160",yu=0,wo=1,Mu=2,xc=1,Su=2,zn=3,dn=0,Vt=1,cn=2,ni=0,nr=1,Ao=2,Ro=3,Co=4,Eu=5,gi=100,Tu=101,bu=102,Po=103,Lo=104,wu=200,Au=201,Ru=202,Cu=203,Wa=204,Xa=205,Pu=206,Lu=207,Du=208,Iu=209,Uu=210,Nu=211,Fu=212,Bu=213,Ou=214,zu=0,Gu=1,Hu=2,As=3,ku=4,Vu=5,Wu=6,Xu=7,yc=0,qu=1,Yu=2,ii=0,Zu=1,ju=2,Ku=3,Ju=4,Qu=5,$u=6,Mc=300,rr=301,sr=302,qa=303,Ya=304,Fs=306,Za=1e3,Tn=1001,ja=1002,it=1003,Do=1004,Js=1005,gt=1006,eh=1007,Pr=1008,Pn=1009,Ka=1010,Sc=1011,Bs=1012,Ar=1013,nn=1014,Ot=1015,an=1016,Ec=1017,Tc=1018,xi=1020,th=1021,vt=1023,nh=1024,ih=1025,yi=1026,ar=1027,bc=1028,fo=1029,wc=1030,Os=1031,Lr=1033,Qs=33776,$s=33777,ea=33778,ta=33779,Io=35840,Uo=35841,No=35842,Fo=35843,Ac=36196,Bo=37492,Oo=37496,zo=37808,Go=37809,Ho=37810,ko=37811,Vo=37812,Wo=37813,Xo=37814,qo=37815,Yo=37816,Zo=37817,jo=37818,Ko=37819,Jo=37820,Qo=37821,na=36492,$o=36494,el=36495,rh=36283,tl=36284,nl=36285,il=36286,Rc=3e3,Mi=3001,sh=3200,ah=3201,Cc=0,oh=1,un="",Dt="srgb",Wn="srgb-linear",po="display-p3",zs="display-p3-linear",Rs="linear",lt="srgb",Cs="rec709",Ps="p3",Ai=7680,rl=519,lh=512,ch=513,uh=514,Pc=515,hh=516,fh=517,dh=518,ph=519,sl=35044,bn="300 es",Ja=1035,kn=2e3,Ls=2001;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ia=Math.PI/180,Ds=180/Math.PI;function Ir(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function mh(i,e){return(i%e+e)%e}function ra(i,e,t){return(1-t)*i+t*e}function al(i){return(i&i-1)===0&&i!==0}function Qa(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,n,r,s,o,a,l,u){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u)}set(e,t,n,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=n,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],u=n[1],c=n[4],f=n[7],h=n[2],p=n[5],v=n[8],g=r[0],m=r[3],d=r[6],x=r[1],_=r[4],y=r[7],w=r[2],T=r[5],b=r[8];return s[0]=o*g+a*x+l*w,s[3]=o*m+a*_+l*T,s[6]=o*d+a*y+l*b,s[1]=u*g+c*x+f*w,s[4]=u*m+c*_+f*T,s[7]=u*d+c*y+f*b,s[2]=h*g+p*x+v*w,s[5]=h*m+p*_+v*T,s[8]=h*d+p*y+v*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-n*s*c+n*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=t*f+n*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*u-c*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(n*l-u*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(sa.makeScale(e,t)),this}rotate(e){return this.premultiply(sa.makeRotation(-e)),this}translate(e,t){return this.premultiply(sa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new Ye;function Lc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gh(){const i=Is("canvas");return i.style.display="block",i}const ol={};function Rr(i){i in ol||(ol[i]=!0,console.warn(i))}const ll=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cl=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gr={[Wn]:{transfer:Rs,primaries:Cs,toReference:i=>i,fromReference:i=>i},[Dt]:{transfer:lt,primaries:Cs,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[zs]:{transfer:Rs,primaries:Ps,toReference:i=>i.applyMatrix3(cl),fromReference:i=>i.applyMatrix3(ll)},[po]:{transfer:lt,primaries:Ps,toReference:i=>i.convertSRGBToLinear().applyMatrix3(cl),fromReference:i=>i.applyMatrix3(ll).convertLinearToSRGB()}},vh=new Set([Wn,zs]),rt={enabled:!0,_workingColorSpace:Wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!vh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Gr[e].toReference,r=Gr[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Gr[i].primaries},getTransfer:function(i){return i===un?Rs:Gr[i].transfer}};function ir(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function aa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class Dc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Is("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Is("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ir(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ir(t[n]/255)*255):t[n]=ir(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _h=0;class Ic{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_h++}),this.uuid=Ir(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oa(r[o].image)):s.push(oa(r[o]))}else s=oa(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xh=0;class Jt extends lr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=Tn,r=Tn,s=gt,o=Pr,a=vt,l=Pn,u=Jt.DEFAULT_ANISOTROPY,c=un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Ir(),this.name="",this.source=new Ic(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Mi?Dt:un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Za:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Za:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Dt?Mi:Rc}set encoding(e){Rr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Mi?Dt:un}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=Mc;Jt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],v=l[9],g=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(p+1)/2,w=(d+1)/2,T=(c+h)/4,b=(f+g)/4,D=(v+m)/4;return _>y&&_>w?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=T/n,s=b/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=T/r,s=D/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=b/s,r=D/s),this.set(n,r,s,t),this}let x=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(h-c)*(h-c));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-g)/x,this.z=(h-c)/x,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yh extends lr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Rr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Mi?Dt:un),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Jt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ic(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends yh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uc extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=it,this.minFilter=it,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mh extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=it,this.minFilter=it,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sh extends Qt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Ur{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],u=n[r+1],c=n[r+2],f=n[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==h||u!==p||c!==v){let m=1-a;const d=l*h+u*p+c*v+f*g,x=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,d*x);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*x;if(l=l*m+h*y,u=u*m+p*y,c=c*m+v*y,f=f*m+g*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],u=n[r+2],c=n[r+3],f=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+c*f+l*p-u*h,e[t+1]=l*v+c*h+u*f-a*p,e[t+2]=u*v+c*p+a*h-l*f,e[t+3]=c*v-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(n/2),c=a(r/2),f=a(s/2),h=l(n/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f-h*p*v;break;case"YXZ":this._x=h*c*f+u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f+h*p*v;break;case"ZXY":this._x=h*c*f-u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f-h*p*v;break;case"ZYX":this._x=h*c*f-u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f+h*p*v;break;case"YZX":this._x=h*c*f+u*p*v,this._y=u*p*f+h*c*v,this._z=u*c*v-h*p*f,this._w=u*c*f-h*p*v;break;case"XZY":this._x=h*c*f-u*p*v,this._y=u*p*f-h*c*v,this._z=u*c*v+h*p*f,this._w=u*c*f+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=n+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=n*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-n*u,this._z=s*c+o*u+n*l-r*a,this._w=o*c-n*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ul.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ul.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*n),c=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*u+o*f-a*c,this.y=n+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new P,ul=new Ur;class Wt{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xn):xn.fromBufferAttribute(s,o),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hr.copy(n.boundingBox)),Hr.applyMatrix4(e.matrixWorld),this.union(Hr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),kr.subVectors(this.max,pr),Ci.subVectors(e.a,pr),Pi.subVectors(e.b,pr),Li.subVectors(e.c,pr),Zn.subVectors(Pi,Ci),jn.subVectors(Li,Pi),hi.subVectors(Ci,Li);let t=[0,-Zn.z,Zn.y,0,-jn.z,jn.y,0,-hi.z,hi.y,Zn.z,0,-Zn.x,jn.z,0,-jn.x,hi.z,0,-hi.x,-Zn.y,Zn.x,0,-jn.y,jn.x,0,-hi.y,hi.x,0];return!ca(t,Ci,Pi,Li,kr)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,Ci,Pi,Li,kr))?!1:(Vr.crossVectors(Zn,jn),t=[Vr.x,Vr.y,Vr.z],ca(t,Ci,Pi,Li,kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new P,new P,new P,new P,new P,new P,new P,new P],xn=new P,Hr=new Wt,Ci=new P,Pi=new P,Li=new P,Zn=new P,jn=new P,hi=new P,pr=new P,kr=new P,Vr=new P,fi=new P;function ca(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){fi.fromArray(i,s);const a=r.x*Math.abs(fi.x)+r.y*Math.abs(fi.y)+r.z*Math.abs(fi.z),l=e.dot(fi),u=t.dot(fi),c=n.dot(fi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Eh=new Wt,mr=new P,ua=new P;class Gs{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Eh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(mr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(ua)),this.expandByPoint(mr.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Un=new P,ha=new P,Wr=new P,Kn=new P,fa=new P,Xr=new P,da=new P;class Nc{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Un.copy(this.origin).addScaledVector(this.direction,t),Un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ha.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Kn.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Wr),a=Kn.dot(this.direction),l=-Kn.dot(Wr),u=Kn.lengthSq(),c=Math.abs(1-o*o);let f,h,p,v;if(c>0)if(f=o*l-a,h=o*a-l,v=s*c,f>=0)if(h>=-v)if(h<=v){const g=1/c;f*=g,h*=g,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-v?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ha).addScaledVector(Wr,h),p}intersectSphere(e,t){Un.subVectors(e.center,this.origin);const n=Un.dot(this.direction),r=Un.dot(Un)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(n=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(n=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Un)!==null}intersectTriangle(e,t,n,r,s){fa.subVectors(t,e),Xr.subVectors(n,e),da.crossVectors(fa,Xr);let o=this.direction.dot(da),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,e);const l=a*this.direction.dot(Xr.crossVectors(Kn,Xr));if(l<0)return null;const u=a*this.direction.dot(fa.cross(Kn));if(u<0||l+u>o)return null;const c=-a*Kn.dot(da);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(e,t,n,r,s,o,a,l,u,c,f,h,p,v,g,m){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,u,c,f,h,p,v,g,m)}set(e,t,n,r,s,o,a,l,u,c,f,h,p,v,g,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=v,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),o=1/Di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,v=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+v*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,v=u*c,g=u*f;t[0]=h+g*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-v,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,v=u*c,g=u*f;t[0]=h-g*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,v=a*c,g=a*f;t[0]=l*c,t[4]=v*u-p,t[8]=h*u+g,t[1]=l*f,t[5]=g*u+h,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=g-h*f,t[8]=v*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+v,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+g,t[5]=o*c,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*c,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Th,e,bh)}lookAt(e,t,n){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Jn.crossVectors(n,$t),Jn.lengthSq()===0&&(Math.abs(n.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Jn.crossVectors(n,$t)),Jn.normalize(),qr.crossVectors($t,Jn),r[0]=Jn.x,r[4]=qr.x,r[8]=$t.x,r[1]=Jn.y,r[5]=qr.y,r[9]=$t.y,r[2]=Jn.z,r[6]=qr.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],u=n[12],c=n[1],f=n[5],h=n[9],p=n[13],v=n[2],g=n[6],m=n[10],d=n[14],x=n[3],_=n[7],y=n[11],w=n[15],T=r[0],b=r[4],D=r[8],M=r[12],E=r[1],U=r[5],L=r[9],O=r[13],C=r[2],N=r[6],B=r[10],q=r[14],Y=r[3],j=r[7],ee=r[11],ae=r[15];return s[0]=o*T+a*E+l*C+u*Y,s[4]=o*b+a*U+l*N+u*j,s[8]=o*D+a*L+l*B+u*ee,s[12]=o*M+a*O+l*q+u*ae,s[1]=c*T+f*E+h*C+p*Y,s[5]=c*b+f*U+h*N+p*j,s[9]=c*D+f*L+h*B+p*ee,s[13]=c*M+f*O+h*q+p*ae,s[2]=v*T+g*E+m*C+d*Y,s[6]=v*b+g*U+m*N+d*j,s[10]=v*D+g*L+m*B+d*ee,s[14]=v*M+g*O+m*q+d*ae,s[3]=x*T+_*E+y*C+w*Y,s[7]=x*b+_*U+y*N+w*j,s[11]=x*D+_*L+y*B+w*ee,s[15]=x*M+_*O+y*q+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],v=e[3],g=e[7],m=e[11],d=e[15];return v*(+s*l*f-r*u*f-s*a*h+n*u*h+r*a*p-n*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+n*o*p+s*a*c-n*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-n*o*h+n*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],v=e[12],g=e[13],m=e[14],d=e[15],x=f*m*u-g*h*u+g*l*p-a*m*p-f*l*d+a*h*d,_=v*h*u-c*m*u-v*l*p+o*m*p+c*l*d-o*h*d,y=c*g*u-v*f*u+v*a*p-o*g*p-c*a*d+o*f*d,w=v*f*l-c*g*l-v*a*h+o*g*h+c*a*m-o*f*m,T=t*x+n*_+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=x*b,e[1]=(g*h*s-f*m*s-g*r*p+n*m*p+f*r*d-n*h*d)*b,e[2]=(a*m*s-g*l*s+g*r*u-n*m*u-a*r*d+n*l*d)*b,e[3]=(f*l*s-a*h*s-f*r*u+n*h*u+a*r*p-n*l*p)*b,e[4]=_*b,e[5]=(c*m*s-v*h*s+v*r*p-t*m*p-c*r*d+t*h*d)*b,e[6]=(v*l*s-o*m*s-v*r*u+t*m*u+o*r*d-t*l*d)*b,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*b,e[8]=y*b,e[9]=(v*f*s-c*g*s-v*n*p+t*g*p+c*n*d-t*f*d)*b,e[10]=(o*g*s-v*a*s+v*n*u-t*g*u-o*n*d+t*a*d)*b,e[11]=(c*a*s-o*f*s-c*n*u+t*f*u+o*n*p-t*a*p)*b,e[12]=w*b,e[13]=(c*g*r-v*f*r+v*n*h-t*g*h-c*n*m+t*f*m)*b,e[14]=(v*a*r-o*g*r-v*n*l+t*g*l+o*n*m-t*a*m)*b,e[15]=(o*f*r-c*a*r+c*n*l-t*f*l-o*n*h+t*a*h)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+n,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+n,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,v=s*f,g=o*c,m=o*f,d=a*f,x=l*u,_=l*c,y=l*f,w=n.x,T=n.y,b=n.z;return r[0]=(1-(g+d))*w,r[1]=(p+y)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(h+d))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(v+_)*b,r[9]=(m-x)*b,r[10]=(1-(h+g))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const o=Di.set(r[4],r[5],r[6]).length(),a=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],yn.copy(this);const u=1/s,c=1/o,f=1/a;return yn.elements[0]*=u,yn.elements[1]*=u,yn.elements[2]*=u,yn.elements[4]*=c,yn.elements[5]*=c,yn.elements[6]*=c,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,t.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=kn){const l=this.elements,u=2*s/(t-e),c=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let p,v;if(a===kn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Ls)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=kn){const l=this.elements,u=1/(t-e),c=1/(n-r),f=1/(o-s),h=(t+e)*u,p=(n+r)*c;let v,g;if(a===kn)v=(o+s)*f,g=-2*f;else if(a===Ls)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Di=new P,yn=new Qe,Th=new P(0,0,0),bh=new P(1,1,1),Jn=new P,qr=new P,$t=new P,hl=new Qe,fl=new Ur;class Hs{constructor(e=0,t=0,n=0,r=Hs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fl.setFromEuler(this),this.setFromQuaternion(fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hs.DEFAULT_ORDER="XYZ";class mo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wh=0;const dl=new P,Ii=new Ur,Nn=new Qe,Yr=new P,gr=new P,Ah=new P,Rh=new Ur,pl=new P(1,0,0),ml=new P(0,1,0),gl=new P(0,0,1),Ch={type:"added"},Ph={type:"removed"};class Pt extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pt.DEFAULT_UP.clone();const e=new P,t=new Hs,n=new Ur,r=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Qe},normalMatrix:{value:new Ye}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(pl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return dl.copy(e).applyQuaternion(this.quaternion),this.position.add(dl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yr.copy(e):Yr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(gr,Yr,this.up):Nn.lookAt(Yr,gr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ch)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ph)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,Ah),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),c.length>0&&(n.images=c),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),v.length>0&&(n.nodes=v)}return n.object=r,n;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Pt.DEFAULT_UP=new P(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new P,Fn=new P,pa=new P,Bn=new P,Ui=new P,Ni=new P,vl=new P,ma=new P,ga=new P,va=new P;let Zr=!1;class Bt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Mn.subVectors(e,t),r.cross(Mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Mn.subVectors(r,t),Fn.subVectors(n,t),pa.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Fn),l=Mn.dot(pa),u=Fn.dot(Fn),c=Fn.dot(pa),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getUV(e,t,n,r,s,o,a,l){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),this.getInterpolation(e,t,n,r,s,o,a,l)}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static isFrontFacing(e,t,n,r){return Mn.subVectors(n,t),Fn.subVectors(e,t),Mn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Mn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Zr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zr=!0),Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return Bt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Ui.subVectors(r,n),Ni.subVectors(s,n),ma.subVectors(e,n);const l=Ui.dot(ma),u=Ni.dot(ma);if(l<=0&&u<=0)return t.copy(n);ga.subVectors(e,r);const c=Ui.dot(ga),f=Ni.dot(ga);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(n).addScaledVector(Ui,o);va.subVectors(e,s);const p=Ui.dot(va),v=Ni.dot(va);if(v>=0&&p<=v)return t.copy(s);const g=p*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(n).addScaledVector(Ni,a);const m=c*v-p*f;if(m<=0&&f-c>=0&&p-v>=0)return vl.subVectors(s,r),a=(f-c)/(f-c+(p-v)),t.copy(r).addScaledVector(vl,a);const d=1/(m+g+h);return o=g*d,a=h*d,t.copy(n).addScaledVector(Ui,o).addScaledVector(Ni,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function _a(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ce{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=rt.workingColorSpace){if(e=mh(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_a(o,s,e+1/3),this.g=_a(o,s,e),this.b=_a(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Dt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dt){const n=Fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ir(e.r),this.g=ir(e.g),this.b=ir(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dt){return rt.fromWorkingColorSpace(Nt.copy(this),e),Math.round(Ht(Nt.r*255,0,255))*65536+Math.round(Ht(Nt.g*255,0,255))*256+Math.round(Ht(Nt.b*255,0,255))}getHexString(e=Dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Dt){rt.fromWorkingColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==Dt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(jr);const n=ra(Qn.h,jr.h,t),r=ra(Qn.s,jr.s,t),s=ra(Qn.l,jr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ce;Ce.NAMES=Fc;let Lh=0;class Nr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Ir(),this.name="",this.type="Material",this.blending=nr,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=Xa,this.blendEquation=gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Bc extends Nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new P,Kr=new Oe;class Tt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ot,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sl&&(e.usage=this.usage),e}}class Oc extends Tt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class zc extends Tt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class on extends Tt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dh=0;const ln=new Qe,xa=new Pt,Fi=new P,en=new Wt,vr=new Wt,Ct=new P;class mn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=Ir(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lc(e)?zc:Oc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ye().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return xa.lookAt(e),xa.updateMatrix(),this.applyMatrix4(xa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new on(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];en.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(en.min,vr.min),en.expandByPoint(Ct),Ct.addVectors(en.max,vr.max),en.expandByPoint(Ct)):(en.expandByPoint(vr.min),en.expandByPoint(vr.max))}en.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ct));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ct.fromBufferAttribute(a,u),l&&(Fi.fromBufferAttribute(e,u),Ct.add(Fi)),r=Math.max(r,n.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let E=0;E<a;E++)u[E]=new P,c[E]=new P;const f=new P,h=new P,p=new P,v=new Oe,g=new Oe,m=new Oe,d=new P,x=new P;function _(E,U,L){f.fromArray(r,E*3),h.fromArray(r,U*3),p.fromArray(r,L*3),v.fromArray(o,E*2),g.fromArray(o,U*2),m.fromArray(o,L*2),h.sub(f),p.sub(f),g.sub(v),m.sub(v);const O=1/(g.x*m.y-m.x*g.y);isFinite(O)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(O),x.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(O),u[E].add(d),u[U].add(d),u[L].add(d),c[E].add(x),c[U].add(x),c[L].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let E=0,U=y.length;E<U;++E){const L=y[E],O=L.start,C=L.count;for(let N=O,B=O+C;N<B;N+=3)_(n[N+0],n[N+1],n[N+2])}const w=new P,T=new P,b=new P,D=new P;function M(E){b.fromArray(s,E*3),D.copy(b);const U=u[E];w.copy(U),w.sub(b.multiplyScalar(b.dot(U))).normalize(),T.crossVectors(D,U);const O=T.dot(c[E])<0?-1:1;l[E*4]=w.x,l[E*4+1]=w.y,l[E*4+2]=w.z,l[E*4+3]=O}for(let E=0,U=y.length;E<U;++E){const L=y[E],O=L.start,C=L.count;for(let N=O,B=O+C;N<B;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Tt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new P,s=new P,o=new P,a=new P,l=new P,u=new P,c=new P,f=new P;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,m),a.add(c),l.add(c),u.add(c),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),n.setXYZ(h+0,c.x,c.y,c.z),n.setXYZ(h+1,c.x,c.y,c.z),n.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let d=0;d<c;d++)h[v++]=u[p++]}return new Tt(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mn,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,n);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _l=new Qe,di=new Nc,Jr=new Gs,xl=new P,Bi=new P,Oi=new P,zi=new P,ya=new P,Qr=new P,$r=new Oe,es=new Oe,ts=new Oe,yl=new P,Ml=new P,Sl=new P,ns=new P,is=new P;class Je extends Pt{constructor(e=new mn,t=new Bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Qr.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(ya.fromBufferAttribute(f,e),o?Qr.addScaledVector(ya,c):Qr.addScaledVector(ya.sub(t),c))}t.add(Qr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(Jr.containsPoint(di.origin)===!1&&(di.intersectSphere(Jr,xl)===null||di.origin.distanceToSquared(xl)>(e.far-e.near)**2))&&(_l.copy(s).invert(),di.copy(e.ray).applyMatrix4(_l),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=_;y<w;y+=3){const T=a.getX(y),b=a.getX(y+1),D=a.getX(y+2);r=rs(this,d,e,n,u,c,f,T,b,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=rs(this,o,e,n,u,c,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],d=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=_;y<w;y+=3){const T=y,b=y+1,D=y+2;r=rs(this,d,e,n,u,c,f,T,b,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,d=g;m<d;m+=3){const x=m,_=m+1,y=m+2;r=rs(this,o,e,n,u,c,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ih(i,e,t,n,r,s,o,a){let l;if(e.side===Vt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===dn,a),l===null)return null;is.copy(a),is.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(is);return u<t.near||u>t.far?null:{distance:u,point:is.clone(),object:i}}function rs(i,e,t,n,r,s,o,a,l,u){i.getVertexPosition(a,Bi),i.getVertexPosition(l,Oi),i.getVertexPosition(u,zi);const c=Ih(i,e,t,n,Bi,Oi,zi,ns);if(c){r&&($r.fromBufferAttribute(r,a),es.fromBufferAttribute(r,l),ts.fromBufferAttribute(r,u),c.uv=Bt.getInterpolation(ns,Bi,Oi,zi,$r,es,ts,new Oe)),s&&($r.fromBufferAttribute(s,a),es.fromBufferAttribute(s,l),ts.fromBufferAttribute(s,u),c.uv1=Bt.getInterpolation(ns,Bi,Oi,zi,$r,es,ts,new Oe),c.uv2=c.uv1),o&&(yl.fromBufferAttribute(o,a),Ml.fromBufferAttribute(o,l),Sl.fromBufferAttribute(o,u),c.normal=Bt.getInterpolation(ns,Bi,Oi,zi,yl,Ml,Sl,new P),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new P,materialIndex:0};Bt.getNormal(Bi,Oi,zi,f.normal),c.face=f}return c}class Lt extends mn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;v("z","y","x",-1,-1,n,t,e,o,s,0),v("z","y","x",1,-1,n,t,-e,o,s,1),v("x","z","y",1,1,e,n,t,r,o,2),v("x","z","y",1,-1,e,n,-t,r,o,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new on(u,3)),this.setAttribute("normal",new on(c,3)),this.setAttribute("uv",new on(f,2));function v(g,m,d,x,_,y,w,T,b,D,M){const E=y/b,U=w/D,L=y/2,O=w/2,C=T/2,N=b+1,B=D+1;let q=0,Y=0;const j=new P;for(let ee=0;ee<B;ee++){const ae=ee*U-O;for(let ie=0;ie<N;ie++){const W=ie*E-L;j[g]=W*x,j[m]=ae*_,j[d]=C,u.push(j.x,j.y,j.z),j[g]=0,j[m]=0,j[d]=T>0?1:-1,c.push(j.x,j.y,j.z),f.push(ie/b),f.push(1-ee/D),q+=1}}for(let ee=0;ee<D;ee++)for(let ae=0;ae<b;ae++){const ie=h+ae+N*ee,W=h+ae+N*(ee+1),te=h+(ae+1)+N*(ee+1),he=h+(ae+1)+N*ee;l.push(ie,W,he),l.push(W,te,he),Y+=6}a.addGroup(p,Y,M),p+=Y,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Gt(i){const e={};for(let t=0;t<i.length;t++){const n=or(i[t]);for(const r in n)e[r]=n[r]}return e}function Uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Gc(i){return i.getRenderTarget()===null?i.outputColorSpace:rt.workingColorSpace}const Nh={clone:or,merge:Gt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends Nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hc extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jt extends Hc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ia*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gi=-90,Hi=1;class Oh extends Pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jt(Gi,Hi,e,t);r.layers=this.layers,this.add(r);const s=new jt(Gi,Hi,e,t);s.layers=this.layers,this.add(s);const o=new jt(Gi,Hi,e,t);o.layers=this.layers,this.add(o);const a=new jt(Gi,Hi,e,t);a.layers=this.layers,this.add(a);const l=new jt(Gi,Hi,e,t);l.layers=this.layers,this.add(l);const u=new jt(Gi,Hi,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class kc extends Jt{constructor(e,t,n,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,n,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zh extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Rr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Mi?Dt:un),this.texture=new kc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lt(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:ni});s.uniforms.tEquirect.value=t;const o=new Je(r,s),a=t.minFilter;return t.minFilter===Pr&&(t.minFilter=gt),new Oh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ma=new P,Gh=new P,Hh=new Ye;class Hn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ma.subVectors(n,t).cross(Gh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ma),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hh.getNormalMatrix(e),r=this.coplanarPoint(Ma).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Gs,ss=new P;class go{constructor(e=new Hn,t=new Hn,n=new Hn,r=new Hn,s=new Hn,o=new Hn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=kn){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],v=r[9],g=r[10],m=r[11],d=r[12],x=r[13],_=r[14],y=r[15];if(n[0].setComponents(l-s,h-u,m-p,y-d).normalize(),n[1].setComponents(l+s,h+u,m+p,y+d).normalize(),n[2].setComponents(l+o,h+c,m+v,y+x).normalize(),n[3].setComponents(l-o,h-c,m-v,y-x).normalize(),n[4].setComponents(l-a,h-f,m-g,y-_).normalize(),t===kn)n[5].setComponents(l+a,h+f,m+g,y+_).normalize();else if(t===Ls)n[5].setComponents(a,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ss.x=r.normal.x>0?e.max.x:e.min.x,ss.y=r.normal.y>0?e.max.y:e.min.y,ss.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function kh(i,e){const t=e.isWebGL2,n=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,v=i.createBuffer();i.bindBuffer(c,v),i.bufferData(c,f,h),u.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,v=c.updateRanges;if(i.bindBuffer(f,u),p.count===-1&&v.length===0&&i.bufferSubData(f,0,h),v.length!==0){for(let g=0,m=v.length;g<m;g++){const d=v[g];t?i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):i.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):i.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=n.get(u);c&&(i.deleteBuffer(c.buffer),n.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=n.get(u);(!h||h.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=n.get(u);if(f===void 0)n.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class pn extends mn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],v=[],g=[],m=[];for(let d=0;d<c;d++){const x=d*h-o;for(let _=0;_<u;_++){const y=_*f-s;v.push(y,-x,0),g.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let x=0;x<a;x++){const _=x+u*d,y=x+u*(d+1),w=x+1+u*(d+1),T=x+1+u*d;p.push(_,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Kh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jh=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ef=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,df=`#define PI 3.141592653589793
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
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
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
#endif`,mf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,bf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Df=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,If=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ff=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Bf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vf=`struct PhysicalMaterial {
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
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
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
}`,Wf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,id=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rd=`#ifdef USE_MORPHNORMALS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`#ifdef USE_MORPHTARGETS
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
#endif`,od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ld=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,md=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
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
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Md=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ed=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Td=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Ad=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rd=`float getShadowMask() {
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
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
}`,Cd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ld=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dd=`#ifdef USE_SKINNING
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
#endif`,Id=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ud=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Od=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
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
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Kd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Jd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
}`,Qd=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,np=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
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
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
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
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
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
}`,lp=`#define MATCAP
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
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
}`,hp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fp=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,pp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
#include <iridescence_pars_fragment>
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
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,gp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
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
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
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
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mp=`uniform float rotation;
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
}`,Sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Vh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:qh,alphatest_fragment:Yh,alphatest_pars_fragment:Zh,aomap_fragment:jh,aomap_pars_fragment:Kh,batching_pars_vertex:Jh,batching_vertex:Qh,begin_vertex:$h,beginnormal_vertex:ef,bsdfs:tf,iridescence_fragment:nf,bumpmap_pars_fragment:rf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:af,clipping_planes_pars_vertex:of,clipping_planes_vertex:lf,color_fragment:cf,color_pars_fragment:uf,color_pars_vertex:hf,color_vertex:ff,common:df,cube_uv_reflection_fragment:pf,defaultnormal_vertex:mf,displacementmap_pars_vertex:gf,displacementmap_vertex:vf,emissivemap_fragment:_f,emissivemap_pars_fragment:xf,colorspace_fragment:yf,colorspace_pars_fragment:Mf,envmap_fragment:Sf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Tf,envmap_pars_vertex:bf,envmap_physical_pars_fragment:Bf,envmap_vertex:wf,fog_vertex:Af,fog_pars_vertex:Rf,fog_fragment:Cf,fog_pars_fragment:Pf,gradientmap_pars_fragment:Lf,lightmap_fragment:Df,lightmap_pars_fragment:If,lights_lambert_fragment:Uf,lights_lambert_pars_fragment:Nf,lights_pars_begin:Ff,lights_toon_fragment:Of,lights_toon_pars_fragment:zf,lights_phong_fragment:Gf,lights_phong_pars_fragment:Hf,lights_physical_fragment:kf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Wf,lights_fragment_maps:Xf,lights_fragment_end:qf,logdepthbuf_fragment:Yf,logdepthbuf_pars_fragment:Zf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Kf,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:$f,map_particle_pars_fragment:ed,metalnessmap_fragment:td,metalnessmap_pars_fragment:nd,morphcolor_vertex:id,morphnormal_vertex:rd,morphtarget_pars_vertex:sd,morphtarget_vertex:ad,normal_fragment_begin:od,normal_fragment_maps:ld,normal_pars_fragment:cd,normal_pars_vertex:ud,normal_vertex:hd,normalmap_pars_fragment:fd,clearcoat_normal_fragment_begin:dd,clearcoat_normal_fragment_maps:pd,clearcoat_pars_fragment:md,iridescence_pars_fragment:gd,opaque_fragment:vd,packing:_d,premultiplied_alpha_fragment:xd,project_vertex:yd,dithering_fragment:Md,dithering_pars_fragment:Sd,roughnessmap_fragment:Ed,roughnessmap_pars_fragment:Td,shadowmap_pars_fragment:bd,shadowmap_pars_vertex:wd,shadowmap_vertex:Ad,shadowmask_pars_fragment:Rd,skinbase_vertex:Cd,skinning_pars_vertex:Pd,skinning_vertex:Ld,skinnormal_vertex:Dd,specularmap_fragment:Id,specularmap_pars_fragment:Ud,tonemapping_fragment:Nd,tonemapping_pars_fragment:Fd,transmission_fragment:Bd,transmission_pars_fragment:Od,uv_pars_fragment:zd,uv_pars_vertex:Gd,uv_vertex:Hd,worldpos_vertex:kd,background_vert:Vd,background_frag:Wd,backgroundCube_vert:Xd,backgroundCube_frag:qd,cube_vert:Yd,cube_frag:Zd,depth_vert:jd,depth_frag:Kd,distanceRGBA_vert:Jd,distanceRGBA_frag:Qd,equirect_vert:$d,equirect_frag:ep,linedashed_vert:tp,linedashed_frag:np,meshbasic_vert:ip,meshbasic_frag:rp,meshlambert_vert:sp,meshlambert_frag:ap,meshmatcap_vert:op,meshmatcap_frag:lp,meshnormal_vert:cp,meshnormal_frag:up,meshphong_vert:hp,meshphong_frag:fp,meshphysical_vert:dp,meshphysical_frag:pp,meshtoon_vert:mp,meshtoon_frag:gp,points_vert:vp,points_frag:_p,shadow_vert:xp,shadow_frag:yp,sprite_vert:Mp,sprite_frag:Sp},ue={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Cn={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Cn.physical={uniforms:Gt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const as={r:0,b:0,g:0};function Ep(i,e,t,n,r,s,o){const a=new Ce(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function v(m,d){let x=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),x=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Fs)?(c===void 0&&(c=new Je(new Lt(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:or(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=rt.getTransfer(_.colorSpace)!==lt,(f!==_||h!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Je(new pn(2,2),new zt({name:"BackgroundMaterial",uniforms:or(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=rt.getTransfer(_.colorSpace)!==lt,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=_,h=_.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,d){m.getRGB(as,Gc(i)),n.buffers.color.setClear(as.r,as.g,as.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(m,d=1){a.set(m),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function Tp(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(C,N,B,q,Y){let j=!1;if(o){const ee=g(q,B,N);u!==ee&&(u=ee,p(u.object)),j=d(C,q,B,Y),j&&x(C,q,B,Y)}else{const ee=N.wireframe===!0;(u.geometry!==q.id||u.program!==B.id||u.wireframe!==ee)&&(u.geometry=q.id,u.program=B.id,u.wireframe=ee,j=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,D(C,N,B,q),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(C){return n.isWebGL2?i.bindVertexArray(C):s.bindVertexArrayOES(C)}function v(C){return n.isWebGL2?i.deleteVertexArray(C):s.deleteVertexArrayOES(C)}function g(C,N,B){const q=B.wireframe===!0;let Y=a[C.id];Y===void 0&&(Y={},a[C.id]=Y);let j=Y[N.id];j===void 0&&(j={},Y[N.id]=j);let ee=j[q];return ee===void 0&&(ee=m(h()),j[q]=ee),ee}function m(C){const N=[],B=[],q=[];for(let Y=0;Y<r;Y++)N[Y]=0,B[Y]=0,q[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:q,object:C,attributes:{},index:null}}function d(C,N,B,q){const Y=u.attributes,j=N.attributes;let ee=0;const ae=B.getAttributes();for(const ie in ae)if(ae[ie].location>=0){const te=Y[ie];let he=j[ie];if(he===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(he=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(he=C.instanceColor)),te===void 0||te.attribute!==he||he&&te.data!==he.data)return!0;ee++}return u.attributesNum!==ee||u.index!==q}function x(C,N,B,q){const Y={},j=N.attributes;let ee=0;const ae=B.getAttributes();for(const ie in ae)if(ae[ie].location>=0){let te=j[ie];te===void 0&&(ie==="instanceMatrix"&&C.instanceMatrix&&(te=C.instanceMatrix),ie==="instanceColor"&&C.instanceColor&&(te=C.instanceColor));const he={};he.attribute=te,te&&te.data&&(he.data=te.data),Y[ie]=he,ee++}u.attributes=Y,u.attributesNum=ee,u.index=q}function _(){const C=u.newAttributes;for(let N=0,B=C.length;N<B;N++)C[N]=0}function y(C){w(C,0)}function w(C,N){const B=u.newAttributes,q=u.enabledAttributes,Y=u.attributeDivisors;B[C]=1,q[C]===0&&(i.enableVertexAttribArray(C),q[C]=1),Y[C]!==N&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),Y[C]=N)}function T(){const C=u.newAttributes,N=u.enabledAttributes;for(let B=0,q=N.length;B<q;B++)N[B]!==C[B]&&(i.disableVertexAttribArray(B),N[B]=0)}function b(C,N,B,q,Y,j,ee){ee===!0?i.vertexAttribIPointer(C,N,B,Y,j):i.vertexAttribPointer(C,N,B,q,Y,j)}function D(C,N,B,q){if(n.isWebGL2===!1&&(C.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Y=q.attributes,j=B.getAttributes(),ee=N.defaultAttributeValues;for(const ae in j){const ie=j[ae];if(ie.location>=0){let W=Y[ae];if(W===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){const te=W.normalized,he=W.itemSize,Te=t.get(W);if(Te===void 0)continue;const Ee=Te.buffer,Pe=Te.type,Ne=Te.bytesPerElement,Ae=n.isWebGL2===!0&&(Pe===i.INT||Pe===i.UNSIGNED_INT||W.gpuType===Ar);if(W.isInterleavedBufferAttribute){const je=W.data,G=je.stride,dt=W.offset;if(je.isInstancedInterleavedBuffer){for(let X=0;X<ie.locationSize;X++)w(ie.location+X,je.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let X=0;X<ie.locationSize;X++)y(ie.location+X);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let X=0;X<ie.locationSize;X++)b(ie.location+X,he/ie.locationSize,Pe,te,G*Ne,(dt+he/ie.locationSize*X)*Ne,Ae)}else{if(W.isInstancedBufferAttribute){for(let je=0;je<ie.locationSize;je++)w(ie.location+je,W.meshPerAttribute);C.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let je=0;je<ie.locationSize;je++)y(ie.location+je);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let je=0;je<ie.locationSize;je++)b(ie.location+je,he/ie.locationSize,Pe,te,he*Ne,he/ie.locationSize*je*Ne,Ae)}}else if(ee!==void 0){const te=ee[ae];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(ie.location,te);break;case 3:i.vertexAttrib3fv(ie.location,te);break;case 4:i.vertexAttrib4fv(ie.location,te);break;default:i.vertexAttrib1fv(ie.location,te)}}}}T()}function M(){L();for(const C in a){const N=a[C];for(const B in N){const q=N[B];for(const Y in q)v(q[Y].object),delete q[Y];delete N[B]}delete a[C]}}function E(C){if(a[C.id]===void 0)return;const N=a[C.id];for(const B in N){const q=N[B];for(const Y in q)v(q[Y].object),delete q[Y];delete N[B]}delete a[C.id]}function U(C){for(const N in a){const B=a[N];if(B[C.id]===void 0)continue;const q=B[C.id];for(const Y in q)v(q[Y].object),delete q[Y];delete B[C.id]}}function L(){O(),c=!0,u!==l&&(u=l,p(u.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:L,resetDefaultState:O,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function bp(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,f){i.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,v;if(r)p=i,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<h;v++)this.render(c[v],f[v]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let v=0;for(let g=0;g<h;g++)v+=f[g];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function wp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=h>0,y=o||e.has("OES_texture_float"),w=_&&y,T=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function Ap(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Hn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||r;return r=h,n=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const x=s?0:n,_=x*4;let y=d.clippingState||null;l.value=y,y=c(v,h,_,p);for(let w=0;w!==_;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function c(f,h,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const d=p+g*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==g;++_,y+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Rp(i){let e=new WeakMap;function t(o,a){return a===qa?o.mapping=rr:a===Ya&&(o.mapping=sr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qa||a===Ya)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new zh(l.height/2);return u.fromEquirectangularTexture(i,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class qn extends Hc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,El=[.125,.215,.35,.446,.526,.582],vi=20,Sa=new qn,Tl=new Ce;let Ea=null,Ta=0,ba=0;const mi=(1+Math.sqrt(5))/2,ki=1/mi,bl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,mi,ki),new P(0,mi,-ki),new P(ki,0,mi),new P(-ki,0,mi),new P(mi,ki,0),new P(-mi,ki,0)];class wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ea,Ta,ba),e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ea=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gt,minFilter:gt,generateMipmaps:!1,type:an,format:vt,colorSpace:Wn,depthBuffer:!1},r=Al(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Al(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cp(s)),this._blurMaterial=Pp(s,e,t)}return r}_compileMaterial(e){const t=new Je(this._lodPlanes[0],e);this._renderer.compile(t,Sa)}_sceneToCubeUV(e,t,n,r){const a=new jt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Tl),c.toneMapping=ii,c.autoClear=!1;const p=new Bc({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),v=new Je(new Lt,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Tl),g=!0);for(let d=0;d<6;d++){const x=d%3;x===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):x===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const _=this._cubeSize;os(r,x*_,d>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===rr||e.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Je(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;os(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bl[(r-1)%bl.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Je(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[n]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*vi-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):vi;m>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const d=[];let x=0;for(let b=0;b<vi;++b){const D=b/g,M=Math.exp(-D*D/2);d.push(M),b===0?x+=M:b<m&&(x+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/x;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=v,h.mipInt.value=_-n;const y=this._sizeLods[r],w=3*y*(r>_-$i?r-_+$i:0),T=4*(this._cubeSize-y);os(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Sa)}}function Cp(i){const e=[],t=[],n=[];let r=i;const s=i-$i+1+El.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-$i?l=El[o-i+$i-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,v=6,g=3,m=2,d=1,x=new Float32Array(g*v*p),_=new Float32Array(m*v*p),y=new Float32Array(d*v*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,D=T>2?0:-1,M=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];x.set(M,g*v*T),_.set(h,m*v*T);const E=[T,T,T,T,T,T];y.set(E,d*v*T)}const w=new mn;w.setAttribute("position",new Tt(x,g)),w.setAttribute("uv",new Tt(_,m)),w.setAttribute("faceIndex",new Tt(y,d)),e.push(w),r>$i&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Al(i,e,t){const n=new Qt(i,e,t);return n.texture.mapping=Fs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function os(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Pp(i,e,t){const n=new Float32Array(vi),r=new P(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Rl(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:ni,depthTest:!1,depthWrite:!1})}function Cl(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function Lp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,u=l===qa||l===Ya,c=l===rr||l===sr;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new wl(i)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new wl(i));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Dp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ip(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let m=0,d=g.length;m<d;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const v in h)e.update(h[v],i.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,d=g.length;m<d;m++)e.update(g[m],i.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let _=0,y=x.length;_<y;_+=3){const w=x[_+0],T=x[_+1],b=x[_+2];h.push(w,T,T,b,b,w)}}else if(v!==void 0){const x=v.array;g=v.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const w=_+0,T=_+1,b=_+2;h.push(w,T,T,b,b,w)}}else return;const m=new(Lc(h)?zc:Oc)(h,1);m.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function Up(i,e,t,n){const r=n.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,v){i.drawElements(s,v,a,p*l),t.update(v,s,1)}function f(p,v,g){if(g===0)return;let m,d;if(r)m=i,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,v,a,p*l,g),t.update(v,s,g)}function h(p,v,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<g;d++)this.render(p[d]/l,v[d]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,g);let d=0;for(let x=0;x<g;x++)d+=v[x];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function Np(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Fp(i,e){return i[0]-e[0]}function Bp(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Op(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new ct,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let N=function(){O.dispose(),s.delete(c),c.removeEventListener("dispose",N)};var p=N;m!==void 0&&m.texture.dispose();const _=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,w=c.morphAttributes.color!==void 0,T=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],D=c.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let E=c.attributes.position.count*M,U=1;E>e.maxTextureSize&&(U=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const L=new Float32Array(E*U*4*g),O=new Uc(L,E,U,g);O.type=Ot,O.needsUpdate=!0;const C=M*4;for(let B=0;B<g;B++){const q=T[B],Y=b[B],j=D[B],ee=E*U*4*B;for(let ae=0;ae<q.count;ae++){const ie=ae*C;_===!0&&(o.fromBufferAttribute(q,ae),L[ee+ie+0]=o.x,L[ee+ie+1]=o.y,L[ee+ie+2]=o.z,L[ee+ie+3]=0),y===!0&&(o.fromBufferAttribute(Y,ae),L[ee+ie+4]=o.x,L[ee+ie+5]=o.y,L[ee+ie+6]=o.z,L[ee+ie+7]=0),w===!0&&(o.fromBufferAttribute(j,ae),L[ee+ie+8]=o.x,L[ee+ie+9]=o.y,L[ee+ie+10]=o.z,L[ee+ie+11]=j.itemSize===4?o.w:1)}}m={count:g,texture:O,size:new Oe(E,U)},s.set(c,m),c.addEventListener("dispose",N)}let d=0;for(let _=0;_<h.length;_++)d+=h[_];const x=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let g=n[c.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];n[c.id]=g}for(let y=0;y<v;y++){const w=g[y];w[0]=y,w[1]=h[y]}g.sort(Bp);for(let y=0;y<8;y++)y<v&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Fp);const m=c.morphAttributes.position,d=c.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],b=w[1];T!==Number.MAX_SAFE_INTEGER&&b?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),d&&c.getAttribute("morphNormal"+y)!==d[T]&&c.setAttribute("morphNormal"+y,d[T]),r[y]=b,x+=b):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const _=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",_),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function zp(i,e,t,n){let r=new WeakMap;function s(l){const u=n.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Wc extends Jt{constructor(e,t,n,r,s,o,a,l,u,c){if(c=c!==void 0?c:yi,c!==yi&&c!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===yi&&(n=nn),n===void 0&&c===ar&&(n=xi),super(null,r,s,o,a,l,c,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:it,this.minFilter=l!==void 0?l:it,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Xc=new Jt,qc=new Wc(1,1);qc.compareFunction=Pc;const Yc=new Uc,Zc=new Mh,jc=new kc,Pl=[],Ll=[],Dl=new Float32Array(16),Il=new Float32Array(9),Ul=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Pl[r];if(s===void 0&&(s=new Float32Array(r),Pl[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ks(i,e){let t=Ll[e];t===void 0&&(t=new Int32Array(e),Ll[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Gp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),wt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),wt(t,e)}}function Vp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),wt(t,e)}}function Wp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Ul.set(n),i.uniformMatrix2fv(this.addr,!1,Ul),wt(t,n)}}function Xp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Il.set(n),i.uniformMatrix3fv(this.addr,!1,Il),wt(t,n)}}function qp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(bt(t,n))return;Dl.set(n),i.uniformMatrix4fv(this.addr,!1,Dl),wt(t,n)}}function Yp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),wt(t,e)}}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),wt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),wt(t,e)}}function Jp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),wt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),wt(t,e)}}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),wt(t,e)}}function tm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?qc:Xc;t.setTexture2D(e||s,r)}function nm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Zc,r)}function im(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||jc,r)}function rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Yc,r)}function sm(i){switch(i){case 5126:return Gp;case 35664:return Hp;case 35665:return kp;case 35666:return Vp;case 35674:return Wp;case 35675:return Xp;case 35676:return qp;case 5124:case 35670:return Yp;case 35667:case 35671:return Zp;case 35668:case 35672:return jp;case 35669:case 35673:return Kp;case 5125:return Jp;case 36294:return Qp;case 36295:return $p;case 36296:return em;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return nm;case 35680:case 36300:case 36308:case 36293:return im;case 36289:case 36303:case 36311:case 36292:return rm}}function am(i,e){i.uniform1fv(this.addr,e)}function om(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function lm(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function cm(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function um(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function hm(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fm(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dm(i,e){i.uniform1iv(this.addr,e)}function pm(i,e){i.uniform2iv(this.addr,e)}function mm(i,e){i.uniform3iv(this.addr,e)}function gm(i,e){i.uniform4iv(this.addr,e)}function vm(i,e){i.uniform1uiv(this.addr,e)}function _m(i,e){i.uniform2uiv(this.addr,e)}function xm(i,e){i.uniform3uiv(this.addr,e)}function ym(i,e){i.uniform4uiv(this.addr,e)}function Mm(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Xc,s[o])}function Sm(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zc,s[o])}function Em(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||jc,s[o])}function Tm(i,e,t){const n=this.cache,r=e.length,s=ks(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),wt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Yc,s[o])}function bm(i){switch(i){case 5126:return am;case 35664:return om;case 35665:return lm;case 35666:return cm;case 35674:return um;case 35675:return hm;case 35676:return fm;case 5124:case 35670:return dm;case 35667:case 35671:return pm;case 35668:case 35672:return mm;case 35669:case 35673:return gm;case 5125:return vm;case 36294:return _m;case 36295:return xm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Mm;case 35679:case 36299:case 36307:return Sm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return Tm}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sm(t.type)}}class Am{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=bm(t.type)}}class Rm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Nl(i,e){i.seq.push(e),i.map[e.id]=e}function Cm(i,e,t){const n=i.name,r=n.length;for(wa.lastIndex=0;;){const s=wa.exec(n),o=wa.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Nl(t,u===void 0?new wm(a,i,e):new Am(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Rm(a),Nl(t,f)),t=f}}}class Ts{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Cm(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Fl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pm=37297;let Lm=0;function Dm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Im(i){const e=rt.getPrimaries(rt.workingColorSpace),t=rt.getPrimaries(i);let n;switch(e===t?n="":e===Ps&&t===Cs?n="LinearDisplayP3ToLinearSRGB":e===Cs&&t===Ps&&(n="LinearSRGBToLinearDisplayP3"),i){case Wn:case zs:return[n,"LinearTransferOETF"];case Dt:case po:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Dm(i.getShaderSource(e),o)}else return r}function Um(i,e){const t=Im(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Nm(i,e){let t;switch(e){case Zu:t="Linear";break;case ju:t="Reinhard";break;case Ku:t="OptimizedCineon";break;case Ju:t="ACESFilmic";break;case $u:t="AgX";break;case Qu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Fm(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(er).join(`
`)}function Bm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(er).join(`
`)}function Om(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function er(i){return i!==""}function Ol(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gm=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Gm,km)}const Hm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function km(i,e){let t=Ze[e];if(t===void 0){const n=Hm.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const Vm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(i){return i.replace(Vm,Wm)}function Wm(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hl(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Xm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Su?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function qm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case sr:e="ENVMAP_TYPE_CUBE";break;case Fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ym(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case sr:e="ENVMAP_MODE_REFRACTION";break}return e}function Zm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yc:e="ENVMAP_BLENDING_MULTIPLY";break;case qu:e="ENVMAP_BLENDING_MIX";break;case Yu:e="ENVMAP_BLENDING_ADD";break}return e}function jm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Km(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Xm(t),u=qm(t),c=Ym(t),f=Zm(t),h=jm(t),p=t.isWebGL2?"":Fm(t),v=Bm(t),g=Om(s),m=r.createProgram();let d,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),d.length>0&&(d+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(er).join(`
`),x.length>0&&(x+=`
`)):(d=[Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),x=[p,Hl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?Ze.tonemapping_pars_fragment:"",t.toneMapping!==ii?Nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Um("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(er).join(`
`)),o=$a(o),o=Ol(o,t),o=zl(o,t),a=$a(a),a=Ol(a,t),a=zl(a,t),o=Gl(o),a=Gl(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,d=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===bn?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bn?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+d+o,w=_+x+a,T=Fl(r,r.VERTEX_SHADER,y),b=Fl(r,r.FRAGMENT_SHADER,w);r.attachShader(m,T),r.attachShader(m,b),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function D(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(m).trim(),C=r.getShaderInfoLog(T).trim(),N=r.getShaderInfoLog(b).trim();let B=!0,q=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,m,T,b);else{const Y=Bl(r,T,"vertex"),j=Bl(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+O+`
`+Y+`
`+j)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(C===""||N==="")&&(q=!1);q&&(L.diagnostics={runnable:B,programLog:O,vertexShader:{log:C,prefix:d},fragmentShader:{log:N,prefix:x}})}r.deleteShader(T),r.deleteShader(b),M=new Ts(r,m),E=zm(r,m)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let E;this.getAttributes=function(){return E===void 0&&D(this),E};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(m,Pm)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lm++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=b,this}let Jm=0;class Qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new $m(e),t.set(e,n)),n}}class $m{constructor(e){this.id=Jm++,this.code=e,this.usedTimes=0}}function eg(i,e,t,n,r,s,o){const a=new mo,l=new Qm,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,E,U,L,O){const C=L.fog,N=O.geometry,B=M.isMeshStandardMaterial?L.environment:null,q=(M.isMeshStandardMaterial?t:e).get(M.envMap||B),Y=q&&q.mapping===Fs?q.image.height:null,j=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ee=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,ae=ee!==void 0?ee.length:0;let ie=0;N.morphAttributes.position!==void 0&&(ie=1),N.morphAttributes.normal!==void 0&&(ie=2),N.morphAttributes.color!==void 0&&(ie=3);let W,te,he,Te;if(j){const At=Cn[j];W=At.vertexShader,te=At.fragmentShader}else W=M.vertexShader,te=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),Te=l.getFragmentShaderID(M);const Ee=i.getRenderTarget(),Pe=O.isInstancedMesh===!0,Ne=O.isBatchedMesh===!0,Ae=!!M.map,je=!!M.matcap,G=!!q,dt=!!M.aoMap,X=!!M.lightMap,re=!!M.bumpMap,se=!!M.normalMap,ze=!!M.displacementMap,ge=!!M.emissiveMap,A=!!M.metalnessMap,S=!!M.roughnessMap,z=M.anisotropy>0,$=M.clearcoat>0,K=M.iridescence>0,ne=M.sheen>0,Se=M.transmission>0,le=z&&!!M.anisotropyMap,ve=$&&!!M.clearcoatMap,xe=$&&!!M.clearcoatNormalMap,De=$&&!!M.clearcoatRoughnessMap,Q=K&&!!M.iridescenceMap,Ke=K&&!!M.iridescenceThicknessMap,Z=ne&&!!M.sheenColorMap,we=ne&&!!M.sheenRoughnessMap,ye=!!M.specularMap,fe=!!M.specularColorMap,Fe=!!M.specularIntensityMap,He=Se&&!!M.transmissionMap,at=Se&&!!M.thicknessMap,ke=!!M.gradientMap,oe=!!M.alphaMap,I=M.alphaTest>0,de=!!M.alphaHash,pe=!!M.extensions,Ie=!!N.attributes.uv1,Re=!!N.attributes.uv2,st=!!N.attributes.uv3;let et=ii;return M.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(et=i.toneMapping),{isWebGL2:c,shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:W,fragmentShader:te,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ne,instancing:Pe,instancingColor:Pe&&O.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Wn,map:Ae,matcap:je,envMap:G,envMapMode:G&&q.mapping,envMapCubeUVHeight:Y,aoMap:dt,lightMap:X,bumpMap:re,normalMap:se,displacementMap:h&&ze,emissiveMap:ge,normalMapObjectSpace:se&&M.normalMapType===oh,normalMapTangentSpace:se&&M.normalMapType===Cc,metalnessMap:A,roughnessMap:S,anisotropy:z,anisotropyMap:le,clearcoat:$,clearcoatMap:ve,clearcoatNormalMap:xe,clearcoatRoughnessMap:De,iridescence:K,iridescenceMap:Q,iridescenceThicknessMap:Ke,sheen:ne,sheenColorMap:Z,sheenRoughnessMap:we,specularMap:ye,specularColorMap:fe,specularIntensityMap:Fe,transmission:Se,transmissionMap:He,thicknessMap:at,gradientMap:ke,opaque:M.transparent===!1&&M.blending===nr,alphaMap:oe,alphaTest:I,alphaHash:de,combine:M.combine,mapUv:Ae&&g(M.map.channel),aoMapUv:dt&&g(M.aoMap.channel),lightMapUv:X&&g(M.lightMap.channel),bumpMapUv:re&&g(M.bumpMap.channel),normalMapUv:se&&g(M.normalMap.channel),displacementMapUv:ze&&g(M.displacementMap.channel),emissiveMapUv:ge&&g(M.emissiveMap.channel),metalnessMapUv:A&&g(M.metalnessMap.channel),roughnessMapUv:S&&g(M.roughnessMap.channel),anisotropyMapUv:le&&g(M.anisotropyMap.channel),clearcoatMapUv:ve&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:xe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:Z&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(M.sheenRoughnessMap.channel),specularMapUv:ye&&g(M.specularMap.channel),specularColorMapUv:fe&&g(M.specularColorMap.channel),specularIntensityMapUv:Fe&&g(M.specularIntensityMap.channel),transmissionMapUv:He&&g(M.transmissionMap.channel),thicknessMapUv:at&&g(M.thicknessMap.channel),alphaMapUv:oe&&g(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(se||z),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:Ie,vertexUv2s:Re,vertexUv3s:st,pointsUvs:O.isPoints===!0&&!!N.attributes.uv&&(Ae||oe),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ie,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ae&&M.map.isVideoTexture===!0&&rt.getTransfer(M.map.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===cn,flipSided:M.side===Vt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:pe&&M.extensions.derivatives===!0,extensionFragDepth:pe&&M.extensions.fragDepth===!0,extensionDrawBuffers:pe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:pe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:pe&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)E.push(U),E.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(x(E,M),_(E,M),E.push(i.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function x(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function _(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const E=v[M.type];let U;if(E){const L=Cn[E];U=Nh.clone(L.uniforms)}else U=M.uniforms;return U}function w(M,E){let U;for(let L=0,O=u.length;L<O;L++){const C=u[L];if(C.cacheKey===E){U=C,++U.usedTimes;break}}return U===void 0&&(U=new Km(i,E,M,s),u.push(U)),U}function T(M){if(--M.usedTimes===0){const E=u.indexOf(M);u[E]=u[u.length-1],u.pop(),M.destroy()}}function b(M){l.remove(M)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:w,releaseProgram:T,releaseShaderCache:b,programs:u,dispose:D}}function tg(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function ng(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,p,v,g,m){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},i[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=g,d.group=m),e++,d}function a(f,h,p,v,g,m){const d=o(f,h,p,v,g,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,v,g,m){const d=o(f,h,p,v,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||ng),n.length>1&&n.sort(h||kl),r.length>1&&r.sort(h||kl)}function c(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function ig(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Vl,i.set(n,[o])):r>=s.length?(o=new Vl,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function rg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ce};break;case"SpotLight":t={position:new P,direction:new P,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function sg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ag=0;function og(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lg(i,e){const t=new rg,n=sg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new P);const s=new P,o=new Qe,a=new Qe;function l(c,f){let h=0,p=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let g=0,m=0,d=0,x=0,_=0,y=0,w=0,T=0,b=0,D=0,M=0;c.sort(og);const E=f===!0?Math.PI:1;for(let L=0,O=c.length;L<O;L++){const C=c[L],N=C.color,B=C.intensity,q=C.distance,Y=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*B*E,p+=N.g*B*E,v+=N.b*B*E;else if(C.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(C.sh.coefficients[j],B);M++}else if(C.isDirectionalLight){const j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity*E),C.castShadow){const ee=C.shadow,ae=n.get(C);ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,r.directionalShadow[g]=ae,r.directionalShadowMap[g]=Y,r.directionalShadowMatrix[g]=C.shadow.matrix,y++}r.directional[g]=j,g++}else if(C.isSpotLight){const j=t.get(C);j.position.setFromMatrixPosition(C.matrixWorld),j.color.copy(N).multiplyScalar(B*E),j.distance=q,j.coneCos=Math.cos(C.angle),j.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),j.decay=C.decay,r.spot[d]=j;const ee=C.shadow;if(C.map&&(r.spotLightMap[b]=C.map,b++,ee.updateMatrices(C),C.castShadow&&D++),r.spotLightMatrix[d]=ee.matrix,C.castShadow){const ae=n.get(C);ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,r.spotShadow[d]=ae,r.spotShadowMap[d]=Y,T++}d++}else if(C.isRectAreaLight){const j=t.get(C);j.color.copy(N).multiplyScalar(B),j.halfWidth.set(C.width*.5,0,0),j.halfHeight.set(0,C.height*.5,0),r.rectArea[x]=j,x++}else if(C.isPointLight){const j=t.get(C);if(j.color.copy(C.color).multiplyScalar(C.intensity*E),j.distance=C.distance,j.decay=C.decay,C.castShadow){const ee=C.shadow,ae=n.get(C);ae.shadowBias=ee.bias,ae.shadowNormalBias=ee.normalBias,ae.shadowRadius=ee.radius,ae.shadowMapSize=ee.mapSize,ae.shadowCameraNear=ee.camera.near,ae.shadowCameraFar=ee.camera.far,r.pointShadow[m]=ae,r.pointShadowMap[m]=Y,r.pointShadowMatrix[m]=C.shadow.matrix,w++}r.point[m]=j,m++}else if(C.isHemisphereLight){const j=t.get(C);j.skyColor.copy(C.color).multiplyScalar(B*E),j.groundColor.copy(C.groundColor).multiplyScalar(B*E),r.hemi[_]=j,_++}}x>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const U=r.hash;(U.directionalLength!==g||U.pointLength!==m||U.spotLength!==d||U.rectAreaLength!==x||U.hemiLength!==_||U.numDirectionalShadows!==y||U.numPointShadows!==w||U.numSpotShadows!==T||U.numSpotMaps!==b||U.numLightProbes!==M)&&(r.directional.length=g,r.spot.length=d,r.rectArea.length=x,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=M,U.directionalLength=g,U.pointLength=m,U.spotLength=d,U.rectAreaLength=x,U.hemiLength=_,U.numDirectionalShadows=y,U.numPointShadows=w,U.numSpotShadows=T,U.numSpotMaps=b,U.numLightProbes=M,r.version=ag++)}function u(c,f){let h=0,p=0,v=0,g=0,m=0;const d=f.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){const y=c[x];if(y.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(y.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),v++}else if(y.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function Wl(i,e){const t=new lg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function u(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function cg(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Wl(i,e),t.set(s,[l])):o>=a.length?(l=new Wl(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class ug extends Nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hg extends Nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`;function pg(i,e,t){let n=new go;const r=new Oe,s=new Oe,o=new ct,a=new ug({depthPacking:ah}),l=new hg,u={},c=t.maxTextureSize,f={[dn]:Vt,[Vt]:dn,[cn]:cn},h=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:fg,fragmentShader:dg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new mn;v.setAttribute("position",new Tt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Je(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let d=this.type;this.render=function(T,b,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ni),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const O=d!==zn&&this.type===zn,C=d===zn&&this.type!==zn;for(let N=0,B=T.length;N<B;N++){const q=T[N],Y=q.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const j=Y.getFrameExtents();if(r.multiply(j),s.copy(Y.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/j.x),r.x=s.x*j.x,Y.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/j.y),r.y=s.y*j.y,Y.mapSize.y=s.y)),Y.map===null||O===!0||C===!0){const ae=this.type!==zn?{minFilter:it,magFilter:it}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Qt(r.x,r.y,ae),Y.map.texture.name=q.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const ee=Y.getViewportCount();for(let ae=0;ae<ee;ae++){const ie=Y.getViewport(ae);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),L.viewport(o),Y.updateMatrices(q,ae),n=Y.getFrustum(),y(b,D,Y.camera,q,this.type)}Y.isPointLightShadow!==!0&&this.type===zn&&x(Y,D),Y.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,E,U)};function x(T,b){const D=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qt(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(b,null,D,h,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(b,null,D,p,g,null)}function _(T,b,D,M){let E=null;const U=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)E=U;else if(E=D.isPointLight===!0?l:a,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const L=E.uuid,O=b.uuid;let C=u[L];C===void 0&&(C={},u[L]=C);let N=C[O];N===void 0&&(N=E.clone(),C[O]=N,b.addEventListener("dispose",w)),E=N}if(E.visible=b.visible,E.wireframe=b.wireframe,M===zn?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:f[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const L=i.properties.get(E);L.light=D}return E}function y(T,b,D,M,E){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===zn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const O=e.update(T),C=T.material;if(Array.isArray(C)){const N=O.groups;for(let B=0,q=N.length;B<q;B++){const Y=N[B],j=C[Y.materialIndex];if(j&&j.visible){const ee=_(T,j,M,E);T.onBeforeShadow(i,T,b,D,O,ee,Y),i.renderBufferDirect(D,null,O,ee,T,Y),T.onAfterShadow(i,T,b,D,O,ee,Y)}}}else if(C.visible){const N=_(T,C,M,E);T.onBeforeShadow(i,T,b,D,O,N,null),i.renderBufferDirect(D,null,O,N,T,null),T.onAfterShadow(i,T,b,D,O,N,null)}}const L=T.children;for(let O=0,C=L.length;O<C;O++)y(L[O],b,D,M,E)}function w(T){T.target.removeEventListener("dispose",w);for(const D in u){const M=u[D],E=T.target.uuid;E in M&&(M[E].dispose(),delete M[E])}}}function mg(i,e,t){const n=t.isWebGL2;function r(){let I=!1;const de=new ct;let pe=null;const Ie=new ct(0,0,0,0);return{setMask:function(Re){pe!==Re&&!I&&(i.colorMask(Re,Re,Re,Re),pe=Re)},setLocked:function(Re){I=Re},setClear:function(Re,st,et,_t,At){At===!0&&(Re*=_t,st*=_t,et*=_t),de.set(Re,st,et,_t),Ie.equals(de)===!1&&(i.clearColor(Re,st,et,_t),Ie.copy(de))},reset:function(){I=!1,pe=null,Ie.set(-1,0,0,0)}}}function s(){let I=!1,de=null,pe=null,Ie=null;return{setTest:function(Re){Re?Ne(i.DEPTH_TEST):Ae(i.DEPTH_TEST)},setMask:function(Re){de!==Re&&!I&&(i.depthMask(Re),de=Re)},setFunc:function(Re){if(pe!==Re){switch(Re){case zu:i.depthFunc(i.NEVER);break;case Gu:i.depthFunc(i.ALWAYS);break;case Hu:i.depthFunc(i.LESS);break;case As:i.depthFunc(i.LEQUAL);break;case ku:i.depthFunc(i.EQUAL);break;case Vu:i.depthFunc(i.GEQUAL);break;case Wu:i.depthFunc(i.GREATER);break;case Xu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Re}},setLocked:function(Re){I=Re},setClear:function(Re){Ie!==Re&&(i.clearDepth(Re),Ie=Re)},reset:function(){I=!1,de=null,pe=null,Ie=null}}}function o(){let I=!1,de=null,pe=null,Ie=null,Re=null,st=null,et=null,_t=null,At=null;return{setTest:function(tt){I||(tt?Ne(i.STENCIL_TEST):Ae(i.STENCIL_TEST))},setMask:function(tt){de!==tt&&!I&&(i.stencilMask(tt),de=tt)},setFunc:function(tt,yt,qt){(pe!==tt||Ie!==yt||Re!==qt)&&(i.stencilFunc(tt,yt,qt),pe=tt,Ie=yt,Re=qt)},setOp:function(tt,yt,qt){(st!==tt||et!==yt||_t!==qt)&&(i.stencilOp(tt,yt,qt),st=tt,et=yt,_t=qt)},setLocked:function(tt){I=tt},setClear:function(tt){At!==tt&&(i.clearStencil(tt),At=tt)},reset:function(){I=!1,de=null,pe=null,Ie=null,Re=null,st=null,et=null,_t=null,At=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},v=new WeakMap,g=[],m=null,d=!1,x=null,_=null,y=null,w=null,T=null,b=null,D=null,M=new Ce(0,0,0),E=0,U=!1,L=null,O=null,C=null,N=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,j=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Y=j>=1):ee.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Y=j>=2);let ae=null,ie={};const W=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),he=new ct().fromArray(W),Te=new ct().fromArray(te);function Ee(I,de,pe,Ie){const Re=new Uint8Array(4),st=i.createTexture();i.bindTexture(I,st),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<pe;et++)n&&(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)?i.texImage3D(de,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Re):i.texImage2D(de+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Re);return st}const Pe={};Pe[i.TEXTURE_2D]=Ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Pe[i.TEXTURE_CUBE_MAP]=Ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pe[i.TEXTURE_2D_ARRAY]=Ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Pe[i.TEXTURE_3D]=Ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ne(i.DEPTH_TEST),l.setFunc(As),ge(!1),A(wo),Ne(i.CULL_FACE),se(ni);function Ne(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function Ae(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function je(I,de){return p[I]!==de?(i.bindFramebuffer(I,de),p[I]=de,n&&(I===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=de),I===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=de)),!0):!1}function G(I,de){let pe=g,Ie=!1;if(I)if(pe=v.get(de),pe===void 0&&(pe=[],v.set(de,pe)),I.isWebGLMultipleRenderTargets){const Re=I.texture;if(pe.length!==Re.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let st=0,et=Re.length;st<et;st++)pe[st]=i.COLOR_ATTACHMENT0+st;pe.length=Re.length,Ie=!0}}else pe[0]!==i.COLOR_ATTACHMENT0&&(pe[0]=i.COLOR_ATTACHMENT0,Ie=!0);else pe[0]!==i.BACK&&(pe[0]=i.BACK,Ie=!0);Ie&&(t.isWebGL2?i.drawBuffers(pe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(pe))}function dt(I){return m!==I?(i.useProgram(I),m=I,!0):!1}const X={[gi]:i.FUNC_ADD,[Tu]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};if(n)X[Po]=i.MIN,X[Lo]=i.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(X[Po]=I.MIN_EXT,X[Lo]=I.MAX_EXT)}const re={[wu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Iu]:i.ONE_MINUS_DST_COLOR,[Lu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function se(I,de,pe,Ie,Re,st,et,_t,At,tt){if(I===ni){d===!0&&(Ae(i.BLEND),d=!1);return}if(d===!1&&(Ne(i.BLEND),d=!0),I!==Eu){if(I!==x||tt!==U){if((_!==gi||T!==gi)&&(i.blendEquation(i.FUNC_ADD),_=gi,T=gi),tt)switch(I){case nr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.ONE,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case nr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ao:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Co:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,w=null,b=null,D=null,M.set(0,0,0),E=0,x=I,U=tt}return}Re=Re||de,st=st||pe,et=et||Ie,(de!==_||Re!==T)&&(i.blendEquationSeparate(X[de],X[Re]),_=de,T=Re),(pe!==y||Ie!==w||st!==b||et!==D)&&(i.blendFuncSeparate(re[pe],re[Ie],re[st],re[et]),y=pe,w=Ie,b=st,D=et),(_t.equals(M)===!1||At!==E)&&(i.blendColor(_t.r,_t.g,_t.b,At),M.copy(_t),E=At),x=I,U=!1}function ze(I,de){I.side===cn?Ae(i.CULL_FACE):Ne(i.CULL_FACE);let pe=I.side===Vt;de&&(pe=!pe),ge(pe),I.blending===nr&&I.transparent===!1?se(ni):se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Ie=I.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),z(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ne(i.SAMPLE_ALPHA_TO_COVERAGE):Ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function ge(I){L!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),L=I)}function A(I){I!==yu?(Ne(i.CULL_FACE),I!==O&&(I===wo?i.cullFace(i.BACK):I===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ae(i.CULL_FACE),O=I}function S(I){I!==C&&(Y&&i.lineWidth(I),C=I)}function z(I,de,pe){I?(Ne(i.POLYGON_OFFSET_FILL),(N!==de||B!==pe)&&(i.polygonOffset(de,pe),N=de,B=pe)):Ae(i.POLYGON_OFFSET_FILL)}function $(I){I?Ne(i.SCISSOR_TEST):Ae(i.SCISSOR_TEST)}function K(I){I===void 0&&(I=i.TEXTURE0+q-1),ae!==I&&(i.activeTexture(I),ae=I)}function ne(I,de,pe){pe===void 0&&(ae===null?pe=i.TEXTURE0+q-1:pe=ae);let Ie=ie[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},ie[pe]=Ie),(Ie.type!==I||Ie.texture!==de)&&(ae!==pe&&(i.activeTexture(pe),ae=pe),i.bindTexture(I,de||Pe[I]),Ie.type=I,Ie.texture=de)}function Se(){const I=ie[ae];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){he.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function He(I){Te.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Te.copy(I))}function at(I,de){let pe=f.get(de);pe===void 0&&(pe=new WeakMap,f.set(de,pe));let Ie=pe.get(I);Ie===void 0&&(Ie=i.getUniformBlockIndex(de,I.name),pe.set(I,Ie))}function ke(I,de){const Ie=f.get(de).get(I);c.get(de)!==Ie&&(i.uniformBlockBinding(de,Ie,I.__bindingPointIndex),c.set(de,Ie))}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,ie={},p={},v=new WeakMap,g=[],m=null,d=!1,x=null,_=null,y=null,w=null,T=null,b=null,D=null,M=new Ce(0,0,0),E=0,U=!1,L=null,O=null,C=null,N=null,B=null,he.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:Ne,disable:Ae,bindFramebuffer:je,drawBuffers:G,useProgram:dt,setBlending:se,setMaterial:ze,setFlipSided:ge,setCullFace:A,setLineWidth:S,setPolygonOffset:z,setScissorTest:$,activeTexture:K,bindTexture:ne,unbindTexture:Se,compressedTexImage2D:le,compressedTexImage3D:ve,texImage2D:ye,texImage3D:fe,updateUBOMapping:at,uniformBlockBinding:ke,texStorage2D:Z,texStorage3D:we,texSubImage2D:xe,texSubImage3D:De,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:Fe,viewport:He,reset:oe}}function gg(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,S){return p?new OffscreenCanvas(A,S):Is("canvas")}function g(A,S,z,$){let K=1;if((A.width>$||A.height>$)&&(K=$/Math.max(A.width,A.height)),K<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ne=S?Qa:Math.floor,Se=ne(K*A.width),le=ne(K*A.height);f===void 0&&(f=v(Se,le));const ve=z?v(Se,le):f;return ve.width=Se,ve.height=le,ve.getContext("2d").drawImage(A,0,0,Se,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Se+"x"+le+")."),ve}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return al(A.width)&&al(A.height)}function d(A){return a?!1:A.wrapS!==Tn||A.wrapT!==Tn||A.minFilter!==it&&A.minFilter!==gt}function x(A,S){return A.generateMipmaps&&S&&A.minFilter!==it&&A.minFilter!==gt}function _(A){i.generateMipmap(A)}function y(A,S,z,$,K=!1){if(a===!1)return S;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ne=S;if(S===i.RED&&(z===i.FLOAT&&(ne=i.R32F),z===i.HALF_FLOAT&&(ne=i.R16F),z===i.UNSIGNED_BYTE&&(ne=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(ne=i.R8UI),z===i.UNSIGNED_SHORT&&(ne=i.R16UI),z===i.UNSIGNED_INT&&(ne=i.R32UI),z===i.BYTE&&(ne=i.R8I),z===i.SHORT&&(ne=i.R16I),z===i.INT&&(ne=i.R32I)),S===i.RG&&(z===i.FLOAT&&(ne=i.RG32F),z===i.HALF_FLOAT&&(ne=i.RG16F),z===i.UNSIGNED_BYTE&&(ne=i.RG8)),S===i.RGBA){const Se=K?Rs:rt.getTransfer($);z===i.FLOAT&&(ne=i.RGBA32F),z===i.HALF_FLOAT&&(ne=i.RGBA16F),z===i.UNSIGNED_BYTE&&(ne=Se===lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(A,S,z){return x(A,z)===!0||A.isFramebufferTexture&&A.minFilter!==it&&A.minFilter!==gt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function T(A){return A===it||A===Do||A===Js?i.NEAREST:i.LINEAR}function b(A){const S=A.target;S.removeEventListener("dispose",b),M(S),S.isVideoTexture&&c.delete(S)}function D(A){const S=A.target;S.removeEventListener("dispose",D),U(S)}function M(A){const S=n.get(A);if(S.__webglInit===void 0)return;const z=A.source,$=h.get(z);if($){const K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(A),Object.keys($).length===0&&h.delete(z)}n.remove(A)}function E(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const z=A.source,$=h.get(z);delete $[S.__cacheKey],o.memory.textures--}function U(A){const S=A.texture,z=n.get(A),$=n.get(S);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(z.__webglFramebuffer[K]))for(let ne=0;ne<z.__webglFramebuffer[K].length;ne++)i.deleteFramebuffer(z.__webglFramebuffer[K][ne]);else i.deleteFramebuffer(z.__webglFramebuffer[K]);z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer[K])}else{if(Array.isArray(z.__webglFramebuffer))for(let K=0;K<z.__webglFramebuffer.length;K++)i.deleteFramebuffer(z.__webglFramebuffer[K]);else i.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&i.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&i.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let K=0;K<z.__webglColorRenderbuffer.length;K++)z.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(z.__webglColorRenderbuffer[K]);z.__webglDepthRenderbuffer&&i.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let K=0,ne=S.length;K<ne;K++){const Se=n.get(S[K]);Se.__webglTexture&&(i.deleteTexture(Se.__webglTexture),o.memory.textures--),n.remove(S[K])}n.remove(S),n.remove(A)}let L=0;function O(){L=0}function C(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function N(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function B(A,S){const z=n.get(A);if(A.isVideoTexture&&ze(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{he(z,A,S);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function q(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){he(z,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function Y(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){he(z,A,S);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function j(A,S){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Te(z,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const ee={[Za]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[ja]:i.MIRRORED_REPEAT},ae={[it]:i.NEAREST,[Do]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[gt]:i.LINEAR,[eh]:i.LINEAR_MIPMAP_NEAREST,[Pr]:i.LINEAR_MIPMAP_LINEAR},ie={[lh]:i.NEVER,[ph]:i.ALWAYS,[ch]:i.LESS,[Pc]:i.LEQUAL,[uh]:i.EQUAL,[dh]:i.GEQUAL,[hh]:i.GREATER,[fh]:i.NOTEQUAL};function W(A,S,z){if(z?(i.texParameteri(A,i.TEXTURE_WRAP_S,ee[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ee[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ee[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ae[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ae[S.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(S.wrapS!==Tn||S.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,T(S.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,T(S.minFilter)),S.minFilter!==it&&S.minFilter!==gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ie[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===it||S.minFilter!==Js&&S.minFilter!==Pr||S.type===Ot&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===an&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(i.texParameterf(A,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function te(A,S){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",b));const $=S.source;let K=h.get($);K===void 0&&(K={},h.set($,K));const ne=N(S);if(ne!==A.__cacheKey){K[ne]===void 0&&(K[ne]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),K[ne].usedTimes++;const Se=K[A.__cacheKey];Se!==void 0&&(K[A.__cacheKey].usedTimes--,Se.usedTimes===0&&E(S)),A.__cacheKey=ne,A.__webglTexture=K[ne].texture}return z}function he(A,S,z){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);const K=te(A,S),ne=S.source;t.bindTexture($,A.__webglTexture,i.TEXTURE0+z);const Se=n.get(ne);if(ne.version!==Se.__version||K===!0){t.activeTexture(i.TEXTURE0+z);const le=rt.getPrimaries(rt.workingColorSpace),ve=S.colorSpace===un?null:rt.getPrimaries(S.colorSpace),xe=S.colorSpace===un||le===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=d(S)&&m(S.image)===!1;let Q=g(S.image,De,!1,r.maxTextureSize);Q=ge(S,Q);const Ke=m(Q)||a,Z=s.convert(S.format,S.colorSpace);let we=s.convert(S.type),ye=y(S.internalFormat,Z,we,S.colorSpace,S.isVideoTexture);W($,S,Ke);let fe;const Fe=S.mipmaps,He=a&&S.isVideoTexture!==!0&&ye!==Ac,at=Se.__version===void 0||K===!0,ke=w(S,Q,Ke);if(S.isDepthTexture)ye=i.DEPTH_COMPONENT,a?S.type===Ot?ye=i.DEPTH_COMPONENT32F:S.type===nn?ye=i.DEPTH_COMPONENT24:S.type===xi?ye=i.DEPTH24_STENCIL8:ye=i.DEPTH_COMPONENT16:S.type===Ot&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===yi&&ye===i.DEPTH_COMPONENT&&S.type!==Bs&&S.type!==nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=nn,we=s.convert(S.type)),S.format===ar&&ye===i.DEPTH_COMPONENT&&(ye=i.DEPTH_STENCIL,S.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=xi,we=s.convert(S.type))),at&&(He?t.texStorage2D(i.TEXTURE_2D,1,ye,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,ye,Q.width,Q.height,0,Z,we,null));else if(S.isDataTexture)if(Fe.length>0&&Ke){He&&at&&t.texStorage2D(i.TEXTURE_2D,ke,ye,Fe[0].width,Fe[0].height);for(let oe=0,I=Fe.length;oe<I;oe++)fe=Fe[oe],He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,Z,we,fe.data):t.texImage2D(i.TEXTURE_2D,oe,ye,fe.width,fe.height,0,Z,we,fe.data);S.generateMipmaps=!1}else He?(at&&t.texStorage2D(i.TEXTURE_2D,ke,ye,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,Z,we,Q.data)):t.texImage2D(i.TEXTURE_2D,0,ye,Q.width,Q.height,0,Z,we,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){He&&at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ye,Fe[0].width,Fe[0].height,Q.depth);for(let oe=0,I=Fe.length;oe<I;oe++)fe=Fe[oe],S.format!==vt?Z!==null?He?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,fe.width,fe.height,Q.depth,Z,fe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,ye,fe.width,fe.height,Q.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,fe.width,fe.height,Q.depth,Z,we,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,ye,fe.width,fe.height,Q.depth,0,Z,we,fe.data)}else{He&&at&&t.texStorage2D(i.TEXTURE_2D,ke,ye,Fe[0].width,Fe[0].height);for(let oe=0,I=Fe.length;oe<I;oe++)fe=Fe[oe],S.format!==vt?Z!==null?He?t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,Z,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,ye,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,fe.width,fe.height,Z,we,fe.data):t.texImage2D(i.TEXTURE_2D,oe,ye,fe.width,fe.height,0,Z,we,fe.data)}else if(S.isDataArrayTexture)He?(at&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Z,we,Q.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,Q.width,Q.height,Q.depth,0,Z,we,Q.data);else if(S.isData3DTexture)He?(at&&t.texStorage3D(i.TEXTURE_3D,ke,ye,Q.width,Q.height,Q.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Z,we,Q.data)):t.texImage3D(i.TEXTURE_3D,0,ye,Q.width,Q.height,Q.depth,0,Z,we,Q.data);else if(S.isFramebufferTexture){if(at)if(He)t.texStorage2D(i.TEXTURE_2D,ke,ye,Q.width,Q.height);else{let oe=Q.width,I=Q.height;for(let de=0;de<ke;de++)t.texImage2D(i.TEXTURE_2D,de,ye,oe,I,0,Z,we,null),oe>>=1,I>>=1}}else if(Fe.length>0&&Ke){He&&at&&t.texStorage2D(i.TEXTURE_2D,ke,ye,Fe[0].width,Fe[0].height);for(let oe=0,I=Fe.length;oe<I;oe++)fe=Fe[oe],He?t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Z,we,fe):t.texImage2D(i.TEXTURE_2D,oe,ye,Z,we,fe);S.generateMipmaps=!1}else He?(at&&t.texStorage2D(i.TEXTURE_2D,ke,ye,Q.width,Q.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,we,Q)):t.texImage2D(i.TEXTURE_2D,0,ye,Z,we,Q);x(S,Ke)&&_($),Se.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Te(A,S,z){if(S.image.length!==6)return;const $=te(A,S),K=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const ne=n.get(K);if(K.version!==ne.__version||$===!0){t.activeTexture(i.TEXTURE0+z);const Se=rt.getPrimaries(rt.workingColorSpace),le=S.colorSpace===un?null:rt.getPrimaries(S.colorSpace),ve=S.colorSpace===un||Se===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const xe=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,Q=[];for(let oe=0;oe<6;oe++)!xe&&!De?Q[oe]=g(S.image[oe],!1,!0,r.maxCubemapSize):Q[oe]=De?S.image[oe].image:S.image[oe],Q[oe]=ge(S,Q[oe]);const Ke=Q[0],Z=m(Ke)||a,we=s.convert(S.format,S.colorSpace),ye=s.convert(S.type),fe=y(S.internalFormat,we,ye,S.colorSpace),Fe=a&&S.isVideoTexture!==!0,He=ne.__version===void 0||$===!0;let at=w(S,Ke,Z);W(i.TEXTURE_CUBE_MAP,S,Z);let ke;if(xe){Fe&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,at,fe,Ke.width,Ke.height);for(let oe=0;oe<6;oe++){ke=Q[oe].mipmaps;for(let I=0;I<ke.length;I++){const de=ke[I];S.format!==vt?we!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,de.width,de.height,we,de.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,fe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,0,0,de.width,de.height,we,ye,de.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I,fe,de.width,de.height,0,we,ye,de.data)}}}else{ke=S.mipmaps,Fe&&He&&(ke.length>0&&at++,t.texStorage2D(i.TEXTURE_CUBE_MAP,at,fe,Q[0].width,Q[0].height));for(let oe=0;oe<6;oe++)if(De){Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Q[oe].width,Q[oe].height,we,ye,Q[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,fe,Q[oe].width,Q[oe].height,0,we,ye,Q[oe].data);for(let I=0;I<ke.length;I++){const pe=ke[I].image[oe].image;Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,pe.width,pe.height,we,ye,pe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,fe,pe.width,pe.height,0,we,ye,pe.data)}}else{Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,we,ye,Q[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,fe,we,ye,Q[oe]);for(let I=0;I<ke.length;I++){const de=ke[I];Fe?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,0,0,we,ye,de.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,I+1,fe,we,ye,de.image[oe])}}}x(S,Z)&&_(i.TEXTURE_CUBE_MAP),ne.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ee(A,S,z,$,K,ne){const Se=s.convert(z.format,z.colorSpace),le=s.convert(z.type),ve=y(z.internalFormat,Se,le,z.colorSpace);if(!n.get(S).__hasExternalTextures){const De=Math.max(1,S.width>>ne),Q=Math.max(1,S.height>>ne);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ne,ve,De,Q,S.depth,0,Se,le,null):t.texImage2D(K,ne,ve,De,Q,0,Se,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,K,n.get(z).__webglTexture,0,re(S)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,K,n.get(z).__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(A,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let $=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(z||se(S)){const K=S.depthTexture;K&&K.isDepthTexture&&(K.type===Ot?$=i.DEPTH_COMPONENT32F:K.type===nn&&($=i.DEPTH_COMPONENT24));const ne=re(S);se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,$,S.width,S.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,$,S.width,S.height)}else i.renderbufferStorage(i.RENDERBUFFER,$,S.width,S.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const $=re(S);z&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,S.width,S.height):se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,i.DEPTH24_STENCIL8,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const $=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let K=0;K<$.length;K++){const ne=$[K],Se=s.convert(ne.format,ne.colorSpace),le=s.convert(ne.type),ve=y(ne.internalFormat,Se,le,ne.colorSpace),xe=re(S);z&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,ve,S.width,S.height):se(S)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,ve,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ve,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ne(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);const $=n.get(S.depthTexture).__webglTexture,K=re(S);if(S.depthTexture.format===yi)se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(S.depthTexture.format===ar)se(S)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const S=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Ne(S.__webglFramebuffer,A)}else if(z){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]=i.createRenderbuffer(),Pe(S.__webglDepthbuffer[$],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Pe(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(A,S,z){const $=n.get(A);S!==void 0&&Ee($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Ae(A)}function G(A){const S=A.texture,z=n.get(A),$=n.get(S);A.addEventListener("dispose",D),A.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,o.memory.textures++);const K=A.isWebGLCubeRenderTarget===!0,ne=A.isWebGLMultipleRenderTargets===!0,Se=m(A)||a;if(K){z.__webglFramebuffer=[];for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[le]=[];for(let ve=0;ve<S.mipmaps.length;ve++)z.__webglFramebuffer[le][ve]=i.createFramebuffer()}else z.__webglFramebuffer[le]=i.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let le=0;le<S.mipmaps.length;le++)z.__webglFramebuffer[le]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ne)if(r.drawBuffers){const le=A.texture;for(let ve=0,xe=le.length;ve<xe;ve++){const De=n.get(le[ve]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&se(A)===!1){const le=ne?S:[S];z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const xe=le[ve];z.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ve]);const De=s.convert(xe.format,xe.colorSpace),Q=s.convert(xe.type),Ke=y(xe.internalFormat,De,Q,xe.colorSpace,A.isXRRenderTarget===!0),Z=re(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Z,Ke,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,z.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Pe(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),W(i.TEXTURE_CUBE_MAP,S,Se);for(let le=0;le<6;le++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Ee(z.__webglFramebuffer[le][ve],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,ve);else Ee(z.__webglFramebuffer[le],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);x(S,Se)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const le=A.texture;for(let ve=0,xe=le.length;ve<xe;ve++){const De=le[ve],Q=n.get(De);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),W(i.TEXTURE_2D,De,Se),Ee(z.__webglFramebuffer,A,De,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,0),x(De,Se)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?le=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,$.__webglTexture),W(le,S,Se),a&&S.mipmaps&&S.mipmaps.length>0)for(let ve=0;ve<S.mipmaps.length;ve++)Ee(z.__webglFramebuffer[ve],A,S,i.COLOR_ATTACHMENT0,le,ve);else Ee(z.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,le,0);x(S,Se)&&_(le),t.unbindTexture()}A.depthBuffer&&Ae(A)}function dt(A){const S=m(A)||a,z=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let $=0,K=z.length;$<K;$++){const ne=z[$];if(x(ne,S)){const Se=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(ne).__webglTexture;t.bindTexture(Se,le),_(Se),t.unbindTexture()}}}function X(A){if(a&&A.samples>0&&se(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],z=A.width,$=A.height;let K=i.COLOR_BUFFER_BIT;const ne=[],Se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(A),ve=A.isWebGLMultipleRenderTargets===!0;if(ve)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){ne.push(i.COLOR_ATTACHMENT0+xe),A.depthBuffer&&ne.push(Se);const De=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(De===!1&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ve&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[xe]),De===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Se]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Se])),ve){const Q=n.get(S[xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Q,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,K,i.NEAREST),u&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,le.__webglColorRenderbuffer[xe]);const De=n.get(S[xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function re(A){return Math.min(r.maxSamples,A.samples)}function se(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ze(A){const S=o.render.frame;c.get(A)!==S&&(c.set(A,S),A.update())}function ge(A,S){const z=A.colorSpace,$=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ja||z!==Wn&&z!==un&&(rt.getTransfer(z)===lt?a===!1?e.has("EXT_sRGB")===!0&&$===vt?(A.format=Ja,A.minFilter=gt,A.generateMipmaps=!1):S=Dc.sRGBToLinear(S):($!==vt||K!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}this.allocateTextureUnit=C,this.resetTextureUnits=O,this.setTexture2D=B,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=je,this.setupRenderTarget=G,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=se}function vg(i,e,t){const n=t.isWebGL2;function r(s,o=un){let a;const l=rt.getTransfer(o);if(s===Pn)return i.UNSIGNED_BYTE;if(s===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Ka)return i.BYTE;if(s===Sc)return i.SHORT;if(s===Bs)return i.UNSIGNED_SHORT;if(s===Ar)return i.INT;if(s===nn)return i.UNSIGNED_INT;if(s===Ot)return i.FLOAT;if(s===an)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===th)return i.ALPHA;if(s===vt)return i.RGBA;if(s===nh)return i.LUMINANCE;if(s===ih)return i.LUMINANCE_ALPHA;if(s===yi)return i.DEPTH_COMPONENT;if(s===ar)return i.DEPTH_STENCIL;if(s===Ja)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bc)return i.RED;if(s===fo)return i.RED_INTEGER;if(s===wc)return i.RG;if(s===Os)return i.RG_INTEGER;if(s===Lr)return i.RGBA_INTEGER;if(s===Qs||s===$s||s===ea||s===ta)if(l===lt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$s)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ea)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Io||s===Uo||s===No||s===Fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Io)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===No)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ac)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bo||s===Oo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Bo)return l===lt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Oo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zo||s===Go||s===Ho||s===ko||s===Vo||s===Wo||s===Xo||s===qo||s===Yo||s===Zo||s===jo||s===Ko||s===Jo||s===Qo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===zo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Go)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ho)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ko)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Wo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Yo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Zo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ko)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qo)return l===lt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===na||s===$o||s===el)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===na)return l===lt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===$o)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===el)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===rh||s===tl||s===nl||s===il)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===na)return a.COMPRESSED_RED_RGTC1_EXT;if(s===tl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===nl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===il)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===xi?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class _g extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ls extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xg={type:"move"};class Aa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ls,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ls,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ls,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),d=this._getHandJoint(u,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ls;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yg extends lr{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,v=null;const g=t.getContextAttributes();let m=null,d=null;const x=[],_=[],y=new Oe;let w=null;const T=new jt;T.layers.enable(1),T.viewport=new ct;const b=new jt;b.layers.enable(2),b.viewport=new ct;const D=[T,b],M=new _g;M.layers.enable(1),M.layers.enable(2);let E=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let te=x[W];return te===void 0&&(te=new Aa,x[W]=te),te.getTargetRaySpace()},this.getControllerGrip=function(W){let te=x[W];return te===void 0&&(te=new Aa,x[W]=te),te.getGripSpace()},this.getHand=function(W){let te=x[W];return te===void 0&&(te=new Aa,x[W]=te),te.getHandSpace()};function L(W){const te=_.indexOf(W.inputSource);if(te===-1)return;const he=x[te];he!==void 0&&(he.update(W.inputSource,W.frame,u||o),he.dispatchEvent({type:W.type,data:W.inputSource}))}function O(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",C);for(let W=0;W<x.length;W++){const te=_[W];te!==null&&(_[W]=null,x[W].disconnect(te))}E=null,U=null,e.setRenderTarget(m),p=null,h=null,f=null,r=null,d=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",O),r.addEventListener("inputsourceschange",C),g.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Qt(p.framebufferWidth,p.framebufferHeight,{format:vt,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let te=null,he=null,Te=null;g.depth&&(Te=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=g.stencil?ar:yi,he=g.stencil?xi:nn);const Ee={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Ee),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Qt(h.textureWidth,h.textureHeight,{format:vt,type:Pn,depthTexture:new Wc(h.textureWidth,h.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Pe=e.properties.get(d);Pe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ie.setContext(r),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function C(W){for(let te=0;te<W.removed.length;te++){const he=W.removed[te],Te=_.indexOf(he);Te>=0&&(_[Te]=null,x[Te].disconnect(he))}for(let te=0;te<W.added.length;te++){const he=W.added[te];let Te=_.indexOf(he);if(Te===-1){for(let Pe=0;Pe<x.length;Pe++)if(Pe>=_.length){_.push(he),Te=Pe;break}else if(_[Pe]===null){_[Pe]=he,Te=Pe;break}if(Te===-1)break}const Ee=x[Te];Ee&&Ee.connect(he)}}const N=new P,B=new P;function q(W,te,he){N.setFromMatrixPosition(te.matrixWorld),B.setFromMatrixPosition(he.matrixWorld);const Te=N.distanceTo(B),Ee=te.projectionMatrix.elements,Pe=he.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),Ae=Ee[14]/(Ee[10]+1),je=(Ee[9]+1)/Ee[5],G=(Ee[9]-1)/Ee[5],dt=(Ee[8]-1)/Ee[0],X=(Pe[8]+1)/Pe[0],re=Ne*dt,se=Ne*X,ze=Te/(-dt+X),ge=ze*-dt;te.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(ze),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const A=Ne+ze,S=Ae+ze,z=re-ge,$=se+(Te-ge),K=je*Ae/S*A,ne=G*Ae/S*A;W.projectionMatrix.makePerspective(z,$,K,ne,A,S),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,te){te===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(te.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;M.near=b.near=T.near=W.near,M.far=b.far=T.far=W.far,(E!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),E=M.near,U=M.far);const te=W.parent,he=M.cameras;Y(M,te);for(let Te=0;Te<he.length;Te++)Y(he[Te],te);he.length===2?q(M,T,b):M.projectionMatrix.copy(T.projectionMatrix),j(W,M,te)};function j(W,te,he){he===null?W.matrix.copy(te.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(te.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(te.projectionMatrix),W.projectionMatrixInverse.copy(te.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ds*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let ee=null;function ae(W,te){if(c=te.getViewerPose(u||o),v=te,c!==null){const he=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let Te=!1;he.length!==M.cameras.length&&(M.cameras.length=0,Te=!0);for(let Ee=0;Ee<he.length;Ee++){const Pe=he[Ee];let Ne=null;if(p!==null)Ne=p.getViewport(Pe);else{const je=f.getViewSubImage(h,Pe);Ne=je.viewport,Ee===0&&(e.setRenderTargetTextures(d,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Ae=D[Ee];Ae===void 0&&(Ae=new jt,Ae.layers.enable(Ee),Ae.viewport=new ct,D[Ee]=Ae),Ae.matrix.fromArray(Pe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Pe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ee===0&&(M.matrix.copy(Ae.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Te===!0&&M.cameras.push(Ae)}}for(let he=0;he<x.length;he++){const Te=_[he],Ee=x[he];Te!==null&&Ee!==void 0&&Ee.update(Te,te,u||o)}ee&&ee(W,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),v=null}const ie=new Vc;ie.setAnimationLoop(ae),this.setAnimationLoop=function(W){ee=W},this.dispose=function(){}}}function Mg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Gc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,x,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,x,_):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Vt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Vt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const x=e.get(d).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,x,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*x,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,x){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Vt&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const x=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Sg(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;n.uniformBlockBinding(x,y)}function u(x,_){let y=r[x.id];y===void 0&&(v(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",m));const w=_.program;n.updateUBOMapping(x,w);const T=e.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function c(x){const _=f();x.__bindingPointIndex=_;const y=i.createBuffer(),w=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,w,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const _=r[x.id],y=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let T=0,b=y.length;T<b;T++){const D=Array.isArray(y[T])?y[T]:[y[T]];for(let M=0,E=D.length;M<E;M++){const U=D[M];if(p(U,T,M,w)===!0){const L=U.__offset,O=Array.isArray(U.value)?U.value:[U.value];let C=0;for(let N=0;N<O.length;N++){const B=O[N],q=g(B);typeof B=="number"||typeof B=="boolean"?(U.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,L+C,U.__data)):B.isMatrix3?(U.__data[0]=B.elements[0],U.__data[1]=B.elements[1],U.__data[2]=B.elements[2],U.__data[3]=0,U.__data[4]=B.elements[3],U.__data[5]=B.elements[4],U.__data[6]=B.elements[5],U.__data[7]=0,U.__data[8]=B.elements[6],U.__data[9]=B.elements[7],U.__data[10]=B.elements[8],U.__data[11]=0):(B.toArray(U.__data,C),C+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,L,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,_,y,w){const T=x.value,b=_+"_"+y;if(w[b]===void 0)return typeof T=="number"||typeof T=="boolean"?w[b]=T:w[b]=T.clone(),!0;{const D=w[b];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return w[b]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function v(x){const _=x.uniforms;let y=0;const w=16;for(let b=0,D=_.length;b<D;b++){const M=Array.isArray(_[b])?_[b]:[_[b]];for(let E=0,U=M.length;E<U;E++){const L=M[E],O=Array.isArray(L.value)?L.value:[L.value];for(let C=0,N=O.length;C<N;C++){const B=O[C],q=g(B),Y=y%w;Y!==0&&w-Y<q.boundary&&(y+=w-Y),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=y,y+=q.storage}}}const T=y%w;return T>0&&(y+=w-T),x.__size=y,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Kc{constructor(e={}){const{canvas:t=gh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const d=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dt,this._useLegacyLights=!1,this.toneMapping=ii,this.toneMappingExposure=1;const _=this;let y=!1,w=0,T=0,b=null,D=-1,M=null;const E=new ct,U=new ct;let L=null;const O=new Ce(0);let C=0,N=t.width,B=t.height,q=1,Y=null,j=null;const ee=new ct(0,0,N,B),ae=new ct(0,0,N,B);let ie=!1;const W=new go;let te=!1,he=!1,Te=null;const Ee=new Qe,Pe=new Oe,Ne=new P,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return b===null?q:1}let G=n;function dt(R,F){for(let k=0;k<R.length;k++){const V=R[k],H=t.getContext(V,F);if(H!==null)return H}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",de,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),G=dt(F,R),G===null)throw dt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let X,re,se,ze,ge,A,S,z,$,K,ne,Se,le,ve,xe,De,Q,Ke,Z,we,ye,fe,Fe,He;function at(){X=new Dp(G),re=new wp(G,X,e),X.init(re),fe=new vg(G,X,re),se=new mg(G,X,re),ze=new Np(G),ge=new tg,A=new gg(G,X,se,ge,re,fe,ze),S=new Rp(_),z=new Lp(_),$=new kh(G,re),Fe=new Tp(G,X,$,re),K=new Ip(G,$,ze,Fe),ne=new zp(G,K,$,ze),Z=new Op(G,re,A),De=new Ap(ge),Se=new eg(_,S,z,X,re,Fe,De),le=new Mg(_,ge),ve=new ig,xe=new cg(X,re),Ke=new Ep(_,S,z,se,ne,h,l),Q=new pg(_,ne,re),He=new Sg(G,ze,re,se),we=new bp(G,X,ze,re),ye=new Up(G,X,ze,re),ze.programs=Se.programs,_.capabilities=re,_.extensions=X,_.properties=ge,_.renderLists=ve,_.shadowMap=Q,_.state=se,_.info=ze}at();const ke=new yg(_,G);this.xr=ke,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=X.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=X.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(N,B,!1))},this.getSize=function(R){return R.set(N,B)},this.setSize=function(R,F,k=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=R,B=F,t.width=Math.floor(R*q),t.height=Math.floor(F*q),k===!0&&(t.style.width=R+"px",t.style.height=F+"px"),this.setViewport(0,0,R,F)},this.getDrawingBufferSize=function(R){return R.set(N*q,B*q).floor()},this.setDrawingBufferSize=function(R,F,k){N=R,B=F,q=k,t.width=Math.floor(R*k),t.height=Math.floor(F*k),this.setViewport(0,0,R,F)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(ee)},this.setViewport=function(R,F,k,V){R.isVector4?ee.set(R.x,R.y,R.z,R.w):ee.set(R,F,k,V),se.viewport(E.copy(ee).multiplyScalar(q).floor())},this.getScissor=function(R){return R.copy(ae)},this.setScissor=function(R,F,k,V){R.isVector4?ae.set(R.x,R.y,R.z,R.w):ae.set(R,F,k,V),se.scissor(U.copy(ae).multiplyScalar(q).floor())},this.getScissorTest=function(){return ie},this.setScissorTest=function(R){se.setScissorTest(ie=R)},this.setOpaqueSort=function(R){Y=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(R=!0,F=!0,k=!0){let V=0;if(R){let H=!1;if(b!==null){const _e=b.texture.format;H=_e===Lr||_e===Os||_e===fo}if(H){const _e=b.texture.type,be=_e===Pn||_e===nn||_e===Bs||_e===xi||_e===Ec||_e===Tc,Ue=Ke.getClearColor(),Be=Ke.getClearAlpha(),Xe=Ue.r,Ge=Ue.g,Ve=Ue.b;be?(p[0]=Xe,p[1]=Ge,p[2]=Ve,p[3]=Be,G.clearBufferuiv(G.COLOR,0,p)):(v[0]=Xe,v[1]=Ge,v[2]=Ve,v[3]=Be,G.clearBufferiv(G.COLOR,0,v))}else V|=G.COLOR_BUFFER_BIT}F&&(V|=G.DEPTH_BUFFER_BIT),k&&(V|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ve.dispose(),xe.dispose(),ge.dispose(),S.dispose(),z.dispose(),ne.dispose(),Fe.dispose(),He.dispose(),Se.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",At),ke.removeEventListener("sessionend",tt),Te&&(Te.dispose(),Te=null),yt.stop()};function oe(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=ze.autoReset,F=Q.enabled,k=Q.autoUpdate,V=Q.needsUpdate,H=Q.type;at(),ze.autoReset=R,Q.enabled=F,Q.autoUpdate=k,Q.needsUpdate=V,Q.type=H}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pe(R){const F=R.target;F.removeEventListener("dispose",pe),Ie(F)}function Ie(R){Re(R),ge.remove(R)}function Re(R){const F=ge.get(R).programs;F!==void 0&&(F.forEach(function(k){Se.releaseProgram(k)}),R.isShaderMaterial&&Se.releaseShaderCache(R))}this.renderBufferDirect=function(R,F,k,V,H,_e){F===null&&(F=Ae);const be=H.isMesh&&H.matrixWorld.determinant()<0,Ue=Fr(R,F,k,V,H);se.setMaterial(V,be);let Be=k.index,Xe=1;if(V.wireframe===!0){if(Be=K.getWireframeAttribute(k),Be===void 0)return;Xe=2}const Ge=k.drawRange,Ve=k.attributes.position;let pt=Ge.start*Xe,Rt=(Ge.start+Ge.count)*Xe;_e!==null&&(pt=Math.max(pt,_e.start*Xe),Rt=Math.min(Rt,(_e.start+_e.count)*Xe)),Be!==null?(pt=Math.max(pt,0),Rt=Math.min(Rt,Be.count)):Ve!=null&&(pt=Math.max(pt,0),Rt=Math.min(Rt,Ve.count));const ht=Rt-pt;if(ht<0||ht===1/0)return;Fe.setup(H,V,Ue,k,Be);let Yt,nt=we;if(Be!==null&&(Yt=$.get(Be),nt=ye,nt.setIndex(Yt)),H.isMesh)V.wireframe===!0?(se.setLineWidth(V.wireframeLinewidth*je()),nt.setMode(G.LINES)):nt.setMode(G.TRIANGLES);else if(H.isLine){let We=V.linewidth;We===void 0&&(We=1),se.setLineWidth(We*je()),H.isLineSegments?nt.setMode(G.LINES):H.isLineLoop?nt.setMode(G.LINE_LOOP):nt.setMode(G.LINE_STRIP)}else H.isPoints?nt.setMode(G.POINTS):H.isSprite&&nt.setMode(G.TRIANGLES);if(H.isBatchedMesh)nt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)nt.renderInstances(pt,ht,H.count);else if(k.isInstancedBufferGeometry){const We=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,vn=Math.min(k.instanceCount,We);nt.renderInstances(pt,ht,vn)}else nt.render(pt,ht)};function st(R,F,k){R.transparent===!0&&R.side===cn&&R.forceSinglePass===!1?(R.side=Vt,R.needsUpdate=!0,oi(R,F,k),R.side=dn,R.needsUpdate=!0,oi(R,F,k),R.side=cn):oi(R,F,k)}this.compile=function(R,F,k=null){k===null&&(k=R),m=xe.get(k),m.init(),x.push(m),k.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==k&&R.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const V=new Set;return R.traverse(function(H){const _e=H.material;if(_e)if(Array.isArray(_e))for(let be=0;be<_e.length;be++){const Ue=_e[be];st(Ue,k,H),V.add(Ue)}else st(_e,k,H),V.add(_e)}),x.pop(),m=null,V},this.compileAsync=function(R,F,k=null){const V=this.compile(R,F,k);return new Promise(H=>{function _e(){if(V.forEach(function(be){ge.get(be).currentProgram.isReady()&&V.delete(be)}),V.size===0){H(R);return}setTimeout(_e,10)}X.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let et=null;function _t(R){et&&et(R)}function At(){yt.stop()}function tt(){yt.start()}const yt=new Vc;yt.setAnimationLoop(_t),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(R){et=R,ke.setAnimationLoop(R),R===null?yt.stop():yt.start()},ke.addEventListener("sessionstart",At),ke.addEventListener("sessionend",tt),this.render=function(R,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(F),F=ke.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,F,b),m=xe.get(R,x.length),m.init(),x.push(m),Ee.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(Ee),he=this.localClippingEnabled,te=De.init(this.clippingPlanes,he),g=ve.get(R,d.length),g.init(),d.push(g),qt(R,F,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Y,j),this.info.render.frame++,te===!0&&De.beginShadows();const k=m.state.shadowsArray;if(Q.render(k,R,F),te===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(g,R),m.setupLights(_._useLegacyLights),F.isArrayCamera){const V=F.cameras;for(let H=0,_e=V.length;H<_e;H++){const be=V[H];Ln(g,R,be,be.viewport)}}else Ln(g,R,F);b!==null&&(A.updateMultisampleRenderTarget(b),A.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,F),Fe.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function qt(R,F,k,V){if(R.visible===!1)return;if(R.layers.test(F.layers)){if(R.isGroup)k=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(F);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){V&&Ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const be=ne.update(R),Ue=R.material;Ue.visible&&g.push(R,be,Ue,k,Ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const be=ne.update(R),Ue=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ne.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ne.copy(be.boundingSphere.center)),Ne.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ue)){const Be=be.groups;for(let Xe=0,Ge=Be.length;Xe<Ge;Xe++){const Ve=Be[Xe],pt=Ue[Ve.materialIndex];pt&&pt.visible&&g.push(R,be,pt,k,Ne.z,Ve)}}else Ue.visible&&g.push(R,be,Ue,k,Ne.z,null)}}const _e=R.children;for(let be=0,Ue=_e.length;be<Ue;be++)qt(_e[be],F,k,V)}function Ln(R,F,k,V){const H=R.opaque,_e=R.transmissive,be=R.transparent;m.setupLightsView(k),te===!0&&De.setGlobalState(_.clippingPlanes,k),_e.length>0&&hr(H,_e,F,k),V&&se.viewport(E.copy(V)),H.length>0&&It(H,F,k),_e.length>0&&It(_e,F,k),be.length>0&&It(be,F,k),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function hr(R,F,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const _e=re.isWebGL2;Te===null&&(Te=new Qt(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")?an:Pn,minFilter:Pr,samples:_e?4:0})),_.getDrawingBufferSize(Pe),_e?Te.setSize(Pe.x,Pe.y):Te.setSize(Qa(Pe.x),Qa(Pe.y));const be=_.getRenderTarget();_.setRenderTarget(Te),_.getClearColor(O),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();const Ue=_.toneMapping;_.toneMapping=ii,It(R,k,V),A.updateMultisampleRenderTarget(Te),A.updateRenderTargetMipmap(Te);let Be=!1;for(let Xe=0,Ge=F.length;Xe<Ge;Xe++){const Ve=F[Xe],pt=Ve.object,Rt=Ve.geometry,ht=Ve.material,Yt=Ve.group;if(ht.side===cn&&pt.layers.test(V.layers)){const nt=ht.side;ht.side=Vt,ht.needsUpdate=!0,gn(pt,k,V,Rt,ht,Yt),ht.side=nt,ht.needsUpdate=!0,Be=!0}}Be===!0&&(A.updateMultisampleRenderTarget(Te),A.updateRenderTargetMipmap(Te)),_.setRenderTarget(be),_.setClearColor(O,C),_.toneMapping=Ue}function It(R,F,k){const V=F.isScene===!0?F.overrideMaterial:null;for(let H=0,_e=R.length;H<_e;H++){const be=R[H],Ue=be.object,Be=be.geometry,Xe=V===null?be.material:V,Ge=be.group;Ue.layers.test(k.layers)&&gn(Ue,F,k,Be,Xe,Ge)}}function gn(R,F,k,V,H,_e){R.onBeforeRender(_,F,k,V,H,_e),R.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(_,F,k,V,R,_e),H.transparent===!0&&H.side===cn&&H.forceSinglePass===!1?(H.side=Vt,H.needsUpdate=!0,_.renderBufferDirect(k,F,V,H,R,_e),H.side=dn,H.needsUpdate=!0,_.renderBufferDirect(k,F,V,H,R,_e),H.side=cn):_.renderBufferDirect(k,F,V,H,R,_e),R.onAfterRender(_,F,k,V,H,_e)}function oi(R,F,k){F.isScene!==!0&&(F=Ae);const V=ge.get(R),H=m.state.lights,_e=m.state.shadowsArray,be=H.state.version,Ue=Se.getParameters(R,H.state,_e,F,k),Be=Se.getProgramCacheKey(Ue);let Xe=V.programs;V.environment=R.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(R.isMeshStandardMaterial?z:S).get(R.envMap||V.environment),Xe===void 0&&(R.addEventListener("dispose",pe),Xe=new Map,V.programs=Xe);let Ge=Xe.get(Be);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===be)return Ei(R,Ue),Ge}else Ue.uniforms=Se.getUniforms(R),R.onBuild(k,Ue,_),R.onBeforeCompile(Ue,_),Ge=Se.acquireProgram(Ue,Be),Xe.set(Be,Ge),V.uniforms=Ue.uniforms;const Ve=V.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ve.clippingPlanes=De.uniform),Ei(R,Ue),V.needsLights=bi(R),V.lightsStateVersion=be,V.needsLights&&(Ve.ambientLightColor.value=H.state.ambient,Ve.lightProbe.value=H.state.probe,Ve.directionalLights.value=H.state.directional,Ve.directionalLightShadows.value=H.state.directionalShadow,Ve.spotLights.value=H.state.spot,Ve.spotLightShadows.value=H.state.spotShadow,Ve.rectAreaLights.value=H.state.rectArea,Ve.ltc_1.value=H.state.rectAreaLTC1,Ve.ltc_2.value=H.state.rectAreaLTC2,Ve.pointLights.value=H.state.point,Ve.pointLightShadows.value=H.state.pointShadow,Ve.hemisphereLights.value=H.state.hemi,Ve.directionalShadowMap.value=H.state.directionalShadowMap,Ve.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ve.spotShadowMap.value=H.state.spotShadowMap,Ve.spotLightMatrix.value=H.state.spotLightMatrix,Ve.spotLightMap.value=H.state.spotLightMap,Ve.pointShadowMap.value=H.state.pointShadowMap,Ve.pointShadowMatrix.value=H.state.pointShadowMatrix),V.currentProgram=Ge,V.uniformsList=null,Ge}function Si(R){if(R.uniformsList===null){const F=R.currentProgram.getUniforms();R.uniformsList=Ts.seqWithValue(F.seq,R.uniforms)}return R.uniformsList}function Ei(R,F){const k=ge.get(R);k.outputColorSpace=F.outputColorSpace,k.batching=F.batching,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function Fr(R,F,k,V,H){F.isScene!==!0&&(F=Ae),A.resetTextureUnits();const _e=F.fog,be=V.isMeshStandardMaterial?F.environment:null,Ue=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Wn,Be=(V.isMeshStandardMaterial?z:S).get(V.envMap||be),Xe=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ge=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ve=!!k.morphAttributes.position,pt=!!k.morphAttributes.normal,Rt=!!k.morphAttributes.color;let ht=ii;V.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(ht=_.toneMapping);const Yt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,nt=Yt!==void 0?Yt.length:0,We=ge.get(V),vn=m.state.lights;if(te===!0&&(he===!0||R!==M)){const Mt=R===M&&V.id===D;De.setState(V,R,Mt)}let ft=!1;V.version===We.__version?(We.needsLights&&We.lightsStateVersion!==vn.state.version||We.outputColorSpace!==Ue||H.isBatchedMesh&&We.batching===!1||!H.isBatchedMesh&&We.batching===!0||H.isInstancedMesh&&We.instancing===!1||!H.isInstancedMesh&&We.instancing===!0||H.isSkinnedMesh&&We.skinning===!1||!H.isSkinnedMesh&&We.skinning===!0||H.isInstancedMesh&&We.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&We.instancingColor===!1&&H.instanceColor!==null||We.envMap!==Be||V.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==De.numPlanes||We.numIntersection!==De.numIntersection)||We.vertexAlphas!==Xe||We.vertexTangents!==Ge||We.morphTargets!==Ve||We.morphNormals!==pt||We.morphColors!==Rt||We.toneMapping!==ht||re.isWebGL2===!0&&We.morphTargetsCount!==nt)&&(ft=!0):(ft=!0,We.__version=V.version);let An=We.currentProgram;ft===!0&&(An=oi(V,F,H));let li=!1,Rn=!1,Dn=!1;const xt=An.getUniforms(),_n=We.uniforms;if(se.useProgram(An.program)&&(li=!0,Rn=!0,Dn=!0),V.id!==D&&(D=V.id,Rn=!0),li||M!==R){xt.setValue(G,"projectionMatrix",R.projectionMatrix),xt.setValue(G,"viewMatrix",R.matrixWorldInverse);const Mt=xt.map.cameraPosition;Mt!==void 0&&Mt.setValue(G,Ne.setFromMatrixPosition(R.matrixWorld)),re.logarithmicDepthBuffer&&xt.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&xt.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Rn=!0,Dn=!0)}if(H.isSkinnedMesh){xt.setOptional(G,H,"bindMatrix"),xt.setOptional(G,H,"bindMatrixInverse");const Mt=H.skeleton;Mt&&(re.floatVertexTextures?(Mt.boneTexture===null&&Mt.computeBoneTexture(),xt.setValue(G,"boneTexture",Mt.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(xt.setOptional(G,H,"batchingTexture"),xt.setValue(G,"batchingTexture",H._matricesTexture,A));const Yn=k.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0&&re.isWebGL2===!0)&&Z.update(H,k,An),(Rn||We.receiveShadow!==H.receiveShadow)&&(We.receiveShadow=H.receiveShadow,xt.setValue(G,"receiveShadow",H.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(_n.envMap.value=Be,_n.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),Rn&&(xt.setValue(G,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Ti(_n,Dn),_e&&V.fog===!0&&le.refreshFogUniforms(_n,_e),le.refreshMaterialUniforms(_n,V,q,B,Te),Ts.upload(G,Si(We),_n,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ts.upload(G,Si(We),_n,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&xt.setValue(G,"center",H.center),xt.setValue(G,"modelViewMatrix",H.modelViewMatrix),xt.setValue(G,"normalMatrix",H.normalMatrix),xt.setValue(G,"modelMatrix",H.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Mt=V.uniformsGroups;for(let ci=0,Br=Mt.length;ci<Br;ci++)if(re.isWebGL2){const wi=Mt[ci];He.update(wi,An),He.bind(wi,An)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return An}function Ti(R,F){R.ambientLightColor.needsUpdate=F,R.lightProbe.needsUpdate=F,R.directionalLights.needsUpdate=F,R.directionalLightShadows.needsUpdate=F,R.pointLights.needsUpdate=F,R.pointLightShadows.needsUpdate=F,R.spotLights.needsUpdate=F,R.spotLightShadows.needsUpdate=F,R.rectAreaLights.needsUpdate=F,R.hemisphereLights.needsUpdate=F}function bi(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,F,k){ge.get(R.texture).__webglTexture=F,ge.get(R.depthTexture).__webglTexture=k;const V=ge.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,F){const k=ge.get(R);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(R,F=0,k=0){b=R,w=F,T=k;let V=!0,H=null,_e=!1,be=!1;if(R){const Be=ge.get(R);Be.__useDefaultFramebuffer!==void 0?(se.bindFramebuffer(G.FRAMEBUFFER,null),V=!1):Be.__webglFramebuffer===void 0?A.setupRenderTarget(R):Be.__hasExternalTextures&&A.rebindTextures(R,ge.get(R.texture).__webglTexture,ge.get(R.depthTexture).__webglTexture);const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(be=!0);const Ge=ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?H=Ge[F][k]:H=Ge[F],_e=!0):re.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?H=ge.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[k]:H=Ge,E.copy(R.viewport),U.copy(R.scissor),L=R.scissorTest}else E.copy(ee).multiplyScalar(q).floor(),U.copy(ae).multiplyScalar(q).floor(),L=ie;if(se.bindFramebuffer(G.FRAMEBUFFER,H)&&re.drawBuffers&&V&&se.drawBuffers(R,H),se.viewport(E),se.scissor(U),se.setScissorTest(L),_e){const Be=ge.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,Be.__webglTexture,k)}else if(be){const Be=ge.get(R.texture),Xe=F||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,Be.__webglTexture,k||0,Xe)}D=-1},this.readRenderTargetPixels=function(R,F,k,V,H,_e,be){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Ue=Ue[be]),Ue){se.bindFramebuffer(G.FRAMEBUFFER,Ue);try{const Be=R.texture,Xe=Be.format,Ge=Be.type;if(Xe!==vt&&fe.convert(Xe)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Ge===an&&(X.has("EXT_color_buffer_half_float")||re.isWebGL2&&X.has("EXT_color_buffer_float"));if(Ge!==Pn&&fe.convert(Ge)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Ot&&(re.isWebGL2||X.has("OES_texture_float")||X.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=R.width-V&&k>=0&&k<=R.height-H&&G.readPixels(F,k,V,H,fe.convert(Xe),fe.convert(Ge),_e)}finally{const Be=b!==null?ge.get(b).__webglFramebuffer:null;se.bindFramebuffer(G.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(R,F,k=0){const V=Math.pow(2,-k),H=Math.floor(F.image.width*V),_e=Math.floor(F.image.height*V);A.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,k,0,0,R.x,R.y,H,_e),se.unbindTexture()},this.copyTextureToTexture=function(R,F,k,V=0){const H=F.image.width,_e=F.image.height,be=fe.convert(k.format),Ue=fe.convert(k.type);A.setTexture2D(k,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment),F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,V,R.x,R.y,H,_e,be,Ue,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,V,R.x,R.y,F.mipmaps[0].width,F.mipmaps[0].height,be,F.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,V,R.x,R.y,be,Ue,F.image),V===0&&k.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),se.unbindTexture()},this.copyTextureToTexture3D=function(R,F,k,V,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=R.max.x-R.min.x+1,be=R.max.y-R.min.y+1,Ue=R.max.z-R.min.z+1,Be=fe.convert(V.format),Xe=fe.convert(V.type);let Ge;if(V.isData3DTexture)A.setTexture3D(V,0),Ge=G.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)A.setTexture2DArray(V,0),Ge=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);const Ve=G.getParameter(G.UNPACK_ROW_LENGTH),pt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Rt=G.getParameter(G.UNPACK_SKIP_PIXELS),ht=G.getParameter(G.UNPACK_SKIP_ROWS),Yt=G.getParameter(G.UNPACK_SKIP_IMAGES),nt=k.isCompressedTexture?k.mipmaps[H]:k.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,nt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,nt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,R.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,R.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,R.min.z),k.isDataTexture||k.isData3DTexture?G.texSubImage3D(Ge,H,F.x,F.y,F.z,_e,be,Ue,Be,Xe,nt.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Ge,H,F.x,F.y,F.z,_e,be,Ue,Be,nt.data)):G.texSubImage3D(Ge,H,F.x,F.y,F.z,_e,be,Ue,Be,Xe,nt),G.pixelStorei(G.UNPACK_ROW_LENGTH,Ve),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Rt),G.pixelStorei(G.UNPACK_SKIP_ROWS,ht),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Yt),H===0&&V.generateMipmaps&&G.generateMipmap(Ge),se.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),se.unbindTexture()},this.resetState=function(){w=0,T=0,b=null,se.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===po?"display-p3":"srgb",t.unpackColorSpace=rt.workingColorSpace===zs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Dt?Mi:Rc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Mi?Dt:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Eg extends Kc{}Eg.prototype.isWebGL1Renderer=!0;class ai extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Us extends Jt{constructor(e=null,t=1,n=1,r,s,o,a,l,u=it,c=it,f,h){super(null,o,a,l,u,c,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i extends mn{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],f=[],h=[],p=[];let v=0;const g=[],m=n/2;let d=0;x(),o===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new on(f,3)),this.setAttribute("normal",new on(h,3)),this.setAttribute("uv",new on(p,2));function x(){const y=new P,w=new P;let T=0;const b=(t-e)/n;for(let D=0;D<=s;D++){const M=[],E=D/s,U=E*(t-e)+e;for(let L=0;L<=r;L++){const O=L/r,C=O*l+a,N=Math.sin(C),B=Math.cos(C);w.x=U*N,w.y=-E*n+m,w.z=U*B,f.push(w.x,w.y,w.z),y.set(N,b,B).normalize(),h.push(y.x,y.y,y.z),p.push(O,1-E),M.push(v++)}g.push(M)}for(let D=0;D<r;D++)for(let M=0;M<s;M++){const E=g[M][D],U=g[M+1][D],L=g[M+1][D+1],O=g[M][D+1];c.push(E,U,O),c.push(U,L,O),T+=6}u.addGroup(d,T,0),d+=T}function _(y){const w=v,T=new Oe,b=new P;let D=0;const M=y===!0?e:t,E=y===!0?1:-1;for(let L=1;L<=r;L++)f.push(0,m*E,0),h.push(0,E,0),p.push(.5,.5),v++;const U=v;for(let L=0;L<=r;L++){const C=L/r*l+a,N=Math.cos(C),B=Math.sin(C);b.x=M*B,b.y=m*E,b.z=M*N,f.push(b.x,b.y,b.z),h.push(0,E,0),T.x=N*.5+.5,T.y=B*.5*E+.5,p.push(T.x,T.y),v++}for(let L=0;L<r;L++){const O=w+L,C=U+L;y===!0?c.push(C,C+1,O):c.push(C+1,C,O),D+=3}u.addGroup(d,D,y===!0?1:2),d+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Vs extends mn{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new P,h=new P,p=[],v=[],g=[],m=[];for(let d=0;d<=n;d++){const x=[],_=d/n;let y=0;d===0&&o===0?y=.5/t:d===n&&l===Math.PI&&(y=-.5/t);for(let w=0;w<=t;w++){const T=w/t;f.x=-e*Math.cos(r+T*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+T*s)*Math.sin(o+_*a),v.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(T+y,1-_),x.push(u++)}c.push(x)}for(let d=0;d<n;d++)for(let x=0;x<t;x++){const _=c[d][x+1],y=c[d][x],w=c[d+1][x],T=c[d+1][x+1];(d!==0||o>0)&&p.push(_,y,T),(d!==n-1||l<Math.PI)&&p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new on(v,3)),this.setAttribute("normal",new on(g,3)),this.setAttribute("uv",new on(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ft extends Nr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _o extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ra=new Qe,Xl=new P,ql=new P;class xo{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new go,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Xl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Tg extends xo{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ds*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bg extends _o{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Tg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Yl=new Qe,_r=new P,Ca=new P;class wg extends xo{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),n.position.copy(_r),Ca.copy(n.position),Ca.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ca),n.updateMatrixWorld(),r.makeTranslation(-_r.x,-_r.y,-_r.z),Yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yl)}}class Sn extends _o{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new wg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ag extends xo{constructor(){super(new qn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rg extends _o{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Ag}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cg{constructor(e,t,n=0,r=1/0){this.ray=new Nc(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new mo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return eo(e,this,n,t),n.sort(Zl),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)eo(e[r],this,n,t);return n.sort(Zl),n}}function Zl(i,e){return i.distance-e.distance}function eo(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)eo(r[s],e,t,!0)}}const jl=new P,cs=new P;class Vn{constructor(e=new P,t=new P){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){jl.subVectors(e,this.start),cs.subVectors(this.end,this.start);const n=cs.dot(cs);let s=cs.dot(jl)/n;return t&&(s=Ht(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);function Pg(i,e=!1){const t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},o={},a=i[0].morphTargetsRelative,l=new mn;let u=0;for(let c=0;c<i.length;++c){const f=i[c];let h=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(t)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(u,p,c),u+=p}}if(t){let c=0;const f=[];for(let h=0;h<i.length;++h){const p=i[h].index;for(let v=0;v<p.count;++v)f.push(p.getX(v)+c);c+=i[h].attributes.position.count}l.setIndex(f)}for(const c in s){const f=Kl(s[c]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,f)}for(const c in o){const f=o[c][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let h=0;h<f;++h){const p=[];for(let g=0;g<o[c].length;++g)p.push(o[c][g][h]);const v=Kl(p);if(!v)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(v)}}return l}function Kl(i){let e,t,n,r=-1,s=0;for(let u=0;u<i.length;++u){const c=i[u];if(c.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=c.array.constructor),e!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=c.itemSize),t!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=c.gpuType),r!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=c.array.length}const o=new e(s);let a=0;for(let u=0;u<i.length;++u)o.set(i[u].array,a),a+=i[u].array.length;const l=new Tt(o,t,n);return r!==void 0&&(l.gpuType=r),l}const Ws=0,Lg=1,Jc=2,Jl=2,Pa=1.25,Ql=1,ri=6*4+4+4,Xs=65535,Dg=Math.pow(2,-24),La=Symbol("SKIP_GENERATION");function Qc(i){return i.index?i.index.count:i.attributes.position.count}function ur(i){return Qc(i)/3}function $c(i,e=ArrayBuffer){return i>65535?new Uint32Array(new e(4*i)):new Uint16Array(new e(2*i))}function Ig(i,e){if(!i.index){const t=i.attributes.position.count,n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=$c(t,n);i.setIndex(new Tt(r,1));for(let s=0;s<t;s++)r[s]=s}}function eu(i,e){const t=ur(i),n=e||i.drawRange,r=n.start/3,s=(n.start+n.count)/3,o=Math.max(0,r),a=Math.min(t,s)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function tu(i,e){if(!i.groups||!i.groups.length)return eu(i,e);const t=[],n=new Set,r=e||i.drawRange,s=r.start/3,o=(r.start+r.count)/3;for(const l of i.groups){const u=l.start/3,c=(l.start+l.count)/3;n.add(Math.max(s,u)),n.add(Math.min(o,c))}const a=Array.from(n.values()).sort((l,u)=>l-u);for(let l=0;l<a.length-1;l++){const u=a[l],c=a[l+1];t.push({offset:Math.floor(u),count:Math.floor(c-u)})}return t}function Ug(i,e){const t=ur(i),n=tu(i,e).sort((o,a)=>o.offset-a.offset),r=n[n.length-1];r.count=Math.min(t-r.offset,r.count);let s=0;return n.forEach(({count:o})=>s+=o),t!==s}function Da(i,e,t,n,r){let s=1/0,o=1/0,a=1/0,l=-1/0,u=-1/0,c=-1/0,f=1/0,h=1/0,p=1/0,v=-1/0,g=-1/0,m=-1/0;for(let d=e*6,x=(e+t)*6;d<x;d+=6){const _=i[d+0],y=i[d+1],w=_-y,T=_+y;w<s&&(s=w),T>l&&(l=T),_<f&&(f=_),_>v&&(v=_);const b=i[d+2],D=i[d+3],M=b-D,E=b+D;M<o&&(o=M),E>u&&(u=E),b<h&&(h=b),b>g&&(g=b);const U=i[d+4],L=i[d+5],O=U-L,C=U+L;O<a&&(a=O),C>c&&(c=C),U<p&&(p=U),U>m&&(m=U)}n[0]=s,n[1]=o,n[2]=a,n[3]=l,n[4]=u,n[5]=c,r[0]=f,r[1]=h,r[2]=p,r[3]=v,r[4]=g,r[5]=m}function Ng(i,e=null,t=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,o=ur(i),a=r.normalized;let l;e===null?(l=new Float32Array(o*6*4),t=0,n=o):(l=e,t=t||0,n=n||o);const u=r.array,c=r.offset||0;let f=3;r.isInterleavedBufferAttribute&&(f=r.data.stride);const h=["getX","getY","getZ"];for(let p=t;p<t+n;p++){const v=p*3,g=p*6;let m=v+0,d=v+1,x=v+2;s&&(m=s[m],d=s[d],x=s[x]),a||(m=m*f+c,d=d*f+c,x=x*f+c);for(let _=0;_<3;_++){let y,w,T;a?(y=r[h[_]](m),w=r[h[_]](d),T=r[h[_]](x)):(y=u[m+_],w=u[d+_],T=u[x+_]);let b=y;w<b&&(b=w),T<b&&(b=T);let D=y;w>D&&(D=w),T>D&&(D=T);const M=(D-b)/2,E=_*2;l[g+E+0]=b+M,l[g+E+1]=M+(Math.abs(b)+M)*Dg}}return l}function mt(i,e,t){return t.min.x=e[i],t.min.y=e[i+1],t.min.z=e[i+2],t.max.x=e[i+3],t.max.y=e[i+4],t.max.z=e[i+5],t}function $l(i){let e=-1,t=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>t&&(t=r,e=n)}return e}function ec(i,e){e.set(i)}function tc(i,e,t){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=e[s],t[s]=n<r?n:r,n=i[o],r=e[o],t[o]=n>r?n:r}}function us(i,e,t){for(let n=0;n<3;n++){const r=e[i+2*n],s=e[i+2*n+1],o=r-s,a=r+s;o<t[n]&&(t[n]=o),a>t[n+3]&&(t[n+3]=a)}}function xr(i){const e=i[3]-i[0],t=i[4]-i[1],n=i[5]-i[2];return 2*(e*t+t*n+n*e)}const Gn=32,Fg=(i,e)=>i.candidate-e.candidate,$n=new Array(Gn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),hs=new Float32Array(6);function Bg(i,e,t,n,r,s){let o=-1,a=0;if(s===Ws)o=$l(e),o!==-1&&(a=(e[o]+e[o+3])/2);else if(s===Lg)o=$l(i),o!==-1&&(a=Og(t,n,r,o));else if(s===Jc){const l=xr(i);let u=Pa*r;const c=n*6,f=(n+r)*6;for(let h=0;h<3;h++){const p=e[h],m=(e[h+3]-p)/Gn;if(r<Gn/4){const d=[...$n];d.length=r;let x=0;for(let y=c;y<f;y+=6,x++){const w=d[x];w.candidate=t[y+2*h],w.count=0;const{bounds:T,leftCacheBounds:b,rightCacheBounds:D}=w;for(let M=0;M<3;M++)D[M]=1/0,D[M+3]=-1/0,b[M]=1/0,b[M+3]=-1/0,T[M]=1/0,T[M+3]=-1/0;us(y,t,T)}d.sort(Fg);let _=r;for(let y=0;y<_;y++){const w=d[y];for(;y+1<_&&d[y+1].candidate===w.candidate;)d.splice(y+1,1),_--}for(let y=c;y<f;y+=6){const w=t[y+2*h];for(let T=0;T<_;T++){const b=d[T];w>=b.candidate?us(y,t,b.rightCacheBounds):(us(y,t,b.leftCacheBounds),b.count++)}}for(let y=0;y<_;y++){const w=d[y],T=w.count,b=r-w.count,D=w.leftCacheBounds,M=w.rightCacheBounds;let E=0;T!==0&&(E=xr(D)/l);let U=0;b!==0&&(U=xr(M)/l);const L=Ql+Pa*(E*T+U*b);L<u&&(o=h,u=L,a=w.candidate)}}else{for(let _=0;_<Gn;_++){const y=$n[_];y.count=0,y.candidate=p+m+_*m;const w=y.bounds;for(let T=0;T<3;T++)w[T]=1/0,w[T+3]=-1/0}for(let _=c;_<f;_+=6){let T=~~((t[_+2*h]-p)/m);T>=Gn&&(T=Gn-1);const b=$n[T];b.count++,us(_,t,b.bounds)}const d=$n[Gn-1];ec(d.bounds,d.rightCacheBounds);for(let _=Gn-2;_>=0;_--){const y=$n[_],w=$n[_+1];tc(y.bounds,w.rightCacheBounds,y.rightCacheBounds)}let x=0;for(let _=0;_<Gn-1;_++){const y=$n[_],w=y.count,T=y.bounds,D=$n[_+1].rightCacheBounds;w!==0&&(x===0?ec(T,hs):tc(T,hs,hs)),x+=w;let M=0,E=0;x!==0&&(M=xr(hs)/l);const U=r-x;U!==0&&(E=xr(D)/l);const L=Ql+Pa*(M*x+E*U);L<u&&(o=h,u=L,a=y.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Og(i,e,t,n){let r=0;for(let s=e,o=e+t;s<o;s++)r+=i[s*6+n*2];return r/t}class Ia{constructor(){this.boundingData=new Float32Array(6)}}function zg(i,e,t,n,r,s){let o=n,a=n+r-1;const l=s.pos,u=s.axis*2;for(;;){for(;o<=a&&t[o*6+u]<l;)o++;for(;o<=a&&t[a*6+u]>=l;)a--;if(o<a){for(let c=0;c<3;c++){let f=e[o*3+c];e[o*3+c]=e[a*3+c],e[a*3+c]=f}for(let c=0;c<6;c++){let f=t[o*6+c];t[o*6+c]=t[a*6+c],t[a*6+c]=f}o++,a--}else return o}}function Gg(i,e,t,n,r,s){let o=n,a=n+r-1;const l=s.pos,u=s.axis*2;for(;;){for(;o<=a&&t[o*6+u]<l;)o++;for(;o<=a&&t[a*6+u]>=l;)a--;if(o<a){let c=i[o];i[o]=i[a],i[a]=c;for(let f=0;f<6;f++){let h=t[o*6+f];t[o*6+f]=t[a*6+f],t[a*6+f]=h}o++,a--}else return o}}function kt(i,e){return e[i+15]===65535}function Kt(i,e){return e[i+6]}function rn(i,e){return e[i+14]}function hn(i){return i+8}function sn(i,e){return e[i+6]}function yo(i,e){return e[i+7]}let nu,wr,bs,iu;const Hg=Math.pow(2,32);function to(i){return"count"in i?1:1+to(i.left)+to(i.right)}function kg(i,e,t){return nu=new Float32Array(t),wr=new Uint32Array(t),bs=new Uint16Array(t),iu=new Uint8Array(t),no(i,e)}function no(i,e){const t=i/4,n=i/2,r="count"in e,s=e.boundingData;for(let o=0;o<6;o++)nu[t+o]=s[o];if(r)if(e.buffer){const o=e.buffer;iu.set(new Uint8Array(o),i);for(let a=i,l=i+o.byteLength;a<l;a+=ri){const u=a/2;kt(u,bs)||(wr[a/4+6]+=t)}return i+o.byteLength}else{const o=e.offset,a=e.count;return wr[t+6]=o,bs[n+14]=a,bs[n+15]=Xs,i+ri}else{const o=e.left,a=e.right,l=e.splitAxis;let u;if(u=no(i+ri,o),u/4>Hg)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return wr[t+6]=u/4,u=no(u,a),wr[t+7]=l,u}}function Vg(i,e){const t=(i.index?i.index.count:i.attributes.position.count)/3,n=t>2**16,r=n?4:2,s=e?new SharedArrayBuffer(t*r):new ArrayBuffer(t*r),o=n?new Uint32Array(s):new Uint16Array(s);for(let a=0,l=o.length;a<l;a++)o[a]=a;return o}function Wg(i,e,t,n,r){const{maxDepth:s,verbose:o,maxLeafTris:a,strategy:l,onProgress:u,indirect:c}=r,f=i._indirectBuffer,h=i.geometry,p=h.index?h.index.array:null,v=c?Gg:zg,g=ur(h),m=new Float32Array(6);let d=!1;const x=new Ia;return Da(e,t,n,x.boundingData,m),y(x,t,n,m),x;function _(w){u&&u(w/g)}function y(w,T,b,D=null,M=0){if(!d&&M>=s&&(d=!0,o&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),b<=a||M>=s)return _(T+b),w.offset=T,w.count=b,w;const E=Bg(w.boundingData,D,e,T,b,l);if(E.axis===-1)return _(T+b),w.offset=T,w.count=b,w;const U=v(f,p,e,T,b,E);if(U===T||U===T+b)_(T+b),w.offset=T,w.count=b;else{w.splitAxis=E.axis;const L=new Ia,O=T,C=U-T;w.left=L,Da(e,O,C,L.boundingData,m),y(L,O,C,m,M+1);const N=new Ia,B=U,q=b-C;w.right=N,Da(e,B,q,N.boundingData,m),y(N,B,q,m,M+1)}return w}}function Xg(i,e){const t=i.geometry;e.indirect&&(i._indirectBuffer=Vg(t,e.useSharedArrayBuffer),Ug(t,e.range)&&!e.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Ig(t,e);const n=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Ng(t),s=e.indirect?eu(t,e.range):tu(t,e.range);i._roots=s.map(o=>{const a=Wg(i,r,o.offset,o.count,e),l=to(a),u=new n(ri*l);return kg(0,a,u),u})}class Xn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s][t];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(e,t){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const a=t[s],l=e.dot(a);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(e){return this.min>e.max||e.min>this.max}}Xn.prototype.setFromBox=function(){const i=new P;return function(t,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let c=0;c<=1;c++){i.x=r.x*l+s.x*(1-l),i.y=r.y*u+s.y*(1-u),i.z=r.z*c+s.z*(1-c);const f=t.dot(i);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const qg=function(){const i=new P,e=new P,t=new P;return function(r,s,o){const a=r.start,l=i,u=s.start,c=e;t.subVectors(a,u),i.subVectors(r.end,r.start),e.subVectors(s.end,s.start);const f=t.dot(c),h=c.dot(l),p=c.dot(c),v=t.dot(l),m=l.dot(l)*p-h*h;let d,x;m!==0?d=(f*h-v*p)/m:d=0,x=(f+d*h)/p,o.x=d,o.y=x}}(),Mo=function(){const i=new Oe,e=new P,t=new P;return function(r,s,o,a){qg(r,s,i);let l=i.x,u=i.y;if(l>=0&&l<=1&&u>=0&&u<=1){r.at(l,o),s.at(u,a);return}else if(l>=0&&l<=1){u<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(u>=0&&u<=1){l<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let c;l<0?c=r.start:c=r.end;let f;u<0?f=s.start:f=s.end;const h=e,p=t;if(r.closestPointToPoint(f,!0,e),s.closestPointToPoint(c,!0,t),h.distanceToSquared(f)<=p.distanceToSquared(c)){o.copy(h),a.copy(f);return}else{o.copy(c),a.copy(p);return}}}}(),Yg=function(){const i=new P,e=new P,t=new Hn,n=new Vn;return function(s,o){const{radius:a,center:l}=s,{a:u,b:c,c:f}=o;if(n.start=u,n.end=c,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a)||(n.start=c,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=a))return!0;const g=o.getPlane(t);if(Math.abs(g.distanceToPoint(l))<=a){const d=g.projectPoint(l,e);if(o.containsPoint(d))return!0}return!1}}(),Zg=1e-15;function Ua(i){return Math.abs(i)<Zg}class wn extends Bt{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new P),this.satBounds=new Array(4).fill().map(()=>new Xn),this.points=[this.a,this.b,this.c],this.sphere=new Gs,this.plane=new Hn,this.needsUpdate=!0}intersectsSphere(e){return Yg(e,this)}update(){const e=this.a,t=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],l=o[0];this.getNormal(a),l.setFromPoints(a,r);const u=s[1],c=o[1];u.subVectors(e,t),c.setFromPoints(u,r);const f=s[2],h=o[2];f.subVectors(t,n),h.setFromPoints(f,r);const p=s[3],v=o[3];p.subVectors(n,e),v.setFromPoints(p,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,e),this.needsUpdate=!1}}wn.prototype.closestPointToSegment=function(){const i=new P,e=new P,t=new Vn;return function(r,s=null,o=null){const{start:a,end:l}=r,u=this.points;let c,f=1/0;for(let h=0;h<3;h++){const p=(h+1)%3;t.start.copy(u[h]),t.end.copy(u[p]),Mo(t,r,i,e),c=i.distanceToSquared(e),c<f&&(f=c,s&&s.copy(i),o&&o.copy(e))}return this.closestPointToPoint(a,i),c=a.distanceToSquared(i),c<f&&(f=c,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(l,i),c=l.distanceToSquared(i),c<f&&(f=c,s&&s.copy(i),o&&o.copy(l)),Math.sqrt(f)}}();wn.prototype.intersectsTriangle=function(){const i=new wn,e=new Array(3),t=new Array(3),n=new Xn,r=new Xn,s=new P,o=new P,a=new P,l=new P,u=new P,c=new Vn,f=new Vn,h=new Vn,p=new P;function v(g,m,d){const x=g.points;let _=0,y=-1;for(let w=0;w<3;w++){const{start:T,end:b}=c;T.copy(x[w]),b.copy(x[(w+1)%3]),c.delta(o);const D=Ua(m.distanceToPoint(T));if(Ua(m.normal.dot(o))&&D){d.copy(c),_=2;break}const M=m.intersectLine(c,p);if(!M&&D&&p.copy(T),(M||D)&&!Ua(p.distanceTo(b))){if(_<=1)(_===1?d.start:d.end).copy(p),D&&(y=_);else if(_>=2){(y===1?d.start:d.end).copy(p),_=2;break}if(_++,_===2&&y===-1)break}}return _}return function(m,d=null,x=!1){this.needsUpdate&&this.update(),m.isExtendedTriangle?m.needsUpdate&&m.update():(i.copy(m),i.update(),m=i);const _=this.plane,y=m.plane;if(Math.abs(_.normal.dot(y.normal))>1-1e-10){const w=this.satBounds,T=this.satAxes;t[0]=m.a,t[1]=m.b,t[2]=m.c;for(let M=0;M<4;M++){const E=w[M],U=T[M];if(n.setFromPoints(U,t),E.isSeparated(n))return!1}const b=m.satBounds,D=m.satAxes;e[0]=this.a,e[1]=this.b,e[2]=this.c;for(let M=0;M<4;M++){const E=b[M],U=D[M];if(n.setFromPoints(U,e),E.isSeparated(n))return!1}for(let M=0;M<4;M++){const E=T[M];for(let U=0;U<4;U++){const L=D[U];if(s.crossVectors(E,L),n.setFromPoints(s,e),r.setFromPoints(s,t),n.isSeparated(r))return!1}}return d&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}else{const w=v(this,y,f);if(w===1&&m.containsPoint(f.end))return d&&(d.start.copy(f.end),d.end.copy(f.end)),!0;if(w!==2)return!1;const T=v(m,_,h);if(T===1&&this.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(T!==2)return!1;if(f.delta(a),h.delta(l),a.dot(l)<0){let O=h.start;h.start=h.end,h.end=O}const b=f.start.dot(a),D=f.end.dot(a),M=h.start.dot(a),E=h.end.dot(a),U=D<M,L=b<E;return b!==E&&M!==D&&U===L?!1:(d&&(u.subVectors(f.start,h.start),u.dot(a)>0?d.start.copy(f.start):d.start.copy(h.start),u.subVectors(f.end,h.end),u.dot(a)<0?d.end.copy(f.end):d.end.copy(h.end)),!0)}}}();wn.prototype.distanceToPoint=function(){const i=new P;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();wn.prototype.distanceToTriangle=function(){const i=new P,e=new P,t=["a","b","c"],n=new Vn,r=new Vn;return function(o,a=null,l=null){const u=a||l?n:null;if(this.intersectsTriangle(o,u))return(a||l)&&(a&&u.getCenter(a),l&&u.getCenter(l)),0;let c=1/0;for(let f=0;f<3;f++){let h;const p=t[f],v=o[p];this.closestPointToPoint(v,i),h=v.distanceToSquared(i),h<c&&(c=h,a&&a.copy(i),l&&l.copy(v));const g=this[p];o.closestPointToPoint(g,i),h=g.distanceToSquared(i),h<c&&(c=h,a&&a.copy(g),l&&l.copy(i))}for(let f=0;f<3;f++){const h=t[f],p=t[(f+1)%3];n.set(this[h],this[p]);for(let v=0;v<3;v++){const g=t[v],m=t[(v+1)%3];r.set(o[g],o[m]),Mo(n,r,i,e);const d=i.distanceToSquared(e);d<c&&(c=d,a&&a.copy(i),l&&l.copy(e))}}return Math.sqrt(c)}}();class Xt{constructor(e,t,n){this.isOrientedBox=!0,this.min=new P,this.max=new P,this.matrix=new Qe,this.invMatrix=new Qe,this.points=new Array(8).fill().map(()=>new P),this.satAxes=new Array(3).fill().map(()=>new P),this.satBounds=new Array(3).fill().map(()=>new Xn),this.alignedSatBounds=new Array(3).fill().map(()=>new Xn),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),n&&this.matrix.copy(n)}set(e,t,n){this.min.copy(e),this.max.copy(t),this.matrix.copy(n),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}Xt.prototype.update=function(){return function(){const e=this.matrix,t=this.min,n=this.max,r=this.points;for(let u=0;u<=1;u++)for(let c=0;c<=1;c++)for(let f=0;f<=1;f++){const h=1*u|2*c|4*f,p=r[h];p.x=u?n.x:t.x,p.y=c?n.y:t.y,p.z=f?n.z:t.z,p.applyMatrix4(e)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let u=0;u<3;u++){const c=o[u],f=s[u],h=1<<u,p=r[h];c.subVectors(a,p),f.setFromPoints(c,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Xt.prototype.intersectsBox=function(){const i=new Xn;return function(t){this.needsUpdate&&this.update();const n=t.min,r=t.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const u=o[l],c=s[l];if(i.setFromBox(u,t),c.isSeparated(i))return!1}return!0}}();Xt.prototype.intersectsTriangle=function(){const i=new wn,e=new Array(3),t=new Xn,n=new Xn,r=new P;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,l=this.satAxes;e[0]=o.a,e[1]=o.b,e[2]=o.c;for(let h=0;h<3;h++){const p=a[h],v=l[h];if(t.setFromPoints(v,e),p.isSeparated(t))return!1}const u=o.satBounds,c=o.satAxes,f=this.points;for(let h=0;h<3;h++){const p=u[h],v=c[h];if(t.setFromPoints(v,f),p.isSeparated(t))return!1}for(let h=0;h<3;h++){const p=l[h];for(let v=0;v<4;v++){const g=c[v];if(r.crossVectors(p,g),t.setFromPoints(r,e),n.setFromPoints(r,f),t.isSeparated(n))return!1}}return!0}}();Xt.prototype.closestPointToPoint=function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}();Xt.prototype.distanceToPoint=function(){const i=new P;return function(t){return this.closestPointToPoint(t,i),t.distanceTo(i)}}();Xt.prototype.distanceToBox=function(){const i=["x","y","z"],e=new Array(12).fill().map(()=>new Vn),t=new Array(12).fill().map(()=>new Vn),n=new P,r=new P;return function(o,a=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(l||u)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),l&&l.copy(n),u&&u.copy(r)),0;const c=a*a,f=o.min,h=o.max,p=this.points;let v=1/0;for(let m=0;m<8;m++){const d=p[m];r.copy(d).clamp(f,h);const x=d.distanceToSquared(r);if(x<v&&(v=x,l&&l.copy(d),u&&u.copy(r),x<c))return Math.sqrt(x)}let g=0;for(let m=0;m<3;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){const _=(m+1)%3,y=(m+2)%3,w=d<<_|x<<y,T=1<<m|d<<_|x<<y,b=p[w],D=p[T];e[g].set(b,D);const E=i[m],U=i[_],L=i[y],O=t[g],C=O.start,N=O.end;C[E]=f[E],C[U]=d?f[U]:h[U],C[L]=x?f[L]:h[U],N[E]=h[E],N[U]=d?f[U]:h[U],N[L]=x?f[L]:h[U],g++}for(let m=0;m<=1;m++)for(let d=0;d<=1;d++)for(let x=0;x<=1;x++){r.x=m?h.x:f.x,r.y=d?h.y:f.y,r.z=x?h.z:f.z,this.closestPointToPoint(r,n);const _=r.distanceToSquared(n);if(_<v&&(v=_,l&&l.copy(n),u&&u.copy(r),_<c))return Math.sqrt(_)}for(let m=0;m<12;m++){const d=e[m];for(let x=0;x<12;x++){const _=t[x];Mo(d,_,n,r);const y=n.distanceToSquared(r);if(y<v&&(v=y,l&&l.copy(n),u&&u.copy(r),y<c))return Math.sqrt(y)}}return Math.sqrt(v)}}();class So{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class jg extends So{constructor(){super(()=>new wn)}}const fn=new jg;class Kg{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=n=>{t&&e.push(t),t=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const ut=new Kg;let ti,tr;const Vi=[],fs=new So(()=>new Wt);function Jg(i,e,t,n,r,s){ti=fs.getPrimitive(),tr=fs.getPrimitive(),Vi.push(ti,tr),ut.setBuffer(i._roots[e]);const o=io(0,i.geometry,t,n,r,s);ut.clearBuffer(),fs.releasePrimitive(ti),fs.releasePrimitive(tr),Vi.pop(),Vi.pop();const a=Vi.length;return a>0&&(tr=Vi[a-1],ti=Vi[a-2]),o}function io(i,e,t,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:l,uint32Array:u}=ut;let c=i*2;if(kt(c,l)){const v=Kt(i,u),g=rn(c,l);return mt(i,a,ti),n(v,g,!1,o,s+i,ti)}else{let L=function(C){const{uint16Array:N,uint32Array:B}=ut;let q=C*2;for(;!kt(q,N);)C=hn(C),q=C*2;return Kt(C,B)},O=function(C){const{uint16Array:N,uint32Array:B}=ut;let q=C*2;for(;!kt(q,N);)C=sn(C,B),q=C*2;return Kt(C,B)+rn(q,N)};var h=L,p=O;const v=hn(i),g=sn(i,u);let m=v,d=g,x,_,y,w;if(r&&(y=ti,w=tr,mt(m,a,y),mt(d,a,w),x=r(y),_=r(w),_<x)){m=g,d=v;const C=x;x=_,_=C,y=w}y||(y=ti,mt(m,a,y));const T=kt(m*2,l),b=t(y,T,x,o+1,s+m);let D;if(b===Jl){const C=L(m),B=O(m)-C;D=n(C,B,!0,o+1,s+m,y)}else D=b&&io(m,e,t,n,r,s,o+1);if(D)return!0;w=tr,mt(d,a,w);const M=kt(d*2,l),E=t(w,M,_,o+1,s+d);let U;if(E===Jl){const C=L(d),B=O(d)-C;U=n(C,B,!0,o+1,s+d,w)}else U=E&&io(d,e,t,n,r,s,o+1);return!!U}}const yr=new P,Na=new P;function Qg(i,e,t={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,l=null;if(i.shapecast({boundsTraverseOrder:c=>(yr.copy(e).clamp(c.min,c.max),yr.distanceToSquared(e)),intersectsBounds:(c,f,h)=>h<a&&h<o,intersectsTriangle:(c,f)=>{c.closestPointToPoint(e,yr);const h=e.distanceToSquared(yr);return h<a&&(Na.copy(yr),a=h,l=f),h<s}}),a===1/0)return null;const u=Math.sqrt(a);return t.point?t.point.copy(Na):t.point=Na.clone(),t.distance=u,t.faceIndex=l,t}const Wi=new P,Xi=new P,qi=new P,ds=new Oe,ps=new Oe,ms=new Oe,nc=new P,ic=new P,rc=new P,gs=new P;function $g(i,e,t,n,r,s,o,a){let l;if(s===Vt?l=i.intersectTriangle(n,t,e,!0,r):l=i.intersectTriangle(e,t,n,s!==cn,r),l===null)return null;const u=i.origin.distanceTo(r);return u<o||u>a?null:{distance:u,point:r.clone()}}function ev(i,e,t,n,r,s,o,a,l,u,c){Wi.fromBufferAttribute(e,s),Xi.fromBufferAttribute(e,o),qi.fromBufferAttribute(e,a);const f=$g(i,Wi,Xi,qi,gs,l,u,c);if(f){n&&(ds.fromBufferAttribute(n,s),ps.fromBufferAttribute(n,o),ms.fromBufferAttribute(n,a),f.uv=Bt.getInterpolation(gs,Wi,Xi,qi,ds,ps,ms,new Oe)),r&&(ds.fromBufferAttribute(r,s),ps.fromBufferAttribute(r,o),ms.fromBufferAttribute(r,a),f.uv1=Bt.getInterpolation(gs,Wi,Xi,qi,ds,ps,ms,new Oe)),t&&(nc.fromBufferAttribute(t,s),ic.fromBufferAttribute(t,o),rc.fromBufferAttribute(t,a),f.normal=Bt.getInterpolation(gs,Wi,Xi,qi,nc,ic,rc,new P),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:s,b:o,c:a,normal:new P,materialIndex:0};Bt.getNormal(Wi,Xi,qi,h.normal),f.face=h,f.faceIndex=s}return f}function qs(i,e,t,n,r,s,o){const a=n*3;let l=a+0,u=a+1,c=a+2;const f=i.index;i.index&&(l=f.getX(l),u=f.getX(u),c=f.getX(c));const{position:h,normal:p,uv:v,uv1:g}=i.attributes,m=ev(t,h,p,v,g,l,u,c,e,s,o);return m?(m.faceIndex=n,r&&r.push(m),m):null}function Et(i,e,t,n){const r=i.a,s=i.b,o=i.c;let a=e,l=e+1,u=e+2;t&&(a=t.getX(a),l=t.getX(l),u=t.getX(u)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),o.x=n.getX(u),o.y=n.getY(u),o.z=n.getZ(u)}function tv(i,e,t,n,r,s,o,a){const{geometry:l,_indirectBuffer:u}=i;for(let c=n,f=n+r;c<f;c++)qs(l,e,t,c,s,o,a)}function nv(i,e,t,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let u=1/0,c=null;for(let f=n,h=n+r;f<h;f++){let p;p=qs(a,e,t,f,null,s,o),p&&p.distance<u&&(c=p,u=p.distance)}return c}function iv(i,e,t,n,r,s,o){const{geometry:a}=t,{index:l}=a,u=a.attributes.position;for(let c=i,f=e+i;c<f;c++){let h;if(h=c,Et(o,h*3,l,u),o.needsUpdate=!0,n(o,h,r,s))return!0}return!1}function rv(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,o,a,l,u=0;const c=i._roots;for(let h=0,p=c.length;h<p;h++)s=c[h],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),f(0,u),u+=s.byteLength;function f(h,p,v=!1){const g=h*2;if(a[g+15]===Xs){const d=o[h+6],x=a[g+14];let _=1/0,y=1/0,w=1/0,T=-1/0,b=-1/0,D=-1/0;for(let M=3*d,E=3*(d+x);M<E;M++){let U=n[M];const L=r.getX(U),O=r.getY(U),C=r.getZ(U);L<_&&(_=L),L>T&&(T=L),O<y&&(y=O),O>b&&(b=O),C<w&&(w=C),C>D&&(D=C)}return l[h+0]!==_||l[h+1]!==y||l[h+2]!==w||l[h+3]!==T||l[h+4]!==b||l[h+5]!==D?(l[h+0]=_,l[h+1]=y,l[h+2]=w,l[h+3]=T,l[h+4]=b,l[h+5]=D,!0):!1}else{const d=h+8,x=o[h+6],_=d+p,y=x+p;let w=v,T=!1,b=!1;e?w||(T=e.has(_),b=e.has(y),w=!T&&!b):(T=!0,b=!0);const D=w||T,M=w||b;let E=!1;D&&(E=f(d,p,w));let U=!1;M&&(U=f(x,p,w));const L=E||U;if(L)for(let O=0;O<3;O++){const C=d+O,N=x+O,B=l[C],q=l[C+3],Y=l[N],j=l[N+3];l[h+O]=B<Y?B:Y,l[h+O+3]=q>j?q:j}return L}}}function si(i,e,t,n,r){let s,o,a,l,u,c;const f=1/t.direction.x,h=1/t.direction.y,p=1/t.direction.z,v=t.origin.x,g=t.origin.y,m=t.origin.z;let d=e[i],x=e[i+3],_=e[i+1],y=e[i+3+1],w=e[i+2],T=e[i+3+2];return f>=0?(s=(d-v)*f,o=(x-v)*f):(s=(x-v)*f,o=(d-v)*f),h>=0?(a=(_-g)*h,l=(y-g)*h):(a=(y-g)*h,l=(_-g)*h),s>l||a>o||((a>s||isNaN(s))&&(s=a),(l<o||isNaN(o))&&(o=l),p>=0?(u=(w-m)*p,c=(T-m)*p):(u=(T-m)*p,c=(w-m)*p),s>c||u>o)?!1:((u>s||s!==s)&&(s=u),(c<o||o!==o)&&(o=c),s<=r&&o>=n)}function sv(i,e,t,n,r,s,o,a){const{geometry:l,_indirectBuffer:u}=i;for(let c=n,f=n+r;c<f;c++){let h=u?u[c]:c;qs(l,e,t,h,s,o,a)}}function av(i,e,t,n,r,s,o){const{geometry:a,_indirectBuffer:l}=i;let u=1/0,c=null;for(let f=n,h=n+r;f<h;f++){let p;p=qs(a,e,t,l?l[f]:f,null,s,o),p&&p.distance<u&&(c=p,u=p.distance)}return c}function ov(i,e,t,n,r,s,o){const{geometry:a}=t,{index:l}=a,u=a.attributes.position;for(let c=i,f=e+i;c<f;c++){let h;if(h=t.resolveTriangleIndex(c),Et(o,h*3,l,u),o.needsUpdate=!0,n(o,h,r,s))return!0}return!1}function lv(i,e,t,n,r,s,o){ut.setBuffer(i._roots[e]),ro(0,i,t,n,r,s,o),ut.clearBuffer()}function ro(i,e,t,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:u}=ut,c=i*2;if(kt(c,l)){const h=Kt(i,u),p=rn(c,l);tv(e,t,n,h,p,r,s,o)}else{const h=hn(i);si(h,a,n,s,o)&&ro(h,e,t,n,r,s,o);const p=sn(i,u);si(p,a,n,s,o)&&ro(p,e,t,n,r,s,o)}}const cv=["x","y","z"];function uv(i,e,t,n,r,s){ut.setBuffer(i._roots[e]);const o=so(0,i,t,n,r,s);return ut.clearBuffer(),o}function so(i,e,t,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ut;let u=i*2;if(kt(u,a)){const f=Kt(i,l),h=rn(u,a);return nv(e,t,n,f,h,r,s)}else{const f=yo(i,l),h=cv[f],v=n.direction[h]>=0;let g,m;v?(g=hn(i),m=sn(i,l)):(g=sn(i,l),m=hn(i));const x=si(g,o,n,r,s)?so(g,e,t,n,r,s):null;if(x){const w=x.point[h];if(v?w<=o[m+f]:w>=o[m+f+3])return x}const y=si(m,o,n,r,s)?so(m,e,t,n,r,s):null;return x&&y?x.distance<=y.distance?x:y:x||y||null}}const vs=new Wt,Yi=new wn,Zi=new wn,Mr=new Qe,sc=new Xt,_s=new Xt;function hv(i,e,t,n){ut.setBuffer(i._roots[e]);const r=ao(0,i,t,n);return ut.clearBuffer(),r}function ao(i,e,t,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ut;let l=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),sc.set(t.boundingBox.min,t.boundingBox.max,n),r=sc),kt(l,o)){const c=e.geometry,f=c.index,h=c.attributes.position,p=t.index,v=t.attributes.position,g=Kt(i,a),m=rn(l,o);if(Mr.copy(n).invert(),t.boundsTree)return mt(i,s,_s),_s.matrix.copy(Mr),_s.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>_s.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let _=g*3,y=(m+g)*3;_<y;_+=3)if(Et(Zi,_,f,h),Zi.needsUpdate=!0,x.intersectsTriangle(Zi))return!0;return!1}});for(let d=g*3,x=(m+g)*3;d<x;d+=3){Et(Yi,d,f,h),Yi.a.applyMatrix4(Mr),Yi.b.applyMatrix4(Mr),Yi.c.applyMatrix4(Mr),Yi.needsUpdate=!0;for(let _=0,y=p.count;_<y;_+=3)if(Et(Zi,_,p,v),Zi.needsUpdate=!0,Yi.intersectsTriangle(Zi))return!0}}else{const c=i+8,f=a[i+6];return mt(c,s,vs),!!(r.intersectsBox(vs)&&ao(c,e,t,n,r)||(mt(f,s,vs),r.intersectsBox(vs)&&ao(f,e,t,n,r)))}}const xs=new Qe,Fa=new Xt,Sr=new Xt,fv=new P,dv=new P,pv=new P,mv=new P;function gv(i,e,t,n={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Fa.set(e.boundingBox.min,e.boundingBox.max,t),Fa.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,u=a.index,c=e.attributes.position,f=e.index,h=fn.getPrimitive(),p=fn.getPrimitive();let v=fv,g=dv,m=null,d=null;r&&(m=pv,d=mv);let x=1/0,_=null,y=null;return xs.copy(t).invert(),Sr.matrix.copy(xs),i.shapecast({boundsTraverseOrder:w=>Fa.distanceToBox(w),intersectsBounds:(w,T,b)=>b<x&&b<o?(T&&(Sr.min.copy(w.min),Sr.max.copy(w.max),Sr.needsUpdate=!0),!0):!1,intersectsRange:(w,T)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:D=>Sr.distanceToBox(D),intersectsBounds:(D,M,E)=>E<x&&E<o,intersectsRange:(D,M)=>{for(let E=D,U=D+M;E<U;E++){Et(p,3*E,f,c),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let L=w,O=w+T;L<O;L++){Et(h,3*L,u,l),h.needsUpdate=!0;const C=h.distanceToTriangle(p,v,m);if(C<x&&(g.copy(v),d&&d.copy(m),x=C,_=L,y=E),C<s)return!0}}}});{const b=ur(e);for(let D=0,M=b;D<M;D++){Et(p,3*D,f,c),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let E=w,U=w+T;E<U;E++){Et(h,3*E,u,l),h.needsUpdate=!0;const L=h.distanceToTriangle(p,v,m);if(L<x&&(g.copy(v),d&&d.copy(m),x=L,_=E,y=D),L<s)return!0}}}}}),fn.releasePrimitive(h),fn.releasePrimitive(p),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=_,r&&(r.point?r.point.copy(d):r.point=d.clone(),r.point.applyMatrix4(xs),g.applyMatrix4(xs),r.distance=g.sub(r.point).length(),r.faceIndex=y),n)}function vv(i,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=i.geometry,n=t.index?t.index.array:null,r=t.attributes.position;let s,o,a,l,u=0;const c=i._roots;for(let h=0,p=c.length;h<p;h++)s=c[h],o=new Uint32Array(s),a=new Uint16Array(s),l=new Float32Array(s),f(0,u),u+=s.byteLength;function f(h,p,v=!1){const g=h*2;if(a[g+15]===Xs){const d=o[h+6],x=a[g+14];let _=1/0,y=1/0,w=1/0,T=-1/0,b=-1/0,D=-1/0;for(let M=d,E=d+x;M<E;M++){const U=3*i.resolveTriangleIndex(M);for(let L=0;L<3;L++){let O=U+L;O=n?n[O]:O;const C=r.getX(O),N=r.getY(O),B=r.getZ(O);C<_&&(_=C),C>T&&(T=C),N<y&&(y=N),N>b&&(b=N),B<w&&(w=B),B>D&&(D=B)}}return l[h+0]!==_||l[h+1]!==y||l[h+2]!==w||l[h+3]!==T||l[h+4]!==b||l[h+5]!==D?(l[h+0]=_,l[h+1]=y,l[h+2]=w,l[h+3]=T,l[h+4]=b,l[h+5]=D,!0):!1}else{const d=h+8,x=o[h+6],_=d+p,y=x+p;let w=v,T=!1,b=!1;e?w||(T=e.has(_),b=e.has(y),w=!T&&!b):(T=!0,b=!0);const D=w||T,M=w||b;let E=!1;D&&(E=f(d,p,w));let U=!1;M&&(U=f(x,p,w));const L=E||U;if(L)for(let O=0;O<3;O++){const C=d+O,N=x+O,B=l[C],q=l[C+3],Y=l[N],j=l[N+3];l[h+O]=B<Y?B:Y,l[h+O+3]=q>j?q:j}return L}}}function _v(i,e,t,n,r,s,o){ut.setBuffer(i._roots[e]),oo(0,i,t,n,r,s,o),ut.clearBuffer()}function oo(i,e,t,n,r,s,o){const{float32Array:a,uint16Array:l,uint32Array:u}=ut,c=i*2;if(kt(c,l)){const h=Kt(i,u),p=rn(c,l);sv(e,t,n,h,p,r,s,o)}else{const h=hn(i);si(h,a,n,s,o)&&oo(h,e,t,n,r,s,o);const p=sn(i,u);si(p,a,n,s,o)&&oo(p,e,t,n,r,s,o)}}const xv=["x","y","z"];function yv(i,e,t,n,r,s){ut.setBuffer(i._roots[e]);const o=lo(0,i,t,n,r,s);return ut.clearBuffer(),o}function lo(i,e,t,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:l}=ut;let u=i*2;if(kt(u,a)){const f=Kt(i,l),h=rn(u,a);return av(e,t,n,f,h,r,s)}else{const f=yo(i,l),h=xv[f],v=n.direction[h]>=0;let g,m;v?(g=hn(i),m=sn(i,l)):(g=sn(i,l),m=hn(i));const x=si(g,o,n,r,s)?lo(g,e,t,n,r,s):null;if(x){const w=x.point[h];if(v?w<=o[m+f]:w>=o[m+f+3])return x}const y=si(m,o,n,r,s)?lo(m,e,t,n,r,s):null;return x&&y?x.distance<=y.distance?x:y:x||y||null}}const ys=new Wt,ji=new wn,Ki=new wn,Er=new Qe,ac=new Xt,Ms=new Xt;function Mv(i,e,t,n){ut.setBuffer(i._roots[e]);const r=co(0,i,t,n);return ut.clearBuffer(),r}function co(i,e,t,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ut;let l=i*2;if(r===null&&(t.boundingBox||t.computeBoundingBox(),ac.set(t.boundingBox.min,t.boundingBox.max,n),r=ac),kt(l,o)){const c=e.geometry,f=c.index,h=c.attributes.position,p=t.index,v=t.attributes.position,g=Kt(i,a),m=rn(l,o);if(Er.copy(n).invert(),t.boundsTree)return mt(i,s,Ms),Ms.matrix.copy(Er),Ms.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:x=>Ms.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let _=g,y=m+g;_<y;_++)if(Et(Ki,3*e.resolveTriangleIndex(_),f,h),Ki.needsUpdate=!0,x.intersectsTriangle(Ki))return!0;return!1}});for(let d=g,x=m+g;d<x;d++){const _=e.resolveTriangleIndex(d);Et(ji,3*_,f,h),ji.a.applyMatrix4(Er),ji.b.applyMatrix4(Er),ji.c.applyMatrix4(Er),ji.needsUpdate=!0;for(let y=0,w=p.count;y<w;y+=3)if(Et(Ki,y,p,v),Ki.needsUpdate=!0,ji.intersectsTriangle(Ki))return!0}}else{const c=i+8,f=a[i+6];return mt(c,s,ys),!!(r.intersectsBox(ys)&&co(c,e,t,n,r)||(mt(f,s,ys),r.intersectsBox(ys)&&co(f,e,t,n,r)))}}const Ss=new Qe,Ba=new Xt,Tr=new Xt,Sv=new P,Ev=new P,Tv=new P,bv=new P;function wv(i,e,t,n={},r={},s=0,o=1/0){e.boundingBox||e.computeBoundingBox(),Ba.set(e.boundingBox.min,e.boundingBox.max,t),Ba.needsUpdate=!0;const a=i.geometry,l=a.attributes.position,u=a.index,c=e.attributes.position,f=e.index,h=fn.getPrimitive(),p=fn.getPrimitive();let v=Sv,g=Ev,m=null,d=null;r&&(m=Tv,d=bv);let x=1/0,_=null,y=null;return Ss.copy(t).invert(),Tr.matrix.copy(Ss),i.shapecast({boundsTraverseOrder:w=>Ba.distanceToBox(w),intersectsBounds:(w,T,b)=>b<x&&b<o?(T&&(Tr.min.copy(w.min),Tr.max.copy(w.max),Tr.needsUpdate=!0),!0):!1,intersectsRange:(w,T)=>{if(e.boundsTree){const b=e.boundsTree;return b.shapecast({boundsTraverseOrder:D=>Tr.distanceToBox(D),intersectsBounds:(D,M,E)=>E<x&&E<o,intersectsRange:(D,M)=>{for(let E=D,U=D+M;E<U;E++){const L=b.resolveTriangleIndex(E);Et(p,3*L,f,c),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let O=w,C=w+T;O<C;O++){const N=i.resolveTriangleIndex(O);Et(h,3*N,u,l),h.needsUpdate=!0;const B=h.distanceToTriangle(p,v,m);if(B<x&&(g.copy(v),d&&d.copy(m),x=B,_=O,y=E),B<s)return!0}}}})}else{const b=ur(e);for(let D=0,M=b;D<M;D++){Et(p,3*D,f,c),p.a.applyMatrix4(t),p.b.applyMatrix4(t),p.c.applyMatrix4(t),p.needsUpdate=!0;for(let E=w,U=w+T;E<U;E++){const L=i.resolveTriangleIndex(E);Et(h,3*L,u,l),h.needsUpdate=!0;const O=h.distanceToTriangle(p,v,m);if(O<x&&(g.copy(v),d&&d.copy(m),x=O,_=E,y=D),O<s)return!0}}}}}),fn.releasePrimitive(h),fn.releasePrimitive(p),x===1/0?null:(n.point?n.point.copy(g):n.point=g.clone(),n.distance=x,n.faceIndex=_,r&&(r.point?r.point.copy(d):r.point=d.clone(),r.point.applyMatrix4(Ss),g.applyMatrix4(Ss),r.distance=g.sub(r.point).length(),r.faceIndex=y),n)}function Av(){return typeof SharedArrayBuffer<"u"}const Cr=new ut.constructor,Ns=new ut.constructor,ei=new So(()=>new Wt),Ji=new Wt,Qi=new Wt,Oa=new Wt,za=new Wt;let Ga=!1;function Rv(i,e,t,n){if(Ga)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Ga=!0;const r=i._roots,s=e._roots;let o,a=0,l=0;const u=new Qe().copy(t).invert();for(let c=0,f=r.length;c<f;c++){Cr.setBuffer(r[c]),l=0;const h=ei.getPrimitive();mt(0,Cr.float32Array,h),h.applyMatrix4(u);for(let p=0,v=s.length;p<v&&(Ns.setBuffer(s[p]),o=En(0,0,t,u,n,a,l,0,0,h),Ns.clearBuffer(),l+=s[p].length,!o);p++);if(ei.releasePrimitive(h),Cr.clearBuffer(),a+=r[c].length,o)break}return Ga=!1,o}function En(i,e,t,n,r,s=0,o=0,a=0,l=0,u=null,c=!1){let f,h;c?(f=Ns,h=Cr):(f=Cr,h=Ns);const p=f.float32Array,v=f.uint32Array,g=f.uint16Array,m=h.float32Array,d=h.uint32Array,x=h.uint16Array,_=i*2,y=e*2,w=kt(_,g),T=kt(y,x);let b=!1;if(T&&w)c?b=r(Kt(e,d),rn(e*2,x),Kt(i,v),rn(i*2,g),l,o+e,a,s+i):b=r(Kt(i,v),rn(i*2,g),Kt(e,d),rn(e*2,x),a,s+i,l,o+e);else if(T){const D=ei.getPrimitive();mt(e,m,D),D.applyMatrix4(t);const M=hn(i),E=sn(i,v);mt(M,p,Ji),mt(E,p,Qi);const U=D.intersectsBox(Ji),L=D.intersectsBox(Qi);b=U&&En(e,M,n,t,r,o,s,l,a+1,D,!c)||L&&En(e,E,n,t,r,o,s,l,a+1,D,!c),ei.releasePrimitive(D)}else{const D=hn(e),M=sn(e,d);mt(D,m,Oa),mt(M,m,za);const E=u.intersectsBox(Oa),U=u.intersectsBox(za);if(E&&U)b=En(i,D,t,n,r,s,o,a,l+1,u,c)||En(i,M,t,n,r,s,o,a,l+1,u,c);else if(E)if(w)b=En(i,D,t,n,r,s,o,a,l+1,u,c);else{const L=ei.getPrimitive();L.copy(Oa).applyMatrix4(t);const O=hn(i),C=sn(i,v);mt(O,p,Ji),mt(C,p,Qi);const N=L.intersectsBox(Ji),B=L.intersectsBox(Qi);b=N&&En(D,O,n,t,r,o,s,l,a+1,L,!c)||B&&En(D,C,n,t,r,o,s,l,a+1,L,!c),ei.releasePrimitive(L)}else if(U)if(w)b=En(i,M,t,n,r,s,o,a,l+1,u,c);else{const L=ei.getPrimitive();L.copy(za).applyMatrix4(t);const O=hn(i),C=sn(i,v);mt(O,p,Ji),mt(C,p,Qi);const N=L.intersectsBox(Ji),B=L.intersectsBox(Qi);b=N&&En(M,O,n,t,r,o,s,l,a+1,L,!c)||B&&En(M,C,n,t,r,o,s,l,a+1,L,!c),ei.releasePrimitive(L)}}return b}const Es=new Xt,oc=new Wt,Cv={strategy:Ws,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class Ys{static serialize(e,t={}){t={cloneBuffers:!0,...t};const n=e.geometry,r=e._roots,s=e._indirectBuffer,o=n.getIndex();let a;return t.cloneBuffers?a={roots:r.map(l=>l.slice()),index:o?o.array.slice():null,indirectBuffer:s?s.slice():null}:a={roots:r,index:o?o.array:null,indirectBuffer:s},a}static deserialize(e,t,n={}){n={setIndex:!0,indirect:!!e.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=e,a=new Ys(t,{...n,[La]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const l=t.getIndex();if(l===null){const u=new Tt(e.index,1,!1);t.setIndex(u)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t=Object.assign({...Cv,[La]:!1},t),t.useSharedArrayBuffer&&!Av())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=e,this._roots=null,this._indirectBuffer=null,t[La]||(Xg(this,t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Wt))),this.resolveTriangleIndex=t.indirect?n=>this._indirectBuffer[n]:n=>n}refit(e=null){return(this.indirect?vv:rv)(this,e)}traverse(e,t=0){const n=this._roots[t],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,l=0){const u=a*2,c=s[u+15]===Xs;if(c){const f=r[a+6],h=s[u+14];e(l,c,new Float32Array(n,a*4,6),f,h)}else{const f=a+ri/4,h=r[a+6],p=r[a+7];e(l,c,new Float32Array(n,a*4,6),p)||(o(f,l+1),o(h,l+1))}}}raycast(e,t=dn,n=0,r=1/0){const s=this._roots,o=this.geometry,a=[],l=t.isMaterial,u=Array.isArray(t),c=o.groups,f=l?t.side:t,h=this.indirect?_v:lv;for(let p=0,v=s.length;p<v;p++){const g=u?t[c[p].materialIndex].side:f,m=a.length;if(h(this,p,g,e,a,n,r),u){const d=c[p].materialIndex;for(let x=m,_=a.length;x<_;x++)a[x].face.materialIndex=d}}return a}raycastFirst(e,t=dn,n=0,r=1/0){const s=this._roots,o=this.geometry,a=t.isMaterial,l=Array.isArray(t);let u=null;const c=o.groups,f=a?t.side:t,h=this.indirect?yv:uv;for(let p=0,v=s.length;p<v;p++){const g=l?t[c[p].materialIndex].side:f,m=h(this,p,g,e,n,r);m!=null&&(u==null||m.distance<u.distance)&&(u=m,l&&(m.face.materialIndex=c[p].materialIndex))}return u}intersectsGeometry(e,t){let n=!1;const r=this._roots,s=this.indirect?Mv:hv;for(let o=0,a=r.length;o<a&&(n=s(this,o,e,t),!n);o++);return n}shapecast(e){const t=fn.getPrimitive(),n=this.indirect?ov:iv;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:o,intersectsTriangle:a}=e;if(o&&a){const f=o;o=(h,p,v,g,m)=>f(h,p,v,g,m)?!0:n(h,p,this,a,v,g,t)}else o||(a?o=(f,h,p,v)=>n(f,h,this,a,p,v,t):o=(f,h,p)=>p);let l=!1,u=0;const c=this._roots;for(let f=0,h=c.length;f<h;f++){const p=c[f];if(l=Jg(this,f,s,o,r,u),l)break;u+=p.byteLength}return fn.releasePrimitive(t),l}bvhcast(e,t,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=fn.getPrimitive(),a=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?v=>{const g=this.resolveTriangleIndex(v);Et(o,g*3,a,l)}:v=>{Et(o,v*3,a,l)},c=fn.getPrimitive(),f=e.geometry.index,h=e.geometry.attributes.position,p=e.indirect?v=>{const g=e.resolveTriangleIndex(v);Et(c,g*3,f,h)}:v=>{Et(c,v*3,f,h)};if(s){const v=(g,m,d,x,_,y,w,T)=>{for(let b=d,D=d+x;b<D;b++){p(b),c.a.applyMatrix4(t),c.b.applyMatrix4(t),c.c.applyMatrix4(t),c.needsUpdate=!0;for(let M=g,E=g+m;M<E;M++)if(u(M),o.needsUpdate=!0,s(o,c,M,b,_,y,w,T))return!0}return!1};if(r){const g=r;r=function(m,d,x,_,y,w,T,b){return g(m,d,x,_,y,w,T,b)?!0:v(m,d,x,_,y,w,T,b)}}else r=v}return Rv(this,e,t,r)}intersectsBox(e,t){return Es.set(e.min,e.max,t),Es.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Es.intersectsBox(n),intersectsTriangle:n=>Es.intersectsTriangle(n)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,n={},r={},s=0,o=1/0){return(this.indirect?wv:gv)(this,e,t,n,r,s,o)}closestPointToPoint(e,t={},n=0,r=1/0){return Qg(this,e,t,n,r)}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(n=>{mt(0,new Float32Array(n),oc),e.union(oc)}),e}}function Pv(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function Lv(i){switch(i){case 1:return bc;case 2:return wc;case 3:return vt;case 4:return vt}}function lc(i){switch(i){case 1:return fo;case 2:return Os;case 3:return Lr;case 4:return Lr}}class ru extends Us{constructor(){super(),this.minFilter=it,this.magFilter=it,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(e){const t=this.overrideItemSize,n=e.itemSize,r=e.count;if(t!==null){if(n*r%t!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");e.itemSize=t,e.count=r*n/t}const s=e.itemSize,o=e.count,a=e.normalized,l=e.array.constructor,u=l.BYTES_PER_ELEMENT;let c=this._forcedType,f=s;if(c===null)switch(l){case Float32Array:c=Ot;break;case Uint8Array:case Uint16Array:case Uint32Array:c=nn;break;case Int8Array:case Int16Array:case Int32Array:c=Ar;break}let h,p,v,g,m=Pv(s);switch(c){case Ot:v=1,p=Lv(s),a&&u===1?(g=l,m+="8",l===Uint8Array?h=Pn:(h=Ka,m+="_SNORM")):(g=Float32Array,m+="32F",h=Ot);break;case Ar:m+=u*8+"I",v=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=lc(s),u===1?(g=Int8Array,h=Ka):u===2?(g=Int16Array,h=Sc):(g=Int32Array,h=Ar);break;case nn:m+=u*8+"UI",v=a?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,p=lc(s),u===1?(g=Uint8Array,h=Pn):u===2?(g=Uint16Array,h=Bs):(g=Uint32Array,h=nn);break}f===3&&(p===vt||p===Lr)&&(f=4);const d=Math.ceil(Math.sqrt(o))||1,x=f*d*d,_=new g(x),y=e.normalized;e.normalized=!1;for(let w=0;w<o;w++){const T=f*w;_[T]=e.getX(w)/v,s>=2&&(_[T+1]=e.getY(w)/v),s>=3&&(_[T+2]=e.getZ(w)/v,f===4&&(_[T+3]=1)),s>=4&&(_[T+3]=e.getW(w)/v)}e.normalized=y,this.internalFormat=m,this.format=p,this.type=h,this.image.width=d,this.image.height=d,this.image.data=_,this.needsUpdate=!0,this.dispose(),e.itemSize=n,e.count=r}}class Dv extends ru{constructor(){super(),this._forcedType=nn}}class uo extends ru{constructor(){super(),this._forcedType=Ot}}class cc{constructor(){this.index=new Dv,this.position=new uo,this.bvhBounds=new Us,this.bvhContents=new Us,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(e){const{geometry:t}=e;if(Uv(e,this.bvhBounds,this.bvhContents),this.position.updateFrom(t.attributes.position),e.indirect){const n=e._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(t.index)this._cachedIndexAttr=t.index.clone();else{const r=$c(Qc(t));this._cachedIndexAttr=new Tt(r,1,!1)}Iv(t,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(t.index)}dispose(){const{index:e,position:t,bvhBounds:n,bvhContents:r}=this;e&&e.dispose(),t&&t.dispose(),n&&n.dispose(),r&&r.dispose()}}function Iv(i,e,t){const n=t.array,r=i.index?i.index.array:null;for(let s=0,o=e.length;s<o;s++){const a=3*s,l=3*e[s];for(let u=0;u<3;u++)n[a+u]=r?r[l+u]:l+u}}function Uv(i,e,t){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const r=n[0],s=new Uint16Array(r),o=new Uint32Array(r),a=new Float32Array(r),l=r.byteLength/ri,u=2*Math.ceil(Math.sqrt(l/2)),c=new Float32Array(4*u*u),f=Math.ceil(Math.sqrt(l)),h=new Uint32Array(2*f*f);for(let p=0;p<l;p++){const v=p*ri/4,g=v*2,m=v;for(let d=0;d<3;d++)c[8*p+0+d]=a[m+0+d],c[8*p+4+d]=a[m+3+d];if(kt(g,s)){const d=rn(g,s),x=Kt(v,o),_=4294901760|d;h[p*2+0]=_,h[p*2+1]=x}else{const d=4*sn(v,o)/ri,x=yo(v,o);h[p*2+0]=x,h[p*2+1]=d}}e.image.data=c,e.image.width=u,e.image.height=u,e.format=vt,e.type=Ot,e.internalFormat="RGBA32F",e.minFilter=it,e.magFilter=it,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose(),t.image.data=h,t.image.width=f,t.image.height=f,t.format=Os,t.type=nn,t.internalFormat="RG32UI",t.minFilter=it,t.magFilter=it,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose()}const Nv=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,Fv=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,Bv=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,su=Bv,au=`
	${Nv}
	${Fv}
`,Ov="4nh6v3AXO108mJGEGrgVsY13JcfnHOYZvvoI1EIoMK4hmnJN38oOJJCMUpQOZr8JZQUlOOFJ/aYCN6D29NV8IDRP5FvZx/bdRIU/+pPa03RaJZBJsHB72Gn2RTRKOFm47X6+xtcFOQM7IJZN8aCpIJNKKMAUFWrcVoXYZJqnM0QsQOx10Y2H92wJ3lb60z+MiISeeC4ngM3V59EUgq+Jc70+9carXa+C/JtY8tnq5E4JKMWwZmEU+n0aqZ7WTkTgEtjtJbEKZk2GVyQJaZv7xZx1sOkl8xJcWwDDMafDWYkPjqYGMylJQmBfjpWP+b+3e9mvSyhWn8ehNkR2XLzSqSDetdKCMaIKtUzJJGDJb97TDNhFdKyaYqXbSIFnTfMz7O7Q3FJBs7mxMu2hNuCN8f53R8eBs65zKZFcD5WkNZZr8yGuphKshQh0BjeBr8EAJgETstHJ6moXttcPg0Yb+L/l+ZRizmQ8JmXcrH6zdW9G48aa4AtPOPdyA6nAy5EXYWPEgxD7VaE4dWYRqjQqtZuex/BE9rZl8JJPmZUTIDoLwnHpydRBBV0Xf6GFqjB4Ht5oLMUz/Tvv8rkBP8FWWFp0C8D4kaGXLjF2+RoSj3W4Py4SCoZvn4Dc1N/cNyBsTupn+/jR/lcaS3jS4pbkhlMMU2D/rw/4kvNpD0eeHo7txUtNMAYp/KNv7XHy41WgVIxABBM3ffI3XKyauACMc4p0WA8qrzlgzQ4bbXZVLRqnxXWJQSkC2lvn2E+/bbrmHlyOKuYuStBi41pW8Dug7cFTaJ1xZyqJ9pW1Ui4OhH+nqqQWBXMOZJ4qR+DMPx3+afn3ezCZnAYCNrqPg7ci67DdcinpFg9MfbCm29vA7jcGXwcBxQRcp2RFMSAha5jY4DDZX0uJF5MyduwVolOW5OXHS8RQgwKNjJ591ASvk3+XI9YV3GM8aansv0BQ09Ct5LdIJ8+mnk49XTrLbhm4O8iAgq6yrix4nR/LDENsFu+8yTkhCITWn8gllEGvYfkrZlEMf9alZlcF/Ia7ySYEOihl/4yBz7nO9n4gKgHCEcGekGv8XuelO/HQ29EKg5hGmJvHLhgb6bXrRIRj0AcZPUmLzsJ7v3MUtKjwezqQ3r2Y+jYeCtRR3EIvl0CNhG3q5vLMznVZ7bX/vo8vG5AyGrp8g8iM0+FSTl081dYrq7EdS/jDlZbaaEckOJInU43KWOJ6WXR74IWluff3OdinsX3uBURrIssxEra1u5NCJFZxBKZnLGzaqK8UcEW/RSv0JPn2tG7FrjA6gRaJkEtf2HZrBvD7KfJ9mMpSkh5Q5xmJcpXkA/EKKGk8qruAo141NeRzbtlG6txzEn+zEZHB6TzQ45eXPKsYd4LTqkWxnu2SRS9qwfNjS9yd1R1LL+ymfBjCVRxqe42+JPrlSPZjqtZgUIC13DsHcKpp/oz/+I6g0C1uER+ZpixJD0fhDIBkUnvHMKm8+8feGgGqXE89KLedIXRNFk6eN9/BWVkGr4yqUFhC6h4S8aCkYxE87X1ecAFJPVuBmfzM8R0ftT69cubNQuEZHhUt96drTrJPwHzQnEjQ6WRgb7r6iv71j1UfPdLz2tDnOg5hXMkne4tdckc5G8jqBU/kxKKBHRUe31de/Kdlro2JvkjldAIxERmi67fbYdSTRU8nBvWa8VubzKgxIYset7JZVnsuAIjtWMS+Go9mUb434Ohady6xlhoNGR7F2FwPkFyotDy0b9xO6stYKnzlpwUBNEpEJGg4FMCGtbRYVHaezDBSC50HMagf+X5W7lljPwvH7LfiiJ8klxsnqPvMXnUJeu3aXiHbupANQF1LxsV8BZcz5ufcrQW9EmxupHfm0Wwkvesu84srecRqyZsJx1oH/aFtqoRw1UY1D62+j/1Un02HkhcAOYDDiQooCinN4qRXFXaJqTUMSwijvnreKhibF7ed7P7a5l6kmIxODFXElILea6XasusPKQw10AY9JzPAnchHY2av96IuYsdQ2zJ/t8K96l2JT0SN/4cW5NbNqJ9pQ3j5LBU3FePcSCRw8c3bA0aObdSydznpU8P9U3OELXLmEA5AoDY//LbbjpWTSqq/0pj4E4f2IonhFd4KJnfFyH40PZnXTK24w6/ZPed/btyK00TGZDz8cUeGZzgZbzSojbqgjfT02GcuGW93otUp/tU5hIhCf0TNmiLQQr7eZA+JibI6F7oy1bXkmlgBzxQwhIBptPzwoZAlD8JgzozdLOvoXnU1ZpzioidCWPvtHa49O8Rw0raB8GbNTU6ENZt8SIY0D7GuzM00CGduIzqzMpj1THoLdJ5ct7bvxFuOhdb52uGDAG539n8fFUXRsTsXbQjFdd9oClAI+kgM8NUtqqYmzpxv8oOLAgtf8V6yozYjVAl6zz+Ko/YlzsYH85opFpTfh4JwugZcoljN8roIcG1goPEzbXjWwD4SQfTp7upd2WYYRl9/bhzFJANuLJaIBli2UtQjBBHtpZG2WBbwzZ0/sQcK3z4khnnro2auYQ0ZZvlfKPq+Kf4LC5tOy1V4NkeI+qUb4avzUnoa3jZR6zEn2EdMW0Tbm2wrwgc+DqxlrW/tEVPJlMOX+74c3HhHjl1lhq0DkMQs8ukc7xW5ZnjAWfcF3Ywn1CEgv/zT8+hBgTKUe0LR79klbSNLqUBOjgwOAz+GyqWjPP1gIt+XrpIvbswXlNeXO798ImRRZV2Wh6tCuZ/1EH9wNk7BHre4mv7sI4abe2ZprVCPqOJl4t9EIbk2HIJeyMnsISEsKTKtC9GhU9RFYxeIkSlzpLuQj7meWbMFS/I0kBax/vfqK5dyMfjAtFyUMsrB4rPsTIA/mYBKz1UY9L/EjNbpKgO6rJuuSHhNMO6RXeW0CpSkVGGsGCJz90BkQmW7mJCPqwhntSJ5up3vJXnHfVQ++7kCqjPjQNjTNhxzg659WxwRKE912Qabqi/g3pEiPxJVc5+5RAKrVHBCg3Bh4Uyim3gXY7xUQc1UkKke4RttnV+5vW7rWTbDTYx47cIt5lafrye3XRk9+nbz83sdurrGP0HeKLgCyE7kxrD9gZCCM9dJ2Q2+KPbnZ8JHPgMTCihR8jW90bPudmVMeUn7ca8IesTm6u1iT6Oyr4FAUDOszSlY3gEcAcHkafZIpULIo4GfpNJPDXdgJ+TkP3tKEBziZihrbgLVMBQyV1hLiMmUNxqcOVfST37cuHsWx+yU3bM0bcXndMmFzgH3NSLTAuGg62O7Dw3NiuXak/fEHlie8num14YFHmxIuYbLuEhQ9vDIlqEBLvDVyuVGkTdqp1thJtHplPz4NOikvgPB6pi1FTEUYVAErNGu+scK7xX5ig6ZJ/jieKSXKyrbHBP/StPUEoCIR61VbKDuJQRbzJx94wXmMhxicGXTLdUooVkbnnQ6Z1uwFOAXTImfq5M0QNBgfJJQ07fUnJoPAxX9VjlFjZGXj2E3/QKAFhrR3pjlEJl9dXcr9YofZ9/UNleDOoDP0VMNDxqGdKw30KxhjGvtHnudnfDW9smBq3OxmPW75/lyHx0NQNbPahA5kTCE8GseJyUEgsVK9VGfj7CwQS5O2YPpzltvcmoZSRU6LVb6GFaVP4Ef42i3lWHtX+MRCTQl+cxPf51baW5Atrj5wxcQIYJndqi0gco+DCraKXtfkfTM1/uRjwh9MGxlL4DGOOI8OHVXXdLpsK25AUh4j2rANlTPVYeB4p4FRzjpL92KTK+ZEJKN+FD7P6uZCVdK78vblHg5F+0GlcvLsHP4plzAHPYwhFQpdmgPh6bWssPh9y6rEcbRSIVbEuJPuba+1z1OW8D298glacUva5wZrbLhQFILxfO+ISXbYLpPkP1D2KMlrBTDvROHK0YwAV9eRWO4kuNzjOFqqqajD1BGargv99pdmppW20EEt3d1NBShEH4vTir4qTldjMC2xKLvBu1xKoxJ0KXWlwhyLQ00jLzqobJysEJSOxbBCIf+itGfK00Z44rbl0xEelCxV4c+PG8HHu4lya+ho2lJSMbWg4cTvau0Z4scmdv7ZkIJmAK97mbVEzHdNKcUwiJesm9pw9j1irIbEBgvdmfEqka6B1jtits9ayxzzuRsIvwsfl2D/rfeyA/cnR0khT30qGrpVzk9Iblx5WhsHXjSLeQgA5+XOHEOTW8+Q8yJDucHnvGVW7eVY/10d/yKNd2OuQOnNTZFmup4UhF+99Pml0QIIGAq5Mv7wiMGqPx8UIIQ1/7M7LwZHF5fkaym6+cN1HBiwei4zeOSSPqCpMg5mws6h8mstBdNL/3MrOJoPnskrumdjV4hInjsftw6smUFyAvd85zQNjPvFucNHl66y67h1ormtVwjOkbye1Ii3uW5oSzUQwNYF4JP82AqH0D4kLV0M3QM55So68bwz6emdlxQtiA8gDj7xMx5f6bu5wpXCaC+uUdhjYDktC0BpUEXsgYLa0E0Td7dRG5IV+rVir0kByWKn3bMLcOhQKNYMK19lP3tKL+MXrXspoCGCEymqihmLi/oI8NFWwRMlshC3xGGLwJn+lZaxLCD2FNwbbSknrIL4j81iozLeio8U8BTgBKsmdiSOkS9Gn/+JUBJhxfRdih/JiJaRgiTGf5iB9pz4Gcl1hS7YlaE3ufAT1oTbt4yRKeOwv7dGu9kWC6nxYFpjlRKl1t3Zrxylr8yKG0JnIf9l3FoUhjpEcHvWqAwdvYIDZx1k1X14OPEy0S0Iz3MoW5gWBaF/CdeCIFB9kwkGAzWa5hWZ4c40UXgJSfqMHK8I9ScMdsgxIWbT1nyU4zxxqtilpQMmakXv3p1sGLyyV6dBwPyfWVJhPfZ+lMJ/A60jhOpJc5iXuQc8NPV9Bx8ftnlSsQSbpfrddodsKKmZs9o6d0KxR8RxR+RNPhNtu1Ozg6DnD1ZZevAIPRhBLE3IuRHddRzcMUEZYij8DvJhaTPWfThs7mVWWw0qrDuG3h9d4wpSzV9QJq+Bb4DWfoNb9RFdpeBHNYRrLxXKpEC80Ym0376vaZDANgz/qEV31HsqYYMwQPPqTNnZDh6kwGVyKfWxm7xIC8kf6yDgNoP8EqvmnKUzUqPKz0F2IXlvLhxl5hf7hX44UPLDayPiGVS+mGS+1JxqjkW9ckhqbrwZXhCM7/llMQTNe4aUYo1SvPK1LCKRBjLr79SVGkNcUSBmTeQ4WCyN0QZTdMzuHlTsptZexI2PsDXirYJpWKEWCl0KkG64vTPepGRL5Q7dnwaE+vZwNdtaakrn80Bi9Wgs0UzB+OateQqyeo3Zi2U9E67BgLZDvWZGEJD2lTXk2Xv6gnHzyWkPp7+9J71r45hItkLzchOMTI8z0uXoHkY5eS86CQErThxrMuz+R8WW1rXQul6y5U/SIVT0bES/bcxuLdyjRo5Ok5o0ElrqwufwRD5G+OgulPTND23Lf7fJ+h4nKVQAcFzGMIbNqGDaLXy0taiQxEKSBOQ4AR01mZ82oYn4wvgvCilKldy59D7tD1gLAHfHBzkljXgwQ7VOZm7K8zfdhp6KcSh9b0AjkMEn/0RmrLAVMo7bfkdIzwa6IT0SUbwV6CockMkOAXQZw/6XH6sSCupJJZKCfbr2XJYK5j3fGJYsxKR+2YhUQ1RqKmwb1FqN4l+Jr/GMfBrMq5Oi6LGrwsPSilcdh/tkkFrEmuJt7WrYcmHg/Xv9ko7ol4lHGk/xWp+kWJPRxSOfR+4d9+aIiyrhJ5mId/E79ca/VRHJ1vZY4vdjqfnNj1XBHvC2mYaYmn/is/KjrMgH1x1pEy/OEQB98LqqFF7LHwdsWKZ5+WnPBQ3eYzTWQTNOIRKRYYqb5wcaTwBWI6SfKRyuKdDJXeSaIKdZ4Uz6e8e61ROX6bLifrddDGIbGRtaEgCx++NU6Uz9oLYjsjlLNObjb4HrwfzWGCttcC+4lnbov7vYRuLzIM2cLoXdiBVQr1724/4QhDJGoyBX7XNGNzeIfnDeHyZZ0DlHRSiRWXVCTBUVue2j4WU4sjh2EstPFI0HZhs6bV0pRMJXQ64ngN3lOPdsnCUjMnf8vlQOzHJ2b5gcj6iEDHr4nFMDEGMYHN7A/oUJO3HofkcrbcFiC/z6DN8WE0R3EAUeg5lhVoypVWygtps5gBblDPRKBrIeAX1IS9sP7XAwLpcX57u9af3oBvGurRu81D86tbQDNWOA+NK/vVDuCuhwXOvZwkUSRiLqdJYtdoQLPICpyAk6UPn2pHiFKl4rmQtCGAtFGpw38qE/xKbN3s4IxabUWraLOQMREiHoYfLx80euBHqP+JUE5Glg78y+s+m5ywwbq9HD+08nsOc2uOKA3mNz6fz+4HLsioXG9Ogc31qzTSj6xKDAKP6H8/fJ+Bgf9VK+8ZAKzJawuxSJhGDD9EtCvSEpqUZtAdtTPbyLAHHv5SxLp1CzJ8K5p19VoVbw2wotOXUBH2aQ5eXrJzr4dPDIbqRbgvx/uL2yodBhDZgmcuySa9McXaLjs3r+9UkLk4iWqKWRjCACxQYsGbpfDpLraYkD14kX3fDWgnLTfif67Ns0p7RFyg7iUq9dPs3XsWXxLEguZgifldCSgvU7OZOdWGtKEx20bOTS5UUf8N449KBAIspU6TwZz0uDLCxbZfuM/FopWLBN0PfWgNyCKCImzvOb0tWTA37iSY7HWC8Hlr/Aru4ckdyY9o3AUY8E2O99719yr1Xq/N1SVM7HzCEutlwtNWlDpabe0dQZs27ZTWuBuT0Xj5YipaZj837VrBSiuN3rzKw2MFvTRZh1HCW0kcouUssQyCsa/LywzkJTc+rOaqPJygkRA1u7xfbEGSbh9vcMhWqPPxMBW4N58IiYJZL6KncDHh2ydAtlGSOty9PwMMb1+E4QoP3GnovN1fvl1gGBqt/jz/eR/B4XZowyoY6VjUb/diAesuTq89YzQS3E6D8N0DDId9fP7jw5GrxL1BTCrzHsJkVmXRZ898oPJUMTwSCqMLcTiJ5I/Z21OgtB7lm1Y3zpsVerTcUpnviKd9cKE+GQdWXne79ZPe0oCZ5RwCIBeZcUIgWlD/8NXyMrvMHB5AdVuzqeB9EpK7hhHXRvCnZI11zI0QYxmkT2x4NOn9QOuwgC/uAOagVTvcYtjZ39GGJadp0EjAJUl99XL/QU3aik7lJzQ9xne9U3liSGVfFU598jWoGtQiIz4lr4qzggmJAOUL+3crsUqCDkA9d/QJ4ldmxhtqazMl/KT4evMDw9N5ieOJirQcRtUu7Z6IM9X747U4vF50KizY9k57yxR72hWemwh+kAyPURZGuAnbV/zjfeGH4Hlp92c3ITByQJNHtuK5nqluZ/FeGuTcjC3jDlbNH70106W3olbQa0lKEU5yqwykzEBZh2Iqw1yQu6pbArpsjjGnJyqEZszptw2fdyP8jZOpGnBs4reZQm3m7ioEC2+7doDm9avpkgsxo7c0pCeFdp6aP2faNu43KFYTI4OPEH7ANod55/o+COKH6R4QpvRy67+O5yqstPn4dpPnyQf8YXM44170rrzWD8sIlFBAOmu1mKWyHVLyqI7ZuLfcL50ZpbB+XqTlis06REHAn4dSNFRycxYfYLqVGbeLZbSdmGry8rrR4ifxpSlNWBmLnbzLpFEKHqY9fcZIzqhrHveY5f/9HFKBpBLNeeW+LjvXSQ0AzGN0QxGV/39YLEmTzkpcuRaIwBwQ06MTp37kXegfOgj5ZqpJu1D5q7m3nWE8LtgXRL13g5vQTXKdVfitwwiwIjDf4Ss8Jyb4nVjQOQRKp/sWARrcysx1aTJ+Vi+h2oxzJPARlRGA4Apwj73C7VKcsXUCX6T7P9wrVHQP8AWZdSWICeivGeSm16LXH4AhesEaa15SQbyB4MkxTvVXBpEBwo/a2AuM4HK4jnO5CiUjbDKl9Zi/oxATzEI0/b1ZELcuhVVLphnAHAPSk7StePUNbGSfA5OF/3Qhx2XuZLsrrMc6IS3Fd+NRaqieRFk8av0aHn+a7KYz0CEj9A8wSPysxl36d/k/vtoMb3FW/LSLTpo1cRIrMdH1svkOSVSHuCv2bqHMMxjUYqdpHTfUjf2zPQuOcPYcX1Lcqd0Z9N9W/9xGOmI6YbW5gVacUce/vXjGIRuGhcs91S5UO9OW3KivAJv1tPlbTTpzbBH5SHXsOvIbmLqGzLmhabq2z1pWG56Y4PdZyh+ydlqJHBxC9D0YlXnRZateX89gg4RL8f2HlxQJ5z0tE0YvT0xNa5F9YwI1K/RbGyqeooHUm1ED36uh6LbK3rrUWdZk5zZXPlopgi9PCJqVDDlHWCDKoE7Semsp+EhX887m2tgE6Qd3JaicrFd5baKDAoea1LHN61FnLtKymYmxvNRxGflD2GaKsp/Bc+Q45aspkszQc/d71aDZFWYe8yRX8hSx+vvV4tqMvSwhcDCCfleuXYayq2u1JWKXZ/gEauhy102fL1ufil5AhHSILk6qMsgcRWlNz1sPBr4JM6dpwmK9+8rHS+TTyWhjMbj9DSxTGjetQjB8W2U9l3Jk0NXUihFJI1OrH8INx7DQwIaCO8aezrkWCHfmKT5iZHAIrcqx0dTPjNrnzhp1WvQZOgR0z/B2CaIDXQb5dD8+AIFME+jg6UADP+8dbhRt87/tBqWkNuPmzO32bTc5PI+tfItp18z85z2uGb4TZ8+pRgprcsFBPXQs0IAXq4aXvj5CRPMxK2Oa+KFu5gHLP2wTKdhOMsSSEtyGisZ3hHEgpWmLhDdi8Y86knpMgxef6PI+HVdp2DccCIWewKodSS4HlQQa0Pat9YH+DOjD/VbT3McdabM/1+N8+GDCohDJiFSNeBGiPI6s0GJCTirrNeZ7caifKc8ClXiHmwfisA1K/FPYjamSFaVW4PRLKOnnhodIFGbfBXlcDMDs8yGOA5y6jprRQ+WGRaiAXDbnjN5zNeP0qmCtlsN2RtGMazJGSOZ3hcpT1YOdKFsEU3qtyZZlwJzJBk+1W4uZnix8qjUlad6FjlAQFuQarrZbxlnV8Mw4QQmTH0TDWrTyFdRb1ZR/tAcgPvismbIadCUHfDvwtOktO5VDnl1KLlNDYnn8GekXupksHODGQJRTBc2NvO7ZSsHX2+80XaTYygcHN7SI+ZcP56iYAo05NOtV7nLINuRvXyzhoQkcKoIeR6wjE6oLe8MS+REpA2mSrFUPzB/cNn9xltxA6CH76eow1zLD6B5bQso7fFJcoVaeE6f3Btz6ZTHgYC+TFbezTafuPDCrY1fQWkkbozDu4k3whZwVV8cXN60cSSNx1RCUYUgrvwdZqMftlsguiJkyDJbAx2roZ163cdFlYD4a4MsbAisDpLMjxF61Sz6VGM11SxeM2HxUhwcOV+Yj5Q2hhk7s/3RqfeFVUSwrEmtpbfkT1mvqtlvNlHmABt3cRaATmOMHQJ8PvUXHif42LYrDX6e4/Vwwu00DSU7f45IkJJZQRnnkymfCScM6tbFIXw/opBHMpmtnpemmgvGR7RVilIHTwC6IscplPG8R24FmY47LuKy9ZJlGG1eKDT0NJN517HUcpLqV4W83jKts7EI1s9GQa+gWTfSZGw2uJoVpBbtyAsbWKsShPTAmAQGLoCMH/e5aqO1zY3muvrHKlDPGGSfdVowyivrxZxntqPnvknYA1AUqQ0cME8KYflW4FRd49/xESetX4R9Fnnmwu58Hk9Xh7JQiiSaCv+onubSi6FdKFm7io49dz4F2qrnWxMTeJFMWNZ9Aby8qkey07ctI+X/EucLweE6v3q3EnUQaW9B6e5gOuFRfEaMduYEWpSZ6n5Xq5zFkTF+lvV9qOq91bwpEEm/TDRR09VY3k3ofTUbyzEtEQ+as5iJM1um3HfBMrdgFZmqzltuVlt/LElmwOqvPu6Q9vpJBesQkzH02yHFT5S5Wpd8uv0KpaNCIl4Zv3SBHLCJ3GIrpjV33YxPRpqqM7GgQWX5qNkDBZ0C6FEjOG3kGGtiXM4Ag9HrLpjfLUjGM3S/Kczh1Q8fihYYJ3sDxnIAWc3IOSED2UaowaDd4hYbSIWe5LWs0ufChrBy9IAlSXC+8jRDYx/B/yem7kwCVFFSyEs6fswOhYoUeT8Ieyq94OiU4S1VbIukA99Jie0zJ8fYKIqCpHqBtXduKJuyTIRQjVk+Y/NTEMYPuDyRopI4uFZai+Aeg2D6ggfnBWzifs/mFOJThL/GPQotb+BjleloAArW4bh88hNtYNxGzFWnTqOsFG14HYt7zS5/ByMjJj4wanC2Td8ek17h9ZfjaeFVYTcN+f9d4wLyimih1Di/DE2h0pd8i2uSPrb/fyYJjimh/Qe20+EFAsV6arAmzqh2ARdBnDyTZhLyWztv65pTpafyepvFNy1kQykFbIvLD0N6vRyJ3gpGnlOt3ivlSCCX6RY860qM3xXMgOURI9iG7YVVO+Aekmh1UBYB6wMD96MvreX5aYIkdda1YuxrsDau/qv9/aM1w2ifce0/0GPnMVoflUeku7pbGDazfg3exKTULL83MRYDDTm/aqJTa3kJQJa4B4157JvxgdRO/2P9dRvJKkuFMoPJUri2FLFB6qh1o8zZ66Y1VCH3R+LKAAPo7IiccUVbhHmoU7eL+2e/5t0Eqj5XQtXoSKDsVHVs3U4bRPUVM47Ta2bQSOX0lIAr/U+l4awFwr9p3I6XgrKW+WtE/F4pXSoYPkClJPcVfr1trPwiX06i2AygV0D0JVPvEIExl2gG+PFBxDWI236Kr+0zaEIg2TYJ9luKFN/vAHkpLb230ZpEX2ZwiaHH75w+PGhP9vJrSLFd5oz7YboesCX31PN5PWDyKzKvyYZouxbItiKNa8D++hG9VqLXeXf7uwSrXt9BnVNXGSQWW94liv5AYCFXyIsESMyB2ja+mKZudvCvhBS98meeD4x5v2hQfgnQH9jIQqsvFF4IFu+aPtQCjWypJlh0kc1rvxaZMEDE34kDrgvbCzmmJEZwrmCZj+eXXsgcKoERCjaD+rNcfZkoCxUHYa2abct5PJ+0EKQUaHQA6BFylrNv6PnAqWCBalR2TmGbr6p2l+nGGT+gK07sWu2HKV01SaHiM898D9ZUeov9t1TjxxHhcqzNl1fD6zOPi5oGkyauHADkjRd67IShA4gwuRCPt3z6NNpDkhdlD+vqMOTZNh3+ZdxD60g0vJo8Lw8FEbIAw5l1tdsAWRxgxfEit1IZ+NwZ7HRS/g6alD9l5WsDTbL1d4MLIMU40hvLkQyaIu3qd6TFr8Lhl4DMWaGEgTvlGt0G/cf6EQAQtRH1y8xGiu5xcrKKQIUZIBsDnOMYbs+r8iGRVmP4IqIpX6fqEU3KziYyGSKuCcCPWwR4EYbBU2AvS96mWTVreq3f4nHr3Sre974O5bZUg3SDB9crIfHZUnoIlM1zi7L05N6R/BK0akXPU0xyl4cwSlAg2titTeMsIslBlMnrToKsnMp3MeWyY6l2vXW9XXnKkv5zuQSHQr9e5XjsIZgekrDT/Rz5itQnxqBuMfBTGEV3fXCTHuQzqpJ+HPlYHL+E30+0PTpnd+BlYRCGbOvEz+Z2WFEe6YIdN7zcuXNPBzX/lpsQcXkj3Y13ambGbS0iZT6WhhtYnA5SFNIy2O+aPV3pQ8XnCrefzr8tomW8IcyjVzdX7S0FnsbWSkPquVx9T/vDdzKw1vUo09z8zMfvxcJPVnh1IyITqedYy9B6VbU16C0c4laEiLqBaKw+ewxprMyLZ4ijcA/OPc+4hrXsIR2GuQNYaAbuizme0LWKZG3mhNljfuZ/Xrg+t5X1wgWAf7T4yIQqgOulGRYBPnJr7upUkHM163qWS6F2dBdfQbh6vKsazEZhL+Qecum86guXMccJ3V3ldn576LrX5cqIg50jZv6z9Q454giCuEnNK6JQ8p+sTaSpk+JhYC8pfk639hJklMPceDjquo8jYLQI+3lmA1zOyymBZdMnBRD83zoT48izl/Wrt3p9tjRkYP6IycnUxV5COHp1DkAxgGL9u52Er0j1hcTAlF6yWy6NK1QhKKoe15ZN2g2OETfDIfdOjvuPkScDUIbT6aZCoDcCHgUuhXAhKn1DyuT0BjXimCoQnKDa+jGuHNFfVbgt/XJGiRFIUWQMbBrbGKCJniAd73B3M2zY3x+ea3FXwjFoRSgm3I8LUlY93V35XKCIrdWOZYJYBpMHn1FINLkkn3FVS3lPV3BUi6wmeKEA4ibydOvgVoHhfgsaVajuvO4f09ariDcT5OTKusaaeEVqXDnb4TiAVk6OVZGsFI/StXyw8JeIAi55Y270fv4wkZh7990sWxuFMPLBkRmfyAM7MfRajbwonCDnlWP/gZtrZhuaRjSZ7NjuVzcQ00vapcmYUoemilUkXGPAXEIcPKUy9M7JnXrkwvmIMNqEDE9N/znCd7t/da8VR3BinSv5Vovyfuqx3vDtBxzLU3Q0hVfJMzLLdSvnvVuySsTnwSRWREbjOsMcS4yWx73ZhSNTwVl/CetEiF+XFzxzEiHTsDRlQbpaCV2Dk0OOyMb8Uj0AUqYLDN4K6U/I8zPSlAEnzqo5/l2PorwrZwtBg4rGGVWDE1BpJ4u94XBG7Cd4ocX9Ld00I1Mwi03K9zNJwduH+29ibcywr+n18/apH4cHljgiJM4i3imW7GZwaknfTN6P4ejMYIbGYzljYw+yuV9QHryIJ8IIY6HZ8kHpDB9/IR2H0BwTEaZ7Pv4OyRAqmQPq9xDp3lStFfgQgWh8usWM4/YdvAEYEzjKEVRkOMktbT6OuYcVItO4Qb2W9Bnvl9w/MD/5ESxZzoMPPPXqAiU/wd1KnUQQ4qgG2o22MrxFoM4gWtVT3bAq+E+ZbUlKD6cAu9UFK/eaC85e9v6tekvBxJXwwupIHKYhzxVQFAUurSXsjDTZiJ9515C1Dy9kR5XBHRF37d8ecj7JpA+yjK8BGKIlTsDXQw2f1F9I5+m1u/VYWMbnTbA1Knp6k/2EsWwge88CCxrtpLai9tLEZZWAd90uZf4LoLrWx7l9bLKdxpVK5eP3gDz/M8a6/l5tIxOYO73WcYT1f6lQa2HGKNKXo6WmAqH/31smqFlt1NxyM7kx+zecAzZxs1o4L8s2oZrgtIVTN4fYyfvFi34GScHWZEJ10fkzoJOnGidgr9cIuW2eH0JYqNSqHrXqDFu30Q6k090XiksGUf1C9GRC5deof/z7H2YCYVDokAjloWTUlttdJ84GUQpMZ/rtf+0xxph4wvgHICYkMuLtypQ2ST1czBVcm2ghYBT088r6K3s58vpFp9eG34lWZD0BhKJGjcGuMqoiwQx0POPl/Tprv/kYFYCDT85I4g0pFBhpsigjzy1AW2d1tMTpIX6q0Ug95DTvhXD70R7pKbskBrVmiiToJJXovapyzHSM7yGqOKtX7V9s+i8dU1bW24u0EAGeblVP5QjaRc3Atmb/rsu93LqBBKq/lf9w0B8Se5xgfMiuix5WesdwLp2c/FWUK+WxPkcLRKGFcKtWkYfv2RSRkoPy1h6fa7AWe5mOyLKeNUEObEs0IJKnffzrE+jTicJ7jegZVy/UXwNiiiNZc8VKnOF6y6eJIf5LQK20jsIwyfJpmNq8BobAiDjDlBZSrS1+dfk1sNzbvMj7QKk1I8qqsBbPbFtsXiMTksA40UVl0g0ckTd3ZkNTncvIzxn6VTDO70u63LFT02pckhvT5y7kYV7YapmyjS1nXCJpPE+AgFDwrJ/ZKcLCfYQ3O7bf0JUUM4V3YO4MMseL8ZnRcvlgdmefbpkcouhnRN1yAIvEzIPil/lyPRxzvwaSiJ3jBSrhhPi1XRk/iCrSijqHljTTvLt+MomTSzUTfL9Zwa55D50oDTxZwda44XVAlryZxczfJrGBKAv3qorlg+6WOn78f8ZcFXIAIk3+WZEgxZdjdP9rXtbgPcZhpK8r3Ln1qj7xA3+CVt4RRy90jo+KN2hjEr9RscfCBU8cBN1Qao5ppN4A877O2Cd2t/7rWflK+U+iUN2ks2+HOkUEmxYBh3GMluKmhzJ9fcmZKex+5jHqONg4hyIrhXMzAherFZTNZhyPkgqDg3rJRwgXPj3qbQtwolDIlDlrA0q+xRSn6jA61VKvuD0UUd4q+emyIvvj2RA4lc6mFfeT3XdqGZFE9B2HAyhRkzQxREHoP3LvAGnxCPK3yF4fEEN2yFrgTRaiZ8RFZxqq2+wz4nS9n+OXGJjYCjM6cfU/jYTDF/ZpwVIAYDnOiMc0bC3IaGU3bBve63JGphCPU7MJJ91sdLPICFeoczvDNVrfqsx8wWYo4atsSdS9pBe9UH82Y0h2zAFr8jh0GZiBZuX05eVSHrz6R0LQNlO0bCxYjFFfbPB4asBObaXFmEJ8KBKlENZ0kA/TVc4tbgEWYzpeB2zbf+6Is+d7euYhZ/GOrxoOSEQlvJJh8VYVxo7tuYz8VUiefisdR1Oc5hPmnzqglHE2+1pNXcbPQvkBZ/sg2ruJfldKHIsV37o9a63Pxy5UvAy2nN4TyZeFHC2A26Uci7pfxmNd1d7B0CoyN0kDlT4OQLyZg5rDTADBjq8LxETtvp1M1nbZQwMsovVvjZh/hECkSZoCrQ09ClH1xZjK3mmcRMx7RecCYM4w5Y3VOm3WFAVAQW4JR2sJY9KuViaeI8/KuyLJ0yyrSI/GHaHUUOQtjZv4CznmqW5eTz334dVi4Dq6G3i5U4Q+Hr9vw5QK1/sbMEs3L9ljxRBrnNB0pBmmkSjUzolU8TWzK/InnbNvEBTFzMTcKqh7hr/Jkc75tghxMPIjtFvJAEgGEQfenIw10znHVNFVfk9/bTUODIMSUBIP9aa1PKDRPxAr9cBn5mIFqvnZMf9BdmihxeDtVa9kKWRaV3D5+FMuDdWKpLD/Qj8bYO+3aCX4jjIUHVYnGLJrOhuJETFc49c7IeqrlssHoQSGRRoisv742EFB8FPdkU5hVo/p7xM5QmiOkJfbu7dtNOSokslwC1x6bQBeuBU3JVCKBOdTV0u87/9PACnyUwthyuC1LibZnCgO9AayNTvDHRaC7dlZ95wF8TShB6w/GOy10fxewdqGBqpt3NIAue7tT5J20CjD++na3DAoQ9m6DYa/wYDBwx43w0dTsss/GlVXJpuh7Z3yj48sTEiZqqV0Yab7PxNhqEDtKBZIaTOzlNP+6YInmLK5GNtbo5LXOkUrI66ibs0m11Ruksj5MfQ8Ha94IvBcK5h8d/aHRHYZBhs7LLmqJGJQArd5u7ClhP9HwF85JU+Dw6kl/lyw/BaBzm4fWpepd7aKu1Otn7R2WvkHLObyEpQ52bu+8fQPRj+3AhC9f/OHoXhcWhXSDpJEnhKBOSCc6Neo9dZdNakC2tNUl9i9P6CQ97Hfu4G2FfcZChTEPk0yEbNBJx2XGXUlHThy019L+ap4RDfn9FfSXpwvaILmK0+svXHllvVGez676Mj0jkRCzHSQrKj/u9ddsBkfekUCwaNCsekdGImdkos0AEdma7SqULKKa/xqfA4e/TfW6qSGqi4y6O7gT1R9A8n9y9w4ASpSGuqwh8XvL6LZcZr2hJ0Bbozy/OGAkB93ncWUnXGL3jbaCBP/zGBl2ptsndOIGohu0dWezVMiULSg3WxItnUP0+N8KWB9z9AlGplTXOyhrLeWWsQqmcwGgo044vlFf3yMOoRPFoEN6+qn695kaj6CbKFalTvHfzQQ7HkzWlqENgPdukprJRufzM7IUKBSSgwKzG9YxKWeImleWp9youFwtrYNnC3RZDVTSRpWV71BuwKVZ3GwfcPyeQqvS5puZ+Y9HMVDp/oAfuoElkbbpYTH7O/qEEWoU7r0Pkd+X9z+M7olEaZG6U7QseZNS0SA8LQs7d/ReFxzVjWBliMm9Me+PSLL9ArcxTbVARdE+6b5znmfD6OYk9qac0kkEoUGrqxcL1NX7hNWsRF+SKJWBI3HS9oQyjbfCcUyh2M33IzLIkuIcXRnFahlnrAS7twYFcfw4z4gzwDTe12UZPjzaEHHNZ4rE7E2ddEe8/gKMw9TlvgrZNAPs5G8ZNatXV6YYo62IQdikmcxRO+Y443Vu00WaIaACg7j56sw8CPHK7dWtGVutXkrHL6KIZCsE86jgw+Z1x0Iz3KmRTdRMQmhJ91wYtX5quXhaxFhbX30k7r4i77DjRWnoMa5EGYPsZ2xaUUIJ0MJox6FsqvMJC92F8GHsTVq/a+Y/GiaQDmZfnagMRi+DogQqJONX+ubUhOycjliOjY1vQWocK9b4VbQIq2I2RUaGxJg//1UeWK0yeZEi/hNN3MQWvxuCXT5Bi9CNuuF/nCY0jntzBhvO5pUVOddVk2QdMGO6E5k+x16l+cWxVsR2YhdWVBdmY1ypjclSfuWADcPcZ5sqXmyNcGYi663UKzduQvjePyIAH7oNB/GQx2YEp6CGmyBN51rpb5Jnz1aCxr+MDSRMYjqSTeciGTw1K7+TbuceqzmSWu3RAO0f28/cggsEkNsqPcOuebOos5x15Eteny65pv6Ej+SfzyciRsbfeUQVzi+EkoMKZOOFOdq2DBibrTMdOvCJXM6bOtRj/j+pjOl5g4VTdxaHjSXpZG+W6cYXE2qvqeuxkr05StswfNHtxsPvKiF9n8im7lDAEGQXfOuH0U4/4Phm8RRGiEablN0FWLde48XSwG0gSnZGiYoxftSe7xurP9iwxBAf9yiBCvf+xJDHbReSIwC62nRCB19GGWixZskjG8gyz30VUBUuWwTtv3UapLk2vHqMwlXnFG00/ZPKKyDVSDIZDJDUq/mp8t2/+aO5cuAVJOU2Eph8EJC/fruxAr1SK4YW7bSJTiMdW1ZtbLeUCeA2XuME/TExFIvWPX7ZfMgh/0URPERiIil3y+8w2O5wmqbRvbGvZHVgpyEPx+Z5dp0m9eys1RAiBq3eaCAPHdJgtEdEQRd42MoUdArQdP3qUm+vacQxWIA2mDvLUHHO/l9Gz3oKuQmw5h6n8Yp3RfCTPetLJa+UvfBwDbB76V3nRmS6oZYfiPCfxIRMRN22fd5+iT1P6ywmHkY1jZuhSrkETBEjx4EB8lp91LjTAlKKq9BQcgWSrXx7i9b5wVperCvIHcP69tc5dmFGLIvvQvM8EgQ+dNyaA123WMftaqhvGxIhjmX/P5zlhlnZZEgTfC73qMf9oJtSnlA5Dkv2sZAB5Liv0i3Pfhak4HeAyDm2oR7Vb8HJ7uRPVp884GwBM+O6L276eaoUN3wwy1nV/1nEd7iNAm5LI+Icqssn9skqs0oX3aaJLp+3zlGNbYs5F9cwtncl0pTlA4o2s6VbUS1I6H5rycF1XACL6GrNJDaeLs2lg7IGPlTJUw/ibOv3BPsdzJPq2yeiSWzuJwnte3aq96Hk8annNF1Az6LV2wiAjxaf5UDzuDdAkWGhr1zKwPn1n6uQWy3qbmx0n1c9X5jJs5gzgDotCpksQYXJj8jfsrZXkSJ++k1vRDdocIufCQZcVn3EBL0Hds0+Oo/F5DXuIamnTRsqmG6xFGk7UYsG5wIL5N2DggJzuxqlpnJvHLQFp4tL1RAt8llktYrEtZZNB6RKshEf2MhBdxIu7IKAU0NyNumZV7lAVA2UfT/gOdXE1K9QN6MNCO7yKJbh/GQQoB/2AQv1dMbw6EqeCaH4h7b7NasOSMKNbgupL2jlG1g28BnHsKN8NqENSvd4VEIdHg9ICGKtYWgoMa0nbl0TzQUm01CoWj5DR/TqkCWZx4YqBwnitHtYCa7OL+1JHUWIv5AApiYTKxkQ4iVEodld8stSduIxA+Bgua6093xx1hH2mybzoWEUrQ0hYp4p8cLb9aCjx3frSLTm/GBWfp/q/zzfKPRuaT2Y1ue0pB/6S6E0GV9UTsT1UzxoQGlWJmZDh3O5Bvfp3uyTApeVR05MCzpOwR2C6V3kv/AnokDhxoUCtRWTvbxXbstLdkuGbejeUZZWIWQ1Vo61a5Lp9oLTh523JZI/fkI0CTnC/mhPmdSzsDM8UK7Yu/c2EwXlNxhUyridblO2xrmRjiOcmpDVri06azG/ereCr9QKA6r31H5UqJ24arxII79qn76MQVVtcmZgu/c8YoBD3Prvpj/YWpAJtkLqkNvb5u9gRCe4UQnUkfo3rrcPLxMggZiAxBANTdPDbC+uckLs6FxAXtfeBZ5yqYFHZfcwnXl2Ocxy1UVnxI+PqE4OXbYpyrJnXB4DfV69ydT7ZDSnqZ/yFUCbEZCZRcDoJQSSPgRuieh/xVOdwPdkEEn3I9aO3WlTK5zqmiS3vexZbDCg/qbI3wz1Zv3jT/SAmIRjb8m1MEkMGllEZLdL5wk8VarDURtd6JedL20AOpAFkg4+clP24dHSTQx7v3svfaTgBmMtQvc9IG/Yz7afUHXMtMWcxuFR/x5+F0l01Y4vXybRa8UVIOYJ/MU0ww8xu5YuWKLZKA3opz3HXlHfHUKSyXhFHXdtj7KJQni/zok2RKD342uXWiFyvktwtT3EBtPf0zIhtM4wJ5KsoO0rICukGkkKWsOWQSXAP4KH4v006CYEs5UXzcTDGPCHGIq6ieqO5ePWzGsyN4aM0v1vMrNYPa5qD8xY+xbG2490bolEnKXF7TZjCLNAY2GGXggvzwMVeTPstyqeE4oqOuQj31/LKZa5DcaDMginGiqetNC/u+R2YulyyVp+1YUD6muWmq1UHX9w/a/ccZx4POyXyWKOAo3kKmE4Gf/B7uN1Cno8ZdiBVuxLKQIdVvwGe5gNySmTg72qxeqIFEx7hztqCCWEgP7137bRf3KhKP8AGIP4dODaSZW2TMLbWGIFQCYMWbFVnXT+YE7umM6iafHrNZUvKXR7WOoTzvSTZVFOfCMXH2XyuLjZKbwQgsMy/gy1+19CkqWBeIcOb8VvyGDmOk0yK+GE3SEa6Ci/o7q6CCWxbm/5cMDYzyWx0R7IFh971Yv4iBaW5OZiHbBrlHamFtWtK6gkBekrfNJ4FHBdmdVJegyw4nOhFfNdVhmA4O6nmZX14IQkIyfSIND6GWdeAtzId0DQA7FTUUKLfjL3LhMdbt14+/ws28SLSFG5iX2fXlJFD6kD8+6f613PGeog4GRsmm7ewmvUhvvnAhkI81qmfb2PrDlbhGoOE9bFZ3HzI9PDTbqogrODQve/BC4a95/1z/gi7wzBB4xu3KhCiSE5oDSSp7ViZcSK+QOJkk7qAi/YeMt1l9utru2UIeaNBWvIvyjwNFNgRibYF0rlsaUfS2MYCogMwGeRleY5zzVBJF+qs2/1Lwxed1JQyu2N/aOxCY0gV45zW9gf8IUHQuXTY9mqDUh6qMaJBnO3KveZsdDS2EOe00/oRHAcEwdvrqHqiWXFJxQ3IHmz0GHKJI2rFrDTn8newI4IEmEfUSSuxkvjCLS9y14W5Iu0SqLK2ndHGkiRVCBAyBz2n+Nu+JpU4dFdo7FBrQiUEEciKj6lT/rgrM0wshp/GQhaIPMOfJgZPZQt6lSyoiy5HPCboAXabRlmwGft804Ri34TL1Az9mO3ovzaudjh3hfARsBdYoBN3oWP8RN4fUFeKtx/tDJupj5X5RHl5alfiTLL6VeQwHpUX52L0mH2UptqlRRsl98y5iQuJjluJTgXyoDrFDH+QMdTEdJJRqzFTjla1J0I9fmAqv+mP0F+R2huZsPA6xSkTVLRNmpKTjfVt2yNiKEnijtk69iOO1s7wvAuPS6FNs+JwwEQs+X2ev0ijEVwYZeM0dPt3i6y/TuMGShRLhV7oMeW0cIFNeiim3UnEGdBZkO6O11GtQixyy+v71V1Qdavok9IWnb5k62RW7pEXB0UufOdW5aWL0EJnbxtyFM2Q2Kyb7zQ4P2pYjY6iRiZrGPhIpdoBahiPpOXKSOctK9BBzm73mxE1ibjf0ErRA1TYkMT6JyhLs47IoDSCbiinUn8SgMItwVfW8Ha0OwBAbyq2J+NzJVoUvuWsP+EOGCskzqKo8K18xw9btQGTx+nhziNzef5ko1qjRgXxJAlWgEXQig+F/kjAV7Z1/ytaAj+9mM2cnq1ATV0tuGSPEmAT/+cUiJli0MUGIJAJ32zp6BavEo+UQak+IspmV+OLncbLN/MrBpxvX4u0XHzeY0e6D6TbGr7jM7GCCH13Fl0dCpQ00jgMbg5vv9i0zt1g4bJynf47m708xvlUzh5ixrjkS2PdsyPrCiY0sn73Vyi8wgrBl1F5jgE5X1s9sybQwpG8KaUGA4KBgHcPr704NmkXxmg9bF/oHSQLs/7u3TvOwZ/hNg4jqobSaFNQO1rY3gO1efuezmN/zVKo2WpCf/C4Ydxp7DdI33KGBRA0bpo+shngwBJOFDKYAfOvw+RwbmjRhc/cEz7CpepoKx93Dq59GzVRsPFr/TB/2g7vtFaB2y47m0F0fj1YWtBq0Toss2bR7X6iUQRA/nho3CGl+AFuP30dmmsMzjvw8eYNmkOX+TgTCjKoe2nacMyjyOCaSaCzH/T8PbdyHC1GiEWAECfuA7BaXbUeAqQw9Yp+fQNKT8OkXxPfjZvSlXnyYrYRUwXJbtqJ5tt03K5N/V/xHF/7lXFPS1XC8+enXSSs5u+YPhl819+uA4ee8JirXj4XcER0iF+R/Q/s+QjBr2SXPQjt651rvB74ln6SMzpO+1ZRmAMgJBi5bkhd5vnMg9iFhfYsOhnasqf8TH+81iNzMCKLYps7Mj0c60ir34FgyaXg5WbJmBkOgnHB4gQuASGVqnpDp9qsxsAiJOz697iujlF/b1fKMLqfKUwJv7vZ7CZWtIPfh/AtWK/LwNAqox+IuWljL4uI9Pn8WQO6JCJJPr5iXO+S3vV+NS8bJ8mXUcytecpq1SaOhKAM5d3s+xI7KpOqF3Y4BkwedvTUxaqBqjIwRPAT7S4xsXtutp0UD4gZ0j/0j6TdqzYlLEVxYWvX6Y+TpFPEfFQKA03bvIbMS0JyE8sOH7hfmyyFkNCmRyEvR6luuxsQFRUze8nK/K28d4hqlLLimOacR0Ys8iefwFyiXFOWZvV5SzyP136tu1xj9zHtoAPzxA22lXhbzE5QGImL+DhXNkW90qi36W1V8FSQ1BvE5p9NeTgTCQaWKTWh3/h6GRaO2JGpNRn+edeq0whWSnQdFLo5gtIeT1GvbBHsUarKAIhNP5nOGVlJJZPZf49WBaukplSJ1YsbUqz7SNg6TnjDIjIRaWl3a6/Tlr7ZVLfkWjr7pfJxIkGc2EBoRiBgzbxSB4YknZopmIY84j3L3tNyYgoGELaVx+/8Lbd4CRovL8C7Y08x//HWpjR+5mJy47fg8h/KLeOMdtSxRIttTGHdOuijX92J9iMuPwzT0RGMBxqiNLV6YgTGxNBskBEKqgo6k+bO3iUKeBtKvOOirJCeBwL5btmRqO0lK2oRuNbZmM4hiTZudQr3916TTgLhQxqIb+1iZpoz83+0YQVGx+NVGz9szmJjR42tkw5kljObRP528uB3mWMmQet8reTH6z4xYG/mn9muuMNxgfLoAZ0GaODxvIde5RD4CjD3XeiWneyr9klDwjcuoFlUB4dnjoO9yAbGYYX4FhSffG+o4ufV+31ZUL7OSa7saLvGFxZniH1SflQgxkS1nW+hy0KGGBpaYpL96iPJoYyvJjcbn6QPnAZYl1UsdVXBf+8L9NHYr4sJhcNcXCtwv/NXqPGx5z5Ue7p4JkbT7eobIlCsssQeafwtukpsQF3HEuAWVuZRU3A5KjyAY7cn/L5GdgsMI0VHn86ofIpjuZY4HCq6zm6gOyi2yeiFhnWo3tFDyhCowuNRN+q+5YI2JIO19UnzIb5oA8GVotrYdAo7pcO6DBvSfSYtExiD4mxz9BQ3QzE5zgq9aA==";function zv(){const i=atob(Ov),e=new Uint8Array(i.length);for(let t=0;t<i.length;t++)e[t]=i.charCodeAt(t);return e}const br=64,Dr=32,Ha=256;class Gv{constructor(){this.staticBvh=null,this.staticBvhUniform=new cc,this.staticAttrTex=new uo,this.dynamicBvh=null,this.dynamicBvhUniform=new cc,this.dynamicAttrTex=new uo,this.dynamicMerged=null,this.dynamicPacked=null,this.dynamicPackedAttr=null,this.dynamic=[],this.hasDynamic=!1,this.materialsTex=null,this.materials=[],this.lightPosType=[],this.lightColorRadius=[],this.lightDirCone=[],this.lightCount=0,this.emissiveTriCount=0,this.triangleCount=0,this._m3=new Ye,this._normalFrame=0,this._dynBuildVolume=null}updateDynamic(){if(!this.hasDynamic||this.dynamic.length===0)return;const e=this.dynamicMerged.getAttribute("position"),t=e.array,n=this.dynamicPacked;let r=1/0,s=1/0,o=1/0,a=-1/0,l=-1/0,u=-1/0;for(const f of this.dynamic){f.mesh.updateWorldMatrix(!0,!1);const h=f.mesh.matrixWorld.elements,p=this._m3.getNormalMatrix(f.mesh.matrixWorld).elements,v=f.localPos,g=f.localNorm;let m=f.start*3,d=f.start*4;for(let x=0;x<f.count;x++){const _=v[x*3],y=v[x*3+1],w=v[x*3+2],T=h[0]*_+h[4]*y+h[8]*w+h[12],b=h[1]*_+h[5]*y+h[9]*w+h[13],D=h[2]*_+h[6]*y+h[10]*w+h[14];t[m]=T,t[m+1]=b,t[m+2]=D,T<r&&(r=T),T>a&&(a=T),b<s&&(s=b),b>l&&(l=b),D<o&&(o=D),D>u&&(u=D);const M=g[x*3],E=g[x*3+1],U=g[x*3+2],L=p[0]*M+p[3]*E+p[6]*U,O=p[1]*M+p[4]*E+p[7]*U,C=p[2]*M+p[5]*E+p[8]*U,N=1/(Math.hypot(L,O,C)||1);n[d]=L*N,n[d+1]=O*N,n[d+2]=C*N,m+=3,d+=4}}e.needsUpdate=!0;const c=Math.max(a-r,1e-6)*Math.max(l-s,1e-6)*Math.max(u-o,1e-6);this._dynBuildVolume==null&&(this._dynBuildVolume=c),c>this._dynBuildVolume*3||c<this._dynBuildVolume/3?(this.dynamicBvh=new Ys(this.dynamicMerged,{strategy:Ws}),this._dynBuildVolume=c):this.dynamicBvh.refit(),this.dynamicBvhUniform.updateFrom(this.dynamicBvh),this._normalFrame++%8===0&&this.dynamicAttrTex.updateFrom(this.dynamicPackedAttr)}dispose(){this.staticBvhUniform.dispose(),this.staticAttrTex.dispose(),this.dynamicBvhUniform.dispose(),this.dynamicAttrTex.dispose(),this.materialsTex&&this.materialsTex.dispose(),this.staticBvh&&this.staticBvh.geometry.dispose(),this.dynamicMerged&&this.dynamicMerged.dispose()}}function Hv(i,e){const t=i.geometry.index?i.geometry.toNonIndexed():i.geometry.clone();t.getAttribute("normal")||t.computeVertexNormals();const n=t.getAttribute("position").array.slice(),r=t.getAttribute("normal").array.slice(),s=new mn;s.setAttribute("position",t.getAttribute("position").clone()),s.setAttribute("normal",t.getAttribute("normal").clone()),s.applyMatrix4(i.matrixWorld);const o=s.getAttribute("position").count,a=new Float32Array(o).fill(e);return s.setAttribute("materialIndex",new Tt(a,1)),{geo:s,localPos:n,localNorm:r,count:o}}function ou(i){if(i.emissiveMap!=null||!i.emissive)return null;const e=i.emissiveIntensity??1;return e<=0||i.emissive.r+i.emissive.g+i.emissive.b<=0?null:[i.emissive.r*e,i.emissive.g*e,i.emissive.b*e]}function kv(i,e){const t=zv(),n=Math.max(i.length*2,e.length*4,br),r=2+br,s=new Float32Array(n*r*4);i.forEach((l,u)=>{const c=u*8,f=l.color??new Ce(1,1,1),h=ou(l)??[0,0,0];s[c+0]=f.r,s[c+1]=f.g,s[c+2]=f.b,s[c+3]=l.roughness??1,s[c+4]=h[0],s[c+5]=h[1],s[c+6]=h[2],s[c+7]=l.metalness??0});const o=n*4;e.forEach((l,u)=>{const c=o+u*16;s[c+0]=l.v0[0],s[c+1]=l.v0[1],s[c+2]=l.v0[2],s[c+3]=l.area,s[c+4]=l.e1[0],s[c+5]=l.e1[1],s[c+6]=l.e1[2],s[c+7]=l.emit[0],s[c+8]=l.e2[0],s[c+9]=l.e2[1],s[c+10]=l.e2[2],s[c+11]=l.emit[1],s[c+12]=l.n[0],s[c+13]=l.n[1],s[c+14]=l.n[2],s[c+15]=l.emit[2]});for(let l=0;l<br;l++){const u=(2+l)*o,c=l*br*4;for(let f=0;f<br*4;f++)s[u+f]=(t[c+f]+.5)/256}const a=new Us(s,n,r,vt,Ot);return a.minFilter=it,a.magFilter=it,a.needsUpdate=!0,a}function Vv(i,e,t){const n=i.getAttribute("position").array;for(let r=0;r+8<n.length;r+=9){const s=[n[r+3]-n[r],n[r+4]-n[r+1],n[r+5]-n[r+2]],o=[n[r+6]-n[r],n[r+7]-n[r+1],n[r+8]-n[r+2]],a=s[1]*o[2]-s[2]*o[1],l=s[2]*o[0]-s[0]*o[2],u=s[0]*o[1]-s[1]*o[0],c=Math.hypot(a,l,u);c<1e-10||t.push({v0:[n[r],n[r+1],n[r+2]],e1:s,e2:o,n:[a/c,l/c,u/c],area:c*.5,emit:e})}}function Wv(){const i=new mn;return i.setAttribute("position",new Tt(new Float32Array(9),3)),i.setAttribute("normal",new Tt(new Float32Array([0,1,0,0,1,0,0,1,0]),3)),i.setAttribute("materialIndex",new Tt(new Float32Array(3),1)),i}function Xv(i){const e=i.getAttribute("normal"),t=i.getAttribute("materialIndex"),n=e.count,r=new Float32Array(n*4);for(let s=0;s<n;s++)r[s*4]=e.getX(s),r[s*4+1]=e.getY(s),r[s*4+2]=e.getZ(s),r[s*4+3]=t.getX(s);return{packed:r,attr:new Tt(r,4)}}function uc(i,{dynamic:e}){const t=i.length>0?Pg(i,!1):Wv(),n=new Ys(t,{strategy:e?Ws:Jc});return{merged:t,bvh:n,...Xv(t)}}function qv(i,e={}){i.updateMatrixWorld(!0);const t=e.dynamicMeshes?new Set(e.dynamicMeshes):null,n=new Gv,r=n.materials,s=[],o=[],a=[];let l=0;const u=[];if(i.traverse(p=>{if(!p.isMesh||!p.geometry||!p.visible||p.userData.rtExclude)return;const v=Array.isArray(p.material)?p.material[0]:p.material;if(v.transparent)return;let g=r.indexOf(v);g<0&&(g=r.length,r.push(v));const m=Hv(p,g);u.push(m.geo);const d=t&&t.has(p);if(!d){const x=ou(v);x&&Vv(m.geo,x,a)}d?(o.push(m.geo),n.dynamic.push({mesh:p,start:l,count:m.count,localPos:m.localPos,localNorm:m.localNorm}),l+=m.count):s.push(m.geo)}),s.length===0&&o.length===0)throw new Error("three-realtime-rt: no meshes found in scene");const c=uc(s,{dynamic:!1});n.staticBvh=c.bvh,n.staticBvhUniform.updateFrom(c.bvh),n.staticAttrTex.updateFrom(c.attr),n.hasDynamic=o.length>0;const f=uc(o,{dynamic:!0});n.dynamicMerged=f.merged,n.dynamicBvh=f.bvh,n.dynamicBvhUniform.updateFrom(f.bvh),n.dynamicPacked=f.packed,n.dynamicPackedAttr=f.attr,n.dynamicAttrTex.updateFrom(f.attr),n.triangleCount=(c.merged.getAttribute("position").count+(n.hasDynamic?f.merged.getAttribute("position").count:0))/3,c.merged.computeBoundingBox();const h=c.merged.boundingBox;n.sceneDiagonal=h.isEmpty()?1:h.min.distanceTo(h.max),a.length>Ha&&(console.warn(`three-realtime-rt: ${a.length} emissive triangles exceed the NEE cap of ${Ha}; keeping the largest by area. Dropped triangles no longer act as lights — prefer low-poly emitter meshes.`),a.sort((p,v)=>v.area-p.area),a.length=Ha),n.emissiveTriCount=a.length,n.materialsTex=kv(r,a),lu(i,n);for(const p of u)p!==c.merged&&p!==f.merged&&p.dispose();return n}function lu(i,e){const t=e.lightPosType,n=e.lightColorRadius,r=e.lightDirCone;t.length=0,n.length=0,r.length=0;let s=0;const o=new P,a=new P;for(i.traverse(l=>{if(!(!l.isLight||!l.visible||l.intensity<=0)&&!(s>=Dr)){if(l.isSpotLight){l.getWorldPosition(o),l.target.getWorldPosition(a);const u=a.sub(o).normalize(),c=Math.cos(l.angle),f=Math.cos(l.angle*(1-(l.penumbra??0)));t.push(o.x,o.y,o.z,2+f),n.push(l.color.r*l.intensity,l.color.g*l.intensity,l.color.b*l.intensity,l.userData.rtRadius??.1),r.push(u.x,u.y,u.z,c),s++}else if(l.isPointLight)l.getWorldPosition(o),t.push(o.x,o.y,o.z,0),n.push(l.color.r*l.intensity,l.color.g*l.intensity,l.color.b*l.intensity,l.userData.rtRadius??.15),r.push(0,0,0,0),s++;else if(l.isDirectionalLight){l.getWorldPosition(o),l.target.getWorldPosition(a);const u=a.sub(o).normalize();t.push(u.x,u.y,u.z,1),n.push(l.color.r*l.intensity,l.color.g*l.intensity,l.color.b*l.intensity,l.userData.rtRadius??.02),r.push(0,0,0,0),s++}}}),e.lightCount=s;t.length<Dr*4;)t.push(0,0,0,0),n.push(0,0,0,0),r.push(0,0,0,0)}const Yv=`
out vec3 vWorldPos;
out vec3 vWorldNormal;
out vec2 vUvCoord;

uniform mat3 uNormalMatrixWorld;

void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  vWorldNormal = normalize(uNormalMatrixWorld * normal);
  vUvCoord = uv;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Zv=`
precision highp float;

layout(location = 0) out vec4 gAlbedoRough;
layout(location = 1) out vec4 gNormalMetal;
layout(location = 2) out vec4 gWorldPos;
layout(location = 3) out vec4 gEmissive;

in vec3 vWorldPos;
in vec3 vWorldNormal;
in vec2 vUvCoord;

uniform vec3 uColor;
uniform float uRoughness;
uniform float uMetalness;
uniform float uTransmission;
uniform vec3 uEmissive;
uniform sampler2D uMap;
uniform bool uHasMap;
uniform sampler2D uEmissiveMap;
uniform bool uHasEmissiveMap;

void main() {
  vec3 albedo = uColor;
  if (uHasMap) {
    albedo *= texture(uMap, vUvCoord).rgb;
  }
  vec3 emissive = uEmissive;
  if (uHasEmissiveMap) {
    emissive *= texture(uEmissiveMap, vUvCoord).rgb;
  }
  vec3 n = normalize(vWorldNormal) * (gl_FrontFacing ? 1.0 : -1.0);
  gAlbedoRough = vec4(albedo, uRoughness);
  // .w is a packed material word: >= 2 means transmissive glass (w - 2 =
  // transmission amount), else it is plain metalness. Lets the lighting pass
  // read specular/glass properties without an extra G-buffer sampler (it
  // already sits at the WebGL2 16-sampler minimum).
  gNormalMetal = vec4(n, uTransmission > 0.0 ? 2.0 + uTransmission : uMetalness);
  // .w packs the valid flag AND roughness: 0 = background, 1 + roughness
  // otherwise. Every consumer only tests w < 0.5, so this stays compatible.
  gWorldPos = vec4(vWorldPos, 1.0 + uRoughness);
  gEmissive = vec4(emissive, 1.0);
}
`;class jv{constructor(e,t,{mixedPrecision:n=!0}={}){this._mixedPrecision=n,this._targets=[this._makeTarget(e,t),this._makeTarget(e,t)],this._current=0,this._materialCache=new WeakMap,this._swapped=[],this._normalMat3=new Ye}_makeTarget(e,t){const n=new Sh(e,t,4,{minFilter:it,magFilter:it,type:Ot,depthBuffer:!0});for(const r of n.texture)r.generateMipmaps=!1;return this._mixedPrecision&&(n.texture[0].type=an,n.texture[1].type=an,n.texture[3].type=an),n}get target(){return this._targets[this._current]}get _prev(){return this._targets[1-this._current]}get albedoRough(){return this.target.texture[0]}get normalMetal(){return this.target.texture[1]}get worldPos(){return this.target.texture[2]}get emissive(){return this.target.texture[3]}get prevNormalMetal(){return this._prev.texture[1]}get prevWorldPos(){return this._prev.texture[2]}setSize(e,t){for(const n of this._targets)n.setSize(e,t)}_gbufferMaterialFor(e){let t=this._materialCache.get(e);t||(t=new zt({glslVersion:bn,vertexShader:Yv,fragmentShader:Zv,uniforms:{uNormalMatrixWorld:{value:new Ye},uColor:{value:new Ce(1,1,1)},uRoughness:{value:1},uMetalness:{value:0},uTransmission:{value:0},uEmissive:{value:new Ce(0,0,0)},uMap:{value:null},uHasMap:{value:!1},uEmissiveMap:{value:null},uHasEmissiveMap:{value:!1}},side:dn}),this._materialCache.set(e,t));const n=Array.isArray(e.material)?e.material[0]:e.material,r=t.uniforms;return n.color&&r.uColor.value.copy(n.color),r.uRoughness.value=n.roughness??1,r.uMetalness.value=n.metalness??0,r.uTransmission.value=n.transmission??0,n.emissive&&r.uEmissive.value.copy(n.emissive).multiplyScalar(n.emissiveIntensity??1),r.uMap.value=n.map??null,r.uHasMap.value=!!n.map,r.uEmissiveMap.value=n.emissiveMap??null,r.uHasEmissiveMap.value=!!n.emissiveMap,r.uNormalMatrixWorld.value.getNormalMatrix(e.matrixWorld),t.side=n.side??dn,t}render(e,t,n){this._current=1-this._current,this._swapped.length=0,t.traverse(s=>{if(s.isMesh&&s.geometry&&s.visible){const o=Array.isArray(s.material)?s.material[0]:s.material;if(o.transparent&&(o.opacity??1)<.5){s.visible=!1,this._swapped.push([s,null]);return}this._swapped.push([s,s.material]),s.material=this._gbufferMaterialFor(s)}});const r=t.background;t.background=null,e.setRenderTarget(this.target),e.setClearColor(0,0),e.clear(!0,!0,!1),e.render(t,n),e.setRenderTarget(null),t.background=r;for(const[s,o]of this._swapped)o===null?s.visible=!0:s.material=o;this._swapped.length=0}dispose(){for(const e of this._targets)e.dispose()}}const cu=`
vec3 skyColor(vec3 dir, vec3 sunDir, vec3 sunColor, vec3 zenith, vec3 horizon, float intensity) {
  float up = clamp(dir.y, -1.0, 1.0);
  // Gradient sky: biased so the horizon band stays fairly tall.
  float t = pow(clamp(up, 0.0, 1.0), 0.42);
  vec3 col = mix(horizon, zenith, t);
  // Below the horizon settle gently toward a soft haze — kept close to the
  // horizon colour so the ground plane's far edge blends in without a hard band.
  if (up < 0.0) {
    col = mix(horizon, horizon * 0.72, clamp(-up * 1.6, 0.0, 1.0));
  }
  // Sun: a tight disk plus a broad warm halo bleeding into the sky.
  float s = max(dot(dir, sunDir), 0.0);
  vec3 sun = sunColor * (pow(s, 3000.0) * 55.0 + pow(s, 12.0) * 0.30);
  return (col + sun) * intensity;
}
`,uu=`

// Returns true if ANY triangle in the BVH is hit by the ray within (0, maxDist).
// Unordered traversal with early-out; no closest-hit bookkeeping.
bool bvhIntersectAnyHit( BVH bvh, vec3 rayOrigin, vec3 rayDirection, float maxDist ) {

	// Same fixed-size stack as _bvhIntersectFirstHit: sized for the tree's max depth,
	// large enough because we push both children each internal node.
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	// scratch outputs for the (reused) triangle test
	vec3 triBarycoord, triNormal;
	float triDist, triSide;

	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// prune: skip nodes the ray misses or whose entry distance is already past maxDist
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh.bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > maxDist
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh.bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			// test each triangle in the leaf; early-out on the first valid occluder
			for ( uint i = offset, l = offset + count; i < l; i ++ ) {

				uvec3 indices = uTexelFetch1D( bvh.index, i ).xyz;
				vec3 a = texelFetch1D( bvh.position, indices.x ).rgb;
				vec3 b = texelFetch1D( bvh.position, indices.y ).rgb;
				vec3 c = texelFetch1D( bvh.position, indices.z ).rgb;

				if (
					intersectsTriangle( rayOrigin, rayDirection, a, b, c, triBarycoord, triNormal, triDist, triSide )
					&& triDist > 0.0 && triDist < maxDist
				) {

					return true;

				}

			}

		} else {

			// unordered: push both children, no near/far ordering
			uint leftIndex = currNodeIndex + 1u;
			uint rightIndex = boundsInfo.y;

			ptr ++;
			stack[ ptr ] = leftIndex;

			ptr ++;
			stack[ ptr ] = rightIndex;

		}

	}

	return false;

}
`,Kv=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Jv=`
precision highp float;
precision highp isampler2D;
precision highp usampler2D;

${su}
${au}
${uu}
${cu}

#define MAX_LIGHTS ${Dr}
#define PI 3.14159265358979

layout(location = 0) out vec4 outIrradiance;

in vec2 vUv;

// Two-level BVH: static (uploaded once) + dynamic (small, refit each frame).
uniform BVH bvhStatic;
uniform BVH bvhDynamic;
uniform bool uHasDynamic;
// One packed per-vertex texture per level: normal.xyz + materialIndex.w.
// (Two BVH structs already use 8 samplers; WebGL2 guarantees only 16 total.)
uniform sampler2D uAttrStatic;
uniform sampler2D uAttrDynamic;
uniform sampler2D uMaterialsTex;        // 2 texels per material (shared)

uniform sampler2D uGWorldPos;
uniform sampler2D uGNormalMetal;

// temporal reprojection (stage 2). Validation is plane-distance only — the
// normal test was dropped to free a sampler for the ReSTIR reservoir (same
// simplification the TAA resolve already made, no observed regressions).
uniform sampler2D uPrevAccum;        // rgb = irradiance history, a = sample count
uniform sampler2D uPrevGWorldPos;    // previous frame's G-buffer, for validation
uniform sampler2D uReservoir;        // ReSTIR winner per pixel (see RestirPass)
uniform mat4 uPrevViewProj;
uniform mat4 uViewProj;
uniform vec3 uCameraPos;
uniform float uMaxHistory;
uniform bool uTemporalReprojection;
uniform float uFireflyClamp;

uniform vec4 uLightPosType[MAX_LIGHTS];     // xyz pos|dir, w: 0 point, 1 directional, >=2 spot (w-2 = cosInner)
uniform vec4 uLightColorRadius[MAX_LIGHTS]; // rgb color*intensity, w radius
uniform vec4 uLightDirCone[MAX_LIGHTS];     // spot: direction.xyz + cos(outer angle)
uniform int uLightCount;
uniform int uEmissiveCount; // NEE area-light triangles in row 1 of uMaterialsTex
uniform bool uReflEnabled;  // traced reflections on metallic surfaces
uniform bool uRefrEnabled;  // traced refraction on transmissive surfaces
uniform float uIor;         // index of refraction for transmissive materials
uniform bool uLightStochastic; // 1 direct shadow ray/pixel/frame instead of 1/light
uniform bool uRestirEnabled;   // shade the reservoir winner instead of sampling
uniform bool uGIHalfRate;      // GI ray on alternating checkerboard, doubled

uniform vec3 uEnvColor;
uniform float uEnvIntensity;
uniform float uFrame;
uniform float uEps;
uniform bool uGIEnabled;

// Procedural sky (when enabled, replaces the flat env colour as the "miss" term
// for GI rays — this is what gives natural outdoor bounce light).
uniform bool uSkyEnabled;
uniform vec3 uSunDir;      // direction toward the sun
uniform vec3 uSunColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform float uSkyIntensity;

// ---------- RNG ----------
// The FIRST four random numbers each frame come from a 64x64 blue-noise tile
// (rows 2..65 of the scene-data texture), rotated over time with an R2
// low-discrepancy sequence. Those dimensions drive direct lighting — light
// pick + area-sample position — where noise is most visible; blue noise turns
// the residual error high-frequency, which temporal accumulation and the
// denoiser remove far better than white-noise clumps. Later dimensions fall
// back to PCG white noise (correlating many dimensions hurts).
uint gSeed;
int gBnDim;
vec4 gBlueNoise;
uint pcgHash(uint s) {
  uint state = s * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float rand() {
  if (gBnDim < 4) {
    float v = gBlueNoise[gBnDim];
    gBnDim++;
    return v;
  }
  gSeed = pcgHash(gSeed);
  return float(gSeed) * (1.0 / 4294967296.0);
}
vec2 rand2() { return vec2(rand(), rand()); }

vec4 fetchBlueNoise() {
  ivec2 p = ivec2(gl_FragCoord.xy) & 63;
  vec4 bn = texelFetch(uMaterialsTex, ivec2(p.x, 2 + p.y), 0);
  // R2 sequence: per-frame toroidal shift, decorrelated per channel.
  vec4 shift = fract(float(uFrame) * vec4(0.6180340, 0.7548777, 0.5698403, 0.8191725));
  return fract(bn + shift);
}

// Branchless orthonormal basis (Duff et al. 2017) — cheaper and stable for
// every n, including the poles the old cross-product picker handled branchily.
void orthoBasis(vec3 n, out vec3 t, out vec3 b) {
  float s = n.z >= 0.0 ? 1.0 : -1.0;
  float a = -1.0 / (s + n.z);
  float m = n.x * n.y * a;
  t = vec3(1.0 + s * n.x * n.x * a, s * m, -s * n.x);
  b = vec3(m, s + n.y * n.y * a, -n.y);
}

vec3 cosineSampleHemisphere(vec3 n, vec2 u) {
  float a = 2.0 * PI * u.x;
  float r = sqrt(u.y);
  vec3 t, b;
  orthoBasis(n, t, b);
  return normalize(t * (r * cos(a)) + b * (r * sin(a)) + n * sqrt(max(0.0, 1.0 - u.y)));
}

vec3 randUnitVector() {
  vec2 u = rand2();
  float z = u.x * 2.0 - 1.0;
  float a = u.y * 2.0 * PI;
  float r = sqrt(max(0.0, 1.0 - z * z));
  return vec3(r * cos(a), r * sin(a), z);
}

// ---------- two-level BVH helpers ----------
// Closest hit across both levels; isDyn says which one so the caller samples
// the matching vertex-attribute textures. (No backticks in these GLSL comments —
// they would terminate the enclosing JS template literal.)
bool traceBoth(vec3 ro, vec3 rd, out uvec4 fi, out vec3 bary, out float dist, out bool isDyn) {
  uvec4 fiS; vec3 fnS; vec3 bcS; float sideS; float distS;
  bool hitS = bvhIntersectFirstHit(bvhStatic, ro, rd, fiS, fnS, bcS, sideS, distS);
  uvec4 fiD; vec3 fnD; vec3 bcD; float sideD; float distD;
  bool hitD = uHasDynamic && bvhIntersectFirstHit(bvhDynamic, ro, rd, fiD, fnD, bcD, sideD, distD);
  if (hitS && (!hitD || distS <= distD)) { fi = fiS; bary = bcS; dist = distS; isDyn = false; return true; }
  if (hitD) { fi = fiD; bary = bcD; dist = distD; isDyn = true; return true; }
  return false;
}

// Shadow rays only need to know IF something blocks, not what's closest —
// the unordered any-hit traversal early-outs on the first blocker.
bool occluded(vec3 ro, vec3 rd, float maxDist) {
  if (bvhIntersectAnyHit(bvhStatic, ro, rd, maxDist - 2.0 * uEps)) return true;
  if (uHasDynamic && bvhIntersectAnyHit(bvhDynamic, ro, rd, maxDist - 2.0 * uEps)) return true;
  return false;
}

void fetchMaterial(float matIndex, out vec3 albedo, out float roughness,
                   out vec3 emissive, out float metalness) {
  int mi = int(round(matIndex)) * 2;
  vec4 t0 = texelFetch(uMaterialsTex, ivec2(mi, 0), 0);
  vec4 t1 = texelFetch(uMaterialsTex, ivec2(mi + 1, 0), 0);
  albedo = t0.rgb;
  roughness = t0.a;
  emissive = t1.rgb;
  metalness = t1.a;
}

// ---------- lighting ----------
// Direct irradiance (demodulated: no albedo) at point P with normal N,
// from light i, with one shadow ray. Area-samples point lights for soft shadows.
// Spot cone falloff: smooth between the outer and inner cone cosines
// (posType.w = 2 + cosInner; dirCone.w = cosOuter).
float spotFalloff(int i, vec3 lightToP) {
  vec4 posType = uLightPosType[i];
  if (posType.w < 1.5) return 1.0;
  vec4 dc = uLightDirCone[i];
  return smoothstep(dc.w, posType.w - 2.0, dot(dc.xyz, lightToP));
}

vec3 lightContribution(int i, vec3 P, vec3 N) {
  vec4 posType = uLightPosType[i];
  vec4 colRad = uLightColorRadius[i];

  vec3 L;
  float dist2 = 1.0;
  float maxDist = 1e7;
  float cone = 1.0;

  if (posType.w < 0.5 || posType.w >= 1.5) {
    // point/spot light: sample a point on its sphere for soft shadows
    vec3 lp = posType.xyz + randUnitVector() * colRad.w;
    vec3 d = lp - P;
    float dl = length(d);
    if (dl < 1e-5) return vec3(0.0);
    L = d / dl;
    dist2 = dl * dl;
    maxDist = dl;
    cone = spotFalloff(i, -L);
    if (cone <= 0.0) return vec3(0.0);
  } else {
    // directional light: jitter within a small cone
    L = normalize(-posType.xyz + randUnitVector() * colRad.w);
    dist2 = 1.0;
  }

  float NdotL = dot(N, L);
  if (NdotL <= 0.0) return vec3(0.0);

  if (occluded(P + N * uEps, L, maxDist)) return vec3(0.0);
  return colRad.rgb * (cone * NdotL / dist2);
}

// Direct light at a GI bounce hit: sample ONE random light (weighted by count).
vec3 sampleOneLight(vec3 P, vec3 N) {
  if (uLightCount == 0) return vec3(0.0);
  int i = min(int(rand() * float(uLightCount)), uLightCount - 1);
  return lightContribution(i, P, N) * float(uLightCount);
}

// Next-event estimation on emissive-mesh triangles (row 1 of uMaterialsTex):
// pick one triangle, sample a point on it, cast one shadow ray, convert the
// area pdf to solid angle. Turns emitters into proper soft area lights instead
// of surfaces a GI ray has to hit by luck.
vec3 sampleEmissiveTri(vec3 P, vec3 N) {
  if (uEmissiveCount == 0) return vec3(0.0);
  int i = min(int(rand() * float(uEmissiveCount)), uEmissiveCount - 1) * 4;
  vec4 t0 = texelFetch(uMaterialsTex, ivec2(i, 1), 0);     // v0 | area
  vec4 t1 = texelFetch(uMaterialsTex, ivec2(i + 1, 1), 0); // e1 | emit.r
  vec4 t2 = texelFetch(uMaterialsTex, ivec2(i + 2, 1), 0); // e2 | emit.g
  vec4 t3 = texelFetch(uMaterialsTex, ivec2(i + 3, 1), 0); // n  | emit.b

  vec2 u = rand2();
  if (u.x + u.y > 1.0) u = 1.0 - u; // uniform over the triangle
  vec3 lp = t0.xyz + t1.xyz * u.x + t2.xyz * u.y;

  vec3 d = lp - P;
  float d2 = dot(d, d);
  float dist = sqrt(d2);
  if (dist < 1e-4) return vec3(0.0);
  vec3 wi = d / dist;

  float cosS = dot(N, wi);
  // abs(): double-sided emission, matching what a GI ray hitting either face sees.
  float cosL = abs(dot(t3.xyz, wi));
  if (cosS <= 0.0 || cosL < 1e-4) return vec3(0.0);
  if (occluded(P + N * uEps, wi, dist)) return vec3(0.0);

  // Uniform pick of 1-of-count tris + uniform point: pdf_area = 1/(count·area).
  // Solid-angle conversion gives irradiance Le · cosS · cosL / (d² · pdf_area).
  vec3 e = vec3(t1.w, t2.w, t3.w) * (cosS * cosL * float(uEmissiveCount) * t0.w / max(d2, 1e-6));

  // Uniform-area sampling has huge single-sample variance for receivers close
  // to a big emitter (sampled point can land almost on top of P, d² → 0);
  // those 100× spikes read as speckles because the EMA decays them only as
  // 1/count. Clamp at 2× the indirect firefly limit — slight bias right next
  // to the emitter, stable everywhere.
  float eLum = dot(e, vec3(0.299, 0.587, 0.114));
  float eCap = uFireflyClamp * 2.0;
  if (eLum > eCap) e *= eCap / eLum;
  return e;
}

// Shade this pixel's ReSTIR reservoir winner: recompute the (unshadowed)
// contribution — MUST match RestirPass.candidateContribution — then pay the
// one visibility ray and weight by W = wSum / (M · p̂). Analytic lights
// re-draw their soft-radius jitter here (the reservoir stores which light,
// not the jitter). The estimator inherently tames near-emitter spikes: a huge
// contribution comes with a proportionally huge p̂, and W divides it out.
vec3 shadeReservoir(vec3 P, vec3 N) {
  // Spatial-stage encoding: r = id, a = precomputed W (vs. centroid score).
  vec4 res = texture(uReservoir, vUv);
  if (res.a <= 0.0) return vec3(0.0);
  float id = res.r;

  vec3 C;
  vec3 wi;
  float maxDist;
  if (id < float(MAX_LIGHTS)) {
    int i = int(id);
    vec4 posType = uLightPosType[i];
    vec4 colRad = uLightColorRadius[i];
    if (posType.w < 0.5 || posType.w >= 1.5) {
      vec3 d = posType.xyz - P;
      float dl = length(d);
      if (dl < 1e-5) return vec3(0.0);
      float NdotL = dot(N, d / dl);
      if (NdotL <= 0.0) return vec3(0.0);
      float cone = spotFalloff(i, -d / dl);
      if (cone <= 0.0) return vec3(0.0);
      C = colRad.rgb * (cone * NdotL / (dl * dl));
      vec3 lp = posType.xyz + randUnitVector() * colRad.w; // soft shadows
      vec3 dj = lp - P;
      maxDist = length(dj);
      if (maxDist < 1e-5) return vec3(0.0);
      wi = dj / maxDist;
    } else {
      float NdotL = dot(N, -posType.xyz);
      if (NdotL <= 0.0) return vec3(0.0);
      C = colRad.rgb * NdotL;
      wi = normalize(-posType.xyz + randUnitVector() * colRad.w);
      maxDist = 1e7;
    }
  } else {
    int t = (int(id) - MAX_LIGHTS) * 4;
    vec4 t0 = texelFetch(uMaterialsTex, ivec2(t, 1), 0);
    vec4 t1 = texelFetch(uMaterialsTex, ivec2(t + 1, 1), 0);
    vec4 t2 = texelFetch(uMaterialsTex, ivec2(t + 2, 1), 0);
    vec4 t3 = texelFetch(uMaterialsTex, ivec2(t + 3, 1), 0);
    // v3: the reservoir chose the TRIANGLE; draw a FRESH point on it every
    // frame so the area light keeps averaging (no frozen-point noise). W was
    // normalized against the centroid score, and E[point sample] = the
    // triangle's true contribution, so the estimator stays consistent.
    vec2 uv = rand2();
    if (uv.x + uv.y > 1.0) uv = 1.0 - uv;
    vec3 lp = t0.xyz + t1.xyz * uv.x + t2.xyz * uv.y;
    vec3 d = lp - P;
    float d2 = dot(d, d);
    maxDist = sqrt(d2);
    if (maxDist < 1e-4) return vec3(0.0);
    wi = d / maxDist;
    float cosS = dot(N, wi);
    float cosL = abs(dot(t3.xyz, wi));
    if (cosS <= 0.0 || cosL < 1e-4) return vec3(0.0);
    C = vec3(t1.w, t2.w, t3.w) * (cosS * cosL * t0.w / max(d2, 1e-6));
  }

  if (occluded(P + N * uEps, wi, maxDist)) return vec3(0.0);
  vec3 e = C * res.a;
  // Safety clamp, same budget as the emissive direct clamp elsewhere.
  float l = dot(e, vec3(0.299, 0.587, 0.114));
  float cap = uFireflyClamp * 2.0;
  if (l > cap) e *= cap / l;
  return e;
}

// ONE light sample for secondary path vertices: stochastically pick either the
// analytic lights or the emissive set (weighted 1/p). Costs a single shadow
// ray — same ray budget the GI bounce had before emissive NEE existed —
// instead of two; the estimator stays unbiased and temporal accumulation
// averages out the extra variance.
vec3 sampleOneAny(vec3 P, vec3 N) {
  bool hasL = uLightCount > 0;
  bool hasE = uEmissiveCount > 0;
  if (hasL && hasE) {
    return rand() < 0.5
      ? sampleOneLight(P, N) * 2.0
      : sampleEmissiveTri(P, N) * 2.0;
  }
  if (hasL) return sampleOneLight(P, N);
  if (hasE) return sampleEmissiveTri(P, N);
  return vec3(0.0);
}

// Incoming radiance along rd: trace, shade the hit with direct + NEE lighting,
// sky/env on a miss. Specular rays keep emitter emission on hit (NEE at the ray
// origin cannot cover a specular path); diffuse GI rays drop it for NEE-listed
// (static) emitters so that light isn't counted twice.
vec3 traceRadiance(vec3 ro, vec3 rd, bool specular) {
  uvec4 fi; vec3 bary; float dist; bool isDyn;
  if (!traceBoth(ro, rd, fi, bary, dist, isDyn)) {
    return uSkyEnabled
      ? skyColor(rd, uSunDir, uSunColor, uSkyZenith, uSkyHorizon, uSkyIntensity)
      : uEnvColor * uEnvIntensity;
  }
  vec4 attr = isDyn
    ? textureSampleBarycoord(uAttrDynamic, bary, fi.xyz)
    : textureSampleBarycoord(uAttrStatic, bary, fi.xyz);
  vec3 hAlbedo; float hRough; vec3 hEmissive; float hMetal;
  fetchMaterial(attr.w, hAlbedo, hRough, hEmissive, hMetal);
  vec3 hN = normalize(attr.xyz);
  if (dot(hN, rd) > 0.0) hN = -hN;
  vec3 hP = ro + rd * dist;
  vec3 Ld = sampleOneAny(hP + hN * uEps, hN);
  vec3 hLe = (!specular && uEmissiveCount > 0 && !isDyn) ? vec3(0.0) : hEmissive;
  return hLe + hAlbedo * Ld * (1.0 / PI);
}

float schlick(float cosT, float eta) {
  float r0 = (1.0 - eta) / (1.0 + eta);
  r0 *= r0;
  return r0 + (1.0 - r0) * pow(1.0 - cosT, 5.0);
}

// Roughness-jittered mirror direction (glossy cone approximation).
vec3 glossyReflect(vec3 V, vec3 N, float rough) {
  vec3 refl = reflect(V, N);
  if (rough > 0.0) {
    refl = normalize(mix(refl, cosineSampleHemisphere(N, rand2()), rough * rough));
  }
  return refl;
}

// Glass: Fresnel-weighted blend of a surface reflection and a two-interface
// refraction (enter at P, march to the exit surface, refract again).
vec3 glassRadiance(vec3 P, vec3 N, vec3 V, float rough) {
  vec3 refl = glossyReflect(V, N, rough);
  vec3 reflRad = dot(refl, N) > 0.0 ? traceRadiance(P + N * uEps, refl, true) : vec3(0.0);

  float eta = 1.0 / uIor;
  vec3 rd = refract(V, N, eta);
  if (rd == vec3(0.0)) return reflRad; // total internal reflection at entry
  float fres = schlick(clamp(-dot(V, N), 0.0, 1.0), eta);

  vec3 ro = P - N * (2.0 * uEps);
  vec3 refrRad;
  uvec4 fi; vec3 bary; float dist; bool isDyn;
  if (traceBoth(ro, rd, fi, bary, dist, isDyn)) {
    // Exit interface: refract back out (or bounce once on internal reflection).
    vec4 attr = isDyn
      ? textureSampleBarycoord(uAttrDynamic, bary, fi.xyz)
      : textureSampleBarycoord(uAttrStatic, bary, fi.xyz);
    vec3 xN = normalize(attr.xyz);
    if (dot(xN, rd) > 0.0) xN = -xN;
    vec3 xP = ro + rd * dist;
    vec3 rd2 = refract(rd, xN, uIor);
    if (rd2 == vec3(0.0)) rd2 = reflect(rd, xN);
    refrRad = traceRadiance(xP - xN * uEps, rd2, true);
  } else {
    refrRad = uSkyEnabled
      ? skyColor(rd, uSunDir, uSunColor, uSkyZenith, uSkyHorizon, uSkyIntensity)
      : uEnvColor * uEnvIntensity;
  }
  return mix(refrRad, reflRad, fres);
}

void main() {
  vec4 wp = texture(uGWorldPos, vUv);
  if (wp.w < 0.5) {
    outIrradiance = vec4(0.0);
    return;
  }

  ivec2 px = ivec2(gl_FragCoord.xy);
  gSeed = uint(px.x) * 1973u + uint(px.y) * 9277u + uint(uFrame) * 26699u;
  gSeed = pcgHash(gSeed);
  gBlueNoise = fetchBlueNoise();
  gBnDim = 0;

  vec3 P = wp.xyz;
  vec4 nmSample = texture(uGNormalMetal, vUv);
  vec3 N = normalize(nmSample.xyz);
  // Decode the packed material word (see GBufferPass): >= 2 → glass, else metal.
  float transmission = nmSample.w >= 2.0 ? clamp(nmSample.w - 2.0, 0.0, 1.0) : 0.0;
  float metal = nmSample.w >= 2.0 ? 0.0 : nmSample.w;
  float rough = clamp(wp.w - 1.0, 0.0, 1.0);

  // --- direct lighting ---
  // ReSTIR: shade the reservoir's winner with one visibility ray (flat cost in
  // light count). Stochastic: one blind random sample. Full: one shadow ray
  // per light + one for the emissive set.
  vec3 direct = vec3(0.0);
  if (uRestirEnabled) {
    direct = shadeReservoir(P, N);
  } else if (uLightStochastic) {
    direct = sampleOneAny(P, N);
  } else {
    for (int i = 0; i < MAX_LIGHTS; i++) {
      if (i >= uLightCount) break;
      direct += lightContribution(i, P, N);
    }
    // Emissive meshes as area lights (next-event estimation, one shadow ray).
    direct += sampleEmissiveTri(P, N);
  }

  // --- 1-bounce indirect (cosine-weighted; pdf cancels the NdotL/PI).
  // traceRadiance shades the hit with direct + NEE light, or returns the
  // sky/env colour when the ray escapes (the natural ambient bounce).
  // Half-rate mode traces on alternating checkerboard parity each frame,
  // DOUBLED — the temporal average converges to the same brightness
  // (unbiased) while GI's ray cost halves; accumulation + denoise absorb
  // the alternation.
  vec3 indirect = vec3(0.0);
  if (uGIEnabled) {
    bool trace = !uGIHalfRate || (((px.x + px.y + int(uFrame)) & 1) == 0);
    if (trace) {
      indirect = traceRadiance(P + N * uEps, cosineSampleHemisphere(N, rand2()), false);
      if (uGIHalfRate) indirect *= 2.0;
    }
  }

  // Firefly clamp: suppress rare huge GI samples (big perceived-noise win,
  // slightly biased). Applied to indirect only; direct is analytic.
  float lum = dot(indirect, vec3(0.299, 0.587, 0.114));
  if (lum > uFireflyClamp) indirect *= uFireflyClamp / lum;

  vec3 sampleIrr = direct + indirect;

  // --- traced specular: mirror/glossy reflections on metals ---
  if (uReflEnabled && metal > 0.001) {
    vec3 V = normalize(P - uCameraPos);
    vec3 refl = glossyReflect(V, N, rough);
    if (dot(refl, N) > 0.0) {
      // Metals have no diffuse term: replace by metalness. The composite's
      // albedo multiply then tints the reflection (F0 = albedo for metals).
      sampleIrr = mix(sampleIrr, traceRadiance(P + N * uEps, refl, true), metal);
    }
  }

  // --- traced glass: Fresnel reflection + two-interface refraction ---
  if (uRefrEnabled && transmission > 0.001) {
    vec3 V = normalize(P - uCameraPos);
    sampleIrr = mix(sampleIrr, glassRadiance(P, N, V, rough), transmission);
  }

  // A single NaN/Inf sample would poison the EMA history for good (mix() with
  // NaN stays NaN until a disocclusion resets the pixel) — sanitize first.
  if (any(isnan(sampleIrr)) || any(isinf(sampleIrr))) sampleIrr = vec3(0.0);

  // --- temporal reprojection: pull validated history from last frame ---
  float count = 1.0;
  vec3 history = vec3(0.0);
  if (uTemporalReprojection) {
    vec4 clip = uPrevViewProj * vec4(P, 1.0);
    vec4 clipC = uViewProj * vec4(P, 1.0);
    if (clip.w > 0.0 && clipC.w > 0.0) {
      vec2 prevUv = (clip.xy / clip.w) * 0.5 + 0.5;
      // P comes from a full-res G-buffer texel, which sits sub-pixel off this
      // half-res fragment's center. That constant offset would bias bilinear
      // history reads every frame (content drifts/smears at renderScale < 1).
      // Cancel it: measure P's offset in the CURRENT frame and subtract.
      vec2 currUv = (clipC.xy / clipC.w) * 0.5 + 0.5;
      prevUv -= currUv - vUv;
      if (prevUv.x >= 0.0 && prevUv.x <= 1.0 && prevUv.y >= 0.0 && prevUv.y <= 1.0) {
        vec4 prevPos = texture(uPrevGWorldPos, prevUv);
        // Plane-distance test: robust at grazing angles (position error from
        // texel quantization lies along the surface, not along the normal).
        float distToCam = distance(P, uCameraPos);
        float tol = 0.005 * distToCam + 20.0 * uEps;
        bool valid = prevPos.w > 0.5
          && abs(dot(P - prevPos.xyz, N)) < tol;
        if (valid) {
          vec4 h = texture(uPrevAccum, prevUv); // bilinear
          // Mirror-like pixels keep a SHORT history: their reflected content
          // moves differently from the surface, so long history smears the
          // reflection under camera motion — and specular rays are nearly
          // deterministic, so they don't need the accumulation anyway.
          float specHist = max(metal, transmission) * (1.0 - rough);
          float histCap = mix(uMaxHistory, min(uMaxHistory, 10.0), specHist);
          count = clamp(h.a, 0.0, histCap) + 1.0;
          history = h.rgb;
        }
      }
    }
  }

  // Exponential moving average; count=1 (disocclusion / first frame) means
  // the fresh sample is used as-is.
  vec3 blended = mix(history, sampleIrr, 1.0 / count);
  outIrradiance = vec4(blended, count);
}
`;class Qv{constructor(e,t){this.targetA=this._makeTarget(e,t),this.targetB=this._makeTarget(e,t),this.material=new zt({glslVersion:bn,vertexShader:Kv,fragmentShader:Jv,uniforms:{bvhStatic:{value:null},bvhDynamic:{value:null},uHasDynamic:{value:!1},uAttrStatic:{value:null},uAttrDynamic:{value:null},uMaterialsTex:{value:null},uGWorldPos:{value:null},uGNormalMetal:{value:null},uPrevAccum:{value:null},uPrevGWorldPos:{value:null},uReservoir:{value:null},uRestirEnabled:{value:!1},uPrevViewProj:{value:new Qe},uViewProj:{value:new Qe},uCameraPos:{value:new P},uMaxHistory:{value:128},uTemporalReprojection:{value:!0},uFireflyClamp:{value:4},uLightPosType:{value:[]},uLightColorRadius:{value:[]},uLightDirCone:{value:[]},uLightCount:{value:0},uEmissiveCount:{value:0},uReflEnabled:{value:!0},uRefrEnabled:{value:!0},uIor:{value:1.5},uLightStochastic:{value:!1},uGIHalfRate:{value:!1},uEnvColor:{value:new Ce(.03,.04,.06)},uEnvIntensity:{value:1},uFrame:{value:0},uEps:{value:.001},uGIEnabled:{value:!0},uSkyEnabled:{value:!1},uSunDir:{value:new P(.4,.8,.45).normalize()},uSunColor:{value:new Ce(1,.9,.75)},uSkyZenith:{value:new Ce(.18,.34,.62)},uSkyHorizon:{value:new Ce(.7,.8,.9)},uSkyIntensity:{value:1}},depthTest:!1,depthWrite:!1}),this.scene=new ai,this.camera=new qn(-1,1,1,-1,0,1),this.quad=new Je(new pn(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}_makeTarget(e,t){const n=new Qt(e,t,{minFilter:gt,magFilter:gt,format:vt,type:an,depthBuffer:!1,stencilBuffer:!1});return n.texture.generateMipmaps=!1,n}clearHistory(e){const t=e.getRenderTarget(),n=new Ce;e.getClearColor(n);const r=e.getClearAlpha();e.setClearColor(0,0);for(const s of[this.targetA,this.targetB])e.setRenderTarget(s),e.clear(!0,!1,!1);e.setRenderTarget(t),e.setClearColor(n,r)}setSize(e,t){this.targetA.setSize(e,t),this.targetB.setSize(e,t)}resizeCarry(e,t,n,r,s){const o=this._makeTarget(n,r),a=this._makeTarget(n,r);t.blit(e,this.targetB.texture,a,s),this.targetA.dispose(),this.targetB.dispose(),this.targetA=o,this.targetB=a}setCompiledScene(e){const t=this.material.uniforms;t.bvhStatic.value=e.staticBvhUniform,t.bvhDynamic.value=e.dynamicBvhUniform,t.uHasDynamic.value=e.hasDynamic,t.uAttrStatic.value=e.staticAttrTex,t.uAttrDynamic.value=e.dynamicAttrTex,t.uMaterialsTex.value=e.materialsTex,t.uLightPosType.value=e.lightPosType,t.uLightColorRadius.value=e.lightColorRadius,t.uLightDirCone.value=e.lightDirCone,t.uLightCount.value=e.lightCount,t.uEmissiveCount.value=e.emissiveTriCount}render(e,t,n,r=null){const s=this.material.uniforms;s.uGWorldPos.value=t.worldPos,s.uGNormalMetal.value=t.normalMetal,s.uPrevGWorldPos.value=t.prevWorldPos,s.uPrevAccum.value=this.targetB.texture,s.uReservoir.value=r,s.uRestirEnabled.value=r!==null,s.uFrame.value=n,e.setRenderTarget(this.targetA),e.render(this.scene,this.camera),e.setRenderTarget(null);const o=this.targetA;return[this.targetA,this.targetB]=[this.targetB,this.targetA],o.texture}dispose(){this.targetA.dispose(),this.targetB.dispose(),this.material.dispose(),this.quad.geometry.dispose()}}const $v=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,e0=`
precision highp float;

layout(location = 0) out vec4 outColor;

in vec2 vUv;

uniform sampler2D uIrradiance;   // rgb = irradiance, a = history count
uniform sampler2D uGWorldPos;    // full-res guides
uniform sampler2D uGNormalMetal;
uniform vec2 uTexelSize;         // of the irradiance target
uniform float uStep;             // à-trous step: 1, 2, 4, ...
uniform vec3 uCameraPos;
uniform float uEps;
uniform float uLumSigma;

float luminance(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

void main() {
  vec4 center = texture(uIrradiance, vUv);
  vec4 wp = texture(uGWorldPos, vUv);
  if (wp.w < 0.5) {
    outColor = center;
    return;
  }
  vec3 P = wp.xyz;
  vec4 nm = texture(uGNormalMetal, vUv);
  vec3 N = normalize(nm.xyz);
  // Specular surfaces (mirror metals, glass) carry traced reflections whose
  // detail is NOT in the G-buffer guides — filtering would smear them, and
  // their signal is nearly deterministic anyway. Scale the filter down as the
  // surface gets more mirror-like.
  float matW = nm.w;
  float specAmount = matW >= 2.0 ? clamp(matW - 2.0, 0.0, 1.0) : matW;
  float specKeep = specAmount * (1.0 - clamp(wp.w - 1.0, 0.0, 1.0));

  // Fewer accumulated samples -> noisier pixel -> wider luminance tolerance.
  // A converged pixel (high count) is barely touched, preserving detail.
  // The widening is CAPPED at 3x: during camera motion every pixel is fresh,
  // and an 8x-wide gate across five à-trous passes erased small contact
  // shadows entirely — objects visibly floated while orbiting ("ghostly
  // apparitions") and only grounded once the camera stopped. Blue-noise
  // sampling + ReSTIR keep fresh pixels clean enough for the tighter gate.
  float count = max(center.a, 1.0);
  float sigmaL = uLumSigma * clamp(8.0 / sqrt(count), 0.75, 3.0);

  float distToCam = distance(P, uCameraPos);
  float planeTol = 0.01 * distToCam + 20.0 * uEps;

  // Despeckle (first iteration, short history only): a freshly disoccluded
  // pixel can carry one huge sample that the center-weighted filter would
  // preserve as a bright "rain drop" at silhouettes. Such a pixel has no
  // business being brighter than its entire neighbourhood — clamp its
  // luminance to the brightest neighbour. Converged pixels are exempt, so
  // real small highlights survive.
  if (uStep < 1.5 && count < 8.0) {
    float maxL = 0.0;
    float found = 0.0;
    for (int dy = -1; dy <= 1; dy++) {
      for (int dx = -1; dx <= 1; dx++) {
        if (dx == 0 && dy == 0) continue;
        vec2 tuv = vUv + vec2(float(dx), float(dy)) * uTexelSize;
        if (tuv.x < 0.0 || tuv.x > 1.0 || tuv.y < 0.0 || tuv.y > 1.0) continue;
        if (texture(uGWorldPos, tuv).w < 0.5) continue;
        maxL = max(maxL, luminance(texture(uIrradiance, tuv).rgb));
        found = 1.0;
      }
    }
    float cap = maxL * 1.25 + 1e-4;
    float l = luminance(center.rgb);
    if (found > 0.5 && l > cap) center.rgb *= cap / l;
  }

  float lumC = luminance(center.rgb);

  // 3x3 B-spline-ish kernel, edge-avoiding weights.
  vec3 sum = center.rgb * 4.0;
  float wsum = 4.0;
  for (int dy = -1; dy <= 1; dy++) {
    for (int dx = -1; dx <= 1; dx++) {
      if (dx == 0 && dy == 0) continue;
      vec2 tuv = vUv + vec2(float(dx), float(dy)) * uStep * uTexelSize;
      if (tuv.x < 0.0 || tuv.x > 1.0 || tuv.y < 0.0 || tuv.y > 1.0) continue;

      vec4 g = texture(uGWorldPos, tuv);
      if (g.w < 0.5) continue;
      vec4 s = texture(uIrradiance, tuv);
      vec3 Nt = normalize(texture(uGNormalMetal, tuv).xyz);

      float k = (dx == 0 || dy == 0) ? 2.0 : 1.0;
      float wN = pow(max(dot(N, Nt), 0.0), 32.0);
      float wZ = exp(-abs(dot(g.xyz - P, N)) / planeTol);
      // Tighten the luminance gate as the à-trous step widens: a shadow on a
      // flat floor has no geometric edge to protect it, so at high iteration
      // counts the wide passes would average it away ("floating" objects with
      // no contact shadow). Wide steps only get to blend near-equal luminance.
      float wL = exp(-abs(luminance(s.rgb) - lumC) / (sigmaL * inversesqrt(uStep)));
      float w = k * wN * wZ * wL * (1.0 - specKeep);
      sum += s.rgb * w;
      wsum += w;
    }
  }
  outColor = vec4(sum / wsum, center.a);
}
`;class t0{constructor(e,t){this.targetA=this._makeTarget(e,t),this.targetB=this._makeTarget(e,t),this.material=new zt({glslVersion:bn,vertexShader:$v,fragmentShader:e0,uniforms:{uIrradiance:{value:null},uGWorldPos:{value:null},uGNormalMetal:{value:null},uTexelSize:{value:new Oe},uStep:{value:1},uCameraPos:{value:new P},uEps:{value:.001},uLumSigma:{value:.25}},depthTest:!1,depthWrite:!1}),this.scene=new ai,this.camera=new qn(-1,1,1,-1,0,1),this.quad=new Je(new pn(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad),this._width=e,this._height=t}_makeTarget(e,t){const n=new Qt(e,t,{minFilter:gt,magFilter:gt,format:vt,type:an,depthBuffer:!1,stencilBuffer:!1});return n.texture.generateMipmaps=!1,n}setSize(e,t){this._width=e,this._height=t,this.targetA.setSize(e,t),this.targetB.setSize(e,t)}render(e,t,n,r,s,o=3){const a=this.material.uniforms;a.uGWorldPos.value=n.worldPos,a.uGNormalMetal.value=n.normalMetal,a.uTexelSize.value.set(1/this._width,1/this._height),a.uCameraPos.value.copy(r),a.uEps.value=s;let l=t,u=this.targetA;for(let c=0;c<o;c++)a.uIrradiance.value=l,a.uStep.value=1<<c,e.setRenderTarget(u),e.render(this.scene,this.camera),l=u.texture,u=u===this.targetA?this.targetB:this.targetA;return e.setRenderTarget(null),l}dispose(){this.targetA.dispose(),this.targetB.dispose(),this.material.dispose(),this.quad.geometry.dispose()}}const n0=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,i0=`
precision highp float;

layout(location = 0) out vec4 outColor;

in vec2 vUv;

${cu}

uniform sampler2D uIrradiance;
uniform sampler2D uGAlbedoRough;
uniform sampler2D uGNormalMetal;
uniform sampler2D uGWorldPos;
uniform sampler2D uGEmissive;
uniform sampler2D uVolumetric; // in-scattered light (quarter canvas res, smooth)
uniform vec2 uVolTexelSize;
uniform bool uVolEnabled;
uniform vec3 uBackgroundColor;
// 0 composite, 1 albedo, 2 normal, 3 irradiance (direct+GI), 4 worldPos, 5 emissive
uniform int uOutputMode;

// joint bilateral upsample (lighting may be rendered below full resolution)
uniform bool uUpsample;
uniform vec2 uIrrTexelSize;
uniform vec3 uCameraPos;

// distance fog (applied in linear space, before tonemap)
uniform bool uFogEnabled;
uniform vec3 uFogColor;
uniform float uFogDensity;

// procedural sky background
uniform bool uSkyEnabled;
uniform mat4 uInvViewProj;
uniform vec3 uSunDir;
uniform vec3 uSunColor;
uniform vec3 uSkyZenith;
uniform vec3 uSkyHorizon;
uniform float uSkyIntensity;

// Reconstruct the world-space view ray for this pixel from the inverse VP.
vec3 viewRay(vec2 uv) {
  vec4 far = uInvViewProj * vec4(uv * 2.0 - 1.0, 1.0, 1.0);
  return normalize(far.xyz / far.w - uCameraPos);
}

vec3 acesFilm(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

// Upsample low-res irradiance to this full-res pixel: 4 nearest low-res taps,
// bilinear weights modulated by geometric similarity (plane distance + normal)
// so lighting never bleeds across depth or orientation discontinuities.
vec3 sampleIrradiance(vec2 uv, vec3 P, vec3 N) {
  if (!uUpsample) return texture(uIrradiance, uv).rgb;

  float planeTol = 0.01 * distance(P, uCameraPos) + 1e-3;
  vec2 base = uv / uIrrTexelSize - 0.5;
  vec2 f = fract(base);
  vec2 uv00 = (floor(base) + 0.5) * uIrrTexelSize;

  vec3 sum = vec3(0.0);
  float wsum = 0.0;
  vec3 bestGeo = vec3(0.0);
  float bestGeoW = -1.0;
  vec3 bestBil = vec3(0.0);
  float bestBilW = -1.0;
  for (int dy = 0; dy <= 1; dy++) {
    for (int dx = 0; dx <= 1; dx++) {
      vec2 tuv = uv00 + vec2(float(dx), float(dy)) * uIrrTexelSize;
      vec3 irr = texture(uIrradiance, tuv).rgb;
      float bw = (dx == 0 ? 1.0 - f.x : f.x) * (dy == 0 ? 1.0 - f.y : f.y);
      if (bw > bestBilW) { bestBilW = bw; bestBil = irr; }

      vec4 g = texture(uGWorldPos, tuv);
      if (g.w < 0.5) continue;
      vec3 Nt = normalize(texture(uGNormalMetal, tuv).xyz);
      float wPlane = exp(-abs(dot(g.xyz - P, N)) / planeTol);
      float wN = pow(max(dot(N, Nt), 0.0), 16.0);
      float gw = wPlane * wN;
      // Track the geometrically most similar tap for the fallback below.
      if (gw > bestGeoW) { bestGeoW = gw; bestGeo = irr; }
      float w = bw * gw;
      sum += irr * w;
      wsum += w;
    }
  }
  if (wsum > 1e-4) return sum / wsum;
  // All combined weights died (thin silhouette). Falling back to the closest
  // *bilinear* tap would pull lighting from the far side of the edge — under
  // TAA jitter the chosen tap flickers, which reads as bright "rain drop"
  // speckles on dark objects. Prefer the geometrically closest tap instead.
  return bestGeoW >= 0.0 ? bestGeo : bestBil;
}

void main() {
  vec4 wp = texture(uGWorldPos, vUv);
  vec4 albedoRough = texture(uGAlbedoRough, vUv);
  vec3 N = normalize(texture(uGNormalMetal, vUv).xyz);
  vec3 irradiance = sampleIrradiance(vUv, wp.xyz, N);
  vec3 emissive = texture(uGEmissive, vUv).rgb;

  vec3 color;
  if (wp.w < 0.5) {
    // Background: the procedural sky (with sun), else fog colour, else flat.
    if (uSkyEnabled) {
      color = skyColor(viewRay(vUv), uSunDir, uSunColor, uSkyZenith, uSkyHorizon, uSkyIntensity);
    } else {
      color = uFogEnabled ? uFogColor : uBackgroundColor;
    }
  } else {
    color = albedoRough.rgb * irradiance + emissive;
    // Volumetric in-scatter (already radiance, not modulated by albedo). Fog
    // is low-frequency, so a wide 9-tap blur costs nothing visually and eats
    // the single-sample grain — crucial with MOVING lights, where the
    // in-scatter field changes every frame and temporal accumulation alone
    // can never converge it (grain carpeted dark scenes otherwise).
    if (uVolEnabled) {
      vec2 o1 = uVolTexelSize * 1.5;
      vec2 o2 = uVolTexelSize * 3.5;
      vec3 vol = texture(uVolumetric, vUv).rgb * 0.24
        + texture(uVolumetric, vUv + vec2( o1.x,  o1.y)).rgb * 0.12
        + texture(uVolumetric, vUv + vec2(-o1.x,  o1.y)).rgb * 0.12
        + texture(uVolumetric, vUv + vec2( o1.x, -o1.y)).rgb * 0.12
        + texture(uVolumetric, vUv + vec2(-o1.x, -o1.y)).rgb * 0.12
        + texture(uVolumetric, vUv + vec2( o2.x,  0.0 )).rgb * 0.07
        + texture(uVolumetric, vUv + vec2(-o2.x,  0.0 )).rgb * 0.07
        + texture(uVolumetric, vUv + vec2( 0.0 ,  o2.y)).rgb * 0.07
        + texture(uVolumetric, vUv + vec2( 0.0 , -o2.y)).rgb * 0.07;
      color += vol;
    }
    if (uFogEnabled) {
      float dist = distance(wp.xyz, uCameraPos);
      float f = 1.0 - exp(-uFogDensity * uFogDensity * dist * dist);
      color = mix(color, uFogColor, clamp(f, 0.0, 1.0));
    }
  }

  if (uOutputMode == 1) color = albedoRough.rgb;
  else if (uOutputMode == 2) color = N * 0.5 + 0.5;
  else if (uOutputMode == 3) color = irradiance;
  else if (uOutputMode == 4) color = fract(wp.xyz * 0.1);
  else if (uOutputMode == 5) color = emissive;
  else color = acesFilm(color);

  outColor = vec4(pow(color, vec3(1.0 / 2.2)), 1.0);
}
`;class r0{constructor(){this.material=new zt({glslVersion:bn,vertexShader:n0,fragmentShader:i0,uniforms:{uIrradiance:{value:null},uGAlbedoRough:{value:null},uGNormalMetal:{value:null},uGWorldPos:{value:null},uGEmissive:{value:null},uVolumetric:{value:null},uVolTexelSize:{value:new Oe},uVolEnabled:{value:!1},uBackgroundColor:{value:new Ce(.01,.012,.02)},uOutputMode:{value:0},uUpsample:{value:!1},uIrrTexelSize:{value:new Oe},uCameraPos:{value:new P},uFogEnabled:{value:!1},uFogColor:{value:new Ce(.5,.6,.7)},uFogDensity:{value:.05},uSkyEnabled:{value:!1},uInvViewProj:{value:new Qe},uSunDir:{value:new P(.4,.8,.45).normalize()},uSunColor:{value:new Ce(1,.9,.75)},uSkyZenith:{value:new Ce(.18,.34,.62)},uSkyHorizon:{value:new Ce(.7,.8,.9)},uSkyIntensity:{value:1}},depthTest:!1,depthWrite:!1}),this.scene=new ai,this.camera=new qn(-1,1,1,-1,0,1),this.quad=new Je(new pn(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}render(e,t,n,r,s=null){const o=this.material.uniforms;o.uIrradiance.value=t,o.uGAlbedoRough.value=n.albedoRough,o.uGNormalMetal.value=n.normalMetal,o.uGWorldPos.value=n.worldPos,o.uGEmissive.value=n.emissive,r&&r.isColor&&o.uBackgroundColor.value.copy(r),e.setRenderTarget(s),e.render(this.scene,this.camera)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}const hc=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,s0=`
precision highp float;

layout(location = 0) out vec4 outColor;

in vec2 vUv;

uniform sampler2D uCurrent;        // this frame's composited LDR colour
uniform sampler2D uHistory;        // previous resolved colour
uniform sampler2D uGWorldPos;      // current full-res G-buffer
uniform mat4 uPrevViewProj;
uniform vec2 uTexelSize;
uniform vec2 uJitter;              // this frame's projection jitter (UV space)
uniform vec2 uPrevJitter;          // last frame's projection jitter (UV space)
uniform float uBlend;              // fresh-sample weight when history is valid (~0.1)
uniform bool uReset;               // first frame after a scene/size change

// The raster (and the whole lighting chain guided by it) wobbles with the
// sub-pixel jitter. Resolving on that wobbling grid drags history along with
// it — the image shimmers. So the resolve UNJITTERS its input: content that
// unjittered would sit at u is rasterized at u + jitter, hence sample there.
// Output then lives on a stable grid and jitter only contributes sub-pixel
// coverage information over time (which is what gives the anti-aliasing).
vec3 sampleCurrent(vec2 uv) {
  return texture(uCurrent, uv + uJitter).rgb;
}

void main() {
  vec3 current = sampleCurrent(vUv);
  // World position of the (unjittered) content at this pixel — same offset.
  vec4 wp = texture(uGWorldPos, vUv + uJitter);

  // Background (no geometry): no useful reprojection, show current directly.
  if (wp.w < 0.5 || uReset) {
    outColor = vec4(current, 1.0);
    return;
  }

  vec3 P = wp.xyz;

  // Neighbourhood colour AABB (used to clamp history — the core anti-ghost /
  // anti-speckle step). Also the min corner tells us the local floor, so a
  // single bright fireflight can't survive the clamp.
  vec3 nmin = current, nmax = current;
  for (int dy = -1; dy <= 1; dy++) {
    for (int dx = -1; dx <= 1; dx++) {
      if (dx == 0 && dy == 0) continue;
      vec3 c = sampleCurrent(vUv + vec2(float(dx), float(dy)) * uTexelSize);
      nmin = min(nmin, c);
      nmax = max(nmax, c);
    }
  }

  // Reproject this pixel's world point into the previous frame. The history is
  // a STABILIZED (unjittered-grid) image, so remove last frame's jitter from
  // the projected position before sampling it.
  vec4 clip = uPrevViewProj * vec4(P, 1.0);
  if (clip.w <= 0.0) { outColor = vec4(current, 1.0); return; }
  vec2 prevUv = (clip.xy / clip.w) * 0.5 + 0.5 - uPrevJitter;
  if (prevUv.x < 0.0 || prevUv.x > 1.0 || prevUv.y < 0.0 || prevUv.y > 1.0) {
    outColor = vec4(current, 1.0);
    return;
  }

  // NOTE: no geometric (depth/normal) history validation here, on purpose.
  // Under sub-pixel jitter such tests fail on every hard edge each frame,
  // dropping those pixels to the raw jittered current — the whole image
  // shimmers. The neighbourhood clamp below already bounds any stale history
  // (disocclusions resolve within a frame or two), which is exactly how
  // production TAA implementations handle rejection.
  vec3 history = texture(uHistory, prevUv).rgb;
  // Guard against a stray non-finite history value poisoning the buffer (it
  // would otherwise re-blend with itself every frame and stick as black).
  if (any(isnan(history)) || any(isinf(history))) {
    outColor = vec4(current, 1.0);
    return;
  }
  // Clamp history into the current neighbourhood box: removes ghosting on
  // motion and rejects bright edge speckles that history would otherwise keep.
  history = clamp(history, nmin, nmax);

  vec3 resolved = mix(history, current, uBlend);
  outColor = vec4(resolved, 1.0);
}
`,a0=`
precision highp float;
layout(location = 0) out vec4 outColor;
in vec2 vUv;
uniform sampler2D uTex;
void main() { outColor = vec4(texture(uTex, vUv).rgb, 1.0); }
`;class o0{constructor(e,t){this._width=e,this._height=t,this.targetA=this._makeTarget(e,t),this.targetB=this._makeTarget(e,t),this._reset=!0,this.material=new zt({glslVersion:bn,vertexShader:hc,fragmentShader:s0,uniforms:{uCurrent:{value:null},uHistory:{value:null},uGWorldPos:{value:null},uPrevViewProj:{value:new Qe},uTexelSize:{value:new Oe(1/e,1/t)},uJitter:{value:new Oe},uPrevJitter:{value:new Oe},uBlend:{value:.1},uReset:{value:!0}},depthTest:!1,depthWrite:!1}),this.copyMaterial=new zt({glslVersion:bn,vertexShader:hc,fragmentShader:a0,uniforms:{uTex:{value:null}},depthTest:!1,depthWrite:!1}),this.scene=new ai,this.camera=new qn(-1,1,1,-1,0,1),this.quad=new Je(new pn(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}_makeTarget(e,t){const n=new Qt(e,t,{minFilter:gt,magFilter:gt,format:vt,type:an,depthBuffer:!1,stencilBuffer:!1});return n.texture.generateMipmaps=!1,n}setSize(e,t){e===this._width&&t===this._height||(this._width=e,this._height=t,this.targetA.setSize(e,t),this.targetB.setSize(e,t),this.material.uniforms.uTexelSize.value.set(1/e,1/t),this._reset=!0)}resizeCarry(e,t,n,r){if(n===this._width&&r===this._height)return;this._width=n,this._height=r;const s=this._makeTarget(n,r),o=this._makeTarget(n,r);t.blit(e,this.targetB.texture,o,-1),this.targetA.dispose(),this.targetB.dispose(),this.targetA=s,this.targetB=o,this.material.uniforms.uTexelSize.value.set(1/n,1/r)}reset(){this._reset=!0}render(e,t,n,r,s,o,a,l=null){const u=this.material.uniforms;u.uCurrent.value=t,u.uHistory.value=this.targetB.texture,u.uGWorldPos.value=n.worldPos,u.uPrevViewProj.value.copy(r),u.uJitter.value.copy(s),u.uPrevJitter.value.copy(o),u.uBlend.value=a,u.uReset.value=this._reset,this.quad.material=this.material,e.setRenderTarget(this.targetA),e.render(this.scene,this.camera),this.quad.material=this.copyMaterial,this.copyMaterial.uniforms.uTex.value=this.targetA.texture,e.setRenderTarget(l),e.render(this.scene,this.camera),[this.targetA,this.targetB]=[this.targetB,this.targetA],this._reset=!1}dispose(){this.targetA.dispose(),this.targetB.dispose(),this.material.dispose(),this.copyMaterial.dispose(),this.quad.geometry.dispose()}}const fc=8,l0=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,c0=`
precision highp float;
precision highp isampler2D;
precision highp usampler2D;

${su}
${au}
${uu}

#define MAX_LIGHTS ${Dr}
#define PI 3.14159265358979

layout(location = 0) out vec4 outScatter;

in vec2 vUv;

uniform BVH bvhStatic;
uniform BVH bvhDynamic;
uniform bool uHasDynamic;
uniform sampler2D uMaterialsTex;   // row 1: emissive NEE triangles
uniform sampler2D uGWorldPos;

// temporal accumulation (reprojected through the SURFACE point — an
// approximation for a view-ray quantity, good enough for smooth fog)
uniform sampler2D uPrevAccum;
uniform mat4 uPrevViewProj;
uniform float uMaxHistory;

uniform vec4 uLightPosType[MAX_LIGHTS];
uniform vec4 uLightColorRadius[MAX_LIGHTS];
uniform vec4 uLightDirCone[MAX_LIGHTS]; // spot: direction.xyz + cos(outer)
uniform int uLightCount;
uniform int uEmissiveCount;

uniform vec3 uCameraPos;
uniform float uFrame;
uniform float uEps;
uniform float uDensity;   // scatter coefficient (global term)
uniform float uMaxDist;   // cap for rays that hit nothing / far surfaces

// Localized fog zones: up to 8 AABBs. Two vec4 per zone —
//   [2*i]   = (min.xyz, density),  [2*i+1] = (max.xyz, unused).
// Density at a point = uDensity + Σ density of every zone containing it.
#define MAX_FOG_ZONES 8
uniform vec4 uFogZones[MAX_FOG_ZONES * 2];
uniform int uFogZoneCount;

float fogDensityAt(vec3 p) {
  float d = uDensity;
  for (int i = 0; i < MAX_FOG_ZONES; i++) {
    if (i >= uFogZoneCount) break;
    vec4 lo = uFogZones[i * 2];
    vec3 mn = lo.xyz;
    vec3 mx = uFogZones[i * 2 + 1].xyz;
    if (all(greaterThanEqual(p, mn)) && all(lessThanEqual(p, mx))) {
      d += lo.w;
    }
  }
  return d;
}

// ---------- RNG ----------
// First four dims from the shared blue-noise tile (rows 2..65 of the
// scene-data texture) with an R2 temporal shift; the rest is PCG. Same
// scheme as RTLightingPass — see the comment there.
uint gSeed;
int gBnDim;
vec4 gBlueNoise;
uint pcgHash(uint s) {
  uint state = s * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float rand() {
  if (gBnDim < 4) {
    float v = gBlueNoise[gBnDim];
    gBnDim++;
    return v;
  }
  gSeed = pcgHash(gSeed);
  return float(gSeed) * (1.0 / 4294967296.0);
}
vec2 rand2() { return vec2(rand(), rand()); }

vec4 fetchBlueNoise() {
  ivec2 p = ivec2(gl_FragCoord.xy) & 63;
  vec4 bn = texelFetch(uMaterialsTex, ivec2(p.x, 2 + p.y), 0);
  vec4 shift = fract(float(uFrame) * vec4(0.6180340, 0.7548777, 0.5698403, 0.8191725));
  return fract(bn + shift);
}

vec3 randUnitVector() {
  vec2 u = rand2();
  float z = u.x * 2.0 - 1.0;
  float a = u.y * 2.0 * PI;
  float r = sqrt(max(0.0, 1.0 - z * z));
  return vec3(r * cos(a), r * sin(a), z);
}

// Any-hit: first blocker wins, no closest-hit sorting (see bvhAnyHit.glsl.js).
bool occluded(vec3 ro, vec3 rd, float maxDist) {
  if (bvhIntersectAnyHit(bvhStatic, ro, rd, maxDist - 2.0 * uEps)) return true;
  if (uHasDynamic && bvhIntersectAnyHit(bvhDynamic, ro, rd, maxDist - 2.0 * uEps)) return true;
  return false;
}

// In-scattered radiance at a point in the volume from analytic light i.
// Like the surface version but with no cosine term (isotropic phase, folded
// into uDensity along with 1/4π).
vec3 lightAt(int i, vec3 S) {
  vec4 posType = uLightPosType[i];
  vec4 colRad = uLightColorRadius[i];
  if (posType.w < 0.5 || posType.w >= 1.5) {
    vec3 lp = posType.xyz + randUnitVector() * colRad.w;
    vec3 d = lp - S;
    float dist = length(d);
    if (dist < 1e-4) return vec3(0.0);
    float cone = 1.0;
    if (posType.w >= 1.5) {
      // spot: this is what draws visible light CONES in fog
      vec4 dc = uLightDirCone[i];
      cone = smoothstep(dc.w, posType.w - 2.0, dot(dc.xyz, -d / dist));
      if (cone <= 0.0) return vec3(0.0);
    }
    if (occluded(S, d / dist, dist)) return vec3(0.0);
    return colRad.rgb * (cone / (dist * dist));
  }
  vec3 L = normalize(-posType.xyz + randUnitVector() * colRad.w);
  if (occluded(S, L, 1e7)) return vec3(0.0);
  return colRad.rgb;
}

// In-scattered radiance from one sampled emissive triangle (row 1 of the
// materials texture — same layout the lighting pass uses).
vec3 emissiveAt(vec3 S) {
  if (uEmissiveCount == 0) return vec3(0.0);
  int i = min(int(rand() * float(uEmissiveCount)), uEmissiveCount - 1) * 4;
  vec4 t0 = texelFetch(uMaterialsTex, ivec2(i, 1), 0);
  vec4 t1 = texelFetch(uMaterialsTex, ivec2(i + 1, 1), 0);
  vec4 t2 = texelFetch(uMaterialsTex, ivec2(i + 2, 1), 0);
  vec4 t3 = texelFetch(uMaterialsTex, ivec2(i + 3, 1), 0);
  vec2 u = rand2();
  if (u.x + u.y > 1.0) u = 1.0 - u;
  vec3 lp = t0.xyz + t1.xyz * u.x + t2.xyz * u.y;
  vec3 d = lp - S;
  float d2 = dot(d, d);
  float dist = sqrt(d2);
  if (dist < 1e-4) return vec3(0.0);
  vec3 wi = d / dist;
  float cosL = abs(dot(t3.xyz, wi));
  if (cosL < 1e-4) return vec3(0.0);
  if (occluded(S, wi, dist)) return vec3(0.0);
  vec3 e = vec3(t1.w, t2.w, t3.w) * (cosL * float(uEmissiveCount) * t0.w / max(d2, 1e-4));
  // same close-range variance clamp idea as the surface pass
  float l = dot(e, vec3(0.299, 0.587, 0.114));
  if (l > 20.0) e *= 20.0 / l;
  return e;
}

void main() {
  vec4 wp = texture(uGWorldPos, vUv);

  ivec2 px = ivec2(gl_FragCoord.xy);
  gSeed = uint(px.x) * 2153u + uint(px.y) * 9277u + uint(uFrame) * 26699u;
  gSeed = pcgHash(gSeed);
  gBlueNoise = fetchBlueNoise();
  gBnDim = 0;

  // Segment to integrate: camera → surface (or the fog cap on a miss).
  bool hit = wp.w > 0.5;
  vec3 P = wp.xyz;
  float segLen = hit ? min(distance(P, uCameraPos), uMaxDist) : uMaxDist;
  vec3 rd = hit
    ? normalize(P - uCameraPos)
    : vec3(0.0); // background without geometry: skip (no stable ray direction here)

  // STRATIFIED MARCH: several jittered steps per ray instead of one point.
  // This pass runs at quarter canvas resolution (fog is low-frequency), so
  // the extra steps cost less than the old single-sample full-lighting-res
  // version — and MOVING lights, whose in-scatter field changes every frame
  // and can never converge temporally, get real per-frame averaging.
  // Nothing to scatter: no global fog AND no localized zones → output zeros fast.
  if (uDensity <= 0.0 && uFogZoneCount == 0) {
    outScatter = vec4(0.0, 0.0, 0.0, 1.0);
    return;
  }

  #define VOL_STEPS 4
  vec3 sample_ = vec3(0.0);
  if (hit && segLen > 1e-3) {
    bool hasL = uLightCount > 0;
    bool hasE = uEmissiveCount > 0;
    float segStep = segLen / float(VOL_STEPS);
    // Piecewise integration: density can vary along the ray (zones), so the
    // transmittance is built up step by step from the LOCAL density at each
    // sample rather than a single closed-form exp(-uDensity * t).
    float opticalDepth = 0.0;
    for (int k = 0; k < VOL_STEPS; k++) {
      float t = (float(k) + rand()) * segStep; // ascending strata
      vec3 S = uCameraPos + rd * t;
      float local = fogDensityAt(S);
      opticalDepth += local * segStep;
      vec3 Lin = vec3(0.0);
      // Stochastically pick analytic lights or the emissive set, weighted 1/p.
      if (hasL && hasE) {
        if (rand() < 0.5) {
          int i = min(int(rand() * float(uLightCount)), uLightCount - 1);
          Lin = lightAt(i, S) * float(uLightCount) * 2.0;
        } else {
          Lin = emissiveAt(S) * 2.0;
        }
      } else if (hasL) {
        int i = min(int(rand() * float(uLightCount)), uLightCount - 1);
        Lin = lightAt(i, S) * float(uLightCount);
      } else if (hasE) {
        Lin = emissiveAt(S);
      }
      vec3 c = Lin * local * segStep * exp(-opticalDepth);
      // per-step spike clamp — outliers decay only as 1/count in the EMA
      float sl = dot(c, vec3(0.299, 0.587, 0.114));
      if (sl > 2.0) c *= 2.0 / sl;
      sample_ += c;
    }
  }

  // --- temporal accumulation, reprojected through the surface point ---
  float count = 1.0;
  vec3 history = vec3(0.0);
  if (hit) {
    vec4 clip = uPrevViewProj * vec4(P, 1.0);
    if (clip.w > 0.0) {
      vec2 prevUv = (clip.xy / clip.w) * 0.5 + 0.5;
      if (prevUv.x >= 0.0 && prevUv.x <= 1.0 && prevUv.y >= 0.0 && prevUv.y <= 1.0) {
        vec4 h = texture(uPrevAccum, prevUv);
        count = clamp(h.a, 0.0, uMaxHistory) + 1.0;
        history = h.rgb;
      }
    }
  }
  vec3 blended = mix(history, sample_, 1.0 / count);
  if (any(isnan(blended)) || any(isinf(blended))) blended = vec3(0.0);
  outScatter = vec4(blended, count);
}
`;class u0{constructor(e,t){this.targetA=this._makeTarget(e,t),this.targetB=this._makeTarget(e,t),this.material=new zt({glslVersion:bn,vertexShader:l0,fragmentShader:c0,uniforms:{bvhStatic:{value:null},bvhDynamic:{value:null},uHasDynamic:{value:!1},uMaterialsTex:{value:null},uGWorldPos:{value:null},uPrevAccum:{value:null},uPrevViewProj:{value:new Qe},uMaxHistory:{value:48},uLightPosType:{value:[]},uLightColorRadius:{value:[]},uLightDirCone:{value:[]},uLightCount:{value:0},uEmissiveCount:{value:0},uCameraPos:{value:new P},uFrame:{value:0},uEps:{value:.001},uDensity:{value:.03},uMaxDist:{value:40},uFogZones:{value:new Array(fc*2).fill(0).map(()=>new ct)},uFogZoneCount:{value:0}},depthTest:!1,depthWrite:!1}),this._zoneVecs=this.material.uniforms.uFogZones.value,this.scene=new ai,this.camera=new qn(-1,1,1,-1,0,1),this.quad=new Je(new pn(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}_makeTarget(e,t){const n=new Qt(e,t,{minFilter:gt,magFilter:gt,format:vt,type:an,depthBuffer:!1,stencilBuffer:!1});return n.texture.generateMipmaps=!1,n}setCompiledScene(e){const t=this.material.uniforms;t.bvhStatic.value=e.staticBvhUniform,t.bvhDynamic.value=e.dynamicBvhUniform,t.uHasDynamic.value=e.hasDynamic,t.uMaterialsTex.value=e.materialsTex,t.uLightPosType.value=e.lightPosType,t.uLightColorRadius.value=e.lightColorRadius,t.uLightDirCone.value=e.lightDirCone,t.uLightCount.value=e.lightCount,t.uEmissiveCount.value=e.emissiveTriCount}clearHistory(e){const t=e.getRenderTarget();e.setClearColor(0,0);for(const n of[this.targetA,this.targetB])e.setRenderTarget(n),e.clear(!0,!1,!1);e.setRenderTarget(t)}setSize(e,t){this.targetA.setSize(e,t),this.targetB.setSize(e,t)}render(e,t,n,r,s,o,a,l,u){const c=this.material.uniforms;c.uGWorldPos.value=t.worldPos,c.uPrevAccum.value=this.targetB.texture,c.uPrevViewProj.value.copy(n),c.uCameraPos.value.copy(r),c.uFrame.value=s,c.uEps.value=o,c.uDensity.value=a,c.uMaxDist.value=l;const f=u&&u.length?Math.min(u.length,fc):0;for(let p=0;p<f;p++){const v=u[p];this._zoneVecs[p*2].set(v.min[0],v.min[1],v.min[2],v.density),this._zoneVecs[p*2+1].set(v.max[0],v.max[1],v.max[2],0)}c.uFogZoneCount.value=f,e.setRenderTarget(this.targetA),e.render(this.scene,this.camera),e.setRenderTarget(null);const h=this.targetA;return[this.targetA,this.targetB]=[this.targetB,this.targetA],h.texture}dispose(){this.targetA.dispose(),this.targetB.dispose(),this.material.dispose(),this.quad.geometry.dispose()}}const h0=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,hu=`
#define MAX_LIGHTS ${Dr}
#define PI 3.14159265358979

uniform sampler2D uGWorldPos;
uniform sampler2D uGNormalMetal;
uniform sampler2D uMaterialsTex;  // row 1: emissive tris, rows 2..65: blue noise
uniform vec4 uLightPosType[MAX_LIGHTS];
uniform vec4 uLightColorRadius[MAX_LIGHTS];
uniform vec4 uLightDirCone[MAX_LIGHTS]; // spot: direction.xyz + cos(outer)
uniform int uLightCount;
uniform int uEmissiveCount;
uniform float uFrame;
uniform vec3 uCameraPos;
uniform float uEps;

uint gSeed;
int gBnDim;
vec4 gBlueNoise;
uint pcgHash(uint s) {
  uint state = s * 747796405u + 2891336453u;
  uint word = ((state >> ((state >> 28u) + 4u)) ^ state) * 277803737u;
  return (word >> 22u) ^ word;
}
float rand() {
  if (gBnDim < 4) {
    float v = gBlueNoise[gBnDim];
    gBnDim++;
    return v;
  }
  gSeed = pcgHash(gSeed);
  return float(gSeed) * (1.0 / 4294967296.0);
}
vec4 fetchBlueNoise() {
  ivec2 p = ivec2(gl_FragCoord.xy) & 63;
  vec4 bn = texelFetch(uMaterialsTex, ivec2(p.x, 2 + p.y), 0);
  vec4 shift = fract(float(uFrame) * vec4(0.6180340, 0.7548777, 0.5698403, 0.8191725));
  return fract(bn + shift);
}

float luminance(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

// Unshadowed contribution of candidate (id, uv) at surface (P, N).
vec3 candidateContribution(float id, vec2 uv, vec3 P, vec3 N) {
  if (id < float(MAX_LIGHTS)) {
    int i = int(id);
    vec4 posType = uLightPosType[i];
    vec4 colRad = uLightColorRadius[i];
    if (posType.w < 0.5 || posType.w >= 1.5) {
      vec3 d = posType.xyz - P; // light CENTER: soft-radius jitter re-drawn at shading
      float dl = length(d);
      if (dl < 1e-5) return vec3(0.0);
      float NdotL = dot(N, d / dl);
      if (NdotL <= 0.0) return vec3(0.0);
      float cone = 1.0;
      if (posType.w >= 1.5) {
        // spot cone — MUST match RTLightingPass.spotFalloff for a consistent estimator
        vec4 dc = uLightDirCone[i];
        cone = smoothstep(dc.w, posType.w - 2.0, dot(dc.xyz, -d / dl));
        if (cone <= 0.0) return vec3(0.0);
      }
      return colRad.rgb * (cone * NdotL / (dl * dl));
    }
    float NdotL = dot(N, -posType.xyz);
    if (NdotL <= 0.0) return vec3(0.0);
    return colRad.rgb * NdotL;
  }
  int t = (int(id) - MAX_LIGHTS) * 4;
  vec4 t0 = texelFetch(uMaterialsTex, ivec2(t, 1), 0);
  vec4 t1 = texelFetch(uMaterialsTex, ivec2(t + 1, 1), 0);
  vec4 t2 = texelFetch(uMaterialsTex, ivec2(t + 2, 1), 0);
  vec4 t3 = texelFetch(uMaterialsTex, ivec2(t + 3, 1), 0);
  vec3 lp = t0.xyz + t1.xyz * uv.x + t2.xyz * uv.y;
  vec3 d = lp - P;
  float d2 = dot(d, d);
  float dist = sqrt(d2);
  if (dist < 1e-4) return vec3(0.0);
  vec3 wi = d / dist;
  float cosS = dot(N, wi);
  float cosL = abs(dot(t3.xyz, wi));
  if (cosS <= 0.0 || cosL < 1e-4) return vec3(0.0);
  // Uniform pick within the emissive set happens at candidate level, so the
  // per-triangle contribution uses area only (count folds into pick pdf).
  return vec3(t1.w, t2.w, t3.w) * (cosS * cosL * t0.w / max(d2, 1e-6));
}

// v3: reservoirs select TRIANGLES, not points. The selection target is the
// candidate's contribution at a FIXED proxy point (the centroid) — any fixed
// score keeps RIS consistent as long as shading divides by the same one. The
// actual surface point is re-drawn fresh every frame at shading, so soft
// area lighting keeps averaging instead of freezing onto one winning point.
// (Known approximation: a triangle whose centroid contributes zero but whose
// far corner doesn't can be under-selected at grazing setups.)
float phatOf(float id, vec3 P, vec3 N) {
  return luminance(candidateContribution(id, vec2(1.0 / 3.0), P, N));
}
`,dc=`
precision highp float;

${hu}

#define CANDIDATES 8

layout(location = 0) out vec4 outReservoir;

in vec2 vUv;

uniform sampler2D uPrevReservoir;
uniform sampler2D uPrevGWorldPos;
uniform mat4 uPrevViewProj;

void main() {
  vec4 wp = texture(uGWorldPos, vUv);
  if (wp.w < 0.5) {
    outReservoir = vec4(0.0);
    return;
  }
  vec3 P = wp.xyz;
  vec3 N = normalize(texture(uGNormalMetal, vUv).xyz);

  ivec2 px = ivec2(gl_FragCoord.xy);
  gSeed = uint(px.x) * 3079u + uint(px.y) * 9277u + uint(uFrame) * 26699u;
  gSeed = pcgHash(gSeed);
  gBlueNoise = fetchBlueNoise();
  gBnDim = 0;

  int S = uLightCount + uEmissiveCount; // uniform source pool
  if (S == 0) {
    outReservoir = vec4(0.0);
    return;
  }

  float rId = 0.0;
  float wSum = 0.0;
  float M = 0.0;
  for (int k = 0; k < CANDIDATES; k++) {
    int pick = min(int(rand() * float(S)), S - 1);
    float id = pick < uLightCount
      ? float(pick)
      : float(MAX_LIGHTS + (pick - uLightCount));
    // source pdf = 1/S -> RIS weight = p̂ * S
    float w = phatOf(id, P, N) * float(S);
    wSum += w;
    M += 1.0;
    if (w > 0.0 && rand() * wSum < w) { rId = id; }
  }

  // temporal reuse: previous reservoir as ONE candidate carrying its history
  vec4 clip = uPrevViewProj * vec4(P, 1.0);
  if (clip.w > 0.0) {
    vec2 prevUv = (clip.xy / clip.w) * 0.5 + 0.5;
    if (prevUv.x >= 0.0 && prevUv.x <= 1.0 && prevUv.y >= 0.0 && prevUv.y <= 1.0) {
      vec4 prevPos = texture(uPrevGWorldPos, prevUv);
      float tol = 0.005 * distance(P, uCameraPos) + 20.0 * uEps;
      if (prevPos.w > 0.5 && abs(dot(P - prevPos.xyz, N)) < tol) {
        vec4 h = texture(uPrevReservoir, prevUv);
        // Staleness cap; ALSO keeps total M within the 6 bits the encoding
        // stores (8 fresh + 40 history < 64).
        float hM = min(mod(h.r, 64.0), 40.0);
        float hId = floor(h.r / 64.0);
        if (hM > 0.0 && h.a > 0.0) {
          // RIS weight = p̂_now · W_prev · M_prev; with p̂_prev ≈ p̂_now on a
          // validated surface this reduces to (wSum/M)·M.
          float hPhat = phatOf(hId, P, N);
          float w = hPhat > 0.0 ? (h.a / max(mod(h.r, 64.0), 1.0)) * hM : 0.0;
          wSum += w;
          M += hM;
          if (w > 0.0 && rand() * wSum < w) { rId = hId; }
        }
      }
    }
  }

  outReservoir = vec4(rId * 64.0 + min(M, 63.0), 0.0, 0.0, wSum);
}
`,f0=`
precision highp float;

${hu}

#define NEIGHBORS 4

layout(location = 0) out vec4 outReservoir;

in vec2 vUv;

uniform sampler2D uReservoirIn;
uniform vec2 uTexelSize;

void main() {
  vec4 wp = texture(uGWorldPos, vUv);
  if (wp.w < 0.5) {
    outReservoir = vec4(0.0);
    return;
  }
  vec3 P = wp.xyz;
  vec3 N = normalize(texture(uGNormalMetal, vUv).xyz);

  ivec2 px = ivec2(gl_FragCoord.xy);
  gSeed = uint(px.x) * 5417u + uint(px.y) * 7907u + uint(uFrame) * 15731u;
  gSeed = pcgHash(gSeed);
  gBlueNoise = fetchBlueNoise();
  gBnDim = 3; // decorrelate from the temporal stage's blue-noise dims

  vec4 c = texture(uReservoirIn, vUv);
  float rId = floor(c.r / 64.0);
  float M = mod(c.r, 64.0);
  float wSum = c.a;

  float tol = 0.005 * distance(P, uCameraPos) + 20.0 * uEps;
  for (int k = 0; k < NEIGHBORS; k++) {
    float a = (float(k) + rand()) * (2.0 * PI / float(NEIGHBORS));
    float rad = 2.0 + rand() * 8.0; // taps within ~10 lighting-res texels
    vec2 nUv = vUv + vec2(cos(a), sin(a)) * rad * uTexelSize;
    if (nUv.x < 0.0 || nUv.x > 1.0 || nUv.y < 0.0 || nUv.y > 1.0) continue;

    // geometric validation: same plane + similar orientation, or the
    // neighbor's chosen light is meaningless here
    vec4 nwp = texture(uGWorldPos, nUv);
    if (nwp.w < 0.5) continue;
    if (abs(dot(nwp.xyz - P, N)) > tol) continue;
    vec3 nN = normalize(texture(uGNormalMetal, nUv).xyz);
    if (dot(N, nN) < 0.9) continue;

    vec4 h = texture(uReservoirIn, nUv);
    float hM = mod(h.r, 64.0);
    if (hM < 1.0 || h.a <= 0.0) continue;
    float hId = floor(h.r / 64.0);
    // neighbor reservoir as one candidate, re-weighted at THIS surface
    float hPhat = phatOf(hId, P, N);
    float w = hPhat > 0.0 ? (h.a / hM) * min(hM, 40.0) : 0.0;
    wSum += w;
    M += min(hM, 40.0);
    if (w > 0.0 && rand() * wSum < w) { rId = hId; }
  }

  float phat = phatOf(rId, P, N);
  float W = (M > 0.0 && phat > 0.0) ? wSum / (M * phat) : 0.0;
  outReservoir = vec4(rId, 0.0, 0.0, W);
}
`;class d0{constructor(e,t){this.targetA=this._makeTarget(e,t),this.targetB=this._makeTarget(e,t),this.spatialTarget=this._makeTarget(e,t);const n=r=>new zt({glslVersion:bn,vertexShader:h0,fragmentShader:r,uniforms:{uGWorldPos:{value:null},uGNormalMetal:{value:null},uMaterialsTex:{value:null},uLightPosType:{value:[]},uLightColorRadius:{value:[]},uLightDirCone:{value:[]},uLightCount:{value:0},uEmissiveCount:{value:0},uFrame:{value:0},uCameraPos:{value:new P},uEps:{value:.001},...r===dc?{uPrevReservoir:{value:null},uPrevGWorldPos:{value:null},uPrevViewProj:{value:new Qe}}:{uReservoirIn:{value:null},uTexelSize:{value:new Oe(1/e,1/t)}}},depthTest:!1,depthWrite:!1});this.material=n(dc),this.spatialMaterial=n(f0),this.scene=new ai,this.camera=new qn(-1,1,1,-1,0,1),this.quad=new Je(new pn(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}_makeTarget(e,t){const n=new Qt(e,t,{minFilter:it,magFilter:it,format:vt,type:Ot,depthBuffer:!1,stencilBuffer:!1});return n.texture.generateMipmaps=!1,n}setCompiledScene(e){for(const t of[this.material,this.spatialMaterial]){const n=t.uniforms;n.uMaterialsTex.value=e.materialsTex,n.uLightPosType.value=e.lightPosType,n.uLightColorRadius.value=e.lightColorRadius,n.uLightDirCone.value=e.lightDirCone,n.uLightCount.value=e.lightCount,n.uEmissiveCount.value=e.emissiveTriCount}}setEmissiveCount(e){this.material.uniforms.uEmissiveCount.value=e,this.spatialMaterial.uniforms.uEmissiveCount.value=e}clearHistory(e){const t=e.getRenderTarget();e.setClearColor(0,0);for(const n of[this.targetA,this.targetB,this.spatialTarget])e.setRenderTarget(n),e.clear(!0,!1,!1);e.setRenderTarget(t)}setSize(e,t){this.targetA.setSize(e,t),this.targetB.setSize(e,t),this.spatialTarget.setSize(e,t),this.spatialMaterial.uniforms.uTexelSize.value.set(1/e,1/t)}render(e,t,n,r,s,o){for(const l of[this.material,this.spatialMaterial]){const u=l.uniforms;u.uGWorldPos.value=t.worldPos,u.uGNormalMetal.value=t.normalMetal,u.uFrame.value=s,u.uCameraPos.value.copy(r),u.uEps.value=o}const a=this.material.uniforms;return a.uPrevReservoir.value=this.targetB.texture,a.uPrevGWorldPos.value=t.prevWorldPos,a.uPrevViewProj.value.copy(n),this.quad.material=this.material,e.setRenderTarget(this.targetA),e.render(this.scene,this.camera),this.spatialMaterial.uniforms.uReservoirIn.value=this.targetA.texture,this.quad.material=this.spatialMaterial,e.setRenderTarget(this.spatialTarget),e.render(this.scene,this.camera),e.setRenderTarget(null),[this.targetA,this.targetB]=[this.targetB,this.targetA],this.spatialTarget.texture}dispose(){this.targetA.dispose(),this.targetB.dispose(),this.spatialTarget.dispose(),this.material.dispose(),this.spatialMaterial.dispose(),this.quad.geometry.dispose()}}const p0=`
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,m0=`
precision highp float;
layout(location = 0) out vec4 outColor;
in vec2 vUv;
uniform sampler2D uTex;
uniform float uCountClamp;
void main() {
  vec4 c = texture(uTex, vUv);
  if (uCountClamp >= 0.0) c.a = min(c.a, uCountClamp);
  outColor = c;
}
`;class g0{constructor(){this.material=new zt({glslVersion:bn,vertexShader:p0,fragmentShader:m0,uniforms:{uTex:{value:null},uCountClamp:{value:-1}},depthTest:!1,depthWrite:!1}),this.scene=new ai,this.camera=new qn(-1,1,1,-1,0,1),this.quad=new Je(new pn(2,2),this.material),this.quad.frustumCulled=!1,this.scene.add(this.quad)}blit(e,t,n,r=-1){this.material.uniforms.uTex.value=t,this.material.uniforms.uCountClamp.value=r;const s=e.getRenderTarget();e.setRenderTarget(n),e.render(this.scene,this.camera),e.setRenderTarget(s)}dispose(){this.material.dispose(),this.quad.geometry.dispose()}}function pc(i,e){let t=1,n=0,r=i;for(;r>0;)t/=e,n+=t*(r%e),r=Math.floor(r/e);return n}class tn{static isSupported(e){try{const t=e.getContext();if(typeof WebGL2RenderingContext>"u"||!(t instanceof WebGL2RenderingContext)||!t.getExtension("EXT_color_buffer_float"))return!1;const n=t.getExtension("WEBGL_debug_renderer_info");if(n){const r=String(t.getParameter(n.UNMASKED_RENDERER_WEBGL)||"");if(/swiftshader|llvmpipe|software/i.test(r))return!1}return!0}catch{return!1}}static detectTier(e){if(e&&!tn.isSupported(e))return"none";const t=typeof navigator<"u"?navigator:{};return(t.maxTouchPoints??0)>1||/Android|iPhone|iPad|Mobile/i.test(t.userAgent||"")?"mid":"high"}static recommendedOptions(e){return e==="none"?{}:e==="mid"?{renderScale:.375,...tn._qualityFor(.375),adaptiveQuality:!0}:{renderScale:.5,denoiseIterations:3,adaptiveQuality:!0}}static _mixedMrtSupported(e){try{const t=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,t);const n=a=>{const l=e.createTexture();return e.bindTexture(e.TEXTURE_2D,l),e.texStorage2D(e.TEXTURE_2D,1,a,4,4),l},r=n(e.RGBA16F),s=n(e.RGBA32F);e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT1,e.TEXTURE_2D,s,0),e.drawBuffers([e.COLOR_ATTACHMENT0,e.COLOR_ATTACHMENT1]);const o=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.deleteFramebuffer(t),e.deleteTexture(r),e.deleteTexture(s),e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),o}catch{return!1}}static _qualityFor(e){return{denoiseIterations:e<=.3?5:e<=.45?4:3,stochasticLights:e<=.55}}static CANVAS_LEVELS=[1,.85,.75,.62,.5];static HISTORY_CARRY_FRAMES=8;constructor(e,t={}){if(this.renderer=e,this.supported=tn.isSupported(e),!this.supported){console.warn("three-realtime-rt: ray tracing unavailable on this system (needs WebGL2 + EXT_color_buffer_float on a hardware GPU). Falling back to plain three.js rendering."),this.compiled=null,this.frame=0;return}const n=e.getSize(new Oe),r=e.getPixelRatio();this._width=Math.floor(n.x*r),this._height=Math.floor(n.y*r),this._renderScale=t.renderScale??.5;const s=tn._mixedMrtSupported(e.getContext());s||console.info("three-realtime-rt: mixed fp16/fp32 G-buffer not supported here — using fp32 for all targets."),this.gbuffer=new jv(this._width,this._height,{mixedPrecision:s}),this.rtPass=new Qv(this._scaledW,this._scaledH),this.denoisePass=new t0(this._scaledW,this._scaledH),this.composite=new r0,this.taaPass=new o0(this._width,this._height),this._sceneColor=this._makeColorTarget(this._width,this._height),this._copyPass=new g0,this.compiled=null,this.frame=0,this.outputMode=0,this.envColor=t.envColor??new Ce(.03,.04,.06),this.envIntensity=t.envIntensity??1,this.eps=t.eps??.001,this._autoEps=t.eps==null,this.temporalReprojection=t.temporalReprojection??!0,this.maxHistory=t.maxHistory??128,this.fireflyClamp=t.fireflyClamp??4,this.gi=t.gi??!0,this.giHalfRate=t.giHalfRate??!1,this.emissiveNEE=t.emissiveNEE??!0,this.reflections=t.reflections??!0,this.refraction=t.refraction??!0,this.ior=t.ior??1.5,this.stochasticLights=t.stochasticLights??!1,this.adaptiveQuality=t.adaptiveQuality??!1,this.targetFps=t.targetFps??55,this.overloadProtection=t.overloadProtection??!0,this._overloadStrikes=0,this._obLastT=null,this._qEma=null,this._qLastT=null,this._qLastChange=0,this._qLastDir=0,this._qOscillating=!1,this.canvasScaleHook=t.canvasScaleHook??null,this._canvasLevelIdx=0,this.denoise=t.denoise??!0,this.denoiseIterations=t.denoiseIterations??3,this.taa=t.taa??!0,this.taaBlend=t.taaBlend??.1,this.volumetric={enabled:t.volumetric?.enabled??!1,density:t.volumetric?.density??.015,maxDist:t.volumetric?.maxDist??40,zones:t.volumetric?.zones??[]},this.volumetricPass=new u0(this._volW,this._volH),this.restir=t.restir??!0,this.restirPass=new d0(this._scaledW,this._scaledH),this.fog={enabled:t.fog?.enabled??!1,color:t.fog?.color??new Ce(.5,.6,.7),density:t.fog?.density??.05},this.sky={enabled:t.sky?.enabled??!1,sunDir:t.sky?.sunDir??new P(.4,.8,.45).normalize(),sunColor:t.sky?.sunColor??new Ce(1,.9,.75),zenith:t.sky?.zenith??new Ce(.18,.34,.62),horizon:t.sky?.horizon??new Ce(.7,.8,.9),intensity:t.sky?.intensity??1},this._invViewProj=new Qe,this._jitterIndex=0,this._jitteredViewProj=new Qe,this._jitterUv=new Oe,this._prevJitterUv=new Oe,this._prevViewProj=new Qe,this._camWorldPos=new P,this._needsClear=!0,this.overloadProtection&&this._width*this._height>32e5&&this._renderScale>.375&&(console.warn(`three-realtime-rt: ${(this._width*this._height/1e6).toFixed(1)}M-pixel drawing buffer — clamping lighting renderScale to 0.375 (overloadProtection). Raise renderScale manually, enable adaptiveQuality, or pass overloadProtection: false to opt out.`),this._renderScale=.375)}_overloadBrake(){if(typeof document<"u"&&document.visibilityState==="hidden"){this._obLastT=null;return}const e=performance.now(),t=this._obLastT==null?null:e-this._obLastT;this._obLastT=e,t!=null&&(t>400&&t<1e4?this._overloadStrikes++:t<200&&(this._overloadStrikes=0),!(this._overloadStrikes<3)&&(this._overloadStrikes=0,this._renderScale>.2?(this.denoiseIterations=Math.min(this.denoiseIterations,3),this.stochasticLights=!0,this.renderScale=Math.max(.2,Math.round(this._renderScale*.5*20)/20),console.warn(`three-realtime-rt: frames exceeding 400ms — overload brake cut lighting to ${Math.round(this._renderScale*100)}%. Lower your canvas resolution or enable adaptiveQuality.`)):(this.volumetric.enabled||this.reflections||this.refraction)&&(this.volumetric.enabled=!1,this.reflections=!1,this.refraction=!1,console.warn("three-realtime-rt: still overloaded at minimum lighting scale — disabling volumetric/reflections/refraction."))))}_makeColorTarget(e,t){const n=new Qt(e,t,{minFilter:gt,magFilter:gt,format:vt,type:an,depthBuffer:!1,stencilBuffer:!1});return n.texture.generateMipmaps=!1,n}compileScene(e,t){return this.supported?(this.compiled&&this.compiled.dispose(),this.compiled=qv(e,t),this._autoEps&&(this.eps=Math.min(Math.max(.001,this.compiled.sceneDiagonal*.0012),.05)),this.rtPass.setCompiledScene(this.compiled),this.volumetricPass.setCompiledScene(this.compiled),this.restirPass.setCompiledScene(this.compiled),this.resetAccumulation(),this.compiled):null}updateDynamic(){this.compiled&&this.compiled.updateDynamic()}updateLights(e){!this.supported||!this.compiled||(lu(e,this.compiled),this.rtPass.setCompiledScene(this.compiled),this.volumetricPass.setCompiledScene(this.compiled),this.restirPass.setCompiledScene(this.compiled))}resetAccumulation(){this.supported&&(this._needsClear=!0,this.taaPass&&this.taaPass.reset())}get _scaledW(){return Math.max(1,Math.floor(this._width*this._renderScale))}get _scaledH(){return Math.max(1,Math.floor(this._height*this._renderScale))}get _volW(){return Math.max(1,this._width>>2)}get _volH(){return Math.max(1,this._height>>2)}get renderScale(){return this._renderScale}set renderScale(e){this._renderScale=e,this.setSize(this._width,this._height)}setSize(e,t){if(!this.supported)return;this._width=Math.floor(e),this._height=Math.floor(t);const n=this._scaledW,r=this._scaledH,s=this.rtPass.targetA.width!==n||this.rtPass.targetA.height!==r,o=this.taaPass.targetA.width!==this._width||this.taaPass.targetA.height!==this._height;s&&(this.rtPass.resizeCarry(this.renderer,this._copyPass,n,r,tn.HISTORY_CARRY_FRAMES),this.denoisePass.setSize(n,r),this.restirPass.setSize(n,r),this.restirPass.clearHistory(this.renderer)),o&&(this.gbuffer.setSize(this._width,this._height),this.volumetricPass.setSize(this._volW,this._volH),this.volumetricPass.clearHistory(this.renderer),this.taaPass.resizeCarry(this.renderer,this._copyPass,this._width,this._height),this._sceneColor.setSize(this._width,this._height))}_adaptQuality(){const e=performance.now(),t=this._qLastT==null?null:e-this._qLastT;if(this._qLastT=e,t==null||t>100)return;this._qEma=this._qEma==null?t:this._qEma*.9+t*.1;const n=this._qOscillating?5e3:2e3;if(e-this._qLastChange<n)return;const r=this._qEma/(1e3/this.targetFps),s=this._qOscillating?.6:.8,o=this._qOscillating?1.24:1.12;if(r<o&&r>s)return;let a=this._renderScale*Math.pow(1/r,.35);if(a=Math.round(Math.min(1,Math.max(.2,a))*20)/20,r<s&&this.canvasScaleHook&&this._canvasLevelIdx>0){this._canvasLevelIdx--,this.canvasScaleHook(tn.CANVAS_LEVELS[this._canvasLevelIdx]),this._recordChange(1,e),this._qEma=null,console.info(`three-realtime-rt: adaptive quality → ${Math.round(tn.CANVAS_LEVELS[this._canvasLevelIdx]*100)}% canvas`);return}if(r>o&&a<=.2&&this._renderScale<=.25&&this.canvasScaleHook&&this._canvasLevelIdx<tn.CANVAS_LEVELS.length-1){this._canvasLevelIdx++,this.canvasScaleHook(tn.CANVAS_LEVELS[this._canvasLevelIdx]),this._recordChange(-1,e),this._qEma=null,console.info(`three-realtime-rt: adaptive quality → ${Math.round(tn.CANVAS_LEVELS[this._canvasLevelIdx]*100)}% canvas`);return}if(Math.abs(a-this._renderScale)<.045)return;const l=Math.sign(a-this._renderScale),u=tn._qualityFor(a);this.denoiseIterations=u.denoiseIterations,this.stochasticLights=u.stochasticLights,this.renderScale=a,this._recordChange(l,e),this._qEma=null,console.info(`three-realtime-rt: adaptive quality → ${Math.round(a*100)}% lighting, ${u.denoiseIterations} denoise passes, ${u.stochasticLights?"stochastic":"full"} direct light`)}_recordChange(e,t){this._qOscillating=e!==0&&this._qLastDir!==0&&e!==this._qLastDir,e!==0&&(this._qLastDir=e),this._qLastChange=t}render(e,t){if(!this.supported){this.renderer.render(e,t);return}this.adaptiveQuality&&this._adaptQuality(),this.overloadProtection&&this._overloadBrake(),this.compiled||this.compileScene(e),this.frame+=1,t.updateMatrixWorld();const n=t.projectionMatrix,r=n.elements[8],s=n.elements[9];if(this.taa&&this.outputMode===0){this._jitterIndex=(this._jitterIndex+1)%16;const v=(pc(this._jitterIndex+1,2)-.5)*2/this._width,g=(pc(this._jitterIndex+1,3)-.5)*2/this._height;n.elements[8]+=v,n.elements[9]+=g,this._jitterUv.set(-v*.5,-g*.5)}else this._jitterUv.set(0,0);this._jitteredViewProj.copy(n).multiply(t.matrixWorldInverse);const o=this.renderer.autoClear;this.renderer.autoClear=!1,this._needsClear&&(this.rtPass.clearHistory(this.renderer),this.volumetricPass.clearHistory(this.renderer),this.restirPass.clearHistory(this.renderer),this._needsClear=!1),this.gbuffer.render(this.renderer,e,t);const a=this.rtPass.material.uniforms;a.uEnvColor.value.copy(this.envColor),a.uEnvIntensity.value=this.envIntensity,a.uEps.value=this.eps,a.uTemporalReprojection.value=this.temporalReprojection,a.uMaxHistory.value=this.maxHistory,a.uFireflyClamp.value=this.fireflyClamp>0?this.fireflyClamp:1e6,a.uGIEnabled.value=this.gi,a.uGIHalfRate.value=this.giHalfRate,a.uEmissiveCount.value=this.emissiveNEE?this.compiled.emissiveTriCount:0,a.uReflEnabled.value=this.reflections,a.uRefrEnabled.value=this.refraction,a.uIor.value=this.ior,a.uLightStochastic.value=this.stochasticLights,a.uSkyEnabled.value=this.sky.enabled,a.uSunDir.value.copy(this.sky.sunDir),a.uSunColor.value.copy(this.sky.sunColor),a.uSkyZenith.value.copy(this.sky.zenith),a.uSkyHorizon.value.copy(this.sky.horizon),a.uSkyIntensity.value=this.sky.intensity,a.uPrevViewProj.value.copy(this._prevViewProj),a.uViewProj.value.copy(this._jitteredViewProj),a.uCameraPos.value.copy(t.getWorldPosition(this._camWorldPos));let l=null;this.restir&&(this.restirPass.setEmissiveCount(this.emissiveNEE?this.compiled.emissiveTriCount:0),l=this.restirPass.render(this.renderer,this.gbuffer,this._prevViewProj,this._camWorldPos,this.frame,this.eps));let u=this.rtPass.render(this.renderer,this.gbuffer,this.frame,l);this.denoise&&this.denoiseIterations>0&&(u=this.denoisePass.render(this.renderer,u,this.gbuffer,this._camWorldPos,this.eps,this.denoiseIterations));let c=null;const f=this.volumetric.zones&&this.volumetric.zones.length>0;this.volumetric.enabled&&this.outputMode===0&&(this.volumetric.density>0||f)&&(c=this.volumetricPass.render(this.renderer,this.gbuffer,this._prevViewProj,this._camWorldPos,this.frame,this.eps,this.volumetric.density,this.volumetric.maxDist,this.volumetric.zones));const h=this.taa&&this.outputMode===0,p=this.composite.material.uniforms;p.uOutputMode.value=this.outputMode,p.uUpsample.value=this._renderScale<1,p.uIrrTexelSize.value.set(1/this._scaledW,1/this._scaledH),p.uCameraPos.value.copy(this._camWorldPos),p.uFogEnabled.value=this.fog.enabled,p.uFogColor.value.copy(this.fog.color),p.uFogDensity.value=this.fog.density,p.uSkyEnabled.value=this.sky.enabled,p.uInvViewProj.value.copy(this._invViewProj.copy(this._jitteredViewProj).invert()),p.uSunDir.value.copy(this.sky.sunDir),p.uSunColor.value.copy(this.sky.sunColor),p.uSkyZenith.value.copy(this.sky.zenith),p.uSkyHorizon.value.copy(this.sky.horizon),p.uSkyIntensity.value=this.sky.intensity,p.uVolumetric.value=c,p.uVolEnabled.value=c!==null,p.uVolTexelSize.value.set(1/this._volW,1/this._volH),this.composite.render(this.renderer,u,this.gbuffer,e.background,h?this._sceneColor:null),h?this.taaPass.render(this.renderer,this._sceneColor.texture,this.gbuffer,this._prevViewProj,this._jitterUv,this._prevJitterUv,this.taaBlend):this.taa&&this.taaPass.reset(),this.renderer.autoClear=o,n.elements[8]=r,n.elements[9]=s,this._prevViewProj.copy(this._jitteredViewProj),this._prevJitterUv.copy(this._jitterUv)}dispose(){this.supported&&(this.gbuffer.dispose(),this.rtPass.dispose(),this.denoisePass.dispose(),this.composite.dispose(),this.taaPass.dispose(),this.volumetricPass.dispose(),this.restirPass.dispose(),this._sceneColor.dispose(),this._copyPass.dispose(),this.compiled&&this.compiled.dispose())}}function v0(){const i=new ai;i.background=new Ce(197639);const e={x:12,z:8,wallH:4,t:.4},t=new jt(50,1.6,.1,120);t.position.set(-9,10,8);const n=new Ft({color:2764083,roughness:.9,metalness:.05}),r=new Ft({color:2304048,roughness:.95}),s=new Ft({color:3814700,roughness:.85}),o=new Ft({color:3488322,roughness:.7}),a=new Ft({color:4869719,roughness:.45,metalness:.1}),l=[],u=[],c=[],f=new Je(new Lt(e.x*2+1,.4,e.z*2+1),n);f.position.y=-.2,i.add(f),c.push(f);function h(J,ce,me,Me,Le,qe){const $e=new Je(new Lt(J,ce,me),r);return $e.position.set(Me,Le,qe),i.add($e),c.push($e),l.push({center:new P(Me,Le,qe),halfExtents:{x:J/2,z:me/2},rotationY:0}),$e}const p=e.wallH/2,v=10,g=3.6,m=-e.z-.3,d=(e.x*2+1)/2,x=v-g/2,_=v+g/2;h(x+d,e.wallH,e.t,(-d+x)/2,p,m),h(d-_,e.wallH,e.t,(_+d)/2,p,m),h(e.x*2+1,e.wallH,e.t,0,p,e.z+.3),h(e.t,e.wallH,e.z*2+1,-e.x-.3,p,0),h(e.t,e.wallH,e.z*2+1,e.x+.3,p,0);function y(J,ce,me,Me,Le,qe=s,$e=0){const ot=new Je(new Lt(J,ce,me),qe);return ot.position.set(Me,ce/2,Le),ot.rotation.y=$e,i.add(ot),c.push(ot),l.push({center:new P(Me,ce/2,Le),halfExtents:{x:J/2,z:me/2},rotationY:$e}),ot}function w(J,ce,me,Me,Le=o){const qe=new Je(new _i(J,J,ce,20),Le);return qe.position.set(me,ce/2,Me),i.add(qe),c.push(qe),u.push({center:new P(me,ce/2,Me),radius:J}),qe}function T(J,ce){w(.9,1,J,ce,o);const me=new Je(new _i(.35,.5,1.8,16),a);return me.position.set(J,1.9,ce),i.add(me),c.push(me),me}y(2.2,2,2.2,-6.5,3.6),y(2.6,2.6,2,-7.7,4.8,s,.05),y(1.6,1.4,3,-8.5,-1.5,s,.3),y(2.6,1.2,1.6,-3,5),y(1.8,2.4,1.8,-1,-.5,s,.6),y(3.4,1.7,1.2,1.2,1.3,s,Math.PI/4.9),y(3,1.6,1.4,2,3.5,s,-.2),y(2,2.2,2,5,-1),y(1.4,1.4,2.4,7.5,2.5,s,.4),y(2.4,1.8,1.6,8.5,-4.5),w(.7,3.2,-4.5,-4.5),w(.6,2.6,3.5,-4.5),w(.7,3,9.5,4.5);const b=T(0,1.5),D=new P(-10.5,.35,6),M=new Sn(11519200,4.5,60);M.position.set(0,9,0),M.userData.rtRadius=.9,i.add(M);const E=new Sn(8427712,2.4,50);E.position.set(-8,8,6),E.userData.rtRadius=.8,i.add(E);const U=new Sn(8427712,2,50);U.position.set(8,8,-6),U.userData.rtRadius=.8,i.add(U);function L(J,ce){const me=new bg(J,ce,22,.45,.3);me.position.y=3.5,me.userData.rtRadius=.15,i.add(me),i.add(me.target);const Me=new Je(new Vs(.18,16,12),new Ft({color:0,emissive:J,emissiveIntensity:5}));return Me.userData.rtExclude=!0,i.add(Me),{l:me,fixture:Me}}const O=16765850,C=16732080,{l:N,fixture:B}=L(O,26),{l:q,fixture:Y}=L(O,26),{l:j,fixture:ee}=L(C,26),ae=3;function ie(J,ce,me,Me,Le,qe,$e){J.position.set(me,Me,Le),ce.position.set(me,Me,Le);const ot=Math.hypot(qe,$e);ot>1e-4?(qe/=ot,$e/=ot):(qe=0,$e=0),J.target.position.set(me+qe*ae,0,Le+$e*ae)}const W=.05,te=[{light:N,fixture:B,range:8,patrol(J){const ce=Ks=>-.9+Math.sin(Ks*.3)*1.15,Me=Ks=>{const bo=ce(Ks);return[-3.5+Math.cos(bo)*7.5,Math.sin(bo)*7.5*.7]},[Le,qe]=Me(J),[$e,ot]=Me(J+W);ie(N,B,Le,3.6,qe,$e-Le,ot-qe)}},{light:q,fixture:Y,range:8,patrol(J){const ce=$e=>[6.5,Math.sin($e*.38)*6],[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(q,Y,me,3.5,Me,Le-me,qe-Me)}},{light:j,fixture:ee,range:8,patrol(J){const ce=$e=>{const ot=$e*.42;return[Math.cos(ot)*4.5,1.5+Math.sin(ot)*4.5]},[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(j,ee,me,3.4,Me,Le-me,qe-Me)}}];te.forEach(J=>J.patrol(0));const he=26,Te=m,Ee=m-he,Pe=(Te+Ee)/2,Ne=3.6,Ae=new Je(new Lt(Ne,.4,he),o);Ae.position.set(v,-.2,Pe),i.add(Ae),c.push(Ae);function je(J){const ce=new Je(new Lt(.35,.6,he),o);ce.position.set(J,.3,Pe),i.add(ce),c.push(ce),l.push({center:new P(J,.3,Pe),halfExtents:{x:.175,z:he/2},rotationY:0})}je(v-Ne/2),je(v+Ne/2);const G=[],dt=3;function X(J,ce){const me=new Sn(16757611,dt,6);me.position.set(J,.85,ce),me.userData.rtRadius=.06,i.add(me);const Me=new Je(new _i(.05,.09,.28,8),new Ft({color:1313282,emissive:16756832,emissiveIntensity:6}));Me.position.set(J,.55,ce),Me.userData.rtExclude=!0,i.add(Me),G.push({light:me,base:dt,marker:Me})}const re=v-Ne/2+.35,se=v+Ne/2-.35;[-10.5,-14,-17.5,-21,-24.5,-28,-31.5].forEach((J,ce)=>{X(ce%2===0?re:se,J)});const ze=new Ft({color:1316637,roughness:.95}),ge={L:4,R:16},A=0,S=-22,z=A-S,$=(A+S)/2;function K(J,ce,me,Me){const Le=new Je(new Lt(J,z,ce),ze);Le.position.set(me,$,Me),i.add(Le),c.push(Le)}K(1.2,he+1,ge.L,Pe),K(1.2,he+1,ge.R,Pe),K(ge.R-ge.L+1.2,1.2,(ge.L+ge.R)/2,Te-.5),K(ge.R-ge.L+1.2,1.2,(ge.L+ge.R)/2,Ee+.5);const ne=[],Se=.34,le=new pn(Se,Se),ve=[-12,-18,-24,-30],xe=[-2,-6,-10,-14,-18];function De(J,ce,me,Me,Le){const qe=9*Math.pow(1-Le,1.5)+.7,$e=new Ce().setHSL(.075-.02*Le,.95,.5-.12*Le),ot=new Je(le,new Ft({color:0,emissive:$e,emissiveIntensity:qe,side:cn}));ot.position.set(J,ce,me),ot.rotation.y=Me>0?Math.PI/2:-Math.PI/2,i.add(ot),ne.push(ot)}const Q=xe[0],Ke=xe[xe.length-1];for(const J of ve)for(const ce of xe){const me=(ce-Q)/(Ke-Q);De(ge.L+.62,ce,J,1,me),De(ge.R-.62,ce,J,-1,me)}const Z=v,we=Ee,ye=18,fe=we-ye,Fe=(we+fe)/2,He=10.5,at=new Je(new Lt(He*2,.4,ye+.4),n);at.position.set(Z,-.2,Fe),i.add(at),c.push(at);const ke=e.wallH/2,oe=Z-g/2,I=Z+g/2;h(oe-(Z-He),e.wallH,e.t,(Z-He+oe)/2,ke,we),h(Z+He-I,e.wallH,e.t,(I+(Z+He))/2,ke,we),h(oe-(Z-He),e.wallH,e.t,(Z-He+oe)/2,ke,fe),h(Z+He-I,e.wallH,e.t,(I+(Z+He))/2,ke,fe),h(e.t,e.wallH,ye,Z-He,ke,Fe),h(e.t,e.wallH,ye,Z+He,ke,Fe),y(2.6,2,2.2,Z,-38.5),y(3,1.6,1.2,6.5,-40,s,Math.PI/4.5),y(3,1.6,1.2,13.5,-46,s,Math.PI/4.5),y(2,1.8,2,3.5,-44,s,.2),y(1.8,2.2,1.8,5,-48.5),y(2,1.8,2,16.5,-44,s,-.2),y(1.8,2.2,1.8,15,-48.5),w(.7,3,Z,-45);const{l:de,fixture:pe}=L(O,26),{l:Ie,fixture:Re}=L(C,26);[{light:de,fixture:pe,range:8,patrol(J){const ce=$e=>[Z+Math.sin($e*.5)*6.5,-41],[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(de,pe,me,3.5,Me,Le-me,qe-Me)}},{light:Ie,fixture:Re,range:8,patrol(J){const ce=$e=>{const ot=$e*.5;return[Z+Math.cos(ot)*4.5,-47+Math.sin(ot)*3.5]},[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(Ie,Re,me,3.4,Me,Le-me,qe-Me)}}].forEach(J=>{te.push(J),J.patrol(0)});const et=new Sn(15778954,3.4,46);et.position.set(Z,8,Fe),et.userData.rtRadius=.85,i.add(et);const _t=Z-g/2,At=Z+g/2;function tt(J,ce){h(_t-(Z-ce),e.wallH,e.t,(Z-ce+_t)/2,p,J),h(Z+ce-At,e.wallH,e.t,(At+(Z+ce))/2,p,J)}function yt(J,ce,me,Me){const Le=new Je(new Lt(me*2,.4,Me+.4),n);Le.position.set(J,-.2,ce),i.add(Le),c.push(Le)}const qt=fe,Ln=10,hr=qt-Ln,It=(qt+hr)/2,gn=5;yt(Z,It,gn,Ln),h(e.t,e.wallH,Ln,Z-gn,p,It),h(e.t,e.wallH,Ln,Z+gn,p,It);const oi=new Ft({color:10134704,roughness:.08,metalness:.95}),Si=new Je(new Lt(3.2,.06,Ln-1.2),oi);Si.position.set(Z,.04,It),i.add(Si),c.push(Si);function Ei(J,ce,me,Me,Le){const qe=new Je(new Lt(Me,Le,.12),oi);qe.position.set(J,Le/2+.2,ce),qe.rotation.y=me,i.add(qe),c.push(qe)}Ei(Z-gn+.3,It-2.4,.18,3.4,3),Ei(Z-gn+.3,It+2.4,-.18,3.4,3),Ei(Z+gn-.3,It,0,3.6,3);function Fr(J,ce,me,Me){const Le=new Je(new pn(Ln-1.5,.14),new Ft({color:0,emissive:Me,emissiveIntensity:4,side:cn}));Le.position.set(J,.55,ce),Le.rotation.y=me>0?Math.PI/2:-Math.PI/2,i.add(Le)}Fr(Z-gn+.12,It,1,3399888),Fr(Z+gn-.12,It,-1,16756832);const Ti=new Sn(16765088,11,22);Ti.position.set(Z-2.2,3.4,It-2.5),Ti.userData.rtRadius=.25,i.add(Ti);const bi=new Sn(9429216,9.5,22);bi.position.set(Z+2.2,3.4,It+2.5),bi.userData.rtRadius=.25,i.add(bi);const R=hr,F=18,k=R-F,V=(R+k)/2,H=He;yt(Z,V,H,F),tt(R,H),h(e.t,e.wallH,F,Z-H,p,V),h(e.t,e.wallH,F,Z+H,p,V);const _e=.06,be=[{min:[8,-1,-66],max:[12,3,-63]},{min:[3,-1,-72],max:[7,3,-69]},{min:[8,-1,-78],max:[12,3,-75]}],Ue=new Ft({color:1323066,roughness:.8,metalness:0});for(const J of be){const ce=J.max[0]-J.min[0],me=J.max[2]-J.min[2],Me=new Je(new Lt(ce,.05,me),Ue);Me.position.set((J.min[0]+J.max[0])/2,.03,(J.min[2]+J.max[2])/2),i.add(Me),c.push(Me)}const{l:Be,fixture:Xe}=L(O,26),{l:Ge,fixture:Ve}=L(C,26);[{light:Be,fixture:Xe,range:8,patrol(J){const ce=$e=>[Z+Math.sin($e*.5)*8.5,-67.5],[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(Be,Xe,me,3.6,Me,Le-me,qe-Me)}},{light:Ge,fixture:Ve,range:8,patrol(J){const ce=$e=>[Z+Math.sin($e*.5+1.3)*8.5,-73.5],[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(Ge,Ve,me,3.6,Me,Le-me,qe-Me)}}].forEach(J=>{te.push(J),J.patrol(0)});const Rt=new Sn(15253648,3,48);Rt.position.set(Z,8.5,V),Rt.userData.rtRadius=.85,i.add(Rt);const ht=k,Yt=8,nt=ht-Yt,We=(ht+nt)/2,vn=5;yt(Z,We,vn,Yt),tt(ht,H),h(e.t,e.wallH,Yt,Z-vn,p,We),h(e.t,e.wallH,Yt,Z+vn,p,We);const ft=new Ft({color:1777446,roughness:.9});function An(J){const ce=new Je(new Lt(.35,e.wallH,.4),ft);ce.position.set(J,p,We),i.add(ce),c.push(ce),l.push({center:new P(J,p,We),halfExtents:{x:.175,z:.2},rotationY:0})}for(let J=Z-vn+.5;J<=8.5;J+=1)An(J);for(let J=11.5;J<=Z+vn-.5;J+=1)An(J);const li=new Sn(12574975,13,24);li.position.set(Z-2.6,2.4,nt+1.4),li.userData.rtRadius=.08,i.add(li);const Rn=new Sn(16770752,13,24);Rn.position.set(Z+2.6,2.4,nt+1.4),Rn.userData.rtRadius=.08,i.add(Rn);const Dn=nt,xt=18,_n=Dn-xt,Yn=(Dn+_n)/2,Mt=He;yt(Z,Yn,Mt,xt),tt(Dn,Mt),h(Mt*2,e.wallH,e.t,Z,p,_n),h(e.t,e.wallH,xt,Z-Mt,p,Yn),h(e.t,e.wallH,xt,Z+Mt,p,Yn),y(2.6,2,2.2,Z,-91.5),y(2.2,1.8,1.6,4.5,-93.5,s,.25),y(2.2,1.8,1.6,15.5,-93.5,s,-.25),y(3,1.6,1.2,8,-97,s,Math.PI/4.5),y(3,1.6,1.2,12,-100.5,s,-Math.PI/4.5),y(1.8,2.2,1.8,5,-101.5),y(1.8,2.2,1.8,15,-101.5),w(.7,3,Z,-100.5);const{l:ci,fixture:Br}=L(O,26),{l:wi,fixture:Eo}=L(C,26),{l:Zs,fixture:To}=L(O,26);[{light:ci,fixture:Br,range:8,patrol(J){const ce=$e=>[Z+Math.sin($e*.45)*8.5,-92.5],[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(ci,Br,me,3.6,Me,Le-me,qe-Me)}},{light:wi,fixture:Eo,range:8,patrol(J){const ce=$e=>[6,-97+Math.sin($e*.5)*6],[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(wi,Eo,me,3.5,Me,Le-me,qe-Me)}},{light:Zs,fixture:To,range:8,patrol(J){const ce=$e=>{const ot=$e*.5;return[Z+Math.cos(ot)*4.6,-103+Math.sin(ot)*3.4]},[me,Me]=ce(J),[Le,qe]=ce(J+W);ie(Zs,To,me,3.4,Me,Le-me,qe-Me)}}].forEach(J=>{te.push(J),J.patrol(0)});const Or=new Sn(11453664,3.2,52);Or.position.set(Z,9,Yn),Or.userData.rtRadius=.9,i.add(Or);const fr=new P(Z,.35,-104),js=new Je(new _i(1.5,1.5,.12,24),new Ft({color:662038,emissive:3797184,emissiveIntensity:2.4}));js.position.set(fr.x,.06,fr.z),i.add(js);const zr=new Je(new _i(.55,.7,1.1,16),new Ft({color:662038,emissive:3797184,emissiveIntensity:1.4}));zr.position.set(fr.x,.55,fr.z),i.add(zr),c.push(zr);const fu={disc:js,ring:zr},ui={act1Spawn:D.clone(),bridgeStart:new P(v,.35,Te-1.2),act2Start:new P(Z,.35,we-1.2),galleryStart:new P(Z,.35,qt-1.2),fogRoomStart:new P(Z,.35,R-1.2),godrayStart:new P(Z,.35,ht-1.2),finalStart:new P(Z,.35,Dn-1.2)},du=[{z:m,checkpoint:ui.bridgeStart},{z:Pe,checkpoint:ui.act2Start},{z:fe,checkpoint:ui.galleryStart},{z:hr,checkpoint:ui.fogRoomStart},{z:k,checkpoint:ui.godrayStart},{z:nt,checkpoint:ui.finalStart}],pu={min:[x-.7,-2,Ee-.2],max:[_+.7,5,Te+.3],density:.016},mu={min:[Z-He,-1,fe-.2],max:[Z+He,4,we+.2],density:.004},gu={min:[Z-vn,-1,nt-.2],max:[Z+vn,4,ht+.2],density:.011},vu={min:[Z-Mt,-1,_n-.2],max:[Z+Mt,4,Dn+.2],density:.005},_u=be.map(J=>({min:J.min,max:J.max,density:_e})),xu=[M,E,U,N,q,j,de,Ie,et,Ti,bi,Be,Ge,Rt,li,Rn,ci,wi,Zs,Or,...G.map(J=>J.light)];return{scene:i,camera:t,ROOM:e,spawn:D,finalExit:fr,occluders:c,boxes:l,cylinders:u,guards:te,fill:M,ambientKey:E,lights:xu,finalBeacon:fu,centralStatue:b,candles:G,checkpoints:ui,stages:du,bridgeZone:pu,act3Zone:mu,godrayZone:gu,finalZone:vu,fogBanks:be,fogBankZones:_u,studs:ne,doorwayZ:m,bridgeMidZ:Pe}}const ws=document.getElementById("boot"),mc=document.getElementById("boot-msg"),ka=i=>{mc&&(mc.textContent=i)},On=.35,Va=4.5,gc=34,_0=9,vc=new P(0,10,5.5),x0=.06,_c=.4,y0=1.6;async function M0(){ka("building vault…");const i=v0(),{scene:e,camera:t}=i,n=new Je(new Vs(On,24,16),new Ft({color:862766,emissive:3399888,emissiveIntensity:.6,roughness:.4}));n.position.copy(i.spawn),e.add(n);const r=new Rg(10335446,.55);r.position.set(-14,20,8),r.userData.rtRadius=.06,e.add(r,r.target),ka("starting ray tracer…");const s=new Kc({antialias:!1});s.setPixelRatio(1),s.setSize(window.innerWidth||1280,window.innerHeight||720),document.getElementById("app").appendChild(s.domElement);const o=new tn(s,{renderScale:.75,maxHistory:48,denoiseIterations:3,envColor:new Ce(1185830),restir:!0,emissiveNEE:!0,volumetric:{enabled:!0,density:0},adaptiveQuality:!0,targetFps:55});o.volumetric.zones=[i.bridgeZone,i.act3Zone,...i.fogBankZones,i.godrayZone,i.finalZone].map(X=>({min:X.min,max:X.max,density:X.density})),o.volumetric.zones.length>8&&console.error(`[shadow-heist] fog zones ${o.volumetric.zones.length} > 8 cap`),ka("building BVH…");const a=performance.now();o.compileScene(e,{dynamicMeshes:[n]}),console.log(`[shadow-heist] compiled in ${Math.round(performance.now()-a)}ms: ${o.compiled.triangleCount.toLocaleString()} tris, ${o.compiled.lightCount} lights`),t.aspect=(window.innerWidth||1280)/(window.innerHeight||720),t.updateProjectionMatrix(),o.setSize(window.innerWidth||1280,window.innerHeight||720);const l={started:!1,won:!1,meter:0,lit:!1,concealed:!1,attempts:1,elapsed:0,startTime:0,moved:!1,timerStarted:!1,best:parseFloat(localStorage.getItem("shadowHeistBest"))||null,stage:0,checkpoint:i.checkpoints.act1Spawn.clone()},u=new P,c={active:!1,x:0,z:0},f={active:!1,x:0,z:0},h=new Set,p=X=>{const re=X.key.toLowerCase();h.add(re),l.started||d()},v=X=>h.delete(X.key.toLowerCase());window.addEventListener("keydown",p),window.addEventListener("keyup",v);const g={time:document.getElementById("hudTime"),attempts:document.getElementById("hudAttempts"),best:document.getElementById("hudBest"),meterFill:document.getElementById("meterFill"),eye:document.getElementById("eye"),detect:document.getElementById("detect"),vignette:document.getElementById("vignette"),flash:document.getElementById("flash"),concealed:document.getElementById("concealed"),start:document.getElementById("start"),win:document.getElementById("win"),winTime:document.getElementById("winTime"),winAttempts:document.getElementById("winAttempts"),winBest:document.getElementById("winBest"),playAgain:document.getElementById("playAgain")},m=X=>X.toFixed(1)+"s";g.best.textContent=l.best!=null?m(l.best):"—",g.attempts.textContent=l.attempts;function d(){l.started||(l.started=!0,g.start.classList.add("hidden"))}g.start.addEventListener("click",d),g.playAgain.addEventListener("click",()=>location.reload());const x=document.getElementById("touchLayer"),_=document.getElementById("joyBase"),y=document.getElementById("joyKnob"),w=48;let T=null,b=0,D=0;function M(X){if(T===null&&!(X.clientX>window.innerWidth*.6)&&!(X.clientY<window.innerHeight*.4)&&!(X.target&&X.target.closest&&X.target.closest("button, a, .cta"))){l.started||d(),T=X.pointerId;try{x.setPointerCapture(T)}catch{}b=X.clientX,D=X.clientY,_.style.left=b+"px",_.style.top=D+"px",_.classList.add("on"),y.classList.add("on"),E(X),X.preventDefault()}}function E(X){if(X.pointerId!==T)return;const re=X.clientX-b,se=X.clientY-D,ze=Math.hypot(re,se),ge=Math.min(ze,w),A=ze>0?re/ze*ge:0,S=ze>0?se/ze*ge:0;y.style.left=b+A+"px",y.style.top=D+S+"px",f.active=!0,f.x=A/w,f.z=S/w,X.preventDefault()}function U(X){if(X.pointerId===T){try{x.releasePointerCapture(T)}catch{}T=null,f.active=!1,f.x=0,f.z=0,_.classList.remove("on"),y.classList.remove("on")}}x.addEventListener("pointerdown",M),x.addEventListener("pointermove",E),x.addEventListener("pointerup",U),x.addEventListener("pointercancel",U);const L=new Cg;L.far=30;const O=new P,C=new P,N=new P,B=new P;function q(X,re){C.set(X,.5,re);let se=!1,ze=1e9;for(const ge of i.guards){const A=ge.light.position,S=C.distanceTo(A);if(S>ge.range||(N.copy(ge.light.target.position).sub(A).normalize(),B.copy(C).sub(A).normalize(),N.dot(B)<Math.cos(ge.light.angle)))continue;O.copy(A).sub(C).normalize(),L.set(C,O),L.far=S-.1,L.intersectObjects(i.occluders,!1).length===0&&(se=!0,S<ze&&(ze=S))}return{litNow:se,closest:ze}}const Y=()=>q(n.position.x,n.position.z);function j(X,re){for(const se of i.fogBanks)if(X>=se.min[0]&&X<=se.max[0]&&re>=se.min[2]&&re<=se.max[2])return!0;return!1}const ee=i.boxes,ae=i.cylinders;function ie(X,re){const se=Math.cos(re.rotationY),ze=Math.sin(re.rotationY),ge=X.x-re.center.x,A=X.z-re.center.z,S=ge*se+A*ze,z=-ge*ze+A*se,$=re.halfExtents.x,K=re.halfExtents.z,ne=Math.max(-$,Math.min($,S)),Se=Math.max(-K,Math.min(K,z));let le=S-ne,ve=z-Se,xe=le*le+ve*ve;if(xe>On*On)return;let De,Q;if(xe>1e-8){const ye=Math.sqrt(xe),fe=On-ye;De=le/ye*fe,Q=ve/ye*fe}else{const ye=$-Math.abs(S)+On,fe=K-Math.abs(z)+On;ye<fe?(De=S<0?-ye:ye,Q=0):(De=0,Q=z<0?-fe:fe)}const Ke=De*se-Q*ze,Z=De*ze+Q*se;X.x+=Ke,X.z+=Z;const we=Math.hypot(Ke,Z);if(we>1e-6){const ye=Ke/we,fe=Z/we,Fe=u.x*ye+u.z*fe;Fe<0&&(u.x-=Fe*ye,u.z-=Fe*fe)}}function W(X,re){const se=X.x-re.center.x,ze=X.z-re.center.z,ge=re.radius+On,A=se*se+ze*ze;if(A>ge*ge||A<1e-8)return;const S=Math.sqrt(A),z=se/S,$=ze/S,K=ge-S;X.x+=z*K,X.z+=$*K;const ne=u.x*z+u.z*$;ne<0&&(u.x-=ne*z,u.z-=ne*$)}function te(X){for(let re=0;re<2;re++){for(const se of ee)ie(X,se);for(const se of ae)W(X,se)}}function he(X){n.position.copy(l.checkpoint),u.set(0,0,0),l.meter=0,l.lit=!1,l.moved=!1,X&&(l.attempts+=1,g.attempts.textContent=l.attempts,g.flash.classList.add("on"),setTimeout(()=>{g.flash.classList.remove("on")},90)),o.resetAccumulation()}function Te(){if(l.won)return;l.won=!0;const X=l.elapsed;(l.best==null||X<l.best)&&(l.best=X,localStorage.setItem("shadowHeistBest",String(X))),g.winTime.textContent=m(X),g.winAttempts.textContent=l.attempts,g.winBest.textContent=m(l.best),g.win.classList.add("show")}const Ee=new P;function Pe(){Ee.copy(n.position).add(vc),t.position.lerp(Ee,x0),t.lookAt(n.position)}t.position.copy(i.spawn).add(vc),t.lookAt(-2,0,0);function Ne(X){if(l.won)return;const re=performance.now()/1e3;for(const A of i.guards)A.patrol(re);for(let A=0;A<i.candles.length;A++){const S=i.candles[A];S.light.intensity=S.base*(.85+.15*Math.sin(re*7+A*1.7))}o.updateLights(e);const se=2+Math.sin(re*2.2)*.9,ze=.9+Math.sin(re*2.2)*.5,ge=1+Math.sin(re*2.2)*.04;{const A=i.finalBeacon;A.disc.material.emissiveIntensity=se,A.ring.material.emissiveIntensity=ze,A.ring.scale.set(ge,1,ge)}if(l.started){let A=0,S=0;c.active?(A=c.x,S=c.z):f.active?(A=f.x,S=f.z):((h.has("w")||h.has("arrowup"))&&(S-=1),(h.has("s")||h.has("arrowdown"))&&(S+=1),(h.has("a")||h.has("arrowleft"))&&(A-=1),(h.has("d")||h.has("arrowright"))&&(A+=1));const z=Math.hypot(A,S);if(z>0)l.moved||(l.moved=!0,l.timerStarted||(l.timerStarted=!0,l.startTime=performance.now())),A/=z,S/=z,u.x+=A*gc*X,u.z+=S*gc*X;else{const xe=Math.max(0,1-_0*X);u.x*=xe,u.z*=xe}const $=Math.hypot(u.x,u.z);$>Va&&(u.x=u.x/$*Va,u.z=u.z/$*Va),n.position.x+=u.x*X,n.position.z+=u.z*X,te(n.position),n.position.y=On;const K=n.position.z;let ne=0;for(let xe=0;xe<i.stages.length;xe++)K<i.stages[xe].z&&(ne=xe+1);ne>l.stage&&(l.stage=ne,l.checkpoint=i.stages[ne-1].checkpoint);const Se=j(n.position.x,K);if(l.concealed=Se,l.moved&&!Se){const{litNow:xe,closest:De}=Y();if(l.lit=xe,xe){const Q=i.guards.reduce((Z,we)=>we.range>Z.range?we:Z),Ke=.4*(1-Math.min(1,De/Q.range))+.12;l.meter=Math.min(1,l.meter+Ke*X)}else l.meter=Math.max(0,l.meter-_c*X);l.meter>=1&&he(!0)}else l.lit=!1,l.meter=Math.max(0,l.meter-_c*X);const le=n.position.x-i.finalExit.x,ve=n.position.z-i.finalExit.z;Math.hypot(le,ve)<y0&&Te(),l.timerStarted&&(l.elapsed=(performance.now()-l.startTime)/1e3)}o.updateDynamic(),Pe(),Ae()}function Ae(){g.time.textContent=l.elapsed.toFixed(1),g.meterFill.style.width=(l.meter*100).toFixed(1)+"%",l.lit?g.eye.classList.add("lit"):g.eye.classList.remove("lit"),g.vignette.style.opacity=l.lit?String(.35+l.meter*.5):"0",l.meter>.7?g.detect.classList.add("shake"):g.detect.classList.remove("shake"),g.concealed&&g.concealed.classList.toggle("show",l.concealed&&l.started)}window.addEventListener("resize",()=>{const X=window.innerWidth||1280,re=window.innerHeight||720;t.aspect=X/re,t.updateProjectionMatrix(),s.setSize(X,re),o.setSize(X,re)}),Object.assign(window,{RT:o,SCENE:e,CAMERA:t,LEVEL:i,GAME:{player:n,rt:o,scene:e,camera:t,lights:i.lights,guards:i.guards,state:l,setPlayerPos(X,re){n.position.set(X,On,re),u.set(0,0,0)},detection:()=>l.meter,lit:()=>l.lit,concealed:()=>l.concealed,inFogBank:(X,re)=>j(X,re),win:()=>l.won,start:()=>d(),step:Ne,respawn:he,checkLitAt(X,re,se){if(se!=null)for(const ze of i.guards)ze.patrol(se);return q(X,re).litNow},setInput(X,re){c.active=!0,c.x=X,c.z=re},clearInput(){c.active=!1,c.x=0,c.z=0}}});let je=performance.now(),G=!1;function dt(){document.visibilityState==="hidden"?setTimeout(dt,100):requestAnimationFrame(dt);const X=performance.now(),re=Math.min((X-je)/1e3,.05);je=X,Ne(re),o.render(e,t),G||(G=!0,ws?.classList.add("hidden"))}dt()}M0().catch(i=>{console.error(i),ws&&(ws.classList.remove("hidden"),ws.innerHTML=`<div class="err"><b>Failed to start.</b>

${i&&i.message?i.message:i}

See the console for details.</div>`)});
