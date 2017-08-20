Ext.define('NoteKeeper.view.tabs.categorystatistic.EditableCategoryGrid', {
	extend : 'Ext.grid.Panel',
	requires : [
		'NoteKeeper.store.tabs.categorystatistic.EditableCategoryGridStore',
		'Ext.grid.plugin.RowEditing'
	],
	xtype : 'editableCategoryGrid',
	selModel : 'rowmodel',
	columns : [
		{
			header : 'Category Name',
			dataIndex : 'categoryName',
			editor : 'textfield',
			flex : 2 
		},
		{
			header : 'Category Description',
			dataIndex : 'categoryDescription',
			editor : 'textfield',
			flex : 4 
		},
		{
			header : 'Color',
			dataIndex : 'categoryColor',
			editor : 'textfield',
			felx : 1 
		},
		{
			header : 'Last Updated On',
			dataIndex : 'updatedOn',
			flex : 2
		},
		{
			header : 'Created On',
			dataIndex : 'createdOn',
			flex : 2
		}
	],
	tbar : [
		{
			text : 'Add Category',
			handler : function()
			{
				this.store.load();
				alert('add category')
			},
			scope : this
		}
	],
	plugins : {
		ptype : 'rowediting',
		clicksToEdit : 2
	},
	initComponent : function()
	{
		this.callParent(arguments);

	},
	listeners : {
		beforeselect : function()
		{
			alert('hey')
		}
	}
});