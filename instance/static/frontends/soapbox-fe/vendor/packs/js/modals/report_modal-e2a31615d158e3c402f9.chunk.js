(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{695:function(e,t,a){"use strict";a.r(t);var o,n,i,l=a(0),c=a(2),s=a(6),r=a(1),d=a(3),u=a.n(d),b=a(8),p=a(58),g=a(19),h=a(24),m=a(4),O=a.n(m),j=a(15),v=a.n(j),f=a(34),w=a(9),_=a(32),k=a(29),y=a(232),C=a.n(y),I=a(587),M=a.n(I),N=a(124),S=a(22),x=a(98),R=function(e){function t(){return e.apply(this,arguments)||this}return Object(s.a)(t,e),t.prototype.render=function(){var t,a,e=this.props,o=e.status,n=e.checked,i=e.onToggle,c=e.disabled,s=null;return o.get("reblog")?null:(0<o.get("media_attachments").size&&(o.get("media_attachments").some(function(e){return"unknown"===e.get("type")})||(s="video"===o.getIn(["media_attachments",0,"type"])?(t=o.getIn(["media_attachments",0]),Object(l.a)(x.a,{fetchComponent:S.X,loading:this.renderLoadingVideoPlayer},void 0,function(e){return Object(l.a)(e,{preview:t.get("preview_url"),blurhash:t.get("blurhash"),src:t.get("url"),alt:t.get("description"),aspectRatio:t.getIn(["meta","small","aspect"]),width:239,height:110,inline:!0,sensitive:o.get("sensitive"),onOpenVideo:M.a})})):"audio"===o.getIn(["media_attachments",0,"type"])?(a=o.getIn(["media_attachments",0]),Object(l.a)(x.a,{fetchComponent:S.c,loading:this.renderLoadingAudioPlayer},void 0,function(e){return Object(l.a)(e,{src:a.get("url"),alt:a.get("description"),inline:!0,sensitive:o.get("sensitive"),onOpenAudio:M.a})})):Object(l.a)(x.a,{fetchComponent:S.E,loading:this.renderLoadingMediaGallery},void 0,function(e){return Object(l.a)(e,{media:o.get("media_attachments"),sensitive:o.get("sensitive"),height:110,onOpenMedia:M.a})}))),Object(l.a)("div",{className:"status-check-box"},void 0,Object(l.a)("div",{className:"status-check-box__status"},void 0,Object(l.a)(N.a,{status:o}),s),Object(l.a)("div",{className:"status-check-box-toggle"},void 0,Object(l.a)(C.a,{checked:n,onChange:i,disabled:c}))))},t}(u.a.PureComponent),D=a(5),F=Object(b.connect)(function(e,t){var a=t.id;return{status:e.getIn(["statuses",a]),checked:e.getIn(["reports","new","status_ids"],Object(D.Set)()).includes(a)}},function(t,e){var a=e.id;return{onToggle:function(e){t(Object(p.p)(a,e.target.checked))}}})(R),K=a(13),T=a(54),q=a(23);a.d(t,"default",function(){return B});var A=Object(w.c)({close:{id:"lightbox.close",defaultMessage:"Close"},placeholder:{id:"report.placeholder",defaultMessage:"Additional comments"},submit:{id:"report.submit",defaultMessage:"Submit"}}),B=Object(b.connect)(function(){var a=Object(f.d)();return function(e){var t=e.getIn(["reports","new","account_id"]);return{isSubmitting:e.getIn(["reports","new","isSubmitting"]),account:a(e,t),comment:e.getIn(["reports","new","comment"]),forward:e.getIn(["reports","new","forward"]),block:e.getIn(["reports","new","block"]),statusIds:Object(D.OrderedSet)(e.getIn(["timelines","account:"+t+":with_replies","items"])).union(e.getIn(["reports","new","status_ids"]))}}})(o=Object(_.c)((i=n=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return t=n.call.apply(n,[this].concat(a))||this,Object(r.a)(Object(c.a)(t),"handleCommentChange",function(e){t.props.dispatch(Object(p.k)(e.target.value))}),Object(r.a)(Object(c.a)(t),"handleForwardChange",function(e){t.props.dispatch(Object(p.l)(e.target.checked))}),Object(r.a)(Object(c.a)(t),"handleBlockChange",function(e){t.props.dispatch(Object(p.j)(e.target.checked))}),Object(r.a)(Object(c.a)(t),"handleSubmit",function(){t.props.dispatch(Object(p.o)()),t.props.block&&t.props.dispatch(Object(g.w)(t.props.account.get("id")))}),Object(r.a)(Object(c.a)(t),"handleKeyDown",function(e){13===e.keyCode&&(e.ctrlKey||e.metaKey)&&t.handleSubmit()}),t}Object(s.a)(e,n);var t=e.prototype;return t.componentDidMount=function(){this.props.dispatch(Object(h.t)(this.props.account.get("id"),{withReplies:!0}))},t.componentDidUpdate=function(e){var t=this.props.account;e.account!==t&&t&&this.props.dispatch(Object(h.t)(t.get("id"),{withReplies:!0}))},t.render=function(){var e=this.props,t=e.account,a=e.comment,o=e.intl,n=e.statusIds,i=e.isSubmitting,c=e.forward,s=e.block,r=e.onClose;if(!t)return null;var d=t.get("acct").split("@")[1];return Object(l.a)("div",{className:"modal-root__modal report-modal"},void 0,Object(l.a)("div",{className:"report-modal__target"},void 0,Object(l.a)(q.a,{className:"media-modal__close",title:o.formatMessage(A.close),icon:"times",onClick:r,size:16}),Object(l.a)(k.a,{id:"report.target",defaultMessage:"Reporting {target}",values:{target:Object(l.a)("strong",{},void 0,t.get("acct"))}})),Object(l.a)("div",{className:"report-modal__container"},void 0,Object(l.a)("div",{className:"report-modal__comment"},void 0,Object(l.a)("p",{},void 0,Object(l.a)(k.a,{id:"report.hint",defaultMessage:"The report will be sent to your server moderators. You can provide an explanation of why you are reporting this account below:"})),Object(l.a)("textarea",{className:"setting-text light",placeholder:o.formatMessage(A.placeholder),value:a,onChange:this.handleCommentChange,onKeyDown:this.handleKeyDown,disabled:i,autoFocus:!0}),d&&Object(l.a)("div",{},void 0,Object(l.a)("p",{},void 0,Object(l.a)(k.a,{id:"report.forward_hint",defaultMessage:"The account is from another server. Send a copy of the report there as well?"})),Object(l.a)("div",{className:"setting-toggle"},void 0,Object(l.a)(C.a,{id:"report-forward",checked:c,disabled:i,onChange:this.handleForwardChange}),Object(l.a)("label",{htmlFor:"report-forward",className:"setting-toggle__label"},void 0,Object(l.a)(k.a,{id:"report.forward",defaultMessage:"Forward to {target}",values:{target:d}})))),Object(l.a)("div",{},void 0,Object(l.a)("p",{},void 0,Object(l.a)(k.a,{id:"report.block_hint",defaultMessage:"Do you also want to block this account?"})),Object(l.a)("div",{className:"setting-toggle"},void 0,Object(l.a)(C.a,{id:"report-block",checked:s,disabled:i,onChange:this.handleBlockChange}),Object(l.a)("label",{htmlFor:"report-block",className:"setting-toggle__label"},void 0,Object(l.a)(k.a,{id:"report.block",defaultMessage:"Block {target}",values:{target:t.get("acct")}})))),Object(l.a)(T.a,{disabled:i,text:o.formatMessage(A.submit),onClick:this.handleSubmit})),Object(l.a)("div",{className:"report-modal__statuses"},void 0,Object(l.a)("div",{},void 0,n.map(function(e){return Object(l.a)(F,{id:e,disabled:i},e)})))))},e}(K.a),Object(r.a)(n,"propTypes",{isSubmitting:O.a.bool,account:v.a.map,statusIds:v.a.orderedSet.isRequired,comment:O.a.string.isRequired,forward:O.a.bool,block:O.a.bool,dispatch:O.a.func.isRequired,intl:O.a.object.isRequired}),o=i))||o)||o}}]);
//# sourceMappingURL=report_modal-e2a31615d158e3c402f9.chunk.js.map