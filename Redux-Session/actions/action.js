/*// simple action object
{
    type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
}*/
//bound action creator that automatically dispatches
var boundAddTodo = function boundAddTodo(text) {
    return dispatch(addTodo(text));
};
