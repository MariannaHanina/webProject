// Вид места
var PlaceView = BaseView.extend({
	className: 'container place',
	template : 'place-template.html',

	initialize: function () {
		this.collection.fetch();
	},
	serialize: function () {
		return this.collection.get(this.id);
	}
});