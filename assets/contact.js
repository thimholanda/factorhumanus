import * as main from './main.js';

export function init() {

    $('.slider-logos').not('.slick-initialized').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        swipe: false,
        pauseOnHover: false

    });

    $(document).on('submit', '#contato', function (e) {
        e.preventDefault();

        let formData = $('#contato').serializeArray();

        $.ajax({
            url: './functions.php',
            type: 'POST',
            data: { formData },
            beforeSend: function () {

                $(".modal-contact-response h2").html('Enviando...');
                $(".modal-contact-response img").css({'display' : 'none'});
                $(".modal-contact-response button").css({'display' : 'none'});


                $(".modal-contact-response")
                    .css("display", "flex")
                    .hide()
                    .fadeIn(200);
            }
        }
        ).done(function (data) {

            if (data == '1') {
                $(".modal-contact-response h2").html('Sua mensagem foi enviada com sucesso!');
                $(".modal-contact-response img").fadeIn();
                $(".modal-contact-response button").fadeIn();
            }
            else {
                $(".modal-contact-response h2").html('Não foi possível enviar sua mensagem.');
                $(".modal-contact-response button").fadeIn();
            }

        }).always(function (data) {
            $('#contato')[0].reset();
        });
    });

    $(document).on('click', '.btn-contact-close', function (e) {
        e.preventDefault();
        $(".modal-contact-response")
            .fadeOut(200);
    });
}


