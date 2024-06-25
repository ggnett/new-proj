import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cn from 'classnames';
import * as style from './AppLink.module.css';

export function AppLink({ children, to, className }: { children: React.ReactNode; to: NavLinkProps['to']; className: string }) {
    return (
        <NavLink to={to} className={cn(style.AppLink, className)}>
            {children}
        </NavLink>
    );
}
