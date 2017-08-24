Ext.define('NoteKeeper.controller.tabs.note.EditNoteWindowController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.editNoteWindowController',
	init : function()
	{
		this.control({
			'attachmentPanel' : {
				show : this.onAttachmentPanelBlur
			}
		});

		this.editNoteWindow = this.getView();
		// alert('+++')
		console.log(this.editNoteWindow)
		// this.editNoteWindow.el.on('onblur', this.onAttachmentPanelBlur, this);
	},
	onAttachmentBtnClick : function( button, e, eOpts )
	{
		if( !this.attachmentPanel )
			this.attachmentPanel = Ext.widget('attachmentPanel',{
				x : button.getX(),
				y : button.getY() + button.getHeight()
			});
		else
			this.attachmentPanel.setPosition(  button.getX(), button.getY() + button.getHeight() );
	
		this.attachmentPanel.show();
	},
	onAttachmentPanelBlur : function()
	{
		alert('hey')
		this.attachmentPanel.hide();
	}
});