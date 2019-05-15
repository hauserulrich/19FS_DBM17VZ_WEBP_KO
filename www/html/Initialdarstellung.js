var teamCount=0;
$(document).ready(init);

function init(){
    $.getJSON("teams.json", "", fileOpened);
  }

  function fileOpened(data,status,request){
        var teams_data = '';
        $.each(data, function(key, value){
if(0==teamCount%2)
{
teams_data += '<tr>';
teams_data += '<td>'+value.name+'</td>';
teams_data += '<td>'+'<input id="teamleft" team_id="'+value.id+'" type="number" min="0" name="score" style="width:50px;float:left;" class="form-control" />';
}
else{
        teams_data += '<input  id="teamright" team_id="'+value.id+'" type="number" min="0" name="score" style="width:50px;float:right;" class="form-control" />'+'</td>'
teams_data += '<td>'+value.name+'</td>';
teams_data += '</tr>';
}
teamCount++;
        });
        $('#teams_table').append(teams_data);
    }