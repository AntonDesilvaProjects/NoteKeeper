Ext.define('NoteKeeper.view.tabs.JournalPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	requires : [
		'NoteKeeper.store.tabs.JournalStore'
	],
	alias : 'widget.journalPanel',
	width : 200,
	height : 150,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	selectedCategoryIds : null,
	defaultListenerScope: true,
	items : [
		{
			xtype : 'grid',
			width : 200,
			store  : Ext.create('NoteKeeper.store.tabs.JournalStore'),
			columns : [
				{
					text : 'Category',
					dataIndex : 'categoryName',
					flex : 3,
					renderer : function( value, columnMeta, record )
					{
						columnMeta.style = 'background-color: ' + record.get('categoryColor');
						return value;
					}
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
	},

});