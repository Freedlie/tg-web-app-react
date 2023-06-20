import React from 'react';

import css from './Header.module.css';
import Button from "../Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Header = () => {
    const {user,OnClose} = useTelegram();

    return (
        <div className={css.header}>
            <Button onClick={OnClose}>Close</Button>
            <span className={css.username}>{user}</span>
        </div>
    );
};

export default Header;