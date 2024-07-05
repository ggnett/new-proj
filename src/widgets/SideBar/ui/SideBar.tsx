import React, { useState } from 'react';

import cn from 'classnames';
import { ThemeButton } from 'shared/ui/ThemeButton';
import * as style from './SideBar.module.css';

export function SideBar() {
    const [closed, setClosed] = useState(false);

    const toogle = () => {
        setClosed((prev) => !prev);
    };
    return (
        <div data-testid="sidebar" className={cn(style.sideBar, { [style.closed]: closed })}>
            <button data-testid="sidebar-toogle" type="button" onClick={toogle}>
                asd
            </button>
            <ThemeButton />
        </div>
    );
}
