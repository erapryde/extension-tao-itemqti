define([
    'lodash',
    'taoQtiItem/qtiItem/core/Element',
    'taoQtiItem/qtiCreator/model/mixin/editable',
    'taoQtiItem/qtiCreator/model/mixin/editableInteraction',
    'taoQtiItem/qtiItem/core/interactions/MatchInteraction',
    'taoQtiItem/qtiCreator/model/choices/SimpleAssociableChoice',
    'taoQtiItem/qtiCreator/model/helper/event'
], function(_, Element, editable, editableInteraction, Interaction, Choice, event){
    var methods = {};
    _.extend(methods, editable);
    _.extend(methods, editableInteraction);
    _.extend(methods, {
        getDefaultAttributes : function(){
            return {
                'shuffle' : false,
                'maxAssociations' : 0,
                'minAssociations' : 0
            };
        },
        afterCreate : function(){
            this.createChoice();
            this.createChoice();
            this.createResponse({
                baseType:'directedPair',
                cardinality:'multiple'
            });
        },
        createChoice : function(matchSet, attr){
        
            var choice = new Choice('', attr);
            
            this.addChoice(choice, matchSet);
            
            var rank = _.size(this.getChoices(matchSet));
            
            choice
                .body('choice' + ' #' + rank)
                .buildIdentifier('choice');
            
            if(this.getRenderer()){
                choice.setRenderer(this.getRenderer());
            }
            
            event.choiceCreated(choice, this);
            
            return choice;
        },
        removeChoice : function(choice){
            
            var serial = '', c;
            
            if(typeof(choice) === 'string'){
                serial = choice;
            }else if(Element.isA('choice')){
                serial = choice.getSerial();
            }
            
            c = this.choices[0][serial] || this.choices[1][serial] || null;
            if(c){
                delete this.choices[0][serial];
                delete this.choices[1][serial];
                event.deleted(c, this);
            }
            
            return this;
        }
    });
    return Interaction.extend(methods);
});

