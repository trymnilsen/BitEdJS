'use strict';

define([
    'models/editor/component/EditorComponent',
    //Component Definitions loaded 
    'models/editor/component/data/rendering/RenderSpriteComponent'
], 
function (
    BaseComponent
) {

    function ComponentFactory()
    {
        this.registerComponents();
    }

    ComponentFactory.COMPONENT_DATA = [];

    ComponentFactory.prototype = {
        constructor: ComponentFactory,
        createComponent: function(componentId)
        {
            return new BaseComponent(ComponentFactory.componentData[componentId]);
        },
        registerComponents: function()
        {
            for (var i = 0; i < arguments.length; i++) {
                var componentData = arguments[i];
                ComponentFactory.componentData[componentData.id] = componentData;
            }
        }
    }
    return ComponentFactory;
});