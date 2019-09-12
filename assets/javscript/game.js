var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//$(".crystal").attr('class')

var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
     'https://thumbs.gfycat.com/BlankDirectAsiantrumpetfish-size_restricted.gif',
     'https://cdn.dribbble.com/users/2650628/screenshots/5474535/fbuqsu_800_600.gif', 
     'https://media.giphy.com/media/l0He2yvbsGU0x2Aik/giphy.gif', 
     'https://media2.giphy.com/media/twfl6QdDg2ZA4/giphy.gif']

    random_result = Math.floor(Math.random() * 69) + 30;

    console.log(random_result);

    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random)

        var crystal = $("<div>");

        crystal.attr({

            "class": 'crystal',

            "data-random": random

        });
        crystal.css({

            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"

        })

        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score: " + previous);
}


resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > random_result) {

        lost++;

        $("#lost").html("You Lost!!!: " + lost);

        previous = 0;

        resetAndStart();

    }
    else if (previous === random_result) {

        win++;

        $("#win").html("You Won!: " + win);

        previous = 0;

        resetAndStart();
    }
});