var GrumbleView = Backbone.View.extend({
	className: 'grumble',
	tagName: 'div',

	events: {
		'click.finish': 'markComplete'
	},

	initialize: function() {
		console.log("created grumble view!");
		this.listenTo(this.model, 'change', this.render);
		this.render();
	}, 

	render: function(){
		this.$el.html(HandlebarsTemplates['grumbles/show'](this.model.toJSON()));
	},

	markComplete: function() {
		var view = this;
		this.model.destroy()
		.done(function(){
			view.$el.fadeout();
		})
		.fail(function() {
			alert("couldn't destroy")
		});
	}
});