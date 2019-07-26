<?php

$book = page( 'books' ) -> children() -> shuffle() -> first();
$cover = $book -> cover() -> toFile();

echo json_encode([
  'text' => extract_sentence( $book -> fullText() -> value() ),
  'url' => $book -> url(),
  'cover' => [
    'ratio' => $cover -> height() / $cover -> width(),
    'srcset' => $cover -> srcset()
  ]
]);
