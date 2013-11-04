/*global Ext:false */
Ext.application({
    launch: function () {
        Ext.create('Ext.Carousel', {
            fullscreen: true,
            defaults: {
                styleHtmlContent: true
            }, // defaults
            items: [
                {
                    html: 
					'<img src="resources/icons/fandomLOGO.png" />',
                }, {
                    html: 
					'<img src="resources/icons/fandomLOGO.png" />',
                }, {
                    html: 'yellow',
                    style: 'background-color:#ff0;'
                }, {
                    html: 'green',
                    style: 'background-color:#80ff4d;'
                }, {
                    html: 'blue',
                    style: 'background-color:#009dff;'
                }
            ] // items
        }); // create()
    } // launch
}); // application()
