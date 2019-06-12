var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {

    //数据
    var data = {
        // 对应{{ name }}
        name: 'Node',

        //对应{{ age }}
        age: 18,

        //对应{{ province }}
        province: '上海市',

        //对应{{each hobbies}} {{ $value }} {{/each}}
        //此为数组 each开始循环  /each结束循环
        hobbies: [
            '写代码',
            '打游戏',
            '听音乐'
        ],

        //对应{{ title }}
        title: '个人信息'

    };

    //渲染模板
    res.render('tpl', data);

});
router.get('/test', function (req, res, next) {

    //数据
    var data = {
        title: '列表信息',
        list: [
            {name:'电影名1', id: '1'},
            {name:'电影名2', id: '2'},
            {name:'电影名3', id: '3'},
            {name:'电影名4', id: '4'},
        ]
    };

    //渲染模板
    res.render('index', data);

});


module.exports = router;