function initMap() {

	var locationInfo = document.getElementById("location-info");
	var locationMarkers = [];

	var herbivoor = {
		info: '<strong>De Herbivoor</strong><br>\r\
				Gedempte Zuiderdiep 59<br> Lunch & cake, dinner on Thursday<br>\
				100% vegan<br>\
				<a href="https://www.google.nl/maps/dir//De+Herbivoor,+Gedempte+Zuiderdiep+59,+9711+HC+Groningen/@53.2148417,6.5646821,17z/data=!4m15!1m6!3m5!1s0x47c9cd53e69aba2f:0xbb2363f021445f29!2sDe+Herbivoor!8m2!3d53.2148385!4d6.5668708!4m7!1m0!1m5!1m1!1s0x47c9cd53e69aba2f:0xbb2363f021445f29!2m2!1d6.5668708!2d53.2148385">Get Directions</a>',
		lat: 53.2148385,
		long: 6.5668708,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: true
	};

	var anat = {
		info: '<strong>ANAT</strong><br>\r\
				Verlengde Grachtstraat 1<br>Breakfast, lunch & cake<br>\
				100% vegan<br>\
				<a href="https://www.google.nl/maps/dir//ANAT,+Verlengde+Grachtstraat+1,+9717+GD+Groningen/@53.2236257,6.5511642,17z/data=!4m15!1m6!3m5!1s0x47c9cd4651a598c9:0x7796b31dd2a8ac2f!2sANAT!8m2!3d53.2236225!4d6.5533529!4m7!1m0!1m5!1m1!1s0x47c9cd4651a598c9:0x7796b31dd2a8ac2f!2m2!1d6.5533529!2d53.2236225">Get Directions</a>',
		lat: 53.2236225,
		long: 6.5533529,
		breakfast: true,
		lunch: true,
		dinner: false,
		coffee: true
	};

	var mechoui = {
		info: '<strong>Mechoui</strong><br>\r\
				Folkingestraat 38<br> North African dishes<br>\
				Just ask for the vegan options<br>\
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
				Nieuwe Boteringestraat 62<br> Indian food<br>\
				Just ask for the vegan options<br>\
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
				Choose one of the two veggie pizza\'s and ask to veganize it</br>\
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
				Gedempte Zuiderdiep 119<br> Indonesian buffet & takeaway<br>\
				They have one dish: ask for Nasi Rames, vegetarian without egg<br>\
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
				Gedempte Zuiderdiep 85<br> Pancakes<br>\
				They serve several vegan pancakes<br>\
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
				Ubbo Emmiusstraat 19<br>Cake<br>\
				Most of the time they have one vegan cake<br>\
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
				Oude Kijk in Het Jatstraat 12<br>Soup<br>\
				Most of the time they have one vegan soup<br>\
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
				Oude Kijk in Het Jatstraat 29<br>Breakfast, lunch, cake & dinner<br>\
				Several vegan options. Check their <a href="https://www.facebook.com/feelgoodgroningen" target:"_blank">Facebook page</a> if dinner is vegan.<br>\
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
				Damsterdiep 15<br> Libanese dishes<br>\
				Just ask for the vegan options<br>\
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
				Zwanestraat 30<br>Breakfast & lunch<br>\
				Several vegan bagels<br>\
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
				Aweg 2<br>Lunch & dinner<br>\
				Some vegan options<br>\
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
				Langestraat 66<br>Lunch & dinner<br>\
				Several vegan dishes and even a full three course vegan menu<br>\
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
				Oosterstraat 13A<br>Dinner<br>\
				Almost 100% vegan, including a three course vegan menu<br>\
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
				They have two pizza\'s with vegan cheese, pasta\'s, vegan shoarma and vegan tiramisu<br>\
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
				Vegan kapsalon, vegan burgers and several other vegan snacks<br>\
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
				Zuiderkerkstraat 7<br>Dinner<br>\
				They have one vegan three course menu<br>\
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
				Steentilstraat 36-1<br>Dinner & snacks<br>\
				Several choices i.e. the cheese fondue<br>\
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
				Oude Kijk in Het Jatstraat 24<br>Cake<br>\
				They have one vegan fruitcake<br>\
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
					 Burger and a couple of other snacks<br>\
					<a href="https://www.google.nl/maps/dir//Vegansuper,+Nieuwe+Ebbingestraat+87,+9712+NG+Groningen/@53.2250471,6.560053,17z/data=!4m15!1m6!3m5!1s0x47c9cd44c09adb71:0xba58b7016823dca4!2sVegansuper!8m2!3d53.2250439!4d6.5622417!4m7!1m0!1m5!1m1!1s0x47c9cd44c09adb71:0xba58b7016823dca4!2m2!1d6.5622417!2d53.2250439">Get Directions</a>',
		lat: 53.2250439,
		long: 6.5622417,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var blabla = {
		info: '<strong>Bla Bla</strong><br>\r\
				Nieuwe+Boteringestraat 9<br>Dinner<br>\
				Main course and starter. More main courses possible, just ask.<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Restaurant+Bla+Bla,+Nieuwe+Boteringestraat+9,+9712+PE+Groningen/@53.222392,6.559391,17z/data=!4m15!1m6!3m5!1s0x47c9cd453f67f69d:0x97fb8ed4c866d28f!2sRestaurant+Bla+Bla!8m2!3d53.222392!4d6.561585!4m7!1m0!1m5!1m1!1s0x47c9cd453f67f69d:0x97fb8ed4c866d28f!2m2!1d6.561585!2d53.222392">Get Directions</a>',
		lat: 53.222392,
		long: 6.561585,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var beeren = {
		info: '<strong>Beer&</strong><br>\r\
				Rodeweg 1<br>Dinner<br>\
				Starter, main course, side dishes and other vegan snacks\
				<a target="_blank" href="https://www.google.nl/maps/dir//Beer%26,+Rodeweg+1,+9715+AW+Groningen/@53.2271723,6.5594446,17z/data=!4m15!1m6!3m5!1s0x47c9cd436fbfe921:0x240884cf770ba046!2sBeer%26!8m2!3d53.2271723!4d6.5616386!4m7!1m0!1m5!1m1!1s0x47c9cd436fbfe921:0x240884cf770ba046!2m2!1d6.5616386!2d53.2271723">Get Directions</a>',
		lat: 53.2271723,
		long: 6.5616386,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var bijbritta = {
		info: '<strong>Bij Britta</strong><br>\r\
				Oude Kijk in ’t Jatstraat 27<br>Lunch & cake<br>\
				Sandwich and cake<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Bij+Britta,+9712+EB+Groningen/@53.2190868,6.5600139,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fd8d0f8bd:0x652dfca6fdaa0279!2sBij+Britta!8m2!3d53.2190868!4d6.5622079!4m7!1m0!1m5!1m1!1s0x47c9cd4fd8d0f8bd:0x652dfca6fdaa0279!2m2!1d6.5622079!2d53.2190868">Get Directions</a>',
		lat: 53.2190868,
		long: 6.5622079,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var bodega = {
		info: '<strong>Bodega y Tapas</strong><br>\r\
				Damsterdiep 20<br>Dinner<br>\
				Tapas (+/- 8 sorts) <br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Bodega+Y+Tapas,+Damsterdiep+20,+9711+SK+Groningen/@53.2175327,6.5729978,17z/data=!4m15!1m6!3m5!1s0x47c9cd562d33a45b:0x829d31f151a1d0e7!2sBodega+Y+Tapas!8m2!3d53.2175327!4d6.5751918!4m7!1m0!1m5!1m1!1s0x47c9cd562d33a45b:0x829d31f151a1d0e7!2m2!1d6.5751918!2d53.2175327">Get Directions</a>',
		lat: 53.2175327,
		long: 6.5751918,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var curryhuis = {
		info: '<strong>Curry Huis</strong><br>\r\
				Kerklaan 23<br>Dinner<br>\
				About 5 different curries<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Curryhuis+restaurant:+Indiaas+Groningen,+Kerklaan+23,+9717+HA+Groningen/@53.2242538,6.5509214,17z/data=!4m15!1m6!3m5!1s0x47c9cd46fe340c85:0x245ba85574832298!2sCurryhuis+restaurant:+Indiaas+Groningen!8m2!3d53.2242538!4d6.5531154!4m7!1m0!1m5!1m1!1s0x47c9cd46fe340c85:0x245ba85574832298!2m2!1d6.5531154!2d53.2242538">Get Directions</a>',
		lat: 53.2242538,
		long: 6.5531154,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var dubbeljoe = {
		info: '<strong>Dubbeljoe J</strong><br>\r\
				Folkingestraat 49<br>Lunch<br>\
				Salad, soup and vegan stew<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Dubbeljoe+J,+Folkingestraat+49,+9711+JV+Groningen/@53.2152714,6.562704,17z/data=!4m15!1m6!3m5!1s0x47c9cd53d524581f:0x381b96d307816595!2sDubbeljoe+J!8m2!3d53.2152714!4d6.564898!4m7!1m0!1m5!1m1!1s0x47c9cd53d524581f:0x381b96d307816595!2m2!1d6.564898!2d53.2152714">Get Directions</a>',
		lat: 53.2152714,
		long: 6.564898,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var gustatio = {
		info: '<strong>Gustatio</strong><br>\r\
				Oosterstraat 3<br>Dinner<br>\
				One vegan main course (pasta)<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Gustatio,+Oosterstraat+3,+9711+NN+Groningen/@53.218197,6.5667042,17z/data=!4m15!1m6!3m5!1s0x47c82d4cdd3a86b9:0x6232e991fcb14037!2sGustatio!8m2!3d53.218197!4d6.5688982!4m7!1m0!1m5!1m1!1s0x47c82d4cdd3a86b9:0x6232e991fcb14037!2m2!1d6.5688982!2d53.218197">Get Directions</a>',
		lat: 53.218197,
		long: 6.5688982,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var bakkerscafe = {
		info: '<strong>Het Bakkerscafé</strong><br>\r\
				Zwanestraat 26<br>Lunch<br>\
				Bread with several dips and grilled vegetables<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Het+Bakkerscaf%C3%A9,+Zwanestraat+26,+9712+CN+Groningen/@53.218139,6.5614923,17z/data=!4m15!1m6!3m5!1s0x47c9cd51caa6eab7:0xfbe5625896a7e6b0!2sHet+Bakkerscaf%C3%A9!8m2!3d53.218139!4d6.5636863!4m7!1m0!1m5!1m1!1s0x47c9cd51caa6eab7:0xfbe5625896a7e6b0!2m2!1d6.5636863!2d53.218139">Get Directions</a>',
		lat: 53.218139,
		long: 6.5636863,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var concerthuis = {
		info: '<strong>Het Concerthuis</strong><br>\r\
				Poelestraat 30<br>Breakfast, lunch & dinner<br>\
				Vegan options all day long + foodsharing<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Het+Concerthuis,+Poelestraat+30,+9712+KB+Groningen/@53.218446,6.568325,17z/data=!4m15!1m6!3m5!1s0x47c9cd572337fe3b:0x8cb6708033a8417f!2sHet+Concerthuis!8m2!3d53.218446!4d6.570519!4m7!1m0!1m5!1m1!1s0x47c9cd572337fe3b:0x8cb6708033a8417f!2m2!1d6.570519!2d53.218446">Get Directions</a>',
		lat: 53.218446,
		long: 6.570519,
		breakfast: true,
		lunch: true,
		dinner: true,
		coffee: false
	};

	var holtbar = {
		info: '<strong>Holtbar</strong><br>\r\
				Oude Kijk in Het Jatstraat 20<br>Breakfast<br>\
				Smoothie bowl + energybars<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//HOLTBAR+concept+store,+Oude+Kijk+in+Het+Jatstraat+20,+9712+EH+Groningen/@53.2188287,6.5599752,17z/data=!4m15!1m6!3m5!1s0x47c9cd5028444acf:0x389d31d2a40a712a!2sHOLTBAR+concept+store!8m2!3d53.2188287!4d6.5621692!4m7!1m0!1m5!1m1!1s0x47c9cd5028444acf:0x389d31d2a40a712a!2m2!1d6.5621692!2d53.2188287">Get Directions</a>',
		lat: 53.2188287,
		long: 6.5621692,
		breakfast: true,
		lunch: false,
		dinner: false,
		coffee: false
	};

	var javaans = {
		info: '<strong>Javaans Eetcafé Groningen</strong><br>\r\
				Schuitendiep 33<br>Dinner<br>\
				Indonesian thali and main course with rice<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Javaans+Eetcafe+Groningen,+Schuitendiep+33,+9711+RA+Groningen/@53.2180179,6.570403,17z/data=!4m15!1m6!3m5!1s0x47c9cd57a98d8b6b:0x33883194d243417e!2sJavaans+Eetcafe+Groningen!8m2!3d53.2180179!4d6.572597!4m7!1m0!1m5!1m1!1s0x47c9cd57a98d8b6b:0x33883194d243417e!2m2!1d6.572597!2d53.2180179">Get Directions</a>',
		lat: 53.2188287,
		long: 6.5621692,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var opznkop = {
		info: '<strong>Kattencafé Op z´n Kop</strong><br>\r\
				Oude Ebbingestraat 57<br>Ontbijt en lunch<br>\
				Sandwiches, soy yoghurt with fuit and vegan snacks.<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Kattencaf%C3%A9+Op+z\'n+Kop,+Oude+Ebbingestraat+57,+9712+HC+Groningen/@53.2207933,6.5641078,17z/data=!4m15!1m6!3m5!1s0x47c9cd5a7f8fa731:0x8a890c3dce4569e8!2sKattencaf%C3%A9+Op+z\'n+Kop!8m2!3d53.2207933!4d6.5663018!4m7!1m0!1m5!1m1!1s0x47c9cd5a7f8fa731:0x8a890c3dce4569e8!2m2!1d6.5663018!2d53.2207933">Get Directions</a>',
		lat: 53.2207933,
		long: 6.5663018,
		breakfast: true,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var kokanje = {
		info: '<strong>Land van Kokanje</strong><br>\r\
				Oude Boteringestraat 9<br>Lunch<br>\
				Dutch Weedburger<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Land+van+Kokanje,+Oude+Boteringestraat+9,+9712+GB+Groningen/@53.2190992,6.5628553,17z/data=!4m15!1m6!3m5!1s0x47c9cd505b485345:0x6ac4e9376e6f4d82!2sLand+van+Kokanje!8m2!3d53.2190992!4d6.5650493!4m7!1m0!1m5!1m1!1s0x47c9cd505b485345:0x6ac4e9376e6f4d82!2m2!1d6.5650493!2d53.2190992">Get Directions</a>',
		lat: 53.2190992,
		long: 6.5650493,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var txoko = {
		info: '<strong>El Txoko</strong><br>\r\
				Oude Kijk in ’t Jatstraat 53<br>Dinner<br>\
				Several vegan tapas<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//El+Txoko,+Oude+Kijk+in+Het+Jatstraat+53,+9712+EC+Groningen/@53.2198641,6.559398,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fe647d503:0x4c940a225d7916e9!2sEl+Txoko!8m2!3d53.2198641!4d6.561592!4m7!1m0!1m5!1m1!1s0x47c9cd4fe647d503:0x4c940a225d7916e9!2m2!1d6.561592!2d53.2198641">Get Directions</a>',
		lat: 53.2190992,
		long: 6.5650493,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var moro = {
		info: '<strong>Moro</strong><br>\r\
				Oude Kijk in ’t Jatstraat 53<br>Dinner<br>\
				One vegan main course and several side dishes<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Moro,+Gedempte+Kattendiep+21,+9711+PL+Groningen/@53.2168661,6.5702302,17z/data=!4m15!1m6!3m5!1s0x47c9cd565848a15f:0x447f19a32a4ca1ab!2sMoro!8m2!3d53.2168661!4d6.5724242!4m7!1m0!1m5!1m1!1s0x47c9cd565848a15f:0x447f19a32a4ca1ab!2m2!1d6.5724242!2d53.2168661">Get Directions</a>',
		lat: 53.2168661,
		long: 6.5724242,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var pannekoekschip = {
		info: '<strong>Pannekoekschip</strong><br>\r\
				Schuitendiep 1017<br>Lunch<br>\
				Vegan pancakes on request, or bring your own plantbased milk<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//\'t+Pannekoekschip,+Schuitendiep+1017,+9711+RB+Groningen\'/@53.217708,6.570957,17z/data=!4m15!1m6!3m5!1s0x47c9cd56528e13c9:0x7109ddf63bc75e93!2s\'t+Pannekoekschip!8m2!3d53.217708!4d6.573151!4m7!1m0!1m5!1m1!1s0x47c9cd56528e13c9:0x7109ddf63bc75e93!2m2!1d6.573151!2d53.217708">Get Directions</a>',
		lat: 53.217708,
		long: 6.573151,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false
	};

	var sumo = {
		info: '<strong>Sumo</strong><br>\r\
				Vismarkt 54<br>Dinner<br>\
				Vegan sushi and salad<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Sumo,+Vismarkt+54,+9711+KV+Groningen/@53.2167414,6.5620675,17z/data=!4m15!1m6!3m5!1s0x47c9cd519803edb3:0x1c020820aff3fbcc!2sSumo!8m2!3d53.2167414!4d6.5642615!4m7!1m0!1m5!1m1!1s0x47c9cd519803edb3:0x1c020820aff3fbcc!2m2!1d6.5642615!2d53.2167414">Get Directions</a>',
		lat: 53.2167414,
		long: 6.5642615,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var tapasco = {
		info: '<strong>Tapasco</strong><br>\r\
				Haddingedwarsstraat 3<br>Dinner<br>\
				Several vegan tapas<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Tapasco,+Haddingedwarsstraat+3,+9711+KA+Groningen/@53.2165537,6.5628448,17z/data=!4m15!1m6!3m5!1s0x47c9cd519e458f09:0x6584c4da99b63a2b!2sTapasco!8m2!3d53.2165537!4d6.5650388!4m7!1m0!1m5!1m1!1s0x47c9cd519e458f09:0x6584c4da99b63a2b!2m2!1d6.5650388!2d53.2165537">Get Directions</a>',
		lat: 53.2165537,
		long: 6.5650388,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var jasmine = {
		info: '<strong>Thai Jasmine</strong><br>\r\
				Gedempte Zuiderdiep 19<br>Dinner<br>\
				Several vegan options, e.g. curries.<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Thai+Jasmine,+Gedempte+Zuiderdiep+19,+9711+HA+Groningen/@53.2155989,6.5674542,17z/data=!4m15!1m6!3m5!1s0x47c9cd57b4923135:0xe21ead1ebfb77815!2sThai+Jasmine!8m2!3d53.2155989!4d6.5696482!4m7!1m0!1m5!1m1!1s0x47c9cd57b4923135:0xe21ead1ebfb77815!2m2!1d6.5696482!2d53.2155989">Get Directions</a>',
		lat: 53.2155989,
		long: 6.5696482,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};


	var toshka = {
		info: '<strong>Toshka</strong><br>\r\
				Vismarkt 20<br>Dinner<br>\
				Two dishes with falafel<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//TOSHKA,+Vismarkt+20,+9711+KT+Groningen/@53.2173018,6.5637022,17z/data=!4m15!1m6!3m5!1s0x47c9cd51087d7931:0x3c25fb9089dcebc4!2sTOSHKA!8m2!3d53.2173018!4d6.5658962!4m7!1m0!1m5!1m1!1s0x47c9cd51087d7931:0x3c25fb9089dcebc4!2m2!1d6.5658962!2d53.2173018">Get Directions</a>',
		lat: 53.2173018,
		long: 6.5658962,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var uurwerker = {
		info: '<strong>Uurwerker</strong><br>\r\
				Uurwerkersplein 1<br>Dinner<br>\
				Pizza and veggie burger, both can be veganized<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//De+Uurwerker,+Uurwerkersplein+1,+9712+EJ+Groningen/@53.2187676,6.5593196,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fd14e8a67:0x6b76e5a9d577cc7b!2sDe+Uurwerker!8m2!3d53.2187676!4d6.5615136!4m7!1m0!1m5!1m1!1s0x47c9cd4fd14e8a67:0x6b76e5a9d577cc7b!2m2!1d6.5615136!2d53.2187676">Get Directions</a>',
		lat: 53.2187676,
		long: 6.5615136,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var warung = {
		info: '<strong>Warung Jawa</strong><br>\r\
				Gedempte Zuiderdiep 110-112<br>Dinner<br>\
				Vegan roti and bami + vegan sambal<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Warung+Jawa,+Gedempte+Zuiderdiep+110-112,+9711+HM+Groningen/@53.2144039,6.5620044,17z/data=!4m15!1m6!3m5!1s0x47c9cd5234119357:0x1467f02948ecd29a!2sWarung+Jawa!8m2!3d53.2144039!4d6.5641984!4m7!1m0!1m5!1m1!1s0x47c9cd5234119357:0x1467f02948ecd29a!2m2!1d6.5641984!2d53.2144039">Get Directions</a>',
		lat: 53.2144039,
		long: 6.5641984,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false
	};

	var wereldburgers = {
		info: '<strong>Wereldburgers</strong><br>\r\
				Akerkhof 43<br>Dinner<br>\
				Two burgers and a vegan cake. Plus vegan icecream<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Wereldburgers,+Akerkhof+43,+9712+BC+Groningen/@53.2167865,6.5595674,17z/data=!4m15!1m6!3m5!1s0x47c9cd51e0363dd3:0x5e688b4c29d509cf!2sWereldburgers!8m2!3d53.2167865!4d6.5617614!4m7!1m0!1m5!1m1!1s0x47c9cd51e0363dd3:0x5e688b4c29d509cf!2m2!1d6.5617614!2d53.2167865">Get Directions</a>',
		lat: 53.2167865,
		long: 6.5617614,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: true
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
      [vegansuper.info, vegansuper.lat, vegansuper.long, vegansuper.breakfast, vegansuper.lunch, vegansuper.dinner, vegansuper.coffee, 20],
      [blabla.info, blabla.lat, blabla.long, blabla.breakfast, blabla.lunch, blabla.dinner, blabla.coffee, 21],
      [beeren.info, beeren.lat, beeren.long, beeren.breakfast, beeren.lunch, beeren.dinner, beeren.coffee, 22],
      [bijbritta.info, bijbritta.lat, bijbritta.long, bijbritta.breakfast, bijbritta.lunch, bijbritta.dinner, bijbritta.coffee, 23],
      [bodega.info, bodega.lat, bodega.long, bodega.breakfast, bodega.lunch, bodega.dinner, bodega.coffee, 24],
      [curryhuis.info, curryhuis.lat, curryhuis.long, curryhuis.breakfast, curryhuis.lunch, curryhuis.dinner, curryhuis.coffee, 25],
      [dubbeljoe.info, dubbeljoe.lat, dubbeljoe.long, dubbeljoe.breakfast, dubbeljoe.lunch, dubbeljoe.dinner, dubbeljoe.coffee, 26],
      [gustatio.info, gustatio.lat, gustatio.long, gustatio.breakfast, gustatio.lunch, gustatio.dinner, gustatio.coffee, 27],
      [bakkerscafe.info, bakkerscafe.lat, bakkerscafe.long, bakkerscafe.breakfast, bakkerscafe.lunch, bakkerscafe.dinner, bakkerscafe.coffee, 28],
      [concerthuis.info, concerthuis.lat, concerthuis.long, concerthuis.breakfast, concerthuis.lunch, concerthuis.dinner, concerthuis.coffee, 29],
      [holtbar.info, holtbar.lat, holtbar.long, holtbar.breakfast, holtbar.lunch, holtbar.dinner, holtbar.coffee, 30],
      [javaans.info, javaans.lat, javaans.long, javaans.breakfast, javaans.lunch, javaans.dinner, javaans.coffee, 31],
      [opznkop.info, opznkop.lat, opznkop.long, opznkop.breakfast, opznkop.lunch, opznkop.dinner, opznkop.coffee, 32],
      [kokanje.info, kokanje.lat, kokanje.long, kokanje.breakfast, kokanje.lunch, kokanje.dinner, kokanje.coffee, 33],
      [txoko.info, txoko.lat, txoko.long, txoko.breakfast, txoko.lunch, txoko.dinner, txoko.coffee, 34],
      [pannekoekschip.info, pannekoekschip.lat, pannekoekschip.long, pannekoekschip.breakfast, pannekoekschip.lunch, pannekoekschip.dinner, pannekoekschip.coffee, 35],
      [sumo.info, sumo.lat, sumo.long, sumo.breakfast, sumo.lunch, sumo.dinner, sumo.coffee, 36],
      [tapasco.info, tapasco.lat, tapasco.long, tapasco.breakfast, tapasco.lunch, tapasco.dinner, tapasco.coffee, 37],
      [jasmine.info, jasmine.lat, jasmine.long, jasmine.breakfast, jasmine.lunch, jasmine.dinner, jasmine.coffee, 38],
      [toshka.info, toshka.lat, toshka.long, toshka.breakfast, toshka.lunch, toshka.dinner, toshka.coffee, 39],
      [uurwerker.info, uurwerker.lat, uurwerker.long, uurwerker.breakfast, uurwerker.lunch, uurwerker.dinner, uurwerker.coffee, 40],
      [warung.info, warung.lat, warung.long, warung.breakfast, warung.lunch, warung.dinner, warung.coffee, 41],
      [wereldburgers.info, wereldburgers.lat, wereldburgers.long, wereldburgers.breakfast, wereldburgers.lunch, wereldburgers.dinner, wereldburgers.coffee, 42]
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
  				url: "../site/img/vegan.svg"
  			},
  		activeIcon = {
		url: "../site/img/vegan_active.svg"
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

				ga('send', 'event', 'Location', 'click', 'en-' + locationName);

				
				setAllMarkersIcon(normalIcon)
				marker_l.setIcon(activeIcon);
				
				locationInfo.classList.add('active');
				infowindow_l.setContent(locations[i][0]);  
				infoBoxInfo.style.display = "none";

				if (window.screen.width < 768) {
					infoBox.classList.remove("small");
					hideTxt.innerHTML="hide";
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
	    url: "../site/img/geo-icon.gif",
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
	     console.log("Your Geo location could nog be found.")
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
			hideTxt.innerHTML="show info";
		} else {
			hideTxt.innerHTML="hide info";
		}
	} else {
		infoBox.classList.toggle("side");

		if ( infoBox.classList.contains("side") ) {
			hideTxt.innerHTML="show info";
		} else {
			hideTxt.innerHTML="hide info";
		}
	}
	
}, false);

function adjustDynamicElements() {

	if (window.screen.width <= 767) {
		// Set the info panel to bottom
		infoBox.classList.remove("side");
		infoBox.classList.add("small");
		hideTxt.innerHTML="show info";

		function ToggleMobileMenu() {
			var sections = document.getElementById("js-sections"),
				infoBox = document.getElementById("info-box");

		    ToggleMenuItems();
		}

		function ToggleMenuItems() {
			var menuItem1 = document.getElementById("js-mobile-nav-1"),
				menuItem2 = document.getElementById("js-mobile-nav-2"),
				menuItem3 = document.getElementById("js-mobile-nav-3"),
				tabItem1 = document.getElementById("js-mobile-tab-1"),
				tabItem2 = document.getElementById("js-mobile-tab-2"),
				tabItem3 = document.getElementById("js-mobile-tab-3"),
				body = document.getElementsByTagName("body")[0],
				closeTab = document.getElementById("js-info-section-close"),
				sections = document.getElementById("js-sections");

			// Show/hide info tabs
			menuItem1.onclick = function() {
				// Remove active classes
				sections.classList.remove("show");
				tabItem1.classList.remove("active");
				tabItem2.classList.remove("active");
				tabItem3.classList.remove("active");

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
				tabItem3.classList.remove("active");

				tabItem2.classList.add("active");
				sections.classList.add("show");

				// Set height for overflow scroll
				var bodyHeight = body.offsetHeight;
				tabItem2.style.height = bodyHeight + "px";
			}

			menuItem3.onclick = function() {
				// Remove active classes
				sections.classList.remove("show");
				tabItem1.classList.remove("active");
				tabItem2.classList.remove("active");
				tabItem3.classList.remove("active");

				tabItem3.classList.add("active");
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
					tabItem3.classList.remove("active");
					tabItem3.style.height = "auto";
				}, 100);
			}

		}

		ToggleMobileMenu();

	} else {
		infoBox.classList.remove("small");
		infoBox.classList.add("side");
		hideTxt.innerHTML="show info";
	}

}
adjustDynamicElements();





window.addEventListener('resize', function () {
	initMap();
	adjustDynamicElements();
})
