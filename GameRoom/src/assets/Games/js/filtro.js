$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-game');
        if (valor == 'all') {
            $('.cont-work').show('1000');
        } else {
            $('.cont-work').not(`.${valor}`).hide('1000');
            $('.cont-work').filter(`.${valor}`).show('1000');
        }
    });
    let menus = $('#games').offset().top;

    window.addEventListener('resize', function(){
        let menus = $('#games').offset().top;
    });

    $('#enlace-menus').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menus -100
        },600);
    });
});