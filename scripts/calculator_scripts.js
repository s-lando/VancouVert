$(document).ready(function(){

    $("#food-follow-up").hide();

    $('#food-form').change(function(){
        let answer = $("input[name='veg-question']:checked").val();
        
        if (answer == "no") {

            $('#food-follow-up').slideDown("fast");
        }

        else {
            $("#food-follow-up").hide("fast");
        }
    });

});
