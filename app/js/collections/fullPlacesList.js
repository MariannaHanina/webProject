// Полный список категорий и мест
var FullPlacesListCollection = Backbone.Collection.extend({
	model: FullPlacesList,
	localStorage: new Backbone.LocalStorage('categoriesCollection'),
	placesCollection: null,

	initialize: function () {
		this.placesCollection = new App.Collections.Places();
		
		this.fetch();
		this.placesCollection.fetch();

		this.each(function (category) {
			var places = this.placesCollection.where({category: category.get('code')});
			
			category.set({'places' : places});
		}, this);
		
		return this;
	}
});