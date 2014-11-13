'use strict';

define([
    'underscore',
    'backbone',
    'models/editor/component/EditorComponent',
    'collections/editor/component/EditorComponentCollection',
    //Component Definitions loaded 
    'models/editor/component/data/rendering/RenderSpriteComponent',
    'models/editor/component/data/editor/EntityIconComponent'

], 
function (
    _,
    Backbone,
    BaseComponent,
    ComponentDataCollection
) {

    function EditorComponentFactory()
    {
        this.registerComponents();
    }

    EditorComponentFactory.LOADEDCOMPONENTS = arguments;
    EditorComponentFactory.COMPONENT_DATA = new ComponentDataCollection();

    EditorComponentFactory.prototype = {
        constructor: EditorComponentFactory,

        createComponent: function(componentId)
        {

            //Retrieves data for the components or undefined if no results
            var data = EditorComponentFactory.COMPONENT_DATA.where({
                                                        componentId: componentId
                        });
            //Check if a match was found for the component id
            if(data !== undefined)
            {
                var newComponent = new BaseComponent(data[0]);
                return newComponent;
            }
            else
            {
                console.warn('Tried creating non existing component: ', componentId);
            }
        },
        createComponentsWhere: function(condition)
        {
            var newComponents = [];
            var conditionResults = [];
            //No condition was given, return all
            if(condition === null)
            {
                //Make sure to get array of collection
                conditionResults = EditorComponentFactory.COMPONENT_DATA.models;
            }
            else
            {
                conditionResults = EditorComponentFactory.COMPONENT_DATA.where(
                                    condition
                                );
            }

            if(conditionResults !== undefined)
            {
                _.each(conditionResults, function(element){
                        newComponents.push(this.createComponent(element.get('componentId')));
                }, this);
            }

            return newComponents;
        },
        getAllAvailable: function()
        {
            return this.createComponentsWhere(null);   
        },
        registerComponents: function()
        {
            var lc = EditorComponentFactory.LOADEDCOMPONENTS;
            if(EditorComponentFactory.COMPONENT_DATA.length > 0)
            {
                return;
            }
            for (var i = 0; i < lc.length; i++) {
                var componentData       = lc[i];

                //Check if its valid
                if(!this.componentDataIsValid(componentData))
                {
                    continue;
                }

                var generatedId         = this.generatedComponentId(componentData);
                var componentDataWithId = _.extend(componentData, 
                                                    {componentId: generatedId});
                var dataModel           = new BaseComponent(componentDataWithId);

                EditorComponentFactory.COMPONENT_DATA.add(dataModel);
            }
        },
        generatedComponentId: function(data)
        {
            return data.category+'/'+data.name;
        },
        /**
         * Validates if the supplied data is valid for use as component data
         * @param  {POD object} data the data meant as the component data
         * @return {boolean} true if valid
         */
        componentDataIsValid: function(data)
        {
            if(!('name' in data))
            {
                return false;
            }
            if(!('category' in data))
            {
                return false;
            }
            if(!('description' in data))
            {
                return false;
            }
            return true;
        }
    }
    return EditorComponentFactory;
});