import { render, screen } from '@testing-library/react';
import { Experimental } from './Experimental';
import { useUserStore } from '../store/userStore';
import { BrowserRouter } from 'react-router-dom';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock the store
vi.mock('../store/userStore', () => ({
    useUserStore: vi.fn(),
}));

describe('Experimental Page', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders setup message when no API key is present', () => {
        (useUserStore as any).mockReturnValue({ geminiApiKey: null });
        render(
            <BrowserRouter>
                <Experimental />
            </BrowserRouter>
        );
        expect(screen.getByText(/Setup Required/i)).toBeInTheDocument();
    });

    it('renders topic buttons when API key is present', () => {
        (useUserStore as any).mockReturnValue({ geminiApiKey: 'test-key' });
        render(
            <BrowserRouter>
                <Experimental />
            </BrowserRouter>
        );
        expect(screen.getByText(/AI Lesson Generator/i)).toBeInTheDocument();
        expect(screen.getByText('Loops')).toBeInTheDocument();
    });
});
