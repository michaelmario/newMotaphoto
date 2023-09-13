<?php get_header();

?>
<div class="W3-container">
    <!-- La partie photo en bg + title de hero header >-->
    <div class="hero-header">
        <?php get_template_part( 'template_parts/carousel'); ?>
    </div>
<?php

get_template_part( 'template_parts/postPhoto');
?>

<?php get_footer(); ?>