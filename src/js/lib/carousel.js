export default function carousel() {
    
    $('.awards .icon-arrow_left').on('click', function() {
        var carousel = $(this).parent('.awards');
        slideLeft(carousel);
        return false;
    });
    
        $('.awards .icon-arrow_right').on('click', function() {
        var carousel = $(this).parent('.awards');
        slideRight(carousel);
        return false;
    });

    function slideLeft(carousel) {
        var blockWidth = $(carousel).find('.awards__item').outerWidth();
        $(carousel).find('.awards__items .awards__item').eq(-1).clone().prependTo($(carousel).find('.awards__items'));
        $(carousel).find('.awards__items').css({
            'left': '-' + blockWidth + 'px'
        });
        $(carousel).find('.awards__items .awards__item').eq(-1).remove();
        $(carousel).find('.awards__items').animate({
            left: '0px'
        }, 200);
    }

    function slideRight(carousel) {
        var blockWidth = $(carousel).find('.awards__item').outerWidth();
        $(carousel).find('.awards__items').animate({
            'left': '-' + blockWidth + 'px'
        }, 200, function () {
            $(carousel).find('.awards__items .awards__item').eq(0).clone().appendTo($(carousel).find('.awards__items'));
            $(carousel).find('.awards__items .awards__item').eq(0).remove();
            $(carousel).find('.awards__items').css({
                left: '0px'
            });
        });
    }
}