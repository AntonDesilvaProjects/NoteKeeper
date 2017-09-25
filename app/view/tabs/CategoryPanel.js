Ext.define('NoteKeeper.view.tabs.CategoryPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	requires : [
		'NoteKeeper.store.tabs.CategoryStore'
	],
	alias : 'widget.categoryPanel',
	width : 200,
	height : 150,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	noteViewModel : null,
	defaultListenerScope: true,
	listeners : {	
	},
	initComponent : function()
	{
		var me = this;
		//We create the category grid inside the 'initComponent' b/c we want
		//each category grid to have its own store; with a config based declaration,
		//all the category grids will use ONE store since config is run only once. Below
		//code runs every time a category panel is created.
		this.categoryGrid = Ext.widget('grid',{
			width : 200,
			store  : Ext.create('NoteKeeper.store.tabs.CategoryStore'),
			selModel : {
				selType : 'checkboxmodel',
				mode : 'MULTI',
				allowDeselect : true
			},
			columns : [
				{
					text : 'Category',
					dataIndex : 'name',
					flex : 3,
					renderer : function( value, columnMeta, record )
					{
						columnMeta.style = 'background-color: ' + record.get('color');
						return value;
					}
				}
			]
		});
		this.categoryGrid.getStore().on('load', this.afterCategoryStoreLoad, this );
		this.categoryGrid.on('selectionchange', this.onCategoryGridSelectionChange, this );

		this.items = [
			this.categoryGrid
		];

		this.callParent(arguments);
	},
	/*
		Select user's previously selected categories.
	*/
	afterCategoryStoreLoad : function( store )
	{
		var selModel = this.categoryGrid.getSelectionModel();
		var gridStore = this.categoryGrid.getStore();
		gridStore.each( function( category ){
			if( Ext.Array.contains( this.noteViewModel.get('selectedCategoryIds') , category.get('id') ))
				selModel.select( category );
		}, this);
	},
	/*
		Update the note's ViewModel with the user's selection. Category button's
		html will be regenerated with the selected categorys' names and colors.
	*/
	onCategoryGridSelectionChange : function( grid, selection, eOpts )
	{
		console.log( selection );
		var selectedCategories = [];
		var temp = {};
		Ext.Array.forEach( selection, function( categoryModel ){
			selectedCategories.push({
				categoryId : categoryModel.get('id'), //change from 'categoryId' to 'id'
				color : categoryModel.get('color'),
				name : categoryModel.get('name')
			});
		});
		this.noteViewModel.set('category', selectedCategories );
	}
});