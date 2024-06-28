import React, { Component, ErrorInfo, ReactNode } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    // eslint-disable-next-line react/state-in-constructor
    public state: State = {
        hasError: false,
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // eslint-disable-next-line no-console
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        // eslint-disable-next-line react/destructuring-assignment
        if (this.state.hasError) {
            return <ErrorPage />;
        }

        // eslint-disable-next-line react/destructuring-assignment
        return this.props.children;
    }
}

export { ErrorBoundary };
