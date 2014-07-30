'use strict';

define([
  'jquery',
  'underscore',
  'backbone'
], function(
    $, 
    _, 
    Backbone
    ){

    var GeneralIconOverlay = Backbone.View.extend({

            //.hide(),
        className           : 'general-overlay-wrapper'
                            + ' general-overlay-wrapper-hidden'
                            + ' general-overlay-transition',
        overlayText         : '',
        overlayIconClass    : '',
        attachedNode        : {},
        iconDiv             : {},
        textDiv             : {},
        events              : {
                'drop' : 'lol'
            },

        render: function()
        {
            this.iconDiv = $('<div></div>')
                            .addClass('general-overlay-transition')
                            .addClass('general-overlay-icon-hidden')
                            .attr('id','general-overlay-icon')
                            .hide();
            this.textDiv = $('<div></div>')
                            .addClass('general-overlay-transition')
                            .addClass('general-overlay-text-hidden')
                            .attr('id','general-overlay-text')
                             .hide()
                            .html(this.overlayText);
            var icon = $('<i></i>').addClass(this.overlayIconClass);
            this.$el.append(this.iconDiv);
            this.$el.append(this.textDiv);
            this.iconDiv.append(icon);
        },
        lol: function()
        {
            console.log('fus ro daaah');
        },
        // attach: function()
        // {
        // },
        setText: function(text)
        {
            this.overlayText = text;
        },
        setIcon: function(iconClasses)
        {
            this.overlayIconClass = iconClasses;
        },
        showOverlay: function()
        {
            this.$el.show();
            this.iconDiv.show();
            this.textDiv.show();
            // console.log('hello',performance.now());
            setTimeout(_.bind(function(){
                this.$el.removeClass('general-overlay-wrapper-hidden');
                this.iconDiv.removeClass('general-overlay-icon-hidden');
                this.textDiv.removeClass('general-overlay-text-hidden');
                console.log('foo');
            },this),20);
            console.log('hello',performance.now());
        },
        hideOverlay: function()
        {
            //add/remove classes
            // this.$el.addClass('general-overlay-wrapper-hidden');
            // this.iconDiv.addClass('general-overlay-icon-hidden');
            // this.textDiv.addClass('general-overlay-text-hidden');
            this.$el.addClass('general-overlay-wrapper-fadeout');
            this.iconDiv.addClass('general-overlay-icon-fadeout');
            this.textDiv.addClass('general-overlay-text-fadeout');
            setTimeout(_.bind(function(){
                //Hide
                this.$el.hide();
                this.iconDiv.hide();
                this.textDiv.hide();
                //Switch from fadeout class to funky "fade in/reveal classes"
                this.$el.removeClass('general-overlay-wrapper-fadeout');
                this.iconDiv.removeClass('general-overlay-icon-fadeout');
                this.textDiv.removeClass('general-overlay-text-fadeout');

                this.$el.addClass('general-overlay-wrapper-hidden');
                this.iconDiv.addClass('general-overlay-icon-hidden');
                this.textDiv.addClass('general-overlay-text-hidden');

            },this),200);
        }
    });
    return GeneralIconOverlay;
  });