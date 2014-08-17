'use strict';

define([  
    'logic/editor/pipeline/AssetPipeline',
    'logic/editor/pipeline/pipelines/SpritePipeline',
    'logic/editor/scenegraph/SceneGraph'
],
function (
    AssetPipeline,
    SpritePipeline,
    SceneGraph
) {
    var editorGenericPipeline = new AssetPipeline();
    //Specialized pipelines
    var spritePipeline = new SpritePipeline();
    editorGenericPipeline.addPipeLine(spritePipeline);
    //Scenegraph
    var editorSceneGraph = new SceneGraph();

    return {
        assetPipeline : editorGenericPipeline,
        sceneGraph : editorSceneGraph
    };
});
