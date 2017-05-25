/*
* @Author: cloverliang
* @Date:   2017-05-12 00:23:28
* @Last Modified by:   cloverliang
* @Last Modified time: 2017-05-18 16:28:28
*/
/**
 * Created by cloverliang on 2017/5/15.
 */
define(['header','aside','util','nprogress','jquery_form','jquery','template'],function(ud,ud,util,nprogress,ud,$,template){
    //util返回每一个方法的返回值，想用哪个就用哪个
    var returns=util({
       'checkLoginStatus':[],
       'loading':[],
       'getSearch':['cs_id']
    });


    // var cs_id = returns.getSearch;
    // $.get('/v6/course/basic',{cs_id:cs_id},function(res){
    //     console.log(res)
    //     var data  = res.result;
    //     $('.content').html(template('content-tpl',data))
    // })
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


    // $('.bu2').on('click',function(){
    //    loation.href = './course_add_step2.html?cs_id='+cs_id
    // })
    // $('.bu3').on('click',function(){
    //    loation.href = './course_add_step3.html?cs_id='+cs_id
    // })
    

     //课程基本信息数据回显
     var cs_id=returns.getSearch;
     $.get('/v6/course/basic',{cs_id:cs_id},function(data){
        $('.steps').html(template('steps1-tpl',data.result));
        steps1Submit();
     });

/*
课程基本信息数据提交
 */
function steps1Submit(){
    $('form.basic').ajaxForm(function(e){
        location.href='/html/course/course_add_step2.html?cs_id=' + cs_id;
    });
}

/**
     * 课程分类二级联动：
     * 通过委托的方式监听顶级分类值的变化，
     * 当发生变化时获取被选中的顶级分类ID，
     * 然后利用这个ID发送请求获取该顶级分类下的子级分类，
     * 然后动态生成一堆options标签进行子级分类列表的替换。
     * */
$(document).on('change','#top-cg-select',function(){
    $.get('/v6/category/child',{cg_id:$(this).val()},function(data){
        var options='';
        for(var i=0,len=data.result.length;i<len;i++){
            options+='<option value="' + data.result[i].cg_id + '">' + data.result[i].cg_name + '</option>';
        }
        $('#child-cg-select').html(options);
    });
});

    // 销毁网站加载进度条
    nprogress.done();
});