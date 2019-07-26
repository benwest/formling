<?= snippet( 'header' ) ?>

<div class="grid">
  <div class="s-col-12 s-gap-bottom-2">
    <?= snippet( 'excerpt', [ 'book' => $page, 'title' => true ] ) ?>
  </div>
  <?php if( $page -> bookImages() -> isNotEmpty() ) : ?>
    <div class="s-col-12 s-gap-bottom-2">
      <?= snippet('slider', [ 'images' => $page -> bookImages() -> toFiles() ] ) ?>
    </div>
  <?php endif; ?>
  <div class="s-col-12 m-col-6 s-gap-bottom-1">
    <?php foreach ( $page -> purchasingOptions() -> toStructure() as $option ): ?>
      <a href="#" 
      class="snipcart-add-item purchase-option db s-gap-bottom-1"
      data-item-id="<?= $page->slug() .'-'. Str::slug($option->name()) ?>"
      data-item-name="<?= $page-> title() ?>: <?= $option->name() ?>"
      data-item-price="<?= $option->price() ?>"
      data-item-url="<?= $page->url() ?>"
      data-item-description="<?= $page-> title() ?>: <?= $option->description() ?>"
      >
        <div><?= $option -> price() ?>£</div>
        <div class="s-pad-left-2">
          <?= $option -> name() ?>
          <?php if ( $option -> description() -> isNotEmpty() ) : ?>
            <br>
            <?= $option -> description() ?>
          <?php endif; ?>
        </div>
      </a>
    <?php endforeach; ?>
  </div>
  <div class="s-col-12 m-col-6 s-gap-bottom-2">
    <article>
      <?= $page -> description() -> kt() ?>
    </article>
  </div>
</div>

<?= snippet( 'footer' ) ?>
