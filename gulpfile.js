var tmplFolder = 'tmpl'; //template folder
var srcFolder = 'src'; //source folder
var buildFolder = 'build'; //build folder


var gulp = require('gulp');
var watch = require('gulp-watch');
var fs = require('fs');
var del = require('del');
var combineTool = require('magix-combine');
var ts = require('typescript');

combineTool.config({
    tmplFolder: tmplFolder,
    srcFolder: srcFolder,
    cssSelectorPrefix: 'pabcd',
    compressCss: false,
    compressCssSelectorNames: true,
    md5CssSelectorLen: 3,
    bindName: 'syncValue',
    scopedCss: [
        './tmpl/app/snippets/cube-neat.css',
        './tmpl/app/snippets/app-normalize.less',
        './tmpl/app/snippets/app-layout.less',
        './tmpl/app/snippets/app-iconfont.less',
        './tmpl/app/snippets/app-util.less',
        './tmpl/app/snippets/app-loading.less',
        './tmpl/app/snippets/app-btn.less',
        './tmpl/app/snippets/app-form.less',
        './tmpl/app/snippets/app-dialog.less',
        './tmpl/app/snippets/app-table.less'
    ],
    compileBeforeProcessor: function(content, from) {
        //console.log('compile ',from);
        var str = ts.transpileModule(content, {
            compilerOptions: {
                module: ts.ModuleKind.None
            }
        });
        str = str.outputText.replace('"use strict";', '');
        str = str.replace('exports.__esModule = true;', ''); //这个的，不要～
        return str;
    }
});

gulp.task('cleanSrc', function() {
    return del(srcFolder);
});
gulp.task('combine', ['cleanSrc'], function() {
    return combineTool.combine().then(function() {
        console.log('complete');
    }).catch(function(ex) {
        console.log('gulpfile:', ex);
        process.exit();
    });
    //combineTool.processFile('tmpl/app/views/partials/password.js').catch(function(ex){
    //   console.log('ex',ex);
    //});
});

gulp.task('watch', ['combine'], function() {
    watch(tmplFolder + '/**/*', function(e) {
        if (fs.existsSync(e.path)) {
            var c = combineTool.processFile(e.path);
            c.catch(function(ex) {
                console.log('ex', ex);
            });
        } else {
            combineTool.removeFile(e.path);
        }
    });
});

var uglify = require('gulp-uglify');
gulp.task('cleanBuild', function() {
    return del(buildFolder);
});
gulp.task('build', ['cleanBuild', 'cleanSrc'], function() {
    combineTool.config({
        compressCss: true
    });
    combineTool.combine().then(() => {
        gulp.src(srcFolder + '/**/*.js')
            .pipe(uglify({
                compress: {
                    //drop_console: true,
                    drop_debugger: true
                }
            }))
            .pipe(gulp.dest(buildFolder));
    });
});

gulp.task('spm', () => {
    combineTool.config({
        tmplTagProcessor(tag) {
            if (tag.indexOf('data-spm') == -1) {
                let now = Date.now();
                return tag.slice(0, -1) + ` data-spm="abc${now}">`;
            }
            return tag;
        }
    });
    combineTool.processTmpl().then(() => {
        console.log('tmpl complete');
    });
});