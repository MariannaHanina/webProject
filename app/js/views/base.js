var BaseView = Backbone.View.extend({
	template: "",

	serialize: function () {
		return {};
	},

	fetch: function (done) {
		$.get(this.template, function (contents) {
			done(_.template(contents));
		});
	},

	render: function() {
		this.fetch(function(template) {
			var markup = template(this.serialize());

			this.$el.html(markup);
		});

		return this;
	}
});