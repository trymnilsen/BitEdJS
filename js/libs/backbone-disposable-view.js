Backbone.View.prototype.appendChildView = function(view, selector) 
{
	//Set the array for keeping track of views if it does not exist
	if(this.childViews === undefined){
		this.childViews = [];
	}
	this.childViews.push(view);
	//if we have a selector, use this to add, if not append to this views el
	var targetElement = null;
	if(selector === undefined || typeof selector != "string"){
		targetElement = this.$el;
	} 
	else {
		targetElement = $(selector);
	}
	targetElement.append(view.render().el);
}
Backbone.View.prototype.dispose = function(view)
{
	if(view.childViews === undefined || view.childViews.length == 0)
	{
		return;
	}

	//Recursive stop listen
	for (var i = 0; i < view.childViews.length; i++) {
		view.childViews[i].dispose(view.childViews[i]);
	};
	view.stopListening();
}