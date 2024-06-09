<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "alanbp98@gmail.com";
    $subject = "Pesan dari $name";
    $body = "Nama: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Pesan:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(405);
}
?>