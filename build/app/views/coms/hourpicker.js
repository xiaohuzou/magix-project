define("app/views/coms/hourpicker",["magix","$","../../mixins/gtip"],function(t,a,d){var e=t("magix"),c=t("$");e.applyStyle("pabcd43",".pabcd43-e75{width:900px}");var h=t("../../mixins/gtip");d.exports=e.View.extend({tmpl:{html:'<h3>小时选择组件</h3><h4>核心组件</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd43-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>range</td><td>string</td><td>24个0或1组成的字符串，1表示选中的小时</td><td></td></tr></tbody></table><h4 class="pabcd16-716">事件</h4><h5>change</h5><table class="pabcd3a-c06 pabcd3a-042 pabcd43-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>range</td><td>string</td><td>24个0或1组成的字符串，1表示选中的小时</td><td></td></tr></tbody></table><h4 class="pabcd16-716">演示</h4><div class="pabcd43-e75" id="core" mx-view="app/gallery/mx-hourpicker/index?range=0011" mx-change="showCore()"></div><button class="pabcdf0-btn pabcdf0-046" mx-click="setCore({range:\'000000110000011111100000\'});">选中6-8点，13-19点</button><h4 class="pabcd16-28f">天小时选择组件</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd43-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>range</td><td>string</td><td>24个0或1组成的字符串，1表示选中的小时</td><td></td></tr></tbody></table><h4 class="pabcd16-716">事件</h4><h5>change</h5><table class="pabcd3a-c06 pabcd3a-042 pabcd43-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>range</td><td>string</td><td>24个0或1组成的字符串，1表示选中的小时</td><td></td></tr></tbody></table><h4 class="pabcd16-716">演示</h4><div id="day" class="pabcd43-e75" mx-view="app/gallery/mx-hourpicker/day?hours=0011" mx-change="showDay()"></div><button class="pabcdf0-btn pabcdf0-046" mx-click="setDay({range:\'000000110000011111100000\'});">选中6-8点，13-19点</button><h4 class="pabcd16-28f">周小时选择组件</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd43-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>days</td><td>array</td><td>7个字符串组成的数组，每个字符串由24个0或1组成</td><td></td></tr></tbody></table><h4 class="pabcd16-716">演示</h4><div id="week" class="pabcd43-e75" mx-view="app/gallery/mx-hourpicker/week?days=<%@[\'\',\'001111\',\'\',\'\',\'00000000111111001\']%>"></div><button class="pabcdf0-btn pabcdf0-046" mx-click="setWeek();">选中周三6-8点，周五13-19点</button><button class="pabcdf0-btn pabcdf0-046 pabcd16-043" mx-click="showWeek();">获取选中的值</button>',subs:[]},mixins:[h],render:function(){this.updater.digest()},"setCore<click>":function(t){c("#core").prop("vframe").invoke("val",[t.params.range])},"showCore<change>":function(t){this.gtipRB("核心小时选中："+t.range)},"setDay<click>":function(t){c("#day").prop("vframe").invoke("val",[t.params.range])},"showDay<change>":function(t){this.gtipRB("天小时选中："+t.range)},"setWeek<click>":function(){c("#week").prop("vframe").invoke("val",[["","","00000011","","0000000000000111111"]])},"showWeek<click>":function(){var t=c("#week").prop("vframe"),a=t.invoke("val");this.gtipRB("周选中："+a)}})});