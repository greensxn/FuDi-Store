var IsBurgerActive = false;

$('.burger-opener').click(function (e) { // показать
    e.preventDefault();
    hideBurgerBtn();
    showNav();
});

$('.burger-close').click(function (e) { // убрать бургер-меню
    e.preventDefault();
    showBurgerBtn();
    hideNav();
});

$(document).mouseup(function (e) { // клик вне бургер-меню
    e.preventDefault();
    var burgerBtn = $('.burger-opener');
    var burger = $('.burger-showen');
    if (!burgerBtn.is(e.target) && burgerBtn.has(e.target).length === 0 &&
        !burger.is(e.target) && burger.has(e.target).length === 0) {
        showBurgerBtn();
        hideNav();
    }
});

$('.burger-close').click(function (e) { // клик вне бургер-меню
    $('.burger-menu').addClass('showed');
    $('.burger-showen').removeClass('showed');
});

$(document).scroll(function () {
    if (!IsBurgerActive)
        return;
    hideNav();
    showBurgerBtn();
    IsBurgerActive = false;
});

function hideBurgerBtn() {
    $('.burger-menu').removeClass('showed');
}

function showBurgerBtn() {
    $('.burger-menu').addClass('showed');
}

function hideNav() {
    $('.burger-showen').animate({ right: "-100%" }, function () {
        $('.burger-showen').css('display', 'none');
        IsBurgerActive = false;
    });
}

function showNav() {
    $('.burger-showen').css('display', 'flex');
    $('.burger-showen').animate({ right: "0%" });
    IsBurgerActive = true;
}