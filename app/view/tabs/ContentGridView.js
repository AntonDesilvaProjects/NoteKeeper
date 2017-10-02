var gridTpl = new Ext.XTemplate(
	'<tpl for=".">',
		'<div class="card" style="{[this.setBackgroundColor(values)]}">',
			'<div class="card-content">',
				'<span class="card-title">{title}</span>',
				'<p>{body}</p>',
			'</div>',
			'<div class="card-control">',
				// '<i class="fa fa-sticky-note-o note-icon" aria-hidden="true" title="Note"></i>',
				// '<i class="fa fa-paperclip" aria-hidden="true"></i>',
				// '<i class="fa fa-code" aria-hidden="true"></i>',
				// '<i class="fa fa-music" aria-hidden="true"></i>',
				'<tpl for="contentType">',
					'{[this.generateContentTypeIcon(values)]}',
				'</tpl>',
				'<span class="truncate">{[this.getCategoryList(values)]}</span>',
				'<i class="fa fa-trash-o trash-icon" aria-hidden="true" title="Delete this note"></i>',
			'</div>',
		'</div>',
	'</tpl>',
	{
		//Sets the background color of the note
		/*
			Have a category-color map loaded from which we can lookup the
			user's color preferences. Set the first category's color.
		*/
		setBackgroundColor : function( category )
		{
			console.info( category );
			return 'background-color: rgba(223, 224, 2, 0.84) !important';
		},
		//Based on the passed in type, generate an icon
		generateContentTypeIcon : function( type )
		{
			if( type === "note")
				return '<i class="fa fa-sticky-note-o note-icon" aria-hidden="true" title="Note"></i>';
			else if( type === "journal")
				return '<i class="fa fa-book" aria-hidden="true" title="Journal"></i>';
			else if ( type === "attachment")
				return '<i class="fa fa-paperclip" aria-hidden="true"></i>';
			else if ( type === "music")
				return '<i class="fa fa-music" aria-hidden="true"></i>';
			else if ( type === "code" )
				return '<i class="fa fa-code" aria-hidden="true"></i>';
		},
		//Generates comma separated list of categories
		getCategoryList : function( data )
		{
			var categoryList = "";
			Ext.Array.forEach( data.category, function( category ){
				categoryList += category.name + ",";
			});

			return categoryList.substring(0, categoryList.length - 1 ).toString();
		}
	}
);

Ext.define('NoteKeeper.view.tabs.ContentGridView', {
	extend : 'Ext.view.View',
	requires : [
		'NoteKeeper.store.tabs.ContentGridViewStore',
		'NoteKeeper.controller.tabs.ContentGridViewController'
	],
	xtype : 'contentGridView',
	tpl : gridTpl,
	itemSelector : 'div.card',
	controller : 'contentGridViewController',
	autoScroll : true,
	listeners : {
		itemclick : 'onItemClick',
		itemcontextmenu : 'onItemRightClick'
	}
});