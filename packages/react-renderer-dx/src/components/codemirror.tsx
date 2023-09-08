/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
    forwardRef,
  useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';

import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from "@codemirror/state"
import { javascript, javascriptLanguage } from '@codemirror/lang-javascript';
import { json5, json5ParseLinter, json5Language } from 'codemirror-json5';
import { MSSQL, sql } from '@codemirror/lang-sql';
import { linter, lintGutter }from '@codemirror/lint';
import { indentWithTab } from '@codemirror/commands';
import { snippetCompletion } from '@codemirror/autocomplete';
import { search } from '@codemirror/search';

export interface CodeMirrorEditorRef {
  getValue: () => string;
  setValue: (value: string) => void;
}

export interface CodeMirrorEditorOptions {
  snippets?: { label: string, info?: string, detail?: string, snippet: string }[] 
}

export interface CodeMirrorEditorProps {
  mode: 'javascript' | 'json5' | 'sqlserver';
  readOnly?: boolean;
  defaultValue?: string;
  width?: string;
  height?: string;
  options?: CodeMirrorEditorOptions;
  onChange?: (value?: string) => void;
}

export const CodeMirrorEditor = forwardRef<CodeMirrorEditorRef, CodeMirrorEditorProps>(
  ({ mode, readOnly, defaultValue, width, height, options, onChange }, ref) => {
    const [value, setValue] = useState(defaultValue);
    const [editor, setEditor] = useState<EditorView|undefined>(undefined);

    const editorRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(
      ref,
      () =>
        ({
          getValue: () => {
            return value;
          },
          setValue: newValue => {
            setValue(newValue);
          },
        } as CodeMirrorEditorRef)
    );

    useEffect(() => {
      if (editorRef.current && onChange && mode && !editor) {
        const theme = EditorView.theme({
          "&": { height: '100%' }
        });

        const extensions = [basicSetup, theme, search()];

        if (mode === 'json5') {
          extensions.push(json5());
          extensions.push(json5Language.data.of({
            autocomplete: options ? options.snippets?.map(s => snippetCompletion(s.snippet, { label: s.label, info: s.info, detail: s.detail })) : []
          }));           
          extensions.push(linter(json5ParseLinter()));
        } else if (mode === 'javascript') {
          extensions.push(javascript()); 
          extensions.push(javascriptLanguage.data.of({
            autocomplete: options ? options.snippets?.map(s => snippetCompletion(s.snippet, { label: s.label, info: s.info, detail: s.detail })) : []
          }));           
        } else if (mode === 'sqlserver') {
          extensions.push(sql({ dialect: MSSQL }));
          extensions.push(MSSQL.language.data.of({
            autocomplete: options ? options.snippets?.map(s => snippetCompletion(s.snippet, { label: s.label, info: s.info, detail: s.detail })) : []
          }));
        }

        if (readOnly) {
          extensions.push(EditorState.readOnly.of(true));
        } else {
          extensions.push(lintGutter());
          extensions.push(keymap.of([indentWithTab]));
          extensions.push(EditorView.updateListener.of((e) => {
            onChange(e.state.doc.toString());
          }));
        }

        const state = EditorState.create({
          extensions: extensions,
          doc: defaultValue ?? ""            
        });

        

        setEditor(new EditorView({
          parent: editorRef.current,                        
          state          
        }));
      }
    }, [editorRef, mode, readOnly, defaultValue, onChange, editor, setEditor]);

    return (
      <div ref={editorRef} style={{ width: width ?? '100%', height: height ?? '400px'}}></div>
    );
  }
);
