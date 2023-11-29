<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $company = $_POST["company"];
  $country = $_POST["country"];
  $subject = $_POST["subject"];

  $to = "cases@gmx.de";  // Replace with your email address
  $subject = "New Contact Form Submission";
  $message = "Name: $name\nCompany: $company\nCountry: $country\n\nSubject:\n$subject";

  // Use additional headers if needed
  $headers = "From: cases@gmx.de";  // Replace with your email or leave it empty

  // Send the email
  mail($to, $subject, $message, $headers);

  // Redirect to a thank you page or back to the main page
  header("Location: ../contact/index.html");  // Create thank_you.html with your thank you message
  exit();
}
?>