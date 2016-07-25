var indexRoute = function () {
	var placesView = new App.Views.Places({collection: new App.Collections.Places()});

	mainLayout = new Backbone.Layout({
		template: 	"main-layout.html",
		el: 		false,
		views: 		{
			".top-menu": new TopMenuView(),
			".content": new MainContentView(),
			".places": placesView
		}
	});

	$('body').empty();
	mainLayout.$el.appendTo('body');
	mainLayout.render();
};

var placeRoute = function (id) {
	if (!mainLayout)
		indexRoute();

	var placeView = new App.Views.Place({collection: new App.Collections.Places(), id: id});

	mainLayout.setView('.content', placeView);
	mainLayout.render();
};

// Роутер
var mainLayout,
	admin = false;

var Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'place/:id': 'place',

		'admin': 'admin',
		'admin/': 'admin',
		'admin/:action/:type/:id': 'admin',
		'category_17': 'other'
	},
	index: indexRoute,
	place: placeRoute,
	admin: adminRoute,
	other: function () {
		console.log('other');
	}
});