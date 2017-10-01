Ext.define('NoteKeeper.controller.tabs.ContentGridViewController', {
	extend : 'Ext.app.ViewController',
	requires : [
		'NoteKeeper.view.tabs.note.EditNoteWindow',
		'NoteKeeper.view.tabs.journal.EditJournalWindow',
		'NoteKeeper.model.tabs.EditorViewModel'
	],
	alias : 'controller.contentGridViewController',
	init : function()
	{
		this.callParent(arguments);
	},
	onItemClick : function( grid, record, item, index, e, options)
	{

		var editorType = undefined;
		if( record.get('type') === 'note')
			editorType = 'editNoteWindow';
		else if ( record.get('type') === 'journal')
			editorType = 'editJournalWindow';

		Ext.widget(editorType, {
			viewModel : {
				type : 'editorViewModel',
				data : record.getData()
			}
		});
	}
});