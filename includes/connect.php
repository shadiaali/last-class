<?php
$user = "root";
$pw = "root"; //blank for windows

try {
  $conn = new PDO('mysql:host=localhost;dbname=vue_video', $user, $pw); //exactly the same as sql just a different syntax. passing the db in with a user and password and connecting
  var_dump($conn); //checking if connected
} catch (PDOException $exception) {
  echo 'connect error!' . $exception->getMessage(); //show what broke
}

() => { //do something. arrow function

?>
