function initMap() {

	var btn_hide_s = document.getElementById("hideShops"),
		btn_show_s = document.getElementById("showShops"),
		btn_hide_r = document.getElementById("hideRestaurants"),
		btn_show_r = document.getElementById("showRestaurants"),
		btn_hide_si = document.getElementById("hideSights"),
		btn_show_si = document.getElementById("showSights"),
		locationInfo = document.getElementById("location-info");


	
	var shopMarkers = [];
	var restaurantMarkers = [];
	var sightMarkers = [];

	var herbivoor = {
		info: '<strong>De Herbivoor</strong><br>\
					100% vegan<br>\r\
					Gedempte Zuiderdiep <br> Groningen, 9711 HZ<br>\
					<a href="https://www.google.nl/maps/dir//De+Herbivoor,+Gedempte+Zuiderdiep+59,+9711+HC+Groningen/@53.2148417,6.5646821,17z/data=!4m15!1m6!3m5!1s0x47c9cd53e69aba2f:0xbb2363f021445f29!2sDe+Herbivoor!8m2!3d53.2148385!4d6.5668708!4m7!1m0!1m5!1m1!1s0x47c9cd53e69aba2f:0xbb2363f021445f29!2m2!1d6.5668708!2d53.2148385">Get Directions</a>',
		lat: 53.2148385,
		long: 6.5668708
	};

	var anat = {
		info: '<strong>ANAT</strong><br>\
					Verlengde Grachtstraat 1<br> Lunch, Cofee, dinner on thursday<br>\
					100% vegan<br>\
					<a href="https://www.google.nl/maps/dir//ANAT,+Verlengde+Grachtstraat+1,+9717+GD+Groningen/@53.2236257,6.5511642,17z/data=!4m15!1m6!3m5!1s0x47c9cd4651a598c9:0x7796b31dd2a8ac2f!2sANAT!8m2!3d53.2236225!4d6.5533529!4m7!1m0!1m5!1m1!1s0x47c9cd4651a598c9:0x7796b31dd2a8ac2f!2m2!1d6.5533529!2d53.2236225">Get Directions</a>',
		lat: 53.2236225,
		long: 6.5533529
	};

	var mechoui = {
		info: '<strong>Mechoui</strong><br>\r\
					Folkingestraat 38<br> North African dishes<br>\
					Several kind of mezzes, just ask for the vegan options<br>\
					<a href="https://www.google.nl/maps/dir//Mechoui,+Folkingestraat+38,+9711+JX+Groningen/@53.2155363,6.5628875,17z/data=!4m15!1m6!3m5!1s0x47c9cd517fc5950d:0x8fe9e487533540f3!2sMechoui!8m2!3d53.2155331!4d6.5650762!4m7!1m0!1m5!1m1!1s0x47c9cd517fc5950d:0x8fe9e487533540f3!2m2!1d6.5650762!2d53.2155331">Get Directions</a>',
		lat: 53.2155331,
		long: 6.5650762
	};

	var moghul = {
		info: '<strong>Kleine Moghul</strong><br>\r\
					Nieuwe Boteringestraat 62<br> Indian food dinner<br>\
					<a href="https://www.google.nl/maps/dir//De+Kleine+Moghul,+Nieuwe+Boteringestraat+62,+9712+PP+Groningen/@53.2240498,6.556989,17z/data=!4m15!1m6!3m5!1s0x47c9cd44523f4fd5:0xcbe5e9b813239f8b!2sDe+Kleine+Moghul!8m2!3d53.2240498!4d6.559183!4m7!1m0!1m5!1m1!1s0x47c9cd44523f4fd5:0xcbe5e9b813239f8b!2m2!1d6.559183!2d53.2240498">Get Directions</a>',
		lat: 53.2240498,
		long: 6.559183
	};

	var buurman = {
		info: '<strong>Buurman & Buurman</strong><br>\r\
					Rodeweg 6<br> Pizza <br> Choose one of the two veggie pizza\'s and aks if they van veganize them</br>\
					<a href="https://www.google.nl/maps/dir//Eetwinkel+Buurman+%26+Buurman+Groningen,+Rodeweg+6,+9715+AW+Groningen/@53.2273517,6.5592295,17z/data=!4m15!1m6!3m5!1s0x47c9cd43713cee77:0x1f057e46b756b4db!2sEetwinkel+Buurman+%26+Buurman+Groningen!8m2!3d53.2273517!4d6.5614235!4m7!1m0!1m5!1m1!1s0x47c9cd43713cee77:0x1f057e46b756b4db!2m2!1d6.5614235!2d53.2273517">Get Directions</a>',
		lat:53.2273517,
		long:6.5614235
	};

	var semarang = {
		info: '<strong>Toko Semarang</strong><br>\r\
					Gedempte Zuiderdiep 119<br> Indonesian buffet, takeaway<br> They have one dish: ask for Nasi Rames Vegetarian without egg<br>\
					<a href="https://www.google.nl/maps/dir//Toko+%22Semarang%22,+Gedempte+Zuiderdiep+119,+9711+HE+Groningen/@53.2147378,6.56118,17z/data=!4m15!1m6!3m5!1s0x47c9cd523b6131e7:0xd3bf9bc95c329c91!2sToko+%22Semarang%22!8m2!3d53.2147378!4d6.563374!4m7!1m0!1m5!1m1!1s0x47c9cd523b6131e7:0xd3bf9bc95c329c91!2m2!1d6.563374!2d53.2147378">Get Directions</a>',
		lat: 53.2147378,
		long: 6.563374
	};

	var toet = {
		info: '<strong>Toet</strong><br>\r\
					Gedempte Zuiderdiep 85<br> Coffee, cake<br> Most of the time they have one vegan cake, just ask<br>\
					<a href="https://www.google.nl/maps/dir//TOET,+het+toetjesparadijs,+Gedempte+Zuiderdiep+85,+9711+HC+Groningen/@53.2146439,6.5632375,17z/data=!4m15!1m6!3m5!1s0x47c9cd53cfc23367:0x510a079c67041c9c!2sTOET,+het+toetjesparadijs!8m2!3d53.2146439!4d6.5654315!4m7!1m0!1m5!1m1!1s0x47c9cd53cfc23367:0x510a079c67041c9c!2m2!1d6.5654315!2d53.2146439">Get Directions</a>',
		lat: 53.2146439,
		long: 6.5654315
	};

	var soepwinkel = {
		info: '<strong>De Soepwinkel</strong><br>\r\
					Oude Kijk in Het Jatstraat 12<br> Soup<br> Most of the time they have one vegan soup, just ask<br>\
					<a href="https://www.google.nl/maps/dir//De+Soepwinkel,+Oude+Kijk+in+Het+Jatstraat+12,+9712+EG+Groningen/@53.2186361,6.5602621,17z/data=!4m15!1m6!3m5!1s0x47c9cd502942e4f5:0xa24a465b8195b5af!2sDe+Soepwinkel!8m2!3d53.2186361!4d6.5624561!4m7!1m0!1m5!1m1!1s0x47c9cd502942e4f5:0xa24a465b8195b5af!2m2!1d6.5624561!2d53.2186361">Get Directions</a>',
		lat: 53.2186361,
		long: 6.5624561
	};

	var feelgood = {
		info: '<strong>Feel Good</strong><br>\r\
					Oude Kijk in Het Jatstraat 29<br> Lunch, coffee<br> Just ask for the vegan options<br>\
					<a href="https://www.google.nl/maps/dir//Feel+Good,+Oude+Kijk+in+Het+Jatstraat+29,+9712+EB+Groningen/@53.2191437,6.5599756,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fd89a2d49:0x6c944d6249cc96fa!2sFeel+Good!8m2!3d53.2191437!4d6.5621696!4m7!1m0!1m5!1m1!1s0x47c9cd4fd89a2d49:0x6c944d6249cc96fa!2m2!1d6.5621696!2d53.2191437">Get Directions</a>',
		lat: 53.2191437,
		long: 6.5621696
	};
	var fatoush = {
		info: '<strong>Fatoush</strong><br>\r\
					Damsterdiep 15<br> Libanese dishes<br> They have about 8 mezzes, just ask for the vegan options<br>\
					<a href="https://www.google.nl/maps/dir//Fatoush,+Damsterdiep+15,+9711+SG+Groningen/@53.2170444,6.5733835,17z/data=!4m15!1m6!3m5!1s0x47c9cd56290c49af:0x5c9c9f7235152eb6!2sFatoush!8m2!3d53.2170412!4d6.5755722!4m7!1m0!1m5!1m1!1s0x47c9cd56290c49af:0x5c9c9f7235152eb6!2m2!1d6.5755722!2d53.2170412">Get Directions</a>',
		lat: 53.2170412,
		long: 6.5755722
	};

	var bagelsbeans = {
		info: '<strong>Bagels & Beans</strong><br>\
					Zwanestraat 30<br> Lunch / Bagels<br>\
					They have 4 vegan options : Vegan chicken (warm), Dutch Weedburger (warm), Humus (cold), Banana (cold) <br>\
					<a href="https://www.google.nl/maps/dir//Bagels+%26+Beans,+Zwanestraat+30,+9712+CN+Groningen/@53.2179907,6.5633714,20z/data=!4m15!1m6!3m5!1s0x0:0x7339c9a03f9c3668!2sBagels+%26+Beans!8m2!3d53.2181003!4d6.5634754!4m7!1m0!1m5!1m1!1s0x47c9cd51cb25052f:0x7339c9a03f9c3668!2m2!1d6.5634757!2d53.2181004">Get Directions</a>',
		lat: 53.2181004,
		long: 6.5634757
	};

	var eko_zuiderdiep = {
		info: '<strong>Ekoplaza</strong><br>\r\
					 Gedempte Zuiderdiep 65<br> Open: Mo-Fr 9-19<br> Sat: 9-18, Sun: 12-17<br>\
					<a href="https://www.google.nl/maps/dir//Ekoplaza,+Gedempte+Zuiderdiep+65,+9711+HC+Groningen/@53.2147792,6.5643923,17z/data=!4m15!1m6!3m5!1s0x47c9cd53e7987ca7:0x6fc6dfbac3b345c1!2sEkoplaza!8m2!3d53.214776!4d6.566581!4m7!1m0!1m5!1m1!1s0x47c9cd53e7987ca7:0x6fc6dfbac3b345c1!2m2!1d6.566581!2d53.214776">Get Directions</a>',
		lat: 53.214776,
		long: 6.566581
	};

	var eko_ebbinge = {
		info: '<strong>Ekoplaza</strong><br>\r\
					 Nieuwe Ebbingestraat 49-51<br> Open: Mo-Fr 8:30-18:30<br> Sat: 8:30-17:30, Sun: closed<br>\
					<a href="https://www.google.nl/maps/dir//Ekoplaza+Nieuwe+Ebbingestraat,+Nieuwe+Ebbingestraat+49-51,+9712+NE+Groningen/@53.2238819,6.5612408,17z/data=!4m15!1m6!3m5!1s0x47c9cd5b2b51282f:0x148ba0e234b1bb99!2sEkoplaza+Nieuwe+Ebbingestraat!8m2!3d53.2238787!4d6.5634295!4m7!1m0!1m5!1m1!1s0x47c9cd5b2b51282f:0x148ba0e234b1bb99!2m2!1d6.5634295!2d53.2238787">Get Directions</a>',
		lat: 53.2238787,
		long: 6.5634295
	};

	var vegansuper = {
		info: '<strong>Vegansuper</strong><br>\r\
					 Nieuwe Ebbingestraat 87<br> Open: Mo-Fr 8:30-20<br> Th: 8:30-21, Sat: 8:30-17:30, Sun: closed<br>\
					<a href="https://www.google.nl/maps/dir//Vegansuper,+Nieuwe+Ebbingestraat+87,+9712+NG+Groningen/@53.2250471,6.560053,17z/data=!4m15!1m6!3m5!1s0x47c9cd44c09adb71:0xba58b7016823dca4!2sVegansuper!8m2!3d53.2250439!4d6.5622417!4m7!1m0!1m5!1m1!1s0x47c9cd44c09adb71:0xba58b7016823dca4!2m2!1d6.5622417!2d53.2250439">Get Directions</a>',
		lat: 53.2250439,
		long: 6.5622417
	};

	var stadsakker = {
		info: '<strong>De Stadsakker</strong><br>\r\
					Fresh local, bio vegetables (go on Saturday)<br>\r\
					Oude Kijk in Het Jatstraat 38<br> Open: Mo-Fr 10-18<br> Sat: 10-17, Sun: closed<br>\
					<a href="https://www.google.nl/maps/dir//De+Stadsakker,+Oude+Kijk+in+Het+Jatstraat+38,+9712+EK+Groningen/@53.2195808,6.5594134,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fdd5d42df:0x84468ba2c4d29e8f!2sDe+Stadsakker!8m2!3d53.2195776!4d6.5616021!4m7!1m0!1m5!1m1!1s0x47c9cd4fdd5d42df:0x84468ba2c4d29e8f!2m2!1d6.5616021!2d53.2195776">Get Directions</a>',
		lat: 53.2195776,
		long: 6.5616021
	};

	var markt_brood = {
		info: '<strong>Markt (Brood Nodig)</strong><br>\r\
					 Vismarkt<br>Thu, Fri, Sat: 9-17<br>\r\
					<a href="https://www.google.nl/maps/dir//Groningen+markten,+Vismarkt,+9711+JB+Groningen/@53.2172825,6.5628864,17z/data=!4m15!1m6!3m5!1s0x47c9cd51a0b3d991:0x10b7354089548e3a!2sGroningen+markten!8m2!3d53.2172793!4d6.5650751!4m7!1m0!1m5!1m1!1s0x47c9cd51a0b3d991:0x10b7354089548e3a!2m2!1d6.5650751!2d53.2172793">Get Directions</a>',
		lat: 53.2172793,
		long: 6.5650751
	};

	var markt_groenten = {
		info: '<strong>Markt (Bio Vegetables)</strong><br>\r\
					 Vismarkt<br>Fr & Sa: 9-17<br>\r\
					<a href="https://www.google.nl/maps/dir//Groningen+markten,+Vismarkt,+9711+JB+Groningen/@53.2172825,6.5628864,17z/data=!4m15!1m6!3m5!1s0x47c9cd51a0b3d991:0x10b7354089548e3a!2sGroningen+markten!8m2!3d53.2172793!4d6.5650751!4m7!1m0!1m5!1m1!1s0x47c9cd51a0b3d991:0x10b7354089548e3a!2m2!1d6.5650751!2d53.2172793">Get Directions</a>',
		lat: 53.2173000,
		long: 6.5654190
	};

	var schiermonnikoog = {
		info: '<strong>Schiermonnikoog</strong><br>\r\
					 Island<br>Take the ferry (45min.) from Lauwersoog<br>\r\
					<a href="https://goo.gl/maps/2teKLwG41Q22">Get Directions</a>',
		lat: 53.4937378,
		long: 6.2247559
	};
	var theefabriek = {
		info: '<strong>De Theefabriek</strong><br>\r\
					Hoofdstraat 15-25, Houwerzijl<br>Small museum + thea!<br>Mo: closed, Tue-Sun 10-17<br>\
					<a href="https://goo.gl/maps/fDwo7rA8kSQ2">Get Directions</a><br>\
					<a href="https://theefabriek.nl/" target="_blank">www.theefabriek.nl</a>',
		lat: 53.3358704,
		long: 6.34009
	};

	var norg = {
		info: '<strong>Norg</strong><br>\r\
					 Sand Dunes and a forest and a small hill<br>Nice to walk!<br>\
					<a href="https://goo.gl/maps/HB4H7yy27Hq">Get Directions</a>',
		lat: 53.0780162,
		long: 6.4487359
	};

	var friescheveen = {
		info: '<strong>Friescheveen</strong><br>\r\
					 Meerweg 136, Haren<br>Rent a rowboat or canoe<br>Relax on the small lake<br>\
					<a href="https://goo.gl/maps/n3fDNhcAba22">Get Directions</a>',
		lat: 53.1636318,
		long: 6.582271
	};

	var weerribben = {
		info: '<strong>National Park Weerribben</strong><br>\r\
					 Hoogeweg 27A, Ossenzijl<br>Rent a small electric boat or canoe or walk in the Park<br>Have a picnic at one of the stops<br>\
					<a href="https://goo.gl/maps/q6RxQERgWdt">Get Directions</a><br>\
					<a href="https://degelelis.nl/" target="_blank">www.degelelis.nl</a>',
		lat: 52.8070668,
		long: 5.9280102
	};

	var slochterbos = {
		info: '<strong>Slochterbos</strong><br>\r\
					Slochteren, Hoofdweg 60 <br>A small park to walk, relax and have a picnic.<br>Take bus 78 from Groningen CS<br>\
					<a href="https://goo.gl/maps/Wbwc7hcFHZA2">Get Directions</a>',
		lat: 53.2154492,
		long: 6.8096068
	};

	var paterswoldsemeer = {
		info: '<strong>Paterswoldse meer</strong><br>\r\
					Madijk 1, Eelderwolde<br>Walk/bike around the lake, visit the mill, etc.<br>\
					<a href="https://www.google.nl/maps/dir//De+Helper,+9752+XJ+Haren/@53.178985,6.55757,14.4z/data=!4m15!1m6!3m5!1s0x0:0x22e3042ab70c26f2!2sDe+Helper!8m2!3d53.1762413!4d6.5748855!4m7!1m0!1m5!1m1!1s0x47c82d7b386b3301:0x22e3042ab70c26f2!2m2!1d6.574886!2d53.1762414">Get Directions</a>',
		lat: 53.1762413,
		long: 6.5748855
	};

	var onlanden = {
		info: '<strong>De Onlanden (national park)</strong><br>\r\
					Haren / Eelderwolde <br>Several routes to bike & walk from this point. Lots of birds + other animals.<br>\
					<a href="https://www.google.nl/maps/dir//De+Onlanderij,+Madijk+1,+9766+TZ+Eelderwolde/@53.1776221,6.5316646,16z/data=!4m15!1m6!3m5!1s0x47c832f24307ee3f:0xb1520e54bcab564d!2sDe+Onlanderij!8m2!3d53.1777713!4d6.5336037!4m7!1m0!1m5!1m1!1s0x47c832f24307ee3f:0xb1520e54bcab564d!2m2!1d6.5336037!2d53.1777713">Get Directions</a>',
		lat: 53.1777713,
		long: 6.5336037
	};

	var locations = [
      [herbivoor.info, herbivoor.lat, herbivoor.long, 0],
      [anat.info, anat.lat, anat.long, 1],
      [mechoui.info, mechoui.lat, mechoui.long, 2],
      [moghul.info, moghul.lat, moghul.long, 3],
      [buurman.info, buurman.lat, buurman.long, 4],
      [semarang.info, semarang.lat, semarang.long, 5],
      [toet.info, toet.lat, toet.long, 6],
      [soepwinkel.info, soepwinkel.lat, soepwinkel.long, 7],
      [feelgood.info, feelgood.lat, feelgood.long, 8],
      [fatoush.info, fatoush.lat, fatoush.long, 9],
      [bagelsbeans.info, bagelsbeans.lat, bagelsbeans.long, 10],

    ];

    var shops = [
      [eko_zuiderdiep.info, eko_zuiderdiep.lat, eko_zuiderdiep.long, 0],
      [eko_ebbinge.info, eko_ebbinge.lat, eko_ebbinge.long, 1],
      [vegansuper.info, vegansuper.lat, vegansuper.long, 2],
      [stadsakker.info, stadsakker.lat, stadsakker.long, 3],
      [markt_brood.info, markt_brood.lat, markt_brood.long, 4],
      [markt_groenten.info, markt_groenten.lat, markt_groenten.long, 5],
    ];

    var sights = [
      [schiermonnikoog.info, schiermonnikoog.lat, schiermonnikoog.long, 0],
      [theefabriek.info, theefabriek.lat, theefabriek.long, 1],
      [norg.info, norg.lat, norg.long, 2],
      [friescheveen.info, friescheveen.lat, friescheveen.long, 3],
      [weerribben.info, weerribben.lat, weerribben.long, 4],
      [slochterbos.info, slochterbos.lat, slochterbos.long, 5],
      [paterswoldsemeer.info, paterswoldsemeer.lat, paterswoldsemeer.long, 6],
      [onlanden.info, onlanden.lat, onlanden.long, 7],
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
			zoom: 15,
			center: new google.maps.LatLng(53.2197605, 6.555695),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: true,
	        mapTypeControlOptions: {
	            position: google.maps.ControlPosition.RIGHT_TOP,
	            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
	                    'styled_map']
	        }
		});	
	} else {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 13,
			center: new google.maps.LatLng(53.2090769, 6.5645437),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			mapTypeControl: false,
			zoomControl: true,
          	zoomControlOptions: {
              position: google.maps.ControlPosition.RIGHT_TOP
          	},
          	streetViewControl: false,
	        fullscreenControl: false
		});
	}

	

	map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

	var infowindow_l = new google.maps.InfoWindow({});
	var infowindow_s = new google.maps.InfoWindow({});
	var infowindow_si = new google.maps.InfoWindow({});
	var nav = document.getElementById('nav');

	// location markers
	var marker_l, i;
	for (i = 0; i < locations.length; i++) {
		marker_l = new google.maps.Marker({
			position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4], locations[i][5], locations[i][6], locations[i][7], locations[i][8], locations[i][9]),
			icon: 'img/eat.svg',
			//icon: goldStar,
			map: map
		});

		google.maps.event.addListener(marker_l, 'click', (function (marker_l, i) {
			return function () {
				locationInfo.classList.add('active');
				infowindow_l.setContent(locations[i][0]);
				marker_l.set("class", "clicked");
				nav.classList.add("active");
				//infowindow_l.open(map, marker_l);
				document.getElementById('location-info').innerHTML = infowindow_l.content;
			}
		})(marker_l, i));

		restaurantMarkers.push(marker_l);
	}

	// shop markers
	var marker_s, i;
	for (i = 0; i < shops.length; i++) {
		marker_s = new google.maps.Marker({
			position: new google.maps.LatLng(shops[i][1], shops[i][2], shops[i][3], shops[i][4], shops[i][5], shops[i][6]), 
			icon: 'img/shop.svg',
			map: map
		});

		google.maps.event.addListener(marker_s, 'click', (function (marker_s, i) {
			return function () {
				locationInfo.classList.add('active');
				infowindow_s.setContent(shops[i][0]);
				marker_s.set("class", "clicked");
				nav.classList.add("active");
				//infowindow_s.open(map, marker_s);
				document.getElementById('location-info').innerHTML = infowindow_s.content;
			}
		})(marker_s, i));

		shopMarkers.push(marker_s);
	}

	// sight markers
	var marker_si, i;
	for (i = 0; i < sights.length; i++) {
		marker_si = new google.maps.Marker({
			position: new google.maps.LatLng(sights[i][1], sights[i][2], sights[i][3], sights[i][4], sights[i][5], sights[i][6]), 
			icon: 'img/sight.svg',
			map: map
		});

		google.maps.event.addListener(marker_si, 'click', (function (marker_si, i) {
			return function () {
				locationInfo.classList.add('active');
				infowindow_si.setContent(sights[i][0]);
				marker_si.set("class", "clicked");
				nav.classList.add("active");
				//infowindow_s.open(map, marker_s);
				document.getElementById('location-info').innerHTML = infowindow_si.content;
			}
		})(marker_si, i));

		sightMarkers.push(marker_si);
	}


	// Hide Shops
	btn_hide_s.addEventListener('click',function(){
		btn_show_s.checked = false;
		for (i = 0; i < shopMarkers.length; i++) {
			shopMarkers[i].setVisible(false);
		}
	}, false);

	// Show Shops
	btn_show_s.addEventListener('click',function(){
		btn_hide_s.checked = false;
		for (i = 0; i < shopMarkers.length; i++) {
			shopMarkers[i].setVisible(true);
		}
	}, false);

	// Hide Restaurants
	btn_hide_r.addEventListener('click',function(){
		btn_show_r.checked = false;
		for (i = 0; i < restaurantMarkers.length; i++) {
			restaurantMarkers[i].setVisible(false);
		}
	}, false);

	// Show Restaurants
	btn_show_r.addEventListener('click',function(){
		btn_hide_r.checked = false;
		for (i = 0; i < restaurantMarkers.length; i++) {
			restaurantMarkers[i].setVisible(true);
		}
	}, false);

	// Hide Sights
	if (window.screen.width >= 860) {
		btn_hide_si.addEventListener('click',function(){
			btn_show_si.checked = false;
			for (i = 0; i < sightMarkers.length; i++) {
				sightMarkers[i].setVisible(false);
			}
			map.setCenter(new google.maps.LatLng(53.2197605,6.555695));
			map.setZoom(15);
		}, false);

		// Show Sights
		btn_show_si.addEventListener('click',function(){
			btn_hide_si.checked = false;
			for (i = 0; i < sightMarkers.length; i++) {
				sightMarkers[i].setVisible(true);
			}
			map.setCenter(new google.maps.LatLng(53.1752246, 6.0483945));
			map.setZoom(10);
		}, false);
	} else {
		btn_hide_si.addEventListener('click',function(){
			btn_show_si.checked = false;
			for (i = 0; i < sightMarkers.length; i++) {
				sightMarkers[i].setVisible(false);
			}
			map.setCenter(new google.maps.LatLng(53.2123666,6.5647154));
			map.setZoom(13);
		}, false);

		// Show Sights
		btn_show_si.addEventListener('click',function(){
			btn_hide_si.checked = false;
			for (i = 0; i < sightMarkers.length; i++) {
				sightMarkers[i].setVisible(true);
			}
			map.setCenter(new google.maps.LatLng(52.998836, 6.4867811));
			map.setZoom(8);
		}, false);
	}


	//Show current Location
	var myloc = new google.maps.Marker({
	     clickable: false,
	     icon: {
             path: google.maps.SymbolPath.CIRCLE,
             strokeColor: '#33AB31',
             scale: 10
         },
	     shadow: null,
	     zIndex: 999,
	     map: map
	 });

	 if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function(pos) {
	     var me = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
	     myloc.setPosition(me);
	 }, function(error) {
	     console.log("doesnt work")
	 });

}

//Show-hide Sights
var optionsBtn = document.getElementById("optionsBtn"),
	options= document.getElementById("options");

optionsBtn.addEventListener('click',function(){
	options.classList.toggle("show");

}, false);

//Show-hide info panel
var hideInfo = document.getElementById("js-hide-info"),
	hideTxt = document.getElementById("js-hide-txt"),
	infoPanel = document.getElementById("nav");

hideInfo.addEventListener('click',function(){
	infoPanel.classList.toggle("hidden");

	if ( infoPanel.classList.contains("hidden") ) {
		hideTxt.innerHTML="show";
	} else {
		hideTxt.innerHTML="hide";
	}
	
}, false);






window.addEventListener('resize', function () {
	initMap();
})
