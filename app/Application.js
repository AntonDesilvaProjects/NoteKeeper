/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
var theApp = Ext.define('NoteKeeper.Application', {
    extend: 'Ext.app.Application',
    
    name: 'NoteKeeper',

    stores: [
    ],
    
    init: function() 
    {

    },

    launch: function () 
    {
    	//Create an instance of the Login Window

    }
});
