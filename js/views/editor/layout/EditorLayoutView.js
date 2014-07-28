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
  'views/editor/layout/panelcontainer/EditorPanelContainerView',
  'views/editor/sidebar/entitytree/EntityTreeView',
  'text!views/editor/layout/EditorBottomLayoutTemplate.html',
  'text!views/editor/layout/EditorRightLayoutTemplate.html',
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
    EditorPanelContainer,
    EditorEntityTree,
    EditorBottomLayoutTemplate,
    EditorRightLayoutTemplate
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
        var containerPanelEntity = new EditorPanelContainer();
        var containerPanelSC = new EditorPanelContainer();
        var containerPanelSN = new EditorPanelContainer();
        var containerPanelBR = new EditorPanelContainer();
        var entityTree = new EditorEntityTree();
        containerPanelEntity.headerText = 'Treeview';
        containerPanelSN.headerText = 'Assets';
        containerPanelSC.headerText = 'Properties';
        containerPanelBR.headerText = 'Toolbox';

        containerPanelEntity.panelContent = entityTree;//entityTree.render().el;
        //As the layout is appended here as well we find the west layout container and append it to
        $('#mainLayoutCenterPane').append(screenView.el);
        $('#mainLayoutEastPane').append(EditorRightLayoutTemplate);
        $('#mainLayoutSouthPane').append(EditorBottomLayoutTemplate);
        $('#mainLayoutNorthPane').append(editorNavBar.render().el);
        $('#mainLayoutWestPane').append(containerPanelEntity.render().el);
        $('#right-ui-layout-center').append(containerPanelSC.render().el);
        $('#right-ui-layout-north').append(containerPanelSN.render().el);
        $('#bottom-ui-layout-east').append(containerPanelBR.render().el);

        //Render
        //assetView.render();
        dragAndDropAssetField.render();
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
            east: {
                childOptions : {
                    defaults: {

                    },
                    north: {
                        paneSelector : '#right-ui-layout-north',
                        size: 100
                    },
                    center: {
                        paneSelector : '#right-ui-layout-center'
                    }
                }
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
