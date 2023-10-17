var $burgerButton = $('.menu-button');

var $burgerElements = $('.menu-button, .menu-block, .body, .menu-links');

$burgerButton.on('click', function () {
    if ($burgerElements.hasClass('open')) {
        $burgerElements.removeClass('open');
    } else {
        $burgerElements.addClass('open');
    }
});