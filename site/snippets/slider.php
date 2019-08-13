<?php $first = $images -> first() ?>
<?php $ratio = $first -> height() / $first -> width() ?>
<div class="slider">
  <div class="slider__track" style="width: <?= count( $images ) * 100 ?>%">
    <?php foreach ( $images as $image ): ?>
      <div class="slider__slide" style="width: <?= 100 / count( $images ) ?>%;">
        <div style="padding-bottom: <?= $ratio * 100 ?>%">
          <img
            class="slider__image contain"
            <?php if($ratio < 1): ?>
              src="<?= $image -> resize( 5 * $ratio, 5 ) ->url() ?>"
            <?php else: ?>
              src="<?= $image -> resize( 5, 5 * $ratio ) ->url() ?>"
            <?php endif; ?>
            data-srcset="<?= $image -> srcset() ?>"
          />
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>
<div class="slider__pagination">
  <?php foreach ( $images as $image ): ?>
    <div class="slider__pagination__bullet 
    <?= ($image == $images->first()) ? "slider__pagination__bullet--active" : '' ?>"></div>
  <?php endforeach; ?>
</div>