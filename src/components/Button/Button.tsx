import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>
type ButtonType = DefaultButtonPropsType & {
    onClick: () => void

}
export const Button: React.FC<ButtonType> = (
    {
        onClick,
        id,
        disabled,
        ...restProps
    }
) => {

    return (
        <div>
            <button
                onClick={onClick}
                disabled={disabled}
                {...restProps}
            >
            </button>
        </div>
    );
};