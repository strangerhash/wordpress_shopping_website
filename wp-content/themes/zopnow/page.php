<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package WordPress
 * @subpackage Twenty_Nineteen
 * @since Twenty Nineteen 1.0
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<section class="frntre-mid-wrap">

				<div class="container">

					<div class="frntre-account-wrap">

						<div class="frntre-columns-row">

							<?php

							// Start the Loop.
							while ( have_posts() ) :
								the_post();

								get_template_part( 'template-parts/content', 'page-without-heading' );

								// If comments are open or we have at least one comment, load up the comment template.
								if ( comments_open() || get_comments_number() ) {
									comments_template();
								}

							endwhile; // End the loop.
							?>

						</div>

					</div>

				</div>

		</section>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
