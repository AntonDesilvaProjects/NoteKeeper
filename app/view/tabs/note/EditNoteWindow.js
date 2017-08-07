Ext.define('NoteKeeper.view.tabs.note.EditNoteWindow', {
	extend : 'Ext.window.Window',
	requires : [
		'NoteKeeper.view.tabs.Editor'
	],
	xtype : 'editNoteWindow',
	height : 400,
	width : 500,
	autoShow : true,
	layout : {
		type : 'vbox'
	},
	title : 'Go get Sushi',
	items : [
		{
			xtype : 'contentEditor',
			width : '100%'
		}
	],
	intiComponent : function()
	{
		this.callParent(arguments);
	}
});