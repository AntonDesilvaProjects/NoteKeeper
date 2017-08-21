Ext.define('NoteKeeper.view.tabs.note.EditNoteWindow', {
	extend : 'Ext.window.Window',
	requires : [
		'NoteKeeper.view.tabs.note.NoteEditor',
		'NoteKeeper.controller.tabs.note.EditNoteWindowController',
		'NoteKeeper.view.tabs.AttachmentPanel'
	],
	xtype : 'editNoteWindow',
	controller : 'editNoteWindowController',
	height : 473,
	width : 545,
	autoShow : true,
	layout : {
		type : 'vbox'
	},
	title : 'Go get Sushi',
	items : [
		{
			xtype : 'noteEditor',
			width : '100%'
		}
	],
	dockedItems : [
		{
			xtype : 'toolbar',
			dock : 'bottom',
			items : [
				{
					text : '1',
					iconCls : 'fa fa-paperclip fa-lg buttonIcon',
					handler : 'onAttachmentBtnClick'
					// handler : function( btn,e, Eopts)
					// {
					// 	var a  = Ext.widget('panel', {
					// 		height : 100,
					// 		width : 100,
					// 		floating : true,
					// 		x : btn.getX(),
					// 		y : btn.getY() + btn.getHeight(),
					// 		focusable : true,
					// 		// items : [
					// 		// 	{
					// 		// 		xtype : 'button',
					// 		// 		text : 'hey'
					// 		// 	}
					// 		// ],
					// 		listeners : {
					// 			el: {
					//                 blur: {
					//                     fn: function(){
					//                     	a.hide();
					//                     },
					//                 }
     //      						}           
					// 		}
					// 	});
					// 	a.show();
					// }
				}
			]
		}
	],
	intiComponent : function()
	{
		this.callParent(arguments);
	}
});