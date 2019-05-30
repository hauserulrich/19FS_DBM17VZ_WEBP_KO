$( "#delete" ).click(function() { 
    $.ajax({url : "../db/teamremove.php?all"})
    init();
});

/*
function teamdelete(team_id) {
    var team = $("#delete").val();
    if(team = ""){
        $.ajax({url : "../db/teamremove.php?all"}).fail(fail);
    }
    else{
        document.getElementById("team").placeholder = "Houston, We have a problem!";
    }
}
function fail() {
  alert('Houston, we have a problem!');  
}
/*
$(document).ready(function()
    {
        $( "#delete" ).click(function()
        {
            var deleteId = $(this).attr('id');
            $.ajax({
                type:'GET',
                url:'../db/teamremove.php?id=42 ',
                success: function(data)
                {
                    //reload page
                    location.reload();
                }
            });
        });
    });


/*

$( "#delete" ).click(function() { 
    $.ajax({url : "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_KO/db/teamremove.php"}).done(current_group_id).fail(fail)
});

function deleteTeam(data)
{
    $.ajax(
    {
        type: "DELETE",
        success: function(result)
        {
            if(result == "Ok") alert("The comment is successfuly deleted");
            else alert("The following error is occurred: "+result);
        }
    });

// Update Liste "Folgende Teams sind dabei" mit neuem Team
$.ajax({url: "http://767727-7.web1.fh-htwchur.ch/19FS_DBM17TZ_WEBP_KO/db/teamnames.php"}).done(receivedteamnames).fail(fail);
}

*/