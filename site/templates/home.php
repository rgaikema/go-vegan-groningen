<!DOCTYPE html>
<html lang="nl">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<title>Go Vegan Groningen</title>
		<link href="<?php echo $config->urls->templates?>css/style.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
		<link rel="shortcut icon" href="favicon.ico">
		<!-- Global site tag (gtag.js) - Google Analytics -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109095981-1"></script>
		<script>
		  window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-109095981-1');
		</script>
	</head>
	<body>

	<section class="page-wrapper">

		<section class="top">
			<div class="logo desktop-only">
				<svg version="1.1" id="logo-leaf" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
					 viewBox="0 0 808 810" style="enable-background:new 0 0 808 810;" xml:space="preserve">
					<style type="text/css">
						.st0-d{fill:url(#SVGID_1_d);stroke:url(#SVGID_2_d);stroke-miterlimit:10;}
						.st1-d{fill:none;stroke:#FFFFFF;stroke-width:80;stroke-miterlimit:10;}
						.st2-d{fill:none;stroke:#017F00;stroke-width:25;stroke-miterlimit:10;}
						.st3-d{fill:#009245;}
						.st4-d{fill:#08BF5B;}
					</style>
					<g id="gradient">
						
						<linearGradient id="SVGID_1_d" gradientUnits="userSpaceOnUse" x1="722.1506" y1="502.8201" x2="92.0494" y2="310.5799" gradientTransform="matrix(1 0 0 -1 0 812)">
							<stop  offset="0" style="stop-color:#98DB3F"/>
							<stop  offset="1" style="stop-color:#64C63F"/>
						</linearGradient>
						<linearGradient id="SVGID_2_d" gradientUnits="userSpaceOnUse" x1="77.3" y1="405.3" x2="736.9" y2="405.3">
							<stop  offset="0" style="stop-color:#98DB3F"/>
							<stop  offset="1" style="stop-color:#64C63F"/>
						</linearGradient>
						<circle class="st0-d" cx="407.1" cy="405.3" r="329.3"/>
					</g>
					<g id="white_overlay_circle">
						<circle class="st1-d" cx="404.7" cy="404.6" r="361.9"/>
					</g>
					<g id="inner_circle">
						<circle class="st2-d" cx="404.7" cy="404.6" r="334"/>
					</g>
					<g id="middle_x5F_leaf">
						<path class="st3-d" d="M585.1,404.4c-22.1-40.4-65-67.7-114.3-67.7c-49.3,0-92.2,27.4-114.3,67.7c22.1,40.4,65,67.7,114.3,67.7
							C520,472.1,562.9,444.8,585.1,404.4z"/>
					</g>
					<g id="upper_x5F_leaf">
						<path class="st3-d" d="M458.5,155.5c-57-12.1-123.9,7.9-173.9,57.9c-50,50-70,116.9-57.9,173.9c57,12.1,123.9-7.9,173.9-57.9
							C450.6,279.4,470.6,212.5,458.5,155.5z"/>
					</g>
					<g id="bottom_x5F_leaf">
						<path class="st3-d" d="M458.5,654.3c-57,12.1-123.9-7.9-173.9-57.9c-50-50-70-116.9-57.9-173.9c57-12.1,123.9,7.9,173.9,57.9
							C450.6,530.4,470.6,597.3,458.5,654.3z"/>
					</g>
					<g id="middle_x5F_stripe">
						<path class="st4-d" d="M429.8,372c31.8-1.5,60,5.6,75.9,26.3c-15.9-21-44.4-34.3-76.2-32.8c-31.8,1.5-58.9,17.3-72.8,39.7
							C370.6,383.1,398,373.5,429.8,372z"/>
					</g>
					<g id="upper_x5F_stripe">
						<path class="st4-d" d="M279.8,269.9c34.5-36.9,74.3-60.1,115.3-54.1c-41.3-6.2-88.3,10.2-122.8,47.1s-47.7,84.9-38.7,125.7
							C224.9,348,245.3,306.8,279.8,269.9z"/>
					</g>
					<g id="bottom_x5F_stripe">
						<path class="st4-d" d="M279.8,541.1c34.5,36.9,74.3,60.1,115.3,54.1c-41.3,6.2-88.3-10.2-122.8-47.1s-47.7-84.9-38.7-125.7
							C224.9,462.9,245.3,504.2,279.8,541.1z"/>
					</g>
				</svg>
			</div>
			<div class="top-items-holder table">
				<div class="table-cell desktop-only">
					<?php 
	
						$savedLanguage = $user->language;

						foreach($languages as $language) {

							if($language->id == $savedLanguage->id) continue;

							if(!$page->viewable($language)) continue;

							$user->language = $language;

						}

						$user->language = $savedLanguage;

						if ($savedLanguage->title !== "NL") {
							echo "<h1>Vegan food in Groningen</h1>";
						} else {
							echo "<h1>Vegan eten in Groningen</h1>";
						}
					?>
				</div>
				<div class="table-cell mobile-only fourty">
					<nav class="mobile-nav" id="js-mobile-nav">
						<ul class="mobile-nav-list">
							<?php 
	
								$savedLanguage = $user->language;

								foreach($languages as $language) {

									if($language->id == $savedLanguage->id) continue;

									if(!$page->viewable($language)) continue;

									$user->language = $language;

								}

								$user->language = $savedLanguage;

								if ($savedLanguage->title !== "NL") {
									echo '<li class="mobile-nav-list-item" id="js-mobile-nav-1">About</li>';
									echo '<li class="mobile-nav-list-item" id="js-mobile-nav-2">Vegan?</li>';
								} else {
									echo '<li class="mobile-nav-list-item" id="js-mobile-nav-1">Over</li>';
									echo '<li class="mobile-nav-list-item" id="js-mobile-nav-2">Vegan?</li>';
								}
							?>
						</ul>
					</nav>
				</div>
				<div class="table-cell mobile-only twenty">
					<div class="logo">
						<svg version="1.1" id="logo-leaf-m" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 808 810" style="enable-background:new 0 0 808 810;" xml:space="preserve">
							<style type="text/css">
								.st0-m{fill:url(#SVGID_1_m);stroke:url(#SVGID_2_m);stroke-miterlimit:10;}
								.st1-m{fill:none;stroke:#FFFFFF;stroke-width:80;stroke-miterlimit:10;}
								.st2-m{fill:none;stroke:#017F00;stroke-width:25;stroke-miterlimit:10;}
								.st3-m{fill:#009245;}
								.st4-m{fill:#08BF5B;}
							</style>
							<g id="gradient-m">
								
								<linearGradient id="SVGID_1_m" gradientUnits="userSpaceOnUse" x1="722.1506" y1="502.8201" x2="92.0494" y2="310.5799" gradientTransform="matrix(1 0 0 -1 0 812)">
									<stop  offset="0" style="stop-color:#98DB3F"/>
									<stop  offset="1" style="stop-color:#64C63F"/>
								</linearGradient>
								<linearGradient id="SVGID_2_m" gradientUnits="userSpaceOnUse" x1="77.3" y1="405.3" x2="736.9" y2="405.3">
									<stop  offset="0" style="stop-color:#98DB3F"/>
									<stop  offset="1" style="stop-color:#64C63F"/>
								</linearGradient>
								<circle class="st0-m" cx="407.1" cy="405.3" r="329.3"/>
							</g>
							<g id="white_overlay_circle-m">
								<circle class="st1-m" cx="404.7" cy="404.6" r="361.9"/>
							</g>
							<g id="inner_circle-m">
								<circle class="st2-m" cx="404.7" cy="404.6" r="334"/>
							</g>
							<g id="middle_x5F_leaf-m">
								<path class="st3-m" d="M585.1,404.4c-22.1-40.4-65-67.7-114.3-67.7c-49.3,0-92.2,27.4-114.3,67.7c22.1,40.4,65,67.7,114.3,67.7
									C520,472.1,562.9,444.8,585.1,404.4z"/>
							</g>
							<g id="upper_x5F_leaf-m">
								<path class="st3-m" d="M458.5,155.5c-57-12.1-123.9,7.9-173.9,57.9c-50,50-70,116.9-57.9,173.9c57,12.1,123.9-7.9,173.9-57.9
									C450.6,279.4,470.6,212.5,458.5,155.5z"/>
							</g>
							<g id="bottom_x5F_leaf-m">
								<path class="st3-m" d="M458.5,654.3c-57,12.1-123.9-7.9-173.9-57.9c-50-50-70-116.9-57.9-173.9c57-12.1,123.9,7.9,173.9,57.9
									C450.6,530.4,470.6,597.3,458.5,654.3z"/>
							</g>
							<g id="middle_x5F_stripe-m">
								<path class="st4-m" d="M429.8,372c31.8-1.5,60,5.6,75.9,26.3c-15.9-21-44.4-34.3-76.2-32.8c-31.8,1.5-58.9,17.3-72.8,39.7
									C370.6,383.1,398,373.5,429.8,372z"/>
							</g>
							<g id="upper_x5F_stripe-m">
								<path class="st4-m" d="M279.8,269.9c34.5-36.9,74.3-60.1,115.3-54.1c-41.3-6.2-88.3,10.2-122.8,47.1s-47.7,84.9-38.7,125.7
									C224.9,348,245.3,306.8,279.8,269.9z"/>
							</g>
							<g id="bottom_x5F_stripe-m">
								<path class="st4-m" d="M279.8,541.1c34.5,36.9,74.3,60.1,115.3,54.1c-41.3,6.2-88.3-10.2-122.8-47.1s-47.7-84.9-38.7-125.7
									C224.9,462.9,245.3,504.2,279.8,541.1z"/>
							</g>
						</svg>
					</div>
				</div>
				<div class="table-cell mobile-only twenty v-align-top">
					<nav class="mobile-nav" id="js-mobile-nav">
						<ul class="mobile-nav-list">
							<?php 
	
								$savedLanguage = $user->language;

								foreach($languages as $language) {

									if($language->id == $savedLanguage->id) continue;

									if(!$page->viewable($language)) continue;

									$user->language = $language;

								}

								$user->language = $savedLanguage;

								if ($savedLanguage->title !== "NL") {
									echo '<li class="mobile-nav-list-item" id="js-mobile-nav-3">Contact</li>';
								} else {
									echo '<li class="mobile-nav-list-item" id="js-mobile-nav-3">Contact</li>';
								}
							?>
						</ul>
					</nav>
				</div>
				<div class="table-cell twenty v-align-top">
					<span class="language_switcher">
						<select onchange='window.location=$(this).val();'>
							<?php
								foreach($languages as $language) {
								  $selected = '';

								  // if this page isn't viewable (active) for the language, skip it
								  if(!$page->viewable($language)) continue;

								  // if language is current user's language, make it selected
								  if($user->language->id == $language->id) $selected = " selected=selected";

								  // determine the "local" URL for this language
								  $url = $page->localUrl($language);

								  // output the option tag
								  echo "<option$selected value='$url'>$language->title</option>";
								}
							?>
						</select>
					</span>	
				</div>
			</div>
		</section> <!-- end top -->

		<div class="bottom-curve-green"></div>

		<section class="map-holder section">
			<div id="map"></div>
			<div class="info-box" id="info-box">
				<div class="info-toggle-holder"><span><h1>Vegan hotspots in Groningen</h1></span>
					<span class="hide-info" id="js-hide-info"><span id="js-hide-triangle">&#x25BC;</span> <span id="js-hide-txt">hide info</span></span>
				</div>
				<?php 
	
					$savedLanguage = $user->language;

					foreach($languages as $language) {

						if($language->id == $savedLanguage->id) continue;

						if(!$page->viewable($language)) continue;

						$user->language = $language;

					}

					$user->language = $savedLanguage;

					if ($savedLanguage->title !== "NL") {
						echo '<i class="info-box-info" id="js-info-box-info">Click on one of the markers in the map to view the location\'s information</i>';
					} else {
						echo '<i class="info-box-info" id="js-info-box-info">Klik op één van de marker iconen op de kaart om de informatie te bekijken</i>';
					}
				?>
		  		<div class="location-info" id="location-info"></div>
		  		
			</div>
		</section> <!-- Closes map holder -->

		<div class="bottom-curve"></div>

		<?php 
	
			$savedLanguage = $user->language;

			foreach($languages as $language) {

				if($language->id == $savedLanguage->id) continue;

				if(!$page->viewable($language)) continue;

				$user->language = $language;

			}

			$user->language = $savedLanguage;

			if ($savedLanguage->title !== "NL") {
				include 'filter_en.inc';
			} else {
				include 'filter.inc';
			}

		?>

		<section class="ads-space section"></section>

	</section> <!-- Closes page wrapper -->

	<section class="sections" id="js-sections">
		<span class="info-section-close" id="js-info-section-close"></span>
		<section class="info section" id="js-mobile-tab-1">
			<div class="content-holder">
				<h2><?php echo $page->title; ?></h2>
				<?php echo $page->info_text; ?>
			</div>
		</section>
		<section class="section food-image">
			
		</section>
		<section class="inspiration section" id="js-mobile-tab-2">
			<div class="content-holder">
				<h2>Vegan?</h2>
				<?php echo $page->vegan_text; ?>
				<br>
				<?php 
					$savedLanguage = $user->language;

					foreach($languages as $language) {

						if($language->id == $savedLanguage->id) continue;

						if(!$page->viewable($language)) continue;

						$user->language = $language;

					}

					$user->language = $savedLanguage;

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
			<div class="content-holder">
				<h2>Contact</h2>
				<?php echo $page->contact_text; ?>
				<figure class="profile-pic">
					<img src="<?php echo $config->urls->root?>/site/img/remco.jpg" alt="remco">
					<figcaption>Remco</figcaption>
				</figure>
				
				<figure class="profile-pic">
					<img src="<?php echo $config->urls->root?>/site/img/jani.jpg" alt="jani">
					<figcaption>Jani</figcaption>
				</figure>
			</div>
		</section>
	</section><!-- Closes Sections -->

	<footer class="footer section">
		<div class="content-holder">
			<div class="link_list_holder">
				<p class="copyright_txt">©2017 - go-vegan-groningen.nl</p>
			</div>
			<div class="host_holder">
				<figure class="image">
					<a target="_blank" href="https://greenhost.nl"><img src="<?php echo $config->urls->root?>/site/img/gh_logo_naam_large.png" alt="Greenhost"></a>
				</figure>
			</div>
		</div>
	</footer>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<?php 
	
		$savedLanguage = $user->language;

		foreach($languages as $language) {

			if($language->id == $savedLanguage->id) continue;

			if(!$page->viewable($language)) continue;

			$user->language = $language;

		}

		$user->language = $savedLanguage;

		if ($savedLanguage->title !== "NL") {
			echo '<script src="' . $config->urls->templates . 'js/script_en.js"></script>';
		} else {
			echo '<script src="' . $config->urls->templates . 'js/script.js"></script>';
		}
	?>

	<script async defer 
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxVkuGj1zGj45HkMDQt-sUEaCN7GLkrwE&callback=initMap">
	</script>
</body>
</html>
