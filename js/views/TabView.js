'use strict';

define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone){

  var TabView = Backbone.View.extend({

    el          : $('#mainContent'),
    tabs        : [],
    activeTab   : 0,

    addTab: function(title, content) {

    },
    render: function(){

    }

  });

  return TabView;
  
});
