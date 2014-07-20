'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/layout/EditorBottomLayoutTemplate.html',
  //non argument
  'jquery.layout'
], function(
    $, 
    _, 
    Backbone,
    bottomLayoutTemplate
    ){

    var EditorLayoutBottomView = Backbone.View.extend({
        bottomLayoutObject : {},
        render: function()
        {
            //Add our template
            this.$el.html(bottomLayoutTemplate);
            jQuery(this.el).layout({
                    defaults : {
                        fxName : 'none'
                    },
                    west : {

                    },
                    center : {

                    },
                    east : {

                    }
                }
            );
            return this;
        }
    });

    return EditorLayoutBottomView;
});