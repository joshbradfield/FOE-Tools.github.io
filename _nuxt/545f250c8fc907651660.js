(window.webpackJsonp=window.webpackJsonp||[]).push([[13,14],{374:function(e,t){e.exports={NoAge:{key:"NoAge",index:0},BronzeAge:{key:"BronzeAge",index:1},IronAge:{key:"IronAge",index:2},EarlyMiddleAges:{key:"EarlyMiddleAges",index:3},HighMiddleAges:{key:"HighMiddleAges",index:4},LateMiddleAges:{key:"LateMiddleAges",index:5},ColonialAge:{key:"ColonialAge",index:6},IndustrialAge:{key:"IndustrialAge",index:7},ProgressiveEra:{key:"ProgressiveEra",index:8},ModernEra:{key:"ModernEra",index:9},PostmodernEra:{key:"PostmodernEra",index:10},ContemporaryEra:{key:"ContemporaryEra",index:11},Tomorrow:{key:"Tomorrow",index:12},TheFuture:{key:"TheFuture",index:13},ArcticFuture:{key:"ArcticFuture",index:14},OceanicFuture:{key:"OceanicFuture",index:15},VirtualFuture:{key:"VirtualFuture",index:16},SpaceAgeMars:{key:"SpaceAgeMars",index:17}}},388:function(e,t,o){var r=o(21);r(r.P,"Array",{fill:o(389)}),o(109)("fill")},389:function(e,t,o){"use strict";var r=o(51),n=o(295),l=o(47);e.exports=function(e){for(var t=r(this),o=l(t.length),c=arguments.length,d=n(c>1?arguments[1]:void 0,o),f=c>2?arguments[2]:void 0,_=void 0===f?o:n(f,o);_>d;)t[d++]=e;return t}},390:function(e,t){e.exports.bonus={coin:"coin",supply:"supply",good:"good",special_good:"special_good",good_bonus:"good_bonus",expansion:"expansion",medal:"medal",diamond:"diamond",pvp_tower:"pvp_tower",blueprint:"blueprint",military_boost:"Military boost",fierce_resistance:"fierce_resistance",coin_boost:"coin_boost",supply_boost:"supply_boost",good_production:"good_production",medal_production:"medal_production",research:"research",coin_production:"coin_production",supply_production:"supply_production",population:"population",happiness:"happiness",quest_reward_boost:"quest_reward_boost",penal_unit:"penal_unit",guild_goods:"guild_goods",support_pool_bonus:"support_pool_bonus",aid_goods:"aid_goods",plunder_goods:"plunder_goods",contribution_boost:"contribution_boost",aid_blueprints:"aid_blueprints",relic_hunt:"relic_hunt",critical_hit:"critical_hit",helping_hands:"helping_hands",plunder_and_pillage:"plunder_and_pillage",first_strike:"first_strike",double_collection:"double_collection",exploration_site:"exploration_site"}},391:function(e,t){},408:function(e,t,o){"use strict";o(50),o(19),o(31),o(37),o(25),o(26),o(27),o(388),o(16),o(10),o(30);var r=o(2),n=o(374),l=o.n(n),c=o(390),d=o(71);function f(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(o);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _(e,t)}(e))){var i=0,t=function(){};return{s:t,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,r,n=!0,l=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return n=e.done,e},e:function(e){l=!0,r=e},f:function(){try{n||null==o.return||o.return()}finally{if(l)throw r}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=new Array(t);i<t;i++)o[i]=e[i];return o}var m={},v={},y={},h=o.n(d)()(l.a);delete h.NoAge;var k={name:"CampaignCost",data:function(){y=this.$store.get("foe/campaignCost@campaignCost"),v=this.$store.get("foe/goods@goods"),m=this.$store.get("foe/goods@agesGoods");var e=this.sortProvinceArray(y,h.BronzeAge.key);return{i18nPrefix:"components.campaign_cost.",ages:h,agesGoods:m,campaignCost:y,currentAge:h.BronzeAge.key,province:e[Object.keys(e)[0]],result:null,sectorConquired:[],haveUnknownCosts:!1,errors:{currentAge:!1,province:!1}}},watch:{currentAge:function(e){Object.keys(this.$data.ages).indexOf(e)>=0?(this.$data.errors.currentAge=!1,this.$data.province=this.sortProvinceArray(y,e)[Object.keys(y[e])[0]],this.compute()):this.$data.errors.currentAge=!0},province:function(e){Object.keys(y[this.$data.currentAge]).indexOf(e.key)>=0?(this.$data.errors.province=!1,r.a.set(this.$data,"sectorConquired",Array(e.sectors.length).fill(!1)),this.compute()):this.$data.errors.province=!0}},methods:{haveError:function(e){return this.$data.errors[e]?"is-danger":""},sortProvinceArray:function(e,t){var o=this,r={};return Object.keys(e[t]).sort((function(a,b){return o.$t("foe_data.province."+a)>o.$t("foe_data.province."+b)?1:o.$t("foe_data.province."+b)>o.$t("foe_data.province."+a)?-1:0})).forEach((function(o){r[o]=e[t][o]})),r},switchConquired:function(e,t){this.$data.sectorConquired[e]=!!t,this.compute()},compute:function(){if(!this.$data.errors.currentAge&&!this.$data.errors.province){this.$data.haveUnknownCosts=!1;var e,t={},o={},n=[],l=[],d=0,_={},y=f(this.$data.province.sectors);try{for(y.s();!(e=y.n()).done;){var h=e.value;if(Object.keys(h).indexOf("cost")<0)this.$data.haveUnknownCosts=!0;else{var k,$=f(h.cost);try{for($.s();!(k=$.n()).done;){var C=k.value;C.type===c.bonus.special_good?(o[C.key]||(o[C.key]=0,l.push({key:C.key,displayName:this.$t("foe_data.goods."+C.key)})),o[C.key]+=this.$data.sectorConquired[d]?0:C.value):(t[v[C.key].age]||(t[v[C.key].age]={}),t[v[C.key].age][C.key]||(t[v[C.key].age][C.key]=0,_[v[C.key].age]=!0),t[v[C.key].age][C.key]+=this.$data.sectorConquired[d]?0:C.value)}}catch(e){$.e(e)}finally{$.f()}d++}}}catch(e){y.e(e)}finally{y.f()}for(var x in _){var A,w=f(m[x].goods);try{for(w.s();!(A=w.n()).done;){var O=A.value;n.push({key:O.key,age:O.age,displayName:this.$t("foe_data.goods."+O.key)})}}catch(e){w.e(e)}finally{w.f()}}var N={good:t,specialGoods:o,nbColumns:n.length+l.length,goodsColumnsData:n,specialGoodsColumnsData:l};r.a.set(this.$data,"result",N)}}},mounted:function(){this.compute()}},$=o(14),component=Object($.a)(k,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h4",{staticClass:"title is-4"},[e._v(e._s(e.$t(e.i18nPrefix+"title")))]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.haveUnknownCosts,expression:"haveUnknownCosts"}],staticClass:"columns"},[o("div",{staticClass:"column"},[o("b-message",{attrs:{title:e.$t("utils.Information"),type:"is-warning","has-icon":""}},[e._v(e._s(e.$t(e.i18nPrefix+"message.haveUnknownCosts")))])],1)]),o("div",{staticClass:"columns"},[o("div",{staticClass:"column is-half"},[o("b-field",{attrs:{id:"current-age-container",label:e.$t("utils.choose_age"),"label-for":"current-age",type:e.haveError("currentAge")}},[o("b-select",{attrs:{id:"current-age",name:"current-age",expanded:""},model:{value:e.currentAge,callback:function(t){e.currentAge=t},expression:"currentAge"}},e._l(e.ages,(function(t){return o("option",{key:t.key,attrs:{id:"option_"+t.key,autocomplete:"off"},domProps:{value:t.key,selected:e.currentAge==t.key}},[e._v(e._s(e.$t("foe_data.age."+t.key)))])})),0)],1)],1),e.errors.currentAge||e.errors.province?e._e():o("div",{staticClass:"column is-half"},[o("b-field",{attrs:{label:e.$t(e.i18nPrefix+"choose_province"),"label-for":"provinceContainer"}},[o("b-select",{attrs:{id:"provinceContainer",expanded:""},model:{value:e.province,callback:function(t){e.province=t},expression:"province"}},e._l(e.sortProvinceArray(e.campaignCost,e.currentAge),(function(t){return null!==e.campaignCost?o("option",{key:t.key,domProps:{selected:e.province.key===t.key,value:t}},[e._v(e._s(e.$t("foe_data.province."+t.key)))]):e._e()})),0)],1)],1)]),o("div",{staticClass:"table-wrapper"},[null===e.result||e.errors.currentAge||e.errors.province?e._e():o("table",{staticClass:"table is-bordered is-striped is-narrow is-fullwidth"},[o("thead",[o("tr",[o("th",{attrs:{colspan:e.result.nbColumns+2}},[o("p",[e._v(e._s(e.$t("foe_data.province."+e.province.key)))])])]),o("tr",[o("th",{attrs:{rowspan:"2"}},[o("p",[e._v(e._s(e.$t("utils.Rewards")))])]),o("th",{attrs:{rowspan:"2"}},[o("p",[e._v(e._s(e.$t("utils.Conquered")))])]),e._l(e.result.good,(function(t,r){return o("th",{attrs:{colspan:"5"}},[o("p",[e._v(e._s(e.$t("foe_data.age."+r)))])])})),e._l(e.result.specialGoodsColumnsData,(function(t){return o("th",[o("p",[e._v(e._s(t.displayName))])])}))],2),o("tr",[e._l(e.result.goodsColumnsData,(function(e){return o("th",[o("figure",{staticClass:"image-inherit image is-24x24"},[o("img",{attrs:{src:"/img/foe/goods/"+e.key+".png",alt:e.displayName,title:e.displayName}})])])})),e._l(e.result.specialGoodsColumnsData,(function(e){return o("th",[o("figure",{staticClass:"image-inherit image is-24x24"},[o("img",{attrs:{src:"/img/foe/special_goods/"+e.key+".png",alt:e.displayName,title:e.displayName}})])])}))],2)]),o("tbody",e._l(e.province.sectors,(function(t,r){return o("tr",[o("td",e._l(t.reward,(function(t){return o("div",{staticClass:"media"},["good_bonus"!==t.type?o("div",{staticClass:"media-left",staticStyle:{"margin-right":"0em !important"}},[o("figure",{staticClass:"image-inherit image is-24x24",staticStyle:{"margin-left":".5em !important","margin-right":"1em !important"}},[o("img",{attrs:{src:"/img/foe/bonus/"+t.type+".png",alt:e.$t("foe_data.bonus."+t.type+".name"),title:e.$t("foe_data.bonus."+t.type+".name")}})])]):e._e(),o("div",{staticClass:"media-content"},["good_bonus"===t.type?o("p",[e._v(e._s(e.$t("foe_data.bonus.good_bonus.name")))]):o("p",[e._v(e._s(e.$formatNumber(t.value)))])])])})),0),o("td",[o("b-switch",{attrs:{value:e.sectorConquired[r],type:"is-info"},on:{input:function(t){return e.switchConquired(r,t)}}},[e._v(e._s(e.sectorConquired[r]?e.$t("utils.Yes"):e.$t("utils.No")))])],1),e._l(e.result.goodsColumnsData,(function(n){return o("td",[Object.keys(t).indexOf("cost")>=0?e._l(t.cost,(function(t){return o("div",[t.key===n.key?o("p",[e.sectorConquired[r]?o("s",[e._v(e._s(e.$formatNumber(t.value)))]):o("span",[e._v(e._s(e.$formatNumber(t.value)))])]):e._e()])})):o("div",[o("p",[e._v("?")])])],2)})),e._l(e.result.specialGoodsColumnsData,(function(n){return o("td",[Object.keys(t).indexOf("cost")>=0?e._l(t.cost,(function(t){return o("div",[t.key===n.key?o("p",[e.sectorConquired[r]?o("s",[e._v(e._s(e.$formatNumber(t.value)))]):o("span",[e._v(e._s(e.$formatNumber(t.value)))])]):e._e()])})):o("div",[o("p",[e._v("?")])])],2)}))],2)})),0),o("tfoot",[o("tr",[o("th",[e._l(e.province.reward,(function(t){return["good"!==t.type?o("div",{staticClass:"media"},["good_bonus"!==t.type?o("div",{staticClass:"media-left",staticStyle:{"margin-right":"0em !important"}},[o("figure",{staticClass:"image-inherit image",class:"pvp_tower"!==t.type?"is-24x24":"is-30xauto",staticStyle:{"margin-left":".5em !important","margin-right":"1em !important"}},["pvp_tower"!==t.type?o("img",{attrs:{src:"/img/foe/bonus/"+t.type+".png",alt:e.$t("foe_data.bonus."+t.type+".name"),title:e.$t("foe_data.bonus."+t.type+".name")}}):o("img",{attrs:{src:"/img/foe/bonus/"+e.currentAge+"_tower.png",alt:e.$t("foe_data.bonus."+t.type+".name"),title:e.$t("foe_data.bonus."+t.type+".name")}})])]):e._e(),o("div",{staticClass:"media-content",style:{overflow:"good_bonus"===t.type&&t.age?"unset":"hidden"}},["good_bonus"===t.type?o("p",[e._v(e._s(e.$t("foe_data.bonus.good_bonus.name"))),t.age?[e._v(" "),o("b-tooltip",{attrs:{type:e.$store.get("isDarkTheme")?"is-light":"is-dark",label:e.$t("foe_data.age."+t.age),dashed:""}},[o("span",[e._v(e._s(e.$t("foe_data.age_short."+t.age)))])])]:e._e()],2):t.value&&t.value>0?o("p",[e._v(e._s(e.$formatNumber(t.value)))]):e._e()])]):e._l(e.agesGoods[e.currentAge].goods,(function(r){return o("div",{key:r.key,staticClass:"media"},["good_bonus"!==t.type?o("div",{staticClass:"media-left",staticStyle:{"margin-right":"0em !important"}},[o("figure",{staticClass:"image-inherit image is-24x24",staticStyle:{"margin-left":".5em !important","margin-right":"1em !important"}},[o("img",{attrs:{src:"/img/foe/goods/"+r.key+".png",alt:e.$t("foe_data.goods."+r.key),title:e.$t("foe_data.goods."+r.key)}})])]):e._e(),o("div",{staticClass:"media-content"},[o("p",[e._v(e._s(e.$formatNumber(t.value)))])])])}))]}))],2),o("th",[o("p",[e._v(e._s(e.$t("utils.Total")))])]),e._l(e.result.goodsColumnsData,(function(t){return o("th",e._l(e.result.good,(function(r){return o("div",e._l(r,(function(r,n){return o("div",[n===t.key?o("p",[e._v(e._s(e.$formatNumber(r)))]):e._e()])})),0)})),0)})),e._l(e.result.specialGoodsColumnsData,(function(t){return o("th",e._l(e.result.specialGoods,(function(r,n){return o("div",[n===t.key?o("p",[e._v(e._s(e.$formatNumber(r)))]):e._e()])})),0)}))],2)])])])])}),[],!1,null,null,null);t.a=component.exports},428:function(e,t,o){"use strict";o.r(t);o(16),o(10),o(30),o(46);var r=o(11),n=o(408),l="routes.campaign_cost.",c={head:function(){return this.$store.set("hero",{title:l+"hero.title",subtitle:l+"hero.subtitle"}),{title:this.$t(l+"title")}},fetch:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var o,r,n,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=e.app,r=e.store,Object.keys(r.get("foe/campaignCost")).length){t.next=6;break}return t.next=4,o.$axios.$get("/foe-data/campaign-cost.json");case 4:n=t.sent,r.set("foe/campaignCost",n);case 6:if(Object.keys(r.get("foe/goods")).length){t.next=11;break}return t.next=9,o.$axios.$get("/foe-data/goods.json");case 9:l=t.sent,r.set("foe/goods",l);case 11:case"end":return t.stop()}}),t)})))()},data:function(){return this.$store.commit("RESTORE_HERO"),{i18nPrefix:l}},components:{campaignCost:n.a}},d=o(14),component=Object(d.a)(c,(function(){var e=this.$createElement;return(this._self._c||e)("campaign-cost")}),[],!1,null,null,null);t.default=component.exports},448:function(e,t,o){"use strict";var r=o(391),n=o.n(r);t.default=n.a},627:function(e,t,o){"use strict";o.r(t);var r=o(428).default,n=o(14),l=o(448),component=Object(n.a)(r,void 0,void 0,!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);t.default=component.exports}}]);