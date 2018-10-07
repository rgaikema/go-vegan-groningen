<?php
	include 'header.inc';
?>
			<div class="bottom-curve-green"></div>

			<section class="map-holder section">
				<div id="map"></div>
				<div class="info-box" id="info-box">
					<div class="info-toggle-holder"><span><h1>Vegan uit eten in Groningen</h1></span>
						<span class="hide-info" id="js-hide-info"><span id="js-hide-triangle">&#x25BC;</span> <span id="js-hide-txt">hide info</span></span>
					</div>
					<?php 
						if ($savedLanguage->title !== "NL") {
							echo '<i class="info-box-info" id="js-info-box-info">Click on one of the markers in the map to view the location\'s information</i>';
						} else {
							echo '<i class="info-box-info" id="js-info-box-info">Klik op één van de marker iconen op de kaart om de informatie te bekijken</i>';
						}
					?>

			  		<div class="location-info-holder">
			  			<div class="location-info" id="location-info"></div>
			  			<div class="share-url-holder">
			  				<?php 
								if ($savedLanguage->title !== "NL") {

									echo '<span class="share-url-holder-text">Share this location:</span>';

								} else {
									echo '<span class="share-url-holder-text">Deel deze locatie:</span>';
								}
							?>
			  				
			  				<div class="share-url-ipnut-btn-holder">
					  			<input type="text" class="share-url-input" id="share-url" value="">
					  			<button class="share-url-btn" data-clipboard-target="#share-url">
		    						<?php 
								if ($savedLanguage->title !== "NL") {

									echo 'Copy';

								} else {
									echo 'Kopieer';
								}
							?>
								</button>
							</div>
				  		</div>
			  			<div class="succes-message-url-copied" id="succes-message-url-copied">
			  				<div class="succes-info-holder">
					  			<span class="share-check-icon">
					  				<?php include 'share_success_icon.inc'; ?>
					  			</span>
					  			<span class="share-success-info">
							
									<?php 
										if ($savedLanguage->title !== "NL") {

											echo '<p class="succesful-copied-text" id="succesful-copied-text">Your link has been copied!</p>';
										} else {
											echo '<p class="succesful-copied-text" id="succesful-copied-text">Je link is gekopieerd!</p>';
										}
									?>
								</span>
							</div>
				  		</div><!-- Closes Success message-->
			  		</div><!-- Closes location info -->
			  		
				</div>
			</section> <!-- Closes map holder -->

			<div class="bottom-curve"></div>

			<?php 
				if ($savedLanguage->title !== "NL") {
					include 'filter_en.inc';
				} else {
					include 'filter.inc';
				}

			?>

		</section> <!-- Closes page wrapper -->

		<!-- Info sections -->

		<!-- TODO -->
		<!-- Remove app style for sections + add search section with app behaviour -->
		<section class="sections" id="js-sections">
			<span class="info-section-close" id="js-info-section-close"></span>
			<section class="info section" id="js-mobile-tab-1">
				<div class="content-holder">
					<h2><?php echo $page->title; ?></h2>
					<?php echo $page->info_text; ?>

					<div class="facebook-like-holder">
						<div class="fb-like" data-href="https://www.facebook.com/go.vegan.groningen.nl" data-width="300" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
					</div>
				</div>
			</section>

			<!-- Food image-->
			<section class="section food-image"></section>

			<section class="inspiration section" id="js-mobile-tab-2">
				<div class="content-holder">
					<h2>Vegan?</h2>
					<?php echo $page->vegan_text; ?>
					<br>
					<?php 
						if ($savedLanguage->title !== "NL") {
							echo '<h3>Why vegan?</h3>';
						} else {
							echo '<h3>Waarom vegan?</h3>';
						}
					?>
					<div class="image-text-holder first">
						<figure class="image margin-right">
							<?php echo file_get_contents("../../site/img/pig.svg"); ?>
						</figure>
						<div class="text-holder">
							<?php echo $page->vegan_usp1; ?>
						</div>
					</div>
					<div class="image-text-holder second">
						<div class="text-holder">
							<?php echo $page->vegan_usp2; ?>
						</div>
						<figure class="image margin-left">
							<?php echo file_get_contents("../../site/img/earth.svg"); ?>
						</figure>
					</div>
					<div class="image-text-holder third">
						<figure class="image margin-right">
							<?php echo file_get_contents("../../site/img/heart-beat.svg"); ?>
						</figure>
						<div class="text-holder">
							<?php echo $page->vegan_usp3; ?>
						</div>
					</div>
				</div>
			</section>
			<section class="contact section" id="js-mobile-tab-3">
				<div itemscope itemtype="http://schema.org/Organization">
					<div class="content-holder">
						<h2>Contact <span itemprop="name">Go-vegan-Groningen.nl</span></h2>
						<?php echo $page->contact_text; ?>
						<figure class="profile-pic" itemscope itemtype="http://schema.org/Person">
							<img src="https://go-vegan-groningen.nl/site/img/remco.jpg" alt="Remco - Go-vegan-Groningen.nl - Vegan uit eten in Groningen">
							<figcaption itemprop="name">Remco</figcaption>
						</figure>
						
						<figure class="profile-pic" itemscope itemtype="http://schema.org/Person">
							<img src="https://go-vegan-groningen.nl/site/img/jani.jpg" alt="Jani - Go-vegan-Groningen.nl - Vegan uit eten in Groningen">
							<figcaption itemprop="name">Jani</figcaption>
						</figure>
						
						<!-- Original FB like button	 -->

					</div>
				</div><!-- Closes Organisation Schema.org -->
			</section>

		</section><!-- Closes Info Sections -->

		<!-- Footer -->
		<footer class="footer section">
			<div class="content-holder">
				<div class="link_list_holder">
					<p class="copyright_txt">©2017 - go-vegan-groningen.nl</p>
				</div>
				<div class="host_holder">
					<figure class="image">
						<a target="_blank" href="https://greenhost.nl"><img src="https://go-vegan-groningen.nl/site/img/gh_logo_naam_large.png" alt="Greenhost host Go-vegan-Groningen.nl - Vegan uit eten in Groningen"></a>
					</figure>
				</div>
			</div>
		</footer>


		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script src="<?php echo $config->urls->templates?>js/clipboard.min.js"></script>

		<?php 
			if ($savedLanguage->title !== "NL") {
				echo '<script src="' . $config->urls->templates . 'js/script_en.js"></script>';
			} else {
				echo '<script src="' . $config->urls->templates . 'js/script.js"></script>';
			}
		?>

		<script async defer 
			src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAljkXB1mYILIV3RyCDo__AwVxSDvCza2w&callback=initMap">
		</script>
	</body>
</html>
