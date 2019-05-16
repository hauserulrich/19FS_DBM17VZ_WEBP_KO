<?php
require_once "server.php";

//return format error
//error element: table entry causing the error (missing or format problem)
function sendFormatError($error_element) {
	http_response_code(404);
	echo "error in parameters: " . $error_element;
	die(); //end of script
}

//test, if a parameter exists
function testParameter($paramName) {
	if (!array_key_exists($paramName, $_GET)) {
		sendFormatError($paramName);
	}
}

//test all parameters for existence
function testGet() {
	$parameters = ["id", "status"];
	foreach ($parameters as $parameter) {
		testParameter($parameter);
	}
}

try
{
	//connect
	$db = new PDO("mysql:host=$db_server;dbname=$db_name;charset=utf8", $db_user, $db_pw,
		array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
} catch (PDOException $ex) {
	http_response_code(406);
	echo "{'error': 'connecting to db $dbname on $db_server failed'}";
	die(); //end of script
}

testGet();

$status = false;
$id = $_GET['id'];
switch ($_GET['status']) {
case 'win':
	$status = true;
	break;
case 'loose':
	$status = false;
	break;
default:
	echo "{'error': 'status not win or loose: " . $_GET['status'] . "}";
	die(); //end of script
}

try
{
	//add a result to a given team
	$sqlQuery = "UPDATE `19FS_DBM17TZ_WEBP_KO_team` SET status = '$status' WHERE id = '$id'";
	$db_result = $db->query($sqlQuery);
	if ($db_result->rowCount() > 0) {
		echo "{'error': 'OK'}";
	} else {
		echo "{'error': 'SQL: update of member failed', 'query': '" . $sqlQuery . "'}";
	}
} catch (PDOException $ex) {
	http_response_code(406);
	echo "{'error': 'SQL: " . $ex->getMessage() . "', 'query': '" . $sqlQuery . "'}";
	die(); //end of script
}
?>
