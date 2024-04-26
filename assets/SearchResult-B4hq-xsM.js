import{u as U,g as te,h as se,i as Y,j as ae,P as le,t as ne,k as ie,l as A,m as S,n as oe,w as B,p as s,q as ue,R as $,s as re,v as ce,x as de,C as ge,y as pe,z as ve,A as he,B as me,D as ye,E as we,F as be,G as j,H as G,I as ke,J as R,K as Qe}from"./app-h5oZL_fd.js";const fe=["/","/en/","/guide/","/en/guide/","/guide/concepts/golang/1-keywords.html","/guide/concepts/golang/2-datatype.html","/guide/concepts/golang/3-operator.html","/guide/concepts/golang/4-errorhandling.html","/guide/concepts/golang/5-map.html","/guide/concepts/golang/6-slice.html","/guide/concepts/golang/7-channel.html","/guide/concepts/golang/8-context.html","/guide/concepts/network/1-network.html","/guide/concepts/network/2-ip.html","/guide/concepts/network/3-tcp-udp.html","/guide/concepts/network/4-dns.html","/guide/concepts/network/5-arp.html","/guide/concepts/network/6-nat.html","/guide/devtools/Git/1-git.html","/guide/devtools/IDE/1-goland.html","/guide/devtools/IDE/2-vscode.html","/en/guide/concepts/golang/1-keywords.html","/en/guide/concepts/golang/2-datatype.html","/en/guide/concepts/golang/3-operator.html","/en/guide/concepts/golang/4-errorhandling.html","/en/guide/concepts/golang/5-map.html","/en/guide/concepts/golang/6-slice.html","/en/guide/concepts/golang/7-channel.html","/en/guide/concepts/golang/8-context.html","/en/guide/concepts/network/1-network.html","/en/guide/concepts/network/2-ip.html","/en/guide/concepts/network/3-tcp-udp.html","/en/guide/concepts/network/4-dns.html","/en/guide/concepts/network/5-arp.html","/en/guide/concepts/network/6-nat.html","/en/guide/devtools/Git/1-git.html","/en/guide/devtools/IDE/1-goland.html","/en/guide/devtools/IDE/2-vscode.html","/guide/concepts/database/SQL/1-database-basic.html","/guide/concepts/database/SQL/2-database-query.html","/guide/concepts/database/SQL/3-database-index.html","/guide/concepts/database/SQL/4-database-transaction.html","/guide/interview/golang/basic/1-basic.html","/guide/interview/golang/basic/2-medium.html","/en/guide/concepts/database/SQL/1-database-basic.html","/en/guide/concepts/database/SQL/2-database-query.html","/en/guide/concepts/database/SQL/3-database-index.html","/en/guide/concepts/database/SQL/4-database-transaction.html","/en/guide/interview/golang/basic/1-basic.html","/en/guide/interview/golang/basic/2-medium.html","/404.html","/guide/concepts/golang/","/guide/concepts/","/guide/concepts/network/","/guide/devtools/Git/","/guide/devtools/","/guide/devtools/IDE/","/en/guide/concepts/golang/","/en/guide/concepts/","/en/guide/concepts/network/","/en/guide/devtools/Git/","/en/guide/devtools/","/en/guide/devtools/IDE/","/guide/concepts/database/SQL/","/guide/concepts/database/","/guide/interview/golang/basic/","/guide/interview/golang/","/guide/interview/","/en/guide/concepts/database/SQL/","/en/guide/concepts/database/","/en/guide/interview/golang/basic/","/en/guide/interview/golang/","/en/guide/interview/"],He="SEARCH_PRO_QUERY_HISTORY",y=U(He,[]),Se=()=>{const{queryHistoryCount:a}=R,l=a>0;return{enabled:l,queryHistory:y,addQueryHistory:n=>{l&&(y.value=Array.from(new Set([n,...y.value.slice(0,a-1)])))},removeQueryHistory:n=>{y.value=[...y.value.slice(0,n),...y.value.slice(n+1)]}}},F=a=>fe[a.id]+("anchor"in a?`#${a.anchor}`:""),Re="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:_}=R,w=U(Re,[]),Le=()=>{const a=_>0;return{enabled:a,resultHistory:w,addResultHistory:l=>{if(a){const n={link:F(l),display:l.display};"header"in l&&(n.header=l.header),w.value=[n,...w.value.slice(0,_-1)]}},removeResultHistory:l=>{w.value=[...w.value.slice(0,l),...w.value.slice(l+1)]}}},xe=a=>{const l=ge(),n=Y(),L=pe(),o=A(0),Q=S(()=>o.value>0),v=ve([]);return he(()=>{const{search:h,terminate:x}=me(),b=ke(c=>{const k=c.join(" "),{searchFilter:q=p=>p,splitWord:D,suggestionsFilter:P,...m}=l.value;k?(o.value+=1,h(c.join(" "),n.value,m).then(p=>q(p,k,n.value,L.value)).then(p=>{o.value-=1,v.value=p}).catch(p=>{console.warn(p),o.value-=1,o.value||(v.value=[])})):v.value=[]},R.searchDelay-R.suggestDelay);B([a,n],([c])=>b(c),{immediate:!0}),ye(()=>{x()})}),{isSearching:Q,results:v}};var De=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const n=se(),L=Y(),o=ae(le),{enabled:Q,addQueryHistory:v,queryHistory:h,removeQueryHistory:x}=Se(),{enabled:b,resultHistory:c,addResultHistory:k,removeResultHistory:q}=Le(),D=Q||b,P=ne(a,"queries"),{results:m,isSearching:p}=xe(P),i=ie({isQuery:!0,index:0}),d=A(0),g=A(0),O=S(()=>D&&(h.value.length>0||c.value.length>0)),E=S(()=>m.value.length>0),C=S(()=>m.value[d.value]||null),M=()=>{const{isQuery:e,index:t}=i;t===0?(i.isQuery=!e,i.index=e?c.value.length-1:h.value.length-1):i.index=t-1},z=()=>{const{isQuery:e,index:t}=i;t===(e?h.value.length-1:c.value.length-1)?(i.isQuery=!e,i.index=0):i.index=t+1},J=()=>{d.value=d.value>0?d.value-1:m.value.length-1,g.value=C.value.contents.length-1},K=()=>{d.value=d.value<m.value.length-1?d.value+1:0,g.value=0},V=()=>{g.value<C.value.contents.length-1?g.value+=1:K()},N=()=>{g.value>0?g.value-=1:J()},I=e=>e.map(t=>Qe(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=we[e.index]||"$content",[u,H=""]=be(t)?t[L.value].split("$content"):t.split("$content");return e.display.map(r=>s("div",I([u,...r,H])))}return e.display.map(t=>s("div",I(t)))},f=()=>{d.value=0,g.value=0,l("updateQuery",""),l("close")},X=()=>Q?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.queryHistory),h.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:i.isQuery&&i.index===t}],onClick:()=>{l("updateQuery",e)}},[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:G,onClick:u=>{u.preventDefault(),u.stopPropagation(),x(t)}})]))])):null,Z=()=>b?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},o.value.resultHistory),c.value.map((e,t)=>s($,{to:e.link,class:["search-pro-result-item",{active:!i.isQuery&&i.index===t}],onClick:()=>{f()}},()=>[s(j,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(u=>I(u)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:G,onClick:u=>{u.preventDefault(),u.stopPropagation(),q(t)}})]))])):null;return oe("keydown",e=>{if(a.isFocusing){if(E.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const t=C.value.contents[g.value];v(a.queries.join(" ")),k(t),n.push(F(t)),f()}}else if(b){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")z();else if(e.key==="Enter"){const{index:t}=i;i.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(n.push(c.value[t].link),f())}}}}),B([d,g],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!E.value:!O.value}],id:"search-pro-results"},a.queries.length?p.value?s(ue,{hint:o.value.searching}):E.value?s("ul",{class:"search-pro-result-list"},m.value.map(({title:e,contents:t},u)=>{const H=d.value===u;return s("li",{class:["search-pro-result-list-item",{active:H}]},[s("div",{class:"search-pro-result-title"},e||o.value.defaultTitle),t.map((r,ee)=>{const T=H&&g.value===ee;return s($,{to:F(r),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{v(a.queries.join(" ")),k(r),f()}},()=>[r.type==="text"?null:s(r.type==="title"?re:r.type==="heading"?ce:de,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[r.type==="text"&&r.header?s("div",{class:"content-header"},r.header):null,s("div",W(r))])])})])})):o.value.emptyResult:D?O.value?[X(),Z()]:o.value.emptyHistory:o.value.emptyResult)}});export{De as default};
