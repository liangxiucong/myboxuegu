define(['jquery_cookie', 'jquery'], function(ud, $) {

    var util = {

        /**
         * ����½״̬(��½ҳ����)��
         * 1��ʹ��cookie����ж��Ƿ����PHPSESSID���cookie
         * 2�����������֤����û�е�½������ô��ת����½ҳ���û���½
         * */
        checkLoginStatus: function() {
            if(!$.cookie('PHPSESSID')) {
                location.href = '/html/home/login.html';
            }
        },

        // ����loading
        loading: function() {
            $(document)
            .on('ajaxStart', function() {
                $('.overlay').show();
            })
            .on('ajaxStop', function() {
                $('.overlay').hide();
            });
        },

        /**
         * ��ȡҳ��searchֵ��
         * ���û�д��Σ�������searchתΪ���󷵻أ�
         * ��������򷵻�ָ��key��searchֵ��
         * */
        getSearch: function(searchKey) {
            /**
             * 1��Ԥ����һ�����������洢���е�search
             * 2��ʹ��location.search��ȡ��ѯ�ַ�����ȥ����ͷ��?��
             * 3��Ȼ���һ��ʹ��&�ָ���ѯ�ַ������õ�һ�����飬������ÿһ��search
             * 4���������飬��ʹ��=�ŷָ��ַ������Ե�һ��ֵΪkey���ڶ���ֵΪval�洢��������
             * 5����������ˣ����ض�����ָ��key��searchֵ�����򷵻���������
             * */
            var searchObj = {}, temp;
            var searchArr = location.search.slice(1).split('&');
            for(var i = 0, len = searchArr.length; i < len; i++) {
                temp = searchArr[i].split('=');
                searchObj[temp[0]] = temp[1];
            }
            // ���û�д��Σ������������󣻴��η��ض����е�ָ��ֵ
            return searchKey == null? searchObj: searchObj[searchKey];
        }
    }
    // ��������Ҫִ�еķ���������ʽ������{'checkLoginStatus': [], 'fn2': [], ...}
    return function(methods) {

        // �ö������ÿ�������ķ���ֵ
        var returns = {};

        // ��������Ҫִ�еķ�������ִ�У�Ȼ�����ÿ�������ķ���ֵ���һ�𷵻�
        for(var key in methods) {
            // ʹ��ͬ����������ÿ��������ִ�н���洢���������ͳһ����
            // ���滹ʹ����apply����ÿ��������������������δ��ݡ�

            returns[key] = util[key].apply(util, methods[key]);
        }
        // ���з����ķ���ֵһ�𷵻�
        return returns;
    }
});
