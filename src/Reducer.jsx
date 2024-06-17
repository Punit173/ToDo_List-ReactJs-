
const initialData = {
    tasks : []
}

const Reducer = (state=initialData,action) => {
    switch (action.type) {
        case 'Add_task':
            return{
                ...state,
                tasks : [...state.tasks,action.payload]
            }
        case 'Delete_task':
            console.log(action.payload);
            return{
                ...state,
                tasks : state.tasks.filter(task=>task!==action.payload) 
            }
    
        default:
            return state;
    }
}

export default Reducer;