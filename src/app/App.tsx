import { Suspense, useContext, useState } from 'react';
import './Styles/index.css';
import { ThemeContext } from 'app/provaiders/themeprovaider/index';
import cn from 'classnames';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { AppRouter } from './provaiders/router';

export default function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={cn('app', theme)}>
            <Navbar />
            <div className="content-page">
                <SideBar />
                <AppRouter />
            </div>
        </div>
    );
}
