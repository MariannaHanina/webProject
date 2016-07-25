// Модель места
var FullPlacesList = Backbone.Model.extend({
	defaults: {
		code: '',
		name: '',
		desc: '',
		places: {}
	},

	initialize: function () {
		this.defaults.id = _.uniqueId();
	}
});