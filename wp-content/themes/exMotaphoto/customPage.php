<?php
/**
 * Template Name: customPage
 */ 
?>
<?php get_header(); ?>
<div class="W3-container">
    <!-- La partie photo en bg + title de hero header >
    <div class="hero-header">
        <php get_template_part( 'template_parts/carousel'); ?>
    </div>-->
	<div class="mainContainer">
        <section>
            <div class="w3-container w3-margin-bottom w3-center">
                <div class="w3-row">
                    <div class="w3-third w3-section">
                    <form id="filter-cat" class="js-filter-form" method="GET">
                            <select name="categories" id="categoriesSelect" class="w3-select w3-padding letters-transform w3-border">
                                <option class="w3-margin" value="">Catégories</option>
                                 <?php
                                  $terms_pic_categorie = get_terms('categorie');
                                  foreach ($terms_pic_categorie as  $termCategorie) { ?>
                    
                                 <option class="w3-margin" data-filter="<?php echo $termCategorie->slug; ?>"><?php echo $termCategorie->name; ?></option>
                                 <?php }                      
                                  ?>
                                  </select>
                            <!-- </div> -->
                        </form>
                    </div>

                    <div class="w3-third w3-section">
                    <form id="filter-formats" method="GET">
                            <select name="format" id="filterSelect" class="w3-select w3-padding letters-transform w3-border">
                                <option class="w3-margin" value="">Formats</option>
                                <?php
                                  $terms_pic_formats = get_terms('format');
                                  foreach ($terms_pic_formats as  $termFormat) { ?>                    
                                  <option class="w3-margin" data-filter="<?php  echo $termFormat->slug; ?>"><?php echo $termFormat->name; ?></option>
                                <?php }  ?>
                            </select>
                            <!-- </div> -->
                        </form>
                    </div>
                    <div class="w3-third w3-section">
                        <form id="filter-date" method="GET">
                            <div class="filter-3">
                                <select name="sort" id="sort-dates" class="w3-select w3-padding letters-transform w3-border">
                                    <option class="w3-margin" value="">Trier par</option>
                                    <option class="w3-margin" value="date">Nouveautés</option>
                                    <option class="w3-margin" value="DESC">Les plus anciens</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    
    <section class="w3-container">
            <div class="image-container">                
                <div class="display-photo">
                    <div class="photo-grid">
                        
                    </div>
                </div>
            </div>
        </div>       
    </section>
<?php get_footer(); ?>