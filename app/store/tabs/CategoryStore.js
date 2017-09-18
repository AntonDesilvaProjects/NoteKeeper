Ext.define('NoteKeeper.store.tabs.CategoryStore', {
	extend : 'Ext.data.Store',
	fields : [
		{
			name : 'categoryName',
			type : 'string'
		},
		{
			name : 'categoryId',
			type : 'int'
		},
		{
			name : 'categoryColor',
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