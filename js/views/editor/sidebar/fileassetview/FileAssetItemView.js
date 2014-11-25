'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'text!views/editor/sidebar/fileassetview/FileAssetItemTemplate.html',
  'bootstrapSweetAlert',
  'jqueryui'
], function($, _, Backbone, ItemTemplate){

    var FileItemView = Backbone.View.extend({

        tagName:  'li',
        className: 'file-asset-item-wrapper',
        template: _.template(ItemTemplate),
     
        events: {
            'click .fa-times'   : 'promptDelete'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            var templateData = this.model.toJSON();
            this.$el.html(this.template(templateData));
            return this;
        },
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
        remove: function()
        {
            this.$el.trigger('remove');
        },
        clear: function() {
            this.model.destroy();
        }

    });

    return FileItemView;
  
});
