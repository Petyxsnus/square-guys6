(this["webpackJsonpcandy-machine-mint"]=this["webpackJsonpcandy-machine-mint"]||[]).push([[0],{108:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return O}));var r=n(9),a=n(1),i=n.n(a),o=n(3),c=n(26),s=n(38),u=n(21),l=n(221),d=n(57),b=new c.d.PublicKey("cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ"),p=new c.d.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"),f=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r){var a,c,s,u,l=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.length>3&&void 0!==l[3]?l[3]:"recent",a=l.length>4&&void 0!==l[4]&&l[4],c=!1,s={slot:0,confirmations:0,err:null},u=0,e.next=7,new Promise(function(){var e=Object(o.a)(i.a.mark((function e(u,l){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){c||(c=!0,console.log("Rejecting for timeout..."),l({timeout:!0}))}),n);case 1:if(c||!a){e.next=7;break}return Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,s=n&&n.value[0],c||(s?s.err?(console.log("REST error for",t,s),c=!0,l(s.err)):s.confirmations?(console.log("REST confirmation for",t,s),c=!0,u(s)):console.log("REST no confirmations for",t,s):console.log("REST null result for",t,s)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=5,v(2e3);case 5:e.next=1;break;case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return s=e.sent,r._signatureSubscriptions[u]&&r.removeSignatureListener(u),c=!0,console.log("Returning status",s),e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),g=function(t,n,r,a){var i=[{pubkey:n,isSigner:!0,isWritable:!0},{pubkey:t,isSigner:!1,isWritable:!0},{pubkey:r,isSigner:!1,isWritable:!1},{pubkey:a,isSigner:!1,isWritable:!1},{pubkey:c.d.SystemProgram.programId,isSigner:!1,isWritable:!1},{pubkey:s.b,isSigner:!1,isWritable:!1},{pubkey:c.d.SYSVAR_RENT_PUBKEY,isSigner:!1,isWritable:!1}];return new c.d.TransactionInstruction({keys:i,programId:d.b,data:e.from([])})},x=function(){var e=Object(o.a)(i.a.mark((function e(t,n,r){var a,o,s,u,l,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new c.b(r,t,{preflightCommitment:"recent"}),e.next=3,c.a.fetchIdl(b,a);case 3:return o=e.sent,s=new c.a(o,b,a),e.next=7,s.account.candyMachine.fetch(n);case 7:return u=e.sent,l=u.data.itemsAvailable.toNumber(),d=u.itemsRedeemed.toNumber(),p=l-d,e.abrupt("return",{id:n,program:s,state:{itemsAvailable:l,itemsRedeemed:d,itemsRemaining:p,isSoldOut:0===p,isActive:u.data.goLiveDate&&u.data.goLiveDate.toNumber()<(new Date).getTime()/1e3&&(!u.endSettings||(u.endSettings.endSettingType.date?u.endSettings.number.toNumber()>(new Date).getTime()/1e3:d<u.endSettings.number.toNumber())),goLiveDate:u.data.goLiveDate,treasury:u.wallet,tokenMint:u.tokenMint,gatekeeper:u.data.gatekeeper,endSettings:u.data.endSettings,whitelistMintSettings:u.data.whitelistMintSettings,hiddenSettings:u.data.hiddenSettings,price:u.data.price}});case 12:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),m=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer(),e.from("edition")],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("metadata"),p.toBuffer(),n.toBuffer()],p);case 2:return t.abrupt("return",t.sent[0]);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.d.PublicKey.findProgramAddress([e.from("candy_machine"),n.toBuffer()],b);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(i.a.mark((function e(t,n,a){var o,b,f,x,O,v,y,w,k,S,T,M,P,E,R,A,K;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.c)(a.publicKey,n);case 2:if(o=e.sent[0],!t.state.tokenMint){e.next=9;break}return e.next=6,Object(d.c)(t.state.tokenMint,n);case 6:e.t0=e.sent[0],e.next=10;break;case 9:e.t0=n;case 10:return b=e.t0,f=t.id,x=[],O=[a],v=[],e.t1=c.d.SystemProgram,e.t2=n,e.t3=a.publicKey,e.t4=s.a.span,e.next=21,t.program.provider.connection.getMinimumBalanceForRentExemption(s.a.span);case 21:if(e.t5=e.sent,e.t6=s.b,e.t7={fromPubkey:e.t2,newAccountPubkey:e.t3,space:e.t4,lamports:e.t5,programId:e.t6},e.t8=e.t1.createAccount.call(e.t1,e.t7),e.t9=s.c.createInitMintInstruction(s.b,a.publicKey,0,n,n),e.t10=g(o,n,n,a.publicKey),e.t11=s.c.createMintToInstruction(s.b,a.publicKey,o,n,[],1),y=[e.t8,e.t9,e.t10,e.t11],!t.state.gatekeeper){e.next=44;break}return e.t12=x,e.next=33,Object(d.e)(n,t.state.gatekeeper.gatekeeperNetwork);case 33:if(e.t13=e.sent[0],e.t14={pubkey:e.t13,isWritable:!0,isSigner:!1},e.t12.push.call(e.t12,e.t14),!t.state.gatekeeper.expireOnUse){e.next=44;break}return x.push({pubkey:d.a,isWritable:!1,isSigner:!1}),e.t15=x,e.next=41,Object(d.d)(t.state.gatekeeper.gatekeeperNetwork);case 41:e.t16=e.sent[0],e.t17={pubkey:e.t16,isWritable:!1,isSigner:!1},e.t15.push.call(e.t15,e.t17);case 44:if(!t.state.whitelistMintSettings){e.next=59;break}return w=new c.d.PublicKey(t.state.whitelistMintSettings.mint),e.next=48,Object(d.c)(w,n);case 48:if(k=e.sent[0],x.push({pubkey:k,isWritable:!0,isSigner:!1}),!t.state.whitelistMintSettings.mode.burnEveryTime){e.next=59;break}return S=c.d.Keypair.generate(),x.push({pubkey:w,isWritable:!0,isSigner:!1}),x.push({pubkey:S.publicKey,isWritable:!1,isSigner:!0}),O.push(S),e.next=57,t.program.provider.connection.getAccountInfo(k);case 57:e.sent&&(y.push(s.c.createApproveInstruction(s.b,k,S.publicKey,n,[],1)),v.push(s.c.createRevokeInstruction(s.b,k,n,[])));case 59:return t.state.tokenMint&&(T=c.d.Keypair.generate(),O.push(T),x.push({pubkey:b,isWritable:!0,isSigner:!1}),x.push({pubkey:T.publicKey,isWritable:!1,isSigner:!0}),y.push(s.c.createApproveInstruction(s.b,b,T.publicKey,n,[],t.state.price.toNumber())),v.push(s.c.createRevokeInstruction(s.b,b,n,[]))),e.next=62,h(a.publicKey);case 62:return M=e.sent,e.next=65,m(a.publicKey);case 65:return P=e.sent,e.next=68,j(f);case 68:return E=e.sent,R=Object(r.a)(E,2),A=R[0],K=R[1],e.t18=y,e.next=75,t.program.instruction.mintNft(K,{accounts:{candyMachine:f,candyMachineCreator:A,payer:n,wallet:t.state.treasury,mint:a.publicKey,metadata:M,masterEdition:P,mintAuthority:n,updateAuthority:n,tokenMetadataProgram:p,tokenProgram:s.b,systemProgram:u.SystemProgram.programId,rent:c.d.SYSVAR_RENT_PUBKEY,clock:c.d.SYSVAR_CLOCK_PUBKEY,recentBlockhashes:c.d.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,instructionSysvarAccount:c.d.SYSVAR_INSTRUCTIONS_PUBKEY},remainingAccounts:x.length>0?x:void 0});case 75:return e.t19=e.sent,e.t18.push.call(e.t18,e.t19),e.prev=77,e.next=80,Object(l.a)(t.program.provider.connection,t.program.provider.wallet,[y,v],[O,[]]);case 80:return e.abrupt("return",e.sent.txs.map((function(e){return e.txid})));case 83:e.prev=83,e.t20=e.catch(77),console.log(e.t20);case 86:return e.abrupt("return",[]);case 87:case"end":return e.stop()}}),e,null,[[77,83]])})));return function(t,n,r){return e.apply(this,arguments)}}(),v=function(e){return new Promise((function(t){return setTimeout(t,e)}))}}).call(this,n(5).Buffer)},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r,a=n(10),i=n(1),o=n.n(i),c=n(3),s=n(21),u=n(95);!function(e){e[e.Sequential=0]="Sequential",e[e.Parallel=1]="Parallel",e[e.StopOnFailure=2]="StopOnFailure"}(r||(r={}));var l=function(){var e=Object(c.a)(o.a.mark((function e(t,n,i,c){var l,d,b,f,g,x,m,h,j,O,v,y,w,k,S=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l=S.length>4&&void 0!==S[4]?S[4]:r.Parallel,d=S.length>5&&void 0!==S[5]?S[5]:"singleGossip",b=S.length>6&&void 0!==S[6]?S[6]:function(e,t){},f=S.length>7&&void 0!==S[7]?S[7]:function(e,t){return!1},g=S.length>8?S[8]:void 0,n.publicKey){e.next=7;break}throw new u.f;case 7:if(x=[],g){e.next=12;break}return e.next=11,t.getRecentBlockhash(d);case 11:g=e.sent;case 12:m=function(e){var t=i[e],r=c[e];if(0===t.length)return"continue";var o=new s.Transaction;t.forEach((function(e){return o.add(e)})),o.recentBlockhash=g.blockhash,o.setSigners.apply(o,[n.publicKey].concat(Object(a.a)(r.map((function(e){return e.publicKey}))))),r.length>0&&o.partialSign.apply(o,Object(a.a)(r)),x.push(o)},h=0;case 14:if(!(h<i.length)){e.next=21;break}if("continue"!==m(h)){e.next=18;break}return e.abrupt("continue",18);case 18:h++,e.next=14;break;case 21:return e.next=23,n.signAllTransactions(x);case 23:j=e.sent,O=[],v={breakEarly:!1,i:0},console.log("Signed txns length",j.length,"vs handed in length",i.length),y=o.a.mark((function e(n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=p({connection:t,signedTransaction:j[n]})).then((function(e){var t=e.txid;e.slot;b(t,n)})).catch((function(e){f(j[n],n),l===r.StopOnFailure&&(v.breakEarly=!0,v.i=n)})),l===r.Parallel){e.next=21;break}return e.prev=3,e.next=6,a;case 6:e.next=19;break;case 8:if(e.prev=8,e.t0=e.catch(3),console.log("Caught failure",e.t0),!v.breakEarly){e.next=19;break}return console.log("Died on ",v.i),e.t1=v.i,e.next=16,Promise.all(O);case 16:return e.t2=e.sent,e.t3={number:e.t1,txs:e.t2},e.abrupt("return",{v:e.t3});case 19:e.next=22;break;case 21:O.push(a);case 22:case"end":return e.stop()}}),e,null,[[3,8]])})),w=0;case 29:if(!(w<j.length)){e.next=37;break}return e.delegateYield(y(w),"t0",31);case 31:if("object"!==typeof(k=e.t0)){e.next=34;break}return e.abrupt("return",k.v);case 34:w++,e.next=29;break;case 37:if(l===r.Parallel){e.next=40;break}return e.next=40,Promise.all(O);case 40:return e.t1=j.length,e.next=43,Promise.all(O);case 43:return e.t2=e.sent,e.abrupt("return",{number:e.t1,txs:e.t2});case 45:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),d=function(){return(new Date).getTime()/1e3},b=3e4;function p(e){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(o.a.mark((function e(t){var n,r,a,i,s,u,l,p,f,x,h,O,v;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.signedTransaction,r=t.connection,a=t.timeout,i=void 0===a?b:a,s=n.serialize(),u=d(),l=0,e.next=6,r.sendRawTransaction(s,{skipPreflight:!0});case 6:return p=e.sent,console.log("Started awaiting confirmation for",p),f=!1,Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f||!(d()-u<i)){e.next=6;break}return r.sendRawTransaction(s,{skipPreflight:!0}),e.next=4,j(500);case 4:e.next=0;break;case 6:case"end":return e.stop()}}),e)})))(),e.prev=10,e.next=13,m(p,i,r,"recent",!0);case 13:if(x=e.sent){e.next=16;break}throw new Error("Timed out awaiting confirmation on transaction");case 16:if(!x.err){e.next=19;break}throw console.error(x.err),new Error("Transaction failed: Custom instruction error");case 19:l=(null===x||void 0===x?void 0:x.slot)||0,e.next=47;break;case 22:if(e.prev=22,e.t0=e.catch(10),console.error("Timeout Error caught",e.t0),!e.t0.timeout){e.next=27;break}throw new Error("Timed out awaiting confirmation on transaction");case 27:return h=null,e.prev=28,e.next=31,g(r,n,"single");case 31:h=e.sent.value,e.next=36;break;case 34:e.prev=34,e.t1=e.catch(28);case 36:if(!h||!h.err){e.next=47;break}if(!h.logs){e.next=46;break}O=h.logs.length-1;case 39:if(!(O>=0)){e.next=46;break}if(!(v=h.logs[O]).startsWith("Program log: ")){e.next=43;break}throw new Error("Transaction failed: "+v.slice("Program log: ".length));case 43:--O,e.next=39;break;case 46:throw new Error(JSON.stringify(h.err));case 47:return e.prev=47,f=!0,e.finish(47);case 50:return console.log("Latency",p,d()-u),e.abrupt("return",{txid:p,slot:l});case 52:case"end":return e.stop()}}),e,null,[[10,22,47,50],[28,34]])})))).apply(this,arguments)}function g(e,t,n){return x.apply(this,arguments)}function x(){return(x=Object(c.a)(o.a.mark((function e(t,n,r){var a,i,c,s,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._recentBlockhash(t._disableBlockhashCaching);case 2:return n.recentBlockhash=e.sent,a=n.serializeMessage(),i=n._serialize(a),c=i.toString("base64"),s=[c,{encoding:"base64",commitment:r}],e.next=10,t._rpcRequest("simulateTransaction",s);case 10:if(!(u=e.sent).error){e.next=13;break}throw new Error("failed to simulate transaction: "+u.error.message);case 13:return e.abrupt("return",u.result);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t,n){return h.apply(this,arguments)}function h(){return(h=Object(c.a)(o.a.mark((function e(t,n,r){var a,i,s,u,l,d=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=d.length>3&&void 0!==d[3]?d[3]:"recent",i=d.length>4&&void 0!==d[4]&&d[4],s=!1,u={slot:0,confirmations:0,err:null},l=0,e.next=7,new Promise(function(){var e=Object(c.a)(o.a.mark((function e(d,b){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:setTimeout((function(){s||(s=!0,console.log("Rejecting for timeout..."),b({timeout:!0}))}),n);try{l=r.onSignature(t,(function(e,t){s=!0,u={err:e.err,slot:t.slot,confirmations:0},e.err?(console.log("Rejected via websocket",e.err),b(u)):(console.log("Resolved via websocket",e),d(u))}),a)}catch(p){s=!0,console.error("WS error in setup",t,p)}case 2:if(s||!i){e.next=8;break}return Object(c.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.getSignatureStatuses([t]);case 3:n=e.sent,u=n&&n.value[0],s||(u?u.err?(console.log("REST error for",t,u),s=!0,b(u.err)):u.confirmations?(console.log("REST confirmation for",t,u),s=!0,d(u)):console.log("REST no confirmations for",t,u):console.log("REST null result for",t,u)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),s||console.log("REST connection error: txid",t,e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),e.next=6,j(2e3);case 6:e.next=2;break;case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());case 7:return u=e.sent,r._signatureSubscriptions[l]&&r.removeSignatureListener(l),s=!0,console.log("Returning status",u),e.abrupt("return",u);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){return new Promise((function(t){return setTimeout(t,e)}))}},242:function(e,t,n){},243:function(e,t){},244:function(e,t){},271:function(e,t){},272:function(e,t){},296:function(e,t,n){},385:function(e,t,n){"use strict";n.r(t);var r,a,i,o,c,s,u,l,d,b,p,f,g,x,m,h,j,O,v,y,w,k=n(4),S=n.n(k),T=n(53),M=n.n(T),P=(n(242),n(228)),E=n(423),R=n(434),A=n(426),K=n(26),N=n(21),B=n(428),L=n(429),I=n(430),C=n(420),_=n(421),W=n(422),D=n(431),U=n(432),G=n(433),Y=n(138),F=(n(296),n(8)),z=n(1),q=n.n(z),V=n(3),H=n(9),J=n(33),Z=n(32),Q=n(215),X=n(417),$=n(85),ee=n(168),te=n(415),ne=n(435),re=n(416),ae=n(424),ie=n(425),oe=n(57),ce=n(413),se=n(414),ue=n(17),le=Object(Z.default)(ce.a)(r||(r=Object(J.a)(["\n  display: block !important;\n  margin: 0 auto !important;\n  background-color: var(--title-text-color) !important;\n  min-width: 120px !important;\n  font-size: 1em !important;\n"]))),de=function(e){var t=e.onMint,n=e.candyMachine,r=e.isMinting,a=e.isEnded,i=e.isActive,o=e.isSoldOut,c=Object($.useGateway)(),s=c.requestGatewayToken,u=c.gatewayStatus,l=Object(k.useState)(!1),d=Object(H.a)(l,2),b=d[0],p=d[1],f=Object(k.useState)(!1),g=Object(H.a)(f,2),x=g[0],m=g[1];return Object(k.useEffect)((function(){m(!1),u===$.GatewayStatus.COLLECTING_USER_INFORMATION&&b?m(!0):u===$.GatewayStatus.ACTIVE&&b&&(console.log("Verified human, now minting..."),t(),p(!1))}),[u,b,p,t]),Object(ue.jsx)(le,{disabled:b||(null===n||void 0===n?void 0:n.state.isSoldOut)||o||r||a||!i||x,onClick:Object(V.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!i||!(null===n||void 0===n?void 0:n.state.gatekeeper)||u===$.GatewayStatus.ACTIVE){e.next=7;break}return console.log("Requesting gateway token"),p(!0),e.next=5,s();case 5:e.next=10;break;case 7:return console.log("Minting..."),e.next=10,t();case 10:case"end":return e.stop()}}),e)}))),variant:"contained",children:n?(null===n||void 0===n?void 0:n.state.isSoldOut)||o?"SOLD OUT":i?x?"VERIFYING...":r||b?Object(ue.jsx)(se.a,{}):"MINT":a?"ENDED":(null===n||void 0===n?void 0:n.state.goLiveDate)?"SOON":"UNAVAILABLE":"CONNECTING..."})},be=n(108),pe="mainnet-beta".toString(),fe=+"333".toString(),ge="SG".toString(),xe=Z.default.div(a||(a=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),me=Z.default.div(i||(i=Object(J.a)(["\n  color: black;\n  width: auto;\n  padding: 5px 5px 5px 16px;\n  min-width: 48px;\n  min-height: auto;\n  border-radius: 22px;\n  background-color: var(--main-text-color);\n  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);\n  box-sizing: border-box;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  font-weight: 500;\n  line-height: 1.75;\n  text-transform: uppercase;\n  border: 0;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  position: relative;\n  align-items: center;\n  user-select: none;\n  vertical-align: middle;\n  justify-content: flex-start;\n  gap: 10px;\n"]))),he=Z.default.ul(o||(o=Object(J.a)(["\n  flex: 0 0 auto;\n  margin: 0;\n  padding: 0;\n"]))),je=Object(Z.default)(Y.b)(c||(c=Object(J.a)(["\n  border-radius: 18px !important;\n  padding: 6px 16px;\n  background-color: #4E44CE;\n  margin: 0 auto;\n"]))),Oe=Object(Z.default)(te.a)(s||(s=Object(J.a)(["\n  min-width: 500px;\n  padding: 5px 20px 20px 20px;\n  flex: 1 1 auto;\n  background-color: var(--card-background-color) !important;\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22) !important;\n"]))),ve=Object(Z.default)(Oe)(u||(u=Object(J.a)(["\n  text-align: left;\n  padding-top: 0px;\n"]))),ye=Object(Z.default)(te.a)(l||(l=Object(J.a)(["\n  display: inline-block;\n  background-color: var(card-background-lighter-color) !important;\n  margin: 5px;\n  min-width: 40px;\n  padding: 24px;\n  h1{\n    margin:0px;\n  }\n"]))),we=Z.default.div(d||(d=Object(J.a)(["\n  button.MuiButton-contained:not(.MuiButton-containedPrimary).Mui-disabled {\n    color: #464646;\n  }\n\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):hover,\n  button.MuiButton-contained:not(.MuiButton-containedPrimary):focus {\n    -webkit-animation: pulse 1s;\n    animation: pulse 1s;\n    box-shadow: 0 0 0 2em rgba(255, 255, 255, 0);\n  }\n\n  @-webkit-keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n\n  @keyframes pulse {\n    0% {\n      box-shadow: 0 0 0 0 #ef8f6e;\n    }\n  }\n"]))),ke=Z.default.div(b||(b=Object(J.a)(["\n  flex: 0 0 auto;\n\n  img {\n    height: 60px;\n  }\n"]))),Se=Z.default.ul(p||(p=Object(J.a)(["\n  list-style: none;\n  display: inline-flex;\n  flex: 1 0 auto;\n\n  li {\n    margin: 0 12px;\n\n    a {\n      color: var(--main-text-color);\n      list-style-image: none;\n      list-style-position: outside;\n      list-style-type: none;\n      outline: none;\n      text-decoration: none;\n      text-size-adjust: 100%;\n      touch-action: manipulation;\n      transition: color 0.3s;\n      padding-bottom: 15px;\n\n      img {\n        max-height: 26px;\n      }\n    }\n\n    a:hover, a:active {\n      color: rgb(131, 146, 161);\n      border-bottom: 4px solid var(--title-text-color);\n    }\n\n  }\n"]))),Te=Z.default.a(f||(f=Object(J.a)(["\n  color: var(--title-text-color);\n  border-bottom: 1px solid var(--title-text-color);\n  font-weight: bold;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: none;\n  outline: none;\n  text-decoration: none;\n  text-size-adjust: 100%;\n\n  :hover {\n    border-bottom: 2px solid var(--title-text-color);\n  }\n"]))),Me=Z.default.div(g||(g=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  margin-right: 4%;\n  margin-left: 4%;\n  text-align: center;\n  justify-content: center;\n"]))),Pe=Z.default.div(x||(x=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 auto;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),Ee=Z.default.div(m||(m=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  gap: 20px;\n"]))),Re=Object(Z.default)(ne.a)(h||(h=Object(J.a)(["\n  position: absolute;\n  margin: 5px;\n  font-weight: bold;\n  font-size: 1.2em !important;\n  font-family: 'Patrick Hand', cursive !important;\n"]))),Ae=Z.default.img(j||(j=Object(J.a)(["\n  height: 400px;\n  width: auto;\n  border-radius: 7px;\n  box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.5);\n"]))),Ke=Object(Z.default)(re.a)(O||(O=Object(J.a)(["\n  margin: 20px;\n  height: 10px !important;\n  border-radius: 30px;\n  border: 2px solid white;\n  box-shadow: 5px 5px 40px 5px rgba(0,0,0,0.5);\n  background-color:var(--main-text-color) !important;\n  \n  > div.MuiLinearProgress-barColorPrimary{\n    background-color:var(--title-text-color) !important;\n  }\n\n  > div.MuiLinearProgress-bar1Determinate {\n    border-radius: 30px !important;\n    background-image: linear-gradient(270deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.5));\n  }\n"]))),Ne=Z.default.h1(v||(v=Object(J.a)(["\n  margin: 20px auto;\n  text-transform: uppercase;\n  animation: glow 2s ease-in-out infinite alternate;\n  color: var(--main-text-color);\n  @keyframes glow {\n    from {\n      text-shadow: 0 0 20px var(--main-text-color);\n    }\n    to {\n      text-shadow: 0 0 30px var(--title-text-color), 0 0 10px var(--title-text-color);\n    }\n  }\n"]))),Be=Z.default.h2(y||(y=Object(J.a)(["\n  color: var(--title-text-color);\n"]))),Le=Z.default.div(w||(w=Object(J.a)(["\n  display: flex;\n  align-items: center;\n\n  img {\n    max-height: 35px;\n    margin-right: 10px;\n  }\n"]))),Ie=function(e){var t,n,r,a,i=Object(k.useState)(),o=Object(H.a)(i,2),c=o[0],s=o[1],u=Object(k.useState)(!1),l=Object(H.a)(u,2),d=l[0],b=l[1],p=Object(k.useState)(!1),f=Object(H.a)(p,2),g=f[0],x=f[1],m=Object(k.useState)(""),h=Object(H.a)(m,2),j=h[0],O=h[1],v=Object(k.useState)(0),y=Object(H.a)(v,2),w=y[0],S=y[1],T=Object(k.useState)(0),M=Object(H.a)(T,2),P=M[0],E=M[1],R=Object(k.useState)(0),A=Object(H.a)(R,2),B=A[0],L=A[1],I=Object(k.useState)(!1),C=Object(H.a)(I,2),_=C[0],W=C[1],D=Object(k.useState)(!1),U=Object(H.a)(D,2),G=U[0],Y=U[1],z=Object(k.useState)(0),J=Object(H.a)(z,2),Z=J[0],te=J[1],ne=Object(k.useState)("SOL"),re=Object(H.a)(ne,2),ce=re[0],se=re[1],le=Object(k.useState)(0),Ie=Object(H.a)(le,2),Ce=Ie[0],_e=Ie[1],We=Object(k.useState)(!1),De=Object(H.a)(We,2),Ue=De[0],Ge=De[1],Ye=Object(k.useState)(!1),Fe=Object(H.a)(Ye,2),ze=Fe[0],qe=Fe[1],Ve=Object(k.useState)(0),He=Object(H.a)(Ve,2),Je=He[0],Ze=He[1],Qe=Object(k.useState)(!1),Xe=Object(H.a)(Qe,2),$e=Xe[0],et=Xe[1],tt=Object(k.useState)(),nt=Object(H.a)(tt,2),rt=nt[0],at=nt[1],it=Object(k.useState)(!1),ot=Object(H.a)(it,2),ct=ot[0],st=ot[1],ut=Object(k.useState)(!1),lt=Object(H.a)(ut,2),dt=lt[0],bt=lt[1],pt=Object(k.useState)({open:!1,message:"",severity:void 0}),ft=Object(H.a)(pt,2),gt=ft[0],xt=ft[1],mt=Object(X.a)(),ht=Object(k.useState)(),jt=Object(H.a)(ht,2),Ot=jt[0],vt=jt[1],yt=e.rpcHost;function wt(e){var t=B-1;if(L(t),W(0===t),ze&&Je&&Je>0){var n=Je-1;Ze(n),x(ct&&!$e&&n>0)}E(P+1);!G&&c&&c>0&&s(c-(Ue?Ce:Z)-.012),O("devnet"===pe||"testnet"===pe?"https://solscan.io/token/"+e+"?cluster="+pe:"https://solscan.io/token/"+e),Object(Q.a)({particleCount:400,spread:70,origin:{y:.6}})}var kt=function(){var t=Object(V.a)(q.a.mark((function t(){var n,r,a,i,o;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,b(!0),!(mt&&(null===Ot||void 0===Ot?void 0:Ot.program)&&mt.publicKey)){t.next=13;break}return r=K.d.Keypair.generate(),t.next=6,Object(be.d)(Ot,mt.publicKey,r);case 6:if(a=t.sent[0],i={err:!0},!a){t.next=12;break}return t.next=11,Object(be.b)(a,e.txTimeout,e.connection,"singleGossip",!0);case 11:i=t.sent;case 12:(null===(n=i)||void 0===n?void 0:n.err)?xt({open:!0,message:"Mint failed! Please try again!",severity:"error"}):(xt({open:!0,message:"Congratulations! Mint succeeded!",severity:"success"}),wt(r.publicKey));case 13:t.next=20;break;case 15:t.prev=15,t.t0=t.catch(0),o=t.t0.msg||"Minting failed! Please try again!",t.t0.msg?311===t.t0.code?o="SOLD OUT!":312===t.t0.code&&(o="Minting period hasn't started yet."):t.t0.message?t.t0.message.indexOf("0x138")||(t.t0.message.indexOf("0x137")?o="SOLD OUT!":t.t0.message.indexOf("0x135")&&(o="Insufficient funds to mint. Please fund your wallet.")):o="Transaction Timeout! Please try again.",xt({open:!0,message:o,severity:"error"});case 20:return t.prev=20,b(!1),t.finish(20);case 23:case"end":return t.stop()}}),t,null,[[0,15,20,23]])})));return function(){return t.apply(this,arguments)}}();return Object(k.useEffect)((function(){Object(V.a)(q.a.mark((function t(){var n;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!mt){t.next=5;break}return t.next=3,e.connection.getBalance(mt.publicKey);case 3:n=t.sent,s(n/N.LAMPORTS_PER_SOL);case 5:case"end":return t.stop()}}),t)})))()}),[mt,e.connection]),Object(k.useEffect)((function(){Object(V.a)(q.a.mark((function t(){var n,r,a,i,o,c,s,u,l,d;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(mt){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,Object(be.c)(mt,e.candyMachineId,e.connection);case 4:if(a=t.sent,vt(a),S(a.state.itemsAvailable),L(a.state.itemsRemaining),E(a.state.itemsRedeemed),i=1,fe&&(i=+("1"+new Array(fe).join("0").slice()+"0")),a.state.tokenMint?(Y(!0),se(ge),te(a.state.price.toNumber()/i),_e(a.state.price.toNumber()/i)):(te(a.state.price.toNumber()/N.LAMPORTS_PER_SOL),_e(a.state.price.toNumber()/N.LAMPORTS_PER_SOL)),!a.state.whitelistMintSettings){t.next=38;break}return Ge(!0),qe(a.state.whitelistMintSettings.mode.burnEveryTime),st(a.state.whitelistMintSettings.presale),bt(!ct&&null===a.state.whitelistMintSettings.discountPrice),null!==a.state.whitelistMintSettings.discountPrice&&a.state.whitelistMintSettings.discountPrice!==a.state.price&&(a.state.tokenMint?_e((null===(o=a.state.whitelistMintSettings.discountPrice)||void 0===o?void 0:o.toNumber())/i):_e((null===(c=a.state.whitelistMintSettings.discountPrice)||void 0===c?void 0:c.toNumber())/N.LAMPORTS_PER_SOL)),s=0,t.prev=19,t.t0=e.connection,t.next=23,Object(oe.c)(a.state.whitelistMintSettings.mint,mt.publicKey);case 23:return t.t1=t.sent[0],t.next=26,t.t0.getTokenAccountBalance.call(t.t0,t.t1);case 26:l=t.sent,s=(null===l||void 0===l||null===(u=l.value)||void 0===u?void 0:u.uiAmount)||0,t.next=34;break;case 30:t.prev=30,t.t2=t.catch(19),console.error(t.t2),s=0;case 34:Ze(s),x(ct&&!$e&&s>0),t.next=39;break;case 38:Ge(!1);case 39:(null===a||void 0===a||null===(n=a.state.endSettings)||void 0===n?void 0:n.endSettingType.date)&&(at(Object(oe.f)(a.state.endSettings.number)),a.state.endSettings.number.toNumber()<(new Date).getTime()/1e3&&(et(!0),x(!1))),(null===a||void 0===a||null===(r=a.state.endSettings)||void 0===r?void 0:r.endSettingType.amount)?(d=Math.min(a.state.endSettings.number.toNumber(),a.state.itemsAvailable),S(d),a.state.itemsRedeemed<d?L(d-a.state.itemsRedeemed):(L(0),a.state.isSoldOut=!0,et(!0))):L(a.state.itemsRemaining),a.state.isSoldOut&&x(!1);case 42:case"end":return t.stop()}}),t,null,[[19,30]])})))()}),[mt,e.candyMachineId,e.connection,$e,ct]),Object(ue.jsxs)("main",{children:[Object(ue.jsxs)(Me,{children:[Object(ue.jsxs)(xe,{children:[Object(ue.jsx)(ke,{children:Object(ue.jsx)("a",{href:"http://localhost:3000/",target:"_blank",rel:"noopener noreferrer",children:Object(ue.jsx)("img",{alt:"",src:"logo sg.png"})})}),Object(ue.jsxs)(Se,{children:[Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{href:"https://discord.gg/zd2jkYjb ",target:"_blank",rel:"noopener noreferrer",children:" Discord"})}),Object(ue.jsx)("li",{children:Object(ue.jsx)("a",{href:" https://twitter.com/squareguysNFT?s=20&t=tpKG6RNJWqj21a75uAzUkw ",target:"_blank",rel:"noopener noreferrer",children:" Twitter"})})]}),Object(ue.jsx)(he,{children:mt?Object(ue.jsxs)(me,{children:[(c||0).toLocaleString()," SOL",Object(ue.jsx)(je,{})]}):Object(ue.jsx)(je,{children:"Connect Wallet"})})]}),Object(ue.jsx)(Ne,{children:"SQUARE GUYS!"}),Object(ue.jsx)("br",{}),Object(ue.jsxs)(Pe,{children:[Object(ue.jsx)(Ee,{children:Object(ue.jsxs)(Oe,{elevation:3,children:[Object(ue.jsx)("h2",{children:"LEGENDARY GUYS"}),Object(ue.jsx)("br",{}),Object(ue.jsxs)("div",{children:[Object(ue.jsx)(Re,{label:g&&Ue&&Je>0?Ce+" "+ce:"".concat(Z," ").concat(ce)}),Object(ue.jsx)(Ae,{src:"sg gif.gif",alt:"NFT To Mint"})]}),Object(ue.jsx)("br",{}),mt&&g&&Ue&&Je>0&&ze&&Object(ue.jsxs)("h3",{children:["You own ",Je," WL mint ",Je>1?"tokens":"token","."]}),mt&&g&&Ue&&Je>0&&!ze&&Object(ue.jsx)("h3",{children:"You are whitelisted and allowed to mint."}),mt&&g&&rt&&Date.now()<rt.getTime()&&Object(ue.jsx)(ee.a,{date:Object(oe.f)(null===Ot||void 0===Ot||null===(t=Ot.state)||void 0===t||null===(n=t.endSettings)||void 0===n?void 0:n.number),onMount:function(e){return e.completed&&et(!0)},onComplete:function(){et(!0)},renderer:function(e){var t=e.days,n=e.hours,r="";return t>0&&(r+=t+" days "),n>0&&(r+=n+" hours "),r+=e.minutes+1+" minutes left to MINT.",Object(ue.jsx)("div",{children:Object(ue.jsx)("h3",{children:r})})}}),mt&&g&&Object(ue.jsxs)("h3",{children:["TOTAL MINTED : ",P," / ",w]}),mt&&g&&Object(ue.jsx)(Ke,{variant:"determinate",value:100-100*B/w}),Object(ue.jsx)("br",{}),Object(ue.jsx)(we,{children:g||$e||!(null===Ot||void 0===Ot?void 0:Ot.state.goLiveDate)||dt&&!(Je>0)?mt?!dt||Je>0?(null===Ot||void 0===Ot?void 0:Ot.state.gatekeeper)&&mt.publicKey&&mt.signTransaction?Object(ue.jsx)($.GatewayProvider,{wallet:{publicKey:mt.publicKey||new N.PublicKey(be.a),signTransaction:mt.signTransaction},gatekeeperNetwork:null===Ot||void 0===Ot||null===(r=Ot.state)||void 0===r||null===(a=r.gatekeeper)||void 0===a?void 0:a.gatekeeperNetwork,clusterUrl:yt,options:{autoShowModal:!1},children:Object(ue.jsx)(de,{candyMachine:Ot,isMinting:d,isActive:g,isEnded:$e,isSoldOut:_,onMint:kt})}):Object(ue.jsx)(de,{candyMachine:Ot,isMinting:d,isActive:g,isEnded:$e,isSoldOut:_,onMint:kt}):Object(ue.jsx)("h1",{children:"Mint is private."}):Object(ue.jsx)(je,{children:"Connect Wallet"}):Object(ue.jsx)(ee.a,{date:Object(oe.f)(null===Ot||void 0===Ot?void 0:Ot.state.goLiveDate),onMount:function(e){return e.completed&&x(!$e)},onComplete:function(){x(!$e)},renderer:function(e){var t=e.days,n=e.hours,r=e.minutes,a=e.seconds;return Object(ue.jsxs)("div",{children:[Object(ue.jsxs)(ye,{elevation:1,children:[Object(ue.jsx)("h1",{children:t}),"Days"]}),Object(ue.jsxs)(ye,{elevation:1,children:[Object(ue.jsx)("h1",{children:n}),"Hours"]}),Object(ue.jsxs)(ye,{elevation:1,children:[Object(ue.jsx)("h1",{children:r}),"Mins"]}),Object(ue.jsxs)(ye,{elevation:1,children:[Object(ue.jsx)("h1",{children:a}),"Secs"]})]})}})}),Object(ue.jsx)("br",{}),mt&&g&&j&&Object(ue.jsx)(Te,{href:j,target:"_blank",children:"View on Solscan"})]})}),Object(ue.jsx)(Ee,{children:Object(ue.jsxs)(ve,{elevation:2,children:[Object(ue.jsxs)(Le,{children:[Object(ue.jsx)("img",{src:"logo sg.png",alt:""}),Object(ue.jsx)(Be,{children:"History of Square Guys"})]}),Object(ue.jsx)("p",{children:"Imagine a project where customers decide everything. This is a unique project!Our team was regular NFT buyers.We spent all day looking for the perfect project to buy, but never found it. Our team couldn't find an analogy to our project. We figured out what to do! We need to create a project that is 100% community driven (by voting in our discord) You can own our collection! By buying our NFT you are buying the right to vote! "}),Object(ue.jsx)("p",{children:"Let's say the community is interested in something. The task of our team is to vote and fulfill the wishes of our holders. You decide everything! This way, the owners can decide what the future of the project will be! We are your employees, and you decide what to do. That's not all, the owners will have their own Collection! Choose everything! Also, the profits from your collection will go to your wallet!"}),Object(ue.jsx)("p",{children:"Friendly and cohesive team always succeeds!!"})]})})]})]}),Object(ue.jsx)(ae.a,{open:gt.open,autoHideDuration:6e3,onClose:function(){return xt(Object(F.a)(Object(F.a)({},gt),{},{open:!1}))},children:Object(ue.jsx)(ie.a,{onClose:function(){return xt(Object(F.a)(Object(F.a)({},gt),{},{open:!1}))},severity:gt.severity,children:gt.message})})]})};n(354);var Ce=new K.d.PublicKey("AUwtxnvGnamrwM692QUeDKeZXs8AcfM1qhrqgf5WpHX2"),_e="mainnet-beta",We="https://api.mainnet-beta.solana.com",De=new K.d.Connection(We),Ue=Object(P.a)({palette:{type:"dark"},overrides:{MuiButtonBase:{root:{justifyContent:"flex-start"}},MuiButton:{root:{textTransform:void 0,padding:"12px 16px"},startIcon:{marginRight:8},endIcon:{marginLeft:8}}}}),Ge=function(){var e=Object(k.useMemo)((function(){return Object(N.clusterApiUrl)(_e)}),[]),t=Object(k.useMemo)((function(){return[Object(B.a)(),Object(L.a)(),Object(I.a)(),Object(C.a)(),Object(_.a)({network:_e}),Object(W.a)({network:_e}),Object(D.a)(),Object(U.a)(),Object(G.a)()]}),[]);return Object(ue.jsx)(E.a,{theme:Ue,children:Object(ue.jsx)(R.a,{endpoint:e,children:Object(ue.jsx)(A.a,{wallets:t,autoConnect:!0,children:Object(ue.jsx)(Y.a,{children:Object(ue.jsx)(Ie,{candyMachineId:Ce,connection:De,txTimeout:3e4,rpcHost:We})})})})})},Ye=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,436)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),i(e),o(e)}))};M.a.render(Object(ue.jsx)(S.a.StrictMode,{children:Object(ue.jsx)(Ge,{})}),document.getElementById("root")),Ye()},57:function(e,t,n){"use strict";(function(e){n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p}));var r=n(1),a=n.n(r),i=n(3),o=n(26),c=n(38),s=(n(21),function(e){if(e)return new Date(1e3*e.toNumber())}),u=(new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2}),new o.d.PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL")),l=new o.d.PublicKey("gatem74V238djXdzWnJf94Wo1DcnuGkfijbf3AuBhfs"),d=function(){var e=Object(i.a)(a.a.mark((function e(t,n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),c.b.toBuffer(),t.toBuffer()],u);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("expire")],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.PublicKey.findProgramAddress([n.toBuffer(),e.from("gateway"),e.from([0,0,0,0,0,0,0,0]),r.toBuffer()],l);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}).call(this,n(5).Buffer)}},[[385,1,2]]]);
//# sourceMappingURL=main.7fd48a4f.chunk.js.map