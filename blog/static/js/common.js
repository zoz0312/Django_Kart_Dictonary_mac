$(document).ready(function(){
    tab_css('tab1');

    for( var i=1; i<=3; i++ ){
        var tab = ".tab"+i;
        $(tab).click(function(){
            tab_css($(this).attr('class'));
        });
    }

    function tab_css( name ){
        for( var j=1; j<=3; j++ ){
            var change_tab = ".tab"+j;
            if( "tab"+j != name ){
                $(change_tab).css({
                    'backgroundColor':'#999999',
                    'height':'70%',
                    'line-height': '60px'
                });
            } else {
                $(change_tab).css({
                  'backgroundColor': '#428bca',
                  'height':'100%',
                  'line-height': '84px'
                }, 1000);
            }
        }
    }
});

