Ext.define('NoteKeeper.view.SearchResultsPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	width : 530,
	height : 100,
	alias : 'widget.searchResultsPanel',
	defaultListenerScope : true,
	initComponent : function()
	{
		this.searchResultsGrid = Ext.widget('grid', {
			width : '100%',
			height : '100%',
			store : {
				fields : [ 
					'resultText', 
					{ 
						name : 'resultType', 
						mapping : 'resultMeta.type'
					},
					{
						name : 'ownerTitle',
						mapping : 'resultMeta.owner.title'
					},
					{
						name : 'self',
						mapping : 'resultMeta.owner.self'
					},
					{
						name : 'resultMeta',
						mapping : 'resultMeta'
					}
				],
				data : [
					{
						'resultText' : 'The Name of the Wind',
						'resultMeta' : {
							'type' : 'pdf',
							'createdOn' : '12/24/2014',
							'owner' : {
								'type' : 'note',
								'id' : 123,
								'title' : 'Fantasy Books'
							}
						}
					},
					{
						'resultText' : 'The tale of Celebrimbor',
						'resultMeta' : {
							'type' : 'docx',
							'createdOn' : '12/24/2015',
							'owner' : {
								'type' : 'note',
								'id' : 123,
								'title' : 'Fantasy Books'
							}
						}
					},
					{
						'resultText' : 'Uncharted 4 : A Thief"s End',
						'resultMeta' : {
							'type' : 'note',
							'createdOn' : '12/24/2015',
							'owner' : {
								'type' : 'note',
								'id' : 123,
								'title' : 'Video Games',
								'self' : true
							}
						}
					},
					{
						'resultText' : 'Elements of Programming Interviews in JAVA',
						'resultMeta' : {
							'type' : 'text',
							'createdOn' : '12/24/2015',
							'owner' : {
								'type' : 'note',
								'id' : 123,
								'title' : 'Interview Practice'
							}
						}
					}
				]
			},
			columns : [
				{
					dataIndex : 'resultText',
					flex : 4,
					renderer : function( value, meta, record, rowIndex, colIndex, store, view  )
					{
						if( record.get('self') )
							return record.get('resultText');
						else 
							return record.get('resultText') + '<i> in ' + record.get('ownerTitle') + '</i>';
					}
				},
				{
					dataIndex : 'resultType',
					flex : 1
				}
			],
			hideHeaders : true,
			listeners : {
				select : 'onSearchResultSelect'
			}
		});

		this.items = [
			this.searchResultsGrid
		];
		this.callParent( arguments );
	},
	onSearchResultSelect : function( grid, record, index, eOpts )
	{
		var me = this;
		//Collapse the results panel so no futher selections can be made
		me.hide();
		//Make AJAX call to fetch detailed information
		Ext.Ajax.request({
			method : 'GET',
			params : {
				type : record.get('resultMeta').type,
				id : record.get('resultMeta').owner.id
			},
			url : '/static_files/searchResultNote.json',
			success : function( response, eOpts )
			{
				var respObj = Ext.decode( response.responseText );
				if( respObj.success === false )
					return;

				//On callback, create a editor window with ViewModel
				var editorViewModel = Ext.create('NoteKeeper.model.tabs.EditorViewModel', {});
				editorViewModel.setData( respObj.data );
				var editorType = respObj.data.type === 'note' ? 'editNoteWindow' : 'editJournalWindow';
				
				Ext.widget( editorType, {
					viewModel : editorViewModel
				});
			},
			failure : function( response, eOpts )
			{
				Ext.Msg.alert('Error', 'An unexpected error occurred while fetching serach data. Please try again later.');
			}
		});
	}
});