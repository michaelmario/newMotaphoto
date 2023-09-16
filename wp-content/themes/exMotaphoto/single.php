<!-- 
    Fichier qui détermine la mise en forme des posts individuels.
    Template dédiée à l’affichage d’une seul Post.
-->
<?php get_header(); ?>

<?php while (have_posts()) : the_post() ?>
<?php
    global $wp_query; 
    ?>
<div class="w3-container w3-margin-top page-container">
    <!-- section du haut -->
    <section class="w3-row">
        <div class="w3-half">
            <div class="title-type w3-margin-left">
                <h2 class="pic-title"><?php echo get_the_title() ?></h2>
                <p>Référence : <span class="ref-val"><?php echo get_field('reference'); ?></span></p>
                <p>Catégorie : <?php echo get_field('categorie'); ?></p>
                <p>Format : <?php echo get_field('format'); ?></p>
                <p>Type : <?php echo get_field('Type'); ?></p>
                <p>Année : <?php echo get_the_date('Y'); ?></p>
            </div>
        </div>
        <div class="w3-half w3-margin-top">
            <div class="image_single_container">
                <img src="<?php echo the_post_thumbnail_url(); ?>" alt="<?php echo get_the_title() ?>" class="imgSingle">
                <div class="overlay">
                    <div class="open-fullscreen" rel="<?php echo the_post_thumbnail_url(); ?>">
                        <img rel="<?php echo the_post_thumbnail_url(); ?>" class="fullscreen"
                            src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg"
                            alt="Fullscreen">
                    </div>
                    <div class="links">
                        <p><?php echo the_title(); ?></p>
                        <!-- <p class="categorie"><php echo ?></p> -->
                    </div>
                </div>
    </section>

    <!-- section middle -->
    <section class="w3-container section_middle-border">
        <div class="w3-col m4">
            <div class="single_text">
                <h4 class="w3-margin-left">Cette photo vous intéresse ?</h4>
            </div>
        </div>
        <div class="w3-col m4 ">
            <div class="contact-btn">
                <button class="w3-button w3-gray" id="contact-filled">Contact</button>
            </div>
        </div>
        <?php
        // initializing variables         
        $next_item = get_next_post();
        $previous_item = get_previous_post();     
        ?>
        <div class="w3-col m4">
            <div class="photo-navigation  w3-margin-right">
                <div class="image">
                    <?php
                   if($next_item){
                     $next_image = get_the_post_thumbnail($previous_item);
                     echo $next_image; 
                   } ?>
                </div>

                <div class="arrows">
                    <?php if(!empty($previous_item)){
                    $previous_image = get_the_post_thumbnail($previous_item->ID);
                    $permalink_prev = get_the_permalink($previous_item->ID);
                    ?>
                    <a href="<?php echo $permalink_prev; ?>">
                        <img src="<?php echo get_template_directory_uri() . '/assets/images/images/larr.svg' ?>"
                            alt="fleche gauche"></a>
                    <?php } ?>
                    <!-- right / next -->
                    <?php if(!empty($next_item)){
                    $next_image = get_the_post_thumbnail($next_item->ID);
                    $permalink_next = get_the_permalink($next_item->ID);
                    ?>
                    <a href="<?php echo $permalink_next; ?>"><img id="right-arrow"
                            src="<?php echo get_template_directory_uri() . '/assets/images/images/rarr.svg' ?>"
                            alt="fleche droite"></a>
                    <?php } ?>
                </div>
            </div>
        </div>
    </section>

    <!-- section bas -->
    <section class="suggested-photo-container">
        <h3 class="text-in-upper-case w3-margin-left">Vous aimerez AUSSI</h3>

        <div class="photo-suggestions">
            <!-- recuperer les photos -->
            <?php
            $category = get_field('categorie');
            $current_post_id = get_the_ID();
             
            $superargs = array(
                'post_type' => 'photo',
                'meta_value' => $category,
                'posts_per_page' => 2, 
                'paged' => 1,
                'post__not_in'=> array($current_post_id)
            );
            // lancement de query
            $suggestionPhoto = new WP_Query($superargs);           
            ?>

            <!-- Loop -->
            <div class="w3-container">
                <div class="w3-row">
                    <?php if ($suggestionPhoto->have_posts()) : ?>
                    <?php while ($suggestionPhoto->have_posts()) : $suggestionPhoto->the_post(); ?>
                    <div class="w3-half">
                        <div class="pic-suggested">
                            <div class="img" dataset-request='<?php echo  $post->ID; ?>'>
                               <img src="<?php echo the_post_thumbnail_url('large-custom'); ?>" alt="<?php the_title(); ?>" >
                                <div class="overlay">
                                    <div class="open-fullscreen" rel="<?php echo the_post_thumbnail_url(); ?>">
                                        <img rel="<?php the_post_thumbnail_url(); ?>" class="fullscreen"
                                            src="http://newmotaphoto.local/wp-content/themes/exMotaphoto/assets/images/images/fullscreen.svg"
                                            alt="Fullscreen">
                                    </div>

                                    <div class="eye">
                                        <a href="<?php echo get_permalink(); ?>">
                                            <img src="<?php echo get_template_directory_uri(); ?>/assets/images/images/picture-eye.svg"
                                                alt="Eye"></a>
                                    </div>
                                    <div class="infos">
                                        <p class="titleName"><?php echo the_title(); ?></p>
                                        <p class="nameCate"><?php echo get_field('categorie'); ?></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <?php endwhile; ?>
                    <?php endif; ?>
                    <?php wp_reset_postdata(); ?>
                </div>
            </div>

        </div>
        
    </section>
     <div class="w3-margin w3-center buttonContainer_basPage">
            <a class="w3-button w3-gray" href="<?php echo get_site_url(); ?>">Toutes les photos</a>
           
        </div>
</div>
</div>
<?php endwhile ?>
<?php get_footer(); ?>