Ext.define('NoteKeeper.view.tabs.note.NoteEditor', {
	extend : 'NoteKeeper.view.tabs.BaseEditor',
	requires : [
		'NoteKeeper.controller.tabs.note.NoteEditorController'
	],
	alias : 'widget.noteEditor',
	controller : 'noteEditorController',
	initComponent : function()
	{
		this.callParent( arguments );
	}
});