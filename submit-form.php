<?php

$name = $_POST['jmeno'];
$email = $_POST['email'];
$phoneNumber = $_POST['tel'];
$message = $_POST['textarea'];
$subject = $_POST['subject'];

$to = 'info@tachoin.cz';
$body = "Jméno zákazníka: $name\nE-mail zákazníka: $email\nTelefonní číslo zákazníka: $phoneNumber\nZpráva: \n$message";
$encodedName = mb_encode_mimeheader($name, 'UTF-8', 'B');
$headers = "From: $encodedName <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>