const app = {
    start(){
        this.initCompareSliders();
        this.initSlideShow();
        this.lazyLoad();
        this.showTitleAnim();
    },
    initCompareSliders(){
        $('.slider-compare .slider').slick({
            autoplay:true,
            autoplaySpeed: 6000,
        });
    },
    initSlideShow(){
        $('.slideshow_wrapper').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
            overflowY:'scroll',
            fixedBgPos:true,
            fixedContentPos:true,
        });
    },
    lazyLoad(){
        $('img[data-src], .slide[data-src]').Lazy();
    },
    showTitleAnim(){
        $('.header-wrapper .main-text').addClass('show');
        $('main aside, main .content').addClass('show');
    }
}




$(document).ready(function(){
    app.start();
});