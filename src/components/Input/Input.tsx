import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>

type InputType = DefaultInputPropsType & {
    onChangeText: (value: string) => void

}
export const Input: React.FC<InputType> = (
    {
        onChangeText,
        id,
        value,
        ...restProps
    }
) => {
    const onChangValue = (e:ChangeEvent<HTMLInputElement>) => {
        onChangeText(e.currentTarget.value);
    }
    return (
        <div>
           <input
               id={id}
               type={"number"}
               value={value}
               onChange={onChangValue}
               {...restProps}
           />
        </div>
    );
};

