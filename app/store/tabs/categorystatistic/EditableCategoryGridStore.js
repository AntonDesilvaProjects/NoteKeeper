Ext.define('NoteKeeper.store.tabs.categorystatistic.EditableCategoryGridStore', {
	extend : 'Ext.data.Store',
	requires : [
		'NoteKeeper.model.tabs.categorystatistic.EditableCategoryModel'
	],
	storeId : 'editableCategoryGridStore',
	model : 'NoteKeeper.model.tabs.categorystatistic.EditableCategoryModel',
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