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
            this.$el.append('<div>This is a position</div>');
            return this;
        }
    });
    /**
     * Defines if this parameter has dropp interactivity
     * @static
     * @type {Boolean}
     */
    ParameterPositionView.DROPPABLE = false;
    /**
     * The parameter types for this param view
     * @type {String}
     */
    ParameterPositionView.PARAMVIEWTYPE = 
                      eConstants.components.parameters.types.vector2;

    return ParameterPositionView;
});