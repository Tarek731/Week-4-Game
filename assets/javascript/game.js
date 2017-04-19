$(document).ready(function() {
            var x = document.getElementById("demo");
			var randomNumber;
			setRandom();
            // generates random number between 1 and 100
             function setRandom() {
            	console.log("running setRandom")
            	randomNumber = Math.floor((Math.random() * 100) + 1);
                x.innerHTML = randomNumber;
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
                alert("skinny ass");
                losses++;
                $('#numberLosses').text(losses);

            }

            //sets win/lose conditions
            function checkTotal(){

	            if (theTotal == randomNumber) {
	                win();
	            } else if (theTotal > randomNumber) {
	                loser();
	            }

            }


// adds total for buttons pressed in html
            var theTotal = 0;
            $('.btn1').click(function() {
               console.log("button 1 was cliked");
                theTotal = Number(theTotal) + Number($(".btn1").attr("value"));
               checkTotal()
                $('.total').text("YOU ONLY ATE" + theTotal);
            });

            $('.btn2').click(function() {
                theTotal = Number(theTotal) + Number($(this).val());
                checkTotal()
                $('.total').text("YOU ONLY ATE" + theTotal);
            });

            $('.btn3').click(function() {
                theTotal = Number(theTotal) + Number($(this).val());
                checkTotal()
                $('.total').text("YOU ONLY ATE" + theTotal);
            });

            $('.btn4').click(function() {
                theTotal = Number(theTotal) + Number($(this).val());
                checkTotal()
                $('.total').text("YOU ONLY ATE" + theTotal);
            });

            // generates random number between 1 and 100
            function myFunction() {
                var x = document.getElementById("demo")
                x.innerHTML = Math.floor((Math.random() * 100) + 1);
            }


            // outside function
            $('.total').text("YOU ONLY ATE " +  theTotal);



})


