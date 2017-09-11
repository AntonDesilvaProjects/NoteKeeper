Ext.define('NoteKeeper.view.tabs.CategoryPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	requires : [
		'NoteKeeper.store.tabs.AttachmentStore'
	],
	alias : 'widget.categoryPanel',
	itemId : 'categoryPanel',
	width : 200,
	height : 150,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	noteId : null,
	defaultListenerScope: true,
	items : [
		{
			xtype : 'grid',
			width : 200,
			store  : null,
			columns : [
				{
					text : 'Category Name',
					dataIndex : 'categoryName',
					flex : 3
				},
				{
					xtype : 'checkcolumn',
					dataIndex : 'selected',
					flex : 1
				}
			]
		}
	],
	listeners : {
		
	},
	initComponent : function()
	{
		this.callParent(arguments);
	}
});