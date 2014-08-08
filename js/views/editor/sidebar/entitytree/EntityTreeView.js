'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/entitytree/EntityTreeTemplate.html',
  'text!views/editor/sidebar/entitytree/EntityTreeNodeTemplate.html',
  'jqtree',
  'dropDownEnhanc'
], function($, _, Backbone, entityTreeTemplate, nodeItemTemplate){

    var EntityTree = Backbone.View.extend({
        id: 'editorEntityTreeView',
        render: function(){
            this.$el.html(entityTreeTemplate);

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

            var entityTree = $('.entityTreeList',this.$el);
            entityTree.tree({
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

            return this;
        }

    });

    return EntityTree;
  
});
