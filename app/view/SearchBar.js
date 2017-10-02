Ext.define('NoteKeeper.view.SearchBar', {
	extend : 'Ext.container.Container',
	xtype : 'searchBar',
	layout : {
		type : 'hbox'
	},
	referenceHolder : true,
	initComponent : function()
	{
		var me = this;

		this.txtSearchField = Ext.widget('textfield', {
			name : 'txtSearchField',
			reference : 'txtSearchField',
			width : 500,
			height : 30,
			inputWrapCls: '',
    		triggerWrapCls: '', // remove default styling for div wrapping the input element and trigger button(s)
    		fieldStyle: 'background:none' // remove the input element's background
		});
		this.btnFilter = Ext.widget('image', {
			name : 'btnFilter',
			reference : 'btnFilter',
			src : "resources/search_filter.png",
			height : 30,
			width : 30,
			style : 'cursor:pointer',
			listeners : {
				afterrender : function( c )
				{
					c.el.on('click', function(){ alert('clicked!'); });
				}
			}
		});
		this.btnSearch = Ext.widget('button', {
			name : 'btnSearch',
			reference : 'btnSearch',
			text : 'Search',
			height : 32,
			margin : '0 0 0 5',
			handler : function( btn )
			{
				var searchResultsTab = Ext.ComponentQuery.query('#searchResults')[0];
				searchResultsTab.store.loadSearchResults( 1 );
				console.log( searchResultsTab)
			}
		});

		this.items = [
			{
				xtype : 'container',
				layout : 'hbox',
				items : [
					me.txtSearchField,
					me.btnFilter
				],
				border : 1,
				style: {
       				borderColor: 'gray',
      				borderStyle: 'solid'
    			}
			},
			this.btnSearch
		];

		this.callParent( arguments );
	}
});