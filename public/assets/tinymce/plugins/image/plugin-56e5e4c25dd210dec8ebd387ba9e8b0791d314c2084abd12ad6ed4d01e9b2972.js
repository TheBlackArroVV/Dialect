!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager"),d={hasDimensions:function(e){return!1!==e.settings.image_dimensions},hasAdvTab:function(e){return!0===e.settings.image_advtab},getPrependUrl:function(e){return e.getParam("image_prepend_url","")},getClassList:function(e){return e.getParam("image_class_list")},hasDescription:function(e){return!1!==e.settings.image_description},hasImageTitle:function(e){return!0===e.settings.image_title},hasImageCaption:function(e){return!0===e.settings.image_caption},getImageList:function(e){return e.getParam("image_list",!1)},hasUploadUrl:function(e){return e.getParam("images_upload_url",!1)},hasUploadHandler:function(e){return e.getParam("images_upload_handler",!1)},getUploadUrl:function(e){return e.getParam("images_upload_url")},getUploadHandler:function(e){return e.getParam("images_upload_handler")},getUploadBasePath:function(e){return e.getParam("images_upload_base_path")},getUploadCredentials:function(e){return e.getParam("images_upload_credentials")}},a="undefined"!=typeof window?window:Function("return this;")(),r=function(e,t){for(var n=t!==undefined&&null!==t?t:a,r=0;r<e.length&&n!==undefined&&null!==n;++r)n=n[e[r]];return n},i=function(e,t){var n=e.split(".");return r(n,t)},t={getOrDie:function(e,t){var n=i(e,t);if(n===undefined||null===n)throw e+" not available on this browser";return n}};function o(){return new(t.getOrDie("FileReader"))}var n=tinymce.util.Tools.resolve("tinymce.util.Promise"),f=tinymce.util.Tools.resolve("tinymce.util.Tools"),l=tinymce.util.Tools.resolve("tinymce.util.XHR"),u=function(e,t){return Math.max(parseInt(e,10),parseInt(t,10))},g={getImageSize:function(e,n){var r=document.createElement("img");function t(e,t){r.parentNode&&r.parentNode.removeChild(r),n({width:e,height:t})}r.onload=function(){t(u(r.width,r.clientWidth),u(r.height,r.clientHeight))},r.onerror=function(){t(0,0)};var a=r.style;a.visibility="hidden",a.position="fixed",a.bottom=a.left="0px",a.width=a.height="auto",document.body.appendChild(r),r.src=e},buildListItems:function(e,a,t){return function n(e,r){return r=r||[],f.each(e,function(e){var t={text:e.text||e.title};e.menu?t.menu=n(e.menu):(t.value=e.value,a(t)),r.push(t)}),r}(e,t||[])},removePixelSuffix:function(e){return e&&(e=e.replace(/px$/,"")),e},addPixelSuffix:function(e){return 0<e.length&&/^[0-9]+$/.test(e)&&(e+="px"),e},mergeMargins:function(e){if(e.margin){var t=e.margin.split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e},createImageList:function(e,t){var n=d.getImageList(e);"string"==typeof n?l.send({url:n,success:function(e){t(JSON.parse(e))}}):"function"==typeof n?n(t):t(n)},waitLoadImage:function(e,t,n){function r(){n.onload=n.onerror=null,e.selection&&(e.selection.select(n),e.nodeChanged())}n.onload=function(){t.width||t.height||!d.hasDimensions(e)||e.dom.setAttribs(n,{width:n.clientWidth,height:n.clientHeight}),r()},n.onerror=r},blobToDataUri:function(r){return new n(function(e,t){var n=new o;n.onload=function(){e(n.result)},n.onerror=function(){t(o.error.message)},n.readAsDataURL(r)})}},s=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),c=function(t){return function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&Array.prototype.isPrototypeOf(e)?"array":"object"===t&&String.prototype.isPrototypeOf(e)?"string":t}(e)===t}},m={isString:c("string"),isObject:c("object"),isArray:c("array"),isNull:c("null"),isBoolean:c("boolean"),isUndefined:c("undefined"),isFunction:c("function"),isNumber:c("number")},p=function(o){return function(){for(var e=new Array(arguments.length),t=0;t<e.length;t++)e[t]=arguments[t];if(0===e.length)throw new Error("Can't merge zero objects");for(var n={},r=0;r<e.length;r++){var a=e[r];for(var i in a)a.hasOwnProperty(i)&&(n[i]=o(n[i],a[i]))}return n}},h=p(function(e,t){return m.isObject(e)&&m.isObject(t)?h(e,t):t}),v=p(function(e,t){return t}),b={deepMerge:h,merge:v},y=s.DOM,x=function(e){return e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?g.removePixelSuffix(e.style.marginLeft):""},w=function(e){return e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?g.removePixelSuffix(e.style.marginTop):""},S=function(e){return e.style.borderWidth?g.removePixelSuffix(e.style.borderWidth):""},U=function(e,t){return e.hasAttribute(t)?e.getAttribute(t):""},C=function(e,t){return e.style[t]?e.style[t]:""},T=function(e){return null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName},P=function(e,t,n){e.setAttribute(t,n)},I=function(e){var t,n,r,a;T(e)?(a=(r=e).parentNode,y.insertAfter(r,a),y.remove(a)):(t=e,n=y.create("figure",{"class":"image"}),y.insertAfter(n,t),n.appendChild(t),n.appendChild(y.create("figcaption",{contentEditable:!0},"Caption")),n.contentEditable="false")},N=function(e,t){var n=e.getAttribute("style"),r=t(null!==n?n:"");0<r.length?(e.setAttribute("style",r),e.setAttribute("data-mce-style",r)):e.removeAttribute("style")},A=function(e,r){return function(e,t,n){e.style[t]?(e.style[t]=g.addPixelSuffix(n),N(e,r)):P(e,t,n)}},L=function(e,t){return e.style[t]?g.removePixelSuffix(e.style[t]):U(e,t)},_=function(e,t){var n=g.addPixelSuffix(t);e.style.marginLeft=n,e.style.marginRight=n},O=function(e,t){var n=g.addPixelSuffix(t);e.style.marginTop=n,e.style.marginBottom=n},R=function(e,t){var n=g.addPixelSuffix(t);e.style.borderWidth=n},D=function(e,t){e.style.borderStyle=t},k=function(e){return"FIGURE"===e.nodeName},z=function(e,t){var n=document.createElement("img");return P(n,"style",t.style),(x(n)||""!==t.hspace)&&_(n,t.hspace),(w(n)||""!==t.vspace)&&O(n,t.vspace),(S(n)||""!==t.border)&&R(n,t.border),(C(n,"borderStyle")||""!==t.borderStyle)&&D(n,t.borderStyle),e(n.getAttribute("style"))},M=function(e,t){return{src:U(t,"src"),alt:U(t,"alt"),title:U(t,"title"),width:L(t,"width"),height:L(t,"height"),"class":U(t,"class"),style:e(U(t,"style")),caption:T(t),hspace:x(t),vspace:w(t),border:S(t),borderStyle:C(t,"borderStyle")}},E=function(e,t,n,r,a){n[r]!==t[r]&&a(e,r,n[r])},H=function(r,a){return function(e,t,n){r(e,n),N(e,a)}},j=function(e,t,n){var r=M(e,n);E(n,r,t,"caption",function(e,t,n){return I(e)}),E(n,r,t,"src",P),E(n,r,t,"alt",P),E(n,r,t,"title",P),E(n,r,t,"width",A(0,e)),E(n,r,t,"height",A(0,e)),E(n,r,t,"class",P),E(n,r,t,"style",H(function(e,t){return P(e,"style",t)},e)),E(n,r,t,"hspace",H(_,e)),E(n,r,t,"vspace",H(O,e)),E(n,r,t,"border",H(R,e)),E(n,r,t,"borderStyle",H(D,e))},B=function(e,t){var n=e.dom.styles.parse(t),r=g.mergeMargins(n),a=e.dom.styles.parse(e.dom.styles.serialize(r));return e.dom.styles.serialize(a)},F=function(e){var t=e.selection.getNode(),n=e.dom.getParent(t,"figure.image");return n?e.dom.select("img",n)[0]:t&&("IMG"!==t.nodeName||t.getAttribute("data-mce-object")||t.getAttribute("data-mce-placeholder"))?null:t},W=function(t,e){var n=t.dom,r=n.getParent(e.parentNode,function(e){return t.schema.getTextBlockElements()[e.nodeName]});return r?n.split(r,e):e},G=function(t){var e=F(t);return e?M(function(e){return B(t,e)},e):{src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""}},J=function(t,e){var n=function(e,t){var n=document.createElement("img");if(j(e,b.merge(t,{caption:!1}),n),P(n,"alt",t.alt),t.caption){var r=y.create("figure",{"class":"image"});return r.appendChild(n),r.appendChild(y.create("figcaption",{contentEditable:!0},"Caption")),r.contentEditable="false",r}return n}(function(e){return B(t,e)},e);t.dom.setAttrib(n,"data-mce-id","__mcenew"),t.focus(),t.selection.setContent(n.outerHTML);var r=t.dom.select('*[data-mce-id="__mcenew"]')[0];if(t.dom.setAttrib(r,"data-mce-id",null),k(r)){var a=W(t,r);t.selection.select(a)}else t.selection.select(r)},V=function(e,t){var n=F(e);n?t.src?function(t,e){var n,r=F(t);if(j(function(e){return B(t,e)},e,r),n=r,t.dom.setAttrib(n,"src",n.getAttribute("src")),k(r.parentNode)){var a=r.parentNode;W(t,a),t.selection.select(r.parentNode)}else t.selection.select(r),g.waitLoadImage(t,e,r)}(e,t):function(e,t){if(t){var n=e.dom.is(t.parentNode,"figure.image")?t.parentNode:t;e.dom.remove(n),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}}(e,n):t.src&&J(e,t)},$=function(n,r){r.find("#style").each(function(e){var t=z(function(e){return B(n,e)},b.merge({src:"",alt:"",title:"",width:"",height:"","class":"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:""},r.toJSON()));e.value(t)})},X={makeTab:function(t){return{title:"Advanced",type:"form",pack:"start",items:[{label:"Style",name:"style",type:"textbox",onchange:(i=t,function(e){var t=i.dom,n=e.control.rootControl;if(d.hasAdvTab(i)){var r=n.toJSON(),a=t.parseStyle(r.style);n.find("#vspace").value(""),n.find("#hspace").value(""),((a=g.mergeMargins(a))["margin-top"]&&a["margin-bottom"]||a["margin-right"]&&a["margin-left"])&&(a["margin-top"]===a["margin-bottom"]?n.find("#vspace").value(g.removePixelSuffix(a["margin-top"])):n.find("#vspace").value(""),a["margin-right"]===a["margin-left"]?n.find("#hspace").value(g.removePixelSuffix(a["margin-right"])):n.find("#hspace").value("")),a["border-width"]?n.find("#border").value(g.removePixelSuffix(a["border-width"])):n.find("#border").value(""),a["border-style"]?n.find("#borderStyle").value(a["border-style"]):n.find("#borderStyle").value(""),n.find("#style").value(t.serializeStyle(t.parseStyle(t.serializeStyle(a))))}})},{type:"form",layout:"grid",packV:"start",columns:2,padding:0,defaults:{type:"textbox",maxWidth:50,onchange:function(e){$(t,e.control.rootControl)}},items:[{label:"Vertical space",name:"vspace"},{label:"Border width",name:"border"},{label:"Horizontal space",name:"hspace"},{label:"Border style",type:"listbox",name:"borderStyle",width:90,maxWidth:90,onselect:function(e){$(t,e.control.rootControl)},values:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]};var i}},q=function(e,t){e.state.set("oldVal",e.value()),t.state.set("oldVal",t.value())},K=function(e,t){var n=e.find("#width")[0],r=e.find("#height")[0],a=e.find("#constrain")[0];n&&r&&a&&t(n,r,a.checked())},Q=function(e,t,n){var r=e.state.get("oldVal"),a=t.state.get("oldVal"),i=e.value(),o=t.value();n&&r&&a&&i&&o&&(i!==r?(o=Math.round(i/r*o),isNaN(o)||t.value(o)):(i=Math.round(o/a*i),isNaN(i)||e.value(i))),q(e,t)},Y=function(e){K(e,Q)},Z={createUi:function(){var e=function(e){Y(e.control.rootControl)};return{type:"container",label:"Dimensions",layout:"flex",align:"center",spacing:5,items:[{name:"width",type:"textbox",maxLength:5,size:5,onchange:e,ariaLabel:"Width"},{type:"label",text:"x"},{name:"height",type:"textbox",maxLength:5,size:5,onchange:e,ariaLabel:"Height"},{name:"constrain",type:"checkbox",checked:!0,text:"Constrain proportions"}]}},syncSize:function(e){K(e,q)},updateSize:Y},ee=function(e){e.meta=e.control.rootControl.toJSON()},te=function(c,e){var t=[{name:"src",type:"filepicker",filetype:"image",label:"Source",autofocus:!0,onchange:function(e){var t,n,r,a,i,o,l,u,s;n=c,o=(t=e).meta||{},l=t.control,u=l.rootControl,(s=u.find("#image-list")[0])&&s.value(n.convertURL(l.value(),"src")),f.each(o,function(e,t){u.find("#"+t).value(e)}),o.width||o.height||(r=n.convertURL(l.value(),"src"),a=d.getPrependUrl(n),i=new RegExp("^(?:[a-z]+:)?//","i"),a&&!i.test(r)&&r.substring(0,a.length)!==a&&(r=a+r),l.value(r),g.getImageSize(n.documentBaseURI.toAbsolute(l.value()),function(e){e.width&&e.height&&d.hasDimensions(n)&&(u.find("#width").value(e.width),u.find("#height").value(e.height),Z.syncSize(u))}))},onbeforecall:ee},e];return d.hasDescription(c)&&t.push({name:"alt",type:"textbox",label:"Image description"}),d.hasImageTitle(c)&&t.push({name:"title",type:"textbox",label:"Image Title"}),d.hasDimensions(c)&&t.push(Z.createUi()),d.getClassList(c)&&t.push({name:"class",type:"listbox",label:"Class",values:g.buildListItems(d.getClassList(c),function(e){e.value&&(e.textStyle=function(){return c.formatter.getCssText({inline:"img",classes:[e.value]})})})}),d.hasImageCaption(c)&&t.push({name:"caption",type:"checkbox",label:"Caption"}),t},ne={makeTab:function(e,t){return{title:"General",type:"form",items:te(e,t)}},getGeneralItems:te},re=function(){return t.getOrDie("URL")},ae=function(e){return re().createObjectURL(e)},ie=function(e){re().revokeObjectURL(e)},oe=tinymce.util.Tools.resolve("tinymce.ui.Factory");function le(){return new(t.getOrDie("XMLHttpRequest"))}var ue=function(){},se=function(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t};function ce(o){var t=function(e,t,n,r){var a,i;(a=new le).open("POST",o.url),a.withCredentials=o.credentials,a.upload.onprogress=function(e){r(e.loaded/e.total*100)},a.onerror=function(){n("Image upload failed due to a XHR Transport error. Code: "+a.status)},a.onload=function(){var e;a.status<200||300<=a.status?n("HTTP Error: "+a.status):(e=JSON.parse(a.responseText))&&"string"==typeof e.location?t(se(o.basePath,e.location)):n("Invalid JSON: "+a.responseText)},(i=new FormData).append("file",e.blob(),e.filename()),a.send(i)};return o=f.extend({credentials:!1,handler:t},o),{upload:function(e){return o.url||o.handler!==t?(r=e,a=o.handler,new n(function(e,t){try{a(r,e,t,ue)}catch(n){t(n.message)}})):n.reject("Upload url missing from the settings.");var r,a}}}var de=function(u){return function(e){var t=oe.get("Throbber"),n=e.control.rootControl,r=new t(n.getEl()),a=e.control.value(),i=ae(a),o=ce({url:d.getUploadUrl(u),basePath:d.getUploadBasePath(u),credentials:d.getUploadCredentials(u),handler:d.getUploadHandler(u)}),l=function(){r.hide(),ie(i)};return r.show(),g.blobToDataUri(a).then(function(e){var t=u.editorUpload.blobCache.create({blob:a,blobUri:i,name:a.name?a.name.replace(/\.[^\.]+$/,""):null,base64:e.split(",")[1]});return o.upload(t).then(function(e){var t=n.find("#src");return t.value(e),n.find("tabpanel")[0].activateTab(0),t.fire("change"),l(),e})})["catch"](function(e){u.windowManager.alert(e),l()})}},fe=".jpg,.jpeg,.png,.gif",ge={makeTab:function(e){return{title:"Upload",type:"form",layout:"flex",direction:"column",align:"stretch",padding:"20 20 20 20",items:[{type:"container",layout:"flex",direction:"column",align:"center",spacing:10,items:[{text:"Browse for an image",type:"browsebutton",accept:fe,onchange:de(e)},{text:"OR",type:"label"}]},{text:"Drop an image here",type:"dropzone",accept:fe,height:100,onchange:de(e)}]}}},me=function(e){return function(){return e}},pe=me(!1),he=me(!0),ve={noop:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},noarg:function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n()}},compose:function(n,r){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n(r.apply(null,arguments))}},constant:me,identity:function(e){return e},tripleEquals:function(e,t){return e===t},curry:function(i){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];for(var o=new Array(arguments.length-1),n=1;n<arguments.length;n++)o[n-1]=arguments[n];return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];var a=o.concat(n);return i.apply(null,a)}},not:function(n){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return!n.apply(null,arguments)}},die:function(e){return function(){throw new Error(e)}},apply:function(e){return e()},call:function(e){e()},never:pe,always:he},be=function(t,e){var n=e.control.getRoot();Z.updateSize(n),t.undoManager.transact(function(){var e=b.merge(G(t),n.toJSON());V(t,e)}),t.editorUpload.uploadImagesAuto()};function ye(i){function e(e){var n,t,r=G(i);if(e&&(t={type:"listbox",label:"Image list",name:"image-list",values:g.buildListItems(e,function(e){e.value=i.convertURL(e.value||e.url,"src")},[{text:"None",value:""}]),value:r.src&&i.convertURL(r.src,"src"),onselect:function(e){var t=n.find("#alt");(!t.value()||e.lastControl&&t.value()===e.lastControl.text())&&t.value(e.control.text()),n.find("#src").value(e.control.value()).fire("change")},onPostRender:function(){t=this}}),d.hasAdvTab(i)||d.hasUploadUrl(i)||d.hasUploadHandler(i)){var a=[ne.makeTab(i,t)];d.hasAdvTab(i)&&a.push(X.makeTab(i)),(d.hasUploadUrl(i)||d.hasUploadHandler(i))&&a.push(ge.makeTab(i)),n=i.windowManager.open({title:"Insert/edit image",data:r,bodyType:"tabpanel",body:a,onSubmit:ve.curry(be,i)})}else n=i.windowManager.open({title:"Insert/edit image",data:r,body:ne.getGeneralItems(i,t),onSubmit:ve.curry(be,i)});Z.syncSize(n)}return{open:function(){g.createImageList(i,e)}}}var xe=function(e){e.addCommand("mceImage",ye(e).open)},we=function(i){return function(e){for(var t,n,r=e.length,a=function(e){e.attr("contenteditable",i?"true":null)};r--;)t=e[r],(n=t.attr("class"))&&/\bimage\b/.test(n)&&(t.attr("contenteditable",i?"false":null),f.each(t.getAll("figcaption"),a))}},Se=function(e){e.on("preInit",function(){e.parser.addNodeFilter("figure",we(!0)),e.serializer.addNodeFilter("figure",we(!1))})},Ue=function(e){e.addButton("image",{icon:"image",tooltip:"Insert/edit image",onclick:ye(e).open,stateSelector:"img:not([data-mce-object],[data-mce-placeholder]),figure.image"}),e.addMenuItem("image",{icon:"image",text:"Image",onclick:ye(e).open,context:"insert",prependToContext:!0})};e.add("image",function(e){Se(e),Ue(e),xe(e)})}();
