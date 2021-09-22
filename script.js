function fallingSnow() {

    var $snowflakes = $(), qt = 50;

    for (var i = 0; i < qt; ++i) {
        var $snowflake = $('<div class="snowflakes"></div>');
        $snowflake.css({
            'left': (Math.random() * $('#site').width()) + 'px',
            'top': (- Math.random() * $('#site').height()) + 'px'
        });
        // add this snowflake to the set of snowflakes
        $snowflakes = $snowflakes.add($snowflake);
    }
    $('#snowZone').prepend($snowflakes);

    $snowflakes.animate({
        top: "100%",
        opacity : "0",
    }, Math.random() + 8000, function(){
        $(this).remove();
        // run again when all 20 snowflakes hit the floor
        if (--qt < 1) {
            fallingSnow();
        }
    });
}
fallingSnow();