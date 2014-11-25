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
    ParameterAssetView.DROPPABLE = true;
    /**
     * The parameter types for this param view
     * @type {String}
     */
    ParameterAssetView.PARAMVIEWTYPE = 
                      eConstants.components.parameters.types.asset;

    return ParameterAssetView;
});