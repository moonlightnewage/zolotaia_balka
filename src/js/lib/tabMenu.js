export default function tabMenu(initialView, futherView) {
    var tabMenu = $('.products__view'),
        menuItems = $(tabMenu).find('.products__tab'),
        wines = $(tabMenu).find('.products__img'),
        images = [],
        sorts = [],
        firstStep = initialView,
        secondStep = futherView;
    
//    BEGIN - making first items active by default
    $(menuItems[0]).addClass('active');
    //showBrut();
    showSort('brut');
//    END - making first items active by default
    
//    BEGIN - showing sort function
    function showSort(sort) {
        $(wines).parent().hide();
        var sort = $('.products__img').filter($('[data-sort = "'+ sort +'"]'));
        
        for (var i = 0; i < firstStep; i++) {
            $(sort[i]).parent().fadeIn(600);
        }
        
        $('.products__btn_show').click(function() {
            $(wines).parent().hide();
        for (var i = 0; i < firstStep + secondStep; i++) {
            $(sort[i]).parent().show();
        }
    });
    }
//    END - showing sort function

//    BEGIN - clicker for selecting sort
    $(menuItems).parent().on('click', function(e) {
        var target = $(e.target);
        
        //    BEGIN - making tab active
        $(target).addClass('active').siblings().removeClass('active');
        //    END - making tab active
        
        //    BEGIN - selecting sort
        switch($(target).attr('data-sort')) {
            case 'brut':
                //showBrut();
                showSort('brut');
                break;
            case 'semi-brut':
                //showSemiBrut();
                showSort('semi-brut');
                break;
            case 'semi-sweet':
                //showSemiSweet();
                showSort('semi-sweet');
                break;
            case 'sparkling':
                //showSparkling();
                showSort('sparkling');
                break;
            default:
                $(wines).hide();
        }
        //    END - selecting sort
    });
//    END - clicker for selecting sort
    
    
//    BEGIN - adding bg-images
    $(wines).each(function() {
        var self = $(this);
        var image = $(self).attr('data-img');
        $(self).css('background-image', 'url(img/' + image + ')');
//    END - adding bg-images
        
//    BEGIN - hiding pop-ups by default
        var popUp = $(self).next();
        $(popUp).hide();
//    END - hiding pop-ups by default
        
        
//    BEGIN - events for showing pop-ups
        var product = $(self).parent();
        
        $(product).on('mouseenter', function(e) {
            e.stopPropagation();
            $(this).find('.products__pop-up').fadeIn(400);
            $(this).find('.products__img').animate({
                opacity: '0.5',
                zoom: '0.98'
            }, 100);
        });
        $(product).on('mouseleave', function(e) {
            e.stopPropagation();
            $(this).find('.products__pop-up').hide();
            $(this).find('.products__img').animate({
                opacity: '1',
                zoom: '1'
            }, 0);
        });
//    END - events for showing pop-ups
    });
}

