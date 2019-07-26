<?= snippet( 'header' ) ?>

<main>
  <?php foreach($items = $page->children()->visible()->sortBy('date', 'desc')->paginate(5) as $newsItem): ?>
      <?php snippet( 'news-item', [
        'title' => $newsItem -> title(),
        'body' => $newsItem -> text() -> kt(),
        'date' => $newsItem -> date()->toDate('d/m/y'),
        'images' => $newsItem -> imageFiles() -> toFiles()
      ]) ?>
  <?php endforeach; ?>
  
  <?php snippet('pagination', ['pagination' => $items->pagination()]) ?>


</main>

<?= snippet( 'footer' ) ?>
