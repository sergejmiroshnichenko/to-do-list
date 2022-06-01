import { ADD_NOTE } from '../actions/notesAction'

export const addNote = (value) => ({ type: ADD_NOTE, payload: value });