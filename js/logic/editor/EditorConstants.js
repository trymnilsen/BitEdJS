'use strict';

define([], function(){
  return {
    /**
     * Constants mostly used in views/editor/sidebar/properties
     * @type {Object}
     */
    propertiesView : {
        //The string set for input when no item is selected
        noItemSelectedString : 'No Item Selected',
        itemIcons : {
            'entity' : 'fa-puzzle-piece'
        }
    },
    /**
     * Constants used in reference to components (across views and modules)
     * @type {Object}
     */
    components : {
        /**
         * Constants for the parameters a component might have
         * @type {Object}
         */
        parameters : {
            /**
             * Constants for the name of all the available parameter types
             * @type {Object}
             */
            types : {
                asset : 'Asset',
                vector2 : 'Position'
            }
        }
    }
  };
});
