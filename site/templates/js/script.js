function initMap() {

	var locationInfo = document.getElementById("location-info");
	var locationMarkers = [];

	var herbivoor = {
		info: '<strong>De Herbivoor</strong><br>\r\
				Gedempte Zuiderdiep 59<br> Lunch & taart, avondeten alleen op donderdag<br>\
				100% vegan<br>\
				<a href="https://www.google.nl/maps/dir//De+Herbivoor,+Gedempte+Zuiderdiep+59,+9711+HC+Groningen/@53.2148417,6.5646821,17z/data=!4m15!1m6!3m5!1s0x47c9cd53e69aba2f:0xbb2363f021445f29!2sDe+Herbivoor!8m2!3d53.2148385!4d6.5668708!4m7!1m0!1m5!1m1!1s0x47c9cd53e69aba2f:0xbb2363f021445f29!2m2!1d6.5668708!2d53.2148385">Get Directions</a>',
		lat: 53.2148385,
		long: 6.5668708,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: true,
	};

	var anat = {
		info: '<strong>ANAT</strong><br>\r\
				Verlengde Grachtstraat 1<br> Ontbijt, lunch & taart<br>\
				100% vegan<br>\
				<a href="https://www.google.nl/maps/dir//ANAT,+Verlengde+Grachtstraat+1,+9717+GD+Groningen/@53.2236257,6.5511642,17z/data=!4m15!1m6!3m5!1s0x47c9cd4651a598c9:0x7796b31dd2a8ac2f!2sANAT!8m2!3d53.2236225!4d6.5533529!4m7!1m0!1m5!1m1!1s0x47c9cd4651a598c9:0x7796b31dd2a8ac2f!2m2!1d6.5533529!2d53.2236225">Get Directions</a>',
		lat: 53.2236225,
		long: 6.5533529,
		breakfast: true,
		lunch: true,
		dinner: false,
		coffee: true,
	};

	var mechoui = {
		info: '<strong>Mechoui</strong><br>\r\
				Folkingestraat 38<br> Noord-Afrikaanse gerechten<br>\
				Vraag even welke vegan zijn.<br>\
				<a href="https://www.google.nl/maps/dir//Mechoui,+Folkingestraat+38,+9711+JX+Groningen/@53.2155363,6.5628875,17z/data=!4m15!1m6!3m5!1s0x47c9cd517fc5950d:0x8fe9e487533540f3!2sMechoui!8m2!3d53.2155331!4d6.5650762!4m7!1m0!1m5!1m1!1s0x47c9cd517fc5950d:0x8fe9e487533540f3!2m2!1d6.5650762!2d53.2155331">Get Directions</a>',
		lat: 53.2155331,
		long: 6.5650762,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var moghul = {
		info: '<strong>Kleine Moghul</strong><br>\r\
				Nieuwe Boteringestraat 62<br> Indiaas eten<br>\
				Vraag naar de vegan gerechten<br>\
				<a href="https://www.google.nl/maps/dir//De+Kleine+Moghul,+Nieuwe+Boteringestraat+62,+9712+PP+Groningen/@53.2240498,6.556989,17z/data=!4m15!1m6!3m5!1s0x47c9cd44523f4fd5:0xcbe5e9b813239f8b!2sDe+Kleine+Moghul!8m2!3d53.2240498!4d6.559183!4m7!1m0!1m5!1m1!1s0x47c9cd44523f4fd5:0xcbe5e9b813239f8b!2m2!1d6.559183!2d53.2240498">Get Directions</a>',
		lat: 53.2240498,
		long: 6.559183,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var buurman = {
		info: '<strong>Buurman & Buurman</strong><br>\r\
				Rodeweg 6<br> Pizza <br>\r\
				Kies één van de vegetarische pizza\'s en vraag of ze deze vegan willen maken</br>\
				<a href="https://www.google.nl/maps/dir//Eetwinkel+Buurman+%26+Buurman+Groningen,+Rodeweg+6,+9715+AW+Groningen/@53.2273517,6.5592295,17z/data=!4m15!1m6!3m5!1s0x47c9cd43713cee77:0x1f057e46b756b4db!2sEetwinkel+Buurman+%26+Buurman+Groningen!8m2!3d53.2273517!4d6.5614235!4m7!1m0!1m5!1m1!1s0x47c9cd43713cee77:0x1f057e46b756b4db!2m2!1d6.5614235!2d53.2273517">Get Directions</a>',
		lat:53.2273517,
		long:6.5614235,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var semarang = {
		info: '<strong>Toko Semarang</strong><br>\r\
				Gedempte Zuiderdiep 119<br> Indonesisch (afhaal)buffet<br>\
				Ze hebben één gerecht: Nasi Rames, vegetarisch. Bestel zonder ei<br>\
				<a href="https://www.google.nl/maps/dir//Toko+%22Semarang%22,+Gedempte+Zuiderdiep+119,+9711+HE+Groningen/@53.2147378,6.56118,17z/data=!4m15!1m6!3m5!1s0x47c9cd523b6131e7:0xd3bf9bc95c329c91!2sToko+%22Semarang%22!8m2!3d53.2147378!4d6.563374!4m7!1m0!1m5!1m1!1s0x47c9cd523b6131e7:0xd3bf9bc95c329c91!2m2!1d6.563374!2d53.2147378">Get Directions</a>',
		lat: 53.2147378,
		long: 6.563374,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var toetpannekoek = {
		info: '<strong>Toet Pannekoek</strong><br>\r\
				Gedempte Zuiderdiep 85<br>Pannenkoeken<br>\
				Serveren een aantal vegan pannenkoeken<br>\
				<a href="https://www.google.nl/maps/place/Toet+Pannekoek/@53.2146463,6.5632301,17z/data=!4m13!1m7!3m6!1s0x47c9cd53cfc39507:0x2071fc7312e391c1!2sGedempte+Zuiderdiep+85,+9711+HC+Groningen!3b1!8m2!3d53.2146463!4d6.5654241!3m4!1s0x47c9cd53cfc39505:0xde11f93e058ae59!8m2!3d53.2146463!4d6.5654241">Get Directions</a>',
		lat: 53.2146463,
		long: 6.5654241,
		breakfast: true,
		lunch: true,
		dinner: true,
		coffee: true
	};

	var toet = {
		info: '<strong>Toet</strong><br>\r\
				Ubbo Emmiusstraat 19<br>Taart<br>\
				Ze hebben meestal één vegan taart<br>\
				<a href="https://www.google.nl/maps/dir//TOET+het+TOETjesparadijs,+Ubbo+Emmiusstraat+19,+9711+CA+Groningen/@53.2131239,6.5655698,17z/data=!4m15!1m6!3m5!1s0x47c9cd53cfc23367:0x510a079c67041c9c!2sTOET+het+TOETjesparadijs!8m2!3d53.2131239!4d6.5655697!4m7!1m0!1m5!1m1!1s0x47c9cd53cfc23367:0x510a079c67041c9c!2m2!1d6.5655697!2d53.2131239">Get Directions</a>',
		lat: 53.2131239,
		long: 6.5655697,
		breakfast: false,
		lunch: false,
		dinner: false,
		coffee: true
	};

	var soepwinkel = {
		info: '<strong>De Soepwinkel</strong><br>\r\
				Oude Kijk in Het Jatstraat 12<br>Soep<br>\
				Meestal is één soep vegan<br>\
				<a href="https://www.google.nl/maps/dir//De+Soepwinkel,+Oude+Kijk+in+Het+Jatstraat+12,+9712+EG+Groningen/@53.2186361,6.5602621,17z/data=!4m15!1m6!3m5!1s0x47c9cd502942e4f5:0xa24a465b8195b5af!2sDe+Soepwinkel!8m2!3d53.2186361!4d6.5624561!4m7!1m0!1m5!1m1!1s0x47c9cd502942e4f5:0xa24a465b8195b5af!2m2!1d6.5624561!2d53.2186361">Get Directions</a>',
		lat: 53.2186361,
		long: 6.5624561,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var feelgood = {
		info: '<strong>Feel Good</strong><br>\r\
				Oude Kijk in Het Jatstraat 29<br>Ontbijt, lunch, taart & diner<br>\
				Standaard vegan opties op de kaart. Bekijk hun <a href="https://www.facebook.com/feelgoodgroningen" target:"_blank">Facebook pagina</a> of de daghap vegan is.<br>\
				<a href="https://www.google.nl/maps/dir//Feel+Good,+Oude+Kijk+in+Het+Jatstraat+29,+9712+EB+Groningen/@53.2191437,6.5599756,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fd89a2d49:0x6c944d6249cc96fa!2sFeel+Good!8m2!3d53.2191437!4d6.5621696!4m7!1m0!1m5!1m1!1s0x47c9cd4fd89a2d49:0x6c944d6249cc96fa!2m2!1d6.5621696!2d53.2191437">Get Directions</a>',
		lat: 53.2191437,
		long: 6.5621696,
		breakfast: true,
		lunch: true,
		dinner: true,
		coffee: true
	};
	var fatoush = {
		info: '<strong>Fatoush</strong><br>\r\
				Damsterdiep 15<br> Libanese gerechten<br>\
				Vraag naar de vegan mezzes en gerechten<br>\
				<a href="https://www.google.nl/maps/dir//Fatoush,+Damsterdiep+15,+9711+SG+Groningen/@53.2170444,6.5733835,17z/data=!4m15!1m6!3m5!1s0x47c9cd56290c49af:0x5c9c9f7235152eb6!2sFatoush!8m2!3d53.2170412!4d6.5755722!4m7!1m0!1m5!1m1!1s0x47c9cd56290c49af:0x5c9c9f7235152eb6!2m2!1d6.5755722!2d53.2170412">Get Directions</a>',
		lat: 53.2170412,
		long: 6.5755722,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var bagelsbeans = {
		info: '<strong>Bagels & Beans</strong><br>\r\
				Zwanestraat 30<br>Ontbijt & lunch<br>\
				Verschillende vegan bagels<br>\
				<a href="https://www.google.nl/maps/dir//Bagels+%26+Beans,+Zwanestraat+30,+9712+CN+Groningen/@53.2179907,6.5633714,20z/data=!4m15!1m6!3m5!1s0x0:0x7339c9a03f9c3668!2sBagels+%26+Beans!8m2!3d53.2181003!4d6.5634754!4m7!1m0!1m5!1m1!1s0x47c9cd51cb25052f:0x7339c9a03f9c3668!2m2!1d6.5634757!2d53.2181004">Get Directions</a>',
		lat: 53.2181004,
		long: 6.5634757,
		breakfast: true,
		lunch: true,
		dinner: false,
		coffee: false
	};
	var pernikkel = {
		info: '<strong>Pernikkel</strong><br>\r\
				Aweg 2<br>Lunch & diner<br>\
				Serveren een paar vegan opties, waaronder een borrelplank/<br>\
				<a href="https://www.google.nl/maps/dir//Pernikkel,+Aweg+2,+9718+CS+Groningen/@53.2164047,6.5549666,17z/data=!4m15!1m6!3m5!1s0x0:0xa7fdb917d17115b3!2sPernikkel!8m2!3d53.2164047!4d6.5571608!4m7!1m0!1m5!1m1!1s0x47c9cd4e854af69d:0xa7fdb917d17115b3!2m2!1d6.5571606!2d53.2164047">Get Directions</a>',
		lat: 53.2164047,
		long: 6.5571606,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false
	};
	var gasfabriek = {
		info: '<strong>De Oude Gasfabriek</strong><br>\r\
				Langestraat 66<br>Lunch & diner<br>\
				Verschillende gerechten en zelfs een compleet driegangen vegan menu<br>\
				<a href="https://www.google.nl/maps/dir//Grand+Caf%C3%A9+-+Restaurant+%22De+Oude+Gasfabriek%22,+Langestraat+66,+9712+LT+Groningen/@53.223837,6.5631848,18z/data=!4m15!1m6!3m5!1s0x0:0xd251fa01edd2d9e0!2sGrand+Caf%C3%A9+-+Restaurant+%22De+Oude+Gasfabriek%22!8m2!3d53.2243325!4d6.5657245!4m7!1m0!1m5!1m1!1s0x47c9cd5b1128572d:0xd251fa01edd2d9e0!2m2!1d6.5657247!2d53.2243323">Get Directions</a>',
		lat: 53.2243323,
		long: 6.5657247,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false
	};
	var achterwerk = {
		info: '<strong>Achterwerk</strong><br>\r\
				Oosterstraat 13A<br>Diner<br>\
				Bijna volledig vegan, waaronder een driegangen menu<br>\
				<a href="https://www.google.nl/maps/dir//OOST,+Oosterstraat+13A,+9711+NN+Groningen/@53.2178776,6.5689349,21z/data=!4m15!1m6!3m5!1s0x0:0xaa9d4d24e0bab65f!2sOOST!8m2!3d53.2178422!4d6.5691718!4m7!1m0!1m5!1m1!1s0x47c9cd56d57845d5:0xaa9d4d24e0bab65f!2m2!1d6.5691718!2d53.2178422">Get Directions</a>',
		lat: 53.2178422,
		long: 6.5691718,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};
	var palermo = {
		info: '<strong>Pizzeria Palermo</strong><br>\r\
				Werumeus Buningstraat 22<br>Pizzeria<br>\
				Pizza\'s met vegan kaas, pasta\'s, vegan shoarma en vegan tiramisu<br>\
				<a href="https://www.google.nl/maps/dir//Pizzeria+Palermo,+Werumeus+Buningstraat+22,+9721+JA+Groningen/@53.1980705,6.5685008,17z/data=!4m15!1m6!3m5!1s0x47c832a7fa02f907:0x941f4573fc570e0e!2sPizzeria+Palermo!8m2!3d53.1980705!4d6.5706948!4m7!1m0!1m5!1m1!1s0x47c832a7fa02f907:0x941f4573fc570e0e!2m2!1d6.5706948!2d53.1980705">Get Directions</a>',
		lat: 53.1980705,
		long: 6.5706948,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};
	var frietvanpiet = {
		info: '<strong>Friet van Piet</strong><br>\r\
				Meeuwerderweg 112<br>Snackbar<br>\
				Vegan kapsalon, vegan burgers en andere vegan snacks<br>\
				<a href="https://www.google.nl/maps/dir//Friet+van+Piet,+Meeuwerderweg+112,+9724+EX+Groningen/@53.2107344,6.5772415,17z/data=!4m15!1m6!3m5!1s0x47c9d2ab149748ff:0xf29b454dc73b9238!2sFriet+van+Piet!8m2!3d53.2108389!4d6.579459!4m7!1m0!1m5!1m1!1s0x47c9d2ab149748ff:0xf29b454dc73b9238!2m2!1d6.579459!2d53.2108389">Get Directions</a>',
		lat: 53.2108389,
		long: 6.579459,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false
	};

	var zevendehemel = {
		info: '<strong>De Zevende Hemel</strong><br>\r\
				Zuiderkerkstraat 7<br>Diner<br>\
				Serveren één driegangen vegan menu<br>\
				<a href="https://www.google.nl/maps/dir//Rest.+De+Zevende+Hemel,+Zuiderkerkstraat+7,+9712+PZ+Groningen/@53.2233308,6.5607941,17z/data=!4m15!1m6!3m5!1s0x47c9cd452bed49cb:0xf0b794238c7eb00f!2sRest.+De+Zevende+Hemel!8m2!3d53.2233308!4d6.5629881!4m7!1m0!1m5!1m1!1s0x47c9cd452bed49cb:0xf0b794238c7eb00f!2m2!1d6.5629881!2d53.2233308">Get Directions</a>',
		lat: 53.2233308,
		long: 6.5629881,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var kult = {
		info: '<strong>Kult</strong><br>\r\
				Steentilstraat 36-1<br>Diner & snacks<br>\
				Serveren een aantal vegan optties zoals de vegan kaasfondue<br>\
				<a href="https://www.google.nl/maps/dir//Kult,+Steentilstraat+36-1,+9711+GN+Groningen/@53.2166442,6.5706985,17.07z/data=!4m15!1m6!3m5!1s0x47c9cd565c0e3a2b:0x86963fc469d5818f!2sKult!8m2!3d53.2166302!4d6.5727019!4m7!1m0!1m5!1m1!1s0x47c9cd565c0e3a2b:0x86963fc469d5818f!2m2!1d6.5727019!2d53.2166302">Get Directions</a>',
		lat: 53.2166302,
		long: 6.5727019,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: true
	};

	var ps = {
		info: '<strong>P.S.</strong><br>\r\
				Oude Kijk in Het Jatstraat 24<br>Taart<br>\
				Serveren één vegan fruittaart<br>\
				<a href="https://www.google.nl/maps/dir//P.S.+koffie,+thee+%26+taart,+Oude+Kijk+in+Het+Jatstraat+24,+9712+EJ+Groningen/@53.2189821,6.5599463,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fd0e7e7d3:0xed345a47a1c3062f!2sP.S.+koffie,+thee+%26+taart!8m2!3d53.2189821!4d6.562135!4m7!1m0!1m5!1m1!1s0x47c9cd4fd0e7e7d3:0xed345a47a1c3062f!2m2!1d6.562135!2d53.2189821">Get Directions</a>',
		lat: 53.2189821,
		long: 6.562135,
		breakfast: false,
		lunch: false,
		dinner: false,
		coffee: true
	};

	var vegansuper = {
		info: '<strong>Vegansuper</strong><br>\r\
					 Nieuwe Ebbingestraat 87<br>Lunch<br>\
					 Broodje hamburger en andere kleine snacks<br>\
					<a href="https://www.google.nl/maps/dir//Vegansuper,+Nieuwe+Ebbingestraat+87,+9712+NG+Groningen/@53.2250471,6.560053,17z/data=!4m15!1m6!3m5!1s0x47c9cd44c09adb71:0xba58b7016823dca4!2sVegansuper!8m2!3d53.2250439!4d6.5622417!4m7!1m0!1m5!1m1!1s0x47c9cd44c09adb71:0xba58b7016823dca4!2m2!1d6.5622417!2d53.2250439">Get Directions</a>',
		lat: 53.2250439,
		long: 6.5622417,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};


    var locations = [
      [herbivoor.info, herbivoor.lat, herbivoor.long, herbivoor.breakfast, herbivoor.lunch, herbivoor.dinner, herbivoor.coffee, 0],
      [anat.info, anat.lat, anat.long, anat.breakfast, anat.lunch, anat.dinner, anat.coffee, 1],
      [mechoui.info, mechoui.lat, mechoui.long, mechoui.breakfast, mechoui.lunch, mechoui.dinner, mechoui.coffee, 2],
      [moghul.info, moghul.lat, moghul.long, moghul.breakfast, moghul.lunch, moghul.dinner, moghul.coffee, 3],
      [buurman.info, buurman.lat, buurman.long, buurman.breakfast, buurman.lunch, buurman.dinner, buurman.coffee, 4],
      [semarang.info, semarang.lat, semarang.long, semarang.breakfast, semarang.lunch, semarang.dinner, semarang.coffee, 5],
      [toet.info, toet.lat, toet.long, toet.breakfast, toet.lunch, toet.dinner, toet.coffee, 6],
      [toetpannekoek.info, toetpannekoek.lat, toetpannekoek.long, toet.breakfast, toetpannekoek.lunch, toetpannekoek.dinner, toetpannekoek.coffee, 7],
      [soepwinkel.info, soepwinkel.lat, soepwinkel.long, soepwinkel.breakfast, soepwinkel.lunch, soepwinkel.dinner, soepwinkel.coffee, 8],
      [feelgood.info, feelgood.lat, feelgood.long, feelgood.breakfast, feelgood.lunch, feelgood.dinner, feelgood.coffee, 9],
      [fatoush.info, fatoush.lat, fatoush.long, fatoush.breakfast, fatoush.lunch, fatoush.dinner, fatoush.coffee, 10],
      [bagelsbeans.info, bagelsbeans.lat, bagelsbeans.long, bagelsbeans.breakfast, bagelsbeans.lunch, bagelsbeans.dinner, bagelsbeans.coffee, 11],
      [pernikkel.info, pernikkel.lat, pernikkel.long, pernikkel.breakfast, pernikkel.lunch, pernikkel.dinner, pernikkel.coffee, 12],
      [gasfabriek.info, gasfabriek.lat, gasfabriek.long, gasfabriek.breakfast, gasfabriek.lunch, gasfabriek.dinner, gasfabriek.coffee, 13],
      [achterwerk.info, achterwerk.lat, achterwerk.long, achterwerk.breakfast, achterwerk.lunch, achterwerk.dinner, achterwerk.coffee, 14],
      [palermo.info, palermo.lat, palermo.long, palermo.breakfast, palermo.lunch, palermo.dinner, palermo.coffee, 15],
      [frietvanpiet.info, frietvanpiet.lat, frietvanpiet.long, frietvanpiet.breakfast, frietvanpiet.lunch, frietvanpiet.dinner, frietvanpiet.coffee, 16],
      [zevendehemel.info, zevendehemel.lat, zevendehemel.long, zevendehemel.breakfast, zevendehemel.lunch, zevendehemel.dinner, zevendehemel.coffee, 17],
      [kult.info, kult.lat, kult.long, kult.breakfast, kult.lunch, kult.dinner, kult.coffee, 18],
      [ps.info, ps.lat, ps.long, ps.breakfast, ps.lunch, ps.dinner, ps.coffee, 19],
      [vegansuper.info, vegansuper.lat, vegansuper.long, vegansuper.breakfast, vegansuper.lunch, vegansuper.dinner, vegansuper.coffee, 20]
    ];


    var styledMapType = new google.maps.StyledMapType(
		[
		    {
		        "featureType": "all",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "lightness": "100"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "lightness": "0"
		            },
		            {
		                "color": "#d0ecff"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.country",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.province",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.locality",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            },
		            {
		                "color": "#777777"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.locality",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            },
		            {
		                "lightness": 60
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.neighborhood",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "administrative.land_parcel",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.man_made",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            },
		            {
		                "color": "#f5f5f5"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#fafafa"
		            }
		        ]
		    },
		    {
		        "featureType": "landscape.natural",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.attraction",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#e2e8cf"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.business",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.medical",
		        "elementType": "all",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#ecf4d7"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.park",
		        "elementType": "labels",
		        "stylers": [
		            {
		                //"visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.place_of_worship",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.school",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "poi.sports_complex",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "color": "#e5e5e5"
		            },
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.highway",
		        "elementType": "labels",
		        "stylers": [
		            {
		                //"visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "road.arterial",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#ffffff"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "geometry.stroke",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "labels.text",
		        "stylers": [
		            {
		                "color": "#777777"
		            }
		        ]
		    },
		    {
		        "featureType": "road.local",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.line",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit.station",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#eeeeee"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "all",
		        "stylers": [
		            {
		                "visibility": "simplified"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "geometry.fill",
		        "stylers": [
		            {
		                "color": "#d0ecff"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    }
		],
	{name: 'Styled Map'});

	if (window.screen.width >= 860) {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: new google.maps.LatLng(53.2158925, 6.5665613),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false,
			zoomControl: true,
          	zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_TOP
          	},
			fullscreenControl: false,
			streetViewControl: false
		});
	} else {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: new google.maps.LatLng(53.2197161, 6.5587073),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false,
			zoomControl: true,
          	zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_CENTER
          	},
          	streetViewControl: false,
	        fullscreenControl: false
		});
	}

	map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');


	// Add Location markers
	var infowindow_l = new google.maps.InfoWindow({}),
		infoBox = document.getElementById("info-box"),
		marker_l, i,
		normalIcon = {
  				url: "site/img/vegan.svg"
  			},
  		activeIcon = {
		url: "site/img/vegan_active.svg"
	};


	for (i = 0; i < locations.length; i++) {

		var marker = locations[i],
        	breakfastCheck = marker[3],
        	lunchCheck = marker[4],
        	dinnerCheck = marker[5],
        	coffeeCheck = marker[6],
        	hideTxt = document.getElementById("js-hide-txt"),
        	infoBoxInfo = document.getElementById("js-info-box-info");
        

		var marker_l = new google.maps.Marker({
			position: new google.maps.LatLng(
				locations[i][1], 
				locations[i][2], 
				locations[i][3], 
				locations[i][4], 
				locations[i][5], 
				locations[i][6], 
				locations[i][7], 
				locations[i][8], 
				locations[i][9], 
				locations[i][10], 
				locations[i][11], 
				locations[i][12], 
				locations[i][13], 
				locations[i][14], 
				locations[i][15], 
				locations[i][16],
				locations[i][17],
				locations[i][18],
				locations[i][19],
				locations[i][20]),
			icon: normalIcon,
			map: map,
			breakfast: breakfastCheck,
			lunch: lunchCheck,
			dinner: dinnerCheck,
			coffee: coffeeCheck
		});
	
		
		google.maps.event.addListener(marker_l, 'click', (function (marker_l, i) {

			return function () {

				// Get name of location clicked
				var matches = [];
				var text = locations[i][0];
				text.replace(/<strong>(.*?)<\/strong>/g, function () {
				    //arguments[0] is the entire match
				    matches.push(arguments[1]);
				});
				var locationName = matches[0];

				ga('send', 'event', 'Location', 'click', locationName);
				
				setAllMarkersIcon(normalIcon)
				marker_l.setIcon(activeIcon);
				
				locationInfo.classList.add('active');
				infowindow_l.setContent(locations[i][0]);  
				infoBoxInfo.style.display = "none";

				if (window.screen.width < 768) {
					infoBox.classList.remove("small");
					hideTxt.innerHTML="verberg";
				} else {
					infoBox.classList.remove("side");
				}

				document.getElementById('location-info').innerHTML = infowindow_l.content;
			}
		})(marker_l, i));

	
		
		locationMarkers.push(marker_l);
	}
	
	function setAllMarkersIcon(iconUrl){
		
		for(var i in locationMarkers) {
			
			if(locationMarkers.hasOwnProperty(i)) {
				
				marker_l = locationMarkers[i]
								
				marker_l.setIcon(iconUrl);
				
			}
			
		}
		
	}


	// Show/Hide Breakfast places
	var toggleBreakfast = document.getElementById("showBreakfast"),
		toggleLunch = document.getElementById("showLunch"),
		toggleCoffee = document.getElementById("showCoffee"),
		toggleDinner = document.getElementById("showDinner"),
		toggleAll = document.getElementById("showAll");


    toggleBreakfast.addEventListener( 'change', function() {
	    if(this.checked) {
	        for (i = 0; i < locationMarkers.length; i++) {

	        	locationMarkers[i].setVisible(false);

	        	if (locationMarkers[i].breakfast) {
	        		locationMarkers[i].setVisible(true);
	        	} 
			}
	    } 
	});

	toggleLunch.addEventListener( 'change', function() {
	    if(this.checked) {
	        for (i = 0; i < locationMarkers.length; i++) {

	        	locationMarkers[i].setVisible(false);

	        	if (locationMarkers[i].lunch) {
	        		locationMarkers[i].setVisible(true);
	        	} 
			}
	    } 
	});

	toggleCoffee.addEventListener( 'change', function() {
	    if(this.checked) {
	        for (i = 0; i < locationMarkers.length; i++) {

	        	locationMarkers[i].setVisible(false);

	        	if (locationMarkers[i].coffee) {
	        		locationMarkers[i].setVisible(true);
	        	} 
			}
	    } 
	});

	toggleDinner.addEventListener( 'change', function() {
	    if(this.checked) {
	        for (i = 0; i < locationMarkers.length; i++) {

	        	locationMarkers[i].setVisible(false);

	        	if (locationMarkers[i].dinner) {
	        		locationMarkers[i].setVisible(true);
	        	} 
			}
	    } 
	});

	toggleAll.addEventListener( 'change', function() {
	    if(this.checked) {
	        for (i = 0; i < locationMarkers.length; i++) {

	        	locationMarkers[i].setVisible(true);

			}
	    } 
	});


	//Show current Location
	var geoIcon = {
	    url: "site/img/geo-icon.gif",
	    //state your size parameters in terms of pixels
	    size: new google.maps.Size(30, 30),
	    scaledSize: new google.maps.Size(30, 30),
	    origin: new google.maps.Point(0,0)
	}
	var myloc = new google.maps.Marker({
	    clickable: false,
      	icon: geoIcon ,
      	optimized: false,
	    shadow: null,
	    zIndex: 999,
	    map: map
	});

	 if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
	     var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
	     myloc.setPosition(me);

	    var myoverlay = new google.maps.OverlayView();
		    myoverlay.draw = function () {
		        this.getPanes().markerLayer.id='geoMarkerLayer';
		    };
		myoverlay.setMap(map);

	 }, function(error) {
	     console.log("Geo location could nog be found.")
	 });

}


//Show-hide info panel
var hideInfo = document.getElementById("js-hide-info"),
	hideTxt = document.getElementById("js-hide-txt"),
	infoBox = document.getElementById("info-box");

hideInfo.addEventListener('click',function(){

	if (window.screen.width <= 767) {
		infoBox.classList.toggle("small");

		if ( infoBox.classList.contains("small") ) {
			hideTxt.innerHTML="bekijk info";
		} else {
			hideTxt.innerHTML="verberg info";
		}
	} else {
		infoBox.classList.toggle("side");

		if ( infoBox.classList.contains("side") ) {
			hideTxt.innerHTML="bekijk info";
		} else {
			hideTxt.innerHTML="verberg info";
		}
	}
	
}, false);

function adjustDynamicElements() {

	if (window.screen.width <= 767) {
		// Set the info panel to bottom
		infoBox.classList.remove("side");
		infoBox.classList.add("small");
		hideTxt.innerHTML="bekijk info";

		function ToggleMobileMenu() {
			var sections = document.getElementById("js-sections"),
				infoBox = document.getElementById("info-box");

		    ToggleMenuItems();
		}

		function ToggleMenuItems() {
			var menuItem1 = document.getElementById("js-mobile-nav-1"),
				menuItem2 = document.getElementById("js-mobile-nav-2"),
				tabItem1 = document.getElementById("js-mobile-tab-1"),
				tabItem2 = document.getElementById("js-mobile-tab-2"),
				body = document.getElementsByTagName("body")[0],
				closeTab = document.getElementById("js-info-section-close"),
				sections = document.getElementById("js-sections");

			// Show/hide info tabs
			menuItem1.onclick = function() {
				// Remove active classes
				sections.classList.remove("show");
				tabItem1.classList.remove("active");
				tabItem2.classList.remove("active");

				tabItem1.classList.add("active");
				sections.classList.add("show");

				// Set height for tabs to overflow scroll
				var bodyHeight = body.offsetHeight;
				tabItem1.style.height = bodyHeight + "px";
			}
			menuItem2.onclick = function() {
				// Remove active classes
				sections.classList.remove("show");
				tabItem1.classList.remove("active");
				tabItem2.classList.remove("active");

				tabItem2.classList.add("active");
				sections.classList.add("show");

				// Set height for overflow scroll
				var bodyHeight = body.offsetHeight;
				tabItem2.style.height = bodyHeight + "px";
			}

			// Close the tab
			closeTab.onclick = function() {
				var activeTab = document.querySelector(".section .active");
				sections.classList.remove("show");

				setTimeout(function(){ 
					tabItem1.classList.remove("active");
					tabItem1.style.height = "auto";
					tabItem2.classList.remove("active");
					tabItem2.style.height = "auto";
				}, 100);
			}

		}

		ToggleMobileMenu();

	} else {
		infoBox.classList.remove("small");
		infoBox.classList.add("side");
		hideTxt.innerHTML="bekijk info";
	}

}
adjustDynamicElements();





window.addEventListener('resize', function () {
	initMap();
	adjustDynamicElements();
})
