/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-17 00:30:15
*/
define(['header','aside','nprogress','jquery'],function(ud,ud,nprogress,$){
  // 'use strict';
  $('.btn').on('click',function(){
    var cs_name_text = $('.input-sm').val();
    if(!cs_name_text){
      return;
    }
    $.get('/v6/course/create',{cs_name:cs_name_text},function(res){
      console.log(res)
      if(res.code!=200){
        return;
      }
      var data = res.result;
      var cs_id = data.cs_id;
      location.href = './course_add_step1.html?cs_id='+cs_id
    })
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
    
  })
  //销毁网站加载进度条
  nprogress.done();
});

