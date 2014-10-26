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
            //We append our modal to the body instead of adding it just below
            //so we avoid having it nested under and getting cut of by overflow
            //etc by the layout system
            $('body').append(modalTemplate);
            this.$el.html(propTemplate);
            for (var i = 0; i < this.tags.length; i++) {
                this.addTag(this.tags[i]);
            }
            this.delegateEvents();
            return this;
        },
        addTag: function(tag) {
            console.log('adding tag');
            var view = new ItemView();
            if(typeof tag === 'string')
            {
                view.tag = tag;
            }
            else
            {
                view.tag = 'new tag';
            }

            $('.properties-tag-icon',this.$el).after(view.render().el);
        }
    });
    return propTagView;   
});