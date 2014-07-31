'use strict';

define([
    'underscore'
], 
function (
    _
    ) {
    var pipeLines = [];
    var getPipeline = function(fileExtension)
    {
        for (var i = 0; i < pipeLines.length; i++) {
            if(_.contains(pipeLines[i].extensions,fileExtension))
            {
                return pipeLines[i];
            }
        }
        return null;
    };
    var addFile = function(fileObject)
    {
        //Validate file
        if(fileObject.name !== undefined 
            && fileObject.lastModifiedDate !== undefined
            && fileObject.size !== undefined)
        {
            //Get extension
            var re = /(?:\.([^.]+))?$/;
            //returns an array of both ext with and without leading dot, select
            //the string representation of the ext without a dot (array el 1)
            var ext = re.exec(fileObject.name)[1];

            //Get responsible pipeline
            var pipe = getPipeline(ext);
            //No pipe found
            if(pipe===null)
            {
                console.log('no valid pipeline for <' + ext + '> file: '+fileObject.name);
                return;
            }

            pipe.pushFile(fileObject);
        }
    };

    var assetPipe = {

        addToEditor : function(file)
        {
            for (var i = 0; i < file.length; i++) {
                addFile(file[i]);
            }
            //is it an array or an object?

            //Get the extention of the file
        },
        addPipeLine : function(pipeline)
        {
            pipeLines.push(pipeline);
        }
    }
    return function() { return assetPipe; }
});