Ext.define('NoteKeeper.view.tabs.journal.JournalEditor', {
	extend : 'NoteKeeper.view.tabs.BaseEditor',
	requires : [
		'NoteKeeper.controller.tabs.journal.JournalEditorController'
	],
	alias : 'widget.journalEditor',
	controller : 'journalEditorController',
	content : '<i>Enter content here. First line will be used as the title of the note.</i>',
	initComponent : function()
	{
		this.callParent( arguments );
	}
});