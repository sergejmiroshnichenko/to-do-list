import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from "../NoteItem/NoteItem";


const NoteContainer = ({ notes }) => {


    console.log('notes', notes)

    if (!notes) return <p style={{ fontSize: 24, marginLeft:20 }}>You don't have any notes yet</p>;

    return (
        <ul>
            {notes && notes.map(({ text }, index) => <NoteItem index={index + 1} text={text} />)}
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
