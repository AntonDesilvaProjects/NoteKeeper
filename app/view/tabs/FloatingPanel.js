/*
	Inhertiable class representing a floating panel with added
	ability accurately detect when it looses focus and hide.
*/
// Ext.define('NoteKeeper.view.tabs.FloatingPanel',{
// 	extend : 'Ext.panel.Panel',
// 	alias : 'widget.floatingPanel',
// 	floating : true,
// 	focusable : true,
// 	defaultListenerScope : true, //Listeners will automatically scope to this class
// 	bodycls : 'floatingPanel',
// 	listeners : {
// 		afterrender : 'afterFloatingPanelRender'
// 	},
// 	initComponent : function()
// 	{
// 		this.callParent( arguments );
// 	},
// 	/*
// 		After the panel renders, grab its el and attach the mouseleave/enter + focusleave 
// 		events. These events do not work correct if attached directly to the panel.
// 	*/
// 	afterFloatingPanelRender : function( cmp )
// 	{
// 		var el = cmp.getEl();
// 		el.on('mouseleave', this.onMouseLeave, this);
// 		el.on('mouseenter', this.onMouseEnter, this);
// 		el.on('blur', this.onFloatingPanelBlur, this);

// 		this.mouseOut = true;
// 	},
// 	/*
// 		Detect when the mouse enters the floating panel.
// 	*/
// 	onMouseEnter : function()
// 	{
// 		console.info('mouse in')
// 		this.mouseOut = false;
// 	},
// 	/*
// 		Detect when the mouse leaves the floating panel.
// 	*/
// 	onMouseLeave : function()
// 	{
// 		console.info('mouse out')
// 		this.mouseOut = true;
// 	},
// 	/*
// 		When the panel's el blurs(looses focus; this could be due to mouse being clicked
// 		outside the panel or on a component inside the panel!), check if the mouse is still
// 		inside the panel. If so, veto the blur. Otherwise, hide the panel.
// 	*/
// 	onFloatingPanelBlur : function( panel, e )
// 	{
// 		if( !this.mouseOut )
// 			return;

// 		//Hide only the correct panel.
// 		var elId = panel.parentEvent.currentTarget.id;
// 		var floatingPanels = Ext.ComponentQuery.query('floatingPanel');

// 		Ext.Array.forEach( floatingPanels, function(cmp){
// 			console.info(cmp.id)
// 			if(cmp.id == elId)
// 			{
// 				cmp.hide();
// 				return false;
// 			}
// 		});
// 	}
// });

//An alternate(incomplete) implementation of a Floating Panel
//that determines whether to hide the floating panel based on
//clicked location's CSS class
Ext.define('NoteKeeper.view.tabs.FloatingPanel',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.floatingPanel',
	floating : true,
	closeAction : 'hide',
	closable : false,
	defaultListenerScope : true,
	componentCls : 'floatingPanel',
	listeners : {
		show : 'onShow',
		hide : 'onHide'
	},
	initComponent : function()
	{
		this.callParent( arguments );
	},
	onShow : function( panel, eOpts )
	{
		this.callParent( arguments );
		if( !this.mouseDownAttached )
		{
			Ext.getDoc().on('mousedown', this.onMouseDown, this);
			this.mouseDownAttached = true;
		}
	},
	onHide : function( panel, eOpts )
	{
		this.callParent( arguments );
		//When hiding the panel, remove the mousedown event
		if( this.mouseDownAttached )
		{
			Ext.getDoc().un('mousedown', this.onMouseDown, this);
			this.mouseDownAttached = false;
		}
	},
	onMouseDown : function( e, t, eOpts )
	{
		/*
			Check if the clicked region is part of the floating panel by seeing if one of the below classes are 
			present:
				floatingPanel - used for the actual floating panel

				floatingPanelComponent - used for any component within the floating panel that may create its
				own floating containers(i.e. combo boxes, date pickers, etc). We don't want the floating panel to
				hide if user clicks on these smaller floating panels.

			If the clicked region does not have either class, hide the floating panel.
		*/
		if( Ext.isEmpty( Ext.get(t).up('div[class*=floatingPanel],div[class*=floatingPanelComponent]') ) )
		{
			this.close(); //This will remove the mousedown event as well
		}
	}	
});
