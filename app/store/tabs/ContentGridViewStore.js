Ext.define('NoteKeeper.store.tabs.ContentGridViewStore', {
	extend : 'Ext.data.Store',
	storeId : 'contentGridViewStore',
	model : 'NoteKeeper.model.tabs.ContentGridModel',
	type : null,
	proxy : {
		type : 'ajax',
		url : '/static_files/journal.json',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	},
	/*
		At creation time, uses the passed in 'type' config
		to load the appropriate data
	*/
	constructor : function( config )
	{
		this.type = config.type;
		this.callParent( arguments );

		if(this.type)
		{
			if( this.type === 'journal')
				this.proxy.url = '/static_files/journal.json';
			else if ( this.type === 'note' )
				this.proxy.url = '/static_files/gridContent.json';
			this.load();
		}	
	},
	/*
		Loads all the notes for the passed in journal id
	*/
	loadNotesForJournal : function( journalId )
	{
		var me = this;
		this.proxy.url = '/static_files/notes_for_journal.json';
		this.proxy.extraParams = {
			journalId : journalId
		};
		this.load();
	},
	/*
		Loads the search results for the passed in query
	*/
	loadSearchResults : function( query )
	{
		var me = this;
		this.proxy.url = '/static_files/search_results.json';
		this.proxy.extraParams = {
			query : query
		};
		this.load();
	}
});