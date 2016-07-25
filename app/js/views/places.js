// Вид превью мест
var PlacesView = BaseView.extend({
	className: 'row',
	template : 'places-template.html',

	initialize: function () {
		this.collection.fetch();
	},
	serialize: function () {
		return this.collection;
	}
});