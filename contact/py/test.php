<?php

// Konfiguration für das Senden von E-Mails
$to_email = "vali.pinocasso@gmail.com";
$subject = "New Contact Form Submission";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Daten aus dem Formular erhalten
    $name = $_POST['name'];
    $company = $_POST['company'];
    $country = $_POST['country'];
    $subject = $_POST['subject'];

    // E-Mail-Nachricht erstellen
    $email_message = "Name: $name\nCompany: $company\nCountry: $country\n\nSubject:\n$subject";

    // E-Mail senden
    $headers = "From: vali.pinocasso@gmail.com";
    mail($to_email, $subject, $email_message, $headers);

    // Weiterleitung nach dem Absenden des Formulars
    header("Location: ../contact/index.html");
    exit();
}
?>