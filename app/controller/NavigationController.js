/*

*/
Ext.define('NoteKeeper.controller.NavigationController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.navController',
	requires : [
		'NoteKeeper.view.tabs.ContentGridView',
		'NoteKeeper.store.tabs.ContentGridViewStore',
		'NoteKeeper.view.tabs.categorystatistic.CategoryStatisticTab'
	],
	init : function()
	{
		this.control({
			"#navPanel" : {
				itemclick : this.onItemClick
			},
			"#contentPanel" : {
				afterrender : this.afterContentPanelRender
			}
		});
		
		//View references
		this.contentPanel = this.lookupReference('contentPanel');
		this.navPanel = this.lookupReference('navPanel');

		//Store references
		this.navStore = this.navPanel.store;
		if( this.navStore )
		{
			this.navStore.on( 'load', this.onNavStoreLoad, this);
		}
		this.callParent( arguments );
	},
	/*
		Called after content panel renders.
	*/
	afterContentPanelRender : function( contentPanel, eOpts )
	{
		//Remove the header bar from the tab panel
		contentPanel.getTabBar().setVisible( false );
	},
	/*
		When a tab from the navigation panel is clicked, change the
		active tab.
	*/
	onItemClick : function( navPanel, record, item, index, e, eOpts )
	{
		this.contentPanel.setActiveTab( record.get('panelId') );
	},
	/*
		Generate the Tab panels based on the response returned to the
		store.
	*/
	onNavStoreLoad : function( store, records, success, eOpts )
	{
		var me = this;
		console.info( me.contentPanel )
		Ext.Array.forEach( records, function( node ) {
			console.info( node );
			
			if( node.get('panelId') ) //Only create panel if it has a panel id
			{
				var tab = {
					title : node.get('text'),
					itemId : node.get('panelId')
				};

				if( node.get('panelId') === 'journal' || node.get('panelId') === 'note' )
				{	
					tab.xtype = node.get('panelClass');
					tab.store = Ext.create('NoteKeeper.store.tabs.ContentGridViewStore',{
						type : node.get('panelId')
					});
				}
				else
					tab.xtype = 'categoryStatisticTab';

				me.contentPanel.add( tab );
			}
		});
	}
});