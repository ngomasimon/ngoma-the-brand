var K=Object.create;var{getPrototypeOf:M,defineProperty:I,getOwnPropertyNames:N}=Object;var O=Object.prototype.hasOwnProperty;var P=(k,B,q)=>{q=k!=null?K(M(k)):{};let w=B||!k||!k.__esModule?I(q,"default",{value:k,enumerable:!0}):q;for(let z of N(k))if(!O.call(w,z))I(w,z,{get:()=>k[z],enumerable:!0});return w};var Q=((k)=>typeof require!=="undefined"?require:typeof Proxy!=="undefined"?new Proxy(k,{get:(B,q)=>(typeof require!=="undefined"?require:B)[q]}):k)(function(k){if(typeof require!=="undefined")return require.apply(this,arguments);throw Error('Dynamic require of "'+k+'" is not supported')});var F=[],R=0;async function S(k){let B=document.querySelector('[name="nue:components"]')?.getAttribute("content");if(!B)return[];let q=[];for(let w of B.split(" "))if(w){if(w==k)w+=`?${++R}`;let{lib:z}=await import(w);if(z)q.push(...z)}return q}async function T(k){let B=document.querySelectorAll("[custom]"),q=B[0]?await S(k):[];if(!q[0])return;let{createApp:w}=await import("./nue.js");for(let z of[...B]){let C=z.getAttribute("custom"),G=z.nextElementSibling,J=G?.type=="application/json"?JSON.parse(G.textContent):{},H=q.find((D)=>D.name==C);if(H){let D=w(H,J,q).mount(z);F.push(D)}else if(customElements.get(C));else console.error(`Component not defined: "${C}"`)}}async function V(){F.forEach((k)=>k.unmount()),F=[]}addEventListener("route",()=>T());addEventListener("DOMContentLoaded",()=>dispatchEvent(new Event("route")));export{V as unmountAll,T as mountAll};
