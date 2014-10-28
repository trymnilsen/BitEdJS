'use strict';

define([
  'underscore',
  'backbone',
  'models/editor/component/EditorComponent'
], function(_, Backbone, Component){
    var EditorComponentCollection = Backbone.Collection.extend({
        model: Component,
      
        initialize: function(){

            var renderSprite = new Component({
                name:'Render Sprite',
                category: 'Rendring'
            });
            renderSprite.addParameter('Asset', 
                'Asset', 
                'The asset that should be used as a Sprite');
            renderSprite.addParameter('Position', 
                'Coordinate', 
                'Position of the sprite');
            renderSprite.addParameter('Relative Position', 
                'Boolean', 
                'Should the sprite be positioned relative to our position or absolutely in the world');

            var collision = new Component({
                name:'Collision',
                category: 'Physics'
            });
            collision.addParameter('Clip', 
                  'Boolean', 
                  'Should Clipping be allowed');
            collision.addParameter('Shape', 
                  'Shape', 
                  'Shape of the collision Mask');
            collision.addParameter('Shape Size', 
                  'Decimal', 
                  'The size of the collision mask');

            var gravity = new Component({
                name: 'Gravity',
                category: 'Physics',
                description: 'The gravity affects the blah blah blah'
            });

            this.set([
                renderSprite,
                collision,
                gravity
            ]);
        }

    });
 
    return EditorComponentCollection;
});
