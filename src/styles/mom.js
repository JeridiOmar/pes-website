// JavaScript Document

 $(document).ready(function() {

    $('.comm-link').click(function () {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            }
        });
    })

  });
