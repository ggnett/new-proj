import cn from 'classnames';

import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeButton } from 'shared/ui/ThemeButton';
import * as style from './Navbar.module.css';

export function Navbar() {
    return (
        <div className={cn(style.navbar)}>
            <div className={cn(style.links)}>
                <AppLink to="/" className={cn(style.mainLink)}>
                    Главная
                </AppLink>
                <AppLink to="/about" className="">
                    О сайте
                </AppLink>
            </div>
        </div>
    );
}
