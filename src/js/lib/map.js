export default function createMap() {
    var map;
    var firstMarker,
        secondMarker,
        thirdMarker,
        fourthMarker;
        
    
    function initMap() {
//    BEGIN - defining main arguments
    var mapElement = document.getElementById('map');
    var mapOptions = {
        center: {lat: 55.735364, lng: 37.634334},
        zoom: 15,
        scrollwheel: false,
        disableDefaultUI: true,
        mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
//    END - defining main arguments

//    BEGIN - styling map
    var styles = [
    {
      stylers: [
        { hue: "#435870" },
        { saturation: -90 },
        { lightness: 10 }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 100 },
        { visibility: "simplified" }
      ]
    },
    {
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];
    
    var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});
    
    map = new google.maps.Map(mapElement, mapOptions);
    
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
//    BEGIN - styling map

//    BEGIN - adding markers
    var image = 'img/icon-map.png';
    
    var first = new google.maps.LatLng(55.736264, 37.622203);
    var second = new google.maps.LatLng(55.732736, 37.628294);
    var third = new google.maps.LatLng(55.734651, 37.636040);
    var fourth = new google.maps.LatLng(55.734573, 37.650613);
    
    firstMarker = new google.maps.Marker({
        position: first,
        icon: image,
        title: 'ул. Большая Ордынка, 40с4, Москва, Россия'
    });
    
    secondMarker = new google.maps.Marker({
        position: second,
        icon: image,
        title: 'ул. Пятницкая, 61к2, Москва, Россия'
    });
    
    thirdMarker = new google.maps.Marker({
        position: third,
        icon: image,
        title: 'ул. Бахрушина, 17, Москва, Россия'
    });
    
    fourthMarker = new google.maps.Marker({
        position: fourth,
        icon: image,
        title: 'Краснохолмская наб., 5/9, Москва, Россия'
    });


    firstMarker.setMap(map);
    secondMarker.setMap(map);
    thirdMarker.setMap(map);
    fourthMarker.setMap(map);
//    END - adding markers
}
    $(function() {
    initMap();

//    BEGIN - custom zoom
    var zoomIn = $('.map .map__zoom-in');
    var zoomOut = $('.map .map__zoom-out');

    $(zoomIn).click(function() {
        map.setZoom(map.getZoom()+1);
        if(map.getZoom()==3) $(zoomOut).show();
    });
    $(zoomOut).click(function() {
        map.setZoom(map.getZoom()-1);
        if(map.getZoom()==2) $(this).hide();
    });
//    END - custom zoom
        
//    BEGIN - custom list
    var list = $('.map .map__list').append('<ul class="map__dropdown"></ul>').children().last();
    
    $(list).hide();
    
    $(list).append('<li class="map__dropdown-item">'+ firstMarker.title +'</li>');
    $(list).append('<li class="map__dropdown-item">'+ secondMarker.title +'</li>');
    $(list).append('<li class="map__dropdown-item">'+ thirdMarker.title +'</li>');
    $(list).append('<li class="map__dropdown-item">'+ fourthMarker.title +'</li>');
    
        var i = 0;
    $('.map .map__dropdown-item').each(function() {
       $(this).attr('data-number', i);
        i++;
    });
    
    $('.map .map__list').click(function() {
       $(list).slideToggle(); 
    });
//    END - custom list
});
}

