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
				'<span class="truncate">{category}</span>',
				'<i class="fa fa-trash-o trash-icon" aria-hidden="true" title="Delete this note"></i>',
			'</div>',
		'</div>',
	'</tpl>',
	{
		//Sets the background color of the note
		/*
			Have a category-color map loaded from which we can lookup the
			user's color preferences.
		*/
		setBackgroundColor : function( category )
		{
			console.log( category );
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
		}
	}
);

Ext.define('NoteKeeper.view.ContentGridView', {
	extend : 'Ext.view.View',
	requires : [
		'NoteKeeper.store.ContentGridViewStore'
	],
	xtype : 'contentGridView',
	//store : Ext.create('NoteKeeper.store.ContentGridViewStore'), //Create a new store for this view
	tpl : gridTpl,
	itemSelector : 'card',
	autoScroll : true
});