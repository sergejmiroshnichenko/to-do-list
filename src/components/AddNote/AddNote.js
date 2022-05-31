import React from 'react';
import styles from './AddNote.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";



const AddNote = () => {

    return (
        <>
            <div className={styles.root}>
                <input
                    type='text'
                    placeholder='Your note'
                    className={styles.input}
                />
                <Button className={styles.btn} type="button" variant="btn btn-outline-primary">Add Note</Button>

            </div>
            <div className={styles.line} />
        </>
    )
}

export default AddNote;
