define(['jquery','jquery_cookie'], function($,ud) {
	/*
	* ȡ��cookie�洢���û���Ϣ
	* �洢���û���Ϣ��һ��json�ַ�������Ҫ�ֶ�����Ϊjs����
	* Ȼ���������Ⱦ����������ϲ�
	* */
    var userInfo={};
    try{
        userInfo=JSON.parse($.cookie('userInfo'));
    }catch(e){
        console.log('userInfo��������');
    }

    //�ڱ�֤����ͷ���������������
    userInfo.tc_avatar && $('.aside .avatar img').attr('src',userInfo.tc_avatar);
    $('.aside h4').text(userInfo.tc_name);
console.log(2);
    //��ർ�������б�
    $('.slide-down').on('click',function(){
        console.log(1);
        $(this).next().slideToggle();
    });

    /*
    * ��ർ�����㶨λ
    * 1.�Ȼ�ȡҳ���pathname
    * 2.����һ�������������洢pathname����ർ����Ӧ��href����ֵ
    * 3.Ȼ������ʹ��ҳ���pathnameȥ������ƥ��
    * ƥ�䵽�˾�ʹ�����ƥ�䵽��ֵ��ȡ��Ӧ��a���active_Class���ý���
    * ���û��ƥ�䵽����ֱ��ʹ�ø�pathname��ȡ��Ӧa���active_Class���ý���
    * */
    var pathname=location.pathname;
    //�������ֵƥ����Щ�޹��ɵ�
    var pathToHref={
        '/html/user/profile.html':'/html/user/list.html',
        '/html/teacher/edit.html':'/html/teach/list.html'
    };
    var href=pathToHref[pathname]?pathToHref[pathname]:pathname;
    $('.aside a').removeClass('active').filter('[href="'+href+'"]').addClass('active');
});
