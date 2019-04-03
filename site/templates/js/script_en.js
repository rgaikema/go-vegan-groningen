function initMap() {

	//Set vars for map
	var locationInfo = document.querySelector(".location-info-holder");
	var locationMarkers = [];

	//Set vars for location hash
	var locationNames = [];
	var urlhash = window.location.hash.replace('#', '');

	// Check if URL hash is not the same - by reload in same window or tab
	function locationHashChanged() {

		var lastLocation = localStorage.getItem('last_location');
		var urlhashChanged = window.location.hash.replace('#', '');

	     if (lastLocation != urlhashChanged) {
	     	location.reload();
	     }
	}
	window.onhashchange = locationHashChanged;


	//Locations
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
		coffee: true,
		name: 'de-herbivoor',
		s_name: 'De Herbivoor',
		site: 'http://deherbivoor.nl/'
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
		coffee: true,
		name: 'anat',
		s_name: 'Anat',
		site:'http://anat.nu/'
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
		coffee: false,
		name: 'mechoui',
		s_name: 'Mechoui',
		site: 'http://www.mechoui.nl/'
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
		coffee: false,
		name:'de-kleine-moghul',
		s_name:'De Kleine Moghul',
		site:'http://www.moghul.nl/'
	};

	var buurman = {
		info: '<strong>Buurman & Buurman</strong><br>\r\
				Rodeweg 6<br> Pizza <br>\r\
				Three vegan pizza\'s</br>\
				<a href="https://www.google.nl/maps/dir//Eetwinkel+Buurman+%26+Buurman+Groningen,+Rodeweg+6,+9715+AW+Groningen/@53.2273517,6.5592295,17z/data=!4m15!1m6!3m5!1s0x47c9cd43713cee77:0x1f057e46b756b4db!2sEetwinkel+Buurman+%26+Buurman+Groningen!8m2!3d53.2273517!4d6.5614235!4m7!1m0!1m5!1m1!1s0x47c9cd43713cee77:0x1f057e46b756b4db!2m2!1d6.5614235!2d53.2273517">Get Directions</a>',
		lat:53.2273517,
		long:6.5614235,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false,
		name:'buurman-buurman',
		s_name:'Buurman & Buurman',
		site: 'http://buurman-groningen.nl/'
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
		coffee: false,
		name: 'toko-semarang',
		s_name: 'Toko Semarang',
		site: 'http://www.tokosemarang.nl/'
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
		coffee: true,
		name: 'toet-pannekoek',
		s_name: 'Toet pannekoek',
		site:'https://www.facebook.com/TOETpannekoek/'
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
		coffee: true,
		name: 'toet',
		s_name: 'Toet',
		site:'http://www.toet.nu/'
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
		coffee: false,
		name: 'de-soepwinkel',
		s_name:'De Soepwinkel',
		site:'http://www.desoepwinkel.com/'
	};

	var feelgood = {
		info: '<strong>Feel Good</strong><br>\r\
				Oude Kijk in Het Jatstraat 29<br>Breakfast, lunch, cake & dinner<br>\
				Several vegan options. Check their Facebook page if dinner is vegan.<br>\
				<a href="https://www.google.nl/maps/dir//Feel+Good,+Oude+Kijk+in+Het+Jatstraat+29,+9712+EB+Groningen/@53.2191437,6.5599756,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fd89a2d49:0x6c944d6249cc96fa!2sFeel+Good!8m2!3d53.2191437!4d6.5621696!4m7!1m0!1m5!1m1!1s0x47c9cd4fd89a2d49:0x6c944d6249cc96fa!2m2!1d6.5621696!2d53.2191437">Get Directions</a>',
		lat: 53.2191437,
		long: 6.5621696,
		breakfast: true,
		lunch: true,
		dinner: true,
		coffee: true,
		name: 'feelgood',
		s_name: 'Feel Good',
		site:'https://www.feelgoodgroningen.nl/'
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
		coffee: false,
		name: 'fatoush',
		s_name: 'Fatoush',
		site:'http://www.fatoush.nl/'
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
		coffee: false,
		name: 'bagels-beans',
		s_name: 'Bagels & Beans',
		site:'https://www.bagelsbeans.nl/nl/storelocator?address=zwanestraat%20groningen'
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
		coffee: false,
		name: 'pernikkel',
		s_name: 'Pernikkel',
		site:'http://www.pernikkel.nl/'
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
		coffee: false,
		name:'de-oude-gasfabriek',
		s_name:'De Oude Gasfabriek',
		site: 'http://www.deoudegasfabriek.nl/'
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
		coffee: false,
		name: 'achterwerk',
		s_name: 'Achterwerk',
		site: 'http://lekkerachterwerk.nl/'
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
		coffee: false,
		name: 'palermo',
		s_name: 'Palermo',
		site:'https://www.pizzeriapalermo.nl/'
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
		coffee: false,
		name: 'friet-van-piet',
		s_name: 'Friet van Piet',
		site:'http://www.cafetariafrietvanpiet.nl/'
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
		coffee: false,
		name: 'zevende-hemel',
		s_name: 'Zevende Hemel',
		site:'https://www.zevendehemel.nl/'
	};

	var kult = {
		info: '<strong>Kult</strong><br>\r\
				Steentilstraat 36-1<br>Dinner & snacks<br>\
				Several choices e.g. the cheese fondue<br>\
				<a href="https://www.google.nl/maps/dir//Kult,+Steentilstraat+36-1,+9711+GN+Groningen/@53.2166442,6.5706985,17.07z/data=!4m15!1m6!3m5!1s0x47c9cd565c0e3a2b:0x86963fc469d5818f!2sKult!8m2!3d53.2166302!4d6.5727019!4m7!1m0!1m5!1m1!1s0x47c9cd565c0e3a2b:0x86963fc469d5818f!2m2!1d6.5727019!2d53.2166302">Get Directions</a>',
		lat: 53.2166302,
		long: 6.5727019,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: true,
		name: 'kult',
		s_name: 'Kult',
		site: 'http://www.cafekult.nl/'
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
		coffee: true,
		name: 'ps',
		s_name: 'Ps',
		site: 'http://mijnps.nl/'
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
		coffee: false,
		name: 'blabla',
		s_name: 'Bla Bla',
		site: 'http://www.bla-bla.nl/'
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
		coffee: false,
		name: 'beer-n',
		s_name: 'Beer&',
		site: 'https://beer-n.nl/'
	};

	var bijbritta = {
		info: '<strong>Bij Britta</strong><br>\r\
				Oude Kijk in ’t Jatstraat 27<br>Lunch & cake<br>\
				Sandwich and cake<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Bij+Britta,+9712+EB+Groningen/@53.2190868,6.5600139,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fd8d0f8bd:0x652dfca6fdaa0279!2sBij+Britta!8m2!3d53.2190868!4d6.5622079!4m7!1m0!1m5!1m1!1s0x47c9cd4fd8d0f8bd:0x652dfca6fdaa0279!2m2!1d6.5622079!2d53.2190868">Get Directions</a>',
		lat: 53.2190868,
		long: 6.5622079,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: true,
		name: 'bij-britta',
		s_name: 'Bij Britta',
		site:'https://www.facebook.com/bijbritta/'
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
		coffee: false,
		name: 'bodega-y-tapas',
		s_name: 'Bodega y Tapas',
		site: 'http://www.bodega-y-tapas.nl/'
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
		coffee: false,
		name: 'curryhuis',
		s_name: 'Curryhuis',
		site:'http://indiaasgroningen.nl/'
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
		coffee: false,
		name: 'dubbeljoe',
		s_name: 'Dubbeljoe J',
		site:'http://dubbeljoej.nl/'
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
		coffee: false,
		name: 'gustatio',
		s_name: 'Gustatio',
		site:'http://gustatiogroningen.nl/'
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
		coffee: false,
		name: 'het-bakkerscafe',
		s_name: 'Het Bakkerscafé',
		site: 'http://www.hetbakkerscafe.nl/'
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
		coffee: false,
		name: 'concerthuis',
		s_name: 'Concerthuis',
		site:'http://www.hetconcerthuis.nl/'
	};

	var holtbar = {
		info: '<strong>Holtbar</strong><br>\r\
				Oude Kijk in Het Jatstraat 20<br>Breakfast & cake<br>\
				Two options for breakfast, cake and energybars<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//HOLTBAR+concept+store,+Oude+Kijk+in+Het+Jatstraat+20,+9712+EH+Groningen/@53.2188287,6.5599752,17z/data=!4m15!1m6!3m5!1s0x47c9cd5028444acf:0x389d31d2a40a712a!2sHOLTBAR+concept+store!8m2!3d53.2188287!4d6.5621692!4m7!1m0!1m5!1m1!1s0x47c9cd5028444acf:0x389d31d2a40a712a!2m2!1d6.5621692!2d53.2188287">Get Directions</a>',
		lat: 53.2188287,
		long: 6.5621692,
		breakfast: true,
		lunch: false,
		dinner: false,
		coffee: true,
		name: 'holtbar',
		s_name: 'Holtbar',
		site: 'https://holtbar.nl/'
	};

	var javaans = {
		info: '<strong>Javaans Eetcafé Groningen</strong><br>\r\
				Schuitendiep 33<br>Dinner<br>\
				Indonesian thali and main course with rice<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Javaans+Eetcafe+Groningen,+Schuitendiep+33,+9711+RA+Groningen/@53.2180179,6.570403,17z/data=!4m15!1m6!3m5!1s0x47c9cd57a98d8b6b:0x33883194d243417e!2sJavaans+Eetcafe+Groningen!8m2!3d53.2180179!4d6.572597!4m7!1m0!1m5!1m1!1s0x47c9cd57a98d8b6b:0x33883194d243417e!2m2!1d6.572597!2d53.2180179">Get Directions</a>',
		lat: 53.2180179,
		long: 6.572597,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false,
		name: 'javaans-eetcafe',
		s_name: 'Javaans Eetcafé',
		site:'http://javaanseetcafegroningen.nl/'
	};

	var opznkop = {
		info: '<strong>Kattencafé Op z´n Kop</strong><br>\r\
				Oude Ebbingestraat 57<br>Breakfast & lunch<br>\
				Sandwiches, soy yoghurt with fruit and vegan snacks.<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Kattencaf%C3%A9+Op+z\'n+Kop,+Oude+Ebbingestraat+57,+9712+HC+Groningen/@53.2207933,6.5641078,17z/data=!4m15!1m6!3m5!1s0x47c9cd5a7f8fa731:0x8a890c3dce4569e8!2sKattencaf%C3%A9+Op+z\'n+Kop!8m2!3d53.2207933!4d6.5663018!4m7!1m0!1m5!1m1!1s0x47c9cd5a7f8fa731:0x8a890c3dce4569e8!2m2!1d6.5663018!2d53.2207933">Get Directions</a>',
		lat: 53.2207933,
		long: 6.5663018,
		breakfast: true,
		lunch: true,
		dinner: false,
		coffee: false,
		name: 'kattencafe-op-zn-kop',
		s_name: 'Kattencafé Op z\'n kop',
		site:'https://opznkop.nl/'
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
		coffee: false,
		name: 'land-van-kokanje',
		s_name: 'Land van Kokanje',
		site: 'https://www.landvankokanje.nl/'
	};

	var txoko = {
		info: '<strong>El Txoko</strong><br>\r\
				Oude Kijk in ’t Jatstraat 53<br>Dinner<br>\
				Several vegan tapas<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//El+Txoko,+Oude+Kijk+in+Het+Jatstraat+53,+9712+EC+Groningen/@53.2198641,6.559398,17z/data=!4m15!1m6!3m5!1s0x47c9cd4fe647d503:0x4c940a225d7916e9!2sEl+Txoko!8m2!3d53.2198641!4d6.561592!4m7!1m0!1m5!1m1!1s0x47c9cd4fe647d503:0x4c940a225d7916e9!2m2!1d6.561592!2d53.2198641">Get Directions</a>',
		lat: 53.2198641,
		long: 6.561592,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false,
		name: 'el-txoko',
		s_name: 'El Txoko',
		site:'http://www.eltxoko.nl/'
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
		coffee: false,
		name: 'moro',
		s_name: 'Moro',
		site: 'http://morogroningen.bennergroep.nl/'
	};

	var pannekoekschip = {
		info: '<strong>Pannekoekschip</strong><br>\r\
				Schuitendiep 1017<br>Lunch<br>\
				Dough can be made with water. Just ask.<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//\'t+Pannekoekschip,+Schuitendiep+1017,+9711+RB+Groningen\'/@53.217708,6.570957,17z/data=!4m15!1m6!3m5!1s0x47c9cd56528e13c9:0x7109ddf63bc75e93!2s\'t+Pannekoekschip!8m2!3d53.217708!4d6.573151!4m7!1m0!1m5!1m1!1s0x47c9cd56528e13c9:0x7109ddf63bc75e93!2m2!1d6.573151!2d53.217708">Get Directions</a>',
		lat: 53.217708,
		long: 6.573151,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false,
		name: 'pannekoekschip',
		s_name: 'Pannekoekschip',
		site: 'http://www.pannekoekschip.nl/'
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
		coffee: false,
		name: 'sumo',
		s_name: 'Sumo',
		site:'http://restaurantsumo.com/restaurants/groningen/'
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
		coffee: false,
		name: 'tapasco',
		s_name: 'Tapasco',
		site: 'http://www.tapasco.nl/'
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
		coffee: false,
		name: 'thai-jasmine',
		s_name: 'Thai Jasmine',
		site:'http://www.thaijasmine.nl/'
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
		coffee: false,
		name: 'toshka',
		s_name: 'Toshka',
		site: 'http://toshka.nl/'
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
		coffee: false,
		name: 'de-uurwerker',
		s_name: 'De Uurwerker',
		site:'http://www.uurwerker.nl/'
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
		coffee: false,
		name: 'warung-jawa',
		s_name: 'Warung Jawa',
		site: 'http://www.warungjawa.nl/'
	};

	var wereldburgers = {
		info: '<strong>Wereldburgers</strong><br>\r\
				Akerkhof 43<br>Lunch & Dinner<br>\
				Three burgers and sometimes vegan cake.<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Wereldburgers,+Akerkhof+43,+9712+BC+Groningen/@53.2167865,6.5595674,17z/data=!4m15!1m6!3m5!1s0x47c9cd51e0363dd3:0x5e688b4c29d509cf!2sWereldburgers!8m2!3d53.2167865!4d6.5617614!4m7!1m0!1m5!1m1!1s0x47c9cd51e0363dd3:0x5e688b4c29d509cf!2m2!1d6.5617614!2d53.2167865">Get Directions</a>',
		lat: 53.2167865,
		long: 6.5617614,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false,
		name: 'wereldburgers',
		s_name: 'Wereldburgers',
		site:'http://wereldburgersgroningen.nl/'
	};

	var poeslief = {
		info: '<strong>Kattencafé Poeslief</strong><br>\r\
				Nieuweweg 14<br>Lunch & cake<br>\
				Vegan cake, toasted sandwiches & wraps<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Kattencaf%C3%A9+Poeslief,+Nieuweweg+14,+9711+TD+Groningen/@53.2184559,6.5721802,17z/data=!4m15!1m6!3m5!1s0x47c9cd57b8816391:0x55af840e7cbbe581!2sKattencaf%C3%A9+Poeslief!8m2!3d53.2184559!4d6.5743689!4m7!1m0!1m5!1m1!1s0x47c9cd57b8816391:0x55af840e7cbbe581!2m2!1d6.5743689!2d53.2184559">Get Directions</a>',
		lat: 53.2184559,
		long: 6.5743689,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: true,
		name: 'kattencafe-poeslief',
		s_name: 'Kattencafé Poeslief',
		site:'https://kattencafepoeslief.nl/'
	};

	var chofah = {
		info: '<strong>Cho Fah</strong><br>\r\
				Gelkingestraat 5<br>Thaise keuken<br>\
				Eén gele curry en diverse roerbak gerechten<br>\
				<a target="_blank" href="https://www.google.nl/maps/dir//Cho+Fah+eathai,+Gelkingestraat+5,+9711+NA+Groningen/@53.2177932,6.565793,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47c9cd51266f71f1:0x6299a0fe2db15f72!2m2!1d6.5679817!2d53.2177932!3e2">Bepaal Route</a>',
		lat: 53.2177932,
		long: 6.5679817,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false,
		name: 'cho-fah',
		s_name: 'Cho Fah',
		site:'http://www.chofah.nl/home.html'
	};

	var flfl = {
		info: '<strong>FLFL</strong><br>\r\
				Oude Kijk in Het Jatstraat 44<br>Lunch & dinner<br>\
				Falafel<br>\
				<a target="_blank" href="https://goo.gl/maps/zi74Hdh5wXB2">Get Directions</a>',
		lat: 53.2197448,
		long: 6.5614666,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false,
		name: 'falafel',
		s_name: 'FaLaFeL',
		site:'http://falafel.nl/'
	};

	var vapiano = {
		info: '<strong>Vapiano</strong><br>\r\
				Poelestraat 16-18<br>Lunch & dinner<br>\
				One vegan pasta & one vegan dessert<br>\
				<a target="_blank" href="https://goo.gl/maps/NmKDdyPZeMM2">Get Directions</a>',
		lat: 53.2183766,
		long: 6.5697484,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false,
		name: 'vapiano',
		s_name: 'Vapiano',
		site:'https://nl.vapiano.com/nl/restaurants/detail/restaurant-details/-d1752928e2/'
	};


	var wadapartja = {
		info: '<strong>Wadapartja</strong><br>\r\
				Gedempte Zuiderdiep 39-41<br>Lunch & dinner<br>\
				Several vegan options, for example a burger<br>\
				<a target="_blank" href="https://goo.gl/maps/KfzSQ2Y9wwJ2">Get Directions</a>',
		lat: 53.2151,
		long: 6.567744,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false,
		name: 'wadapartja',
		s_name: 'Wadapartja',
		site:'http://wadapartja.nl/'
	};


	var ra = {
		info: '<strong>Rå</strong><br>\r\
				Oude Kijk in Het Jatstraat 59<br>Lunch & dinner<br>\
				Several organic salads<br>\
				<a target="_blank" href="https://goo.gl/maps/g1ccYF8ipMq">Get Directions</a>',
		lat: 53.2199997,
		long: 6.5614984,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false,
		name: 'ra',
		s_name: 'Rå',
		site:'https://www.rasalatbar.nl/'
	};


	var moflow = {
		info: '<strong>Mo’Flow </strong><br>\r\
				Rademarkt 10<br>Lunch<br>\
				Several sandwiches<br>\
				<a target="_blank" href="https://goo.gl/maps/eSwb9KPAihP2">Get Directions</a>',
		lat: 53.215736,
		long: 6.5717956,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: false,
		name: 'moflow',
		s_name: 'Mo’Flow ',
		site:'http://www.gimmemoflow.nl/'
	};

	var simonlevelt = {
		info: '<strong>Simon Lévelt Café</strong><br>\r\
				Oude Kijk in \'t Jatstraat 2<br>Cake<br>\
				Vegan Cheesecake (2 flavours)<br>\
				<a target="_blank" href="https://goo.gl/maps/BtCVS94A6pK2">Get Directions</a>',
		lat: 53.218181,
		long: 6.562812,
		breakfast: false,
		lunch: false,
		dinner: false,
		coffee: true,
		name: 'simon-levelt',
		s_name: 'Simon Lévelt Café',
		site:'http://www.simonlevelt.nl/winkels/cafe-groningen'
	};

	var plat = {
		info: '<strong>Plat</strong><br>\r\
				Astraat 10<br>Snacks<br>\
				Fries + vegan mayo & vegan bio kroket<br>\
				<a target="_blank" href="https://goo.gl/maps/LbDnARPVwAp">Get Directions</a>',
		lat: 53.2165707,
		long: 6.5586438,
		breakfast: false,
		lunch: true,
		dinner: true,
		coffee: false,
		name: 'plat',
		s_name: 'Plat',
		site:'http://www.platfrietzaakgroningen.nl/'
	};

	var lust = {
		info: '<strong>Lust</strong><br>\r\
				Oude Kijk in Het Jatstraat 58<br>Breakfast, lunch & cake<br>\
				Lots of options, e.g. porridge bowl, pasta & bananabread<br>\
				<a target="_blank" href="https://goo.gl/maps/WwKX32kksT12">Get Directions</a>',
		lat: 53.2201838,
		long: 6.5611305,
		breakfast: true,
		lunch: true,
		dinner: false,
		coffee: true,
		name: 'lust',
		s_name: 'Lust',
		site:'https://www.instagram.com/lustgroningen/'
	};

	var coffeebreak = {
		info: '<strong>Coffee Break</strong><br>\r\
				Gedempte Zuiderdiep 22<br>Breakfast, lunch & cake<br>\
				Lots of options, e.g. pancakes, a wrap and cake. Breakfast from 11 AM.<br>\
				<a target="_blank" href="https://goo.gl/maps/AofCg98NcPK2">Get Directions</a>',
		lat: 53.2151743,
		long: 6.5699151,
		breakfast: true,
		lunch: true,
		dinner: false,
		coffee: true,
		name: 'coffeebreak',
		s_name: 'Coffee Break',
		site:'https://www.instagram.com/coffeebreak22/'
	};

	var hartendief = {
		info: '<strong>Hartendief</strong><br>\r\
				Oosterstraat 8<br>Cake<br>\
				Sugarfree cakes from SUE<br>\
				<a target="_blank" href="https://goo.gl/maps/oydFAJnpKdM2">Get Directions</a>',
		lat: 53.2180568,
		long: 6.5693446,
		breakfast: false,
		lunch: false,
		dinner: false,
		coffee: true,
		name: 'hartendief',
		s_name: 'Hartendief',
		site:'https://www.hartendiefgroningen.nl/'
	};

	var buurmanwestend = {
		info: '<strong>Buurman & Buurman (Westend)</strong><br>\r\
				Friesestraatweg 41<br> Pizza <br>\r\
				Three vegan pizza\'s</br>\
				<a target="_blank" href="https://goo.gl/maps/wBmLrDYML8k">Get Directions</a>',
		lat:53.2163435,
		long:6.5477968,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false,
		name:'buurman-buurman-westend',
		s_name:'Buurman & Buurman (Westend)',
		site: 'http://buurman-groningen.nl/'
	};

	var lui = {
		info: '<strong>Lui</strong><br>\r\
				Oude Ebbingestraat 71<br> Cake & lunch <br>\r\
				Several vegan cakes & vegan sandwiches</br>\
				<a target="_blank" href="https://goo.gl/maps/19KidvQRpKM2">Get Directions</a>',
		lat:53.2212683,
		long:6.5659708,
		breakfast: false,
		lunch: true,
		dinner: false,
		coffee: true,
		name:'lui',
		s_name:'Lui',
		site: 'https://www.facebook.com/LUI.cafe'
	};

	var omhelzing = {
		info: '<strong>De Omhelzing</strong><br>\r\
				Jacob van Ruysdaelstraat 2<br> Dinner<br>\r\
				One vegan starter and two main courses + vegan rijsttafel (varied dishes)</br>\
				<a target="_blank" href="https://goo.gl/maps/J3NBnxtvDAq">Bepaal Route</a>',
		lat:53.2156702,
		long:6.5449342,
		breakfast: false,
		lunch: false,
		dinner: true,
		coffee: false,
		name:'de-omhelzing',
		s_name:'De Omhelzing',
		site: 'https://www.de-omhelzing.nl/'
	};

    var locations = [
      [herbivoor.info, herbivoor.lat, herbivoor.long, herbivoor.breakfast, herbivoor.lunch, herbivoor.dinner, herbivoor.coffee, herbivoor.name, herbivoor.s_name, herbivoor.site,0],
      [anat.info, anat.lat, anat.long, anat.breakfast, anat.lunch, anat.dinner, anat.coffee, anat.name, anat.s_name, anat.site, 1],
      [mechoui.info, mechoui.lat, mechoui.long, mechoui.breakfast, mechoui.lunch, mechoui.dinner, mechoui.coffee,mechoui.name, mechoui.s_name, mechoui.site, 2],
      [moghul.info, moghul.lat, moghul.long, moghul.breakfast, moghul.lunch, moghul.dinner, moghul.coffee, moghul.name, moghul.s_name, moghul.site, 3],
      [buurman.info, buurman.lat, buurman.long, buurman.breakfast, buurman.lunch, buurman.dinner, buurman.coffee, buurman.name, buurman.s_name, buurman.site, 4],
      [semarang.info, semarang.lat, semarang.long, semarang.breakfast, semarang.lunch, semarang.dinner, semarang.coffee, semarang.name, semarang.s_name, semarang.site, 5],
      [toet.info, toet.lat, toet.long, toet.breakfast, toet.lunch, toet.dinner, toet.coffee, toet.name, toet.s_name, toet.site, 6],
      [toetpannekoek.info, toetpannekoek.lat, toetpannekoek.long, toetpannekoek.breakfast, toetpannekoek.lunch, toetpannekoek.dinner, toetpannekoek.coffee, toetpannekoek.name, toetpannekoek.s_name, toetpannekoek.site, 7],
      [soepwinkel.info, soepwinkel.lat, soepwinkel.long, soepwinkel.breakfast, soepwinkel.lunch, soepwinkel.dinner, soepwinkel.coffee, soepwinkel.name, soepwinkel.s_name, soepwinkel.site, 8],
      [feelgood.info, feelgood.lat, feelgood.long, feelgood.breakfast, feelgood.lunch, feelgood.dinner, feelgood.coffee, feelgood.name, feelgood.s_name, feelgood.site, 9],
      [fatoush.info, fatoush.lat, fatoush.long, fatoush.breakfast, fatoush.lunch, fatoush.dinner, fatoush.coffee, fatoush.name, fatoush.s_name, fatoush.site, 10],
      [bagelsbeans.info, bagelsbeans.lat, bagelsbeans.long, bagelsbeans.breakfast, bagelsbeans.lunch, bagelsbeans.dinner, bagelsbeans.coffee, bagelsbeans.name, bagelsbeans.s_name, bagelsbeans.site, 11],
      [pernikkel.info, pernikkel.lat, pernikkel.long, pernikkel.breakfast, pernikkel.lunch, pernikkel.dinner, pernikkel.coffee, pernikkel.name, pernikkel.s_name, pernikkel.site, 12],
      [gasfabriek.info, gasfabriek.lat, gasfabriek.long, gasfabriek.breakfast, gasfabriek.lunch, gasfabriek.dinner, gasfabriek.coffee, gasfabriek.name, gasfabriek.s_name, gasfabriek.site, 13],
      [achterwerk.info, achterwerk.lat, achterwerk.long, achterwerk.breakfast, achterwerk.lunch, achterwerk.dinner, achterwerk.coffee, achterwerk.name, achterwerk.s_name, achterwerk.site, 14],
      [palermo.info, palermo.lat, palermo.long, palermo.breakfast, palermo.lunch, palermo.dinner, palermo.coffee, palermo.name, palermo.s_name, palermo.site, 15],
      [frietvanpiet.info, frietvanpiet.lat, frietvanpiet.long, frietvanpiet.breakfast, frietvanpiet.lunch, frietvanpiet.dinner, frietvanpiet.coffee, frietvanpiet.name, frietvanpiet.s_name, frietvanpiet.site, 16],
      [zevendehemel.info, zevendehemel.lat, zevendehemel.long, zevendehemel.breakfast, zevendehemel.lunch, zevendehemel.dinner, zevendehemel.coffee, zevendehemel.name, zevendehemel.s_name, zevendehemel.site, 17],
      [kult.info, kult.lat, kult.long, kult.breakfast, kult.lunch, kult.dinner, kult.coffee, kult.name, kult.s_name, kult.site, 18],
      [ps.info, ps.lat, ps.long, ps.breakfast, ps.lunch, ps.dinner, ps.coffee, ps.name, ps.s_name, ps.site, 19],
      [blabla.info, blabla.lat, blabla.long, blabla.breakfast, blabla.lunch, blabla.dinner, blabla.coffee, blabla.name, blabla.s_name, blabla.site, 20],
      [beeren.info, beeren.lat, beeren.long, beeren.breakfast, beeren.lunch, beeren.dinner, beeren.coffee, beeren.name, beeren.s_name, beeren.site, 21],
      [bijbritta.info, bijbritta.lat, bijbritta.long, bijbritta.breakfast, bijbritta.lunch, bijbritta.dinner, bijbritta.coffee, bijbritta.name, bijbritta.s_name, bijbritta.site, 22],
      [bodega.info, bodega.lat, bodega.long, bodega.breakfast, bodega.lunch, bodega.dinner, bodega.coffee, bodega.name, bodega.s_name, bodega.site, 23],
      [curryhuis.info, curryhuis.lat, curryhuis.long, curryhuis.breakfast, curryhuis.lunch, curryhuis.dinner, curryhuis.coffee, curryhuis.name, curryhuis.s_name, curryhuis.site, 24],
      [dubbeljoe.info, dubbeljoe.lat, dubbeljoe.long, dubbeljoe.breakfast, dubbeljoe.lunch, dubbeljoe.dinner, dubbeljoe.coffee, dubbeljoe.name, dubbeljoe.s_name, dubbeljoe.site, 25],
      [gustatio.info, gustatio.lat, gustatio.long, gustatio.breakfast, gustatio.lunch, gustatio.dinner, gustatio.coffee, gustatio.name, gustatio.s_name, gustatio.site, 26],
      [bakkerscafe.info, bakkerscafe.lat, bakkerscafe.long, bakkerscafe.breakfast, bakkerscafe.lunch, bakkerscafe.dinner, bakkerscafe.coffee, bakkerscafe.name, bakkerscafe.s_name, bakkerscafe.site, 27],
      [concerthuis.info, concerthuis.lat, concerthuis.long, concerthuis.breakfast, concerthuis.lunch, concerthuis.dinner, concerthuis.coffee, concerthuis.name, concerthuis.s_name, concerthuis.site, 28],
      [holtbar.info, holtbar.lat, holtbar.long, holtbar.breakfast, holtbar.lunch, holtbar.dinner, holtbar.coffee, holtbar.name, holtbar.s_name, holtbar.site, 29],
      [javaans.info, javaans.lat, javaans.long, javaans.breakfast, javaans.lunch, javaans.dinner, javaans.coffee, javaans.name, javaans.s_name, javaans.site, 30],
      [opznkop.info, opznkop.lat, opznkop.long, opznkop.breakfast, opznkop.lunch, opznkop.dinner, opznkop.coffee, opznkop.name, opznkop.s_name, opznkop.site, 31],
      [kokanje.info, kokanje.lat, kokanje.long, kokanje.breakfast, kokanje.lunch, kokanje.dinner, kokanje.coffee, kokanje.name, kokanje.s_name, kokanje.site, 32],
      [txoko.info, txoko.lat, txoko.long, txoko.breakfast, txoko.lunch, txoko.dinner, txoko.coffee, txoko.name, txoko.s_name, txoko.site,  33],
      [pannekoekschip.info, pannekoekschip.lat, pannekoekschip.long, pannekoekschip.breakfast, pannekoekschip.lunch, pannekoekschip.dinner, pannekoekschip.coffee, pannekoekschip.name, pannekoekschip.s_name, pannekoekschip.site, 34],
      [sumo.info, sumo.lat, sumo.long, sumo.breakfast, sumo.lunch, sumo.dinner, sumo.coffee, sumo.name, sumo.s_name, sumo.site, 35],
      [tapasco.info, tapasco.lat, tapasco.long, tapasco.breakfast, tapasco.lunch, tapasco.dinner, tapasco.coffee, tapasco.name, tapasco.s_name, tapasco.site, 36],
      [jasmine.info, jasmine.lat, jasmine.long, jasmine.breakfast, jasmine.lunch, jasmine.dinner, jasmine.coffee, jasmine.name, jasmine.s_name, jasmine.site, 37],
      [toshka.info, toshka.lat, toshka.long, toshka.breakfast, toshka.lunch, toshka.dinner, toshka.coffee, toshka.name, toshka.s_name, toshka.site, 38],
      [uurwerker.info, uurwerker.lat, uurwerker.long, uurwerker.breakfast, uurwerker.lunch, uurwerker.dinner, uurwerker.coffee, uurwerker.name, uurwerker.s_name, uurwerker.site, 39],
      [warung.info, warung.lat, warung.long, warung.breakfast, warung.lunch, warung.dinner, warung.coffee, warung.name, warung.s_name, warung.site, 40],
      [wereldburgers.info, wereldburgers.lat, wereldburgers.long, wereldburgers.breakfast, wereldburgers.lunch, wereldburgers.dinner, wereldburgers.coffee, wereldburgers.name, wereldburgers.s_name, wereldburgers.site, 41],
      [poeslief.info, poeslief.lat, poeslief.long, poeslief.breakfast, poeslief.lunch, poeslief.dinner, poeslief.coffee, poeslief.name, poeslief.s_name, poeslief.site, 42],
      [chofah.info, chofah.lat, chofah.long, chofah.breakfast, chofah.lunch, chofah.dinner, chofah.coffee, chofah.name, chofah.s_name, chofah.site, 43],
      [flfl.info, flfl.lat, flfl.long, flfl.breakfast, flfl.lunch, flfl.dinner, flfl.coffee, flfl.name, flfl.s_name, flfl.site, 44],
      [vapiano.info, vapiano.lat, vapiano.long, vapiano.breakfast, vapiano.lunch, vapiano.dinner, vapiano.coffee, vapiano.name, vapiano.s_name, vapiano.site, 44],
      [wadapartja.info, wadapartja.lat, wadapartja.long, wadapartja.breakfast, wadapartja.lunch, wadapartja.dinner, wadapartja.coffee, wadapartja.name, wadapartja.s_name, wadapartja.site, 45],
      [ra.info, ra.lat, ra.long, ra.breakfast, ra.lunch, ra.dinner, ra.coffee, ra.name, ra.s_name, ra.site, 46],
      [moflow.info, moflow.lat, moflow.long, moflow.breakfast, moflow.lunch, moflow.dinner, moflow.coffee, moflow.name, moflow.s_name, moflow.site, 47],
      [simonlevelt.info, simonlevelt.lat, simonlevelt.long, simonlevelt.breakfast, simonlevelt.lunch, simonlevelt.dinner, simonlevelt.coffee, simonlevelt.name, simonlevelt.s_name, simonlevelt.site, 48],
      [plat.info, plat.lat, plat.long, plat.breakfast, plat.lunch, plat.dinner, plat.coffee, plat.name, plat.s_name, plat.site, 49],
      [lust.info, lust.lat, lust.long, lust.breakfast, lust.lunch, lust.dinner, lust.coffee, lust.name, lust.s_name, lust.site, 50],
	  [coffeebreak.info, coffeebreak.lat, coffeebreak.long, coffeebreak.breakfast, coffeebreak.lunch, coffeebreak.dinner, coffeebreak.coffee, coffeebreak.name, coffeebreak.s_name, coffeebreak.site, 51],
	  [hartendief.info, hartendief.lat, hartendief.long, hartendief.breakfast, hartendief.lunch, hartendief.dinner, hartendief.coffee, hartendief.name, hartendief.s_name, hartendief.site, 52],
	  [buurmanwestend.info, buurmanwestend.lat, buurmanwestend.long, buurmanwestend.breakfast, buurmanwestend.lunch, buurmanwestend.dinner, buurmanwestend.coffee, buurmanwestend.name, buurmanwestend.s_name, buurmanwestend.site, 53],
	  [lui.info, lui.lat, lui.long, lui.breakfast, lui.lunch, lui.dinner, lui.coffee, lui.name, lui.s_name, lui.site, 54],
	  [omhelzing.info, omhelzing.lat, omhelzing.long, omhelzing.breakfast, omhelzing.lunch, omhelzing.dinner, omhelzing.coffee, omhelzing.name, omhelzing.s_name, omhelzing.site, 55],
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
  			url: "../site/img/vegan.png",
  			scaledSize: new google.maps.Size(27, 44)
  		},
  		activeIcon = {
			url: "../site/img/vegan_active.png",
			scaledSize: new google.maps.Size(27, 44)
		};

	for (i = 0; i < locations.length; i++) {

		var marker = locations[i],
        	breakfastCheck = marker[3],
        	lunchCheck = marker[4],
        	dinnerCheck = marker[5],
        	coffeeCheck = marker[6],
        	markerName = marker[7],
        	markerSearchName = marker[8],
        	markerSite = marker[9],
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
				locations[i][20],
				locations[i][21],
				locations[i][22],
				locations[i][23],
				locations[i][24],
				locations[i][25],
				locations[i][26],
				locations[i][27],
				locations[i][28],
				locations[i][29],
				locations[i][30],
				locations[i][31],
				locations[i][32],
				locations[i][33],
				locations[i][34],
				locations[i][35],
				locations[i][36],
				locations[i][37],
				locations[i][38],
				locations[i][39],
				locations[i][40],
				locations[i][41],
				locations[i][42],
				locations[i][43],
				locations[i][44],
				locations[i][45],
				locations[i][46],
				locations[i][47],
				locations[i][48],
				locations[i][49],
				locations[i][50],
				locations[i][51],
				locations[i][52],
				locations[i][53],
				locations[i][54],
				locations[i][55],
				locations[i][56]),
			icon: normalIcon,
			map: map,
			breakfast: breakfastCheck,
			lunch: lunchCheck,
			dinner: dinnerCheck,
			coffee: coffeeCheck,
			name: markerName, 
			s_name: markerSearchName, 
			site: markerSite, 
		});

		// Set location names for Hash
		locationNames[(locations[i][7])] = marker_l;
	
		// Click action on Marker
		google.maps.event.addListener(marker_l, 'click', (function (marker_l, i) {

			return function () {

				// Get website of location
				var locationWebsite = locations[i][9];

				// Get name of location for GTAG
				var matches = [];
				var text = locations[i][0];
				text.replace(/<strong>(.*?)<\/strong>/g, function () {
				    matches.push(arguments[1]);
				});
				var locationName = matches[0];

				//Set location name for hash
				var locationHash = locations[i][7];
				
				//Set location name as GTAG label when clicked
				gtag('event', 'view_item', {
				  'event_category': 'Location Markers EN',
				  'event_label': locationName + "_en"
				});
				
				//Set locaiton hash
				window.location.hash = locationHash;
			
				//Reset marker status icon and set active icon	
				setAllMarkersIcon(normalIcon);
				marker_l.setIcon(activeIcon);

				// Move map to active marker position
				map.panTo(marker_l.getPosition());

				//Focus on active marker
				marker_l.setAnimation(google.maps.Animation.BOUNCE);
    			setTimeout(function(){ marker_l.setAnimation(null); }, 1400);
    			marker_l.setZIndex(99999);
				
				//Make info window active
				locationInfo.classList.add('active');
				infowindow_l.setContent(locations[i][0]);  
				infoBoxInfo.style.display = "none";

				//Add text label for infro window
				if (window.screen.width < 768) {
					infoBox.classList.remove("small");
					hideTxt.innerHTML="hide";
				} else {
					infoBox.classList.remove("side");
				}

				//Add location info to info window
				document.getElementById('location-info').innerHTML = infowindow_l.content;

				//Create elements for route link & website link
				var locationInfoContent = document.getElementById('location-info'),
					routeLink = locationInfoContent.getElementsByTagName("a")[0],
					routeSiteHolder = document.createElement("div"),
					routeHolder = document.createElement("span"),
					siteHolder = document.createElement("span");

				routeSiteHolder.setAttribute('class', 'website-route-holder');
				routeHolder.setAttribute('class', 'route-holder');
				siteHolder.setAttribute('class', 'website-holder');

				//Put elemnts in right order
				locationInfoContent.appendChild(routeSiteHolder);
				routeSiteHolder.appendChild(routeHolder);
				routeHolder.appendChild(routeLink);
				routeSiteHolder.appendChild(siteHolder);

				// Place link in website holder
				locationWebsiteLink  = '<a href="' + locationWebsite + '" target="_blank">Visit website</a>'
				siteHolder.innerHTML = locationWebsiteLink;


				//Copy to clipboard share URL
				var siteURL = window.location.href.split('#')[0];
				var shareURL = siteURL + '#' + locationHash;

				document.getElementById('share-url').value = shareURL;

				new Clipboard('.share-url-btn');
				var clipboard = new Clipboard('.share-url-btn');
				var succesMessage = document.getElementById("succes-message-url-copied");

				clipboard.on('success', function(e) {
					
					//Show shared location GTAG
					gtag('event', 'share_item', {
						'event_category': 'Info window EN',
						'event_label': locationHash + " EN"
					});
					
					//Show Succes Message
					succesMessage.classList.add('active');
					setTimeout(function(){ 
						succesMessage.classList.remove('active'); 
					}, 1600);

				    clipboard.destroy();
				});

				//Set last location in Local Storage
				function setLastLocation() {
					localStorage.setItem('last_location', locationHash);
				}
				setLastLocation();

			}
		})(marker_l, i));

		locationMarkers.push(marker_l);
	}
	
	//Check URL hash for location name and trigger location window
	if(urlhash){
		 google.maps.event.trigger(locationNames[urlhash], 'click');
	}

	function setAllMarkersIcon(iconUrl){
		
		for(var i in locationMarkers) {
			
			if(locationMarkers.hasOwnProperty(i)) {
				
				marker_l = locationMarkers[i]
								
				marker_l.setIcon(iconUrl);
				
			}
		}
	}


	function searchLocations(){
		var searchResultsList = document.getElementById("js-search-result-list");

		// Add all the hashnames to the array
		var hashNames = [];
		for (i = 0; i < locationMarkers.length; i++) {
			hashNames.push(locationMarkers[i].name);
		}

		//Add all the friendly names to the array
		var itemNames = [];
		for (i = 0; i < locationMarkers.length; i++) {
		    itemNames.push(locationMarkers[i].s_name);
		}

		// Combine location names with location hash
		var r = [],
		    i,
		    keys = itemNames,
		    values = hashNames;
		for (i = 0; i < keys.length; i++) {
		    r[keys[i]] = values[i];
		}

		//Split Arrays into name and hash arrays
		var nameArray = Object.keys(r);
		var hashArray = nameArray.map(function (k) {
		    return r[k];
		});

		// Sort the Arrays alphabetically
		abcNames = nameArray.sort();
		abcHash = hashArray.sort();

		// Add list items to the list with href hashtag
		for (i = 0; i < abcHash.length; i++) {
			//Set location name for hash
			var locationHash = abcHash[i];
			var locName = abcNames[i];

			// Add list items and fill them with hash links and location names
			li = document.createElement('li');
			li.className = "search-result-list-item";
			el = document.createElement('a');
			el.setAttribute('href', '#' + locationHash);
	    	el.innerHTML = locName;
	    	searchResultsList.appendChild(li);
	    	li.appendChild(el);
	    }

	    ListItems = searchResultsList.children;
		var value = Object.keys(ListItems).map(function(e) {
		  return ListItems[e]
		  var searchLocationLink = value.firstChild;

			//Show searched location GTAG
			searchLocationLink.onclick = function() {
				searchLocationName = this.innerHTML;
				gtag('event', 'searched_item', {
					'event_category': 'Search',
					'event_label': searchLocationName
				});
		  	}
		});
	}
	searchLocations();

	// Show/Hide Breakfast places
	var toggleBreakfast = document.getElementById("showBreakfast"),
		toggleLunch = document.getElementById("showLunch"),
		toggleCoffee = document.getElementById("showCoffee"),
		toggleDinner = document.getElementById("showDinner"),
		toggleAll = document.getElementById("showAll");


    toggleBreakfast.addEventListener( 'change', function() {
	    if(this.checked) {
		    
		    gtag('event', 'view_item', {
				'event_category': 'Filter item EN',
				'event_label': 'breakfast EN'
			});
			
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
		    
		    gtag('event', 'view_item', {
				'event_category': 'Filter item EN',
				'event_label': 'lunch EN'
			});
						
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
		    
		    gtag('event', 'view_item', {
				'event_category': 'Filter item EN',
				'event_label': 'taart EN'
			});
			
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
		    
		    gtag('event', 'view_item', {
				'event_category': 'Filter item EN',
				'event_label': 'dinner EN'
			});
			
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
		    
		    gtag('event', 'view_item', {
				'event_category': 'Filter item EN',
				'event_label': 'all EN'
			});
			
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

	gtag('event', 'view_item', {
		'event_category': 'Info window EN',
		'event_label': 'toggle EN'
	});

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



function ToggleSearchList() {
	var searchToggle = document.getElementById("js-search-toggle"),
	closeSearch = document.getElementById("js-search-section-close"),
	searchResults = document.getElementById("js-search-results");

	searchToggle.onclick = function() {
		searchToggle.classList.toggle("active");
		searchResults.classList.toggle("open");
		closeSearch.classList.toggle("active");
		document.body.classList.toggle("no-scroll");

		//Show Searchtoggle click in GA
		gtag('event', 'view_item', {
		  'event_category': 'Search EN',
		  'event_label': 'search overview EN'
		});
	}

	closeSearch.onclick = function() {
		searchResults.classList.toggle("open");
		document.body.classList.toggle("no-scroll");
		closeSearch.classList.toggle("active");
		searchToggle.classList.toggle("active");

		//Show Searchtoggle click in GA
		gtag('event', 'close_item', {
		  'event_category': 'Search EN',
		  'event_label': 'close Search EN'
		});
	}
}
ToggleSearchList();

function adjustDynamicElements() {

	if (window.screen.width <= 767) {
		// Set the info panel to bottom
		infoBox.classList.remove("side");
		infoBox.classList.add("small");
		hideTxt.innerHTML="show info";

		function ToggleMobileMenu() {
			var sections = document.getElementById("js-sections"),
				infoBox = document.getElementById("info-box"),
				menuToggle = document.getElementById("js-mobile-nav-toggle"),
				animenu = document.getElementById("animenu"),
				mobileNav = document.getElementById("js-mobile-nav");

				menuToggle.onclick = function() {

					mobileNav.classList.toggle("open");
					animenu.classList.toggle("open");

					//Show Menutoggle click in GA
					gtag('event', 'view_item', {
					  'event_category': 'Mobile menu EN',
					  'event_label': 'Menu toggle EN'
					});
				}

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
				
				gtag('event', 'view_item', {
					'event_category': 'Mobile menu EN',
					'event_label': 'about EN'
				});
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
				
				gtag('event', 'view_item', {
					'event_category': 'Mobile menu EN',
					'event_label': 'vegan EN'
				});
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
				
				gtag('event', 'view_item', {
					'event_category': 'Mobile menu EN',
					'event_label': 'contact EN'
				});
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
				
				gtag('event', 'view_item', {
					'event_category': 'Mobile menu EN',
					'event_label': 'close tab EN'
				});
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
});