//引入插件
var gulp = require('gulp');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var streamify = require('gulp-streamify');
var buffer = require('vinyl-buffer');
var glob = require('glob');

//使用connect启动一个Web服务器
gulp.task('connect', function () {
  connect.server({
    root: 'app',
    livereload: true
  });
});

/*gulp.task('browserify', function() {
  return browserify('./app/js/app.js')
    .bundle()
    .pipe(source('bundle.js')) // gives streaming vinyl file object
    .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
    .pipe(uglify()) // now gulp-uglify works
    .pipe(gulp.dest('./app/dist/js'));
});

gulp.task('watch', function() {
  gulp.watch(['./app/js/app.js'], ['browserify']);
});*/

gulp.task('glob_test', function() {
  var pattern = './app/**/*';
/*
  glob(pattern, {nodir: true}, function (err, files) {
  //首先node-glob会默认返回文件和文件夹，所以需要在选项中设置nodir参数为true，即只返回文件的路径。
    if(err)
      console.log(err);
    else
      console.log(files);
  });


  glob('./app/!**!/a*', {nodir: true}, function (err, files) {
    //首先node-glob会默认返回文件和文件夹，所以需要在选项中设置nodir参数为true，即只返回文件的路径。
    if(err)
      console.log(err);
    else
      console.log(files);
  });
*/

/*  //!*:匹配路径中某部分:0个或多个字符
  glob("./app/!**!/js/!*.js",function (er, files) {
    console.log(files)
  });


  //?:匹配路径中某部分:1个字符
  glob("./app/!**!/js/?.js",function (er, files) {
    console.log(files)
  });*/

/*  //[]:匹配路径中某部分:指定的范围
  glob("./app/!**!/js/[a-z].js",function (er, files) {
    console.log(files);
  });*/

/*  //!*(pattern|pattern|pattern): 匹配路径中的某部分: 多个模型中的0个或多个.
//除了三个模型本身,如果是组合也可以,比如ab.js,但是仅仅包含某个模型是不行的,比如a4.js.
  glob("./app/!**!/js/!*(a|a1|b).js",function (er, files) {
    console.log(files)
  });*/

/*  //!(pattern|pattern|pattern): 匹配路径中的某部分: 不包含任何模型.
//带有a或者b的,都排除.需要注意的是,它并非是*(a|b)的取反
  glob("./app/!**!/!(a|c)*",function (er, files) {
    console.log(files);
  });*/

/*  //?(pattern|pattern|pattern): 匹配路径中的某部分: 多个模型中的0个或1个.
//精确匹配模型,不可以组合.
  glob("./app/!**!/?(a|a2|b).js",function (er, files) {
    console.log(files)
  });*/

/*  //+(pattern|pattern|pattern): 匹配路径中的某部分: 多个模型中的1个或多个.
//可以是任意一个模型,也可以是他们的组合,比如ab.js
  glob("./app/!**!/+(a|a1|b).js",function (er, files) {
    console.log(files)
  });*/

/*  //@(pattern|pattern|pattern): 匹配路径中的某部分: 多个模型中的1个.
//精确匹配模型,不可以组合.和?的区别就是不可以为空.必须要是其中的一个.
  glob("./app/!**!/@(a|a1|b).js",function (er, files) {
    console.log(files)
  });*/

/*  //!**: 不是一个单独的路径中的某部分,而是可以带有'/',所以所有当前文件夹和子文件夹下都进行匹配
  glob("**!/@(a|a1|b).js",function (er, files) {
    console.log(files)
  });

  //matchBase: 设置为true以后,在当前目录下所有的文件夹和子文件夹里寻找匹配的文件
  glob("@(a|a1|b).js",{matchBase:true},function (er, files) {
    console.log(files)
  })*/

/*  //nonull: 设置为true以后,如果没有找到匹配的文件,不返回空字符串,而是返回原始glob语句
  glob("@(c|d|e).js",{nonull:true},function (er, files) {
    console.log(files)
  })*/

/*  //同步获取匹配文件列表
  var files = glob.sync(pattern, {nodir: true});
  console.log(files);*/

/*  //通过实例化一个glob.Glob类,可以获得一个glob对象
/!*  实例化的时候传入的参数和glob(pattern,options,cb)是一样的.

    它能够得到一个返回值,这个返回值是一个EventEmitter.

    如果在选项中设置 sync 属性为 true, 表示同步获取.不可以传入cb回调. 要获取匹配结果,可以通过 g.found 来获取:*!/
  var Glob = require("glob").Glob;
  var mg = new Glob(pattern,{nonull:true,matchBase:true,sync:true});
  console.log(mg.found);*/

  //事件
/*  事件:

    end :  end事件会在文件匹配结束,找出所有匹配结果的时候触发,它接受的参数就是找到的文件的数组
  match :  match事件会在每次匹配到一个文件的时候触发,它接受的参数就是匹配到的文件
  error :  error事件会在匹配遇到错误的时候触发.接受的参数就是错误信息
  abort :  当实例调用了.abort()方法时,abort事件被触发


  方法:

    pause 暂停匹配搜索
  resume 继续匹配搜索
  abort 永远停止匹配搜索,不能继续*/
/*  var Glob = require("glob").Glob;
  var mg = new Glob(pattern,{nonull:true});
  mg.on("match", function(file){
    console.log(file);
  })
  mg.on('end',function(files){
    console.log(files)
  });
  mg.on('abort',function(){
    console.log('abort')
  });*/
/*  mg.pause();
  mg.resume();
  mg.abort();*/
});


//运行Gulp时，默认的Task
gulp.task('default', ['connect', 'glob_test']);