/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-18 16:24:45
*/
define(['header','aside','util','nprogress','jquery_form','jquery'],function(ud,ud,util,nprogress,ud,$){

  //util返回每一个方法的返回值，想用哪个就用哪个
  var returns=util({
    'checkLoginStatus':[],
    'loading':[],
  }); 

  // 'use strict';
  // $('.btn').on('click',function(){
  //   var cs_name_text = $('.input-sm').val();
  //   if(!cs_name_text){
  //     return;
  //   }

//创建课程
$('form').ajaxForm(function(data){
  console.log(data)
        // e.preventDefault()
  location.href='/html/course/course_add_step1.html?cs_id='+data.result.cs_id;
});

    // $.get('/v6/category/add',{cs_name:cs_name_text},function(res){
    //   console.log(res)
    //   if(res.code!=200){
    //     return;
    //   }
    //   var data = res.result;
    //   var cs_id = data.cs_id;
    //   location.href = './course_add_step1.html?cs_id='+cs_id
    // })
    // $.ajax({
    //   url: '/v6/course/create',
    //   type: 'get',
    //   dataType: 'json',
    //   data: {cs_name:cs_name_text},
    //   success:function(res){
    //     console.log(res);
    //     if( res.code == 200 ){
    //       location.href = './course_add_step1.html?cs_id='+res.result.cs_id
    //     }else{
    //       alert('后台数据发生错误')
    //     }
        
    //   },
    //   error:function(res){
    //     alert('数据请求失败')
    //   }
    // })
    // })

  //销毁网站加载进度条
    nprogress.done();
});

