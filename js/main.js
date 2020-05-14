

$(document).ready(function(){

    var scrollspeed = 650; // время прокрутки
    
    jQuery('#scroll-bt').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-00').offset().top }, scrollspeed);
    });

    jQuery('#scroll-bt-00').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-00').outerHeight() + jQuery('#block-00').offset().top }, scrollspeed);
    });

    jQuery('#scroll-bt-0').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-0').outerHeight() + jQuery('#block-0').offset().top }, scrollspeed);
    });

    jQuery('#scroll-bt-1').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-1').outerHeight() + jQuery('#block-1').offset().top }, scrollspeed);
    });

    jQuery('#scroll-bt-2').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-2').outerHeight() + jQuery('#block-2').offset().top }, scrollspeed);
    });

    // jQuery('#scroll-bt-3').click(function() {
    //     jQuery('html').animate({
    //     scrollTop: jQuery('#block-3').outerHeight() + jQuery('#block-3').offset().top - get_scroll_rem() }, scrollspeed);
    // });

    // jQuery('#scroll-bt-4').click(function() {
    //     jQuery('html').animate({
    //     scrollTop: jQuery('#block-4').outerHeight() + jQuery('#block-4').offset().top - get_scroll_rem() }, scrollspeed);
    // });

    jQuery('#page-up-bt').click(function() {
        jQuery('html').animate({
        scrollTop: -jQuery('.scroll-content').outerHeight() - jQuery('.scroll-content').offset().top }, scrollspeed + 1400);
    });

    // function get_scroll_rem(){
    //     return ($(window).width() >= 768)? 50 : 50;
    // }

    $('#block-2').magnificPopup({
        delegate: '.pop-up-img', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options
      });
    

    // $('.header-right-block-img').click(function(){
    //     var list = this.classList;
    //     if(!list.contains('hdr-img-animate')){
    //         list.add('hdr-img-animate');
    //         setTimeout(function () {   
    //             list.remove('hdr-img-animate');
    //         }, 1500);
    //     }
    // })

    // var list = document.getElementsByClassName("header-right-block-img");
    // if(list.length > 0)
    // {
    //     var hdr_img = list[0].classList;
    //     setTimeout(function () {   
    //         hdr_img.remove('hdr-img-animate');
    //     }, 1500);
    // }

    // var list = document.getElementsByClassName("swiper-container-header");
    // if(list.length > 0)
    // {
    //     var hdr_img = list[0].classList;
    //     setTimeout(function () {   
    //         hdr_img.remove('hdr-img-animate');
    //     }, 1500);
    // }

    //header buttons click selector
    let bt_click = false;
    var bt_num = 0;
    var content_list = document.getElementsByClassName("header-right-block-text");
    var bt_list = document.getElementsByClassName("header-right-block-bt");
    if(content_list.length > 0){
        $('#bt-0').click(function(){           
            change_content(0);
            bt_click = true;
            first_click = true;
        });

        $('#bt-1').click(function(){
            change_content(1);
            bt_click = true;
            first_click = true;
        });

        $('#bt-2').click(function(){
            change_content(2);
            bt_click = true;
            first_click = true;
        });

        $('.header-right-block-text-panel').click(function(){
            if(bt_click) return;
            change_content(bt_num < 2? bt_num + 1 : 0);
            first_click = true;
        })

        function change_content(num){
            if(bt_num == num) return;             
            bt_list[bt_num].classList.remove('bt-active')
            content_list[bt_num].classList.remove('content-active');
            bt_num = num;
            bt_list[bt_num].classList.add('bt-active')
            setTimeout(function () {                  
                content_list[bt_num].classList.add('content-active');
                bt_click = false;
            }, 500);
        }
    }

    var list = document.getElementsByClassName("gif-img-back");
    if(list.length > 0)
    {
        var gif_img = list[0].classList;
        setTimeout(function () {   
            gif_img.add('nav-anim-revers');
            setSwiper();
            autoTextChange();
        }, 7500);
    }
    
    
    var nav_list = document.getElementsByClassName("nav-menu");
    var menu_click = false;
    if(nav_list.length > 0)
    {
        var nav_bg = document.getElementById("nav-bg").classList,
        nav = nav_list[0];       
        //var bg_list = document.getElementsByClassName("color-bg");
        $('.menu-bt').click(function(){
            if(!menu_click){
                menu_click = true;
                if(nav_bg.contains('nav-anim')){ 
                    nav.classList.remove('nav-menu-anim');
                    nav.classList.add('nav-menu-anim-revers');      
                    nav_bg.remove('nav-anim');
                    nav_bg.add('nav-anim-revers');             
                    setTimeout(function () {   
                        nav.style.display="none";
                        menu_click = false;
                    }, 1000);
    
                    //highlight-color change      
                    // for(let i = 0; i < bg_list.length; i++){
                    //     bg_list[i].classList.remove('white-bg');
                    // }
                }
                else{
                    nav.style.display="flex";
                    nav.classList.remove('nav-menu-anim-revers');
                    nav.classList.add('nav-menu-anim');
                    nav_bg.remove('nav-anim-revers');
                    nav_bg.add('nav-anim');   
                    setTimeout(function () {   
                        menu_click = false;
                    }, 1000);

                    //highlight-color change         
                    // for(let i = 0; i < bg_list.length; i++){
                    //     bg_list[i].classList.add('white-bg');
                    // }
                }
            }           
        })

        $('.home-bt').click(function(){
            nav_close();
        })
        $('.theme-bt').click(function(){
            nav_close();
        })
        $('.mail-bt').click(function(){
            nav_close();
        })
        $('.nav-menu-btn').click(function(){
            if(menu_click) return;
            menu_click = true;
            nav_close();  
            setTimeout(function () {   
                menu_click = false;
            }, 1000); 
        })
        
        $('.nav-menu').click(function(){
            if(menu_click) return;
            menu_click = true;
            nav_close();  
            setTimeout(function () {   
                menu_click = false;
            }, 1000);         
        })

        function nav_close(){
            if(nav_bg.contains('nav-anim')){ 
                nav.classList.remove('nav-menu-anim');
                nav.classList.add('nav-menu-anim-revers');      
                nav_bg.remove('nav-anim');
                nav_bg.add('nav-anim-revers');             
                setTimeout(function () {   
                    nav.style.display="none";
                }, 1000);

                //highlight-color change      
                // for(let i = 0; i < bg_list.length; i++){
                //     bg_list[i].classList.remove('white-bg');
                // }
            }
        }
    }

    let first_click = false; 
    var arrow = document.getElementById("arrow-bt"),
    text_panel = document.getElementsByClassName("header-right-block-text-panel");
    $('#arrow-bt').click(function(){
        first_click = true;
        if(text_panel[0].classList.contains('nav-anim')){           
            text_panel[0].classList.remove('nav-anim');
            text_panel[0].classList.add('nav-anim-revers'); 
        }
        else{           
            if(text_panel[0].classList.contains('nav-anim-revers')){
                text_panel[0].classList.remove('nav-anim-revers'); 
            }
            text_panel[0].classList.add('nav-anim'); 
        }
        arrow.classList.add('hiden');
        setTimeout(function () {   
            arrow.classList.remove('hiden');
        }, 1500);  
        // setTimeout(function () {   
        //     if(text_panel[0].classList.contains('nav-anim')){
        //         text_panel[0].classList.remove('nav-anim');
        //         text_panel[0].classList.add('nav-anim-revers'); 
        //     }
        // }, 5000);     
    })

    let i = 0;
    function autoTextChange(){
        if(i == 3){
            autoTextTimeout();
            return;
        } 
        setTimeout(function () {               
            if(first_click) return;
            if(text_panel[0].classList.contains('nav-anim-revers')){
                text_panel[0].classList.remove('nav-anim-revers');
                change_content(0);
            }
            text_panel[0].classList.add('nav-anim');
            setTimeout(function(){
                if(first_click) return;
                change_content(1);
                setTimeout(function(){
                    if(first_click) return;
                    change_content(2);
                    setTimeout(function(){
                        if(first_click) return;
                        text_panel[0].classList.remove('nav-anim');
                        text_panel[0].classList.add('nav-anim-revers');
                        i++;
                        autoTextChange();
                    }, 6000)
                }, 6000)
            }, 6000)
        }, 14000);
    }

    function autoTextTimeout(){        
        setTimeout(function(){    
            if(first_click) return;
            i = 0;           
            autoTextChange();
        }, 28000)
    }

    function setSwiper(){
        //initialize swiper when document ready
        let hdrSwiper = new Swiper ('.swiper-container-header', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            spaceBetween: 0,
            grabCursor: true,
            effect:'fade',     
            autoplay: {
            delay: 3500,
            },
            pagination: {
                el: '#swiper-pagination-header',
                clickable: true,
                bulletClass: 'swiper-pagination-bullet-header',
                bulletActiveClass: 'swiper-pagination-bullet-active-header',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
        });
    }
});