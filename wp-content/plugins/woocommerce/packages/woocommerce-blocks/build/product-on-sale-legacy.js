this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-on-sale"]=function(e){function t(t){for(var n,i,u=t[0],a=t[1],s=t[2],b=0,p=[];b<u.length;b++)i=u[b],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);p.length;)p.shift()();return c.push.apply(c,s||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,u=1;u<r.length;u++){var a=r[u];0!==o[a]&&(n=!1)}n&&(c.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={14:0},c=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;return c.push([601,1,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},11:function(e,t){!function(){e.exports=this.moment}()},12:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"n",(function(){return c})),r.d(t,"i",(function(){return i})),r.d(t,"k",(function(){return u})),r.d(t,"a",(function(){return a})),r.d(t,"j",(function(){return s})),r.d(t,"m",(function(){return l})),r.d(t,"c",(function(){return b})),r.d(t,"l",(function(){return p})),r.d(t,"b",(function(){return d})),r.d(t,"g",(function(){return g})),r.d(t,"h",(function(){return f})),r.d(t,"e",(function(){return O})),r.d(t,"f",(function(){return h})),r.d(t,"o",(function(){return m}));var n=r(5),o=Object(n.getSetting)("enableReviewRating",!0),c=Object(n.getSetting)("showAvatars",!0),i=Object(n.getSetting)("max_columns",6),u=Object(n.getSetting)("min_columns",1),a=Object(n.getSetting)("default_columns",3),s=Object(n.getSetting)("max_rows",6),l=Object(n.getSetting)("min_rows",1),b=Object(n.getSetting)("default_rows",2),p=Object(n.getSetting)("min_height",500),d=Object(n.getSetting)("default_height",500),g=(Object(n.getSetting)("placeholderImgSrc",""),Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),f=Object(n.getSetting)("limitTags"),O=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0)),h=Object(n.getSetting)("homeUrl",""),m=(Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[]),Object(n.getSetting)("wcBlocksAssetUrl",""))},13:function(e,t){!function(){e.exports=this.React}()},21:function(e,t){!function(){e.exports=this.wp.editor}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},24:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(10),o=r.n(n),c=function(e){var t;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("function"!=typeof e.json){r.next=11;break}return r.prev=1,r.next=4,o.a.awrap(e.json());case 4:return t=r.sent,r.abrupt("return",{message:t.message,type:t.type||"api"});case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",{message:r.t0.message,type:"general"});case 11:return r.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return r.stop()}}),null,null,[[1,8]])}},27:function(e,t,r){"use strict";var n=r(9),o=r.n(n),c=r(8),i=r(7),u=r.n(i),a=r(4),s=r(12),l={root:"/wc/blocks",products:"".concat("/wc/blocks","/products"),categories:"".concat("/wc/blocks","/products/categories")};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.d(t,"g",(function(){return d})),r.d(t,"d",(function(){return g})),r.d(t,"e",(function(){return f})),r.d(t,"c",(function(){return O})),r.d(t,"b",(function(){return h})),r.d(t,"f",(function(){return m})),r.d(t,"a",(function(){return j})),r.d(t,"h",(function(){return w}));var d=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,b=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=void 0===n?"":n,i=e.queryArgs,u=void 0===i?[]:i,a={per_page:s.g?100:-1,catalog_visibility:"any",status:"publish",search:o,orderby:"title",order:"asc"},b=[Object(c.addQueryArgs)(l.products,p({},a,{},u))];return s.g&&r.length&&b.push(Object(c.addQueryArgs)(l.products,{catalog_visibility:"any",status:"publish",include:r})),b}({selected:r,search:o,queryArgs:void 0===i?[]:i});return Promise.all(b.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id").map((function(e){return p({},e,{parent:0})}))})).catch((function(e){throw e}))},g=function(e){return u()({path:"".concat(l.products,"/").concat(e)})},f=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,o=[Object(c.addQueryArgs)("".concat(l.products,"/tags"),{per_page:s.h?100:-1,orderby:s.h?"count":"name",order:s.h?"desc":"asc",search:n})];return s.h&&r.length&&o.push(Object(c.addQueryArgs)("".concat(l.products,"/tags"),{include:r})),o}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return u()({path:e})}))).then((function(e){return Object(a.uniqBy)(Object(a.flatten)(e),"id")}))},O=function(e){return u()({path:"".concat(l.categories,"/").concat(e)})},h=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/categories"),p({per_page:-1},e))})},m=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/").concat(e,"/variations"),{per_page:-1})})},j=function(){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/attributes"),{per_page:-1})})},w=function(e){return u()({path:Object(c.addQueryArgs)("".concat(l.products,"/attributes/").concat(e,"/terms"),{per_page:-1})})}},28:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(24));t.a=function(e){var t,r,i,u=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=u).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},3:function(e,t){!function(){e.exports=this.wp.components}()},34:function(e,t){!function(){e.exports=this.wp.keycodes}()},37:function(e,t,r){"use strict";r.d(t,"b",(function(){return o}));var n=r(12),o=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:n.a},rows:{type:"number",default:n.c},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},38:function(e,t,r){"use strict";var n=r(9),o=r.n(n),c=r(0),i=r(1),u=(r(2),r(3));function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,o=r.price,a=r.rating,l=r.title;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product title",'woocommerce'),help:l?Object(i.__)("Product title is visible.",'woocommerce'):Object(i.__)("Product title is hidden.",'woocommerce'),checked:l,onChange:function(){return t(s({},r,{title:!l}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product price",'woocommerce'),help:o?Object(i.__)("Product price is visible.",'woocommerce'):Object(i.__)("Product price is hidden.",'woocommerce'),checked:o,onChange:function(){return t(s({},r,{price:!o}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Product rating",'woocommerce'),help:a?Object(i.__)("Product rating is visible.",'woocommerce'):Object(i.__)("Product rating is hidden.",'woocommerce'),checked:a,onChange:function(){return t(s({},r,{rating:!a}))}}),Object(c.createElement)(u.ToggleControl,{label:Object(i.__)("Add to Cart button",'woocommerce'),help:n?Object(i.__)("Add to Cart button is visible.",'woocommerce'):Object(i.__)("Add to Cart button is hidden.",'woocommerce'),checked:n,onChange:function(){return t(s({},r,{button:!n}))}}))}},4:function(e,t){!function(){e.exports=this.lodash}()},41:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(0),i=r(1),u=r(4),a=(r(2),r(29)),s=r(3),l=r(10),b=r.n(l),p=r(16),d=r.n(p),g=r(17),f=r.n(g),O=r(18),h=r.n(O),m=r(19),j=r.n(m),w=r(14),y=r.n(w),v=r(20),_=r.n(v),k=r(22),P=r(27),C=r(26),E=Object(k.createHigherOrderComponent)((function(e){return function(t){function r(){var e;return d()(this,r),(e=h()(this,j()(r).apply(this,arguments))).state={error:null,loading:!1,categories:null},e.loadCategories=e.loadCategories.bind(y()(e)),e}return _()(r,t),f()(r,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(P.b)({show_review_count:this.props.showReviewCount||!1}).then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch((function(t){var r;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.a.awrap(Object(C.a)(t));case 2:r=n.sent,e.setState({categories:null,loading:!1,error:r});case 4:case"end":return n.stop()}}))}))}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(c.createElement)(e,o()({},this.props,{error:r,isLoading:n,categories:i}))}}]),r}(c.Component)}),"withCategories"),S=r(28),x=(r(92),function(e){var t=e.categories,r=e.error,n=e.isLoading,l=e.onChange,b=e.onOperatorChange,p=e.operator,d=e.selected,g=e.isSingle,f=e.showReviewCount,O={clear:Object(i.__)("Clear all product categories",'woocommerce'),list:Object(i.__)("Product Categories",'woocommerce'),noItems:Object(i.__)("Your store doesn't have any product categories.",'woocommerce'),search:Object(i.__)("Search for product categories",'woocommerce'),selected:function(e){return Object(i.sprintf)(Object(i._n)("%d category selected","%d categories selected",e,'woocommerce'),e)},updated:Object(i.__)("Category search results updated.",'woocommerce')};return r?Object(c.createElement)(S.a,{error:r}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(a.a,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:d.map((function(e){return Object(u.find)(t,{id:e})})).filter(Boolean),onChange:l,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,u=void 0===n?0:n,s=["woocommerce-product-categories__item"];r.length&&s.push("is-searching"),0===u&&0!==t.parent&&s.push("is-skip-level");var l=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,b=f?Object(i.sprintf)(Object(i._n)("%s, has %d review","%s, has %d reviews",t.review_count,'woocommerce'),l,t.review_count):Object(i.sprintf)(Object(i._n)("%s, has %d product","%s, has %d products",t.count,'woocommerce'),l,t.count),p=f?Object(i.sprintf)(Object(i._n)("%d Review","%d Reviews",t.review_count,'woocommerce'),t.review_count):Object(i.sprintf)(Object(i._n)("%d Product","%d Products",t.count,'woocommerce'),t.count);return Object(c.createElement)(a.b,o()({className:s.join(" ")},e,{showCount:!0,countLabel:p,"aria-label":b}))},messages:O,isHierarchical:!0,isSingle:g}),!!b&&Object(c.createElement)("div",{className:d.length<2?"screen-reader-text":""},Object(c.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching",'woocommerce'),help:Object(i.__)("Pick at least two categories to use this setting.",'woocommerce'),value:p,onChange:b,options:[{label:Object(i.__)("Any selected categories",'woocommerce'),value:"any"},{label:Object(i.__)("All selected categories",'woocommerce'),value:"all"}]})))});x.defaultProps={operator:"any",isSingle:!1};t.a=E(x)},44:function(e,t){!function(){e.exports=this.ReactDOM}()},45:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(4),i=(r(2),r(3)),u=r(12);t.a=function(e){var t=e.columns,r=e.rows,a=e.setAttributes,s=e.alignButtons;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Columns",'woocommerce'),value:t,onChange:function(e){var t=Object(c.clamp)(e,u.k,u.i);a({columns:Object(c.isNaN)(t)?"":t})},min:u.k,max:u.i}),Object(n.createElement)(i.RangeControl,{label:Object(o.__)("Rows",'woocommerce'),value:r,onChange:function(e){var t=Object(c.clamp)(e,u.m,u.j);a({rows:Object(c.isNaN)(t)?"":t})},min:u.m,max:u.j}),Object(n.createElement)(i.ToggleControl,{label:Object(o.__)("Align Last Block",'woocommerce'),help:s?Object(o.__)("The last inner block will be aligned vertically.",'woocommerce'):Object(o.__)("The last inner block will follow other content.",'woocommerce'),checked:s,onChange:function(){return a({alignButtons:!s})}}))}},46:function(e,t,r){"use strict";var n=r(0),o=r(6),c=r.n(o),i=r(58),u=r.n(i),a=r(12);r.d(t,"a",(function(){return s}));var s=function(e){return function(t){var r=t.attributes,o=r.align,i=r.contentVisibility,s=c()(o?"align".concat(o):"",{"is-hidden-title":!i.title,"is-hidden-price":!i.price,"is-hidden-rating":!i.rating,"is-hidden-button":!i.button});return Object(n.createElement)(n.RawHTML,{className:s},function(e,t){var r=e.attributes,n=r.attributes,o=r.attrOperator,c=r.categories,i=r.catOperator,s=r.orderby,l=r.products,b=r.columns||a.a,p=r.rows||a.c,d=new Map;switch(d.set("limit",p*b),d.set("columns",b),c&&c.length&&(d.set("category",c.join(",")),i&&"all"===i&&d.set("cat_operator","AND")),n&&n.length&&(d.set("terms",n.map((function(e){return e.id})).join(",")),d.set("attribute",n[0].attr_slug),o&&"all"===o&&d.set("terms_operator","AND")),s&&("price_desc"===s?(d.set("orderby","price"),d.set("order","DESC")):"price_asc"===s?(d.set("orderby","price"),d.set("order","ASC")):"date"===s?(d.set("orderby","date"),d.set("order","DESC")):d.set("orderby",s)),t){case"woocommerce/product-best-sellers":d.set("best_selling","1");break;case"woocommerce/product-top-rated":d.set("orderby","rating");break;case"woocommerce/product-on-sale":d.set("on_sale","1");break;case"woocommerce/product-new":d.set("orderby","date"),d.set("order","DESC");break;case"woocommerce/handpicked-products":if(!l.length)return"";d.set("ids",l.join(",")),d.set("limit",l.length);break;case"woocommerce/product-category":if(!c||!c.length)return"";break;case"woocommerce/products-by-attribute":if(!n||!n.length)return""}var g="[products",f=!0,O=!1,h=void 0;try{for(var m,j=d[Symbol.iterator]();!(f=(m=j.next()).done);f=!0){var w=u()(m.value,2);g+=" "+w[0]+'="'+w[1]+'"'}}catch(e){O=!0,h=e}finally{try{f||null==j.return||j.return()}finally{if(O)throw h}}return g+="]"}(t,e))}}},47:function(e,t){!function(){e.exports=this.wp.viewport}()},5:function(e,t){!function(){e.exports=this.wc.wcSettings}()},52:function(e,t){!function(){e.exports=this.wp.hooks}()},54:function(e,t){!function(){e.exports=this.wp.htmlEntities}()},55:function(e,t){!function(){e.exports=this.wp.date}()},57:function(e,t,r){"use strict";var n=r(0),o=r(1),c=r(3);r(2);t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(c.SelectControl,{label:Object(o.__)("Order products by",'woocommerce'),value:t,options:[{label:Object(o.__)("Newness - newest first",'woocommerce'),value:"date"},{label:Object(o.__)("Price - low to high",'woocommerce'),value:"price_asc"},{label:Object(o.__)("Price - high to low",'woocommerce'),value:"price_desc"},{label:Object(o.__)("Rating - highest first",'woocommerce'),value:"rating"},{label:Object(o.__)("Sales - most first",'woocommerce'),value:"popularity"},{label:Object(o.__)("Title - alphabetical",'woocommerce'),value:"title"},{label:Object(o.__)("Menu Order",'woocommerce'),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},601:function(e,t,r){"use strict";r.r(t);var n=r(9),o=r.n(n),c=r(0),i=r(1),u=r(25),a=r(4),s=r(3),l=r(16),b=r.n(l),p=r(17),d=r.n(p),g=r(18),f=r.n(g),O=r(19),h=r.n(O),m=r(20),j=r.n(m),w=r(21),y=(r(2),r(38)),v=r(45),_=r(41),k=r(57),P=r(91),C=function(e){function t(){return b()(this,t),f()(this,h()(t).apply(this,arguments))}return j()(t,e),d()(t,[{key:"getInspectorControls",value:function(){var e=this.props,t=e.attributes,r=e.setAttributes,n=t.categories,o=t.catOperator,u=t.columns,a=t.contentVisibility,l=t.rows,b=t.orderby,p=t.alignButtons;return Object(c.createElement)(w.InspectorControls,{key:"inspector"},Object(c.createElement)(s.PanelBody,{title:Object(i.__)("Layout",'woocommerce'),initialOpen:!0},Object(c.createElement)(v.a,{columns:u,rows:l,alignButtons:p,setAttributes:r})),Object(c.createElement)(s.PanelBody,{title:Object(i.__)("Content",'woocommerce'),initialOpen:!0},Object(c.createElement)(y.a,{settings:a,onChange:function(e){return r({contentVisibility:e})}})),Object(c.createElement)(s.PanelBody,{title:Object(i.__)("Order By",'woocommerce'),initialOpen:!1},Object(c.createElement)(k.a,{setAttributes:r,value:b})),Object(c.createElement)(s.PanelBody,{title:Object(i.__)("Filter by Product Category",'woocommerce'),initialOpen:!1},Object(c.createElement)(_.a,{selected:n,onChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.map((function(e){return e.id}));r({categories:t})},operator:o,onOperatorChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.name;return t.isPreview?P.a:Object(c.createElement)(c.Fragment,null,this.getInspectorControls(),Object(c.createElement)(s.Disabled,null,Object(c.createElement)(w.ServerSideRender,{block:r,attributes:t})))}}]),t}(c.Component),E=r(46),S=r(37);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(u.registerBlockType)("woocommerce/product-on-sale",{title:Object(i.__)("On Sale Products",'woocommerce'),icon:{src:Object(c.createElement)((function(e){var t=e.className;return Object(c.createElement)(s.Icon,{className:t,icon:Object(c.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Object(c.createElement)("path",{d:"M21.5,0h-9.3L0.8,11.4c-1,1-1,2.6,0,3.6L9,23.2c1,1,2.6,1,3.6,0c0,0,0,0,0,0L24,11.9V2.5C24,1.1,22.9,0,21.5,0z"}),Object(c.createElement)("circle",{fill:"#fff",cx:"18.1",cy:"5.8",r:"2.5"}),Object(c.createElement)("path",{fill:"#fff",d:"M5.8,10.5C5.8,10,6,9.6,6.3,9.2s0.8-0.5,1.3-0.5c0.6,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3V11 c0,0.5-0.2,1-0.5,1.3s-0.8,0.5-1.3,0.5c-0.6,0-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3V10.5z M7,11c0,0.2,0.1,0.4,0.2,0.6 s0.3,0.2,0.5,0.2s0.4-0.1,0.5-0.2s0.2-0.3,0.2-0.6v-0.4c0-0.2-0.1-0.4-0.2-0.6S7.9,9.7,7.7,9.7c-0.2,0-0.4,0.1-0.5,0.2 S7,10.3,7,10.5V11z M8,16.8l-0.8-0.4l4.2-6.7l0.8,0.4L8,16.8z M9.9,15.3c0-0.5,0.2-1,0.5-1.3s0.8-0.5,1.3-0.5 c0.6,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3v0.4c0,0.5-0.2,0.9-0.5,1.3s-0.8,0.5-1.3,0.5c-0.6,0-1-0.2-1.4-0.5s-0.5-0.8-0.5-1.3V15.3z  M11,15.8c0,0.2,0.1,0.4,0.2,0.6s0.3,0.2,0.5,0.2c0.5,0,0.7-0.3,0.7-0.8v-0.4c0-0.2-0.1-0.4-0.2-0.6s-0.3-0.2-0.5-0.2 s-0.4,0.1-0.5,0.2S11,15.1,11,15.3V15.8z"}))})}),null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce",'woocommerce')],description:Object(i.__)("Display a grid of on sale products.",'woocommerce'),supports:{align:["wide","full"],html:!1},attributes:A({},S.a,{orderby:{type:"string",default:"date"}}),example:{attributes:{isPreview:!0}},transforms:{from:[{type:"block",blocks:Object(a.without)(S.b,"woocommerce/product-on-sale"),transform:function(e){return Object(u.createBlock)("woocommerce/product-on-sale",e)}}]},deprecated:[{attributes:A({},S.a,{orderby:{type:"string",default:"date"}}),save:Object(E.a)("woocommerce/product-on-sale")}],edit:function(e){return Object(c.createElement)(C,e)},save:function(){return null}})},63:function(e,t){!function(){e.exports=this.wp.dom}()},67:function(e,t){},68:function(e,t){},69:function(e,t){},7:function(e,t){!function(){e.exports=this.wp.apiFetch}()},71:function(e,t){},72:function(e,t){},8:function(e,t){!function(){e.exports=this.wp.url}()},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),o=r(12),c=Object(n.createElement)("img",{src:o.o+"img/grid.svg",alt:"Grid Preview",width:"230",height:"250",style:{width:"100%"}})}});
