define([
    'lodash',
    'taoQtiItem/qtiCommonRenderer/renderers/ModalFeedback',
    'taoQtiItem/qtiCreator/widgets/static/modalFeedback/Widget'
], function(_, Renderer, Widget){

    var ModalFeedback = _.clone(Renderer);

    ModalFeedback.render = function(modalFeedback, options){
        
        options = options || {};

        //make content editable
        var widget = Widget.build(
            modalFeedback,
            Renderer.getContainer(modalFeedback),
            $(),
            options
        );
                
        widget.changeState('active');
        return widget;
    };

    return ModalFeedback;
});