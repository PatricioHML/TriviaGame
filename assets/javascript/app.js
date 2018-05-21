$(document).ready(function() {
    
    

    

    function submit() {
        alert("submited");
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var correct = 0;
       

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

        console.log(correct);



    }

    $( ".btn" ).click(function() {
        $(".results").css({
            "visibility" : "visible"
            
        });
        submit();
        



    });





});