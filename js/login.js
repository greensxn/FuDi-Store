$('.loginBtn').click(function (e) {
    e.preventDefault();
    $('.login').removeClass('showed');
});

$('.signupBtn').click(function (e) {
    e.preventDefault();
    $('.signup').removeClass('showed');
});

$('#login').click(function (e) {
    e.preventDefault();
    $('.login').addClass('showed');
});

$('#signup').click(function (e) {
    e.preventDefault();
    $('.signup').addClass('showed');
});
