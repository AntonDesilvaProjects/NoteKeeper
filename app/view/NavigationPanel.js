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
	
	initComponent : function()
	{
		console.info( this.store );
		this.callParent( arguments );
	}
});