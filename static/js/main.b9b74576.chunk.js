(this["webpackJsonpreact-bcravatar-example"]=this["webpackJsonpreact-bcravatar-example"]||[]).push([[0],{290:function(t,n,e){t.exports=e(653)},291:function(t,n,e){},308:function(t,n){},331:function(t,n){},333:function(t,n){},411:function(t,n){},413:function(t,n){},445:function(t,n){},446:function(t,n){},451:function(t,n){},453:function(t,n){},460:function(t,n){},479:function(t,n){},497:function(t,n){},512:function(t,n){},514:function(t,n){},546:function(t,n){},548:function(t,n){},555:function(t,n){},556:function(t,n){},577:function(t,n){},651:function(t,n,e){},653:function(t,n,e){"use strict";e.r(n);e(291);var r=e(14),a=e.n(r),i=e(285),c=e.n(i),o=e(91),u=e(144),s=e(92),f=e(287),l=e(145),h=e.n(l);function d(){return(d=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}var p={1:"https://mainnet.infura.io/v3/",4:"https://rinkeby.infura.io/v3/",137:"https://polygon-mainnet.infura.io/v3/"},m={1:"",4:"0x6EedE8E28C581989260da2d9401de60Ae2d4AA64",137:""},v=[{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAvatar",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],b={1:"",4:"https://api.studio.thegraph.com/query/2120/bcravatar-rinkeby/1.2.3",137:""},g="_uBIq-",y=["Web3","infura","network","address","className","placeholder","refresh","children"];function j(t){var n=t.Web3,e=t.infura,a=t.network,i=t.address,c=t.refresh,o=Object(r.useState)(null),u=o[0],s=o[1],f=Object(r.useState)([null,!1]),l=f[0],h=f[1];Object(r.useEffect)((function(){if(e&&m[a]){var t="object"!==typeof e&&p[a]?""+p[a]+e:e;u?u.setProvider(t):s(new n(t))}}),[e,a]);var d=function(t,n,e){return function(t,n,e){return new Promise((function(r,a){return fetch(b[n],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tavatars(where: { id: "'+t.toLowerCase()+'" }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi,\n\t\t\t\t\t\thasNFT\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){return t.data.avatars[0]})).then((function(i){i?i.hasNFT?new e.eth.Contract(v,m[n]).methods.getAvatar(t).call().then((function(t){fetch(t).then((function(t){return t.json()})).then((function(t){if(t.image||t.image_url){var n=t.image||t.image_url;r([n,i.uri!==n])}else r([i.uri,!1])})).catch((function(){return r([i.uri,!1])}))})).catch((function(){return r([i.uri,!1])})):r([i.uri,!1]):a({error:"No Avatar"})})).catch(a)}))}(t,n,e).then(h).catch((function(t){console.log("Error: Fetch Avatar",t),h("",!1)}))};return Object(r.useEffect)((function(){if(i&&u){d(i,a,u);var t=setInterval((function(){return d(i,a,u)}),c);return function(){return clearInterval(t)}}}),[i,a,u,c]),l}function O(t){var n=t.Web3,e=t.infura,r=t.network,i=t.address,c=t.className,o=void 0===c?"":c,u=t.placeholder,s=void 0===u?"https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz":u,f=t.refresh,l=void 0===f?15e3:f,h=t.children,p=function(t,n){if(null==t)return{};var e,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,y),m=j({Web3:n,infura:e,network:r,address:i,refresh:l}),v=m[0],b=[m[1]?"bcravatar is-nft":"bcravatar",g,o];return a.a.createElement("div",d({className:b.join(" ")},p),a.a.createElement("a",{href:"https://www.bcravatar.com",target:"_blank"},a.a.createElement("img",{className:"bcravatar__image",src:v||s})),a.a.createElement("div",{className:"bcravatar__content"},h))}function w(t,n){var e=Object(r.useState)([null,null]),a=e[0],i=e[1];return Object(r.useEffect)((function(){n&&b[t]&&function(t,n){return new Promise((function(e,r){return fetch(b[n],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tprofiles (where: { id: "'+t.toLowerCase()+'" }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){return t.data.profiles[0]})).then((function(t){t?fetch(t.uri).then((function(t){return t.json()})).then((function(t){e([t,null])})).catch(r):r({error:"No Profile"})})).catch(r)}))}(n,t).then(i).catch((function(t){return i([null,t])}))}),[n,t]),a}e(651);var E=["network","address","className","placeholder"],N="9aa3d95b3bc440fa88ea12eaa4456161",k=new h.a("https://rinkeby.infura.io/v3/".concat(N)),A=["0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2","0x6EedE8E28C581989260da2d9401de60Ae2d4AA64"];function S(t){var n=t.network,e=t.address,r=t.className,i=void 0===r?"":r,c=(t.placeholder,Object(f.a)(t,E)),o=w(n,e),u=Object(s.a)(o,2),l=u[0],h=u[1],d=!l&&!h,p=[h?"bcrprofile error":"bcrprofile",i];return a.a.createElement("pre",Object.assign({className:p.join(" ")},c),d?"Loading...":h?JSON.stringify(h,null,4):JSON.stringify(l,null,4))}var T=function(){var t,n=Object(r.useState)([null,null]),e=Object(s.a)(n,2),i=Object(s.a)(e[0],2),c=i[0],f=i[1],l=e[1];return Object(r.useEffect)((function(){(function(t,n,e){return new Promise((function(r,a){return fetch(b[n],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tavatars(where: { id_in: ["'+t.map((function(t){return t.toLowerCase()})).join('","')+'"] }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi,\n\t\t\t\t\t\thasNFT\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){var i=t.data.avatars;i.length?Promise.all(i.map((function(t){return new Promise((function(r){t.hasNFT?new e.eth.Contract(v,m[n]).methods.getAvatar(address).call().then((function(n){fetch(n).then((function(t){return t.json()})).then((function(n){if(n.image||n.image_url){var e=n.image||n.image_url;r([t.id,e,t.uri!==e])}else r([t.id,t.uri,!1])})).catch((function(){return r([t.id,t.uri,!1])}))})).catch((function(){return r([t.id,t.uri,!1])})):r([t.id,t.uri,!1])}))}))).then(r).catch(a):a({error:"No Avatar"})})).catch(a)}))})(A,4,k).then((function(t){return l([t.reduce((function(t,n){return Object(u.a)(Object(u.a)({},t),{},Object(o.a)({},n[0],{uri:n[1],hasNFT:n[2]}))}),{}),null])})).catch((function(t){return l([null,t])}))})),a.a.createElement("div",null,a.a.createElement("div",{className:"avatar-wrapper"},a.a.createElement("img",{id:"logo",src:"./logo.png",alt:"Crypto Utilitybia"}),a.a.createElement(O,{Web3:h.a,infura:N,network:4,address:A[0]},"".concat((t=A[0]).substr(0,6),"...").concat(t.substr(-4)))),a.a.createElement(S,{infura:N,network:4,address:A[0]}),a.a.createElement("pre",{className:"bcrprofile"},c||f?f?JSON.stringify(f,null,4):JSON.stringify(c,null,4):"Loading..."))};c.a.render(a.a.createElement(T,null),document.getElementById("root"))}},[[290,1,2]]]);
//# sourceMappingURL=main.b9b74576.chunk.js.map