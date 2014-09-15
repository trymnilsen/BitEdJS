'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/editor/Editor',
  'text!views/editor/sidebar/entitytree/EntityTreeTemplate.html',
  'text!views/editor/sidebar/entitytree/EntityTreeNodeTemplate.html',
  'text!views/editor/sidebar/entitytree/EntityTreeNoneSelectedTemplate.html',
  'jqtree',
  'dropDownEnhanc'
], function($, 
_, 
Backbone, 
eventor, 
editor,
entityTreeTemplate, 
nodeItemTemplate,
emptyPromptTemplate
){

    var EntityTree = Backbone.View.extend({
        jqTreeEl : null,
        id: 'editorEntityTreeView',
        initialize: function(){
            eventor.on('editor.entity.add', _.bind(this.onEntityAdded,this));
        },
        render: function(){
            this.$el.html(entityTreeTemplate);
            //Add the prompt
            $('.emptyPromptContainer',this.$el).html(emptyPromptTemplate);
            //Add entitytree
            var data = [];

            this.jqTreeEl = $('.entityTreeListContainer',this.$el);
            this.jqTreeEl.tree({
                data: data,
                autoOpen: true,
                dragAndDrop: true,
                onCreateLi: function(node, $li) {
                    // Append a link to the jqtree-element div.
                    // The link has an url '#node-[id]' and a data property 'node-id'.
                    var compiledTemplate = _.template(nodeItemTemplate,{name: node.name});
                    $li.find('.jqtree-title').html(compiledTemplate)
                        .find('.fa')
                        .on('click',function(evt) {
                            console.log('hmz',node,evt);
                            //Dont select if pressed buttons
                            evt.stopPropagation();
                    });
                }
            });
            this.jqTreeEl.on('tree.select',_.bind(this.entitySelected,this));
            //Add listeners to the controls
            $('.dropdown-menu li',this.$el)
                        .on('click',_.bind(this.createEntity,this));

            return this;
        },
        onEntityAdded: function(node)
        {
            //remove prompt
            $('.emptyPromptContainer',this.$el).html('');
            
            this.jqTreeEl.tree(
                'appendNode',
                {
                    label: node.name,
                    sceneNode: node
                }
            );
        },
        createEntity: function(evt)
        {
            console.log('Clicked on:',evt);
            var entityType = $(evt.currentTarget).data('entitytype');
            console.log('type',entityType);
            var entityName = Date.now();
            eventor.trigger('editor.entity.requestAdd',entityType.toLowerCase(),entityName);

        },
        entitySelected: function(evt)
        {
            console.log('node selected',evt.node);
            eventor.trigger('editor.entity.selected',evt.node);
        }

    });

    return EntityTree;
  
});
