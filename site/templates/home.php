<!DOCTYPE html>
<html lang="nl" itemscope itemtype="http://schema.org/WebPage">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<?php 
			$savedLanguage = $user->language;

			foreach($languages as $language) {

				if($language->id == $savedLanguage->id) continue;

				if(!$page->viewable($language)) continue;

				$user->language = $language;

			}

			$user->language = $savedLanguage;

			if ($savedLanguage->title !== "NL") {

				echo '<title>Go Vegan Groningen - Vegan food in Groningen</title>';

			} else {
				echo '<title>Go Vegan Groningen - Vegan uit eten in Groningen</title>';
			}
		?>
		<meta name="description" content="Op deze website zie je waar je vegan uit eten kunt in Groningen.">
		<meta property="og:title" content="Go Vegan Groningen"/>
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://go-vegan-groningen.nl/" />
		<meta property="og:image" content="https://go-vegan-groningen.nl/site/img/f-image.jpg"/>
		<meta property="og:description" content="Vegan uit eten in Groningen" />
		<meta itemprop="name" content="Go-vegan-Groningen.nl">
    	<meta itemprop="headline" content="Vegan uit eten in Groningen">
		<link href="<?php echo $config->urls->templates?>css/style.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
		<link rel="shortcut icon" href="/favicon.ico">
		<link itemprop="url" href="https://go-vegan-groningen.nl/"/>
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
		<div id="fb-root"></div>
		<script>
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s); js.id = id;
				js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.11&appId=146295529459606';
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>
		<section class="page-wrapper">

			<section class="top">
				<div class="logo desktop-only">
					<?php 
						$savedLanguage = $user->language;

						foreach($languages as $language) {

							if($language->id == $savedLanguage->id) continue;

							if(!$page->viewable($language)) continue;

							$user->language = $language;

						}

						$user->language = $savedLanguage;

						if ($savedLanguage->title !== "NL") {

							echo '<a href="' . $config->urls->root . 'en/">';
							include 'logo_dt.inc';
							echo '</a>';

						} else {
							echo '<a href="' . $config->urls->root . '">';
							include 'logo_dt.inc';
							echo "</a>";
						}
					?>
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
								echo "<h1>Vegan uit eten in Groningen</h1>";
							}
						?>
					</div>
					<div class="table-cell mobile-only fourty">
						<nav class="mobile-nav" id="js-mobile-nav">
							<ul class="mobile-nav-list">
								<?php 

									// TODO 
									// Change this in hamburger menu left
		
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
							<?php 
								$savedLanguage = $user->language;

								foreach($languages as $language) {

									if($language->id == $savedLanguage->id) continue;

									if(!$page->viewable($language)) continue;

									$user->language = $language;

								}

								$user->language = $savedLanguage;

								if ($savedLanguage->title !== "NL") {

									echo '<a href="' . $config->urls->root . 'en/">';
									include 'logo_mb.inc';
									echo '</a>';

								} else {
									echo '<a href="' . $config->urls->root . '">';
									include 'logo_mb.inc';
									echo "</a>";
								}
							?>
						</div>
					</div>
					<div class="table-cell mobile-only twenty v-align-top">
						<nav class="mobile-nav" id="js-mobile-nav">
							<ul class="mobile-nav-list">
								<?php 

									// TODO 
									// Move this section to hamburger menu
		
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

						<!-- TODO -->
						<!-- Add search icon + search section -->

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
					<div class="info-toggle-holder"><span><h1>Vegan uit eten in Groningen</h1></span>
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

			<!-- Food image-->
			<section class="section food-image"></section>

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
						<div class="facebook-like-holder">
							<div class="fb-like" data-href="https://www.facebook.com/go.vegan.groningen.nl" data-width="300" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
						</div>
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
