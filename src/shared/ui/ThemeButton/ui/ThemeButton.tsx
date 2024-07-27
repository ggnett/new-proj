import { useContext } from 'react';

import cn from 'classnames';
// import { ThemeContext } from 'app/provaiders/themeprovaider/index';
import { ThemeContext } from '../../../../app/provaiders/themeprovaider/ui/theme.context';
import Moon from 'shared/icons/moon 40x40.svg';
import Sun from 'shared/icons/sun 40x40.svg';
import style from './ThemeButton.module.css';
// import './ThemeButton.css'

export function ThemeButton({children ='', themeB=''}) {
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
        <button type="button" className={cn(style.butTheme) +" "+ themeB} onClick={togleTheme}>
            {theme === 'light' ? <Sun /> : <Moon />}
        </button>
    );
}
