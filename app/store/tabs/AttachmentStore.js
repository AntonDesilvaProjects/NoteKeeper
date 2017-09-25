Ext.define('NoteKeeper.store.tabs.AttachmentStore', {
	extend : 'Ext.data.Store',
	parentItemId : null,
	noteViewModel : null,
	fields : [
		{
			name : 'fileName',
			type : 'string'
		},
		{
			name : 'fileId',
			type : 'int'
		}
	],
	proxy : {
		type : 'ajax',
		url : '',
		reader : {
			type : 'json',
			rootProperty : 'attachments'
		}
	},
	constructor : function( config )
	{
		console.info( config );
		config = Ext.Object.merge( {}, config );
		var me = this;
		me.callParent([config]);

		//debugger;
		console.info( me.config );

		if(me.parentItemId)
		{
			//debugger;
			me.getProxy().url = '/static_files/attachments_' + this.parentItemId + '.json';
			me.on('load', function(store, records){ 
				//me.noteViewModel.set('attachmentCount', store.getCount() );
			});
			me.load();

		}
		else
			alert('not def');
	}
});
