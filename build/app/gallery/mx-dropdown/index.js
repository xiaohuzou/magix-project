define("app/gallery/mx-dropdown/index",["magix","$","../mx-monitor/index"],function(e,t,d){var a=e("magix"),i=e("$"),s=e("../mx-monitor/index");a.applyStyle("pabcd21",".pabcd21-d9b{position:relative;display:inline-block;min-width:30px;border:1px solid #e6e6e6;border-radius:4px;background-color:#fff}.pabcd21-d3b{color:#999;width:100%;padding:6px 30px 0 12px;text-align:left;cursor:pointer;line-height:1.5;user-select:none}.pabcd21-d86{cursor:not-allowed;background-color:#e6e6e6;color:#ccc}.pabcd21-c47,.pabcd21-up{position:absolute;right:12px;top:8px}.pabcd21-fbd .pabcd21-c47{display:inline}.pabcd21-c47,.pabcd21-fbd .pabcd21-up{display:none}.pabcd21-fbd .pabcd21-d3b{background-color:#e6e6e6;color:#333}.pabcd21-fbd .pabcd21-d3b:hover{background-color:#d4d4d4}.pabcd21-17b{display:inline-block;white-space:nowrap}.pabcd21-ecb{position:absolute;top:100%;left:0;margin-top:5px;border-radius:4px;z-index:300;border:1px solid #e6e6e6;background-color:#fff;overflow:hidden;line-height:1.5;display:none;user-select:none}.pabcd21-fbd .pabcd21-ecb{display:block}.pabcd21-f2a{display:block;max-height:270px;overflow:auto}.pabcd21-c14{display:inline-block;padding:9px 9px 4px}.pabcd21-427{color:#ccc;position:absolute;left:15px;top:26px}.pabcd21-749{padding-left:28px}.pabcd21-f83{padding-left:5px;padding-right:15px;color:#999;display:block;cursor:default}.pabcd21-f0e{color:#666;display:block;padding-left:7px;margin:6px 10px;height:26px;line-height:26px;border-radius:4px}.pabcd21-f0e:active,.pabcd21-f0e:focus,.pabcd21-f0e:hover{color:#333;background-color:#f0f0f0}.pabcd21-dfe,.pabcd21-dfe:active,.pabcd21-dfe:focus,.pabcd21-dfe:hover{color:#fff;background-color:#6363e6}"),d.exports=a.View.extend({tmpl:{html:'<div mx-guid="g2" id="toggle_<%=$$.viewId%>" class="pabcd21-d3b <%=$$.disabled ? \'pabcd21-d86\' : \'\'%>" mx-click="toggle()" title="<%=$$.selectedText%>"><span mx-guid="g1" class="pabcd21-17b pabcd16-9e0" style="width:<%=($$.width-14)%>px">2</span><span class="pabcdce-334 pabcd21-up">&#xe786;</span><span class="pabcdce-334 pabcd21-c47">&#xe692;</span></div><div mx-guid="g7" class="pabcd21-ecb" style="width:<%=($$.width+28)%>px">3</div>',subs:[{s:"2",keys:["width","selectedText"],tmpl:"<%=$$.selectedText%>",path:'span[mx-guid="g1"]',attr:'style="width:<%=($$.width-14)%>px"',attrs:[{n:"style"}],mask:"21"},{keys:["viewId","disabled","selectedText"],path:'div[mx-guid="g2"]',attr:'id="toggle_<%=$$.viewId%>" class="pabcd21-d3b <%=$$.disabled ? \'pabcd21-d86\' : \'\'%>" mx-click="toggle()" title="<%=$$.selectedText%>"',attrs:[{n:"id",p:1},{n:"class",p:1,f:"className"},{n:"mx-click"},{n:"title",p:1}]},{s:"3",keys:["width","searchbox"],tmpl:'<%if($$.searchbox){%><div class="pabcd21-c14"><label><span class="pabcdce-334 pabcd21-427">&#xe608;</span><input mx-guid="g5" mx-keyup="search()" mx-paste="search()" type="text" placeholder="搜索关键词" mx-change="stop()" class="pabcd5c-dc6 pabcd21-749" style="width:<%=($$.width+8)%>px"/></label></div><%}%><ul mx-guid="g6" class="pabcd21-f2a" id="list_<%=$$.viewId%>">4</ul>',path:'div[mx-guid="g7"]',attr:'style="width:<%=($$.width+28)%>px"',attrs:[{n:"style"}],mask:"31"},{s:"4",keys:["viewId","list","textKey","valueKey","selected"],tmpl:'<%for(var i = 0,item,text,value; item = $$.list[i]; i++){if($$.textKey&&$$.valueKey){text=item[$$.textKey];value=item[$$.valueKey];}else{text=item;value=item;}if(item&&item.group){%><li class="pabcd21-f83 pabcd16-9e0" title="<%=item[$$.textKey]%>"><%=item[$$.textKey]%></li><%}else{%><li title="<%=text%>"><%var equal=(value+\'\')===($$.selected+\'\')%><a href="javascript:;" class="pabcd21-f0e pabcd16-9e0 <%=equal ? \'pabcd21-dfe\' : \'\'%>" mx-click="select({path:\'list.<%=i%>\'})"><%=text%></a></li><%}}%>',path:'ul[mx-guid="g6"]',pKeys:["searchbox"],attr:'id="list_<%=$$.viewId%>"',attrs:[{n:"id",p:1}],mask:"21111"},{keys:["width"],path:'input[mx-guid="g5"]',pKeys:["searchbox"],attr:'style="width:<%=($$.width+8)%>px"',attrs:[{n:"style"}]}]},init:function(e){var t=this;s.setup(),t.on("destroy",s.teardown),e.width||(e.width=120),e.width=(0|e.width)-30,e.viewId=t.id,t.updater.set(e)},inside:function(e){var t=this;return a.inside(e,t.id)},render:function(){var e=this,t=i("#"+e.id);e.$oNode=t;var d=e.updater,s=d.get();if(t.addClass("pabcd21-d9b"),!s.list){var c,l=[];t.children().each(function(e,t){t=i(t),c="true"==t.attr("group"),l.push({group:c,text:t.text(),value:c?a.guid():t.attr("value")})}),e.updater.set({textKey:"text",valueKey:"value",list:l})}e.updateList(s.list,s.selected,!0)},hide:function(){var e=this;e.$oNode.hasClass("pabcd21-fbd")&&(e.$oNode.removeClass("pabcd21-fbd").trigger("focusout"),s.remove(e))},show:function(){var e=this;if(!e.$oNode.hasClass("pabcd21-fbd")){e.$oNode.addClass("pabcd21-fbd").trigger("focusin");var t=i("#list_"+e.id),d=t.find(".pabcd21-dfe"),a=d.position(),c=t.height(),l=t.prop("scrollTop");if(a.top<0||a.top>c){var p=a.top-c+l+c/2;t.prop("scrollTop",p)}s.add(e)}},updateList:function(e,t,d){var i=this;t+="";var s=i.updater,c=s.get();e=(e||[]).slice();var l=c.textKey||"",p=c.valueKey||"";if(c.emptyText)if(l&&p){var o={};o[l]=c.emptyText,o[p]="",e.unshift(o)}else e.unshift(c.emptyText);var r=a.toMap(e,p);i.$list=e,i.$map=r,t||!c.emptyText||l||p||(t=c.emptyText),t&&r[t]||(t=r[t]||e[0],l&&p&&(t=t[p])),s.digest({selected:t,selectedText:l&&p?r[t][l]:t,list:e}),i.$oNode.val(t),d||i.fireEvent(t)},search:function(e,t){var d=this;clearTimeout(d.$goTimer);var a=d.$list,i=d.updater.get(),s=[],c=0,l=a.length,p=i.textKey,o=i.valueKey;if(!e)return void t(a);var r=function(){if(c<l){for(var i=Math.min(c+400,l),n=c,u=void 0,b=void 0,x=void 0;n<i;n++)u=a[n],b=u,x=u,p&&o&&(b=u[p],x=u[o]),((b+"").indexOf(e)>=0||(x+"").indexOf(e)>=0)&&s.push(u);c=i,d.$goTimer=setTimeout(d.wrapAsync(r),20)}else t(s)};r()},fireEvent:function(e,t){var d=this,a=d.updater,s=a.get(),c=s.valueKey,l=s.textKey,p=a.gain(e),o=s.selected,r=p,n=p;if(l&&c&&(n=p[l],r=p[c]),!t||o!=r){a.set({selected:r});var u=i.Event("change",{item:p,keys:{text:l,value:c},value:c?p[c]:p,text:l?p[l]:p});d.$oNode.val(c?p[c]:p).trigger(u),u.isDefaultPrevented()?a.set({selected:o}):a.digest({selected:r,selectedText:n})}},getSelected:function(){return this.updater.get("selected")},getList:function(){return this.updater.get("list")},val:function(){return i("#"+this.id).val()},"toggle<click>":function(){var e=this,t=i("#toggle_"+e.id);e.$oNode.hasClass("pabcd21-fbd")?e.hide():t.hasClass("unfound-[disabled]-from-index.css")||e.show()},"search<keyup,paste>":function(e){var t=this;clearTimeout(t.$sTimer),t.$sTimer=setTimeout(t.wrapAsync(function(){var d=i.trim(e.eventTarget.value);d!=t.$lVal&&t.search(t.$lVal=d,function(e){t.updater.digest({list:e})})}),300)},"select<click>":function(e){var t=this;t.fireEvent(e.params.path,!0),t.hide()},"stop<change>":function(e){e.stopPropagation()}})});