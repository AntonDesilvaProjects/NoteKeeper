Ext.define('NoteKeeper.config.TinyMCEEditor', {
	singleton : true,
	/*
		This is the tinyMCE editor configuration for the Notes editor. Includes
		mostly complete set of tool bars/options for editing.
	*/
	NOTE_EDITOR : {
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
	},
	/*
		This is the tinyMCE editor configuration for the journals editor. Editing capabilites
		doesn't have to be as complete as the Note editor. Hence less toolbar & menu options
	*/
	JOURNAL_EDITOR : {
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
	}
});