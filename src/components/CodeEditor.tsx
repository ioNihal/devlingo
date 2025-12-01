import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css'; // or any other theme

interface CodeEditorProps {
    code: string;
    onChange: (code: string) => void;
    language?: string;
    readOnly?: boolean;
}

export function CodeEditor({ code, onChange, readOnly = false }: CodeEditorProps) {
    return (
        <div style={{
            fontFamily: '"Fira Code", "Fira Mono", monospace',
            fontSize: 14,
            backgroundColor: '#1e1e1e',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)'
        }}>
            <Editor
                value={code}
                onValueChange={onChange}
                highlight={code => highlight(code, languages.javascript, 'javascript')}
                padding={16}
                readOnly={readOnly}
                style={{
                    fontFamily: '"Fira Code", "Fira Mono", monospace',
                    fontSize: 14,
                    minHeight: '150px',
                }}
                textareaClassName="focus:outline-none"
            />
        </div>
    );
}
