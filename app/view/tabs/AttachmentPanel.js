Ext.define('NoteKeeper.view.tabs.AttachmentPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	requires : [
		'NoteKeeper.store.tabs.AttachmentStore'
	],
	alias : 'widget.attachmentPanel',
	itemId : 'attachmentPanel',
	width : 200,
	height : 160,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	noteId : null,
	defaultListenerScope: true,
	noteViewModel : null,
	listeners : {
		
	},
	initComponent : function()
	{
		var me = this;
		this.attachmentGrid = Ext.widget('grid',{
			store : Ext.create('NoteKeeper.store.tabs.AttachmentStore', { parentItemId : 1}), //Change to note id
			columns : [
				{
					text : 'File Name',
					dataIndex : 'fileName',
					flex : 5
				},
				{
					xtype : 'actioncolumn',
					flex : 1,
					items : [
						{
							icon : 'https://cdn4.iconfinder.com/data/icons/colicon/24/close_delete-128.png',
							tooltip : 'Remove Attachment',
							handler : function(grid, rowIndex, colIndex)
							{
								//Make ajax call to remove the attachment
								//Visibly remove attachment + ajax call behind the scene
							}
						}
					]
				}
			],
			viewConfig : {
				emptyText : '<html><div style="padding: 10px;color: gray;background-color: beige;font: bold 13px helvetica, arial, verdana, sans-serif;">No attachments...</div></html>',
				deferEmptyText: false
			},
			height : 125
		});
		this.attachmentForm = Ext.widget('form', {
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
									me.attachmentGrid.getStore().load();
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
		});

		this.items = [
			this.attachmentGrid,
			this.attachmentForm
		];
		this.callParent(arguments);
	}
});