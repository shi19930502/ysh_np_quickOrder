webpackJsonp([16],{"+2DA":function(t,e,i){"use strict";e.a={props:{isborder:{default:!1},dataList:{default:function(){return["菜单一","常买","菜单二","米面粮油","菜单三","菜单四","菜单五","菜单2"]}},itemClick:Function},methods:{click:function(t){for(var e in this.$refs.li)this.$refs.li[e].removeAttribute("class");this.$refs.li[t].setAttribute("class","active"),this.itemClick&&this.itemClick(t)}}}},"1VE+":function(t,e,i){var r=i("KKBu");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("rjj0").default;n("1e29230a",r,!0,{})},"2u+l":function(t,e,i){"use strict";function r(t){i("b6i9")}var n=i("+2DA"),a=i("skya"),s=i("XyMi"),o=r,d=Object(s.a)(n.a,a.a,a.b,!1,o,"data-v-507d711c",null);e.a=d.exports},"4MCA":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADs0lEQVRIS7WWXWhbZRjH/8+bdLMTh1tRse5K7EIFnWVNzkF0VhBUlCZTWgRFipvC3Jp04oWCQkBBb6RNOjfwY1Rwu+hwzakpblfWoZKTrkyFTUN1V7PoZOq6Qbsm5/zlHJumH0lzEui5fc/z/N7n633+gmofIdFRrUOIJyHyIIAWAFsXzP4GMAXyewq+Snaa4xBwLZdS6TAeh7rSpvUokTdAtBAgyClRuADKFddO2EQb90KkRQCBYMom3286Zw7F47DL+S4L3D8W2u4vqM8BBAFeFMFggfPDh8Lnpss5OWC0NftlQzeJXkDuBnl2XqwXjoTP5lb+vwoYS4Ueh6gTzv1F+PYPtzQeGn90vFAt8855x9cd/geuzR4g5R24GbG7EpHs6aW2y4BRI/iEQBkALuUtefrwM5mfy4Fe+XLnpubJyblKaetL6622xTEB7iLscDI8caroZxEYM9oDgH8C4F8W5h+ulD7HMJbSpiE4ngibr1eKvO+LnXfS7/8WkNuAQjCxkF4X2DUMX/NNmglKIG8hVCmyovOYoRPE8UQk8/xaqX71pN7a4EMWwtz0nKmd6IblAvsM7SVCPrVtHhzcbQ5Uq5dXoOOnd0TrU0r6BdwzEDaPOlMjsVE9B9D34+bGgJcGqQXoNNKOmdkcIFaiMxOQmBHcBfi+Ae3XEpFsf7Xo3Bp6TOliCVJ6FIIEYD0iUUP/AMBBGze2rdUoSy9SK9CZU4WNlwD0S9TQzoC4IxkxA16iqydCxyaa0nIQ/CkxQ/+DYCYZNiPrCjS0lEB0B5inYCjZmXl5XYGj+sdC9NQFjBqaDWJKKcZneDV9NJy7Vu2yURfIF+tLaUr7DILnANkAYJbEKQiHCzeupw93n79eDh4tprSepnEc7jt23xb/ppvDyscuEI+V4Bybmy/s/ah78uryztZ+IXC5rrFYGcG+9ENbGgr5iIh0EWjPFyz9yLMTF4v/Oe+q7W/43R2Lega/Wr1WnseWDn49T1stwFVPmzvII6E9UOoTr493LcDVj3dxPW3UswC2e1lPXoGl9YTc9FymtJ7cFXVSb7UVsiK8XG0BewEWFzAptysboYEF9VCXxKgG/D8ypgFsqygxSqukJKIIvvXT5sYPvexIx95pkPtnZvcL5F1PIqoIdWViXo5BpH3dZWIR6gjhf9u0HkLeBHDPohAGLkAWhDDZRCwRwsCvAr53a6c5FJcahPCyGhHSOxLcpZR6qij1CTQJaAHyD4nfRPidbdljg7snzlST+v8BvogUfG2fGqYAAAAASUVORK5CYII="},BO1k:function(t,e,i){t.exports={default:i("fxRn"),__esModule:!0}},EgQp:function(t,e,i){"use strict";e.a={data:function(){return{sellerList:[],sellerInfo:{},storeInfo:{},reputationLevel:"A"}},methods:{getStore:function(t,e){var i=this;this.postRequest("store/queryBySellerId",{sellerId:t}).then(function(t){t.data&&0==t.data.state&&(t.data.aaData?e&&e(t.data.aaData):i.$dialog.alert({mes:"未找到店铺信息~",callback:function(){i.$router.push({name:"Home"})}}))})},toShopDetails:function(){this.$router.push({name:"ShopDetails",query:{sellerid:this.sellerId}})},getReputation:function(t){var e=this;this.postRequest("reputation/list",{customerId:t}).then(function(t){t.data&&0==t.data.state&&(t.data.aaData.length>0?e.reputationLevel=t.data.aaData[0].reputationLevel:e.reputationLevel="A")})}}}},"H+kO":function(t,e,i){"use strict";var r=i("mvHQ"),n=i.n(r),a=i("BO1k"),s=i.n(a);e.a={data:function(){return{categoryList:[],gbgoodsId:"",secondCategoryList:[],isUserEnter:!1,isOftenBuy:!1}},methods:{addActiveStatus:function(t){var e=1;e=this.isUserEnter?0:1;for(var i in t)t[i].isActive=i==e;return t},menuClick:function(t,e){this.productList=[],t.isActive||(t.isActive=!0);var i=!0,r=!1,n=void 0;try{for(var a,o=s()(this.categoryList);!(i=(a=o.next()).done);i=!0){var d=a.value;t.id!=d.id&&(d.isActive=!1)}}catch(t){r=!0,n=t}finally{try{!i&&o.return&&o.return()}finally{if(r)throw n}}if("oftenbuy"==t.id)this.secondCategoryList=[],this.isOftenBuy=!0,this.gbgoodsId="",this.getProductList();else if(this.isOftenBuy=!1,t.childList&&!e){this.secondCategoryList=t.childList,this.secondCategoryList[0].isActive=!0;for(var l in this.secondCategoryList)0!=l&&this.secondCategoryList[l].isActive&&(this.secondCategoryList[l].isActive=!1);this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()}else this.secondCategoryList=[],this.gbgoodsId=t.gbgoodsId,this.getProductList()},getCategoryList:function(){this.getCategoryListSaveLocal()},getCategoryListSaveLocal:function(){var t=this;this.postRequest("category/childList",{parentCategoryId:"top",orderField:"t.f_id",filteEnabled:1,filteDeleted:1}).then(function(e){e&&e.data&&0==e.data.state&&(e.data.aaData.unshift({name:"常买",id:"oftenbuy"}),t.categoryList=t.addActiveStatus(e.data.aaData),t.getSonCategoryList(t.categoryList),localStorage.setItem("categoryList",n()(t.categoryList)))})},getSonCategoryList:function(t){for(var e in t)if(t[e].childList)for(var i in t[e].childList)t[e].childList[i].isActive=0==i;this.isOftenBuy?this.getProductList():t.length>0&&t[1].childList?(this.secondCategoryList=t[1].childList,this.gbgoodsId=this.secondCategoryList[0].gbgoodsId,this.getProductList()):(this.secondCategoryList=[],t.length>0&&(this.gbgoodsId=t[1].gbgoodsId,this.getProductList()))}}}},"I+6L":function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,".menu .menu-tab[data-v-507d711c]{border-bottom:1px solid #ddd;padding-bottom:.11rem;background:#fff}.menu .menu-tab ul li[data-v-507d711c]{font-size:.3rem;text-align:center;padding:.25rem 0 0}.menu .menu-tab ul li strong[data-v-507d711c]{display:inline-block;border-bottom:2px solid #fff;padding-bottom:.05rem;font-size:.31rem}.menu .menu-tab ul li.active[data-v-507d711c]{color:#6fb138}.menu .menu-tab ul li.active strong[data-v-507d711c]{display:inline-block;border-bottom:2px solid #6fb138;padding-bottom:.05rem;font-size:.31rem}.menu .menu-tab[data-v-507d711c]::-webkit-scrollbar{display:none}","",{version:3,sources:["D:/Web/银川电子结算/过程/应用软件/微信端/quickBuy/src/views/component/menu.vue"],names:[],mappings:"AACA,iCACE,6BAA8B,AAC9B,sBAAwB,AACxB,eAAiB,CAClB,AACD,uCACI,gBAAkB,AAClB,kBAAmB,AACnB,kBAAqB,CACxB,AACD,8CACM,qBAAsB,AACtB,6BAA8B,AAC9B,sBAAwB,AACxB,gBAAmB,CACxB,AACD,8CACI,aAAe,CAClB,AACD,qDACM,qBAAsB,AACtB,gCAAiC,AACjC,sBAAwB,AACxB,gBAAmB,CACxB,AACD,oDACE,YAAc,CACf",file:"menu.vue",sourcesContent:["\n.menu .menu-tab[data-v-507d711c] {\n  border-bottom: 1px solid #ddd;\n  padding-bottom: 0.11rem;\n  background: #fff;\n}\n.menu .menu-tab ul li[data-v-507d711c] {\n    font-size: 0.3rem;\n    text-align: center;\n    padding: 0.25rem 0 0;\n}\n.menu .menu-tab ul li strong[data-v-507d711c] {\n      display: inline-block;\n      border-bottom: 2px solid #fff;\n      padding-bottom: 0.05rem;\n      font-size: 0.31rem;\n}\n.menu .menu-tab ul li.active[data-v-507d711c] {\n    color: #6FB138;\n}\n.menu .menu-tab ul li.active strong[data-v-507d711c] {\n      display: inline-block;\n      border-bottom: 2px solid #6FB138;\n      padding-bottom: 0.05rem;\n      font-size: 0.31rem;\n}\n.menu .menu-tab[data-v-507d711c]::-webkit-scrollbar {\n  display: none;\n}\n"],sourceRoot:""}])},KKBu:function(t,e,i){e=t.exports=i("FZ+f")(!0),e.push([t.i,"#OrderSettlement .header{text-align:center;color:#fff;font-size:.27rem;padding:.3rem .25rem 1rem}#OrderSettlement .header h1{font-size:.3rem;padding:.15rem 0;margin-right:.2rem}#OrderSettlement .content{margin-top:-.8rem;width:100%;padding:0 .16rem .16rem}#OrderSettlement .content .psinfocard{border-radius:5px;padding:.16rem;background:#fff}#OrderSettlement .content .psinfocard h1{font-size:.3rem}#OrderSettlement .content .psinfocard .tar{color:#2f3927}#OrderSettlement .content .psinfocard .tar p{padding:.05rem 0}#OrderSettlement .content .prolist{border-radius:5px;padding:.16rem;background:#fff;margin-top:.2rem}#OrderSettlement .content .prolist .title h1{font-size:.28rem;padding:0 .2rem}#OrderSettlement .content .prolist .line{height:1px;background:#ddd}#OrderSettlement .content .prolist ul.product-list{margin-top:.25rem}#OrderSettlement .content .prolist ul.product-list li{margin-bottom:.25rem}#OrderSettlement .content .prolist ul.product-list li h3{margin-bottom:.08rem}#OrderSettlement .content .prolist ul.product-list li .img{height:.75rem;width:.75rem;border-radius:2px;margin-right:.2rem;overflow:hidden}#OrderSettlement .content .prolist ul.product-list li .img img{width:100%;height:100%}#OrderSettlement .content .prolist ul.product-list li .bzinput{margin-top:.16rem;height:.6rem;background:#ffedbd;color:#989e92;padding-left:.1rem;border-radius:5px}#OrderSettlement .content .prolist ul.product-list li .sl{padding-left:10px}#OrderSettlement .content .prolist .tongjisl{background:#efeff3;padding:.08rem;text-align:center}#OrderSettlement .content .prolist .leavingaMsg{height:.8rem;border-bottom:1px solid #ddd}#OrderSettlement .content .prolist .smallplan{padding-top:.16rem}#OrderSettlement .content .prolist .smallplan strong{font-size:.3rem}#OrderSettlement .yd-tabbar{padding:0!important}#OrderSettlement .tabbar{height:.98rem}#OrderSettlement .tabbar .tips{padding-left:.25rem;color:#989e92}#OrderSettlement .tabbar .tips span:first-child{font-size:.35rem;color:#ff3d15;font-weight:600;margin-right:.1rem}#OrderSettlement .tabbar .tabbar-btn{height:100%;padding:0 .66rem;line-height:.98rem;background:#fe971d;color:#fff;font-size:.3rem;position:absolute;right:0}","",{version:3,sources:["D:/Web/银川电子结算/过程/应用软件/微信端/quickBuy/src/views/order/OrderSettlement.vue"],names:[],mappings:"AAKA,yBACI,kBAAmB,AACnB,WAAY,AACZ,iBAAmB,AACnB,yBAA6B,CAChC,AACD,4BACM,gBAAkB,AAClB,iBAAmB,AACnB,kBAAqB,CAC1B,AACD,0BACI,kBAAoB,AACpB,WAAY,AACZ,uBAA2B,CAC9B,AACD,sCACM,kBAAmB,AACnB,eAAiB,AACjB,eAAiB,CACtB,AACD,yCACQ,eAAkB,CACzB,AACD,2CACQ,aAAe,CACtB,AACD,6CACU,gBAAmB,CAC5B,AACD,mCACM,kBAAmB,AACnB,eAAiB,AACjB,gBAAiB,AACjB,gBAAmB,CACxB,AACD,6CACQ,iBAAmB,AACnB,eAAkB,CACzB,AACD,yCACQ,WAAY,AACZ,eAAiB,CACxB,AACD,mDACQ,iBAAoB,CAC3B,AACD,sDACU,oBAAuB,CAChC,AACD,yDACY,oBAAuB,CAClC,AACD,2DACY,cAAgB,AAChB,aAAe,AACf,kBAAmB,AACnB,mBAAqB,AACrB,eAAiB,CAC5B,AACD,+DACc,WAAY,AACZ,WAAa,CAC1B,AACD,+DACY,kBAAoB,AACpB,aAAe,AACf,mBAAoB,AACpB,cAAe,AACf,mBAAqB,AACrB,iBAAmB,CAC9B,AACD,0DACY,iBAAmB,CAC9B,AACD,6CACQ,mBAAoB,AACpB,eAAiB,AACjB,iBAAmB,CAC1B,AACD,gDACQ,aAAe,AACf,4BAA8B,CACrC,AACD,8CACQ,kBAAqB,CAC5B,AACD,qDACU,eAAkB,CAC3B,AACD,4BACI,mBAAsB,CAIzB,AACD,yBACI,aAAgB,CACnB,AACD,+BACM,oBAAsB,AACtB,aAAe,CACpB,AACD,gDACQ,iBAAmB,AACnB,cAAe,AACf,gBAAiB,AACjB,kBAAqB,CAC5B,AACD,qCACM,YAAa,AACb,iBAAmB,AACnB,mBAAqB,AACrB,mBAAoB,AACpB,WAAY,AACZ,gBAAkB,AAClB,kBAAmB,AACnB,OAAS,CACd",file:"OrderSettlement.vue",sourcesContent:['\n@charset "UTF-8";\n#OrderSettlement {\n  /**底部*/\n}\n#OrderSettlement .header {\n    text-align: center;\n    color: #fff;\n    font-size: 0.27rem;\n    padding: 0.3rem 0.25rem 1rem;\n}\n#OrderSettlement .header h1 {\n      font-size: 0.3rem;\n      padding: 0.15rem 0;\n      margin-right: 0.2rem;\n}\n#OrderSettlement .content {\n    margin-top: -0.8rem;\n    width: 100%;\n    padding: 0 0.16rem 0.16rem;\n}\n#OrderSettlement .content .psinfocard {\n      border-radius: 5px;\n      padding: 0.16rem;\n      background: #fff;\n}\n#OrderSettlement .content .psinfocard h1 {\n        font-size: 0.3rem;\n}\n#OrderSettlement .content .psinfocard .tar {\n        color: #2F3927;\n}\n#OrderSettlement .content .psinfocard .tar p {\n          padding: 0.05rem 0;\n}\n#OrderSettlement .content .prolist {\n      border-radius: 5px;\n      padding: 0.16rem;\n      background: #fff;\n      margin-top: 0.2rem;\n}\n#OrderSettlement .content .prolist .title h1 {\n        font-size: 0.28rem;\n        padding: 0 0.2rem;\n}\n#OrderSettlement .content .prolist .line {\n        height: 1px;\n        background: #ddd;\n}\n#OrderSettlement .content .prolist ul.product-list {\n        margin-top: 0.25rem;\n}\n#OrderSettlement .content .prolist ul.product-list li {\n          margin-bottom: 0.25rem;\n}\n#OrderSettlement .content .prolist ul.product-list li h3 {\n            margin-bottom: 0.08rem;\n}\n#OrderSettlement .content .prolist ul.product-list li .img {\n            height: 0.75rem;\n            width: 0.75rem;\n            border-radius: 2px;\n            margin-right: 0.2rem;\n            overflow: hidden;\n}\n#OrderSettlement .content .prolist ul.product-list li .img img {\n              width: 100%;\n              height: 100%;\n}\n#OrderSettlement .content .prolist ul.product-list li .bzinput {\n            margin-top: 0.16rem;\n            height: 0.6rem;\n            background: #FFEDBD;\n            color: #989E92;\n            padding-left: 0.1rem;\n            border-radius: 5px;\n}\n#OrderSettlement .content .prolist ul.product-list li .sl {\n            padding-left: 10px;\n}\n#OrderSettlement .content .prolist .tongjisl {\n        background: #EFEFF3;\n        padding: 0.08rem;\n        text-align: center;\n}\n#OrderSettlement .content .prolist .leavingaMsg {\n        height: 0.8rem;\n        border-bottom: 1px solid #ddd;\n}\n#OrderSettlement .content .prolist .smallplan {\n        padding-top: 0.16rem;\n}\n#OrderSettlement .content .prolist .smallplan strong {\n          font-size: 0.3rem;\n}\n#OrderSettlement .yd-tabbar {\n    padding: 0 !important;\n    /*position: fixed;\n\t\tbottom: 0;\n\t\tz-index: 100000;*/\n}\n#OrderSettlement .tabbar {\n    height: 0.98rem;\n}\n#OrderSettlement .tabbar .tips {\n      padding-left: 0.25rem;\n      color: #989E92;\n}\n#OrderSettlement .tabbar .tips span:nth-child(1) {\n        font-size: 0.35rem;\n        color: #FF3D15;\n        font-weight: 600;\n        margin-right: 0.1rem;\n}\n#OrderSettlement .tabbar .tabbar-btn {\n      height: 100%;\n      padding: 0 0.66rem;\n      line-height: 0.98rem;\n      background: #FE971D;\n      color: #fff;\n      font-size: 0.3rem;\n      position: absolute;\n      right: 0;\n}\n'],sourceRoot:""}])},TbgW:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAYAAAAYwiAhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMyRkJGN0QzNUE3MDExRThCREUwOEIxM0EwOTA5OTBCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMyRkJGN0Q0NUE3MDExRThCREUwOEIxM0EwOTA5OTBCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzJGQkY3RDE1QTcwMTFFOEJERTA4QjEzQTA5MDk5MEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzJGQkY3RDI1QTcwMTFFOEJERTA4QjEzQTA5MDk5MEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Q+906AAAL6klEQVR42uyd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"},UsIn:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAACCUlEQVQ4T43US4vTUBQH8P9JoqAIIuPoiKMDgw4+8IELNy78BG4FN2KTDk2iTVQENwpd6EaxnabNtJ1mkvGBqAsXPvAxNp/Khai5R+5tFXWmSe8255fknPxPqFarGTMHpxJB2Qe3dP05JjzUTZoRmCwAGUBXbLP6bBJLYdI4rbO+DmC3wgzTtrwnRZhkQXf10SmiLesMTEvMjLJjeWt5WEF5eknrhGAeEDDNzAIaLTolLx6H/0BZsLLWPi6EGADYC0AQuFIx/Wgz/A9Urx0HxwBIPCMxC7hO2ev9jzdAWRD2w6O6kQ3A2KcwcM0xvc7feFOoeu61jrAhUhBJzIK56lp++BuPharnx+0FkWUpQPtH2HctvyWv5ULVc9I8DKYUwOwQ46ZreUuFUPUc1Q/pmiHxAYnBfGsiGPSD2a0aBiAsyBsx+EEhbEftOV3LUgLNjwZzzza9u7lwOW7M69BTBuZGT7rjmP793OEMJ6pSpIZCjNsVy3uY+zlUehhfQCoADME37LLfzA3Acn/ppKZrcs32jEvNhlftxY0zAvpnAqaGu0kV26qu5oa8EwVnScdHMHYB+MnEplPyn+auVSdqnSON3wPYCeAHC77slP0XuYu8EgfnM8Y7IuwA+HuW0aWri97rwl9HNw7eALgA4BsIF+2S97YIqeHUX9W3bf9qvGRQ6JjVT5MgWfMLfVbMoBCXpuUAAAAASUVORK5CYII="},YEJp:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return n});var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("yd-layout",{staticStyle:{height:"100%"},attrs:{slot:"tabbar",id:"OrderSettlement"},slot:"tabbar"},[r("div",{staticClass:"header gradient"},[r("div",[t._v("订单配送至")]),t._v(" "),r("div",{staticClass:"flex flex-y-center flex-x-center"},[r("h1",{on:{click:t.goSelectAdd}},[t._v(t._s(t.addressInfo.completeAddress||"请选择收货地址"))]),t._v(" "),r("img",{staticStyle:{width:"7px",height:"12px"},attrs:{src:i("y9AV")}})]),t._v(" "),r("div",[t._v(t._s(t.addressInfo.contacts)+" "+t._s(t.addressInfo.phoneNumber))])]),t._v(" "),r("div",{staticClass:"content"},[r("div",{staticClass:"psinfocard flex flex-x-between",on:{click:t.toConfirmOrder}},[r("div",[r("h1",[t._v("支付配送")])]),t._v(" "),r("div",{staticClass:"tar flex flex-y-center"},[r("div",[r("p",[t._v(t._s(0==t.payParams.payType?"现金支付":1==t.payParams.payType?"POS刷卡":2==t.payParams.payType?"微信支付":"支付宝支付"))]),t._v(" "),r("p",[t._v(t._s(0==t.payParams.wuliutype?"自提":"物流配送"))]),t._v(" "),r("p",[t._v(t._s(0==t.payParams.distributionType?"次日配送":"今日配送"))]),t._v(" "),r("p",{staticClass:"flex flex-y-center"},[r("img",{staticStyle:{"margin-right":"0.1rem",height:"14px",width:"14px"},attrs:{src:i("4MCA")}}),t._v(" "),r("span",[t._v(t._s(t.payParams.distributionDate+" "+t.payParams.distributionTimeBegin+"~"+t.payParams.distributionTimeEnd))])])]),t._v(" "),r("div",{staticStyle:{"margin-left":"0.16rem"}},[r("img",{staticStyle:{width:"7px",height:"12px"},attrs:{src:i("UsIn")}})])])]),t._v(" "),r("div",{staticClass:"prolist"},[r("div",{staticClass:"flex flex-y-center"},[r("div",{staticClass:"flex-item-2 line"}),t._v(" "),r("div",{staticClass:"title"},[r("h1",[t._v(t._s(t.storeInfo.storeName))])]),t._v(" "),r("div",{staticClass:"flex-item-2 line"})]),t._v(" "),r("ul",{staticClass:"product-list"},t._l(t.settlementGoods,function(e){return r("li",[r("div",{staticClass:"flex flex-x-between flex-y-center"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"img"},[e.skuPicUrl?r("img",{attrs:{src:t.imgURL+e.skuPicUrl}}):t._e(),t._v(" "),r("img",{attrs:{src:i("TbgW")}})]),t._v(" "),r("div",[r("h3",[t._v(t._s(e.productName+"["+e.skuName+"]"))]),t._v(" "),e.promotionPrice>0&&e.promotionBasePrice>0?r("span",{staticStyle:{color:"#989E92"}},[r("span",[t._v(t._s("￥"+e.promotionPrice))]),t._v(" "),r("span",[t._v("/"+t._s(e.skuMeasureName))]),t._v(" "),r("span",{staticClass:"sl"},[t._v(t._s("x"+e.quantity))])]):r("span",{staticStyle:{color:"#989E92"}},[r("span",[t._v(t._s("￥"+e.price))]),t._v(" "),r("span",[t._v("/"+t._s(e.skuMeasureName))]),t._v(" "),r("span",{staticClass:"sl"},[t._v(t._s("x"+e.quantity))])])])]),t._v(" "),r("div",{staticClass:"tar"},[r("h3",{on:{click:function(i){t.showRemarks(e)}}},[t._v(t._s(e.btnText))]),t._v(" "),e.promotionPrice>0&&e.promotionBasePrice>0?r("strong",[t._v(t._s("￥"+(e.quantity*(100*e.promotionPrice)/100-0).toFixed(2)))]):r("strong",[t._v(t._s("￥"+(e.quantity*(100*e.price)/100-0).toFixed(2)))])])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showRemarks,expression:"d.showRemarks"}],staticClass:"bzinput"},[r("yd-input",{attrs:{placeholder:"输入商品备注信息"},model:{value:e.remark,callback:function(i){t.$set(e,"remark",i)},expression:"d.remark"}})],1)])})),t._v(" "),r("div",{staticClass:"tongjisl"},[t._v("共"+t._s(t.settlementGoods.length)+"件商品")]),t._v(" "),r("div",{staticClass:"leavingaMsg"},[r("yd-input",{attrs:{placeholder:"选填：给商家留言"},model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1),t._v(" "),r("div",{staticClass:"tar smallplan"},[t._v("小计\n\t\t\t\t\t"),r("strong",[t._v(t._s("￥"+(t.orderTotal/100-0).toFixed(2)))])])])]),t._v(" "),r("yd-tabbar",{attrs:{slot:"tabbar"},slot:"tabbar"},[r("div",{staticClass:"yd-tabbar"},[r("div",{staticClass:"tabbar flex"},[r("div",{staticClass:"flex flex-y-center"},[r("span",{staticClass:"tips"},[r("span",[t._v(t._s("￥"+(t.orderTotal/100-0).toFixed(2)))]),t._v(" "),r("span",[t._v(t._s("种类"+t.settlementGoods.length+"数量/"+t.aQuantity))])])]),t._v(" "),r("div",[r("div",{staticClass:"tabbar-btn",on:{click:t.toOrderCheckoutSuccess}},[t._v("确认订单")])])])])])],1)},n=[]},b6i9:function(t,e,i){var r=i("I+6L");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("rjj0").default;n("8f14081a",r,!0,{})},fYxN:function(t,e,i){"use strict";var r=i("BO1k"),n=i.n(r);e.a={data:function(){return{carIds:[],ShippingcarList:[],alreadyChosenGoods:[],orderTotal:0}},methods:{createShippingcar:function(t,e){var i,r=this,a={buyerId:this.userInfo.typeCode,productId:t.productId,productName:t.productName,skuId:t.id,skuName:t.name,quantity:t.quantity,comment:t.remark,sellerId:this.sellerId};t.skuId&&(a.skuId=t.skuId),t.skuName&&(a.skuName=t.skuName);var s=[],o=!0,d=!1,l=void 0;try{for(var A,c=n()(this.carIds);!(o=(A=c.next()).done);o=!0){var m=A.value;s.push(m.skuId)}}catch(t){d=!0,l=t}finally{try{!o&&c.return&&c.return()}finally{if(d)throw l}}if(this.isInArray(s,a.skuId)){i=0==t.quantity?"shippingcar/delete":"shippingcar/update";for(var u in this.carIds)this.carIds[u].skuId!=t.id&&this.carIds[u].skuId!=t.skuId||(a.id=this.carIds[u].carId);this.postRequest(i,a).then(function(t){t.data&&0==t.data.state&&r.getShippingcarList()})}else i="shippingcar/create",this.postRequest(i,a).then(function(e){if(e.data&&0==e.data.state){var i={skuId:t.id||t.skuId,carId:e.data.aaData.id};r.carIds.push(i),r.getShippingcarList()}})},getShippingcarList:function(){var t=this;this.postRequest("shippingcar/queryGrouplist",{buyerId:this.userInfo.typeCode,sellerId:this.sellerId}).then(function(e){if(e.data&&0==e.data.state){t.ShippingcarList=e.data.aaData;var i=[];t.alreadyChosenGoods=[];for(var r in e.data.aaData){t.sellerId==r&&(t.alreadyChosenGoods=e.data.aaData[r]);var a=!0,s=!1,o=void 0;try{for(var d,l=n()(e.data.aaData[r]);!(a=(d=l.next()).done);a=!0){var A=d.value,c={skuId:A.skuId,carId:A.id};i.push(c)}}catch(t){s=!0,o=t}finally{try{!a&&l.return&&l.return()}finally{if(s)throw o}}}t.carIds=i,t.orderTotal=t.getOrderTotal(t.alreadyChosenGoods).priceTotal}})},getOrderTotal:function(t){var e=0,i=0;for(var r in t)i+=t[r].quantity,t[r].promotionPrice>0&&t[r].promotionBasePrice>0?e+=t[r].quantity*(100*t[r].promotionPrice):e+=t[r].quantity*(100*t[r].price);return{priceTotal:(e/100).toFixed(2),quantityTotal:(i-0).toFixed(2)}},isInArray:function(t,e){for(var i=0;i<t.length;i++)if(t[i]==e)return!0;return!1},countVisits:function(){this.postRequest("store/countVisits",{sellerId:this.sellerId}).then(function(t){t.data&&t.data.state})}}}},fxRn:function(t,e,i){i("+tPU"),i("zQR9"),t.exports=i("g8Ux")},g8Ux:function(t,e,i){var r=i("77Pl"),n=i("3fs2");t.exports=i("FeBl").getIterator=function(t){var e=n(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return r(e.call(t))}},gPGm:function(t,e,i){"use strict";var r=i("mvHQ"),n=i.n(r),a=i("2u+l"),s=i("vsZy"),o=i("EgQp");e.a={components:{menuTab:a.a},mixins:[s.a,o.a],data:function(){return{clickNum:0,settlementGoods:[],sellerInfo:{},storeInfo:{},addressInfo:{},payParams:{payType:0,distributionType:1,distributionDate:this.GetDateStr(0).date,distributionTimeBegin:"09:00",distributionTimeEnd:"10:00",wuliutype:1},orderTotal:0,aQuantity:0,createOrderObj:{},comment:"",isChoiceOfPaymentBack:!1}},created:function(){var t=this;this.$store.dispatch("changeNavBarTitle","订单结算"),this.getAddress(),this.getStore(this.$route.query.sellerId,function(e){t.storeInfo=e,t.setPayParams(e),t.sellerInfo=t.$route.query,t.$store.getters.getPayParams&&(t.payParams=t.$store.getters.getPayParams)}),localStorage.getItem("settlementParam")?this.settlementGoods=JSON.parse(localStorage.getItem("settlementParam")).settlementGoods:this.$router.push({name:"Home"}),this.$store.getters.getSelectedAddress&&(this.addressInfo=this.$store.getters.getSelectedAddress);for(var e in this.settlementGoods)this.settlementGoods[e].promotionPrice>0&&this.settlementGoods[e].promotionBasePrice>0?this.orderTotal+=this.settlementGoods[e].quantity*(100*this.settlementGoods[e].promotionPrice):this.orderTotal+=this.settlementGoods[e].quantity*(100*this.settlementGoods[e].price),this.aQuantity+=this.settlementGoods[e].quantity},mounted:function(){},methods:{setPayParams:function(t){var e=new Date,i=e.getHours();if(this.payParams.distributionType=t.distributionToday,0==this.payParams.distributionType)this.payParams.distributionDate=this.GetDateStr(1).date,this.payParams.distributionTimeBegin=t.distributionStart<10?"0"+t.distributionStart+":00":t.distributionStart+":00",this.payParams.distributionTimeEnd=t.distributionStart+1<10?"0"+(t.distributionStart+1)+":00":t.distributionStart+1+":00";else if(i>=t.distributionEnd)this.payParams.distributionType=0,this.payParams.distributionDate=this.GetDateStr(1).date,this.payParams.distributionTimeBegin=t.distributionStart<10?"0"+t.distributionStart+":00":t.distributionStart+":00",this.payParams.distributionTimeEnd=t.distributionStart+1<10?"0"+(t.distributionStart+1)+":00":t.distributionStart+1+":00";else{this.payParams.distributionDate=this.GetDateStr(0).date;var r=i+1;this.payParams.distributionTimeBegin=r<10?"0"+r+":00":r+":00",this.payParams.distributionTimeEnd=r+1<10?"0"+(r+1)+":00":r+1+":00"}},showRemarks:function(t){"备注"==t.btnText?t.btnText="收起":t.btnText="备注",1==t.showRemarks?t.showRemarks=!1:t.showRemarks=!0},toConfirmOrder:function(){this.$router.push({name:"ChoiceOfPayment",params:{payParams:this.payParams,storeInfo:this.storeInfo}})},toOrderCheckoutSuccess:function(){var t=this;if(this.$dialog.loading.open("正在生成订单"),this.createOrderObj.buyerId=this.userInfo.typeCode,this.createOrderObj.buyerName=this.userInfo.loginName,this.createOrderObj.sellerId=this.sellerInfo.sellerId,this.createOrderObj.sellerName=this.sellerInfo.sellerName,this.createOrderObj.comment=this.comment,this.createOrderObj.shippingAdd=this.addressInfo.completeAddress,this.createOrderObj.shippingAddId=this.addressInfo.id,void 0==this.createOrderObj.shippingAdd||void 0==this.createOrderObj.shippingAddId)return this.$dialog.alert({mes:"请选择收货地址~~"}),!1;this.createOrderObj.distributionType=this.payParams.wuliutype,this.createOrderObj.payType=this.payParams.payType,this.createOrderObj.distributionTimeEnd=this.payParams.distributionDate+" "+this.payParams.distributionTimeEnd+":00",this.createOrderObj.distributionTimeBegin=this.payParams.distributionDate+" "+this.payParams.distributionTimeBegin+":00";var e=[];for(var i in this.settlementGoods){var r={productId:this.settlementGoods[i].productId,productName:this.settlementGoods[i].productName,skuId:this.settlementGoods[i].skuId,skuName:this.settlementGoods[i].skuName,skuMeasure:this.settlementGoods[i].skuMeasure,skuMeasureName:this.settlementGoods[i].skuMeasureName,quantity:this.settlementGoods[i].quantity,comment:this.settlementGoods[i].remark,chargingModel:this.settlementGoods[i].chargingModel};this.settlementGoods[i].promotionPrice>0&&this.settlementGoods[i].promotionBasePrice>0?(r.oriPrice=100*this.settlementGoods[i].promotionBasePrice,r.price=100*this.settlementGoods[i].promotionPrice):(r.oriPrice=100*this.settlementGoods[i].basePrice,r.price=100*this.settlementGoods[i].price),e.push(r)}this.createOrderObj.orderitems=n()(e),this.postRequest("quotation/listWithCount",{customerId:this.sellerInfo.sellerId,buyersId:this.userInfo.typeCode}).then(function(e){e.data&&0==e.data.state&&e.data.aaData&&e.data.aaData[0]&&(t.createOrderObj.orderTotal/100<e.data.aaData[0].startAmount?(t.$dialog.loading.close(),t.$dialog.alert({mes:"订单金额必须大于等于起配金额(￥"+e.data.aaData[0].startAmount+")"})):t.createOrder(t.createOrderObj))})},createOrder:function(t){var e=this;console.log(t),this.postRequest("order/createOrder",t).then(function(i){i.data&&0==i.data.state?(e.$dialog.loading.close(),e.$dialog.toast({mes:"保存成功",timeout:1200,icon:"success",callback:function(){e.del(t.sellerId),localStorage.removeItem("settlementParam"),e.$router.push({name:"OrderCheckoutSuccess",query:{orderId:i.data.aaData[0].id,orderUmber:i.data.aaData[0].orderUmber}})}})):(e.$dialog.loading.close(),e.$dialog.alert({mes:i.data.msg}))})},getAddress:function(t){var e=this;this.postRequest("address/queryByCustomerId",{customerId:this.userInfo.typeCode}).then(function(t){t.data&&0==t.data.state&&t.data.aaData&&(e.addressInfo=t.data.aaData)})},del:function(t){var e=this;this.postRequest("shippingcar/queryGrouplist",{buyerId:this.userInfo.typeCode,sellerId:t}).then(function(i){if(i.data&&0==i.data.state)for(var r in i.data.aaData)if(t==r){var n=i.data.aaData[r];for(var a in n)e.deleteShopCarById(n[a].id)}})},deleteShopCarById:function(t){this.postRequest("shippingcar/delete",{id:t}).then(function(t){t.data&&t.data.state})},goSelectAdd:function(){this.$router.push({name:"UserAddress"})}}}},skya:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return n});var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"menu"},[i("div",{staticClass:"menu-tab",staticStyle:{"overflow-x":"auto"}},[i("ul",{staticClass:"flex"},[t._l(t.dataList,function(e,r){return[i("li",{ref:"li",refInFor:!0,class:0==r?"active":"",style:"min-width: "+(.3*e.length+.5)+"rem",on:{click:function(e){t.click(r)}}},[i("strong",[t._v(t._s(e))])])]})],2)])])},n=[]},sxEn:function(t,e,i){"use strict";function r(t){i("1VE+")}Object.defineProperty(e,"__esModule",{value:!0});var n=i("gPGm"),a=i("YEJp"),s=i("XyMi"),o=r,d=Object(s.a)(n.a,a.a,a.b,!1,o,null,null);e.default=d.exports},vsZy:function(t,e,i){"use strict";var r=i("BO1k"),n=i.n(r),a=i("pyzf");i("fYxN"),i("H+kO");e.a={data:function(){return{imgURL:a.a.imgURL,userInfo:JSON.parse(localStorage.getItem("userInfo")),logisticsType:[{type:0,name:"自提",selected:!1},{type:1,name:"物流配送",selected:!0}],payType:[{type:0,name:"现金支付",selected:!0},{type:1,name:"POS刷卡",selected:!1},{type:2,name:"微信支付",selected:!1},{type:3,name:"支付宝支付",selected:!1}],distributionType:[{distributionType:0,name:"次日配送",selected:!0},{distributionType:1,name:"当日配送",selected:!1}]}},mounted:function(){},methods:{uniqueArr:function(t){var e=[],i={},r=!0,a=!1,s=void 0;try{for(var o,d=n()(t);!(r=(o=d.next()).done);r=!0){var l=o.value;i[l]||(e.push(l),i[l]=1)}}catch(t){a=!0,s=t}finally{try{!r&&d.return&&d.return()}finally{if(a)throw s}}return e},GetDateStr:function(t){var e=new Date;e.setDate(e.getDate()+t);var i=e.getFullYear(),r=e.getMonth()+1,n=e.getDate(),a=e.getDay();return r<10&&(r="0"+r),n<10&&(n="0"+n),{date:i+"-"+r+"-"+n,week:"星期"+"日一二三四五六".charAt(a)}}}}},y9AV:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAABcUlEQVQ4T43TS0tVYRTG8f8DTRyIhFlGiRAqmmjRoEkDP4FDB07CSxJIIobgyJkjnRiSEngjI3TiQAnFtO9lok8sWUe049n7rOl+f/td77rI9gNgCziS9JM6Q7bXgXHgEhiR9KMeG/A18Bt4lHhM0vcyrDhg+1XilsQfJG0X4WuYuA84AwJfAROSNmvhG5i4N/GTxB8lRQ2q4g5M/DJxa+JJSd/+l1UwcU/ip4k/SVq7je+FibuBP0BgA1OSvlZwTZi4K/GzxNOSVuJbIUzcmfh54s+Slkth4o7EbYln64VxW/Q4Uo9YLIW22/O2F4kWJM2XFScOR2UDR8xLWigsju1IK9KrFGVO0lJhO2zH9Jze6uGMpC+FA2C7Pzflca2pqUrV9hvgBGjO9Yoh3ygccttvgWPgYaJRSTuFa2X7HfALaAIugPeSdmuh61RtDwCHQCPwFxiWtF+EKvAAGATOgSFJ8ZPSiBsbgD1gVVK8sa74BwjCig5QxiRqAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=16.2f3f6796948453bb5398.js.map