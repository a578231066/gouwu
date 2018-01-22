/*
    项目负责人：赵强
    项目创建日期:2017.8.15
    最新更新:2017.8.15
    修改人员:赵强
    修改日期:2017.8.15
    修改原因:
    修改代码行数区间:
*/
window.onload=function(){
/* nav */
    var swiper = new Swiper('.swiper-container_nav', {
        slidesPerView: 7.5,
        paginationClickable: true,
        spaceBetween: 0,
        freeMode: true
    });

/* banner */
    var swiper = new Swiper('.swiper-container_banner', {
        pagination: '.one',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

/* 一排图标 */
    var swiper = new Swiper('.swiper-container_one', {
        slidesPerView: 5,
        slidesPerColumn: 1,
        paginationClickable: true,
    });

/* 一排图标 */
    var swiper = new Swiper('.swiper-container_oneOne', {
        slidesPerView: 4,
        slidesPerColumn: 1,
        paginationClickable: true,
    });

/* 两排图标 */
    var swiper = new Swiper('.swiper-container_one1', {
        slidesPerView: 5,
        slidesPerColumn: 2,
        paginationClickable: true,
    });

}


$(function(){
    var h=$(window).height();
/* 搜索遮挡高度 */
    $(".sousuo").height(h+"px");

/* 遮挡 */
    $(".zhedang").height(h-80+"px");


/* 点击下拉旋转 */
    var i=1;
    $(".home2 span").click(function(){
        if(i==1){
            $(".home2 span").addClass("active").removeClass("active1");
            $(".hidd_navTop").show();
            $(".hidd_nav").slideDown(500);
            $(".zhedang").show();
            i=0;
        }else{
            $(".home2 span").addClass("active1").removeClass('active');
            $(".hidd_navTop").hide();
            $(".hidd_nav").slideUp(500);
            $(".zhedang").hide();
            i=1;
        }
        $(".zhedang").click(function(){
            $(".home2 span").addClass("active1").removeClass('active');
            $(".hidd_navTop").hide();
            $(".hidd_nav").slideUp(500);
            $(".zhedang").hide();
        });
    });

/* 搜索遮挡 */
    $(".sousuo_BT").click(function(){
        $(".sousuo").show(500);
        $(".home2 span").addClass("active1").removeClass('active');
        $(".hidd_navTop").hide();
        $(".hidd_nav").hide();
        $(".zhedang").hide();
    });
    $(".top_tou .one").click(function(){
        $(".sousuo").hide(500);
    });

/* 返回顶部 */
    $(document).scroll(function(){
        var y=$(document).scrollTop();// 滑块移动距离
        if(y>200){
            $("#go").fadeIn();
        }else{
            $("#go").fadeOut();
        }
    });

});