'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/entitytree/EntityTreeTemplate.html',
  'jqtree'
], function($, _, Backbone, entityTreeTemplate){

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

            var lol = $('.entityTreeList',this.$el);
            lol.tree({
                data: data,
                autoOpen: true,
                dragAndDrop: true,
                onCreateLi: function(node, $li) {
                    // Append a link to the jqtree-element div.
                    // The link has an url '#node-[id]' and a data property 'node-id'.
                    $li.find('.jqtree-element').append(
                        '<a href="#node-'+ node.id +'" class="edit" data-node-id="'+
                        node.id +'">edit</a>'
                    );
                }
            });

            return this;
        }

    });

    return EntityTree;
  
});
