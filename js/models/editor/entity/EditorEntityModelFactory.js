'use strict';

define([
    'logic/editor/Editor',
    'logic/editor/EditorConstants',
    'models/editor/entity/EditorEntityModel',
    'models/editor/component/EditorComponentFactory'
], 
function (
    editor,
    eConstants,
    EditorEntity,
    ComponentFactory
) {

    function EditorEntityModelFactory()
    {
        this.compFactory = new ComponentFactory();
    }


    EditorEntityModelFactory.prototype = {
        constructor: EditorEntityModelFactory,
        createEntity: function(options)
        {
            //Get all default components
            var defaultComponents = this.compFactory.createComponentsWhere({
                                        isDefault: true
                                    });

            var newEntity = new EditorEntity(options);
            newEntity.get('components').add(defaultComponents);
            return newEntity;
        },
        createDummy: function(test)
        {
            var entityName = eConstants
                            .propertiesView
                            .noItemSelectedString;
            return new EditorEntity({name:entityName});
        }
    }
    return EditorEntityModelFactory;
});