'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor'
], function(
    $, 
    _, 
    Backbone,
    eventor
    ){

    var ParameterAssetView = Backbone.View.extend({
        
        initialize: function(options)
        {

        },
        render: function()
        {
            this.$el.append('<div>This is an asset</div>');
            return this;
        }
    });
    /**
     * Defines if this parameter has dropp interactivity
     * @static
     * @type {Boolean}
     */
    ParameterPositionView.DROPPABLE = true;
    /**
     * The parameter types for this param view
     * @type {String}
     */
    ParameterPositionView.PARAMVIEWTYPE = 
                      eConstants.components.parameters.types.asset;

    return ParameterAssetView;
});