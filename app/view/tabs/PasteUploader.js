Ext.define('NoteKeeper.view.tabs.PasteUploader',{
	extend : 'Ext.container.Container',
	alias : 'widget.pasteUploader',
	width : 400,
	height : 100,
	initComponent : function()
	{
		var me = this;
		Ext.define('Override.form.field.VTypes', {
		    override: 'Ext.form.field.VTypes',

		    // vtype validation function
		    htmlImage: function(value) {
		        return this.htmlImageRe.test(value);
		    },
		    // RegExp for the value to be tested against within the validation function
		    htmlImageRe: /<img[^>]+src="([^">]+)".*>/g,
		    // vtype Text property: The error text to display when the validation function returns false
		    htmlImageText: 'Not a valid time.  Must be in the format "12:34 PM".'
		});

		//<img[^>]+src="([^">]+)".*>
		var htmlEditor = Ext.widget('htmleditor',{
			itemId : 'htmlEditor',
			scrollable : false,
			readOnly : false,
			listeners : {
				afterrender : function( editor )
				{
					editor.getToolbar().hide();
				},
				change : function( editor, newValue, oldValue, eOpts )
				{
					//console.log( newValue );
				},
				initialize : function( editor )
				{
					editor.getEditorBody().onpaste = function( event )
					{
						//console.log( event );
					}
				},
				beforesync : function( editor, html, eOpts )
				{
					//console.log( editor );
					//console.log( html );
					//console.log( eOpts );
					// /return false;
				}
			}
		});
		var btn = Ext.widget('button',{
			handler : function() {
				//var matches = ( htmlEditor.getValue().toString().match(/<img[^>]+src="([^">]+)"/g) || [] );
				//console.log( htmlEditor.getValue().toString() );
				//console.log( htmlEditor.getValue().toString().match(/<img[^>]+src="([^">]+)"/g).length );
				var imageElements = htmlEditor.getEditorBody().getElementsByTagName('img');
				console.log( imageElements );
				if( imageElements.length === 0 )
					Ext.Msg.alert("Invalid Input", "Please paste only images!");
				else
				{
					me.extractAndSendImages( imageElements );
					//var base64Encodings = me.getBase64ImageEncoding( imageElements );
					//console.log( base64Encodings );
				}
			}
		});

		this.items = [
			htmlEditor,
			btn
		];
		this.callParent( arguments );
	},
	extractAndSendImages : function( imageElementArr )
	{
		this.imageEncodings = [];
		var imageTag = undefined;
		for( var k = 0; k < imageElementArr.length; k++)
		{ 
			imageTag = imageElementArr[k];
			imageSrc = imageTag.src;
			if( imageSrc && imageSrc.indexOf('base64') === -1 )
			{
				this.getBase64EncodedImage( imageTag, this.imageEncodings, imageElementArr.length, this.sendImages );
			}
			else
			{
				this.imageEncodings.push( imageSrc.split(',')[1] );
			}
		}

		if( this.imageEncodings.length === imageElementArr.length )
			this.sendImages( this.imageEncodings, 'http://localhost:8080/upload/imageUpload');
	},
	getBase64ImageEncoding : function( imageElementArr )
	{
		// var imageEncodings = [];
		// var imageTag = undefined;
		// for( var k = 0; k < imageElementArr.length; k++)
		// { 
		// 	imageTag = imageElementArr[k];
		// 	imageSrc = imageTag.src;
		// 	if( imageSrc && imageSrc.indexOf('base64') === -1 )
		// 	{
		// 		imageEncodings.push( this.getEncodedImage(imageTag) );
		// 	}
		// 	else
		// 	{
		// 		imageEncodings.push( imageSrc.split(',')[1] );
		// 	}
		// }
		// return imageEncodings;
	},
	getBase64EncodedImage : function( image, imageEncodings, numOfImages, callbackFn )
	{
		if( image )
		{
			var remoteImage = new Image();
			remoteImage.crossOrigin = 'Anonymous';
			remoteImage.onerror = function(e)
			{
				console.log('failed to fetch image')
				numOfImages--;
				if( imageEncodings.length === numOfImages )
					callbackFn( imageEncodings, 'http://localhost:8080/upload/imageUpload' );
			}
			remoteImage.onload = function()
			{
				var canvas = document.createElement( 'canvas' );
				var context = canvas.getContext('2d');
				canvas.height = this.naturalHeight;
    			canvas.width = this.naturalWidth;
				context.drawImage( this, 10, 10 );
				var dataURL = canvas.toDataURL();
				var encoding = dataURL.split(',')[1];
				imageEncodings.push( encoding );
				if( imageEncodings.length === numOfImages )
					callbackFn( imageEncodings, 'http://localhost:8080/upload/imageUpload' );
			}
			remoteImage.src = image.src;
			if (remoteImage.complete || remoteImage.complete === undefined) {
			    remoteImage.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
			    remoteImage.src = image.src;
			}
		}
	},
	sendImages : function( imageEncodings, url)
	{
		if( imageEncodings.length > 0 )
		{
			var dataObj = {};
			dataObj[ "encodingType" ] = 'base64';
			dataObj[ "encodings" ] = imageEncodings;
			console.log( dataObj );

			Ext.Ajax.request({
				method : 'POST',
				url : url,
				jsonData : dataObj,
				headers : {
					'Content-Type' : 'application/json'
				},
				success : function() {
					alert('succeeded')
				},
				failure : function() {
					alert('failed')
				}
			});
		}
	}
});