Ext.define('NoteKeeper.view.MainContainer', {
	extend : 'Ext.container.Container',
	requires : [
		'NoteKeeper.controller.NavigationController'
	],
	xtype : 'mainContainer',
	layout : 'hbox',
	//height : '100%',
	controller : 'navController',
	referenceHolder : true,
	initComponent : function()
	{
		this.callParent(arguments);
	}
});