'use strict';

define([
    'models/editor/component/EditorComponent',
    //Component Definitions loaded 
    'models/editor/component/data/rendering/RenderSpriteComponent',
    'models/editor/component/data/editor/EntityIconComponent'

], 
function (
    BaseComponent
) {

    function EditorComponentFactory()
    {
        var comps = arguments;
        this.registerComponents();
        var lol = 0;
    }

    EditorComponentFactory.LOADEDCOMPONENTS = arguments;
    EditorComponentFactory.COMPONENT_DATA = {};


    EditorComponentFactory.prototype = {
        constructor: EditorComponentFactory,
        createComponent: function(componentId)
        {
            if(componentId in EditorComponentFactory.COMPONENT_DATA)
            {
                var componentData = EditorComponentFactory.COMPONENT_DATA[componentId];
                var newComponent = new BaseComponent(componentData);
                return newComponent;
            }
            else
            {
                console.warn('Tried creating non existing component: ', componentId);
            }
        },
        getAllAvailable: function()
        {
            var all = [];
            for (var key in EditorComponentFactory.COMPONENT_DATA)
            {
                all.push(this.createComponent(key));
            }
            return all;
            
        },
        registerComponents: function()
        {
            var lc = EditorComponentFactory.LOADEDCOMPONENTS;
            //The Components start from the second argument, not the first.
            //The first arguement is the EditorComponent argument
            for (var i = 1; i < lc.length; i++) {
                var componentData = lc[i];
                var generatedId = this.generatedComponentId(componentData);
                EditorComponentFactory.COMPONENT_DATA[generatedId] = componentData;
            }
        },
        generatedComponentId: function(data)
        {
            return data.category+"/"+data.name;
        }
    }
    return EditorComponentFactory;
});