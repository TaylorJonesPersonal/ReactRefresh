import React from 'react';
import styles from './index.module.css';
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
    row: boolean;
}

export const CustomInputGroup: React.FC<any> = ({
    inputSet,
    row,
}: CustomInputGroupParams) => {
    return (
        <div className={row ? styles.ButtonList : styles.ButtonListVertical}>
            {inputSet.map((input: CustomInputParams, index: number) => {
                if (
                    input.type === InputTypes.BUTTON ||
                    input.type === InputTypes.SUBMIT
                ) {
                    return (
                        <input
                            key={index}
                            className="buttons"
                            type={input.type}
                            onClick={input.onClick}
                            value={input.label}
                        />
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
