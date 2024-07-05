import { useContext } from 'react';

import cn from 'classnames';
// import { ThemeContext } from 'app/provaiders/themeprovaider/index';
import { ThemeContext } from '../../../../app/provaiders/themeprovaider/ui/theme.context';
import Moon from '../../../icons/moon 40x40.svg';
import Sun from '../../../icons/sun 40x40.svg';
import * as style from './ThemeButton.module.css';

export function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext);

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
