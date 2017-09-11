Ext.define('NoteKeeper.controller.tabs.ContentGridViewController', {
	extend : 'Ext.app.ViewController',
	requires : [
		'NoteKeeper.view.tabs.note.EditNoteWindow',
		'NoteKeeper.model.tabs.EditorViewModel'
	],
	alias : 'controller.contentGridViewController',
	init : function()
	{
		this.callParent(arguments);
	},
	onItemClick : function( grid, record, item, index, e, options)
	{
		Ext.widget('editNoteWindow', {
			viewModel : {
				type : 'editorViewModel',
				data : record.getData()
			}
		});
	}
});