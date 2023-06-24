
export const arrayCounter:ArrayCounterType = {
    counter: {
        counterButtomIncrese: {title: 'Increse',disable: false},
        counterButtomReset:{title:'Reset',disable:false},
        counterButtomSet:{title:'Set',disable:false},
    },
    counterInputArray: {
        counterInputStart: {value:0},
        counterInputEnd: {value: 5},
        counterInputButtonSet: {title: 'Set', disable: false}
    },
    collorAlarm: false,
    errorCollorStart: false,
    errorCollorEnd:false
}

export type ArrayCounterType = {
    counter: CounterButtomType,
    counterInputArray: CounterInpuArraytType
    collorAlarm: boolean
    errorCollorStart: boolean
    errorCollorEnd: boolean
}

export type CounterInpuArraytType = {
    counterInputStart: {value:number},
    counterInputEnd: {value: number},
    counterInputButtonSet: {title: string, disable: boolean}
}
export type CounterButtomType = {
    counterButtomIncrese:{title:string,disable:boolean}
    counterButtomReset:{title:string,disable:boolean}
    counterButtomSet:{title:string,disable:boolean}
}