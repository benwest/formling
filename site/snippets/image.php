<div style="padding-bottom: <?= ( $image -> height() / $image -> width() ) * 100 ?>%">
  <img
    class="fill"
    src="<?= $image -> resize( 2, null, 1 )->url() ?>"
    data-srcset="<?= $image -> srcset() ?>"
  >
</div>