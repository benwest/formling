<?php $sentence = extract_sentence( $book -> fullText() -> value(), isset( $maxLength ) ? $maxLength : 400 ) ?>

<?php ob_start(); ?>
  <?php if ( isset( $title ) ) : ?>
    <div class="excerpt__title s-pad-top-1 m-pad-top-0">
      <em><?= $book -> title() ?></em><br>
      <?= $book -> author() ?>
    </div>
  <?php endif; ?>
<?php $title = ob_get_contents(); ob_end_clean(); ?>

<div class="excerpt excerpt--single" data-url="<?= $book -> url() ?>.json">
  <div class="fill">
    <span class="excerpt__text">
      <?= $sentence ?>
    </span>
    <?= $title ?>
  </div>
  <div class="excerpt__sizer">
    <span class="excerpt__text">
      <?= $sentence ?>
    </span>
    <?= $title ?>
  </div>
</div>