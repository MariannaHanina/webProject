(function() {
	window.App = {
		Models: {
			Place: Place,
			Category: Category
		},
		Collections: {
			Places: PlacesCollection,
			Categories: CategoriesCollection,
			FullPlacesList: FullPlacesListCollection
		},
		Views: {
			Place: PlaceView,
			Places: PlacesView,
			MainContent: MainContentView
		},
		Router: Router
	};

	var router = new App.Router();
	Backbone.history.start();
}) ();