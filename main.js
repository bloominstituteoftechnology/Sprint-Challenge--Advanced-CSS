theTarget = $('.sign-in-overlay-space');

$('.sign-in-nav').click(function(){
    if(theTarget.css('display') === 'none'){
        theTarget.css('display', 'flex');
    }else{
        theTarget.css('display', 'none');
    }
});

$('.close-btn').click(function(){
    if(theTarget.css('display') === 'none'){
        theTarget.css('display', 'flex');
    }else{
        theTarget.css('display', 'none');
    }
});