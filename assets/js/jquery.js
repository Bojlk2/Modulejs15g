$().ready (() => {
    console.log('Document Ready')

    for (i = 1; i <= 10; i++){
        $('ul').append('<li>Item list append</li>')
    }

    for (i = 1; i <= 10; i++){
        $('ol').prepend('<li>Item list prepend</li>')
    }

    $('.content').html('<p>Hola Koder!</p>')

    $('.content').css({
        'background-color':'#333',
        'color':'white'
        })
    
    $('body').prepend('<h1>Empty</h1>')
    $('h1').text('Aprendiendo JQuery')

    $('strong').addClass('bold')
    $('.text__container').prepend('<b>Title text</b>')
    $('.container').addClass('open').show()         

})