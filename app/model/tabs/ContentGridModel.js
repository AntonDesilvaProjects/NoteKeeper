Ext.define('NoteKeeper.model.tabs.ContentGridModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'title',
			mapping : 'title'
		},
		{
			name : 'body',
			mapping : 'body'
		},
		{
			name : 'category',
			mapping : 'category'
		},
		{
			name : 'contentType',
			mapping : 'contentType',
			type : 'auto'
		}	
	]
});