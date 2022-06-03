<?php

require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;

foreach ($_POST['formData'] as $input) {

  $value = $input['name'];
  $$value = $input['value'];
}

$nome =  mb_strtoupper($nome, 'utf-8');
$email = mb_strtoupper($email, 'utf-8');
$telefone = mb_strtoupper($telefone, 'utf-8');

$body = "
<html>
  <head>
    <meta charset=\"utf-8\">
    <title>SITE FHSX</title>
  </head>
  <style>
    *{font-family: 'Arial', sans-serif; line-height: 22px; }
  </style>
  <body>
    <table align='center' width='600px' style='border: 1px solid #ddd;' cellpadding='0' cellspacing='0'>
      <tr>
        <td>
            <table width='600px' cellpadding='0' cellspacing='0'>
                   <tr>
                   <td>
                        <img style='display: block; width: 600px;' src='https://factorhumanusexperience.com/assets/header-fhs.jpg' alt='FHSX'>
                   </td>
                  </tr>
                  <tr>
                    <td style='text-align: center; padding-top: 40px; padding-bottom: 20px;'>
                      <strong style='color: #1f4a73; font-size: 20px;'>SOLICITAÇÃO DE CONTATO</strong>
                    </td>
                  </tr>
                  <tr>
                    <td style='padding: 20px;'>
                      <strong>Nome:</strong> $nome<br>
                      <strong>E-mail:</strong> $email<br>
                      <strong>Mensagem:</strong> $telefone<br>
                    </td>
                  </tr>
            </table>
        </td>
      </tr>
    </table>
  </body>
</html>
";



$mail = new PHPMailer();
$mail->IsSMTP(); // enable SMTP
$mail->CharSet = 'UTF-8';
$mail->SMTPDebug = 0; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
//$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "smtp.sendgrid.net";
$mail->Port = 587; // or 587
$mail->IsHTML(true);
$mail->Username = "apikey";
$mail->Password = "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";
$mail->SetFrom("contatofhsx@gmail.com");
$mail->Subject = "Solicitação de Contato - Site FHSX ";
$mail->Body = $body;
$mail->AddAddress('faleconosco@factorhumanus.com');

if (!$mail->Send()) {
  //var_dump($mail->ErrorInfo);
  exit('0');
} else {
  exit('1');
}
