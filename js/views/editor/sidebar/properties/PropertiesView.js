'use strict';

define([
  'jquery',
  'underscore',
  'backbone',
  'eventor',
  'logic/editor/Editor',
  'logic/editor/EditorConstants',
  'views/editor/sidebar/properties/tag/PropertiesTagView',
  'views/editor/sidebar/properties/components/PropertiesComponentView',
  'views/editor/sidebar/properties/componentsmodal/PropertiesAddComponentModalView',
  'models/editor/entity/EditorEntityModel',
  'models/editor/entity/EditorEntityModelFactory',
  'models/editor/component/EditorComponent',
  'models/editor/component/EditorComponentFactory',
  'text!views/editor/sidebar/properties/PropertiesViewTemplate.html',
  'text!views/editor/sidebar/properties/PropertiesNoneSelectedTemplate.html'
], 
function($,
 _, 
 Backbone,
 eventor,
 editor,
 eConstants,
 TagView,
 ComponentView,
 ComponentModal,
 EntityModel,
 EntityFactory,
 Component,
 ComponentFactory,
 viewTemplate,
 notificationTemplate
 ){
    var propertiesView = Backbone.View.extend({
        viewConstants : eConstants.propertiesView,
        id: 'editorPropertiesView',
        template: _.template(viewTemplate),
        tagView: {},
        componentsView: null,
        addComponentView: {},
        activeNode: null,
        initialize: function()
        {
            this.foo = editor;
            this.tagView = new TagView();
            this.componentsView = new ComponentView();
            //Create the add component modal
            this.addComponentView = new ComponentModal();
            this.appendComponentModal();
            //Create default node
            var entityFactory = new EntityFactory();
            this.activeNode = entityFactory.createDummy(this.foo);
            //Bind up events
            eventor.on('editor.entity.selected',_.bind(this.onSelectedEntityChanged,this));
            eventor.on('editor.entity.component.add',_.bind(this.addComponent,this));
        },

        render: function(){
            //Do rest
            this.$el.html(this.template(this.activeNode));
            console.log('On::RenderPropertiesView');
            //Give the current settings to our subviews
            //TODO SetSubviewsData method?
            this.tagView.tags = this.activeNode.get('tags');
            if(this.componentsView != null)
            {
              this.componentsView.dispose(this);
            }
            this.componentsView = new ComponentView();
            this.componentsView.setViewComponents(this.activeNode.get('components'));
            //Render and append them
            $('.properties-lower-tags',this.$el).html(this.tagView.render().el);
            this.appendChildView(this.componentsView,'.editor-properties-components');
           // $('.editor-properties-components',this.$el).prepend(this.componentsView.render().el);
            $('.empty-prompt-container',this.$el).html(notificationTemplate);
            //Check what is currently selected
            if(this.activeNode.get('name') === this.viewConstants.noItemSelectedString)
            {
                this.renderOnNoneSelected();
            }
            else
            {
                this.renderOnEntitySelected();
            }
            //Update icon
            this.updateEntityicon();
            return this;
        },

        /**
         * Wrapper method for all actions on render of the properties view when
         * an entity IS selected
         */
        renderOnEntitySelected: function()
        {
            $('.empty-prompt-container',this.$el).hide();
            $('.editor-properties-add-remove',this.$el).addClass('editor-properties-add-remove-active');
        },
        /**
         * Wrapper method for all actions on render of the properties view when
         * no entity is selected
         */
        renderOnNoneSelected: function()
        {
            $('.empty-prompt-container',this.$el).show();
        },
        /**
         * checks if we have a selected entity and removes the "empty promt"
         */
        checkEmptyPrompt: function()
        {
            if(this.activeNode.name === this.viewConstants.noItemSelectedString)
            {
                $('.empty-prompt-container',this.$el).show();
            }
            else
            {
                $('.empty-prompt-container',this.$el).hide();
                $('.editor-properties-add-remove',this.$el).addClass('editor-properties-add-remove-active');
            }
        },
        /**
         * updates the icon to the one that defined for what is currently selected
         */
        updateEntityicon: function()
        {
            var newClassName = 'fa fa-fx ';
            if(this.activeNode.get('type') in this.viewConstants.itemIcons)
            {
                newClassName+=this.viewConstants.itemIcons[this.activeNode.get('type')];
            }
            else
            {
                newClassName+='fa-question-circle';
            }
            newClassName+=' property-selected-icon';
            $('.property-selected-icon',this.$el).attr('class', newClassName);
        },
        /**
         * Append add component modal
         */
        appendComponentModal: function()
        {
            $('body').append(this.addComponentView.render().$el);
        },
        /**
         * Callback method for add component event adds to model, which in turn adds to view
         */
        addComponent: function(component)
        {
            //Double check that we have an active component to add on
            if(this.activeNode.get('name') !== this.viewConstants.noItemSelectedString)
            {
                var factory = new ComponentFactory();
                var newComponent = factory.createComponent(component.get('componentId'));
                //TODO make new one/clone
                console.log('On::Adding Component {arg/newcomp}', component, newComponent);
                this.activeNode.get('components').add(newComponent);
            }

        },
        onSelectedEntityChanged: function(node){
            console.log('On::SelectedEntityChanged',node);
            this.activeNode = node;
            //Re-render our view
            this.render();
        }
    });
    return propertiesView;   
});