    $(document).ready(function() {
        $.ajax({
          //type: "GET",
          //dataType: 'json',
          url: "../db/teamnames.php",
          //data: name,
          //data:{name:name},
          success: function(data) {
            //var data_arr = JSON.parse(name);
            var winnerteam = data.replace('"',"").replace('"',"").replace('[',"").replace(']',"");
            //var winnerteam.replaceAll("k","s");
            //console.log(name[5,2])
            //alert(html.name);
            $("#h1").html(winnerteam)
          }


        });
    });