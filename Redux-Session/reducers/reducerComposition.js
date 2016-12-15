/*function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
        {
            text: action.text,
                completed: false
        }
        ]
    })
case TOGGLE_TODO:
        return Object.assign({}, state, {
            todos: state.todos.map((todo, index) => {
                if(index === action.index) {
        return Object.assign({}, todo, {
            completed: !todo.completed
        })
    }
    return todo
})
})
default:
return state
}
}*/



/*
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
            {
                text: action.text,
                completed: false
            }
        ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                    if (index === action.index) {
            return Object.assign({}, todo, {
                completed: !todo.completed
            })
        }
            return todo
    })
default:
    return state
}
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            })
        case ADD_TODO:
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: todos(state.todos, action)
            })
        default:
            return state
    }
}*/


*
 function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

 function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

 function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

// combine Reducers
 import { combineReducers } from 'redux'

 const todoApp = combineReducers({
 visibilityFilter,
 todos
 })

 export default todoApp
