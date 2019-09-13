<?= snippet( 'header' ) ?>

<div class="grid home">
  <div class="s-col-12 home__excerpt">
    <div class="excerpt excerpt--multiple" data-url="<?= $site -> url() ?>/home.json">
      <div class="formling formling--excerpt"><?php snippet('creatures/random') ?></div>
    </div>
  </div>
</div>

<?= snippet( 'footer' ) ?>
