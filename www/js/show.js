function init(){
// teams anzeigen

$.ajax(
    {
        url: "../db/teamnames.php"
    }).done(receivedteamnames).fail(fail);
}

function receivedteamnames(data){
	var teammembers = JSON.parse(data);
	var content = "";
	// Liste Erstellen
	if(teammembers.length != 0){
	    for(var i in teammembers) {
	        content += '<li class="list-group-item">' + teammembers[i] + "</li>";
	    }
	}
	// No Teams
	else {
	    content += '<div class="alert alert-warning" role="alert">No teams found. Just add some!</div>';
	}

	// Display Groups
	$("#assignedgroups").html(content);
}

// fail message
function fail(){
	alert("Houston, we have a problem");
}

window.onload=init;