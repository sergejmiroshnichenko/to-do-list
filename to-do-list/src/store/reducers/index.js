import {ADD_NOTE, TOGGLE_ISDONE} from "../actions/notesAction";

const initialState = {
    notes : []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {...state, notes : [...state.notes, {
                text: action.payload,
                isDone: false,
                id: Math.random()
                }]}
        case TOGGLE_ISDONE:{
            console.log(action.payload);
            const tempNotes = [...state.notes];
            const currentIndex = tempNotes.findIndex((item) => item.id === action.payload);
            tempNotes[currentIndex].isDone = !tempNotes[currentIndex].isDone;
            return {...state, notes: tempNotes};
        }
        default: return state;
    }
}

export default reducer;