$(document).ready(function(){
    
    init();

    for( var i=1; i<=3; i++ ){
        var tab = "#tab"+i;
        $(tab).click(function(){
            tab_css($(this).attr('id'), 500);
        });
    }

    function init(){
        tab_css('tab1', 100);
        scroll();
    }

    function scroll(){
        chkScroll();
        $(window).scroll(function () {
            chkScroll();
        }); 
    }

    function chkScroll(){
        var height = $(document).scrollTop();
        if( height >= 200 ){
            $(".page-header .menu").css({
                'position':'fixed',
            });
        } else {
            $(".page-header .menu").css({
                'position':'static',
            });
        }
    }

    function tab_css( name, move_time ){
        for( var j=1; j<=3; j++ ){
            var change_tab = "#tab"+j;
            var div_view = '#view'+j;
            console.log(change_tab);

            if( "tab"+j == name ){
                $(change_tab).animate({
                  'height':'80px',
                  'line-height': '84px',
                  'margin-top':'0px'
                }, move_time);
                $(change_tab).css({
                    'background-color':'#428bca',
                });

                $(div_view).delay("fast").fadeIn();
            } else {
                $(change_tab).animate({
                    'backgroundColor':'#999999',
                    'height':'50px',
                    'line-height': '54px',
                    'margin-top': '30px',
                }, move_time);
                $(change_tab).css({
                    'background-color':'#999999',
                });
                $(div_view).css({
                    'display':'none',
                },move_time);
            }
        }
    }

    
});

