webpackJsonp([21],{"+LF8":function(t,e,a){"use strict";function i(t){a("MSJV")}Object.defineProperty(e,"__esModule",{value:!0});var r=a("yMma"),n=a("zjHj"),o=a("XyMi"),s=i,d=Object(o.a)(r.a,n.a,n.b,!1,s,"data-v-4b4bc7d6",null);e.default=d.exports},BO1k:function(t,e,a){t.exports={default:a("fxRn"),__esModule:!0}},"H+kO":function(t,e,a){"use strict";var i=a("mvHQ"),r=a.n(i),n=a("BO1k"),o=a.n(n);e.a={data:function(){return{categoryList:[],gbgoodsId:"",secondCategoryList:[],isUserEnter:!1,isOftenBuy:!1}},methods:{addActiveStatus:function(t){var e=1;e=this.isUserEnter?0:1;for(var a in t)t[a].isActive=a==e;return t},menuClick:function(t,e){this.productList=[],t.isActive||(t.isActive=!0);var a=!0,i=!1,r=void 0;try{for(var n,s=o()(this.categoryList);!(a=(n=s.next()).done);a=!0){var d=n.value;t.id!=d.id&&(d.isActive=!1)}}catch(t){i=!0,r=t}finally{try{!a&&s.return&&s.return()}finally{if(i)throw r}}if("oftenbuy"==t.id)this.secondCategoryList=[],this.isOftenBuy=!0,this.gbgoodsId="",this.getProductList();else if(this.isOftenBuy=!1,t.childList&&!e){this.secondCategoryList=t.childList,this.secondCategoryList[0].isActive=!0;for(var c in this.secondCategoryList)0!=c&&this.secondCategoryList[c].isActive&&(this.secondCategoryList[c].isActive=!1);this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()}else this.secondCategoryList=[],this.gbgoodsId=t.gbgoodsId,this.getProductList()},getCategoryList:function(){this.getCategoryListSaveLocal()},getCategoryListSaveLocal:function(){var t=this;this.postRequest("category/childList",{parentCategoryId:"top",orderField:"t.f_id",filteEnabled:1,filteDeleted:1}).then(function(e){e&&e.data&&0==e.data.state&&(e.data.aaData.unshift({name:"常买",id:"oftenbuy"}),t.categoryList=t.addActiveStatus(e.data.aaData),t.getSonCategoryList(t.categoryList),localStorage.setItem("categoryList",r()(t.categoryList)))})},getSonCategoryList:function(t){for(var e in t)if(t[e].childList)for(var a in t[e].childList)t[e].childList[a].isActive=0==a;this.isOftenBuy?this.getProductList():t.length>0&&t[1].childList?(this.secondCategoryList=t[1].childList,this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()):(this.secondCategoryList=[],t.length>0&&(this.gbgoodsId=t[1].gbgoodsId,this.getProductList()))}}}},MSJV:function(t,e,a){var i=a("S2MS");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var r=a("rjj0").default;r("16aebfb8",i,!0,{})},S2MS:function(t,e,a){var i=a("kxFB");e=t.exports=a("FZ+f")(!0),e.push([t.i,"#ShopDetails .headbg[data-v-4b4bc7d6]{width:100%;height:1rem;position:absolute;top:0;z-index:100}#ShopDetails .header[data-v-4b4bc7d6]{padding:1.8rem .25rem 0;background:#fff}#ShopDetails .header .img[data-v-4b4bc7d6]{background:url("+i(a("vrmm"))+");background-size:100% 100%;width:1.68rem;height:1.68rem;position:absolute;z-index:1001;top:.2rem}#ShopDetails .header .img img[data-v-4b4bc7d6]{width:100%;height:100%;border-radius:5px}#ShopDetails .header h1[data-v-4b4bc7d6]{font-size:.33rem;padding:.25rem 0}#ShopDetails .header .rate[data-v-4b4bc7d6]{padding-bottom:.25rem}#ShopDetails .header .gonggao[data-v-4b4bc7d6]{padding:.25rem 0;color:#797d77;border-top:1px solid #ddd;background:#fff;font-size:.27rem}#ShopDetails .content[data-v-4b4bc7d6]{padding:.2rem}#ShopDetails .content .card[data-v-4b4bc7d6]{margin-bottom:.2rem;border-radius:5px;padding:.3rem .25rem;background:#fff}#ShopDetails .content .card h1[data-v-4b4bc7d6]{font-size:.3rem;padding-bottom:.25rem}#ShopDetails .content .card p[data-v-4b4bc7d6]{color:#797d77;line-height:.4rem;margin-bottom:.1rem}#ShopDetails .content .card .cu[data-v-4b4bc7d6]{background:#f07373;color:#fff;padding:.06rem;border-radius:2px;margin-right:.1rem}#ShopDetails .content .card .zhe[data-v-4b4bc7d6]{background:#f1884f;color:#fff;padding:.06rem;border-radius:2px;margin-right:.1rem}#ShopDetails .content .card .infoitem[data-v-4b4bc7d6]{padding:.3rem 0;border-bottom:1px solid #ddd}#ShopDetails .content .card .infoitem div[data-v-4b4bc7d6]:first-child{font-size:.27rem}#ShopDetails .content .card .infoitem div[data-v-4b4bc7d6]:nth-child(2){color:#797d77}","",{version:3,sources:["D:/Web/银川电子结算/过程/应用软件/微信端/quickBuy/src/views/shop/ShopDetails.vue"],names:[],mappings:"AACA,sCACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,MAAO,AACP,WAAa,CACd,AACD,sCACE,wBAA0B,AAC1B,eAAiB,CAClB,AACD,2CACI,yCAAkD,AAClD,0BAA2B,AAC3B,cAAe,AACf,eAAgB,AAChB,kBAAmB,AACnB,aAAc,AACd,SAAY,CACf,AACD,+CACM,WAAY,AACZ,YAAa,AACb,iBAAmB,CACxB,AACD,yCACI,iBAAmB,AACnB,gBAAmB,CACtB,AACD,4CACI,qBAAwB,CAC3B,AACD,+CACI,iBAAmB,AACnB,cAAe,AACf,0BAA2B,AAC3B,gBAAiB,AACjB,gBAAmB,CACtB,AACD,uCACE,aAAgB,CACjB,AACD,6CACI,oBAAsB,AACtB,kBAAmB,AACnB,qBAAwB,AACxB,eAAiB,CACpB,AACD,gDACM,gBAAkB,AAClB,qBAAwB,CAC7B,AACD,+CACM,cAAe,AACf,kBAAoB,AACpB,mBAAsB,CAC3B,AACD,iDACM,mBAAoB,AACpB,WAAY,AACZ,eAAiB,AACjB,kBAAmB,AACnB,kBAAqB,CAC1B,AACD,kDACM,mBAAoB,AACpB,WAAY,AACZ,eAAiB,AACjB,kBAAmB,AACnB,kBAAqB,CAC1B,AACD,uDACM,gBAAkB,AAClB,4BAA8B,CACnC,AACD,uEACQ,gBAAmB,CAC1B,AACD,wEACQ,aAAe,CACtB",file:"ShopDetails.vue",sourcesContent:["\n#ShopDetails .headbg[data-v-4b4bc7d6] {\n  width: 100%;\n  height: 1rem;\n  position: absolute;\n  top: 0;\n  z-index: 100;\n}\n#ShopDetails .header[data-v-4b4bc7d6] {\n  padding: 1.8rem 0.25rem 0;\n  background: #fff;\n}\n#ShopDetails .header .img[data-v-4b4bc7d6] {\n    background: url(../../assets/imgs/img_dianpu.png);\n    background-size: 100% 100%;\n    width: 1.68rem;\n    height: 1.68rem;\n    position: absolute;\n    z-index: 1001;\n    top: 0.2rem;\n}\n#ShopDetails .header .img img[data-v-4b4bc7d6] {\n      width: 100%;\n      height: 100%;\n      border-radius: 5px;\n}\n#ShopDetails .header h1[data-v-4b4bc7d6] {\n    font-size: 0.33rem;\n    padding: 0.25rem 0;\n}\n#ShopDetails .header .rate[data-v-4b4bc7d6] {\n    padding-bottom: 0.25rem;\n}\n#ShopDetails .header .gonggao[data-v-4b4bc7d6] {\n    padding: 0.25rem 0;\n    color: #797D77;\n    border-top: 1px solid #ddd;\n    background: #fff;\n    font-size: 0.27rem;\n}\n#ShopDetails .content[data-v-4b4bc7d6] {\n  padding: 0.2rem;\n}\n#ShopDetails .content .card[data-v-4b4bc7d6] {\n    margin-bottom: 0.2rem;\n    border-radius: 5px;\n    padding: 0.3rem 0.25rem;\n    background: #fff;\n}\n#ShopDetails .content .card h1[data-v-4b4bc7d6] {\n      font-size: 0.3rem;\n      padding-bottom: 0.25rem;\n}\n#ShopDetails .content .card p[data-v-4b4bc7d6] {\n      color: #797D77;\n      line-height: 0.4rem;\n      margin-bottom: 0.1rem;\n}\n#ShopDetails .content .card .cu[data-v-4b4bc7d6] {\n      background: #F07373;\n      color: #fff;\n      padding: 0.06rem;\n      border-radius: 2px;\n      margin-right: 0.1rem;\n}\n#ShopDetails .content .card .zhe[data-v-4b4bc7d6] {\n      background: #F1884F;\n      color: #fff;\n      padding: 0.06rem;\n      border-radius: 2px;\n      margin-right: 0.1rem;\n}\n#ShopDetails .content .card .infoitem[data-v-4b4bc7d6] {\n      padding: 0.3rem 0;\n      border-bottom: 1px solid #ddd;\n}\n#ShopDetails .content .card .infoitem div[data-v-4b4bc7d6]:nth-child(1) {\n        font-size: 0.27rem;\n}\n#ShopDetails .content .card .infoitem div[data-v-4b4bc7d6]:nth-child(2) {\n        color: #797D77;\n}\n"],sourceRoot:""}])},fYxN:function(t,e,a){"use strict";var i=a("BO1k"),r=a.n(i);e.a={data:function(){return{carIds:[],ShippingcarList:[],alreadyChosenGoods:[],orderTotal:0}},methods:{createShippingcar:function(t,e){var a,i=this,n={buyerId:this.userInfo.typeCode,productId:t.productId,productName:t.productName,skuId:t.id,skuName:t.name,quantity:t.quantity,comment:t.remark,sellerId:this.sellerId};t.skuId&&(n.skuId=t.skuId),t.skuName&&(n.skuName=t.skuName);var o=[],s=!0,d=!1,c=void 0;try{for(var u,A=r()(this.carIds);!(s=(u=A.next()).done);s=!0){var l=u.value;o.push(l.skuId)}}catch(t){d=!0,c=t}finally{try{!s&&A.return&&A.return()}finally{if(d)throw c}}if(this.isInArray(o,n.skuId)){a=0==t.quantity?"shippingcar/delete":"shippingcar/update";for(var h in this.carIds)this.carIds[h].skuId!=t.id&&this.carIds[h].skuId!=t.skuId||(n.id=this.carIds[h].carId);this.postRequest(a,n).then(function(t){t.data&&0==t.data.state&&i.getShippingcarList()})}else a="shippingcar/create",this.postRequest(a,n).then(function(e){if(e.data&&0==e.data.state){var a={skuId:t.id||t.skuId,carId:e.data.aaData.id};i.carIds.push(a),i.getShippingcarList()}})},getShippingcarList:function(){var t=this;this.postRequest("shippingcar/queryGrouplist",{buyerId:this.userInfo.typeCode,sellerId:this.sellerId}).then(function(e){if(e.data&&0==e.data.state){t.ShippingcarList=e.data.aaData;var a=[];t.alreadyChosenGoods=[];for(var i in e.data.aaData){t.sellerId==i&&(t.alreadyChosenGoods=e.data.aaData[i]);var n=!0,o=!1,s=void 0;try{for(var d,c=r()(e.data.aaData[i]);!(n=(d=c.next()).done);n=!0){var u=d.value,A={skuId:u.skuId,carId:u.id};a.push(A)}}catch(t){o=!0,s=t}finally{try{!n&&c.return&&c.return()}finally{if(o)throw s}}}t.carIds=a,t.orderTotal=t.getOrderTotal(t.alreadyChosenGoods).priceTotal}})},getOrderTotal:function(t){var e=0,a=0;for(var i in t)a+=t[i].quantity,t[i].promotionPrice>0&&t[i].promotionBasePrice>0?e+=t[i].quantity*(100*t[i].promotionPrice):e+=t[i].quantity*(100*t[i].price);return{priceTotal:(e/100).toFixed(2),quantityTotal:(a-0).toFixed(2)}},isInArray:function(t,e){for(var a=0;a<t.length;a++)if(t[a]==e)return!0;return!1},countVisits:function(){this.postRequest("store/countVisits",{sellerId:this.sellerId}).then(function(t){t.data&&t.data.state})}}}},fxRn:function(t,e,a){a("+tPU"),a("zQR9"),t.exports=a("g8Ux")},g8Ux:function(t,e,a){var i=a("77Pl"),r=a("3fs2");t.exports=a("FeBl").getIterator=function(t){var e=r(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},vrmm:function(t,e,a){t.exports=a.p+"static/img/img_dianpu.b1f1386.png"},vsZy:function(t,e,a){"use strict";var i=a("BO1k"),r=a.n(i),n=a("pyzf");a("fYxN"),a("H+kO");e.a={data:function(){return{imgURL:n.a.imgURL,userInfo:JSON.parse(localStorage.getItem("userInfo")),logisticsType:[{type:0,name:"自提",selected:!1},{type:1,name:"物流配送",selected:!0}],payType:[{type:0,name:"现金支付",selected:!0},{type:1,name:"POS刷卡",selected:!1},{type:2,name:"微信支付",selected:!1},{type:3,name:"支付宝支付",selected:!1}],distributionType:[{distributionType:0,name:"次日配送",selected:!0},{distributionType:1,name:"当日配送",selected:!1}]}},mounted:function(){},methods:{uniqueArr:function(t){var e=[],a={},i=!0,n=!1,o=void 0;try{for(var s,d=r()(t);!(i=(s=d.next()).done);i=!0){var c=s.value;a[c]||(e.push(c),a[c]=1)}}catch(t){n=!0,o=t}finally{try{!i&&d.return&&d.return()}finally{if(n)throw o}}return e},GetDateStr:function(t){var e=new Date;e.setDate(e.getDate()+t);var a=e.getFullYear(),i=e.getMonth()+1,r=e.getDate(),n=e.getDay();return i<10&&(i="0"+i),r<10&&(r="0"+r),{date:a+"-"+i+"-"+r,week:"星期"+"日一二三四五六".charAt(n)}}}}},yMma:function(t,e,a){"use strict";var i=a("vsZy");e.a={mixins:[i.a],data:function(){return{rate:4.8,storeInfo:{},reputationLevel:5}},created:function(){var t=this;this.$store.dispatch("changeNavBarTitle","店铺详情"),this.getReputation(this.$route.query.sellerid),this.postRequest("store/queryBySellerId",{sellerId:this.$route.query.sellerid}).then(function(e){e.data&&0==e.data.state&&(t.storeInfo=e.data.aaData)})},mounted:function(){},methods:{getReputation:function(t){var e=this;this.postRequest("reputation/list",{customerId:t}).then(function(t){t.data&&0==t.data.state&&t.data.aaData&&t.data.aaData[0]&&(e.reputationLevel=t.data.aaData[0].reputationLevel)})}}}},zjHj:function(t,e,a){"use strict";a.d(e,"a",function(){return i}),a.d(e,"b",function(){return r});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("yd-layout",[i("div",{attrs:{id:"ShopDetails"}},[i("div",{staticClass:"headbg gradient"}),t._v(" "),i("div",{staticClass:"header"},[i("yd-flexbox",{attrs:{direction:"vertical"}},[i("div",{staticClass:"img"},[t.storeInfo.headPicUrl?i("img",{attrs:{src:t.imgURL+t.storeInfo.headPicUrl}}):i("img",{attrs:{src:a("vrmm")}})]),t._v(" "),i("h1",[t._v(t._s(t.storeInfo.storeName))]),t._v(" "),i("div",{staticClass:"flex",staticStyle:{"margin-bottom":"0.25rem"}},[i("yd-rate",{attrs:{size:"0.2rem",readonly:"","active-color":"#FFBB00"},model:{value:t.reputationLevel,callback:function(e){t.reputationLevel=e},expression:"reputationLevel"}}),t._v(" "),i("span",{staticStyle:{padding:"0 0.2rem 0 0.1rem"}},[t._v("评分"+t._s(t.reputationLevel))])],1),t._v(" "),i("div",{staticClass:"rate flex flex-y-center"},[i("yd-badge",{directives:[{name:"show",rawName:"v-show",value:1==t.storeInfo.distributionToday,expression:"storeInfo.distributionToday == 1"}],staticStyle:{"margin-right":"0.2rem"},attrs:{shape:"square",type:"hollow",bgcolor:"#FE971D"}},[t._v("支持当天配送")]),t._v(" "),i("yd-badge",{directives:[{name:"show",rawName:"v-show",value:0==t.storeInfo.distributionToday,expression:"storeInfo.distributionToday == 0"}],staticStyle:{"margin-right":"0.2rem"},attrs:{shape:"square",type:"hollow",bgcolor:"#FE971D"}},[t._v("次日配送")]),t._v(" "),i("yd-badge",{attrs:{shape:"square",type:"hollow",bgcolor:"#FE971D"}},[t._v("预定周期"+t._s(t.storeInfo.period)+"天")])],1)])],1),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"card"},[i("h1",[t._v("配送信息")]),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:1==t.storeInfo.distributionToday,expression:"storeInfo.distributionToday == 1"}]},[t._v("支持当天配送，当天"+t._s(t.storeInfo.distributionEnd-2)+"点前下单,可支持当日"+t._s(t.storeInfo.distributionEnd||12)+"点前送达，"+t._s(t.storeInfo.distributionEnd||12)+"时后下单支持次日"+t._s(t.storeInfo.distributionEnd||12)+"点前送达")]),t._v(" "),i("p",{directives:[{name:"show",rawName:"v-show",value:0==t.storeInfo.distributionToday,expression:"storeInfo.distributionToday == 0"}]},[t._v("当天下单支持次日"+t._s(t.storeInfo.distributionEnd||12)+"点前送达")])]),t._v(" "),i("div",{staticClass:"card"},[i("h1",[t._v("商家信息")]),t._v(" "),i("div",{staticClass:"infoitem flex flex-x-between flex-y-center"},[i("div",[t._v("联系人")]),t._v(" "),i("div",[t._v(t._s(t.storeInfo.contacts))])]),t._v(" "),i("div",{staticClass:"infoitem flex flex-x-between flex-y-center"},[i("div",[t._v("联系电话")]),t._v(" "),i("div",[t._v(t._s(t.storeInfo.phoneNumber))])]),t._v(" "),i("div",{staticClass:"infoitem flex flex-x-between flex-y-center"},[i("div",[t._v("店铺介绍")]),t._v(" "),i("div",[t._v(t._s(t.storeInfo.storeSuggest))])])])])])])},r=[]}});
//# sourceMappingURL=21.5fc7e9d871fcc97269f4.js.map