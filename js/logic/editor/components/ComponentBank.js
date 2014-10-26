define([
    'logic/editor/components/Component'
], function(Component){
    //Return our array of available components
    return [
        new Component('Render Sprite','Rendering',[
            {
                name:'Asset',
                type: 'Asset',
                description: 'The asset that should be used as a sprite'
            },
            {
                name:'Position',
                type: 'Coordinate',
                description: 'Position of the sprite'
            },
            {
                name:'Relative Position',
                type: 'Boolean',
                description: 'Should the sprite be positioned relative to our'
                               +'position or absolutely in the world'
            }
        ]),
        new Component('Collision', 'Physics', [
            {
                name:'Clip',
                type: 'Boolean',
                description: 'Should clipping be allowed and only notify of collision'
            },
            {
                name:'Shape',
                type: 'Shape',
                description: 'Shape of the collision mask'
            },
            {
                name:'Shape Size',
                type: 'Decimal',
                description: 'The size of the collision mask'
            }
        ]),
        new Component('Gravity', 'Physics', [])
    ];
});
