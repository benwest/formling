<?= snippet( 'header' ) ?>

<div class="grid">
  <?php $index = 1; ?>
  <?php foreach ( $pages -> find('books') -> children() -> visible() as $book ) : ?>
    <?php ob_start() ?>
      <?= $index ?>
      <div class="s-pad-left-2 s-pad-top-1">
        <?php if ( $book -> cover() -> isNotEmpty() ) : ?>
          <div class="s-pad-bottom-1">
            <?= snippet('image', [ 'image' => $book -> cover() -> toFile() ]) ?>
          </div>
          <em><?= $book -> title () ?></em><br/>
          <?= $book -> author() ?><br/>
          <div class="books__blurb s-pad-top-1">
              <?= $book -> blurb() ?><br/>
          </div>
          <?php if($book->forthcoming()->bool() == false): ?>
            (<?= $book -> datePublished() -> toDate('Y') ?>)
          <?php else: ?>
            <em>(Forthcoming)</em>
          <?php endif; ?>
        <?php endif; ?>
      </div>
    <?php $content = ob_get_contents(); ob_end_clean() ?>
    <?php if($book->forthcoming()->bool() == false): ?>
      <a class="s-col-6 l-col-4 xl-col-4 s-pad-bottom-2" href="<?= $book -> url () ?>">
        <?= $content ?>
      </a>
    <?php else: ?>
      <div class="s-col-6 l-col-4 xl-col-4 s-pad-bottom-2">
        <?= $content ?>
      </div>
    <?php endif; ?>
    <?php $index++ ?>
  <?php endforeach; ?>
  
</div>

<?= snippet( 'footer' ) ?>
