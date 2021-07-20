(this["webpackJsonpreact-bcravatar-example"]=this["webpackJsonpreact-bcravatar-example"]||[]).push([[0],{288:function(t,e,n){t.exports=n(651)},289:function(t,e,n){},306:function(t,e){},329:function(t,e){},331:function(t,e){},409:function(t,e){},411:function(t,e){},443:function(t,e){},444:function(t,e){},449:function(t,e){},451:function(t,e){},458:function(t,e){},477:function(t,e){},495:function(t,e){},510:function(t,e){},512:function(t,e){},544:function(t,e){},546:function(t,e){},553:function(t,e){},554:function(t,e){},575:function(t,e){},649:function(t,e,n){},651:function(t,e,n){"use strict";n.r(e);n(289);var a=n(14),r=n.n(a),c=n(282),i=n.n(c),o=n(284),u=n(285),s=n(142),f=n.n(s);function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var p={1:"https://mainnet.infura.io/v3/",4:"https://rinkeby.infura.io/v3/",137:"https://polygon-mainnet.infura.io/v3/"},d={1:"",4:"0x5F958E9361397e226468a905508238B634a254C5",137:""},h=[{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAvatar",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],m={1:"",4:"https://api.studio.thegraph.com/query/2120/bcravatar-rinkeby/1.1.2",137:""},b="_uBIq-",v=["Web3","infura","network","address","className","placeholder","children"];function g(t,e,n,r){var c=Object(a.useState)(null),i=c[0],o=c[1],u=Object(a.useState)([null,!1]),s=u[0],f=u[1];return Object(a.useEffect)((function(){if(e&&d[n]){var a="object"!==typeof e&&p[n]?""+p[n]+e:e;i?i.setProvider(a):o(new t(a))}}),[e,n]),Object(a.useEffect)((function(){r&&i&&function(t,e,n){return new Promise((function(a,r){return fetch(m[e],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tavatars(where: { id: "'+t.toLowerCase()+'" }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi,\n\t\t\t\t\t\thasNFT\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){return t.data.avatars[0]})).then((function(c){c?c.hasNFT?new n.eth.Contract(h,d[e]).methods.getAvatar(t).call().then((function(t){fetch(t).then((function(t){return t.json()})).then((function(t){if(t.image||t.image_url){var e=t.image||t.image_url;a([e,c.uri!==e])}else a([c.uri,!1])})).catch((function(){return a([c.uri,!1])}))})).catch((function(){return a([c.uri,!1])})):a([c.uri,!1]):r({error:"No Avatar"})})).catch(r)}))}(r,n,i).then(f).catch((function(t){return console.log("Error: Fetch Avatar",t)}))}),[r,n,i]),s}function y(t){var e=t.Web3,n=t.infura,a=t.network,c=t.address,i=t.className,o=void 0===i?"":i,u=t.placeholder,s=void 0===u?"https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz":u,f=t.children,p=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,v),d=g(e,n,a,c),h=d[0],m=[d[1]?"bcravatar is-nft":"bcravatar",b,o];return r.a.createElement("div",l({className:m.join(" ")},p),r.a.createElement("a",{href:"https://www.bcravatar.com",target:"_blank"},r.a.createElement("img",{className:"bcravatar__image",src:h||s})),r.a.createElement("div",{className:"bcravatar__content"},f))}function w(t,e){var n=Object(a.useState)([null,null]),r=n[0],c=n[1];return Object(a.useEffect)((function(){e&&m[t]&&function(t,e){return new Promise((function(n,a){return fetch(m[e],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tprofiles (where: { id: "'+t.toLowerCase()+'" }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){return t.data.profiles[0]})).then((function(t){t?fetch(t.uri).then((function(t){return t.json()})).then((function(t){n([t,null])})).catch(a):a({error:"No Profile"})})).catch(a)}))}(e,t).then(c).catch((function(t){return c([null,t])}))}),[e,t]),r}n(649);var E=["network","address","className","placeholder"],j="9aa3d95b3bc440fa88ea12eaa4456161",N="0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2",O="0x543812C87700377b7b6D943142Cb57b1b4a05624",k=function(t){return"".concat(t.substr(0,6),"...").concat(t.substr(-4))};function C(t){var e=t.network,n=t.address,a=t.className,c=void 0===a?"":a,i=(t.placeholder,Object(u.a)(t,E)),s=w(e,n),f=Object(o.a)(s,2),l=f[0],p=f[1],d=!l&&!p,h=[p?"bcrprofile error":"bcrprofile",c];return r.a.createElement("pre",Object.assign({className:h.join(" ")},i),d?"Loading...":p?JSON.stringify(p,null,4):JSON.stringify(l,null,4))}var S=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement("img",{id:"logo",src:"./logo.png",alt:"Crypto Utilitybia"}),r.a.createElement(y,{Web3:f.a,infura:j,network:4,address:N},k(N))),r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement(C,{infura:j,network:4,address:N})),r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement("img",{id:"logo",src:"./logo.png",alt:"Crypto Utilitybia"}),r.a.createElement(y,{Web3:f.a,infura:j,network:4,address:O},k(O))),r.a.createElement("div",{className:"profile-wrapper"},r.a.createElement(C,{infura:j,network:4,address:O})))};i.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[288,1,2]]]);
//# sourceMappingURL=main.5d19f1bd.chunk.js.map