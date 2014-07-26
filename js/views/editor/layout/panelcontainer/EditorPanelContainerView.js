'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/layout/panelcontainer/EditorPanelContainerTemplate.html'
], function($, _, Backbone, PanelContainerTemplate){

  var EditorPanelContainerView = Backbone.View.extend({
    
    headerText : 'No Header Set',
    content : '',
    render: function(){
    	var data = {
    		headerText : this.headerText
    	};
    	var compiledTemplate = _.template(PanelContainerTemplate,data);
    	this.$el.html(compiledTemplate);
    	$('.editor-panel-container-content').append(this.content);
      	return this;
    }

  });

  return EditorPanelContainerView;
  
});
