Backbone.Layout.configure({
	manage: true,
	prefix: "templates/",
	fetchTemplate: function(path) {
	    // Check for a global JST object.  When you build your templates for
	    // production, ensure they are all attached here.
	    var JST = window.JST || {};

	    // If the path exists in the object, use it instead of fetching remotely.
	    if (JST[path]) {
	      return JST[path];
	    }

	    // If it does not exist in the JST object, mark this function as
	    // asynchronous.
	    var done = this.async();

	    // Fetch via jQuery's GET.  The third argument specifies the dataType.
	    $.get(path, function(contents) {
		      // Assuming you're using underscore templates, the compile step here is
		      // `_.template`.
		      done(_.template(contents));
	    }, 'text');
	}
})
