import{u as Y,g as te,h as se,i as B,j as ae,P as le,t as ne,k as ie,l as F,m as q,n as ue,w as M,p as s,q as re,R as j,s as oe,v as ce,x as de,C as ge,y as pe,z as ve,A as he,B as me,D as ye,E as we,F as ke,G as I,H as _,I as be,J as x,K as fe}from"./app-CTefm7va.js";const He=["/","/en/","/guide/","/en/guide/","/guide/concepts/database/1-database-basic.html","/guide/concepts/database/2-database-query.html","/guide/concepts/golang/1-keywords.html","/guide/concepts/golang/2-datatype.html","/guide/concepts/golang/3-operator.html","/guide/concepts/golang/4-errorhandling.html","/guide/concepts/golang/5-map.html","/guide/concepts/golang/6-slice.html","/guide/concepts/golang/7-channel.html","/guide/concepts/golang/8-context.html","/guide/concepts/network/1-network.html","/guide/concepts/network/2-ip.html","/guide/concepts/network/3-tcp-udp.html","/guide/concepts/network/4-dns.html","/guide/concepts/network/5-arp.html","/guide/concepts/network/6-nat.html","/en/guide/concepts/database/1-database-basic.html","/en/guide/concepts/database/2-database-query.html","/en/guide/concepts/golang/1-keywords.html","/en/guide/concepts/golang/2-datatype.html","/en/guide/concepts/golang/3-operator.html","/en/guide/concepts/golang/4-errorhandling.html","/en/guide/concepts/golang/5-map.html","/en/guide/concepts/golang/6-slice.html","/en/guide/concepts/golang/7-channel.html","/en/guide/concepts/golang/8-context.html","/en/guide/concepts/network/1-network.html","/en/guide/concepts/network/2-ip.html","/en/guide/concepts/network/3-tcp-udp.html","/en/guide/concepts/network/4-dns.html","/en/guide/concepts/network/5-arp.html","/en/guide/concepts/network/6-nat.html","/guide/interview/golang/basic/1-basic.html","/guide/interview/golang/basic/2-medium.html","/en/guide/interview/golang/basic/1-basic.html","/en/guide/interview/golang/basic/2-medium.html","/404.html","/guide/concepts/database/","/guide/concepts/","/guide/concepts/golang/","/guide/concepts/network/","/en/guide/concepts/database/","/en/guide/concepts/","/en/guide/concepts/golang/","/en/guide/concepts/network/","/guide/interview/golang/basic/","/guide/interview/golang/","/guide/interview/","/en/guide/interview/golang/basic/","/en/guide/interview/golang/","/en/guide/interview/"],Re="SEARCH_PRO_QUERY_HISTORY",y=Y(Re,[]),qe=()=>{const{queryHistoryCount:a}=x,l=a>0;return{enabled:l,queryHistory:y,addQueryHistory:n=>{l&&(y.value=Array.from(new Set([n,...y.value.slice(0,a-1)])))},removeQueryHistory:n=>{y.value=[...y.value.slice(0,n),...y.value.slice(n+1)]}}},P=a=>He[a.id]+("anchor"in a?`#${a.anchor}`:""),xe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=x,w=Y(xe,[]),Qe=()=>{const a=U>0;return{enabled:a,resultHistory:w,addResultHistory:l=>{if(a){const n={link:P(l),display:l.display};"header"in l&&(n.header=l.header),w.value=[n,...w.value.slice(0,U-1)]}},removeResultHistory:l=>{w.value=[...w.value.slice(0,l),...w.value.slice(l+1)]}}},Se=a=>{const l=ge(),n=B(),Q=pe(),u=F(0),f=q(()=>u.value>0),v=ve([]);return he(()=>{const{search:h,terminate:S}=me(),k=be(c=>{const b=c.join(" "),{searchFilter:C=p=>p,splitWord:D,suggestionsFilter:O,...m}=l.value;b?(u.value+=1,h(c.join(" "),n.value,m).then(p=>C(p,b,n.value,Q.value)).then(p=>{u.value-=1,v.value=p}).catch(p=>{console.warn(p),u.value-=1,u.value||(v.value=[])})):v.value=[]},x.searchDelay-x.suggestDelay);M([a,n],([c])=>k(c),{immediate:!0}),ye(()=>{S()})}),{isSearching:f,results:v}};var De=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const n=se(),Q=B(),u=ae(le),{enabled:f,addQueryHistory:v,queryHistory:h,removeQueryHistory:S}=qe(),{enabled:k,resultHistory:c,addResultHistory:b,removeResultHistory:C}=Qe(),D=f||k,O=ne(a,"queries"),{results:m,isSearching:p}=Se(O),i=ie({isQuery:!0,index:0}),d=F(0),g=F(0),T=q(()=>D&&(h.value.length>0||c.value.length>0)),L=q(()=>m.value.length>0),A=q(()=>m.value[d.value]||null),z=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:h.value.length-1):i.index=t-1},G=()=>{const{isQuery:e,index:t}=i;t===(e?h.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{d.value=d.value>0?d.value-1:m.value.length-1,g.value=A.value.contents.length-1},K=()=>{d.value=d.value<m.value.length-1?d.value+1:0,g.value=0},V=()=>{g.value<A.value.contents.length-1?g.value+=1:K()},N=()=>{g.value>0?g.value-=1:J()},E=e=>e.map(t=>fe(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=we[e.index]||"$content",[r,R=""]=ke(t)?t[Q.value].split("$content"):t.split("$content");return e.display.map(o=>s("div",E([r,...o,R])))}return e.display.map(t=>s("div",E(t)))},H=()=>{d.value=0,g.value=0,l("updateQuery",""),l("close")},X=()=>f?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),h.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:r=>{r.preventDefault(),r.stopPropagation(),S(t)}})]))])):null,Z=()=>k?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),c.value.map((e,t)=>s(j,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{H()}},()=>[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(r=>E(r)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:r=>{r.preventDefault(),r.stopPropagation(),C(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(L.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=A.value.contents[g.value];v(a.queries.join(" ")),b(t),n.push(P(t)),H()}}else if(k){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(n.push(c.value[t].link),H())}}}}),M([d,g],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!L.value:!T.value}],id:"search-pro-results"},a.queries.length?p.value?s(re,{hint:u.value.searching}):L.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},r)=>{const R=d.value===r;return s("li",{class:["search-pro-result-list-item",{active:R}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((o,ee)=>{const $=R&&g.value===ee;return s(j,{to:P(o),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{v(a.queries.join(" ")),b(o),H()}},()=>[o.type==="text"?null:s(o.type==="title"?oe:o.type==="heading"?ce:de,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[o.type==="text"&&o.header?s("div",{class:"content-header"},o.header):null,s("div",W(o))])])})])})):u.value.emptyResult:D?T.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{De as default};
