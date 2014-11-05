'use strict';

define([
  'underscore',
  'backbone',
  'backboneNestedModel'
], function(_, Backbone) {

  var EditorComponent = Backbone.Model.extend({

        defaults : {
          name        : 'unknown',
          category    : 'misc',
          componentId : 'no/id',
          description : 'No description',
          parameters  : [],
        },  

        initialize: function(options) {
            this.set('componentId', options.category+'/'+options.name);
            this.set('parameters', []); //Clear the parameter reference
            //For each parameter add it
            for (var i = 0; i < options.parameters.length; i++) {
              this.addParameter(options.parameters[i]);
            }
            console.log('Initialize::CreatedComponent {options}', options);
        },
        addParameter: function(param)
        {
          this.get('parameters').push({
            'name'        : param.name,
            'type'        : param.type,
            'description' : param.description
          });
        }

    });

    return EditorComponent;

});
