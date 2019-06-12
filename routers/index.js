const express = require('express');
const router = express.Router();
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM(`<!DOCTYPE html>`);
const $ = require('jquery')(window);
router.get('/test', function (req, res, next) {
    let data = {
        name: '测试'
    }
    res.render('test1', data)
});
router.get('/home', function (req, res, next) {
    let data = {}
    $.ajax({
        type: "get",
        dataType: "json",
        url: "https://www.easy-mock.com/mock/5cb6fceb3ac8ab7a1d3e1926/maoyan/hotShowing",
        success: function (msg) {
            data.list = msg.data.hotPlayList
            res.render('home.html', data)

        }
    });
});
router.get('/bangdan', function (req, res, next) {
    let data = {}
    $.ajax({
        type: "get",
        dataType: "json",
        url: "https://www.easy-mock.com/mock/5cb6fceb3ac8ab7a1d3e1926/maoyan/bannerList",
        success: function (msg) {
            data.dblist = msg.data.bangdanList
            res.render('bangdan.html', data);
        }
    });

});

module.exports = router;

