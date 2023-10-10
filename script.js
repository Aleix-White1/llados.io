$(document).ready(function () {
    var widthRazon = 30; // Variable razon
    var widthDinero = 0; // Variable pobre
    var widthPanza = 10; // Variable panza
    var click = 0;
    var audio = document.createElement('audio');

    $('#mas').click(function () { 
        if (widthRazon <= 90){
            widthRazon = widthRazon + 10;
            $('.azul').css('width', widthRazon + '%');
            $('#percen-razon').empty();
            $('#percen-razon').append(widthRazon + '% Full');
            if(widthRazon >= 90){
                $('.llados').attr('src', '/img/llados-razon.png');
                $('.llados').css('width', '30%');
                $('.llados').css('left', '35%');
                $('.llados').css('top', '25%');
            }else if (widthRazon > 0){
                $('.llados').attr('src', 'img/llados-normal.jpg');
                $('.llados').css('width', '15%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }
        }else{
            widthRazon = 0;
            $('.azul').css('width', widthRazon + '%');
        }
    });
    $('#menos').click(function () {
        if (widthRazon >= 10){
            widthRazon = widthRazon - 10;
            $('.azul').css('width', widthRazon + '%');
            $('#percen-razon').empty();
            $('#percen-razon').append(widthRazon + '% Full');
            if (widthRazon <= 30){
                $('.llados').attr('src', 'img/llados-normal.jpg');
                $('.llados').css('width', '15%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }if (widthRazon == 0){
                $('.llados').attr('src', 'img/llados-triste.jpg');
                $('.llados').css('width', '20%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }
        }else{
            widthRazon = 100;
            $('.azul').css('width', widthRazon + '%');
        }
        
    });
    $('#croissant').click(function (){
        if (widthPanza <= 90){
            widthPanza = widthPanza + 10;
            $('.amarillo').css('width', widthPanza + '%');
            $('#percen-panza').empty();
            $('#percen-panza').append(widthPanza + '% barriguita');
            if(widthPanza >= 50){
                $('.llados').attr('src', '/img/llados-gordo.jpg');
                $('.llados').css('width', '15%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '25%');
            }else if (widthPanza > 0){
                $('.llados').attr('src', 'img/llados-normal.jpg');
                $('.llados').css('width', '15%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }
        }else{
            widthPanza = 0;
            $('.amarillo').css('width', widthPanza + '%');
        }
    });
    $('#prote').click(function (){
        if (widthPanza >= 10){
            widthPanza = widthPanza - 10;
            $('.amarillo').css('width', widthPanza + '%');
            $('#percen-panza').empty();
            $('#percen-panza').append(widthPanza + '% barriguita');
            if (widthPanza <= 50){
                $('.llados').attr('src', 'img/llados-normal.jpg');
                $('.llados').css('width', '15%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }if (widthPanza == 0){
                $('.llados').attr('src', 'img/llados-ripped.png');
                $('.llados').css('width', '20%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }
        }else{
            widthPanza = 100;
            $('.amarillo').css('width', widthPanza + '%');
        }
        
    });
    $('#no-dinero').click(function (){
        if (widthDinero <= 90){
            widthDinero = widthDinero + 10;
            $('.rojo').css('width', widthDinero + '%');
            $('#percen-pobre').empty();
            $('#percen-pobre').append(widthDinero + '% pobre');
            if (widthDinero >= 50){
                $('.llados').attr('src', 'img/llados-pobre.jpg');
                $('.llados').css('width', '20%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }
        }else{
            widthDinero = 100;
            $('.rojo').css('width', widthDinero + '%');
        }
        
    });
    $('#dinero').click(function (){
        if (widthDinero >= 10){
            widthDinero = widthDinero - 10;
            $('.rojo').css('width', widthDinero + '%');
            $('#percen-pobre').empty();
            $('#percen-pobre').append(widthDinero + '% pobre');
            if (widthDinero < 50){
                $('.llados').attr('src', 'img/llados-normal.jpg');
                $('.llados').css('width', '15%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }if(widthDinero == 0){
                $('.llados').attr('src', 'img/llados-rico.png');
                $('.llados').css('width', '20%');
                $('.llados').css('left', '40%');
                $('.llados').css('top', '20%');
            }
        }else{
            widthDinero = 100;
            $('.rojo').css('width', widthDinero + '%');
        }
        
    });
    $('#bestia').click(function (){
        click++;
        audio.setAttribute('src', '/img/bestia_audio.mp3');
        if (click % 2 === 1){
            $(this).attr('src', '/img/on.png').css('width', '70%');
            $('.llados').attr('src', '/img/bestia.gif');
            audio.play();
        }else{
            $(this).attr('src', '/img/off.png').css('width', '70%');
            $('.llados').attr('src', '/img/llados-normal.jpg');
            audio.pause();
        }
        

    });
});
