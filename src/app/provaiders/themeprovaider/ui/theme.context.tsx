// eslint-disable-next-line object-curly-newline
import { createContext, useMemo, useState } from 'react';

const themeLocal = localStorage.getItem('theme') || 'light';

export const ThemeContext = createContext({
    theme: 'light',
    setTheme: (theme: string) => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState(themeLocal);

    const defaultProps = useMemo(
        () => ({
            theme,
            setTheme,
        }),
        // eslint-disable-next-line comma-dangle
        [theme]
    );

    return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};
