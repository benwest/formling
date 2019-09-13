<nav class="nav grid s-gap-bottom-1">
    <div class="s-col-6 m-col-6">
        <a href="<?= $site -> url() ?>" class="nav__logo">
            <div> <?= snippet('logo') ?></div>
            <!--<div class="m-dn"><?= snippet('logo-landscape') ?></div>-->
        </a>
    </div>
    <ul class="nav__list s-col-6 m-col-6 s-gap-top-1">
        <li>
            <a id="about-button" href="/about">About</a>
        </li>
        <li>
            <a href="/books">Books</a>
        </li>
        <?php if(page('news')->isVisible()): ?>
        <li>
            <a href="/news">News</a>
        </li>
        <?php endif; ?>
        <li>
            <a class="snipcart-checkout snipcart-summary" href="#">Cart (<span class="snipcart-total-items">0</span>)</a>
        </li>
    </ul>
</nav>
