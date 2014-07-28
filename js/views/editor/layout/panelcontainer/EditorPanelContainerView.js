'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/layout/panelcontainer/EditorPanelContainerTemplate.html'
], function($, _, Backbone, PanelContainerTemplate){

  var EditorPanelContainerView = Backbone.View.extend({
    
    headerText : 'No Header Set',
    className  : 'full-space-wrapper',
    panelContent : 'empty',
    render: function(){
    	var data = {
    		headerText : this.headerText,
    	};
    	var compiledTemplate = _.template(PanelContainerTemplate,data);
    	this.$el.html(compiledTemplate);
        if(typeof this.panelContent !== 'string')
        {
            this.panelContent = this.panelContent.render().el;
        }
    	$('.editor-panel-container-content',this.$el)
                        .append(this.panelContent);
      	return this;
    }

  });

  return EditorPanelContainerView;
  
});
