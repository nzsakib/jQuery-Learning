$(document).ready( function(){
    var sliderUL = $('div.slider').css('overflow','hidden').children('ul'),
        imgs = sliderUL.find('img'),
        imgWidth = imgs.width(),
        imgsLen = imgs.length,
        current = 1,
        totalImgsWidth = imgsLen * imgWidth;

    $('#slider-nav').show().find('button').on('click', function(){
        var direction = $(this).data('dir'); // prev or next
        var loc = imgWidth; // 600 

        // update current value
        (direction === 'next') ? ++current : --current;

        // if first image 
        if ( current === 0 ) {
            current = imgsLen;
            loc = totalImgsWidth - imgWidth;
            direction = 'next';
        } else if ( current - 1 === imgsLen ) { // last image , reset to first
            current = 1;
            loc = 0;
        }
        
        transition( sliderUL, loc, direction );
        
    });

    function transition( container, loc, direction ) {
        var unit;

        if( direction && loc !== 0 ) {
            unit = ( direction === 'next' ) ? '-=' : '+=';
        }

        container.animate({
            marginLeft: unit ? (unit+loc) : loc
        }, 1000);
    }

});
