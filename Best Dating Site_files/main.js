$(function () {

      var btn = $('.js-popup');
      var block = $('.popup__block');
      var close = $('.popup__close, .closes-all');
      btn.on('click', function () {
          block.fadeIn(300);
          block.css('display', 'flex');
      });
      close.on('click', function () {
          block.fadeOut(300);
      });


    $(".js-next").on("click", function(t) {
        var s;
        t.preventDefault();
        (s = $(this)).closest(".step").hide().next().fadeIn();
        $(".progress-step.active").next().addClass("active");
      });


    $(".go-to-age").on("click", function (t) {
        var s;
        t.preventDefault();
        (s = $(this)).closest(".step").hide().nextAll('.step--age').fadeIn();
        $(".progress-step.show").addClass("active");
      });

    

    $(".js-click").on("click", function(){
        $(this).addClass('active');
        let blocks= $(this).children().next().addClass('active');
            blocks.each(function(){
            this.textContent = +this.textContent + 1
        })
    });


    function randomInteger(min, max) {
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }
        $('.num').html(randomInteger(20, 60));
        $('.num-2').html(randomInteger(1, 57));
        $('.num-3').html(randomInteger(30, 140));

        $('.num-4').html(randomInteger(20, 60));
        $('.num-5').html(randomInteger(9, 81));
        $('.num-6').html(randomInteger(16, 113));

        $('.num-7').html(randomInteger(11, 79));
        $('.num-8').html(randomInteger(1, 67));
        $('.num-9').html(randomInteger(30, 88));

});
