webpackJsonp([1],{0:function(l,n,u){l.exports=u("cDNt")},cDNt:function(l,n,u){"use strict";function e(l){return y._19(0,[(l()(),y._18(-1,null,["\n        "])),(l()(),y._4(1,0,null,null,0,"canvas",[["class","sprite"],["height","40px"],["width","10px"]],[[8,"id",0]],null,null,null,null)),(l()(),y._18(-1,null,["\n    "]))],null,function(l,n){var u=n.component;l(n,1,0,y._7(1,"",u.spriteName,""))})}function t(l){return y._19(0,[(l()(),y._4(0,0,null,null,1,"app-sprite",[],null,null,null,e,P)),y._2(1,4243456,null,0,k,[],null,null)],null,null)}function i(l){return y._19(0,[(l()(),y._4(0,0,null,null,1,"p",[["class","blurb"]],null,null,null,null,null)),(l()(),y._18(-1,null,["This is a game that needs to be played with Amazon's Alexa."]))],null,null)}function r(l){return y._19(0,[(l()(),y._4(0,0,null,null,1,"p",[["class","blurb"]],null,null,null,null,null)),(l()(),y._18(-1,null,["Your game is active, to see the\n            board, ask Alexa"]))],null,null)}function a(l){return y._19(0,[(l()(),y._4(0,0,null,null,1,"p",[["class","blurb"]],null,null,null,null,null)),(l()(),y._18(-1,null,["Your game has finished! Ask Alexa, to\n            start another game!"]))],null,null)}function s(l){return y._19(0,[(l()(),y._4(0,0,null,null,0,"img",[["class","miss"],["src","../assets/images/miss.png"]],null,null,null,null,null))],null,null)}function o(l){return y._19(0,[(l()(),y._4(0,0,null,null,1,"app-sprite",[["frames","8"],["spriteHeight","40"],["spriteWidth","82"],["src","./assets/images/fire.png"]],null,null,null,e,P)),y._2(1,4243456,null,0,k,[],{frames:[0,"frames"],spriteHeight:[1,"spriteHeight"],src:[2,"src"],spriteName:[3,"spriteName"],spriteWidth:[4,"spriteWidth"]},null)],function(l,n){l(n,1,0,"8","40","./assets/images/fire.png",y._7(2,"alexa-",n.parent.parent.context.index,"-",n.parent.context.index,""),"82")},null)}function c(l){return y._19(0,[(l()(),y._4(0,0,null,null,7,"li",[],null,null,null,null,null)),(l()(),y._18(-1,null,["\n                            "])),(l()(),y.Y(16777216,null,null,1,null,s)),y._2(3,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n                            "])),(l()(),y.Y(16777216,null,null,1,null,o)),y._2(6,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(7,null,["\n                            ","\n                        "]))],function(l,n){l(n,3,0,"X"===n.context.$implicit),l(n,6,0,"B"===n.context.$implicit)},function(l,n){l(n,7,0,n.component.tempBoard[n.parent.context.index][n.context.index].toUpperCase())})}function _(l){return y._19(0,[(l()(),y._4(0,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),y._18(-1,null,["\n                        "])),(l()(),y.Y(16777216,null,null,1,null,c)),y._2(3,802816,null,0,K.d,[y.N,y.K,y.t],{ngForOf:[0,"ngForOf"]},null),(l()(),y._18(-1,null,["\n                    "]))],function(l,n){l(n,3,0,n.context.$implicit)},null)}function p(l){return y._19(0,[(l()(),y._4(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),y._18(-1,null,["\n                "])),(l()(),y._4(2,0,null,null,7,"div",[["class","alexa-board board"]],null,null,null,null,null)),(l()(),y._18(-1,null,["\n                    "])),(l()(),y._4(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),y._18(-1,null,["Alexa"])),(l()(),y._18(-1,null,["\n                    "])),(l()(),y.Y(16777216,null,null,1,null,_)),y._2(8,802816,null,0,K.d,[y.N,y.K,y.t],{ngForOf:[0,"ngForOf"]},null),(l()(),y._18(-1,null,["\n                "])),(l()(),y._18(-1,null,["\n            "]))],function(l,n){l(n,8,0,n.component.alexaBoard)},null)}function f(l){return y._19(0,[(l()(),y._4(0,0,null,null,0,"img",[["class","miss"],["src","../assets/images/miss.png"]],null,null,null,null,null))],null,null)}function d(l){return y._19(0,[(l()(),y._4(0,0,null,null,1,"app-sprite",[["frames","8"],["spriteHeight","40"],["spriteWidth","82"],["src","./assets/images/fire.png"]],null,null,null,e,P)),y._2(1,4243456,null,0,k,[],{frames:[0,"frames"],spriteHeight:[1,"spriteHeight"],src:[2,"src"],spriteName:[3,"spriteName"],spriteWidth:[4,"spriteWidth"]},null)],function(l,n){l(n,1,0,"8","40","./assets/images/fire.png",y._7(2,"user-",n.parent.parent.context.index,"-",n.parent.context.index,""),"82")},null)}function g(l){return y._19(0,[(l()(),y._4(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),y._18(-1,null,["\n                                "])),(l()(),y._4(2,0,null,null,1,"div",[["class","ship"]],null,null,null,null,null)),y._2(3,278528,null,0,K.c,[y.t,y.u,y.k,y.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(l()(),y._18(-1,null,["\n                            "]))],function(l,n){l(n,3,0,"ship",n.component.getShip(n.parent.context.$implicit))},null)}function h(l){return y._19(0,[(l()(),y._4(0,0,null,null,10,"li",[],null,null,null,null,null)),(l()(),y._18(-1,null,["\n                            "])),(l()(),y.Y(16777216,null,null,1,null,f)),y._2(3,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n                            "])),(l()(),y.Y(16777216,null,null,1,null,d)),y._2(6,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n                            "])),(l()(),y.Y(16777216,null,null,1,null,g)),y._2(9,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(10,null,["\n                            ","\n                        "]))],function(l,n){l(n,3,0,"X"===n.context.$implicit),l(n,6,0,"B"===n.context.$implicit),l(n,9,0,2===n.context.$implicit.length)},function(l,n){l(n,10,0,n.component.tempBoard[n.parent.context.index][n.context.index].toUpperCase())})}function m(l){return y._19(0,[(l()(),y._4(0,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),y._18(-1,null,["\n                        "])),(l()(),y.Y(16777216,null,null,1,null,h)),y._2(3,802816,null,0,K.d,[y.N,y.K,y.t],{ngForOf:[0,"ngForOf"]},null),(l()(),y._18(-1,null,["\n                    "]))],function(l,n){l(n,3,0,n.context.$implicit)},null)}function b(l){return y._19(0,[(l()(),y._4(0,0,null,null,10,null,null,null,null,null,null,null)),(l()(),y._18(-1,null,["\n                "])),(l()(),y._4(2,0,null,null,7,"div",[["class","user-board board"]],null,null,null,null,null)),(l()(),y._18(-1,null,["\n                    "])),(l()(),y._4(4,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),y._18(-1,null,["Your Fleet"])),(l()(),y._18(-1,null,["\n                    "])),(l()(),y.Y(16777216,null,null,1,null,m)),y._2(8,802816,null,0,K.d,[y.N,y.K,y.t],{ngForOf:[0,"ngForOf"]},null),(l()(),y._18(-1,null,["\n                "])),(l()(),y._18(-1,null,["\n            "]))],function(l,n){l(n,8,0,n.component.userBoard)},null)}function x(l){return y._19(0,[(l()(),y._4(0,0,null,null,7,"div",[["class","boards"]],null,null,null,null,null)),(l()(),y._18(-1,null,["\n            "])),(l()(),y.Y(16777216,null,null,1,null,p)),y._2(3,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n            "])),(l()(),y.Y(16777216,null,null,1,null,b)),y._2(6,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n        "]))],function(l,n){var u=n.component;l(n,3,0,u.alexaBoard),l(n,6,0,u.userBoard)},null)}function v(l){return y._19(0,[y._16(402653184,1,{audioPlayerRefHit:0}),y._16(402653184,2,{audioPlayerRefMiss:0}),(l()(),y._4(2,0,[[1,0],["audioOptionHit",1]],null,3,"audio",[],null,null,null,null,null)),(l()(),y._18(-1,null,["\n    "])),(l()(),y._4(4,0,null,null,0,"source",[["src","../assets/sound/boom.wav"],["type","audio/wav"]],null,null,null,null,null)),(l()(),y._18(-1,null,["\n"])),(l()(),y._18(-1,null,["\n"])),(l()(),y._4(7,0,[[2,0],["audioOptionMiss",1]],null,3,"audio",[],null,null,null,null,null)),(l()(),y._18(-1,null,["\n    "])),(l()(),y._4(9,0,null,null,0,"source",[["src","../assets/sound/miss.wav"],["type","audio/wav"]],null,null,null,null,null)),(l()(),y._18(-1,null,["\n"])),(l()(),y._18(-1,null,["\n"])),(l()(),y._4(12,0,null,null,16,"div",[["class","map"]],null,null,null,null,null)),(l()(),y._18(-1,null,["\n    "])),(l()(),y._4(14,0,null,null,13,"div",[["class","scroll"]],null,null,null,null,null)),(l()(),y._18(-1,null,["\n        "])),(l()(),y.Y(16777216,null,null,1,null,i)),y._2(17,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n        "])),(l()(),y.Y(16777216,null,null,1,null,r)),y._2(20,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n        "])),(l()(),y.Y(16777216,null,null,1,null,a)),y._2(23,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n        "])),(l()(),y.Y(16777216,null,null,1,null,x)),y._2(26,16384,null,0,K.e,[y.N,y.K],{ngIf:[0,"ngIf"]},null),(l()(),y._18(-1,null,["\n    "])),(l()(),y._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,17,0,!u.channel),l(n,20,0,!u.finished&&u.channel&&!u.alexaBoard&&!u.userBoard),l(n,23,0,u.finished&&u.channel&&!u.alexaBoard&&!u.userBoard),l(n,26,0,u.channel)},null)}function N(l){return y._19(0,[(l()(),y._4(0,0,null,null,1,"app-root",[],null,null,null,v,S)),y._2(1,49152,null,0,B,[O.PubNubAngular],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var y=u("/oeL"),w={production:!0},I=function(){function l(){}return l}(),O=u("RxLh"),B=function(){function l(l){var n=this;this._pubnub=l,this.tempBoard=[["a","b","c","d","e"],["f","g","h","i","j"],["k","l","m","n","o"],["p","q","r","s","t"],["u","v","w","x","y"]],this.channel=this.getUrlParameter("id"),this.channel&&(this.pubnub=l,this.pubnub.init({publishKey:"pub-c-86bc1976-2064-4f3d-a03c-faa9dcb59a07",subscribeKey:"sub-c-5b5c9f7a-e3d9-11e7-ad36-deb77ae39928",uuid:"pirateShipFE"}),this.pubnub.subscribe({channels:[this.channel],triggerEvents:["message"]}),this.pubnub.getMessage(this.channel,function(l){console.log(JSON.parse(l.message)),"hit"===JSON.parse(l.message).data.soundType?n.audioPlayerRefHit.nativeElement.play():"missed"===JSON.parse(l.message).data.soundType&&n.audioPlayerRefMiss.nativeElement.play(),n.userBoard=JSON.parse(l.message).data.userBoard,n.alexaBoard=JSON.parse(l.message).data.alexaBoard,"finished"===JSON.parse(l.message).data.status&&(n.userBoard=null,n.alexaBoard=null,n.finished=!0)}))}return l.prototype.getShip=function(l){var n="";switch(l){case"50":n="five x";break;case"51":n="five y";break;case"40":n="four x";break;case"41":n="four y";break;case"30":n="three x";break;case"31":n="three y";break;case"20":n="two x";break;case"21":n="two y"}return n},l.prototype.getUrlParameter=function(l){return decodeURIComponent(window.location.search.substring(1)).split("&").map(function(l){return l.split("=")}).filter(function(n){return n[0]===l}).reduce(function(l,n,u,e){return n[1]},void 0)},l.ctorParameters=function(){return[{type:O.PubNubAngular}]},l}(),Y=["ul[_ngcontent-%COMP%]{padding:0}li[_ngcontent-%COMP%]{display:inline-block;width:40px}"],k=function(){function l(){this.image=new Image}return l.prototype.ngAfterViewInit=function(){this.image.src=this.src;var l=document.getElementById(this.spriteName);this.context=l.getContext("2d");var n=this.sprite({context:this.context,width:this.spriteWidth,height:this.spriteHeight,image:this.image,numberOfFrames:this.frames,ticksPerFrame:1});this.animateSprite(n)},l.prototype.animateSprite=function(l){var n=this;l.update(),l.render(),setTimeout(function(){n.animateSprite(l)},33)},l.prototype.sprite=function(l){var n={},u=l.ticksPerFrame||0,e=l.numberOfFrames||1,t=0,i=0;return n.context=l.context,n.width=l.width,n.height=l.height,n.image=l.image,n.update=function(){(t+=1)>u&&(t=0,i<e-1?i+=1:i=0)},n.render=function(){n.context.clearRect(0,0,n.width,n.height),n.context.drawImage(n.image,i*n.width/e,0,n.width/e,n.height,0,0,n.width/e,n.height)},n},l.ctorParameters=function(){return[]},l}(),F=[],P=y._1({encapsulation:2,styles:F,data:{}}),K=(y.Z("app-sprite",k,t,{frames:"frames",spriteHeight:"spriteHeight",name:"name",src:"src",spriteName:"spriteName",spriteWidth:"spriteWidth"},{},[]),u("qbdv")),H=[Y],S=y._1({encapsulation:0,styles:H,data:{}}),A=y.Z("app-root",B,N,{},{},[]),W=u("fc+i"),C=y._0(I,[B],function(l){return y._14([y._15(512,y.i,y.W,[[8,[A]],[3,y.i],y.x]),y._15(5120,y.v,y._13,[[3,y.v]]),y._15(4608,K.g,K.f,[y.v]),y._15(4608,y.h,y.h,[]),y._15(5120,y.a,y._5,[]),y._15(5120,y.t,y._11,[]),y._15(5120,y.u,y._12,[]),y._15(4608,W.b,W.s,[K.b]),y._15(6144,y.H,null,[W.b]),y._15(4608,W.e,W.f,[]),y._15(5120,W.c,function(l,n,u,e){return[new W.k(l),new W.o(n),new W.n(u,e)]},[K.b,K.b,K.b,W.e]),y._15(4608,W.d,W.d,[W.c,y.z]),y._15(135680,W.m,W.m,[K.b]),y._15(4608,W.l,W.l,[W.d,W.m]),y._15(6144,y.F,null,[W.l]),y._15(6144,W.p,null,[W.m]),y._15(4608,y.L,y.L,[y.z]),y._15(4608,W.g,W.g,[K.b]),y._15(4608,W.i,W.i,[K.b]),y._15(4608,O.PubNubAngular,O.PubNubAngular,[]),y._15(512,K.a,K.a,[]),y._15(1024,y.l,W.q,[]),y._15(1024,y.b,function(l,n){return[W.r(l,n)]},[[2,W.h],[2,y.y]]),y._15(512,y.c,y.c,[[2,y.b]]),y._15(131584,y._3,y._3,[y.z,y.X,y.r,y.l,y.i,y.c]),y._15(2048,y.e,null,[y._3]),y._15(512,y.d,y.d,[y.e]),y._15(512,W.a,W.a,[[3,W.a]]),y._15(512,I,I,[])])});w.production&&Object(y.R)(),Object(W.j)().bootstrapModuleFactory(C).catch(function(l){return console.log(l)})},gFIY:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="gFIY"}},[0]);