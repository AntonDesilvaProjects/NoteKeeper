Ext.define('NoteKeeper.view.tabs.AttachmentPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	alias : 'widget.attachmentPanel',
	itemId : 'attachmentPanel',
	width : 200,
	height : 150,
	layout : {
		type : 'vbox'
	},
	defaultListenerScope: true,
	items : [
		{
			xtype : 'grid',
			store : null,
			columns : [
				{
					text : 'File Name',
					dataIndex : 'fileName'
				},
				{
					dataIndex : 'remove'
				}
			]
		},
		{
			xtype : 'button',
			text : '+',
			handler : function()
			{
				
			}
		}
	],
	listeners : {
		
	},
	noteId : null,
	initComponent : function()
	{
		this.callParent(arguments);
	}
});