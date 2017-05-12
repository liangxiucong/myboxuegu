/*
 * boootstrap是普通模块，也没有对外暴露任何全局变量，所以我们这里接收到的值为undefined
 * jquery_form 也是普通模块，也没有对外暴露任何全局变量，手动的值也为undefined
 * jquery是AMD模块，我们这里可以接收到正常jquery对外暴露的方法
 * */

define(['bootstrap', 'jquery', 'jquery_form'],
    /*
     * 这里的形参用来接收模块的输出
     * 但是需要注意他们是按照顺序接收输出值的
     * 同时这些形参的名字可以任意起
     * */
    function (ud, $, ud) { //ud===undefined
        //监听form表单的提交事件，转为ajax请求，请求成功，那么跳转页面
        $('#login-form').ajaxForm({
            success: function () {
                location.href = '/';
            },
            error: function () {
                alert('登录失败了');
            }
        });
    });