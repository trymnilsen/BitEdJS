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
                return {
                    status: 'error',
                    message : 'no valid pipeline for <' + ext + '> file: '+fileObject.name+'\n'
                };
            }

            pipe.pushFile(fileObject);
            return {};
        }
    };

    var assetPipe = {

        addToEditor : function(file)
        {
            var results = [];
            for (var i = 0; i < file.length; i++) {
                var operationResult = addFile(file[i]);
                //If no errors occured during adding the file
                //an empty object is retured (having no status or message key) 
                if(operationResult.status !== undefined
                   && operationResult.message!== undefined)
                {
                    results.push(operationResult.message);
                }
            }
            //Check that results is empty, meaning we had no errors
            if(results.length > 0)
            {
                return {
                    status  : 'error',
                    count   : file.length,
                    message : results.join('\n')
                }
            }
            else if(results.length === 0 && file.length>0)
            {
                return {
                    status  : 'ok',
                    count   : file.length
                }
            }
            //No files and no errors
            return { status: 'ignore'};
            //return appropriate status object
        },
        addPipeLine : function(pipeline)
        {
            pipeLines.push(pipeline);
        },
        //TODO: remove hardcoded collection
        getList: function()
        {
            return pipeLines[0].assetCollection;
        }
    }
    return function() { return assetPipe; }
});