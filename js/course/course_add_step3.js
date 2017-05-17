/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-17 00:11:42
*/

define(['header','aside','util','nprogress','jquery_form','jquery'],function(ud,ud,util,nprogress,us,$){
    //util返回每一个方法的返回值，想用哪个就用哪个
    var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       'getSearch':['cs_id']
       
    });
    console.log(returns)
    $.ajax({
        url: '/v6/course/cover',
        type: 'get',
        dataType: 'json',
        data: {cs_id: returns.getSearch},
        success:function(res){
            console.log(res)
            if( res.code != 200 ){
            alert('后台数据发生错误');
            return
        }
        var data = res.result;
        },
        error:function(res){
            alert('数据请求失败')
        }
    })

    $('.bu1').on('click',function(){
       loation.href = './course_add_step1.html?cs_id='+returns.getSearch
    })
    $('.bu2').on('click',function(){
       loation.href = './course_add_step2.html?cs_id='+returns.getSearch
    })
    
});