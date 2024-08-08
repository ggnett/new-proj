import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/provaiders/ErrorBoundary';
import { App } from './app/App';
import { ThemeProvider } from './app/provaiders/themeprovaider/ui/theme.context';
import './app/Styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
        {/* eslint-disable-next-line comma-dangle */}
    </BrowserRouter>
);
