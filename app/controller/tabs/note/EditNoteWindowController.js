Ext.define('NoteKeeper.controller.tabs.note.EditNoteWindowController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.editNoteWindowController',
	requires : [
		'NoteKeeper.view.tabs.AttachmentPanel'
	],
	init : function()
	{
		this.control({
		});

		this.editNoteWindow = this.getView();
		console.log(this.editNoteWindow)
	},
	onAttachmentBtnClick : function( button, e, eOpts )
	{
		if( !this.attachmentPanel )
			this.attachmentPanel = Ext.widget('attachmentPanel',{
				width : 200,
				height : 150,
				x : button.getX(),
				y : button.getY() + button.getHeight()
			});
		else
			this.attachmentPanel.setPosition(  button.getX(), button.getY() + button.getHeight() );
	
		this.attachmentPanel.show();
	}
});