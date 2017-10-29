/*
	A Panel holding the navigation buttons. Clicking
	on a button will load the corresponding page in the
	supplied 'tabPanel'
*/
Ext.define('NoteKeeper.view.NavigationPanel', {
	extend : 'Ext.tree.Panel',
	requires : [
		'NoteKeeper.store.NavigationStore'
	],
	xtype : 'navigationPanel',
	rootVisible : false,
	height : 900,
	width : 200,
	defaultListenerScope : true,
	initComponent : function()
	{
		console.info( this.store );
		this.store.on('load', this.onNavigationStoreLoad, this);
		this.callParent( arguments );
	},
	onNavigationStoreLoad : function( store, records, successful, operation, eOpts)
	{
		var me = this;
		//Get the nodes that are closable and add an 'X' that
		//can be clicked to close the panel
		Ext.Array.forEach( records, function( record ){
			if( record.data.closable )
			{
				var node = store.getNodeById( record.id );
				var nodeElement = me.getView().getNode( node );
				var el = Ext.dom.Query.selectNode('span', nodeElement );
				Ext.dom.Helper.insertAfter( el, '<i class="fa fa-times navigation-tree-panel-close" aria-hidden="true"/>');
			}
		});
		me.hideNodes( true ); //Hide all nodes with field 'hidden' = true

		//Filter the store to include only visible nodes
		// this.store.filterBy( function( record ){
		// 	return !record.data.hidden;
		// }, this);
	},
	/*
		Sets the visibility of all the tree panel nodes that have the 'hidden' field 
		based on passed 'isVisible' flag. If a specific node's 'panelId' is given, 
		only that node's visibility is changed.
	*/
	hideNodes : function( isVisible, panelId )
	{
		var me = this;
		if( panelId )
		{
			var nodeToHide = me.store.findRecord( 'panelId', panelId );
			if( nodeToHide )
			{
				var node = me.store.getNodeById( nodeToHide.id );
				var nodeElement = me.getView().getNode( node );
				nodeElement.hidden = isVisible;
			}
			return;
		}
		Ext.Array.forEach( me.store.data.items , function( record ){
			if( record.data.hidden )
			{
				var node = me.store.getNodeById( record.id );
				var nodeElement = me.getView().getNode( node );
				nodeElement.hidden = isVisible;
			}
		});
	}
});