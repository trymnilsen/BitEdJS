'use strict';

define([
    'logic/editor/Editor',
    'models/editor/entity/EditorEntityModel',
    'models/editor/component/EditorComponentFactory'
], 
function (
    editor,
    EditorEntity,
    ComponentFactory
) {

    function EditorEntityModelFactory()
    {

    }


    EditorEntityModelFactory.prototype = {
        constructor: EditorEntityModelFactory,
        createEntity: function(options)
        {
            //Get all default components
            var defaultComponents = ComponentFactory.createComponentsWhere({
                                        isDefault: true
                                    });

            var newEntity = new EditorEntity(options);
            newEntity.get('components').add(defaultComponents);
            return newEntity;
        },
        createDummy: function()
        {
            var entityName = editor
                            .constants
                            .propertiesView
                            .noItemSelectedString;
            return new EditorEntity({name:entityName});
        }
    }
    return EditorEntityModelFactory;
});