Ext.define('NoteKeeper.controller.tabs.EditorController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.editorController',
	init : function()
	{

	},
	/*
		Attach custom toolbar items:
		a) Music, Code, Math inputs,
		b) Embed YouTube videos
	*/
	afterEditorRender : function( editor, eOpts )
	{
		var toolbar = editor.getToolbar();
		toolbar.add([{
			text : 'text',
			handler : function()
			{
				alert('clicked')
			}
		},{
			text : 'text2',
			handler : function()
			{
				alert('clicked')
			}
		}]);
	}
});