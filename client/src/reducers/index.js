import {combineReducers} from 'redux'
import showTovars from './tovar/showTovar'
import showFullList from './tovar/showFullList'
import showFullInfo from './tovar/showFullInfo'
import showBascet from './bascet'
import showTypes from './getType'

export default combineReducers({
    showTovar:showTovars,
    showFullList:showFullList,
    showFullInfo:showFullInfo,
    showBascet:showBascet,
    showTypes:showTypes,
})