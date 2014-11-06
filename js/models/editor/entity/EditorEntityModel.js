'use strict';

define([
  'underscore',
  'backbone',
  'collections/editor/component/EditorComponentCollection',
  'collections/editor/entity/EditorEntityTagsCollection',
  'models/editor/component/EditorComponentFactory'

], function(_, 
Backbone,
ComponentCollection,
TagsCollection,
ComponentFactory) {

    var EditorEntity = Backbone.Model.extend({

        defaults : 
        {
            path : '',
            name : 'New Entity',
            type : 'entity',
            tags : [],
            components : [],
        },

        initialize: function(options) {
            this.set('components', new ComponentCollection());
            //Append the editor icon
            var factory = new ComponentFactory();
            this.get('components').add(
                factory.createComponent('Editor/Entity Icon'));
            //this.set('tags', new TagsCollection()); //Set the parameters reference
            console.log('Initialize::CreatedEntity {options}', options);
        }

    });

    return EditorEntity;

});
