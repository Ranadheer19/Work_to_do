$(document).ready(function(){

    $('#input').change(function(){
        var input = $(this).val();
    $('ul').append('<li>' + input + ' <i class="fa-solid fa-circle-check"></i> <i class="fa-solid fa-circle-minus"></i> </li>');
    $(this).val('');
    });

    $('ul').on('click','.fa-circle-check',function(){
        $(this).parent('li').toggleClass('checked');
    });

    $('ul').on('click','.fa-circle-minus',function(){
        $(this).parent('li').fadeOut(200);
    });


});