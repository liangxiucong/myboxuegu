define(['jquery','jquery_cookie'], function($,ud) {

    /*
    * 导航上部用户信息展示：
    * 1.使用插件获取本地cookie存储的用户信息
    * 2.但是这个用户信息数据是json字符串，所以需要先使用JSON.parse解析成对象再使用
    * 3.如果用户信息中存在头像，那么进行img的src替换，否则不用管，因为在布局时就有默认头像
    * 4.当用户信息中存在用户名，则替换，否则使用布局时的默认值
    * */

    var userInfo=JSON.parse($.cookie('userInfo')||'{}');

    userInfo.tc_avatar&& $('.aside .avatar img').attr('src',userInfo.tc_avatar);
    userInfo.tc_name && $('.aside h4').text(userInfo.tc_name);


   /*
   *  //左侧导航下拉列表
   *  1.获取拥有下拉列表的a标签绑定点击事件
   *  2.事件触发时获取对应的ul标签，让它显示变隐藏，隐藏变显示
   * */

    $('.slide-down').on('click',function(){
        //console.log(1);
        $(this).next().slideToggle();
    });

    /*
    * 左侧导航焦点定位
    * 1.先获取页面的pathname
    * 2.定义一个对象，这个对象存储pathname与左侧导航对应的href属性值
    * 3.然后外面使用页面的pathname去对象中匹配
    * 匹配到了就使用这个匹配到的值获取对应的a添加active_Class设置焦点
    * 如果没有匹配到，就直接使用该pathname获取对应a添加active_Class设置焦点
    * */



    // 对象左边的key对应网站的pathname，右边的值对应导航中a标签的href属性值
    //这个配置值匹配那些无规律的
    var pathToHref={
        '/':'/index.html',
        //'/html/user/profile.html':'/html/user/list.html',
        //'/html/teacher/edit.html':'/html/teach/list.html'
        '/html/home/settings.html': '/index.html',
        '/html/home/repass.html': '/index.html',
        '/html/user/profile.html': '/html/user/list.html',
        '/html/teacher/add.html': '/html/teacher/list.html',
        '/html/teacher/edit.html': '/html/teacher/list.html'
    };

    var pathname=location.pathname;
    var href=pathToHref[pathname]?pathToHref[pathname]:pathname;
    $('.aside a').removeClass('active').filter('[href="'+href+'"]').addClass('active');
});
