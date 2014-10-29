'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/editor/Editor',
  'text!views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentModalExpandedInfoTemplate.html'
], 
function($,
 _, 
 Backbone,
 eventor,
 editor,
 infoTemplate
 ){
    var ExpandedInfo = Backbone.View.extend({

        className   : 'component-modal-info-container',
        template    : _.template(infoTemplate),

        initialize  : function()
        {
            console.log('Initalize');
            eventor.on('editor.component.showinfo',_.bind(this.componentSelected,this));
        },
        render: function(data){
            var component = data === undefined ? 
                                            editor.components.at(0) : data;
            this.$el.html(this.template(component));
            return this;
        },
        componentSelected: function(component)
        {
            console.log('selected one', component);
            this.render(component);
        }
    });
    return ExpandedInfo;   
});