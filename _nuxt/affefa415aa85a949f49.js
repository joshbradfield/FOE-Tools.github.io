(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{386:function(t,e,r){"use strict";r(621);var n=r(3),o=r(417),l=r(444),c=r(5),d={levelCost:"sp_lc",currentDeposits:"sp_cd",yourParticipation:"sp_yp",otherParticipation:"sp_op",yourArcBonus:"sp_yab",fpTargetReward:"sp_ftr"},h={levelCost:{comparator:[">",0],type:"int"},currentDeposits:{comparator:[">=",0],type:"int"},yourParticipation:{comparator:[">=",0],type:"int"},otherParticipation:{comparator:[">=",0],type:"int"},yourArcBonus:{comparator:[">=",0],type:"float"},fpTargetReward:{comparator:[">=",0],type:"int"}},m={name:"SecurePosition",props:{levelData:{type:Object,default:null},canPermalink:{type:Boolean,default:!1},ns:{type:String,default:""},customYourArcBonus:{type:Number|Boolean,default:!1},canCustomYourArcBonus:{type:Boolean,default:!1}},data:function(){var data={i18nPrefix:"components.secure_position.",fp:0,yourParticipation:0,otherParticipation:0,levelCost:this.haveInputLevelCost()?this.$props.levelData.cost:0,currentDeposits:0,yourArcBonus:!1!==this.$props.customYourArcBonus?this.$props.customYourArcBonus:this.$clone(this.$store.get("profile/profiles@[".concat(this.$store.get("global/currentProfile"),"].yourArcBonus)"))),fpTargetReward:0,roi:0,formValid:!1,variousRate:[{rate:90,displayRate:1.9,result:null},{rate:85,displayRate:1.85,result:null},{rate:80,displayRate:1.8,result:null},{rate:75,displayRate:1.75,result:null},{rate:70,displayRate:1.7,result:null}],errors:{levelCost:!1,currentDeposits:!1,yourParticipation:!1,otherParticipation:!1,yourArcBonus:!1,fpTargetReward:!1},change:this.haveInputLevelCost()};return Object.assign(data,this.checkQuery()),this.$store.commit("ADD_URL_QUERY",{key:d.levelCost,value:data.levelCost,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:d.currentDeposits,value:data.currentDeposits,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:d.yourParticipation,value:data.yourParticipation,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:d.otherParticipation,value:data.otherParticipation,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:d.yourArcBonus,value:data.yourArcBonus,ns:this.$props.ns}),this.$store.commit("ADD_URL_QUERY",{key:d.fpTargetReward,value:data.fpTargetReward,ns:this.$props.ns}),data},computed:{isPermalink:Object(c.b)("isPermalink"),permaLink:function(){return{name:"SecurePosition",query:this.$store.getters.getUrlQuery(this.$props.ns)}}},watch:{levelData:function(t){t&&(this.$data.change=!0,this.$data.levelCost=t.cost)},customYourArcBonus:function(t){t&&(this.$data.change=!0,this.yourArcBonus=t)},levelCost:function(t,e){t&&"number"!=typeof t&&t.length>0||(this.$data.change=!0,n.a.handlerForm(this,"levelCost",t&&0!==t.length?t:0,e,h.levelCost.comparator)===n.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:d.levelCost,value:t,ns:this.$props.ns}),this.calculate()))},currentDeposits:function(t,e){t&&"number"!=typeof t&&t.length>0||(this.$data.change=!0,n.a.handlerForm(this,"currentDeposits",t&&0!==t.length?t:0,e,h.currentDeposits.comparator)===n.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:d.currentDeposits,value:t,ns:this.$props.ns}),this.calculate()))},yourParticipation:function(t,e){t&&"number"!=typeof t&&t.length>0||(this.$data.change=!0,n.a.handlerForm(this,"yourParticipation",t&&0!==t.length?t:0,e,h.yourParticipation.comparator)===n.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:d.yourParticipation,value:t,ns:this.$props.ns}),this.calculate()))},otherParticipation:function(t,e){t&&"number"!=typeof t&&t.length>0||(this.$data.change=!0,n.a.handlerForm(this,"otherParticipation",t&&0!==t.length?t:0,e,h.otherParticipation.comparator)===n.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:d.otherParticipation,value:t,ns:this.$props.ns}),this.calculate()))},yourArcBonus:function(t,e){t&&"number"!=typeof t&&t.length>0||(this.$data.change=!0,n.a.handlerForm(this,"yourArcBonus",t&&0!==t.length?t:0,e,h.yourArcBonus.comparator,!this.isPermalink,"profiles@".concat(this.$store.get("global/currentProfile"),".yourArcBonus"),"float")===n.a.FormCheck.VALID&&(this.$props.customYourArcBonus&&this.$emit("customYourArcBonus",t),this.$store.commit("UPDATE_URL_QUERY",{key:d.yourArcBonus,value:t,ns:this.$props.ns}),this.calculate()))},fpTargetReward:function(t,e){if(!(t&&"number"!=typeof t&&t.length>0)){var r=t&&0!==t.length?t:0;this.$data.change=!0,this.haveInputLevelCost()&&(this.$props.levelData.investment.map((function(t){return t.reward})).indexOf(r)>=0?(this.$data.errors.fpTargetReward=!1,this.$store.commit("UPDATE_URL_QUERY",{key:d.fpTargetReward,value:t,ns:this.$props.ns}),this.calculate()):this.$data.errors.fpTargetReward=!0),n.a.handlerForm(this,"fpTargetReward",r,e,h.fpTargetReward.comparator)===n.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:d.fpTargetReward,value:t,ns:this.$props.ns}),this.calculate())}}},methods:{haveInputLevelCost:function(){return null!==this.$props.levelData},getNumberOfRemainingPoints:function(){return isNaN(this.$data.levelCost)||isNaN(this.$data.currentDeposits)||this.$data.levelCost-this.$data.currentDeposits<0?this.$t("components.secure_position.block_place.unknown"):this.$data.levelCost-this.$data.currentDeposits},calculate:function(){if(this.$data.change&&this.checkFormValid()){var t=o.a.ComputeSecurePlace(n.a.normalizeNumberValue(this.$data.levelCost),n.a.normalizeNumberValue(this.$data.currentDeposits),n.a.normalizeNumberValue(this.$data.yourParticipation),n.a.normalizeNumberValue(this.$data.otherParticipation),n.a.normalizeNumberValue(this.$data.yourArcBonus),n.a.normalizeNumberValue(this.$data.fpTargetReward));this.$data.fp=t.fp,this.$data.roi=t.roi;for(var i=0;i<this.$data.variousRate.length;i++)this.$data.variousRate[i].result=o.a.ComputeSecurePlace(n.a.normalizeNumberValue(this.$data.levelCost),n.a.normalizeNumberValue(this.$data.currentDeposits),n.a.normalizeNumberValue(this.$data.yourParticipation),n.a.normalizeNumberValue(this.$data.otherParticipation),n.a.normalizeNumberValue(this.$data.variousRate[i].rate),n.a.normalizeNumberValue(this.$data.fpTargetReward)),this.$data.variousRate[i].result.fpSnipe=JSON.parse(JSON.stringify(this.$data.variousRate[i].result.fp)),this.$data.variousRate[i].result.roiSnipe=JSON.parse(JSON.stringify(this.$data.variousRate[i].result.roi)),this.$data.variousRate[i].result.fp=Math.min(Math.round(this.$data.variousRate[i].displayRate*n.a.normalizeNumberValue(this.$data.fpTargetReward)),this.$data.levelCost-this.$data.currentDeposits),this.$data.variousRate[i].result.roi=Math.round(this.$data.variousRate[i].displayRate*n.a.normalizeNumberValue(this.$data.fpTargetReward))-this.$data.variousRate[i].result.fp}},checkFormValid:function(){return this.$data.formValid=!0,this.$data.errors.levelCost=!1,this.$data.errors.currentDeposits=!1,this.$data.errors.yourParticipation=!1,this.$data.errors.otherParticipation=!1,n.a.normalizeNumberValue(this.$data.levelCost)===n.a.normalizeNumberValue(this.$data.currentDeposits)&&n.a.normalizeNumberValue(this.$data.levelCost)===n.a.normalizeNumberValue(this.$data.yourParticipation)&&n.a.normalizeNumberValue(this.$data.levelCost)===n.a.normalizeNumberValue(this.$data.otherParticipation)&&0===n.a.normalizeNumberValue(this.$data.levelCost)||(n.a.normalizeNumberValue(this.$data.levelCost)>0||(this.$data.formValid=!1,this.$data.errors.levelCost=!0),n.a.normalizeNumberValue(this.$data.currentDeposits)<n.a.normalizeNumberValue(this.$data.levelCost)||(this.$data.formValid=!1,this.$data.errors.levelCost=!0,this.$data.errors.currentDeposits=!0),n.a.normalizeNumberValue(this.$data.yourParticipation)<n.a.normalizeNumberValue(this.$data.levelCost)||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.levelCost=!0),n.a.normalizeNumberValue(this.$data.otherParticipation)<n.a.normalizeNumberValue(this.$data.levelCost)||(this.$data.formValid=!1,this.$data.errors.otherParticipation=!0,this.$data.errors.levelCost=!0),n.a.normalizeNumberValue(this.$data.yourParticipation)+n.a.normalizeNumberValue(this.$data.otherParticipation)<=n.a.normalizeNumberValue(this.$data.currentDeposits)||(this.$data.formValid=!1,this.$data.errors.yourParticipation=!0,this.$data.errors.otherParticipation=!0,this.$data.errors.currentDeposits=!0),this.$data.formValid)},haveError:function(input){return this.$data.errors[input]?"is-danger":""},checkQuery:function(){var t,e={},r=n.a.FormCheck.NO_CHANGE;for(var o in h)(t=n.a.checkFormNumeric(this.$route.query[d[o]],-1,h[o].comparator,h[o].type)).state===n.a.FormCheck.VALID&&(r=n.a.FormCheck.VALID,e[o]=t.value);return r===n.a.FormCheck.VALID&&(this.$store.set("isPermalink",!0),e.change=!0),e},resetValues:function(){this.$data.fp=0,this.$data.yourParticipation=0,this.$data.otherParticipation=0,this.$data.levelCost=this.haveInputLevelCost()?this.$props.levelData.cost:0,this.$data.currentDeposits=0,this.$data.yourArcBonus=!1!==this.$props.customYourArcBonus?this.$props.customYourArcBonus:this.$clone(this.$store.get("profile/profiles@[".concat(this.$store.get("global/currentProfile"),"].yourArcBonus)"))),this.$data.fpTargetReward=0}},mounted:function(){this.calculate()},components:{numberinput:l.a}},f=r(14),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("div",{staticClass:"field"},[r("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.title")))])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:t.canPermalink,expression:"canPermalink"}],staticClass:"column is-half"},[r("div",{staticClass:"field"},[r("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:t.permaLink,exact:""}},[r("span",{staticClass:"icon"},[r("i",{staticClass:"fas fa-link"})]),t._v(" "+t._s(t.$t("utils.permalink")))])],1)])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column"},[r("div",{staticClass:"field"},[r("p",[t._v(t._s(t.$t("utils.description.p1")))]),r("p",[r("button",{staticClass:"button is-danger",on:{click:function(e){return e.preventDefault(),t.resetValues(e)}}},[t._v(t._s(t.$t("utils.Reset_values")))])])])])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.level_cost"),"label-for":"splevelCost",type:t.haveError("levelCost")}})],1),r("div",{staticClass:"column is-half"},[r("numberinput",{attrs:{"controls-position":"compact",type:t.$store.get("isDarkTheme")?"is-light":"is-dark",expanded:"",min:"0",name:"level-cost",id:"splevelCost",autocomplete:"off",disabled:t.haveInputLevelCost(),autofocus:t.canPermalink},model:{value:t.levelCost,callback:function(e){t.levelCost=t._n(e)},expression:"levelCost"}})],1)]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.current_deposits"),"label-for":"spCurrentDeposits",type:t.haveError("currentDeposits")}})],1),r("div",{staticClass:"column is-half"},[r("numberinput",{attrs:{"controls-position":"compact",type:t.$store.get("isDarkTheme")?"is-light":"is-dark",expanded:"",min:"0",name:"current-deposits",id:"spCurrentDeposits",autocomplete:"off"},model:{value:t.currentDeposits,callback:function(e){t.currentDeposits=t._n(e)},expression:"currentDeposits"}})],1)]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_participation"),"label-for":"spYourParticipation",type:t.haveError("yourParticipation")}})],1),r("div",{staticClass:"column is-half"},[r("numberinput",{attrs:{"controls-position":"compact",type:t.$store.get("isDarkTheme")?"is-light":"is-dark",expanded:"",min:"0",name:"your-participation",id:"spYourParticipation",autocomplete:"off"},model:{value:t.yourParticipation,callback:function(e){t.yourParticipation=t._n(e)},expression:"yourParticipation"}})],1)]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.other_participation"),"label-for":"spOtherParticipation",type:t.haveError("otherParticipation")}})],1),r("div",{staticClass:"column is-half"},[r("numberinput",{attrs:{"controls-position":"compact",type:t.$store.get("isDarkTheme")?"is-light":"is-dark",expanded:"",min:"0",name:"other-participation",id:"spOtherParticipation",autocomplete:"off"},model:{value:t.otherParticipation,callback:function(e){t.otherParticipation=t._n(e)},expression:"otherParticipation"}})],1)]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.your_arc_bonus"),"label-for":"spYourArcBonus",type:t.haveError("yourArcBonus")}})],1),r("div",{staticClass:"column is-half"},[r("numberinput",{attrs:{"controls-position":"compact",type:t.$store.get("isDarkTheme")?"is-light":"is-dark",expanded:"",min:"0",step:"0.1",name:"your-arc-bonus",id:"spYourArcBonus",autocomplete:"off",disabled:t.$props.canCustomYourArcBonus},model:{value:t.yourArcBonus,callback:function(e){t.yourArcBonus=t._n(e)},expression:"yourArcBonus"}})],1)]),r("div",{staticClass:"columns"},[t.haveInputLevelCost()?[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.target_reward"),"label-for":"fpTargetReward",type:t.haveError("fpTargetReward")}})],1),r("div",{staticClass:"column is-half"},[r("b-select",{attrs:{id:"fpTargetReward",name:"fp-target-reward",expanded:""},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=e},expression:"fpTargetReward"}},t._l(t.levelData.investment,(function(e,i){return r("option",{key:i,attrs:{id:"option_"+i,autocomplete:"off"},domProps:{value:e.reward}},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.place",{place:i+1,count:e.reward})))])})),0)],1)]:[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t(t.i18nPrefix+"block_place.fp_target_reward"),"label-for":"spFpTargetReward",type:t.haveError("fpTargetReward")}})],1),r("div",{staticClass:"column is-half"},[r("numberinput",{attrs:{"controls-position":"compact",type:t.$store.get("isDarkTheme")?"is-light":"is-dark",expanded:"",min:"0",step:"5",name:"fp-target-reward",id:"spFpTargetReward",autocomplete:"off"},model:{value:t.fpTargetReward,callback:function(e){t.fpTargetReward=t._n(e)},expression:"fpTargetReward"}})],1)]],2),t.levelCost&&t.getNumberOfRemainingPoints()?[r("h4",{staticClass:"title is-4"},[t._v(t._s(t.$t("utils.Result")))]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_complete_level")))])]),r("div",{staticClass:"column is-half"},[r("p",[r("b",[t._v(t._s(t.$formatNumber(t.getNumberOfRemainingPoints())))])])])]),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.fp_need_to_lock_plural")))])]),r("div",{staticClass:"column is-half"},[t.fp>0?[t.fp<=t.yourParticipation?r("p",[t._m(0)]):r("p",[r("b",[t._v(t._s(t.$formatNumber(t.fp)))]),t.fp>=t.yourParticipation&&t.fp-t.yourParticipation>0&&t.yourParticipation>0?[t._v(" ("),r("b-tooltip",{attrs:{type:t.$store.get("isDarkTheme")?"is-light":"is-dark",label:t.$t(t.i18nPrefix+"block_place.result.still_to_put"),dashed:""}},[r("span",[t._v(t._s(t.$formatNumber(t.fp-t.yourParticipation)))])]),t._v(")")]:t._e(),t.roi>0?[t._v(" ("),t._m(1),t._v(t._s(t.$formatNumber(Math.abs(t.roi)))+")")]:0===t.roi?[t._v(" ("),t._m(2),t._v(")")]:[t._v(" ("),t._m(3),t._v(t._s(t.$formatNumber(Math.abs(t.roi)))+")")]],2)]:r("p",[t._v(t._s(t.$t(t.i18nPrefix+"block_place.result.cant_block")))])],2)])]:t._e(),r("div",{directives:[{name:"show",rawName:"v-show",value:t.fp>0&&t.yourArcBonus>=0&&t.fpTargetReward>0,expression:"(fp > 0) && (yourArcBonus >= 0) && (fpTargetReward > 0)"}],staticClass:"margin-top-one-em"},[r("h5",{staticClass:"title is-5"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.various_rate")))]),r("div",{staticClass:"is-hidden-mobile"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("h6",{staticClass:"title is-6"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.rate")))])]),r("div",{staticClass:"column is-one-quarter"},[r("h6",{staticClass:"title is-6"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_according_rate")))])]),r("div",{staticClass:"column is-one-quarter"},[r("h6",{staticClass:"title is-6"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_lock")))])])])]),t._l(t.variousRate,(function(e,n){return e.rate!==t.yourArcBonus?r("div",{directives:[{name:"show",rawName:"v-show",value:e!==t.yourArcBonus,expression:"value !== yourArcBonus"}],staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("p"),r("span",{staticClass:"title is-6 is-hidden-tablet"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.rate"))+": ")]),t._v(t._s(e.displayRate))]),r("div",{staticClass:"column is-one-quarter"},[e.result&&null!==e.result.fp?[e.result.roi>0?r("p",[r("span",{staticClass:"is-hidden-tablet"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_according_rate"))+": ")]),r("b",[t._v(t._s(t.$formatNumber(e.result.fp)))]),t._v(" ("),t._m(4,!0),t._v(t._s(t.$formatNumber(Math.abs(e.result.roi)))+")")]):0===e.result.roi?r("p",[r("span",{staticClass:"is-hidden-tablet"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_according_rate"))+": ")]),r("b",[t._v(t._s(t.$formatNumber(e.result.fp))+" (")]),t._m(5,!0),t._v(")")]):r("p",[r("span",{staticClass:"is-hidden-tablet"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_according_rate"))+": ")]),r("b",[t._v(t._s(t.$formatNumber(e.result.fp)))]),t._v(" ("),t._m(6,!0),t._v(t._s(t.$formatNumber(Math.abs(e.result.roi)))+")")])]:t._e()],2),r("div",{staticClass:"column is-one-quarter"},[e.result&&null!==e.result.fp?[e.result.roiSnipe>0?r("p",[r("span",{staticClass:"is-hidden-tablet"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_lock"))+": ")]),r("b",[t._v(t._s(t.$formatNumber(e.result.fpSnipe)))]),t._v(" ("),t._m(7,!0),t._v(t._s(t.$formatNumber(Math.abs(e.result.roiSnipe)))+")")]):0===e.result.roiSnipe?r("p",[r("span",{staticClass:"is-hidden-tablet"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_lock"))+": ")]),r("b",[t._v(t._s(t.$formatNumber(e.result.fpSnipe))+" (")]),t._m(8,!0),t._v(")")]):r("p",[r("span",{staticClass:"is-hidden-tablet"},[t._v(t._s(t.$t(t.i18nPrefix+"block_place.fp_to_lock"))+": ")]),r("b",[t._v(t._s(t.$formatNumber(e.result.fpSnipe)))]),t._v(" ("),t._m(9,!0),t._v(t._s(t.$formatNumber(Math.abs(e.result.roiSnipe)))+")")])]:t._e()],2)]):t._e()}))],2)],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-lock"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small has-text-success",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-exchange-alt"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small has-text-danger",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small has-text-success",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-exchange-alt"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small has-text-danger",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-down"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small has-text-success",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-up"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-exchange-alt"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"icon is-small has-text-danger",staticStyle:{"vertical-align":"middle"}},[e("i",{staticClass:"fas fa-arrow-down"})])}],!1,null,null,null);e.a=component.exports},417:function(t,e,r){"use strict";var n=r(4),o=r(3),l=r(6);function c(t,e,r){if("number"!=typeof r)throw new l.g({expected:"number",actual:Object(n.a)(r),additionalMessage:'for parameter "'.concat(t,'" of ').concat(e)});if(r<0)throw new l.b({type:l.a["<"],value:r,boundValue:0,additionalMessage:'for parameter "'.concat(t,'" of ').concat(e)})}function d(t,e,r){if(!(r instanceof Array))throw new l.g({expected:"Array",actual:Object(n.a)(r),additionalMessage:'for parameter "'.concat(t,'" of ').concat(e)});r.forEach((function(r,n){c("".concat(t,"[").concat(n,"]"),e,r)}))}function h(t,e,r){if(!(r instanceof Array))throw new l.g({expected:"Array",actual:Object(n.a)(r),additionalMessage:'for parameter "'.concat(t,'" of ').concat(e)});r.forEach((function(r,n){if(!("cost"in r))throw new l.h({expected:"cost",actual:"".concat(t,"[").concat(n,"]"),additionalMessage:'in "checkGbData" called by '.concat(e)});if(!("reward"in r))throw new l.h({expected:"reward",actual:"".concat(t,"[").concat(n,"]"),additionalMessage:'in "checkGbData" called by '.concat(e)});c("".concat(t,"[").concat(n,"].cost"),e,r.cost),d("".concat(t,"[").concat(n,"].reward"),e,r.reward)}))}function m(t,e,r,n,o,l){var c=Math.ceil((t-e-(n-r))/2)+n;if(c<=n)return{fp:-1,roi:0};var d=0;if(o>=0&&l>0){var h=c>r?c:r,m=(100+o)/100;d=Math.round(m*l-h)}else 0===l&&(d=-c);return{fp:c,roi:d}}function f(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,c={};c.cost=t[e-1].cost,c.investment=[],c.otherInvestment=[];for(var d=n.reduce((function(i,t){return i+t.value}),0),h=o+d,f=JSON.parse(JSON.stringify(n)),v=!1,_=0,$=0,y=o+d,P=o,C=0,i=0;i<t[e-1].reward.length&&!v;i++){var w={reward:t[e-1].reward[i],expectedParticipation:Math.round(t[e-1].reward[i]*(1+r[i]/100)),isInvestorParticipation:!1,roi:0,snipe:{fp:0,roi:0},defaultParticipationIndex:-1},k=0,N=P;f.length>0&&(k=f[0].value);var R=m(c.cost,y,k,0,r[i],w.reward);if(k>=w.expectedParticipation||R.fp>0&&k>=R.fp)w.participation=k,w.isInvestorParticipation=!0,w.roi=w.expectedParticipation-k,w.defaultParticipationIndex=C,C++,f.shift();else{var x=w.expectedParticipation,V=_+f.reduce((function(i,t){return i+t.value}),0),D=Math.max($,x),A=V+D;w.participation=w.expectedParticipation,A>=c.cost&&(w.participation+=c.cost-A)}for(var S=0,T=0,B=0;B<f.length;B++){if(f[B].isPotentialSniper){0===T&&(T=f[B].value);for(var E=B+1;E<f.length;E++)S+=f[E].value;break}S+=f[B].value}N=Math.max(0,c.cost-(_+S+2*w.participation));var I=w.isInvestorParticipation?w.participation:0;w.snipe=m(c.cost,h,T,I,l,w.reward),0!==w.participation?(N<P&&(N=P),w.preparation=N,P=N,y=(_+=w.participation)+($=Math.max($,w.preparation))+f.reduce((function(i,t){return i+t.value}),0),w.cumulativeInvestment=y,c.investment.push(w),!v&&y>=c.cost&&(v=!0)):v=!0}c.totalPreparations=Math.max(c.investment[c.investment.length-1].preparation,c.cost-_-f.reduce((function(i,t){return i+t.value}),0)),c.level=e;for(var F=c.investment.length;F<t[e-1].reward.length;F++)c.investment.push({reward:t[e-1].reward[F],expectedParticipation:Math.round(t[e-1].reward[F]*(1+r[F]/100)),preparation:c.totalPreparations,isInvestorParticipation:!1,roi:0,snipe:{fp:0,roi:0},defaultParticipationIndex:-1}),f.length&&(c.investment[c.investment.length-1].isInvestorParticipation=!0,c.investment[c.investment.length-1].roi=c.investment[c.investment.length-1].expectedParticipation-f[0].value,c.investment[c.investment.length-1].participation=f[0].value,c.investment[c.investment.length-1].defaultParticipationIndex=C,C++,f.shift());for(;f.length;)c.otherInvestment.push({reward:0,expectedParticipation:0,preparation:0,participation:f[0].value,defaultParticipationIndex:C,isInvestorParticipation:!0,snipe:{fp:0,roi:0}}),C++,f.shift();return c}e.a={ComputeLevelInvestmentRange:function(t,e,r,n){var c,m,v="ComputeLevelInvestmentRange(from, to, investorPercentage, gb)";if(h("gb",v,n),!o.a.inRange(t,1,n.length))throw new l.i({value:t,lowerBound:1,upperBound:n.length,additionalMessage:'for parameter "from" of '.concat(v)});if(!o.a.inRange(e,1,n.length))throw new l.i({value:e,lowerBound:1,upperBound:n.length,additionalMessage:'for parameter "to" of '.concat(v)});d("investorPercentage",v,r),t>e?(c=e,m=t):(c=t,m=e);for(var _={global:{cost:0,totalPreparations:0},levels:[]},i=c;i<=m;i++)_.levels.push(f(n,i,r)),_.global.cost+=_.levels[_.levels.length-1].cost,_.global.totalPreparations+=_.levels[_.levels.length-1].totalPreparations;return _},ComputeSecurePlace:function(t,e,r,n,o,l){var d="ComputeSecurePlace(levelCost, currentDeposits, yourParticipation, otherParticipation, yourArcBonus, fpTargetReward)";return c("levelCost",d,t),c("currentDeposits",d,e),c("yourParticipation",d,r),c("otherParticipation",d,n),c("yourArcBonus",d,o),c("fpTargetReward",d,l),m(t,e,r,n,o,l)},ComputeLevelInvestment:function(t,e,r){var m=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],v=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,_=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,$="ComputeLevelInvestment(currentLevel, investorPercentage, gb, defaultParticipation, ownerPreparationyourArcBonus)";if(h("gb",$,r),!o.a.inRange(t,1,r.length))throw new l.i({value:t,lowerBound:1,upperBound:r.length,additionalMessage:'for parameter "currentLevel" of '.concat($)});if(d("investorPercentage",$,e),c("ownerPreparation",$,v),c("yourArcBonus",$,_),!(m instanceof Array))throw new l.g({expected:"Array",actual:Object(n.a)(m),additionalMessage:'for parameter "defaultParticipation" of '.concat($)});m.forEach((function(t,e){c("defaultParticipation[".concat(e,"].value"),$,t.value)}));var y=m.reduce((function(i,t){return i+t.value}),0);if(y>r[t-1].cost)throw new l.b({type:l.a[">"],value:y,boundValue:r[t-1].cost,additionalMessage:'for the sum of values of parameter "defaultParticipation" of '.concat($)});if(v+y>r[t-1].cost)throw new l.b({type:l.a[">"],value:"participationSum + ownerPreparation",boundValue:r[t-1].cost,additionalMessage:'for parameters "participationSum" and "ownerPreparation" of '.concat($)});return f(r,t,e,m.sort((function(a,b){return b.value-a.value})),v,_)}}},444:function(t,e,r){"use strict";r(26),r(27),r(10),r(621);var n=!0,o="mdi",l={name:"Numberinput",mixins:[{props:{size:String,expanded:Boolean,loading:Boolean,rounded:Boolean,icon:String,iconPack:String,autocomplete:String,maxlength:[Number,String],useHtml5Validation:{type:Boolean,default:function(){return n}}},data:function(){return{isValid:!0,isFocused:!1,newIconPack:this.iconPack||o}},computed:{parentField:function(){for(var t=this.$parent,i=0;i<3;i++)t&&!t.$data._isField&&(t=t.$parent);return t},statusType:function(){if(this.parentField&&this.parentField.newType){if("string"==typeof this.parentField.newType)return this.parentField.newType;for(var t in this.parentField.newType)if(this.parentField.newType[t])return t}},statusMessage:function(){if(this.parentField)return this.parentField.newMessage},iconSize:function(){switch(this.size){case"is-small":return this.size;case"is-medium":return;case"is-large":return"mdi"===this.newIconPack?"is-medium":""}}},methods:{focus:function(){var t=this;void 0!==this.$data._elementRef&&this.$nextTick((function(){var e=t.$el.querySelector(t.$data._elementRef);e&&e.focus()}))},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t),this.checkHtml5Validity()},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},checkHtml5Validity:function(){var t=this;if(this.useHtml5Validation&&void 0!==this.$refs[this.$data._elementRef]){var e=this.$el.querySelector(this.$data._elementRef),r=null,n=null,o=!0;return e.checkValidity()||(r="is-danger",n=e.validationMessage,o=!1),this.isValid=o,this.$nextTick((function(){t.parentField&&(t.parentField.type||(t.parentField.newType=r),t.parentField.message||(t.parentField.newMessage=n))})),this.isValid}}}}],inheritAttrs:!1,props:{value:Number,min:[Number,String],max:[Number,String],step:[Number,String],disabled:Boolean,type:{type:String,default:"is-primary"},editable:{type:Boolean,default:!0},controlsRounded:{type:Boolean,default:!1},controlsPosition:String},data:function(){return{newValue:isNaN(this.value)?parseFloat(this.min)||0:this.value,newStep:this.step||1,_elementRef:"input"}},computed:{computedValue:{get:function(){return this.newValue},set:function(t){var e=t;""===t&&(e=parseFloat(this.min)||0),this.newValue=e,this.$emit("input",e),this.$refs.input.checkHtml5Validity()}},fieldClasses:function(){return[{"has-addons":"compact"===this.controlsPosition},{"is-grouped":"compact"!==this.controlsPosition}]},buttonClasses:function(){return[this.type,this.size,{"is-rounded":this.controlsRounded}]},minNumber:function(){return"string"==typeof this.min?parseFloat(this.min):this.min},maxNumber:function(){return"string"==typeof this.max?parseFloat(this.max):this.max},stepNumber:function(){return"string"==typeof this.newStep?parseFloat(this.newStep):this.newStep},disabledMin:function(){return this.computedValue-this.stepNumber<this.minNumber},disabledMax:function(){return this.computedValue+this.stepNumber>this.maxNumber},stepDecimals:function(){var t=this.stepNumber.toString(),e=t.indexOf(".");return e>=0?t.substring(e+1).length:0}},watch:{value:function(t){this.newValue=t}},methods:{decrement:function(){if(void 0===this.minNumber||this.computedValue-this.stepNumber>=this.minNumber){var t=this.computedValue-this.stepNumber;this.computedValue=parseFloat(t.toFixed(this.stepDecimals))}},increment:function(){if(void 0===this.maxNumber||this.computedValue+this.stepNumber<=this.maxNumber){var t=this.computedValue+this.stepNumber;this.computedValue=parseFloat(t.toFixed(this.stepDecimals))}},onControlClick:function(t,e){0===t.detail&&(e?this.increment():this.decrement())},onStartLongPress:function(t,e){var r=this;0!==t.button&&"touchstart"!==t.type||(this._$intervalTime=new Date,clearInterval(this._$intervalRef),this._$intervalRef=this._$intervalRef=setInterval((function(){e?r.increment():r.decrement()}),100))},onStopLongPress:function(t){new Date-this._$intervalTime<100&&(t?this.increment():this.decrement()),clearInterval(this._$intervalRef),this._$intervalRef=null}}},c=r(14),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"b-numberinput field",class:t.fieldClasses},[r("p",{staticClass:"control"},[r("span",{staticClass:"button",class:t.buttonClasses,attrs:{type:"button",disabled:t.disabled||t.disabledMin},on:{mousedown:function(e){return t.onStartLongPress(e,!1)},mouseup:function(e){return t.onStopLongPress(!1)},mouseleave:function(e){return t.onStopLongPress(!1)},touchstart:function(e){return e.preventDefault(),t.onStartLongPress(e,!1)},touchend:function(e){return t.onStopLongPress(!1)},touchcancel:function(e){return t.onStopLongPress(!1)},click:function(e){return t.onControlClick(e,!1)}}},[r("b-icon",{attrs:{icon:"minus",pack:t.iconPack,size:t.iconSize}})],1)]),r("b-input",t._b({ref:"input",attrs:{type:"number",step:t.newStep,max:t.max,min:t.min,size:t.size,disabled:t.disabled,readonly:!t.editable,loading:t.loading,rounded:t.rounded,icon:t.icon,"icon-pack":t.iconPack,autocomplete:t.autocomplete,expanded:t.expanded},on:{focus:function(e){return t.$emit("focus",e)},blur:function(e){return t.$emit("blur",e)}},model:{value:t.computedValue,callback:function(e){t.computedValue=t._n(e)},expression:"computedValue"}},"b-input",t.$attrs,!1)),r("p",{staticClass:"control"},[r("span",{staticClass:"button",class:t.buttonClasses,attrs:{type:"button",disabled:t.disabled||t.disabledMax},on:{mousedown:function(e){return t.onStartLongPress(e,!0)},mouseup:function(e){return t.onStopLongPress(!0)},mouseleave:function(e){return t.onStopLongPress(!0)},touchstart:function(e){return e.preventDefault(),t.onStartLongPress(e,!0)},touchend:function(e){return t.onStopLongPress(!0)},touchcancel:function(e){return t.onStopLongPress(!0)},click:function(e){return t.onControlClick(e,!0)}}},[r("b-icon",{attrs:{icon:"plus",pack:t.iconPack,size:t.iconSize}})],1)])],1)}),[],!1,null,null,null);e.a=component.exports},621:function(t,e,r){"use strict";var n=r(15),o=r(48),l=r(53),c=r(296),d=r(91),h=r(32),m=r(72).f,f=r(93).f,v=r(33).f,_=r(807).trim,$=n.Number,y=$,P=$.prototype,C="Number"==l(r(92)(P)),w="trim"in String.prototype,k=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=w?e.trim():_(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,h=c.length;i<h;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!$(" 0o1")||!$("0b1")||$("+0x1")){$=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof $&&(C?h((function(){P.valueOf.call(r)})):"Number"!=l(r))?c(new y(k(e)),r,$):k(e)};for(var N,R=r(29)?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;R.length>x;x++)o(y,N=R[x])&&!o($,N)&&v($,N,f(y,N));$.prototype=P,P.constructor=$,r(34)(n,"Number",$)}},807:function(t,e,r){var n=r(21),o=r(54),l=r(32),c=r(808),d="["+c+"]",h=RegExp("^"+d+d+"*"),m=RegExp(d+d+"*$"),f=function(t,e,r){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),h=o[t]=d?e(v):c[t];r&&(o[r]=h),n(n.P+n.F*d,"String",o)},v=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(h,"")),2&e&&(t=t.replace(m,"")),t};t.exports=f},808:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);