define(['header', 'aside', 'util', 'nprogress', 'jquery_form', 'jquery', 'template'],function(ud, ud, util, nprogress, ud, $, template){
    //util����ÿһ�������ķ���ֵ����Ҫ�ĸ������ĸ�
   var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       'getSearch':['tc_id']
   });

    //������վ���ؽ�����
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
    //          $('.btn').text('�޸�')
    //     }
    //   })
    // }

/**
   * ������ʦ��ǰ��Ϣ�������ݻ��ԣ�
   * Ȼ��ʹ�ñ��ύ����ѱ�תajax�����޸Ľ�ʦ��Ϣ��
   * */

    var tcId = returns.getSearch;
    console.log(tcId);
  $.get('/v6/teacher/edit', { tc_id: tcId }, function(data) {
    $('.teacher-add').append(template('tc-edit-tpl', data.result));
    

    // �޸Ľ�ʦ��Ϣ���޸ĳɹ�����ת���б�ҳ
    $('#xiugai').ajaxForm({
      // �����data���Ḵд�������ݣ����ڱ����ݻ����Ͻ�������
      data: { tc_id: tcId },  
      // �ɹ��ص�
      success: function() {
        location.href = '/html/teacher/list.html';
      }
    });
  });


});