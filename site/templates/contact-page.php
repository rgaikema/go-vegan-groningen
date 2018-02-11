<?php 	
	include 'header.inc';
?>

			<div class="bottom-curve-green"></div>

			<div class="bottom-curve"></div>

		</section> <!-- Closes page wrapper -->

		<!-- Info sections -->

		<!-- TODO -->
		<!-- Remove app style for sections + add search section with app behaviour -->
		<section class="sections" id="js-sections">

			<!-- Food image-->
			<section class="section food-image"></section>

			<section class="info section" id="js-mobile-tab-1">
				<div itemscope itemtype="http://schema.org/Organization">
					<div class="content-holder">
						<h2>Contact <span itemprop="name">Go-vegan-Groningen.nl</span></h2>
						<!-- <h2><?php echo $page->title; ?></h2> -->
						<?php echo $page->info_text; ?>

						<figure class="profile-pic" itemscope itemtype="http://schema.org/Person">
							<img src="https://go-vegan-groningen.nl/site/img/remco.jpg" alt="Remco - Go-vegan-Groningen.nl - Vegan uit eten in Groningen">
							<figcaption itemprop="name">Remco</figcaption>
						</figure>
						
						<figure class="profile-pic" itemscope itemtype="http://schema.org/Person">
							<img src="https://go-vegan-groningen.nl/site/img/jani.jpg" alt="Jani - Go-vegan-Groningen.nl - Vegan uit eten in Groningen">
							<figcaption itemprop="name">Jani</figcaption>
						</figure>
						<div class="facebook-like-holder">
							<div class="fb-like" data-href="https://www.facebook.com/go.vegan.groningen.nl" data-width="300" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
						</div>

					</div>
				</div><!-- Closes Organisation Schema.org -->
			</section>

		</section><!-- Closes Info Sections -->

		<?php 
			include 'footer.inc';
		?>