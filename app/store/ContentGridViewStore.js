Ext.define('NoteKeeper.store.ContentGridViewStore', {
	extend : 'Ext.data.Store',
	storeId : 'contentGridViewStore',
	model : 'NoteKeeper.model.ContentGridModel',
	type : null,
	proxy : {
		type : 'ajax',
		url : '/static_files/journal.json',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	},
	//autoLoad : true
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
		
	}
});