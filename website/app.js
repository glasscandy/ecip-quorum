$(function() {

    var btn = $('.btn');
    var ml = $('.mlBtn');
    var content = $('.hidden');

    btn.click(function() {
        ml.toggle();
        content.toggle();
    });
});
