(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(e,t,n){var content=n(160);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(60).default)("f34a2dd4",content,!0,{sourceMap:!1})},159:function(e,t,n){"use strict";var r=n(152);n.n(r).a},160:function(e,t,n){(t=n(59)(!1)).push([e.i,".content[data-v-60fe24d0]{padding:128px 32px}@media screen and (min-width:900px){.content[data-v-60fe24d0]{padding:128px}}.imgs[data-v-60fe24d0]{display:grid;grid-gap:1em;justify-content:center;grid-template-rows:auto;grid-template-columns:1fr}@media screen and (min-width:900px){.imgs[data-v-60fe24d0]{grid-template-columns:1fr 1fr}}@media screen and (min-width:1300px){.imgs[data-v-60fe24d0]{grid-template-columns:1fr 1fr 1fr}}.imgs a[data-v-60fe24d0]{color:inherit;text-decoration:none}.imgs .test[data-v-60fe24d0],.imgs img[data-v-60fe24d0]{margin:0;width:100%;border-radius:50px}.imgs div[data-v-60fe24d0]{padding:24px;margin:8px 0 0;border-radius:20px;background:#fff;position:relative;box-shadow:0 30px 60px rgba(20,20,40,.1)}.imgs div h3[data-v-60fe24d0]{margin:0;padding:0;display:inline}",""]),e.exports=t},161:function(e,t,n){"use strict";n.r(t);var r=n(1).a.extend({name:"home",methods:{getSrc:function(e){return"".concat(this.$router.options.base,"images/").concat(e,".jpg")},getId:function(e){return"".concat(e,"_title")}},data:function(){return{imgs:[{name:"road",title:"Iconic road"},{name:"elk",title:"Beautiful animal"},{name:"flower",title:"Pretty flower"},{name:"car",title:"Classic car"},{name:"mtns",title:"Foggy mountains"},{name:"overhead",title:"Mountain road"},{name:"books",title:"Old books"},{name:"guitar",title:"Electric guitar"}]}}}),d=(n(159),n(24)),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",[e._v("Demo blog")]),e._v(" "),e._m(0),e._v(" "),n("div",{staticClass:"imgs"},e._l(e.imgs,(function(img){return n("nuxt-link",{key:img.name,attrs:{to:"post/"+img.name}},[n("img",{directives:[{name:"shared-element",rawName:"v-shared-element:[img.name]",arg:img.name}],attrs:{src:e.getSrc(img.name),alt:img.name}}),e._v(" "),n("div",[n("h3",{directives:[{name:"shared-element",rawName:"v-shared-element:[getId(img.name)]",arg:e.getId(img.name)}]},[e._v("\n          "+e._s(img.title)+"\n        ")])])])})),1)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n    The place to see v-shared-element in action.\n    "),t("br"),this._v("\n    See the\n    "),t("a",{staticClass:"external",attrs:{href:"https://github.com/justintaddei/v-shared-element",target:"_blank"}},[this._v("GitHub page")]),this._v("\n    for documentation.\n  ")])}],!1,null,"60fe24d0",null);t.default=component.exports}}]);