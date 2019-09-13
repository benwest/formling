<?= snippet( 'header' ) ?>


  <?php $index = 1; ?>
  <?php foreach ( $pages -> find('books') -> children() -> visible() as $book ) : ?>

    <div class="grid s-pad-bottom-1">
      
      <?php if ( $book -> cover() -> isNotEmpty() ) : ?>
        <div class="s-pad-bottom-1 s-col-10 m-col-5">
             <?= $index ?>
          <div class="books__image s-pad-top-1  s-pad-left-1">
            <a href="<?= $book->url() ?>">
             <?= snippet('image', [ 'image' => $book -> cover() -> toFile() ]) ?>
             </a>
          </div>
         
        </div>

        <div class="s-col-12 m-col-7 s-pad-bottom-2">
          <div class="books__blurb s-pad-left-1 m-pad-top-2 s-pad-top-1">
           <?php if($book->forthcoming()->bool() == false): ?>
              (<?= $book -> datePublished() -> toDate('Y') ?>)
            <?php else: ?>
              <em>(Forthcoming)</em>
            <?php endif; ?>
             <br/>
            <em><?= $book -> title () ?></em><br/>
            <?= $book -> author() ?><br/>
            <br/>
            <?php if($book->blurb()->isNotEmpty()): ?>
              <?= $book -> blurb() ?><br/>
            <?php endif; ?>
          </div> 
        </div>
        
 
      <?php endif; ?>
 
  </div>
  <?php $index++; ?>
  <?php endforeach; ?>
  


<?= snippet( 'footer' ) ?>
