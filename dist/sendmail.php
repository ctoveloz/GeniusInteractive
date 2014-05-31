<?php
// save vars:
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];
// define recipe email:
$dest = "cristiano.veloz@majesticmedia.ca"; 
 
// safe spam site identification:
$headers = "From: $company <$email>\r\n";  
$headers .= "X-Mailer: PHP5\n";
$headers .= 'MIME-Version: 1.0' . "\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
 
// define subject & body message
$subject = "Contact from Genius Interactive";
$body = "Name : ".$name."<br>";
$body .= "Phone: ".$phone."<br>";
$body .= "Email: ".$email."<br>";
$body .= "Message: ".$message;
 
// validate blank spaces
if($name != '' && $email != '' && $message != ''){
    mail($dest,$subject,$body,$headers); //ENVIAR!
}
else {
  alert('ERROR');
}
?>