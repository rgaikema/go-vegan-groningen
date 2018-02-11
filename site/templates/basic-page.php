<?php 	
	include 'header.inc';
?>
		<div class="bottom-curve-green"></div>

		<div class="bottom-curve"></div>

	</section> <!-- Closes page wrapper -->

	<section class="sections" id="js-sections">

		<!-- Food image-->
		<section class="section food-image"></section>

		<section class="info section" id="js-mobile-tab-1">
				<div class="content-holder">
					<h2><?php echo $page->title; ?></h2>
					<?php echo $page->info_text; ?>
				</div>
			</section>

	</section><!-- Closes Sections -->

<?php 
	include 'footer.inc';
?>
