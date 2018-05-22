

$(document).ready(function() {

var timer;
var count = 25;




timer = setTimeout(update, 1000);



function update()
{
    if (count > 0)
    {
       $("#counter").text(--count);
       $(".clock").text(count);
       timer = setTimeout(update, 1000);
    }
    else
    {
        window.location.href = "gameOver.html";
        
    }
}
    
    
  
    
    function submit() {
        
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var correct = 0;
       
// ifs de las respuestas

        if(question1 == "nintendo") {
            correct++;

        }

        if (question2 == "ff12") {
            correct++;
        }

        if (question3 == "badDudes") {
            correct++;
        }

        if (question4 == "goodGame") {
            correct++;
        }
// aquí empiezan los ifs de los resultados

        if (correct == 0) {
            
            $(".results").append("0!") ;
            
            
        }

        if (correct == 1) {
            $(".results").append("25%!");
            
        }

        if (correct == 2) {
            $(".results").append("50%!");
           
        }

        if (correct == 3) {
            $(".results").append("75%!");
        }

        if (correct == 4) {
            $(".results").append("100%!");
            clear();
        }



    }

    $( ".btn" ).click(function() {
        $(".results").css({
            "visibility" : "visible"
            
               
        });
        submit();
        count = 900000;
        $(".clock").css({
            "visibility" : "hidden"
        })
        $(this).prop('disabled', true);
        



    });





});