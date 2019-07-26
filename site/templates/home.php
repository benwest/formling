<?= snippet( 'header' ) ?>

<div class="grid home">
  <div class="s-col-12">
    <div class="excerpt excerpt--multiple" data-url="<?= $site -> url() ?>/home.json">
      <span class="excerpt__text">
        I am too sensible of the pains you have taken in the Art of Chymistry (<img class="excerpt__cover" src="<?= page('books') -> children() -> first() -> cover() -> toFile() -> url() ?>">)
      </span>
    </div>
  </div>
</div>

<?= snippet( 'footer' ) ?>
