<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];


$mailheader = "Form:" .$name."<".$email.">\r\n";

$recipient = "m.fouad@outlook.fr";

mail($recipient, $subject, $message, $mailheader)
or die ("Error!");

echo '

<!DOCTYPE html>
<html lang="fr" dir="ltr">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./sass/style.css" />
    <link rel="stylesheet" href="./css/all_awosame_pro.css" />
    <!-- -------------------------------------icons-Google--------------------------------------- -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"">

    <!-- -------------------------------------font-Google-poppins ---------------------------------------- -->
    <!-- " Poppins", sans-serif; -->
    <link rel=" stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
  
        <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:wght@100&display=swap">

    <link rel="stylesheet"
        href="//db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular" />

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" />
    <!-- ------------------------------------- js ---------------------------------------- -->

    <title>Neuro FeedBack</title>
</head>

<main>
    <div class="contact">
        <h2>Merci de me contacter. Je vous répondrai dans les plus brefs délais</h2>
        <p class="back">Retournez à la<a href="index.html">Home page</a></p>
    </div>

</main>




';

?>