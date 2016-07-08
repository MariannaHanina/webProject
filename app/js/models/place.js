// Модель места
var Place = Backbone.Model.extend({
	defaults: {
		desc: 'Нет описания',
		img: 'imgs/default.jpg',
		price: 1000
	},

	validate: function (attrs, options) {
		if (attrs.price < 0)
			return 'Стоимость не может быть отрицательной.';
	},

	getDesc: function () {
		return this.get('desc');    
	}
});