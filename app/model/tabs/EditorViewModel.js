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
		/*
			Generate a formatted JSON object to POST to server-side API.
			Prelimiary format:
			{
				title : 'title',
				body : 'content',
				categoryIds : [],
				journalId : 'id'
			}
		*/
		saveFormat : function( get )
		{
			var formattedData = {};
			formattedData.id = get('id');
			formattedData.title = get('title');
			formattedData.body = get('body');
			formattedData.categoryIds = [];
			Ext.Array.forEach( get('category'), function( category ){
				formattedData.categoryIds.push( category.categoryId );
			});
			formattedData.journalId = get('journal').journalId;

			return formattedData;
		}
	}
});