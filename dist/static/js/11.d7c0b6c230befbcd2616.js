webpackJsonp([11],{"+VPr":function(t,e,i){"use strict";function s(t){i("YJgt")}var n=i("ab2Y"),a=i("xxYK"),o=i("XyMi"),r=s,c=Object(o.a)(n.a,a.a,a.b,!1,r,null,null);e.a=c.exports},"4VHr":function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"dateTime.vue",sourceRoot:""}])},BO1k:function(t,e,i){t.exports={default:i("fxRn"),__esModule:!0}},EFRT:function(t,e,i){var s=i("qsgV");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("rjj0").default;n("058a24ee",s,!0,{})},F40l:function(t,e,i){"use strict";function s(t){i("uUhL")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("p5Ed"),a=i("uDuN"),o=i("XyMi"),r=s,c=Object(o.a)(n.a,a.a,a.b,!1,r,null,null);e.default=c.exports},"H+kO":function(t,e,i){"use strict";var s=i("mvHQ"),n=i.n(s),a=i("BO1k"),o=i.n(a);e.a={data:function(){return{categoryList:[],gbgoodsId:"",secondCategoryList:[],isUserEnter:!1,isOftenBuy:!1}},methods:{addActiveStatus:function(t){var e=1;e=this.isUserEnter?0:1;for(var i in t)t[i].isActive=i==e;return t},menuClick:function(t,e){this.productList=[],t.isActive||(t.isActive=!0);var i=!0,s=!1,n=void 0;try{for(var a,r=o()(this.categoryList);!(i=(a=r.next()).done);i=!0){var c=a.value;t.id!=c.id&&(c.isActive=!1)}}catch(t){s=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(s)throw n}}if("oftenbuy"==t.id)this.secondCategoryList=[],this.isOftenBuy=!0,this.gbgoodsId="",this.getProductList();else if(this.isOftenBuy=!1,t.childList&&!e){this.secondCategoryList=t.childList,this.secondCategoryList[0].isActive=!0;for(var l in this.secondCategoryList)0!=l&&this.secondCategoryList[l].isActive&&(this.secondCategoryList[l].isActive=!1);this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()}else this.secondCategoryList=[],this.gbgoodsId=t.gbgoodsId,this.getProductList()},getCategoryList:function(){this.getCategoryListSaveLocal()},getCategoryListSaveLocal:function(){var t=this;this.postRequest("category/childList",{parentCategoryId:"top",orderField:"t.f_id",filteEnabled:1,filteDeleted:1}).then(function(e){e&&e.data&&0==e.data.state&&(e.data.aaData.unshift({name:"常买",id:"oftenbuy"}),t.categoryList=t.addActiveStatus(e.data.aaData),t.getSonCategoryList(t.categoryList),localStorage.setItem("categoryList",n()(t.categoryList)))})},getSonCategoryList:function(t){for(var e in t)if(t[e].childList)for(var i in t[e].childList)t[e].childList[i].isActive=0==i;this.isOftenBuy?this.getProductList():t.length>0&&t[1].childList?(this.secondCategoryList=t[1].childList,this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()):(this.secondCategoryList=[],t.length>0&&(this.gbgoodsId=t[1].gbgoodsId,this.getProductList()))}}}},QPnh:function(t,e,i){"use strict";function s(t){i("gfff")}var n=i("q6Tx"),a=i("oA3p"),o=i("XyMi"),r=s,c=Object(o.a)(n.a,a.a,a.b,!1,r,null,null);e.a=c.exports},R1qe:function(t,e,i){"use strict";var s=i("vsZy");e.a={mixins:[s.a],data:function(){return{value:"",dateArr:[],timeArr:[],show:!1,currentDate:"",currentTime:""}},methods:{render:function(){console.log("render"),console.log(this.endTime),console.log(this.value)},init:function(){this.initLeftDate(),this.initRightTime()},setValue:function(){var t=this.currentDate+" "+this.currentTime;this.$emit("pickerConfirm",t),this.close()},initLeftDate:function(){var t=-1,e=this.isTody,i=this.period;0==e&&(t=0);for(var s=t;s<i;s++){var n={value:this.GetDateStr(s).date};this.value.split(" ")[0]==this.GetDateStr(s).date?n.isActive=!0:n.isActive=!1,this.dateArr.push(n)}this.currentDate=this.value.split(" ")[0]},changeLeftDate:function(t){for(var e in this.dateArr)this.dateArr[e].isActive=!1;t.isActive||(t.isActive=!0),this.currentDate=t.value},changeRightTime:function(t){for(var e in this.timeArr)this.timeArr[e].isActive=!1;t.isActive||(t.isActive=!0),this.currentTime=t.value},initRightTime:function(){for(var t=this.startTime;t<this.endTime;){var e=void 0,i=t+1,s=void 0,n=void 0;s=t<10?"0"+t+":00":t+":00",n=i<10?"0"+i+":00":i+":00",e=s+"~"+n,t+=1;var a={value:e};e==this.value.split(" ")[1]?a.isActive=!0:a.isActive=!1,this.timeArr.push(a)}this.currentTime=this.value.split(" ")[1]},open:function(){this.show=!0},close:function(){this.show=!1}},created:function(){this.init()},mounted:function(){this.$nextTick(this.render())},beforeDestroy:function(){console.log("beforeDestroy")}}},YJgt:function(t,e,i){var s=i("4VHr");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("rjj0").default;n("61772e69",s,!0,{})},ab2Y:function(t,e,i){"use strict";var s=i("7+uW"),n=(i("vsZy"),i("wqIg"));e.a={name:"yd-datetime",data:function(){return{picker:null,currentValue:this.value,tmpNum:0}},props:{value:{type:String,default:""},placeholder:String,startTime:{default:0},endTime:{default:24},period:{default:5},isTody:{default:0}},methods:{open:function(){this.picker.open()},close:function(){this.picker.close()},removeElement:function(){this.picker&&this.picker.$el&&document.body.removeChild(this.picker.$el)},render:function(){var t=this;this.removeElement();var e=s.default.extend(n.a),i=this._props;this.picker=new e({el:document.createElement("div"),data:i}),document.body.appendChild(this.picker.$el),this.picker.$on("pickerConfirm",function(e){t.currentValue=e,t.$emit("input",e),t.callback&&t.callback(e)})}},mounted:function(){this.render()},beforeDestroy:function(){this.removeElement()}}},aqVB:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"#ChoiceOfPayment .group{background:#fff;padding:.3rem;margin-bottom:.2rem}#ChoiceOfPayment .group h1{font-size:.3rem}#ChoiceOfPayment .group .btns{padding:.25rem 0 0}#ChoiceOfPayment .group .btns .yd-badge{margin-right:.2rem}#ChoiceOfPayment .group .updatedate{margin-top:.25rem}#ChoiceOfPayment .group .updatedate img{margin-left:.1rem}#ChoiceOfPayment .okbtn{width:4rem;height:.8rem;position:absolute;bottom:1rem;left:50%;margin-left:-2rem}#ChoiceOfPayment #selectDateTime .popup-top{width:100%;font-size:.3rem;background:#efeff3;padding:.2rem}#ChoiceOfPayment #selectDateTime .yd-scrolltab{top:.8rem}#ChoiceOfPayment #selectDateTime .yd-scrolltab .yd-scrolltab-content{padding:0}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content{height:100%}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content ul::-webkit-scrollbar{display:none}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left{width:4rem;height:100%;background:#efeff3}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left ul{height:100%;overflow-y:auto}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left ul li{padding:.2rem 0}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left ul li.active{background:#fff}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right{height:100%;width:100%}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul{height:100%;overflow-y:auto;padding:0 0 0 .2rem}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul li{border-bottom:1px solid #ddd;padding:.2rem 0;padding-right:.2rem}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul li img{opacity:0}#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul li.active img{opacity:1}","",{version:3,sources:["D:/Web/银川电子结算/过程/应用软件/微信端/quickBuy/src/views/order/ChoiceOfPayment.vue"],names:[],mappings:"AACA,wBACE,gBAAiB,AACjB,cAAgB,AAChB,mBAAsB,CACvB,AACD,2BACI,eAAkB,CACrB,AACD,8BACI,kBAAqB,CACxB,AACD,wCAEM,kBAAqB,CAC1B,AACD,oCACI,iBAAoB,CACvB,AACD,wCACM,iBAAoB,CACzB,AACD,wBACE,WAAY,AACZ,aAAe,AACf,kBAAmB,AACnB,YAAa,AACb,SAAU,AACV,iBAAmB,CACpB,AACD,4CACE,WAAY,AACZ,gBAAkB,AAClB,mBAAoB,AACpB,aAAgB,CACjB,AACD,+CACE,SAAY,CACb,AACD,qEACI,SAAW,CACd,AACD,8DACI,WAAa,CAChB,AACD,oFACM,YAAc,CACnB,AACD,oEACM,WAAY,AACZ,YAAa,AACb,kBAAoB,CACzB,AACD,uEACQ,YAAa,AACb,eAAiB,CACxB,AACD,0EACU,eAAkB,CAC3B,AACD,iFACU,eAAiB,CAC1B,AACD,qEACM,YAAa,AACb,UAAY,CACjB,AACD,wEACQ,YAAa,AACb,gBAAiB,AACjB,mBAAsB,CAC7B,AACD,2EACU,6BAA8B,AAC9B,gBAAkB,AAClB,mBAAsB,CAC/B,AACD,+EACY,SAAW,CACtB,AACD,sFACU,SAAW,CACpB",file:"ChoiceOfPayment.vue",sourcesContent:["\n#ChoiceOfPayment .group {\n  background: #fff;\n  padding: 0.3rem;\n  margin-bottom: 0.2rem;\n}\n#ChoiceOfPayment .group h1 {\n    font-size: 0.3rem;\n}\n#ChoiceOfPayment .group .btns {\n    padding: 0.25rem 0 0;\n}\n#ChoiceOfPayment .group .btns .yd-badge {\n      /*padding: 4px 8px;*/\n      margin-right: 0.2rem;\n}\n#ChoiceOfPayment .group .updatedate {\n    margin-top: 0.25rem;\n}\n#ChoiceOfPayment .group .updatedate img {\n      margin-left: 0.1rem;\n}\n#ChoiceOfPayment .okbtn {\n  width: 4rem;\n  height: 0.8rem;\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  margin-left: -2rem;\n}\n#ChoiceOfPayment #selectDateTime .popup-top {\n  width: 100%;\n  font-size: 0.3rem;\n  background: #EFEFF3;\n  padding: 0.2rem;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab {\n  top: 0.8rem;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .yd-scrolltab-content {\n    padding: 0;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content {\n    height: 100%;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content ul::-webkit-scrollbar {\n      display: none;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left {\n      width: 4rem;\n      height: 100%;\n      background: #EFEFF3;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left ul {\n        height: 100%;\n        overflow-y: auto;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left ul li {\n          padding: 0.2rem 0;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .left ul li.active {\n          background: #fff;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right {\n      height: 100%;\n      width: 100%;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul {\n        height: 100%;\n        overflow-y: auto;\n        padding: 0 0 0 0.2rem;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul li {\n          border-bottom: 1px solid #ddd;\n          padding: 0.2rem 0;\n          padding-right: 0.2rem;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul li img {\n            opacity: 0;\n}\n#ChoiceOfPayment #selectDateTime .yd-scrolltab .popup-content .right ul li.active img {\n          opacity: 1;\n}\n"],sourceRoot:""}])},bpPI:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAACCUlEQVQ4T43US4vTUBQH8P9JoqAIIuPoiKMDgw4+8IELNy78BG4FN2KTDk2iTVQENwpd6EaxnabNtJ1mkvGBqAsXPvAxNp/Khai5R+5tFXWmSe8255fknPxPqFarGTMHpxJB2Qe3dP05JjzUTZoRmCwAGUBXbLP6bBJLYdI4rbO+DmC3wgzTtrwnRZhkQXf10SmiLesMTEvMjLJjeWt5WEF5eknrhGAeEDDNzAIaLTolLx6H/0BZsLLWPi6EGADYC0AQuFIx/Wgz/A9Urx0HxwBIPCMxC7hO2ev9jzdAWRD2w6O6kQ3A2KcwcM0xvc7feFOoeu61jrAhUhBJzIK56lp++BuPharnx+0FkWUpQPtH2HctvyWv5ULVc9I8DKYUwOwQ46ZreUuFUPUc1Q/pmiHxAYnBfGsiGPSD2a0aBiAsyBsx+EEhbEftOV3LUgLNjwZzzza9u7lwOW7M69BTBuZGT7rjmP793OEMJ6pSpIZCjNsVy3uY+zlUehhfQCoADME37LLfzA3Acn/ppKZrcs32jEvNhlftxY0zAvpnAqaGu0kV26qu5oa8EwVnScdHMHYB+MnEplPyn+auVSdqnSON3wPYCeAHC77slP0XuYu8EgfnM8Y7IuwA+HuW0aWri97rwl9HNw7eALgA4BsIF+2S97YIqeHUX9W3bf9qvGRQ6JjVT5MgWfMLfVbMoBCXpuUAAAAASUVORK5CYII="},fYxN:function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s);e.a={data:function(){return{carIds:[],ShippingcarList:[],alreadyChosenGoods:[],orderTotal:0}},methods:{createShippingcar:function(t,e){var i,s=this,a={buyerId:this.userInfo.typeCode,productId:t.productId,productName:t.productName,skuId:t.id,skuName:t.name,quantity:t.quantity,comment:t.remark,sellerId:this.sellerId};t.skuId&&(a.skuId=t.skuId),t.skuName&&(a.skuName=t.skuName);var o=[],r=!0,c=!1,l=void 0;try{for(var d,u=n()(this.carIds);!(r=(d=u.next()).done);r=!0){var p=d.value;o.push(p.skuId)}}catch(t){c=!0,l=t}finally{try{!r&&u.return&&u.return()}finally{if(c)throw l}}if(this.isInArray(o,a.skuId)){i=0==t.quantity?"shippingcar/delete":"shippingcar/update";for(var A in this.carIds)this.carIds[A].skuId!=t.id&&this.carIds[A].skuId!=t.skuId||(a.id=this.carIds[A].carId);this.postRequest(i,a).then(function(t){t.data&&0==t.data.state&&s.getShippingcarList()})}else i="shippingcar/create",this.postRequest(i,a).then(function(e){if(e.data&&0==e.data.state){var i={skuId:t.id||t.skuId,carId:e.data.aaData.id};s.carIds.push(i),s.getShippingcarList()}})},getShippingcarList:function(){var t=this;this.postRequest("shippingcar/queryGrouplist",{buyerId:this.userInfo.typeCode,sellerId:this.sellerId}).then(function(e){if(e.data&&0==e.data.state){t.ShippingcarList=e.data.aaData;var i=[];t.alreadyChosenGoods=[];for(var s in e.data.aaData){t.sellerId==s&&(t.alreadyChosenGoods=e.data.aaData[s]);var a=!0,o=!1,r=void 0;try{for(var c,l=n()(e.data.aaData[s]);!(a=(c=l.next()).done);a=!0){var d=c.value,u={skuId:d.skuId,carId:d.id};i.push(u)}}catch(t){o=!0,r=t}finally{try{!a&&l.return&&l.return()}finally{if(o)throw r}}}t.carIds=i,t.orderTotal=t.getOrderTotal(t.alreadyChosenGoods).priceTotal}})},getOrderTotal:function(t){var e=0,i=0;for(var s in t)i+=t[s].quantity,t[s].promotionPrice>0&&t[s].promotionBasePrice>0?e+=t[s].quantity*(100*t[s].promotionPrice):e+=t[s].quantity*(100*t[s].price);return{priceTotal:(e/100).toFixed(2),quantityTotal:(i-0).toFixed(2)}},isInArray:function(t,e){for(var i=0;i<t.length;i++)if(t[i]==e)return!0;return!1},countVisits:function(){this.postRequest("store/countVisits",{sellerId:this.sellerId}).then(function(t){t.data&&t.data.state})}}}},fxRn:function(t,e,i){i("+tPU"),i("zQR9"),t.exports=i("g8Ux")},g8Ux:function(t,e,i){var s=i("77Pl"),n=i("3fs2");t.exports=i("FeBl").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return s(e.call(t))}},gfff:function(t,e,i){var s=i("plpw");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("rjj0").default;n("0a5dfc2e",s,!0,{})},oA3p:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"selectDateTime"}},[s("div",{staticClass:"popup-top flex flex-x-between"},[s("span"),t._v(" "),s("strong",[t._v("送达时间")]),t._v(" "),s("span",{on:{click:t.resultstr}},[t._v("确定")])]),t._v(" "),s("yd-scrolltab",[s("div",{staticClass:"popup-content flex"},[s("div",{staticClass:"left"},[s("ul",[t._l(t.datearr,function(e,i){return[s("li",{ref:"left",refInFor:!0,class:0==i?"active":"",on:{click:function(e){t.leftclick(i)}}},[s("div",{staticClass:"tac"},[s("p",[t._v(t._s(e.date))])])])]})],2)]),t._v(" "),s("div",{staticClass:"right"},[s("ul",[t._l(t.time,function(e,n){return[s("li",{ref:"right",refInFor:!0,class:0==n?"active":"",on:{click:function(e){t.rightclick(n)}}},[s("div",{staticClass:"flex flex-x-between flex-y-center"},[s("div",[t._v(t._s(e))]),t._v(" "),s("img",{staticStyle:{height:"0.36rem",width:"0.36rem"},attrs:{src:i("sy3N")}})])])]})],2)])])])],1)},n=[]},p5Ed:function(t,e,i){"use strict";var s=i("QPnh"),n=i("vsZy"),a=i("+VPr");e.a={components:{dateTime:s.a,dateTimet:a.a},mixins:[n.a],data:function(){return{showDate:!1,result:"",payParams:{},storeInfo:{},istody:0,dateArr:[],timeArr:[],currentDate:"",currentTime:""}},created:function(){if(this.$store.dispatch("changeNavBarTitle","选择支付配送方式"),this.$route.params.payParams){console.log(this.$route.params);var t=new Date;t.getHours();this.storeInfo=this.$route.params.storeInfo,this.payParams=this.$route.params.payParams,this.istody=this.payParams.distributionType;for(var e in this.distributionType)this.distributionType[e].distributionType==this.payParams.distributionType?this.distributionType[e].selected=!0:this.distributionType[e].selected=!1;for(var e in this.payType)this.payType[e].type==this.payParams.payType?this.payType[e].selected=!0:this.payType[e].selected=!1;for(var e in this.logisticsType)this.logisticsType[e].type==this.payParams.wuliutype?this.logisticsType[e].selected=!0:this.logisticsType[e].selected=!1;this.result=this.payParams.distributionDate+" "+this.payParams.distributionTimeBegin+"~"+this.payParams.distributionTimeEnd}else this.$router.go(-1)},methods:{datePicker:function(){this.initLeftDate(),this.initRightTime(),this.showDate=!0},initLeftDate:function(){if(this.dateArr=[],0==this.istody)for(var t=1;t<=this.storeInfo.period;t++){var e={value:this.GetDateStr(t).date};this.result.split(" ")[0]==this.GetDateStr(t).date?e.isActive=!0:e.isActive=!1,this.dateArr.push(e)}else{var i=new Date,s=i.getHours(),n=0;n=s>=storeInfo.distributionEnd?1:0;for(var a=n;a<=storeInfo.period;a++){var o={value:this.GetDateStr(n).date};this.result.split(" ")[0]==this.GetDateStr(n).date?o.isActive=!0:o.isActive=!1,this.dateArr.push(o)}}this.currentDate=this.result.split(" ")[0]},initRightTime:function(){this.timeArr=[];var t=this.storeInfo.distributionStart,e=new Date;for(1==this.istody&&(t=e.getHours()+1)>storeInfo.distributionEnd&&(t=storeInfo.distributionStart);t<this.storeInfo.distributionEnd;){var i=void 0,s=t+1,n=void 0,a=void 0;n=t<10?"0"+t+":00":t+":00",a=s<10?"0"+s+":00":s+":00",i=n+"~"+a,t+=1;var o={value:i};i==this.result.split(" ")[1]?o.isActive=!0:o.isActive=!1,this.timeArr.push(o)}this.currentTime=this.result.split(" ")[1]},setLeftDate:function(t){for(var e in this.dateArr)this.dateArr[e].isActive=!1;t.isActive||(t.isActive=!0),this.currentDate=t.value},setRightTime:function(t){for(var e in this.timeArr)this.timeArr[e].isActive=!1;t.isActive||(t.isActive=!0),this.currentTime=t.value},selectPayWay:function(t){if(!t.selected){t.selected=!0;for(var e in this.payType)t.type!=this.payType[e].type&&(this.payType[e].selected=!1)}},selectWiLiuWay:function(t){if(!t.selected){t.selected=!0;for(var e in this.logisticsType)t.type!=this.logisticsType[e].type&&(this.logisticsType[e].selected=!1)}},selectdistributionWay:function(t){if(0==this.storeInfo.distributionToday)this.$dialog.alert({mes:"该店铺不支持当日配送"});else{var e=new Date;if(e.getHours()>=this.storeInfo.distributionEnd)return this.$dialog.alert({mes:"已超过该店铺今日配送时间段，只能选择次日配送~~"}),!1;if(!t.selected){if(t.selected=!0,0==t.distributionType){this.istody=0,this.payParams.distributionDate=this.GetDateStr(1).date;var i=this.storeInfo.distributionStart,s=i+1,n=void 0,a=void 0;n=i<10?"0"+i+":00":i+":00",a=s<10?"0"+s+":00":s+":00",this.payParams.distributionTimeBegin=n,this.payParams.distributionTimeEnd=a,this.result=this.payParams.distributionDate+" "+this.payParams.distributionTimeBegin+"~"+this.payParams.distributionTimeEnd}else{this.istody=1,this.payParams.distributionDate=this.GetDateStr(0).date;var e=new Date,o=e.getHours()+1,r=o+1,c=void 0,l=void 0;c=o<10?"0"+o+":00":o+":00",l=r<10?"0"+r+":00":r+":00",this.payParams.distributionTimeBegin=c,this.payParams.distributionTimeEnd=l,this.result=this.payParams.distributionDate+" "+this.payParams.distributionTimeBegin+"~"+this.payParams.distributionTimeEnd}for(var d in this.distributionType)t.distributionType!=this.distributionType[d].distributionType&&(this.distributionType[d].selected=!1)}}},toOrderCheckoutSuccess:function(){var t={};for(var e in this.payType)this.payType[e].selected&&(t.payType=this.payType[e].type);for(var e in this.distributionType)this.distributionType[e].selected&&(t.distributionType=this.distributionType[e].distributionType);for(var e in this.logisticsType)this.logisticsType[e].selected&&(t.wuliutype=this.logisticsType[e].type);if(""==t.distributionTimeEnd||""==t.distributionTimeBegin)return this.$dialog.alert({mes:"请选择配送时间段"}),!1;0==t.distributionType?t.distributionDate=this.GetDateStr(1).date:t.distributionDate=this.GetDateStr(0).date,""!=this.result&&(t.distributionDate=this.result.split(" ")[0],t.distributionTimeBegin=this.result.split(" ")[1].split("~")[0],t.distributionTimeEnd=this.result.split(" ")[1].split("~")[1]),this.$store.dispatch("setPayParams",t),this.$router.back()},setValue:function(){this.result=this.currentDate+" "+this.currentTime,this.showDate=!1}}}},plpw:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"#selectDateTime .popup-top{width:100%;font-size:.3rem;background:#efeff3;padding:.2rem}#selectDateTime .yd-scrolltab{top:.8rem}#selectDateTime .yd-scrolltab .yd-scrolltab-content{padding:0}#selectDateTime .yd-scrolltab .popup-content{height:100%}#selectDateTime .yd-scrolltab .popup-content ul::-webkit-scrollbar{display:none}#selectDateTime .yd-scrolltab .popup-content .left{width:4rem;height:100%;background:#efeff3}#selectDateTime .yd-scrolltab .popup-content .left ul{height:100%;overflow-y:auto}#selectDateTime .yd-scrolltab .popup-content .left ul li{padding:.2rem 0}#selectDateTime .yd-scrolltab .popup-content .left ul li.active{background:#fff}#selectDateTime .yd-scrolltab .popup-content .right{height:100%;width:100%}#selectDateTime .yd-scrolltab .popup-content .right ul{height:100%;overflow-y:auto;padding:0 0 0 .2rem}#selectDateTime .yd-scrolltab .popup-content .right ul li{border-bottom:1px solid #ddd;padding:.2rem 0;padding-right:.2rem}#selectDateTime .yd-scrolltab .popup-content .right ul li img{opacity:0}#selectDateTime .yd-scrolltab .popup-content .right ul li.active img{opacity:1}","",{version:3,sources:["D:/Web/银川电子结算/过程/应用软件/微信端/quickBuy/src/views/component/selectDateTime.vue"],names:[],mappings:"AACA,2BACE,WAAY,AACZ,gBAAkB,AAClB,mBAAoB,AACpB,aAAgB,CACjB,AACD,8BACE,SAAY,CACb,AACD,oDACI,SAAW,CACd,AACD,6CACI,WAAa,CAChB,AACD,mEACM,YAAc,CACnB,AACD,mDACM,WAAY,AACZ,YAAa,AACb,kBAAoB,CACzB,AACD,sDACQ,YAAa,AACb,eAAiB,CACxB,AACD,yDACU,eAAkB,CAC3B,AACD,gEACU,eAAiB,CAC1B,AACD,oDACM,YAAa,AACb,UAAY,CACjB,AACD,uDACQ,YAAa,AACb,gBAAiB,AACjB,mBAAsB,CAC7B,AACD,0DACU,6BAA8B,AAC9B,gBAAkB,AAClB,mBAAsB,CAC/B,AACD,8DACY,SAAW,CACtB,AACD,qEACU,SAAW,CACpB",file:"selectDateTime.vue",sourcesContent:["\n#selectDateTime .popup-top {\n  width: 100%;\n  font-size: 0.3rem;\n  background: #EFEFF3;\n  padding: 0.2rem;\n}\n#selectDateTime .yd-scrolltab {\n  top: 0.8rem;\n}\n#selectDateTime .yd-scrolltab .yd-scrolltab-content {\n    padding: 0;\n}\n#selectDateTime .yd-scrolltab .popup-content {\n    height: 100%;\n}\n#selectDateTime .yd-scrolltab .popup-content ul::-webkit-scrollbar {\n      display: none;\n}\n#selectDateTime .yd-scrolltab .popup-content .left {\n      width: 4rem;\n      height: 100%;\n      background: #EFEFF3;\n}\n#selectDateTime .yd-scrolltab .popup-content .left ul {\n        height: 100%;\n        overflow-y: auto;\n}\n#selectDateTime .yd-scrolltab .popup-content .left ul li {\n          padding: 0.2rem 0;\n}\n#selectDateTime .yd-scrolltab .popup-content .left ul li.active {\n          background: #fff;\n}\n#selectDateTime .yd-scrolltab .popup-content .right {\n      height: 100%;\n      width: 100%;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul {\n        height: 100%;\n        overflow-y: auto;\n        padding: 0 0 0 0.2rem;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul li {\n          border-bottom: 1px solid #ddd;\n          padding: 0.2rem 0;\n          padding-right: 0.2rem;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul li img {\n            opacity: 0;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul li.active img {\n          opacity: 1;\n}\n"],sourceRoot:""}])},q12V:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("yd-popup",{attrs:{position:"bottom",height:"50%"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t.show?s("div",{attrs:{id:"selectDateTime"}},[s("div",{staticClass:"popup-top flex flex-x-between"},[s("span"),t._v(" "),s("strong",[t._v("送达时间")]),t._v(" "),s("span",{on:{click:t.setValue}},[t._v("确定")])]),t._v(" "),s("yd-scrolltab",[s("div",{staticClass:"popup-content flex"},[s("div",{staticClass:"left"},[s("ul",[t._l(t.dateArr,function(e,i){return[s("li",{class:e.isActive?"active":"",on:{click:function(i){t.changeLeftDate(e)}}},[s("div",{staticClass:"tac"},[s("p",[t._v(t._s(e.value))])])])]})],2)]),t._v(" "),s("div",{staticClass:"right"},[s("ul",[t._l(t.timeArr,function(e,n){return[s("li",{class:e.isActive?"active":"",on:{click:function(i){t.changeRightTime(e)}}},[s("div",{staticClass:"flex flex-x-between flex-y-center"},[s("div",[t._v(t._s(e.value))]),t._v(" "),s("img",{staticStyle:{height:"0.36rem",width:"0.36rem"},attrs:{src:i("sy3N")}})])])]})],2)])])])],1):t._e()])},n=[]},q6Tx:function(t,e,i){"use strict";var s=i("vsZy");e.a={mixins:[s.a],props:{value:{default:""},startTime:{default:5},endTime:{default:17},period:{default:0},istody:{default:0},callback:Function},data:function(){console.log(this.value);for(var t=[],e=this.startTime;e<this.endTime;){var i=void 0,s=e+1,n=void 0,a=void 0;n=e<10?"0"+e+":00":e+":00",a=s<10?"0"+s+":00":s+":00",i=n+"~"+a,e+=1,t.push(i)}var o=-1;0==this.istody&&(o=0);for(var r=[],c=this.period;o<c;)o++,r.push(this.GetDateStr(o));return{time:t,datearr:r,datestr:""+r[0].date,timestr:""+t[0],result:""}},methods:{rightclick:function(t){for(var e in this.$refs.right)this.$refs.right[e].removeAttribute("class");this.$refs.right[t].setAttribute("class","active"),this.timestr=this.time[t]},leftclick:function(t){for(var e in this.$refs.left)this.$refs.left[e].removeAttribute("class");this.$refs.left[t].setAttribute("class","active"),this.datestr=""+this.datearr[t].date},resultstr:function(){this.result=this.datestr+" "+this.timestr,this.callback&&this.callback(this.datestr+" "+this.timestr)}}}},qsgV:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,".mask{width:100%;height:100%;background:rgba(0,0,0,.4);position:fixed;top:0;left:0}#selectDateTime .popup-top{width:100%;font-size:.3rem;background:#efeff3;padding:.2rem}#selectDateTime .yd-scrolltab{top:.8rem}#selectDateTime .yd-scrolltab .yd-scrolltab-content{padding:0}#selectDateTime .yd-scrolltab .popup-content{height:100%}#selectDateTime .yd-scrolltab .popup-content ul::-webkit-scrollbar{display:none}#selectDateTime .yd-scrolltab .popup-content .left{width:4rem;height:100%;background:#efeff3}#selectDateTime .yd-scrolltab .popup-content .left ul{height:100%;overflow-y:auto}#selectDateTime .yd-scrolltab .popup-content .left ul li{padding:.2rem 0}#selectDateTime .yd-scrolltab .popup-content .left ul li.active{background:#fff}#selectDateTime .yd-scrolltab .popup-content .right{height:100%;width:100%}#selectDateTime .yd-scrolltab .popup-content .right ul{height:100%;overflow-y:auto;padding:0 0 0 .2rem}#selectDateTime .yd-scrolltab .popup-content .right ul li{border-bottom:1px solid #ddd;padding:.2rem 0;padding-right:.2rem}#selectDateTime .yd-scrolltab .popup-content .right ul li img{opacity:0}#selectDateTime .yd-scrolltab .popup-content .right ul li.active img{opacity:1}","",{version:3,sources:["D:/Web/银川电子结算/过程/应用软件/微信端/quickBuy/src/views/component/datePicker.vue"],names:[],mappings:"AACA,MACE,WAAY,AACZ,YAAa,AACb,0BAA+B,AAC/B,eAAgB,AAChB,MAAO,AACP,MAAQ,CACT,AACD,2BACE,WAAY,AACZ,gBAAkB,AAClB,mBAAoB,AACpB,aAAgB,CACjB,AACD,8BACE,SAAY,CACb,AACD,oDACI,SAAW,CACd,AACD,6CACI,WAAa,CAChB,AACD,mEACM,YAAc,CACnB,AACD,mDACM,WAAY,AACZ,YAAa,AACb,kBAAoB,CACzB,AACD,sDACQ,YAAa,AACb,eAAiB,CACxB,AACD,yDACU,eAAkB,CAC3B,AACD,gEACU,eAAiB,CAC1B,AACD,oDACM,YAAa,AACb,UAAY,CACjB,AACD,uDACQ,YAAa,AACb,gBAAiB,AACjB,mBAAsB,CAC7B,AACD,0DACU,6BAA8B,AAC9B,gBAAkB,AAClB,mBAAsB,CAC/B,AACD,8DACY,SAAW,CACtB,AACD,qEACU,SAAW,CACpB",file:"datePicker.vue",sourcesContent:["\n.mask {\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.4);\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n#selectDateTime .popup-top {\n  width: 100%;\n  font-size: 0.3rem;\n  background: #EFEFF3;\n  padding: 0.2rem;\n}\n#selectDateTime .yd-scrolltab {\n  top: 0.8rem;\n}\n#selectDateTime .yd-scrolltab .yd-scrolltab-content {\n    padding: 0;\n}\n#selectDateTime .yd-scrolltab .popup-content {\n    height: 100%;\n}\n#selectDateTime .yd-scrolltab .popup-content ul::-webkit-scrollbar {\n      display: none;\n}\n#selectDateTime .yd-scrolltab .popup-content .left {\n      width: 4rem;\n      height: 100%;\n      background: #EFEFF3;\n}\n#selectDateTime .yd-scrolltab .popup-content .left ul {\n        height: 100%;\n        overflow-y: auto;\n}\n#selectDateTime .yd-scrolltab .popup-content .left ul li {\n          padding: 0.2rem 0;\n}\n#selectDateTime .yd-scrolltab .popup-content .left ul li.active {\n          background: #fff;\n}\n#selectDateTime .yd-scrolltab .popup-content .right {\n      height: 100%;\n      width: 100%;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul {\n        height: 100%;\n        overflow-y: auto;\n        padding: 0 0 0 0.2rem;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul li {\n          border-bottom: 1px solid #ddd;\n          padding: 0.2rem 0;\n          padding-right: 0.2rem;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul li img {\n            opacity: 0;\n}\n#selectDateTime .yd-scrolltab .popup-content .right ul li.active img {\n          opacity: 1;\n}\n"],sourceRoot:""}])},sy3N:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAEvklEQVRYR82Y/U+bVRTHv+dpm4IvY5uQkUUNviySjGwShD646HC8hLBAATPcEpYoGtmQUln8A/qLP05WmJDgS+ZcFJkbFCY6xhyaKS2MkKFkEBe3aCBMIjokg9L2OeY+UCgItE8Hhvtbn3tePr3nnHvPvQSN4+i55CcNel0WMV4AIR6EOGZEEcAgTIBxm4EbAK56vL72upd7ftXigkIRPtAIXaxRPigBRxn8PIFC0mMwE+hHBagbdTsbzhbBF8xfUMMVjuRsgq4KQHwwY6vNMzAI+CqrzT3frCa3IlBlY2qkYuQaACUAgoKHCMsAPpbcZKkq6ppaTmdZR1aHaRszviKipBAdaRJj5l4i7LebXXeWKv4HyNKYGCMZjd/fb4hCIBxUDO4Xa3L6xgJlFwHNhek7AMkhGFwLkR7JTXsDw7cIyOqQPwTw+lp40mDjI7vZ+YZffh6oslnOUAjta5jAQZh4BqB2gJ9RmMpq8p0dQkEFEvvMdqP88/+QNyokg+8xk1lAvHN614OeTZGtIzOuTLFPqUDWJlMxJPpUwzKHLcqMSYmRe6LA2ek3UuGQbxD4XbvZdUYFqnDIXQTIYXsJXXGCgJwTZucPATDHCTgGhsue75TJ0pT0lCQZfln/3OG/wZRtz3e65mGa5WoiWOZ+s6J4dpDVkVoOqDvy+g3GODNnVRe4eueSiKwOUx2IShc7JYuY+AygQ+tFw8AY+5TMmsLu68KHzQZpPNH0AYHEkbRk8OdkdchCcNcyQH8AHA2QFC4sg0d1pGRU5fUMLFSz6RRAxSvY7KcKhzxOwJZAASYurc5z1Zc75D068AWANocBNQx40+3ma0PqylxJ0/91d/oMCK+saIswLoC8BOgChSSJHq3K7RpWK7DJlERE7SBs1QD1mweUXmvuuil03ryWZIgc1jcAVBjEhleEbBqAcdEKAZ9s7XOW2GxQxPdjrSm7fYp0CUBMCFC3fKSkn8zrviVkLW1PG2km+iwRcoPpMuATST0GUPQyCXZ6xO0q8Xd5FeefSyCdXmzv21YxfFPHvn3v5ff8LmRevRIXETUR2wQgOxiMOi9CtkpSg5kb+qMiD3e+1OkV8uWtqfGSwpcJ2L7MHxjyYWbfSXPfiBqm1qQHInyGFiKkhwQzK9QfvOyZz03d8R6qL+31qDn1pWkHGXAZoMcWHPGAx61k1Bb1jIpvZY07H9IbH75AwF4NMOKUE2UfysbILVvckwdsRQMz6kq1pDyhY+lbAHFMuM56d6a/0bK0mTZJHmoDsEcbjBozi5aj4+u746OFp167LYoA1takx1nRH/f5+Mj7hd1/im9vNz27maUI0cSbtMNg9uhQjTfLTlBwI8zomNZ5zPW5vfeWOnzrfMojer10EYxw+3CX3eyUZ4EcpmIgxPaD0OmZ/ie3tmhg0g9laUuMIa/xEjF2h7Eycyp8eL790NygEa4qet5fk+OaKGtMjjUYpQ6AdoYPg8ERtzNhvkEThrS3sDwEootgLlhccZqxWGFkLWph/SY2VJOvrtLsbXXjXIME1Ia6KC6EbgNdpf1QG+qxIbBO1uo5BsAg389zTCBUmi1Nn5A4dVAHOhLug9VPfRFfdNpmu4bVhuZ3n/V+0vsXkkYSL54KdD4AAAAASUVORK5CYII="},uDuN:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("yd-layout",[this.$route.params.payParams?s("div",{attrs:{id:"ChoiceOfPayment"}},[s("div",{staticClass:"group"},[s("h1",[t._v("配送方式")]),t._v(" "),s("div",{staticClass:"btns"},[t._l(t.logisticsType,function(e,i){return[e.selected?s("yd-badge",{attrs:{shape:"square",bgcolor:"#6FB138",color:"#FFF"},nativeOn:{click:function(i){t.selectWiLiuWay(e)}}},[t._v(t._s(e.name))]):s("yd-badge",{attrs:{shape:"square",color:"#FFF"},nativeOn:{click:function(i){t.selectWiLiuWay(e)}}},[t._v(t._s(e.name))])]})],2)]),t._v(" "),s("div",{staticClass:"group"},[s("h1",[t._v("配送时间")]),t._v(" "),s("div",{staticClass:"btns"},[t._l(t.distributionType,function(e,i){return[e.selected?s("yd-badge",{attrs:{shape:"square",bgcolor:"#6FB138",color:"#FFF"},nativeOn:{click:function(i){t.selectdistributionWay(e)}}},[t._v(t._s(e.name))]):s("yd-badge",{attrs:{shape:"square",color:"#FFF"},nativeOn:{click:function(i){t.selectdistributionWay(e)}}},[t._v(t._s(e.name))])]})],2),t._v(" "),s("div",{staticClass:"updatedate flex flex-x-between flex-y-center"},[s("div",[t._v(t._s(t.result))]),t._v(" "),s("div",{staticClass:"flex flex-y-center",on:{click:t.datePicker}},[s("span",[t._v("选择时间")]),t._v(" "),s("img",{staticStyle:{width:"0.14rem",height:"0.24rem"},attrs:{src:i("bpPI")}})])])]),t._v(" "),s("div",{staticClass:"flex flex-x-center"},[s("yd-button",{staticClass:"okbtn",attrs:{size:"large",bgcolor:"#6FB138",color:"#fff"},nativeOn:{click:function(e){return t.toOrderCheckoutSuccess(e)}}},[t._v("确定")])],1),t._v(" "),s("yd-popup",{attrs:{position:"bottom",height:"50%"},model:{value:t.showDate,callback:function(e){t.showDate=e},expression:"showDate"}},[s("div",{attrs:{id:"selectDateTime"}},[s("div",{staticClass:"popup-top flex flex-x-between"},[s("span"),t._v(" "),s("strong",[t._v("送达时间")]),t._v(" "),s("span",{on:{click:t.setValue}},[t._v("确定")])]),t._v(" "),s("yd-scrolltab",[s("div",{staticClass:"popup-content flex"},[s("div",{staticClass:"left"},[s("ul",[t._l(t.dateArr,function(e,i){return[s("li",{class:e.isActive?"active":"",on:{click:function(i){t.setLeftDate(e)}}},[s("div",{staticClass:"tac"},[s("p",[t._v(t._s(e.value))])])])]})],2)]),t._v(" "),s("div",{staticClass:"right"},[s("ul",[t._l(t.timeArr,function(e,n){return[s("li",{class:e.isActive?"active":"",on:{click:function(i){t.setRightTime(e)}}},[s("div",{staticClass:"flex flex-x-between flex-y-center"},[s("div",[t._v(t._s(e.value))]),t._v(" "),s("img",{staticStyle:{height:"0.36rem",width:"0.36rem"},attrs:{src:i("sy3N")}})])])]})],2)])])])],1)])],1):t._e()])},n=[]},uUhL:function(t,e,i){var s=i("aqVB");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=i("rjj0").default;n("23318f90",s,!0,{})},vsZy:function(t,e,i){"use strict";var s=i("BO1k"),n=i.n(s),a=i("pyzf");i("fYxN"),i("H+kO");e.a={data:function(){return{imgURL:a.a.imgURL,userInfo:JSON.parse(localStorage.getItem("userInfo")),logisticsType:[{type:0,name:"自提",selected:!1},{type:1,name:"物流配送",selected:!0}],payType:[{type:0,name:"现金支付",selected:!0},{type:1,name:"POS刷卡",selected:!1},{type:2,name:"微信支付",selected:!1},{type:3,name:"支付宝支付",selected:!1}],distributionType:[{distributionType:0,name:"次日配送",selected:!0},{distributionType:1,name:"当日配送",selected:!1}]}},mounted:function(){},methods:{uniqueArr:function(t){var e=[],i={},s=!0,a=!1,o=void 0;try{for(var r,c=n()(t);!(s=(r=c.next()).done);s=!0){var l=r.value;i[l]||(e.push(l),i[l]=1)}}catch(t){a=!0,o=t}finally{try{!s&&c.return&&c.return()}finally{if(a)throw o}}return e},GetDateStr:function(t){var e=new Date;e.setDate(e.getDate()+t);var i=e.getFullYear(),s=e.getMonth()+1,n=e.getDate(),a=e.getDay();return s<10&&(s="0"+s),n<10&&(n="0"+n),{date:i+"-"+s+"-"+n,week:"星期"+"日一二三四五六".charAt(a)}}}}},wqIg:function(t,e,i){"use strict";function s(t){i("EFRT")}var n=i("R1qe"),a=i("q12V"),o=i("XyMi"),r=s,c=Object(o.a)(n.a,a.a,a.b,!1,r,null,null);e.a=c.exports},xxYK:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"b",function(){return n});var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"yd-datetime-input",on:{click:function(e){return e.stopPropagation(),t.open(e)}}},[t.value?[t._v(t._s(t.value))]:[i("span",{staticClass:"yd-datetime-placeholder"},[t._v(t._s(t.placeholder))])]],2)])},n=[]}});
//# sourceMappingURL=11.d7c0b6c230befbcd2616.js.map