Ext.define('NoteKeeper.store.tabs.CategoryStore', {
	extend : 'Ext.data.Store',
	fields : [
		{
			name : 'name',
			type : 'string'
		},
		{
			name : 'id',
			type : 'int'
		},
		{
			name : 'color',
			type : 'string'
		},
		{
			name : 'isSelected',
			type : 'boolean'
		}
	],
	proxy : {
		type : 'ajax',
		url : '/static_files/categories.json',
		reader : {
			type : 'json',
			rootProperty : 'categories'
		}
	},
	autoLoad : true,
});