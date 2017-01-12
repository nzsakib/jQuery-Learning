$(document).ready(function(){
    $('html').addClass('js');

    var contactForm = {
        container: $('form.contact'),

        config: {
            effect: 'slideToggle',
            speed: 500
        },

        init: function(config) {
            $.extend(this.config, config);

            $('<button></button>', {
                text: 'Contact Me',
                class: 'btn'
            })
            .insertAfter('article')
            .on('click', this.show);
        },

        show: function() {
            if( contactForm.container.is(':hidden') ) {
                contactForm.close.call(contactForm.container);
                contactForm.container[contactForm.config.effect](contactForm.config.speed);
            }
        },

        close: function() {
            var $this = $(this); // refers contact form

            if( $this.find('span.close').length ) return;
            
            $('<span></span>', {
                text: 'X',
                class: 'close'
            }).prependTo(this)
                .on('click', function(){
                    $this[contactForm.config.effect](contactForm.config.speed);
                });
        }
    };

    contactForm.init({
        effect: 'fadeToggle',
        speed: 300
    });
});