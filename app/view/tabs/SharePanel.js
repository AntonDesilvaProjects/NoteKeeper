Ext.define('NoteKeeper.view.tabs.SharePanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	requires : [
		'NoteKeeper.view.tabs.EmailDialog'
	],
	alias : 'widget.sharePanel',
	width : 200,
	height : 150,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	defaultListenerScope: true,
	noteViewModel : null,
	listeners : {	
	},
	initComponent : function()
	{
		var me = this;
		this.shareGrid = Ext.widget('grid',{
			width : 200,
			store  : Ext.create('Ext.data.Store', {
				fields : [
					'shareOption', 'icon'
				],
				data : [
					{
						shareOption : "Email",
						icon : ""
					},
					{
						shareOption : "Google Drive",
						icon : ""
					}
				]
			}),
			columns : [
				{
					dataIndex : 'shareOption',
					flex : 3,
					renderer : function( value, columnMeta, record )
					{
						return value;
					}
				}
			]
		});
		this.shareGrid.on('select', this.onShareGridSelect, this);

		this.items = [
			this.shareGrid
		];

		this.callParent(arguments);
	},
	onShareGridSelect : function( grid, record, index, eOpts )
	{
		if( record.get('shareOption') === 'Email')
		{
			//Prompt user for recipient email address + subject
			//The body will be the note itself
			Ext.widget('emailDialog',{
				noteViewModel : this.noteViewModel
			});

		}
		else if( record.get('shareOption') === 'Google Drive')
		{

		}
	}
});