// Список мест
var PlacesCollection = Backbone.Collection.extend({
	model: Place,
	localStorage: new Backbone.LocalStorage('placesCollection')
});