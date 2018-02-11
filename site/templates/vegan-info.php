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

		</section><!-- Closes Info Sections -->

		<?php 
			include 'footer.inc';
		?>