/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-18 19:28:54
*/


define(['header', 'aside', 'util', 'nprogress', 'jquery_uploadify','jquery_Jcrop', 'jquery', 'template'], function(ud, ud, util, nprogress, ud, ud, $, template) {
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
        // console.log(data.result)
        $('.steps').html(template('steps2-tpl', data.result));
        initUploadify();
    });
    
    /**
     * 初始化图片上传插件
     * */
    function initUploadify() {
        $('#uploadify').uploadify({
            // flash选取文件的脚本
            swf: '/lib/uploadify/uploadify.swf',  
            // 接口
            uploader: '/v6/uploader/cover', 
            // 相当于表单的name属性
            fileObjName: 'cs_cover_original', 
            formData: {                      // 除了文件额外提交的数据
                cs_id:cs_id
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

    //该变量用来存储图片裁剪插件实例，供全局使用
var J=null;

//初始化图片裁剪插件
$(document).on('click','#Jcrop',function(){
    $('.preview img').Jcrop({
        //设置宽高的比例
        aspectRatio: 2,
        //设置默认的选取[x,y,w,h]
        setSelect: [ 0, 0, 300, 150 ],
        bgColor:'yellowgreen',
        //限制选取图片的最小宽高
        minSize:[300,150],
    },function(){
        //插件初始化完毕后，会执行这个回调，这个回调中的this为插件实例
        //该插件还提供了一个方法用来获取实例$('.preview img').Jcrop('api')
        // 不过这个方法步一定能够得到实例(因为你调用的时候插件可能还没初始化好)
        J=this;

    });
});

//保存按钮
$(document).on('click','#save',function(){
    var result=J.getSelection();
    $.post('/v6/course/update/picture',{
        cs_id:cs_id,
        x:result.x,
        y:result.y,
        w:result.w,
        h:result.h
    },function(){
        location.href='/html/course/course_add_step3.html?cs_id'+cs_id;
    });
});





// 销毁网站加载进度条
    nprogress.done();
});