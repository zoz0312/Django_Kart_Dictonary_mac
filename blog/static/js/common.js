$(document).ready(function(){
    
    init();

    for( var i=1; i<=3; i++ ){
        var tab = "#tab"+i;
        $(tab).click(function(){
            tab_css($(this).attr('id'), 500);
        });
    }

    function tab_css( name, move_time ){
        for( var j=1; j<=3; j++ ){
            var change_tab = "#tab"+j;
            var div_view = '#view'+j;
            if( "tab"+j == name ){
                $(change_tab).animate({
                  'backgroundColor': '#428bca',
                  'height':'80px',
                  'line-height': '84px',
                  'margin-top':'0px'
                }, move_time);
                $(div_view).css({
                    'display':'block',
                });
            } else {
                $(change_tab).animate({
                    'backgroundColor':'#999999',
                    'height':'50px',
                    'line-height': '54px',
                    'margin-top': '30px',
                }, move_time);
                $(div_view).css({
                    'display':'none',
                });
            }
        }
    }

    function init(){
        tab_css('tab1', 100);
    }
});

