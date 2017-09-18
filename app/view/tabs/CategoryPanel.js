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
	selectedCategoryIds : null,
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
			columns : [
				{
					text : 'Category',
					dataIndex : 'categoryName',
					flex : 3,
					renderer : function( value, columnMeta, record )
					{
						columnMeta.style = 'background-color: ' + record.get('categoryColor');
						return value;
					}
				},
				{
					xtype : 'checkcolumn',
					dataIndex : 'isSelected',
					flex : 1
				}
			]
		});
		this.categoryGrid.getStore().on('load', this.afterCategoryStoreLoad, this);

		this.items = [
			this.categoryGrid
		];

		this.callParent(arguments);
	},
	afterCategoryStoreLoad : function( store )
	{
		var selModel = this.categoryGrid.getSelectionModel();
		var gridStore = this.categoryGrid.getStore();
		gridStore.each( function( category ){
			if( Ext.Array.contains( this.selectedCategoryIds, category.get('categoryId') ))
				category.set('isSelected', true);
		}, this);
	}
});