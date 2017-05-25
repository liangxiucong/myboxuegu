define(['header', 'aside', 'util', 'nprogress', 'jquery_form', 'jquery', 'template'],function(ud, ud, util, nprogress, ud, $, template){
    //util返回每一个方法的返回值，想要哪个就用哪个
   var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       'getSearch':['tc_id']
   });

    //销毁网站加载进度条
    nprogress.done();
    
    // var tc_id = returns['getSearch'];
    // if(tc_id){
    //   $.get('/v6/teacher/edit.html?tc_id='+tc_id,function(res){
    //       console.log(res);
    //       if( res.code == 200 ){
    //         var data = res.result;
    //          $('#id_name').val(data.tc_name);
    //          $('#id_pwd').val(data.tc_pass);
    //          $('#id_join').val(data.tc_join_date);
    //          $('#id_type').select();
    //          if( data.tc_type == 0 ){
    //            $('#id_type option:nth-child(1)').attr({'selected':'selected'})
    //          }else{
    //            $('#id_type option:nth-child(2)').attr({'selected':'selected'})
    //          }
    //          $('#id_join').select();
    //          if( data.tc_gender == 0 ){
    //             $('#id_gender label:nth-child(1) input').attr({'checked':'checked'})
    //          }else{
    //             $('#id_gender label:nth-child(2) input').attr({'checked':'checked'})
    //          }
    //          $('.btn').text('修改')
    //     }
    //   })
    // }

/**
   * 先请求讲师当前信息进行数据回显，
   * 然后使用表单提交插件把表单转ajax方法修改讲师信息。
   * */

    var tcId = returns.getSearch;
    console.log(tcId);
  $.get('/v6/teacher/edit', { tc_id: tcId }, function(data) {
    $('.teacher-add').append(template('tc-edit-tpl', data.result));
    

    // 修改讲师信息，修改成功后跳转到列表页
    $('#xiugai').ajaxForm({
      // 这里的data不会复写表单的数据，是在表单数据基础上进行新增
      data: { tc_id: tcId },  
      // 成功回调
      success: function() {
        location.href = '/html/teacher/list.html';
      }
    });
  });


});