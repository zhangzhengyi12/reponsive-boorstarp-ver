/**
 * Created by Administrator on 2017/2/20.
 */

$(function () {
    var $carousels = $('.carousel');
    var startx ,endx;
    var dis = 80;
    //获取触摸参数
    $carousels.on('touchstart',function (e) {
        startx = e.originalEvent.touches[0].clientX
    })
    //获取开始的值

    $carousels.on('touchmove',function (e) {
        endx = e.originalEvent.touches[0].clientX
    })
    //通过变量不断的覆盖value 获取到最后一刻的x值
    $carousels.on('touchend',function (e) {
        if(Math.abs(startx - endx) > dis){
            // startx > endx ? $carousels.carousel('next') : $carousels.carousel('prev');

            // if(startx > endx ){
            //     $carousels.carousel('next');
            // }else if(startx < endx ){
            //     $carousels.carousel('prev');
            // }
            //

            startx > endx ? $carousels.carousel('next') : startx < endx ? $carousels.carousel('prev') : 1 ;
        }

    }) //在触摸完成后 触发对比事件 和bootstarp自带的翻页方法

});

var windowWidth = $(window).width();
function setHeight() {
    var windowWidth = $(window).width();
    if(windowWidth > 992)
    {
        var getParenHeight = document.getElementsByClassName("autoheight-p");
        for(var i=0 ; i<getParenHeight.length ; i++){
            var currentP = getParenHeight[i];
            var height = currentP.offsetHeight;
        }
        var getChildHeight = document.getElementsByClassName("autoheight-c");
        for(var j=0;j<getChildHeight.length ; j++){
            var currentC = getChildHeight[j];
            console.log(typeof currentC);
            console.log(height);
            currentC.style.height = height+"px";
        }
    }

}
setHeight();
