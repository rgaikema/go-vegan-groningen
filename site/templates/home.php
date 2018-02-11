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

									echo '<span class="share-url-holder-text">Copy this link to share:</span>';

								} else {
									echo '<span class="share-url-holder-text">Kopieer deze link om te delen:</span>';
								}
							?>
			  				
			  				<div class="share-url-ipnut-btn-holder">
					  			<input type="text" class="share-url-input" id="share-url" value="">
					  			<button class="share-url-btn" data-clipboard-target="#share-url">
		    						<img src="<?php echo $config->urls->root?>site/img/clippy.svg" alt="Copy to clipboard">
								</button>
							</div>
				  		</div>
			  			<div class="succes-message-url-copied" id="succes-message-url-copied">
				  			<span class="share-check-icon">
				  				<?php include 'share_success_icon.inc'; ?>
				  			</span>
							
							<?php 
								if ($savedLanguage->title !== "NL") {

									echo '<p class="succesful-copied-text" id="succesful-copied-text">Your link has been copied!</p>';
								} else {
									echo '<p class="succesful-copied-text" id="succesful-copied-text">Je link is gekopieerd!</p>';
								}
							?>

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
				</div>
			</section>

		</section><!-- Closes Info Sections -->

		<?php 
			include 'footer.inc';
		?>
