webpackJsonp([22],{BO1k:function(t,e,a){t.exports={default:a("fxRn"),__esModule:!0}},EgQp:function(t,e,a){"use strict";e.a={data:function(){return{sellerList:[],sellerInfo:{},storeInfo:{},reputationLevel:"A"}},methods:{getStore:function(t,e){var a=this;this.postRequest("store/queryBySellerId",{sellerId:t}).then(function(t){t.data&&0==t.data.state&&(t.data.aaData?e&&e(t.data.aaData):a.$dialog.alert({mes:"未找到店铺信息~",callback:function(){a.$router.push({name:"Home"})}}))})},toShopDetails:function(){this.$router.push({name:"ShopDetails",query:{sellerid:this.sellerId}})},getReputation:function(t){var e=this;this.postRequest("reputation/list",{customerId:t}).then(function(t){t.data&&0==t.data.state&&(t.data.aaData.length>0?e.reputationLevel=t.data.aaData[0].reputationLevel:e.reputationLevel="A")})}}}},"H+kO":function(t,e,a){"use strict";var r=a("mvHQ"),i=a.n(r),s=a("BO1k"),n=a.n(s);e.a={data:function(){return{categoryList:[],gbgoodsId:"",secondCategoryList:[],isUserEnter:!1,isOftenBuy:!1}},methods:{addActiveStatus:function(t){var e=1;e=this.isUserEnter?0:1;for(var a in t)t[a].isActive=a==e;return t},menuClick:function(t,e){this.productList=[],t.isActive||(t.isActive=!0);var a=!0,r=!1,i=void 0;try{for(var s,o=n()(this.categoryList);!(a=(s=o.next()).done);a=!0){var d=s.value;t.id!=d.id&&(d.isActive=!1)}}catch(t){r=!0,i=t}finally{try{!a&&o.return&&o.return()}finally{if(r)throw i}}if("oftenbuy"==t.id)this.secondCategoryList=[],this.isOftenBuy=!0,this.gbgoodsId="",this.getProductList();else if(this.isOftenBuy=!1,t.childList&&!e){this.secondCategoryList=t.childList,this.secondCategoryList[0].isActive=!0;for(var c in this.secondCategoryList)0!=c&&this.secondCategoryList[c].isActive&&(this.secondCategoryList[c].isActive=!1);this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()}else this.secondCategoryList=[],this.gbgoodsId=t.gbgoodsId,this.getProductList()},getCategoryList:function(){this.getCategoryListSaveLocal()},getCategoryListSaveLocal:function(){var t=this;this.postRequest("category/childList",{parentCategoryId:"top",orderField:"t.f_id",filteEnabled:1,filteDeleted:1}).then(function(e){e&&e.data&&0==e.data.state&&(e.data.aaData.unshift({name:"常买",id:"oftenbuy"}),t.categoryList=t.addActiveStatus(e.data.aaData),t.getSonCategoryList(t.categoryList),localStorage.setItem("categoryList",i()(t.categoryList)))})},getSonCategoryList:function(t){for(var e in t)if(t[e].childList)for(var a in t[e].childList)t[e].childList[a].isActive=0==a;this.isOftenBuy?this.getProductList():t.length>0&&t[1].childList?(this.secondCategoryList=t[1].childList,this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()):(this.secondCategoryList=[],t.length>0&&(this.gbgoodsId=t[1].gbgoodsId,this.getProductList()))}}}},Qjec:function(t,e,a){"use strict";a.d(e,"a",function(){return r}),a.d(e,"b",function(){return i});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("yd-layout",[r("div",{attrs:{id:"OrderEvaluate"}},[r("section",{staticClass:"store flex flex-y-center flex-x-between"},[r("div",{staticClass:"flex flex-y-center"},[t.storeInfo.headPicUrl?r("img",{staticClass:"store-img",attrs:{src:t.imgURL+t.storeInfo.headPicUrl,alt:""}}):r("img",{staticClass:"store-img",attrs:{src:a("vrmm"),alt:""}}),t._v(" "),r("div",{staticClass:"store-name"},[t._v(t._s(t.storeInfo.storeName))])]),t._v(" "),r("div",{staticClass:"pftext"},[r("p",[t._v(t._s(t.reputationLevel))]),t._v(" "),r("p",[t._v("信用等级")])])]),t._v(" "),r("section",{staticClass:"card"},[r("div",{staticClass:"card-title"},[t._v("订单信息")]),t._v(" "),r("div",{staticClass:"card-item"},[r("span",[t._v("订单号："+t._s(t.orderInfo.orderUmber))])]),t._v(" "),r("div",{staticClass:"card-item"},[t._l(t.orderInfo.orderitemList,function(e,a){return a<2?r("span",[[t._v("\n\t\t\t\t\t\t"+t._s(e.productName)+"\n\t\t\t\t\t")],t._v(" "),null!=e.inspectedWeight?[t._v("\n\t\t\t\t\t\t"+t._s("["+e.inspectedWeight+e.baseMeasureName+"/"+e.skuMeasureName+"]、")+"\n\t\t\t\t\t")]:null!=e.sortingWeight?[t._v("\n\t\t\t\t\t\t"+t._s("["+e.sortingWeight+e.baseMeasureName+"/"+e.skuMeasureName+"]、")+"\n\t\t\t\t\t")]:[t._v("\n\t\t\t\t\t\t"+t._s("["+e.weight+e.baseMeasureName+"/"+e.skuMeasureName+"]、")+"\n\t\t\t\t\t")]],2):t._e()}),t._v(" "),t.orderInfo.orderitemList?r("span",[t._v("等"+t._s(t.orderInfo.orderitemList.length)+"件商品")]):t._e()],2)]),t._v(" "),r("section",{staticClass:"card"},[r("div",{staticClass:"card-title"},[t._v("订单评价")]),t._v(" "),1==t.type?r("div",{staticClass:"card-item flex flex-x-between flex-y-center"},[r("span",[t._v("商品综合满意度")]),t._v(" "),r("yd-rate",{attrs:{slot:"left",readonly:"",size:"0.42rem","active-color":"#FE971D"},slot:"left",model:{value:t.productrate,callback:function(e){t.productrate=e},expression:"productrate"}})],1):t._e(),t._v(" "),1==t.type?r("yd-textarea",{attrs:{readonly:"",maxlength:"100"},model:{value:t.reviewContent,callback:function(e){t.reviewContent=e},expression:"reviewContent"}}):r("yd-textarea",{attrs:{placeholder:"谈谈你中肯的评价...",maxlength:"100"},model:{value:t.reviewContent,callback:function(e){t.reviewContent=e},expression:"reviewContent"}})],1),t._v(" "),r("section",{staticClass:"card"},[r("div",{staticClass:"card-title"},[t._v("质量与配送评价")]),t._v(" "),t._l(t.reviewtypeList,function(e){return r("div",{staticClass:"card-item flex flex-x-between flex-y-center"},[r("span",[t._v(t._s(e.reviewName))]),t._v(" "),1==t.type?r("yd-rate",{attrs:{slot:"left",readonly:"",size:"0.42rem","active-color":"#FE971D"},slot:"left",model:{value:e.productrate,callback:function(a){t.$set(e,"productrate",a)},expression:"d.productrate"}}):r("yd-rate",{attrs:{slot:"left",size:"0.42rem","active-color":"#FE971D"},slot:"left",model:{value:e.productrate,callback:function(a){t.$set(e,"productrate",a)},expression:"d.productrate"}})],1)})],2),t._v(" "),r("section",{staticClass:"text"},[t._v("你的评价将匿名发送给商家")])]),t._v(" "),1!=t.type?r("yd-tabbar",{attrs:{slot:"tabbar"},slot:"tabbar"},[r("div",{staticClass:"yd-tabbar"},[r("div",{staticClass:"bottombar flex flex-x-between flex-y-center"},[r("div",{staticClass:"text"},[t._v("感谢你的支持~")]),t._v(" "),r("div",{staticClass:"btn flex flex-y-center flex-x-center",on:{click:t.save}},[t._v("提交评价")])])])]):t._e()],1)},i=[]},d8P9:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,".yd-tabbar{padding:0!important;height:1rem}.bottombar .text{padding-left:.24rem;color:#797d77}.bottombar .btn{background:#6fb138;color:#fff;font-size:.36rem;height:1rem;width:2.4rem;position:absolute;right:0;top:0}#OrderEvaluate .store{margin-bottom:.24rem;background:#fff;padding:0 .24rem;height:1.2rem}#OrderEvaluate .store img.store-img{width:.8rem;height:.8rem;border-radius:2px}#OrderEvaluate .store .store-name{font-size:.28rem;padding-left:.24rem;font-weight:600}#OrderEvaluate .store .pftext{text-align:center;font-size:.24rem}#OrderEvaluate .store .pftext p:first-child{color:#fe971d;font-weight:600}#OrderEvaluate .store .pftext p:nth-child(2){color:#989e92}#OrderEvaluate .card{padding:.24rem;margin-bottom:.24rem;background:#fff}#OrderEvaluate .card .card-title{font-size:.28rem;font-weight:600;margin-bottom:.12rem}#OrderEvaluate .card .card-item span{font-size:.26rem}#OrderEvaluate .card .yd-textarea{margin-top:.18rem;background:#efeff3;padding:.2rem}#OrderEvaluate .card .yd-textarea textarea{font-family:PingFang-SC-Medium;font-size:.24rem}#OrderEvaluate .text{font-size:.24rem;color:#797d77;padding:0 .24rem}","",{version:3,sources:["D:/Web/银川电子结算/过程/应用软件/微信端/quickBuy/src/views/order/OrderEvaluate.vue"],names:[],mappings:"AACA,WACE,oBAAsB,AACtB,WAAa,CACd,AACD,iBACE,oBAAsB,AACtB,aAAe,CAChB,AACD,gBACE,mBAAoB,AACpB,WAAY,AACZ,iBAAmB,AACnB,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,QAAS,AACT,KAAO,CACR,AACD,sBACE,qBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,AACnB,aAAe,CAChB,AACD,oCACI,YAAc,AACd,aAAe,AACf,iBAAmB,CACtB,AACD,kCACI,iBAAmB,AACnB,oBAAsB,AACtB,eAAiB,CACpB,AACD,8BACI,kBAAmB,AACnB,gBAAmB,CACtB,AACD,4CACM,cAAe,AACf,eAAiB,CACtB,AACD,6CACM,aAAe,CACpB,AACD,qBACE,eAAiB,AACjB,qBAAuB,AACvB,eAAiB,CAClB,AACD,iCACI,iBAAmB,AACnB,gBAAiB,AACjB,oBAAuB,CAC1B,AACD,qCACI,gBAAmB,CACtB,AACD,kCACI,kBAAoB,AACpB,mBAAoB,AACpB,aAAgB,CACnB,AACD,2CACM,+BAAkC,AAClC,gBAAmB,CACxB,AACD,qBACE,iBAAmB,AACnB,cAAe,AACf,gBAAmB,CACpB",file:"OrderEvaluate.vue",sourcesContent:["\n.yd-tabbar {\n  padding: 0 !important;\n  height: 1rem;\n}\n.bottombar .text {\n  padding-left: 0.24rem;\n  color: #797D77;\n}\n.bottombar .btn {\n  background: #6FB138;\n  color: #fff;\n  font-size: 0.36rem;\n  height: 1rem;\n  width: 2.4rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n#OrderEvaluate .store {\n  margin-bottom: 0.24rem;\n  background: #fff;\n  padding: 0 0.24rem;\n  height: 1.2rem;\n}\n#OrderEvaluate .store img.store-img {\n    width: 0.8rem;\n    height: 0.8rem;\n    border-radius: 2px;\n}\n#OrderEvaluate .store .store-name {\n    font-size: 0.28rem;\n    padding-left: 0.24rem;\n    font-weight: 600;\n}\n#OrderEvaluate .store .pftext {\n    text-align: center;\n    font-size: 0.24rem;\n}\n#OrderEvaluate .store .pftext p:nth-child(1) {\n      color: #FE971D;\n      font-weight: 600;\n}\n#OrderEvaluate .store .pftext p:nth-child(2) {\n      color: #989E92;\n}\n#OrderEvaluate .card {\n  padding: 0.24rem;\n  margin-bottom: 0.24rem;\n  background: #fff;\n}\n#OrderEvaluate .card .card-title {\n    font-size: 0.28rem;\n    font-weight: 600;\n    margin-bottom: 0.12rem;\n}\n#OrderEvaluate .card .card-item span {\n    font-size: 0.26rem;\n}\n#OrderEvaluate .card .yd-textarea {\n    margin-top: 0.18rem;\n    background: #EFEFF3;\n    padding: 0.2rem;\n}\n#OrderEvaluate .card .yd-textarea textarea {\n      font-family: 'PingFang-SC-Medium';\n      font-size: 0.24rem;\n}\n#OrderEvaluate .text {\n  font-size: 0.24rem;\n  color: #797D77;\n  padding: 0 0.24rem;\n}\n"],sourceRoot:""}])},fYxN:function(t,e,a){"use strict";var r=a("BO1k"),i=a.n(r);e.a={data:function(){return{carIds:[],ShippingcarList:[],alreadyChosenGoods:[],orderTotal:0}},methods:{createShippingcar:function(t,e){var a,r=this,s={buyerId:this.userInfo.typeCode,productId:t.productId,productName:t.productName,skuId:t.id,skuName:t.name,quantity:t.quantity,comment:t.remark,sellerId:this.sellerId};t.skuId&&(s.skuId=t.skuId),t.skuName&&(s.skuName=t.skuName);var n=[],o=!0,d=!1,c=void 0;try{for(var u,l=i()(this.carIds);!(o=(u=l.next()).done);o=!0){var f=u.value;n.push(f.skuId)}}catch(t){d=!0,c=t}finally{try{!o&&l.return&&l.return()}finally{if(d)throw c}}if(this.isInArray(n,s.skuId)){a=0==t.quantity?"shippingcar/delete":"shippingcar/update";for(var A in this.carIds)this.carIds[A].skuId!=t.id&&this.carIds[A].skuId!=t.skuId||(s.id=this.carIds[A].carId);this.postRequest(a,s).then(function(t){t.data&&0==t.data.state&&r.getShippingcarList()})}else a="shippingcar/create",this.postRequest(a,s).then(function(e){if(e.data&&0==e.data.state){var a={skuId:t.id||t.skuId,carId:e.data.aaData.id};r.carIds.push(a),r.getShippingcarList()}})},getShippingcarList:function(){var t=this;this.postRequest("shippingcar/queryGrouplist",{buyerId:this.userInfo.typeCode,sellerId:this.sellerId}).then(function(e){if(e.data&&0==e.data.state){t.ShippingcarList=e.data.aaData;var a=[];t.alreadyChosenGoods=[];for(var r in e.data.aaData){t.sellerId==r&&(t.alreadyChosenGoods=e.data.aaData[r]);var s=!0,n=!1,o=void 0;try{for(var d,c=i()(e.data.aaData[r]);!(s=(d=c.next()).done);s=!0){var u=d.value,l={skuId:u.skuId,carId:u.id};a.push(l)}}catch(t){n=!0,o=t}finally{try{!s&&c.return&&c.return()}finally{if(n)throw o}}}t.carIds=a,t.orderTotal=t.getOrderTotal(t.alreadyChosenGoods).priceTotal}})},getOrderTotal:function(t){var e=0,a=0;for(var r in t)a+=t[r].quantity,t[r].promotionPrice>0&&t[r].promotionBasePrice>0?e+=t[r].quantity*(100*t[r].promotionPrice):e+=t[r].quantity*(100*t[r].price);return{priceTotal:(e/100).toFixed(2),quantityTotal:(a-0).toFixed(2)}},isInArray:function(t,e){for(var a=0;a<t.length;a++)if(t[a]==e)return!0;return!1},countVisits:function(){this.postRequest("store/countVisits",{sellerId:this.sellerId}).then(function(t){t.data&&t.data.state})}}}},fxRn:function(t,e,a){a("+tPU"),a("zQR9"),t.exports=a("g8Ux")},g8Ux:function(t,e,a){var r=a("77Pl"),i=a("3fs2");t.exports=a("FeBl").getIterator=function(t){var e=i(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},mYxY:function(t,e,a){"use strict";var r=a("vsZy"),i=a("EgQp");e.a={mixins:[r.a,i.a],data:function(){return{reviewContent:"",productrate:0,reviewtypeList:[],storeInfo:"",type:0,reputationLevel:"A",orderInfo:{}}},created:function(){var t=this;this.$store.dispatch("changeNavBarTitle","订单评价"),this.getStore(this.$route.query.sellerId,function(e){t.storeInfo=e}),this.getOrderDetailById(this.$route.query.orderUmber),this.getReputation(this.$route.query.sellerId),this.type=this.$route.query.type,1==this.type?this.postRequest("orderitemreview/queryReviewAndScore",{orderId:this.$route.query.orderId}).then(function(e){if(e&&0==e.data.state&&(e.data.aaData&&e.data.aaData[0]&&(t.reviewContent=e.data.aaData[0].reviewContent),e.data.aaData&&e.data.aaData[1])){var a=0;for(var r in e.data.aaData[1])e.data.aaData[1][r].productrate=e.data.aaData[1][r].score/20,a+=e.data.aaData[1][r].productrate;t.productrate=parseInt(a/e.data.aaData[1].length),t.reviewtypeList=e.data.aaData[1]}}):this.getReviewtype()},mounted:function(){},methods:{getOrderDetailById:function(t){var e=this;this.postRequest("order/listByUser",{orderUmber:t}).then(function(t){t.data&&0==t.data.state&&t.data.aaData.length>0&&(e.orderInfo=t.data.aaData[0])})},getOrderItemById:function(t){var e=this;this.postRequest("orderitem/list",{orderId:t}).then(function(t){t.data&&0==t.data.state&&(e.OrderItem=t.data.aaData)})},getReviewtype:function(){var t=this;this.postRequest("reviewtype/list",{enabled:1,deleted:0}).then(function(e){if(e&&0==e.data.state){for(var a in e.data.aaData)e.data.aaData[a].productrate=0;t.reviewtypeList=e.data.aaData}})},getReputation:function(t){var e=this;this.postRequest("reputation/list",{customerId:t}).then(function(t){t.data&&0==t.data.state&&(console.log(t),t.data.aaData&&t.data.aaData.length>0?e.reputationLevel=t.data.aaData[0].reputationLevel:e.reputationLevel="A")})},save:function(){var t=this,e="";for(var a in this.reviewtypeList)e+=this.reviewtypeList[a].reviewCode+":"+this.reviewtypeList[a].productrate+",";var r={orderId:this.$route.query.orderId,reviewContent:this.reviewContent,reviewScoreJson:e.slice(0,e.length-1)};if(""==r.reviewContent)return this.$dialog.alert({mes:"你还没有输入评价内容~~"}),!1;this.postRequest("orderitemreview/create",r).then(function(e){e.data&&0==e.data.state?t.$dialog.toast({mes:"保存成功",timeout:1200,icon:"success",callback:function(){t.$router.push({name:"OrderEvaluateSuccess"})}}):t.$dialog.alert({mes:e.data.msg})})}}}},paPI:function(t,e,a){"use strict";function r(t){a("qklb")}Object.defineProperty(e,"__esModule",{value:!0});var i=a("mYxY"),s=a("Qjec"),n=a("XyMi"),o=r,d=Object(n.a)(i.a,s.a,s.b,!1,o,null,null);e.default=d.exports},qklb:function(t,e,a){var r=a("d8P9");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=a("rjj0").default;i("15bc9c2a",r,!0,{})},vrmm:function(t,e,a){t.exports=a.p+"static/img/img_dianpu.b1f1386.png"},vsZy:function(t,e,a){"use strict";var r=a("BO1k"),i=a.n(r),s=a("pyzf");a("fYxN"),a("H+kO");e.a={data:function(){return{imgURL:s.a.imgURL,userInfo:JSON.parse(localStorage.getItem("userInfo")),logisticsType:[{type:0,name:"自提",selected:!1},{type:1,name:"物流配送",selected:!0}],payType:[{type:0,name:"现金支付",selected:!0},{type:1,name:"POS刷卡",selected:!1},{type:2,name:"微信支付",selected:!1},{type:3,name:"支付宝支付",selected:!1}],distributionType:[{distributionType:0,name:"次日配送",selected:!0},{distributionType:1,name:"当日配送",selected:!1}]}},mounted:function(){},methods:{uniqueArr:function(t){var e=[],a={},r=!0,s=!1,n=void 0;try{for(var o,d=i()(t);!(r=(o=d.next()).done);r=!0){var c=o.value;a[c]||(e.push(c),a[c]=1)}}catch(t){s=!0,n=t}finally{try{!r&&d.return&&d.return()}finally{if(s)throw n}}return e},GetDateStr:function(t){var e=new Date;e.setDate(e.getDate()+t);var a=e.getFullYear(),r=e.getMonth()+1,i=e.getDate(),s=e.getDay();return r<10&&(r="0"+r),i<10&&(i="0"+i),{date:a+"-"+r+"-"+i,week:"星期"+"日一二三四五六".charAt(s)}}}}}});
//# sourceMappingURL=22.ef6a8e32afc61fd00324.js.map