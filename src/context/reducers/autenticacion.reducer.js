import {SET_CURRENT_USER} from '../actions/autenticacion.action'
import isEmpty from '../validations/isEmpty'



export default function(state , action ){
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload.user
            }
        default: 
            return state;
    }
}
