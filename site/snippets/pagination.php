<?php if($pagination->pages() > 1): ?>
<nav class="pagination">
  <ul>
    <?php if ($pagination->hasPrevPage()): ?>
    <li>
      <a href="<?= $pagination->prevPageURL() ?>">←</a>
    </li>
    <?php endif ?>

  
    <?php foreach ($pagination->range(10) as $r): ?>
    <li>
      <a<?= $pagination->page() === $r ? ' class="current-page" aria-current="page"' : '' ?> href="<?= $pagination->pageURL($r) ?>">
        <?= $r ?>
      </a>
    </li>
    <?php endforeach ?>

    <?php if ($pagination->hasNextPage()): ?>
    <li>
      <a href="<?= $pagination->nextPageURL() ?>">→</a>
    </li>
    <?php endif ?>
  </ul>
</nav> 
<?php endif; ?> 