Ext.define('NoteKeeper.view.tabs.categorystatistic.CategoryStatisticTab', {
	extend : 'Ext.panel.Panel',
	requires : [
		'NoteKeeper.view.tabs.categorystatistic.EditableCategoryGrid',
		'NoteKeeper.store.tabs.categorystatistic.EditableCategoryGridStore',
		'NoteKeeper.view.tabs.categorystatistic.StatisticPanel'
	],
	xtype : 'categoryStatisticTab',
	layout : {
		type : 'vbox'
	},
	items : [
		{
			xtype : 'editableCategoryGrid',
			store : Ext.create('NoteKeeper.store.tabs.categorystatistic.EditableCategoryGridStore'),
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