// Вид контента главной
var TopMenuView = BaseView.extend({
	tagName: 'ul',
	className: 'nav navbar-nav navbar-right navstyle',
	template : 'top-menu-template.html',
	initialize: function () {
		if (admin)
			this.template = 'admin/' + this.template;
	}
});