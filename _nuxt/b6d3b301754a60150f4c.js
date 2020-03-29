(window.webpackJsonp=window.webpackJsonp||[]).push([[38,39],{385:function(t,e,r){"use strict";var o=r(418),l=r.n(o),n=r(3),c={name:"GraphCanvas",props:{gtype:{type:String,required:!0},id:{type:String,required:!0},labels:{type:Array,required:!0},datasets:{type:Array,required:!0},goptions:{type:Object,default:function(){}}},watch:{labels:{handler:function(t){this.$data.chart.destroy(),this.$data.chart_data.labels=t,this.updateCanvas()},deep:!0},datasets:{handler:function(t){this.$data.chart.destroy(),this.$data.chart_data.datasets=t,this.updateCanvas()},deep:!0}},data:function(){return{type:this.$props.gtype,chart_data:{labels:this.$props.labels,datasets:this.$props.datasets},options:this.$props.goptions}},methods:{updateCanvas:function(){var t=document.getElementById(this.$props.id).getContext("2d");document.chart=this.$data.chart=new l.a(t,{type:this.$data.type,data:this.$data.chart_data,options:this.$data.options})}},mounted:function(){this.updateCanvas();var t=this;document.getElementById(this.$props.id).onclick=function(e){setTimeout((function(){for(var r=e.layerX,o=e.layerY,l=JSON.parse(JSON.stringify(document.chart.legend.legendHitBoxes)),i=0;i<l.length;i++)n.a.inRange(r,l[i].left,l[i].left+l[i].width)&&n.a.inRange(o,l[i].top,l[i].top+l[i].height)&&t.$emit("switchVisibility",i)}),50)}}},d=r(14),component=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("canvas",{style:this.$store.get("isDarkTheme")?"background-color: white;":"",attrs:{id:this.id}})}),[],!1,null,null,null);e.a=component.exports},401:function(t,e){},410:function(t,e,r){"use strict";r(89),r(25),r(16),r(10),r(30),r(31),r(37);var o=r(2),l=r(3),n=r(385),c=r(5),d="components.gb_statistics.",h={statSelector:"gbs_s",from:"gbs_f",to:"gbs_t",hidden:"gbs_h"},m={},f={},_={name:"GbStatistics",data:function(){m=this.$store.get("foe/gbs@agesCost"),f=this.$store.get("foe/gbs@gbsData");var t={i18nPrefix:d,graphType:{cost_level:{title:this.$t(d+"graph.title_1"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},reward_level:{title:this.$t(d+"graph.title_2"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")},reward_cost:{title:this.$t(d+"graph.title_3"),xAxesLabel:this.$t("utils.graph.gb_reward_1st_place"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},cost_reward:{title:this.$t(d+"graph.title_4"),xAxesLabel:this.$t("utils.graph.gb_level_cost"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")}},hidden:Array.from(new Array(Object.keys(m).length),(function(t,e){return 0!==e})),labels:[],datasets:[],options:{animation:!1,responsive:!0,stacked:!0,title:{display:!0,text:""},tooltips:{mode:"index",intersect:!1},scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:""}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:""},ticks:{suggestedMin:1,suggestedMax:80}}]}},ageConfig:{Oracle:{name:this.$t("foe_data.age.Oracle"),color:"rgb(102,34,17)"},NoAge:{name:this.$t("foe_data.age.NoAge"),color:"rgb(102,34,17)"},BronzeAge:{name:this.$t("foe_data.age.BronzeAge"),color:"rgb(183,141,19)"},IronAge:{name:this.$t("foe_data.age.IronAge"),color:"rgb(152,68,32)"},EarlyMiddleAges:{name:this.$t("foe_data.age.EarlyMiddleAges"),color:"rgb(78,129,68)"},HighMiddleAges:{name:this.$t("foe_data.age.HighMiddleAges"),color:"rgb(47,142,142)"},LateMiddleAges:{name:this.$t("foe_data.age.LateMiddleAges"),color:"rgb(127,66,133)"},ColonialAge:{name:this.$t("foe_data.age.ColonialAge"),color:"rgb(206,100,4)"},IndustrialAge:{name:this.$t("foe_data.age.IndustrialAge"),color:"rgb(167,41,38)"},ProgressiveEra:{name:this.$t("foe_data.age.ProgressiveEra"),color:"rgb(182,137,91)"},ModernEra:{name:this.$t("foe_data.age.ModernEra"),color:"rgb(70,93,136)"},PostmodernEra:{name:this.$t("foe_data.age.PostmodernEra"),color:"rgb(141,146,146)"},ContemporaryEra:{name:this.$t("foe_data.age.ContemporaryEra"),color:"rgb(141,199,63)"},Tomorrow:{name:this.$t("foe_data.age.Tomorrow"),color:"rgb(123,137,137)"},TheFuture:{name:this.$t("foe_data.age.TheFuture"),color:"rgb(34,90,75)"},ArcticFuture:{name:this.$t("foe_data.age.ArcticFuture"),color:"rgb(67,66,66)"},OceanicFuture:{name:this.$t("foe_data.age.OceanicFuture"),color:"rgb(127,255,212)"},VirtualFuture:{name:this.$t("foe_data.age.VirtualFuture"),color:"rgb(85,271,39)"},SpaceAgeMars:{name:this.$t("foe_data.age.SpaceAgeMars"),color:"rgb(187,19,0)"}},statSelector:"cost_level",maxLevelGraph:Object.keys(f).map((function(t){return f[t]})).map((function(t){return t.levels.length})).reduce((function(a,b){return Math.max(a,b)}),-1/0),maxAgeCost:m.VirtualFuture,from:1,to:80,errors:{from:!1,to:!1}};for(var e in f)f[e].levels.length===t.maxLevelGraph&&(t.maxAgeCost=m[f[e].age]);return Object.assign(t,this.checkQuery(t)),this.$store.commit("ADD_URL_QUERY",{key:h.statSelector,value:t.statSelector}),this.$store.commit("ADD_URL_QUERY",{key:h.from,value:t.from}),this.$store.commit("ADD_URL_QUERY",{key:h.to,value:t.to}),this.$store.commit("ADD_URL_QUERY",{key:h.hidden,value:t.hidden.map((function(t){return t?1:0})).join("")}),this.updateGraphData(t),t},computed:{lang:Object(c.b)("locale"),permaLink:function(){return{name:"GbStatistics",query:this.$store.get("urlQuery")}}},watch:{statSelector:function(t){Object.keys(this.$data.graphType).indexOf(t)<0||(this.$store.commit("UPDATE_URL_QUERY",{key:h.statSelector,value:t}),this.updateGraphData())},lang:function(){Object.assign(this.$data,{graphType:{cost_level:{title:this.$t(d+"graph.title_1"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},reward_level:{title:this.$t(d+"graph.title_2"),xAxesLabel:this.$t("utils.graph.gb_level"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")},reward_cost:{title:this.$t(d+"graph.title_3"),xAxesLabel:this.$t("utils.graph.gb_reward_1st_place"),yAxesLabel:this.$t("utils.graph.gb_level_cost")},cost_reward:{title:this.$t(d+"graph.title_4"),xAxesLabel:this.$t("utils.graph.gb_level_cost"),yAxesLabel:this.$t("utils.graph.gb_reward_1st_place")}},ageConfig:{Oracle:{name:this.$t("foe_data.age.Oracle"),color:"rgb(102,34,17)"},NoAge:{name:this.$t("foe_data.age.NoAge"),color:"rgb(102,34,17)"},BronzeAge:{name:this.$t("foe_data.age.BronzeAge"),color:"rgb(183,141,19)"},IronAge:{name:this.$t("foe_data.age.IronAge"),color:"rgb(152,68,32)"},EarlyMiddleAges:{name:this.$t("foe_data.age.EarlyMiddleAges"),color:"rgb(78,129,68)"},HighMiddleAges:{name:this.$t("foe_data.age.HighMiddleAges"),color:"rgb(47,142,142)"},LateMiddleAges:{name:this.$t("foe_data.age.LateMiddleAges"),color:"rgb(127,66,133)"},ColonialAge:{name:this.$t("foe_data.age.ColonialAge"),color:"rgb(206,100,4)"},IndustrialAge:{name:this.$t("foe_data.age.IndustrialAge"),color:"rgb(167,41,38)"},ProgressiveEra:{name:this.$t("foe_data.age.ProgressiveEra"),color:"rgb(182,137,91)"},ModernEra:{name:this.$t("foe_data.age.ModernEra"),color:"rgb(70,93,136)"},PostmodernEra:{name:this.$t("foe_data.age.PostmodernEra"),color:"rgb(141,146,146)"},ContemporaryEra:{name:this.$t("foe_data.age.ContemporaryEra"),color:"rgb(141,199,63)"},Tomorrow:{name:this.$t("foe_data.age.Tomorrow"),color:"rgb(123,137,137)"},TheFuture:{name:this.$t("foe_data.age.TheFuture"),color:"rgb(34,90,75)"},ArcticFuture:{name:this.$t("foe_data.age.ArcticFuture"),color:"rgb(67,66,66)"},OceanicFuture:{name:this.$t("foe_data.age.OceanicFuture"),color:"rgb(127,255,212)"},VirtualFuture:{name:this.$t("foe_data.age.VirtualFuture"),color:"rgb(85,271,39)"},SpaceAgeMars:{name:this.$t("foe_data.age.SpaceAgeMars"),color:"rgb(187,19,0)"}}}),this.updateGraphData()},from:function(t,e){t&&"number"!=typeof t&&t.length>0?this.$data.errors.from=!0:l.a.handlerForm(this,"from",t&&0!==t.length?t:0,e,[1,this.normalizedTo()])===l.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:h.from,value:t}),this.updateGraphData())},to:function(t,e){if(t&&"number"!=typeof t&&t.length>0)this.$data.errors.to=!0;else{var r=t&&0!==t.length?t:0;l.a.handlerForm(this,"to",r,e,[this.normalizedFrom(),this.$data.maxLevelGraph])===l.a.FormCheck.VALID&&(this.$store.commit("UPDATE_URL_QUERY",{key:h.to,value:t}),this.$data.errors.from?r>=this.$data.errors.from&&(this.$data.errors.from=!1,this.updateGraphData()):this.updateGraphData())}},hidden:function(t){this.$store.commit("UPDATE_URL_QUERY",{key:h.hidden,value:t.map((function(t){return t?1:0})).join("")})}},methods:{normalizedFrom:function(){return l.a.normalizeNumberValue(this.$data.from,1)},normalizedTo:function(){return l.a.normalizeNumberValue(this.$data.to,1)},updateData:function(t,e,r,o){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.normalizedFrom(),c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:this.normalizedTo(),d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:this.$data.hidden,data={},h=[],f=1/0,_=-1/0,$=Array.from(new Array(c-n+1),(function(e,i){return"reward_cost"!==t&&"cost_reward"!==t?i+n:"reward_cost"!==t?o[i].cost:o[i].reward[0]}));for(var y in m)data[y]=m[y].slice(n-1,c+1).map((function(e){return"cost_level"===t||"reward_cost"===t?(f=e.cost<f?e.cost:f,_=e.cost>_?e.cost:_,e.cost):(f=e.reward[0]<f?e.reward[0]:f,_=e.reward[0]>_?e.reward[0]:_,e.reward[0])}));var v=0;for(var A in m)h.push({hidden:d[v++],label:r[A].name,fill:!1,lineTension:0,backgroundColor:l.a.shadeRGBColor(r[A].color,.5),borderColor:r[A].color,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:l.a.shadeRGBColor(r[A].color,-.3),pointBackgroundColor:l.a.shadeRGBColor(r[A].color,.3),pointBorderWidth:3,pointHoverRadius:4,pointRadius:1,pointHitRadius:10,data:data[A]});return{title:e[t].title,xAxesLabel:e[t].xAxesLabel,yAxesLabel:e[t].yAxesLabel,suggestedMin:f,suggestedMax:_,labels:$,datasets:h}},updateGraphData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$data,e=this.updateData(t.statSelector,t.graphType,t.ageConfig,t.maxAgeCost,t.from,t.to,t.hidden);t.options.title.text=e.title,t.options.scales.xAxes[0].scaleLabel.labelString=e.xAxesLabel,t.options.scales.yAxes[0].scaleLabel.labelString=e.yAxesLabel,t.options.scales.yAxes[0].ticks.suggestedMin=e.suggestedMin,t.options.scales.yAxes[0].ticks.suggestedMax=e.suggestedMax,t.labels=e.labels,t.datasets=e.datasets},switchVisibility:function(t){l.a.inRange(t,0,this.$data.hidden.length-1)&&o.a.set(this.$data.hidden,t,!this.$data.hidden[t])},checkQuery:function(t){var e={};e.hidden=t.hidden;var r=l.a.FormCheck.NO_CHANGE;if(this.$route.query[h.statSelector]&&this.$route.query[h.statSelector]in t.graphType&&(r=l.a.FormCheck.VALID,e.statSelector=this.$route.query[h.statSelector]),this.$route.query[h.from]&&!isNaN(this.$route.query[h.from])&&l.a.inRange(parseInt(this.$route.query[h.from]),1,t.maxLevelGraph)&&(r=l.a.FormCheck.VALID,e.from=parseInt(this.$route.query[h.from])),this.$route.query[h.to]&&!isNaN(this.$route.query[h.to])&&l.a.inRange(parseInt(this.$route.query[h.to]),1,t.maxLevelGraph)&&(parseInt(this.$route.query[h.to])>=t.from||parseInt(this.$route.query[h.to])>=e.from)&&(r=l.a.FormCheck.VALID,e.to=parseInt(this.$route.query[h.to])),this.$route.query[h.hidden]){r=l.a.FormCheck.VALID;var o=this.$route.query[h.hidden].split("").map((function(t){return"0"!==t}));Array.prototype.splice.apply(t.hidden,[0,o.length].concat(o))}return r===l.a.FormCheck.VALID&&this.$store.set("isPermalink",!0),e},haveError:function(input){return this.$data.errors[input]?"is-danger":""}},components:{graphCanvas:n.a}},$=r(14),component=Object($.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("div",{staticClass:"field"},[r("h3",{staticClass:"title is-3"},[t._v(t._s(t.$t(t.i18nPrefix+"title")))])])]),r("div",{staticClass:"column is-half"},[r("div",{staticClass:"field"},[r("nuxt-link",{staticClass:"level-right",attrs:{id:"permalink",to:t.permaLink,exact:""}},[r("span",{staticClass:"icon"},[r("i",{staticClass:"fas fa-link"})]),t._v(" "+t._s(t.$t("utils.permalink")))])],1)])]),r("p",[t._v(t._s(t.$t(t.i18nPrefix+"p1")))]),r("p",[t._v(t._s(t.$t(t.i18nPrefix+"represent")))]),r("ul",t._l(t.graphType,(function(e,o,l){return r("li",{key:o,staticStyle:{"list-style-type":"none"}},[r("b-radio",{attrs:{id:o,"native-value":o,type:"is-info"},model:{value:t.statSelector,callback:function(e){t.statSelector=e},expression:"statSelector"}},[t._v(t._s(e.title))])],1)})),0),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t("utils.From"),"label-for":"gbStatisticsFrom",type:t.haveError("from")}},[r("b-input",{attrs:{id:"gbStatisticsFrom",type:"number",min:"1",max:t.to,name:"from",autocomplete:"off"},model:{value:t.from,callback:function(e){t.from=t._n(e)},expression:"from"}})],1)],1),r("div",{staticClass:"column is-half"},[r("b-field",{attrs:{label:t.$t("utils.To",{max:t.maxLevelGraph}),"label-for":"gbStatisticsTo",type:t.haveError("to")}},[r("b-input",{attrs:{id:"gbStatisticsTo",type:"number",min:t.from,max:t.maxLevelGraph,name:"to",autocomplete:"off"},model:{value:t.to,callback:function(e){t.to=t._n(e)},expression:"to"}})],1)],1)]),r("graph-canvas",{attrs:{gtype:"line",id:"graph",goptions:t.options,labels:t.labels,datasets:t.datasets},on:{switchVisibility:function(e){return t.switchVisibility(e)}}})],1)}),[],!1,null,null,null);e.a=component.exports},435:function(t,e,r){"use strict";r.r(e);r(16),r(10),r(30),r(46);var o=r(11),l=r(410),n="routes.gb_statistics.",c={head:function(){return this.$store.set("hero",{title:n+"hero.title",subtitle:n+"hero.subtitle"}),{title:this.$t(n+"title")}},fetch:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.app,o=t.store,Object.keys(o.get("foe/gbs")).length){e.next=6;break}return e.next=4,r.$axios.$get("/foe-data/gbs.json");case 4:l=e.sent,o.set("foe/gbs",l);case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{}},components:{gbStatistics:l.a}},d=r(14),component=Object(d.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("gb-statistics")}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,r){"use strict";var o=r(401),l=r.n(o);e.default=l.a},634:function(t,e,r){"use strict";r.r(e);var o=r(435).default,l=r(14),n=r(471),component=Object(l.a)(o,void 0,void 0,!1,null,null,null);"function"==typeof n.default&&Object(n.default)(component);e.default=component.exports}}]);