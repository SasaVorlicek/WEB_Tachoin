<?php

$name = $_POST['jmeno'];
$email = $_POST['email'];
$phoneNumber = $_POST['tel'];
$message = $_POST['textarea'];

$subject = $_POST['PHPInput'];

$subjectWithoutNumber = substr($subject, 0, -1);
if (substr($subject, -1) === '1') {
    $full_subject = "Tachografy --- $subjectWithoutNumber";
} elseif (substr($subject, -1) === '2') {
    $full_subject = "Školení --- $subjectWithoutNumber";
} elseif (substr($subject, -1) === '3') {
    $full_subject = "Tachoin --- $subjectWithoutNumber";
} else {
    $full_subject = $subject;
}

$to = 'info@tachoin.cz';
$body = "Jméno zákazníka: $name\nE-mail zákazníka: $email\nTelefonní číslo zákazníka: $phoneNumber\nZpráva: \n$message";
$encodedName = mb_encode_mimeheader($name, 'UTF-8', 'B');
$headers = "From: $encodedName <$email>\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (mail($to, $full_subject, $body, $headers)) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}
?>