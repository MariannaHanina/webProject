// Модель категории
var Category = Backbone.Model.extend({
	defaults: {
		id: '',
		code: '',
		name: '',
		desc: ''
	},
	cid: '',
	initialize: function () {
		this.defaults.id = _.uniqueId('category_');
	}
});