import React from 'react';
import '../../App.module.css';

export enum InputTypes {
    TEXT = 'text',
    PASSWORD = 'password',
    SUBMIT = 'submit',
    BUTTON = 'button',
}

export interface CustomInputParams {
    label: string;
    type: InputTypes;
    onClick?: () => void;
}

export interface CustomInputGroupParams {
    inputSet: CustomInputParams[];
}

export const CustomInputGroup: React.FC<any> = ({
    inputSet,
}: CustomInputGroupParams) => {
    return (
        <div>
            {inputSet.map((input: CustomInputParams) => {
                if (
                    input.type === InputTypes.BUTTON ||
                    input.type === InputTypes.SUBMIT
                ) {
                    return (
                        <>
                            <input
                                type={input.type}
                                onClick={input.onClick}
                                value={input.label}
                            />
                        </>
                    );
                } else {
                    return (
                        <>
                            <label className="labels">{input.label}</label>
                            <input type={input.type} onClick={input.onClick} />
                        </>
                    );
                }
            })}
        </div>
    );
};
