import React, { useState } from 'react';

import cn from 'classnames';
import { ThemeButton } from 'shared/ui/ThemeButton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import MainIcon from 'shared/icons/mainIcon32x32.svg';
import ListIcon from 'shared/icons/listIcon32x32.svg';
import style from './SideBar.module.css';

export function SideBar() {
    const [closed, setClosed] = useState(false);

    const toogle = () => {
        setClosed((prev) => !prev);
    };
    return (
        <div data-testid="sidebar" className={cn(style.sideBar, { [style.closed]: closed })}>
            <button className={cn(style.btnHide)} data-testid="sidebar-toogle" type="button" onClick={toogle}>
                {closed ? '>' : '<'}
            </button>

            <div className={cn(style.links)}>
                <AppLink to="/" className={cn(style.linksRoute)}>
                    <MainIcon />
                    <span className={cn({ [style.linkHiden]: closed })}>
                        Главная
                    </span>
                </AppLink>
                <AppLink to="/about" className={cn(style.linksRoute)}>
                    <ListIcon />
                    <span className={cn({ [style.linkHiden]: closed })}>
                        О сайте
                    </span>
                </AppLink>
            </div>

            <ThemeButton />
        </div>
    );
}
