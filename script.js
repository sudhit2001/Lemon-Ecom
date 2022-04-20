$(function(){

    $('.bars').click(function(){
        $('div.burger-hid').slideDown(500);
        $('body').addClass('stop-scrolling');
    });
    
    $('span.fa-times').click(function(){
        $('div.burger-hid').slideUp(500);
        $('body').removeClass('stop-scrolling');
    });

    $('.one').click(function(){

        $('.info1').addClass('hide');
        $('.textf1').addClass('hide');
        $('.info2').removeClass('hide');
        $('.text-2').removeClass('hide');
        
    });
    $('.two').click(function(){
        
        $('.info2').addClass('hide');
        $('.text-2').addClass('hide');
        $('.info1').removeClass('hide');
        $('.textf1').removeClass('hide');
        
    });

    //price changing
    $('#tinput input[type="radio"][value="16gb"]').click(function(){
        if($('#tinput input[type="radio"][value="512gb"]').is(':checked')){
            $('.how-cards h5').text('90,000');
        }
        else{
            $('.how-cards h5').text('95,000');
        }
    });
    
    $('#tinput input[type="radio"][value="32gb"]').click(function(){
        if($('#tinput input[type="radio"][value="512gb"]').is(':checked')){
            $('.how-cards h5').text('95,000');
        }
        else{
            $('.how-cards h5').text('1,00,000');
        }
    });
    
    $('#tinput input[type="radio"][value="512gb"]').click(function(){
        if($('#tinput input[type="radio"][value="16gb"]').is(':checked')){
            $('.how-cards h5').text('90,000');
        }
        else{
            $('.how-cards h5').text('95,000');
        }
    });

    $('#tinput input[type="radio"][value="1tb"]').click(function(){
        if($('#tinput input[type="radio"][value="16gb"]').is(':checked')){
            $('.how-cards h5').text('95,000');
        }
        else{
            $('.how-cards h5').text('1,00,000');
        }
    });
    
    $('#pinput1 input[type="radio"][value="16gb"]').click(function(){
        if($('#pinput1 input[type="radio"][value="512gb"]').is(':checked')){
            $('#pinput1 + h5').text('70,000');
        }
        else{
            $('#pinput1 + h5').text('75,000');
        }
    });
    
    $('#pinput1 input[type="radio"][value="32gb"]').click(function(){
        if($('#pinput1 input[type="radio"][value="512gb"]').is(':checked')){
            $('#pinput1 + h5').text('75,000');
        }
        else{
            $('#pinput1 + h5').text('80,000');
        }
    });
    
    $('#pinput1 input[type="radio"][value="512gb"]').click(function(){
        if($('#pinput1 input[type="radio"][value="16gb"]').is(':checked')){
            $('#pinput1 + h5').text('70,000');
        }
        else{
            $('#pinput1 + h5').text('75,000');
        }
    });

    $('#pinput1 input[type="radio"][value="1tb"]').click(function(){
        if($('#pinput1 input[type="radio"][value="16gb"]').is(':checked')){
            $('#pinput1 + h5').text('75,000');
        }
        else{
            $('#pinput1 + h5').text('80,000');
        }
    });

    $('#pinput2 input[type="radio"][value="16gb"]').click(function(){
        if($('#pinput2 input[type="radio"][value="512gb"]').is(':checked')){
            $('#pinput2 + h5').text('50,000');
        }
        else{
            $('#pinput2 + h5').text('55,000');
        }
    });
    
    $('#pinput2 input[type="radio"][value="32gb"]').click(function(){
        if($('#pinput2 input[type="radio"][value="512gb"]').is(':checked')){
            $('#pinput2 + h5').text('55,000');
        }
        else{
            $('#pinput2 + h5').text('60,000');
        }
    });
    
    $('#pinput2 input[type="radio"][value="512gb"]').click(function(){
        if($('#pinput2 input[type="radio"][value="16gb"]').is(':checked')){
            $('#pinput2 + h5').text('50,000');
        }
        else{
            $('#pinput2 + h5').text('55,000');
        }
    });

    $('#pinput2 input[type="radio"][value="1tb"]').click(function(){
        if($('#pinput2 input[type="radio"][value="16gb"]').is(':checked')){
            $('#pinput2 + h5').text('55,000');
        }
        else{
            $('#pinput2 + h5').text('60,000');
        }
    });
    
    $('#linput1 input[type="radio"][value="16gb"]').click(function(){
        if($('#linput1 input[type="radio"][value="512gb"]').is(':checked')){
            $('#linput1 + h5').text('1,00,000');
        }
        else{
            $('#linput1 + h5').text('1,05,000');
        }
    });
    
    $('#linput1 input[type="radio"][value="32gb"]').click(function(){
        if($('#linput1 input[type="radio"][value="512gb"]').is(':checked')){
            $('#linput1 + h5').text('1,05,000');
        }
        else{
            $('#linput1 + h5').text('1,10,000');
        }
    });
    
    $('#linput1 input[type="radio"][value="512gb"]').click(function(){
        if($('#linput1 input[type="radio"][value="16gb"]').is(':checked')){
            $('#linput1 + h5').text('1,00,000');
        }
        else{
            $('#linput1 + h5').text('1,05,000');
        }
    });

    $('#linput1 input[type="radio"][value="1tb"]').click(function(){
        if($('#linput1 input[type="radio"][value="16gb"]').is(':checked')){
            $('#linput1 + h5').text('1,05,000');
        }
        else{
            $('#linput1 + h5').text('1,10,000');
        }
    });

    $('#linput2 input[type="radio"][value="16gb"]').click(function(){
        if($('#linput2 input[type="radio"][value="512gb"]').is(':checked')){
            $('#linput2 + h5').text('2,00,000');
        }
        else{
            $('#linput2 + h5').text('2,05,000');
        }
    });
    
    $('#linput2 input[type="radio"][value="32gb"]').click(function(){
        if($('#linput2 input[type="radio"][value="512gb"]').is(':checked')){
            $('#linput2 + h5').text('2,05,000');
        }
        else{
            $('#linput2 + h5').text('2,10,000');
        }
    });
    
    $('#linput2 input[type="radio"][value="512gb"]').click(function(){
        if($('#linput2 input[type="radio"][value="16gb"]').is(':checked')){
            $('#linput2 + h5').text('2,00,000');
        }
        else{
            $('#linput2 + h5').text('2,05,000');
        }
    });

    $('#linput2 input[type="radio"][value="1tb"]').click(function(){
        if($('#linput2 input[type="radio"][value="16gb"]').is(':checked')){
            $('#linput2 + h5').text('2,05,000');
        }
        else{
            $('#linput2 + h5').text('2,10,000');
        }
    });

});