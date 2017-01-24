// Slider
export function slider(slider) {
    var slider = $(slider)
        , images = []
        , signatures = []
        , titles = $(slider).find('.title')
        , dots = $(slider).find('.dots').children()
        , currentImg = 0
        , currentTitle = 0
        , currentSign = 0
        , i = 1;
    
//    BEGIN - creating data arrays
    $(dots).each(function () {
        var image = $(this).attr('data-img');
        images.push(image);
        $(this).attr('data-number', currentImg++);
        var signature = $(this).attr('data-sign');
        signatures.push(signature);
        $(this).attr('data-number', currentSign++);
    });
    $(titles).each(function () {
        $(this).attr('data-number', currentTitle++);
        $(this).hide();
    });
//    END - creating data arrays
    
//    BEGIN - wrapping dots
    $(dots).wrap('<div class="dot__wrapper"></div>');
//    END - wrapping dots
    
//    BEGIN - animate slider content
    function animateSlider(n) {
        $(slider).animate({
            'opacity': '0.5'
        }, 600, function () {
            $(slider).css('background-image', 'url(img/' + images[n] + ')');
            $(titles[n]).show().siblings().hide();
            $(dots[n]).parent().addClass('active').siblings().removeClass('active');
            $(slider).find('.signature').css('background-image', 'url(img/' + signatures[n] + ')');
            n++;
            $(slider).animate({
                'opacity': '1'
            }, 600);
        });
    }
//    END - animate slider content
    
//    BEGIN - making first elements active by default
    animateSlider(0);
//    END - making first elements active by default
    
    var interval = setInterval(intervalAnimation, 4000);
  
//    BEGIN - clicker for dots
    $(dots).click(function () {
        clearInterval(interval);
        $('.dot__wrapper').removeClass('active');
        $(this).parent().addClass('active');
        currentImg = $(this).attr('data-number');
        animateSlider(currentImg);
    });
//    END - clicker for dots

    
    
//    BEGIN - interval animation
    function intervalAnimation() {
        if (i > (images.length - 1)) {
            i = 1;
            animateSlider(0);
        }
        else {
            animateSlider(i);
            i++;
        }
    }
//    END - interval animation
}