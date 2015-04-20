define([
    'jquery',
    'lodash', 
    'taoQtiItem/qtiItem/helper/simpleParser',
    'taoQtiItem/qtiItem/core/Loader'
], function($, _, simpleParser, Loader){

    function load(xinclude, baseUrl, callback){

        var href = xinclude.attr('href');
        if(href && baseUrl){

            //require xml :
            require(['text!' + baseUrl + href], function(stimulusXml){

                var $wrapper = $('<div>').html(stimulusXml);
                var $sampleXMLrootNode = $wrapper.children();
                var $stimulus = $('<include>').append($sampleXMLrootNode);
                var mathNs = 'm';//for 'http://www.w3.org/1998/Math/MathML'
                var data = simpleParser.parse($stimulus, {
                    ns : {
                        math : mathNs
                    }
                });

                (new Loader()).loadElement(xinclude, data, function(){
                    if(_.isFunction(callback)){
                        callback(xinclude, data, this.getLoadedClasses());
                    }
                });

            });

        }
    }

    return {
        load : load
    };

});