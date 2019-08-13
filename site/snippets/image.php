<div style="padding-bottom: <?= ( $image -> height() / $image -> width() ) * 100 ?>%">
  <img
    class="fill"
    src="<?= $image -> resize( 300, null ) ->url() ?>"
    data-srcset="<?= $image -> srcset() ?>"
  >
</div>