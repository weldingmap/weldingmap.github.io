function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;
 
        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}
$(function() {
	var dd = new DropDown( $('add') );
		$(document).click(function() {
			$('.wrapper-dropdown-5').removeClass('active');
		});
	});

function DropDown(el) {
                this.dd = el;
                this.initEvents();
            }
            DropDown.prototype = {
                initEvents : function() {
                    var obj = this;

                    obj.dd.on('click', function(event){
                        $(this).toggleClass('active');
                        event.stopPropagation();
                    }); 
                }
            }

            $(function() {

                var dd = new DropDown( $('#dd') );

                $(document).click(function() {
                    // all dropdowns
                    $('.wrapper-dropdown-5').removeClass('active');
                });

            });
            $(function () {
    //script for popups
    $('a.show_popup').click(function () {
        $('div.'+$(this).attr("rel")).fadeIn(500);
        $("body").append("<div id='overlay'></div>");
        $('#overlay').show().css({'filter' : 'alpha(opacity=80)'});
        return false;               
    }); 
    $('a.close').click(function () {
        $(this).parent().fadeOut(100);
        $('#overlay').remove('#overlay');
        return false;
    });
    
    //script for tabs
    $("div.selectTabs").each(function () {
        var tmp = $(this);
        $(tmp).find(".lineTabs li").each(function (i) {
            $(tmp).find(".lineTabs li:eq("+i+") a").click(function(){
                var tab_id=i+1;
                $(tmp).find(".lineTabs li").removeClass("active");
                $(this).parent().addClass("active");
                $(tmp).find(".tab_content div").stop(false,false).hide();
                $(tmp).find(".tab"+tab_id).stop(false,false).fadeIn(300);
                return false;
            });
        });
    });
});