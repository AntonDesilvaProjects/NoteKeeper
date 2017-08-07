Ext.define('NoteKeeper.store.tabs.categorystatistic.ItemCountStore', {
	extend : 'Ext.data.Store',
	storeId : 'itemCountStore',
	fields : [
		{
			name : 'type',
			mapping : 'type'
		},
		{
			name : 'count',
			mapping : 'count'
		}
	],
	proxy : {
		type : 'ajax',
		url : '/static_files/notesjournals.json',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	},
	autoLoad : true
});