Ext.define('NoteKeeper.view.tabs.JournalPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	requires : [
		'NoteKeeper.store.tabs.JournalStore'
	],
	alias : 'widget.journalPanel',
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
		this.journalGrid = Ext.widget('grid',{
			width : 200,
			store  : Ext.create('NoteKeeper.store.tabs.JournalStore'),
			selModel : {
				selType : 'checkboxmodel',
				mode : 'SINGLE',
				allowDeselect : true
			},
			columns : [
				{
					text : 'Journal',
					dataIndex : 'name',
					flex : 3
				}
			]
		});
		this.journalGrid.getStore().on('load', this.afterJournalStoreLoad, this);
		this.journalGrid.on('selectionchange', this.onJournalGridSelectionChange, this );

		this.items = [
			this.journalGrid
		];

		this.callParent(arguments);
	},
	afterJournalStoreLoad : function( store )
	{
		var selModel = this.journalGrid.getSelectionModel();
		var gridStore = this.journalGrid.getStore();
		gridStore.each( function( journal ){
			if( this.noteViewModel.get('journal').journalId === journal.get('id') )
				selModel.select( journal );//journal.set('isSelected', true);
		}, this);
	},
	onJournalGridSelectionChange : function( grid, selection, eOpts )
	{
		var selectedJournal = {};
		if( selection.length == 1 )
			selectedJournal = {
				journalId : selection[0].get('id'), //change from 'categoryId' to 'id'
				journalName : selection[0].get('name')
			}
		this.noteViewModel.set('journal', selectedJournal);
	}
});