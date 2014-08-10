'use strict';

define([
'jquery',
'underscore',
'backbone',
'views/editor/sidebar/properties/tag/PropertiesTagItemView',
'text!views/editor/sidebar/properties/tag/PropertiesTagViewTemplate.html',
'text!views/editor/sidebar/properties/tag/PropertiesTagViewModal.html'
], 
function($,
_, 
Backbone,
ItemView,
propTemplate,
modalTemplate
){
    var propTagView = Backbone.View.extend({
        tagName: 'ul',
        events: {
            'click .properties-add-tag' : 'addTag'
        },
        tags : ['foo','bar'],
        render: function(){
            $('body').append(modalTemplate);
            this.$el.html(propTemplate);
            for (var i = 0; i < this.tags.length; i++) {
                this.addTag(this.tags[i]);
            }
            return this;
        },
        addTag: function(tag) {
            console.log('adding tag');
                        /*var view = new ItemView();
            view.tag = tag;
            $('.properties-tag-icon',this.$el).after(view.render().el);*/
        }
    });
    return propTagView;   
});