import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ProblemView } from './ProblemView';
import type { Problem } from '../../data/types';

// Mock the JavascriptRunner
vi.mock('../engine/JavascriptRunner', () => ({
    runJavascript: vi.fn().mockImplementation((code) => {
        if (code.includes('fail')) {
            return Promise.resolve({ success: false, output: [], error: 'Runtime Error' });
        }
        return Promise.resolve({ success: true, output: ['Hello World'] });
    }),
}));

const mockProblem: Problem = {
    id: 'test-p1',
    type: 'code_execution',
    prompt: 'Print Hello World',
    codeTemplate: 'console.log("Hello World");',
};

describe('ProblemView', () => {
    it('renders the prompt and code editor', () => {
        render(<ProblemView problem={mockProblem} onComplete={() => { }} />);
        expect(screen.getByText('Print Hello World')).toBeInTheDocument();
        expect(screen.getByText('Run')).toBeInTheDocument();
    });

    it('runs code and displays output', async () => {
        render(<ProblemView problem={mockProblem} onComplete={() => { }} />);

        const runButton = screen.getByText('Run');
        fireEvent.click(runButton);

        await waitFor(() => {
            expect(screen.getByText('Hello World')).toBeInTheDocument();
        });
    });

    it('enables continue button on success', async () => {
        const onComplete = vi.fn();
        render(<ProblemView problem={mockProblem} onComplete={onComplete} />);

        const runButton = screen.getByText('Run');
        fireEvent.click(runButton);

        await waitFor(() => {
            const continueButton = screen.getByText('Continue');
            expect(continueButton).not.toBeDisabled();
            fireEvent.click(continueButton);
            expect(onComplete).toHaveBeenCalled();
        });
    });
});
