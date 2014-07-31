'use strict';

define([  
    'logic/editor/pipeline/AssetPipeline',
    'logic/editor/pipeline/pipelines/SpritePipeline'
],
function (
    AssetPipeline,
    SpritePipeline
) {
    var editorGenericPipeline = new AssetPipeline();
    //Specialized pipelines
    var spritePipeline = new SpritePipeline();
    editorGenericPipeline.addPipeLine(spritePipeline);

    
    return {
        assetPipeline : editorGenericPipeline,

    };
});
