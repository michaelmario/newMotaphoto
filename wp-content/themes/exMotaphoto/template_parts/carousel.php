<?php
$args = array(
    'post_type' => 'photo',
    'posts_per_page'=>'15',
    'meta_key' => '_thumbnail_id'
     );
$allPhotos = new WP_Query($args);
    if ($allPhotos->have_posts()) {
        $displayedPosts = array(); // Initializing empty array
        while ($allPhotos->have_posts()) {
                $allPhotos->the_post();
                // Checking if post has already been displayed
                if (in_array(get_the_ID(), $displayedPosts)) {
                    continue; // Skip this post
                }?>
            <div class="container  mySlides">
              <div class="imgSlide">
                <?php the_post_thumbnail(); ?>
            </div>
              <h1 class="hero-title"><?php the_title() ?></h1>          
           </div>
           <?php
              $displayedPosts[] = get_the_ID(); // Add post ID to array              
        } 
   
      
    } 
wp_reset_postdata(  );
?>