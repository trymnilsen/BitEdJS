'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'logic/editor/EditorConstants',
  //Add The possible parameter views here
  'views/editor/sidebar/properties/components/views/ParameterAssetView',
  'views/editor/sidebar/properties/components/views/ParameterPositionView'
], function(
    $,
    _, 
    Backbone, 
    eConstants
    ){

    var PropertiesComponentParameterList = Backbone.View.extend({

        className: 'component-parameter-list',
        /**
         * Lookup array for getting the correct constructor for 
         * the appropriate view for the correct parameter type
         * @type {Array}
         */
        viewTypes : [],
        /**
         * Copy of all parameters this component governs
         * @type {Array}
         */
        parameters: [],
        initialize: function(options) {

            this.processLoadedParameterViews();
            this.parameters = options.parameters;
        },
        render: function() {
            this.$el.app.append();
            return this;
        },
        renderParameter: function(parameter) {
            var parameterViewConstructor = this.viewTypes[parameter.type];
            if(parameterViewConstructor === undefined)
            {
                return null;
            }

            var parameterView = new parameterViewConstructor(parameter);

            this.$el.append(parameterView.render().el);
        },
        processLoadedParameterViews: function()
        {
            var lw = PropertiesComponentParameterList.LOADEDVIEWS;
            for (var i = 0; i < lw.length; i++) {
                var type = lw[i].PROPERTIESVIEWTYPE;
                if(type !== undefined)
                {
                    this.viewTypes[type] = lw[i];
                }
            };
        }
    });

    PropertiesComponentParameterList.LOADEDVIEWS = arguments;

    return PropertiesComponentParameterList;
  
});
