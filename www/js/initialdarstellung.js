//Teamcount
var teamsremaining=0;
var removereq=0;
var teamCount=0;
//Weiterleitung nach Finalspiel
function init(){
	if(0<removereq)
		{
			window.setTimeout(init,100);
			return;
		}
    $("#teams_table").html("<tr><th>Team 1</th><th>Ergebnis</th><th>Team 2</th></tr>");
	$.ajax({url: "../db/teams.php"}).done(recievedteamnames).fail(failedteamnames);
    
    if(teamsremaining==2)
        {
            window.location.href = "../html/final_page.html"
        }
}
//Teampaarungen
function recievedteamnames(data){
	teams=JSON.parse(data);
        teams.forEach(addTeamName);
}
function addTeamName(team,teamCount)
{
	if(0==teamCount%2)
		{
			jQuery('<tr></tr>', 
			{
    			id: "tabrow"+teamCount
    		})
			.appendTo("#teams_table");
			jQuery('<td></td>', 
			{
    			id: "tabteam"+teamCount
    		})
			.appendTo("#tabrow"+teamCount);
			$("#tabteam"+teamCount)
				.html(team.name);
			jQuery('<input/>', 
			{
    			id: "teamleft",
				team_id: "'"+team.id+"'",
				type: "number",
				min: "0",
				name:"score",
				style:"width:50px;float:left;",
				class:"form-control team"
    		})
			.appendTo("#tabrow"+teamCount);
		}
	else{
			jQuery('<input/>', 
			{
    			id: "teamright",
				team_id: "'"+team.id+"'",
				type: "number",
				min: "0",
				name:"score",
				style:"width:50px;float:right;",
				class:"form-control team"
    		})
			.appendTo("#tabrow"+(teamCount-1));
			jQuery('<td></td>', 
			{
    			id: "tabteam"+teamCount
    		})
			.appendTo("#tabrow"+(teamCount-1));
			$("#tabteam"+teamCount)
				.html(team.name);
		}
}
//Fehler bei Teams laden
function failedteamnames(){
	alert("fail");
}
//remove Teams
window.onload=init;
     $('#teamsubmit').on('click', function (e) {
          e.preventDefault();
		 		$("#teams_table").find("tr").each(function(e)
				{
                    if ($(this).find("#teamleft").val()>$(this).find("#teamright").val()) {
				   	removereq++;
                    teamsremaining++;
				   $.ajax({url: "../db/teamremove.php?id="+$(this).find("#teamright").attr("team_id")}).done(removereturned).fail(removereturned);
                    } 
					else if ($(this).find("#teamleft").val()<$(this).find("#teamright").val()) {
				   	removereq++;
                    teamsremaining++;
				   $.ajax({url: "../db/teamremove.php?id="+$(this).find("#teamleft").attr("team_id")}).done(removereturned).fail(removereturned);
                    }
                    else {
                    teamsremaining++;
                    }
               });
     		init();
            if (teamsremaining>2)
                {
                    teamsremaining=0;
                }
            else 
                {
                    
                }
	 });
	function removereturned(){
		removereq--;
	}