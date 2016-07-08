// Роутер
var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'place/:id': 'place'
	},
	index: function () {
		var placesView = new App.Views.Places({collection: new App.Collections.Places()});

		var main = new Backbone.Layout({
			template: 	"main-layout.html",
			el: 		false,
			views: 		{
				".content": new MainContentView(),
				".places": placesView
			}
		});

		main.$el.appendTo('body');
		main.render();
	},
	place: function (id) {
		console.log('Ссылка для места ', id);
	}
});

var indexRoute = function () {
	console.log('indexRoute', indexRoute);
	var main = new Backbone.Layout({
		template: "#main-layout",

		views: {
			".content": new MainContentView()
		}
	});

	console.log('main layout', main);

	var places = [
		{
			id: 1,
			name: 'SmokeRoom',
			desc: 'Приглашаем вас посетить lounge зону SmokeRoom - самое неформатное место в Сергиевом Посаде!',
			img: '/imgs/smokeroom.jpg'
		},
		{
			id: 2,
			name: 'Shisha Deluxe',
			desc: 'Сергиев Посад! Мы работали, мы старались, мы учились и это свершилось - уникальная кальянная от компании «SHISHA DELUXE»',
			img: '/imgs/shishadelux.jpg'
		},
		{
			id: 3,
			name: 'СЕВЕРНОЕ СИЯНИЕ',
			desc: 'Друзья, приглашаем вас в наше уникальное место! Для вас самые дымные кальяны, очень вкусный чай, игры и уютная атмосфера!',
			img: '/imgs/northernlights.jpg'
		},
		{
			id: 4,
			name: 'Кальянный-Бар Билибин',
			desc: 'Своим необычным названием бар обязан оригинальному стилю, в котором выполнен его интерьер.',
			img: '/imgs/bilibin.jpg'
		}
		],
		placesCollection = new App.Collections.Places(places),
		placesView = new App.Views.Places({collection: placesCollection})
		;
	}
