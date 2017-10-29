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
		active tab. If the 'x' icon of a closable tab is clicked,
		close that panel.
	*/
	onItemClick : function( navPanel, record, item, index, e, eOpts )
	{
		var me = this;
		var clickTargetDom = Ext.get( e.getTarget() ).dom;
		var panelId = record.get('panelId');
		if( clickTargetDom.className.includes('navigation-tree-panel-close') )
		{
			me.navPanel.hideNodes( true, panelId ); //Hide the closed panel
			me.contentPanel.setActiveTab( 0 ); //Automatically select first tab
			me.navPanel.selModel.select( 0 );
			return;
		}
		me.contentPanel.setActiveTab( panelId );
	},
	/*
		Generate the Tab panels based on the response returned to the
		store.
	*/
	onNavStoreLoad : function( store, records, success, eOpts )
	{
		var me = this;
		console.info( me.contentPanel )
		Ext.Array.forEach( records, function( node ) 
		{
			console.info( node );
			var panelId = null;	
			if( ( panelId = node.get('panelId') ) ) //Only create panel if it has a panel id
			{
				var tab = {
					title : node.get('text'),
					itemId : node.get('panelId')
				};

				if( panelId === 'journal' || panelId === 'note' )
				{	
					tab.xtype = node.get('panelClass');
					tab.store = Ext.create('NoteKeeper.store.tabs.ContentGridViewStore',{
						type : panelId
					});
				}
				else if( panelId === 'searchResults')
				{
					tab.xtype = node.get('panelClass');
					tab.store = Ext.create('NoteKeeper.store.tabs.ContentGridViewStore',{
						type : null
					});
				}
				else
					tab.xtype = 'categoryStatisticTab';

				me.contentPanel.add( tab );
			}
		});
	}
});