Ext.define('NoteKeeper.view.ContextToolBar', {
	extend : 'Ext.toolbar.Toolbar',
	alias : 'widget.contextToolBar',
	initComponent : function()
	{
		var me = this;
		var newBtn = Ext.widget( 'button',  {
			text : 'New',
			itemId : 'btnNew',
			hidden : true,
			handler : function()
			{
				//Launch a new note or journal editor with predefined data
				var navPanel = Ext.ComponentQuery.query('#navPanel')[0];
				var selection = navPanel.selModel.getSelection()[0];
				var editorType = ( selection.get('panelId') === 'note' ) ? 'editNoteWindow' : 'editJournalWindow';

				var editorViewModel = Ext.create('NoteKeeper.model.tabs.EditorViewModel', {});
				editorViewModel.setData({
					title : 'Double click to edit the title',
					body : '<i>Enter text, images, videos, etc. here...</i>',
					category : [],
					type : editorType === 'editNoteWindow' ? 'note' : 'journal'
				});
				
				Ext.widget( editorType, {
					viewModel : editorViewModel
				});
			}
        });

        var backBtn = Ext.widget( 'button',  {
			iconCls : 'fa fa-arrow-left fa-lg',
			itemId : 'btnBack',
			hidden : true,
			backUrl : undefined
        });

        me.items = [
        	newBtn,
        	{
        		xtype : 'tbfill'
        	},
        	backBtn
        ];
		me.callParent( arguments );
	},
	/*
		Updates the tool bar based on the passed in 'context'. The
		'context' is a key for a particular configuration of the
		toolbar. The configuration determines which components
		are visible/enabled
	*/
	updateToolBar : function( context )
	{
		var me = this;
		var btnNew = me.getComponent('btnNew'); 
		var btnBack = me.getComponent('btnBack');

		if( context === 'journal' || context === 'note' )
			btnNew.setVisible( true );
		else
			btnNew.setVisible( false );

		// if( context === 'searchResults' )
		// 	btnBack.setVisible( true );
		// else
		// 	btnBack.setVisible( false );
	}
});