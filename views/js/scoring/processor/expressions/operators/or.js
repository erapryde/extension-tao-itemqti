/*
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; under version 2
 * of the License (non-upgradable).
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 *
 * Copyright (c) 2015 (original work) Open Assessment Technlogies SA (under the project TAO-PRODUCT);
 *
 */

/**
 * The gt operator processor.
 * @see http://www.imsglobal.org/question/qtiv2p1/imsqti_infov2p1.html#element10639
 *
 * @author Bertrand Chevrier <bertrand@taotesting.com>
 */
define([
    'lodash',
    'taoQtiItem/scoring/processor/expressions/preprocessor'
], function(_, preProcessor){
    'use strict';

    /**
     * Process operands and returns the OR.
     * @type {OperatorProcessor}
     * @exports taoQtiItem/scoring/processor/expressions/operators/or
     */
    var orProcessor = {

        constraints : {
            minOperand : 2,
            maxOperand : 2,
            cardinality : ['single'],
            baseType : ['boolean']
        },

        operands   : [],

        /**
         * Process the lt of the operands.
         * @returns {?ProcessingValue} the subtract or null
         */
        process : function(){

            var result = {
                cardinality : 'single',
                baseType : 'boolean'
            };

            //if at least one operand is null, then break and return null
            if(_.some(this.operands, _.isNull) === true){
                return null;
            }

            result.value = preProcessor
                .parseOperands(this.operands)
                .reduce(function(f, s){
                    return f || s;
                });

            return result;
        }
    };

    return orProcessor;
});
