Ext.define('NoteKeeper.controller.tabs.note.EditNoteWindowController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.editNoteWindowController',
	requires : [
		'NoteKeeper.view.tabs.AttachmentPanel',
		'NoteKeeper.view.tabs.CategoryPanel',
		'NoteKeeper.view.tabs.SharePanel'
	],
	listen : {
		controller : {
			'*' : {
				sendEmail : function(){ alert('hey')}
			}
		}
	},
	init : function()
	{
		this.editNoteWindow = this.getView();
		this.editNoteWindow.getInlineEditor().on('complete', this.inlineEditingComplete, this);
		 
		console.info(this.editNoteWindow)
	},
	afterEditorRender : function( editor )
	{
		editor.getHeader().getTitle().textEl.on('dblclick', this.onEditorTitleDblClick, this );
	},
	onAttachmentBtnClick : function( button, e, eOpts )
	{
		var me = this;
		if( !this.attachmentPanel )
			this.attachmentPanel = Ext.widget('attachmentPanel',{
				width : 200,
				height : 150,
				x : button.getX(),
				y : button.getY() + button.getHeight(),
				noteViewModel : me.editNoteWindow.getViewModel()
			});
		else
			this.attachmentPanel.setPosition(  button.getX(), button.getY() + button.getHeight() );
	
		this.attachmentPanel.show();
	},
	onCategoryBtnClick : function( button, e , eOpts )
	{
		var me = this;
		if( !this.categoryPanel )
			this.categoryPanel = Ext.widget('categoryPanel', {
				width : 200,
				height : 150,
				x : button.getX(),
				y : button.getY() + button.getHeight(),
				noteViewModel : me.editNoteWindow.getViewModel()
			});
		else
			this.categoryPanel.setPosition( button.getX(), button.getY() + button.getHeight() );

		this.categoryPanel.show();
	},
	onJournalBtnClick : function( button, e, eOpts )
	{
		var me = this;
		if( !this.journalPanel )
			this.journalPanel = Ext.widget('journalPanel', {
				width : 200,
				height : 150,
				x : button.getX(),
				y : button.getY() + button.getHeight(),
				noteViewModel : me.editNoteWindow.getViewModel()
			});
		else
			this.journalPanel.setPosition( button.getX(), button.getY() + button.getHeight() );

		this.journalPanel.show();
	},
	onShareBtnClick : function( button, e, eOpts )
	{
		var me = this;
		if( !this.sharePanel )
			this.sharePanel = Ext.widget('sharePanel', {
				width : 200,
				height : 150,
				x : button.getX(),
				y : button.getY() + button.getHeight()
			});
		else
			this.sharePanel.setPosition( button.getX(), button.getY() + button.getHeight() );

		this.sharePanel.show();

	},
	/*
		Use the inline editor to edit the title of the window/note.
	*/
	onEditorTitleDblClick : function(e, target)
	{
		this.editNoteWindow.getInlineEditor().startEdit( target );
	},
	inlineEditingComplete : function(editor, value, startValue, eOpts)
	{
		this.editNoteWindow.getViewModel().set('title', value);
	},
	onSaveBtnClick : function( btn )
	{
		this.syncViewModel();
		var formattedData = this.generateSaveFormat( this.editNoteWindow.getViewModel().getData() );
		//Make AJAX POST request
	},
	/*
		Update the ViewModel with the latest data from different
		parts of edit window. Process is not automatic as there are external 
		components that cannot properly bind to ViewModel.
	*/
	syncViewModel : function()
	{
		var editorContent = this.editNoteWindow.down('noteEditor').getContent();
		this.editNoteWindow.getViewModel().set( 'body', editorContent );
	},
	/*
		Generate a formatted JSON object to POST to server-side API.
		Prelimiary format:
		{
			title : 'title',
			body : 'content',
			categoryIds : [],
			journalId : []
		}
	*/
	generateSaveFormat : function( rawData )
	{
		console.log( rawData );
		var fomattedData = {};
		return fomattedData;
	}
});