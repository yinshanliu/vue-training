$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "../data/data.json",
        dataType: "json",
        async: true,
        success: function (data) {
            var count = 0;
            var temp = 1;
            $(data).each(function (i, n) {
                if (n.isPrinted == 0 && n.isChecked == 1) {
                    count++;
                }
            });
            vueResult(data, count, temp)
        }
    })
});
function vueResult(data, count, temp) {
    var app = new Vue({
        el: "#app",
        data: {
            items: data,
            count: count,
            temp: temp
        },
        methods: {
            reload:function(){
                window.location.reload()
            },
            //显示APP二维码
            show_appCode:function(){
                var trs = $('#appCode').qrcode({
                        width: 300,
                        height: 300,
                        render: "canvas", //设置渲染方式 table canvas
                        text: utf16to8("app二维码"),
                        background: "#ffffff", //背景颜色
                        foreground: "#00FF00" //前景颜色
                    }).find('tr'),
                    trLen = Math.floor(trs.size() / 2),
                    tdLen = Math.floor(trs.eq(0).find('td').size() / 2),
                    tds, bgColor;
                var colors = [
                    ['#ff0000', '#0100e2'],
                    ['#00ed01', '#9f4d95']
                ];
                trs.each(function(j) {
                    tds = $(this).find('td');
                    tds.each(function(i) {
                        bgColor = this.style.backgroundColor;
                        if(bgColor == 'red') {
                            this.style.backgroundColor = colors[j < trLen ? 0 : 1][i < tdLen ? 0 : 1];
                        }
                    });
                });
                function utf16to8(str) {
                    var out, i, len, c;
                    out = "";
                    len = str.length;
                    for(i = 0; i < len; i++) {
                        c = str.charCodeAt(i);
                        if((c >= 0x0001) && (c <= 0x007F)) {
                            out += str.charAt(i);
                        } else if(c > 0x07FF) {
                            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                        } else {
                            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                        }
                    }
                    return out;
                }
                $("#appCode").show();
                $("#fade1").show();
            },
            //显示系统二维码
            show_systemCode:function(){
                var trs = $('#systemCode').qrcode({
                        width: 300,
                        height: 300,
                        render: "canvas", //设置渲染方式 table canvas
                        text: utf16to8("系统二维码"),
                        background: "#ffffff", //背景颜色
                        foreground: "#DAA520" //前景颜色
                    }).find('tr'),
                    trLen = Math.floor(trs.size() / 2),
                    tdLen = Math.floor(trs.eq(0).find('td').size() / 2),
                    tds, bgColor;
                var colors = [
                    ['#ff0000', '#0100e2'],
                    ['#00ed01', '#9f4d95']
                ];
                trs.each(function(j) {
                    tds = $(this).find('td');
                    tds.each(function(i) {
                        bgColor = this.style.backgroundColor;
                        if(bgColor == 'red') {
                            this.style.backgroundColor = colors[j < trLen ? 0 : 1][i < tdLen ? 0 : 1];
                        }
                    });
                });
                function utf16to8(str) {
                    var out, i, len, c;
                    out = "";
                    len = str.length;
                    for(i = 0; i < len; i++) {
                        c = str.charCodeAt(i);
                        if((c >= 0x0001) && (c <= 0x007F)) {
                            out += str.charAt(i);
                        } else if(c > 0x07FF) {
                            out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
                            out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
                            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                        } else {
                            out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
                            out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
                        }
                    }
                    return out;
                }
                $("#systemCode").show();
                $("#fade1").show();
            },
            //隐藏首页div，显示读取身份证div
            show_readID: function () {
                $("#index").hide();
                $("#readID").show();
                var lunbo_temp = 0;
                var lunbo_count = 0;
                var lunbo = setInterval(function () {
                    if (lunbo_count == 3) {
                        clearInterval(lunbo);
                        $("#tdPrint").show();
                        $("#readID").hide();
                        // window.location.href = "3.html"
                        /*var speed = 1000;//定义函数执行速度1秒执行一次
                        var time = 5000;

                        function Marquee() {
                            time--;
                            if (time == 0) {
                                location.reload();
                            }
                        }

                        var hzindex = setInterval(Marquee, speed);//开始递减

                        // 如遇到事件:
                        $("#tdPrint").onmouseover = function () {
                            clearInterval(hzindex);//先清除循环
                            time = 5000;//重置时间
                           hzindex = setInterval(Marquee, speed);//再开始循环
                        }*/
                    } else {
                        if (lunbo_temp == 0) {
                            $("#lunbo").prop("src", "../img/IDRead_01.png");
                            lunbo_temp = 1;
                            lunbo_count++;
                        } else {
                            $("#lunbo").prop("src", "../img/IDRead_02.png");
                            lunbo_temp = 0;
                            lunbo_count++;
                        }
                    }

                }, 1000);
            },
            //点击切换是否勾选
            checkPrint: function (isChecked, id, index) {
                // debugger;
                if (isChecked == 1) {
                    // alert(1);
                    this.items[index].isChecked = 0;
                    this.count--;
                    count--;
                    $("#" + id).prop("src", "../img/unchecked.png")
                } else {
                    // alert(0);
                    this.items[index].isChecked = 1;
                    this.count++;
                    count++;
                    $("#" + id).prop("src", "../img/checked.png")
                }
            },
            //打印遮罩层计时器
            jishi: function () {
                if (count == 0) {
                    alert("当前没有信息需要打印");
                    // location.reload();
                    return
                }
                $("#print").show();
                $("#fade").show();
                // document.getElementById('print').style.display = 'block';
                // document.getElementById('fade').style.display = 'block';
                var jishi = setInterval(function () {
                    if (count == app.temp) {
                        alert("打印完成");
                        // document.getElementById('print').style.display = 'none';
                        // document.getElementById('fade').style.display = 'none';
                        location.reload();//刷新页面
                        clearInterval(jishi);
                    } else {
                        app.temp++
                    }
                }, 2500)
            }
        }
    })
}