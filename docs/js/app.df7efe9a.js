(function(){"use strict";var e={4649:function(e,t,a){var n=a(144),s=a(3726),o=a(3066),r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(s.Z,[t(o.Z,[t("M19Component")],1)],1)},i=[],c=a(1621),l=a(9280),u=a(3381),m=a(3816),p=a(5255),f=a(3235),d=a(3182),w=a(268),b=a(9088),v=a(3328),h=a(2335),g=a(5439),N=a(344),y=a(5536),_=a(9007),x=a(2379),Z=a(4773),k=a(6056),B=a(9536),S=function(){var e=this,t=e._self._c;return t("div",{staticClass:"d-flex flex-column align-center my-2 overflow-hidden",staticStyle:{width:"100%"},on:{click:e.clickArea}},[t(k.Z,{staticClass:"d-flex flex-column align-center overflow-auto",staticStyle:{width:"100%"},model:{value:e.onboarding,callback:function(t){e.onboarding=t},expression:"onboarding"}},e._l(Object.values(e.circleList),(function(a){return t(B.Z,{key:a.spaceNumber,staticStyle:{width:"100%"}},[t(m.Z,{staticStyle:{width:"100%"}},[t(p.EB,{staticClass:"primary white--text"},[t(b.Z,{staticClass:"mr-3",attrs:{color:"white"}},[e._v("mdi-tea")]),e._v(e._s(a.spaceNumber)+" "+e._s(a.owner)+" ")],1),e._l(a.tweets,(function(a){return t(p.ZB,{key:a,staticStyle:{display:"flex","flex-direction":"column",width:"100%"}},[t("Tweet",{staticStyle:{"max-width":"100%"},attrs:{id:a,cards:"visible",conversation:"all",lang:"ja",theme:"light",align:"left",dnt:!1},on:{"tweet-load-error":e.onTweetLoadError,"tweet-load-success":e.onTweetLoadSuccess},scopedSlots:e._u([{key:"loading",fn:function(){return[t("span",[e._v("Loading...")])]},proxy:!0},{key:"error",fn:function(){return[t("span",[e._v("Sorry, that tweet doesn’t exist!")])]},proxy:!0}],null,!0)})],1)}))],2)],1)})),1),t(w.Z,{staticStyle:{width:"100%",height:"40%","margin-bottom":"0px"},attrs:{color:"white",transition:"dialog-bottom-transition"},model:{value:e.dialogMemo,callback:function(t){e.dialogMemo=t},expression:"dialogMemo"}},[t(Z.Z,{attrs:{dense:"",color:"green"}},[t("span",{staticStyle:{color:"white"}},[t(b.Z,{staticClass:"mx-4"},[e._v("mdi-note")]),e._v("MEMO")],1)]),t(x.Z,{staticStyle:{height:"100%",background:"white"},attrs:{outlined:"","hide-details":!0}})],1),t(l.Z,{model:{value:e.dialogTable,callback:function(t){e.dialogTable=t},expression:"dialogTable"}},[t(g.Z,{staticClass:"pb-4 print-area"},[t(Z.Z,{attrs:{dense:"",color:"green"}},[t("span",{staticStyle:{color:"white"}},[t(b.Z,{staticClass:"mx-4",attrs:{dark:""}},[e._v("mdi-table")]),e._v("List")],1),t(y.Z),t(b.Z,{staticClass:"mx-4",on:{click:function(t){return e.printData()}}},[e._v("mdi-printer")])],1),t(d.Z,{attrs:{headers:e.headers,items:e.items,"show-select":!0,"item-key":"space","hide-default-footer":""},on:{"item-selected":e.itemSelected},scopedSlots:e._u([{key:"item",fn:function({item:a,isSelected:n,select:s}){return[t("tr",{on:{dblclick:function(t){e.editMode=!e.editMode}}},[t("td",[t(N.Z,{attrs:{value:n},on:{input:function(e){return s(e)}}})],1),t("td",[e._v(e._s(a.space))]),t("td",[e._v(e._s(a.name))]),t("td",[e.editMode?e._e():t("span",[e._v(e._s(a.number))]),e.editMode?t(_.Z,{model:{value:a.number,callback:function(t){e.$set(a,"number",t)},expression:"item.number"}}):e._e()],1),t("td",[e.editMode?e._e():t("span",[e._v(e._s(a.price))]),e.editMode?t(_.Z,{model:{value:a.price,callback:function(t){e.$set(a,"price",t)},expression:"item.price"}}):e._e()],1),t("td",[e.editMode?e._e():t("span",[e._v(e._s(a.memo))]),e.editMode?t(_.Z,{model:{value:a.memo,callback:function(t){e.$set(a,"memo",t)},expression:"item.memo"}}):e._e()],1)])]}}])}),t(h.Z,{attrs:{dense:""}},[t(y.Z),e._v(" 合計："+e._s(e.sumOfAll)+"円 （ 1000円札："+e._s(e.countOf1000)+"枚、 500円玉："+e._s(e.countOf500)+"枚、 100円玉："+e._s(e.countOf100)+"枚 ） "),t(y.Z)],1)],1)],1),t("draggable",{staticClass:"div",attrs:{noTransitionOnDrag:!0,tag:"div"},on:{end:function(t){return e.endDrag(t)}}},[t(v.Z,{attrs:{"position-x":e.x,"position-y":e.y,"close-on-content-click":!1,attach:""},model:{value:e.dialogEdit,callback:function(t){e.dialogEdit=t},expression:"dialogEdit"}},[t(m.Z,{staticStyle:{width:"300px"}},[t(p.EB,{staticClass:"purple lighten-4 purple--text",staticStyle:{height:"40px",padding:"2px 16px"}},[e._v(e._s(e.dialogTitle))]),t(p.ZB,[t(f.Z,{attrs:{dense:"",label:"冊数",items:[1,2,3,4,5,6,7,8,9,10]},model:{value:e.number,callback:function(t){e.number=t},expression:"number"}}),t(f.Z,{attrs:{dense:"",label:"値段",items:[100,200,300,400,500,600,700,800,900,1e3,1100,1200,1300,1400,1500,1600,1700,1800,1900,2e3]},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}}),t(_.Z,{attrs:{dense:"",label:"メモ"},model:{value:e.memo,callback:function(t){e.memo=t},expression:"memo"}})],1),t(p.h7,[t(y.Z),t(u.Z,{on:{click:function(t){e.dialogEdit=!1}}},[e._v("キャンセル")]),t(u.Z,{on:{click:function(t){return e.clickSave()}}},[e._v("保存")])],1)],1)],1)],1),t(c.Z,{staticStyle:{position:"fixed"},attrs:{color:"primary"}},[t(u.Z,{staticStyle:{height:"56px"},on:{click:e.prev}},[t(b.Z,[e._v("mdi-chevron-left")])],1),t(u.Z,{staticStyle:{height:"56px"},nativeOn:{click:function(t){return t.stopPropagation(),e.clickFav(e.circle,t)}}},[e._v(" Favorite "),t(b.Z,{attrs:{color:"pink"}},[e._v("mdi-heart")])],1),t(u.Z,{staticStyle:{height:"56px"},nativeOn:{click:function(t){return t.stopPropagation(),e.clickShop(e.circle,t)}}},[e._v(" Buy "),t(b.Z,{attrs:{color:"blue"}},[e._v("mdi-shopping")])],1),t(u.Z,{staticStyle:{height:"56px"},nativeOn:{click:function(t){return t.stopPropagation(),e.clickShop(e.circle,t)}}},[e._v(" Map "),t(b.Z,{attrs:{color:"green"}},[e._v("mdi-map")])],1),t(u.Z,{staticStyle:{height:"56px"},nativeOn:{click:function(t){t.stopPropagation(),e.dialogTable=!0}}},[e._v(" List "),t(b.Z,{attrs:{color:"green"}},[e._v("mdi-table")])],1),t(u.Z,{staticStyle:{height:"56px"},on:{click:e.next}},[t(b.Z,[e._v("mdi-chevron-right")])],1)],1)],1)},O=[],M=(a(7658),a(9394)),E=JSON.parse('[{"spaceNumber":"A19,20","owner":"ちびメタ","fav":false,"tweets":["1605810975055175687","1601192175085453312","1601487431697850369"],"doublespace":true},{"spaceNumber":"A17,18","owner":"OSUSHI","fav":false,"tweets":["1601165817567391744"],"doublespace":true},{"spaceNumber":"A15,16","owner":"赤味噌","fav":false,"tweets":["1604382595713708032"],"doublespace":true},{"spaceNumber":"A14","owner":"ポッケにコペポーダ","fav":false,"tweets":["1602957713742319616"]},{"spaceNumber":"A13","owner":"lubi","fav":false,"tweets":["1605691563320885248"]},{"spaceNumber":"A12","owner":"杏奈月","fav":false,"tweets":[""]},{"spaceNumber":"A11","owner":"松永","fav":false,"tweets":["1597954808094556162",""]},{"spaceNumber":"A10","owner":"さるぞう","fav":false,"tweets":["1605192184277655553"]},{"spaceNumber":"A09","owner":"カラス","fav":false,"tweets":[""]},{"spaceNumber":"A08","owner":"ホタテ","fav":false,"tweets":["1605177462303834112"]},{"spaceNumber":"A07","owner":"豆粉","fav":false,"tweets":["1601207763740200961","1600112953209913344"]},{"spaceNumber":"A06","owner":"にほ","fav":false,"tweets":[""]},{"spaceNumber":"A05","owner":"カヌエ～","fav":false,"tweets":[""]},{"spaceNumber":"A04","owner":"しぇり","fav":false,"tweets":["1605562390372044803"]},{"spaceNumber":"A03","owner":"クオ","fav":false,"tweets":[""]},{"spaceNumber":"A02","owner":"寺山","fav":false,"tweets":["1601160039750045696"]},{"spaceNumber":"A01","owner":"25時","fav":false,"tweets":["1605920452823715841"]},{"spaceNumber":"B24","owner":"かぼす","fav":false,"tweets":["1606280122218201088","1606786679653924864"]},{"spaceNumber":"B23","owner":"白菜マヨコ","fav":false,"tweets":["1605192713879838720"]},{"spaceNumber":"B22","owner":"べりこ","fav":false,"tweets":["1604793840648728583","1601499583124713472"]},{"spaceNumber":"B21","owner":"りょふ・えつは","fav":false,"tweets":["1605510974898937858","1605881131949125632"]},{"spaceNumber":"B20","owner":"冬木","fav":false,"tweets":[""]},{"spaceNumber":"B19","owner":"ししまるるな","fav":false,"tweets":[""]},{"spaceNumber":"B18","owner":"しわ","fav":false,"tweets":["1605233950045065218"]},{"spaceNumber":"B17","owner":"ムラサキ","fav":false,"tweets":["1605201320725843968","1601547364204163075"]},{"spaceNumber":"B16","owner":"よび","fav":false,"tweets":["1605156458382782464","1600449898629197824","1600449898629197824"]},{"spaceNumber":"B15","owner":"こごっち","fav":false,"tweets":["1593683187414495233"]},{"spaceNumber":"B14","owner":"れもん","fav":false,"tweets":["1604035360367214592","1601194758164340738"]},{"spaceNumber":"B13","owner":"高菜","fav":false,"tweets":[""]},{"spaceNumber":"B12","owner":"minico・なち","fav":false,"tweets":["1605879925285834752","1601795291900182529","1593683187414495233"]},{"spaceNumber":"B11","owner":"泉美晴","fav":false,"tweets":[""]},{"spaceNumber":"B10","owner":"そら","fav":false,"tweets":[""]},{"spaceNumber":"B09","owner":"うに田うに味","fav":false,"tweets":[""]},{"spaceNumber":"B08","owner":"ミンミキ","fav":false,"tweets":[""]},{"spaceNumber":"B07","owner":"松本悠里","fav":false,"tweets":[""]},{"spaceNumber":"B06","owner":"みやび","fav":false,"tweets":["1605922847959949313","1598091949793513475"]},{"spaceNumber":"B05","owner":"無味無臭","fav":false,"tweets":[""]},{"spaceNumber":"B04","owner":"みずきち","fav":false,"tweets":[""]},{"spaceNumber":"B03","owner":"ふじあおい","fav":false,"tweets":["1605597473258340353","1595764223082385409"]},{"spaceNumber":"B02","owner":"らぼ","fav":false,"tweets":[""]},{"spaceNumber":"B01","owner":"実姫","fav":false,"tweets":["1605210056920035329"]},{"spaceNumber":"B25","owner":"成間","tweets":["1605153828307111936"]},{"spaceNumber":"B26","owner":"おかだ","tweets":["1601551282271322114"]},{"spaceNumber":"B27","owner":"いずみん","tweets":[""]},{"spaceNumber":"B28","owner":"すぎぎ","tweets":[""]},{"spaceNumber":"B29","owner":"たぴ丘","tweets":[""]},{"spaceNumber":"B30","owner":"えと","tweets":[""]},{"spaceNumber":"B31","owner":"蓮井","tweets":[""]},{"spaceNumber":"B32","owner":"よばち","tweets":["1605515843940388865","1600996924324483072"]},{"spaceNumber":"B33","owner":"フユ","tweets":["1605216542840348672","1597553594970275841"]},{"spaceNumber":"B34","owner":"空蝉","tweets":[""]},{"spaceNumber":"B35","owner":"悠里","tweets":[""]},{"spaceNumber":"B36","owner":"nina","tweets":["1605524556881350656"]},{"spaceNumber":"B37","owner":"ぴえー","tweets":[""]},{"spaceNumber":"a01","owner":"えすこ","tweets":[""]},{"spaceNumber":"a02","owner":"yaylovers","tweets":["1605196732002103299"]},{"spaceNumber":"a03","owner":"かんな","tweets":[""]},{"spaceNumber":"a04","owner":"きっちょ","tweets":["1605917784008888323","1599747944743571457"]},{"spaceNumber":"a05","owner":"はらまき","tweets":["1596155611355676673"]},{"spaceNumber":"a06","owner":"mar","tweets":[""]},{"spaceNumber":"a07","owner":"ミシン","tweets":[""]},{"spaceNumber":"a08","owner":"Haon","tweets":[""]},{"spaceNumber":"a09","owner":"こーぺん・イロハ","tweets":["1604110131587092480","1601134961092067333","1600061353158672384"]},{"spaceNumber":"a10","owner":"奈央","tweets":["1605141803132297216"]},{"spaceNumber":"a11","owner":"kotori","tweets":[""]},{"spaceNumber":"a12","owner":"ミナネコ","tweets":[""]}]'),A=a(9980),T=a.n(A),C={components:{Tweet:M.tP,draggable:T()},name:"MainMenu",props:{msg:String},data(){return{mini:!0,defaultColor:"white",dialogEdit:!1,dialogMemo:!1,dialogTable:!1,overlay:!1,editMode:!1,headers:[{text:"場所",value:"space",width:"150px"},{text:"名前",value:"name",width:"150px"},{text:"冊数",value:"number",width:"150px"},{text:"値段",value:"price",width:"150px"},{text:"備考",value:"memo",width:"150px"}],x:0,y:0,selectedItem:null,dialogTitle:"",number:"",price:"",memo:"",circleList:E,tweetList:[],tweetId:"",items:[],countOf1000:0,countOf500:0,countOf100:0,sumOfAll:0,onboarding:0}},mounted:function(){console.log("debug"),this.dialogEdit=!1},methods:{clickLeftBtn:function(){this.mini=!this.mini},clickEdit:function(){this.overlay=!0},clickFav(e,t){console.log(t),e.fav=!e.fav},clickShop(e,t){console.log(t),this.dialogEdit=!this.dialogEdit,this.dialogEdit?(this.x=t.clientX,this.y=t.clientY,this.dialogTitle=e.owner,this.selectedItem=e):this.items=this.items.filter((t=>t.space!==e.spaceNumber))},clickArea(e){"v-overlay__scrim"===e.srcElement.className&&(this.dialogEdit=!1,console.log("close"))},clickSave(){this.items.push({space:this.selectedItem.spaceNumber,name:this.selectedItem.owner,number:this.number,price:this.price,memo:this.memo,editPrice:!1}),this.dialogEdit=!1,this.number="",this.price="",this.memo="",console.log("close")},endDrag(e){console.log(e),this.x=e.originalEvent.clientX,this.y=e.originalEvent.clientY},itemSelected(){},printData(){var e=document.getElementsByClassName("print-area");console.log(e);var t=document.body.getElementsByClassName("v-application");console.log(t);var a=document.body.innerHTML;document.body.getElementsByClassName("v-application").innerHTML=e.innerHTML,window.print(),document.body.innerHTML=a},onTweetLoadError(){},onTweetLoadSuccess(){},next(){this.onboarding=this.onboarding+1===this.length?0:this.onboarding+1},prev(){this.onboarding=this.onboarding-1<0?this.length-1:this.onboarding-1}},watch:{items:{deep:!0,handler:function(e){this.countOf1000=0,this.countOf500=0,this.countOf100=0,this.sumOfAll=0,e.forEach((e=>{this.sumOfAll+=Number(e.price);let t=Number(e.price);t/1e3>=1&&(this.countOf1000+=Math.floor(t/1e3),t%=1e3),t/500>=1&&(this.countOf500+=Math.floor(t/500),t%=500),t/100>=1&&(this.countOf100+=Math.floor(t/100),t%=100),0!=t&&console.log("ERROR")}))}}}},L=C,P=a(1001),j=(0,P.Z)(L,S,O,!1,null,"0d279bcc",null),H=j.exports,I=n.ZP.extend({name:"App",components:{M19Component:H},data:()=>({})}),D=I,F=(0,P.Z)(D,r,i,!1,null,null,null),$=F.exports,R=a(8986);n.ZP.use(R.Z);var X=new R.Z({theme:{themes:{light:{primary:"#9c27b0",secondary:"#8bc34a",accent:"#03a9f4",error:"#f44336",warning:"#ff9800",info:"#607d8b",success:"#4caf50"}}}});n.ZP.config.productionTip=!1,new n.ZP({vuetify:X,render:e=>e($)}).$mount("#app")}},t={};function a(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,s,o){if(!n){var r=1/0;for(u=0;u<e.length;u++){n=e[u][0],s=e[u][1],o=e[u][2];for(var i=!0,c=0;c<n.length;c++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,o<r&&(r=o));if(i){e.splice(u--,1);var l=s();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,s,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,r=n[0],i=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(s in i)a.o(i,s)&&(a.m[s]=i[s]);if(c)var u=c(a)}for(t&&t(n);l<r.length;l++)o=r[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},n=self["webpackChunkm_app"]=self["webpackChunkm_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(4649)}));n=a.O(n)})();
//# sourceMappingURL=app.df7efe9a.js.map