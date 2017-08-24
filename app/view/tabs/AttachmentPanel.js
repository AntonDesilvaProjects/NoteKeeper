Ext.define('NoteKeeper.view.tabs.AttachmentPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.attachmentPanel',
	itemId : 'attachmentPanel',
	floating : true,
	focusable : true,
	width : 200,
	height : 150,
	layout : {
		type : 'vbox'
	},
	defaultListenerScope: true,
	items : [
		{
			xtype : 'grid',
			store : null,
			columns : [
				{
					text : 'File Name',
					dataIndex : 'fileName'
				},
				{
					dataIndex : 'remove'
				}
			]
		},
		{
			xtype : 'button',
			text : '+',
			handler : function()
			{
				
			}
		}
	],
	listeners : {
		// el: {
		//     // blur: {
		//     //     fn: function(el, e)
		//     //     {
		//     //     	console.log(Ext.getCmp(this.id));
		//     //     	var elId = this.id;
		//     //     	var attachmentPanels = Ext.ComponentQuery.query('#attachmentPanel');
		//     //     	Ext.Array.forEach( attachmentPanels, function(cmp){
		//     //     		if(cmp.id == elId)
		//     //     		{
		//     //     			cmp.hide();
		//     //     			return false;
		//     //     		}
		//     //     	});
		//     //     }
		//     // },
		//     // mouseleave : {
		//     // 	fn : this.onMouseLeave
		//     // }  

  //       }
  		afterrender : 'afterAttachmentPanelRender'
	},
	noteId : null,
	initComponent : function()
	{

		this.callParent(arguments);

	},
	afterAttachmentPanelRender : function( cmp )
	{
		var el = cmp.getEl();
		el.on('mouseleave', this.onMouseLeave, this);
		el.on('mouseenter', this.onMouseEnter, this);
		el.on('focusleave', this.onAttachmentPanelblur, this);

		this.mouseOut = true;
	},
	onMouseEnter : function()
	{
		console.log('mouse in')
		this.mouseOut = false;
	},
	onMouseLeave : function()
	{
		console.log('mouse out')
		this.mouseOut = true;
	},
	onAttachmentPanelblur : function( panel, e )
	{
		
		if( !this.mouseOut )
			return;

		var elId = panel.parentEvent.currentTarget.id;
		var attachmentPanels = Ext.ComponentQuery.query('#attachmentPanel');
		Ext.Array.forEach( attachmentPanels, function(cmp){
			console.log(cmp.id)
			if(cmp.id == elId)
			{
				cmp.hide();
				return false;
			}
		});
	}
});