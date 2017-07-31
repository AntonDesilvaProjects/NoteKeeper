Ext.define('NoteKeeper.store.widget.EditableCategoryGridStore', {
	extend : 'Ext.data.Store',
	requires : [
		'NoteKeeper.model.widget.EditableCategoryModel'
	],
	storeId : 'editableCategoryGridStore',
	model : 'NoteKeeper.model.widget.EditableCategoryModel',
	proxy : {
		type : 'ajax',
		url : '/static_files/categoryData.json',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	},
	autoLoad : true
});