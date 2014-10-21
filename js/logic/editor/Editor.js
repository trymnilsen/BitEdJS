'use strict';

define([  
    'logic/editor/pipeline/AssetPipeline',
    'logic/editor/pipeline/pipelines/SpritePipeline',
    'logic/editor/scenegraph/SceneGraph',
    'logic/editor/EditorConstants'
],
function (
    AssetPipeline,
    SpritePipeline,
    SceneGraph,
    EditorConstants
) {
    var editorGenericPipeline = new AssetPipeline();
    //Specialized pipelines
    var spritePipeline = new SpritePipeline();
    editorGenericPipeline.addPipeLine(spritePipeline);
    //Scenegraph
    var editorSceneGraph = new SceneGraph();

    return {
        assetPipeline : editorGenericPipeline,
        sceneGraph : editorSceneGraph,
        constants: EditorConstants
    };
});
