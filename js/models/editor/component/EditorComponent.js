'use strict';

define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var EditorComponent = Backbone.Model.extend({

        defaults : {
          name        : 'unknown',
          category    : 'misc',
          id          : 'no/id',
          description : 'No description',
          parameters  : []
        },  

        initialize: function(options) {
            this.set('id', options.name+'/'+options.category);
            console.log('initalize', options);
        },
        addParameter: function(name, type, description)
        {
          this.get('parameters').push({
            'name'        : name,
            'type'        : type,
            'description' : description
          });
        }

    });

    return EditorComponent;

});
