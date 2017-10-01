Ext.define('NoteKeeper.controller.tabs.journal.EditJournalWindowController',{
	extend : 'Ext.app.ViewController',
	alias : 'controller.editJournalWindowController',
	requires : [
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
		this.editJournalWindow = this.getView();
		this.editJournalWindow.getInlineEditor().on('complete', this.inlineEditingComplete, this);
		 
		console.info(this.editJournalWindow)
	},
	afterEditorRender : function( editor )
	{
		editor.getHeader().getTitle().textEl.on('dblclick', this.onEditorTitleDblClick, this );
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
				noteViewModel : me.editJournalWindow.getViewModel()
			});
		else
			this.categoryPanel.setPosition( button.getX(), button.getY() + button.getHeight() );

		this.categoryPanel.show();
	},
	onShareBtnClick : function( button, e, eOpts )
	{
		var me = this;
		if( !this.sharePanel )
			this.sharePanel = Ext.widget('sharePanel', {
				width : 200,
				height : 150,
				x : button.getX(),
				y : button.getY() + button.getHeight(),
				noteViewModel : me.editJournalWindow.getViewModel()
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
		this.editJournalWindow.getInlineEditor().startEdit( target );
	},
	inlineEditingComplete : function(editor, value, startValue, eOpts)
	{
		this.editJournalWindow.getViewModel().set('title', value);
	},
	onSaveBtnClick : function( btn )
	{
		this.syncViewModel();
		console.clear();
		console.log(this.editJournalWindow.getViewModel().getData() );
		console.log( this.editJournalWindow.getViewModel().get('saveFormat'));

		//Make AJAX POST request
	},
	/*
		Update the ViewModel with the latest data from different
		parts of edit window. Process is not automatic as there are external 
		components that cannot properly bind to ViewModel.
	*/
	syncViewModel : function()
	{
		var editorContent = this.editJournalWindow.down('journalEditor').getContent();
		this.editJournalWindow.getViewModel().set( 'body', editorContent );
	},
	generateToolbarPanel : function( panelType )
	{
		//
	}
});