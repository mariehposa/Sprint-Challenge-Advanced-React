import React, { useEffect } from 'react';
import {LocalStorage} from './LocalStorage';

export const DarkMode = () => {
    const [darkValue, setDarkValue] = LocalStorage('value', false);

    useEffect(() => {
        if (darkValue) {
            document.querySelector('body').classList.add('dark-mode')
        }
        else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [darkValue]);

    return [darkValue, setDarkValue];
}