# WEB-API of DB, technical documentation, project 19FS_DBM17VZ_WEBP_KO

## Data format:
The returned data format is JSON.

## DB template
The DB structure is available in the file gruppenspiel.sql
The returned JSON objects adhere to the column headers corresponding to the SQL query matching the http request.

## Access
all URL's are given as a php target in the folder `db` of the web page itself.

Example URL: `all.php` -> location: `http://server/db/all.php`

At present the server is located at: http://767727-7.web1.fh-htwchur.ch/19FS_DBM17VZ_WEBP_KO

## Registration/Team

### Enter team

URL: teamadd.php?name=xxxx

return: statement object

* in case of success, the id of the new team is returned
* in case of failure the statement holds error information

Example: `teamadd.php?name=name1`

### Request teams

URL: teamnames.php

return: statement object

* in case of success, the team names are returned as an array
* in case of failure the statement holds error information

Example: `teamnames.php`

## Teams in tables

### Get teams

URL: teams.php

return: statement object

* in case of success, the teams are returned with id and status as an array of team objects
* in case of failure the statement holds error information

Example: `teams`

### Remove team

URL: teamremove.php?id=xy

return: statement object

* in case of success, the id of the removed team is returned
* in case of failure the statement holds error information

Example: `teamremove.php?id=3`

URL: teamremove.php?all

return: statement object

* in case of success, all teams are removed
* in case of failure the statement holds error information

Example: `teamremove.php?all`

### Add result

URL: resultadd.php?id=xy&status=win/loose

return: statement object

* in case of success, the id of the removed team is returned
* in case of failure the statement holds error information

Example: `resultadd.php?id=4&status=win`

