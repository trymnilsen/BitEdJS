'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'text!views/editor/sidebar/entitytree/EntityTreeTemplate.html',
  'text!views/editor/sidebar/entitytree/EntityTreeNodeTemplate.html',
  'jqtree',
  'dropDownEnhanc'
], function($, _, Backbone, eventor, entityTreeTemplate, nodeItemTemplate){

    var EntityTree = Backbone.View.extend({
        jqTreeEl : null,
        id: 'editorEntityTreeView',
        render: function(){
            this.$el.html(entityTreeTemplate);
            //Add entitytree
            var data = [
                {
                    label: 'node1',
                    children: [
                        { label: 'child1' },
                        { label: 'child2' }
                    ]
                },
                {
                    label: 'node2',
                    children: [
                        { label: 'child3' }
                    ]
                }
            ];

            this.jqTreeEl = $('.entityTreeList',this.$el);
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
        createEntity: function(evt)
        {
            console.log('Clicked on:',evt);
            var entityType = $(evt.currentTarget).data('entitytype');
            console.log('type',entityType);
            var name = Date.now();
            this.jqTreeEl.tree(
                'appendNode',
                {
                    label: name
                }
            );
        },
        entitySelected: function(evt)
        {
            console.log('node selected',evt.node);
            eventor.trigger('editor.entity.selected',evt.node);
        }

    });

    return EntityTree;
  
});
