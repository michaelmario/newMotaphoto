<!-- Lightbox -->
<?php while (have_posts()) : the_post() ?>
<?php global $wp_query; ?>
<div class="lightbox">
<button class="w3-button w3-circle" id="close-lightbox">&times;</button>   
    <div class="lightbox-image-box">
        <img class="image-lightbox" src="" alt="images">
    </div>
    <div class="photoInfo">
        <div class="referenceLight"><?php echo get_field('reference'); ?></div>
        <div class="lightBoxCategorie"><?php echo get_field('categorie'); ?></div>
    </div>
</div>
<?php endwhile; ?>