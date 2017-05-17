/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-17 16:44:52
*/


define(['header', 'aside', 'util', 'nprogress', 'jquery_uploadify', 'jquery', 'template'], function(ud, ud, util, nprogress, ud, $, template) {
    //util返回每一个方法的返回值，想用哪个就用哪个
    var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       'getSearch':['cs_id']
    });

    // console.log(returns)
    // $.ajax({
    //     url: '/v6/course/picture',
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

    // $('.bu1').on('click',function(){
    //    loation.href = './course_add_step1.html?cs_id='+returns.getSearch
    // })
    // $('.bu3').on('click',function(){
    //    loation.href = './course_add_step3.html?cs_id='+returns.getSearch
    // })
    
/**
     * 课程图片数据回显
     * */
    var cs_id = returns.getSearch;
    $.get('/v6/course/picture', { cs_id: cs_id }, function(data){
        $('.steps').html(template('steps2-tpl', data.result));
        initUploadify();
    });
    
    /**
     * 初始化图片上传插件
     * */
    function initUploadify() {
        $('#uploadify').uploadify({
            swf: '/lib/uploadify/uploadify.swf',  // flash选取文件的脚本
            uploader: '/v6/uploader/cover', // 接口
            fileObjName: 'cs_cover_original', // 相当于表单的name属性
            formData: {                      // 除了文件额外提交的数据
                cs_id: cs_id
            },
            buttonText: '上传图片',
            buttonClass: 'btn btn-success btn-sm btn-uploadify',
            height: 30,
            width: 80,
            itemTemplate: '<i></i>',  
            onUploadSuccess: function(file, data) {
                try {
                    var data = JSON.parse(data);
                    $('.preview img').attr('src', data.result.path);
                    $('.thumb img').attr('src', data.result.path);
                    location.href = '/html/course/course_add_step3.html?cs_id=' + cs_id;
                }catch(e){}
            }
        });
    }


// 销毁网站加载进度条
    nprogress.done();
});