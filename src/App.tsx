import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";
import {arrayCounter} from "./redax/redax";
import {DisplayCounter} from "./components/Counter/DIsplayCounter/DisplayCounter";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {start} from "repl";

function App() {
    const [state, setState] = useState(arrayCounter.counterInputArray.counterInputStart.value)
    const [start, setStart] = useState(arrayCounter.counterInputArray.counterInputStart.value)
    const [end, setEnd] = useState(arrayCounter.counterInputArray.counterInputEnd.value)
    const onChangeValueStart = (value: string) => {
        let valueNum = +value
        setStart(valueNum)
        valueNum >= end || valueNum < 0 ? arrayCounter.counterInputArray.counterInputButtonSet.disable = true : arrayCounter.counterInputArray.counterInputButtonSet.disable = false
        valueNum < 0 ? arrayCounter.errorCollorStart = true : arrayCounter.errorCollorStart = false
    }
    const onChangeValueEnd = (value: string) => {
        let valueNum = +value
        setEnd(valueNum)
        valueNum <= start || valueNum < 0 ? arrayCounter.counterInputArray.counterInputButtonSet.disable = true : arrayCounter.counterInputArray.counterInputButtonSet.disable = false
        valueNum < 0 ? arrayCounter.errorCollorEnd = true : arrayCounter.errorCollorEnd = false
    }
    const onClickIncreseValue = () => {
        let value = state;
        if (value === end - 1) {
            arrayCounter.counter.counterButtomIncrese.disable = true
            arrayCounter.collorAlarm = true
        }
        value = state + 1
        setState(value)
    }
    const onClickResetValue = () => {
        setState(start)
        arrayCounter.collorAlarm = false
        arrayCounter.counter.counterButtomIncrese.disable = false
    }
    const onClickSetValue = () => {
        setState(start)
        localStorege()
    }
    const onClickSetValue1 = () => {
        onClickResetValue()
    }
    const localStorege = () => {
        const startString = JSON.stringify(start)
        const endString = JSON.stringify(end)
        localStorage.setItem('start', startString)
        localStorage.setItem('end', endString)
    }

    useEffect(() => {
        const startFromLocalStoreg = localStorage.getItem('start')
        const endFromLocalStoreg = localStorage.getItem('end')

        if (startFromLocalStoreg !== null && endFromLocalStoreg !== null) {
            let startFromLocalStoregParsen = JSON.parse(startFromLocalStoreg)
            let endFromLocalStoregParsen = JSON.parse(endFromLocalStoreg)
            setStart(startFromLocalStoregParsen)
            setState(startFromLocalStoregParsen)
            setEnd(endFromLocalStoregParsen)
        }
    },[])

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path={'/'} element={
                        <Counter start={start} end={end} arrayCounter={arrayCounter.counterInputArray}
                                 onClick={onClickSetValue}
                                 onChangeValueStart={onChangeValueStart} onChangeValueEnd={onChangeValueEnd}
                                 errorCollorStart={arrayCounter.errorCollorStart}
                                 errorCollorEnd={arrayCounter.errorCollorEnd}/>
                    }/>
                    <Route path='/input' element={
                        <Counter start={start} end={end} arrayCounter={arrayCounter.counterInputArray}
                                 onClick={onClickSetValue}
                                 onChangeValueStart={onChangeValueStart} onChangeValueEnd={onChangeValueEnd}
                                 errorCollorStart={arrayCounter.errorCollorStart}
                                 errorCollorEnd={arrayCounter.errorCollorEnd}/>
                    }/>
                    <Route path='/counter' element={
                        <DisplayCounter arrayCounter={arrayCounter.counter} state={state}
                                        onClickIncreseValue={onClickIncreseValue} onClickResetValue={onClickResetValue}
                                        collorAlarm={arrayCounter.collorAlarm} onClickSetValue={onClickSetValue1}/>
                    }/>
                </Routes>
            </div>
        </BrowserRouter>

    );
}

export default App;
