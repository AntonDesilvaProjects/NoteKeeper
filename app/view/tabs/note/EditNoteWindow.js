Ext.define('NoteKeeper.view.tabs.note.EditNoteWindow', {
	extend : 'Ext.window.Window',
	requires : [
		'NoteKeeper.view.tabs.note.NoteEditor',
		'NoteKeeper.controller.tabs.note.EditNoteWindowController',
		'NoteKeeper.view.tabs.AttachmentPanel'
	],
	xtype : 'editNoteWindow',
	controller : 'editNoteWindowController',
	height : 473,
	width : 545,
	autoShow : true,
	layout : {
		type : 'vbox'
	},
	bind : {
		title : '{title}'
	},
	items : [
		{
			xtype : 'noteEditor',
			width : '100%',
			bind : {
				initialContent : '{body}'
			} 
		}
	],
	//Dock for the Note Editor has: attachments, category, journal, drive integration/email
	dockedItems : [
		{
			xtype : 'toolbar',
			dock : 'bottom',
			items : [
				{
					text : '1',
					iconCls : 'fa fa-paperclip fa-lg buttonIcon',
					handler : 'onAttachmentBtnClick'
				},
				{
					bind :  {
						html : '{categoryBtnHtml}',
					},
					maxWidth : 125,
					handler : 'onCategoryBtnClick'
				},
				{
					bind : {
						text : '{journal}',
					},
					iconCls : 'fa fa-book fa-lg buttonIcon'
				},
				{
					iconCls : 'fa fa-share-alt fa-lg buttonIcon'
				},
				{
					xtype : 'tbspacer',
					width : 95
				},
				{
					text : 'Save'
				}
			]
		}
	],
	listeners : {
		afterrender : 'afterEditorRender'
	},
	initComponent : function()
	{	
		this.callParent(arguments);
	},
	/*
		Inline editor is used for editing an elements el.
	*/
	getInlineEditor : function()
	{
		if(!this.inlineEditor)
		{
			this.inlineEditor = Ext.widget('editor',{
				updateEl : true,
				alignment: 'l-l',
			    autoSize: {
			        width: 'boundEl'
			    },
			    field: {
			        xtype: 'textfield'
			    }
			});
		}
		return this.inlineEditor;
	}
});