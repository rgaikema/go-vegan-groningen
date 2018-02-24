<?php
	include 'header.inc';
?>
<div class="bottom-curve-green"></div>

	<section class="sections" id="js-sections">
		<span class="info-section-close" id="js-info-section-close">close</span>
		<section class="info section" id="js-mobile-tab-1">
			<div class="content-holder">
				<h2>Welkom!</h2>
				<p>Via deze website vind je een uitgebreide verzameling aan eetgelegenheden waar je lekker vegan kunt eten.
				Bij deze plekken hoef je van te voren niet speciaal te vragen voor vegan opties.</p>
				<p>Het idee is onstaat in 2016 toen het nog lastig was om als 'vegan' spontaan uit eten te gaan in de stad Groningen. Inmiddels zijn er gelukkig steeds meer gelegenheden bijgekomen, maar een up to date overzicht was er nog niet.</p>
				<p>In eerste instantie ontwikkelden we deze website voor ons, maar aangezien wij het belangrijk vinden dat plantaardig eten zo toegangkelijk mogelijk moet worden, delen we onze ontdekkingen graag met jullie.</p>
			</div>
		</section>
		<section class="inspiration section" id="js-mobile-tab-2">
			<div class="content-holder">
				<h2>Inspiratie</h2>
				<p>Hieronder zie je een aantal bronnen om meer te weten te komen over veganisme. Of het nou om dierenwelzijn, gezondheid of uit millieu oogpunt gaat.</p>
				<h3>Films</h3>
				<ul>
					<li>Cowspiracy</li>
					<li>Forks over Knives</li>
					<li>What the Health</li>
					<li>Okja</li>
					<li>Earthlings</li>
				</ul>
				<h3>Boeken</h3>
				<ul>
					<li>How not to Die</li>
					<li>Vegan kookboek 1</li>
					<li>Vegan kookboek 2</li>
					<li>Rode boekje</li>
					<li>Vegan kookboek 3</li>
				</ul>
				<h3>Websites</h3>
				<ul>
					<li>Vereniging voor Veganisme</li>
					<li>Veganchallenge</li>
					<li>Melk je kan zonder</li>
					<li>Website 4</li>
					<li>Website 5</li>
				</ul>
			</div>
		</section>
		<section class="contact section" id="js-mobile-tab-3">
			<div class="content-holder">
				<h2>Contact</h2>
				<p>Heb je een nieuwe plek gespot waar je spontaan vegan kunt eten?</p>
				<p>Laat het ons weten en stuur een mailtje naar <a href="mailto:tip@go-vegan-groningen.nl" target="_blank">tip@go-vegan-groningen.nl</a>. We zullen de locatie dan verifiëren en hem zo snel mogelijk op de kaart bijvoegen.</p>
			</div>
		</section>
	</section><!-- Closes Sections -->

	<footer class="footer section">
		<div class="content-holder">
			<div class="link_list_holder">
				<ul class="link_list left">
					<li class="link_list_item">website link 1</li>
					<li class="link_list_item">website link 2</li>
					<li class="link_list_item">website link 3</li>
				</ul>
				<ul class="link_list middle">
					<li class="link_list_item">website link 4</li>
					<li class="link_list_item">website link 5</li>
					<li class="link_list_item">website link 6</li>
				</ul>
				<ul class="link_list right">
					<li class="link_list_item">website link 7</li>
					<li class="link_list_item">website link 8</li>
					<li class="link_list_item">website link 9</li>
				</ul>
				<p class="copyright_txt">©2017 - go-vegan-groningen.nl</p>
			</div>
		</div>
	</footer>
	

	<script src="<?php echo $config->urls->templates?>js/script.js"></script>
	<script async defer 
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxVkuGj1zGj45HkMDQt-sUEaCN7GLkrwE&callback=initMap">
	</script>
</body>
</html>
