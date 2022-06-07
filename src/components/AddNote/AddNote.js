import React, {useState} from 'react';
import styles from './AddNote.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import {useDispatch} from 'react-redux';
import {addNote} from '../../store/actionCreators/noteAC';



const AddNote = () => {

    const dispatch = useDispatch();
    const [value, setValue] = useState();

    return (
        <>
            <div className={styles.root}>

                <input
                    type='text'
                    placeholder='Your note'
                    value={value}
                    onChange={(event) => {setValue(event.target.value)}}
                    className={styles.input}
                />
                <Button onClick={() => {
                    dispatch(addNote(value));
                    setValue('');
                }} className={styles.btn} type="button" variant="btn btn-primary">Add Note</Button>

            </div>
            <div className={styles.line} />
        </>
    )
}

export default AddNote;
