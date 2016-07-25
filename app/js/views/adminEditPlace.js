// Вид редактирования места
var EditPlaceView = BaseView.extend({
	className: 'edit-place',
	template : 'admin/edit-place-template.html',
	events: {
	    "submit form": "formSubmitted"
  	},

  	initialize: function () {
		this.collection.fetch();
	},

	serialize: function () {
		var model;

		if (this.action == 'add')
			model = new App.Models.Place();
		else
			model = this.collection.get(this.id);

		var categories = new App.Collections.Categories().localStorage.findAll();
		
		model = model.set('categories', categories);
		
		return model;
	},

	formSubmitted: function (e) {
		e.preventDefault();

		var ls = this.collection.localStorage,
			data = Backbone.Syphon.serialize(this);

		if (this.id) {
			data.id = this.id;
			var newPlace = new App.Models.Place(data);
			
			this.name = newPlace.get('name');
			ls.update(newPlace);
		} else {
			var newPlace = new App.Models.Place(data);
			
			this.id = newPlace.get('id');
			this.name = newPlace.get('name');
			ls.create(newPlace);
		}
		console.log('this', this);

		if (ls.find({id: this.id})) {
			console.log('Добавлено новое место: ' + this.name);
		}
	}
});