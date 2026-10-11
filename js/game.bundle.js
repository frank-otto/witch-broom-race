/* Witch Broom Race — bundled with three.js (MIT, (c) 2010-2026 three.js authors) */
(()=>{var s0=Object.defineProperty;var r0=(i,e)=>{for(var t in e)s0(i,t,{get:e[t],enumerable:!0})};var _f=0,Jh=1,vf=2;var Ua=1,yf=2,Mr=3,vi=0,tn=1,Qt=2,Vn=0,Sr=1,gt=2,Kh=3,jh=4,Mf=5;var Ps=100,Sf=101,bf=102,Ef=103,Tf=104,wf=200,Af=201,Rf=202,Cf=203,Qh=204,eu=205,Pf=206,If=207,Lf=208,Df=209,Nf=210,Uf=211,Ff=212,Bf=213,Of=214,Yo=0,Zo=1,$o=2,hr=3,Jo=4,Ko=5,jo=6,Qo=7,tu=0,Hf=1,zf=2,ni=0,Fa=1,Ba=2,Oa=3,Is=4,Ha=5,za=6,ka=7;var nu=300,rs=301,Ls=302,Ll=303,Dl=304,Va=306,Ji=1e3,ui=1001,el=1002,on=1003,kf=1004;var Ga=1005;var un=1006,Nl=1007;var as=1008;var wn=1009,iu=1010,su=1011,br=1012,Ul=1013,ii=1014,Gn=1015,nn=1016,Fl=1017,Bl=1018,Er=1020,ru=35902,au=35899,ou=1021,lu=1022,Wn=1023,fi=1026,os=1027,Ol=1028,Hl=1029,ls=1030,zl=1031;var kl=1033,Wa=33776,Xa=33777,qa=33778,Ya=33779,Vl=35840,Gl=35841,Wl=35842,Xl=35843,ql=36196,Yl=37492,Zl=37496,$l=37488,Jl=37489,Za=37490,Kl=37491,jl=37808,Ql=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,ac=37816,oc=37817,lc=37818,cc=37819,hc=37820,uc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,$a=36285,xc=36286;var na=2300,tl=2301,Xo=2302,Oh=2303,Hh=2400,zh=2401,kh=2402;var Vf=3200;var _c=0,Gf=1,Ni="",$t="srgb",ia="srgb-linear",sa="linear",vt="srgb";var qo=7680;var Wf=519,Xf=512,qf=513,Yf=514,vc=515,Zf=516,$f=517,yc=518,Jf=519,cu=35044,Ui=35048;var hu="300 es",jn=2e3,ur=2001;function a0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function o0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ra(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kf(){let i=ra("canvas");return i.style.display="block",i}var Nd={},dr=null;function aa(...i){let e="THREE."+i.shift();dr?dr("log",e,...i):console.log(e,...i)}function jf(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=jf(i);let e="THREE."+i.shift();if(dr)dr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=jf(i);let e="THREE."+i.shift();if(dr)dr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function bs(...i){let e=i.join(" ");e in Nd||(Nd[e]=!0,Ze(...i))}function Qf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ep={[Yo]:Zo,[$o]:jo,[Jo]:Qo,[hr]:Ko,[Zo]:Yo,[jo]:$o,[Qo]:Jo,[Ko]:hr},pi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hh=Math.PI/180,nl=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[t&63|128]+pn[t>>8&255]+"-"+pn[t>>16&255]+pn[t>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function l0(i,e){return(i%e+e)%e}function uh(i,e,t){return(1-t)*i+t*e}function hi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var gu=class gu{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gu.prototype.isVector2=!0;var re=gu,zn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),b=Math.sin(M);p=Math.sin(p*M)/b,o=Math.sin(o*M)/b,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+v*o;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},xu=class xu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ud.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ud.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dh.copy(this).projectOnVector(e),this.sub(dh)}reflect(e){return this.sub(dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xu.prototype.isVector3=!0;var C=xu,dh=new C,Ud=new zn,_u=class _u{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=s[0],m=s[3],p=s[6],M=s[1],b=s[4],_=s[7],T=s[2],w=s[5],P=s[8];return r[0]=a*v+o*M+l*T,r[3]=a*m+o*b+l*w,r[6]=a*p+o*_+l*P,r[1]=c*v+h*M+u*T,r[4]=c*m+h*b+u*w,r[7]=c*p+h*_+u*P,r[2]=d*v+f*M+g*T,r[5]=d*m+f*b+g*w,r[8]=d*p+f*_+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=d*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fh.makeScale(e,t)),this}rotate(e){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fh.makeRotation(-e)),this}translate(e,t){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};_u.prototype.isMatrix3=!0;var et=_u,fh=new et,Fd=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c0(){let i={enabled:!0,workingColorSpace:ia,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?sa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ia]:{primaries:e,whitePoint:n,transfer:sa,toXYZ:Fd,fromXYZ:Bd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:Fd,fromXYZ:Bd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}var ct=c0();function Li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xs,il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=ra("canvas")),Xs.width=e.width,Xs.height=e.height;let s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ra("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Li(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Li(t[n]/255)*255):t[n]=Li(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},h0=0,fr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ph(s[a].image)):r.push(ph(s[a]))}else r=ph(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var u0=0,mh=new C,Sn=class i extends pi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ui,s=ui,r=un,a=as,o=Wn,l=wn,c=i.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ii(),this.name="",this.source=new fr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ji:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ji:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=nu;Sn.DEFAULT_ANISOTROPY=1;var vu=class vu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,_=(f+1)/2,T=(p+1)/2,w=(h+d)/4,P=(u+v)/4,y=(g+m)/4;return b>_&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=w/n,r=P/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=y/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=P/r,s=y/r),this.set(n,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vu.prototype.isVector4=!0;var kt=vu,sl=class extends pi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Sn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends sl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},oa=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rl=class extends Sn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Il=class Il{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Il().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(d0,e,f0)}lookAt(e,t,n){let s=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Xi.crossVectors(n,Cn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Xi.crossVectors(n,Cn)),Xi.normalize(),go.crossVectors(Cn,Xi),s[0]=Xi.x,s[4]=go.x,s[8]=Cn.x,s[1]=Xi.y,s[5]=go.y,s[9]=Cn.y,s[2]=Xi.z,s[6]=go.z,s[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],M=n[3],b=n[7],_=n[11],T=n[15],w=s[0],P=s[4],y=s[8],A=s[12],I=s[1],D=s[5],O=s[9],G=s[13],N=s[2],z=s[6],q=s[10],Y=s[14],oe=s[3],Z=s[7],ee=s[11],se=s[15];return r[0]=a*w+o*I+l*N+c*oe,r[4]=a*P+o*D+l*z+c*Z,r[8]=a*y+o*O+l*q+c*ee,r[12]=a*A+o*G+l*Y+c*se,r[1]=h*w+u*I+d*N+f*oe,r[5]=h*P+u*D+d*z+f*Z,r[9]=h*y+u*O+d*q+f*ee,r[13]=h*A+u*G+d*Y+f*se,r[2]=g*w+v*I+m*N+p*oe,r[6]=g*P+v*D+m*z+p*Z,r[10]=g*y+v*O+m*q+p*ee,r[14]=g*A+v*G+m*Y+p*se,r[3]=M*w+b*I+_*N+T*oe,r[7]=M*P+b*D+_*z+T*Z,r[11]=M*y+b*O+_*q+T*ee,r[15]=M*A+b*G+_*Y+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=l*f-c*d,b=o*f-c*u,_=o*d-l*u,T=a*f-c*h,w=a*d-l*h,P=a*u-o*h;return t*(v*M-m*b+p*_)-n*(g*M-m*T+p*w)+s*(g*b-v*T+p*P)-r*(g*_-v*w+m*P)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=t*o-n*a,b=t*l-s*a,_=t*c-r*a,T=n*l-s*o,w=n*c-r*o,P=s*c-r*l,y=h*v-u*g,A=h*m-d*g,I=h*p-f*g,D=u*m-d*v,O=u*p-f*v,G=d*p-f*m,N=M*G-b*O+_*D+T*I-w*A+P*y;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/N;return e[0]=(o*G-l*O+c*D)*z,e[1]=(s*O-n*G-r*D)*z,e[2]=(v*P-m*w+p*T)*z,e[3]=(d*w-u*P-f*T)*z,e[4]=(l*I-a*G-c*A)*z,e[5]=(t*G-s*I+r*A)*z,e[6]=(m*_-g*P-p*b)*z,e[7]=(h*P-d*_+f*b)*z,e[8]=(a*O-o*I+c*y)*z,e[9]=(n*I-t*O-r*y)*z,e[10]=(g*w-v*_+p*M)*z,e[11]=(u*_-h*w-f*M)*z,e[12]=(o*A-a*D-l*y)*z,e[13]=(t*D-n*A+s*y)*z,e[14]=(v*b-g*T-m*M)*z,e[15]=(h*T-u*b+d*M)*z,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=l*c,b=l*h,_=l*u,T=n.x,w=n.y,P=n.z;return s[0]=(1-(v+p))*T,s[1]=(f+_)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(f-_)*w,s[5]=(1-(d+p))*w,s[6]=(m+M)*w,s[7]=0,s[8]=(g+b)*P,s[9]=(m-M)*P,s[10]=(1-(d+v))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Zn.copy(this);let c=1/a,h=1/o,u=1/l;return Zn.elements[0]*=c,Zn.elements[1]*=c,Zn.elements[2]*=c,Zn.elements[4]*=h,Zn.elements[5]*=h,Zn.elements[6]*=h,Zn.elements[8]*=u,Zn.elements[9]*=u,Zn.elements[10]*=u,t.setFromRotationMatrix(Zn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===jn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ur)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===jn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ur)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Il.prototype.isMatrix4=!0;var yt=Il,qs=new C,Zn=new yt,d0=new C(0,0,0),f0=new C(1,1,1),Xi=new C,go=new C,Cn=new C,Od=new yt,Hd=new zn,Qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qn.DEFAULT_ORDER="XYZ";var la=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},p0=0,zd=new C,Ys=new zn,Ti=new yt,xo=new C,Gr=new C,m0=new C,g0=new zn,kd=new C(1,0,0),Vd=new C(0,1,0),Gd=new C(0,0,1),Wd={type:"added"},x0={type:"removed"},Zs={type:"childadded",child:null},gh={type:"childremoved",child:null},Jt=class i extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new Qn,n=new zn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new yt},normalMatrix:{value:new et}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new la,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(kd,e)}rotateY(e){return this.rotateOnAxis(Vd,e)}rotateZ(e){return this.rotateOnAxis(Gd,e)}translateOnAxis(e,t){return zd.copy(e).applyQuaternion(this.quaternion),this.position.add(zd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kd,e)}translateY(e){return this.translateOnAxis(Vd,e)}translateZ(e){return this.translateOnAxis(Gd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xo.copy(e):xo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Gr,xo,this.up):Ti.lookAt(xo,Gr,this.up),this.quaternion.setFromRotationMatrix(Ti),s&&(Ti.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(Ti),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(x0),gh.child=e,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,m0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,g0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new C(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ke=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_0={type:"move"},pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},tp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function xh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ue=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=l0(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=xh(a,r,e+1/3),this.g=xh(a,r,e),this.b=xh(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let n=tp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ct.workingToColorSpace(mn.copy(this),e),Math.round(ht(mn.r*255,0,255))*65536+Math.round(ht(mn.g*255,0,255))*256+Math.round(ht(mn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(mn.copy(this),t);let n=mn.r,s=mn.g,r=mn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=$t){ct.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,s=mn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(_o);let n=uh(qi.h,_o.h,t),s=uh(qi.s,_o.s,t),r=uh(qi.l,_o.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new Ue;Ue.NAMES=tp;var ca=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ue(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ha=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$n=new C,wi=new C,_h=new C,Ai=new C,$s=new C,Js=new C,Xd=new C,vh=new C,yh=new C,Mh=new C,Sh=new kt,bh=new kt,Eh=new kt,Pi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),$n.subVectors(e,t),s.cross($n);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){$n.subVectors(s,t),wi.subVectors(n,t),_h.subVectors(e,t);let a=$n.dot($n),o=$n.dot(wi),l=$n.dot(_h),c=wi.dot(wi),h=wi.dot(_h),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(o,Ai.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Sh.setScalar(0),bh.setScalar(0),Eh.setScalar(0),Sh.fromBufferAttribute(e,t),bh.fromBufferAttribute(e,n),Eh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Sh,r.x),a.addScaledVector(bh,r.y),a.addScaledVector(Eh,r.z),a}static isFrontFacing(e,t,n,s){return $n.subVectors(n,t),wi.subVectors(e,t),$n.cross(wi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $n.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$n.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;$s.subVectors(s,n),Js.subVectors(r,n),vh.subVectors(e,n);let l=$s.dot(vh),c=Js.dot(vh);if(l<=0&&c<=0)return t.copy(n);yh.subVectors(e,s);let h=$s.dot(yh),u=Js.dot(yh);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector($s,a);Mh.subVectors(e,r);let f=$s.dot(Mh),g=Js.dot(Mh);if(g>=0&&f<=g)return t.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Js,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Xd.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Xd,o);let p=1/(m+v+d);return a=v*p,o=d*p,t.copy(n).addScaledVector($s,a).addScaledVector(Js,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(r,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vo.copy(n.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),yo.subVectors(this.max,Wr),Ks.subVectors(e.a,Wr),js.subVectors(e.b,Wr),Qs.subVectors(e.c,Wr),Yi.subVectors(js,Ks),Zi.subVectors(Qs,js),vs.subVectors(Ks,Qs);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-vs.z,vs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,vs.z,0,-vs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-vs.y,vs.x,0];return!Th(t,Ks,js,Qs,yo)||(t=[1,0,0,0,1,0,0,0,1],!Th(t,Ks,js,Qs,yo))?!1:(Mo.crossVectors(Yi,Zi),t=[Mo.x,Mo.y,Mo.z],Th(t,Ks,js,Qs,yo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ri=[new C,new C,new C,new C,new C,new C,new C,new C],Jn=new C,vo=new mi,Ks=new C,js=new C,Qs=new C,Yi=new C,Zi=new C,vs=new C,Wr=new C,yo=new C,Mo=new C,ys=new C;function Th(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ys.fromArray(i,r);let o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),h=n.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var jt=new C,So=new re,v0=0,wt=class extends pi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cu,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ua=class extends wt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var da=class extends wt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends wt{constructor(e,t,n){super(new Float32Array(e),t,n)}},y0=new mi,Xr=new C,wh=new C,gi=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):y0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);let t=Xr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Xr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(wh)),this.expandByPoint(Xr.copy(e.center).sub(wh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},M0=0,Hn=new yt,Ah=new Jt,er=new C,Pn=new mi,qr=new mi,an=new C,Mt=class i extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(a0(e)?da:ua)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new et().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];qr.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Pn.min,qr.min),Pn.expandByPoint(an),an.addVectors(Pn.max,qr.max),Pn.expandByPoint(an)):(Pn.expandByPoint(qr.min),Pn.expandByPoint(qr.max))}Pn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)an.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(an));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)an.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),an.add(er)),s=Math.max(s,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new wt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let y=0;y<n.count;y++)o[y]=new C,l[y]=new C;let c=new C,h=new C,u=new C,d=new re,f=new re,g=new re,v=new C,m=new C;function p(y,A,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,A),u.fromBufferAttribute(n,I),d.fromBufferAttribute(r,y),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,I),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[y].add(v),o[A].add(v),o[I].add(v),l[y].add(m),l[A].add(m),l[I].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let y=0,A=M.length;y<A;++y){let I=M[y],D=I.start,O=I.count;for(let G=D,N=D+O;G<N;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new C,_=new C,T=new C,w=new C;function P(y){T.fromBufferAttribute(s,y),w.copy(T);let A=o[y];b.copy(A),b.sub(T.multiplyScalar(T.dot(A))).normalize(),_.crossVectors(w,A);let D=_.dot(l[y])<0?-1:1;a.setXYZW(y,b.x,b.y,b.z,D)}for(let y=0,A=M.length;y<A;++y){let I=M[y],D=I.start,O=I.count;for(let G=D,N=D+O;G<N;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new wt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new wt(d,h,u)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},al=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=cu,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Mn=new C,fa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=hi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=hi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=hi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=hi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=hi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){aa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new wt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){aa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Rh=new C,S0=new C,b0=new et,Kn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Rh.subVectors(n,t).cross(S0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||b0.getNormalMatrix(e),s=this.coplanarPoint(Rh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},E0=0,ei=class extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Sr,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qh,this.blendDst=eu,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qo,this.stencilZFail=qo,this.stencilZPass=qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ue().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Vt=class extends ei{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tr,Yr=new C,nr=new C,ir=new C,sr=new re,Zr=new re,np=new yt,bo=new C,$r=new C,Eo=new C,qd=new re,Ch=new re,Yd=new re,Pt=class extends Jt{constructor(e=new Vt){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Mt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new al(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new fa(n,3,0,!1)),tr.setAttribute("uv",new fa(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new re(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Je('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),np.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;To(bo.set(-.5,-.5,0),ir,a,nr,s,r),To($r.set(.5,-.5,0),ir,a,nr,s,r),To(Eo.set(.5,.5,0),ir,a,nr,s,r),qd.set(0,0),Ch.set(1,0),Yd.set(1,1);let o=e.ray.intersectTriangle(bo,$r,Eo,!1,Yr);if(o===null&&(To($r.set(-.5,.5,0),ir,a,nr,s,r),Ch.set(0,1),o=e.ray.intersectTriangle(bo,Eo,$r,!1,Yr),o===null))return;let l=e.ray.origin.distanceTo(Yr);l<e.near||l>e.far||t.push({distance:l,point:Yr.clone(),uv:Pi.getInterpolation(Yr,bo,$r,Eo,qd,Ch,Yd,new re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function To(i,e,t,n,s,r){sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Zr.x=r*sr.x-s*sr.y,Zr.y=s*sr.x+r*sr.y):Zr.copy(sr),i.copy(e),i.x+=Zr.x,i.y+=Zr.y,i.applyMatrix4(np)}var Ci=new C,Ph=new C,wo=new C,Ao=new C,mr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ci)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ci.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ci.copy(this.origin).addScaledVector(this.direction,t),Ci.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ph.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),Ao.copy(this.origin).sub(Ph);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wo),o=Ao.dot(this.direction),l=-Ao.dot(wo),c=Ao.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ph).addScaledVector(wo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ci.subVectors(e.center,this.origin);let n=Ci.dot(this.direction),s=Ci.dot(Ci)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ci)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,b=n.z-a.z,_=Math.abs(l),T=Math.abs(c),w=Math.abs(h),P,y,A,I,D,O,G,N,z,q,Y,oe;if(_>=T&&_>=w?(A=l,O=u,z=g,oe=p,l>=0?(P=c,y=h,I=d,D=f,G=v,N=m,q=M,Y=b):(P=h,y=c,I=f,D=d,G=m,N=v,q=b,Y=M)):T>=w?(A=c,O=d,z=v,oe=M,c>=0?(P=h,y=l,I=f,D=u,G=m,N=g,q=b,Y=p):(P=l,y=h,I=u,D=f,G=g,N=m,q=p,Y=b)):(A=h,O=f,z=m,oe=b,h>=0?(P=l,y=c,I=u,D=d,G=g,N=v,q=p,Y=M):(P=c,y=l,I=d,D=u,G=v,N=g,q=M,Y=p)),A===0)return null;let Z=P/A,ee=y/A,se=1/A,He=I-Z*O,Ie=D-ee*O,ft=G-Z*z,it=N-ee*z,dt=q-Z*oe,J=Y-ee*oe,te=dt*it-J*ft,xe=He*J-Ie*dt,Xe=ft*Ie-it*He;if(s){if(te<0||xe<0||Xe<0)return null}else if((te<0||xe<0||Xe<0)&&(te>0||xe>0||Xe>0))return null;let Se=te+xe+Xe;if(Se===0)return null;let qe=se*(te*O+xe*z+Xe*oe);return(Se>0?qe<0:qe>0)?null:this.at(qe/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gt=class extends ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=tu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zd=new yt,Ms=new mr,Ro=new gi,$d=new C,Co=new C,Po=new C,Io=new C,Ih=new C,Lo=new C,Jd=new C,Do=new C,j=class extends Jt{constructor(e=new Mt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Lo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ih.fromBufferAttribute(u,e),a?Lo.addScaledVector(Ih,h):Lo.addScaledVector(Ih.sub(t),h))}t.add(Lo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(r),Ms.copy(e.ray).recast(e.near),!(Ro.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Ro,$d)===null||Ms.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Zd.copy(r).invert(),Ms.copy(e.ray).applyMatrix4(Zd),!(n.boundingBox!==null&&Ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,T=b;_<T;_+=3){let w=o.getX(_),P=o.getX(_+1),y=o.getX(_+2);s=No(this,p,e,n,c,h,u,w,P,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),b=o.getX(m+1),_=o.getX(m+2);s=No(this,a,e,n,c,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=M,T=b;_<T;_+=3){let w=_,P=_+1,y=_+2;s=No(this,p,e,n,c,h,u,w,P,y),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,b=m+1,_=m+2;s=No(this,a,e,n,c,h,u,M,b,_),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function T0(i,e,t,n,s,r,a,o){let l;if(e.side===tn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===vi,o),l===null)return null;Do.copy(o),Do.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Do);return c<t.near||c>t.far?null:{distance:c,point:Do.clone(),object:i}}function No(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Co),i.getVertexPosition(l,Po),i.getVertexPosition(c,Io);let h=T0(i,e,t,n,Co,Po,Io,Jd);if(h){let u=new C;Pi.getBarycoord(Jd,Co,Po,Io,u),s&&(h.uv=Pi.getInterpolatedAttribute(s,o,l,c,u,new re)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,o,l,c,u,new re)),a&&(h.normal=Pi.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};Pi.getNormal(Co,Po,Io,d.normal),h.face=d,h.barycoord=u}return h}var pa=class extends Sn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=on,h=on,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ma=class extends wt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new yt,Kd=new yt,Uo=[],jd=new mi,w0=new yt,Jr=new j,Kr=new gi,ga=class extends j{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ma(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,w0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),jd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(jd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),Kr.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),Kd.multiplyMatrices(n,rr),Jr.matrixWorld=Kd,Jr.raycast(e,Uo);for(let a=0,o=Uo.length;a<o;a++){let l=Uo[a];l.instanceId=r,l.object=this,t.push(l)}Uo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ma(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pa(new Float32Array(s*this.count),s,this.count,Ol,Gn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ss=new gi,A0=new re(.5,.5),Fo=new C,gr=class{constructor(e=new Kn,t=new Kn,n=new Kn,s=new Kn,r=new Kn,a=new Kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],b=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-g,T-M).normalize(),s[1].setComponents(c+a,f+h,p+g,T+M).normalize(),s[2].setComponents(c+o,f+u,p+v,T+b).normalize(),s[3].setComponents(c-o,f-u,p-v,T-b).normalize(),n)s[4].setComponents(l,d,m,_).normalize(),s[5].setComponents(c-l,f-d,p-m,T-_).normalize();else if(s[4].setComponents(c-l,f-d,p-m,T-_).normalize(),t===jn)s[5].setComponents(c+l,f+d,p+m,T+_).normalize();else if(t===ur)s[5].setComponents(l,d,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);let t=A0.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fo.x=s.normal.x>0?e.max.x:e.min.x,Fo.y=s.normal.y>0?e.max.y:e.min.y,Fo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ki=class extends ei{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ol=new C,ll=new C,Qd=new yt,jr=new mr,Bo=new gi,Lh=new C,ef=new C,cl=class extends Jt{constructor(e=new Mt,t=new Ki){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ol.fromBufferAttribute(t,s-1),ll.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ol.distanceTo(ll);e.setAttribute("lineDistance",new tt(n,1))}else Ze("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Qd.copy(s).invert(),jr.copy(e.ray).applyMatrix4(Qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),M=h.getX(v+1),b=Oo(this,e,jr,l,p,M,v);b&&t.push(b)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=Oo(this,e,jr,l,v,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=Oo(this,e,jr,l,v,v+1,v);p&&t.push(p)}if(this.isLineLoop){let v=Oo(this,e,jr,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Oo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(ol.fromBufferAttribute(o,s),ll.fromBufferAttribute(o,r),t.distanceSqToSegment(ol,ll,Lh,ef)>n)return;Lh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Lh);if(!(c<e.near||c>e.far))return{distance:c,point:ef.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var tf=new C,nf=new C,Es=class extends cl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)tf.fromBufferAttribute(t,s),nf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+tf.distanceTo(nf);e.setAttribute("lineDistance",new tt(n,1))}else Ze("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var hl=class extends ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},sf=new yt,Vh=new mr,Ho=new gi,zo=new C,ji=class extends Jt{constructor(e=new Mt,t=new hl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;sf.copy(s).invert(),Vh.copy(e.ray).applyMatrix4(sf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=c.getX(g);zo.fromBufferAttribute(u,m),rf(zo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)zo.fromBufferAttribute(u,g),rf(zo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function rf(i,e,t,n,s,r,a){let o=Vh.distanceSqToPoint(i);if(o<t){let l=new C;Vh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var xa=class extends Sn{constructor(e=[],t=rs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Di=class extends Sn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Qi=class extends Sn{constructor(e,t,n=ii,s,r,a,o=on,l=on,c,h=fi,u=1){if(h!==fi&&h!==os)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ul=class extends Qi{constructor(e,t=ii,n=rs,s,r,a=on,o=on,l,c=fi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_a=class extends Sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Yt=class i extends Mt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2));function g(v,m,p,M,b,_,T,w,P,y,A){let I=_/P,D=T/y,O=_/2,G=T/2,N=w/2,z=P+1,q=y+1,Y=0,oe=0,Z=new C;for(let ee=0;ee<q;ee++){let se=ee*D-G;for(let He=0;He<z;He++){let Ie=He*I-O;Z[v]=Ie*M,Z[m]=se*b,Z[p]=N,c.push(Z.x,Z.y,Z.z),Z[v]=0,Z[m]=0,Z[p]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(He/P),u.push(1-ee/y),Y+=1}}for(let ee=0;ee<y;ee++)for(let se=0;se<P;se++){let He=d+se+z*ee,Ie=d+se+z*(ee+1),ft=d+(se+1)+z*(ee+1),it=d+(se+1)+z*ee;l.push(He,Ie,it),l.push(Ie,ft,it),oe+=6}o.addGroup(f,oe,A),f+=oe,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var va=class i extends Mt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class i extends Mt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,v=[],m=n/2,p=0;M(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function M(){let _=new C,T=new C,w=0,P=(t-e)/n;for(let y=0;y<=r;y++){let A=[],I=y/r,D=I*(t-e)+e;for(let O=0;O<=s;O++){let G=O/s,N=G*l+o,z=Math.sin(N),q=Math.cos(N);T.x=D*z,T.y=-I*n+m,T.z=D*q,u.push(T.x,T.y,T.z),_.set(z,P,q).normalize(),d.push(_.x,_.y,_.z),f.push(G,1-I),A.push(g++)}v.push(A)}for(let y=0;y<s;y++)for(let A=0;A<r;A++){let I=v[A][y],D=v[A+1][y],O=v[A+1][y+1],G=v[A][y+1];(e>0||A!==0)&&(h.push(I,D,G),w+=3),(t>0||A!==r-1)&&(h.push(D,O,G),w+=3)}c.addGroup(p,w,0),p+=w}function b(_){let T=g,w=new re,P=new C,y=0,A=_===!0?e:t,I=_===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),g++;let D=g;for(let O=0;O<=s;O++){let N=O/s*l+o,z=Math.cos(N),q=Math.sin(N);P.x=A*q,P.y=m*I,P.z=A*z,u.push(P.x,P.y,P.z),d.push(0,I,0),w.x=z*.5+.5,w.y=q*.5*I+.5,f.push(w.x,w.y),g++}for(let O=0;O<s;O++){let G=T+O,N=D+O;_===!0?h.push(N,N+1,G):h.push(N+1,N,G),y+=3}c.addGroup(p,y,_===!0?1:2),p+=y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wt=class i extends Bt{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ya=class i extends Mt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let b=new C,_=new C,T=new C;for(let w=0;w<t.length;w+=3)f(t[w+0],b),f(t[w+1],_),f(t[w+2],T),l(b,_,T,M)}function l(M,b,_,T){let w=T+1,P=[];for(let y=0;y<=w;y++){P[y]=[];let A=M.clone().lerp(_,y/w),I=b.clone().lerp(_,y/w),D=w-y;for(let O=0;O<=D;O++)O===0&&y===w?P[y][O]=A:P[y][O]=A.clone().lerp(I,O/D)}for(let y=0;y<w;y++)for(let A=0;A<2*(w-y)-1;A++){let I=Math.floor(A/2);A%2===0?(d(P[y][I+1]),d(P[y+1][I]),d(P[y][I])):(d(P[y][I+1]),d(P[y+1][I+1]),d(P[y+1][I]))}}function c(M){let b=new C;for(let _=0;_<r.length;_+=3)b.x=r[_+0],b.y=r[_+1],b.z=r[_+2],b.normalize().multiplyScalar(M),r[_+0]=b.x,r[_+1]=b.y,r[_+2]=b.z}function h(){let M=new C;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let _=m(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;a.push(_,1-T)}g(),u()}function u(){for(let M=0;M<a.length;M+=6){let b=a[M+0],_=a[M+2],T=a[M+4],w=Math.max(b,_,T),P=Math.min(b,_,T);w>.9&&P<.1&&(b<.2&&(a[M+0]+=1),_<.2&&(a[M+2]+=1),T<.2&&(a[M+4]+=1))}}function d(M){r.push(M.x,M.y,M.z)}function f(M,b){let _=M*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let M=new C,b=new C,_=new C,T=new C,w=new re,P=new re,y=new re;for(let A=0,I=0;A<r.length;A+=9,I+=6){M.set(r[A+0],r[A+1],r[A+2]),b.set(r[A+3],r[A+4],r[A+5]),_.set(r[A+6],r[A+7],r[A+8]),w.set(a[I+0],a[I+1]),P.set(a[I+2],a[I+3]),y.set(a[I+4],a[I+5]),T.copy(M).add(b).add(_).divideScalar(3);let D=m(T);v(w,I+0,M,D),v(P,I+2,b,D),v(y,I+4,_,D)}}function v(M,b,_,T){T<0&&M.x===1&&(a[b]=M.x-1),_.x===0&&_.z===0&&(a[b]=T/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},Ma=class i extends ya{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var In=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new yt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ht(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ht(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xr=class extends In{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},dl=class extends xr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function uu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var af=new C,of=new C,Dh=new uu,Nh=new uu,Uh=new uu,kn=class extends In{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(of.subVectors(s[0],s[1]).add(s[0]),c=of);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(af.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=af),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Dh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,v,m),Nh.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,v,m),Uh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Nh.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Uh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Dh.calc(l),Nh.calc(l),Uh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function lf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function R0(i,e){let t=1-i;return t*t*e}function C0(i,e){return 2*(1-i)*i*e}function P0(i,e){return i*i*e}function ea(i,e,t,n){return R0(i,e)+C0(i,t)+P0(i,n)}function I0(i,e){let t=1-i;return t*t*t*e}function L0(i,e){let t=1-i;return 3*t*t*i*e}function D0(i,e){return 3*(1-i)*i*i*e}function N0(i,e){return i*i*i*e}function ta(i,e,t,n,s){return I0(i,e)+L0(i,t)+D0(i,n)+N0(i,s)}var Sa=class extends In{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ta(e,s.x,r.x,a.x,o.x),ta(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},fl=class extends In{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ta(e,s.x,r.x,a.x,o.x),ta(e,s.y,r.y,a.y,o.y),ta(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ba=class extends In{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pl=class extends In{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends In{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ea(e,s.x,r.x,a.x),ea(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xi=class extends In{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ea(e,s.x,r.x,a.x),ea(e,s.y,r.y,a.y),ea(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends In{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(lf(o,l.x,c.x,h.x,u.x),lf(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},ml=Object.freeze({__proto__:null,ArcCurve:dl,CatmullRomCurve3:kn,CubicBezierCurve:Sa,CubicBezierCurve3:fl,EllipseCurve:xr,LineCurve:ba,LineCurve3:pl,QuadraticBezierCurve:Ea,QuadraticBezierCurve3:xi,SplineCurve:Ta}),gl=class extends In{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ml[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new ml[s.type]().fromJSON(s))}return this}},wa=class extends gl{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ba(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ea(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Sa(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ta(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new xr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ln=class extends wa{constructor(e){super(e),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new wa().fromJSON(s))}return this}};function U0(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ip(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=z0(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Aa(r,a,t,o,l,c,0),a}function ip(i,e,t,n,s){let r;if(s===K0(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=cf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=cf(a/n|0,i[a],i[a+1],r);return r&&_r(r,r.next)&&(Ca(r),r=r.next),r}function Ts(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(_r(t,t.next)||Xt(t.prev,t,t.next)===0)){if(Ca(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Aa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&X0(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?B0(i,n,s,r):F0(i)){e.push(l.i,i.i,c.i),Ca(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=O0(Ts(i),e),Aa(i,e,t,n,s,r,2)):a===2&&H0(i,e,t,n,s,r):Aa(Ts(i),e,t,n,s,r,1);break}}}function F0(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Qr(s,o,r,l,a,c,g.x,g.y)&&Xt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function B0(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Xt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),v=Math.max(o,l,c),m=Math.max(h,u,d),p=Gh(f,g,e,t,n),M=Gh(v,m,e,t,n),b=i.prevZ,_=i.nextZ;for(;b&&b.z>=p&&_&&_.z<=M;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Qr(o,h,l,u,c,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Qr(o,h,l,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=v&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Qr(o,h,l,u,c,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=M;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&Qr(o,h,l,u,c,d,_.x,_.y)&&Xt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function O0(i,e){let t=i;do{let n=t.prev,s=t.next.next;!_r(n,s)&&rp(n,t,t.next,s)&&Ra(n,s)&&Ra(s,n)&&(e.push(n.i,t.i,s.i),Ca(t),Ca(t.next),t=i=s),t=t.next}while(t!==i);return Ts(t)}function H0(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Z0(a,o)){let l=ap(a,o);a=Ts(a,a.next),l=Ts(l,l.next),Aa(a,e,t,n,s,r,0),Aa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function z0(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=ip(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Y0(c))}s.sort(k0);for(let r=0;r<s.length;r++)t=V0(s[r],t);return t}function k0(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function V0(i,e){let t=G0(i,e);if(!t)return e;let n=ap(t,i);return Ts(n,n.next),Ts(t,t.next)}function G0(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(_r(i,t))return t;do{if(_r(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Ra(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&W0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function W0(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function X0(i,e,t,n){let s=i;do s.z===0&&(s.z=Gh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,q0(s)}function q0(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Gh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Y0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Qr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&sp(i,e,t,n,s,r,a,o)}function Z0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$0(i,e)&&(Ra(i,e)&&Ra(e,i)&&J0(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||_r(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function _r(i,e){return i.x===e.x&&i.y===e.y}function rp(i,e,t,n){let s=Vo(Xt(i,e,t)),r=Vo(Xt(i,e,n)),a=Vo(Xt(t,n,i)),o=Vo(Xt(t,n,e));return!!(s!==r&&a!==o||s===0&&ko(i,t,e)||r===0&&ko(i,n,e)||a===0&&ko(t,i,n)||o===0&&ko(t,e,n))}function ko(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vo(i){return i>0?1:i<0?-1:0}function $0(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ra(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function J0(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ap(i,e){let t=Wh(i.i,i.x,i.y),n=Wh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function cf(i,e,t,n){let s=Wh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function K0(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xh=class{static triangulate(e,t,n=2){return U0(e,t,n)}},di=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];hf(e),uf(n,e);let a=e.length;t.forEach(hf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,uf(n,t[l]);let o=Xh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function uf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ws=class i extends Mt{constructor(e=new Ln([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new tt(s,3)),this.setAttribute("uv",new tt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:j0,b,_=!1,T,w,P,y;if(p){b=p.getSpacedPoints(h),_=!0,d=!1;let ne=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,ne),w=new C,P=new C,y=new C}d||(m=0,f=0,g=0,v=0);let A=o.extractPoints(c),I=A.shape,D=A.holes;if(!di.isClockWise(I)){I=I.reverse();for(let ne=0,he=D.length;ne<he;ne++){let ue=D[ne];di.isClockWise(ue)&&(D[ne]=ue.reverse())}}function G(ne){let ue=10000000000000001e-36,fe=ne[0];for(let me=1;me<=ne.length;me++){let ae=me%ne.length,de=ne[ae],Le=de.x-fe.x,Ye=de.y-fe.y,L=Le*Le+Ye*Ye,_t=Math.max(Math.abs(de.x),Math.abs(de.y),Math.abs(fe.x),Math.abs(fe.y)),rt=ue*_t*_t;if(L<=rt){ne.splice(ae,1),me--;continue}fe=de}}G(I),D.forEach(G);let N=D.length,z=I;for(let ne=0;ne<N;ne++){let he=D[ne];I=I.concat(he)}function q(ne,he,ue){return he||Je("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(he,ue)}let Y=I.length;function oe(ne,he,ue){let fe,me,ae,de=ne.x-he.x,Le=ne.y-he.y,Ye=ue.x-ne.x,L=ue.y-ne.y,_t=de*de+Le*Le,rt=de*L-Le*Ye;if(Math.abs(rt)>Number.EPSILON){let R=Math.sqrt(_t),x=Math.sqrt(Ye*Ye+L*L),H=he.x-Le/R,W=he.y+de/R,$=ue.x-L/x,pe=ue.y+Ye/x,ge=(($-H)*L-(pe-W)*Ye)/(de*L-Le*Ye);fe=H+de*ge-ne.x,me=W+Le*ge-ne.y;let K=fe*fe+me*me;if(K<=2)return new re(fe,me);ae=Math.sqrt(K/2)}else{let R=!1;de>Number.EPSILON?Ye>Number.EPSILON&&(R=!0):de<-Number.EPSILON?Ye<-Number.EPSILON&&(R=!0):Math.sign(Le)===Math.sign(L)&&(R=!0),R?(fe=-Le,me=de,ae=Math.sqrt(_t)):(fe=de,me=Le,ae=Math.sqrt(_t/2))}return new re(fe/ae,me/ae)}let Z=[];for(let ne=0,he=z.length,ue=he-1,fe=ne+1;ne<he;ne++,ue++,fe++)ue===he&&(ue=0),fe===he&&(fe=0),Z[ne]=oe(z[ne],z[ue],z[fe]);let ee=[],se,He=Z.concat();for(let ne=0,he=N;ne<he;ne++){let ue=D[ne];se=[];for(let fe=0,me=ue.length,ae=me-1,de=fe+1;fe<me;fe++,ae++,de++)ae===me&&(ae=0),de===me&&(de=0),se[fe]=oe(ue[fe],ue[ae],ue[de]);ee.push(se),He=He.concat(se)}let Ie;if(m===0)Ie=di.triangulateShape(z,D);else{let ne=[],he=[];for(let ue=0;ue<m;ue++){let fe=ue/m,me=f*Math.cos(fe*Math.PI/2),ae=g*Math.sin(fe*Math.PI/2)+v;for(let de=0,Le=z.length;de<Le;de++){let Ye=q(z[de],Z[de],ae);xe(Ye.x,Ye.y,-me),fe===0&&ne.push(Ye)}for(let de=0,Le=N;de<Le;de++){let Ye=D[de];se=ee[de];let L=[];for(let _t=0,rt=Ye.length;_t<rt;_t++){let R=q(Ye[_t],se[_t],ae);xe(R.x,R.y,-me),fe===0&&L.push(R)}fe===0&&he.push(L)}}Ie=di.triangulateShape(ne,he)}let ft=Ie.length,it=g+v;for(let ne=0;ne<Y;ne++){let he=d?q(I[ne],He[ne],it):I[ne];_?(P.copy(T.normals[0]).multiplyScalar(he.x),w.copy(T.binormals[0]).multiplyScalar(he.y),y.copy(b[0]).add(P).add(w),xe(y.x,y.y,y.z)):xe(he.x,he.y,0)}for(let ne=1;ne<=h;ne++)for(let he=0;he<Y;he++){let ue=d?q(I[he],He[he],it):I[he];_?(P.copy(T.normals[ne]).multiplyScalar(ue.x),w.copy(T.binormals[ne]).multiplyScalar(ue.y),y.copy(b[ne]).add(P).add(w),xe(y.x,y.y,y.z)):xe(ue.x,ue.y,u/h*ne)}for(let ne=m-1;ne>=0;ne--){let he=ne/m,ue=f*Math.cos(he*Math.PI/2),fe=g*Math.sin(he*Math.PI/2)+v;for(let me=0,ae=z.length;me<ae;me++){let de=q(z[me],Z[me],fe);xe(de.x,de.y,u+ue)}for(let me=0,ae=D.length;me<ae;me++){let de=D[me];se=ee[me];for(let Le=0,Ye=de.length;Le<Ye;Le++){let L=q(de[Le],se[Le],fe);_?xe(L.x,L.y+b[h-1].y,b[h-1].x+ue):xe(L.x,L.y,u+ue)}}}dt(),J();function dt(){let ne=s.length/3;if(d){let he=0,ue=Y*he;for(let fe=0;fe<ft;fe++){let me=Ie[fe];Xe(me[2]+ue,me[1]+ue,me[0]+ue)}he=h+m*2,ue=Y*he;for(let fe=0;fe<ft;fe++){let me=Ie[fe];Xe(me[0]+ue,me[1]+ue,me[2]+ue)}}else{for(let he=0;he<ft;he++){let ue=Ie[he];Xe(ue[2],ue[1],ue[0])}for(let he=0;he<ft;he++){let ue=Ie[he];Xe(ue[0]+Y*h,ue[1]+Y*h,ue[2]+Y*h)}}n.addGroup(ne,s.length/3-ne,0)}function J(){let ne=s.length/3,he=0;te(z,he),he+=z.length;for(let ue=0,fe=D.length;ue<fe;ue++){let me=D[ue];te(me,he),he+=me.length}n.addGroup(ne,s.length/3-ne,1)}function te(ne,he){let ue=ne.length;for(;--ue>=0;){let fe=ue,me=ue-1;me<0&&(me=ne.length-1);for(let ae=0,de=h+m*2;ae<de;ae++){let Le=Y*ae,Ye=Y*(ae+1),L=he+fe+Le,_t=he+me+Le,rt=he+me+Ye,R=he+fe+Ye;Se(L,_t,rt,R)}}}function xe(ne,he,ue){l.push(ne),l.push(he),l.push(ue)}function Xe(ne,he,ue){qe(ne),qe(he),qe(ue);let fe=s.length/3,me=M.generateTopUV(n,s,fe-3,fe-2,fe-1);xt(me[0]),xt(me[1]),xt(me[2])}function Se(ne,he,ue,fe){qe(ne),qe(he),qe(fe),qe(he),qe(ue),qe(fe);let me=s.length/3,ae=M.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);xt(ae[0]),xt(ae[1]),xt(ae[3]),xt(ae[1]),xt(ae[2]),xt(ae[3])}function qe(ne){s.push(l[ne*3+0]),s.push(l[ne*3+1]),s.push(l[ne*3+2])}function xt(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Q0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ml[s.type]().fromJSON(s)),new i(n,e.options)}},j0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],v=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-u),new re(d,1-g),new re(v,1-p)]:[new re(o,1-l),new re(h,1-u),new re(f,1-g),new re(m,1-p)]}};function Q0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var As=class i extends Mt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ht(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new re,f=new C,g=new C,v=new C,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let M=0;M<=t;M++){let b=n+M*h*s,_=Math.sin(b),T=Math.cos(b);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*_,u.y=e[w].y,u.z=e[w].x*T,a.push(u.x,u.y,u.z),d.x=M/t,d.y=w/(e.length-1),o.push(d.x,d.y);let P=l[3*w+0]*_,y=l[3*w+1],A=l[3*w+0]*T;c.push(P,y,A)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){let _=b+M*e.length,T=_,w=_+e.length,P=_+e.length+1,y=_+1;r.push(T,w,y),r.push(P,y,w)}this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Rs=class i extends ya{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},bn=class i extends Mt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let b=0;b<c;b++){let _=b*u-r;g.push(_,-M,0),v.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let b=M+c*p,_=M+c*(p+1),T=M+1+c*(p+1),w=M+1+c*p;f.push(b,_,w),f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var es=class i extends Mt{constructor(e=new Ln([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new tt(s,3)),this.setAttribute("normal",new tt(r,3)),this.setAttribute("uv",new tt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let M=g[m];di.isClockWise(M)===!0&&(g[m]=M.reverse())}let v=di.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let M=g[m];f=f.concat(M)}for(let m=0,p=f.length;m<p;m++){let M=f[m];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let m=0,p=v.length;m<p;m++){let M=v[m],b=M[0]+u,_=M[1]+u,T=M[2]+u;n.push(b,_,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return eg(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function eg(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Et=class i extends Mt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let M=[],b=p/n,_=a+b*o,T=e*Math.cos(_),w=Math.sqrt(e*e-T*T),P=0;p===0&&a===0?P=.5/t:p===n&&l===Math.PI&&(P=-.5/t);for(let y=0;y<=t;y++){let A=y/t,I=s+A*r;u.x=-w*Math.cos(I),u.y=T,u.z=w*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(A+P,1-b),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){let b=h[p][M+1],_=h[p][M],T=h[p+1][M],w=h[p+1][M+1];(p!==0||a>0)&&f.push(b,_,w),(p!==n-1||l<Math.PI)&&f.push(_,T,w)}this.setIndex(f),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ti=class i extends Mt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new C,f=new C,g=new C;for(let v=0;v<=n;v++){let m=a+v/n*o;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(M),f.y=(e+t*Math.cos(m))*Math.sin(M),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(M),d.y=e*Math.sin(M),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(v/n)}}for(let v=1;v<=n;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,M=(s+1)*(v-1)+m-1,b=(s+1)*(v-1)+m,_=(s+1)*v+m;l.push(p,M,_),l.push(M,b,_)}this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Tn=class i extends Mt{constructor(e=new xi(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new re,h=new C,u=[],d=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new tt(u,3)),this.setAttribute("normal",new tt(d,3)),this.setAttribute("uv",new tt(f,2));function v(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),M(),p()}function m(b){h=e.getPointAt(b/t,h);let _=a.normals[b],T=a.binormals[b];for(let w=0;w<=s;w++){let P=w/s*Math.PI*2,y=Math.sin(P),A=-Math.cos(P);l.x=A*_.x+y*T.x,l.y=A*_.y+y*T.y,l.z=A*_.z+y*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let _=1;_<=s;_++){let T=(s+1)*(b-1)+(_-1),w=(s+1)*b+(_-1),P=(s+1)*b+_,y=(s+1)*(b-1)+_;g.push(T,w,y),g.push(w,P,y)}}function M(){for(let b=0;b<=t;b++)for(let _=0;_<=s;_++)c.x=b/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new ml[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(df(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(df(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function gn(i){let e={};for(let t=0;t<i.length;t++){let n=Ds(i[t]);for(let s in n)e[s]=n[s]}return e}function df(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tg(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function du(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var Fi={clone:Ds,merge:gn},ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ig=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,At=class extends ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ng,this.fragmentShader=ig,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=tg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ue().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new et().fromArray(s.value);break;case"m4":this.uniforms[n].value=new yt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vr=class extends At{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var xl=class extends ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_l=class extends ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Fh(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},vl=class extends ts{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zh:r=e,o=2*t-n;break;case kh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:a=e,l=2*n-t;break;case kh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+M*a[c+T]+b*a[l+T]+_*a[u+T];return r}},yl=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Ml=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Sl=class extends ts{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*d+g*2,M=u[p],b=u[p+1],_=e*d+g*2,T=h[_],w=h[_+1],P=rg(n,t,M,T,s);r[g]=op(P,v,b,w,m)}return r}};function op(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sg(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rg(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=op(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=sg(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Fh(e.settings)&&(n.settings={inTangents:ar(e.settings.inTangents,Array),outTangents:ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ml(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Sl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case na:t=this.InterpolantFactoryMethodDiscrete;break;case tl:t=this.InterpolantFactoryMethodLinear;break;case Xo:t=this.InterpolantFactoryMethodSmooth;break;case Oh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return na;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return Xo;case this.InterpolantFactoryMethodBezier:return Oh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Fh(this.settings)&&(ff(this.settings.inTangents,e),ff(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&o0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Xo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Fh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ff(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=tl;var ns=class extends Dn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=na;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var bl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};bl.prototype.ValueTypeName="color";var El=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};El.prototype.ValueTypeName="number";var Tl=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)zn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Pa=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Tl(this.times,this.values,this.getValueSize(),e)}};Pa.prototype.ValueTypeName="quaternion";Pa.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Dn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=na;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var wl=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};wl.prototype.ValueTypeName="vector";var Al=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},lp=new Al,Rl=class{constructor(e){this.manager=e!==void 0?e:lp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Rl.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ia=class extends yr{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Bh=new yt,pf=new C,mf=new C,La=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;pf.setFromMatrixPosition(e.matrixWorld),t.position.copy(pf),mf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mf),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Bh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Bh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ur||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Bh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Go=new C,Wo=new zn,ci=new C,Da=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Go,Wo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Wo,ci.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Go,Wo,ci),ci.x===1&&ci.y===1&&ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Go,Wo,ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},$i=new C,gf=new re,xf=new re,hn=class extends Da{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=nl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(hh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nl*2*Math.atan(Math.tan(hh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,t){return this.getViewBounds(e,gf,xf),t.subVectors(xf,gf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(hh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var qh=class extends La{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}},_i=class extends yr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ss=class extends Da{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yh=class extends La{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Yh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var or=-90,lr=1,Cl=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new hn(or,lr,e,t);s.layers=this.layers,this.add(s);let r=new hn(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new hn(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new hn(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new hn(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new hn(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ur)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pl=class extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Na=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ag.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ag(){this._document.hidden===!1&&this.reset()}var fu="\\[\\]\\.:\\/",og=new RegExp("["+fu+"]","g"),pu="[^"+fu+"]",lg="[^"+fu.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",pu),hg=/(WCOD+)?/.source.replace("WCOD",lg),ug=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pu),dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pu),fg=new RegExp("^"+cg+hg+ug+dg+"$"),pg=["material","materials","bones","map"],Zh=class{constructor(e,t,n){let s=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ht=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(og,"")}static parseTrackName(e){let t=fg.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);pg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ht.Composite=Zh;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var lS=new Float32Array(1);var yu=class yu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};yu.prototype.isMatrix2=!0;var $h=yu;function mu(i,e,t,n){let s=mg(n);switch(t){case ou:return i*e;case Ol:return i*e/s.components*s.byteLength;case Hl:return i*e/s.components*s.byteLength;case ls:return i*e*2/s.components*s.byteLength;case zl:return i*e*2/s.components*s.byteLength;case lu:return i*e*3/s.components*s.byteLength;case Wn:return i*e*4/s.components*s.byteLength;case kl:return i*e*4/s.components*s.byteLength;case Wa:case Xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qa:case Ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(i,16)*Math.max(e,8)/4;case Vl:case Wl:return Math.max(i,8)*Math.max(e,8)/2;case ql:case Yl:case $l:case Jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Za:case Kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ql:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case dc:case fc:case pc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mc:case gc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $a:case xc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mg(i){switch(i){case wn:case iu:return{byteLength:1,components:1};case br:case su:case nn:return{byteLength:2,components:1};case Fl:case Bl:return{byteLength:2,components:4};case ii:case Ul:case Gn:return{byteLength:4,components:1};case ru:case au:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Pp(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xg(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vg=`#ifdef USE_ALPHAHASH
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
#endif`,yg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eg=`#ifdef USE_AOMAP
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
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
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
#endif`,Lg=`#ifdef USE_BUMPMAP
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kg=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Vg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rx=`#ifdef USE_GRADIENTMAP
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
}`,ax=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,hx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,gx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rx=`#if defined( USE_POINTS_UV )
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
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ux=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,Vx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$x=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,i_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,f_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,__=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
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
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,T_=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w_=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,A_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,R_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P_=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,D_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,N_=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,U_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,F_=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,B_=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,O_=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,H_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,z_=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,k_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,V_=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,G_=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,W_=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,X_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,q_=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Y_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,$_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,J_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,K_=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,ot={alphahash_fragment:_g,alphahash_pars_fragment:vg,alphamap_fragment:yg,alphamap_pars_fragment:Mg,alphatest_fragment:Sg,alphatest_pars_fragment:bg,aomap_fragment:Eg,aomap_pars_fragment:Tg,batching_pars_vertex:wg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Ig,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Dg,clipping_planes_pars_fragment:Ng,clipping_planes_pars_vertex:Ug,clipping_planes_vertex:Fg,color_fragment:Bg,color_pars_fragment:Og,color_pars_vertex:Hg,color_vertex:zg,common:kg,cube_uv_reflection_fragment:Vg,defaultnormal_vertex:Gg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:qg,emissivemap_pars_fragment:Yg,colorspace_fragment:Zg,colorspace_pars_fragment:$g,envmap_fragment:Jg,envmap_common_pars_fragment:Kg,envmap_pars_fragment:jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:hx,envmap_vertex:ex,fog_vertex:tx,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:sx,gradientmap_pars_fragment:rx,lightmap_pars_fragment:ax,lights_lambert_fragment:ox,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:ux,lights_toon_pars_fragment:dx,lights_phong_fragment:fx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:xx,lights_fragment_maps:_x,lights_fragment_end:vx,lightprobes_pars_fragment:yx,logdepthbuf_fragment:Mx,logdepthbuf_pars_fragment:Sx,logdepthbuf_pars_vertex:bx,logdepthbuf_vertex:Ex,map_fragment:Tx,map_pars_fragment:wx,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Ix,morphcolor_vertex:Lx,morphnormal_vertex:Dx,morphtarget_pars_vertex:Nx,morphtarget_vertex:Ux,normal_fragment_begin:Fx,normal_fragment_maps:Bx,normal_pars_fragment:Ox,normal_pars_vertex:Hx,normal_vertex:zx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:Vx,clearcoat_normal_fragment_maps:Gx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:qx,packing:Yx,premultiplied_alpha_fragment:Zx,project_vertex:$x,dithering_fragment:Jx,dithering_pars_fragment:Kx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:e_,shadowmap_pars_vertex:t_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:a_,skinnormal_vertex:o_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:h_,tonemapping_pars_fragment:u_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:x_,background_vert:__,background_frag:v_,backgroundCube_vert:y_,backgroundCube_frag:M_,cube_vert:S_,cube_frag:b_,depth_vert:E_,depth_frag:T_,distance_vert:w_,distance_frag:A_,equirect_vert:R_,equirect_frag:C_,linedashed_vert:P_,linedashed_frag:I_,meshbasic_vert:L_,meshbasic_frag:D_,meshlambert_vert:N_,meshlambert_frag:U_,meshmatcap_vert:F_,meshmatcap_frag:B_,meshnormal_vert:O_,meshnormal_frag:H_,meshphong_vert:z_,meshphong_frag:k_,meshphysical_vert:V_,meshphysical_frag:G_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:q_,points_frag:Y_,shadow_vert:Z_,shadow_frag:$_,sprite_vert:J_,sprite_frag:K_},Ee={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Mi={basic:{uniforms:gn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:gn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:gn([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:gn([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:gn([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ue(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:gn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:gn([Ee.points,Ee.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:gn([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:gn([Ee.common,Ee.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:gn([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:gn([Ee.sprite,Ee.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:gn([Ee.common,Ee.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:gn([Ee.lights,Ee.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Mi.physical={uniforms:gn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Mc={r:0,b:0,g:0},j_=new yt,Ip=new et;Ip.set(-1,0,0,0,1,0,0,0,1);function Q_(i,e,t,n,s,r){let a=new Ue(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(M){let b=M.isScene===!0?M.background:null;if(b&&b.isTexture){let _=M.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(M){let b=!1,_=f(M);_===null?m(a,o):_&&_.isColor&&(m(_,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(M,b){let _=f(b);_&&(_.isCubeTexture||_.mapping===Va)?(c===void 0&&(c=new j(new Yt(1,1,1),new At({name:"BackgroundCubeMaterial",uniforms:Ds(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ip),c.material.toneMapped=ct.getTransfer(_.colorSpace)!==vt,(h!==_||u!==_.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new j(new bn(2,2),new At({name:"BackgroundMaterial",uniforms:Ds(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=ct.getTransfer(_.colorSpace)!==vt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,d=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,b){M.getRGB(Mc,du(i)),t.buffers.color.setClear(Mc.r,Mc.g,Mc.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,b=1){a.set(M),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function ev(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(D,O,G,N,z){let q=!1,Y=u(D,N,G,O);r!==Y&&(r=Y,c(r.object)),q=f(D,N,G,z),q&&g(D,N,G,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,_(D,O,G,N),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function u(D,O,G,N){let z=N.wireframe===!0,q=n[O.id];q===void 0&&(q={},n[O.id]=q);let Y=D.isInstancedMesh===!0?D.id:0,oe=q[Y];oe===void 0&&(oe={},q[Y]=oe);let Z=oe[G.id];Z===void 0&&(Z={},oe[G.id]=Z);let ee=Z[z];return ee===void 0&&(ee=d(l()),Z[z]=ee),ee}function d(D){let O=[],G=[],N=[];for(let z=0;z<t;z++)O[z]=0,G[z]=0,N[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:N,object:D,attributes:{},index:null}}function f(D,O,G,N){let z=r.attributes,q=O.attributes,Y=0,oe=G.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=z[Z],He=q[Z];if(He===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(He=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(He=D.instanceColor)),se===void 0||se.attribute!==He||He&&se.data!==He.data)return!0;Y++}return r.attributesNum!==Y||r.index!==N}function g(D,O,G,N){let z={},q=O.attributes,Y=0,oe=G.getAttributes();for(let Z in oe)if(oe[Z].location>=0){let se=q[Z];se===void 0&&(Z==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),Z==="instanceColor"&&D.instanceColor&&(se=D.instanceColor));let He={};He.attribute=se,se&&se.data&&(He.data=se.data),z[Z]=He,Y++}r.attributes=z,r.attributesNum=Y,r.index=N}function v(){let D=r.newAttributes;for(let O=0,G=D.length;O<G;O++)D[O]=0}function m(D){p(D,0)}function p(D,O){let G=r.newAttributes,N=r.enabledAttributes,z=r.attributeDivisors;G[D]=1,N[D]===0&&(i.enableVertexAttribArray(D),N[D]=1),z[D]!==O&&(i.vertexAttribDivisor(D,O),z[D]=O)}function M(){let D=r.newAttributes,O=r.enabledAttributes;for(let G=0,N=O.length;G<N;G++)O[G]!==D[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function b(D,O,G,N,z,q,Y){Y===!0?i.vertexAttribIPointer(D,O,G,z,q):i.vertexAttribPointer(D,O,G,N,z,q)}function _(D,O,G,N){v();let z=N.attributes,q=G.getAttributes(),Y=O.defaultAttributeValues;for(let oe in q){let Z=q[oe];if(Z.location>=0){let ee=z[oe];if(ee===void 0&&(oe==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),oe==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){let se=ee.normalized,He=ee.itemSize,Ie=e.get(ee);if(Ie===void 0)continue;let ft=Ie.buffer,it=Ie.type,dt=Ie.bytesPerElement,J=it===i.INT||it===i.UNSIGNED_INT||ee.gpuType===Ul;if(ee.isInterleavedBufferAttribute){let te=ee.data,xe=te.stride,Xe=ee.offset;if(te.isInstancedInterleavedBuffer){for(let Se=0;Se<Z.locationSize;Se++)p(Z.location+Se,te.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Se=0;Se<Z.locationSize;Se++)m(Z.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Se=0;Se<Z.locationSize;Se++)b(Z.location+Se,He/Z.locationSize,it,se,xe*dt,(Xe+He/Z.locationSize*Se)*dt,J)}else{if(ee.isInstancedBufferAttribute){for(let te=0;te<Z.locationSize;te++)p(Z.location+te,ee.meshPerAttribute);D.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let te=0;te<Z.locationSize;te++)m(Z.location+te);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let te=0;te<Z.locationSize;te++)b(Z.location+te,He/Z.locationSize,it,se,He*dt,He/Z.locationSize*te*dt,J)}}else if(Y!==void 0){let se=Y[oe];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(Z.location,se);break;case 3:i.vertexAttrib3fv(Z.location,se);break;case 4:i.vertexAttrib4fv(Z.location,se);break;default:i.vertexAttrib1fv(Z.location,se)}}}}M()}function T(){A();for(let D in n){let O=n[D];for(let G in O){let N=O[G];for(let z in N){let q=N[z];for(let Y in q)h(q[Y].object),delete q[Y];delete N[z]}}delete n[D]}}function w(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let G in O){let N=O[G];for(let z in N){let q=N[z];for(let Y in q)h(q[Y].object),delete q[Y];delete N[z]}}delete n[D.id]}function P(D){for(let O in n){let G=n[O];for(let N in G){let z=G[N];if(z[D.id]===void 0)continue;let q=z[D.id];for(let Y in q)h(q[Y].object),delete q[Y];delete z[D.id]}}}function y(D){for(let O in n){let G=n[O],N=D.isInstancedMesh===!0?D.id:0,z=G[N];if(z!==void 0){for(let q in z){let Y=z[q];for(let oe in Y)h(Y[oe].object),delete Y[oe];delete z[q]}delete G[N],Object.keys(G).length===0&&delete n[O]}}}function A(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function tv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Wn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let y=P===nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==wn&&P!==Gn&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ze("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:_,maxSamples:T,samples:w}}function iv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Kn,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:n,b=M*4,_=p.clippingState||null;l.value=_,_=h(g,d,b,f);for(let T=0;T!==b;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,_=f;b!==v;++b,_+=4)a.copy(u[b]).applyMatrix4(M,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var wr=4,sv=6,rv=20,av=256,Ja=new ss,cp=new Ue,Mu=null,Su=0,bu=0,Eu=!1,ov=new C,Ns=new C,bc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ov}=r;Mu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=up(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mu,Su,bu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,Tr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:nn,format:Wn,colorSpace:ia,depthBuffer:!1},s=hp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hp(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lv(r)),this._blurMaterial=hv(r,e,t),this._ggxMaterial=cv(r,e,t)}return s}_compileMaterial(e){let t=new j(new Mt,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,s,r){let l=new hn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(cp),u.toneMapping=ni,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new j(new Yt,new Gt({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(cp),p=!0);for(let b=0;b<6;b++){let _=b%3;_===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):_===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;Tr(s,_*T,b>2?T:0,T,T),u.setRenderTarget(s),p&&u.render(v,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=M}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===rs||e.mapping===Ls;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=dp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=up());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Tr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=c*1.25,f=u*d,{_lodMax:g}=this,v=this._sizeLods[n],m=3*v*(n>g-wr?n-g+wr:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,Tr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Tr(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,Ja)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],u=3*h*(s>this._lodMax-wr?s-this._lodMax+wr:0),d=4*(this._cubeSize-h);Tr(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(l,Ja)}};function lv(i){let e=[],t=[],n=i,s=i-wr+1+sv;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,d=6,f=3,g=new Float32Array(f*d*u),v=new Float32Array(f*d*u);for(let p=0;p<u;p++){let M=p%3*2/3-1,b=p>2?0:-1,_=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];g.set(_,f*d*p);for(let T=0;T<d;T++){let w=h[T*2]*2-1,P=h[T*2+1]*2-1;p===0?Ns.set(1,P,w):p===1?Ns.set(-w,1,-P):p===2?Ns.set(-w,P,1):p===3?Ns.set(-1,P,-w):p===4?Ns.set(-w,-1,P):Ns.set(w,P,-1),Ns.toArray(v,(p*d+T)*f)}}let m=new Mt;m.setAttribute("position",new wt(g,f)),m.setAttribute("outputDirection",new wt(v,f)),t.push(new j(m,null)),n>wr&&n--}return{lodMeshes:t,sizeLods:e}}function hp(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function cv(i,e,t){return new At({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:av,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function hv(i,e,t){return new At({name:"SphericalGaussianBlur",defines:{SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function up(){return new At({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function dp(){return new At({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ec=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new xa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),r=new At({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Vn});r.uniforms.tEquirect.value=t;let a=new j(s,r),o=t.minFilter;return t.minFilter===as&&(t.minFilter=un),new Cl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function uv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Ll||f===Dl)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Ec(g.height);return v.fromEquirectangularTexture(i,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Ll||f===Dl,v=f===rs||f===Ls;if(g||v){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new bc(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&l(M)?(n===null&&(n=new bc(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Ll?d.mapping=rs:f===Dl&&(d.mapping=Ls),d}function l(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function dv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&bs("WebGLRenderer: "+n+" extension not supported."),s}}}function fv(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,v=0;if(g===void 0)return;if(f!==null){let M=f.array;v=f.version;for(let b=0,_=M.length;b<_;b+=3){let T=M[b+0],w=M[b+1],P=M[b+2];d.push(T,w,w,P,P,T)}}else{let M=g.array;v=g.version;for(let b=0,_=M.length/3-1;b<_;b+=3){let T=b+0,w=b+1,P=b+2;d.push(T,w,w,P,P,T)}}let m=new(g.count>=65535?da:ua)(d,1);m.version=v;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function pv(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function mv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function gv(i,e,t){let n=new WeakMap,s=new kt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let A=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",A)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let _=o.attributes.position.count*b,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let w=new Float32Array(_*T*4*u),P=new oa(w,_,T,u);P.type=Gn,P.needsUpdate=!0;let y=b*4;for(let I=0;I<u;I++){let D=m[I],O=p[I],G=M[I],N=_*T*4*I;for(let z=0;z<D.count;z++){let q=z*y;f===!0&&(s.fromBufferAttribute(D,z),w[N+q+0]=s.x,w[N+q+1]=s.y,w[N+q+2]=s.z,w[N+q+3]=0),g===!0&&(s.fromBufferAttribute(O,z),w[N+q+4]=s.x,w[N+q+5]=s.y,w[N+q+6]=s.z,w[N+q+7]=0),v===!0&&(s.fromBufferAttribute(G,z),w[N+q+8]=s.x,w[N+q+9]=s.y,w[N+q+10]=s.z,w[N+q+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new re(_,T)},n.set(o,d),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var _v={[Fa]:"LINEAR_TONE_MAPPING",[Ba]:"REINHARD_TONE_MAPPING",[Oa]:"CINEON_TONE_MAPPING",[Is]:"ACES_FILMIC_TONE_MAPPING",[za]:"AGX_TONE_MAPPING",[ka]:"NEUTRAL_TONE_MAPPING",[Ha]:"CUSTOM_TONE_MAPPING"};function vv(i,e,t,n,s,r){let a=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Mt;c.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new tt([0,2,0,0,2,0],2));let h=new vr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new j(c,h),d=new ss(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,M=[],b=!1;this.setSize=function(_,T){a.setSize(_,T),o!==null&&o.setSize(_,T),l!==null&&l.setSize(_,T);for(let w=0;w<M.length;w++){let P=M[w];P.setSize&&P.setSize(_,T)}},this.setEffects=function(_){M=_,b=M.length>0&&M[0].isRenderPass===!0;let T=a.width,w=a.height;M.length>0&&o===null&&(o=new qt(T,w,{type:nn,depthBuffer:!1,stencilBuffer:!1}),l=new qt(T,w,{type:nn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){let y=M[P];y.setSize&&y.setSize(T,w)}},this.begin=function(_,T){if(v||_.toneMapping===ni&&M.length===0)return!1;if(p=T,T!==null){let w=T.width,P=T.height;(a.width!==w||a.height!==P)&&this.setSize(w,P)}return b===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=ni,!0},this.hasRenderPass=function(){return b},this.end=function(_,T){_.toneMapping=m,v=!0;let w=a,P=o;for(let y=0;y<M.length;y++){let A=M[y];A.enabled!==!1&&(A.render(_,P,w,T),A.needsSwap!==!1&&(w=P,P=P===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},ct.getTransfer(f)===vt&&(h.defines.SRGB_TRANSFER="");let y=_v[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(u,d),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Lp=new Sn,Au=new Qi(1,1),Dp=new oa,Np=new rl,Up=new xa,fp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),xp=new Float32Array(4);function Rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fp[s];if(r===void 0&&(r=new Float32Array(s),fp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ac(i,e){let t=pp[e];t===void 0&&(t=new Int32Array(e),pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function yv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Ev(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;xp.set(n),i.uniformMatrix2fv(this.addr,!1,xp),rn(t,n)}}function Tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),rn(t,n)}}function wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(sn(t,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),rn(t,n)}}function Av(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Iv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Uv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=t.isReversedDepthBuffer()?yc:vc,r=Au):r=Lp,t.setTexture2D(e||r,s)}function Fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Np,s)}function Bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Up,s)}function Ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Dp,s)}function Hv(i){switch(i){case 5126:return yv;case 35664:return Mv;case 35665:return Sv;case 35666:return bv;case 35674:return Ev;case 35675:return Tv;case 35676:return wv;case 5124:case 35670:return Av;case 35667:case 35671:return Rv;case 35668:case 35672:return Cv;case 35669:case 35673:return Pv;case 5125:return Iv;case 36294:return Lv;case 36295:return Dv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return Uv;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return Ov}}function zv(i,e){i.uniform1fv(this.addr,e)}function kv(i,e){let t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){let t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function Gv(i,e){let t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function Wv(i,e){let t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xv(i,e){let t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qv(i,e){let t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yv(i,e){i.uniform1iv(this.addr,e)}function Zv(i,e){i.uniform2iv(this.addr,e)}function $v(i,e){i.uniform3iv(this.addr,e)}function Jv(i,e){i.uniform4iv(this.addr,e)}function Kv(i,e){i.uniform1uiv(this.addr,e)}function jv(i,e){i.uniform2uiv(this.addr,e)}function Qv(i,e){i.uniform3uiv(this.addr,e)}function ey(i,e){i.uniform4uiv(this.addr,e)}function ty(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Au:a=Lp;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ny(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Np,r[a])}function iy(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Up,r[a])}function sy(i,e,t){let n=this.cache,s=e.length,r=Ac(t,s);sn(n,r)||(i.uniform1iv(this.addr,r),rn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Dp,r[a])}function ry(i){switch(i){case 5126:return zv;case 35664:return kv;case 35665:return Vv;case 35666:return Gv;case 35674:return Wv;case 35675:return Xv;case 35676:return qv;case 5124:case 35670:return Yv;case 35667:case 35671:return Zv;case 35668:case 35672:return $v;case 35669:case 35673:return Jv;case 5125:return Kv;case 36294:return jv;case 36295:return Qv;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hv(t.type)}},Cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ry(t.type)}},Pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Tu=/(\w+)(\])?(\[|\.)?/g;function _p(i,e){i.seq.push(e),i.map[e.id]=e}function ay(i,e,t){let n=i.name,s=n.length;for(Tu.lastIndex=0;;){let r=Tu.exec(n),a=Tu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){_p(t,c===void 0?new Ru(o,i,e):new Cu(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Pu(o),_p(t,u)),t=u}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ay(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var oy=37297,ly=0;function cy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var yp=new et;function hy(i){ct._getMatrix(yp,ct.workingColorSpace,i);let e=`mat3( ${yp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case sa:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Mp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+cy(i.getShaderSource(e),o)}else return r}function uy(i,e){let t=hy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var dy={[Fa]:"Linear",[Ba]:"Reinhard",[Oa]:"Cineon",[Is]:"ACESFilmic",[za]:"AgX",[ka]:"Neutral",[Ha]:"Custom"};function fy(i,e){let t=dy[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sc=new C;function py(){ct.getLuminanceCoefficients(Sc);let i=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function gy(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ja(i){return i!==""}function Sp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(i){return i.replace(_y,yy)}var vy=new Map;function yy(i,e){let t=ot[e];if(t===void 0){let n=vy.get(e);if(n!==void 0)t=ot[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Iu(t)}var My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ep(i){return i.replace(My,Sy)}function Sy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var by={[Ua]:"SHADOWMAP_TYPE_PCF",[Mr]:"SHADOWMAP_TYPE_VSM"};function Ey(i){return by[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ty={[rs]:"ENVMAP_TYPE_CUBE",[Ls]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function wy(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ty[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ay={[Ls]:"ENVMAP_MODE_REFRACTION"};function Ry(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ay[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cy={[tu]:"ENVMAP_BLENDING_MULTIPLY",[Hf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function Py(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cy[i.combine]||"ENVMAP_BLENDING_NONE"}function Iy(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ly(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Ey(t),c=wy(t),h=Ry(t),u=Py(t),d=Iy(t),f=my(t),g=gy(r),v=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[Tp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?ot.tonemapping_pars_fragment:"",t.toneMapping!==ni?fy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,uy("linearToOutputTexel",t.outputColorSpace),py(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),a=Iu(a),a=Sp(a,t),a=bp(a,t),o=Iu(o),o=Sp(o,t),o=bp(o,t),a=Ep(a),o=Ep(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=M+m+a,_=M+p+o,T=vp(s,s.VERTEX_SHADER,b),w=vp(s,s.FRAGMENT_SHADER,_);s.attachShader(v,T),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(T)||"",N=s.getShaderInfoLog(w)||"",z=O.trim(),q=G.trim(),Y=N.trim(),oe=!0,Z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,T,w);else{let ee=Mp(s,T,"vertex"),se=Mp(s,w,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+ee+`
`+se)}else z!==""?Ze("WebGLProgram: Program Info Log:",z):(q===""||Y==="")&&(Z=!1);Z&&(D.diagnostics={runnable:oe,programLog:z,vertexShader:{log:q,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(T),s.deleteShader(w),y=new Ar(s,v),A=xy(s,v)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(v,oy)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=T,this.fragmentShader=w,this}var Dy=0,Lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Du(e),t.set(e,n)),n}},Du=class{constructor(e){this.id=Dy++,this.code=e,this.usedTimes=0}};function Ny(i){return i===ls||i===Za||i===$a}function Uy(i,e,t,n,s,r){let a=new la,o=new Lu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,A,I,D,O,G){let N=D.fog,z=O.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,oe=e.get(y.envMap||q,Y),Z=oe&&oe.mapping===Va?oe.image.height:null,ee=f[y.type];y.precision!==null&&(d=n.getMaxPrecision(y.precision),d!==y.precision&&Ze("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let se=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,He=se!==void 0?se.length:0,Ie=0;z.morphAttributes.position!==void 0&&(Ie=1),z.morphAttributes.normal!==void 0&&(Ie=2),z.morphAttributes.color!==void 0&&(Ie=3);let ft,it,dt,J;if(ee){let Ut=Mi[ee];ft=Ut.vertexShader,it=Ut.fragmentShader}else{ft=y.vertexShader,it=y.fragmentShader;let Ut=o.getVertexShaderStage(y),St=o.getFragmentShaderStage(y);o.update(y,Ut,St),dt=Ut.id,J=St.id}let te=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Xe=O.isInstancedMesh===!0,Se=O.isBatchedMesh===!0,qe=!!y.map,xt=!!y.matcap,ne=!!oe,he=!!y.aoMap,ue=!!y.lightMap,fe=!!y.bumpMap&&y.wireframe===!1,me=!!y.normalMap,ae=!!y.displacementMap,de=!!y.emissiveMap,Le=!!y.metalnessMap,Ye=!!y.roughnessMap,L=y.anisotropy>0,_t=y.clearcoat>0,rt=y.dispersion>0,R=y.retroreflectivity>0,x=y.iridescence>0,H=y.sheen>0,W=y.transmission>0,$=L&&!!y.anisotropyMap,pe=_t&&!!y.clearcoatMap,ge=_t&&!!y.clearcoatNormalMap,K=_t&&!!y.clearcoatRoughnessMap,ie=x&&!!y.iridescenceMap,_e=x&&!!y.iridescenceThicknessMap,Ve=H&&!!y.sheenColorMap,be=H&&!!y.sheenRoughnessMap,ve=!!y.specularMap,Ge=!!y.specularColorMap,$e=!!y.specularIntensityMap,st=W&&!!y.transmissionMap,B=W&&!!y.thicknessMap,ye=!!y.gradientMap,Q=!!y.alphaMap,Me=y.alphaTest>0,Ae=!!y.alphaHash,le=!!y.extensions,We=ni;y.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(We=i.toneMapping);let ze={shaderID:ee,shaderType:y.type,shaderName:y.name,vertexShader:ft,fragmentShader:it,defines:y.defines,customVertexShaderID:dt,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Se,batchingColor:Se&&O._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&O.instanceColor!==null,instancingMorph:Xe&&O.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:xt,envMap:ne,envMapMode:ne&&oe.mapping,envMapCubeUVHeight:Z,aoMap:he,lightMap:ue,bumpMap:fe,normalMap:me,displacementMap:ae,emissiveMap:de,normalMapObjectSpace:me&&y.normalMapType===Gf,normalMapTangentSpace:me&&y.normalMapType===_c,packedNormalMap:me&&y.normalMapType===_c&&Ny(y.normalMap.format),metalnessMap:Le,roughnessMap:Ye,anisotropy:L,anisotropyMap:$,clearcoat:_t,clearcoatMap:pe,clearcoatNormalMap:ge,clearcoatRoughnessMap:K,dispersion:rt,retroreflection:R,iridescence:x,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:H,sheenColorMap:Ve,sheenRoughnessMap:be,specularMap:ve,specularColorMap:Ge,specularIntensityMap:$e,transmission:W,transmissionMap:st,thicknessMap:B,gradientMap:ye,opaque:y.transparent===!1&&y.blending===Sr&&y.alphaToCoverage===!1,alphaMap:Q,alphaTest:Me,alphaHash:Ae,combine:y.combine,mapUv:qe&&g(y.map.channel),aoMapUv:he&&g(y.aoMap.channel),lightMapUv:ue&&g(y.lightMap.channel),bumpMapUv:fe&&g(y.bumpMap.channel),normalMapUv:me&&g(y.normalMap.channel),displacementMapUv:ae&&g(y.displacementMap.channel),emissiveMapUv:de&&g(y.emissiveMap.channel),metalnessMapUv:Le&&g(y.metalnessMap.channel),roughnessMapUv:Ye&&g(y.roughnessMap.channel),anisotropyMapUv:$&&g(y.anisotropyMap.channel),clearcoatMapUv:pe&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(y.sheenRoughnessMap.channel),specularMapUv:ve&&g(y.specularMap.channel),specularColorMapUv:Ge&&g(y.specularColorMap.channel),specularIntensityMapUv:$e&&g(y.specularIntensityMap.channel),transmissionMapUv:st&&g(y.transmissionMap.channel),thicknessMapUv:B&&g(y.thicknessMap.channel),alphaMapUv:Q&&g(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(me||L),vertexNormals:!!z.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(qe||Q),fog:!!N,useFog:y.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||z.attributes.normal===void 0&&me===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Ie,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:We,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===vt,decodeVideoTextureEmissive:de&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===vt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Qt,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:le&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&y.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function m(y){let A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)A.push(I),A.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(p(A,y),M(A,y),A.push(i.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function p(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.anisotropyMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numSunLights),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numSunLightShadows),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.numLightProbes),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function M(y,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function b(y){let A=f[y.type],I;if(A){let D=Mi[A];I=Fi.clone(D.uniforms)}else I=y.uniforms;return I}function _(y,A){let I=h.get(A);return I!==void 0?++I.usedTimes:(I=new Ly(i,A,y,s),c.push(I),h.set(A,I)),I}function T(y){if(--y.usedTimes===0){let A=c.indexOf(y);c[A]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function w(y){o.remove(y)}function P(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:T,releaseShaderCache:w,programs:c,dispose:P}}function Fy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function By(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ap(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let M=i[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},i[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function l(d,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let b=o(d,f,g,v,m,p);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(d,f,g,v,m,p){let M=o(d,f,g,v,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):t.unshift(M)}function h(d,f){t.length>1&&t.sort(d||By),n.length>1&&n.sort(f||wp),s.length>1&&s.sort(f||wp)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Oy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ap,i.set(n,[a])):s>=r.length?(a=new Ap,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Hy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new C,color:new Ue};break;case"SpotLight":t={position:new C,direction:new C,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function zy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ky=0;function Vy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gy(i){let e=new Hy,t=zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new yt,a=new yt;function o(c){let h=0,u=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,b=0,_=0,T=0,w=0,P=0,y=0,A=0,I=0;c.sort(Vy);for(let O=0,G=c.length;O<G;O++){let N=c[O],z=N.color,q=N.intensity,Y=N.distance,oe=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ls?oe=N.shadow.map.texture:oe=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=z.r*q,u+=z.g*q,d+=z.b*q;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(N.sh.coefficients[Z],q);I++}else if(N.isSunLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ee=N.shadow,se=t.get(N);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize.copy(ee.mapSize).multiply(ee.getFrameExtents()),n.sunShadow[g]=se,n.sunShadowMap[g]=oe;let He=ee.getViewportCount();for(let Ie=0;Ie<He;Ie++)n.sunShadowMatrix[v+Ie]=ee.getMatrix(Ie),n.sunShadowCascade[v+Ie]=ee._cascadeData[Ie];v+=He,g++}n.sun[f]=Z,f++}else if(N.isDirectionalLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let ee=N.shadow,se=t.get(N);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=N.shadow.matrix,T++}n.directional[m]=Z,m++}else if(N.isSpotLight){let Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(z).multiplyScalar(q),Z.distance=Y,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,n.spot[M]=Z;let ee=N.shadow;if(N.map&&(n.spotLightMap[y]=N.map,y++,ee.updateMatrices(N),N.castShadow&&A++),n.spotLightMatrix[M]=ee.matrix,N.castShadow){let se=t.get(N);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,n.spotShadow[M]=se,n.spotShadowMap[M]=oe,P++}M++}else if(N.isRectAreaLight){let Z=e.get(N);Z.color.copy(z).multiplyScalar(q),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),n.rectArea[b]=Z,b++}else if(N.isPointLight){let Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){let ee=N.shadow,se=t.get(N);se.shadowIntensity=ee.intensity,se.shadowBias=ee.bias,se.shadowNormalBias=ee.normalBias,se.shadowRadius=ee.radius,se.shadowMapSize=ee.mapSize,se.shadowCameraNear=ee.camera.near,se.shadowCameraFar=ee.camera.far,n.pointShadow[p]=se,n.pointShadowMap[p]=oe,n.pointShadowMatrix[p]=N.shadow.matrix,w++}n.point[p]=Z,p++}else if(N.isHemisphereLight){let Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(q),Z.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[_]=Z,_++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let D=n.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==M||D.rectAreaLength!==b||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==T||D.numPointShadows!==w||D.numSpotShadows!==P||D.numSpotMaps!==y||D.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=b,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=I,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=M,D.rectAreaLength=b,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=T,D.numPointShadows=w,D.numSpotShadows=P,D.numSpotMaps=y,D.numLightProbes=I,n.version=ky++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let M=0,b=c.length;M<b;M++){let _=c[M];if(_.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(_.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let T=n.rectArea[v];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(_.width*.5,0,0),T.halfHeight.set(0,_.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(_.matrixWorld),T.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(_.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Rp(i){let e=new Gy(i),t=[],n=[],s=[];function r(d){u.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function l(d){s.push(d)}function c(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Wy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rp(i),e.set(s,[o])):r>=a.length?(o=new Rp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yy=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],Zy=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Cp=new yt,Ka=new C,wu=new C;function $y(i,e,t){let n=new gr,s=new re,r=new re,a=new kt,o=new xl,l=new _l,c={},h=t.maxTextureSize,u={[vi]:tn,[tn]:vi,[Qt]:Qt},d=new At({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Xy,fragmentShader:qy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new j(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ua;let p=this.type;this.render=function(w,P,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===yf&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ua);let A=i.getRenderTarget(),I=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending(Vn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=p!==this.type;G&&P.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(z=>z.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,z=w.length;N<z;N++){let q=w[N],Y=q.shadow;if(Y===void 0){Ze("WebGLShadowMap:",q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let oe=Y.getFrameExtents();s.multiply(oe),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/oe.x),s.x=r.x*oe.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/oe.y),s.y=r.y*oe.y,Y.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Z,Y.map===null||G===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Mr){if(q.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new qt(s.x,s.y,{format:ls,type:nn,minFilter:un,magFilter:un,generateMipmaps:!1}),Y.map.texture.name=q.name+".shadowMap",Y.map.depthTexture=new Qi(s.x,s.y,Gn),Y.map.depthTexture.name=q.name+".shadowMapDepth",Y.map.depthTexture.format=fi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=on,Y.map.depthTexture.magFilter=on}else q.isPointLight?(Y.map=new Ec(s.x),Y.map.depthTexture=new ul(s.x,ii)):(Y.map=new qt(s.x,s.y),Y.map.depthTexture=new Qi(s.x,s.y,ii)),Y.map.depthTexture.name=q.name+".shadowMap",Y.map.depthTexture.format=fi,this.type===Ua?(Y.map.depthTexture.compareFunction=Z?yc:vc,Y.map.depthTexture.minFilter=un,Y.map.depthTexture.magFilter=un):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=on,Y.map.depthTexture.magFilter=on);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let ee=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();q.isPointLight!==!0&&Y.updateMatrices(q,y);for(let se=0;se<ee;se++){let He=Y.getCamera(se);if(q.isPointLight){let Ie=Y.camera,ft=Y.matrix,it=q.distance||Ie.far;it!==Ie.far&&(Ie.far=it,Ie.updateProjectionMatrix()),Ka.setFromMatrixPosition(q.matrixWorld),Ie.position.copy(Ka),wu.copy(Ie.position),wu.add(Yy[se]),Ie.up.copy(Zy[se]),Ie.lookAt(wu),Ie.updateMatrixWorld(),ft.makeTranslation(-Ka.x,-Ka.y,-Ka.z),Cp.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Cp,Ie.coordinateSystem,Ie.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,se),i.clear();else{se===0&&(i.setRenderTarget(Y.map),i.clear());let Ie=Y.getViewport(se);a.set(r.x*Ie.x,r.y*Ie.y,r.x*Ie.z,r.y*Ie.w),O.viewport(a)}n=Y.getFrustum(se),_(P,y,He,q,this.type)}Y.isPointLightShadow!==!0&&this.type===Mr&&M(Y,y),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,I,D)};function M(w,P){let y=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new qt(s.x,s.y,{format:ls,type:nn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(P,null,y,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(P,null,y,f,v,null)}function b(w,P,y,A){let I=null,D=y.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(D!==void 0)I=D;else if(I=y.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let O=I.uuid,G=P.uuid,N=c[O];N===void 0&&(N={},c[O]=N);let z=N[G];z===void 0&&(z=I.clone(),N[G]=z,P.addEventListener("dispose",T)),I=z}if(I.visible=P.visible,I.wireframe=P.wireframe,A===Mr?I.side=P.shadowSide!==null?P.shadowSide:P.side:I.side=P.shadowSide!==null?P.shadowSide:u[P.side],I.alphaMap=P.alphaMap,I.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,I.map=P.map,I.clipShadows=P.clipShadows,I.clippingPlanes=P.clippingPlanes,I.clipIntersection=P.clipIntersection,I.displacementMap=P.displacementMap,I.displacementScale=P.displacementScale,I.displacementBias=P.displacementBias,I.wireframeLinewidth=P.wireframeLinewidth,I.linewidth=P.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=i.properties.get(I);O.light=y}return I}function _(w,P,y,A,I){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===Mr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,w.matrixWorld);let G=e.update(w),N=w.material;if(Array.isArray(N)){let z=G.groups;for(let q=0,Y=z.length;q<Y;q++){let oe=z[q],Z=N[oe.materialIndex];if(Z&&Z.visible){let ee=b(w,Z,A,I);w.onBeforeShadow(i,w,P,y,G,ee,oe),i.renderBufferDirect(y,null,G,ee,w,oe),w.onAfterShadow(i,w,P,y,G,ee,oe)}}}else if(N.visible){let z=b(w,N,A,I);w.onBeforeShadow(i,w,P,y,G,z,null),i.renderBufferDirect(y,null,G,z,w,null),w.onAfterShadow(i,w,P,y,G,z,null)}}let O=w.children;for(let G=0,N=O.length;G<N;G++)_(O[G],P,y,A,I)}function T(w){w.target.removeEventListener("dispose",T);for(let y in c){let A=c[y],I=w.target.uuid;I in A&&(A[I].dispose(),delete A[I])}}}function Jy(i,e){function t(){let B=!1,ye=new kt,Q=null,Me=new kt(0,0,0,0);return{setMask:function(Ae){Q!==Ae&&!B&&(i.colorMask(Ae,Ae,Ae,Ae),Q=Ae)},setLocked:function(Ae){B=Ae},setClear:function(Ae,le,We,ze,Ut){Ut===!0&&(Ae*=ze,le*=ze,We*=ze),ye.set(Ae,le,We,ze),Me.equals(ye)===!1&&(i.clearColor(Ae,le,We,ze),Me.copy(ye))},reset:function(){B=!1,Q=null,Me.set(-1,0,0,0)}}}function n(){let B=!1,ye=!1,Q=null,Me=null,Ae=null;return{setReversed:function(le){if(ye!==le){let We=e.get("EXT_clip_control");le?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ye=le;let ze=Ae;Ae=null,this.setClear(ze)}},getReversed:function(){return ye},setTest:function(le){le?te(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(le){Q!==le&&!B&&(i.depthMask(le),Q=le)},setFunc:function(le){if(ye&&(le=ep[le]),Me!==le){switch(le){case Yo:i.depthFunc(i.NEVER);break;case Zo:i.depthFunc(i.ALWAYS);break;case $o:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case Jo:i.depthFunc(i.EQUAL);break;case Ko:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=le}},setLocked:function(le){B=le},setClear:function(le){Ae!==le&&(Ae=le,ye&&(le=1-le),i.clearDepth(le))},reset:function(){B=!1,Q=null,Me=null,Ae=null,ye=!1}}}function s(){let B=!1,ye=null,Q=null,Me=null,Ae=null,le=null,We=null,ze=null,Ut=null;return{setTest:function(St){B||(St?te(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(St){ye!==St&&!B&&(i.stencilMask(St),ye=St)},setFunc:function(St,Yn,oi){(Q!==St||Me!==Yn||Ae!==oi)&&(i.stencilFunc(St,Yn,oi),Q=St,Me=Yn,Ae=oi)},setOp:function(St,Yn,oi){(le!==St||We!==Yn||ze!==oi)&&(i.stencilOp(St,Yn,oi),le=St,We=Yn,ze=oi)},setLocked:function(St){B=St},setClear:function(St){Ut!==St&&(i.clearStencil(St),Ut=St)},reset:function(){B=!1,ye=null,Q=null,Me=null,Ae=null,le=null,We=null,ze=null,Ut=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,b=null,_=null,T=null,w=null,P=null,y=new Ue(0,0,0),A=0,I=!1,D=null,O=null,G=null,N=null,z=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,oe=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Z)[1]),Y=oe>=1):Z.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),Y=oe>=2);let ee=null,se={},He=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),ft=new kt().fromArray(He),it=new kt().fromArray(Ie);function dt(B,ye,Q,Me){let Ae=new Uint8Array(4),le=i.createTexture();i.bindTexture(B,le),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<Q;We++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ye,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Ae):i.texImage2D(ye+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ae);return le}let J={};J[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(hr),fe(!1),me(Jh),te(i.CULL_FACE),he(Vn);function te(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function xe(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Xe(B,ye){return d[B]!==ye?(i.bindFramebuffer(B,ye),d[B]=ye,B===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ye),B===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ye),!0):!1}function Se(B,ye){let Q=g,Me=!1;if(B){Q=f.get(ye),Q===void 0&&(Q=[],f.set(ye,Q));let Ae=B.textures;if(Q.length!==Ae.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let le=0,We=Ae.length;le<We;le++)Q[le]=i.COLOR_ATTACHMENT0+le;Q.length=Ae.length,Me=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,Me=!0);Me&&i.drawBuffers(Q)}function qe(B){return v!==B?(i.useProgram(B),v=B,!0):!1}let xt={[Ps]:i.FUNC_ADD,[Sf]:i.FUNC_SUBTRACT,[bf]:i.FUNC_REVERSE_SUBTRACT};xt[Ef]=i.MIN,xt[Tf]=i.MAX;let ne={[wf]:i.ZERO,[Af]:i.ONE,[Rf]:i.SRC_COLOR,[Qh]:i.SRC_ALPHA,[Nf]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[eu]:i.ONE_MINUS_SRC_ALPHA,[Df]:i.ONE_MINUS_DST_COLOR,[If]:i.ONE_MINUS_DST_ALPHA,[Uf]:i.CONSTANT_COLOR,[Ff]:i.ONE_MINUS_CONSTANT_COLOR,[Bf]:i.CONSTANT_ALPHA,[Of]:i.ONE_MINUS_CONSTANT_ALPHA};function he(B,ye,Q,Me,Ae,le,We,ze,Ut,St){if(B===Vn){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),B!==Mf){if(B!==p||St!==I){if((M!==Ps||T!==Ps)&&(i.blendEquation(i.FUNC_ADD),M=Ps,T=Ps),St)switch(B){case Sr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gt:i.blendFunc(i.ONE,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",B);break}else switch(B){case Sr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kh:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jh:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",B);break}b=null,_=null,w=null,P=null,y.set(0,0,0),A=0,p=B,I=St}return}Ae=Ae||ye,le=le||Q,We=We||Me,(ye!==M||Ae!==T)&&(i.blendEquationSeparate(xt[ye],xt[Ae]),M=ye,T=Ae),(Q!==b||Me!==_||le!==w||We!==P)&&(i.blendFuncSeparate(ne[Q],ne[Me],ne[le],ne[We]),b=Q,_=Me,w=le,P=We),(ze.equals(y)===!1||Ut!==A)&&(i.blendColor(ze.r,ze.g,ze.b,Ut),y.copy(ze),A=Ut),p=B,I=!1}function ue(B,ye){B.side===Qt?xe(i.CULL_FACE):te(i.CULL_FACE);let Q=B.side===tn;ye&&(Q=!Q),fe(Q),B.blending===Sr&&B.transparent===!1?he(Vn):he(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Me=B.stencilWrite;o.setTest(Me),Me&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),de(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(B){D!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),D=B)}function me(B){B!==_f?(te(i.CULL_FACE),B!==O&&(B===Jh?i.cullFace(i.BACK):B===vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),O=B}function ae(B){B!==G&&(Y&&i.lineWidth(B),G=B)}function de(B,ye,Q){B?(te(i.POLYGON_OFFSET_FILL),(N!==ye||z!==Q)&&(N=ye,z=Q,a.getReversed()&&(ye=-ye),i.polygonOffset(ye,Q))):xe(i.POLYGON_OFFSET_FILL)}function Le(B){B?te(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ye(B){B===void 0&&(B=i.TEXTURE0+q-1),ee!==B&&(i.activeTexture(B),ee=B)}function L(B,ye,Q){Q===void 0&&(ee===null?Q=i.TEXTURE0+q-1:Q=ee);let Me=se[Q];Me===void 0&&(Me={type:void 0,texture:void 0},se[Q]=Me),(Me.type!==B||Me.texture!==ye)&&(ee!==Q&&(i.activeTexture(Q),ee=Q),i.bindTexture(B,ye||J[B]),Me.type=B,Me.texture=ye)}function _t(){let B=se[ee];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function H(){try{i.texSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function pe(){try{i.texStorage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function ge(){try{i.texStorage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function K(){try{i.texImage2D(...arguments)}catch(B){Je("WebGLState:",B)}}function ie(){try{i.texImage3D(...arguments)}catch(B){Je("WebGLState:",B)}}function _e(B){return u[B]!==void 0?u[B]:i.getParameter(B)}function Ve(B,ye){u[B]!==ye&&(i.pixelStorei(B,ye),u[B]=ye)}function be(B){ft.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ft.copy(B))}function ve(B){it.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),it.copy(B))}function Ge(B,ye){let Q=c.get(ye);Q===void 0&&(Q=new WeakMap,c.set(ye,Q));let Me=Q.get(B);Me===void 0&&(Me=i.getUniformBlockIndex(ye,B.name),Q.set(B,Me))}function $e(B,ye){let Me=c.get(ye).get(B);l.get(ye)!==Me&&(i.uniformBlockBinding(ye,Me,B.__bindingPointIndex),l.set(ye,Me))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ee=null,se={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,b=null,_=null,T=null,w=null,P=null,y=new Ue(0,0,0),A=0,I=!1,D=null,O=null,G=null,N=null,z=null,ft.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:xe,bindFramebuffer:Xe,drawBuffers:Se,useProgram:qe,setBlending:he,setMaterial:ue,setFlipSided:fe,setCullFace:me,setLineWidth:ae,setPolygonOffset:de,setScissorTest:Le,activeTexture:Ye,bindTexture:L,unbindTexture:_t,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:K,texImage3D:ie,pixelStorei:Ve,getParameter:_e,updateUBOMapping:Ge,uniformBlockBinding:$e,texStorage2D:pe,texStorage3D:ge,texSubImage2D:x,texSubImage3D:H,compressedTexSubImage2D:W,compressedTexSubImage3D:$,scissor:be,viewport:ve,reset:st}}function Ky(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return g?new OffscreenCanvas(R,x):ra("canvas")}function m(R,x,H){let W=1,$=rt(R);if(($.width>H||$.height>H)&&(W=H/Math.max($.width,$.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(W*$.width),ge=Math.floor(W*$.height);d===void 0&&(d=v(pe,ge));let K=x?v(pe,ge):d;return K.width=pe,K.height=ge,K.getContext("2d").drawImage(R,0,0,pe,ge),Ze("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+pe+"x"+ge+")."),K}else return"data"in R&&Ze("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){i.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(R,x,H,W,$,pe=!1){if(R!==null){if(i[R]!==void 0)return i[R];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ge;W&&(ge=e.get("EXT_texture_norm16"),ge||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=x;if(x===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8),H===i.UNSIGNED_SHORT&&ge&&(K=ge.R16_EXT),H===i.SHORT&&ge&&(K=ge.R16_SNORM_EXT)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),x===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8),H===i.UNSIGNED_SHORT&&ge&&(K=ge.RG16_EXT),H===i.SHORT&&ge&&(K=ge.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),x===i.RGB&&(H===i.UNSIGNED_SHORT&&ge&&(K=ge.RGB16_EXT),H===i.SHORT&&ge&&(K=ge.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),x===i.RGBA){let ie=pe?sa:ct.getTransfer($);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=ie===vt?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&ge&&(K=ge.RGBA16_EXT),H===i.SHORT&&ge&&(K=ge.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function T(R,x){let H;return R?x===null||x===ii||x===Er?H=i.DEPTH24_STENCIL8:x===Gn?H=i.DEPTH32F_STENCIL8:x===br&&(H=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ii||x===Er?H=i.DEPTH_COMPONENT24:x===Gn?H=i.DEPTH_COMPONENT32F:x===br&&(H=i.DEPTH_COMPONENT16),H}function w(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==un?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function P(R){let x=R.target;x.removeEventListener("dispose",P),A(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&u.delete(x)}function y(R){let x=R.target;x.removeEventListener("dispose",y),D(x)}function A(R){let x=n.get(R);if(x.__webglInit===void 0)return;let H=R.source,W=f.get(H);if(W){let $=W[x.__cacheKey];$.usedTimes--,$.usedTimes===0&&I(R),Object.keys(W).length===0&&f.delete(H)}n.remove(R)}function I(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let H=R.source,W=f.get(H);delete W[x.__cacheKey],a.memory.textures--}function D(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let $=0;$<x.__webglFramebuffer[W].length;$++)i.deleteFramebuffer(x.__webglFramebuffer[W][$]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let H=R.textures;for(let W=0,$=H.length;W<$;W++){let pe=n.get(H[W]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(H[W])}n.remove(R)}let O=0;function G(){O=0}function N(){return O}function z(R){O=R}function q(){let R=O;return R>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,R}function Y(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function oe(R,x){let H=n.get(R);if(R.isVideoTexture&&L(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&H.__version!==R.version){let W=R.image;if(W===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(H,R,x);return}}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function Z(R,x){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){xe(H,R,x);return}else R.isExternalTexture&&(H.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function ee(R,x){let H=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){xe(H,R,x);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function se(R,x){let H=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&H.__version!==R.version){Xe(H,R,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}let He={[Ji]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[el]:i.MIRRORED_REPEAT},Ie={[on]:i.NEAREST,[kf]:i.NEAREST_MIPMAP_NEAREST,[Ga]:i.NEAREST_MIPMAP_LINEAR,[un]:i.LINEAR,[Nl]:i.LINEAR_MIPMAP_NEAREST,[as]:i.LINEAR_MIPMAP_LINEAR},ft={[Xf]:i.NEVER,[Jf]:i.ALWAYS,[qf]:i.LESS,[vc]:i.LEQUAL,[Yf]:i.EQUAL,[yc]:i.GEQUAL,[Zf]:i.GREATER,[$f]:i.NOTEQUAL};function it(R,x){if(x.type===Gn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===un||x.magFilter===Nl||x.magFilter===Ga||x.magFilter===as||x.minFilter===un||x.minFilter===Nl||x.minFilter===Ga||x.minFilter===as)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,He[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,He[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,He[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Ie[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Ie[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,ft[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===on||x.minFilter!==Ga&&x.minFilter!==as||x.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function dt(R,x){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",P));let W=x.source,$=f.get(W);$===void 0&&($={},f.set(W,$));let pe=Y(x);if(pe!==R.__cacheKey){$[pe]===void 0&&($[pe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[pe].usedTimes++;let ge=$[R.__cacheKey];ge!==void 0&&($[R.__cacheKey].usedTimes--,ge.usedTimes===0&&I(x)),R.__cacheKey=pe,R.__webglTexture=$[pe].texture}return H}function J(R,x,H){return Math.floor(Math.floor(R/H)/x)}function te(R,x,H,W){let pe=R.updateRanges;if(pe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,H,W,x.data);else{pe.sort((Ve,be)=>Ve.start-be.start);let ge=0;for(let Ve=1;Ve<pe.length;Ve++){let be=pe[ge],ve=pe[Ve],Ge=be.start+be.count,$e=J(ve.start,x.width,4),st=J(be.start,x.width,4);ve.start<=Ge+1&&$e===st&&J(ve.start+ve.count-1,x.width,4)===$e?be.count=Math.max(be.count,ve.start+ve.count-be.start):(++ge,pe[ge]=ve)}pe.length=ge+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),_e=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Ve=0,be=pe.length;Ve<be;Ve++){let ve=pe[Ve],Ge=Math.floor(ve.start/4),$e=Math.ceil(ve.count/4),st=Ge%x.width,B=Math.floor(Ge/x.width),ye=$e,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,st),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,st,B,ye,Q,H,W,x.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,_e)}}function xe(R,x,H){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);let $=dt(R,x),pe=x.source;t.bindTexture(W,R.__webglTexture,i.TEXTURE0+H);let ge=n.get(pe);if(pe.version!==ge.__version||$===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Q=ct.getPrimaries(ct.workingColorSpace),Me=x.colorSpace===Ni?null:ct.getPrimaries(x.colorSpace),Ae=x.colorSpace===Ni||Q===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ie=m(x.image,!1,s.maxTextureSize);ie=_t(x,ie);let _e=r.convert(x.format,x.colorSpace),Ve=r.convert(x.type),be=_(x.internalFormat,_e,Ve,x.normalized,x.colorSpace,x.isVideoTexture);it(W,x);let ve,Ge=x.mipmaps,$e=x.isVideoTexture!==!0,st=ge.__version===void 0||$===!0,B=pe.dataReady,ye=w(x,ie);if(x.isDepthTexture)be=T(x.format===os,x.type),st&&($e?t.texStorage2D(i.TEXTURE_2D,1,be,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,_e,Ve,null));else if(x.isDataTexture)if(Ge.length>0){$e&&st&&t.texStorage2D(i.TEXTURE_2D,ye,be,Ge[0].width,Ge[0].height);for(let Q=0,Me=Ge.length;Q<Me;Q++)ve=Ge[Q],$e?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,Ve,ve.data):t.texImage2D(i.TEXTURE_2D,Q,be,ve.width,ve.height,0,_e,Ve,ve.data);x.generateMipmaps=!1}else $e?(st&&t.texStorage2D(i.TEXTURE_2D,ye,be,ie.width,ie.height),B&&te(x,ie,_e,Ve)):t.texImage2D(i.TEXTURE_2D,0,be,ie.width,ie.height,0,_e,Ve,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$e&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,Ge[0].width,Ge[0].height,ie.depth);for(let Q=0,Me=Ge.length;Q<Me;Q++)if(ve=Ge[Q],x.format!==Wn)if(_e!==null)if($e){if(B)if(x.layerUpdates.size>0){let Ae=mu(ve.width,ve.height,x.format,x.type);for(let le of x.layerUpdates){let We=ve.data.subarray(le*Ae/ve.data.BYTES_PER_ELEMENT,(le+1)*Ae/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,le,ve.width,ve.height,1,_e,We)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,ie.depth,_e,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,be,ve.width,ve.height,ie.depth,0,ve.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,ie.depth,_e,Ve,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,be,ve.width,ve.height,ie.depth,0,_e,Ve,ve.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{$e&&st&&t.texStorage2D(i.TEXTURE_2D,ye,be,Ge[0].width,Ge[0].height);for(let Q=0,Me=Ge.length;Q<Me;Q++)ve=Ge[Q],x.format!==Wn?_e!==null?$e?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,be,ve.width,ve.height,0,ve.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ve.width,ve.height,_e,Ve,ve.data):t.texImage2D(i.TEXTURE_2D,Q,be,ve.width,ve.height,0,_e,Ve,ve.data)}else if(x.isDataArrayTexture)if($e){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,be,ie.width,ie.height,ie.depth),B)if(x.layerUpdates.size>0){let Q=mu(ie.width,ie.height,x.format,x.type);for(let Me of x.layerUpdates){let Ae=ie.data.subarray(Me*Q/ie.data.BYTES_PER_ELEMENT,(Me+1)*Q/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,_e,Ve,Ae)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ve,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,_e,Ve,ie.data);else if(x.isData3DTexture)$e?(st&&t.texStorage3D(i.TEXTURE_3D,ye,be,ie.width,ie.height,ie.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Ve,ie.data)):t.texImage3D(i.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,_e,Ve,ie.data);else if(x.isFramebufferTexture){if(st)if($e)t.texStorage2D(i.TEXTURE_2D,ye,be,ie.width,ie.height);else{let Q=ie.width,Me=ie.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,be,Q,Me,0,_e,Ve,null),Q>>=1,Me>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ie.parentNode!==Q){Q.appendChild(ie),u.add(x),Q.onpaint=Me=>{let Ae=Me.changedElements;for(let le of u)Ae.includes(le.image)&&(le.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let Ae=i.RGBA,le=i.RGBA,We=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ae,le,We,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if($e&&st){let Q=rt(Ge[0]);t.texStorage2D(i.TEXTURE_2D,ye,be,Q.width,Q.height)}for(let Q=0,Me=Ge.length;Q<Me;Q++)ve=Ge[Q],$e?B&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,_e,Ve,ve):t.texImage2D(i.TEXTURE_2D,Q,be,_e,Ve,ve);x.generateMipmaps=!1}else if($e){if(st){let Q=rt(ie);t.texStorage2D(i.TEXTURE_2D,ye,be,Q.width,Q.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,_e,Ve,ie)}else t.texImage2D(i.TEXTURE_2D,0,be,_e,Ve,ie);p(x)&&M(W),ge.__version=pe.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Xe(R,x,H){if(x.image.length!==6)return;let W=dt(R,x),$=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+H);let pe=n.get($);if($.version!==pe.__version||W===!0){t.activeTexture(i.TEXTURE0+H);let ge=ct.getPrimaries(ct.workingColorSpace),K=x.colorSpace===Ni?null:ct.getPrimaries(x.colorSpace),ie=x.colorSpace===Ni||ge===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let _e=x.isCompressedTexture||x.image[0].isCompressedTexture,Ve=x.image[0]&&x.image[0].isDataTexture,be=[];for(let le=0;le<6;le++)!_e&&!Ve?be[le]=m(x.image[le],!0,s.maxCubemapSize):be[le]=Ve?x.image[le].image:x.image[le],be[le]=_t(x,be[le]);let ve=be[0],Ge=r.convert(x.format,x.colorSpace),$e=r.convert(x.type),st=_(x.internalFormat,Ge,$e,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,ye=pe.__version===void 0||W===!0,Q=$.dataReady,Me=w(x,ve);it(i.TEXTURE_CUBE_MAP,x);let Ae;if(_e){B&&ye&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,st,ve.width,ve.height);for(let le=0;le<6;le++){Ae=be[le].mipmaps;for(let We=0;We<Ae.length;We++){let ze=Ae[We];x.format!==Wn?Ge!==null?B?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,ze.width,ze.height,Ge,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,st,ze.width,ze.height,0,ze.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,0,0,ze.width,ze.height,Ge,$e,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We,st,ze.width,ze.height,0,Ge,$e,ze.data)}}}else{if(Ae=x.mipmaps,B&&ye){Ae.length>0&&Me++;let le=rt(be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Me,st,le.width,le.height)}for(let le=0;le<6;le++)if(Ve){B?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be[le].width,be[le].height,Ge,$e,be[le].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,be[le].width,be[le].height,0,Ge,$e,be[le].data);for(let We=0;We<Ae.length;We++){let Ut=Ae[We].image[le].image;B?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,Ut.width,Ut.height,Ge,$e,Ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,st,Ut.width,Ut.height,0,Ge,$e,Ut.data)}}else{B?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ge,$e,be[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,st,Ge,$e,be[le]);for(let We=0;We<Ae.length;We++){let ze=Ae[We];B?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,0,0,Ge,$e,ze.image[le]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+le,We+1,st,Ge,$e,ze.image[le])}}}p(x)&&M(i.TEXTURE_CUBE_MAP),pe.__version=$.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Se(R,x,H,W,$,pe){let ge=r.convert(H.format,H.colorSpace),K=r.convert(H.type),ie=_(H.internalFormat,ge,K,H.normalized,H.colorSpace),_e=n.get(x),Ve=n.get(H);if(Ve.__renderTarget=x,!_e.__hasExternalTextures){let be=Math.max(1,x.width>>pe),ve=Math.max(1,x.height>>pe);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,pe,ie,be,ve,x.depth,0,ge,K,null):t.texImage2D($,pe,ie,be,ve,0,ge,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,$,Ve.__webglTexture,0,Le(x)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,$,Ve.__webglTexture,pe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(R,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let W=x.depthTexture,$=W&&W.isDepthTexture?W.type:null,pe=T(x.stencilBuffer,$),ge=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(x),pe,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(x),pe,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,pe,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,R)}else{let W=x.textures;for(let $=0;$<W.length;$++){let pe=W[$],ge=r.convert(pe.format,pe.colorSpace),K=r.convert(pe.type),ie=_(pe.internalFormat,ge,K,pe.normalized,pe.colorSpace);Ye(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le(x),ie,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le(x),ie,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ie,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function xt(R,x,H){let W=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(x.depthTexture);if($.__renderTarget=x,(!$.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if($.__webglInit===void 0&&($.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),it(i.TEXTURE_CUBE_MAP,x.depthTexture);let _e=r.convert(x.depthTexture.format),Ve=r.convert(x.depthTexture.type),be;x.depthTexture.format===fi?be=i.DEPTH_COMPONENT24:x.depthTexture.format===os&&(be=i.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,be,x.width,x.height,0,_e,Ve,null)}}else oe(x.depthTexture,0);let pe=$.__webglTexture,ge=Le(x),K=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,ie=x.depthTexture.format===os?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===fi)Ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,pe,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,pe,0);else if(x.depthTexture.format===os)Ye(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,K,pe,0,ge):i.framebufferTexture2D(i.FRAMEBUFFER,ie,K,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(R){let x=n.get(R),H=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let $=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",$)};W.addEventListener("dispose",$),x.__depthDisposeCallback=$}x.__boundDepthTexture=W}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(H)for(let W=0;W<6;W++)xt(x.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?xt(x.__webglFramebuffer[0],R,0):xt(x.__webglFramebuffer,R,0)}else if(H){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),qe(x.__webglDepthbuffer[W],R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,pe)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),qe(x.__webglDepthbuffer,R,!1);else{let $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,pe),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,pe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function he(R,x,H){let W=n.get(R);x!==void 0&&Se(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&ne(R)}function ue(R){let x=R.texture,H=n.get(R),W=n.get(x);R.addEventListener("dispose",y);let $=R.textures,pe=R.isWebGLCubeRenderTarget===!0,ge=$.length>1;if(ge||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,a.memory.textures++),pe){H.__webglFramebuffer=[];for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[K]=[];for(let ie=0;ie<x.mipmaps.length;ie++)H.__webglFramebuffer[K][ie]=i.createFramebuffer()}else H.__webglFramebuffer[K]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let K=0;K<x.mipmaps.length;K++)H.__webglFramebuffer[K]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(ge)for(let K=0,ie=$.length;K<ie;K++){let _e=n.get($[K]);_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ye(R)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let ie=$[K];H.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[K]);let _e=r.convert(ie.format,ie.colorSpace),Ve=r.convert(ie.type),be=_(ie.internalFormat,_e,Ve,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ve=Le(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,be,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,H.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),qe(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(pe){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),it(i.TEXTURE_CUBE_MAP,x);for(let K=0;K<6;K++)if(x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)Se(H.__webglFramebuffer[K][ie],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie);else Se(H.__webglFramebuffer[K],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(x)&&M(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let K=0,ie=$.length;K<ie;K++){let _e=$[K],Ve=n.get(_e),be=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(be=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,Ve.__webglTexture),it(be,_e),Se(H.__webglFramebuffer,R,_e,i.COLOR_ATTACHMENT0+K,be,0),p(_e)&&M(be)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,W.__webglTexture),it(K,x),x.mipmaps&&x.mipmaps.length>0)for(let ie=0;ie<x.mipmaps.length;ie++)Se(H.__webglFramebuffer[ie],R,x,i.COLOR_ATTACHMENT0,K,ie);else Se(H.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,K,0);p(x)&&M(K),t.unbindTexture()}R.depthBuffer&&ne(R)}function fe(R){let x=R.textures;for(let H=0,W=x.length;H<W;H++){let $=x[H];if(p($)){let pe=b(R),ge=n.get($).__webglTexture;t.bindTexture(pe,ge),M(pe),t.unbindTexture()}}}let me=[],ae=[];function de(R){if(R.samples>0){if(Ye(R)===!1){let x=R.textures,H=R.width,W=R.height,$=i.COLOR_BUFFER_BIT,pe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=n.get(R),K=x.length>1;if(K)for(let _e=0;_e<x.length;_e++)t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let _e=0;_e<x.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ve=n.get(x[_e]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,H,W,0,0,H,W,$,i.NEAREST),l===!0&&(me.length=0,ae.length=0,me.push(i.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(me.push(pe),ae.push(pe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ae)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,me))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let _e=0;_e<x.length;_e++){t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,ge.__webglColorRenderbuffer[_e]);let Ve=n.get(x[_e]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ge.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Le(R){return Math.min(s.maxSamples,R.samples)}function Ye(R){let x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function L(R){let x=a.render.frame;h.get(R)!==x&&(h.set(R,x),R.update())}function _t(R,x){let H=R.colorSpace,W=R.format,$=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==ia&&H!==Ni&&(ct.getTransfer(H)===vt?(W!==Wn||$!==wn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",H)),x}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=G,this.getTextureUnits=N,this.setTextureUnits=z,this.setTexture2D=oe,this.setTexture2DArray=Z,this.setTexture3D=ee,this.setTextureCube=se,this.rebindTextures=he,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=de,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function jy(i,e){function t(n,s=Ni){let r,a=ct.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===Fl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Bl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===iu)return i.BYTE;if(n===su)return i.SHORT;if(n===br)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===ii)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===nn)return i.HALF_FLOAT;if(n===ou)return i.ALPHA;if(n===lu)return i.RGB;if(n===Wn)return i.RGBA;if(n===fi)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Ol)return i.RED;if(n===Hl)return i.RED_INTEGER;if(n===ls)return i.RG;if(n===zl)return i.RG_INTEGER;if(n===kl)return i.RGBA_INTEGER;if(n===Wa||n===Xa||n===qa||n===Ya)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vl||n===Gl||n===Wl||n===Xl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ql||n===Yl||n===Zl||n===$l||n===Jl||n===Za||n===Kl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ql||n===Yl)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Zl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===$l)return r.COMPRESSED_R11_EAC;if(n===Jl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Za)return r.COMPRESSED_RG11_EAC;if(n===Kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===jl||n===Ql||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===hc||n===uc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===jl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ql)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uc)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===fc||n===pc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===dc)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===$a||n===xc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===mc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _a(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new At({vertexShader:Qy,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new j(new bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uu=class extends pi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Nu,p={},M=t.getContextAttributes(),b=null,_=null,T=[],w=[],P=new re,y=null,A=null,I=new hn;I.viewport=new kt;let D=new hn;D.viewport=new kt;let O=[I,D],G=new Pl,N=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=T[J];return te===void 0&&(te=new pr,T[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=T[J];return te===void 0&&(te=new pr,T[J]=te),te.getGripSpace()},this.getHand=function(J){let te=T[J];return te===void 0&&(te=new pr,T[J]=te),te.getHandSpace()};function q(J){let te=w.indexOf(J.inputSource);if(te===-1)return;let xe=T[te];xe!==void 0&&(xe.update(J.inputSource,J.frame,c||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function Y(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",oe);for(let J=0;J<T.length;J++){let te=w[J];te!==null&&(w[J]=null,T[J].disconnect(te))}N=null,z=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(b),f=null,d=null,u=null,s=null,_=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(y),e.setSize(P.width,P.height,!1),A!==null){let J=A.camera;J.fov=A.fov,J.zoom=A.zoom,J.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Xe=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?os:fi,Xe=M.stencil?Er:ii);let qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new qt(d.textureWidth,d.textureHeight,{format:Wn,type:wn,depthTexture:new Qi(d.textureWidth,d.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new qt(f.framebufferWidth,f.framebufferHeight,{format:Wn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),dt.setContext(s),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(J){for(let te=0;te<J.removed.length;te++){let xe=J.removed[te],Xe=w.indexOf(xe);Xe>=0&&(w[Xe]=null,T[Xe].disconnect(xe))}for(let te=0;te<J.added.length;te++){let xe=J.added[te],Xe=w.indexOf(xe);if(Xe===-1){for(let qe=0;qe<T.length;qe++)if(qe>=w.length){w.push(xe),Xe=qe;break}else if(w[qe]===null){w[qe]=xe,Xe=qe;break}if(Xe===-1)break}let Se=T[Xe];Se&&Se.connect(xe)}}let Z=new C,ee=new C;function se(J,te,xe){Z.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(xe.matrixWorld);let Xe=Z.distanceTo(ee),Se=te.projectionMatrix.elements,qe=xe.projectionMatrix.elements,xt=Se[14]/(Se[10]-1),ne=Se[14]/(Se[10]+1),he=(Se[9]+1)/Se[5],ue=(Se[9]-1)/Se[5],fe=(Se[8]-1)/Se[0],me=(qe[8]+1)/qe[0],ae=xt*fe,de=xt*me,Le=Xe/(-fe+me),Ye=Le*-fe;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ye),J.translateZ(Le),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Se[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let L=xt+Le,_t=ne+Le,rt=ae-Ye,R=de+(Xe-Ye),x=he*ne/_t*L,H=ue*ne/_t*L;J.projectionMatrix.makePerspective(rt,R,x,H,L,_t),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function He(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,xe=J.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),G.near=D.near=I.near=te,G.far=D.far=I.far=xe,(N!==G.near||z!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),N=G.near,z=G.far),G.layers.mask=J.layers.mask|6,I.layers.mask=G.layers.mask&-5,D.layers.mask=G.layers.mask&-3;let Xe=J.parent,Se=G.cameras;He(G,Xe);for(let qe=0;qe<Se.length;qe++)He(Se[qe],Xe);Se.length===2?se(G,I,D):G.projectionMatrix.copy(I.projectionMatrix),A===null&&J.isPerspectiveCamera&&(A={camera:J,fov:J.fov,zoom:J.zoom}),Ie(J,G,Xe)};function Ie(J,te,xe){xe===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=nl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(G)},this.getCameraTexture=function(J){return p[J]};let ft=null;function it(J,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Xe=!1;xe.length!==G.cameras.length&&(G.cameras.length=0,Xe=!0);for(let ne=0;ne<xe.length;ne++){let he=xe[ne],ue=null;if(f!==null)ue=f.getViewport(he);else{let me=u.getViewSubImage(d,he);ue=me.viewport,ne===0&&(e.setRenderTargetTextures(_,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(_))}let fe=O[ne];fe===void 0&&(fe=new hn,fe.layers.enable(ne),fe.viewport=new kt,O[ne]=fe),fe.matrix.fromArray(he.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(he.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(ue.x,ue.y,ue.width,ue.height),ne===0&&(G.matrix.copy(fe.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Xe===!0&&G.cameras.push(fe)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let ne=u.getDepthInformation(xe[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,s.renderState)}if(Se&&Se.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let ne=0;ne<xe.length;ne++){let he=xe[ne].camera;if(he){let ue=p[he];ue||(ue=new _a,p[he]=ue);let fe=u.getCameraImage(he);ue.sourceTexture=fe}}}}for(let xe=0;xe<T.length;xe++){let Xe=w[xe],Se=T[xe];Xe!==null&&Se!==void 0&&Se.update(Xe,te,c||a)}ft&&ft(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let dt=new Pp;dt.setAnimationLoop(it),this.setAnimationLoop=function(J){ft=J},this.dispose=function(){}}},tM=new yt,Fp=new et;Fp.set(-1,0,0,0,1,0,0,0,1);function nM(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,du(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,b,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),b=M.envMap,_=M.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iM(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){let w=T.program;n.uniformBlockBinding(_,w)}function c(_,T){let w=s[_.id];w===void 0&&(m(_),w=h(_),s[_.id]=w,_.addEventListener("dispose",M));let P=T.program;n.updateUBOMapping(_,P);let y=e.render.frame;r[_.id]!==y&&(d(_),r[_.id]=y)}function h(_){let T=u();_.__bindingPointIndex=T;let w=i.createBuffer(),P=_.__size,y=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){let T=s[_.id],w=_.uniforms,P=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let y=0,A=w.length;y<A;y++){let I=w[y];if(Array.isArray(I))for(let D=0,O=I.length;D<O;D++)f(I[D],y,D,P);else f(I,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(_,T,w,P){if(v(_,T,w,P)===!0){let y=_.__offset,A=_.value;if(Array.isArray(A)){let I=0;for(let D=0;D<A.length;D++){let O=A[D],G=p(O);g(O,_.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=G.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,_.__data)}}function g(_,T,w){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,w)}function v(_,T,w,P){let y=_.value,A=T+"_"+w;if(P[A]===void 0)return typeof y=="number"||typeof y=="boolean"?P[A]=y:ArrayBuffer.isView(y)?P[A]=y.slice():P[A]=y.clone(),!0;{let I=P[A];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return P[A]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function m(_){let T=_.uniforms,w=0,P=16;for(let A=0,I=T.length;A<I;A++){let D=Array.isArray(T[A])?T[A]:[T[A]];for(let O=0,G=D.length;O<G;O++){let N=D[O],z=Array.isArray(N.value)?N.value:[N.value];for(let q=0,Y=z.length;q<Y;q++){let oe=z[q],Z=p(oe),ee=w%P,se=ee%Z.boundary,He=ee+se;w+=se,He!==0&&P-He<Z.storage&&(w+=P-He),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=Z.storage}}}let y=w%P;return y>0&&(w+=P-y),_.__size=w,_.__cache={},this}function p(_){let T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",_),T}function M(_){let T=_.target;T.removeEventListener("dispose",M);let w=a.indexOf(T.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var sM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),yi=null;function rM(){return yi===null&&(yi=new pa(sM,16,16,ls,nn),yi.name="DFG_LUT",yi.minFilter=un,yi.magFilter=un,yi.wrapS=ui,yi.wrapT=ui,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}var Tc=class{constructor(e={}){let{canvas:t=Kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=wn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let v=f,m=new Set([kl,zl,Hl]),p=new Set([wn,ii,br,Er,Fl,Bl]),M=new Uint32Array(4),b=new Int32Array(4),_=new C,T=null,w=null,P=[],y=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,D=!1,O=null,G=null,N=null,z=null;this._outputColorSpace=$t;let q=0,Y=0,oe=null,Z=-1,ee=null,se=new kt,He=new kt,Ie=null,ft=new Ue(0),it=0,dt=t.width,J=t.height,te=1,xe=null,Xe=null,Se=new kt(0,0,dt,J),qe=new kt(0,0,dt,J),xt=!1,ne=new gr,he=!1,ue=!1,fe=new yt,me=new C,ae=new kt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Le=!1;function Ye(){return oe===null?te:1}let L=n;function _t(S,U){return t.getContext(S,U)}let rt,R,x,H,W,$,pe,ge,K,ie,_e,Ve,be,ve,Ge,$e,st,B,ye,Q,Me,Ae,le;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Ut,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",Yn,!1),L===null){let U="webgl2";if(L=_t(U,S),L===null)throw _t(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}We()}catch(S){throw t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),Je("WebGLRenderer: "+S.message),S}function We(){rt=new dv(L),rt.init(),Me=new jy(L,rt),R=new nv(L,rt,e,Me),x=new Jy(L,rt),R.reversedDepthBuffer&&d&&x.buffers.depth.setReversed(!0),G=L.createFramebuffer(),N=L.createFramebuffer(),z=L.createFramebuffer(),H=new mv(L),W=new Fy,$=new Ky(L,rt,x,W,R,Me,H),pe=new uv(I),ge=new xg(L),Ae=new ev(L,ge),K=new fv(L,ge,H,Ae),ie=new xv(L,K,ge,Ae,H),B=new gv(L,R,$),Ge=new iv(W),_e=new Uy(I,pe,rt,R,Ae,Ge),Ve=new nM(I,W),be=new Oy,ve=new Wy(rt),st=new Q_(I,pe,x,ie,g,l),$e=new $y(I,ie,R),le=new iM(L,H,R,x),ye=new tv(L,rt,H),Q=new pv(L,rt,H),H.programs=_e.programs,I.capabilities=R,I.extensions=rt,I.properties=W,I.renderLists=be,I.shadowMap=$e,I.state=x,I.info=H}v!==wn&&(A=new vv(v,t.width,t.height,o,s,r));let ze=new Uu(I,L);this.xr=ze,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(dt,J,!1))},this.getSize=function(S){return S.set(dt,J)},this.setSize=function(S,U,X=!0){if(ze.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=S,J=U,t.width=Math.floor(S*te),t.height=Math.floor(U*te),X===!0&&(t.style.width=S+"px",t.style.height=U+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(dt*te,J*te).floor()},this.setDrawingBufferSize=function(S,U,X){dt=S,J=U,te=X,t.width=Math.floor(S*X),t.height=Math.floor(U*X),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(v===wn){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(se)},this.getViewport=function(S){return S.copy(Se)},this.setViewport=function(S,U,X,k){S.isVector4?Se.set(S.x,S.y,S.z,S.w):Se.set(S,U,X,k),x.viewport(se.copy(Se).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(qe)},this.setScissor=function(S,U,X,k){S.isVector4?qe.set(S.x,S.y,S.z,S.w):qe.set(S,U,X,k),x.scissor(He.copy(qe).multiplyScalar(te).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(S){x.setScissorTest(xt=S)},this.setOpaqueSort=function(S){xe=S},this.setTransparentSort=function(S){Xe=S},this.getClearColor=function(S){return S.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,X=!0){let k=0;if(S){let V=!1;if(oe!==null){let we=oe.texture.format;V=m.has(we)}if(V){let we=oe.texture.type,Ne=p.has(we),Te=st.getClearColor(),Be=st.getClearAlpha(),ke=Te.r,at=Te.g,ut=Te.b;Ne?(M[0]=ke,M[1]=at,M[2]=ut,M[3]=Be,L.clearBufferuiv(L.COLOR,0,M)):(b[0]=ke,b[1]=at,b[2]=ut,b[3]=Be,L.clearBufferiv(L.COLOR,0,b))}else k|=L.COLOR_BUFFER_BIT}U&&(k|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(k|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&L.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){t.removeEventListener("webglcontextlost",Ut,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",Yn,!1),st.dispose(),be.dispose(),ve.dispose(),W.dispose(),pe.dispose(),ie.dispose(),Ae.dispose(),le.dispose(),_e.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",Td),ze.removeEventListener("sessionend",wd),_s.stop()};function Ut(S){S.preventDefault(),aa("WebGLRenderer: Context Lost."),D=!0}function St(){aa("WebGLRenderer: Context Restored."),D=!1;let S=H.autoReset,U=$e.enabled,X=$e.autoUpdate,k=$e.needsUpdate,V=$e.type;We(),H.autoReset=S,$e.enabled=U,$e.autoUpdate=X,$e.needsUpdate=k,$e.type=V}function Yn(S){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function oi(S){let U=S.target;U.removeEventListener("dispose",oi),Km(U)}function Km(S){jm(S),W.remove(S)}function jm(S){let U=W.get(S).programs;U!==void 0&&(U.forEach(function(X){_e.releaseProgram(X)}),S.isShaderMaterial&&_e.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,X,k,V,we){U===null&&(U=de);let Ne=V.isMesh&&V.matrixWorld.determinantAffine()<0,Te=t0(S,U,X,k,V);x.setMaterial(k,Ne);let Be=X.index,ke=1;if(k.wireframe===!0){if(Be=K.getWireframeAttribute(X),Be===void 0)return;ke=2}let at=X.drawRange,ut=X.attributes.position,Oe=at.start*ke,bt=(at.start+at.count)*ke;we!==null&&(Oe=Math.max(Oe,we.start*ke),bt=Math.min(bt,(we.start+we.count)*ke)),Be!==null?(Oe=Math.max(Oe,0),bt=Math.min(bt,Be.count)):ut!=null&&(Oe=Math.max(Oe,0),bt=Math.min(bt,ut.count));let Kt=bt-Oe;if(Kt<0||Kt===1/0)return;Ae.setup(V,k,Te,X,Be);let Ot,Lt=ye;if(Be!==null&&(Ot=ge.get(Be),Lt=Q,Lt.setIndex(Ot)),V.isMesh)k.wireframe===!0?(x.setLineWidth(k.wireframeLinewidth*Ye()),Lt.setMode(L.LINES)):Lt.setMode(L.TRIANGLES);else if(V.isLine){let fn=k.linewidth;fn===void 0&&(fn=1),x.setLineWidth(fn*Ye()),V.isLineSegments?Lt.setMode(L.LINES):V.isLineLoop?Lt.setMode(L.LINE_LOOP):Lt.setMode(L.LINE_STRIP)}else V.isPoints?Lt.setMode(L.POINTS):V.isSprite&&Lt.setMode(L.TRIANGLES);if(V.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let fn=V._multiDrawStarts,De=V._multiDrawCounts,yn=V._multiDrawCount,mt=Be?ge.get(Be).bytesPerElement:1,On=W.get(k).currentProgram.getUniforms();for(let li=0;li<yn;li++)On.setValue(L,"_gl_DrawID",li),Lt.render(fn[li]/mt,De[li])}else if(V.isInstancedMesh)Lt.renderInstances(Oe,Kt,V.count);else if(X.isInstancedBufferGeometry){let fn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,De=Math.min(X.instanceCount,fn);Lt.renderInstances(Oe,Kt,De)}else Lt.render(Oe,Kt)};function Ed(S,U,X,k){O!==null&&S.isNodeMaterial&&O.setObject(k,S),he===!0&&Ge.setState(S,X,!1),S.transparent===!0&&S.side===Qt&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,mo(S,U,k),S.side=vi,S.needsUpdate=!0,mo(S,U,k),S.side=Qt):mo(S,U,k)}this.compile=function(S,U,X=null){X===null&&(X=S),O!==null&&O.renderStart(S,U,X),w=ve.get(X),w.init(U),y.push(w),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),S!==X&&S.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),ue=this.localClippingEnabled,he=Ge.init(this.clippingPlanes,ue),he===!0&&Ge.setGlobalState(this.clippingPlanes,U),O!==null&&$e.render(w.state.shadowsArray,X,U);let k=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let we=V.material;if(we)if(Array.isArray(we))for(let Ne=0;Ne<we.length;Ne++){let Te=we[Ne];Ed(Te,X,U,V),k.add(Te)}else Ed(we,X,U,V),k.add(we)}),w=y.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(S,U,X=null){let k=this.compile(S,U,X);return new Promise(V=>{function we(){if(k.forEach(function(Ne){let Be=W.get(Ne).currentProgram;(Be===void 0||Be.isReady())&&k.delete(Ne)}),k.size===0){V(S);return}setTimeout(we,10)}rt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let lh=null;function Qm(S){lh&&lh(S)}function Td(){_s.stop()}function wd(){_s.start()}let _s=new Pp;_s.setAnimationLoop(Qm),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(S){lh=S,ze.setAnimationLoop(S),S===null?_s.stop():_s.start()},ze.addEventListener("sessionstart",Td),ze.addEventListener("sessionend",wd),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(S,U);let X=ze.enabled===!0&&ze.isPresenting===!0,k=A!==null&&(oe===null||X)&&A.begin(I,oe);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(U),U=ze.getCamera()),S.isScene===!0&&S.onBeforeRender(I,S,U,oe),w=ve.get(S,y.length),w.init(U),w.state.textureUnits=$.getTextureUnits(),y.push(w),fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(fe,jn,U.reversedDepth),ue=this.localClippingEnabled,he=Ge.init(this.clippingPlanes,ue),T=be.get(S,P.length),T.init(),P.push(T),ze.enabled===!0&&ze.isPresenting===!0){let Ne=I.xr.getDepthSensingMesh();Ne!==null&&ch(Ne,U,-1/0,I.sortObjects)}ch(S,U,0,I.sortObjects),T.finish(),O!==null&&O.updateLights(w.state.lightsArray),I.sortObjects===!0&&T.sort(xe,Xe),Le=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Le&&st.addToRenderList(T,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),he===!0&&Ge.beginShadows();let V=w.state.shadowsArray;if($e.render(V,S,U),he===!0&&Ge.endShadows(),(k&&A.hasRenderPass())===!1){let Ne=T.opaque,Te=T.transmissive;if(w.setupLights(),U.isArrayCamera){let Be=U.cameras;if(Te.length>0)for(let ke=0,at=Be.length;ke<at;ke++){let ut=Be[ke];Rd(Ne,Te,S,ut)}Le&&st.render(S);for(let ke=0,at=Be.length;ke<at;ke++){let ut=Be[ke];Ad(T,S,ut,ut.viewport)}}else Te.length>0&&Rd(Ne,Te,S,U),Le&&st.render(S),Ad(T,S,U)}oe!==null&&Y===0&&($.updateMultisampleRenderTarget(oe),$.updateRenderTargetMipmap(oe)),k&&A.end(I),S.isScene===!0&&S.onAfterRender(I,S,U),Ae.resetDefaultState(),Z=-1,ee=null,y.pop(),y.length>0?(w=y[y.length-1],$.setTextureUnits(w.state.textureUnits),he===!0&&Ge.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,O!==null&&O.renderEnd()};function ch(S,U,X,k){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)w.pushLightProbeGrid(S);else if(S.isLight)w.pushLight(S),S.castShadow&&w.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(ne)){k&&ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);let Ne=ie.update(S),Te=S.material;Te.visible&&T.push(S,Ne,Te,X,ae.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(ne))){let Ne=ie.update(S),Te=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ae.copy(S.boundingSphere.center)):(Ne.boundingSphere===null&&Ne.computeBoundingSphere(),ae.copy(Ne.boundingSphere.center)),ae.applyMatrix4(S.matrixWorld).applyMatrix4(fe)),Array.isArray(Te)){let Be=Ne.groups;for(let ke=0,at=Be.length;ke<at;ke++){let ut=Be[ke],Oe=Te[ut.materialIndex];Oe&&Oe.visible&&T.push(S,Ne,Oe,X,ae.z,ut,U)}}else Te.visible&&T.push(S,Ne,Te,X,ae.z,null,U)}}let we=S.children;for(let Ne=0,Te=we.length;Ne<Te;Ne++)ch(we[Ne],U,X,k)}function Ad(S,U,X,k){let{opaque:V,transmissive:we,transparent:Ne}=S;w.setupLightsView(X),he===!0&&Ge.setGlobalState(I.clippingPlanes,X),k&&x.viewport(se.copy(k)),V.length>0&&po(V,U,X),we.length>0&&po(we,U,X),Ne.length>0&&po(Ne,U,X),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Rd(S,U,X,k){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[k.id]===void 0){let Oe=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[k.id]=new qt(1,1,{generateMipmaps:!0,type:Oe?nn:wn,minFilter:as,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let we=w.state.transmissionRenderTarget[k.id],Ne=k.viewport||se;we.setSize(Ne.z*I.transmissionResolutionScale,Ne.w*I.transmissionResolutionScale);let Te=I.getRenderTarget(),Be=I.getActiveCubeFace(),ke=I.getActiveMipmapLevel();I.setRenderTarget(we),I.getClearColor(ft),it=I.getClearAlpha(),it<1&&I.setClearColor(16777215,.5),I.clear(),Le&&st.render(X);let at=I.toneMapping;I.toneMapping=ni;let ut=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),w.setupLightsView(k),he===!0&&Ge.setGlobalState(I.clippingPlanes,k),po(S,X,k),$.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let bt=0,Kt=U.length;bt<Kt;bt++){let Ot=U[bt],{object:Lt,geometry:fn,material:De,group:yn}=Ot;if(De.side===Qt&&Lt.layers.test(k.layers)){let mt=De.side;De.side=tn,De.needsUpdate=!0,Cd(Lt,X,k,fn,De,yn),De.side=mt,De.needsUpdate=!0,Oe=!0}}Oe===!0&&($.updateMultisampleRenderTarget(we),$.updateRenderTargetMipmap(we))}I.setRenderTarget(Te,Be,ke),I.setClearColor(ft,it),ut!==void 0&&(k.viewport=ut),I.toneMapping=at}function po(S,U,X){let k=U.isScene===!0?U.overrideMaterial:null;for(let V=0,we=S.length;V<we;V++){let Ne=S[V],{object:Te,geometry:Be,group:ke}=Ne,at=Ne.material;at.allowOverride===!0&&k!==null&&(at=k),Te.layers.test(X.layers)&&Cd(Te,U,X,Be,at,ke)}}function Cd(S,U,X,k,V,we){O!==null&&V.isNodeMaterial&&O.setObject(S,V),S.onBeforeRender(I,U,X,k,V,we),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(I,U,X,k,S,we),V.transparent===!0&&V.side===Qt&&V.forceSinglePass===!1?(V.side=tn,V.needsUpdate=!0,I.renderBufferDirect(X,U,k,V,S,we),V.side=vi,V.needsUpdate=!0,I.renderBufferDirect(X,U,k,V,S,we),V.side=Qt):I.renderBufferDirect(X,U,k,V,S,we),S.onAfterRender(I,U,X,k,V,we)}function mo(S,U,X){U.isScene!==!0&&(U=de);let k=W.get(S),V=w.state.lights,we=w.state.shadowsArray,Ne=V.state.version,Te=_e.getParameters(S,V.state,we,U,X,w.state.lightProbeGridArray),Be=_e.getProgramCacheKey(Te),ke=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let at=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=pe.get(S.envMap||k.environment,at),k.envMapRotation=k.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,ke===void 0&&(S.addEventListener("dispose",oi),ke=new Map,k.programs=ke);let ut=ke.get(Be);if(ut!==void 0){if(k.currentProgram===ut&&k.lightsStateVersion===Ne)return Id(S,Te),ut}else Te.uniforms=_e.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,X,Te),S.onBeforeCompile(Te,I),ut=_e.acquireProgram(Te,Be),ke.set(Be,ut),k.uniforms=Te.uniforms;let Oe=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Oe.clippingPlanes=Ge.uniform),Id(S,Te),k.needsLights=i0(S),k.lightsStateVersion=Ne,k.needsLights&&(Oe.ambientLightColor.value=V.state.ambient,Oe.lightProbe.value=V.state.probe,Oe.sunLights.value=V.state.sun,Oe.sunLightShadows.value=V.state.sunShadow,Oe.directionalLights.value=V.state.directional,Oe.directionalLightShadows.value=V.state.directionalShadow,Oe.spotLights.value=V.state.spot,Oe.spotLightShadows.value=V.state.spotShadow,Oe.rectAreaLights.value=V.state.rectArea,Oe.ltc_1.value=V.state.rectAreaLTC1,Oe.ltc_2.value=V.state.rectAreaLTC2,Oe.pointLights.value=V.state.point,Oe.pointLightShadows.value=V.state.pointShadow,Oe.hemisphereLights.value=V.state.hemi,Oe.sunShadowMatrix.value=V.state.sunShadowMatrix,Oe.sunShadowCascade.value=V.state.sunShadowCascade,Oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Oe.spotLightMatrix.value=V.state.spotLightMatrix,Oe.spotLightMap.value=V.state.spotLightMap,Oe.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=w.state.lightProbeGridArray.length>0,k.currentProgram=ut,k.uniformsList=null,ut}function Pd(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=Ar.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function Id(S,U){let X=W.get(S);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function e0(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let X=0,k=S.length;X<k;X++){let V=S[X];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function t0(S,U,X,k,V){U.isScene!==!0&&(U=de),$.resetTextureUnits();let we=U.fog,Ne=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,Te=oe===null?I.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ct.workingColorSpace,Be=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,ke=pe.get(k.envMap||Ne,Be),at=k.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ut=!!X.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Oe=!!X.morphAttributes.position,bt=!!X.morphAttributes.normal,Kt=!!X.morphAttributes.color,Ot=ni;k.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ot=I.toneMapping);let Lt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,fn=Lt!==void 0?Lt.length:0,De=W.get(k),yn=w.state.lights;if(he===!0&&(ue===!0||S!==ee)){let Ft=S===ee&&k.id===Z;Ge.setState(k,S,Ft)}let mt=!1;k.version===De.__version?(De.needsLights&&De.lightsStateVersion!==yn.state.version||De.outputColorSpace!==Te||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isBatchedMesh&&De.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&De.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==ke||k.fog===!0&&De.fog!==we||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==Ge.numPlanes||De.numIntersection!==Ge.numIntersection)||De.vertexAlphas!==at||De.vertexTangents!==ut||De.morphTargets!==Oe||De.morphNormals!==bt||De.morphColors!==Kt||De.toneMapping!==Ot||De.morphTargetsCount!==fn||!!De.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(mt=!0):(mt=!0,De.__version=k.version);let On=De.currentProgram;mt===!0&&(On=mo(k,U,V),O&&k.isNodeMaterial&&O.onUpdateProgram(k,On,De));let li=!1,Vi=!1,Gs=!1,Rt=On.getUniforms(),Zt=De.uniforms;if(x.useProgram(On.program)&&(li=!0,Vi=!0,Gs=!0),k.id!==Z&&(Z=k.id,Vi=!0),De.needsLights){let Ft=e0(w.state.lightProbeGridArray,V);De.lightProbeGrid!==Ft&&(De.lightProbeGrid=Ft,Vi=!0)}if(li||ee!==S){x.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Rt.setValue(L,"projectionMatrix",S.projectionMatrix),Rt.setValue(L,"viewMatrix",S.matrixWorldInverse);let Wi=Rt.map.cameraPosition;Wi!==void 0&&Wi.setValue(L,me.setFromMatrixPosition(S.matrixWorld)),R.logarithmicDepthBuffer&&Rt.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Rt.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),ee!==S&&(ee=S,Vi=!0,Gs=!0)}if(De.needsLights&&(yn.state.sunShadowMap.length>0&&Rt.setValue(L,"sunShadowMap",yn.state.sunShadowMap,$),yn.state.directionalShadowMap.length>0&&Rt.setValue(L,"directionalShadowMap",yn.state.directionalShadowMap,$),yn.state.spotShadowMap.length>0&&Rt.setValue(L,"spotShadowMap",yn.state.spotShadowMap,$),yn.state.pointShadowMap.length>0&&Rt.setValue(L,"pointShadowMap",yn.state.pointShadowMap,$)),V.isSkinnedMesh){Rt.setOptional(L,V,"bindMatrix"),Rt.setOptional(L,V,"bindMatrixInverse");let Ft=V.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Rt.setValue(L,"boneTexture",Ft.boneTexture,$))}V.isBatchedMesh&&(Rt.setOptional(L,V,"batchingTexture"),Rt.setValue(L,"batchingTexture",V._matricesTexture,$),Rt.setOptional(L,V,"batchingIdTexture"),Rt.setValue(L,"batchingIdTexture",V._indirectTexture,$),Rt.setOptional(L,V,"batchingColorTexture"),V._colorsTexture!==null&&Rt.setValue(L,"batchingColorTexture",V._colorsTexture,$));let Gi=X.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&B.update(V,X,On),(Vi||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,Rt.setValue(L,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(Zt.envMapIntensity.value=U.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=rM()),Vi){if(Rt.setValue(L,"toneMappingExposure",I.toneMappingExposure),De.needsLights&&n0(Zt,Gs),we&&k.fog===!0&&Ve.refreshFogUniforms(Zt,we),Ve.refreshMaterialUniforms(Zt,k,te,J,w.state.transmissionRenderTarget[S.id]),De.needsLights&&De.lightProbeGrid){let Ft=De.lightProbeGrid;Zt.probesSH.value=Ft.texture,Zt.probesMin.value.copy(Ft.boundingBox.min),Zt.probesMax.value.copy(Ft.boundingBox.max),Zt.probesResolution.value.copy(Ft.resolution)}Ar.upload(L,Pd(De),Zt,$)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ar.upload(L,Pd(De),Zt,$),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Rt.setValue(L,"center",V.center),Rt.setValue(L,"modelViewMatrix",V.modelViewMatrix),Rt.setValue(L,"normalMatrix",V.normalMatrix),Rt.setValue(L,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Ft=k.uniformsGroups;for(let Wi=0,Ws=Ft.length;Wi<Ws;Wi++){let Dd=Ft[Wi];le.update(Dd,On),le.bind(Dd,On)}}return On}function n0(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function i0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(S,U,X){let k=W.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),W.get(S.texture).__webglTexture=U,W.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:X,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let X=W.get(S);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,X=0){oe=S,q=U,Y=X;let k=null,V=!1,we=!1;if(S){let Te=W.get(S);if(Te.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(L.FRAMEBUFFER,Te.__webglFramebuffer),se.copy(S.viewport),He.copy(S.scissor),Ie=S.scissorTest,x.viewport(se),x.scissor(He),x.setScissorTest(Ie),Z=-1;return}else if(Te.__webglFramebuffer===void 0)$.setupRenderTarget(S);else if(Te.__hasExternalTextures)$.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let at=S.depthTexture;if(Te.__boundDepthTexture!==at){if(at!==null&&W.has(at)&&(S.width!==at.image.width||S.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(S)}}let Be=S.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);let ke=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[U])?k=ke[U][X]:k=ke[U],V=!0):S.samples>0&&$.useMultisampledRTT(S)===!1?k=W.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?k=ke[X]:k=ke,se.copy(S.viewport),He.copy(S.scissor),Ie=S.scissorTest}else se.copy(Se).multiplyScalar(te).floor(),He.copy(qe).multiplyScalar(te).floor(),Ie=xt;if(X!==0&&(k=G),x.bindFramebuffer(L.FRAMEBUFFER,k)&&x.drawBuffers(S,k),x.viewport(se),x.scissor(He),x.setScissorTest(Ie),V){let Te=W.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Te.__webglTexture,X)}else if(we){let Te=U;for(let Be=0;Be<S.textures.length;Be++){let ke=W.get(S.textures[Be]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Be,ke.__webglTexture,X,Te)}}else if(S!==null&&X!==0){let Te=W.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Te.__webglTexture,X)}Z=-1};function Ld(S){let U=W.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=R.textureFormatReadable(S.format),U.__typeReadable=R.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,X,k,V,we,Ne,Te=0){if(!(S&&S.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be){x.bindFramebuffer(L.FRAMEBUFFER,Be);try{let ke=S.textures[Te],at=ke.format,ut=ke.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te);let Oe=Ld(ke);if(Oe.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-k&&X>=0&&X<=S.height-V&&L.readPixels(U,X,k,V,Me.convert(at),Me.convert(ut),we)}finally{let ke=oe!==null?W.get(oe).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(S,U,X,k,V,we,Ne,Te=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ne!==void 0&&(Be=Be[Ne]),Be)if(U>=0&&U<=S.width-k&&X>=0&&X<=S.height-V){x.bindFramebuffer(L.FRAMEBUFFER,Be);let ke=S.textures[Te],at=ke.format,ut=ke.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Te);let Oe=Ld(ke);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,we.byteLength,L.STREAM_READ),L.readPixels(U,X,k,V,Me.convert(at),Me.convert(ut),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Kt=oe!==null?W.get(oe).__webglFramebuffer:null;x.bindFramebuffer(L.FRAMEBUFFER,Kt);let Ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qf(L,Ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,we),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(bt),L.deleteSync(Ot),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,X=0){let k=Math.pow(2,-X),V=Math.floor(S.image.width*k),we=Math.floor(S.image.height*k),Ne=U!==null?U.x:0,Te=U!==null?U.y:0;$.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,Ne,Te,V,we),x.unbindTexture()},this.copyTextureToTexture=function(S,U,X=null,k=null,V=0,we=0){let Ne,Te,Be,ke,at,ut,Oe,bt,Kt,Ot=S.isCompressedTexture?S.mipmaps[we]:S.image;if(X!==null)Ne=X.max.x-X.min.x,Te=X.max.y-X.min.y,Be=X.isBox3?X.max.z-X.min.z:1,ke=X.min.x,at=X.min.y,ut=X.isBox3?X.min.z:0;else{let Zt=Math.pow(2,-V);Ne=Math.floor(Ot.width*Zt),Te=Math.floor(Ot.height*Zt),S.isDataArrayTexture?Be=Ot.depth:S.isData3DTexture?Be=Math.floor(Ot.depth*Zt):Be=1,ke=0,at=0,ut=0}k!==null?(Oe=k.x,bt=k.y,Kt=k.z):(Oe=0,bt=0,Kt=0);let Lt=Me.convert(U.format),fn=Me.convert(U.type),De;U.isData3DTexture?($.setTexture3D(U,0),De=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),De=L.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),De=L.TEXTURE_2D),x.activeTexture(L.TEXTURE0),x.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let yn=x.getParameter(L.UNPACK_ROW_LENGTH),mt=x.getParameter(L.UNPACK_IMAGE_HEIGHT),On=x.getParameter(L.UNPACK_SKIP_PIXELS),li=x.getParameter(L.UNPACK_SKIP_ROWS),Vi=x.getParameter(L.UNPACK_SKIP_IMAGES);x.pixelStorei(L.UNPACK_ROW_LENGTH,Ot.width),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ot.height),x.pixelStorei(L.UNPACK_SKIP_PIXELS,ke),x.pixelStorei(L.UNPACK_SKIP_ROWS,at),x.pixelStorei(L.UNPACK_SKIP_IMAGES,ut);let Gs=S.isDataArrayTexture||S.isData3DTexture,Rt=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let Zt=W.get(S),Gi=W.get(U),Ft=W.get(Zt.__renderTarget),Wi=W.get(Gi.__renderTarget);x.bindFramebuffer(L.READ_FRAMEBUFFER,Ft.__webglFramebuffer),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,Wi.__webglFramebuffer);for(let Ws=0;Ws<Be;Ws++)Gs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(S).__webglTexture,V,ut+Ws),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(U).__webglTexture,we,Kt+Ws)),L.blitFramebuffer(ke,at,Ne,Te,Oe,bt,Ne,Te,L.DEPTH_BUFFER_BIT,L.NEAREST);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||W.has(S)){let Zt=W.get(S),Gi=W.get(U);x.bindFramebuffer(L.READ_FRAMEBUFFER,N),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,z);for(let Ft=0;Ft<Be;Ft++)Gs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zt.__webglTexture,V,ut+Ft):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zt.__webglTexture,V),Rt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Gi.__webglTexture,we,Kt+Ft):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Gi.__webglTexture,we),V!==0?L.blitFramebuffer(ke,at,Ne,Te,Oe,bt,Ne,Te,L.COLOR_BUFFER_BIT,L.NEAREST):Rt?L.copyTexSubImage3D(De,we,Oe,bt,Kt+Ft,ke,at,Ne,Te):L.copyTexSubImage2D(De,we,Oe,bt,ke,at,Ne,Te);x.bindFramebuffer(L.READ_FRAMEBUFFER,null),x.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Rt?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(De,we,Oe,bt,Kt,Ne,Te,Be,Lt,fn,Ot.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(De,we,Oe,bt,Kt,Ne,Te,Be,Lt,Ot.data):L.texSubImage3D(De,we,Oe,bt,Kt,Ne,Te,Be,Lt,fn,Ot):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,we,Oe,bt,Ne,Te,Lt,fn,Ot.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,we,Oe,bt,Ot.width,Ot.height,Lt,Ot.data):L.texSubImage2D(L.TEXTURE_2D,we,Oe,bt,Ne,Te,Lt,fn,Ot);x.pixelStorei(L.UNPACK_ROW_LENGTH,yn),x.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt),x.pixelStorei(L.UNPACK_SKIP_PIXELS,On),x.pixelStorei(L.UNPACK_SKIP_ROWS,li),x.pixelStorei(L.UNPACK_SKIP_IMAGES,Vi),we===0&&U.generateMipmaps&&L.generateMipmap(De),x.unbindTexture()},this.initRenderTarget=function(S){W.get(S).__webglFramebuffer===void 0&&$.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?$.setTextureCube(S,0):S.isData3DTexture?$.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?$.setTexture2DArray(S,0):$.setTexture2D(S,0),x.unbindTexture()},this.resetState=function(){q=0,Y=0,oe=null,x.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Cr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},aM=new ss(-1,1,1,-1,0,1),Fu=class extends Mt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},oM=new Fu,hs=class{constructor(e){this._mesh=new j(oM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,aM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Rc=class extends Nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof At?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fi.clone(e.uniforms),this.material=new At({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qa=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Cc=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Pc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new re);this._width=n.width,this._height=n.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:nn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rc(Cr),this.copyPass.material.blending=Vn,this.timer=new Na}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Qa!==void 0&&(a instanceof Qa?n=!0:a instanceof Cc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ic=class extends Nn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ue}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Bp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Pr=class i extends Nn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new re(e.x,e.y):new re(256,256),this.clearColor=new Ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new qt(r,a,{type:nn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new qt(r,a,{type:nn,depthBuffer:!1});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new qt(r,a,{type:nn,depthBuffer:!1});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Bp;this.highPassUniforms=Fi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new At({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new re(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Fi.clone(Cr.uniforms),this.blendMaterial=new At({uniforms:this.copyUniforms,vertexShader:Cr.vertexShader,fragmentShader:Cr.fragmentShader,premultipliedAlpha:!0,blending:gt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ue,this._oldClearAlpha=1,this._basic=new Gt,this._fsQuad=new hs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new re(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new At({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new re(.5,.5)},direction:{value:new re(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new At({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Pr.BlurDirectionX=new re(1,0);Pr.BlurDirectionY=new re(0,1);var eo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Lc=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Fi.clone(eo.uniforms),this.material=new vr({name:eo.name,uniforms:this.uniforms,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader}),this._fsQuad=new hs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ct.getTransfer(this._outputColorSpace)===vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ba?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===za?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ha&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var F=(i,e)=>i+Math.random()*(e-i),Qe=(i,e,t)=>i<e?e:i>t?t:i,us=(i,e,t)=>i+(e-i)*t,ds=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-t*n)),Dc=i=>i[Math.random()*i.length|0],Bu=4242,Dt=(i=0,e=1)=>(Bu=Bu*16807%2147483647,i+Bu/2147483647*(e-i));function xn(i,e,t,n=!0){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new Di(s);return n&&(r.colorSpace=$t),r}function Un(i="rgba(255,200,120,1)",e="rgba(255,120,30,0.35)"){return xn(128,128,t=>{let n=t.createRadialGradient(64,64,0,64,64,64);n.addColorStop(0,i),n.addColorStop(.25,e),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,128,128)})}var _n={get(i,e){try{let t=localStorage.getItem(i);return t==null?e:JSON.parse(t)}catch{return e}},set(i,e){try{localStorage.setItem(i,JSON.stringify(e))}catch{}}};var fs={low:{pr:.85,bloom:0,stars:500,ff:50,leaves:36,fog:4,rays:3,decor:.55,particles:.45,msaa:0},mid:{pr:1,bloom:.85,stars:900,ff:110,leaves:80,fog:6,rays:5,decor:.8,particles:.7,msaa:0},high:{pr:1.5,bloom:1,stars:1400,ff:170,leaves:120,fog:8,rays:7,decor:1,particles:1,msaa:4},ultra:{pr:2,bloom:1.12,stars:2200,ff:260,leaves:180,fog:10,rays:9,decor:1.25,particles:1.35,msaa:4}},Ir=new C(.3,.25,-1).normalize(),An={grave:{fog:2956366,dens:.019,hor:[.32,.09,.36],mid:[.08,.02,.18],ground:5917304,hs:8022720,hg:1839140,hemi:1.15,moon:1.5,rays:.65,leaves:.35,ff:[.55,1,.75],ray:[.75,.8,1]},forest:{fog:4071206,dens:.021,hor:[.5,.17,.1],mid:[.12,.03,.14],ground:5913126,hs:10119818,hg:2888712,hemi:1.15,moon:1.25,rays:1,leaves:1,ff:[1,.78,.32],ray:[1,.82,.6]},village:{fog:2237768,dens:.017,hor:[.24,.13,.4],mid:[.06,.03,.17],ground:4210782,hs:6978248,hg:1445920,hemi:1.1,moon:1.6,rays:.55,leaves:.45,ff:[1,.85,.5],ray:[.8,.85,1]},canyon:{fog:2232890,dens:.015,hor:[.3,.07,.42],mid:[.07,.02,.16],ground:3811408,hs:8018112,hg:1313308,hemi:1,moon:1.1,rays:.35,leaves:.12,ff:[.7,.55,1],ray:[.8,.7,1]},storm:{fog:1578032,dens:.02,hor:[.16,.08,.3],mid:[.04,.02,.1],ground:2893376,hs:6971568,hg:1051672,hemi:.9,moon:.6,rays:.15,leaves:.25,ff:[.7,.8,1],ray:[.8,.8,1]}};function lM(){let i=new Et(400,32,16),e=new At({side:tn,depthWrite:!1,fog:!1,uniforms:{flash:{value:0},time:{value:0},hor:{value:new C(.3,.08,.3)},mid:{value:new C(.08,.02,.18)},md:{value:Ir.clone()}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vP; uniform float flash; uniform float time; uniform vec3 hor; uniform vec3 mid; uniform vec3 md;
      void main(){
        float h = vP.y;
        vec3 top = vec3(0.016,0.006,0.05);
        vec3 c = mix(hor, mid, smoothstep(-0.03, 0.16, h));
        c = mix(c, top, smoothstep(0.16, 0.6, h));
        float m = max(dot(vP, md), 0.0);
        c += vec3(0.6,0.36,0.24) * pow(m, 40.0) * 0.55 + vec3(0.30,0.12,0.36) * pow(m, 5.0) * 0.35;
        // faint aurora-like bands
        float b = sin(vP.x * 6.0 + time * 0.05) * sin(vP.z * 4.0 - time * 0.04);
        c += vec3(0.10,0.03,0.16) * smoothstep(0.4, 1.0, b) * smoothstep(0.05, 0.35, h) * (1.0 - smoothstep(0.35, 0.7, h));
        c += vec3(0.75,0.72,1.0) * flash * (0.35 + 0.65 * smoothstep(0.0, 0.5, h));
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`}),t=new j(i,e);return t.renderOrder=-10,t}function cM(i){let e=new Float32Array(i*3),t=new Float32Array(i),n=new Float32Array(i);for(let o=0;o<i;o++){let l=F(0,Math.PI*2),c=Math.pow(Math.random(),.7)*.9+.08,h=Math.sqrt(1-c*c);e[o*3]=Math.cos(l)*h*350,e[o*3+1]=c*350,e[o*3+2]=Math.sin(l)*h*350,t[o]=Math.random()<.06?F(2.6,4.4):F(.8,2),n[o]=F(0,6.28)}let s=new Mt;s.setAttribute("position",new wt(e,3)),s.setAttribute("size",new wt(t,1)),s.setAttribute("phase",new wt(n,1));let r=new At({transparent:!0,depthWrite:!1,blending:gt,fog:!1,uniforms:{time:{value:0},pr:{value:1},dim:{value:1}},vertexShader:`attribute float size; attribute float phase; uniform float time; uniform float pr; varying float vA;
      void main(){ vA = 0.55 + 0.45 * sin(time * (1.3 + phase * 0.4) + phase * 7.0); gl_PointSize = size * pr; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,fragmentShader:"varying float vA; uniform float dim; void main(){ vec2 d = gl_PointCoord - 0.5; float a = smoothstep(0.5, 0.0, length(d)) * dim; gl_FragColor = vec4(vec3(1.0,0.93,0.98) * a * vA, a * vA); }"}),a=new ji(s,r);return a.frustumCulled=!1,a.renderOrder=-9,a}function hM(){let i=new Ke,e=xn(512,512,a=>{let h=a.createRadialGradient(216,216,10,256,256,150);h.addColorStop(0,"#fffaf0"),h.addColorStop(.6,"#ffe9c0"),h.addColorStop(1,"#f0c890"),a.fillStyle=h,a.beginPath(),a.arc(256,256,150,0,7),a.fill(),a.save(),a.beginPath(),a.arc(256,256,150,0,7),a.clip();for(let[d,f,g,v]of[[200,200,34,.16],[300,270,26,.14],[230,320,20,.12],[320,180,14,.12],[170,280,12,.1],[280,350,30,.1],[350,300,10,.12]]){let m=a.createRadialGradient(d+4,f+4,1,d,f,g);m.addColorStop(0,`rgba(150,110,80,${v})`),m.addColorStop(1,"rgba(150,110,80,0)"),a.fillStyle=m,a.beginPath(),a.arc(d,f,g,0,7),a.fill()}let u=a.createRadialGradient(326,326,150*.6,256,256,150*1.15);u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(120,60,40,0.35)"),a.fillStyle=u,a.fillRect(0,0,512,512),a.restore()}),t=new Pt(new Vt({map:e,fog:!1,depthWrite:!1,color:new Ue(1.55,1.42,1.25)}));t.scale.set(64,64,1),i.add(t);let n=new Pt(new Vt({map:Un("rgba(255,220,170,0.9)","rgba(255,140,90,0.22)"),fog:!1,depthWrite:!1,blending:gt,transparent:!0,opacity:.5}));n.scale.set(190,190,1),i.add(n);let s=xn(256,64,a=>{a.filter="blur(6px)";for(let o=0;o<40;o++){let l=40+o*4.4+F(-6,6),c=32+F(-5,5),h=F(14,24),u=a.createRadialGradient(l,c,0,l,c,h);u.addColorStop(0,"rgba(30,12,48,0.24)"),u.addColorStop(1,"rgba(30,12,48,0)"),a.fillStyle=u,a.fillRect(0,0,256,64)}}),r=[];for(let a=0;a<4;a++){let o=new Pt(new Vt({map:s,fog:!1,depthWrite:!1,transparent:!0,opacity:.9}));o.scale.set(F(120,180),F(18,28),1),o.position.set(F(-60,60),F(-24,16),3+a),o.userData.v=F(1.5,3)*(a%2?1:-1),i.add(o),r.push(o)}return i.userData.clouds=r,i.userData.halo=n,i.userData.disc=t,i}function uM(){return xn(512,256,i=>{for(let n=0;n<80;n++){let s=F(0,512),r=F(80,225),a=F(30,95),o=i.createRadialGradient(s,r,0,s,r,a);o.addColorStop(0,"rgba(215,190,240,0.20)"),o.addColorStop(1,"rgba(215,190,240,0)"),i.fillStyle=o,i.fillRect(0,0,512,256)}i.globalCompositeOperation="destination-in";let e=i.createLinearGradient(0,0,0,256);e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(.45,"rgba(0,0,0,0.6)"),e.addColorStop(.85,"rgba(0,0,0,1)"),e.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=e,i.fillRect(0,0,512,256);let t=i.createLinearGradient(0,0,512,0);t.addColorStop(0,"rgba(0,0,0,0)"),t.addColorStop(.15,"rgba(0,0,0,1)"),t.addColorStop(.85,"rgba(0,0,0,1)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,512,256)})}function dM(){return xn(128,512,i=>{let e=i.createImageData(128,512);for(let t=0;t<512;t++)for(let n=0;n<128;n++){let s=(n-64)/64,r=t/512,a=Math.exp(-s*s*5)*Math.pow(1-r,.6)*Math.min(1,r*8)*(.75+.25*Math.sin(n*.4+t*.01)),o=(t*128+n)*4;e.data[o]=255,e.data[o+1]=255,e.data[o+2]=255,e.data[o+3]=Math.round(255*a)}i.putImageData(e,0,0)})}function fM(){let i=xn(512,512,e=>{e.fillStyle="#9a90a8",e.fillRect(0,0,512,512);for(let t=0;t<2600;t++){let n=F(0,512),s=F(0,512),r=F(2,22),a=F(.25,.9);e.fillStyle=`rgba(${Math.round(90*a)},${Math.round(84*a)},${Math.round(100*a)},0.35)`,e.beginPath(),e.ellipse(n,s,r,r*F(.4,1),F(0,3),0,7),e.fill()}e.strokeStyle="rgba(40,30,40,0.35)",e.lineWidth=1.2;for(let t=0;t<900;t++){let n=F(0,512),s=F(0,512);e.beginPath(),e.moveTo(n,s),e.lineTo(n+F(-3,3),s-F(4,10)),e.stroke()}});return i.wrapS=i.wrapT=Ji,i.anisotropy=8,i}function Nc(i=46,e=.14){let t=[],n=0,s=0,r=14;for(let o=0;o<=r;o++)t.push(new C(n,s,F(-.6,.6))),n+=F(-1.6,1.6)*(i/46),s-=i/r;let a=new Tn(new kn(t),70,e,4,!1);return new j(a,new Gt({color:new Ue(3.2,3,4.2),transparent:!0,opacity:0,fog:!1,depthWrite:!1,blending:gt}))}function Op(i,e){let t=fs[e]||fs.high,n={root:new Ke,t:0,q:t,nextBolt:3,boltT:-10,flash:0,flashT:-10,flashAmp:0,onThunder:null,biome:"grave",mix:{},stormy:0};i.add(n.root),n.fog=new ca(An.grave.fog,An.grave.dens),i.fog=n.fog,n.sky=lM(),n.root.add(n.sky),n.stars=cM(t.stars),n.root.add(n.stars),n.moon=hM(),n.root.add(n.moon),n.hemi=new Ia(8022720,1839140,1.1),n.root.add(n.hemi),n.moonLight=new Cs(13160703,1.5),n.root.add(n.moonLight),n.root.add(n.moonLight.target),n.rim=new Cs(16747088,.5),n.root.add(n.rim),n.root.add(n.rim.target),n.flashLight=new Cs(14212351,0),n.root.add(n.flashLight),n.root.add(n.flashLight.target);let s=fM();s.repeat.set(20,20),n.ground=new j(new bn(320,320),new je({color:An.grave.ground,map:s,roughness:1,metalness:0,emissive:1708080,emissiveIntensity:1})),n.ground.rotation.x=-Math.PI/2,n.root.add(n.ground);let r=uM();n.fogCards=[];for(let o=0;o<t.fog;o++){let l=new j(new bn(90,13),new Gt({map:r,transparent:!0,depthWrite:!1,opacity:.5,color:13154536,fog:!1}));l.position.set(F(-20,20),F(1.5,4.5),-o*(110/t.fog)-10),l.userData.base=F(.22,.42),l.renderOrder=2,n.root.add(l),n.fogCards.push(l)}let a=dM();n.rays=[];for(let o=0;o<t.rays;o++){let l=new j(new bn(1,1),new Gt({map:a,transparent:!0,depthWrite:!1,blending:gt,opacity:0,fog:!1,color:16769200}));l.userData={w:F(4,9),h:F(34,48),ph:F(0,6),base:F(.12,.2)},l.scale.set(l.userData.w,l.userData.h,1),l.position.set((o%2?1:-1)*F(3,26),0,-F(20,120)),l.rotation.z=-.42,l.renderOrder=3,n.root.add(l),n.rays.push(l)}{let o=t.ff,l=new Float32Array(o*3),c=new Float32Array(o),h=new Float32Array(o);for(let f=0;f<o;f++)l[f*3]=F(-22,22),l[f*3+1]=F(.4,9),l[f*3+2]=F(-75,5),c[f]=F(0,6.28),h[f]=F(.08,.2);let u=new Mt;u.setAttribute("position",new wt(l,3).setUsage(Ui)),u.setAttribute("phase",new wt(c,1)),u.setAttribute("size",new wt(h,1));let d=new At({transparent:!0,depthWrite:!1,blending:gt,uniforms:{time:{value:0},scale:{value:500},col:{value:new C(1,.8,.35)}},vertexShader:`attribute float phase; attribute float size; uniform float time; uniform float scale; varying float vA;
        void main(){ vec3 p = position + vec3(sin(time*0.7+phase*3.0)*0.6, sin(time*1.1+phase)*0.4, cos(time*0.6+phase*2.0)*0.6);
          vec4 mv = modelViewMatrix * vec4(p,1.0); vA = 0.35 + 0.65 * pow(0.5 + 0.5 * sin(time * 2.3 + phase * 5.0), 2.0);
          vA *= smoothstep(4.0, 12.0, -mv.z);
          gl_PointSize = size * scale / -mv.z; gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying float vA; uniform vec3 col; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a *= a; gl_FragColor = vec4(col * a * vA * 1.6, a * vA); }"});n.ff=new ji(u,d),n.ff.frustumCulled=!1,n.root.add(n.ff)}{let o=t.leaves,l=new bn(.26,.17),c=new je({color:16777215,side:Qt,roughness:.8,emissive:4200456,emissiveIntensity:.6});n.leaves=new ga(l,c,o),n.leaves.frustumCulled=!1;let h=[13787162,12073490,14715424,9058832,13148208];n.leafData=[];for(let u=0;u<o;u++)n.leaves.setColorAt(u,new Ue(h[u%h.length])),n.leafData.push({x:F(-16,16),y:F(0,11),z:F(-60,4),r:F(0,6),w:F(1,4),ph:F(0,6),fall:F(.6,1.3)});n.root.add(n.leaves)}{let o=Math.round(t.ff*2.2),l=new Float32Array(o*6);n.rainData=[];for(let h=0;h<o;h++)n.rainData.push({x:F(-18,18),y:F(0,16),z:F(-50,4),v:F(24,32)});let c=new Mt;c.setAttribute("position",new wt(l,3).setUsage(Ui)),n.rain=new Es(c,new Ki({color:12103935,transparent:!0,opacity:0,depthWrite:!1,fog:!1})),n.rain.frustumCulled=!1,n.root.add(n.rain)}return n.bolt=Nc(),n.bolt.visible=!1,n.root.add(n.bolt),n.cur={fog:new Ue(An.grave.fog),dens:An.grave.dens,hor:new C(...An.grave.hor),mid:new C(...An.grave.mid),ground:new Ue(An.grave.ground),hs:new Ue(An.grave.hs),hg:new Ue(An.grave.hg),hemi:1.1,moon:1.5,rays:.6,leaves:.3,ff:new C(...An.grave.ff),ray:new Ue(...An.grave.ray)},Dr(n,"grave",!0),n}function Dr(i,e,t=!1){i.biome=e,i.target=An[e]||An.grave,t&&Hp(i,1)}var Lr=new Ue,Ou=new C;function Hp(i,e){let t=i.target,n=i.cur;n.fog.lerp(Lr.set(t.fog),e),n.dens+=(t.dens-n.dens)*e,n.hor.lerp(Ou.set(...t.hor),e),n.mid.lerp(Ou.set(...t.mid),e),n.ground.lerp(Lr.set(t.ground),e),n.hs.lerp(Lr.set(t.hs),e),n.hg.lerp(Lr.set(t.hg),e),n.hemi+=(t.hemi-n.hemi)*e,n.moon+=(t.moon-n.moon)*e,n.rays+=(t.rays-n.rays)*e,n.leaves+=(t.leaves-n.leaves)*e,n.ff.lerp(Ou.set(...t.ff),e),n.ray.lerp(Lr.setRGB(...t.ray),e)}function to(i,e={}){let t=!!e.near;if(!e.noBolt){i.root.remove(i.bolt),i.bolt.geometry.dispose(),i.bolt.material.dispose(),i.bolt=Nc(),i.root.add(i.bolt);let n=i.camZ||0,s=i.camX||0;i.bolt.position.set(s+F(-60,60),50,n-F(80,130)),i.boltT=i.t}i.flashT=i.t,i.flashAmp=t?1:e.amp||.55,i.onThunder&&!e.silent&&setTimeout(()=>i.onThunder(t),t?30:F(250,900))}function Uc(i,e,t,n={}){i.t+=e;let s=t.position.x,r=t.position.z;i.camX=s,i.camZ=r,Hp(i,1-Math.exp(-e*.9));let a=i.cur;i.fog.color.copy(a.fog),i.fog.density=a.dens*(n.fogMul||1);let o=i.sky.material.uniforms;o.time.value=i.t,o.hor.value.copy(a.hor),o.mid.value.copy(a.mid),i.sky.position.set(s,0,r),i.stars.position.set(s,0,r),i.stars.material.uniforms.time.value=i.t,i.stars.material.uniforms.dim.value=1-i.stormy*.5,i.moon.position.set(s+Ir.x*330,Ir.y*330+4,r+Ir.z*330);for(let u of i.moon.userData.clouds)u.position.x+=u.userData.v*e,u.position.x>110&&(u.position.x=-110),u.position.x<-110&&(u.position.x=110),u.material.opacity=.75+i.stormy*.25;i.moon.userData.halo.material.opacity=.42+.06*Math.sin(i.t*.7),i.hemi.color.copy(a.hs),i.hemi.groundColor.copy(a.hg),i.moonLight.position.set(s+Ir.x*50,40,r+Ir.z*50),i.moonLight.target.position.set(s,0,r-10),i.rim.position.set(s-20,8,r+30),i.rim.target.position.set(s,2,r-10),i.flashLight.position.set(s-10,40,r-30),i.flashLight.target.position.set(s,0,r),i.ground.position.set(Math.round(s/16)*16,0,Math.round(r/16)*16-100),i.ground.material.color.copy(a.ground);for(let u of i.fogCards){u.position.z>r+2&&(u.position.z-=112,u.position.x=s+F(-20,20),u.position.y=F(1.2,4.5));let d=r-u.position.z;u.material.opacity=u.userData.base*Qe((d-3)/14,0,1)*(n.fogCards??1)*(1-i.stormy*.4),u.material.color.copy(a.fog).multiplyScalar(2.2).lerp(Lr.set(13680880),.22*(1-i.stormy))}for(let u of i.rays){u.position.z>r-8&&(u.position.z-=F(100,130),u.position.x=s+(Math.random()<.5?-1:1)*F(4,26)),u.position.y=u.userData.h*.45;let d=r-u.position.z,f=Qe((d-10)/25,0,1)*Qe((140-d)/40,0,1);u.material.opacity=u.userData.base*a.rays*f*(.75+.25*Math.sin(i.t*.8+u.userData.ph))*(n.raysMul||1),u.material.color.copy(a.ray)}{let u=i.ff.geometry.attributes.position,d=u.array;for(let f=0;f<d.length;f+=3)d[f+2]>r+4&&(d[f+2]-=80,d[f]=s+F(-22,22),d[f+1]=F(.4,9)),d[f+2]<r-80&&(d[f+2]+=80),d[f]<s-24&&(d[f]+=48),d[f]>s+24&&(d[f]-=48);u.needsUpdate=!0,i.ff.material.uniforms.time.value=i.t,i.ff.material.uniforms.col.value.copy(a.ff)}{let u=new yt,d=new zn,f=new Qn,g=new C,v=new C,m=i.leafData.length,p=Math.round(m*Qe(a.leaves,0,1));for(let M=0;M<m;M++){let b=i.leafData[M];b.y-=b.fall*e,b.x+=Math.sin(i.t*1.3+b.ph)*e*.8,b.r+=b.w*e,(b.y<0||b.z>r+3)&&(b.y=F(5,12),b.z=r-F(5,60),b.x=s+F(-16,16)),b.x<s-18&&(b.x+=36),b.x>s+18&&(b.x-=36),f.set(b.r,b.r*.7+b.ph,Math.sin(b.r)*.8),d.setFromEuler(f),v.set(b.x,b.y,b.z);let _=v.distanceTo(t.position);g.setScalar(M<p?Qe((_-2.5)/4,0,1):0),u.compose(v,d,g),i.leaves.setMatrixAt(M,u)}i.leaves.instanceMatrix.needsUpdate=!0}{let u=i.stormy>.05;if(i.rain.visible=u,i.rain.material.opacity=.32*i.stormy*(1+i.flash),u){let d=i.rain.geometry.attributes.position.array,f=0;for(let g of i.rainData)g.y-=g.v*e,(g.y<0||g.z>r+3)&&(g.y=F(8,16),g.z=r-F(2,50),g.x=s+F(-18,18)),g.z<r-52&&(g.z+=52),d[f++]=g.x,d[f++]=g.y,d[f++]=g.z,d[f++]=g.x-.12,d[f++]=g.y+.9,d[f++]=g.z-.35;i.rain.geometry.attributes.position.needsUpdate=!0}}!n.noAmbient&&i.t>i.nextBolt&&(to(i,{amp:.4+i.stormy*.4}),i.nextBolt=i.t+(i.stormy>.5?F(2.5,5):F(9,16)));let l=i.t-i.flashT,c=l<.6?i.flashAmp*(l<.07?1:l<.13?.25:l<.22?.9:Math.max(0,1-(l-.22)/.38)*.6):0;i.flash=c,o.flash.value=c*.55,i.flashLight.intensity=c*2.2,i.hemi.intensity=a.hemi*(1+c*.8),i.moonLight.intensity=a.moon;let h=i.t-i.boltT;i.bolt.visible=h<.32,i.bolt.material.opacity=h<.32?h<.1||h>.16&&h<.26?1:.25:0}var Us=Math.PI*2;function Hu(i=10,e=.075,t=.84,n=56){let s=new Et(1,n,Math.round(n*.6)),r=s.attributes.position,a=new C;for(let o=0;o<r.count;o++){a.fromBufferAttribute(r,o);let l=Math.atan2(a.z,a.x),c=Math.pow(Math.abs(Math.cos(l*i/2)),.6),h=Math.sqrt(Math.max(0,1-a.y*a.y)),u=1-e*(1-c)*h,d=a.y*t;a.y>.75&&(d-=(a.y-.75)*.55),a.y<-.8&&(d+=(-.8-a.y)*.4),r.setXYZ(o,a.x*u,d,a.z*u)}return s.computeVertexNormals(),s}function kp(i,e){let t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function zp(i,e=!0){let t=new Di(i);return e&&(t.colorSpace=$t),t.anisotropy=4,t}function pM(i,e,t=["#ff8a1e","#e0640c","#b24a06"],n=10){let[s,r]=kp(i,e),a=r.createLinearGradient(0,0,0,e);a.addColorStop(0,t[2]),a.addColorStop(.18,t[1]),a.addColorStop(.5,t[0]),a.addColorStop(.82,t[1]),a.addColorStop(1,t[2]),r.fillStyle=a,r.fillRect(0,0,i,e);for(let o=0;o<n;o++){let l=(o+.5)*i/n,c=r.createLinearGradient(l-i/n/2,0,l+i/n/2,0);c.addColorStop(0,"rgba(90,25,0,0.55)"),c.addColorStop(.18,"rgba(90,25,0,0)"),c.addColorStop(.5,"rgba(255,200,120,0.10)"),c.addColorStop(.82,"rgba(90,25,0,0)"),c.addColorStop(1,"rgba(90,25,0,0.55)"),r.fillStyle=c,r.fillRect(l-i/n/2,0,i/n,e)}for(let o=0;o<i*e/900;o++)r.fillStyle=Math.random()<.5?"rgba(255,190,90,0.10)":"rgba(80,20,0,0.12)",r.fillRect(Math.random()*i,Math.random()*e,1+Math.random()*3,2+Math.random()*10);return[s,r]}var zu={evil(i,e,t,n){i.beginPath(),i.moveTo(e-70*n,t-18*n),i.lineTo(e-28*n,t-12*n),i.lineTo(e-52*n,t-58*n),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e+70*n,t-18*n),i.lineTo(e+28*n,t-12*n),i.lineTo(e+52*n,t-58*n),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e,t-6*n),i.lineTo(e-12*n,t+14*n),i.lineTo(e+12*n,t+14*n),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e-92*n,t+18*n);let s=8;for(let r=0;r<=s;r++){let a=e-92*n+r*184*n/s;i.lineTo(a,t+(30+(r%2?14:0)+Math.sin(r/s*Math.PI)*22)*n)}for(let r=s;r>=0;r--){let a=e-92*n+r*184*n/s;i.lineTo(a,t+(44+(r%2?-10:0)+Math.sin(r/s*Math.PI)*44)*n)}i.closePath(),i.fill()},grin(i,e,t,n){for(let s of[-1,1])i.beginPath(),i.moveTo(e+s*22*n,t-10*n),i.lineTo(e+s*76*n,t-14*n),i.lineTo(e+s*50*n,t-54*n),i.closePath(),i.fill();i.beginPath(),i.moveTo(e-8*n,t+4*n),i.lineTo(e+8*n,t+4*n),i.lineTo(e,t-12*n),i.fill(),i.beginPath(),i.moveTo(e-100*n,t+6*n),i.quadraticCurveTo(e,t+120*n,e+100*n,t+6*n),i.quadraticCurveTo(e,t+62*n,e-100*n,t+6*n),i.fill(),i.save(),i.globalCompositeOperation="destination-out";for(let s of[-40,22])i.fillRect(e+s*n,t+30*n,18*n,22*n);i.restore()},wild(i,e,t,n){i.beginPath(),i.ellipse(e-46*n,t-30*n,20*n,26*n,.3,0,Us),i.fill(),i.beginPath(),i.moveTo(e+24*n,t-10*n),i.lineTo(e+78*n,t-24*n),i.lineTo(e+46*n,t-62*n),i.closePath(),i.fill(),i.beginPath(),i.moveTo(e-90*n,t+22*n);for(let s=0;s<=10;s++)i.lineTo(e-90*n+s*18*n,t+(22+(s%2?22:0)+Math.sin(s/10*Math.PI)*18)*n);i.lineTo(e+90*n,t+22*n);for(let s=10;s>=0;s--)i.lineTo(e-90*n+s*18*n,t+(60+(s%2?-14:0)+Math.sin(s/10*Math.PI)*30)*n);i.closePath(),i.fill()},cute(i,e,t,n){for(let s of[-1,1])i.beginPath(),i.ellipse(e+s*44*n,t-24*n,22*n,27*n,0,0,Us),i.fill();i.beginPath(),i.moveTo(e-62*n,t+22*n),i.quadraticCurveTo(e,t+92*n,e+62*n,t+22*n),i.quadraticCurveTo(e,t+54*n,e-62*n,t+22*n),i.fill(),i.save(),i.globalCompositeOperation="destination-out";for(let s of[-1,1])i.beginPath(),i.arc(e+s*44*n+8*n,t-34*n,7*n,0,Us),i.fill();i.restore()},happy(i,e,t,n){for(let s of[-1,1])i.beginPath(),i.arc(e+s*44*n,t-14*n,24*n,Math.PI,0),i.lineTo(e+s*44*n+12*n,t-14*n),i.arc(e+s*44*n,t-14*n,12*n,0,Math.PI,!0),i.closePath(),i.fill();i.beginPath(),i.arc(e,t+18*n,50*n,.15,Math.PI-.15),i.closePath(),i.fill()},sleepy(i,e,t,n){for(let s of[-1,1])i.beginPath(),i.ellipse(e+s*44*n,t-18*n,22*n,9*n,0,0,Math.PI),i.fill();i.beginPath(),i.ellipse(e,t+40*n,18*n,22*n,0,0,Us),i.fill()},boss(i,e,t,n){for(let r of[-1,1])i.beginPath(),i.moveTo(e+r*18*n,t-6*n),i.lineTo(e+r*96*n,t-34*n),i.lineTo(e+r*84*n,t-4*n),i.lineTo(e+r*52*n,t+6*n),i.closePath(),i.fill();i.beginPath(),i.moveTo(e-10*n,t+26*n),i.lineTo(e+10*n,t+26*n),i.lineTo(e,t+6*n),i.fill(),i.beginPath(),i.moveTo(e-128*n,t+34*n);let s=12;for(let r=0;r<=s;r++)i.lineTo(e-128*n+r*256*n/s,t+(40+(r%2?26:0)+Math.sin(r/s*Math.PI)*26)*n);for(let r=s;r>=0;r--)i.lineTo(e-128*n+r*256*n/s,t+(64+(r%2?-22:0)+Math.sin(r/s*Math.PI)*74)*n);i.closePath(),i.fill()},bosskids(i,e,t,n){for(let s of[-1,1])i.beginPath(),i.ellipse(e+s*52*n,t-20*n,26*n,32*n,0,0,Us),i.fill();i.beginPath(),i.moveTo(e-90*n,t+30*n),i.quadraticCurveTo(e,t+130*n,e+90*n,t+30*n),i.quadraticCurveTo(e,t+72*n,e-90*n,t+30*n),i.fill(),i.save(),i.globalCompositeOperation="destination-out";for(let s of[-1,1])i.beginPath(),i.arc(e+s*52*n+9*n,t-32*n,8*n,0,Us),i.fill();i.restore()}};function mM(i,e,t,n,s,r,a){let o=n/4,l=s*.5,c=r*n/1024;if(i.save(),i.shadowColor="rgba(60,10,0,0.9)",i.shadowBlur=10*c,i.fillStyle="#ffd36a",zu[t](i,o,l,c),i.restore(),a){i.fillStyle="rgba(255,90,120,0.45)";for(let h of[-1,1])i.beginPath(),i.ellipse(o+h*76*c,l+18*c,18*c,10*c,0,0,Us),i.fill()}e.fillStyle="#000",e.fillRect(0,0,n,s),e.save(),e.shadowColor="rgba(255,120,20,0.9)",e.shadowBlur=26*c,e.fillStyle="#ffb540",zu[t](e,o,l,c),e.restore(),e.fillStyle="#fff2b0",e.save(),e.translate(o,l),e.scale(.8,.8),e.translate(-o,-l),zu[t](e,o,l+6*c,c),e.restore()}function Vp(i,e={}){let t=e.W||1024,n=t/2,[s,r]=pM(t,n,e.base,e.ribs||10),[a,o]=kp(t,n);mM(r,o,i,t,n,e.scale||1,!!e.blush);let l=new je({map:zp(s),emissiveMap:zp(a),emissive:new Ue(e.emissive||16777215),emissiveIntensity:e.ei||2.4,roughness:.48,metalness:0});return l.userData={cCol:s,gCol:r,cEm:a,gEm:o,face:i,W:t,H:n},l.side=Qt,l.onBeforeCompile=c=>{c.fragmentShader=c.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
      if (!gl_FrontFacing) {
        vec3 vp = vViewPosition; float ndv = abs(dot(normalize(normal), normalize(vp)));
        float fib = 0.5 + 0.5 * sin(dot(vp, vec3(37.0, 53.0, 21.0))) * sin(dot(vp, vec3(-23.0, 41.0, 67.0)));
        vec3 fl = mix(vec3(0.85, 0.28, 0.02), vec3(1.0, 0.55, 0.12), fib * 0.6 + ndv * 0.4);
        gl_FragColor = vec4(fl * (0.2 + 0.32 * ndv), 1.0);
      }`)},l}var Fc={};function gM(i="n"){return Fc[i]||(Fc[i]=i==="boss"?Hu(14,.09,.8,96):i==="tall"?Hu(8,.07,1.05,48):Hu(10,.075,.84,48),Fc[i].userData.shared=!0),Fc[i]}var Gp=new je({color:4864536,roughness:.85});Gp.userData.shared=!0;var Bc=null;function xM(i){Bc||(Bc=new Tn(new xi(new C(0,0,0),new C(.02,.18,0),new C(.12,.3,.02)),6,.07,6,!1)),Bc.userData.shared=!0;let e=new j(Bc,Gp);return e.scale.setScalar(i),e}var Oc={};function _M(i){let e=i?"g":"n";return Oc[e]||(Oc[e]=new Vt({map:vM(),blending:gt,depthWrite:!1,transparent:!0,opacity:i?.95:.6,color:i?16769136:16777215}),Oc[e].userData.shared=!0),Oc[e]}var Hc=null;function vM(){return Hc||(Hc=Un("rgba(255,190,90,0.9)","rgba(255,100,20,0.28)"),Hc.userData.shared=!0),Hc}function Wp(i,e,t="n",n=!1){let s=new Ke,r=new j(gM(t),i);r.scale.setScalar(e),s.add(r);let a=xM(e*1.3);a.position.y=e*(t==="tall"?.92:.72),s.add(a);let o=new Pt(_M(n));return o.scale.set(e*4.2,e*4.2,1),o.position.z=-e*.2,o.renderOrder=-1,s.add(o),s.userData.body=r,s.userData.halo=o,s}var Fn=6.5,Ur=.9,Fr=7.4,yM=.55,Nr=new C;function Xp(i,e=1,t=0,n=null){let s=new Ke,r=(a,o,l,c,h)=>{let u=a.clone().add(o.clone().multiplyScalar(l)),d=a.clone().lerp(u,.5).add(new C(Dt(-.2,.2)-t*.2,Dt(-.05,.12),Dt(-.2,.2)).multiplyScalar(l)),f=new xi(a,d,u),g=new Tn(f,5,c,5,!1),v=g.attributes.position,m=g.attributes.uv;for(let M=0;M<v.count;M++){let b=m.getX(M),_=f.getPoint(b),T=1-.55*b;v.setXYZ(M,_.x+(v.getX(M)-_.x)*T,_.y+(v.getY(M)-_.y)*T,_.z+(v.getZ(M)-_.z)*T)}if(g.computeVertexNormals(),s.add(new j(g,i)),n&&h<=2&&Dt()<.5){let M=Dt(1.2,3.2),b=new xi(u,u.clone().add(new C(Dt(-.3,.3),-M*.5,Dt(-.3,.3))),u.clone().add(new C(Dt(-.2,.2),-M,0)));s.add(new j(new Tn(b,6,.025,4,!1),n))}if(h<=0)return;let p=h>2||Dt()<.5?2:3;for(let M=0;M<p;M++){let b=o.clone().add(new C(Dt(-.9,.9),Dt(-.1,.5),Dt(-.5,.5))).normalize();b.y<-.2&&(b.y=-.2),r(u,b.normalize(),l*Dt(.55,.8),c*.55,h-1)}};return r(new C(0,-.5,0),new C(Dt(-.15,.15),1,0).normalize(),2.6,.24,4),s.scale.setScalar(e),s}function MM(i,e){let t=new Ln;return t.moveTo(-i/2,0),t.lineTo(-i/2,e-i/2),t.absarc(0,e-i/2,i/2,Math.PI,0,!0),t.lineTo(i/2,0),t.lineTo(-i/2,0),t}function $p(i,e,t,n=!0){let s=new Ke,r=new ws(MM(e,t),{depth:.3,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:2,curveSegments:10});if(r.translate(0,0,-.15),s.add(new j(r,i.stone)),n){let a=new j(new Yt(e*.1,t*.28,.05),i.moss);a.position.set(0,t*.6,.2),s.add(a);let o=new j(new Yt(e*.32,e*.09,.05),i.moss);o.position.set(0,t*.66,.2),s.add(o)}return s}function ku(i,e,t=.6,n=!0){return xn(256,256,r=>{r.fillStyle="#000",r.fillRect(0,0,256,256);let a=256/i,o=256/e;for(let l=0;l<e;l++)for(let c=0;c<i;c++){if(Math.random()>t)continue;let h=c*a+a*.3,u=l*o+o*.25,d=a*.4,f=o*.5;r.shadowColor=n?"#ffa030":"#a0c0ff",r.shadowBlur=14,r.fillStyle=n?Math.random()<.5?"#ffc060":"#ff9a30":"#c0d8ff",r.fillRect(h,u,d,f),r.fillStyle="rgba(0,0,0,0.8)",r.fillRect(h+d/2-1,u,2,f),r.fillRect(h,u+f/2-1,d,2)}})}function En(i){return i.clone(!0)}function SM(i){let e={};e.bark=new je({color:2759204,roughness:1,emissive:787472,emissiveIntensity:1}),e.vine=new je({color:1980954,roughness:.9,emissive:662022}),e.stone=new je({color:8025224,roughness:.95,emissive:1314848,emissiveIntensity:1}),e.moss=new je({color:5925450,roughness:1}),e.iron=new je({color:2761780,metalness:.7,roughness:.4,emissive:919572,emissiveIntensity:1}),e.ironGlow=new je({color:9064703,emissive:8007935,emissiveIntensity:2.2,roughness:.4}),e.wall=new je({color:4075588,roughness:.95,emissive:16777215,emissiveIntensity:1.6,emissiveMap:ku(4,3,.55)}),e.wall2=new je({color:3420222,roughness:.95,emissive:16777215,emissiveIntensity:1.6,emissiveMap:ku(3,4,.5)}),e.roof=new je({color:2759216,roughness:.8,emissive:656400}),e.castle=new je({color:2761270,roughness:1,emissive:16777215,emissiveIntensity:1.5,emissiveMap:ku(6,10,.25)}),e.rock=new je({color:3024448,roughness:.95,flatShading:!0,emissive:656916,emissiveIntensity:1}),e.crystal=new je({color:10121471,emissive:8012031,emissiveIntensity:2.4,roughness:.2}),e.crystal2=new je({color:6349055,emissive:2142463,emissiveIntensity:2.2,roughness:.2}),e.lampGlow=new Vt({map:Un("rgba(255,210,130,1)","rgba(255,130,40,0.35)"),blending:gt,depthWrite:!1,transparent:!0}),e.purpleGlow=new Vt({map:Un("rgba(220,160,255,1)","rgba(140,60,255,0.35)"),blending:gt,depthWrite:!1,transparent:!0}),e.lampCore=new je({color:16765056,emissive:16752704,emissiveIntensity:3}),e.jackMats=(i?["cute","happy","grin"]:["evil","grin","wild"]).map(n=>Vp(n,{W:512,ei:2.6})),e.jacks=e.jackMats.map((n,s)=>Wp(n,1,s===1?"tall":"n")),e.trees=[];for(let n=0;n<4;n++)e.trees.push(Xp(e.bark,1,0));e.ftrees=[];for(let n=0;n<5;n++)e.ftrees.push(Xp(e.bark,1,1,e.vine));e.stones=[];for(let n=0;n<5;n++)e.stones.push($p(e,Dt(.8,1.3),Dt(1.2,2),Dt()<.6));e.crypt=(()=>{let n=new Ke,s=new j(new Yt(3.2,2.8,3.4),e.stone);s.position.y=1.4,n.add(s);let r=new j(new Wt(2.6,1.6,4),e.roof);r.position.y=3.6,r.rotation.y=Math.PI/4,r.scale.z=1.1,n.add(r);let a=new j(new bn(1.1,1.8),new Gt({color:11563263}));a.position.set(0,.9,1.71),n.add(a);let o=new Pt(e.purpleGlow);o.scale.set(4,4,1),o.position.set(0,1,2),n.add(o);let l=new j(new Yt(.15,.9,.15),e.stone);l.position.y=4.7,n.add(l);let c=new j(new Yt(.55,.15,.15),e.stone);return c.position.y=4.85,n.add(c),n})(),e.lantern=(()=>{let n=new Ke,s=new j(new Bt(.06,.09,3.2,8),e.iron);s.position.y=1.6,n.add(s);let r=new j(new Bt(.18,.14,.4,6),e.lampCore);r.position.y=3.3,n.add(r);let a=new j(new Wt(.26,.25,6),e.iron);a.position.y=3.6,n.add(a);let o=new Pt(e.lampGlow);return o.scale.set(3.2,3.2,1),o.position.y=3.3,n.add(o),n})(),e.fence=(()=>{let n=new Ke;for(let s=0;s<9;s++){let r=new j(new Bt(.035,.035,2.6,5),e.iron);r.position.set(-2+s*.5,1.3,0),n.add(r);let a=new j(new Wt(.07,.25,5),e.iron);a.position.set(-2+s*.5,2.7,0),n.add(a)}for(let s of[.4,2.2]){let r=new j(new Yt(4,.07,.07),e.iron);r.position.y=s,n.add(r)}return n})(),e.house=[0,1,2].map(n=>{let s=new Ke,r=3+n*.6,a=3.2+n*.7,o=3.2,l=new j(new Yt(r,a,o),n%2?e.wall2:e.wall);l.position.y=a/2,s.add(l);let c=new Ln;c.moveTo(-r/2-.3,0),c.lineTo(0,1.8+n*.3),c.lineTo(r/2+.3,0),c.lineTo(-r/2-.3,0);let h=new ws(c,{depth:o+.6,bevelEnabled:!1});h.translate(0,0,-(o+.6)/2);let u=new j(h,e.roof);u.position.y=a,s.add(u);let d=new j(new Yt(.5,1.6,.5),e.stone);return d.position.set(r*.25,a+1.2,0),s.add(d),s}),e.tower=(()=>{let n=new Ke,s=new j(new Bt(1.4,1.6,9,12),e.wall2);s.position.y=4.5,n.add(s);let r=new j(new Wt(1.9,3.6,12),e.roof);r.position.y=10.8,n.add(r);let a=new j(new Wt(.1,.8,4),e.ironGlow);return a.position.y=13,n.add(a),n})(),e.castleBig=(()=>{let n=new Ke,s=new j(new Yt(30,14,6),e.castle);s.position.y=7,n.add(s);for(let[r,a,o]of[[-15,26,3],[-6,34,2.6],[4,40,3.2],[15,28,3]]){let l=new j(new Bt(o,o*1.1,a,12),e.castle);l.position.set(r,a/2,0),n.add(l);let c=new j(new Wt(o*1.35,o*3,12),e.roof);c.position.set(r,a+o*1.5,0),n.add(c);let h=new Pt(e.purpleGlow);h.scale.set(6,6,1),h.position.set(r,a+o*3,0),n.add(h)}return n})(),e.rocks=[0,1,2,3].map(n=>{let s=new Ke,r=new j(new Ma(1,1),e.rock);r.scale.set(Dt(2.5,4.5),Dt(9,18),Dt(2.5,4.5)),r.position.y=r.scale.y*.55,r.rotation.y=Dt(0,3),s.add(r);for(let a=0;a<3;a++){let o=new j(new Rs(Dt(.4,.9)),a%2?e.crystal:e.crystal2);o.scale.y=2.2,o.position.set(Dt(-1.5,1.5),Dt(.5,6),Dt(1.5,3)),o.rotation.z=Dt(-.6,.6),s.add(o)}return s});let t=new Ln;for(let n=0;n<10;n++){let s=n/10*Math.PI*2+Math.PI/2,r=n%2?.2:.48;n?t.lineTo(Math.cos(s)*r,Math.sin(s)*r):t.moveTo(Math.cos(s)*r,Math.sin(s)*r)}e.starGeo=new ws(t,{depth:.12,bevelEnabled:!0,bevelThickness:.07,bevelSize:.05,bevelSegments:2}),e.starGeo.center(),e.starMat=new je({color:16767072,emissive:16752656,emissiveIntensity:1.5,roughness:.25,metalness:.5}),e.starGlow=new Vt({map:Un("rgba(255,235,160,1)","rgba(255,170,40,0.35)"),blending:gt,depthWrite:!1,transparent:!0,opacity:.8}),e.ringGeo=new ti(1.6,.13,12,56),e.ringMat=new je({color:8450303,emissive:4247807,emissiveIntensity:2.6,roughness:.3}),e.ringMat2=new je({color:14717183,emissive:11555071,emissiveIntensity:2.4,roughness:.3}),e.portal=new Vt({map:xn(256,256,n=>{let s=n.createRadialGradient(128,128,30,128,128,120);s.addColorStop(0,"rgba(120,220,255,0)"),s.addColorStop(.75,"rgba(140,120,255,0.22)"),s.addColorStop(1,"rgba(120,220,255,0)"),n.fillStyle=s,n.fillRect(0,0,256,256),n.strokeStyle="rgba(200,240,255,0.35)",n.lineWidth=3;for(let r=0;r<6;r++)n.beginPath(),n.arc(128,128,40+r*13,r,r+2.4),n.stroke()}),blending:gt,depthWrite:!1,transparent:!0}),e.batMat=new je({color:i?8014512:1445916,roughness:.6,emissive:i?3807328:787986,side:Qt}),e.batEye=new Gt({color:i?16777215:16726570}),e.batPupil=new Gt({color:1312792}),e.bubble=new je({color:10148095,emissive:3174592,emissiveIntensity:.9,transparent:!0,opacity:.35,roughness:.05,metalness:.2,depthWrite:!1}),e.icons={};for(let[n,s]of[["shield","\u{1F6E1}\uFE0F"],["magnet","\u{1F9F2}"],["x2","\xD72"]])e.icons[n]=new Vt({map:xn(128,128,r=>{r.textAlign="center",r.textBaseline="middle",n==="x2"?(r.font="900 70px Arial Black, Arial",r.fillStyle="#ffd860",r.shadowColor="#ff9a20",r.shadowBlur=12,r.fillText("\xD72",64,68)):(r.font='84px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',r.fillText(s,64,70))}),depthWrite:!1,transparent:!0});return e.marker=new Gt({map:xn(256,256,n=>{let s=n.createRadialGradient(128,128,10,128,128,126);s.addColorStop(0,"rgba(255,255,255,0.9)"),s.addColorStop(.5,"rgba(200,160,255,0.35)"),s.addColorStop(.82,"rgba(255,255,255,0.95)"),s.addColorStop(.9,"rgba(200,120,255,0.5)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,256,256)}),blending:gt,depthWrite:!1,transparent:!0,fog:!1,color:13672703}),e.column=new Gt({color:11567359,transparent:!0,opacity:.2,blending:gt,depthWrite:!1,fog:!1}),e.scorch=new Gt({map:e.marker.map,color:16748608,blending:gt,depthWrite:!1,transparent:!0}),e}function bM(i,e){let t=new Ke,n=new j(new Et(.2,10,8),i.batMat);n.scale.set(1,.9,1.2),t.add(n);let s=new j(new Et(.15,10,8),i.batMat);s.position.set(0,.12,.17),t.add(s);for(let u of[-1,1]){let d=new j(new Wt(.06,.16,5),i.batMat);d.position.set(u*.08,.28,.14),t.add(d);let f=new j(new Et(e?.06:.035,8,6),i.batEye);if(f.position.set(u*.065,.15,.3),t.add(f),e){let g=new j(new Et(.03,6,5),i.batPupil);g.position.set(u*.065,.15,.355),t.add(g)}}let r=new Ln;r.moveTo(0,0),r.lineTo(.75,.28),r.lineTo(.95,-.04),r.lineTo(.74,-.08),r.lineTo(.6,-.22),r.lineTo(.42,-.1),r.lineTo(.24,-.22),r.lineTo(0,-.08);let a=new es(r),o=new Ke,l=new Ke,c=new j(a,i.batMat);c.rotation.x=-Math.PI/2,o.add(c);let h=new j(a,i.batMat);return h.rotation.x=-Math.PI/2,h.scale.x=-1,l.add(h),o.position.x=.1,l.position.x=-.1,t.add(o,l),t.userData.wings=[o,l],t}function Jp(i,e){let t={scene:i,kids:!!e.kids,q:e.q,A:SM(!!e.kids),root:new Ke,decor:[],pools:{},ents:[],zones:[{z:1e9,name:"grave"}],decoZ:20,patZ:-30,time:0,zoneFn:()=>"grave",events:[],noPatterns:!1,lastZone:"grave",boltCD:0};return i.add(t.root),t}function Vu(i,e,t="grave"){for(let n of i.decor)Kp(i,n);i.decor=[];for(let n of i.ents)no(i,n);i.ents=[],i.zones=[{z:1e9,name:t}],i.lastZone=t,i.decoZ=e+20,i.patZ=e-34,i.time=0,i.events=[],i.boltCD=2}function EM(i,e,t){let s=(i.pools[e]||(i.pools[e]=[])).pop()||t();return s.userData.key=e,s.visible=!0,i.root.add(s),s}function Kp(i,e){i.root.remove(e),(i.pools[e.userData.key]||(i.pools[e.userData.key]=[])).push(e)}function Gu(i,e){let t=i.zones[0].name;for(let n of i.zones)e<=n.z&&(t=n.name);return t}function jp(i,e){let t=i.zoneFn(e);return t!==i.lastZone&&(i.zones.push({z:e,name:t}),i.lastZone=t,i.zones.length>12&&i.zones.splice(1,1)),t}function TM(i,e){let t=i.A,n=i.q.decor,s=jp(i,e),r=(a,o,l,c,h,u=1,d=0)=>{let f=EM(i,a,o);return f.position.set(l,c,h),f.scale.setScalar(u),f.rotation.set(0,d,0),i.decor.push(f),f};for(let a of[-1,1]){let o=(l,c)=>a*F(l,c);if(s==="grave"){for(let l=0;l<Math.round(F(1,3)*n);l++){let c=Math.random()*5|0;r("stone"+c,()=>En(t.stones[c]),o(8,24),0,e+F(-3,3),F(1.1,1.8),F(-.4,.4))}if(Math.random()<.18*n&&r("crypt",()=>En(t.crypt),o(14,26),0,e,F(.9,1.3),a>0?-.5:.5),Math.random()<.5*n){let l=Math.random()*4|0;r("tree"+l,()=>En(t.trees[l]),o(10,34),0,e+F(-3,3),F(1.6,2.6),F(0,6))}Math.random()<.3&&r("lantern",()=>En(t.lantern),a*F(8,9.5),0,e,1)}else if(s==="forest"){for(let l=0;l<Math.round(F(1.4,2.6)*n);l++){let c=Math.random()*5|0;r("ftree"+c,()=>En(t.ftrees[c]),o(9,30),0,e+F(-3,3),F(2.2,3.4),F(0,6))}if(Math.random()<.7*n){let l=Math.random()*3|0,c=Math.random()<.5,h=c?F(2.4,4.2):F(.8,1.8);r("jack"+l,()=>En(t.jacks[l]),a*(c?F(14,26):F(8,12)),h*.78,e+F(-2,2),h,-a*F(.2,.6))}}else if(s==="village"){if(Math.random()<.7*n){let l=Math.random()*3|0;r("house"+l,()=>En(t.house[l]),o(10,18),0,e+F(-2,2),F(.9,1.3),a>0?-Math.PI/2+F(-.2,.2):Math.PI/2+F(-.2,.2))}Math.random()<.18*n&&r("tower",()=>En(t.tower),o(16,26),0,e,F(.9,1.3)),Math.random()<.35&&r("lantern",()=>En(t.lantern),a*F(8,9.5),0,e,1),Math.random()<.05&&r("castle",()=>En(t.castleBig),a*F(45,60),0,e-40,F(1,1.3),a>0?-.6:.6)}else if(s==="canyon")for(let l=0;l<2;l++){let c=Math.random()*4|0;r("rock"+c,()=>En(t.rocks[c]),a*F(9.5,13+l*6),0,e+F(-3,3),F(.9,1.4),F(0,6))}else{if(Math.random()<.6*n){let l=Math.random()*4|0;r("rock"+l,()=>En(t.rocks[l]),o(12,30),0,e+F(-3,3),F(.6,1.1),F(0,6))}if(Math.random()<.4*n){let l=Math.random()*4|0;r("tree"+l,()=>En(t.trees[l]),o(9,28),0,e,F(1.8,2.8),F(0,6))}}}}function zc(i,e){return i.root.add(e.obj),i.ents.push(e),e}function no(i,e){if(e.obj&&i.root.remove(e.obj),e.extra)for(let t of e.extra)i.root.remove(t);e.dead=!0}function Wu(i,e,t,n){let s=new Ke,r=new j(i.A.starGeo,i.A.starMat);s.add(r);let a=new Pt(i.A.starGlow);return a.scale.set(1.9,1.9,1),s.add(a),s.position.set(e,t,n),zc(i,{type:"star",obj:s,mesh:r,x:e,y:t,z:n,ph:Math.random()*6})}function Si(i,e,t,n,s,r,a,o=2.4,l=0){for(let c=0;c<t;c++){let h=t>1?c/(t-1):0;Wu(i,n+(r-n)*h,s+(a-s)*h+Math.sin(h*Math.PI)*l,e-c*o)}}function Qp(i,e,t,n){let s=new Ke,r=new j(i.A.ringGeo,Math.random()<.5?i.A.ringMat:i.A.ringMat2);s.add(r);let a=new Pt(i.A.portal.clone());return a.scale.set(4.2,4.2,1),s.add(a),s.position.set(e,t,n),zc(i,{type:"ring",obj:s,mesh:r,portal:a,x:e,y:t,z:n,r:1.6})}function em(i,e,t,n,s){let r=new Ke,a=new j(new Et(.8,24,16),i.A.bubble);r.add(a);let o=new Pt(i.A.icons[e]);o.scale.set(1.05,1.05,1),r.add(o);let l=new Pt(i.A.purpleGlow);return l.scale.set(3,3,1),r.add(l),r.position.set(t,n,s),zc(i,{type:"pickup",kind:e,obj:r,x:t,y:n,z:s})}function ps(i,e){return e.hazard=!0,e.minM=99,zc(i,e)}function tm(i,e,t,n,s){let r=$p(i.A,n,s,!0);return r.position.set(e,0,t),r.rotation.z=F(-.05,.05),ps(i,{type:"stone",obj:r,x:e,y:0,z:t,box:[e-n/2-.05,0,t-.3,e+n/2+.05,s,t+.3]})}function wM(i,e,t,n){let s=i.A,r=new Ke;r.position.set(0,0,t);let a=6.4,o=5.5;for(let f of[-1,1]){let g=e+f*n,v=new j(new Yt(.5,a,.5),s.stone);v.position.set(g,a/2,0),r.add(v);let m=new j(new Wt(.45,.8,4),s.stone);m.position.set(g,a+.4,0),m.rotation.y=Math.PI/4,r.add(m);let p=new j(new Et(.22,12,8),s.ironGlow);p.position.set(g,a+.95,0),r.add(p);let M=new Pt(s.purpleGlow);M.scale.set(2.6,2.6,1),M.position.set(g,a+.95,0),r.add(M);for(let b=g+f*2.25;Math.abs(b)<18;b+=f*4){let _=En(s.fence);_.position.set(b,0,0),_.scale.y=1.15,r.add(_)}}let l=new ti(n,.09,6,28,Math.PI),c=new j(l,s.iron);c.position.set(e,o,0),c.scale.y=.45,r.add(c);let h=new j(new Yt(n*2,.16,.16),s.iron);h.position.set(e,o,0),r.add(h);let u=new j(new ti(.35,.06,6,20),s.ironGlow);u.position.set(e,o+n*.3,0),r.add(u);let d=[];for(let f of[-1,1]){let g=e+f*n;d.push([g-.3,0,t-.35,g+.3,a+1.2,t+.35]);let v=f>0?g:-20,m=f>0?20:g;d.push([v,0,t-.3,m,3.25,t+.3])}return d.push([e-n,o-.12,t-.25,e+n,o+.12+n*.45,t+.25]),ps(i,{type:"gate",obj:r,x:e,y:2.7,z:t,boxes:d,gap:n,top:o})}function qp(i,e,t,n,s){let r=i.A,a=new Ke,o=e*11,l=[new C(o,n-.6,0),new C((o+t)/2,n+.35,F(-.3,.3)),new C(t,n,0)],c=new kn(l),h=new Tn(c,16,.28,6,!1),u=h.attributes.position,d=h.attributes.uv;for(let p=0;p<u.count;p++){let M=d.getX(p),b=c.getPoint(M),_=1-.6*M;u.setXYZ(p,b.x+(u.getX(p)-b.x)*_,b.y+(u.getY(p)-b.y)*_,b.z+(u.getZ(p)-b.z)*_)}h.computeVertexNormals(),a.add(new j(h,r.bark));for(let p=0;p<5;p++){let M=.25+p*.15,b=c.getPoint(M),_=new j(new Wt(.07,1.1,4),r.bark);_.position.copy(b),_.rotation.z=F(-1.2,1.2)+(p%2?2.6:.4),a.add(_);let T=F(.8,2),w=new j(new Bt(.02,.02,T,4),r.vine);w.position.set(b.x,b.y-T/2,b.z),a.add(w)}let f=new j(new Bt(.5,.8,14,8),r.bark);f.position.set(o+e*.4,6,0),a.add(f);let g=new j(new Et(.16,10,8),r.lampCore);g.position.set(t-e*.6,n-.55,0),a.add(g);let v=new Pt(r.lampGlow);v.scale.set(2.2,2.2,1),v.position.copy(g.position),a.add(v),a.position.z=s;let m=[];for(let p=0;p<=10;p++){let M=c.getPoint(p/10);m.push([M.x,M.y,.32*(1-.6*p/10)+.1])}return ps(i,{type:"branch",obj:a,x:t,y:n,z:s,seg:m})}function AM(i,e,t,n){let s=Math.random()*i.A.jacks.length|0,r=En(i.A.jacks[s]);return r.scale.setScalar(n),r.position.set(e,n*.78,t),r.rotation.y=F(-.25,.25),ps(i,{type:"jack",obj:r,x:e,y:n*.78,z:t,r:n*.92})}function RM(i,e,t,n){let s=i.A,r=new Ke,a=new j(new Yt(1.3,n,1.3),s.wall2);a.position.y=n/2,r.add(a);let o=new j(new Yt(1.6,.3,1.6),s.stone);o.position.y=n,r.add(o);let l=new j(new Wt(1.3,1.6,4),s.roof);l.position.y=n+.95,l.rotation.y=Math.PI/4,r.add(l);let c=new Pt(s.lampGlow);return c.scale.set(2.5,2.5,1),c.position.set(0,n*.6,.8),r.add(c),r.position.set(e,0,t),ps(i,{type:"chimney",obj:r,x:e,y:0,z:t,box:[e-.7,0,t-.7,e+.7,n+1.6,t+.7]})}function CM(i,e,t){let n=i.A,s=new Ke,r=[];for(let c=0;c<=20;c++){let h=-12+c*1.2;r.push(new C(h,e-Math.cos(h/12*Math.PI/2)*.6+.6,0))}let a=new kn(r);s.add(new j(new Tn(a,40,.035,4,!1),n.iron));let o=[16742944,11555071,4247807,16760896];for(let c=1;c<20;c+=2){let h=a.getPoint(c/20),u=new j(new Et(.26,10,8),new je({color:o[c%4],emissive:o[c%4],emissiveIntensity:2.2}));u.scale.y=1.25,u.position.set(h.x,h.y-.3,0),s.add(u)}for(let c of[-1,1]){let h=new j(new Bt(.15,.2,e+1.5,6),n.bark);h.position.set(c*12,(e+1.5)/2,0),s.add(h)}s.position.z=t;let l=[];for(let c=0;c<=20;c++){let h=a.getPoint(c/20);l.push([h.x,h.y-.15,.42])}return ps(i,{type:"line",obj:s,x:0,y:e,z:t,seg:l})}function PM(i,e,t,n,s){let r=new Ke,a=[];for(let l=0;l<s;l++){let c=bM(i.A,i.kids),h=i.kids?F(1.4,1.8):F(1.5,2.1);c.scale.setScalar(h),c.userData={...c.userData,ox:F(-1.6,1.6),oy:F(-1.1,1.1),oz:F(-2,2),ph:F(0,6),sp:F(7,11),s:h},r.add(c),a.push(c)}let o=-n*11;return r.position.set(0,0,0),ps(i,{type:"bats",obj:r,bats:a,cx:o,cy:t,z:e,x:o,y:t,vx:n*F(3.2,4.6),vz:i.kids?2.5:F(4,6),heard:!1,r:i.kids?.42:.5})}function IM(i,e,t,n){let s=i.A,r=new j(new bn(1,1),s.marker);r.rotation.x=-Math.PI/2,r.position.set(e,.06,t),r.scale.setScalar(3.2);let a=new j(new Bt(1.15,1.15,26,16,1,!0),s.column.clone());a.position.set(e,13,t);let o=i.kids?1.1:1.35,l=ps(i,{type:"bolt",obj:r,extra:[a],col:a,x:e,y:3.5,z:t,t0:i.time,tStrike:i.time+n,struck:!1,R:o,bolt:null});return i.root.add(a),i.events.push({ev:"telegraph",e:l}),l}function Bi(i,e,t,n,s=null){let r=Qe(s??e.x+F(-1,1),-Fn+.5,Fn-.5),a=e.z-t*n;return IM(i,r,a,n)}function LM(i){let e=0;for(let n in i)e+=i[n];let t=Math.random()*e;for(let n in i)if(t-=i[n],t<=0)return n;return Object.keys(i)[0]}var Yp={grave:{stars:3,stones:2.2,gate:2,bats:1.1,ring:1,pickup:.45,bolt:.3},forest:{stars:3,branch:2.6,jacks:2.2,bats:1.1,ring:1,pickup:.45},village:{stars:3,chimneys:2.2,line:2,bats:1.3,ring:1,pickup:.45,bolt:.5},canyon:{stars:3,ring:1.2},storm:{stars:3,ring:1.6,bats:1,pickup:.5}};function nm(i,e,t,n,s){let r=i.kids,a=LM(Yp[t]||Yp.grave);s.forceType&&(a=s.forceType),!s.forceType&&a===i.lastPat&&a!=="stars"&&Math.random()<.6&&(a="stars"),i.lastPat=a;let o=F(2,5.5),l=16;switch(a){case"stars":{let c=r?10:8,h=F(-5,5),u=Qe(h+F(-6,6),-5.5,5.5);Si(i,e,c,h,F(1.6,6),u,F(1.6,6),2.2,F(-1.5,2)),l=c*2.2;break}case"ring":{let c=F(-4,4),h=F(2.4,5.4);Si(i,e,r?6:4,c+F(-3,3),h,c,h,2.2),Qp(i,c,h,e-(r?6:4)*2.2-1.5),l=16;break}case"pickup":{em(i,Dc(["shield","magnet","x2"]),F(-4,4),F(2,5.5),e),l=6;break}case"stones":{let c=r?2:n>.3?3:2,h=[];for(let u=0;u<c;u++){let d,f=0;do d=F(-5.5,5.5),f++;while(h.some(g=>Math.abs(g-d)<3.2)&&f<20);h.push(d),tm(i,d,e-u*F(3,6),F(1.3,1.9),r?F(1.8,2.6):F(2.2,3.6))}Si(i,e+2,5,h[0],4.8,h[0],4.8,2.2),l=14;break}case"gate":{let c=F(-3,3),h=r?3:2.4;Si(i,e+9,4,c+F(-2,2),2.6,c,2.6,2.2),wM(i,c,e,h),Wu(i,c,2.6,e-2),l=14;break}case"branch":{let c=Math.random()<.5?-1:1,h=r?F(-2,1):F(-3.5,1.5),u=F(2.4,5.6);qp(i,c,-c*h,u,e),!r&&n>.25&&Math.random()<.6&&qp(i,-c,c*F(-1,2),Qe(u+(Math.random()<.5?-2.4:2.4),2,6.2),e-7),Si(i,e+4,5,c*3,u>4?2:6,c*2,u>4?2:6,2.2),l=16;break}case"jacks":{let c=r?1:2,h=[];for(let u=0;u<c;u++){let d;do d=F(-5,5);while(h.some(f=>Math.abs(f-d)<4.5));h.push(d),AM(i,d,e-u*6,r?F(1.4,1.8):F(1.7,2.3))}Si(i,e+4,7,h[0]-2,3.5,h[0]+2,3.5,1.5,2.6),l=16;break}case"chimneys":{let c=r?2:3,h=[];for(let u=0;u<c;u++){let d,f=0;do d=F(-5.5,5.5),f++;while(h.some(g=>Math.abs(g-d)<3)&&f<20);h.push(d),RM(i,d,e-u*F(3,5),r?F(2.4,3.2):F(3,4.8))}Si(i,e+2,5,-3,6.2,3,6.2,2.2),l=15;break}case"line":{let c=F(2.8,4.6);CM(i,c,e);let h=Math.random()<.5;Si(i,e+6,4,F(-3,3),h?c+2:c-1.6,0,h?c+2:c-1.6,2),l=12;break}case"bats":{let c=Math.random()<.5?-1:1;PM(i,e-10,F(2.5,5),c,r?5:Math.round(7+n*5)),Si(i,e,4,F(-4,4),F(2,6),F(-4,4),F(2,6),2.4),l=14;break}case"bolt":{i.pendingBolt=!0,Si(i,e,6,F(-4,4),3,F(-4,4),4,2.2),l=13;break}}return l}var Zp=(i,e,t,n)=>{let s=Math.max(i[0]-e,0,e-i[3]),r=Math.max(i[1]-t,0,t-i[4]),a=Math.max(i[2]-n,0,n-i[5]);return Math.sqrt(s*s+r*r+a*a)};function DM(i,e,t,n,s){let r=99;for(let a=0;a<i.length-1;a++){let o=i[a],l=i[a+1],c=l[0]-o[0],h=l[1]-o[1],u=c*c+h*h,d=u>0?((t-o[0])*c+(n-o[1])*h)/u:0;d=Qe(d,0,1);let f=o[0]+c*d,g=o[1]+h*d,v=o[2]+(l[2]-o[2])*d,m=Math.hypot(t-f,n-g,s-e)-v;m<r&&(r=m)}return r}function Xu(i,e){switch(i.type){case"stone":case"chimney":return Zp(i.box,e.x,e.y,e.z);case"gate":{let t=99;for(let n of i.boxes)t=Math.min(t,Zp(n,e.x,e.y,e.z));return t}case"branch":case"line":return DM(i.seg,i.z,e.x,e.y,e.z);case"jack":return Math.hypot(e.x-i.x,e.y-i.y,e.z-i.z)-i.r;case"bats":{let t=99;for(let n of i.bats)Nr.copy(n.position),t=Math.min(t,Nr.distanceTo(e)-i.r*n.userData.s/1.8);return t}case"bolt":return!i.struck||NM(i)>.32?99:Math.max(Math.hypot(e.x-i.x,e.z-i.z)-i.R,0)}return 99}function NM(i){return i._age||0}function im(i,e,t,n){i.time+=e;let s=i.A;if(i.events.length){let a=i.events;i.events=[];for(let o of a)n.onEvent(o.ev,o.e)}for(;i.decoZ>t.z-150;)TM(i,i.decoZ),i.decoZ-=7;for(let a=i.decor.length-1;a>=0;a--){let o=i.decor[a];o.position.z>t.z+16&&(Kp(i,o),i.decor.splice(a,1))}if(i.noPatterns)i.patZ>t.z-120&&(i.patZ=t.z-120);else for(;i.patZ>t.z-120;){let a=jp(i,i.patZ),o=nm(i,i.patZ,a,n.d,n),l=(i.kids?16:11-n.d*4)+F(0,4);i.patZ-=o+l}i.pendingBolt&&(i.pendingBolt=!1,(n.playing||n.attract)&&Bi(i,t,n.speed,i.kids?2.2:1.6));let r=i.time;for(let a of i.ents)if(!a.dead){switch(a.type){case"star":{a.mesh.rotation.y=r*3+a.ph,a.obj.position.y=a.y+Math.sin(r*2.5+a.ph)*.12;let o=t.z-a.obj.position.z;n.magnet&&o<16&&o>-1&&(a.obj.position.lerp(Nr.set(t.x,t.y+.3,t.z),1-Math.exp(-e*7)),a.y=a.obj.position.y),a.obj.position.distanceTo(Nr.set(t.x,t.y+.2,t.z))<(i.kids?1.7:1.3)+(n.magnet?.6:0)&&(n.onEvent("star",a),no(i,a));break}case"ring":{if(a.mesh.rotation.z=r*.8,a.portal.material.rotation=-r*1.5,a.obj.rotation.y=Math.sin(r*1.3+a.x)*.15,!a.passed&&t.z<=a.z&&(a.passed=!0,a.pt=0,Math.hypot(t.x-a.x,t.y-a.y)<a.r+(i.kids?.6:.2)&&n.onEvent("ring",a)),a.passed){a.pt+=e;let o=Math.min(1,a.pt/.22);a.obj.scale.setScalar(1+o*.8),a.obj.visible=o<1,a.portal.material.opacity=1-o}break}case"pickup":{a.obj.position.y=a.y+Math.sin(r*2+a.x)*.25,a.obj.children[0].rotation.y=r,n.magnet&&t.z-a.z<14&&t.z-a.z>-1&&(a.obj.position.lerp(Nr.set(t.x,t.y,t.z),1-Math.exp(-e*5)),a.y=a.obj.position.y,a.x=a.obj.position.x,a.z=a.obj.position.z),a.obj.position.distanceTo(Nr.set(t.x,t.y,t.z))<1.6&&(n.onEvent("pickup",a),no(i,a));break}case"bats":{a.x+=a.vx*e,a.z+=a.vz*e;let o=Qe(a.cx===void 0?0:1,0,1),l=0;for(let c of a.bats){let h=c.userData,u=a.x+h.ox+Math.sin(r*2.2+h.ph)*.9,d=a.cy+h.oy+Math.sin(r*3.1+h.ph*2)*.6,f=a.z+h.oz+Math.cos(r*2+h.ph)*.8;c.position.set(u,d,f),c.rotation.set(.15,Math.atan2(a.vx,a.vz)*.6+Math.PI*0+0,Math.sin(r*4+h.ph)*.3);let g=Math.sin(r*h.sp*1.6+h.ph);h.wings[0].rotation.z=g*.9,h.wings[1].rotation.z=-g*.9,l++}a.obj.rotation.y=0,!a.heard&&t.z-a.z<34&&(a.heard=!0,n.onEvent("batsNear",a));break}case"bolt":{let o=a.tStrike-r;if(a.struck){a._age+=e;let l=a._age;a.bolt&&(a.bolt.material.opacity=l<.08||l>.12&&l<.22?1:l<.35?.3:0,a.bolt.visible=l<.35),a.col.material.opacity=Math.max(0,.6-l*1.5),a.obj.material=s.scorch,a.obj.scale.setScalar(3.2+l*2)}else{let l=1-Qe(o/(a.tStrike-a.t0),0,1);if(a.obj.scale.setScalar(3.2+Math.sin(r*20)*.25*l+l*.6),a.obj.material.opacity=.5+.5*l,a.col.material.opacity=.05+.22*l*(.6+.4*Math.sin(r*30)),o<=0){a.struck=!0,a._age=0;let c=Nc(30,.22);c.position.set(a.x,30,a.z),c.scale.set(.6,1,.6),i.root.add(c),a.bolt=c,a.extra.push(c),c.material.opacity=1,a.col.material.opacity=.6,n.onEvent("strike",a)}}break}}if(a.hazard&&!a.dead&&!a.hit){let o=Math.abs(t.z-a.z);if((o<(a.type==="bats"?6:3.5)||a.type==="gate"||a.type==="branch"||a.type==="line")&&o<4){let l=Xu(a,t)-yM;l<0?(a.hit=!0,n.onEvent("hit",a)):l<a.minM&&(a.minM=l)}a.type==="gate"&&!a.scored&&t.z<a.z-.4&&(a.scored=!0,!a.hit&&Math.abs(t.x-a.x)<a.gap&&t.y<a.top&&n.onEvent("gate",a)),!a.nmDone&&t.z<a.z-2&&a.type!=="bolt"&&(a.nmDone=!0,!a.hit&&a.minM<.85&&n.onEvent("near",a)),a.type==="bolt"&&a.struck&&!a.nmDone&&a._age>.3&&(a.nmDone=!0,!a.hit&&Math.abs(t.z-a.z)<5&&Math.hypot(t.x-a.x,0)-a.R<1.6&&n.onEvent("near",a))}}for(let a=i.ents.length-1;a>=0;a--){let o=i.ents[a],l=o.type==="bats"?o.z+4:o.z,c=o.type==="star"||o.type==="pickup"?1.2:o.type==="ring"?5:14;!o._glowOff&&o.obj&&l>t.z+2.5&&(o._glowOff=!0,o.obj.traverse(h=>{(h.isSprite||h.isPoints)&&(h.visible=!1)})),(o.dead||l>t.z+c||o.type==="bolt"&&o.struck&&o._age>1.2)&&(o.dead||(o.type==="star"&&n.onEvent("missStar",o),no(i,o)),i.ents.splice(a,1))}}function sm(i,e,t,n=.3){return nm(i,t,Gu(i,t),n,{forceType:e})}function rm(i,e,t,n,s){return em(i,e,t,n,s)}function am(i,e,t,n){return Wu(i,e,t,n)}function om(i,e,t,n){return Qp(i,e,t,n)}function lm(i,e,t){return tm(i,e,t,1.6,3)}function cm(i,e,t=0,n=60,s=!1){for(let r of i.ents)(r.hazard||s)&&!r.dead&&r.z<e.z-t&&r.z>e.z-n&&r.type!=="bolt"&&no(i,r)}function kc(i,e,t,n,s,r=8){let a=new C().subVectors(e,i),o=a.length(),l=new Bt(n,t,o,r);l.translate(0,o/2,0);let c=new j(l,s);return c.position.copy(i),c.quaternion.setFromUnitVectors(new C(0,1,0),a.normalize()),c}function hm(){let i=new Ke,e=new Ke;i.add(e);let t={root:i,body:e,t:0,roll:0,pitch:0,yaw:0},n=new je({color:6962204,roughness:.65,emissive:1705984,emissiveIntensity:.6}),s=xn(64,256,ae=>{ae.fillStyle="#c98a2c",ae.fillRect(0,0,64,256);for(let de=0;de<90;de++){ae.strokeStyle=["#f0c060","#a8661c","#e0a848","#80501a"][de%4],ae.lineWidth=Math.random()*2+.5;let Le=Math.random()*64;ae.beginPath(),ae.moveTo(Le,0),ae.lineTo(Le+(Math.random()-.5)*6,256),ae.stroke()}}),r=new je({map:s,roughness:.8,emissive:6959112,emissiveIntensity:.55,side:Qt}),a=new je({color:5909146,roughness:.6,emissive:1968184,emissiveIntensity:.9}),o=new je({color:3807336,roughness:.7,emissive:1311784,emissiveIntensity:.8}),l=new je({color:16175024,roughness:.55,emissive:3807760,emissiveIntensity:.5}),c=new je({color:2758208,roughness:.55,emissive:1180704,emissiveIntensity:1,metalness:.1}),h=new je({color:16747034,roughness:.4,emissive:12601856,emissiveIntensity:.9}),u=new je({color:16765024,roughness:.25,metalness:.7,emissive:10510336,emissiveIntensity:.8}),d=xn(32,64,ae=>{for(let de=0;de<8;de++)ae.fillStyle=de%2?"#1a0c1e":"#ff7a1a",ae.fillRect(0,de*8,32,8)});d.wrapS=d.wrapT=Ji,d.repeat.set(1,1.5);let f=new je({map:d,roughness:.7,emissive:4198400,emissiveIntensity:.5}),g=new je({color:1378834,roughness:.35,metalness:.2}),v=new je({color:14176282,roughness:.6,emissive:6953476,emissiveIntensity:.8}),m=new j(new Bt(.042,.055,2.5,8),n);m.rotation.x=Math.PI/2,m.position.set(0,0,-.35),e.add(m);let p=new j(new Et(.07,10,8),n);p.position.set(0,.02,-1.6),e.add(p);let M=[];for(let ae=0;ae<=12;ae++){let de=ae/12;M.push(new re(.06+Math.pow(de,.8)*.19+Math.sin(de*40)*.006,de*.8))}let b=new j(new As(M,20),r);b.rotation.x=Math.PI/2,b.position.set(0,0,.78),e.add(b);let _=new j(new va(.25,20),r);_.position.set(0,0,1.58),e.add(_);for(let ae of[.84,.97]){let de=new j(new ti(.085+(ae-.84)*.5,.022,6,16),h);de.position.z=ae,e.add(de)}t.bristle=new Jt,t.bristle.position.set(0,0,1.6),e.add(t.bristle);let T=new Pt(new Vt({map:Un("rgba(255,220,140,1)","rgba(255,120,40,0.4)"),blending:gt,depthWrite:!1,transparent:!0,opacity:.85}));T.scale.set(1.3,1.3,1),T.position.set(0,0,1.65),e.add(T),t.glow=T;let w=new j(new Bt(.15,.25,.62,14),a);w.position.set(0,.45,.12),w.rotation.x=-.5,e.add(w);let P=new j(new Wt(.46,.62,16,1,!0),o);P.position.set(0,.2,.2),P.scale.set(1.05,1,1.35),P.rotation.x=-.25,e.add(P);let y=new j(new ti(.15,.04,6,16),h);y.position.set(0,.72,-.02),y.rotation.x=Math.PI/2-.5,e.add(y);for(let ae of[-1,1]){let de=new C(ae*.13,.12,.08),Le=new C(ae*.2,-.05,-.32),Ye=new C(ae*.16,-.38,-.4);e.add(kc(de,Le,.075,.06,f)),e.add(kc(Le,Ye,.06,.05,f));let L=new j(new Wt(.07,.32,8),g);L.rotation.x=-Math.PI/2-.2,L.position.set(ae*.16,-.42,-.5),e.add(L);let _t=new C(ae*.17,.66,-.06),rt=new C(ae*.24,.42,-.42),R=new C(ae*.06,.08,-.82);e.add(kc(_t,rt,.065,.06,a)),e.add(kc(rt,R,.06,.09,a));let x=new j(new Et(.055,10,8),l);x.position.copy(R),e.add(x)}let A=new j(new Et(.19,20,16),l);A.position.set(0,.93,-.16),e.add(A);let I=new j(new Wt(.035,.12,8),l);I.rotation.x=-Math.PI/2,I.position.set(0,.92,-.38),e.add(I);let D=new j(new Et(.205,18,12,0,Math.PI*2,0,Math.PI*.62),v);D.position.set(0,.95,-.12),D.rotation.x=.5,e.add(D),t.hair=[];for(let ae=0;ae<9;ae++){let de=(ae/8-.5)*2.2,Le=new Wt(.06,.62,6);Le.translate(0,.31,0),Le.rotateX(Math.PI/2+.45);let Ye=new Ke;Ye.position.set(Math.sin(de)*.17,.86+Math.cos(de)*.05,-.02);let L=new j(Le,v);L.scale.set(1,1,1-Math.abs(de)*.12),Ye.add(L),e.add(Ye),Ye.userData={a:de,ph:ae*.8},t.hair.push(Ye)}let O=new Ke;O.position.set(0,1.06,-.12),O.rotation.x=.28,e.add(O),t.hat=O;let G=new j(new Bt(.56,.6,.025,36),c);O.add(G);let N=[];for(let ae=0;ae<=16;ae++){let de=ae/16;N.push(new re(Math.max(.002,.25*Math.pow(1-de,1.15)),de*.95))}let z=new As(N,22),q=z.attributes.position;for(let ae=0;ae<q.count;ae++){let de=q.getY(ae),Le=de/.95;q.setZ(ae,q.getZ(ae)+.42*Le*Le*Le),q.setY(ae,de-.18*Le*Le*Le),q.setX(ae,q.getX(ae)+.05*Le*Le)}z.computeVertexNormals();let Y=new j(z,c);O.add(Y);let oe=new j(new Bt(.245,.255,.08,24,1,!0),h);oe.position.y=.06,O.add(oe);let Z=new j(new Yt(.1,.08,.02),u);Z.position.set(0,.06,.255),O.add(Z);let ee=new j(new Rs(.05),u);ee.position.set(.12,.3,.17),ee.scale.set(1,1,.4),O.add(ee);let se=.78,He=1.35,Ie=7,ft=16,it=new bn(se,He,Ie,ft),dt=new je({color:6954928,roughness:.55,emissive:2754640,emissiveIntensity:1,side:vi}),J=new je({color:14172186,roughness:.5,emissive:5246976,emissiveIntensity:.6,side:tn}),te=new j(it,dt),xe=new j(it,J);te.frustumCulled=xe.frustumCulled=!1,e.add(te,xe),t.cape={geo:it,sx:Ie,sy:ft,CW:se,CL:He,uv:it.attributes.uv.array.slice()};let Xe=new je({color:920084,roughness:.45,emissive:1707048,emissiveIntensity:.8}),Se=new Ke;Se.position.set(0,.06,.62),e.add(Se),t.cat=Se;let qe=new j(new Et(.13,14,10),Xe);qe.scale.set(.9,1,1.25),qe.position.y=.12,Se.add(qe);let xt=new j(new Et(.1,14,10),Xe);xt.position.set(0,.3,-.06),Se.add(xt);for(let ae of[-1,1]){let de=new j(new Wt(.04,.09,6),Xe);de.position.set(ae*.055,.39,-.05),de.rotation.z=-ae*.25,Se.add(de)}let ne=new kn([new C(0,.08,.14),new C(0,.1,.32),new C(0,.28,.42),new C(.03,.42,.38)]),he=new j(new Tn(ne,12,.025,6),Xe);Se.add(he),t.tail=he;let ue=new j(new Et(1.35,32,20),new At({transparent:!0,depthWrite:!1,blending:gt,uniforms:{time:{value:0},a:{value:1}},vertexShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vP = position; gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; varying vec3 vP; uniform float time; uniform float a; void main(){ float f = pow(1.0 - abs(dot(vN, vV)), 2.5); float hex = 0.5 + 0.5 * sin(vP.y * 18.0 + time * 3.0) * sin(vP.x * 18.0) ; vec3 c = mix(vec3(0.3,0.8,1.0), vec3(0.8,0.5,1.0), 0.5 + 0.5 * sin(time + vP.y * 2.0)); gl_FragColor = vec4(c * (f * 1.4 + hex * 0.06) * a, 1.0); }"}));ue.position.set(0,.4,0),ue.visible=!1,i.add(ue),t.shield=ue;let fe=xn(256,256,ae=>{ae.strokeStyle="rgba(255,120,255,0.9)",ae.lineWidth=6,ae.shadowColor="#f0f",ae.shadowBlur=16;for(let de=0;de<3;de++)ae.beginPath(),ae.arc(128,128,70+de*18,de,de+3.6),ae.stroke()}),me=new Pt(new Vt({map:fe,blending:gt,depthWrite:!1,transparent:!0,opacity:0}));return me.scale.set(3.4,3.4,1),me.position.set(0,.4,0),i.add(me),t.mag=me,t.warm=new _i(16752720,6,7,1.6),t.warm.position.set(0,.6,2.2),i.add(t.warm),t.key=new _i(12626175,5,8,1.4),t.key.position.set(.6,2.4,2.6),i.add(t.key),t}function um(i,e,t){i.t+=e;let n=i.t,s=Qe(-t.vx*.06,-.75,.75),r=Qe(t.vy*.05,-.35,.35);i.roll+=(s-i.roll)*(1-Math.exp(-e*6)),i.pitch+=(r-i.pitch)*(1-Math.exp(-e*6)),i.yaw+=(Qe(-t.vx*.02,-.25,.25)-i.yaw)*(1-Math.exp(-e*5));let a=Math.sin(n*2.2)*.06;i.body.position.y=a,i.body.rotation.set(i.pitch+Math.sin(n*1.7)*.03,i.yaw,i.roll+Math.sin(n*1.3)*.03),t.crash&&(i.body.rotation.z+=t.crash*9,i.body.rotation.x+=t.crash*2);let o=i.cape,l=o.geo.attributes.position,c=o.uv,h=Qe(t.speedK,0,1.6),u=1.05-h*.42-t.boost*.25;for(let f=0;f<l.count;f++){let g=c[f*2],v=1-c[f*2+1],m=v*o.CL,p=(.58+.5*v)*o.CW,M=Math.sin(n*(9+h*5)-v*6+g*2.4)*.16*v*(.6+h*.5),b=Math.sin(n*5.3-v*3.2+g*5)*.06*v,_=u+M*.5,T=(g-.5)*p+Math.sin(n*6-v*4)*.06*v-i.roll*.35*v,w=.74-Math.sin(_)*m*.85+M+b-v*.05,P=.02+Math.cos(_)*m+v*.12-Math.abs(g-.5)*.1*v;l.setXYZ(f,T,w,P)}l.needsUpdate=!0,o.geo.computeVertexNormals();for(let f of i.hair)f.rotation.set(-.1+Math.sin(n*8+f.userData.ph)*.12-h*.15,f.userData.a*.25,Math.sin(n*6+f.userData.ph)*.15);i.hat.rotation.z=Math.sin(n*3.1)*.05-i.roll*.1,i.tail.rotation.z=Math.sin(n*2.5)*.3,i.glow.material.opacity=.7+.25*Math.sin(n*20)+t.boost*.4;let d=1.2+t.boost*1.2+Math.sin(n*13)*.1;i.glow.scale.set(d,d,1),i.glow.material.color.setRGB(1,t.x2?.9:.75,t.x2?.4:.55),i.warm.intensity=5+t.boost*6+Math.sin(n*17)*.8,i.shield.visible=!!t.shield,i.shield.material.uniforms.time.value=n,i.shield.material.uniforms.a.value=t.shield?.9+Math.sin(n*6)*.1:0,i.mag.material.opacity=t.magnet?.55+.2*Math.sin(n*5):0,i.mag.material.rotation=n*2.5,i.root.visible=!(t.invuln>0&&Math.floor(t.invuln*14)%2===1)}function dm(i,e,t,n,s){let r=new Ke;for(let a=0;a<n;a++){let o=a/(n-1),l=e*(.55+.45*Math.sin(o*Math.PI*.9+.2)),c=new Ln;c.moveTo(0,0),c.quadraticCurveTo(l*.5,t*.6,l,.05),c.quadraticCurveTo(l*.5,-t*.3,0,-t*.2);let h=new es(c,6),u=new j(h,i);u.rotation.x=-Math.PI/2,u.rotation.z=0;let d=new Ke;d.add(u),d.position.x=s*(a*e*.11);let f=1.25-o*1.1;d.rotation.y=s>0?f:Math.PI-f,r.add(d)}return r}function fm(i){let e={root:new Ke,kids:i,t:0,phase:"off",pt:0},t=new Ke;e.root.add(t),e.body=t;let n=new je({color:i?2760784:1380894,roughness:.35,metalness:.35,emissive:i?2101328:1706032,emissiveIntensity:1,fog:!1}),s=new je({color:i?3811952:1183260,roughness:.4,metalness:.3,emissive:i?2758768:2886736,emissiveIntensity:1,side:Qt,fog:!1}),r=new je({color:i?16756784:3814464,roughness:.3,metalness:.5,emissive:i?6959104:657424}),a=new j(new Et(1,24,16),n);a.scale.set(1.25,1.1,2.2),t.add(a);let o=new j(new Et(.95,20,14),n);o.position.set(0,.9,2.1),t.add(o),e.head=o;let l=new j(new Wt(.38,1.5,10),r);l.rotation.x=Math.PI/2,l.position.set(0,.7,3.4),l.scale.set(1,1,.7),o.parent.add(l),e.beak=l;let c=new Vt({map:Un(i?"rgba(255,255,255,1)":"rgba(255,120,200,1)",i?"rgba(160,200,255,0.4)":"rgba(200,40,255,0.45)"),blending:gt,depthWrite:!1,transparent:!0});e.eyes=[];for(let u of[-1,1]){let d=new j(new Et(i?.34:.2,14,10),new Gt({color:i?16777215:new Ue(4,1.2,3.2)}));if(d.position.set(u*.5,1.15,2.75),t.add(d),i){let g=new j(new Et(.17,10,8),new Gt({color:1181720}));g.position.set(u*.5,1.13,3.04),t.add(g);let v=new j(new Et(.06,8,6),new Gt({color:16777215}));v.position.set(u*.45,1.22,3.18),t.add(v)}let f=new Pt(c);f.scale.set(2.2,2.2,1),f.position.copy(d.position),t.add(f),e.eyes.push(f)}for(let u=0;u<4;u++){let d=new j(new Wt(.16,1.1,5),n);d.position.set((u-1.5)*.18,1.7,1.8-u*.12),d.rotation.x=-.9,t.add(d)}e.wings=[];for(let u of[-1,1]){let d=new Ke;d.position.set(u*1,.45,.4),t.add(d);let f=new Ke;d.add(f);let g=dm(s,3.8,1.8,8,u);f.add(g);let v=new j(new Bt(.28,.2,3.8,8),n);v.rotation.z=Math.PI/2,v.position.x=u*1.9,f.add(v);let m=new Ke;m.position.x=u*3.7,f.add(m);let p=dm(s,5.6,1.5,9,u);m.add(p);let M=new j(new Bt(.2,.08,3.2,8),n);M.rotation.z=Math.PI/2,M.position.x=u*1.6,m.add(M);let b=new Gt({color:i?new Ue(1.2,1.6,3):new Ue(2.2,1,3.2),transparent:!0,opacity:.85,blending:gt,depthWrite:!1}),_=new j(new Bt(.06,.06,3.8,6),b);_.rotation.z=Math.PI/2,_.position.set(u*1.9,.05,.35),f.add(_);let T=new j(new Bt(.06,.02,5.2,6),b);T.rotation.z=Math.PI/2,T.position.set(u*2.6,.05,.25),m.add(T),e.wings.push({sh:d,arm:f,hand:m,s:u})}let h=new Ke;h.position.set(0,.1,-2),t.add(h);for(let u=0;u<7;u++){let d=new Ln;d.moveTo(-.25,0),d.lineTo(-.35,-3.2),d.lineTo(0,-3.6),d.lineTo(.35,-3.2),d.lineTo(.25,0);let f=new j(new es(d),s);f.rotation.x=Math.PI/2+.15,f.rotation.y=0;let g=new Ke;g.rotation.y=(u-3)*.16,g.add(f),h.add(g)}return e.tail=h,e.aura=new Pt(new Vt({map:Un("rgba(200,150,255,0.9)","rgba(120,60,255,0.25)"),blending:gt,depthWrite:!1,transparent:!0,opacity:.6,fog:!1})),e.aura.scale.set(26,16,1),e.aura.position.z=-1,t.add(e.aura),e.light=new _i(i?9478399:11559167,0,40,1.2),e.light.position.set(0,2,3),t.add(e.light),e.arcs=new Es(new Mt,new Ki({color:new Ue(2.5,2.2,4),transparent:!0,opacity:.9,blending:gt,fog:!1})),e.arcs.geometry.setAttribute("position",new wt(new Float32Array(180),3)),t.add(e.arcs),e.root.scale.setScalar(1.55),e.root.visible=!1,e}function pm(i,e,t={}){i.t+=e,i.pt+=e;let n=i.t,s=t.flap??3.2,r=t.amp??.55;for(let u of i.wings){let d=Math.sin(n*s);u.sh.rotation.z=u.s*(.32+d*r+(t.raise||0)*.6),u.sh.rotation.x=.25,u.hand.rotation.z=u.s*(-.15+Math.sin(n*s-.9)*r*.9),u.sh.rotation.y=u.s*-.1}i.body.position.y=-Math.sin(n*s)*.5,i.body.rotation.x=-.95+Math.sin(n*.8)*.06,i.tail.rotation.x=Math.sin(n*1.7)*.1,i.head.rotation.y=Math.sin(n*.9)*.2;let a=t.call||0;for(let u of i.eyes){let d=2.2+a*3+Math.sin(n*9)*.2;u.scale.set(d,d,1)}i.aura.material.opacity=.35+a*.5+Math.sin(n*7)*.08,i.light.intensity=30+a*220,i.beak.rotation.x=Math.PI/2-a*0;let o=i.arcs.geometry.attributes.position,l=o.array,c=a>.2||Math.random()<.3,h=0;for(let u=0;u<5;u++){let f=(u%2?1:-1)*F(1,8),g=F(-.5,1.5),v=F(-1,1.5);for(let m=0;m<4;m++)l[h++]=f,l[h++]=g,l[h++]=v,f+=F(-1.1,1.1),g+=F(-1,1),v+=F(-.6,.6),l[h++]=f,l[h++]=g,l[h++]=v}o.needsUpdate=!0,i.arcs.visible=c,i.arcs.geometry.setDrawRange(0,40)}var qu=class{constructor(e,t){this.n=t,this.i=0;let n=new Mt;this.pos=new Float32Array(t*3),this.col=new Float32Array(t*3),this.size=new Float32Array(t),this.alpha=new Float32Array(t),this.v=new Float32Array(t*3),this.life=new Float32Array(t),this.max=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),n.setAttribute("position",new wt(this.pos,3).setUsage(Ui)),n.setAttribute("color",new wt(this.col,3).setUsage(Ui)),n.setAttribute("size",new wt(this.size,1).setUsage(Ui)),n.setAttribute("alpha",new wt(this.alpha,1).setUsage(Ui)),this.mat=new At({transparent:!0,depthWrite:!1,blending:gt,uniforms:{scale:{value:500}},vertexShader:`attribute float size; attribute float alpha; attribute vec3 color; varying vec3 vC; varying float vA; uniform float scale;
        void main(){ vC = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vA = alpha * smoothstep(1.5, 5.0, -mv.z); gl_PointSize = min(size * scale / max(0.5, -mv.z), 90.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:"varying vec3 vC; varying float vA; void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d); a = a * a; gl_FragColor = vec4(vC * a * vA, a * vA); }"}),this.points=new ji(n,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,e.add(this.points)}spawn(e,t,n,s,r,a,o,l,c,h,u,d=6,f=.98){let g=this.i;this.i=(this.i+1)%this.n;let v=g*3;this.pos[v]=e,this.pos[v+1]=t,this.pos[v+2]=n,this.v[v]=s,this.v[v+1]=r,this.v[v+2]=a,this.col[v]=c,this.col[v+1]=h,this.col[v+2]=u,this.size[g]=o,this.life[g]=l,this.max[g]=l,this.grav[g]=d,this.drag[g]=f,this.alpha[g]=1}update(e){for(let n=0;n<this.n;n++){if(this.life[n]<=0){this.alpha[n]=0;continue}this.life[n]-=e;let s=n*3,r=Math.pow(this.drag[n],e*60);this.v[s]*=r,this.v[s+1]=this.v[s+1]*r-this.grav[n]*e,this.v[s+2]*=r,this.pos[s]+=this.v[s]*e,this.pos[s+1]+=this.v[s+1]*e,this.pos[s+2]+=this.v[s+2]*e;let a=Math.max(0,this.life[n]/this.max[n]);this.alpha[n]=Math.min(1,a*2.2)}let t=this.points.geometry.attributes;t.position.needsUpdate=!0,t.alpha.needsUpdate=!0,t.color.needsUpdate=!0,t.size.needsUpdate=!0}clear(){this.life.fill(0),this.alpha.fill(0)}};function mm(i){let e={scene:i,scale:1,shakeAmp:0};e.points=new qu(i,3e3),e.lights=[0,1,2].map(()=>{let n=new _i(16760928,0,14,1.6);return i.add(n),n}),e.li=0;let t=(()=>{let n=document.createElement("canvas");n.width=n.height=256;let s=n.getContext("2d"),r=s.createRadialGradient(128,128,70,128,128,126);r.addColorStop(0,"rgba(255,200,120,0)"),r.addColorStop(.8,"rgba(255,170,80,0.0)"),r.addColorStop(.9,"rgba(255,240,210,0.9)"),r.addColorStop(1,"rgba(255,120,30,0)"),s.fillStyle=r,s.fillRect(0,0,256,256);let a=new Di(n);return a.colorSpace=$t,a})();e.rings=[];for(let n=0;n<8;n++){let s=new Pt(new Vt({map:t,blending:gt,depthWrite:!1,transparent:!0,opacity:0,fog:!1}));s.visible=!1,i.add(s),e.rings.push({s,t:1,dur:.5,size:3})}return e}function Oi(i,e,t,n=40,s=4,r=.25,a=1,o=1.5){for(let l=0;l<n*i.scale;l++){let c=new C(F(-1,1),F(-1,1),F(-1,1)).normalize().multiplyScalar(F(.5,s));i.points.spawn(e.x,e.y,e.z,c.x,c.y,c.z,F(r*.4,r*1.1),F(a*.5,a*1.2),t[0],t[1],t[2],o,.95)}}function Yu(i,e,t=16760928,n=30){let s=i.lights[i.li=(i.li+1)%i.lights.length];s.position.copy(e),s.intensity=n,s.color.set(t)}function Br(i,e,t=3,n=.5,s){let r=i.rings.find(a=>a.t>=1)||i.rings[0];r.s.position.copy(e),r.t=0,r.dur=n,r.size=t,r.s.visible=!0,r.s.material.color.set(s||16777215)}function Hi(i,e){i.shakeAmp=Math.max(i.shakeAmp,e)}function gm(i,e){i.points.update(e);for(let t of i.lights)t.intensity*=Math.pow(.002,e);for(let t of i.rings){if(t.t>=1)continue;t.t=Math.min(1,t.t+e/t.dur);let n=1-Math.pow(1-t.t,3);t.s.scale.setScalar(t.size*(.25+n)),t.s.material.opacity=Math.pow(1-t.t,1.5)*.5,t.t>=1&&(t.s.visible=!1)}i.shakeAmp*=Math.pow(.003,e)}function xm(i){i.points.clear()}function _m(i){return{canvas:i,g:i.getContext("2d"),pops:[],lines:[],dpr:1,w:1,h:1}}function vm(i,e,t,n){i.dpr=n,i.canvas.width=Math.round(e*n),i.canvas.height=Math.round(t*n),i.w=e,i.h=t}function Zu(i,e,t,n,s="#ffd36a",r=30,a=.9){i.pops.length>14&&i.pops.shift(),i.pops.push({x:e,y:t,text:n,color:s,size:r,t:0,life:a})}function Vc(i,e,t,n,s){let r=i.g;r.setTransform(i.dpr,0,0,i.dpr,0,0),r.clearRect(0,0,i.w,i.h);let a=Math.round(t*46);for(;i.lines.length<a;)i.lines.push({a:F(0,Math.PI*2),r:F(.25,.6),v:F(1.6,3.2),l:F(.05,.14),w:F(1,2.6)});i.lines.length>a&&(i.lines.length=a);let o=Math.hypot(i.w,i.h)*.6;for(let l of i.lines){l.r+=l.v*e,l.r>1.1&&(l.r=F(.25,.45),l.a=F(0,Math.PI*2));let c=l.r*o,h=(l.r+l.l*(.5+t))*o,u=Math.cos(l.a),d=Math.sin(l.a),f=Math.min(1,(l.r-.25)*3)*.55*Math.min(1,t);r.strokeStyle=`rgba(235,220,255,${f})`,r.lineWidth=l.w,r.beginPath(),r.moveTo(n+u*c,s+d*c),r.lineTo(n+u*h,s+d*h),r.stroke()}for(let l of i.pops)l.t+=e;i.pops=i.pops.filter(l=>l.t<l.life);for(let l of i.pops){let c=l.t/l.life,h=c<.15?.6+c/.15*.6:1.2-Math.min(.2,(c-.15)*.6);r.save(),r.translate(l.x,l.y-c*50),r.scale(h,h),r.globalAlpha=Math.min(1,(1-c)*2.5),r.font=`900 ${l.size}px "Arial Black", "Arial Rounded MT Bold", Impact, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.lineWidth=l.size*.22,r.strokeStyle="rgba(30,6,40,0.85)",r.strokeText(l.text,0,0),r.shadowColor=l.color,r.shadowBlur=16,r.fillStyle=l.color,r.fillText(l.text,0,0),r.restore()}}var ad={};r0(ad,{duck:()=>id,getAnalyser:()=>WM,isMuted:()=>nd,setKids:()=>Yc,setMood:()=>ro,setMusicOn:()=>VM,setMusicVolume:()=>qc,setMuted:()=>td,setSfxOn:()=>GM,setSfxVolume:()=>Xc,setWind:()=>ed,sfx:()=>pt,soundNames:()=>rd,soundsReady:()=>sd,suspendAudio:()=>Cm,unlockAudio:()=>Zc});var dn=null,Em=null,Or=null,ms=null,Bs=null,Xn=null,Fs=null,ju=!0,Wc=!0,Os=!1,Ju=.9,Qu=.6,en=!1,Tm=!1,wm=.55,Hs={},Gc=null;function vn(){return dn?dn.currentTime:0}function zs(){if(!dn&&!Tm)return null;if(!dn){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;try{dn=new i({latencyHint:"interactive"})}catch{dn=new i}FM(dn)}return dn.state==="suspended"&&dn.resume().catch(()=>{}),dn}function FM(i){let e=i.createDynamicsCompressor();e.threshold.value=-3,e.knee.value=0,e.ratio.value=20,e.attack.value=.002,e.release.value=.12,e.connect(i.destination),Em=e,Or=i.createGain(),Or.gain.value=Os?0:.85,Or.connect(e),ms=i.createDynamicsCompressor(),ms.threshold.value=-18,ms.ratio.value=3,ms.attack.value=.005,ms.release.value=.25,ms.connect(Or),Bs=i.createGain(),Bs.gain.value=Ju,Bs.connect(ms),Fs=i.createBiquadFilter(),Fs.type="lowpass",Fs.frequency.value=9e3,Fs.Q.value=.5,Xn=i.createGain(),Xn.gain.value=0,Fs.connect(Xn),Xn.connect(ms),Am(i)}function BM(i){let e=atob(i),t=e.length,n=new Uint8Array(t);for(let s=0;s<t;s++)n[s]=e.charCodeAt(s);return n.buffer}function OM(i,e,t){return new Promise(n=>{let s=!1,r=o=>{s||(s=!0,Hs[e]=o,n(!0),e.startsWith("music_")&&zr())},a=()=>{s||(s=!0,n(!1))};try{let o=i.decodeAudioData(BM(t),r,a);o&&o.then&&o.then(r,a)}catch{a()}})}function Am(i){if(Gc)return Gc;let e=window.WBR_SOUNDS||{};return Gc=Object.keys(e).sort((n,s)=>(n.startsWith("music_")?1:0)-(s.startsWith("music_")?1:0)).reduce((n,s)=>n.then(()=>OM(i,s,e[s])),Promise.resolve()).then(()=>Object.keys(Hs).length),Gc}var ym=i=>1+(Math.random()*2-1)*i;function Re(i,{vol:e=1,rate:t=1,delay:n=0,pan:s=0,vary:r=1}={}){if(!ju)return null;let a=zs();if(!a)return null;let o=Hs[i];if(!o)return null;let l=a.createBufferSource();l.buffer=o,l.playbackRate.value=t*ym(.035*r);let c=a.createGain();c.gain.value=Math.max(0,e*ym(.1*r));let h=l.connect(c);if(s&&a.createStereoPanner){let u=a.createStereoPanner();u.pan.value=Math.max(-1,Math.min(1,s)),h=h.connect(u)}return h.connect(Bs),l.start(vn()+n),l}var HM=(...i)=>i[Math.random()*i.length|0],Mm=-1,Sm=-1,bm=-1,zM=0,Hr=null,$u={start:.5,end:8.5};function kM(){let i=zs();if(!i||Hr||!Hs.wind)return;let e=i.createBufferSource();e.buffer=Hs.wind,e.loop=!0,e.loopStart=$u.start,e.loopEnd=$u.end;let t=i.createBiquadFilter();t.type="lowpass",t.frequency.value=900,t.Q.value=.4;let n=i.createGain();n.gain.value=0,e.connect(t).connect(n).connect(Bs),e.start(vn(),$u.start),Hr={src:e,lp:t,g:n}}function ed(i,e=!0){if(!dn||(kM(),!Hr))return;let t=vn(),n=Math.max(0,Math.min(1.6,i));Hr.g.gain.setTargetAtTime(e&&ju?(.1+.32*n)*(en?.8:1):0,t,.25),Hr.src.playbackRate.setTargetAtTime(.85+.3*n,t,.3),Hr.lp.frequency.setTargetAtTime(700+1700*n,t,.3)}var pt={star(i=1,e=0){if(!zs())return;let n=vn()-Mm<.07;Mm=vn();let s=[0,2,4,7,9,12,14,16][Math.min(7,Math.max(0,i-1))],r=Math.pow(2,s/12)*.92;Re(["chime_a","chime_b","chime_c"][zM++%3],{vol:n?.3:.48,rate:r,pan:e,vary:.25}),i>=5&&!n&&Re("harp",{vol:.16+.02*Math.min(i,10),rate:.9+.02*Math.min(i,10),vary:.2})},combo(i){i>=10&&(Re("choir",{vol:.35,rate:1.05}),Re("magic",{vol:.3}))},ring(){Re("ring",{vol:.65}),Re("magic",{vol:.35,rate:1.05,delay:.04}),Re("harp",{vol:.25,rate:1,delay:.08})},gate(){Re("bell",{vol:.35,rate:.9}),Re("swish_a",{vol:.3})},boost(){Re("boost",{vol:.7}),Re("fwoosh",{vol:.35,rate:1.1}),Re("sub",{vol:.25,vary:.3})},nearMiss(i=0){vn()-Sm<.25||(Sm=vn(),Re(HM("swish_a","swish_b"),{vol:.55,rate:.85,pan:i}))},bats(i=0){vn()-bm<.8||(bm=vn(),Re("bats",{vol:en?.22:.4,pan:i}),en?Re("squeak_kids",{vol:.22,pan:i,delay:.15,rate:1.05}):Math.random()<.6&&Re("screech",{vol:.28,pan:i,delay:.2,rate:1.1}))},telegraph(){Re("riser",{vol:en?.12:.18,rate:1.6,vary:.2})},thunder(i=!1,e=0){if(en){Re("thunder_soft",{vol:i?.45:.3,pan:e}),i&&Re("sub",{vol:.2});return}Re(i?"thunder_a":"thunder_soft",{vol:i?.6:.35,pan:e,vary:.5}),i&&(Re("boom",{vol:.35,rate:1.1}),Re("impact",{vol:.25,rate:.7}))},hit(){let i=en?.6:1;Re("impact",{vol:.8*i,rate:.85}),Re("hit",{vol:.6*i}),Re("sub",{vol:.5*i}),Re("boom",{vol:.25*i,rate:1.2}),en&&Re("laugh_kids",{vol:.35,delay:.35,rate:1.1})},shieldBreak(){Re("explode",{vol:.35,rate:1.4}),Re("magic",{vol:.4,rate:.85})},pickup(i){Re("magic",{vol:.5}),Re("harp",{vol:.42,rate:i==="x2"?1.12:i==="magnet"?1:.9,delay:.05}),Math.random()<.5&&pt.laugh(.45)},laugh(i=.6){Re(en?"laugh_kids":"laugh",{vol:en?i*.8:i,vary:.4})},start(){Re("fwoosh",{vol:.7}),Re("stinger",{vol:en?.3:.45}),Re("sub",{vol:.35}),pt.laugh(.6)},biome(){Re("fwoosh",{vol:.4,rate:.8}),Re("soft",{vol:.3,rate:.8})},bossIntro(){if(Re("riser",{vol:en?.4:.65,vary:.2}),en){Re("choir",{vol:.35,delay:1.2}),Re("laugh_kids",{vol:.35,delay:1.6}),Re("bats",{vol:.25,delay:1.4});return}Re("hit",{vol:.55,delay:1.45}),Re("roar",{vol:.85,delay:1.5,vary:.2}),Re("screech",{vol:.35,delay:1.6,rate:.7}),Re("thunder_a",{vol:.55,delay:1.5}),Re("roar_b",{vol:.3,delay:1.7,rate:.85,vary:.2})},bossCall(){if(en){Re("squeak_kids",{vol:.2,rate:.8});return}Re("screech",{vol:.3,rate:.62}),Re("roar_b",{vol:.25,rate:.9})},bossBye(){if(en){Re("harp",{vol:.5}),Re("choir",{vol:.5,delay:.2}),Re("laugh_kids",{vol:.4,delay:.5});return}Re("epic",{vol:.75}),Re("thunder_a",{vol:.5}),Re("roar",{vol:.55,rate:1.15,delay:.1}),Re("choir",{vol:.5,delay:.5}),pt.laugh(.6)},slowmo(){Re("sub",{vol:.35,rate:.7}),Re("swish_b",{vol:.4,rate:.6})},lifeLost(){Re("soft",{vol:.4,rate:.7})},crash(){Re("boom",{vol:en?.3:.6}),Re("impact",{vol:.5,rate:.7}),Re("choir",{vol:.35,delay:.4,rate:.8})},finish(){Re("epic",{vol:en?.4:.6}),Re("bell",{vol:.5}),Re("choir",{vol:.45,delay:.3}),Re("harp",{vol:.45,delay:.5}),pt.laugh(.6)},ui(){Re("soft",{vol:.35,rate:1.2,vary:.2})},newBest(){Re("choir",{vol:.5}),Re("harp",{vol:.5,delay:.2}),Re("magic",{vol:.35,delay:.1})}},io={start:.5,end:32.5},bi=null,Ku="main";function zr(){if(!dn)return;let i=Wc&&!Os;Xn.gain.cancelScheduledValues(vn()),Xn.gain.setTargetAtTime(i?Qu*wm*(en?.7:1):0,vn(),.3),Fs.frequency.setTargetAtTime(en?3500:9e3,vn(),.3),i&&Rm(Ku)}function Rm(i){let e=zs();if(!e)return;let t=Hs["music_"+i];if(!t||bi&&bi.mood===i)return;let n=vn(),s=e.createBufferSource();s.buffer=t,s.loop=!0,s.loopStart=io.start,s.loopEnd=Math.min(io.end,t.duration);let r=e.createGain();r.gain.setValueAtTime(1e-4,n),r.gain.linearRampToValueAtTime(1,n+(bi?1.2:.4)),s.connect(r).connect(Fs);let a=bi?(n-bi.t0)%(io.end-io.start):0;if(s.start(n,io.start+a),bi){let o=bi;o.gain.gain.cancelScheduledValues(n),o.gain.gain.setValueAtTime(o.gain.gain.value,n),o.gain.gain.linearRampToValueAtTime(1e-4,n+1.2);try{o.src.stop(n+1.3)}catch{}}bi={src:s,gain:r,mood:i,t0:bi?bi.t0:n}}function ro(i){Ku=i==="boss"?"boss":"main",dn&&Wc&&!Os&&Rm(Ku)}function VM(i){Wc=!!i,zr()}function GM(i){ju=!!i}function td(i){Os=!!i,Or&&Or.gain.setTargetAtTime(Os?0:.85,vn(),.05),zr()}function nd(){return Os}function Xc(i){Ju=Math.max(0,Math.min(1,i)),Bs&&Bs.gain.setTargetAtTime(Ju,vn(),.05)}function qc(i){Qu=Math.max(0,Math.min(1,i)),zr()}function Yc(i){en=!!i,zr()}function id(i=.35,e=1.5){if(!dn||!Wc||Os)return;let t=vn(),n=Qu*wm*(en?.7:1);Xn.gain.cancelScheduledValues(t),Xn.gain.setValueAtTime(Xn.gain.value,t),Xn.gain.linearRampToValueAtTime(n*i,t+.08),Xn.gain.setValueAtTime(n*i,t+e),Xn.gain.linearRampToValueAtTime(n,t+e+1.2)}function Zc(){Tm=!0,zs()&&zr()}function sd(){let i=zs();return i?Am(i):Promise.resolve(0)}function rd(){return Object.keys(Hs)}function Cm(i){dn&&(i?dn.suspend().catch(()=>{}):dn.resume().catch(()=>{}))}var so=null;function WM(){let i=zs();return i?(so||(so=i.createAnalyser(),so.fftSize=2048,Em.connect(so)),so):null}if(typeof window<"u"){let i=()=>{Zc(),window.removeEventListener("pointerdown",i,!0),window.removeEventListener("keydown",i,!0),window.removeEventListener("touchend",i,!0)};window.addEventListener("pointerdown",i,!0),window.addEventListener("keydown",i,!0),window.addEventListener("touchend",i,!0),document.addEventListener("visibilitychange",()=>Cm(document.hidden))}var od={en:{kicker:"A 90-second Halloween night flight",tag:"Race your broom through haunted graveyards, glowing pumpkin forests and a lightning storm.",play:"FLY!",how:"\u{1F5B1}\uFE0F Mouse / trackpad, arrows / WASD or drag to steer &nbsp;\xB7&nbsp; \u26A1 Space / tap = boost &nbsp;\xB7&nbsp; \u2B50 Stars & rings, dodge bats and lightning",howKids:"\u{1F5B1}\uFE0F Steer with mouse, arrows or your finger &nbsp;\xB7&nbsp; \u26A1 Tap = whoosh! &nbsp;\xB7&nbsp; \u2B50 Catch the stars, wave to the friendly bats",kids:"Kids mode",settings:"\u2699 Settings",best:"Best",settingsT:"Settings",quality:"Quality",q_low:"Low",q_mid:"Medium",q_high:"High",q_ultra:"Ultra",music:"Music",sfx:"Sound effects",mute:"Mute all",close:"Done",paused:"Paused",resume:"RESUME",quit:"End flight",score:"Score",dist:"Distance",stars:"Stars",rank:"Rank",boost:"BOOST",endFinish:"MIDNIGHT REACHED!",endCrash:"BROOM DOWN!",newBest:"NEW BEST!",name:"Name",stStars:"stars",stDist:"distance",stCombo:"best chain",stRaven:"storm raven",survived:"survived",escaped:"not reached",shareT:"Share text",share:"Copy share text",shot:"Download end card",replay:"FLY AGAIN",go:"FLY!",goSub:"Collect stars \xB7 dodge everything",b_grave:"THE MOONLIT GRAVEYARD",b_forest:"THE PUMPKIN FOREST",b_village:"THE HAUNTED VILLAGE",b_canyon:"THE STORM CANYON",b_storm:"THE FINAL STORM",ch1:"CHAPTER I",ch2:"CHAPTER II",ch3:"CHAPTER III",ch4:"CHAPTER IV",ch5:"FINALE",boss:"THE STORM RAVEN",bossSub:"Dodge the lightning!",bossKids:"THE THUNDER BIRD",bossKidsSub:"Fly around the sparkly flashes!",bossWin:"STORM SURVIVED!",near:"CLOSE!",gate:"GATE!",ring:"BOOST RING!",chain:"CHAIN",shield:"SHIELD",magnet:"STAR MAGNET",x2:"DOUBLE POINTS",shieldPop:"SHIELD SAVED YOU!",ouch:"OUCH!",lastLife:"LAST BROOM!",copied:"Copied! Paste it on X \u{1F9F9}",copyFail:"Copy failed \u2013 select the text manually",saved:"End card saved \u{1F4F8}",suggested:"Suggested for this device",fpsLow:"Running slow \u2013 switched quality to",lang:"Language"},de:{kicker:"Ein 90-Sekunden-Halloween-Nachtflug",tag:"Flieg deinen Besen durch Spukfriedh\xF6fe, leuchtende K\xFCrbisw\xE4lder und ein Gewitter.",play:"LOSFLIEGEN!",how:"\u{1F5B1}\uFE0F Maus / Trackpad, Pfeile / WASD oder Ziehen zum Lenken &nbsp;\xB7&nbsp; \u26A1 Leertaste / Tippen = Boost &nbsp;\xB7&nbsp; \u2B50 Sterne & Ringe, Flederm\xE4usen und Blitzen ausweichen",howKids:"\u{1F5B1}\uFE0F Lenken mit Maus, Pfeilen oder Finger &nbsp;\xB7&nbsp; \u26A1 Tippen = Wusch! &nbsp;\xB7&nbsp; \u2B50 Sterne fangen, den lieben Flederm\xE4usen winken",kids:"Kinder-Modus",settings:"\u2699 Einstellungen",best:"Rekord",settingsT:"Einstellungen",quality:"Qualit\xE4t",q_low:"Niedrig",q_mid:"Mittel",q_high:"Hoch",q_ultra:"Ultra",music:"Musik",sfx:"Effekte",mute:"Alles stumm",close:"Fertig",paused:"Pause",resume:"WEITER",quit:"Flug beenden",score:"Punkte",dist:"Strecke",stars:"Sterne",rank:"Rang",boost:"BOOST",endFinish:"MITTERNACHT ERREICHT!",endCrash:"BESEN ABGEST\xDCRZT!",newBest:"NEUER REKORD!",name:"Name",stStars:"Sterne",stDist:"Strecke",stCombo:"beste Kette",stRaven:"Sturmrabe",survived:"\xFCberlebt",escaped:"nicht erreicht",shareT:"Text zum Teilen",share:"Text kopieren",shot:"Endkarte herunterladen",replay:"NOCHMAL FLIEGEN",go:"LOS!",goSub:"Sterne sammeln \xB7 allem ausweichen",b_grave:"DER MONDFRIEDHOF",b_forest:"DER K\xDCRBISWALD",b_village:"DAS SPUKDORF",b_canyon:"DIE STURMSCHLUCHT",b_storm:"DER LETZTE STURM",ch1:"KAPITEL I",ch2:"KAPITEL II",ch3:"KAPITEL III",ch4:"KAPITEL IV",ch5:"FINALE",boss:"DER STURMRABE",bossSub:"Weich den Blitzen aus!",bossKids:"DER DONNERVOGEL",bossKidsSub:"Flieg um die Glitzerblitze herum!",bossWin:"STURM \xDCBERLEBT!",near:"KNAPP!",gate:"TOR!",ring:"BOOST-RING!",chain:"KETTE",shield:"SCHILD",magnet:"STERNENMAGNET",x2:"DOPPELTE PUNKTE",shieldPop:"SCHILD HAT DICH GERETTET!",ouch:"AUTSCH!",lastLife:"LETZTER BESEN!",copied:"Kopiert! Ab damit auf X \u{1F9F9}",copyFail:"Kopieren fehlgeschlagen \u2013 Text bitte markieren",saved:"Endkarte gespeichert \u{1F4F8}",suggested:"Empfohlen f\xFCr dieses Ger\xE4t",fpsLow:"L\xE4uft langsam \u2013 Qualit\xE4t jetzt",lang:"Sprache"}},Pm=[{min:0,en:"Broom Apprentice",de:"Besen-Azubi"},{min:2500,en:"Pumpkin Courier",de:"K\xFCrbis-Kurierin"},{min:5e3,en:"Bat Dodger",de:"Fledermaus-Flitzerin"},{min:8e3,en:"Storm Rider",de:"Sturmreiterin"},{min:11e3,en:"Moon Witch",de:"Mondhexe"},{min:14e3,en:"Grand High Witch",de:"Oberhexe"}],gs="en";try{gs=localStorage.getItem("wbr-lang")||"en"}catch{}function zi(){return gs}function $c(i){gs=i==="de"?"de":"en";try{localStorage.setItem("wbr-lang",gs)}catch{}document.documentElement.lang=gs}function nt(i,e=gs){return od[e]&&od[e][i]||od.en[i]||i}function Jc(i,e=gs){let t=Pm[0];for(let n of Pm)i>=n.min&&(t=n);return t[e]}function Im(i){document.querySelectorAll("[data-i18n]").forEach(e=>{e.textContent=nt(e.getAttribute("data-i18n"))}),document.querySelectorAll("[data-i18n-html]").forEach(e=>{let t=e.getAttribute("data-i18n-html");e.innerHTML=nt(i&&t==="how"?"howKids":t)})}function qn(i,e=gs){return Math.round(i).toLocaleString(e==="de"?"de-DE":"en-US")}function Kc(i,e){let t=Jc(i.score,e),n=qn(i.score,e),s=qn(i.dist,e);return e==="de"?`\u{1F9F9} ${i.name} ist in WITCH BROOM RACE ${s} m durch die Halloween-Nacht geflogen \u2013 ${n} Punkte, Rang: ${t}!
\u2B50 ${i.stars} Sterne, beste Kette x${i.bestChain}${i.raven?", den Sturmraben \xFCberlebt \u26A1":""}.
Fliegst du weiter? \u{1F987}\u{1F383} #WitchBroomRace #Halloween`:`\u{1F9F9} ${i.name} flew ${s} m through Halloween night in WITCH BROOM RACE \u2014 ${n} points, rank: ${t}!
\u2B50 ${i.stars} stars, best chain x${i.bestChain}${i.raven?", survived the Storm Raven \u26A1":""}.
Can you fly further? \u{1F987}\u{1F383} #WitchBroomRace #Halloween`}var Dm=()=>zi()==="de"?"Spieler":"Player",Ce=i=>document.getElementById(i),lo=90,Nm=60,eh=3,dd=80,XM=[[0,"grave"],[22,"forest"],[42,"village"],[60,"canyon"],[80,"storm"]],Um={grave:"ch1",forest:"ch2",village:"ch3",canyon:"ch4",storm:"ch5"};function th(i){let e="grave";for(let[t,n]of XM)i>=t&&(e=n);return e}var E={state:"attract",kids:_n.get("wbr-kids",!1)===!0,quality:_n.get("wbr-quality",""),qualityUser:!!_n.get("wbr-quality",""),elapsed:0,clock:0,score:0,dist:0,stars:0,chain:0,lastStarT:-9,bestChain:0,lives:3,maxLives:3,invuln:0,shield:0,magnet:0,x2:0,boostT:0,boostCD:0,hitSlow:0,timeScale:1,slowT:0,slowCD:0,auto:!1,raven:null,ravenDone:!1,ravenSurvived:!1,ravenHits:0,best:_n.get("wbr-best",0)||0,nameV:_n.get("wbr-name",Dm()),shareLang:zi(),paused:!1,zone:"grave",attractT:23,endT:0,crashT:0,finishT:0,cine:0,nextStormBolt:0,hits:0,nearCount:0,gates:0,rings:0,log:{star:0,ring:0,gate:0,hit:0,near:0,pickup:0,strike:0,shield:0,slowmo:0}};fs[E.quality]||(E.quality="");var ce=new C(0,3.2,0),Fe={vx:0,vy:0,tx:0,ty:3.2,speed:20},kr=Ce("gl"),Ei=new Tc({canvas:kr,antialias:!0,powerPreference:"high-performance",alpha:!1,stencil:!1,preserveDrawingBuffer:!1});Ei.toneMapping=Is;Ei.toneMappingExposure=1.08;Ei.outputColorSpace=$t;var si=new ha,ln=new hn(62,1,.1,900),Bn=null,Lm=null,It=null,lt=null,ai=null,Pe=null,Tt=mm(si),cn=_m(Ce("fx2d")),fd=62,ao=1;function xs(){return E.quality||"high"}function qM(){let i=fs[xs()];if(Bn&&(Bn.dispose&&Bn.dispose(),Bn=null),!i.bloom)return;let e=Ei.getDrawingBufferSize(new re),t=new qt(e.x,e.y,{type:nn,samples:i.msaa});Bn=new Pc(Ei,t),Bn.addPass(new Ic(si,ln)),Lm=new Pr(new re(e.x,e.y),.75*i.bloom,.55,.8),Bn.addPass(Lm),Bn.addPass(new Lc)}function gd(){let i=window.innerWidth,e=window.innerHeight,t=fs[xs()];ao=Math.min(window.devicePixelRatio||1,t.pr),Ei.setPixelRatio(ao),Ei.setSize(i,e,!1),ln.aspect=i/e,fd=60+Qe((1-ln.aspect)/.5,0,1)*16,ln.fov=fd,ln.updateProjectionMatrix(),Bn&&(Bn.setPixelRatio(ao),Bn.setSize(i,e)),vm(cn,i,e,Math.min(window.devicePixelRatio||1,2)),It&&(It.stars.material.uniforms.pr.value=ao)}function YM(){return window.innerHeight*ao/(2*Math.tan(ln.fov*Math.PI/360))}function co(i,e=!1){E.quality=i,e&&(E.qualityUser=!0,_n.set("wbr-quality",i));let t=fs[i],n=It?It.biome:"grave";It&&(si.remove(It.root),It.root.traverse(s=>{s.geometry&&s.geometry.dispose()})),It=Op(si,i),It.onThunder=s=>pt.thunder(s,F(-.5,.5)),Dr(It,n,!0),lt&&(lt.q=t),Tt.scale=t.particles,qM(),gd(),document.querySelectorAll("#qualSeg button").forEach(s=>s.classList.toggle("on",s.dataset.q===i)),window.__wbrQuality=i}function Fm(){lt&&si.remove(lt.root),lt=Jp(si,{kids:E.kids,q:fs[xs()]}),lt.zoneFn=i=>th(ZM()+Math.max(0,ce.z-i)/Math.max(8,Fe.speed)),ai&&si.remove(ai.root),ai=hm(),si.add(ai.root),Pe&&si.remove(Pe.root),Pe=fm(E.kids),si.add(Pe.root)}function ZM(){return E.state==="play"?E.elapsed:E.attractT}var ri=new C;function xd(i){return ri.copy(i).project(ln),{x:(ri.x*.5+.5)*cn.w,y:(-ri.y*.5+.5)*cn.h,z:ri.z}}function oo(i,e,t="#ffd36a",n=26,s){let r=E.x2>0?2:1;if(E.score+=i*r,e&&(s||E.clock-(E._pop||0)>.22)){E._pop=E.clock;let o=xd(e);o.z<1&&Zu(cn,o.x,o.y-20,s||"+"+i*r,t,n)}let a=Ce("score");a.classList.remove("bump"),a.offsetWidth,a.classList.add("bump")}function ld(i,e,t=!1){let n=Ce("combo");n.className="",n.innerHTML=`<span class="c">${i}</span>${e?`<span class="p">${e}</span>`:""}`,n.offsetWidth,n.className="show"+(t?" hot":"")}function Vr(i,e,t=!1,n=!1){let s=Ce("chapter");s.className="",s.querySelector(".ck").textContent=i,s.querySelector(".ct").textContent=e,s.offsetWidth,s.className="show"+(t?" purple":"")+(n?" big":"")}function _d(i=!0){let e=Ce("flash");e.style.transition="none",e.style.opacity=i?.55:0,e.offsetWidth,e.style.transition="opacity .5s",e.style.opacity=0}function $M(){let i=Ce("hurt");i.classList.add("on"),setTimeout(()=>i.classList.remove("on"),120)}function Bm(i=.35,e=.55){E.slowCD>0||(E.timeScale=i,E.slowT=e,E.slowCD=2.5,E.log.slowmo++,pt.slowmo())}function JM(){let i=Qe(E.elapsed/lo,0,1);return E.kids?us(13,20,i):us(18,31,i)}function Om(i,e){let t=E.state==="play";switch(i){case"star":{E.clock-E.lastStarT<1.25?E.chain++:E.chain=1,E.lastStarT=E.clock,E.bestChain=Math.max(E.bestChain,E.chain);let n=Math.min(5,1+Math.floor(E.chain/5)),s=e.obj.position.clone();Oi(Tt,s,E.x2>0?[1.6,1.1,.3]:[1.4,1,.45],16,4,.22,.7,0),Br(Tt,s,1.3,.3,16767088),pt.star(E.chain,Qe((s.x-ce.x)/6,-.7,.7)),t&&(E.stars++,E.log.star++,oo(10*n,s,"#ffe28a",17+n*2),E.chain>=5&&E.chain%5===0&&(ld(`${nt("chain")} x${n}`,`${E.chain} \u2B50`,E.chain>=15),pt.combo(E.chain)));break}case"ring":{E.boostT=Math.max(E.boostT,1.4),Br(Tt,e.obj.position,4.5,.45,6336767),Oi(Tt,e.obj.position,[.5,.9,1.4],36,7,.22,.7,0),Yu(Tt,e.obj.position,6344959,30),Hi(Tt,.25),pt.ring(),pt.boost(),t&&(E.rings++,E.log.ring++,oo(100,e.obj.position,"#8af0ff",30,`${nt("ring")} +${100*(E.x2>0?2:1)}`));break}case"gate":{pt.gate(),Oi(Tt,ri.set(e.x,4,e.z),[1,.6,1.6],40,6,.3,.9,0),t&&(E.gates++,E.log.gate++,oo(150,ri.set(e.x,3.5,e.z),"#d8a0ff",30,`${nt("gate")} +${150*(E.x2>0?2:1)}`));break}case"pickup":{let n=e.kind;Oi(Tt,e.obj.position,[1.2,.8,1.6],50,6,.3,1,0),Br(Tt,e.obj.position,5,.45,13668607),pt.pickup(n),n==="shield"?E.shield=15:n==="magnet"?E.magnet=9:E.x2=10,t&&(E.log.pickup++,ld(nt(n),n==="shield"?"\u{1F6E1}\uFE0F":n==="magnet"?"\u{1F9F2}":"\u2728"));break}case"hit":{if(E.state!=="play"||E.invuln>0)return;if(E.shield>0){E.shield=0,E.invuln=1,E.log.shield++,pt.shieldBreak(),Oi(Tt,ce,[.5,1,1.6],70,8,.35,.9,0),Br(Tt,ce,6,.5,8442111),Hi(Tt,.5),ld(nt("shieldPop"),"\u{1F6E1}\uFE0F");return}E.lives--,E.hits++,E.log.hit++,E.invuln=E.kids?2.2:1.6,E.chain=0,E.hitSlow=1,pt.hit(),Hi(Tt,1.1),$M(),Oi(Tt,ce,[1.6,.5,.3],60,7,.3,.8,4);let n=Ce("lives");n.classList.remove("hit"),n.offsetWidth,n.classList.add("hit");let s=xd(ce);Zu(cn,s.x,s.y-60,E.lives===1?nt("lastLife"):nt("ouch"),"#ff7a8a",38,1.1),E.lives<=0&&Hm();break}case"near":{if(E.state!=="play")return;E.nearCount++,E.log.near++,oo(50,ce,"#ffffff",26,`${nt("near")} +${50*(E.x2>0?2:1)}`),Hi(Tt,.35),pt.nearMiss(Qe((e.x-ce.x)/5,-.8,.8)),(e.type==="bolt"||e.minM<.45)&&Bm(E.kids?.5:.33,.55);break}case"strike":{E.log.strike++;let n=Math.hypot(e.x-ce.x,e.z-ce.z);to(It,{near:n<30,noBolt:!0,amp:n<30?1:.6}),Yu(Tt,ri.set(e.x,2,e.z),12624127,120),Oi(Tt,ri.set(e.x,.3,e.z),[1.2,1,1.8],60,9,.35,.8,5),Br(Tt,ri.set(e.x,.5,e.z),8,.4,13676799),Hi(Tt,Qe(1.2-n/30,.15,.9)),_d();break}case"telegraph":E.state==="play"&&E.clock-(E._tele||0)>.5&&(E._tele=E.clock,pt.telegraph());break;case"batsNear":pt.bats(Qe(e.vx>0?-.6:.6,-1,1));break}}var cd=0;function KM(i){if(cd-=i,cd>0)return;cd=.08;let e=-1e9,t=ce.x,n=ce.y,s=lt.ents.filter(a=>!a.dead&&a.z<ce.z+1&&a.z>ce.z-34),r=new C;for(let a=-5.6;a<=5.61;a+=.8)for(let o=1.4;o<=6.8;o+=.6){let l=-.03*((a-ce.x)**2+(o-ce.y)**2)-.02*(o-3.5)**2;for(let c of s){let h=ce.z-c.z;if(c.type==="star"){let u=Math.hypot(a-c.obj.position.x,o-c.obj.position.y);l+=5/(1+u*u)/(1+h*.06)}else if(c.type==="ring"&&!c.passed){let u=Math.hypot(a-c.x,o-c.y);l+=14/(1+u*u)/(1+h*.05)}else if(c.type==="pickup"){let u=Math.hypot(a-c.obj.position.x,o-c.obj.position.y);l+=6/(1+u*u)/(1+h*.06)}else if(c.type==="bolt"){if(c.struck&&c._age>.35)continue;let u=h/Math.max(8,Fe.speed),d=c.tStrike-lt.time;if(Math.abs(u-d)<.9||!c.struck&&h<18){let f=Math.abs(a-c.x)-c.R;f<1.6&&(l-=60*(1.6-f))}}else if(c.hazard){if(r.set(a,o,c.z),c.type==="bats"){let d=h/Math.max(8,Fe.speed+c.vz),f=99;for(let g of c.bats){let v=g.position.x+c.vx*d,m=g.position.y;f=Math.min(f,Math.hypot(a-v,o-m)-.6)}f<1.6&&(l-=45*(1.6-f)/(1+h*.02));continue}let u=Xu(c,r)-.55;u<1.4&&(l-=60*(1.4-u)/(1+h*.015))}}l>e&&(e=l,t=a,n=o)}Fe.tx=t,Fe.ty=n}var ki=new Set,Nt={mode:"mouse",touchId:null,sx:0,sy:0,t0:0,lx:0,ly:0,moved:0};function sh(){return E.state!=="play"||E.paused||E.boostCD>0?!1:(E.boostT=Math.max(E.boostT,1.1),E.boostCD=2.6,pt.boost(),Hi(Tt,.2),!0)}kr.addEventListener("pointermove",i=>{if(!(E.state!=="play"||E.paused)){if(i.pointerType==="mouse"){Nt.mode="mouse";let e=i.clientX/window.innerWidth,t=i.clientY/window.innerHeight;Fe.tx=Qe((e*2-1)*Fn*1.2,-Fn,Fn),Fe.ty=Qe(us(Fr,Ur,(t-.12)/.76),Ur,Fr)}else if(i.pointerId===Nt.touchId){let e=i.clientX-Nt.lx,t=i.clientY-Nt.ly;Nt.lx=i.clientX,Nt.ly=i.clientY,Nt.moved+=Math.abs(e)+Math.abs(t),Nt.mode="touch";let n=2*Fn/(Math.min(window.innerWidth,900)*.62);Fe.tx=Qe(Fe.tx+e*n,-Fn,Fn),Fe.ty=Qe(Fe.ty-t*n*.85,Ur,Fr)}}});kr.addEventListener("pointerdown",i=>{if(E.state==="play"){if(i.pointerType==="mouse"){i.button===0&&sh();return}Nt.touchId=i.pointerId,Nt.lx=Nt.sx=i.clientX,Nt.ly=Nt.sy=i.clientY,Nt.t0=performance.now(),Nt.moved=0,Nt.mode="touch";try{kr.setPointerCapture(i.pointerId)}catch{}}});var jM=i=>{i.pointerId===Nt.touchId&&(Nt.touchId=null,Nt.moved<14&&performance.now()-Nt.t0<300&&sh())};kr.addEventListener("pointerup",jM);kr.addEventListener("pointercancel",i=>{i.pointerId===Nt.touchId&&(Nt.touchId=null)});var nh={ArrowLeft:"l",a:"l",A:"l",ArrowRight:"r",d:"r",D:"r",ArrowUp:"u",w:"u",W:"u",ArrowDown:"dn",s:"dn",S:"dn"};window.addEventListener("keydown",i=>{document.activeElement&&document.activeElement.tagName==="INPUT"||(nh[i.key]&&(ki.add(nh[i.key]),Nt.mode="keys",i.preventDefault()),i.key===" "&&(i.preventDefault(),E.state==="play"?sh():(E.state==="attract"||E.state==="end"&&E.endT>.8)&&ho()),i.key==="Enter"&&(E.state==="attract"||E.state==="end"&&E.endT>.8)&&ho(),i.key==="Escape"&&E.state==="play"&&fo(!E.paused))});window.addEventListener("keyup",i=>{nh[i.key]&&ki.delete(nh[i.key])});window.addEventListener("blur",()=>ki.clear());function rh(i){ce.set(0,3.2,0),Fe.vx=Fe.vy=0,Fe.tx=0,Fe.ty=3.2,E.elapsed=0,E.score=0,E.dist=0,E.stars=0,E.chain=0,E.bestChain=0,E.maxLives=E.kids?5:3,E.lives=E.maxLives,E.invuln=0,E.shield=0,E.magnet=0,E.x2=0,E.boostT=0,E.boostCD=0,E.hitSlow=0,E.timeScale=1,E.slowT=0,E.slowCD=0,E.ravenDone=!1,E.ravenSurvived=!1,E.ravenHits=0,E.hits=0,E.nearCount=0,E.gates=0,E.rings=0,E.nextStormBolt=0,E.cine=0,Pe.root.visible=!1,Pe.phase="off",lt.noPatterns=!1;let e=i?th(E.attractT):"grave";Vu(lt,ce.z,e),E.zone=e,Dr(It,e,!0),It.stormy=0,xm(Tt),cn.pops=[];for(let t in E.log)E.log[t]=0;ro("main")}function ho(){Zc(),Ce("start").classList.add("hidden"),Ce("end").classList.add("hidden"),Ce("hud").classList.remove("hidden"),Ce("boostWrap").classList.remove("hidden"),document.body.classList.add("playing"),document.body.classList.remove("cine"),E.state="play",E.paused=!1,rh(!1),Gm(),pt.start(),Vr(nt("ch1"),nt("b_grave")),Oi(Tt,ce,[1.4,1,.5],80,8,.3,1,0)}function Hm(){E.state="crash",E.crashT=0,pt.crash(),Bm(.45,1),document.body.classList.add("cine")}function zm(){E.state="finish",E.finishT=0,pt.finish(),document.body.classList.add("cine"),Vr("",zi()==="de"?"MITTERNACHT!":"MIDNIGHT!",!1,!0)}function km(){E.state==="play"&&(E.lives=0,Hm())}function Vm(){return{score:Math.round(E.score),dist:Math.round(E.dist),stars:E.stars,bestChain:E.bestChain,raven:E.ravenSurvived,finished:E.lives>0,kids:E.kids}}function Vs(){return{...E.state==="end"&&E.lastResult?E.lastResult:Vm(),name:(Ce("name").value||Dm()).trim()}}function pd(){E.lastResult=Vm(),E.state="end",E.endT=0,document.body.classList.remove("playing","cine"),Ce("hud").classList.add("hidden"),Ce("boostWrap").classList.add("hidden");let i=Vs(),e=i.score>E.best;e&&(E.best=i.score,_n.set("wbr-best",E.best),pt.newBest()),Ce("endTitle").textContent=i.finished?nt("endFinish"):nt("endCrash"),Ce("endScore").textContent=qn(i.score),Ce("newBest").classList.toggle("hidden",!e),Ce("rank").textContent="\u{1F9F9} "+Jc(i.score),Ce("stDist").textContent=qn(i.dist)+" m",Ce("stStars").textContent=i.stars,Ce("stChain").textContent="x"+i.bestChain,Ce("stRaven").textContent=i.raven?"\u26A1 "+nt("survived"):"\u2014",Ce("stBest").textContent=qn(E.best),Ce("bestStart").textContent=qn(E.best),Ce("name").value=E.nameV,ah(),Ce("end").classList.remove("hidden"),Ce("chapter").className="",E.attractT=23,rh(!0),E.auto=!1}function Gm(){let i=Ce("lives");i.innerHTML="";for(let e=0;e<E.maxLives;e++){let t=document.createElement("span");t.textContent="\u{1F9D9}\u200D\u2640\uFE0F",i.appendChild(t)}}function Wm(){Pe.root.visible=!0,Pe.phase="intro",Pe.pt=0,Pe.nextCall=eh+.6,Pe.call=0,Pe.calls=0,lt.noPatterns=!0,cm(lt,ce,-2,200,!0),pt.bossIntro(),ro("boss"),id(.4,2.5),document.body.classList.add("cine"),setTimeout(()=>Vr(E.kids?nt("bossKidsSub"):nt("bossSub"),E.kids?nt("bossKids"):nt("boss"),!0,!0),900),Pe.root.position.set(ce.x,-14,ce.z-46)}function QM(i){if(Pe.phase==="off")return;let e=Pe.pt,t=0,n=0;if(Pe.phase==="intro"){let s=Qe(e/2.2,0,1),r=1-Math.pow(1-s,3);Pe.root.position.set(us(Pe.root.position.x,ce.x*.3,.05),us(-14,10,r),ce.z-us(46,28,r)),Pe.root.rotation.set(-.35*(1-r),0,0),n=1-r,t=e>1.3&&e<2.2?1:0,e>1.35&&!Pe.introBolt&&(Pe.introBolt=!0,to(It,{near:!0}),It.bolt.position.set(Pe.root.position.x+6,50,Pe.root.position.z-6),It.boltT=It.t,Hi(Tt,.9),_d()),e>=eh&&(Pe.phase="chase",Pe.pt=0,Pe.nextCall=.9,lt.noPatterns=!1,lt.patZ=ce.z-40,document.body.classList.remove("cine"),Pe.introBolt=!1)}else if(Pe.phase==="chase"){Pe.root.position.x=ds(Pe.root.position.x,ce.x*.45+Math.sin(E.clock*.7)*2.5,1.5,i),Pe.root.position.y=9.5+Math.sin(E.clock*1.1)*1.2,Pe.root.position.z=ce.z-27,Pe.root.rotation.set(.05,Math.sin(E.clock*.6)*.12,Math.sin(E.clock*.8)*.08),Pe.nextCall-=i;let s=E.kids?2.1:1.35;if(Pe.nextCall<.5&&!Pe.calling&&(Pe.calling=!0,pt.bossCall()),Pe.calling&&(t=Qe(1-Math.abs(Pe.nextCall)*2,0,1)),Pe.nextCall<=0){Pe.calling=!1,Pe.calls++;let r=Fe.speed,a=Qe(e/16,0,1);Pe.nextCall=E.kids?2.3:us(1.45,1,a);let o=E.kids?"aim":Dc(Pe.calls<3?["aim"]:["aim","pair","sweep","aim"]);if(o==="aim")Bi(lt,ce,r,s,ce.x+Fe.vx*.4);else if(o==="pair"){let l=Qe(ce.x,-4,4);Bi(lt,ce,r,s,l-2.7),Bi(lt,ce,r,s,l+2.7),Bi(lt,ce,r,s+.5,l)}else{let l=Math.random()<.5?-1:1;for(let c=0;c<4;c++)Bi(lt,ce,r,s+c*.28,l*(-5.2+c*3.4))}}E.elapsed>=dd&&(Pe.phase="exit",Pe.pt=0,eS())}else Pe.phase==="exit"&&(Pe.root.position.y+=i*14,Pe.root.position.z=ce.z-27-e*30,Pe.root.rotation.x=-.5,n=.4,e>3&&(Pe.phase="off",Pe.root.visible=!1));Pe.call=t,pm(Pe,i,{call:t,raise:n,flap:Pe.phase==="intro"?2.2:3.4,amp:Pe.phase==="exit"?.8:.55})}function eS(){E.ravenDone=!0,E.ravenSurvived=E.lives>0,ro("main"),pt.bossBye(),to(It,{near:!0}),_d(),Hi(Tt,.8),oo(2e3,ce,"#e0b0ff",40,`${nt("bossWin")} +${2e3*(E.x2>0?2:1)}`),Vr("+2000",nt("bossWin"),!0,!0)}function tS(i){let e=E.kids?9:12;if(E.state==="attract"||E.state==="end"||E.auto)KM(i);else if(Nt.mode==="keys"||ki.size){let s=E.kids?8:10.5;ki.has("l")?Fe.tx=ce.x-3:ki.has("r")?Fe.tx=ce.x+3:Nt.mode==="keys"&&(Fe.tx=ce.x+Fe.vx*.08),ki.has("u")?Fe.ty=ce.y+3:ki.has("dn")?Fe.ty=ce.y-3:Nt.mode==="keys"&&(Fe.ty=ce.y+Fe.vy*.08),Fe.tx=Qe(Fe.tx,ce.x-s,ce.x+s)}Fe.tx=Qe(Fe.tx,-Fn,Fn),Fe.ty=Qe(Fe.ty,Ur,Fr);let t=Qe((Fe.tx-ce.x)*5.5,-e,e),n=Qe((Fe.ty-ce.y)*5,-e*.8,e*.8);Fe.vx=ds(Fe.vx,t,9,i),Fe.vy=ds(Fe.vy,n,9,i),ce.x=Qe(ce.x+Fe.vx*i,-Fn,Fn),ce.y=Qe(ce.y+Fe.vy*i,Ur,Fr)}function nS(i){if(!ai)return;ai.root.updateMatrixWorld(!0);let e=ai.bristle.getWorldPosition(ri),t=E.boostT>0?1:0,n=Math.max(1,Math.round((3+t*4)*Tt.scale*i*60));for(let s=0;s<n;s++){let r=Math.random(),o=E.x2>0||r<.5?[1,.72,.3]:r<.75?[1,.4,.85]:[.6,.45,1];Tt.points.spawn(e.x+F(-.15,.15),e.y+F(-.15,.15),e.z+F(-.1,.3),F(-.8,.8),F(-.3,.8),-Fe.speed*F(.55,.8),F(.09,.2)*(1+t*.5),F(.45,.8),o[0],o[1],o[2],-.4,.985)}}var ih={};function hd(i,e){ih[i]!==e&&(ih[i]=e,Ce(i).textContent=e)}function Xm(){hd("score",qn(E.score)),hd("dist",qn(E.dist)),hd("starsN",String(E.stars));let i=Qe(E.elapsed/lo,0,1);Ce("progFill").style.width=(i*100).toFixed(2)+"%",Ce("progWitch").style.left=(i*100).toFixed(2)+"%";let e=Ce("lives").children;for(let r=0;r<e.length;r++)e[r].classList.toggle("lost",r>=E.lives);let t=E.boostT>0?1:1-E.boostCD/2.6;Ce("boostFill").style.width=(Qe(t,0,1)*100).toFixed(1)+"%",Ce("boostWrap").classList.toggle("ready",E.boostCD<=0);let n=[];E.shield>0&&n.push(["shield","\u{1F6E1}\uFE0F "+nt("shield"),E.shield/15]),E.magnet>0&&n.push(["magnet","\u{1F9F2} "+nt("magnet"),E.magnet/9]),E.x2>0&&n.push(["x2","\xD72 "+nt("x2"),E.x2/10]);let s=n.map(r=>r[0]+Math.ceil(r[2]*20)).join();ih.chips!==s&&(ih.chips=s,Ce("chips").innerHTML=n.map(r=>`<span class="chip ${r[0]}">${r[1]}<i style="width:${(r[2]*100).toFixed(0)}%"></i></span>`).join(""))}function iS(){let i=Gu(lt,ce.z);i!==E.zone&&(E.zone=i,Dr(It,i),E.state==="play"&&i!=="canyon"&&(Vr(nt(Um[i]),nt("b_"+i),i==="storm"),pt.biome())),It.stormy=ds(It.stormy,E.zone==="storm"||E.zone==="canyon"?1:0,.8,1/60)}function vd(i){E.slowT>0&&(E.slowT-=i,E.slowT<=0&&(E.timeScale=1)),E.slowCD>0&&(E.slowCD-=i);let e=i*E.timeScale;E.clock+=e;let t=E.state==="play";if(t){E.elapsed+=e,!E.ravenDone&&Pe.phase==="off"&&E.elapsed>=Nm&&Wm(),E.elapsed>=lo&&zm(),E.zone==="storm"&&E.elapsed>E.nextStormBolt&&E.elapsed<lo-1.5&&(E.nextStormBolt=E.elapsed+(E.kids?F(2.2,3):F(1,1.6)),Bi(lt,ce,Fe.speed,E.kids?2.1:1.5,ce.x+F(-1.5,1.5)));for(let r of["invuln","shield","magnet","x2","boostT","boostCD"])E[r]>0&&(E[r]=Math.max(0,E[r]-e));E.hitSlow=Math.max(0,E.hitSlow-e*1.2)}else(E.state==="attract"||E.state==="end")&&(E.attractT+=e,E.attractT>58&&(E.attractT=.5),E.endT+=i,E.boostT>0&&(E.boostT-=e),Math.random()<e*.12&&(E.boostT=1));let n=E.boostT>0?1:0,s=t||E.state==="crash"||E.state==="finish"?JM():E.kids?15:21;s*=(1+.5*n)*(1-.35*E.hitSlow),Pe.phase==="intro"&&(s*=.7),Fe.speed=ds(Fe.speed,s,n?6:2.5,e),E.state==="crash"?(E.crashT+=i,Fe.vy-=14*e,ce.y=Math.max(.5,ce.y+Fe.vy*e),Fe.speed*=Math.pow(.4,e),E.crashT>1.8&&pd()):E.state==="finish"?(E.finishT+=i,ce.y+=e*(2+E.finishT*3),Fe.speed=ds(Fe.speed,34,2,e),E.finishT>2.8&&pd()):tS(e),ce.z-=Fe.speed*e,t&&(E.dist+=Fe.speed*e,E.score+=Fe.speed*e*(E.x2>0?2:1)),lt.time=lt.time,im(lt,e,ce,{speed:Fe.speed,magnet:E.magnet>0,playing:t,attract:!t,d:Qe(E.elapsed/lo,0,1),onEvent:Om}),iS(),QM(e),ai.root.position.copy(ce),um(ai,e,{vx:Fe.vx,vy:Fe.vy,speedK:Fe.speed/24,boost:n,invuln:t?E.invuln:0,shield:E.shield>0,magnet:E.magnet>0,x2:E.x2>0,crash:E.state==="crash"?Math.min(1,E.crashT)*E.crashT:0}),nS(e),gm(Tt,e),ed(Fe.speed/24+n*.35,!0)}var Rn=new C(0,5,8),ud=new C(0,3,-10);function yd(i){let e=Qe((1-ln.aspect)/.5,0,1),t=E.boostT>0?1:0,n=7.6+e*2.4+t*1.2,s=ri.set(ce.x*(.7-e*.2),ce.y*.7+3+e*.6,ce.z+n),r=new C(ce.x*(.82-e*.25),ce.y*.8+1.9,ce.z-14),a=0;if(Pe.phase==="intro"){let u=Pe.pt;a=u<.5?u/.5:u>eh-.6?Math.max(0,(eh-u)/.6):1,a=a*a*(3-2*a)}if(a>0){let u=new C(ce.x+2.6,ce.y-1,ce.z+3.4),d=new C().copy(ce).lerp(Pe.root.position,.8);s.lerp(u,a),r.lerp(d,a)}if(E.state==="attract"||E.state==="end"){let u=Math.sin(E.clock*.18)*(1-e*.55);s.set(ce.x-4.2*u,ce.y+.9+e*1.2,ce.z+6.6+e*2.5-Math.abs(u)*1.2),r.set(ce.x+2.6*u,ce.y+2.1+e*.2,ce.z-10)}E.state==="finish"&&(s.set(Rn.x,Rn.y+i*.6,Rn.z-Fe.speed*i*.35),r.copy(ce)),E.state==="crash"&&(s.set(ce.x*.6,Math.max(2.2,ce.y+2.4),ce.z+7.5),r.copy(ce));let o=1-Math.exp(-i*(a>0?6:7));if(Rn.x+=(s.x-Rn.x)*o,Rn.y+=(s.y-Rn.y)*o,Rn.z=E.state==="finish"||a>0?Rn.z+(s.z-Rn.z)*o:s.z,ud.lerp(r,1-Math.exp(-i*8)),window.__wbrCam){let u=window.__wbrCam;s.set(ce.x+u[0],ce.y+u[1],ce.z+u[2]),r.set(ce.x+u[3],ce.y+u[4],ce.z+u[5]),Rn.copy(s),ud.copy(r)}let l=Tt.shakeAmp;ln.position.set(Rn.x+(Math.random()-.5)*l*.5,Rn.y+(Math.random()-.5)*l*.5,Rn.z),ln.lookAt(ud),ln.rotation.z+=-ai.roll*.16*(1-a)+(Math.random()-.5)*l*.03;let c=fd+Qe((Fe.speed-18)/14,0,1)*6+t*9-a*8;ln.fov=ds(ln.fov,c,4,i),ln.updateProjectionMatrix();let h=YM();Tt.points.mat.uniforms.scale.value=h,It.ff.material.uniforms.scale.value=h}function uo(){Bn?Bn.render():Ei.render(si,ln)}function ah(){Ce("shareText").textContent=Kc(Vs(),E.shareLang),document.querySelectorAll("#shareLang button").forEach(i=>i.classList.toggle("on",i.dataset.sl===E.shareLang))}function ks(i,e=2200){let t=Ce("toast");t.textContent=i,t.classList.add("show"),clearTimeout(ks._t),ks._t=setTimeout(()=>t.classList.remove("show"),e)}async function qm(){let i=Kc(Vs(),E.shareLang),e=!1;try{navigator.clipboard&&window.isSecureContext!==!1&&(await navigator.clipboard.writeText(i),e=!0)}catch{}if(!e)try{let t=document.createElement("textarea");t.value=i,t.style.position="fixed",t.style.opacity="0",document.body.appendChild(t),t.select(),e=document.execCommand("copy"),t.remove()}catch{}return window.__wbrLastShare=i,ks(e?nt("copied"):nt("copyFail")),pt.ui(),e}function Ym(){uo();let i=document.createElement("canvas");i.width=1080,i.height=1350;let e=i.getContext("2d"),t=Ei.domElement,n=t.width,s=t.height,r=Math.max(1080/n,1350/s);e.drawImage(t,(1080-n*r)/2,(1350-s*r)/2,n*r,s*r);let a=e.createLinearGradient(0,0,0,1350);a.addColorStop(0,"rgba(10,2,20,0.2)"),a.addColorStop(.45,"rgba(10,2,20,0.5)"),a.addColorStop(1,"rgba(10,2,20,0.85)"),e.fillStyle=a,e.fillRect(0,0,1080,1350);let o=Vs(),l=zi(),c='Didot, "Bodoni 72", Georgia, "Times New Roman", serif',h='"Arial Black", Impact, sans-serif',u=(v,m,p,M,b,_,T=h,w="900",P=0)=>{e.font=`${w} ${M}px ${T}`,e.textAlign="center",e.textBaseline="middle","letterSpacing"in e&&(e.letterSpacing=P+"px"),e.shadowColor=_,e.shadowBlur=M*.45,e.fillStyle=b,e.fillText(v,m,p),e.shadowBlur=0,"letterSpacing"in e&&(e.letterSpacing="0px")},d=(v,m,p,M,b)=>{let _=e.createLinearGradient(0,v,0,m);return _.addColorStop(0,p),_.addColorStop(.5,M),_.addColorStop(1,b),_};u("WITCH",540,170,170,d(90,250,"#fffbe6","#ffd070","#c25a10"),"rgba(255,140,30,0.9)",c,"900",6),u("BROOM RACE",540,300,84,d(260,340,"#ffffff","#e2b8ff","#8a3cff"),"rgba(176,77,255,0.95)",c,"900",14),e.save(),e.fillStyle="rgba(34,12,52,0.62)",e.strokeStyle="rgba(255,190,120,0.5)",e.lineWidth=3;let f=(v,m,p,M,b)=>{e.beginPath(),e.moveTo(v+b,m),e.arcTo(v+p,m,v+p,m+M,b),e.arcTo(v+p,m+M,v,m+M,b),e.arcTo(v,m+M,v,m,b),e.arcTo(v,m,v+p,m,b),e.closePath()};return f(100,420,880,740,48),e.shadowColor="rgba(176,77,255,0.5)",e.shadowBlur=50,e.fill(),e.shadowBlur=0,e.stroke(),e.restore(),u(o.name.toUpperCase(),540,495,44,"#f2d0ff","rgba(176,77,255,0.9)"),u(qn(o.score,l),540,625,160,d(550,700,"#fff3c4","#ffb547","#ff6a0a"),"rgba(255,120,20,0.95)"),u("\u{1F9F9} "+Jc(o.score,l),540,755,52,"#ffd9a8","rgba(255,140,30,0.9)"),[[qn(o.dist,l)+" m",nt("stDist",l)],["\u2B50 "+o.stars,nt("stStars",l)],[o.raven?"\u26A1":"\u2014",nt("stRaven",l)]].forEach(([v,m],p)=>{let M=250+p*290;e.fillStyle="rgba(255,255,255,0.08)",f(M-125,840,250,170,26),e.fill(),u(v,M,905,54,"#fff0d0","rgba(255,160,60,0.6)"),u(m.toUpperCase(),M,975,22,"rgba(255,240,230,0.8)","rgba(0,0,0,0)",h,"800")}),u(l==="de"?"Fliegst du weiter?":"Can you fly further?",540,1085,42,"#ffffff","rgba(255,120,240,0.8)",h,"800"),u("#WitchBroomRace",540,1265,40,"#ffb547","rgba(255,120,20,0.8)"),i}function sS(){let e=Ym().toDataURL("image/png"),t=document.createElement("a");return t.href=e,t.download=`witch-broom-race-${Vs().score}.png`,document.body.appendChild(t),t.click(),t.remove(),window.__wbrLastShot=e.length,ks(nt("saved")),pt.ui(),e}function oh(){if(Im(E.kids),document.querySelectorAll("#langSeg button, #langSeg2 button").forEach(i=>i.classList.toggle("on",i.dataset.lang===zi())),E.state==="end"){ah();let i=Vs()}bd()}function Md(i){E.kids=!!i,_n.set("wbr-kids",E.kids),Ce("chkKids").checked=E.kids,Ce("chkKids2").checked=E.kids,Yc(E.kids),Fm(),rh(E.state!=="play"),E.state==="play"&&Gm(),oh()}Ce("btnPlay").onclick=()=>ho();Ce("btnReplay").onclick=()=>ho();Ce("chkKids").onchange=i=>Md(i.target.checked);Ce("chkKids2").onchange=i=>Md(i.target.checked);document.querySelectorAll("#langSeg button, #langSeg2 button").forEach(i=>i.onclick=()=>{$c(i.dataset.lang),E.shareLang=zi(),oh(),pt.ui()});document.querySelectorAll("#shareLang button").forEach(i=>i.onclick=()=>{E.shareLang=i.dataset.sl,ah(),pt.ui()});document.querySelectorAll("#qualSeg button").forEach(i=>i.onclick=()=>{co(i.dataset.q,!0),bd(),pt.ui()});Ce("btnSettings").onclick=()=>Ce("settings").classList.remove("hidden");Ce("btnCloseSettings").onclick=()=>Ce("settings").classList.add("hidden");Ce("settings").onclick=i=>{i.target.id==="settings"&&Ce("settings").classList.add("hidden")};Ce("volMusic").oninput=i=>{qc(i.target.value/100),_n.set("wbr-vm",+i.target.value)};Ce("volSfx").oninput=i=>{Xc(i.target.value/100),_n.set("wbr-vs",+i.target.value)};function Sd(i){td(i),Ce("chkMute").checked=i,Ce("btnMute").textContent=i?"\u{1F507}":"\u{1F50A}",_n.set("wbr-mute",!!i)}Ce("chkMute").onchange=i=>Sd(i.target.checked);Ce("btnMute").onclick=()=>Sd(!nd());function fo(i){E.state==="play"&&(E.paused=i,Ce("pauseScr").classList.toggle("hidden",!i),ki.clear())}Ce("btnPause").onclick=()=>fo(!0);Ce("btnResume").onclick=()=>fo(!1);Ce("btnQuit").onclick=()=>{fo(!1),km()};Ce("btnShare").onclick=()=>qm();Ce("btnShot").onclick=()=>sS();Ce("name").oninput=i=>{E.nameV=i.target.value,_n.set("wbr-name",E.nameV),ah()};document.addEventListener("visibilitychange",()=>{document.hidden&&fo(!0)});window.addEventListener("resize",gd);var zt={n:0,t0:0,ema:60,slow:0,decided:!1,samples:0},Qc=i=>i==="low"?nt("q_low"):i==="mid"?nt("q_mid"):i==="high"?nt("q_high"):nt("q_ultra");function bd(){Ce("qualHint").textContent=`${nt("suggested")}: ${Qc(Zm())} (${Math.round(zt.ema)} fps)`}function Zm(){let i=zt.ema;return i>=56?Math.max(window.screen.width,window.screen.height)>=1400&&(window.devicePixelRatio||1)<=2?"ultra":"high":i>=42?"high":i>=28?"mid":"low"}function rS(i){if(zt.n++,zt.t0||(zt.t0=i),i-zt.t0>=1e3){let e=zt.n*1e3/(i-zt.t0);if(zt.ema=zt.decided?zt.ema*.6+e*.4:e,zt.n=0,zt.t0=i,zt.samples++,bd(),!zt.decided&&zt.samples>=3&&(zt.decided=!0,!E.qualityUser&&!window.__wbrNoAutoQ)){let t=Zm();t!==xs()&&(co(t),ks(`${nt("suggested")}: ${Qc(t)} (${Math.round(zt.ema)} fps)`))}if(zt.decided&&E.state==="play"&&zt.ema<26&&xs()!=="low"&&!window.__wbrNoAutoQ){if(zt.slow++,zt.slow>=4){zt.slow=0;let t=["low","mid","high","ultra"],n=t[Math.max(0,t.indexOf(xs())-1)];E.qualityUser?ks(`${nt("suggested")}: ${Qc(n)}`):(co(n),ks(`${nt("fpsLow")} ${Qc(n)}`))}}else zt.slow=0}}var md=performance.now();function $m(i){requestAnimationFrame($m);let e=Math.min(.05,Math.max(0,(i-md)/1e3));if(md=i,rS(i),!window.__wbrHold){if(E.paused){uo();return}Jm(e)}}function Jm(i){vd(i),yd(i),Uc(It,i,ln,{fogMul:1}),E.state==="play"&&Xm(),uo();let e=xd(ce);Vc(cn,i,((E.boostT>0?1:0)+Qe((Fe.speed-26)/12,0,.5))*(E.state==="play"?1:.45),cn.w/2,cn.h*.45)}function aS(){Fm(),co(E.quality||"high"),$c(zi()),E.shareLang=zi(),Ce("chkKids").checked=E.kids,Ce("chkKids2").checked=E.kids,Yc(E.kids);let i=_n.get("wbr-vm",60),e=_n.get("wbr-vs",90);Ce("volMusic").value=i,Ce("volSfx").value=e,qc(i/100),Xc(e/100),Sd(_n.get("wbr-mute",!1)===!0),Ce("bestStart").textContent=qn(E.best),Ce("name").value=E.nameV,oh(),gd(),E.attractT=22.6,rh(!0);let t=150;for(let n=0;n<t;n++)vd(1/60),yd(1/60),Uc(It,1/60,ln);E.boostT=.9,uo(),Vc(cn,0,.6,cn.w/2,cn.h*.45),document.body.classList.add("ready"),requestAnimationFrame(n=>{md=n,$m(n)})}var jc=(i,e,t)=>[ce.x+i,ce.y+e,ce.z-t];window.__wbr={S:E,P:ce,PV:Fe,get C(){return lt},get W(){return It},start:ho,applyQuality:co,setKids:Md,setLang:i=>{$c(i),oh()},steer(i,e){Fe.tx=i,Fe.ty=e,Nt.mode="mouse"},auto(i){E.auto=!!i},spawnStar:(i=0,e=0,t=12)=>{let[n,s,r]=jc(i,e,t);am(lt,n,s,r)},spawnRing:(i=0,e=0,t=14)=>{let[n,s,r]=jc(i,e,t);om(lt,n,s,r)},spawnStone:(i=0,e=14)=>{let[t,n,s]=jc(i,0,e);lm(lt,t,s)},spawnPickup:(i,e=0,t=0,n=12)=>{let[s,r,a]=jc(e,t,n);rm(lt,i,s,r,a)},pattern:(i,e=30)=>sm(lt,i,ce.z-e,.5),bolt:(i=0,e=1.2)=>Bi(lt,ce,Fe.speed,e,ce.x+i),clear:()=>{for(let i of lt.ents)i.obj&&(i.dead=!0,lt.root.remove(i.obj),(i.extra||[]).forEach(e=>lt.root.remove(e)));lt.noPatterns=!0},patterns:i=>{lt.noPatterns=!i},jumpTo(i){E.elapsed=i,Vu(lt,ce.z,th(i)),E.zone=th(i),Dr(It,E.zone,!0),It.stormy=E.zone==="storm"||E.zone==="canyon"?1:0,E.zone!=="canyon"&&Vr(nt(Um[E.zone]),nt("b_"+E.zone),E.zone==="storm"),E.ravenDone=i>=dd,i>=Nm&&i<dd?Pe.phase==="off"&&Wm():(Pe.phase="off",Pe.root.visible=!1,lt.noPatterns=!1,document.body.classList.remove("cine"))},boost:sh,hit:()=>Om("hit",{x:ce.x,z:ce.z}),endRound:km,showEnd:pd,finish:zm,shareText:i=>Kc(Vs(),i||E.shareLang),copyShare:qm,makeShot:()=>Ym().toDataURL("image/png"),raven:()=>({phase:Pe.phase,visible:Pe.root.visible,pos:Pe.root.position.toArray()}),ents:()=>lt.ents.filter(i=>!i.dead).map(i=>({type:i.type,x:i.x,y:i.y,z:i.z,dz:ce.z-i.z})),snap:()=>({state:E.state,elapsed:E.elapsed,score:Math.round(E.score),dist:Math.round(E.dist),stars:E.stars,lives:E.lives,invuln:E.invuln,shield:E.shield,magnet:E.magnet,x2:E.x2,boostT:E.boostT,speed:Fe.speed,zone:E.zone,x:ce.x,y:ce.y,z:ce.z,roll:ai.roll,log:{...E.log},timeScale:E.timeScale,raven:Pe.phase,kids:E.kids,quality:xs(),maxLives:E.maxLives}),tick:(i=1,e=1/60)=>{for(let t=0;t<i;t++)Jm(e)},sim:(i=1,e=1/60)=>{for(let t=0;t<i;t++){vd(e),yd(e),Uc(It,e,ln),E.state==="play"&&Xm();for(let n of cn.pops)n.t+=e;cn.pops=cn.pops.filter(n=>n.t<n.life)}return!0},render:()=>(uo(),Vc(cn,1/60,(E.boostT>0?1:0)+Qe((Fe.speed-26)/12,0,.5),cn.w/2,cn.h*.45),!0),hold:i=>{window.__wbrHold=!!i},sounds:()=>sd().then(i=>({n:i,names:rd()})),sfx:pt,audio:ad,fps:()=>zt.ema,quality:()=>xs(),renderer:Ei};aS();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
