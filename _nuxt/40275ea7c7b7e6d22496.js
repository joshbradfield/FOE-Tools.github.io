(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{834:function(t,e,r){"use strict";r.r(e);r(16),r(10),r(30),r(46);var o=r(11),n=r(570),c=r(571),h=r(386),l=r(3),f="routes.gb_investment.",$={tab:"gbi_tab"};e.default={validate:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.app,o=t.store,n=t.params,Object.keys(o.get("foe/gbs")).length){e.next=6;break}return e.next=4,r.$axios.$get("/foe-data/gbs.json");case 4:c=e.sent,o.set("foe/gbs",c);case 6:return e.abrupt("return",n.gb in o.get("foe/gbs@gbsData"));case 7:case"end":return e.stop()}}),e)})))()},head:function(){return this.$store.set("hero",{title:this.$t(f+"hero.title",{gb_key:"foe_data.gb."+this.$data.gb.key}),subtitle:"routes.gb_investment_gb_chooser.hero.subtitle"}),{title:this.$t(f+"title",{gb_key:"foe_data.gb."+this.$data.gb.key})}},data:function(){this.$route.params.gb in this.$store.get("profile/profiles@[".concat(this.$store.get("global/currentProfile"),"].gb"))||this.$store.set("profile/profiles@".concat(this.$store.get("global/currentProfile"),".gb.").concat(this.$route.params.gb),this.$clone(l.a.getDefaultGBConf()));var t=this.$clone(this.$store.get("profile/profiles@[".concat(this.$store.get("global/currentProfile"),"].gb[").concat(this.$route.params.gb,"].tab")));t=l.a.inRange(t,0,1)?t:0,this.$store.commit("ADD_URL_QUERY",{key:$.tab,value:t});var data={i18nPrefix:f,gb:this.$store.get("foe/gbs@gbsData[".concat(this.$nuxt._route.params.gb,"]")),levelData:null,gbi_tab:t,errors:{gbi_tab:!1}};return Object.assign(data,this.checkQuery()),data},watch:{gbi_tab:function(t,e){l.a.handlerForm(this,"gbi_tab",0===t.length?0:t,e,[0,1],!this.isPermalink,"profiles@".concat(this.$store.get("global/currentProfile"),".gb.").concat(this.$route.params.gb,".tab"))===l.a.FormCheck.VALID&&this.$store.commit("UPDATE_URL_QUERY",{key:$.tab,value:t})}},methods:{checkQuery:function(){var t={},e=!1;return this.$route.query[$.tab]&&!isNaN(this.$route.query[$.tab])&&l.a.inRange(parseInt(this.$route.query[$.tab]),0,1)&&(e=!0,t.gbi_tab=parseInt(this.$route.query[$.tab])),e&&this.$store.set("isPermalink",!0),t}},components:{gbInvestment:n.a,securePosition:h.a,gbInvestmentInvestors:c.a}}}}]);