/*
	Components of the filter:
	a) Type : Note or Journal
	b) With Title
	c) Date Modified
	d) Has content
	e) category
	e) With attachments(PDF, Excel)
*/
Ext.define('NoteKeeper.view.FilterPanel',{
	extend : 'NoteKeeper.view.tabs.FloatingPanel',
	alias : 'widget.filterPanel',
	layout : 'form',
	bodyPadding : '5 5 5 5',
	defaultListenerScope : true,
	initComponent : function()
	{
		var me = this;
		me.searchTypeCheckBoxGrp = Ext.widget('checkboxgroup',{
			fieldLabel : 'Search in',
			name : 'type',
			columns : 2,
			items : [
				{
					boxLabel : 'Notes',
					name : 'noteCheckBox'
				},
				{
					boxLabel : 'Journals',
					name : 'journalCheckBox'
				}
			],
			listeners : {
				change : 'onSearchTypeChange'
			}
		});
		me.txtSearchTitle = Ext.widget('textfield', {
			fieldLabel : 'Title',
			name : 'title'
		});
		me.txtSearchBody = Ext.widget('textarea', {
			fieldLabel : 'Body content',
			name : 'body'
		});
		me.searchContentType = Ext.widget('checkboxgroup',{
			fieldLabel : 'Body content type',
			name : 'contentType',
			items : [
				{
					boxLabel : 'Images',
					name : 'imageCheckBox'
				},
				{
					boxLabel : 'Videos',
					name : 'videoCheckBox'
				},
				{
					boxLabel : 'Code',
					name : 'codeCheckBox'
				}
			]
		});

		me.searchCategory = Ext.widget('combo', {
			fieldLabel : 'Select Categories',
			name : 'category',
			store : {
				fields : [
					{
						name : 'name'
					},
					{
						name : 'value'
					}
				],
				data : [
					{
						name : 'Life',
						value : 12
					}
				]
			},
			displayField : 'name',
			valueField : 'value',
			listConfig : {
				cls : 'floatingPanelComponent' //Add the cls to prevent the Filter Panel from hiding
											   //when the combo's picker is clicked
			}
		});
		me.searchJournal = Ext.widget('combo', {
			fieldLabel : 'Select Journals',
			name : 'journal',
			componentCls : 'floatingPanel',
			store : {
				fields : [
					{
						name : 'name'
					},
					{
						name : 'value'
					}
				],
				data : [
					{
						name : 'Code Snippets',
						value : 12
					}
				]
			},
			displayField : 'name',
			valueField : 'value',
			listConfig : {
				cls : 'floatingPanelComponent'
			}
		});

		me.dateModified = Ext.widget('datefield', {
			fieldLabel : 'Last Modified',
			name : 'dateModified'
		});
		me.dateModified.getPicker().cls = 'floatingPanelComponent';

		me.searchAttachment = Ext.widget('textfield', {
			fieldLabel : 'Attchment text',
			name : 'attachmentText'

		});

		this.items = [
			me.searchTypeCheckBoxGrp,
			me.txtSearchTitle,
			me.txtSearchBody,
			me.searchContentType,
			me.dateModified,
			me.searchCategory,
			me.searchJournal,
			me.searchAttachment
		];
		this.buttons = [
			{
				text : 'Reset',
				handler : function()
				{
					me.resetForm();
				}
			},
			{
				text : 'Apply',
				handler : function()
				{
					me.generateEncodedFilter();
				}
			}
		]
		this.callParent( arguments );
	},
	/*
		If the Search Type is only 'Journal', then hide the journal combo box and
		the attachment search field as Journals do not have these values
	*/
	onSearchTypeChange : function( checkBoxGrp, newValue, oldValue, eOpts)
	{
		var me = this;
		if( !newValue.noteCheckBox && newValue.journalCheckBox && newValue.journalCheckBox === "on" )
		{
			me.searchJournal.hide();
			me.searchAttachment.hide();
		}
		else 
		{
			me.searchJournal.show();
			me.searchAttachment.show();
		}
	},
	/*
		Clears all the fields
	*/
	resetForm : function()
	{
		Ext.Array.forEach( this.items.getRange(), function( cmp ){
			cmp.reset();
		});
	},
	/*
		Generates an encoded filter based on field values
	*/
	generateEncodedFilter : function()
	{
		var jsonEncoding = {};
		Ext.Array.forEach( this.items.getRange(), function( cmp ){
			console.log( cmp.name + ':' + cmp.getValue() );
		});
	}
});