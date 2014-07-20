'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  //non argument
  'jquery.layout'
], function(
    $, 
    _, 
    Backbone,
    eventor
    ){

    var EditorLayoutRightView = Backbone.View.extend({
        rightLayoutObject : {},
        render: function()
        {
            jQuery(this.el).layout({
                    defaults : {
                        fxName : 'none'
                    },
                    north : {

                    },
                    center : {

                    }
                }
            );
            return this;
        }
    });

    return EditorLayoutRightView;
});