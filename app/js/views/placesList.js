// Вид списка мест
var PlacesListView = BaseView.extend({
	className: 'row',
	template : 'places-list-template.html',

	initialize: function () {
		this.collection.fetch();
	},
	serialize: function () {
		return this.collection;
	}
});