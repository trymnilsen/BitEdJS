'use strict';

define([
'underscore',
'logic/editor/components/ComponentBank'
], 
function (
_,
componentBank
) {
    function ComponentResolver()
    {

    }
    ComponentResolver.prototype =
    {
    	constructor: ComponentResolver,
    	getAllComponents: function()
    	{
    		return componentBank;
    	}
    }
    return ComponentResolver;
});