Ext.define('NoteKeeper.model.tabs.EditorViewModel',{
	extend : 'Ext.app.ViewModel',
	alias : 'viewmodel.editorViewModel',
	data : {
		journal : null //This field may not always be defined
	},
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
		},
		selectedCategoryIds : function( get )
		{
			var categories = get('category');
			var categoryList = [];
			Ext.Array.forEach( categories, function( category ){
				categoryList.push( category.categoryId );
			});

			return categoryList;
		},
		saveFormat : function( get )
		{
			var formattedData = {};
			//formattedData.id = get('id');
			formattedData.title = get('title');
			formattedData.body = get('body');
			formattedData.categoryIds = [];
			Ext.Array.forEach( get('category'), function( category ){
				formattedData.categoryIds.push( category.categoryId );
			});
			formattedData.type = get('type');
			if( formattedData.type === 'note' )
				formattedData.journalId = get('journal').journalId;	
			return formattedData;
		}
	}
});