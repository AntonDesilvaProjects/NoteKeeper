Ext.define('NoteKeeper.model.tabs.EditorViewModel',{
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.editorViewModel',
	formulas : {
		categoryBtnHtml : function( get )
		{
			var categories = get('category');
			var html = '';
			Ext.Array.forEach( categories, function( category ){
				html += Ext.String.format('<span style="background-color: {0};">{1}</span>, ', category.color, category.name );
			});
			html = html.substring( 0, html.length - 2 );
			return html;
		}
	}
});