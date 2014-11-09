'use strict';

define([
'underscore',
'eventor',
'collections/editor/entity/EditorEntitySceneGraphCollection',
'models/editor/entity/EditorEntityModel',
'models/editor/entity/EditorEntityModelFactory'
], 
function (
_,
eventor,
SceneGraphStorage,
EntityModel,
EntityFactory
) {


    function SceneGraph()
    {
        this._storage = new SceneGraphStorage();
        eventor.on('editor.entity.requestAdd', _.bind(this.addNode,this));
    }
    SceneGraph.prototype = {
        constructor: SceneGraph,

        addNode: function(nodeType, nodeName, path)
        {
            var factory = new EntityFactory();
            var newNode = factory.createEntity({
                path : path,
                name : nodeName,
                type : nodeType
            });
            this._storage.add(newNode);
            console.log('adding entity');
            eventor.trigger('editor.entity.add',newNode);
        }
    }
    return SceneGraph;
});