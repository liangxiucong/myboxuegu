/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-17 01:14:29
*/
/**
 * Created by cloverliang on 2017/5/15.
 */
define(['header','aside','util','nprogress','jquery_form','jquery','template'],function(ud,ud,util,nprogress,us,$,template){
    //util返回每一个方法的返回值，想用哪个就用哪个
    var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       'getSearch':['cs_id']
       
    });
    var cs_id = returns.getSearch;
    $.get('/v6/course/basic',{cs_id:cs_id},function(res){
        console.log(res)
        var data  = res.result;
        $('.content').html(template('content-tpl',data))
    })
    // $.ajax({
    //     url: '/v6/course/basic',
    //     type: 'get',
    //     dataType: 'json',
    //     data: {cs_id: returns.getSearch},
    //     success:function(res){
    //         console.log(res)
    //         if( res.code != 200 ){
    //         alert('后台数据发生错误');
    //         return
    //     }
    //     var data = res.result;
    //     },
    //     error:function(res){
    //         alert('数据请求失败')
    //     }
    // })

    $('.bu2').on('click',function(){
       loation.href = './course_add_step2.html?cs_id='+cs_id
    })
    $('.bu3').on('click',function(){
       loation.href = './course_add_step3.html?cs_id='+cs_id
    })
    
});