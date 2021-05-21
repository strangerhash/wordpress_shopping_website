this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["all-reviews"]=function(e){function t(t){for(var n,a,i=t[0],s=t[1],l=t[2],b=0,d=[];b<i.length;b++)a=i[b],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);for(u&&u(t);d.length;)d.shift()();return c.push.apply(c,l||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,i=1;i<r.length;i++){var s=r[i];0!==o[s]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={3:0},c=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;return c.push([594,2,1,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},119:function(e,t,r){},12:function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"n",(function(){return c})),r.d(t,"i",(function(){return a})),r.d(t,"k",(function(){return i})),r.d(t,"a",(function(){return s})),r.d(t,"j",(function(){return l})),r.d(t,"m",(function(){return u})),r.d(t,"c",(function(){return b})),r.d(t,"l",(function(){return d})),r.d(t,"b",(function(){return p})),r.d(t,"g",(function(){return w})),r.d(t,"h",(function(){return g})),r.d(t,"e",(function(){return m})),r.d(t,"f",(function(){return v})),r.d(t,"o",(function(){return h}));var n=r(5),o=Object(n.getSetting)("enableReviewRating",!0),c=Object(n.getSetting)("showAvatars",!0),a=Object(n.getSetting)("max_columns",6),i=Object(n.getSetting)("min_columns",1),s=Object(n.getSetting)("default_columns",3),l=Object(n.getSetting)("max_rows",6),u=Object(n.getSetting)("min_rows",1),b=Object(n.getSetting)("default_rows",2),d=Object(n.getSetting)("min_height",500),p=Object(n.getSetting)("default_height",500),w=(Object(n.getSetting)("placeholderImgSrc",""),Object(n.getSetting)("thumbnail_size",300),Object(n.getSetting)("isLargeCatalog")),g=Object(n.getSetting)("limitTags"),m=(Object(n.getSetting)("hasProducts",!0),Object(n.getSetting)("hasTags",!0)),v=Object(n.getSetting)("homeUrl",""),h=(Object(n.getSetting)("productCount",0),Object(n.getSetting)("attributes",[]),Object(n.getSetting)("wcBlocksAssetUrl",""))},13:function(e,t){!function(){e.exports=this.React}()},21:function(e,t){!function(){e.exports=this.wp.editor}()},22:function(e,t){!function(){e.exports=this.wp.compose}()},24:function(e,t){!function(){e.exports=this.wp.escapeHtml}()},25:function(e,t){!function(){e.exports=this.wp.blocks}()},26:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(10),o=r.n(n),c=function(e){var t;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if("function"!=typeof e.json){r.next=11;break}return r.prev=1,r.next=4,o.a.awrap(e.json());case 4:return t=r.sent,r.abrupt("return",{message:t.message,type:t.type||"api"});case 8:return r.prev=8,r.t0=r.catch(1),r.abrupt("return",{message:r.t0.message,type:"general"});case 11:return r.abrupt("return",{message:e.message,type:e.type||"general"});case 12:case"end":return r.stop()}}),null,null,[[1,8]])}},28:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(24));t.a=function(e){var t,r,a,i=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=i).message,a=t.type,r?"general"===a?Object(n.createElement)("span",null,Object(o.__)("The following error was returned",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):"api"===a?Object(n.createElement)("span",null,Object(o.__)("The following error was returned from the API",'woocommerce'),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(c.escapeHTML)(r))):r:Object(o.__)("An unknown error occurred which prevented the block from being updated.",'woocommerce')))}},3:function(e,t){!function(){e.exports=this.wp.components}()},39:function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"b",(function(){return l})),r.d(t,"a",(function(){return u}));var n=r(7),o=r.n(n),c=r(6),a=r.n(c),i=r(12),s=function(e){if(i.d){if("lowest-rating"===e)return{order:"asc",orderby:"rating"};if("highest-rating"===e)return{order:"desc",orderby:"rating"}}return{order:"desc",orderby:"date_gmt"}},l=function(e){return o()({path:"/wc/blocks/products/reviews?"+Object.entries(e).map((function(e){return e.join("=")})).join("&"),parse:!1}).then((function(e){return e.json().then((function(t){return{reviews:t,totalReviews:parseInt(e.headers.get("x-wp-total"),10)}}))}))},u=function(e,t){var r=t.className,n=t.showReviewDate,o=t.showReviewerName,c=t.showReviewContent,i=t.showProductName,s=t.showReviewImage,l=t.showReviewRating;return a()(e,r,{"has-image":s,"has-name":o,"has-date":n,"has-rating":l,"has-content":c,"has-product-name":i})}},4:function(e,t){!function(){e.exports=this.lodash}()},5:function(e,t){!function(){e.exports=this.wc.wcSettings}()},53:function(e,t,r){"use strict";var n=r(0),o=r(1),c=(r(2),r(32)),a=r.n(c),i=r(6),s=r.n(i),l=r(3),u=r(28);r(118);t.a=function(e){var t=e.className,r=e.error,c=e.isLoading,i=e.onRetry;return Object(n.createElement)(l.Placeholder,{icon:Object(n.createElement)(a.a,{icon:"notice"}),label:Object(o.__)("Sorry, an error occurred",'woocommerce'),className:s()("wc-block-api-error",t)},Object(n.createElement)(u.a,{error:r}),i&&Object(n.createElement)(n.Fragment,null,c?Object(n.createElement)(l.Spinner,null):Object(n.createElement)(l.Button,{isDefault:!0,onClick:i},Object(o.__)("Retry",'woocommerce'))))}},594:function(e,t,r){"use strict";r.r(t);var n=r(9),o=r.n(n),c=r(0),a=r(1),i=r(25),s=r(3),l=function(e){var t=e.className;return Object(c.createElement)(s.Icon,{className:t,icon:Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 22.41"},Object(c.createElement)("g",null,Object(c.createElement)("g",null,Object(c.createElement)("path",{d:"M16.55 0H1.75C.56 0 0 .52 0 1.68v9.24c0 1.15.56 1.92 1.75 1.92H2V4.76a2.51 2.51 0 0 1 2.74-2.68H18v-.4A1.51 1.51 0 0 0 16.55 0z"}),Object(c.createElement)("path",{d:"M19.54 3.11H4.74C3.55 3.11 3 3.64 3 4.79V14c0 1.19.55 2 1.74 2H5V7.88A2.51 2.51 0 0 1 7.73 5.2H21v-.41a1.51 1.51 0 0 0-1.46-1.68z"}),Object(c.createElement)("path",{d:"M22.53 6.23H7.73C6.54 6.23 6 6.75 6 7.91v9.24c0 1.15.56 1.92 1.75 1.92h7a.59.59 0 0 1 .32.11l1.61 1.15 2.83 2a.31.31 0 0 0 .18.05.3.3 0 0 0 .31-.3v-2.73a.3.3 0 0 1 .28-.28h2.31A1.47 1.47 0 0 0 24 17.6V7.91a1.52 1.52 0 0 0-1.47-1.68z"}),Object(c.createElement)("path",{fill:"#ffffff",d:"M10.2 10.92l1.06-2.14 1.05 2.14 2.37.35-1.71 1.66.4 2.36-2.11-1.11-.17.09-.52.27-.51.26-.92.49.18-1.02.09-.57.1-.56.03-.21-1.71-1.66 2.37-.35zM21.46 14.25h-4.4a.69.69 0 0 1-.69-.69.68.68 0 0 1 .69-.68h4.4a.68.68 0 0 1 .69.68.69.69 0 0 1-.69.69zM21.46 11.19h-4.4a.69.69 0 1 1 0-1.37h4.4a.69.69 0 1 1 0 1.37z"}))))})},u=(r(83),r(21)),b=(r(2),r(86)),d=function(){return Object(c.createElement)(s.Placeholder,{className:"wc-block-all-reviews",icon:Object(c.createElement)(l,{className:"block-editor-block-icon"}),label:Object(a.__)("All Reviews",'woocommerce')},Object(a.__)("This block shows a list of all product reviews. Your store does not have any reviews yet, but they will show up here when it does.",'woocommerce'))},p=r(65),w=function(e){var t=e.attributes,r=e.setAttributes;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(u.InspectorControls,{key:"inspector"},Object(c.createElement)(s.PanelBody,{title:Object(a.__)("Content",'woocommerce')},Object(c.createElement)(s.ToggleControl,{label:Object(a.__)("Product name",'woocommerce'),checked:t.showProductName,onChange:function(){return r({showProductName:!t.showProductName})}}),Object(p.b)(t,r)),Object(c.createElement)(s.PanelBody,{title:Object(a.__)("List Settings",'woocommerce')},Object(p.c)(t,r))),Object(c.createElement)(b.a,{attributes:t,className:"wc-block-all-reviews",icon:Object(c.createElement)(l,{className:"block-editor-block-icon"}),name:Object(a.__)("All Reviews",'woocommerce'),noReviewsPlaceholder:d}))},g=r(84),m=r(85),v=r(75);function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(i.registerBlockType)("woocommerce/all-reviews",{title:Object(a.__)("All Reviews",'woocommerce'),icon:{src:Object(c.createElement)(l,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce",'woocommerce')],description:Object(a.__)("Shows a list of all product reviews.",'woocommerce'),example:f({},v.a,{attributes:f({},v.a.attributes,{showProductName:!0})}),attributes:f({},g.a,{showProductName:{type:"boolean",default:!0}}),edit:function(e){return Object(c.createElement)(w,e)},save:m.a})},64:function(e,t){!function(){e.exports=this.wp.isShallowEqual}()},65:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d})),r.d(t,"c",(function(){return p}));var n=r(0),o=r(1),c=r(24),a=r(3),i=r(21),s=r(5),l=r(12),u=r(74),b=function(e,t){return Object(n.createElement)(i.BlockControls,null,Object(n.createElement)(a.Toolbar,{controls:[{icon:"edit",title:Object(o.__)("Edit",'woocommerce'),onClick:function(){return t({editMode:!e})},isActive:e}]}))},d=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Product rating",'woocommerce'),checked:e.showReviewRating,onChange:function(){return t({showReviewRating:!e.showReviewRating})}}),e.showReviewRating&&!l.d&&Object(n.createElement)(a.Notice,{className:"wc-block-reviews__notice",isDismissible:!1},Object(n.createElement)(n.RawHTML,null,Object(o.sprintf)(Object(c.escapeHTML)(Object(o.__)("Product rating is disabled in your %sstore settings%s.",'woocommerce')),'<a href="'.concat(Object(s.getAdminLink)("admin.php?page=wc-settings&tab=products"),'" target="_blank">'),"</a>"))),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Reviewer name",'woocommerce'),checked:e.showReviewerName,onChange:function(){return t({showReviewerName:!e.showReviewerName})}}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Image",'woocommerce'),checked:e.showReviewImage,onChange:function(){return t({showReviewImage:!e.showReviewImage})}}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Review date",'woocommerce'),checked:e.showReviewDate,onChange:function(){return t({showReviewDate:!e.showReviewDate})}}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Review content",'woocommerce'),checked:e.showReviewContent,onChange:function(){return t({showReviewContent:!e.showReviewContent})}}),e.showReviewImage&&Object(n.createElement)(n.Fragment,null,Object(n.createElement)(u.a,{label:Object(o.__)("Review image",'woocommerce'),value:e.imageType,options:[{label:Object(o.__)("Reviewer photo",'woocommerce'),value:"reviewer"},{label:Object(o.__)("Product",'woocommerce'),value:"product"}],onChange:function(e){return t({imageType:e})}}),"reviewer"===e.imageType&&!l.n&&Object(n.createElement)(a.Notice,{className:"wc-block-reviews__notice",isDismissible:!1},Object(n.createElement)(n.RawHTML,null,Object(o.sprintf)(Object(c.escapeHTML)(Object(o.__)("Reviewer photo is disabled in your %ssite settings%s.",'woocommerce')),'<a href="'.concat(Object(s.getAdminLink)("options-discussion.php"),'" target="_blank">'),"</a>")))))},p=function(e,t){return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Order by",'woocommerce'),checked:e.showOrderby,onChange:function(){return t({showOrderby:!e.showOrderby})}}),Object(n.createElement)(a.SelectControl,{label:Object(o.__)("Order Product Reviews by",'woocommerce'),value:e.orderby,options:[{label:"Most recent",value:"most-recent"},{label:"Highest Rating",value:"highest-rating"},{label:"Lowest Rating",value:"lowest-rating"}],onChange:function(e){return t({orderby:e})}}),Object(n.createElement)(a.RangeControl,{label:Object(o.__)("Starting Number of Reviews",'woocommerce'),value:e.reviewsOnPageLoad,onChange:function(e){return t({reviewsOnPageLoad:e})},max:20,min:1}),Object(n.createElement)(a.ToggleControl,{label:Object(o.__)("Load more",'woocommerce'),checked:e.showLoadMore,onChange:function(){return t({showLoadMore:!e.showLoadMore})}}),e.showLoadMore&&Object(n.createElement)(a.RangeControl,{label:Object(o.__)("Load More Reviews",'woocommerce'),value:e.reviewsOnLoadMore,onChange:function(e){return t({reviewsOnLoadMore:e})},max:20,min:1}))}},7:function(e,t){!function(){e.exports=this.wp.apiFetch}()},74:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(16),a=r.n(c),i=r(17),s=r.n(i),l=r(18),u=r.n(l),b=r(19),d=r.n(b),p=r(14),w=r.n(p),g=r(20),m=r.n(g),v=r(0),h=r(4),f=r(6),O=r.n(f),j=r(3),y=r(22),_=(r(139),function(e){function t(){var e;return a()(this,t),(e=u()(this,d()(t).apply(this,arguments))).onClick=e.onClick.bind(w()(e)),e}return m()(t,e),s()(t,[{key:"onClick",value:function(e){this.props.onChange&&this.props.onChange(e.target.value)}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.label,c=r.checked,a=r.instanceId,i=r.className,s=r.help,l=r.options,u=r.value,b="inspector-toggle-button-control-".concat(a);return s&&(e=Object(h.isFunction)(s)?s(c):s),Object(v.createElement)(j.BaseControl,{id:b,help:e,className:O()("components-toggle-button-control",i)},Object(v.createElement)("label",{id:b+"__label",htmlFor:b,className:"components-toggle-button-control__label"},n),Object(v.createElement)(j.ButtonGroup,{"aria-labelledby":b+"__label"},l.map((function(e,r){var c={};return u===e.value?(c.isPrimary=!0,c["aria-pressed"]=!0):(c.isDefault=!0,c["aria-pressed"]=!1),Object(v.createElement)(j.Button,o()({key:"".concat(e.label,"-").concat(e.value,"-").concat(r),value:e.value,onClick:t.onClick,"aria-label":n+": "+e.label},c),e.label)}))))}}]),t}(v.Component));t.a=Object(y.withInstanceId)(_)},75:function(e,t,r){"use strict";var n=r(1),o="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gOTAK/9sAQwADAgIDAgIDAwMDBAMDBAUIBQUEBAUKBwcGCAwKDAwLCgsLDQ4SEA0OEQ4LCxAWEBETFBUVFQwPFxgWFBgSFBUU/9sAQwEDBAQFBAUJBQUJFA0LDRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU/8AAEQgAMAAwAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+t6KKtaXps2sahBZ24DTTNtXPQepPsBzQBVo/OvddD+H2j6Nbqr2sd7Pj5prhQ2T7A8Cl1z4f6PrNuyrax2c+Plmt1CkH3A4NAHhP50Vb1bTJtG1G4srgASwttOOh9CPYjBqp+VABXX/AAreNfF8If7zROEz/ex/hmuQq1pT3cepW7WAdrxXBiEYyS30oA+kKKp6RPeXOnwyX9strdEfPErBgD9f6UurT3dtp80ljbC7ugPkiZgoJ+tAHkHxWeNvFsgT7ywoHx/e6/yIrj6t6vJdy6lcvfh1vGcmUSDBB+lVKACvbvh/4Qj8PaYlxOgOozrudmHMYPRB/X3+leVeDrBdT8UabbuNyGUMwPcL8xH6V9BUAJRRRQByfxA8IR+IdMe4gjA1GBSyMo5kA6of6e/1rxGvpr/PWvn3xjYLpnijUrdBtQTFlHoGG4D9aAP/2Q==",c=[{id:1,date_created:"2019-07-15T17:05:04",formatted_date_created:Object(n.__)("July 15, 2019",'woocommerce'),date_created_gmt:"2019-07-15T15:05:04",product_id:0,product_name:Object(n.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",reviewer:Object(n.__)("Alice",'woocommerce'),review:"<p>".concat(Object(n.__)("I bought this product last week and I'm very happy with it.",'woocommerce'),"</p>\n"),reviewer_avatar_urls:{48:o,96:o},rating:5,verified:!0},{id:2,date_created:"2019-07-12T12:39:39",formatted_date_created:Object(n.__)("July 12, 2019",'woocommerce'),date_created_gmt:"2019-07-12T10:39:39",product_id:0,product_name:Object(n.__)("WordPress Pennant",'woocommerce'),product_permalink:"#",reviewer:Object(n.__)("Bob",'woocommerce'),review:"<p>".concat(Object(n.__)("This product is awesome, I love it!",'woocommerce'),"</p>\n"),reviewer_avatar_urls:{48:o,96:o},rating:null,verified:!1}];r.d(t,"a",(function(){return a}));var a={attributes:{editMode:!1,imageType:"reviewer",orderby:"most-recent",reviewsOnLoadMore:10,reviewsOnPageLoad:10,showLoadMore:!0,showOrderby:!0,showReviewDate:!0,showReviewerName:!0,showReviewImage:!0,showReviewRating:!0,showReviewContent:!0,previewReviews:c}}},83:function(e,t,r){var n=r(119);"string"==typeof n&&(n=[[e.i,n,""]]);var o={insert:"head",singleton:!1};r(35)(n,o);n.locals&&(e.exports=n.locals)},84:function(e,t,r){"use strict";t.a={editMode:{type:"boolean",default:!0},imageType:{type:"string",default:"reviewer"},orderby:{type:"string",default:"most-recent"},reviewsOnLoadMore:{type:"number",default:10},reviewsOnPageLoad:{type:"number",default:10},showLoadMore:{type:"boolean",default:!0},showOrderby:{type:"boolean",default:!0},showReviewDate:{type:"boolean",default:!0},showReviewerName:{type:"boolean",default:!0},showReviewImage:{type:"boolean",default:!0},showReviewRating:{type:"boolean",default:!0},showReviewContent:{type:"boolean",default:!0},previewReviews:{type:"array",default:null}}},85:function(e,t,r){"use strict";var n=r(15),o=r.n(n),c=r(0),a=(r(83),r(39));t.a=function(e){var t=e.attributes,r=t.categoryIds,n=t.imageType,i=t.orderby,s=t.productId,l={"data-image-type":n,"data-orderby":i,"data-reviews-on-page-load":t.reviewsOnPageLoad,"data-reviews-on-load-more":t.reviewsOnLoadMore,"data-show-load-more":t.showLoadMore,"data-show-orderby":t.showOrderby},u="wc-block-all-reviews";return s&&(l["data-product-id"]=s,u="wc-block-reviews-by-product"),Array.isArray(r)&&(l["data-category-ids"]=r.join(","),u="wc-block-reviews-by-category"),Object(c.createElement)("div",o()({className:Object(a.a)(u,t)},l))}},86:function(e,t,r){"use strict";var n=r(16),o=r.n(n),c=r(17),a=r.n(c),i=r(18),s=r.n(i),l=r(19),u=r.n(l),b=r(20),d=r.n(b),p=r(0),w=r(1),g=r(13),m=(r(2),r(4)),v=r(3),h=r(12),f=r(53),O=r(9),j=r.n(O),y=r(6),_=r.n(y);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var E=function(e){var t,r=e.label,n=e.screenReaderLabel,o=e.wrapperElement,c=e.wrapperProps;return!r&&n?(t=o||"span",c=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){j()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},c,{className:_()(c.className,"screen-reader-text")}),Object(p.createElement)(t,c,n)):(t=o||g.Fragment,r&&n&&r!==n?Object(p.createElement)(t,c,Object(p.createElement)("span",{"aria-hidden":"true"},r),Object(p.createElement)("span",{className:"screen-reader-text"},n)):Object(p.createElement)(t,c,r))};E.defaultProps={wrapperProps:{}};var R=E,A=(r(192),function(e){var t=e.onClick,r=e.label,n=e.screenReaderLabel;return Object(p.createElement)("div",{className:"wp-block-button wc-block-load-more"},Object(p.createElement)("button",{className:"wp-block-button__link",onClick:t},Object(p.createElement)(R,{label:r,screenReaderLabel:n})))});A.defaultProps={label:Object(w.__)("Load more",'woocommerce')};var C=A,P=r(14),B=r.n(P),N=r(103),S=r.n(N),L=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",n=S()(e,{suffix:r,limit:t});return n.html},T=function(e,t,r,n){var o=x(e,t,r);return L(e,o-n.length,n)},x=function(e,t,r){for(var n={start:0,middle:0,end:e.length};n.start<=n.end;)n.middle=Math.floor((n.start+n.end)/2),t.innerHTML=L(e,n.middle),n=Q(n,t.clientHeight,r);return n.middle},Q=function(e,t,r){return t<=r?e.start=e.middle+1:e.end=e.middle-1,e},M=function(e){function t(e){var r;return o()(this,t),(r=s()(this,u()(t).apply(this,arguments))).state={isExpanded:!1,clampEnabled:null,content:e.children,summary:"."},r.reviewSummary=Object(g.createRef)(),r.reviewContent=Object(g.createRef)(),r.getButton=r.getButton.bind(B()(r)),r.onClick=r.onClick.bind(B()(r)),r}return d()(t,e),a()(t,[{key:"componentDidMount",value:function(){if(this.props.children){var e=this.props,t=e.maxLines,r=e.ellipsis,n=(this.reviewSummary.current.clientHeight+1)*t+1,o=this.reviewContent.current.clientHeight+1>n;this.setState({clampEnabled:o}),o&&this.setState({summary:T(this.reviewContent.current.innerHTML,this.reviewSummary.current,n,r)})}}},{key:"getButton",value:function(){var e=this.state.isExpanded,t=this.props,r=t.className,n=t.lessText,o=t.moreText,c=e?n:o;if(c)return Object(p.createElement)("a",{href:"#more",className:r+"__read_more",onClick:this.onClick,"aria-expanded":!e,role:"button"},c)}},{key:"onClick",value:function(e){e.preventDefault();var t=this.state.isExpanded;this.setState({isExpanded:!t})}},{key:"render",value:function(){var e=this.props.className,t=this.state,r=t.content,n=t.summary,o=t.clampEnabled,c=t.isExpanded;return r?!1===o?Object(p.createElement)("div",{className:e},Object(p.createElement)("div",{ref:this.reviewContent},r)):Object(p.createElement)("div",{className:e},(!c||null===o)&&Object(p.createElement)("div",{ref:this.reviewSummary,"aria-hidden":c,dangerouslySetInnerHTML:{__html:n}}),(c||null===o)&&Object(p.createElement)("div",{ref:this.reviewContent,"aria-hidden":!c},r),this.getButton()):null}}]),t}(g.Component);M.defaultProps={maxLines:3,ellipsis:"&hellip;",moreText:Object(w.__)("Read more",'woocommerce'),lessText:Object(w.__)("Read less",'woocommerce'),className:"read-more-content"};var I=M;r(191);var D=function(e){var t=e.attributes,r=e.review,n=void 0===r?{}:r,o=t.imageType,c=t.showReviewDate,a=t.showReviewerName,i=t.showReviewImage,s=t.showReviewRating,l=t.showReviewContent,u=t.showProductName,b=n.rating,d=!Object.keys(n).length>0,g=Number.isFinite(b)&&s;return Object(p.createElement)("li",{className:_()("wc-block-review-list-item__item",{"is-loading":d}),"aria-hidden":d},(u||c||a||i||g)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__info"},i&&function(e,t,r){return r||!e?Object(p.createElement)("div",{className:"wc-block-review-list-item__image",width:"48",height:"48"}):Object(p.createElement)("div",{className:"wc-block-review-list-item__image"},"product"===t?Object(p.createElement)("img",{"aria-hidden":"true",alt:"",src:e.product_picture||"",className:"wc-block-review-list-item__image",width:"48",height:"48"}):Object(p.createElement)("img",{"aria-hidden":"true",alt:"",src:e.reviewer_avatar_urls[48]||"",srcSet:e.reviewer_avatar_urls[96]+" 2x",className:"wc-block-review-list-item__image",width:"48",height:"48"}),e.verified&&Object(p.createElement)("div",{className:"wc-block-review-list-item__verified",title:Object(w.__)("Verified buyer",'woocommerce')},Object(w.__)("Verified buyer",'woocommerce')))}(n,o,d),(u||a||g||c)&&Object(p.createElement)("div",{className:"wc-block-review-list-item__meta"},g&&function(e){var t=e.rating,r={width:t/5*100+"%"};return Object(p.createElement)("div",{className:"wc-block-review-list-item__rating"},Object(p.createElement)("div",{className:"wc-block-review-list-item__rating__stars",role:"img"},Object(p.createElement)("span",{style:r},Object(w.sprintf)(Object(w.__)("Rated %d out of 5",'woocommerce'),t))))}(n),u&&function(e){return Object(p.createElement)("div",{className:"wc-block-review-list-item__product"},Object(p.createElement)("a",{href:e.product_permalink,dangerouslySetInnerHTML:{__html:e.product_name}}))}(n),a&&function(e){var t=e.reviewer,r=void 0===t?"":t;return Object(p.createElement)("div",{className:"wc-block-review-list-item__author"},r)}(n),c&&function(e){var t=e.date_created,r=e.formatted_date_created;return Object(p.createElement)("time",{className:"wc-block-review-list-item__published-date",dateTime:t},r)}(n))),l&&function(e){return Object(p.createElement)(I,{maxLines:10,moreText:Object(w.__)("Read full review",'woocommerce'),lessText:Object(w.__)("Hide full review",'woocommerce'),className:"wc-block-review-list-item__text"},Object(p.createElement)("div",{dangerouslySetInnerHTML:{__html:e.review||""}}))}(n))};r(190);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var U=function(e){var t=e.attributes,r=e.reviews,n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){j()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t,{showReviewImage:(h.n||"product"===t.imageType)&&t.showReviewImage,showReviewRating:h.d&&t.showReviewRating});return Object(p.createElement)("ul",{className:"wc-block-review-list"},0===r.length?Object(p.createElement)(D,{attributes:n}):r.map((function(e,t){return Object(p.createElement)(D,{key:e.id||t,attributes:n,review:e})})))},H=r(15),V=r.n(H),W=function(e){var t=0,r=function(r){function n(){var e,r;o()(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return r=s()(this,(e=u()(n)).call.apply(e,[this].concat(a))),j()(B()(r),"instanceId",t++),r}return d()(n,r),a()(n,[{key:"render",value:function(){return Object(p.createElement)(e,V()({},this.props,{componentId:this.instanceId}))}}]),n}(g.Component);return r.displayName="withComponentId",r},J=(r(189),W((function(e){var t=e.className,r=e.componentId,n=e.defaultValue,o=e.label,c=e.onChange,a=e.options,i=e.screenReaderLabel,s=e.readOnly,l=e.value,u="wc-block-sort-select__select-".concat(r);return Object(p.createElement)("div",{className:_()("wc-block-sort-select",t)},Object(p.createElement)(R,{label:o,screenReaderLabel:i,wrapperElement:"label",wrapperProps:{className:"wc-block-sort-select__label",htmlFor:u}}),Object(p.createElement)("select",{id:u,className:"wc-block-sort-select__select",defaultValue:n,onChange:c,readOnly:s,value:l},a.map((function(e){return Object(p.createElement)("option",{key:e.key,value:e.key},e.label)}))))}))),K=(r(188),function(e){var t=e.defaultValue,r=e.onChange,n=e.readOnly,o=e.value;return Object(p.createElement)(J,{className:"wc-block-review-sort-select",defaultValue:t,label:Object(w.__)("Order by",'woocommerce'),onChange:r,options:[{key:"most-recent",label:Object(w.__)("Most recent",'woocommerce')},{key:"highest-rating",label:Object(w.__)("Highest rating",'woocommerce')},{key:"lowest-rating",label:Object(w.__)("Lowest rating",'woocommerce')}],readOnly:n,screenReaderLabel:Object(w.__)("Order reviews by",'woocommerce'),value:o})}),X=r(10),G=r.n(X),Y=r(64),z=r.n(Y),Z=r(39),q=r(26),$=function(e){var t=function(t){function r(){var e,t;o()(this,r);for(var n=arguments.length,c=new Array(n),a=0;a<n;a++)c[a]=arguments[a];return t=s()(this,(e=u()(r)).call.apply(e,[this].concat(c))),j()(B()(t),"isPreview",!!t.props.attributes.previewReviews),j()(B()(t),"delayedAppendReviews",t.props.delayFunction(t.appendReviews)),j()(B()(t),"state",{error:null,loading:!0,reviews:t.isPreview?t.props.attributes.previewReviews:[],totalReviews:t.isPreview?t.props.attributes.previewReviews.length:0}),j()(B()(t),"setError",(function(e){var r,n;return G.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r=t.props.onReviewsLoadError,o.next=3,G.a.awrap(Object(q.a)(e));case 3:n=o.sent,t.setState({reviews:[],loading:!1,error:n}),r(n);case 6:case"end":return o.stop()}}))})),t}return d()(r,t),a()(r,[{key:"componentDidMount",value:function(){this.replaceReviews()}},{key:"componentDidUpdate",value:function(e){e.reviewsToDisplay<this.props.reviewsToDisplay?this.delayedAppendReviews():this.shouldReplaceReviews(e,this.props)&&this.replaceReviews()}},{key:"shouldReplaceReviews",value:function(e,t){return e.orderby!==t.orderby||e.order!==t.order||e.productId!==t.productId||!z()(e.categoryIds,t.categoryIds)}},{key:"componentWillUnMount",value:function(){this.delayedAppendReviews.cancel&&this.delayedAppendReviews.cancel()}},{key:"getArgs",value:function(e){var t=this.props,r=t.categoryIds,n=t.order,o=t.orderby,c=t.productId,a={order:n,orderby:o,per_page:t.reviewsToDisplay-e,offset:e};return r&&r.length&&(a.category_id=Array.isArray(r)?r.join(","):r),c&&(a.product_id=c),a}},{key:"replaceReviews",value:function(){if(!this.isPreview){var e=this.props.onReviewsReplaced;this.updateListOfReviews().then(e)}}},{key:"appendReviews",value:function(){if(!this.isPreview){var e=this.props,t=e.onReviewsAppended,r=e.reviewsToDisplay,n=this.state.reviews;r<=n.length||this.updateListOfReviews(n).then(t)}}},{key:"updateListOfReviews",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=this.props.reviewsToDisplay,n=this.state.totalReviews,o=Math.min(n,r)-t.length;return this.setState({loading:!0,reviews:t.concat(Array(o).fill({}))}),Object(Z.b)(this.getArgs(t.length)).then((function(r){var n=r.reviews,o=r.totalReviews;return e.setState({reviews:t.filter((function(e){return Object.keys(e).length})).concat(n),totalReviews:o,loading:!1,error:null}),{newReviews:n}})).catch(this.setError)}},{key:"render",value:function(){var t=this.props.reviewsToDisplay,r=this.state,n=r.error,o=r.loading,c=r.reviews,a=r.totalReviews;return Object(p.createElement)(e,V()({},this.props,{error:n,isLoading:o,reviews:c.slice(0,t),totalReviews:a}))}}]),r}(g.Component);j()(t,"defaultProps",{delayFunction:function(e){return e},onReviewsAppended:function(){},onReviewsLoadError:function(){},onReviewsReplaced:function(){}});var r=e.displayName,n=void 0===r?e.name||"Component":r;return t.displayName="WithReviews( ".concat(n," )"),t}(function(e){function t(){return o()(this,t),s()(this,u()(t).apply(this,arguments))}return d()(t,e),a()(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.error,n=e.isLoading,o=e.noReviewsPlaceholder,c=e.reviews,a=e.totalReviews;return r?Object(p.createElement)(f.a,{className:"wc-block-featured-product-error",error:r,isLoading:n}):0!==c.length||n?Object(p.createElement)(v.Disabled,null,t.showOrderby&&h.d&&Object(p.createElement)(K,{readOnly:!0,value:t.orderby}),Object(p.createElement)(U,{attributes:t,reviews:c}),t.showLoadMore&&a>c.length&&Object(p.createElement)(C,{screenReaderLabel:Object(w.__)("Load more reviews",'woocommerce')})):Object(p.createElement)(o,{attributes:t})}}]),t}(g.Component)),ee=function(e){function t(){return o()(this,t),s()(this,u()(t).apply(this,arguments))}return d()(t,e),a()(t,[{key:"renderHiddenContentPlaceholder",value:function(){var e=this.props,t=e.icon,r=e.name;return Object(p.createElement)(v.Placeholder,{icon:t,label:r},Object(w.__)("The content for this block is hidden due to block settings.",'woocommerce'))}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.className,n=e.noReviewsPlaceholder,o=t.categoryIds,c=t.productId,a=t.reviewsOnPageLoad,i=t.showProductName,s=t.showReviewDate,l=t.showReviewerName,u=t.showReviewContent,b=t.showReviewImage,d=t.showReviewRating,w=Object(Z.c)(t.orderby),g=w.order,v=w.orderby;return!(u||d||s||l||b||i)?this.renderHiddenContentPlaceholder():Object(p.createElement)("div",{className:Object(Z.a)(r,t)},Object(p.createElement)($,{attributes:t,categoryIds:o,delayFunction:function(e){return Object(m.debounce)(e,400)},noReviewsPlaceholder:n,orderby:v,order:g,productId:c,reviewsToDisplay:a}))}}]),t}(g.Component);t.a=ee}});
