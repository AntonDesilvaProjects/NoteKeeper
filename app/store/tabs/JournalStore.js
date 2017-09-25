Ext.define('NoteKeeper.store.tabs.JournalStore', {
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
			name : 'isSelected',
			type : 'boolean'
		}
	],
	proxy : {
		type : 'ajax',
		url : '/static_files/journals.json',
		reader : {
			type : 'json',
			rootProperty : 'journals'
		}
	},
	autoLoad : true,
});