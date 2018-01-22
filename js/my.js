/*
    项目负责人：赵强
    项目创建日期:2017.7.29
    最新更新:2017.7.31
    修改人员:赵强
    修改日期:
    修改原因:
    修改代码行数区间: 
*/

//选项卡
window.onload=function(){
    //1.拿出节点
    //头
    var oTab=document.getElementById("tab_top");
    var aTab=oTab.getElementsByTagName("li");
    var oMain=document.getElementById("tab_main");
    var aMain=oMain.getElementsByTagName("li");
    //console.log(aMain);
    
    //2.拿出事件
    for(var i=0;i<aMain.length; i++){
        aTab[i].index=i;
        //头部点击事件
        aTab[i].onclick=function(){
            //alert(this);
            //去掉所有的active
            for(var i=0;i<aTab.length;i++){
                aTab[i].className="";
                aMain[i].className="";
            }

            //点击那个给那个active
            this.className="active";

            //点击给aMain加 上面和下面的下标一样
            aMain[this.index].className="active";
        }
    }
}

$(function(){
/* 获取宽高 */
    var h=$(window).height();
/* 登录 */
    $(".zhedang").height(h+"px");

/* 其他登录 */
    $(".blac").height(h+"px");

/* 手机登录 */
    // $(".telePhone").height(h+"px");

/* 验证码 */
    $(".yanzheng_zd").height(h+"px");

/* 服务 */
    $(".fuwu").height(h+"px");
    $(".fuwu .fuwu_down").height(h-50+"px");


/* 登录 */
    $("header,.dingdan,.xiaoxi,.shezhi .dj").click(function(){
        $(".zhedang").show(400);
        $(".yanzheng").show(400);
        $(".yanzheng_zd").show(400);
    });

    $(".zhedang p").click(function(){
        $(".zhedang").hide(400);
    });


/* 其他登录 */
    $(".zhedang .three").click(function(){
        $(".blac").show(400);
        $(".qita_down").show(400);

    });

    $(".blac , .end").click(function(){
        $(".blac").hide(400);
        $(".qita_down").hide(400);
    });

/* 手机登录 */
    /*$(".qita_down .tel").click(function(){
        $(".telePhone").show(400);
    });

    $(".telePhone_top strong").click(function(){
        $(".telePhone").hide(400);
    });

    $(".sign a").click(function(){
        $(".fuwu").show(400);
    });*/

    t=setInterval(function(){
        var chang=$("#tab_main .inp input").val().length;
        console.log(chang);
        if(chang==11){
            $("#tab_main .inp1 button").css({"pointer-events":"auto","color":"#666"});
            $("#tab_main .inp1 button").click(function(){
            var str=$("#tab_main .inp input").val();
            var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
            if(ret.test(str)){
                var i=60;
                $("#tab_main .inp1 button").css({"pointer-events":"none","color":"#bbb"});
                var a=setInterval(function() {
                    $("#tab_main .inp1 button").html(i+"秒后重新发送");
                    $("#tab_main .inp1 button").css({"pointer-events":"none","color":"#bbb"});
                    i--;
                    if(i<0){
                        $("#tab_main .inp1 button").css({"pointer-events":"auto","color":"#666"});
                        clearInterval(a);
                        $("#tab_main .inp1 button").html("获取验证码");
                    }
                }, 1000);
                clearInterval(t);
                }else if(str==""){
                    $(".shouji").empty();
                    $(".shouji").append("<span>电话号不能为空!</span>");
                    $(".shouji").show(10);
                    setTimeout(function(){
                        $(".shouji").hide(400);
                    },1000);
                }else{

                    $(".shouji").empty();
                    $(".shouji").append("<span>电话号输入有误!</span>");
                    $(".shouji").show(10);
                    setTimeout(function(){
                        $(".shouji").hide(400);
                    },1000);
            }
            });
        }else{
            $("#tab_main .inp1 button").css({"pointer-events":"none","color":"#bbb"});
        }
    },1000);

/* 验证码 */
    $(".yanzheng input").keyup(function(e){
        var inp=$(".yanzheng input").val().length;
        if(inp==6){
            $(".yanzheng").hide();
            $(".yanzheng_zd").hide();
        }
    });


//手机号码正则
    /*$(".sign button").click(function(){
        var str=$("#tab_main .inp input").val();
        var ret=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if(ret.test(str)){
            
        }else if(str==""){
            $(".shouji").empty();
            $(".shouji").append("<span>电话号不能为空!</span>");
            $(".shouji").show(10);
            setTimeout(function(){
                $(".shouji").hide(400);
            },1000);
        }else{
            $(".shouji").empty();
            $(".shouji").append("<span>电话号输入有误!</span>");
            $(".shouji").show(10);
            setTimeout(function(){
                $(".shouji").hide(400);
            },1000);
        }
    });*/

//点击获取验证码
    /*$("#tab_main .inp1 button").click(function(){
        var i=60;
        $("#tab_main .inp1 button").css({"pointer-events":"none","color":"#bbb"});
        var a=setInterval(function() {
            $("#tab_main .inp1 button").html(i+"秒后重新发送");
            i--;
            if(i==0){
                $("#tab_main .inp1 button").css({"pointer-events":"auto","color":"#666"});
                clearInterval(a);
                $("#tab_main .inp1 button").html("获取验证码");
            }
        }, 1000);   
    });*/
});