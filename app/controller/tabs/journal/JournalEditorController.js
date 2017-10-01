Ext.define('NoteKeeper.controller.tabs.journal.JournalEditorController',{
	extend : 'NoteKeeper.controller.tabs.BaseEditorController',
	requires : [
	],
	alias : 'controller.journalEditorController',
	initComponent : function()
	{
		this.callParent( arguments );
	},
	afterEditorRender : function( editor, eOpts )
	{
		this.configureTinyMceEditor( NoteKeeper.config.TinyMCEEditor.JOURNAL_EDITOR );
	},
	/*
		Saves the content of the editor. AJAX call against
		services API to save.
	*/
	onSaveContent : function()
	{
		this.callParent(arguments);
		console.log('subclass save')
	}
});