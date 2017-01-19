// Slider

export function slider(slider) {
    var slider = $(slider),
        images = [],
        signatures = [],
        titles = $(slider).find('.title'),
        currentImg = 0,
        currentTitle = 0,
        currentSign = 0;
    
   var dot = $(slider).find('.dots').children();

    $(dot).each(function() {
        var image = $(this).attr('data-img');
        images.push(image);
        $(this).attr('data-number', currentImg++);
        
        var signature = $(this).attr('data-sign');
        signatures.push(signature);
        $(this).attr('data-number', currentSign++);
    });
    
    $(titles).each(function() {
       $(this).attr('data-number', currentTitle++);
        $(this).hide();
    });
    
    
    $(slider).css('background-image', 'url(img/' + images[0] + ')');
    $(slider).find('.signature').css('background-image', 'url(img/' + signatures[0] + ')');
    $(titles[0]).show();
    
    $(dot).wrap('<div class="dot__wrapper"></div>');
    $(slider).find('.dot__wrapper:first').addClass('active');
    
    
    $(dot).click(function() {
       $('.dot__wrapper').removeClass('active');
        $(this).parent().addClass('active');
        currentImg = $(this).attr('data-number');
        $(slider).css('background-image', 'url(img/' + images[currentImg] + ')');
        $(slider).find('.signature').css('background-image', 'url(img/' + signatures[currentImg] + ')');
        $(titles[currentImg]).show().siblings().hide();
    });
}