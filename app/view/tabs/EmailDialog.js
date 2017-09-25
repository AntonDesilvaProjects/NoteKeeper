Ext.define('NoteKeeper.view.tabs.EmailDialog',{
	extend : 'Ext.window.Window',
	alias : 'widget.emailDialog',
	autoShow : true,
	width : 300,
	height : 150,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	padding : '10 10 10 10',
	emailSubject : null,
	initComponent : function()
	{
		var me = this;
		this.items = [
			{
				xtype : 'textfield',
				fieldLabel : 'To',
				itemId : 'emailTo'
			},
			{
				xtype : 'textfield',
				fieldLabel : 'Subject',
				itemId : 'subject',
				text : me.emailSubject	
			},
			{
				xtype :'button',
				text : 'Send',
				handler : function()
				{
					
				}
			}
		];
		this.on('afterrender', this.afterEmailDialogRender, this);
		this.callParent( arguments );
	},
	afterEmailDialogRender : function( emailDlg )
	{
		this.setTitle('Email - ' + this.emailSubject );
		this.down('textfield[itemId=subject]').setValue( this.emailSubject );
	}
});