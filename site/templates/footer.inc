		<!-- Footer -->
		<footer class="footer section">
			<div class="content-holder">
				<div class="link_list_holder">
					<p class="copyright_txt">©2018 - go-vegan-groningen.nl</p>
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
			src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAxVkuGj1zGj45HkMDQt-sUEaCN7GLkrwE&callback=initMap">
		</script>
	</body>
</html>
