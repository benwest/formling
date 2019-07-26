<div class="grid book-list s-gap-bottom-2">
  <?php $index = 1; ?>
  <?php foreach ( $pages -> find('books') -> children() -> visible() as $book ) : ?>
      
      <div class="s-col-12 book-list__excerpt">
        <?= snippet( 'excerpt', [ 'book' => $book ] ) ?>
      </div>
      
      <?php ob_start() ?>
        <div class="book-list-item__cover">
          <div class="book-list-item__index">
            <?= $index ?>
          </div>
          <?php if ( $book -> cover() -> isNotEmpty() ) : ?>
            <img
              src="<?= $book -> cover() -> toFile() -> resize( 2, null, 1 )->url() ?>"
              data-srcset="<?= $book -> cover() -> toFile() -> srcset() ?>"
            />
          <?php endif; ?>
        </div>
        <div class="book-list-item__label s-pad-top-1 s-pad-left-1">
          <em><?= $book -> title () ?></em><br/>
          <?= $book -> author() ?><br/>
          <?php if($book->forthcoming()->bool() == false): ?>
            (<?= $book -> datePublished() -> toDate('Y') ?>)
          <?php else: ?>
            <em>(Forthcoming)</em>
          <?php endif; ?>
        </div>
      <?php $content = ob_get_contents(); ob_end_clean() ?>
      
      <?php if($book->forthcoming()->bool() == false): ?>
        <a class="s-col-12 book-list-item s-pad-bottom-1" href="<?= $book -> url () ?>">
          <?= $content ?>
        </a>
      <?php else: ?>
        <div class="s-col-12 book-list-item book-list-item--forthcoming s-pad-bottom-1">
          <?= $content ?>
        </div>
      <?php endif; ?>
      
    <?php $index++ ?>
  <?php endforeach; ?>
</div>

