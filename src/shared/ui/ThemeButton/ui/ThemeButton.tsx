import React, { useContext, useEffect } from 'react';
import Sun from 'shared/icons/sun 40x40.svg';
import Moon from 'shared/icons/moon 40x40.svg';

import { ThemeContext } from 'app/provaiders/themeprovaider';
import cn from 'classnames';
import * as style from './ThemeButton.module.css';

export function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

    useEffect(() => {
        throw new Error();
    }, [theme]);

    const togleTheme = () => {
        if (theme === 'light') {
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        } else {
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }
    };

    return (
        <button type="button" className={cn(style.butTheme)} onClick={togleTheme}>
            {theme === 'light' ? <Sun /> : <Moon />}
        </button>
    );
}
