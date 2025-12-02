import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css';

import styles from './CodeEditor.module.css';

interface CodeEditorProps {
    code: string;
    onChange: (code: string) => void;
    language?: string;
    readOnly?: boolean;
}

export function CodeEditor({ code, onChange, readOnly = false }: CodeEditorProps) {
    return (
        <div className={styles.editorWrapper}>
            <Editor
                value={code}
                onValueChange={onChange}
                highlight={code => highlight(code, languages.javascript, 'javascript')}
                padding={16}
                readOnly={readOnly}
                className={styles.editor}
                textareaClassName={styles.textarea}
            />
        </div>
    );
}
