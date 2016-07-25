var adminRoute = function (action, type, id) {
	admin = true;

	var places = new App.Collections.Places(),
		categories = new App.Collections.Categories(),
		fullPlacesList = new App.Collections.FullPlacesList(),
		addPlaceView = new EditPlaceView({
			collection: places, 
			action: 'add'
		}),
		addCategoryView = new EditCategoryView({
			collection: categories, 
			action: 'add'
		}),
		placesListView = new PlacesListView({
			collection: fullPlacesList,
			action: 'edit'
		});

	var adminLayout = new Backbone.Layout({
		template: 	"main-layout.html",
		el: 		false,
		views: 		{
			".top-menu": new TopMenuView(),
			".content": new AdminMainContentView(),
			".add-place-form": addPlaceView,
			".add-category-form": addCategoryView,
			".places": placesListView
		}
	});

	if (type && id) {
		switch (action) {
			case 'edit':
				if (type == 'place') {
					var editPlaceView = new EditPlaceView({
						collection: places, 
						action: 'edit', 
						id: id
					});

					places.fetch();
					adminLayout.setView('.content', editPlaceView);
				} else {
					var editCategoryView = new EditCategoryView({
						collection: categories, 
						action: 'edit', 
						id: id
					});

					categories.fetch();
					adminLayout.setView('.content', editCategoryView);
				}
			break;
		}
	}

	$('body').empty();
	adminLayout.$el.appendTo('body');

	adminLayout.render();
}