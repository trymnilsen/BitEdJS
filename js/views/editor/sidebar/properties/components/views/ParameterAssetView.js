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
            return this;
        }
    });

    ParameterPositionView.PROPERTIESVIEWTYPE = 
                      eConstants.components.parameters.types.asset;
                      
    return ParameterAssetView;
});