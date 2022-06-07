import { ADD_NOTE, TOGGLE_ISDONE } from '../actions/notesAction'

export const addNote = (value) => ({ type: ADD_NOTE, payload: value });
export const toggleIsDone = (id) => ({ type: TOGGLE_ISDONE, payload: id})