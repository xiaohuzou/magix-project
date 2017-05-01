define("app/menu",function(e,a,i){var t=[[-1,"/index","首页"]],s=[{text:"常用组件",icon:"&#xe695;",subs:[{text:"基础组件",canFolder:!0,subs:[{text:"弹出框",icon:"&#xe600;",url:"/coms/dialog"},{text:"验证组件",icon:"&#xe65d;",url:"/coms/validation"},{text:"下拉框组件",icon:"&#xe663;",url:"/coms/dropdown"},{text:"分页组件",icon:"&#xe624;",url:"/coms/pagination"},{text:"popover",icon:"&#xe609;",url:"/coms/popover"},{text:"日历组件",icon:"&#xe688;",url:"/coms/calendar"}]},{text:"其它组件",canFolder:!0,subs:[{text:"全局提示",icon:"&#xe660;",url:"/coms/gtip"},{text:"小时选择",icon:"&#xe62f;",url:"/coms/hourpicker"},{text:"复制组件",icon:"&#xe607;",url:"/coms/copy"},{text:"taginput",icon:"&#xe60a;",url:"/coms/taginput"},{text:"上传组件",icon:"&#xe62f;",url:"/coms/uploader"},{text:"范围组件",icon:"&#xe607;",url:"/coms/range"},{text:"tree",icon:"&#xe60a;",url:"/coms/tree"},{text:"颜色选择",icon:"&#xe62f;",url:"/coms/colorpicker"},{text:"popmenu",icon:"&#xe607;",url:"/coms/popmenu"},{text:"inputmask",icon:"&#xe63a;",url:"/coms/inputmask"}]}]},{text:"Mixins",icon:"&#xe667;",subs:[{text:"mixins的介绍",icon:"&#xe626;",url:"/mixins/intro"},{text:"加载loading",icon:"&#xe688;",url:"/mixins/loading"},{text:"checkbox联动",icon:"&#xe628;",url:"/mixins/checkbox"},{text:"checkbox保存状态",icon:"&#xe628;",url:"/mixins/checkbox-storestate"},{text:"大屏展示",icon:"&#xe688;",url:"/mixins/large-img"},{text:"图表",icon:"&#xe632;",url:"/mixins/chart"},{text:"节点震动",icon:"&#xe62a;",url:"/mixins/shake"},{text:"基础动效",icon:"&#xe627;",url:"/mixins/fx"}]},{text:"常见页面",icon:"&#xe691;",subs:[{text:"列表页面",icon:"&#xe667;",url:"/pages/list"},{text:"表单页面",icon:"&#xe617;",url:"/pages/form"}]},{text:"其它特性",icon:"&#xe648;",subs:[{text:"离开提醒",icon:"&#xe628;",url:"/sundries/leavepage"},{text:"弹框关闭提醒",icon:"&#xe665;",url:"/sundries/leavedlg"},{text:"流控处理",icon:"&#xe629;",url:"/sundries/preservice"}]}],d={},p={},b={},o=function(e){if(!o.$inited){o.$inited=1;for(var a=0,i=void 0,s=void 0,r=void 0,c=void 0;a<t.length;a++)i=t[a],i[0],s=i[1],r=i[2],c=r.split("-"),b[s]=c.reverse(),d[s]=r,p[s]=e}},r=function(e){for(var a=[],i=0;i<e.length;i++)a.push(e.charCodeAt(i).toString(32));return"k"+a.join("")},c={},n={},l={},u={},x=function(){if(!x.$inited){x.$inited=1;for(var e=s.length-1,a=void 0;e>=0;e--){a=s[e],a.key=r(a.text);for(var i="",d=a.subs.length-1,p=void 0;d>=0;d--)if(p=a.subs[d],p.icon)i=p.url,c[i]=p,n[i]=a.key,p.key=i.replace(/\//g,"x"),p.pathText=[a.text,p.text],t.push([p.permission||-1,i,p.text+"-"+a.text]);else if(p.subs&&p.subs.length){p.key=r(p.text),p.pathText=[a.text,p.text],u[p.key]=p;for(var b=p.subs.length-1,o=void 0;b>=0;b--)o=p.subs[b],i=o.url,c[i]=p,n[i]=a.key,o.key=i.replace(/\//g,"x"),o.pathText=[a.text,p.text,o.text],t.push([o.permission||-1,i,[o.text,p.text,a.text].join("-")]);p.subs.length||a.subs.splice(d,1)}a.url=i,l[a.key]=a.subs;var h=a.subs[0];h.canFolder&&(h.folderExpand=!0)}}};i.exports={route:function(e){return x(),o(e),{breadcrumbs:b,titles:d,routes:p}},menu:function(){return x(),{menus:s,urlsMap:c,urlsToMainMap:n,menusMap:l,subsMap:u}}}}),define("app/views/partials/header-search",["magix","../../menu","$"],function(e,a,i){var t=e("magix");t.applyStyle("pabcd8e",'.pabcd8e-456{box-shadow:0 3px 3px #eee;list-style:none;margin:0;border:1px solid #e6e6e6;border-radius:4px;position:relative;background-color:#fff}.pabcd8e-456:before{top:-7px;border:10px solid transparent;border-top:0;border-bottom:6px solid #e6e6e6}.pabcd8e-456:after,.pabcd8e-456:before{content:"";position:absolute;right:14px;width:0;height:0}.pabcd8e-456:after{top:-6px;border:10px solid transparent;border-top:0;border-bottom:6px solid #fff}.pabcd8e-5a8{color:#666;display:block;padding-left:7px;margin:6px 10px;height:26px;line-height:26px;border-radius:4px;white-space:nowrap}.pabcd8e-5a8:hover{color:#fff;background-color:#8383eb}.pabcd8e-433{float:right;margin-right:89px;position:relative}.pabcd8e-7cb,.pabcd8e-427{position:absolute;top:19px;left:15px;color:#a1a1f0;cursor:pointer}.pabcd8e-7cb{left:auto;right:10px;font-size:14px}.pabcd8e-4f8{width:260px;height:30px;border-radius:30px;border:0;line-height:30px;padding-left:40px;background-color:#5a5ad1;margin-top:10px;color:#e0e0fa!important;transition:border-radius .3s ease-out}.pabcd8e-4f8::-webkit-input-placeholder{color:#b9b9f9}.pabcd8e-4f8:-moz-placeholder{color:#b9b9f9}.pabcd8e-4f8:focus{border-radius:4px}.pabcd8e-456{position:absolute;top:58px;width:258px;left:2px}.pabcd8e-5c3{max-height:326px;overflow:auto}.pabcd8e-5a8:hover{color:#666;background-color:#fff}.pabcd8e-351 .pabcd8e-5a8{color:#fff;background-color:#8383eb}.pabcd8e-456:after,.pabcd8e-456:before{left:14px;right:auto}');var s=e("../../menu"),d=e("$"),p=new t.Cache,b=function(e){var a=p.get(e);if(!a){var i=["(.*?)("],t=e.split("");if(t.length){for(;t.length;)i.push(t.shift().replace(/[\-#$\^*()+\[\]{}|\\,.?\s]/g,"\\$&"),")(.*?)(");i.pop()}i.push(")(.*?)"),i=i.join("");for(var s=new RegExp(i,"i"),d=[],b=e.length,o=1;b>0;)b--,d.push("$",o,"($",o+1,")"),o+=2;d.push("$",o),p.set(e,a={regexp:s,replacement:d.join("")})}return a},o=function(e){for(var a=s.menu(),i=a.menus,t=[],d=b(e),p=function(e){var a=e.subs;if(a&&a.length)for(var i=0;i<a.length;i++){var s=a[i];d.regexp.test(s.text)||d.regexp.test(s.url)?s.subs?t.push.apply(t,s.subs):t.push(s):p(s)}},o=0;o<i.length;o++){var r=i[o];p(r)}return t},r=function(e,a){var i=d.Deferred();if(e){var t=o(e);i.resolve(t)}else i.resolve([]);return i.promise()};i.exports=t.View.extend({tmpl:{html:'<div mx-guid="g4" class="pabcd8e-433" id="gsearch_<%=$$.viewId%>"><span class="pabcdce-334 pabcd8e-427">&#xe608;</span><span class="pabcdce-334 pabcd8e-7cb pabcd16-ab9" title="清除输入" mx-click="clear()">&#xe68c;</span><input mx-guid="g1" type="text" class="pabcd8e-4f8" mx-input="search()" mx-keyup="search()" mx-paste="search()" mx-focusin="search()" id="sipt_<%=$$.viewId%>" placeholder="搜索..."/><div mx-guid="g3" id="gsearch_result_<%=$$.viewId%>" class="pabcd8e-456<%if(!$$.searchList||!$$.searchList.length){%> pabcd16-ab9<%}%>">2</div></div>',subs:[{s:"2",keys:["viewId","searchList"],tmpl:'<%if($$.searchList&&$$.searchList.length){%><ul mx-guid="g2" mx-mouseout="out()" mx-mousemove="move()" class="pabcd8e-5c3">3</ul><%}%>',path:'div[mx-guid="g3"]',attr:'id="gsearch_result_<%=$$.viewId%>" class="pabcd8e-456<%if(!$$.searchList||!$$.searchList.length){%> pabcd16-ab9<%}%>"',attrs:[{n:"id",p:1},{n:"class",p:1,f:"className"}]},{keys:["viewId"],path:'input[mx-guid="g1"]',attr:'id="sipt_<%=$$.viewId%>"',attrs:[{n:"id",p:1}]},{s:"3",keys:["viewId","searchKeyRegInfo"],tmpl:'<%for(var i=0;i<$$.searchList.length;i++){var item=$$.searchList[i]%><li data-idx="<%=i%>" id="sg_<%!$$.viewId%>_<%!i%>"><a href="#!<%=item.url%>" class="pabcd8e-5a8 pabcd16-9e0" mx-click="hide()" title="<%=item.pathText.join(\'>\')%>"><%=item.pathText[0]%><%for(var j=1;j<item.pathText.length;j++){var text=item.pathText[j]%>&gt;<%!text.replace($$.searchKeyRegInfo.regexp,$$.searchKeyRegInfo.replacement).replace(/\\)\\(/g,\'\').replace(/\\(/g,\'<b>\').replace(/\\)/g,\'</b>\')%><%}%></a></li><%}%>',path:'ul[mx-guid="g2"]',pKeys:["searchList"]},{keys:["viewId"],path:'div[mx-guid="g4"]',attr:'id="gsearch_<%=$$.viewId%>"',attrs:[{n:"id",p:1}]}]},init:function(){this.$idx=-1},render:function(){this.updater.digest({viewId:this.id})},"clear<click>":function(){var e=this,a=d("#gsearch_"+e.id+" input");a.val(""),a.trigger("input")},"search<keyup,paste,input,focusin>":function(e){var a=this,i=a.updater.get("searchList");if("focusin"==e.type&&i&&i.length)return void d("#gsearch_result_"+a.id).removeClass("pabcd16-ab9");var s=d.trim(e.eventTarget.value),p=s?"removeClass":"addClass";if(d("#gsearch_"+a.id+" .pabcd8e-7cb")[p]("pabcd16-ab9"),"keyup"==e.type&&i&&i.length)if(d("#gsearch_result_"+a.id).removeClass("none"),40==e.keyCode)a.normal(),a.$idx++,a.$idx>=i.length&&(a.$idx=0),a.highlight();else if(38==e.keyCode)a.normal(),a.$idx--,a.$idx<0&&(a.$idx=i.length-1),a.highlight();else if(13==e.keyCode){var o=d("#sg_"+a.id+"_"+a.$idx);if(o&&o.length){var c=o.find("a").attr("href").slice(2);t.Router.to(c),a.hideSearchList(),d("#sipt_"+a.id).blur()}}clearTimeout(a.$sTimer),a.$sTimer=setTimeout(a.wrapAsync(function(){var i=d.trim(e.eventTarget.value);i!=a.$sValue&&(a.$idx=-1,a.$sValue=i,r(i).then(function(e){a.updater.digest({searchKeyRegInfo:b(i),searchList:e})}))}),300)},normal:function(){var e=this;d("#sg_"+e.id+"_"+e.$idx).removeClass("pabcd8e-351")},highlight:function(e){var a=this,i=d("#sg_"+a.id+"_"+a.$idx);if(i.addClass("pabcd8e-351"),!e&&i.length){a.$ignore=1;var t=32.6*(a.$idx+1),s=d("#gsearch_result_"+a.id+" ul"),p=s.height(),b=s.prop("scrollTop"),o=Math.ceil(p/32.6);t<b+32.6?s.prop("scrollTop",t-32.6):t>b+p&&s.prop("scrollTop",32.6*(a.$idx+2-o))}},hideSearchList:function(){var e=this;d("#gsearch_result_"+e.id).addClass("pabcd16-ab9"),e.normal(),e.$idx=-1},"hide<click>":function(){this.hideSearchList()},"out<mouseout>":function(e){if(!t.inside(e.relatedTarget,e.eventTarget)){var a=this;a.normal(),a.$idx=-1}},"move<mousemove>":function(e){var a=this;if(a.$ignore)return void delete a.$ignore;var i=d(e.target);if(i.is("a")&&(i=i.parent()),i.is("li")){var t=i.data("idx");t!=a.$idx&&(a.normal(),a.$idx=t,a.highlight(!0))}},"$doc<click>":function(e){var a=this;t.inside(e.target,"gsearch_"+a.id)||a.hideSearchList()}})}),define("app/views/partials/header",["magix","$","../../menu","../../mixins/dialog"],function(e,a,i){var t=e("magix"),s=e("$"),d=s(document),p=e("../../menu"),b=e("../../mixins/dialog");t.applyStyle("pabcdbb",'.pabcdbb-3be{height:50px;background-color:#6363e6;color:hsla(0,0%,100%,.6);z-index:400;position:relative;width:100%;left:0;top:0;right:0}.pabcdbb-45c{float:left;height:50px;width:160px;transition:width .3s ease-out;background-color:#595cd2;color:#fff;overflow:hidden}.pabcdbb-45c:active,.pabcdbb-45c:focus,.pabcdbb-45c:hover{color:#fff}.pabcdbb-a9d{width:50px;font-size:28px;margin-left:23px;text-align:center;transition:margin-left .3s ease-out}.pabcdbb-a9d,.pabcdbb-7fa{float:left;height:50px;line-height:50px}.pabcdbb-7fa{width:80px;font-size:20px;position:relative;top:1px;left:-5px;transition:width .3s ease-out,font-size .3s ease-out}.pabcdbb-1e0 .pabcdbb-45c{width:50px}.pabcdbb-1e0 .pabcdbb-bb1{margin-left:50px}.pabcdbb-1e0 .pabcdbb-66f{left:38px}.pabcdbb-1e0 .pabcdbb-66f:before{left:-4px;content:"\\e789"}.pabcdbb-1e0 .pabcdbb-a9d{margin-left:0}.pabcdbb-1e0 .pabcdbb-7fa{width:0;font-size:0;overflow:hidden}.pabcdbb-bb1{margin-left:160px;padding:0 15px 0 0;position:relative;z-index:50}.pabcdbb-66f{position:absolute;left:148px;top:100%;width:12px;height:24px;line-height:24px;background-color:#595cd2;font-size:20px;color:#fff;border-radius:0 0 0 4px;cursor:pointer;transition:left .3s ease-out}.pabcdbb-66f:before{content:"\\e787";position:relative;left:-4px}.pabcdbb-380{position:relative;transition:width .3s ease-out}.pabcdbb-5b9{float:right}.pabcdbb-9d4{float:left;position:relative;padding:0 10px}.pabcdbb-530,.pabcdbb-e7e{float:left;height:50px;line-height:50px;color:#fff;padding-right:10px;font-size:12px;cursor:pointer}.pabcdbb-530:focus,.pabcdbb-530:hover,.pabcdbb-e7e:focus,.pabcdbb-e7e:hover{color:#fff}.pabcdbb-530{padding-right:3px;font-size:22px}.pabcdbb-669{position:absolute;top:100%;right:0;width:140px;display:none;z-index:8;padding:8px 0 0}.pabcdbb-a1b{box-shadow:0 3px 3px #eee;list-style:none;margin:0;border:1px solid #e6e6e6;border-radius:4px;position:relative;background-color:#fff}.pabcdbb-a1b:before{top:-7px;border:10px solid transparent;border-top:0;border-bottom:6px solid #e6e6e6}.pabcdbb-a1b:after,.pabcdbb-a1b:before{content:"";position:absolute;right:14px;width:0;height:0}.pabcdbb-a1b:after{top:-6px;border:10px solid transparent;border-top:0;border-bottom:6px solid #fff}.pabcdbb-9d4:hover .pabcdbb-669{display:block}.pabcdbb-b81{border-top:1px dashed #e6e6e6}.pabcdbb-7bd:hover{background-color:#fafafa}.pabcdbb-7bd{color:#666;display:block;padding-left:7px;margin:6px 10px;height:26px;line-height:26px;border-radius:4px;white-space:nowrap}.pabcdbb-7bd:hover{color:#fff;background-color:#8383eb}.pabcdbb-194{float:left;margin-left:17px;width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pabcdbb-3cd{font-size:22px;float:left;margin:0 6px 0 10px;color:#a1a1f0}.pabcdbb-a37,.pabcdbb-3cd{height:50px;line-height:50px}.pabcdbb-a37{display:block;color:#b9b9f9}'),i.exports=t.View.extend({tmpl:{html:'<div mx-guid="g3" class="pabcdbb-3be" id="header_<%=$$.viewId%>"><a href="#!/index" class="pabcdbb-45c"><span class="pabcdbb-a9d pabcdce-334">&#xe67b;</span><span class="pabcdbb-7fa">Magix</span></a><span class="pabcdbb-66f pabcdce-334" mx-click="triggerNav()"></span><div class="pabcdbb-bb1"><div class="pabcdbb-380"><div mx-guid="g1" class="pabcdbb-194">2</div><ul class="pabcdbb-5b9"><li class="pabcdbb-9d4"><span class="pabcdbb-530 pabcdce-334">&#xe621;</span><a mx-guid="g2" href="javascript:;" class="pabcdbb-e7e">3</a><div class="pabcdbb-669"><ul class="pabcdbb-a1b"><li><a href="javascript:;" mx-click="changePassword()" class="pabcdbb-7bd">修改密码</a></li><li><a href="javascript:;" mx-click="logout()" class="pabcdbb-7bd">退出</a></li><li class="pabcdbb-b81"></li><li><a href="javascript:;" mx-click="showAgreement()" class="pabcdbb-7bd">查看使用协议</a></li></ul></div></li></ul><div mx-view="app/views/partials/header-search"></div></div></div></div>',subs:[{s:"2",keys:["bcs"],tmpl:'<%if($$.bcs){%><span class="pabcdce-334 pabcdbb-3cd">&#xe601;</span><span class="pabcdbb-a37"><%=$$.bcs%></span><%}%>',path:'div[mx-guid="g1"]'},{s:"3",keys:["userName"],tmpl:"<%=$$.userName%>",path:'a[mx-guid="g2"]'},{keys:["viewId"],path:'div[mx-guid="g3"]',attr:'id="header_<%=$$.viewId%>"',attrs:[{n:"id",p:1}]}]},mixins:[b],init:function(){this.observe({path:!0})},render:function(){var e=p.route(),a=this,i=t.Router.parse(),s=e.breadcrumbs[i.path];s=s&&s.length?s.join(" > "):"",a.updater.digest({bcs:s,userName:"彳刂",viewId:a.id})},"triggerNav<click>":function(){var e=s("#header_"+this.id);e.toggleClass("pabcdbb-1e0");var a=e.hasClass("pabcdbb-1e0");d.data("navshrink",a).trigger({type:"navslide",shrink:a}),setTimeout(this.wrapAsync(function(){d.trigger("navslidend")}),300)},"logout<click>":function(){this.alert("仅退出示意，请继续浏览^_*")},"showAgreement<click>":function(){this.mxDialog("app/views/partials/agreement")},"changePassword<click>":function(){this.mxDialog("app/views/partials/password")}})}),define("app/views/partials/robot",["magix","$"],function(e,a,i){var t=e("magix"),s=e("$");t.applyStyle("pabcd89",'.pabcd89-f9f{font-size:20px;line-height:32px}.pabcd89-f9f,a.pabcd89-bf7{height:32px;display:block}a.pabcd89-bf7{width:32px;margin-top:4px;border-radius:2px;text-align:center;opacity:.4;color:#fff;background-color:#6363e6;position:relative}.pabcd89-bf7:hover{opacity:.8}.pabcd89-tip{position:absolute;right:46px;bottom:-12px;width:210px;padding:5px;letter-spacing:0;background-color:#6363e6;border-radius:5px;display:none;font-weight:400;text-align:left}.pabcd89-bf7:hover .pabcd89-tip{display:block}.pabcd89-tip:before{content:" ";position:absolute;right:-5px;bottom:24px;border:5px solid transparent;border-left-color:#6363e6;border-right:0}.pabcd89-8b6{position:fixed;right:20px;bottom:20px;z-index:5;transform:translateZ(0)}'),i.exports=t.View.extend({tmpl:{html:'<a href="https://github.com/thx/magix-project/issues/new" target="_blank" class="pabcd89-bf7"><span class="pabcdce-334 pabcd89-f9f">&#xe68a;</span><span class="pabcd89-tip">有任何问题都可以提交issure来咨询或交流。</span></a>',subs:[]},render:function(){var e=this;s("#"+e.id).addClass("pabcd89-8b6"),e.updater.digest()}})}),define("app/views/partials/nav",["magix","$","../../menu"],function(e,a,i){var t=e("magix"),s=e("$");t.applyStyle("pabcd4b",'.pabcd4b-nav{position:relative;z-index:399;background:#000;width:160px;height:100%;font-size:14px;transition:width .3s ease-out;transform:translateZ(0);float:left}.pabcd4b-5ca{background:#3e4048;width:100%;left:0;direction:rtl}.pabcd4b-5ca,.pabcd4b-1b0{height:100%;position:absolute;padding-top:40px;top:0;overflow:auto}.pabcd4b-1b0{background:#31323d;width:200px;padding-bottom:42px;left:160px}.pabcd4b-9d4{background-color:#3e4048;cursor:pointer;border-left:4px solid transparent;overflow:hidden;margin-bottom:14px;height:40px}.pabcd4b-9d4:hover .pabcd4b-5b9{color:hsla(0,0%,100%,.3)}.pabcd4b-02d{opacity:.6}.pabcd4b-1fd,.pabcd4b-986{background:#32323d;border-left-color:#6364e5}.pabcd4b-1fd .pabcd4b-5b9,.pabcd4b-986 .pabcd4b-5b9{color:hsla(0,0%,100%,.3)}.pabcd4b-1fd .pabcd4b-c74:before,.pabcd4b-986 .pabcd4b-c74:before{content:"\\e789"}.pabcd4b-5b9{display:block;float:left}.pabcd4b-2eb{width:66px;font-size:14px;text-align:left;color:hsla(0,0%,100%,.45)}.pabcd4b-530,.pabcd4b-c74,.pabcd4b-2eb{height:40px;line-height:40px;float:left}.pabcd4b-530,.pabcd4b-c74{color:hsla(0,0%,100%,.5)}.pabcd4b-530{width:54px;text-align:left;padding-left:25px}.pabcd4b-c74{width:36px;text-align:right;padding-right:15px}.pabcd4b-c74:before{content:"\\e692"}.pabcd4b-b63{padding:0 10px 0 20px}.pabcd4b-0c3{float:right;width:40px;text-align:center}.pabcd4b-dae,.pabcd4b-0c3{height:40px;line-height:40px}.pabcd4b-dae{color:#7f7f89;margin-bottom:4px}.pabcd4b-d15{padding-left:10px}.pabcd4b-b6e{display:block;padding:10px 0;color:#afafbc}.pabcd4b-040,.pabcd4b-b6e:active,.pabcd4b-b6e:focus,.pabcd4b-b6e:hover{color:#8787ea}.pabcd4b-040 .pabcd4b-485,.pabcd4b-b6e:active .pabcd4b-485,.pabcd4b-b6e:focus .pabcd4b-485,.pabcd4b-b6e:hover .pabcd4b-485{color:#8b8bed}.pabcd4b-485{color:#a1a1b2;float:left;width:20px;margin-top:3px}.pabcd4b-0df{display:block;margin-left:20px}.pabcd4b-508{width:50px}.pabcd4b-508 .pabcd4b-c74,.pabcd4b-508 .pabcd4b-2eb{display:none}.pabcd4b-508 .pabcd4b-530{width:46px;padding-left:0;text-align:center}.pabcd4b-508 .pabcd4b-1b0{left:50px}');var d=e("../../menu"),p=d.menu(),b=p.menus,o=p.urlsToMainMap,r=p.subsMap,c=p.menusMap,n={triangle:{m:{x:-1,y:-1},n:{x:-1,y:0},p:{x:-1,y:-1}},getVirtualCoordinate:function(e){var a=this,i=a.$node.offset();return{x:e.pageX-i.left,y:a.$node.outerHeight()-(e.pageY-i.top)}},update:function(e){var a=this,i=a.triangle;a.$node=e;var t=e.outerWidth();i.m.x=t,i.m.y=e.outerHeight(),i.n.x=t},updatePoint:function(e){var a=this;a.triangle.p=a.getVirtualCoordinate(e)},isInTriangle:function(e){var a=this,i=a.getVirtualCoordinate(e),t=a.triangle;return i.x>t.m.x||i.x>=t.p.x&&(i.y>=t.p.y&&(t.m.y-i.y)/(t.m.x-i.x)>=(t.m.y-t.p.y)/(t.m.x-t.p.x)||i.y<t.p.y&&(t.n.y-i.y)/(t.n.x-i.x)<(t.n.y-t.p.y)/(t.n.x-t.p.x))}};i.exports=t.View.extend({tmpl:{html:'<div mx-guid="g1" class="pabcd4b-5ca pabcd16-3d3" mx-mouseout="hideSubs()" mx-mouseover="stopHide()" id="main_<%=$$.viewId%>" mx-contextmenu="preventHide()"><ul mx-guid="g0">2</ul></div><div mx-guid="g3" class="pabcd16-3d3 pabcd16-d72 pabcd4b-1b0<%if(!$$.showSub){%> pabcd16-ab9<%}%>" id="subs_<%=$$.viewId%>" mx-mouseout="hideSubs()" mx-mouseover="stopHide()" mx-contextmenu="preventHide()">3</div>',subs:[{s:"2",keys:["menus"],tmpl:'<li class="pabcd4b-9d4 pabcd16-c8d" data-key="index" mx-mouseover="startShowSubs()" mx-mousemove="showSubs()"><a class="pabcd4b-5b9 pabcd16-c8d" href="#!/index" hidefocus="true"><span class="pabcd4b-530 pabcdce-334">&#xe69c;</span><span class="pabcd4b-2eb">首页</span></a></li><%for(var i=0,menu;i<$$.menus.length;i++){menu=$$.menus[i]%><li class="pabcd4b-9d4 pabcd16-c8d" data-key="<%=menu.key%>" mx-mouseover="startShowSubs({key:\'<%=menu.key%>\'})" mx-mousemove="showSubs({key:\'<%=menu.key%>\'})"><a class="pabcd4b-5b9" href="#!<%=menu.url%>" hidefocus="true"><span class="pabcd4b-530 pabcdce-334"><%!menu.icon%></span><span class="pabcd4b-2eb"><%=menu.text%></span></a><span class="pabcd4b-c74 pabcdce-334"></span></li><%}%>',path:'ul[mx-guid="g0"]'},{keys:["viewId"],path:'div[mx-guid="g1"]',attr:'id="main_<%=$$.viewId%>"',attrs:[{n:"id",p:1}]},{s:"3",keys:["showSub","viewId","subs"],tmpl:'<%if($$.subs){%><ul><%for(var j=0,subMenu;j<$$.subs.length;j++){subMenu=$$.subs[j];if(subMenu.subs&&subMenu.subs.length){%><li class="pabcd4b-b63"><div class="pabcd4b-dae pabcd16-cp" <%if(subMenu.canFolder){%> mx-click="toggleSubMenus({key:\'<%=subMenu.key%>\'})" <%}%>><%=subMenu.text%> <%if(subMenu.canFolder){%><i class="pabcdce-334 pabcd4b-0c3"><%if(subMenu.folderExpand){%> &#xe786; <%}else{%> &#xe692; <%}%></i><%}%></div><ul class="pabcd4b-d15" <%if(subMenu.canFolder&&!subMenu.folderExpand){%> style="display:none" <%}if(subMenu.canFolder){%> data-toggle-menu="true" <%}%>><%for(var x=0,item;x<subMenu.subs.length;x++){item=subMenu.subs[x]%><li><a <%if(item.url){%>href="#!<%=item.url%>" <%}else{%>href="javascript:;" <%}%> class="pabcd4b-b6e"><i class="pabcdce-334 pabcd4b-485"><%!item.icon%></i><span class="pabcd4b-0df"><%=item.text%></span></a></li><%}%></ul></li><%}else{%><li class="pabcd4b-b63"><a href="#!<%=subMenu.url%>" class="pabcd4b-b6e"><i class="pabcdce-334 pabcd4b-485" style="margin-right: 5px"><%!subMenu.icon%></i><%=subMenu.text%></a></li><%}}%></ul><%}%>',path:'div[mx-guid="g3"]',attr:'class="pabcd16-3d3 pabcd16-d72 pabcd4b-1b0<%if(!$$.showSub){%> pabcd16-ab9<%}%>" id="subs_<%=$$.viewId%>"',attrs:[{n:"class",p:1,f:"className"},{n:"id",p:1}],mask:"221"}]},init:function(){var e=this;t.Router.on("changed",function(){e.highlight(),e.highlightSub()})},render:function(){var e=this,a=s("#"+e.id);a.addClass("pabcd4b-nav"),e.$node=a,e.updater.digest({viewId:e.id,menus:b}),e.$subs=s("#subs_"+e.id),n.update(e.$node),e.highlight()},highlight:function(){var e=t.Router.parse(),a=e.path;o[a]||(a=a.replace(/\-[^-]+$/,""));var i=o[a];"/index"==a&&(i="index");var d=this,p=s("#main_"+d.id);p.find("li").removeClass("pabcd4b-986").removeClass("pabcd4b-02d"),d.$mainMenu=p.find("[data-key="+i+"]").addClass("pabcd4b-986"),d.$mainMenuKey=i},highlightSub:function(){var e=this,a=t.Router.parse(),i=a.path;o[i]||(i=i.replace(/\-[^-]+$/,"")),e.$subs.find("a").removeClass("pabcd4b-040");var s=e.$subs.find('[href="#!'+i+'"]').addClass("pabcd4b-040"),d=s.parents("ul");if("none"==d.css("display")){var p=d.prev("div[mx-click]");p.length&&p.trigger("click")}},toggleSubs:function(e,a,i){var t=this;i=e,e||(i="index"),i!=t.$mainMenuKey?t.$mainMenu.addClass("pabcd4b-02d"):t.$mainMenu.removeClass("pabcd4b-02d");var d=e+"?"+!!e;if(t.$flag!=d){if(t.$flag=d,t.$menu&&t.$menu.removeClass("pabcd4b-1fd"),e&&t.$key!=e){t.$key=e;var p=c[e];t.updater.set({subs:p})}t.$menu=s(a).addClass("pabcd4b-1fd"),t.updater.digest({showSub:!!e}),e&&t.highlightSub()}},hideSubs:function(e){var a=this;delete a.$preventHide;var i=function(){a.$menu&&(a.$menu.removeClass("pabcd4b-1fd"),a.$mainMenu.removeClass("pabcd4b-02d"),delete a.$menu),delete a.$flag,a.updater.digest({showSub:!1})};e?(console.log("immediately hide"),i()):a.$hideTimer=setTimeout(i,100)},"startShowSubs<mouseover>":function(e){if(!t.inside(e.relatedTarget,e.eventTarget)){var a=this;n.updatePoint(e),clearTimeout(a.$showTimer);var i=e.eventTarget,s=e.params.key,d=a.updater.get("showSub");s&&!d?a.toggleSubs(s,i):a.$showTimer=setTimeout(function(){a.toggleSubs(s,i)},200)}},"stopHide<mouseover>":function(e){if(!t.inside(e.relatedTarget,e.eventTarget)){var a=this;clearTimeout(a.$hideTimer)}},"hideSubs<mouseout>":function(e){if(!t.inside(e.relatedTarget,e.eventTarget)){var a=this;if(a.$preventHide)return void delete a.$preventHide;clearTimeout(a.$showTimer),a.hideSubs()}},"toggleSubMenus<click>":function(e){var a=s(e.eventTarget),i=r[e.params.key];a.hasClass("iconfont")&&(a=a.parent());var t=a.next(),d=a.find(".iconfont");"none"==t.css("display")?(i.folderExpand=!0,t.slideDown(),d.html("&#xe786;")):(i.folderExpand=!1,t.slideUp(),d.html("&#xe692;"))},"showSubs<mousemove>":function(e){var a=this;n.isInTriangle(e)||a.toggleSubs(e.params.key,e.eventTarget)},"preventHide<contextmenu>":function(){var e=this;if(e.$preventHide=!0,!e.$listened){e.$listened=!0;var a=s(document),i=function(s){t.inside(s.target,e.id)||(delete e.$listened,a.off("mousemove mouseup",i),e.hideSubs(!0))};a.on("mousemove mouseup",i)}},"$doc<navslide>":function(){this.$node.toggleClass("pabcd4b-508")},"$doc<navslidend>":function(){console.log("update triangle"),n.update(this.$node)},"$win<resize>":function(){console.log("update triangle"),n.update(this.$node)}})}),define("app/views/default",["magix"],function(e,a,i){var t=e("magix"),s=t.Router;i.exports=t.View.extend({tmpl:{html:'<div mx-view="app/views/partials/header" style="height:50px"></div><div class="pabcdc6-671"><div mx-view="app/views/partials/nav"></div><div class="pabcdc6-a7b"><div mx-guid="g0" id="inmain" class="pabcdc6-a9c" mx-view="<%=$$.mainView%>"><div class="pabcd28-f0b"><span></span></div></div></div></div><div mx-view="app/views/partials/robot"></div>',subs:[{keys:["mainView"],path:'div[mx-guid="g0"]',attr:'mx-view="<%=$$.mainView%>"',attrs:[{n:"mx-view",v:1}]}]},init:function(){this.observe({path:!0})},render:function(){var e=this,a=s.parse();e.updater.digest({mainView:"app/views"+a.path})}})});