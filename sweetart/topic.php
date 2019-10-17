<?php
header('Content-type: application/json');
header('Access-Control-Allow-Origin: *');  

$dbHost = 'c248um.forpsi.com';
$dbUsername = 'f92189';
$dbPassword = 'uk9mf37';
$dbName = 'f92189';

//Create connection and select DB
$db = new mysqli($dbHost, $dbUsername, $dbPassword, $dbName);

if($db->connect_error){
    die("Unable to connect database: " . $db->connect_error);
}

$cat_id = $_GET['id'];
$sql = "SELECT * FROM `topic` LEFT OUTER JOIN photo ON photo.topic_id = topic.id 
            WHERE category_id=$cat_id ORDER BY date DESC, topic.id, ord";
//echo $sql;

$result = $db->query($sql); 
//$sth = mysqli_query("SELECT ...");
$rows = array();
while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
}

echo json_encode($rows);
?>