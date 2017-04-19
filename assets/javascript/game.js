$(document).ready(function() {

            // generates random number between 1 and 100
            function myFunction() {
                var x = document.getElementById("demo")
                x.innerHTML = Math.floor((Math.random() * 100) + 1);
            }

            var TheTotal = 0;
            var wins = 0;
            var losses = 0;
            //  Decaring variables for tallies
            $('#numberWins').text(wins);
            $('#numberLosses').text(losses);


            //adds the wins to the userTotal
            function win() {
                alert("You fat ass");
                wins++;
                $('#numberWins').text(wins);
                
            }
            //addes the losses to the userTotal
            function loser() {
                alert("skinny");
                losses++;
                $('#numberLosses').text(losses);
               
            }

            //sets win/lose conditions
            if (userTotal == Random) {
                win();
            } else if (userTotal > Random) {
                loser();
            }



            var theTotal = 0;
            $('.btn1').click(function() {
                theTotal = Number(theTotal) + Number($(.
                    "btn1").attr("value"));
                $('.total').text("Total: " + theTotal);
            });

            $('.btn2').click(function() {
                theTotal = Number(theTotal) + Number($(this).val());
                $('.total').text("Total: " + theTotal);
            });

            $('.btn3').click(function() {
                theTotal = Number(theTotal) + Number($(this).val());
                $('.total').text("Total: " + theTotal);
            });

            $('.btn4').click(function() {
                theTotal = Number(theTotal) + Number($(this).val());
                $('.total').text("Total: " + theTotal);
            });

            // generates random number between 1 and 100
            function myFunction() {
                var x = document.getElementById("demo")
                x.innerHTML = Math.floor((Math.random() * 100) + 1);
            }


            // outside function
            $('.total').text("Total: " + theTotal);



        }
