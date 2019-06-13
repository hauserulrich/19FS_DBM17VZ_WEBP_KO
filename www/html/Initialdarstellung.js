//Teamcount
var teamsremaining = 0;
var removereq = 0;
var teamCount = 0;
//Weiterleitung nach Finalspiel
function init() {
    if (0 < removereq) {
        window.setTimeout(init, 100);
        return;
    }
    $("#teams_table").html("<tr><th>Team 1</th><th>Ergebnis</th><th>Team 2</th></tr>");
    $.ajax({
        url: "../db/teams.php"
    }).done(recievedteamnames).fail(failedteamnames);

    if (teamsremaining == 2) {
        window.location.href = "../final_page/index.html"
    }
}
//Teampaarungen
function recievedteamnames(data) {
    teams = JSON.parse(data);
    teams.forEach(addTeamName);
}
//Team Tabelle Aufbauen
function addTeamName(team, teamCount) {
    // Wenn das Team gerade ist
    if (0 == teamCount % 2)
    // wird das html für die Tabelle in der Linken Spalte generiert
    {
        jQuery('<tr></tr>', {
            id: "tabrow" + teamCount
        })
            .appendTo("#teams_table");
        jQuery('<td></td>', {
            id: "tabteam" + teamCount
        })
            .appendTo("#tabrow" + teamCount);
        $("#tabteam" + teamCount)
            .html(team.name);
        jQuery('<input/>', {
            id: "teamleft",
            team_id: "'" + team.id + "'",
            type: "number",
            min: "0",
            name: "score",
            style: "width:50px;float:left;",
            class: "form-control team"
        })
            .appendTo("#tabrow" + teamCount);
    }
    // Wenn das Team ungerade ist
    else {
        // wird das html für die Tabell in der Rechten Spalte generiert
        jQuery('<input/>', {
            id: "teamright",
            team_id: "'" + team.id + "'",
            type: "number",
            min: "0",
            name: "score",
            style: "width:50px;float:right;",
            class: "form-control team"
        })
            .appendTo("#tabrow" + (teamCount - 1));
        jQuery('<td></td>', {
            id: "tabteam" + teamCount
        })
            .appendTo("#tabrow" + (teamCount - 1));
        $("#tabteam" + teamCount)
            .html(team.name);
    }
}
//Fehler bei Teams laden
function failedteamnames() {
    alert("fail");
}

window.onload = init;

// Verlierer Teams entfernen
$('#teamsubmit').on('click', function (e) {
    e.preventDefault();
    // finde alle zeilen in der teams tabelle und loope über diese
    $("#teams_table").find("tr").each(function (e) {
        // wenn das linke team höhere punkte als das rechte team hat
        if ($(this).find("#teamleft").val() > $(this).find("#teamright").val()) {
            removereq++;
            teamsremaining++;
            // wird das rechte team via ajax request entfernt
            $.ajax({
                url: "../db/teamremove.php?id=" + $(this).find("#teamright").attr("team_id")
            }).done(removereturned).fail(removereturned);
            // wenn das rechte team höhere punkte als das linke hat
        } else if ($(this).find("#teamleft").val() < $(this).find("#teamright").val()) {
            removereq++;
            teamsremaining++;
            // wird das linke entfernet
            $.ajax({
                url: "../db/teamremove.php?id=" + $(this).find("#teamleft").attr("team_id")
            }).done(removereturned).fail(removereturned);
        } else {
            teamsremaining++;
        }
    });
    init();
    if (teamsremaining > 2) {
        teamsremaining = 0;
    }
});

function removereturned() {
    removereq--;
}
