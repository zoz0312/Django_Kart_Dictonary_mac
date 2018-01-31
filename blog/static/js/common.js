$(document).ready(function(){
    for( var i=1; i<=3; i++ ){
        var tab = ".tab"+i;
        $(tab).click(function(){
            for( var j=1; j<=3; j++ ){
                var change_tab = ".tab"+j;
                if( "tab"+j != $(this).attr('class') ){
                    $(change_tab).css({
                      'background-color': '#999999'
                    });
                } else {
                    $(change_tab).css({
                      'background-color': '#428bca'
                    });
                }
            }
            console.log($(this).attr('class'));
        });
    }
});

