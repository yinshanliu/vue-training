Vue.component('deposit',{
    template:'<div>\n' +
    '\t\t\t<div class="print1">\n' +
    '\t\t\t\t<div>\n' +
    '\t\t\t\t\t<img src="../img/printIcon_big.png" class="printIcon_small"/>\n' +
    '\t\t\t\t\t<p class="p_1">打印交存证明</p>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="print2"></div>\n' +
    '\t\t\t<div class="print3">\n' +
    '\t\t\t\t<div>\n' +
    '\t\t\t\t\t<img src="../img/appCode.png" style="width: 100px;margin-left: 200px;"/>\n' +
    '\t\t\t\t\t<img src="../img/appCode2.png" style="width: 100px;height: 50px;margin: -3px 200px;"/>\n' +
    '\t\t\t\t\t<p style="color: blue;font-family: \'微软雅黑\';margin: -3px 200px;font-size: 20px;">APP二维码</p>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t\t<div id="aa" >\n' +
    '\t\t\t\t\t<img src="../img/systemCode.png" style="width: 100px;"/>\n' +
    '\t\t\t\t\t<img src="../img/systemCode2.png" style="width: 100px;height: 50px;margin: -30px 0px;"/>\n' +
    '\t\t\t\t\t<p style="color: blue;font-family: \'微软雅黑\';font-size: 20px;">系统二维码</p>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>'
})
Vue.component('id-read',{
    template:'<div>\n' +
    '\t\t\t<div class="id1">\n' +
    '\t\t\t\t<p class="p_1">二代身份证读取</p>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="id2">\n' +
    '\t\t\t\t<img src="../img/IDRead_01.png" class="IDRead_01"/>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="id3">\n' +
    '\t\t\t\t<div>\n' +
    '\t\t\t\t\t<img src="../img/appCode.png" style="width: 100px;margin-left: 200px;"/>\n' +
    '\t\t\t\t\t<img src="../img/appCode2.png" style="width: 100px;height: 50px;margin: -3px 200px;"/>\n' +
    '\t\t\t\t\t<p style="color: blue;font-family: \'微软雅黑\';margin: -3px 200px;font-size: 20px;">APP二维码</p>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t\t<div id="aa" >\n' +
    '\t\t\t\t\t<img src="../img/systemCode.png" style="width: 100px;"/>\n' +
    '\t\t\t\t\t<img src="../img/systemCode2.png" style="width: 100px;height: 50px;margin: -30px 0px;"/>\n' +
    '\t\t\t\t\t<p style="color: blue;font-family: \'微软雅黑\';font-size: 20px;">系统二维码</p>\n' +
    '\t\t\t\t</div>\n' +
    '\t\t\t</div>\n' +
    '\t\t\t<div class="id4">\n' +
    '\t\t\t\t<img src="../img/photograph.png" />\n' +
    '\t\t\t</div>\n' +
    '\t\t</div>'
})
$.ajax({
    type: "get",
    url: "../data/data.json",
    success: function (data) {
        var app = new Vue({
            el: "#app",
            data: {
                show:true,
            },
            methods:{
            }
        })
    }
})