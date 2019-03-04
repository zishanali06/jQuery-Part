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

