/*
	Extends the HtmlEditor to support editing formatted code,
	music, & mathematical expressions. Also supports embedding 
	YouTube videos.
*/
Ext.define('NoteKeeper.view.tabs.Editor', {
	extend : 'Ext.form.field.HtmlEditor',
	requires : [
		'NoteKeeper.controller.tabs.EditorController'
	],
	xtype : 'contentEditor',
	controller : 'editorController',
	listeners : {
		afterrender : 'afterEditorRender'
	},
	initComponent : function()
	{
		this.callParent(arguments);
	}
});