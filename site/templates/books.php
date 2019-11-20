<?= snippet( 'header' ) ?>
  
  <?php
    $books = $pages -> find('books') -> children() -> visible();
    $coverRatios = $books -> toArray( function ( $book ) {
      $cover = $book -> cover() -> toFile();
      if ( !$cover ) return 0;
      return $cover -> height() / $cover -> width();
    });
    $maxRatio = max( array_values( $coverRatios ) );
  ?>

  <div class="grid m-pad-top-1 books">
    <?php $index = 1; ?>
    <?php foreach ( $books as $book ) : ?>
      <a class="s-col-6 l-col-4 xl-col-3 db" href="<?= $book->url() ?>">
        <div class="s-pad-bottom-1">
          <?= $index ?>
        </div>
        <div class="s-pad-left-1 s-pad-bottom-1">
          <div style="padding-bottom: <?= $maxRatio * 100 ?>%">
            <?php if ( $cover = $book -> cover() -> toFile() ) : ?>
              <img
                class="fill books__cover"
                src="<?= $cover -> resize( 300, null ) ->url() ?>"
                data-srcset="<?= $cover -> srcset() ?>"
              />
            <?php endif; ?>
            <!--<?php if ( $cover = $book -> cover() -> toFile() ) : ?>-->
            <!--  <?php snippet('image', [ 'image' => $cover ] ) ?>-->
            <!--<?php endif; ?>-->
          </div>
        </div>
        <div class="s-pad-left-1 s-pad-bottom-1">
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
      </a>
      <?php $index++; ?>
    <?php endforeach; ?>
  </div>
  
  <!-- 
  
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
  -->


<?= snippet( 'footer' ) ?>
