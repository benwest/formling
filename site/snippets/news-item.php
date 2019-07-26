<div class="news-item grid">
  
  <div class="s-col-12 m-col-12 news-item__gallery">
    <?= snippet( 'slider', [ 'images' =>  $images ] ); ?>
  </div>
  <div class="s-col-12 m-col-12">
    <date class="news-item__date"><?= $date ?></date>
    <h1 class="news-item__title"><?= $title ?></h1>
    <article class="news-item__body">
      <?= $body ?>
    </article>
  </div>
  
</div>