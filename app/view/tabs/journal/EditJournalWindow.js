Ext.define('NoteKeeper.view.tabs.journal.EditJournalWindow', {
	extend : 'Ext.window.Window',
	requires : [
		'NoteKeeper.view.tabs.journal.JournalEditor',
		'NoteKeeper.controller.tabs.journal.EditJournalWindowController'
	],
	xtype : 'editJournalWindow',
	controller : 'editJournalWindowController',
	height : 473,
	width : 545,
	autoShow : true,
	referenceHolder : true,
	layout : {
		type : 'vbox'
	},
	bind : {
		title : '{title}'
	},
	items : [
		{
			xtype : 'journalEditor',
			width : '100%',
			bind : {
				content : '{body}'
			},
			reference : 'journalEditor' 
		}
	],
	//Dock for the Journal Editor has: category, drive integration/email
	dockedItems : [
		{
			xtype : 'toolbar',
			dock : 'bottom',
			items : [
				{
					bind :  {
						html : '{categoryBtnHtml}',
					},
					maxWidth : 125,
					handler : 'onCategoryBtnClick'
				},
				{
					iconCls : 'fa fa-share-alt fa-lg buttonIcon',
					handler : 'onShareBtnClick'
				},
				{
					xtype : 'tbfill'
				},
				{
					text : 'Save',
					handler : 'onSaveBtnClick'
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
				completeOnEnter : true,
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