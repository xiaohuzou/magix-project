define("app/views/sundries/leavedlg",["magix","../../mixins/dialog"],function(i,n,e){var t=i("magix"),s=i("../../mixins/dialog");e.exports=t.View.extend({tmpl:{html:'<h3>关闭弹框提醒</h3><p>magix除了可以监听页面切换提醒外，还可以做到弹框关闭提醒。你可以尝试点击下面按钮，弹出一个对话框进行体验</p><button class="pabcdf0-btn pabcdf0-046 pabcd16-28f" type="button" mx-click="openDlg()">点击打开弹框</button>',subs:[]},mixins:[s],render:function(){this.updater.digest()},"openDlg<click>":function(){this.mxDialog("app/views/sundries/dlg")}})});