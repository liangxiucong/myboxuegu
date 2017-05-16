define(['header','aside','util','nprogress'],function(ud,ud,util,nprogress){
    //util返回每一个方法的返回值，想用哪个就用哪个
    var returns=util({
        'checkLoginStatus':[],
        'loading':[]
    });

    //销毁网站加载进度条
    nprogress.done();
});