/*
	Statistics Displayed:
	1. Category Usage Pie Chart[pie]
	2. Note types(music, code, etc)[bar]
	3. Text Analytics - most commonly used words
	4. Login frequency

*/
Ext.define('NoteKeeper.view.tabs.categorystatistic.StatisticPanel',{
	extend : 'Ext.panel.Panel',
	requires : [
		'NoteKeeper.store.tabs.categorystatistic.ItemCountStore',
		'NoteKeeper.store.tabs.categorystatistic.CategoryPieChartStore'
		//'Ext.chart.series.Pie'
	],
	xtype : 'statisticPanel',
	layout : {
		type : 'hbox'
	},
	items : [
		{
			xtype : 'grid',
			title : 'Notes & Journals',
			height : 300,
			width : 175,
			columns : [
				{
					header : 'Type',
					dataIndex : 'type',
					flex : 2
				},
				{
					header : 'Count',
					dataIndex : 'count',
					flex : 2
				}
			],
			store : Ext.create('NoteKeeper.store.tabs.categorystatistic.ItemCountStore')
		},
		{
			xtype : 'polar',
			width : 450,
			height : 375,
			margin : '0 100 0 100',
			//padding : '0 10 10 10',
			title : 'Category Distribution',
			interactions: ['rotate', 'itemhighlight'],
   			store: Ext.create('NoteKeeper.store.tabs.categorystatistic.CategoryPieChartStore'),
			series: {
			    type: 'pie',
			    highlight: true,
			    angleField: 'categoryCount',
			    label: {
			    	field: 'categoryName',
			        display: 'rotate'
			    },
	       		donut: 5
	  		}
		},
		{
			xtype : 'grid',
			title : 'Note Types',
			height : 300,
			width : 175,
			columns : [
				{
					header : 'Type',
					dataIndex : 'type',
					flex : 2
				},
				{
					header : 'Count',
					dataIndex : 'count',
					flex : 2
				}
			],
			store : Ext.create('NoteKeeper.store.tabs.categorystatistic.ItemCountStore')
		},
	],
	initComponent : function()
	{
		this.callParent(arguments);
	}
});