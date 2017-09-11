/*
	Integrates the TinyMCE editor to provide support for rich text 
	editing that includes:
	a) Rich text
	b) Multimedia(images & Youtube videos)
	c) Syntax highlighting for code
	d) Mathematical expression + music notation
*/
Ext.define('NoteKeeper.view.tabs.BaseEditor', {
	extend : 'Ext.panel.Panel',
	requires : [
		'NoteKeeper.controller.tabs.BaseEditorController'
	],
	xtype : 'baseEditor',
	controller : 'baseEditorController',
	listeners : {
		afterrender : 'afterEditorRender'
	},
	height : 900,
	initialContent : null,
	initComponent : function()
	{
		this.tinyMceEditorId = this.generateUniqueId();
		this.html = this.generateEditorHtml( this.tinyMceEditorId );
		this.callParent(arguments);
	},
	generateUniqueId : function()
	{
		return parseInt( Ext.id().replace("ext-", "") );
	},
	generateEditorHtml : function( editorId )
	{
		return Ext.String.format('<form><textarea id="tinyMceEditor-{0}"></textarea><form>', editorId );
	},
	setInitialContent : function( content )
	{
		this.initialContent = content;
	}
});