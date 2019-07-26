<?php

function extract_sentence ( $text, $maxLength = 400 ) {
  $sentences = preg_split( '/(?<=[.?!])\s+(?=[A-Z0-9])/', $text );
  for ( $i = 0; $i < 100; $i++ ) {
    $sentence = $sentences[ array_rand( $sentences ) ];
    if ( strlen( $sentence ) < 20 || strlen( $sentence ) > $maxLength ) continue;
    return $sentence;
  }
  return '';
}