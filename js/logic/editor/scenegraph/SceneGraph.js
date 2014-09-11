'use strict';

define([
'underscore',
'eventor'
], 
function (
_,
eventor
) {

    function SceneGraph()
    {
        this.GraphData = [];
        this.numOfEntitiesCreated = 0;
        
        //Functions for creating different nodes
        var NODE_TYPES = {
            entity : function() {
                return [
                    {
                        name: 'physics',
                    }
                ];
            },
            light: function() {

            }         
        };
        var parsePath = function(path)
        {
            var paths = path.split('/').reverse();
            var currentPath = this.GraphData;
            while(paths.length>0)
            {
                var lookupName = paths.pop();
                for (var i = 0; i < currentPath.length; i++) {
                    if(currentPath[i].name===lookupName)
                    {
                        currentPath = currentPath[i].children;
                    }
                }

            }
        }
        this.addComponent = function(node,componentID)
        {
            
        }
        this.addNode = function(nodeType, nodeName, path)
        {
            if(nodeType in NODE_TYPES)
            {
                //Create a node based on the correct type
                var nodeComponents = NODE_TYPES[nodeType]();
                var newNode = {
                    id : this.numOfEntitiesCreated++,
                    path : nodeName,
                    name : nodeName,
                    type : nodeType,
                    tags : [],
                    components : nodeComponents
                }
                this.GraphData.push(newNode);
                eventor.trigger('editor.entity.add',newNode);
            }
            else
            {
                console.log('NodeType '+nodeType+' not valid for: '+nodeName);
            }
        }
        eventor.on('editor.entity.requestAdd', _.bind(this.addNode,this));
        this.updateEntity = function(entityProtocol)
        {

        }

    }

    return SceneGraph;
});