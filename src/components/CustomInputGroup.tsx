import React from 'react';

export enum InputTypes {
    'text',
    'password',
    'submit',
}

export interface CustomInputGroupParams {
    labels: String[];
    type: keyof InputTypes;
}

export const CustomInputGroup: React.FC<any> = ({
    labels,
    type,
}: CustomInputGroupParams) => {
    return (
        <div>
            <input type={type} />
        </div>
    );
};
