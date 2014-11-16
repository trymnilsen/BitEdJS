'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentList',
  'views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentModalExpandedInfo',
  'text!views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentModalTemplate.html'
], 
function($,
 _, 
 Backbone,
 eventor,
 ComponentList,
 InfoView,
 modalTemplate
 ){
    var tagItemView = Backbone.View.extend({

        template: _.template(modalTemplate),
        expandedInfoView: {},
        listView : {},
        className: 'properties-add-modal',

        events: 
        {
            'click .btn-primary':'modalClose',
            'show.bs.modal #propertiesAddComponentModal':'showModal'
        },
        initialize: function()
        {
            this.listView = new ComponentList();
            this.infoView = new InfoView();
        },

        render: function(){
            this.undelegateEvents();
            //first set out modal hdml
            this.$el.html(this.template());
            //Then handle our two subviews
            $('.properties-add-component-modal-content-wrapper',this.$el)
                    .append(this.listView.render().$el);
            $('.properties-add-component-modal-content-wrapper',this.$el)
                    .append(this.infoView.render().$el);
                    
            this.delegateEvents();
            return this;
        },
        showModal: function()
        {
            this.listView.resetSelection();
        },
        modalClose: function(event)
        {
            eventor.trigger('editor.entity.component.add',this.listView.getSelected());
        }

    });
    return tagItemView;   
});