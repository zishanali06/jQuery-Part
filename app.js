$(document).ready(function(){
    let button1 = $("<button class='button1'>Click me for Alert!</button>");
    $('body').append(button1);

    button1.click(function(){
        alert('Winter is Coming!');
    })
    let para = $('<p>This is the change color paragraph</p>');
    $('body').append(para);

    let colors = ['red', 'blue', 'green', 'yellow', 'aqua'];
    para.click(function(){
        para.css('color', colors[Math.floor(Math.random() * 5)]);
    });

    let button3 = $('<button class="button3">Click me For Span</button>');
    $('body').append(button3);
    let newdiv = $('<div></div>');
    $('body').append(newdiv);

    button3.click(function(){
        newdiv.append('<span>Zishan</span>')
    })

});

$('.button2').click(function(){
    alert($('#input1').val());
});

$('#step3').mouseover(function(){
    $('#step3').css("background-color", 'red');
})
$('#step3').mouseleave(function(){
    $('#step3').css("background-color", 'blue');
})

