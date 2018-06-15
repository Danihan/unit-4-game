$(document).ready(function() {
    var goal = Math.floor(Math.random() * (100)) + 19;
	var c1 = Math.floor(Math.random() * (12)) + 1;
	var c2 = Math.floor(Math.random() * (12)) + 1;
	var c3 = Math.floor(Math.random() * (12)) + 1;
	var c4 = Math.floor(Math.random() * (12)) + 1;
    var wins = 0;
    var losses = 0;
	var score = 0;
    updateDom();

    function updateDom(){
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#goal").text(goal);
	    $("#score").text(score);
    }

    function newAnswer(){
		goal = Math.floor(Math.random() * (100)) + 19;
		c1 = Math.floor(Math.random() * (12)) + 1;
		c2 = Math.floor(Math.random() * (12)) + 1;
		c3 = Math.floor(Math.random() * (12)) + 1;
		c4 = Math.floor(Math.random() * (12)) + 1; 
		score = 0;
        $("#guesses").empty();
        updateDom();
    }
	
	$("img").click(function(){
		if(this.id === "c1"){
			score += c1;
		}
		if(this.id === "c2"){
			score += c2;
		}
		if(this.id === "c3"){
			score += c3;
		}
		if(this.id === "c4"){
			score += c4;
		}
		$("#score").text(score);
		checkMatch()
	});



    function checkMatch(userKey) {
        if (score === goal){
            wins++;
            $("#wins").text(wins)
            newAnswer();
        }
        else if (score > goal){
            losses++;
            $("#losses").text(losses);
            newAnswer();
        }
    }

});