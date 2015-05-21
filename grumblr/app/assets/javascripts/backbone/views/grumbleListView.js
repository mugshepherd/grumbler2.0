var GrumblesListView = Backbone.View.extend({
	el: '#grumble-list',

	initialize: function() {
		console.log("list view created!")
		this.listenTo(this.collection, 'reset', this.renderAll);
		this.listenTo(this.collection, 'add', this.renderOne);
	}, 

	renderAll: function(){
		this.$el.empty();
		this.collection.each(this.renderOne.bind(this));
	},

	renderOne: function(grumble) {
		var view = new GrumbleView({model: grumble});
		view.render();
		this.$el.append(view.$el);
	}
});