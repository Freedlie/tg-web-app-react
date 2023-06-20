import React, {useEffect, useState} from 'react';

import css from './Form.module.css';
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country,setCountry] = useState('');
    const [street,setStreet] = useState('');
    const [subject,setSubject] = useState('');

    const {tg} = useTelegram();

    useEffect(()=>{
        tg.MainButton.setParams({
            text:"Submit"
        })
    },[])

    useEffect(()=>{
        if(!street && !country){
            tg.MainButton.hide();
        } else{
            tg.MainButton.show();
        }
    },[])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={css.form}>
            <h3>enter your details</h3>
            <input
                className={css.input}
                type="text"
                placeholder={'Country'}
                value={country}
                onChange={onChangeCountry}/>
            <input
                className={css.input}
                type="text"
                placeholder={'Street'}
                value={street}
                onChange={onChangeStreet}/>
            <select className={css.select} value={subject} onChange={onChangeSubject}>
                <option value={'legal'}>Legal Person</option>
                <option value={'physical'}>Physical Person</option>
            </select>
        </div>
    );
};

export default Form;