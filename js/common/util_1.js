/**
 * Created by cloverliang on 2017/5/15.
 */
define(['jquery_cookie','jquery'],function(ud,$){
    return{
        /*
        * ����¼״̬����¼ҳ���⣩
        * 1.ʹ��cookie����ж��Ƿ����PHPSESSID���cookie
        * ���������֤����û�е�¼������ô��ת����¼ҳ���û���¼
        * */
        checkLoginStatus:function(){
            if(!$.cookie('PHPSESSID')){
                location.href='/html/home/login.html';
            }
            return this;
        },

        fn2:function(){
            console.log('util fn2');
            return this;
        },

        fn3:function(){
            console.log('util fn3');
            return this;
        },

        add:function(a,b){
            return a+b;
        }
    }
});