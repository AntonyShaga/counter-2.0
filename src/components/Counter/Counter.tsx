import React from 'react';
import "./Counter.css"
import {CounterInpuArraytType} from "../../redax/redax";
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";

type ArrayCounterxType = {
    arrayCounter: CounterInpuArraytType
    onChangeValueStart: (value: string) => void
    onChangeValueEnd: (value: string) => void
    onClick: () => void
    start: number
    end: number
    errorCollorStart: boolean
    errorCollorEnd: boolean
}

export const Counter = (props: ArrayCounterxType) => {
    let errorCollorStart = props.errorCollorStart ? 'errorRed' : 'input__color'
    let errorCollorEnd = props.errorCollorEnd ? 'errorRed' : 'input__color'
    const onChangeStart = (value: string) => {
        props.onChangeValueStart(value)
    }
    const onChangeEnd = (value: string) => {
        props.onChangeValueEnd(value)
    }
    const onClick = () => {
        props.onClick()
    }

    return (
        <div className={'screen'}>
            <div className={'screen__wrapper'}>
                <div className={'screen__counter__input'}>
                    <span>{'Start Value :'}</span>
                    <Input className={`input ${errorCollorStart}`}  value={props.start} onChangeText={onChangeStart}/>
                </div>
                <div className={'screen__counter__input'}>
                    <span>{'Max Value :'}</span>
                    <Input className={`input ${errorCollorEnd}`} value={props.end} onChangeText={onChangeEnd}/>
                </div>
            </div>
            <div className={'screen__button__wrapper'}>
                <NavLink to={'/counter'}>
                    <Button className={'button'} disabled={props.arrayCounter.counterInputButtonSet.disable} onClick={onClick}>
                        {props.arrayCounter.counterInputButtonSet.title}
                    </Button>
                </NavLink>
            </div>
        </div>
    );
};