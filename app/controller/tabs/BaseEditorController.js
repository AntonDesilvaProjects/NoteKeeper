Ext.define('NoteKeeper.controller.tabs.BaseEditorController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.baseEditorController',
	requires : [
		'NoteKeeper.config.TinyMCEEditor'
	],
	init : function()
	{
		this.editor = this.getView();
	},
	/*
		MUST be overridden in the subclass to render the appropriate
		editor. By default, we create the standard editor that comes
		with tinyMCE.
	*/
	afterEditorRender : function( editor, eOpts )
	{
		this.configureTinyMceEditor(null);
	},
	/*
		Configures the TinyMCE editor with the config object passed in.
		Config objects are stored in singleton 'NoteKeeper.config.TinyMCEEditor'.
		This way the editor can be customized at creation time.
	*/
	configureTinyMceEditor : function( config )
	{
		var me = this;
		config = config || {};
		config.selector = 'textarea#tinyMceEditor-' + this.editor.tinyMceEditorId;
		config.save_onsavecallback =  function() {
            me.onSaveContent();
        };
        //We can add event listeners here for editor events
        config.setup = function( editor ){
        	//Fires when the editor is initialized
        	editor.on('init', function(e){ 
        		me.onEditorInit(e,me); //Call this class's function when initialized;
        							   //'e' is event. 'me' is this class's scope so we can access its functions
        	});
        }
        console.log( config );
		tinymce.init( config );
	},
	/*
		Saves the content of the editor. MUST be overriden in the subclass
		with the actual logic for saving via Ajax, Form POST, etc.
	*/
	onSaveContent : function()
	{
		console.info( this.editor.tinyMceEditorId + ' : ' + tinyMCE.get( 'tinyMceEditor-' + this.editor.tinyMceEditorId).getContent() );
	},
	/*
		Called when the editor initializes.
	*/
	onEditorInit : function(e, scope)
	{
		//Load any initial content into the editor
		var initContent = scope.editor.initialContent;
		if( initContent !== null )
			scope.getTinyMceEditor().setContent( initContent );
	},
	getTinyMceEditor : function()
	{
		return tinyMCE.get( 'tinyMceEditor-' + this.editor.tinyMceEditorId );
	}
});