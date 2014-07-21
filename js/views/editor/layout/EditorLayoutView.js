'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'views/app/menu/AppMenuView',
  'views/editor/layout/EditorDropAssetView',
  'views/editor/navbar/EditorNavbarView',
  'views/editor/sidebar/fileassetview/EditorFileAssetView',
  'views/editor/document/screen/EditorScreenView',
  'views/editor/layout/EditorLayoutSidebarRightView',
  'text!views/editor/layout/EditorBottomLayoutTemplate.html',
  //non argument
  'jquery.layout'
], function(
    $, 
    _, 
    Backbone,
    eventor,
    AppMenuView, 
    EditorDropAssetView, 
    EditorNavbarView,
    EditorFileAssetView,
    EditorScreenView,
    EditorSidebarLayout,
    EditorBottomLayoutTemplate
    ){

  var EditorLayoutView = Backbone.View.extend({

    el              : $('#mainContent'),
    layoutLoaded    : false,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    layoutObject    : null,

    render: function(){
        //this.$el.html('<h1>hello</h1>');
        //Init
        var dragAndDropAssetField = new EditorDropAssetView();
        var editorNavBar = new EditorNavbarView();
        var appMenu = new AppMenuView();
        var assetView = new EditorFileAssetView();
        var screenView = new EditorScreenView();
        //As the layout is appended here as well we find the west layout container and append it to
        $('#mainLayoutWestPane').append(assetView.el);
        $('#mainLayoutCenterPane').append(screenView.el);
        $('#mainLayoutSouthPane').append(EditorBottomLayoutTemplate);
        //Render
        assetView.render();
        dragAndDropAssetField.render();
        editorNavBar.render();
        appMenu.render();
        screenView.render();
        //Run Layout
        console.log('time: ', performance.now());
        this.layoutObject = jQuery('#mainContent').layout({
            defaults: { 
                fxName              : 'none',
            },
            north: {
                size        : 72,
                resizable   : false,
                closable    : false,
            },
            center: {
                onresize    : _.bind(this.onLayoutResize,this)
            },
            south : {
                size            : 200,
                minSize         : 150,
                childOptions    : {
                    defaults: {

                    },
                    west    : {
                        paneSelector    : '#bottom-ui-layout-west'
                    },
                    center  : {
                        paneSelector    : '#bottom-ui-layout-center'
                    },
                    east    : {
                        paneSelector    : '#bottom-ui-layout-east'
                    }
                }
            }
            //livePaneResizing    : true,

        });
        console.log('time: ', performance.now());
        console.log('rendering finished');
    },
    onLayoutResize: function(target)
    {
        switch(target)
        {
            case 'center':
                eventor.trigger('editor.layout.resize.center',{
                    'width' : this.layoutObject.state.center.layoutWidth,
                    'height': this.layoutObject.state.center.layoutHeight 
                });
        }
    }

  });

  return EditorLayoutView;
  
});
