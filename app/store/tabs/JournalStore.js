Ext.define('NoteKeeper.store.tabs.JournalStore', {
	extend : 'Ext.data.Store',
	fields : [
		{
			name : 'journalName',
			type : 'string'
		},
		{
			name : 'journalId',
			type : 'int'
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