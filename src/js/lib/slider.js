export default function setBackground(slide, images) {
    var slide = $(slide)
        , images = $(images)
        , index = 0;
    $(slide).each(function () {
        $(this).css('background-image', 'url(img/' + images[index++] + ')');
    });
}