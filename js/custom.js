$(document).ready(function() {
            $("form#donor").submit(function(e) {
                // e.preventDefault();
                const payt = $("#selectPaymentType").val();

                if( payt === 'cheque' ) {

                    if(
                        $("input[name=cheque_amount]").val() == '' ||
                        $("input[name=cheque_number]").val() == '') {

                        alert("Missing Payment details Information");
                        e.preventDefault()
                    }
                }
            });
        });

$(document).ready(function() {
            $("form#donor").submit(function(e) {
                // e.preventDefault();
                const payt = $("#selectPaymentType").val();

                if( payt === 'wire' ) {

                    if(
                        $("input[name=wire_amount]").val() == '' ||
                          $("input[name=account_name]").val() == '' ||
                            $("input[name=account_number]").val() == '' ||
                              $("input[name=bank_name]").val() == '' ||
                                $("input[name=routing_number]").val() == '' ||
                            $("input[name=iban]").val() == '') {

                        alert("Missing Payment details Information");
                        e.preventDefault()
                    }
                }
            });
        });

$(document).ready(function() {
            $("form#donor").submit(function(e) {
                // e.preventDefault();
                const payt = $("#selectPaymentType").val();

                if( payt === 'zelle' ) {

                    if(
                        $("input[name=zelle_email]").val() == '' ||
                          $("input[name=zelle_phone]").val() == '' ||
                           $("input[name=zelle_amount]").val() == '') {

                        alert("Missing Payment details Information");
                        e.preventDefault()
                    }
                }
            });
        });


$(window).on("load", function() {
    $(".js-mega-menu").HSMegaMenu({
        event: "hover",
        pageContainer: $(".container"),
        breakpoint: 992,
        hideTimeOut: 0
    })
}),
$(document).ready(function(){
    $.HSCore.components.HSHeader.init($("#header"));

    // Sticky Header
    // var win = $(this);
    // var winWdt = win.width();
    // var winHgt = win.height();
    // var headHgt = $('.header-section nav').height();

    // $(window).on('load scroll', function(){
    //     if (winWdt > 991) {
    //         $(window).scroll(function (e) {
    //             var scroll = $(window).scrollTop();
    //             if (scroll >= 10) {
    //                 $('.header-section').addClass("fix-header");
    //             } else {
    //                 $('.header-section').removeClass("fix-header");
    //             }
    //         });
    //     }
    // })

    $('.navbar-toggler').on('click', function(){
        $('body').toggleClass('navbar-show');
    })

    // Back To Top Button
    var backButton = $('.back-to-top');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 600) {
          backButton.addClass('visible');
        } else {
          backButton.removeClass('visible');
        }
    });
    backButton.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 1000);
    });

    
});

