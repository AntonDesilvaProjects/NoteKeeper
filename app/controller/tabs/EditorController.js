Ext.define('NoteKeeper.controller.tabs.EditorController', {
	extend : 'Ext.app.ViewController',
	alias : 'controller.editorController',
	requires : [
		'NoteKeeper.config.TinyMCEEditor'
	],
	init : function()
	{
		this.editor = this.getView();
	},
	/*
		Attach custom toolbar items:
		a) Music, Code, & Math inputs
		b) Embed YouTube videos
	*/
	afterEditorRender : function( editor, eOpts )
	{

		this.configureTinyMceEditor( NoteKeeper.config.TinyMCEEditor.noteEditor );

		/*tinymce.init({
			selector : 'textarea#tinyMceEditor-' + me.editor.tinyMceEditorId,
			toolbar_items_size : 'small',
			plugins : [
				'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    			'searchreplace wordcount visualblocks visualchars code fullscreen',
    			'insertdatetime media nonbreaking save table contextmenu directionality',
   				'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
			],
			toolbar1: 'save undo redo | fontselect fontsizeselect | bold italic underline forecolor backcolor',
  			toolbar2: 'alignleft aligncenter alignright alignjustify | bullist numlist | link image | print media | codesample help',
			statusbar : false,
			branding: false,
			height : "300",
			font_formats: 'Arial=arial,helvetica,sans-serif;Courier New=courier new,courier,monospace;AkrutiKndPadmini=Akpdmi-n',
			// setup : function( editor )
			// {
			// 	console.log(editor);
			// 	editor.on('saveContent', function( e ){

			// 		console.log( e );
			// 		e.stopPropogation();
			// 	});
			// }
			save_onsavecallback: function() {
                me.onSaveContent();
        	}
		});*/

		//console.log('tinyMceEditor-' + me.editor.tinyMceEditorId);
	},
	/*
		Configures the TinyMCE editor.
	*/
	configureTinyMceEditor : function( config )
	{
		var me = this;
		config.selector = 'textarea#tinyMceEditor-' + this.editor.tinyMceEditorId;
		config.save_onsavecallback =  function() {
            me.onSaveContent();
        }
        console.log( config );
		tinymce.init( config );
	},
	/*
		Saves the content of the editor.
	*/
	onSaveContent : function()
	{
		console.log(this.editor.tinyMceEditorId)
		console.log( tinyMCE.get( 'tinyMceEditor-' + this.editor.tinyMceEditorId).getContent() );
		//alert('hey')
	}
});