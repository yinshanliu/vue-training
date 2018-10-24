define(function () {
    $(document).ready(function () {
        $.ajax({
            type: "get",
            url: "data/data.json",
            dataType: "json",
            async: true,
            success: function (data) {
                //每页显示5条数据
                var totalPages = Math.ceil(data.length/5);
                vueResult(data,totalPages)
            }
        })
    });

    function vueResult(data,totalPages) {
        var app = new Vue({
            el: "#app",
            data: {
                count:0,
                //当前页
                currPage:1,
                //总共显示多少页
                totalPages:totalPages,
            },
            computed:{
                items:function () {
                    return data.slice((this.currPage-1)*5,(this.currPage-1)*5+5)
                }
            },
            methods: {
                queryPage:function (pageCount) {
                    debugger
                    if(this.currPage!=pageCount){
                        this.currPage=pageCount
                    }
                }
            }
        })
    }
})
