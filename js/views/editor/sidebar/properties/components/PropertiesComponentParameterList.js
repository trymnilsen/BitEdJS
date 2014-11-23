'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/editor/EditorConstants',
  //Add The possible parameter views here
  'views/editor/sidebar/properties/components/views/ParameterAssetView',
  'views/editor/sidebar/properties/components/views/ParameterPositionView'
], function(
    $,
    _, 
    Backbone,
    eventor,
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
        /**
         * does the component have droppable params?
         * @type {Boolean}
         * @readOnly
         */
        canDrop   : false,
        initialize: function(options) {

            this.processLoadedParameterViews();
            this.parameters = options.parameters;
        },
        render: function() {
            for (var i = 0; i < this.parameters.length; i++) {
                //Create the param
                var paramView = this.renderParameter(this.parameters[i]);
                this.$el.append(paramView.el);
            };
            return this;
        },
        renderParameter: function(parameter) {
            var parameterViewConstructor = this.viewTypes[parameter.type];
            if(parameterViewConstructor === undefined)
            {
                return null;
            }
            //If the param is droppable we enable highlighting of all of the
            //component, when dragging starts
            if(parameterViewConstructor.DROPPABLE)
            {
                this.canDrop = true;
            }
            var parameterView = new parameterViewConstructor(parameter);

            return parameterView.render();
        },
        processLoadedParameterViews: function()
        {
            var lw = PropertiesComponentParameterList.LOADEDVIEWS;
            for (var i = 0; i < lw.length; i++) {
                var type = lw[i].PARAMVIEWTYPE;
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
