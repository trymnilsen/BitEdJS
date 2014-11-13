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
                    var compiledTemplate = _.template(nodeItemTemplate);
                    $li.find('.jqtree-title').html(compiledTemplate({name: node.name}))
                        .find('.fa')
                        .on('click',function(evt) {
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
        onEntityAdded: function(entity)
        {
            //remove prompt
            $('.emptyPromptContainer',this.$el).html('');
            
            var labelName = entity.get('name');

            this.jqTreeEl.tree(
                'appendNode',
                {
                    label: labelName,
                    sceneNode: entity
                }
            );
        },
        createEntity: function(evt)
        {
            var entityType = $(evt.currentTarget).data('entitytype');
            console.log('On::CreateEntity {event/type}', evt, entityType);
            var entityName = Date.now();
            eventor.trigger('editor.entity.requestAdd',entityType.toLowerCase(),entityName);
        },
        entitySelected: function(evt)
        {
            console.log('On::SelectedEntityInTreeview',evt.node);
            eventor.trigger('editor.entity.selected',evt.node.sceneNode);
        }

    });

    return EntityTree;
  
});
