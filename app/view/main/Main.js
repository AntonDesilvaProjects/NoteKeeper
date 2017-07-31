Ext.define('NoteKeeper.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'NoteKeeper.view.main.MainController',
        'NoteKeeper.view.main.MainModel',
        'NoteKeeper.view.NavigationPanel',
        'NoteKeeper.store.NavigationStore',
        'NoteKeeper.view.ContentPanel',
        'NoteKeeper.view.MainContainer',
        'NoteKeeper.view.SearchBar',
        'NoteKeeper.view.UserInfo'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'vbox',
        align : 'stretch'
    },
    
    items : [
        {
            xtype : 'toolbar',
            items : [
                {
                   xtype : 'container',
                   cls : 'header-main-logo-container',
                   html : '<div class="header-main-title"><img class="header-main-logo" src="resources/notekeeper_logo.png"/>NoteKeeper</div>',
                   width : 200
                },
                {
                    xtype : 'searchBar',
                    margin : '0 0 0 150'
                },
                {
                    xtype : 'userInfo',
                    margin : '0 0 0 140'
                }
            ]
        },
        {
            xtype : 'toolbar',
            items : [
                {
                    xtype : 'button',
                    text : 'New'
                }
            ]
        },
        {
            xtype : 'mainContainer',
            items: [
                {
                    xtype : 'navigationPanel',
                    store : Ext.create('NoteKeeper.store.NavigationStore'),
                    itemId : 'navPanel',
                    reference : 'navPanel'
                },
                {
                    xtype : 'contentPanel',
                    itemId : 'contentPanel',
                    reference : 'contentPanel'
                }
            ]
        }
    ]
});
