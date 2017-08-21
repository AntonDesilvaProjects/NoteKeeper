Ext.define('NoteKeeper.view.tabs.AttachmentPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.attachmentPanel',
	itemId : 'attachmentPanel',
	floating : true,
	focusable : true,
	width : 200,
	height : 150,
	layout : {
		type : 'vbox'
	},
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
			text : '+'
		}
	],
	listeners : {
		el: {
		    blur: {
		        fn: function()
		        {
		        	console.log(this);
		        	var elId = this.id;
		        	var attachmentPanels = Ext.ComponentQuery.query('#attachmentPanel');
		        	Ext.Array.forEach( attachmentPanels, function(cmp){
		        		if(cmp.id == elId)
		        		{
		        			cmp.hide();
		        			return false;
		        		}
		        	});
		        }
		    }
        }
	},
	noteId : null,
	initComponent : function()
	{
		this.callParent(arguments);
	}
});