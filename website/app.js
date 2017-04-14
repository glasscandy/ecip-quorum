$(function() {

    var mbtn = $('#moreBtn');
    var lbtn = $('#lessBtn');
    var content = $('.hidden');

    mbtn.click(function() {
        lbtn.show();
        mbtn.hide();
        content.toggle();
    });

    lbtn.click(function() {
        mbtn.show();
        lbtn.hide();
        content.toggle();
    });

});

// popraw event na this bo sie wszystkie otwierają
