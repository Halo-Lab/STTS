/*! For license information please see 5.0bf0b8aa.chunk.js.LICENSE.txt */
(this.webpackJsonpSTTS=this.webpackJsonpSTTS||[]).push([[5],{104:function(e,t,n){e.exports={form:"Form_form__3wvE7",form__input:"Form_form__input__1KyE_",form__btn:"Form_form__btn__3dylB",iconSearch:"Form_iconSearch__3LZoE"}},118:function(e,t,n){"use strict";var r=n(94),s=n(0),i=n(30),a=n(104),o=n.n(a),c=n(13),l=n(5),d=n(1),j=function(){return Object(d.jsx)("svg",{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("path",{d:"M23.1913 21.3987L18.4133 16.6207C19.5636 15.0893 20.1846 13.2253 20.1825 11.31C20.1825 6.41773 16.2023 2.4375 11.31 2.4375C6.41773 2.4375 2.4375 6.41773 2.4375 11.31C2.4375 16.2023 6.41773 20.1825 11.31 20.1825C13.2253 20.1846 15.0893 19.5636 16.6207 18.4133L21.3987 23.1913C21.6406 23.4075 21.956 23.5229 22.2803 23.5138C22.6046 23.5048 22.9131 23.3719 23.1425 23.1425C23.3719 22.9131 23.5048 22.6046 23.5138 22.2803C23.5229 21.956 23.4075 21.6406 23.1913 21.3987ZM4.9725 11.31C4.9725 10.0566 5.34419 8.83127 6.04056 7.78907C6.73693 6.74688 7.72672 5.93458 8.88474 5.45491C10.0428 4.97524 11.317 4.84974 12.5464 5.09427C13.7757 5.33881 14.905 5.9424 15.7913 6.82871C16.6776 7.71503 17.2812 8.84426 17.5257 10.0736C17.7703 11.303 17.6448 12.5772 17.1651 13.7353C16.6854 14.8933 15.8731 15.8831 14.8309 16.5794C13.7887 17.2758 12.5634 17.6475 11.31 17.6475C9.62981 17.6455 8.01901 16.9771 6.83094 15.7891C5.64286 14.601 4.97452 12.9902 4.9725 11.31Z",fill:"#B9B9B9"})})};t.a=function(e){var t=e.placeholder,n=void 0===t?"":t,a=e.name,b=e.type,u=void 0===b?"add":b,h=Object(s.useState)(""),p=Object(r.a)(h,2),f=p[0],_=p[1],x=Object(c.b)();return Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x("findRepo"===u?i.a.fetchPackages(f):l.a.addItemPackage(f)),_("")},className:o.a.form,children:[Object(d.jsx)("label",{className:o.a.form__label,children:Object(d.jsx)("input",{className:o.a.form__input,type:"text",value:f,onChange:function(e){var t=e.target;return _(t.value)},name:"email",placeholder:n})}),Object(d.jsx)("button",{type:"submit",className:o.a.form__btn,children:a}),Object(d.jsx)("div",{className:o.a.iconSearch,children:Object(d.jsx)(j,{})})]})}},139:function(e,t,n){e.exports={container:"ListRepo_container__2ZzXn",list:"ListRepo_list__2umyf",item:"ListRepo_item__2pUTs",btnAdd:"ListRepo_btnAdd__3ufco",wrapBtns:"ListRepo_wrapBtns__3sl30",btnPrev:"ListRepo_btnPrev__1OiNt",btnNext:"ListRepo_btnNext__2Zi0N",arrowPrev:"ListRepo_arrowPrev__bOc_3",arrowNext:"ListRepo_arrowNext__3CwzN",arrowDis:"ListRepo_arrowDis__23jh7",arrowDisNext:"ListRepo_arrowDisNext__3BqOB",btn:"ListRepo_btn__FRs_W",disabled:"ListRepo_disabled__1ncic"}},140:function(e,t,n){e.exports={content:"User_content__s1DV-",image:"User_image__1y9cJ",contacts:"User_contacts__MfRBE",icon:"User_icon__39-tP",userInfo:"User_userInfo__3brfj",bio:"User_bio__2f6_i"}},141:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function s(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=s.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var o in r)n.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(r=function(){return s}.apply(t,[]))||(e.exports=r)}()},256:function(e,t,n){"use strict";n.r(t);var r=n(33),s=n(94),i=n(0),a=n(13),o=n(30),c=n(5),l=n(118),d=n(139),j=n.n(d),b=n(140),u=n.n(b),h=n(1),p=function(){return Object(h.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M8 1.5C5.51562 1.5 3.5 3.41844 3.5 5.78125C3.5 8.5 6.5 12.8084 7.60156 14.2966C7.64729 14.3594 7.70722 14.4105 7.77646 14.4457C7.84571 14.481 7.9223 14.4994 8 14.4994C8.0777 14.4994 8.15429 14.481 8.22354 14.4457C8.29278 14.4105 8.35271 14.3594 8.39844 14.2966C9.5 12.8091 12.5 8.50219 12.5 5.78125C12.5 3.41844 10.4844 1.5 8 1.5Z",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}),Object(h.jsx)("path",{d:"M8 7.5C8.82843 7.5 9.5 6.82843 9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5Z",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"})]})},f=function(){return Object(h.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M6.86145 11.4959L5.29032 13.067C4.63896 13.7184 3.58414 13.7184 2.93333 13.0672C2.28239 12.4162 2.28239 11.3613 2.9332 10.7105L6.076 7.56769C6.72681 6.91685 7.78174 6.91685 8.43255 7.56769C8.64951 7.78464 9.00128 7.78464 9.21823 7.56769C9.43519 7.35073 9.43519 6.99896 9.21823 6.782C8.13349 5.69726 6.37507 5.69726 5.29032 6.782L2.14754 9.92478C1.0628 11.0095 1.0628 12.7679 2.14754 13.8527C3.23216 14.938 4.99071 14.938 6.07603 13.8527L7.64716 12.2816C7.86411 12.0646 7.86411 11.7128 7.64716 11.4959C7.4302 11.2789 7.0784 11.279 6.86145 11.4959Z",fill:"black"}),Object(h.jsx)("path",{d:"M13.8535 2.14693C12.7687 1.06219 11.0097 1.06219 9.92498 2.14693L8.03997 4.03194C7.82302 4.2489 7.82302 4.60067 8.03997 4.81763C8.25693 5.03458 8.6087 5.03458 8.82565 4.81763L10.7107 2.93261C11.3615 2.28178 12.4169 2.28178 13.0678 2.93261C13.7186 3.58343 13.7186 4.63835 13.0678 5.28917L9.6111 8.74588C8.96026 9.39671 7.90536 9.39671 7.25455 8.74588C7.0376 8.52892 6.68582 8.52892 6.46887 8.74588C6.25191 8.96283 6.25191 9.3146 6.46887 9.53156C7.55361 10.6163 9.31204 10.6163 10.3968 9.53156L13.8535 6.07487C14.9382 4.99013 14.9382 3.23168 13.8535 2.14693Z",fill:"black"})]})},_=function(){return Object(h.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M13.25 3H2.75C2.05964 3 1.5 3.55964 1.5 4.25V11.75C1.5 12.4404 2.05964 13 2.75 13H13.25C13.9404 13 14.5 12.4404 14.5 11.75V4.25C14.5 3.55964 13.9404 3 13.25 3Z",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"}),Object(h.jsx)("path",{d:"M3.5 5L8 8.5L12.5 5",stroke:"black","stroke-linecap":"round","stroke-linejoin":"round"})]})},x=function(e){var t=e.data,n=t.avatar_url,r=void 0===n?"/":n,s=t.name,i=void 0===s?"":s,a=t.bio,o=void 0===a?"":a,c=t.location,l=void 0===c?"":c,d=t.blog,j=void 0===d?"":d,b=t.email,x=void 0===b?"":b;return Object(h.jsxs)("div",{className:u.a.content,children:[Object(h.jsx)("div",{className:u.a.image,children:Object(h.jsx)("img",{src:r})}),Object(h.jsxs)("div",{className:u.a.userInfo,children:[Object(h.jsx)("h2",{children:i}),Object(h.jsx)("p",{className:u.a.bio,children:o})]}),Object(h.jsxs)("div",{className:u.a.contacts,children:[l&&Object(h.jsxs)("div",{className:u.a.icon,children:[Object(h.jsx)(p,{}),Object(h.jsx)("p",{children:l})]}),j&&Object(h.jsxs)("div",{className:u.a.icon,children:[Object(h.jsx)(f,{}),Object(h.jsx)("p",{children:j})]}),x&&Object(h.jsxs)("div",{className:u.a.icon,children:[Object(h.jsx)(_,{}),Object(h.jsx)("p",{children:x})]})]})]})},m=n(26),O=function(){return Object(h.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M28 16C28 9.375 22.625 4 16 4C9.375 4 4 9.375 4 16C4 22.625 9.375 28 16 28C22.625 28 28 22.625 28 16Z",stroke:"#3861E7","stroke-width":"2","stroke-miterlimit":"10"}),Object(h.jsx)("path",{d:"M16 11V21",stroke:"#3861E7","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),Object(h.jsx)("path",{d:"M21 16H11",stroke:"#3861E7","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})},v=function(){return Object(h.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(h.jsx)("path",{d:"M28 16C28 9.375 22.625 4 16 4C9.375 4 4 9.375 4 16C4 22.625 9.375 28 16 28C22.625 28 28 22.625 28 16Z",stroke:"#2CD351","stroke-width":"2","stroke-miterlimit":"10"}),Object(h.jsx)("path",{d:"M22 11L13.6 21L10 17",stroke:"#2CD351","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})},C=n(141),w=n.n(C);t.default=function(){var e=Object(a.b)(),t=Object(i.useState)(1),n=Object(s.a)(t,2),d=n[0],b=n[1],u=Object(a.c)((function(e){return e.packages.packages})),p=Object(a.c)(m.c),f=Object(a.c)(m.d),_=u.map((function(e){return f.includes(e.full_name)?Object(r.a)(Object(r.a)({},e),{},{added:!0}):Object(r.a)(Object(r.a)({},e),{},{added:!1})})),C=function(t){var n=t.currentTarget.dataset.name;e(c.a.addItemPackage(n))};Object(i.useEffect)((function(){d<1||0!==u.length&&e(o.a.fetchPackages(p.login,d))}),[d]),console.log(d);w()(j.a.disabled,j.a.btn);return Object(h.jsxs)("section",{className:j.a.container,children:[Object(h.jsx)(l.a,{placeholder:"Organization Name",type:"findRepo",name:"Find"}),u.length>0&&Object(h.jsx)(x,{data:p}),Object(h.jsx)("ul",{className:j.a.list,children:_.map((function(e){return Object(h.jsxs)("li",{style:e.added?{borderLeft:"8px solid #2CD351"}:null,className:j.a.item,children:[Object(h.jsx)("p",{children:e.name}),Object(h.jsx)("div",{className:j.a.btnAdd,onClick:e.added?function(){}:C,"data-name":e.full_name,children:e.added?Object(h.jsx)(v,{}):Object(h.jsx)(O,{})})]},e.id)}))}),(30===_.length||d>1)&&Object(h.jsxs)("div",{className:j.a.wrapBtns,children:[Object(h.jsxs)("div",{className:1===d?j.a.disabled:j.a.btn,onClick:function(){1!==d&&b((function(e){return e-1}))},children:[Object(h.jsx)("div",{className:1===d?j.a.arrowDis:j.a.arrowPrev}),Object(h.jsx)("span",{children:"Previous"})]}),Object(h.jsxs)("div",{className:30===_.length?j.a.btn:j.a.disabled,onClick:_.length>=30&&function(){b((function(e){return e+1}))},children:[Object(h.jsx)("span",{children:"Next"}),Object(h.jsx)("div",{className:30===_.length?j.a.arrowNext:j.a.arrowDisNext})]})]})]})}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(37);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,s=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(r=(a=o.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){s=!0,i=c}finally{try{r||null==o.return||o.return()}finally{if(s)throw i}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=5.0bf0b8aa.chunk.js.map