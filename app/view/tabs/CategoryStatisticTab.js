Ext.define('NoteKeeper.view.tabs.CategoryStatisticTab', {
	extend : 'Ext.panel.Panel',
	requires : [
		'NoteKeeper.view.widget.EditableCategoryGrid',
		'NoteKeeper.store.widget.EditableCategoryGridStore',
		'NoteKeeper.view.widget.StatisticPanel'
	],
	xtype : 'categoryStatisticTab',
	layout : {
		type : 'vbox'
	},
	items : [
		{
			xtype : 'editableCategoryGrid',
			store : Ext.create('NoteKeeper.store.widget.EditableCategoryGridStore'),
			height : 300,
			width : '100%'
		},
		{
			xtype : 'splitter'
		},
		{
			xtype : 'statisticPanel'
		}
	],
	initComponent : function()
	{
		this.callParent( arguments );
	}
});