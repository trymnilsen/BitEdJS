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
         * @type {Integer}
         * @readOnly
         */
        canDrop   : 0,
        /**
         * Called as constructor, initalizes the view
         * @param  {Object} options the parameteres for this view
         */
        initialize: function(options) {

            this.processLoadedParameterViews();
            this.parameters = options;

            this.listenTo(eventor, 'editor.asset.drag.start', this.highlightDropZone);
            eventor.on('editor.asset.drag.stop',
                                    _.bind(this.unHighlightDropZone,this));
        },
        /**
         * Sets up the DOM nodes and handles behaviour for the DOM
         * @return {[type]} [description]
         */
        render: function() {
            for (var i = 0; i < this.parameters.length; i++) {
                //Create the param
                var paramView = this.renderParameter(this.parameters[i]);
                this.$el.append(paramView.el);
            }
            //If we have drop behaviour on a param, activate it
            if(this.canDrop > 0)
            {
                this.$el.droppable();
            }
            return this;
        },
        /**
         * Sets up a Dom node with view for a given parameter
         * @param  {Object} parameter
         * @return {Object | null} ParameterView
         */
        renderParameter: function(parameter) {
            var ParameterViewConstructor = this.viewTypes[parameter.type];
            if(ParameterViewConstructor === undefined)
            {
                return null;
            }
            //If the param is droppable we enable highlighting of all of the
            //component, when dragging starts
            if(ParameterViewConstructor.DROPPABLE)
            {
                this.canDrop++;
            }
            var parameterView = new ParameterViewConstructor(parameter);

            return parameterView.render();
        },
        /**
         * Internal method for processing the requirejs loaded views
         */
        processLoadedParameterViews: function()
        {
            var lw = PropertiesComponentParameterList.LOADEDVIEWS;
            for (var i = 0; i < lw.length; i++) {
                var type = lw[i].PARAMVIEWTYPE;
                if(type !== undefined)
                {
                    this.viewTypes[type] = lw[i];
                }
            }
        },
        /**
         * Callback on a dragged item hovering over this parameter list
         */
        highlightDropOver: function()
        {

        },
        /**
         * Callback on a dragged item dragged out of this parameter list area
         */
        highlightDropOut: function()
        {

        },
        /**
         * Callback triggered when a draggable that can be dropped on one of the
         * params in this list has started dragging
         */
        highlightDropZone: function()
        {
            console.log('highlightDropzone');
        },
        /**
         * Callback triggered when a draggable that can be dropped on one of the
         * params in this list has ended dragging
         */
        unHighlightDropZone: function()
        {
            console.log('unhighlight dropzone');
        }
    });

    PropertiesComponentParameterList.LOADEDVIEWS = arguments;

    return PropertiesComponentParameterList;
  
});
