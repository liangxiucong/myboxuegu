/**
 * Created by cloverliang on 2017/5/11.
 */
/**
 * 因为是所有页面公用的入口模块，
 * 所以这里面会对所有的模块都进行paths配置。
 * */
require.congig({
    baseUrl:'/',

    paths:{
        // 每个页面对应的模块
        csAdd: 'js/course/add',
        cgAdd: 'js/course/category_add',
        cgList: 'js/course/category_list',
        csAdd1: 'js/course/course_add_step1',
        csAdd2: 'js/course/course_add_step2',
        csAdd3: 'js/course/course_add_step3',
        csList: 'js/course/list',

        index: 'js/home/index',
        login: 'js/home/login',
        repass: 'js/home/repass',
        settings: 'js/home/settings',

        tcEdit: 'js/teacher/edit',
        tcList: 'js/teacher/list',

        usProfile: 'js/user/profile',
        usList: 'js/user/list',

        // 公共的模块
        aside:'js/common/aside',
        header:'js/common/header',
        util:'js/common/util',

        // 第三方模块
        jquery: 'lib/jquery/jquery.min',
        bootstrap: 'lib/bootstrap/js/bootstrap.min'
    },
    //配置普通模块的依赖或者输出
    shim:{
        //bootstrap是普通模块，但是依赖与jquery,所以以这里配置
        bootstrap:{
            deps:['jquery']
        }
    }
});

/*
* 如果用户打开的是首页，那么应该加载index模块
* 如果打开的是登录页，那么应该加载login模块
* 等等，那么我们就需要根据一定规则把加载模块写活
* */
//require(['index]) //不能这样写死


var obj = {
    '/': 'index',

    '/html/course/add.html': 'csAdd',
    '/html/course/list.html': 'usList',
    '/html/course/category_add.html': 'cgAdd',
    '/html/course/list.html': 'cgList',
    '/html/course/course_add_step1.html': 'csAdd1',
    '/html/course//course_add_step2.html': 'csAdd2',
    '/html/course//course_add_step3.html': 'csAdd3',

    '/html/home/login.html': 'login',
    '/html/home/repass.html': 'repass',
    '/html/home/settings.html': 'settings',

    '/html/teacher/edit.html': 'tcEdit',
    '/html/teacher/list.html': 'tcList',

    '/html/user/profile.html': 'usProfile',
    '/html/user/list.html': 'usList',
};

//根据页面的pathname获取要加载的模块名
var moduleName=obj[location.pathname];
//加载这个模块
require([moduleName]);