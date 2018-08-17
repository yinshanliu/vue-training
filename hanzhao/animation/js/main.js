$(document).ready(function(){
    $.ajax({
        type: "GET",//请求方式
        url: "../demo.json",//地址，就是json文件的请求路径
        dataType: "json",
        async:false,
        success: function(result){
            $('#printPro').hide();
            $('#procedure').hide();
            pushDom(result);
        }
    });
})
function pushDom(result){
    var count=1;
    var vm = new Vue({
        el: '#container',
        data: {
            items:result,
            sumHomes:0,
            show:true
        },
        methods:{
            checkBox:function (e,isPrinted) {
                if(isPrinted==0){
                    var x=e.target.nextElementSibling;
                    var img=e.target;
                    if(x.checked==true){
                        $('#sumHomes').html(parseInt($('#sumHomes').html())-1);
                        x.checked=false;
                        img.src="img/noChecked.png"
                    }else{
                        $('#sumHomes').html(parseInt($('#sumHomes').html())+1);
                        x.checked=true;
                        img.src="img/Checked.png"
                    }
                }else{
                    alert("这个房屋信息已经被打印过啦");
                }
            },
            printHome(){
                var map={};
                var JsonString='[';
                var flag=false;
                $("input:checkbox").each(function() {
                    if(this.checked){
                        map['id']=this.id;
                        map['name']=$(this).next().html()+'';
                        map['isChecked']=this.checked==true?1:0+'';
                        map['isPrinted']=this.checked==true || this.disabled==true?1:0+'';
                        JsonString+=JSON.stringify(map)+',';
                        flag=true;
                    }
                });
                if (!flag){
                    alert("请选择一个房屋信息");
                    return;
                }
                JsonString=JsonString.substring(0,JsonString.length-1);
                var data =eval('('+JsonString+']'+')');
                $('#printPro').show();
                $('#procedure').show();
                var x=parseInt($('#sumHomes').html());
                var obj=1;
                $('body').everyTime('2s','B',function(){
                    $('#number').html(obj);
                    obj++;
                },x);

               $('body').everyTime((x+1)*2+'s','B',function(){
                    $('#printPro').hide();
                    $('#procedure').hide();
                    $('#number').html(1);
                    alert("打印成功");
                },1);



              /*  function doSetTimeout(i) {

                }

                for (var i = 1; i <= x; ++i) {
                    doSetTimeout(i);
                }
               var timer=window.setTimeout(function () {
                    $('#printPro').hide();
                    $('#procedure').hide();
                }, x * 2000);*/
                /*  window.clearTimeout(timer);*/
                /*count++;
                alert(count)*/
            }
        }
    });
}

