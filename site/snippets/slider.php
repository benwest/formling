<?php $first = $images -> first() ?>
<?php $ratio = $first -> height() / $first -> width() ?>
<div class="slider">
  <div class="slider__track" style="width: <?= count( $images ) * 100 ?>%">
    <?php foreach ( $images as $image ): ?>
      <div class="slider__slide" style="width: <?= 100 / count( $images ) ?>%;">
        <div style="padding-bottom: <?= $ratio * 100 ?>%">
          <img
            class="slider__image contain"
            src="<?= $image -> resize( 2, null, 1 )->url() ?>"
            data-srcset="<?= $image -> srcset() ?>"
          />
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>