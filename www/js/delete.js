//Remove all teams on Delete
$( "#delete" ).click(function() { 
    $.ajax({url : "../db/teamremove.php?all"})
    init();
});