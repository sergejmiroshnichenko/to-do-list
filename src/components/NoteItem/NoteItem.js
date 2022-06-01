import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import styles from './NoteItem.module.scss';
// import {Button, Checkbox} from "@mui/material";
import { ReactComponent as EditSVG } from "../../assets/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";
// import { ReactComponent as CheckSVG } from "../../assets/check.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";


const NoteItem = ({index, text}) => {

    const isDone = false;

    return (
        <li className={classNames(styles.root, { [styles.rootDone]: isDone })}>
            <div className={styles.wrapper}>
                <checkbox className={styles.checkbox} />
                <span>{index}.</span>
                <p className={classNames({ [styles.done]: isDone })}>{text}</p>
            </div>

            <div className={styles.wrapper}>
                <Button className={styles.btn} type="button" variant="btn btn-primary"><EditSVG /></Button>
                <Button color='error' className={styles.btn} type="button" variant="btn btn-danger"><DeleteSVG /></Button>
            </div>
        </li>
    )
}

NoteItem.propTypes = {
    index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    text: PropTypes.string,
};
NoteItem.defaultProps = {
    text: '',
};

export default NoteItem;


