<?php

function extract_sentence ( $text, $maxLength = 400 ) {
  $sentences = preg_split( '/((?<=[.?!\n])\s+(?=[A-Z])|\n+)/', $text );
  for ( $i = 0; $i < 100; $i++ ) {
    $sentence = $sentences[ array_rand( $sentences ) ];
    if ( strlen( $sentence ) < 20 || strlen( $sentence ) > $maxLength ) continue;
    return $sentence;
  }
  return '';
}