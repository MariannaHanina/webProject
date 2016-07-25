// Вид редактирования места
var EditCategoryView = BaseView.extend({
	className: 'edit-place',
	template : 'admin/edit-category-template.html',
	events: {
	    "submit form": "formSubmitted"
  	},

  	initialize: function () {
		this.collection.fetch();
	},

	serialize: function () {
		if (this.action == 'add')
			return new App.Models.Category();
		
		return this.collection.get(this.id);
	},

	formSubmitted: function (e) {
		e.preventDefault();

		var ls = this.collection.localStorage,
			data = Backbone.Syphon.serialize(this);

		if (this.id) {
			data.id = this.id;
			var newCategory = new App.Models.Category(data);
			
			this.name = newCategory.name;
			ls.update(newCategory);
		} else {
			var newCategory = new App.Models.Category(data);
			
			this.id = newCategory.get('id');
			this.name = newCategory.get('name');
			ls.create(newCategory);
		}
	
		ls.save();

		if (ls.find({id: this.id})) {
			console.log('Добавлена новая категория: ' + this.name);
		}
	}
});