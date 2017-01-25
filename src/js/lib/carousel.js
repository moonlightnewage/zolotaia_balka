export default function carousel(itemWidth, itemMargin, itemView) {
    var carousel = $('#awards-carousel .awards__carousel-box'),
        step = itemWidth + itemMargin,
        carouselBox = itemView * step - itemMargin,
        itemNumb = $('#awards-carousel .awards__item').length,
        marginLeft = 0,
        maxMarginLeft = itemNumb * step;
    
    $(carousel).width(carouselBox);
    $('#awards-carousel .awards__item').width(itemWidth).css("margin-right", itemMargin);
    
    $('#awards-carousel .awards__trigger-left').click(function(){
       if(-marginLeft == maxMarginLeft - itemView * step) {
           return false;
       }
        else {
            marginLeft = marginLeft - step;
        }
        $('#awards-carousel .awards__items').animate({
            marginLeft: marginLeft
        }, 600);
        
    });
    
        $('#awards-carousel .awards__trigger-right').click(function(){
       if(marginLeft == 0) {
           return false;
       }
        else {
            marginLeft = marginLeft + step;
        }
        $('#awards-carousel .awards__items').animate({
            marginLeft: marginLeft
        }, 600);
    });
}