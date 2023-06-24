import React from 'react';
import './DisplayCounter.css'
import {CounterButtomType} from "../../../redax/redax";
import {Button} from "../../Button/Button";
import {NavLink} from "react-router-dom";

type ArrayCounteryType = {
    arrayCounter: CounterButtomType
    onClickIncreseValue: () => void
    onClickResetValue: () => void
    onClickSetValue:()=> void
    state: number
    collorAlarm: boolean
}
export const DisplayCounter = (props: ArrayCounteryType) => {
    let allarm = props.collorAlarm ? 'red' : ''
    const onClickIncrese = () => {
        props.onClickIncreseValue()
    }
    const onClickSet = () => {
        props.onClickSetValue()
    }
    const onClickReset = () => {
        props.onClickResetValue()
    }
    return (
        <div className={'screen'}>
            <div className={'screen__wrapper'}>
                <div className={`screen__counter ${allarm}`}>{props.state}</div>
            </div>
            <div className={'screen__button__wrapper'}>
                <div>
                    <Button className={'button'} disabled={props.arrayCounter.counterButtomIncrese.disable} onClick={onClickIncrese}>
                        {props.arrayCounter.counterButtomIncrese.title}
                    </Button>
                </div>
                <div>
                    <Button className={'button'} disabled={props.arrayCounter.counterButtomReset.disable} onClick={onClickReset}>
                        {props.arrayCounter.counterButtomReset.title}
                    </Button>
                </div>
                <div>
                    <NavLink to={'/input'}>
                        <Button className={'button'} disabled={props.arrayCounter.counterButtomSet.disable} onClick={onClickSet}>
                            {props.arrayCounter.counterButtomSet.title}
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};