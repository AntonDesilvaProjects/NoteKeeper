Ext.define('NoteKeeper.view.tabs.note.EditNoteWindow', {
	extend : 'Ext.window.Window',
	requires : [
		'NoteKeeper.view.tabs.note.NoteEditor'
	],
	xtype : 'editNoteWindow',
	height : 500,
	width : 545,
	autoShow : true,
	layout : {
		type : 'vbox'
	},
	title : 'Go get Sushi',
	items : [
		{
			xtype : 'noteEditor',
			width : '100%'
		},
		{
			
		}
	],
	intiComponent : function()
	{
		this.callParent(arguments);
	}
});