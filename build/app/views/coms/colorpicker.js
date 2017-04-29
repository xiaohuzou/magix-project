define("app/views/coms/colorpicker",["magix","../../mixins/gtip"],function(t,d,a){var c=t("magix");c.applyStyle("pabcd51",".pabcd51-e75{width:900px}");var h=t("../../mixins/gtip");a.exports=c.View.extend({tmpl:{html:'<h3>颜色选择组件</h3><h4>颜色组件</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd51-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>16进制的字符6位字符串，包含#符号</td><td>#ffffff</td></tr></tbody></table><h4 class="pabcd16-716">事件</h4><h5>pick</h5><table class="pabcd3a-c06 pabcd3a-042 pabcd51-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>选中的颜色</td><td></td></tr></tbody></table><h4 class="pabcd16-716">演示</h4><div mx-view="app/gallery/mx-colorpicker/index?color=%23594d9c" mx-pick="show()"></div><h4 class="pabcd16-28f">颜色选择组件</h4><table class="pabcd3a-c06 pabcd3a-042 pabcd51-e75"><thead><tr><th>参数名称</th><th>参数类型</th><th>参数说明</th><th>默认值</th></tr></thead><tbody><tr><td>color</td><td>string</td><td>16进制的字符6位字符串，包含#符号</td><td>#ffffff</td></tr><tr><td>placement</td><td>string</td><td>选择器在目标的方位，仅top与bottom</td><td>bottom</td></tr><tr><td>align</td><td>string</td><td>选择器与目标的对齐方式，仅left与right</td><td>left</td></tr></tbody></table><h4 class="pabcd16-716">演示</h4><div class="pabcd16-c8d"><input mx-change="showIptDate()" class="pabcd5c-dc6" mx-view="app/gallery/mx-colorpicker/picker?placement=top"/> <input mx-change="showIptDate()" class="pabcd5c-dc6 pabcd16-043" mx-view="app/gallery/mx-colorpicker/picker?align=right"/></div>',subs:[]},mixins:[h],render:function(){this.updater.digest()},"show<pick>":function(t){this.gtipRT("选择的颜色："+t.color)}})});