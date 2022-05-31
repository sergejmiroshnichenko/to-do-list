import React from 'react';
import classNames from "classnames";
import PropTypes from 'prop-types';
import styles from './NoteItem.module.scss';
// import {Button, Checkbox} from "@mui/material";
import { ReactComponent as EditSVG } from "../../assets/edit.svg";
import { ReactComponent as DeleteSVG } from "../../assets/delete.svg";
// import { ReactComponent as CheckSVG } from "../../assets/check.svg";


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
                <button className={styles.btn}><EditSVG /></button>
                <button color='error' className={styles.btn}><DeleteSVG /></button>
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


