(this["webpackJsonpordinary-sausearch"]=this["webpackJsonpordinary-sausearch"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n,i,r,s=a(0),c=a.n(s),l=a(12),o=(a(88),a(89),a(15)),u=a(52),d=a(31),f=a(42),j=a(41),b=a(61),h=a(66),p=(i=0,r=5,function(e){return Math.min(r,Math.max(i,parseInt(e)))}),O="filters/update-query",g="filters/update-min-sausages",x="filters/update-max-sausages",m="filters/update-min-ruffalos",v="filters/update-max-ruffalos",w="filters/update-sausage-disqualified",y="filters/update-will-it-blow-disqualified",S="filters/update-missing-will-it-blow-disqualified",C="filters/reset",k=(n={},Object(o.a)(n,O,{field:"query",defaultValue:""}),Object(o.a)(n,g,{field:"minSausages",converter:p,defaultValue:0}),Object(o.a)(n,x,{field:"maxSausages",converter:p,defaultValue:5}),Object(o.a)(n,m,{field:"minRuffalos",converter:p,defaultValue:0}),Object(o.a)(n,v,{field:"maxRuffalos",converter:p,defaultValue:5}),Object(o.a)(n,w,{field:"includeSausageDisqualified",converter:Boolean,defaultValue:!0}),Object(o.a)(n,y,{field:"includeWillItBlowDisqualified",converter:Boolean,defaultValue:!0}),Object(o.a)(n,S,{field:"includeMissingWillItBlow",converter:Boolean,defaultValue:!0}),n),I=function(e){return function(t){return{type:e,value:t}}},q=I(O),R=I(g),B=I(x),L=I(m),M=I(v),P=I(w),W=I(y),D=I(S),N={type:C},V=Object.fromEntries(Object.values(k).map((function(e){return[e.field,e.defaultValue]}))),F=function(){for(var e=b.parse(window.location.search),t=Object(f.a)(Object(f.a)({},V),e),a=0,n=Object.values(k);a<n.length;a++){var i=n[a];i.converter&&(t[i.field]=i.converter(t[i.field]))}return t}();var A="dataset/load";var T=Object(j.combineReducers)({filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type;if(a===C)return V;var n=k[a];return n?Object(f.a)(Object(f.a)({},e),{},Object(o.a)({},n.field,(n.converter||function(e){return e})(t.value))):e},dataset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loaded:!1,values:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loaded:!0,values:t.value};default:return e}}}),E=Object(j.createStore)(T,Object(h.composeWithDevTools)(Object(j.applyMiddleware)((function(e){return function(t){return function(a){var n=t(a),i=new URLSearchParams(b.stringify(e.getState().filters));return window.history.pushState({},document.title,"".concat(window.location.pathname,"?").concat(i)),n}}}))));fetch("/Ordinary-Sausearch/dataset.json").then((function(e){return e.json()})).then((function(e){return E.dispatch({type:A,value:e})}));var U=function(e){return e.filters},J=function(e){return e.dataset.values.filter((function(t){return t.name.toLowerCase().includes(e.filters.query.toLowerCase())})).filter((function(t){return t.tags&&t.tags.includes("sausage-disqualified")?e.filters.includeSausageDisqualified:t.sausages>=e.filters.minSausages&&t.sausages<=e.filters.maxSausages})).filter((function(t){return t.tags&&t.tags.includes("will-it-blow-disqualified")?e.filters.includeWillItBlowDisqualified:!(!e.filters.includeMissingWillItBlow||t.ruffalos)||t.ruffalos>=e.filters.minRuffalos&&t.ruffalos<=e.filters.maxRuffalos}))},z=a(183),G=a(171),H=a(166),K=a(167),Q=a(168),Z=a(161),_=a(72),X=a(188),Y=a(69),$=a.n(Y),ee=a(68),te=a.n(ee),ae=a(172),ne=a(185),ie=a(70),re=a.n(ie),se=a(187),ce=a(170),le=a(169),oe=a(173),ue=a(174),de=a(189),fe=a(67),je=a.n(fe),be=a(186),he=a(5);function pe(e){var t=e.renderButtonChildren,a=e.renderPopupChildren,n=Object(s.useState)(!1),i=Object(u.a)(n,2),r=i[0],c=i[1],l=function(){c(!1)};return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Z.a,{"aria-label":"delete",color:"inherit",onClick:function(){c(!0)},children:t()}),Object(he.jsx)(se.a,{open:r,onClose:l,"aria-labelledby":"draggable-dialog-title",children:a(l)})]})}function Oe(){var e=Object(s.useState)(!1),t=Object(u.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){n(!!window.navigator.share)}),[]);var i=Object(s.useState)(!1),r=Object(u.a)(i,2),c=r[0],l=r[1];return Object(he.jsxs)(Z.a,{"aria-label":"delete",color:"inherit",onClick:function(){var e=window.location.href;a?navigator.share({title:"WebShare API Demo",url:e}).catch(console.error):(console.log(e),je()(e),l(!0))},children:[Object(he.jsx)(te.a,{}),Object(he.jsx)(be.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:c,autoHideDuration:4e3,onClose:function(){return l(!1)},message:"URL copied to your clipboard"})]})}var ge=Object(H.a)((function(e){return{logo:{border:"2px solid #20202050"},grow:{flexGrow:1},title:Object(o.a)({paddingLeft:"1em",display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:{position:"relative",borderRadius:e.shape.borderRadContainer},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(o.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),padding:{height:"calc(56px + ".concat(e.spacing(2),"px)")},filterBox:{padding:"20px"}}}));function xe(){var e=ge(),t=Object(d.c)(U),a=Object(d.b)(),n=function(e,t){return function(a){return t(a.target[e])}},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"value";return n(t,(function(t){return a(e(t))}))},r=function(e){return i(e,"checked")};return Object(he.jsxs)("div",{className:e.grow,children:[Object(he.jsx)("div",{className:e.padding}),Object(he.jsx)(K.a,{position:"fixed",children:Object(he.jsxs)(Q.a,{children:[Object(he.jsx)(de.a,{className:e.logo,alt:"Ordinary Sausage logo",src:"https://yt3.ggpht.com/ytc/AAUvwniLLTfPjaagIQs2TsRr4kKZAM7suk5na8_qrB2B=s176-c-k-c0x00ffffff-no-rj"}),Object(he.jsx)(_.a,{className:e.title,variant:"h6",noWrap:!0,children:"Ordinary Sausearch"}),Object(he.jsxs)("div",{className:e.search,children:[Object(he.jsx)("div",{className:e.searchIcon,children:Object(he.jsx)($.a,{})}),Object(he.jsx)(X.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"},value:t.query,onChange:i(q)})]}),Object(he.jsx)(pe,{renderButtonChildren:function(){return Object(he.jsx)(re.a,{})},renderPopupChildren:function(n){return Object(he.jsxs)("div",{classes:e.filterBox,children:[Object(he.jsx)(le.a,{children:"Advanced filters"}),Object(he.jsx)(ce.a,{children:Object(he.jsxs)(G.a,{column:!0,children:[Object(he.jsx)(z.a,{label:"Min sausage score",type:"number",InputLabelProps:{shrink:!0},value:t.minSausages,onChange:i(R)}),Object(he.jsx)(z.a,{label:"Max sausage score",type:"number",InputLabelProps:{shrink:!0},value:t.maxSausages,onChange:i(B)}),Object(he.jsx)(z.a,{label:"Min Ruffalos score",type:"number",InputLabelProps:{shrink:!0},value:t.minRuffalos,onChange:i(L)}),Object(he.jsx)(z.a,{label:"Max Ruffalos score",type:"number",InputLabelProps:{shrink:!0},value:t.maxRuffalos,onChange:i(M)}),Object(he.jsx)(ae.a,{control:Object(he.jsx)(ne.a,{checked:t.includeSausageDisqualified,onChange:r(P),color:"primary"}),label:"Show disqualified sausages"}),Object(he.jsx)(ae.a,{control:Object(he.jsx)(ne.a,{checked:t.includeWillItBlowDisqualified,onChange:r(W),color:"primary"}),label:"Show disqualified 'Will it blow?'"}),Object(he.jsx)(ae.a,{control:Object(he.jsx)(ne.a,{checked:t.includeMissingWillItBlow,onChange:r(D),color:"primary"}),label:"Show missing 'Will it blow?'"})]})}),Object(he.jsxs)(oe.a,{children:[Object(he.jsx)(ue.a,{onClick:function(){a(N),n()},color:"primary",children:"Reset"}),Object(he.jsx)(ue.a,{onClick:n,color:"primary",children:"Close"})]})]})}}),Object(he.jsx)("div",{className:e.grow}),Object(he.jsx)(Oe,{})]})})]})}var me=a(176),ve=a(180),we=a(179),ye=a(175),Se=a(177),Ce=a(178),ke=a(112),Ie=Object(H.a)({table:{minWidth:650}});function qe(){var e=Object(d.c)(J),t=Ie();return Object(he.jsx)(ye.a,{component:ke.a,children:Object(he.jsxs)(me.a,{className:t.table,"aria-label":"simple table",children:[Object(he.jsx)(Se.a,{children:Object(he.jsxs)(Ce.a,{children:[Object(he.jsx)(we.a,{children:"Name"}),Object(he.jsx)(we.a,{align:"right",children:"Sausages"}),Object(he.jsx)(we.a,{align:"right",children:"Ruffalos"})]})}),Object(he.jsx)(ve.a,{children:e.map((function(e){return Object(he.jsxs)(Ce.a,{children:[Object(he.jsx)(we.a,{component:"th",scope:"row",children:e.name}),Object(he.jsx)(we.a,{align:"right",children:e.sausages}),Object(he.jsx)(we.a,{align:"right",children:e.ruffalos})]},e.name)}))})]})})}var Re=a(181),Be=a(182);var Le=function(){return Object(he.jsxs)(he.Fragment,{children:[Object(he.jsx)(Re.a,{}),Object(he.jsx)(xe,{}),Object(he.jsx)(Be.a,{children:Object(he.jsx)(qe,{})})]})},Me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,190)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};Object(l.render)(Object(he.jsx)(c.a.StrictMode,{children:Object(he.jsx)(d.a,{store:E,children:Object(he.jsx)(Le,{})})}),document.getElementById("root")),Me()},88:function(e,t,a){},89:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.a7b1553e.chunk.js.map