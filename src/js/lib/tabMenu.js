export default function tabMenu() {
    var tabMenu = $('#tab-menu'),
        menuItems = $(tabMenu).find('.menu__tab'),
        vines = $(tabMenu).find('.vine'),
        images = [],
        titles = [],
        sorts = [];
    
    // active tabs
    $(menuItems[0]).addClass('active');
    $(menuItems).click(function() {
       $(this).addClass('active').siblings().removeClass('active');
    });
    
    $(vines).each(function() {
        var self = $(this);
        var image = $(self).attr('data-img');
        $(self).css('background-image', 'url(img/' + image + ')');
        
        var popUp = $(self).next();
        $(popUp).hide();
        
        var product = $(self).parent();
        console.log(product);
        
        $(product).on('mouseenter', function(e) {
            e.stopPropagation();
            $(this).find('.pop-up').fadeIn(500);
            $(this).find('.vine').animate({
                opacity: '0.5'
            }, 200);
        });
        $(product).on('mouseleave', function(e) {
            e.stopPropagation();
            $(this).find('.pop-up').fadeOut(100);
            $(this).find('.vine').animate({
                opacity: '1'
            });
        });
    });
}