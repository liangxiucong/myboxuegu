/**
 * Created by cloverliang on 2017/5/15.
 */
define(['header','aside','util','nprogress','jquery_form','jquery'],function(ud,ud,util,nprogress,us,$){
    //util返回每一个方法的返回值，想用哪个就用哪个
    var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       // 'getSearch':['tc_id']
       
   });


    //表单转ajax提交，成功后跳转到讲师列表页
    $('.teacher-add form').ajaxForm(function() {
        location.href = '/html/teacher/list.html';
        // alert(1);
    } );

    //销毁网站加载进度条
    nprogress.done();

    var tc_id = returns['getSearch'];
    if(tc_id){
      $.get('/v6/teacher/add.html?tc_id='+tc_id,function(res){
          console.log(res);
          if( res.code == 200 ){
            var data = res.result;
             $('#id_name').val(data.tc_name);
             $('#id_pwd').val(data.tc_pass);
             $('#id_join').val(data.tc_join_date);
             $('#id_type').select();
             if( data.tc_type == 0 ){
               $('#id_type option:nth-child(1)').attr({'selected':'selected'})
             }else{
               $('#id_type option:nth-child(2)').attr({'selected':'selected'})
             }
             $('#id_join').select();
             if( data.tc_gender == 0 ){
                $('#id_gender label:nth-child(1) input').attr({'checked':'checked'})
             }else{
                $('#id_gender label:nth-child(2) input').attr({'checked':'checked'})
             }
             $('.btn').text('修改')
        }
      })
    }
});