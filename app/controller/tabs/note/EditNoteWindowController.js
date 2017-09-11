Ext.define('NoteKeeper.controller.tabs.note.EditNoteWindowController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.editNoteWindowController',
	requires : [
		'NoteKeeper.view.tabs.AttachmentPanel',
		'NoteKeeper.view.tabs.CategoryPanel'
	],
	init : function()
	{
		this.control({
		});

		this.editNoteWindow = this.getView();
		console.info(this.editNoteWindow)
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
	},
	onCategoryBtnClick : function( button, e , eOpts )
	{
		if( !this.categoryPanel )
			this.categoryPanel = Ext.widget('categoryPanel', {
				width : 200,
				height : 150,
				x : button.getX(),
				y : button.getY() + button.getHeight()
			});
		else
			this.categoryPanel.setPosition( button.getX(), button.getY() + button.getHeight() );

		this.categoryPanel.show();
	}
});