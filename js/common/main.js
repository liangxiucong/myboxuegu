/**
 * Created by cloverliang on 2017/5/11.
 */
/**
 * ��Ϊ������ҳ�湫�õ����ģ�飬
 * ���������������е�ģ�鶼����paths���á�
 * */
require.config({
    baseUrl:'/',
//����ģ��·���ǳ�
    paths:{
        // ÿ��ҳ���Ӧ��ģ��
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
        tcAdd:'js/teacher/add',

        usProfile: 'js/user/profile',
        usList: 'js/user/list',

        // ������ģ��
        aside:'js/common/aside',
        header:'js/common/header',
        util:'js/common/util',

        // ������ģ��
        jquery: 'lib/jquery/jquery.min',

        //jquery���
        bootstrap: 'lib/bootstrap/js/bootstrap.min',
        jquery_form:'lib/jquery-form/jquery.form',
        jquery_cookie:'lib/jquery-cookie/jquery.cookie',

        //������jquery��
        nprogress:'lib/nprogress/nprogress',
        template:'lib/artTemplate/template'
    },

    //������ͨģ��������������
    shim:{
        //bootstrap����ͨģ�飬����������jquery,��������������
        bootstrap:{
            deps:['jquery']
        }
    }
});

//���ؽ������⣬Ȼ��start
require(['nprogress'],function(nprogress){
    nprogress.start();
});

/*
* ����û��򿪵�����ҳ����ôӦ�ü���indexģ��
* ����򿪵��ǵ�¼ҳ����ôӦ�ü���loginģ��
* �ȵȣ���ô���Ǿ���Ҫ����һ������Ѽ���ģ��д��
* */
//require(['index]) //��������д��


var obj = {
    '/': 'index',
    '/index.html':'index',

    '/html/course/add.html': 'csAdd',
    '/html/course/list.html': 'usList',
    '/html/course/category_add.html': 'cgAdd',
    '/html/course/list.html': 'cgList',
    '/html/course/course_add_step1.html': 'csAdd1',
    '/html/course/course_add_step2.html': 'csAdd2',
    '/html/course/course_add_step3.html': 'csAdd3',

    '/html/home/login.html': 'login',
    '/html/home/repass.html': 'repass',
    '/html/home/settings.html': 'settings',

    '/html/teacher/edit.html': 'tcEdit',
    '/html/teacher/list.html': 'tcList',
    '/html/teacher/add.html':'tcAdd',

    '/html/user/profile.html': 'usProfile',
    '/html/user/list.html': 'usList',
};

//����ҳ���pathname��ȡҪ���ص�ģ����
var moduleName=obj[location.pathname];
//�������ģ��,���ģ���Ϊҳ�����ģ��
require([moduleName]);



