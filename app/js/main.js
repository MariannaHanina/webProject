(function() {
	window.App = {
		Models: {
			Place: Place
		},
		Collections: {
			Places: PlacesCollection
		},
		Views: {
			Places: PlacesView,
			MainContent: MainContentView
		},
		Router: Router
	};

	var router = new App.Router();
	Backbone.history.start();
}) ();