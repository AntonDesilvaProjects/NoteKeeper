Ext.define('NoteKeeper.model.widget.EditableCategoryModel', {
	extend : 'Ext.data.Model',
	fields : [
		{
			name : 'categoryName',
			mapping : 'categoryName'
		},
		{
			name : 'categoryDescription',
			mapping : 'categoryDescription'
		},
		{
			name : 'categoryColor',
			mapping : 'categoryColor',
			type : 'auto'
		},
		{
			name : 'updatedOn',
			mapping : 'updatedOn',
			type : 'auto'
		},
		{
			name : 'createdOn',
			mapping : 'createdOn',
			type : 'auto'
		}
	]
});