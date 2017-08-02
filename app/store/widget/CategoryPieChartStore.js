Ext.define('NoteKeeper.store.widget.CategoryPieChartStore', {
	extend : 'Ext.data.Store',
	storeId : 'categoryPieChartStore',
	fields : [
		{
			name : 'categoryName',
			mapping : 'categoryName'
		},
		{
			name : 'categoryCount',
			mapping : 'categoryCount'
		},
		{
			name : 'categoryPercentage',
			mapping : 'categoryPercentage'
		}
	],
	proxy : {
		type : 'ajax',
		url : '/static_files/categoryPie.json',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	},
	autoLoad : true
});