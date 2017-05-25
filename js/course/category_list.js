/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-17 23:46:58
*/
define(['header','aside','util','nprogress','jquery_form','jquery','template'],function(ud,ud,util,nprogress,ud,$,template){
    //util返回每一个方法的返回值，想用哪个就用哪个
    $.get('/v6/category',{},function(res){
       if( res.code != 200 || res.result.length == 0 ) return;
       var data = res.result;
       console.log(data)
       $('.panel-default').html(template('category_list_tpl',res))

    })

    // 销毁网站加载进度条
    nprogress.done();
});