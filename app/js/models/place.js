// Модель места
var Place = Backbone.Model.extend({
	defaults: {
		id: '',
		name: '',
		category: 'noCategory',
		desc: '',
		img: 'imgs/noimage.jpg'
	},

	initialize: function () {
		this.defaults.id = _.uniqueId('place_');
	},

	validate: function (attrs, options) {
		if (attrs.price < 0)
			return 'Стоимость не может быть отрицательной.';
	},

	getDesc: function () {
		return this.get('desc');    
	}
});