import {ADD_NOTE} from "../actions/notesAction";

const initialState = {
    notes : []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {...state, notes : [...state.notes, action.payload]}
        default: return state;
    }
}

export default reducer;