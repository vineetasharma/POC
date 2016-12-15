// sample of Reducer
import { VisibilityFilters } from './actions'

const initialState = {
    visibilityFilter: 'SHOW_ALL',
    todos: []
}

/*// just returns the state;
function todoApp(state, action) {
    if (typeof state === 'undefined') {
        return initialState
    }

    // For now, don’t handle any actions
    // and just return the state given to us.
    return state
}*/

// calculating new state on the basis of state and action
function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        default:
            return state
    }
}
