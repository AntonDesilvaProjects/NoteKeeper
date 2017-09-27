Ext.define('NoteKeeper.view.tabs.EmailDialog',{
	extend : 'Ext.window.Window',
	alias : 'widget.emailDialog',
	autoShow : true,
	width : 400,
	height : 150,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	padding : '10 10 10 10',
	modal : true,
	noteViewModel : null,
	initComponent : function()
	{
		var me = this;
		this.items = [
			{
				xtype : 'textfield',
				fieldLabel : 'To',
				itemId : 'emailTo',
				emptyText : 'Enter email addresses separated by ;'
			},
			{
				xtype : 'textfield',
				fieldLabel : 'Subject',
				itemId : 'subject'
			},
			{
				xtype :'button',
				text : 'Send',
				handler : function()
				{
					var emailAdds = me.down('textfield[itemId=emailTo]').getValue().split(';');
					var subject = me.down('textfield[itemId=subject]').getValue();
					var formattedData = me.noteViewModel.get('saveFormat');

					var payload = {
						to : emailAdds,
						subject : subject,
						content : formattedData
					};

					//Make POST AJAX; Upon success close the email dialog

					console.log( payload );
				}
			}
		];
		this.on('afterrender', this.afterEmailDialogRender, this);
		this.callParent( arguments );
	},
	afterEmailDialogRender : function( emailDlg )
	{
		var me = this;
		var noteTitle = me.noteViewModel.get('title');
		this.setTitle('Email - ' + noteTitle );
		this.down('textfield[itemId=subject]').setValue( noteTitle );
	}
});