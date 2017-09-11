Ext.define('NoteKeeper.view.tabs.AttachmentPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	requires : [
		'NoteKeeper.store.tabs.AttachmentStore'
	],
	alias : 'widget.attachmentPanel',
	itemId : 'attachmentPanel',
	width : 200,
	height : 150,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	noteId : null,
	defaultListenerScope: true,
	items : [
		{
			xtype : 'grid',
			store : Ext.create('NoteKeeper.store.tabs.AttachmentStore', { parentItemId : 1}),
			columns : [
				{
					text : 'File Name',
					dataIndex : 'fileName',
					flex : 2
				},
				{
					dataIndex : 'remove',
					flex : 1
				}
			],
			viewConfig : {
				emptyText : '<html><div style="padding: 10px;color: gray;background-color: beige;font: bold 13px helvetica, arial, verdana, sans-serif;">No attachments...</div></html>',
				deferEmptyText: false
			},
			height : 125
		},
		{
			xtype : 'form', //Form is required for the file upload
			items : [
				{
					xtype : 'filefield',
					buttonOnly : true,
					buttonText : 'Add',
					margin : '0 5 10 152',
					listeners : {
						change : function( fileField, value, eOpts )
						{
							console.log( value );
							fileField.up().submit({
								url : "/static_files/attachments_1.json",
								success : function( form, operation)
								{
									//Once the file is uploaded, reload the files grid
									fileField.up().up().down('grid').getStore().load();
								},
								failure : function()
								{
									Ext.Msg.alert('Unable to upload file', 'Error uploading file! Please try again.');
								}
							});
						}
					}
				}
			]
		}
	],
	listeners : {
		
	},
	initComponent : function()
	{
		this.callParent(arguments);
	}
});