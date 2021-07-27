(this["webpackJsonpreact-bcravatar-example"]=this["webpackJsonpreact-bcravatar-example"]||[]).push([[0],{290:function(t,e,n){t.exports=n(653)},291:function(t,e,n){},308:function(t,e){},331:function(t,e){},333:function(t,e){},411:function(t,e){},413:function(t,e){},445:function(t,e){},446:function(t,e){},451:function(t,e){},453:function(t,e){},460:function(t,e){},479:function(t,e){},497:function(t,e){},512:function(t,e){},514:function(t,e){},546:function(t,e){},548:function(t,e){},555:function(t,e){},556:function(t,e){},577:function(t,e){},651:function(t,e,n){},653:function(t,e,n){"use strict";n.r(e);n(291);var a=n(14),r=n.n(a),c=n(285),i=n.n(c),o=n(92),u=n(144),s=n(75),f=n(287),l=n(145),d=n.n(l);function h(){return(h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var p={1:"0xBb9499d98C01D97Cc02B40Fa767531c308989995",4:"0xD673224197Cf741365094B50b1ef1A2c99b84Cc3",56:"0xbF8ef894fC52b423c50A8086415B9D5620FC64ce",137:"0xbF8ef894fC52b423c50A8086415B9D5620FC64ce"},b=[{inputs:[{internalType:"address",name:"account",type:"address"}],name:"getAvatar",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"avatarNFTs",outputs:[{internalType:"address",name:"nft",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bool",name:"isERC721",type:"bool"}],stateMutability:"view",type:"function"}],m={1:"https://api.studio.thegraph.com/query/2120/bcravatar-mainnet/1.0.1",4:"https://api.studio.thegraph.com/query/2120/bcravatar-rinkeby/1.2.5",56:"https://api.studio.thegraph.com/query/2120/bcravatar-bsc/1.0.1",137:"https://api.studio.thegraph.com/query/2120/bcravatar-polygon/1.0.1"},v="_uBIq-",y=["Web3","infura","network","address","className","placeholder","refresh","children"],g=function(t,e){return t.includes("0x{id}")?t.replace("0x{id}",e):t.includes("{id}")?t.replace("{id}",e):t};function C(t){var e=t.Web3,n=t.infura,r=t.network,c=t.address,i=t.refresh,o=Object(a.useState)(null),u=o[0],s=o[1],f=Object(a.useState)([null,!1]),l=f[0],d=f[1];Object(a.useEffect)((function(){if(n&&p[r]){var t="object"===typeof n?n:function(t,e){return{1:"https://mainnet.infura.io/v3/"+e,4:"https://rinkeby.infura.io/v3/"+e,56:"https://bsc-dataseed.binance.org/",137:"https://polygon-mainnet.infura.io/v3/"+e}[t]}(r,n);t&&(u?u.setProvider(t):s(new e(t)))}}),[n,r]);var h=function(t,e,n,a){return function(t,e,n,a){return new Promise((function(r,c){return fetch(m[e],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tavatars(where: { id: "'+t.toLowerCase()+'" }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi,\n\t\t\t\t\t\thasNFT\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){return t.data.avatars[0]})).then((function(i){if(i)if(i.uri===a[0]&&i.hasNFT===a[1])r(a);else if(i.hasNFT){var o=new n.eth.Contract(b,p[e]);Promise.all([o.methods.getAvatar(t).call(),o.methods.avatarNFTs(t).call()]).then((function(t){var e=t[0],n=t[1];fetch(g(e,n.tokenId)).then((function(t){return t.json()})).then((function(t){if(t.image||t.image_url){var e=t.image||t.image_url;r([e,i.uri!==e])}else c({error:t.detail})})).catch(c)})).catch((function(){return r([i.uri,!1])}))}else r([i.uri,!1]);else c({error:"No Avatar"})})).catch(c)}))}(t,e,n,a).then(d).catch((function(t){console.log("Error: Fetch Avatar",t)}))};return Object(a.useEffect)((function(){if(c&&u){h(c,r,u);var t=setInterval((function(){return h(c,r,u,l)}),i);return function(){return clearInterval(t)}}}),[c,r,u,i]),l}function j(t){var e=t.Web3,n=t.infura,a=t.network,c=t.address,i=t.className,o=void 0===i?"":i,u=t.placeholder,s=void 0===u?"https://ipfs.io/ipfs/QmVaFasJTocvnuEobz7HkRpADB82z5gYA2xuZrgYFmMoQz":u,f=t.refresh,l=void 0===f?15e3:f,d=t.children,p=function(t,e){if(null==t)return{};var n,a,r={},c=Object.keys(t);for(a=0;a<c.length;a++)n=c[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,y),b=C({Web3:e,infura:n,network:a,address:c,refresh:l}),m=b[0],g=[b[1]?"bcravatar is-nft":"bcravatar",v,o];return r.a.createElement("div",h({className:g.join(" ")},p),r.a.createElement("a",{href:"https://www.bcravatar.com",target:"_blank"},r.a.createElement("img",{className:"bcravatar__image",src:m||s})),r.a.createElement("div",{className:"bcravatar__content"},d))}function O(t,e){var n=Object(a.useState)([null,null]),r=n[0],c=n[1];return Object(a.useEffect)((function(){e&&m[t]&&function(t,e){return new Promise((function(n,a){return fetch(m[e],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tprofiles (where: { id: "'+t.toLowerCase()+'" }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){return t.data.profiles[0]})).then((function(t){t?fetch(t.uri).then((function(t){return t.json()})).then((function(t){n([t,null])})).catch(a):a({error:"No Profile"})})).catch(a)}))}(e,t).then(c).catch((function(t){return c([null,t])}))}),[e,t]),r}n(651);var w=["network","address","className","placeholder"],N="9aa3d95b3bc440fa88ea12eaa4456161",k=new d.a("https://rinkeby.infura.io/v3/".concat(N));function E(t){var e=t.network,n=t.address,a=t.className,c=void 0===a?"":a,i=(t.placeholder,Object(f.a)(t,w)),o=O(e,n),u=Object(s.a)(o,2),l=u[0],d=u[1],h=!l&&!d,p=[d?"bcrprofile error":"bcrprofile",c];return r.a.createElement("pre",Object.assign({className:p.join(" ")},i),h?"Loading...":d?JSON.stringify(d,null,4):JSON.stringify(l,null,4))}var F=[{key:1,label:"Mainnet"},{key:4,label:"Rinkeby"},{key:56,label:"BSC"},{key:137,label:"Polygon"}],T={1:["0x1Ef9882554C6DaABEcd2c7056F8811C69674fc6D","0xBb9499d98C01D97Cc02B40Fa767531c308989995"],4:["0x23ABfdBd2535aC77ea60a078707a9e5820b0Fff2","0xD673224197Cf741365094B50b1ef1A2c99b84Cc3"],56:["0x1Ef9882554C6DaABEcd2c7056F8811C69674fc6D","0xbF8ef894fC52b423c50A8086415B9D5620FC64ce"],137:["0x1Ef9882554C6DaABEcd2c7056F8811C69674fc6D","0xbF8ef894fC52b423c50A8086415B9D5620FC64ce"]},x=function(){var t,e=Object(a.useState)(F[0].key),n=Object(s.a)(e,2),c=n[0],i=n[1],f=Object(a.useState)([null,null]),l=Object(s.a)(f,2),h=Object(s.a)(l[0],2),v=h[0],y=h[1],C=l[1];return Object(a.useEffect)((function(){(function(t,e,n){return new Promise((function(a,r){return fetch(m[e],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:'{\n\t\t\t\t\tavatars(where: { id_in: ["'+t.map((function(t){return t.toLowerCase()})).join('","')+'"] }) {\n\t\t\t\t\t\tid,\n\t\t\t\t\t\turi,\n\t\t\t\t\t\thasNFT\n\t\t\t\t\t}\n\t\t\t\t}'})}).then((function(t){return t.json()})).then((function(t){var c=t.data.avatars;c.length?Promise.all(c.map((function(t){return new Promise((function(a){if(t.hasNFT){var r=new n.eth.Contract(b,p[e]);Promise.all([r.methods.getAvatar(address).call(),r.methods.avatarNFTs(address).call()]).then((function(e){var n=e[0],r=e[1];fetch(g(n,r.tokenId)).then((function(t){return t.json()})).then((function(e){if(e.image||e.image_url){var n=e.image||e.image_url;a([t.id,n,t.uri!==n])}else a([t.id,t.uri,!1])})).catch((function(){return a([t.id,t.uri,!1])}))})).catch((function(){return a([t.id,t.uri,!1])}))}else a([t.id,t.uri,!1])}))}))).then(a).catch(r):r({error:"No Avatar"})})).catch(r)}))})(T[c],c,k).then((function(t){return C([t.reduce((function(t,e){return Object(u.a)(Object(u.a)({},t),{},Object(o.a)({},e[0],{uri:e[1],hasNFT:e[2]}))}),{}),null])})).catch((function(t){return C([null,t])}))}),[c]),r.a.createElement("div",null,r.a.createElement("div",{className:"avatar-wrapper"},r.a.createElement("img",{id:"logo",src:"./logo.png",alt:"Crypto Utilitybia"}),r.a.createElement(j,{Web3:d.a,infura:N,network:c,address:T[c][0]},(t=T[c][0],"".concat(t.substr(0,6),"...").concat(t.substr(-4))))),r.a.createElement("select",{value:c,onChange:function(t){return i(t.target.value)}},F.map((function(t){return r.a.createElement("option",{key:t.key,value:t.key},t.label)}))),r.a.createElement(E,{infura:N,network:c,address:T[c][0]}),r.a.createElement("pre",{className:"bcrprofile"},v||y?y?JSON.stringify(y,null,4):JSON.stringify(v,null,4):"Loading..."))};i.a.render(r.a.createElement(x,null),document.getElementById("root"))}},[[290,1,2]]]);
//# sourceMappingURL=main.0a9e253b.chunk.js.map