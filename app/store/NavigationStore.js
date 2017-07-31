Ext.define('NoteKeeper.store.NavigationStore', {
	extend : 'Ext.data.TreeStore',
	storeId : 'navStore',
	model : 'NoteKeeper.model.NavigationModel',
	proxy : {
		type : 'ajax',
		url : '/static_files/navItems.json',
		reader : {
			type : 'json',
			rootProperty : 'children'
		}
	},
	//autoLoad : true
	/*root: {
        expanded: true,
        children: [
            { text: "detention", leaf: true },
            { text: "homework", expanded: true, children: [
                { text: "book report", leaf: true },
                { text: "algebra", leaf: true}
            ] },
            { text: "buy lottery tickets", leaf: true }
        ]
    }*/
});