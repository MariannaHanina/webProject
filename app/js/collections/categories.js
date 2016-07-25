// Список мест
var CategoriesCollection = Backbone.Collection.extend({
	model: Category,
	localStorage: new Backbone.LocalStorage('categoriesCollection')
});