import { AboutPage } from 'Pages/AboutPage';
import { MainPage } from 'Pages/MainPage';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routsConfig/routsConfig';

export default function AppRouter() {
    return (
        <Suspense fallback={<div className="fallback">Loading....</div>}>
            <Routes>
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
}
