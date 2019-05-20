$(document).ready(function(){

    $("#start").click(function(){

        function winner() {
            $("#status").text("You Win :)");
            $(".boundary").off("mouseenter");
            $("#maze").off("mouseleave");
        }

        function loser() {
            $(".boundary").addClass("youlose");
            $("#status").text("You Lose :(");
        }


        // reset
        $(".boundary").removeClass("youlose");

        // start game
        $("#status").text("started.....");


        

        $(".boundary").on("mouseenter",function(){
           loser();
        });
        

        $("#maze").on("mouseleave",function(){
           loser();
        });

       

        $("#end").on("mouseenter",function(){
           winner();
        });

    });

});
