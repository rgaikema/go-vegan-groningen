<?php 
	$savedLanguage = $user->language;

	foreach($languages as $language) {

		if($language->id == $savedLanguage->id) continue;

		if(!$page->viewable($language)) continue;

		$user->language = $language;
	}

	$user->language = $savedLanguage;
?>
<!DOCTYPE html>
<html lang="nl" itemscope itemtype="http://schema.org/WebPage">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<?php

			if ($savedLanguage->title !== "NL") {

				echo '<title>Go Vegan Groningen - Vegan food in Groningen</title>';

			} else {
				echo '<title>Go Vegan Groningen - Vegan uit eten in Groningen</title>';
			}
		?>
		<meta name="description" content="Op deze website zie je waar je vegan uit eten kunt in Groningen.">
		<meta property="og:title" content="Vegan uit eten in Groningen"/>
		<meta property="og:type" content="website" />
		<meta property="og:url" content="https://go-vegan-groningen.nl/" />
		<meta property="og:image" content="https://go-vegan-groningen.nl/site/img/f-image.jpg"/>
		<meta property="og:description" content="Alle locaties op één site." />
		<meta itemprop="name" content="Go-vegan-Groningen.nl">
    	<meta itemprop="headline" content="Vegan uit eten in Groningen">
		<link href="<?php echo $config->urls->templates?>css/style.css" rel="stylesheet">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
		<link rel="shortcut icon" href="https://go-vegan-groningen.nl/favicon.ico">
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
							if ($savedLanguage->title !== "NL") {
								echo "<h1>Vegan food in Groningen</h1>";
							} else {
								echo "<h1>Vegan uit eten in Groningen</h1>";
							}
						?>
						<div class="new-menu">
							<?php 
								$treeMenu = $modules->get("MarkupSimpleNavigation"); // load the module
								echo $treeMenu->render();
							?>
						</div>
					</div>
					<div class="table-cell mobile-only fourty">
						<nav class="mobile-nav" id="js-mobile-nav">
							<ul class="mobile-nav-list">
								<?php
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