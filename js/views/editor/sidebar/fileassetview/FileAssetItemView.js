'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'text!views/editor/sidebar/fileassetview/FileAssetItemTemplate.html',
  'bootstrapSweetAlert',
  'jqueryui'
], function($, _, Backbone, eventor, ItemTemplate){

    var FileItemView = Backbone.View.extend({
        /**
         * Backbone property, sets the the type of element for this
         * views DOM element
         * @type {String}
         */
        tagName:  'li',
        /**
         * Backbone property, sets the classname(s) of this
         * views DOM element
         * @type {String}
         */
        className: 'file-asset-item-wrapper',
        /**
         * templating function for returning fresh html with our passed data
         * @type {function(Object):string}
         */
        template: _.template(ItemTemplate),
        /**
         * The options for the dragging functionallity of this view
         * @type {Object}
         */
        draggableOptions:  {
            cursor: "move",
            cursorAt: { 
                top: 0, 
                left: 0 
            },
            helper: function() {
                return $( "<i class='fa fa-fx fa-image drag-asset-preview'></i>" );
            },
            start: function() {
                eventor.trigger('editor.asset.drag.start');
            },
            stop: function() {
                eventor.trigger('editor.asset.drag.stop');
            }
        },
        /**
         * Backbone property, hash of delegated events for this view
         * @type {Object}
         */
        events: {
            'click .fa-times'   : 'promptDelete'
        },
        /**
         * Called on creation, initializes this view
         */
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },
        /**
         * Sets up dom elements and adds DOM specific behaviour
         * @return {Object} returns self for fluency
         */
        render: function() {
            var templateData = this.model.toJSON();
            this.$el.html(this.template(templateData));
            //Add draggable functionality
            //Todo, add draggable on finished uploading
            this.$el.draggable(this.draggableOptions);
            return this;
        },
        /**
         * Callbakc for remove asset button, prompts the user with a popup
         */
        promptDelete: function()
        {
            swal({
                title: "Are you sure?",
                text: "You will not be able to recover this asset file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: 'btn-danger',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: false
            },_.bind(this.deletePromtResponse,this));
            //
        },
        /**
         * Reponse for item deleted
         * @param  {Boolean} isConfirm did the user confirm delete (true)
         */
        deletePromtResponse: function(isConfirm)
        {
            if (isConfirm)
            {
                this.remove();
                swal("Deleted!", "Your asset file has been deleted!", "success");
            } 
            else 
            {
                swal("Cancelled", "Your asset file has not been deleted :)", "error");
            }
        },
        /**
         * Removes this view
         */
        remove: function()
        {
            this.$el.trigger('remove');
        },
        /**
         * Not sure if this is used?
         */
        clear: function() {
            this.model.destroy();
        }
    });

    return FileItemView;
  
});
