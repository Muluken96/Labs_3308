
var players = [{name:"John Doe", img: "../resources/img/player1.jpg", alt:"Image of Player 1", year:"Sophomore", major:"Art", games_played: 23, pass_yards: 435, rushing_yards: 200, receiving_yards: 88},
				{name:"James Smith", img: "../resources/img/player2.jpg", alt:"Image of Player 2", year:"Junior", major:"Science", games_played: 17, pass_yards: 192, rushing_yards: 102, receiving_yards: 344},
				{name:"Samuel Phillips", img: "../resources/img/player3.jpg", alt:"Image of Player 3", year:"Freshman", major:"Math", games_played: 8, pass_yards: 35, rushing_yards: 70, receiving_yards: 98},
				{name:"Robert Myers", img: "../resources/img/player4.jpg", alt:"Image of Player 4", year:"Senior", major:"Computer Science", games_played: 31, pass_yards: 802, rushing_yards: 375, receiving_yards: 128}];



function viewStudentStats(id, toggle){
	var id=Number(document.theForm.elements[0].value);
	var toggle=Number(document.theForm.elements[1].value)
	var  Status = document.getElementById("studentStatusYes").innerHTML;
	if (Status == 1)
	{
		Status = Yes;
	}
	elseif(Status == 0)
	{
		Satus = No;
	}

	document.getElementById("studentStatusYes").innerHTML = status


<script>
function changeColor(color){
	document.getElementById("changeColor").style.color = "blue"; // I am stucked on here
	document.getElementById("changeColor").style.fontFamily = "red";
	document.getElementById("changeColor").style.fontSize = "green";

}
</script>


<script>
	function loadStatsPage(){
		var table = document.getElementById("p_table");
		var row_counter;
		var col_counter;
		var cell_value;
		for(row_counter = 0; row_counter < table.rows.length; row_counter++)
		{
			for(col_counter = 0; col_counter < table.rows[row_counter].cells.length; col_counter++)
			{
				cell_value = table.rows[row_counter].cells[col_counter].innerHTML;
				table.rows[row_counter].cells[col_counter].innerHTML = cell_value;
			}
		}
	}
</script>

<script>
function loadPlayersPage(){
	var d = document.getElementById("player_selector");
	for (var player = 0; player < players.length; player++){
		var anchor = document.createElement("a");
		anchor.href = "home.html";
		anchor.innerHTML = plyers[player].name;
		anchor.onclock = switchPlayers(player);
	}
	d.innerHTML = console.log(drop);
}

</script>

<script>
function switchPlayers(player){
	document.getElementById("p_year").innerHTML = players[player].name;
	document.getElementById("p_major").innerHTML = players[player].major;
	document.getElementById("g_palayed").innerHTML = players[player].games_played;
	document.getElementById("player-img").innerHTML = players[player].img;
	document.getElementById("p_yards").innerHTML = players[player].pass_yards;
	document.getElementById("r_yards").innerHTML = players[player].rushing_yards;
	document.getElementById("rec_yards").innerHTML = players[player].receiving_yards;

	avg_p_yards = (players[player].pass_yards)/(players[player].games_played);
	avg_r_yards = (players[player].rushing_yards)/(players[player].games_played);
	avg_rec_yards = (players[player].receiving_yards)/(players[player].games_played);
}
</script>
