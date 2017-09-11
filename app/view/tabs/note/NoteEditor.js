Ext.define('NoteKeeper.view.tabs.note.NoteEditor', {
	extend : 'NoteKeeper.view.tabs.BaseEditor',
	requires : [
		'NoteKeeper.controller.tabs.note.NoteEditorController'
	],
	alias : 'widget.noteEditor',
	controller : 'noteEditorController',
	initialContent : '<i>Enter content here. First line will be used as the title of the note.</i>',
	initComponent : function()
	{
		this.callParent( arguments );
	}
});