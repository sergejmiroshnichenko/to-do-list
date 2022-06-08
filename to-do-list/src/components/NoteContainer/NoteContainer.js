import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from "../NoteItem/NoteItem";
import {useSelector} from 'react-redux';


const NoteContainer = () => {

    const notes = useSelector(state => state.notes);

    if (!notes) return <p style={{ fontSize: 24, marginLeft:20 }}>You don't have any notes yet</p>;

    return (
        <ul>
            {notes && notes.map(({ text, isDone, id }, index) => <NoteItem id={id} isDone={isDone} index={index + 1} text={text} key={text} />)}
        </ul>
    )
}

NoteContainer.propTypes = {
    notes: PropTypes.array,
};
NoteContainer.defaultProps = {
    notes: null,
};

export default NoteContainer;
