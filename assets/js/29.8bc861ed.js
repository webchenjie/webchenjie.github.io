(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{342:function(t,e,o){"use strict";o.d(e,"a",(function(){return s})),o.d(e,"b",(function(){return c}));o(137);var n=o(0);function s(){const t=Object(n.d)();if(!t)throw new Error("must be called in setup");return(null==t?void 0:t.proxy)||{}}function c(){const t=Object(n.h)(!1);return Object(n.e)(()=>{t.value=!0}),Object(n.f)(()=>{t.value=!1,setTimeout(()=>{t.value=!0},100)}),{recoShowModule:t}}},364:function(t,e,o){},385:function(t,e,o){"use strict";o(364)},397:function(t,e,o){"use strict";o.r(e);var n=o(0),s=o(63),c=o(40),i=o(342),a=Object(n.c)({components:{RecoIcon:s.b},setup(t,e){const o=Object(i.a)();return{socialLinks:Object(n.a)(()=>(o.$themeConfig.blogConfig&&o.$themeConfig.blogConfig.socialLinks||[]).map(t=>(t.color||(t.color=Object(c.b)()),t)))}}}),r=(o(385),o(2)),l=Object(r.a)(a,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"personal-info-wrapper"},[t.$themeConfig.authorAvatar?e("img",{staticClass:"personal-img",attrs:{src:t.$withBase(t.$themeConfig.authorAvatar),alt:"author-avatar"}}):t._e(),t._v(" "),t.$themeConfig.author?e("h3",{staticClass:"name"},[t._v("\n    "+t._s(t.$themeConfig.author)+"\n  ")]):t._e(),t._v(" "),e("div",{staticClass:"num"},[e("div",[e("h3",[t._v(t._s(t.$recoPosts.length))]),t._v(" "),e("h6",[t._v(t._s(t.$recoLocales.article))])]),t._v(" "),e("div",[e("h3",[t._v(t._s(t.$tags.list.length))]),t._v(" "),e("h6",[t._v(t._s(t.$recoLocales.tag))])])]),t._v(" "),e("ul",{staticClass:"social-links"},t._l(t.socialLinks,(function(t,o){return e("li",{key:o,staticClass:"social-item"},[e("reco-icon",{style:{color:t.color},attrs:{icon:t.icon,link:t.link}})],1)})),0),t._v(" "),e("hr")])}),[],!1,null,"1fad0c41",null);e.default=l.exports}}]);