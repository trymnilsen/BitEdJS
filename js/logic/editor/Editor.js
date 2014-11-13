'use strict';

define([  
    'logic/editor/pipeline/AssetPipeline',
    'logic/editor/pipeline/pipelines/SpritePipeline',
    'logic/editor/scenegraph/SceneGraph',
    'collections/editor/component/EditorAvailableComponentsCollection'
],
function (
    AssetPipeline,
    SpritePipeline,
    SceneGraph,
    ComponentsCollection
) {
    var editorGenericPipeline   = new AssetPipeline();
    //Specialized pipelines
    var spritePipeline          = new SpritePipeline();
    editorGenericPipeline.addPipeLine(spritePipeline);
    //Scenegraph
    var editorSceneGraph        = new SceneGraph();
    //Components
    var availableComponents     = new ComponentsCollection();
    return {
        assetPipeline   : editorGenericPipeline,
        sceneGraph      : editorSceneGraph,
        components      : availableComponents
    };
});
