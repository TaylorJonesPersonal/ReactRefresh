import React from 'react';

export const Avatar: React.FC<any> = () => (
    <img
        src={require('../../assets/images/MaleAvatar.jpeg')}
        style={{ maxHeight: 200, maxWidth: 200 }}
    />
);
