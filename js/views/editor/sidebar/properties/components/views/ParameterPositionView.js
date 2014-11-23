'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/editor/EditorConstants'
], function(
    $, 
    _, 
    Backbone,
    eventor,
    eConstants
    ){

    var ParameterPositionView = Backbone.View.extend({
        
        initialize: function(options)
        {

        },
        render: function()
        {
            return this;
        }
    });
    ParameterPositionView.PROPERTIESVIEWTYPE = 
                      eConstants.components.parameters.types.vector2;

    return ParameterPositionView;
});