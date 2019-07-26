<!DOCTYPE html>
<html
  class="page--<?= $page -> template() ?>"
  lang="en"
  style="
    --background-color: <?= $site -> backgroundColor() ?>;
    --text-color: <?= $site -> textColor() ?>
  "
>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/assets/scss/style.css" type="text/css" />
</head>
<body>
  <div class="layout s-gap-top-2">
    <div class="layout__sidebar">
      <?= snippet( 'nav' ) ?>
      <?= snippet( 'book-list' ) ?>
    </div>
    <div class="layout__main">
      <?php snippet('about', ['text' => page('about') -> text() -> kt() ]) ?>