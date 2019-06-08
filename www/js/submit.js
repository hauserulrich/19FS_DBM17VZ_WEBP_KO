$( "#teamsubmit" ).click(function() { 
    $.ajax({url : "../db/teamnames.php"}).done(current_group_id).fail(fail)
});

function current_group_id(data){
    var team_id = 0;
    var teams = JSON.parse(data);
    var anzahl_teams = teams.length;
    teamsubmit(team_id);
}

function teamsubmit(team_id) {
    var team = $("#team").val();
    if(team != ""){
        $.ajax({url : "../db/teamadd.php?name="+team+"&gruppen_id="+team_id+""}).fail(fail);
        document.getElementById("team").placeholder = "";
        document.getElementById("team").value = "";
        /*$.ajax({url: "../db/teamnames.php"}).fail(fail);*/
        init();
    }
    else{
        document.getElementById("team").placeholder = "Houston, We have a problem!";
    }
}
function fail() {
  alert('Houston, we have a problem!');  
}

function reloadPage()
{
	window.location.reload()
}
