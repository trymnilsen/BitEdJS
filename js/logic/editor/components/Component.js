'use strict';

define([
'underscore'
], 
function (
_
) {
    /**
     * Constructor for a new component type
     * @param {string} name   The name of this component
     * @param {string} category   The category of this component
     * @param {object} params define the parameters for this component
     */
    function Component(name, category, params)
    {
        this.name = name;
        this.category = category;
        //The id (used for mapping to a UI is 
        //created by combing name and category)
        this.id = category+"/"+name;
        //Check that the params is an array
        if(params instanceof Array)
        {
            this.parameters = params;
        }
        else
        {
            console.warn('componentParams was not an array',typeof(params),params);
        }
    }
    Component.prototype =
    {
    	constructor: Component,
    	getResources: function()
    	{

    	},
        getParameters: function()
        {

        },
        getRenderTasks: function()
        {

        }
    }
    return Component;
});