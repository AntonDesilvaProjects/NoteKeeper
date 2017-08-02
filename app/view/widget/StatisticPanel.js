/*
	Statistics Displayed:
	1. Category Usage Pie Chart[pie]
	2. Note types(music, code, etc)[bar]

*/
Ext.define('NoteKeeper.view.widget.StatisticPanel',{
	extend : 'Ext.panel.Panel',
	requires : [
		'NoteKeeper.store.widget.ItemCountStore',
		'NoteKeeper.store.widget.CategoryPieChartStore'
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
			store : Ext.create('NoteKeeper.store.widget.ItemCountStore')
		},
		{
			xtype : 'polar',
			width : 450,
			height : 375,
			margin : '0 20 0 20',
			//padding : '0 10 10 10',
			title : 'Category Distribution',
			interactions: ['rotate', 'itemhighlight'],
   			store: Ext.create('NoteKeeper.store.widget.CategoryPieChartStore'),
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
		}
	],
	initComponent : function()
	{
		this.callParent(arguments);
	}
});