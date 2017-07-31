Ext.define('NoteKeeper.view.UserInfo',{
	extend : 'Ext.container.Container',
	xtype : 'userInfo',
	layout : 'hbox',
	items : [
		{
			xtype : 'tbtext',
			text : 'Shamal Desilva',
			reference : 'userName',
			padding : '15 5 0 0' 
		},
		{
			xtype : 'image',
			name : 'btnProfile',
			reference : 'btnProfile',
			src : "resources/shamal_desilva.jpg",
			height : 55,
			width : 50,
			cls : 'profile-img',
			listeners : {
				afterrender : function( c )
				{
					c.el.on('click', function(){ alert('clicked!'); });
				}
			}
		}
	],
	initComponent : function()
	{
		this.callParent( arguments );
	} 
});