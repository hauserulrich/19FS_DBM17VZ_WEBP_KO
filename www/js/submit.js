//Action when you hit submit
$( "#teamsubmit" ).click(function() { 
    $.ajax({url : "../db/teamnames.php"}).done(current_team_id).fail(fail)
});
//Number Team ID
function current_team_id(data){
    var team_id = 0;
    var teams = JSON.parse(data);
    var anzahl_teams = teams.length;
    teamsubmit(team_id);
}
//Submit entry to php
function teamsubmit(team_id) {
    var team = $("#team").val();
    if(team != ""){
        $.ajax({url : "../db/teamadd.php?name="+team+"&team_id="+team_id+""}).fail(fail);
        //Remove value from entry field once value has been added
        document.getElementById("team").value = "";
        init();
    }
    //Error Message
    else{
        document.getElementById("team").placeholder = "Houston, We have a problem!";
    }
}
//Fail Alert
function fail() {
  alert('Houston, we have a problem!');  
}

