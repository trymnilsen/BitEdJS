'use strict';

define([
  'underscore',
  'backbone',
  'collections/editor/component/EditorComponentCollection',
  'collections/editor/entity/EditorEntityTagsCollection'

], function(_, 
Backbone,
ComponentCollection,
TagsCollection) {

    var EditorEntity = Backbone.Model.extend({

        defaults : 
        {
            path : '',
            name : 'New Entity',
            type : 'entity',
            tags : [],
            components : []
        },

        initialize: function(options) {
            this.set('components', new ComponentCollection());

            //this.set('tags', new TagsCollection()); //Set the parameters reference
            console.log('Initialize::CreatedEntity {options}', options);
        }

    });

    return EditorEntity;

});
