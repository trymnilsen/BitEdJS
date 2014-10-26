'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentList',
  'views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentModalExpandedInfo',
  'text!views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentModalTemplate.html'
], 
function($,
 _, 
 Backbone,
 ComponentList,
 InfoView,
 modalTemplate
 ){
    var tagItemView = Backbone.View.extend({

        template: _.template(modalTemplate),
        expandedInfoView: {},
        listView : {},

        initialize: function()
        {
            this.listView = new ComponentList();
            this.infoView = new InfoView();
        },

        render: function(){
            //first set out modal hdml
            this.$el.html(this.template());
            //Then handle our two subviews
            $('.modal-body',this.$el).append(this.listView.render().$el);
            $('.modal-body',this.$el).append(this.infoView.render().$el);
            return this;
        }
    });
    return tagItemView;   
});