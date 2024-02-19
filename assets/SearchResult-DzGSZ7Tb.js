import{u as j,g as Z,h as ee,i as B,j as te,k as se,t as ae,l as le,m as D,n as q,p as ne,w as M,q as s,s as I,v as O,R as U,x as ue,y as re,z as ie,A as oe,B as ce,C as de,D as pe,E as ge,F as ve,G as he,H as me,I as ye,J as we,K as L}from"./app-DOJTjklh.js";const ke=["/","/en/","/guide/","/en/guide/","/guide/concepts/database/1-database-basic.html","/guide/concepts/golang/1-keywords.html","/guide/concepts/golang/2-datatype.html","/guide/concepts/golang/3-operator.html","/guide/concepts/golang/4-errorhandling.html","/guide/concepts/golang/5-map.html","/guide/concepts/golang/6-slice.html","/guide/concepts/golang/7-channel.html","/guide/concepts/golang/8-context.html","/guide/concepts/network/1-network.html","/guide/concepts/network/2-ip.html","/guide/concepts/network/3-tcp-udp.html","/guide/concepts/network/4-dns.html","/guide/concepts/network/5-arp.html","/en/guide/concepts/database/1-database-basic.html","/en/guide/concepts/golang/1-keywords.html","/en/guide/concepts/golang/2-datatype.html","/en/guide/concepts/golang/3-operator.html","/en/guide/concepts/golang/4-errorhandling.html","/en/guide/concepts/golang/5-map.html","/en/guide/concepts/golang/6-slice.html","/en/guide/concepts/golang/7-channel.html","/en/guide/concepts/golang/8-context.html","/en/guide/concepts/network/1-network.html","/en/guide/concepts/network/2-ip.html","/en/guide/concepts/network/3-tcp-udp.html","/en/guide/concepts/network/4-dns.html","/en/guide/concepts/network/5-arp.html","/guide/interview/golang/basic/1-basic.html","/guide/interview/golang/basic/2-medium.html","/en/guide/interview/golang/basic/1-basic.html","/en/guide/interview/golang/basic/2-medium.html","/404.html","/guide/concepts/database/","/guide/concepts/","/guide/concepts/golang/","/guide/concepts/network/","/en/guide/concepts/database/","/en/guide/concepts/","/en/guide/concepts/golang/","/en/guide/concepts/network/","/guide/interview/golang/basic/","/guide/interview/golang/","/guide/interview/","/en/guide/interview/golang/basic/","/en/guide/interview/golang/","/en/guide/interview/"],fe="SEARCH_PRO_QUERY_HISTORY",g=j(fe,[]),He=()=>{const{queryHistoryCount:a}=L,l=a>0;return{enabled:l,queryHistory:g,addQueryHistory:n=>{l&&(g.value.length<a?g.value=Array.from(new Set([n,...g.value])):g.value=Array.from(new Set([n,...g.value.slice(0,a-1)])))},removeQueryHistory:n=>{g.value=[...g.value.slice(0,n),...g.value.slice(n+1)]}}},E=a=>ke[a.id]+("anchor"in a?`#${a.anchor}`:""),be="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:A}=L,v=j(be,[]),Re=()=>{const a=A>0;return{enabled:a,resultHistory:v,addResultHistory:l=>{if(a){const n={link:E(l),display:l.display};"header"in l&&(n.header=l.header),v.value.length<A?v.value=[n,...v.value]:v.value=[n,...v.value.slice(0,A-1)]}},removeResultHistory:l=>{v.value=[...v.value.slice(0,l),...v.value.slice(l+1)]}}},Qe=a=>{const l=ce(),n=B(),{search:b,terminate:d}=de(),m=D(!1),y=pe([]);return ge(()=>{const h=()=>{y.value=[],m.value=!1},R=we(w=>{m.value=!0,w?b({type:"search",query:w,locale:n.value,options:l}).then(p=>{y.value=p,m.value=!1}).catch(p=>{console.error(p),h()}):h()},L.searchDelay);M([a,n],()=>R(a.value),{immediate:!0}),ve(()=>{d()})}),{searching:m,results:y}};var Se=Z({name:"SearchResult",props:{query:{type:String,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const n=ee(),b=B(),d=te(se),{enabled:m,addQueryHistory:y,queryHistory:h,removeQueryHistory:R}=He(),{enabled:w,resultHistory:p,addResultHistory:T,removeResultHistory:Y}=Re(),P=m||w,Q=ae(a,"query"),{results:k,searching:z}=Qe(Q),u=le({isQuery:!0,index:0}),o=D(0),c=D(0),_=q(()=>P&&(h.value.length>0||p.value.length>0)),x=q(()=>k.value.length>0),S=q(()=>k.value[o.value]||null),G=()=>{const{isQuery:e,index:t}=u;t===0?(u.isQuery=!e,u.index=e?p.value.length-1:h.value.length-1):u.index=t-1},J=()=>{const{isQuery:e,index:t}=u;t===(e?h.value.length-1:p.value.length-1)?(u.isQuery=!e,u.index=0):u.index=t+1},K=()=>{o.value=o.value>0?o.value-1:k.value.length-1,c.value=S.value.contents.length-1},V=()=>{o.value=o.value<k.value.length-1?o.value+1:0,c.value=0},$=()=>{c.value<S.value.contents.length-1?c.value+=1:V()},N=()=>{c.value>0?c.value-=1:K()},C=e=>e.map(t=>he(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=me[e.index]||"$content",[r,H=""]=ye(t)?t[b.value].split("$content"):t.split("$content");return e.display.map(i=>s("div",C([r,...i,H])))}return e.display.map(t=>s("div",C(t)))},f=()=>{o.value=0,c.value=0,l("updateQuery",""),l("close")};return ne("keydown",e=>{if(a.isFocusing){if(x.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")$();else if(e.key==="Enter"){const t=S.value.contents[c.value];y(a.query),T(t),n.push(E(t)),f()}}else if(w){if(e.key==="ArrowUp")G();else if(e.key==="ArrowDown")J();else if(e.key==="Enter"){const{index:t}=u;u.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(n.push(p.value[t].link),f())}}}}),M([o,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:Q.value?!x.value:!_.value}],id:"search-pro-results"},Q.value===""?P?_.value?[m?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},d.value.queryHistory),h.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:u.isQuery&&u.index===t}],onClick:()=>{l("updateQuery",e)}},[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:r=>{r.preventDefault(),r.stopPropagation(),R(t)}})]))])):null,w?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},d.value.resultHistory),p.value.map((e,t)=>s(U,{to:e.link,class:["search-pro-result-item",{active:!u.isQuery&&u.index===t}],onClick:()=>{f()}},()=>[s(I,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(r=>C(r)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:O,onClick:r=>{r.preventDefault(),r.stopPropagation(),Y(t)}})]))])):null]:d.value.emptyHistory:d.value.emptyResult:z.value?s(ue,{hint:d.value.searching}):x.value?s("ul",{class:"search-pro-result-list"},k.value.map(({title:e,contents:t},r)=>{const H=o.value===r;return s("li",{class:["search-pro-result-list-item",{active:H}]},[s("div",{class:"search-pro-result-title"},e||d.value.defaultTitle),t.map((i,X)=>{const F=H&&c.value===X;return s(U,{to:E(i),class:["search-pro-result-item",{active:F,"aria-selected":F}],onClick:()=>{y(a.query),T(i),f()}},()=>[i.type==="text"?null:s(i.type==="title"?re:i.type==="heading"?ie:oe,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?s("div",{class:"content-header"},i.header):null,s("div",W(i))])])})])})):d.value.emptyResult)}});export{Se as default};