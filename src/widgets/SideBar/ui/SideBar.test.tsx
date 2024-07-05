import * as React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { SideBar } from './SideBar';

describe('side', () => {
    test('testSide', () => {
        render(<SideBar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('testSide-toogle', () => {
        render(<SideBar />);
        const toogleBtn = screen.getByTestId('sidebar-toogle');
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('closed');
    });
});
