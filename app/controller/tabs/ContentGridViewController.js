Ext.define('NoteKeeper.controller.tabs.ContentGridViewController', {
	extend : 'Ext.app.ViewController',
	requires : [
		'NoteKeeper.view.tabs.note.EditNoteWindow',
		'NoteKeeper.view.tabs.journal.EditJournalWindow',
		'NoteKeeper.model.tabs.EditorViewModel'
	],
	alias : 'controller.contentGridViewController',
	init : function()
	{
		this.prevSearchQuery = undefined;
		this.callParent(arguments);
	},
	/*
		Launch the correct type of editor when a record is clicked
	*/
	onItemClick : function( grid, record, item, index, e, options)
	{

		var editorType = undefined;
		if( record.get('type') === 'note')
			editorType = 'editNoteWindow';
		else if ( record.get('type') === 'journal')
			editorType = 'editJournalWindow';

		Ext.widget(editorType, {
			viewModel : {
				type : 'editorViewModel',
				data : record.getData()
			}
		});
	},
	/*
		Display a right-click context menu if the clicked record is a 
		journal. The context-menu provides a way to see notes of a 
		journal

		Provide history support if user wants to go back.
	*/
	onItemRightClick : function( grid, record, item, index, e, options )
	{
		var me = this;
		if( record.get('type') === 'note')
			return;

		e.stopEvent();
		var position = e.getXY();
		var menu = new Ext.menu.Menu({
	        items: [
	            { 
	            	text: 'View Notes', 
	            	handler: function() 
	            	{	
	            		var contentGridProxy = me.getView().store.getProxy();
	            		me.prevSearchQuery = {};
	            		me.prevSearchQuery.url = contentGridProxy.url;
	            		me.prevSearchQuery.params = contentGridProxy.extraParams;

	            		console.log( me.prevSearchQuery );
	            		me.getView().store.loadNotesForJournal( 1 );

	            		//Display the 'back' button
	            		Ext.ComponentQuery.query('#btnBack')[0].show(); //FIX !!
	            	} 
	            }
	        ]
  		});
		menu.showAt(position);

		console.log( position );
	}
});