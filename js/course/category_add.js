/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-18 00:10:54
*/
define(['header','aside','util','nprogress','jquery_form','jquery','template'],function(ud,ud,util,nprogress,ud,$,template){
    //util返回每一个方法的返回值，想用哪个就用哪个
    'use strict';
    var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       'getSearch':['cg_id']
    });
    var cg_id = returns.cg_id;
    if(!cg_id){
        //直接添加
        var name = $('.name').val();
        var pid = $('.pid option:selected').val(); //排列
        var order = $('.order').val()||'';
        var hide = $('.hhide input:checked').val()||'';
        if(!name || !pid) return;
        $.get('/v6/category/add',{
            cg_name:name,
            cg_pid:pad,
            cg_order:order,
            cg_is_hide:hide
        },function(res){
            if( res.code == 200 ){
                location.href = '/html/course/category_list.html'
            }
        })
        return;
    } 
    $.get('/v6/category/edit',{cg_id:cg_id},function(res){
        if( res.code != 200 ) return;
        $('form.form-horizontal').html(template('category_add',res.result))
    })
    // 销毁网站加载进度条
    nprogress.done();
});
