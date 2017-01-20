export default function tabMenu() {
    var tabMenu = $('#tab-menu'),
        menuItems = $(tabMenu).find('.menu__tab'),
        vines = $(tabMenu).find('.vine'),
        images = [],
        sorts = [],
        firstStep = 4,
        secondStep = 8;
    
//    making first item active
    $(menuItems[0]).addClass('active');
    showBrut();
    
//    functions for showing sort
    
    function showBrut() {
        $(vines).parent().hide();
        var brut = $('.vine').filter($('[data-sort = "brut"]'));
        
        for (var i = 0; i < firstStep; i++) {
            $(brut[i]).parent().show();
        }
        
        $('.products__show').click(function() {
            $(vines).parent().hide();
        for (var i = 0; i < firstStep + secondStep; i++) {
            $(brut[i]).parent().show();
        }
    });
        
    }
    function showSemiBrut() {
        $(vines).parent().hide();
        var semiBrut = $('.vine').filter($('[data-sort = "semi-brut"]'));
        
        for (var i = 0; i < firstStep; i++) {
            $(semiBrut[i]).parent().show();
        }
        
        $('.products__show').click(function() {
            $(vines).parent().hide();
        for (var i = 0; i < firstStep + secondStep; i++) {
            $(semiBrut[i]).parent().show();
        }
    });
        
    }
    function showSemiSweet() {
        $(vines).parent().hide();
        var semiSweet = $('.vine').filter($('[data-sort = "semi-sweet"]'));
        
        for (var i = 0; i < firstStep; i++) {
            $(semiSweet[i]).parent().show();
        }
        
        $('.products__show').click(function() {
            $(vines).parent().hide();
        for (var i = 0; i < firstStep + secondStep; i++) {
            $(semiSweet[i]).parent().show();
        }
    });

    }
    function showSparkling() {
        $(vines).parent().hide();
        var sparkling = $('.vine').filter($('[data-sort = "sparkling"]'));
        
        for (var i = 0; i < firstStep; i++) {
            $(sparkling[i]).parent().show();
        }
        
        $('.products__show').click(function() {
            $(vines).parent().hide();
        for (var i = 0; i < firstStep + secondStep; i++) {
            $(sparkling[i]).parent().show();
        }
    });
        
    }
    

//    clicker for selecting sort
    
    $(menuItems).parent().on('click', function(e) {
        var target = $(e.target);
        
//    active tabs
        
$(target).addClass('active').siblings().removeClass('active');
        
//    selecting sort
        
        switch($(target).attr('data-sort')) {
            case 'brut':
                showBrut();
                break;
            case 'semi-brut':
                showSemiBrut();
                break;
            case 'semi-sweet':
                showSemiSweet();
                break;
            case 'sparkling':
                showSparkling();
                break;
            default:
                $(vines).hide();
        }
    });
    
    
//    adding bg-images
    
    $(vines).each(function() {
        var self = $(this);
        var image = $(self).attr('data-img');
        $(self).css('background-image', 'url(img/' + image + ')');
        
//    hiding pop-up
        var popUp = $(self).next();
        $(popUp).hide();
        
        var product = $(self).parent();
        
//    event for showing pop-up
        $(product).on('mouseenter', function(e) {
            e.stopPropagation();
            $(this).find('.pop-up').fadeIn(200);
            $(this).find('.vine').animate({
                opacity: '0.5',
                zoom: '0.98'
            }, 100);
        });
        $(product).on('mouseleave', function(e) {
            e.stopPropagation();
            $(this).find('.pop-up').hide();
            $(this).find('.vine').animate({
                opacity: '1',
                zoom: '1'
            }, 0);
        });
    });
}

