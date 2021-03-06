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

import 'codemirror/lib/codemirror.css';

import codeMirror from 'codemirror';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/javascript/javascript';

import { JSHINT } from 'jshint';
import jsonlint from 'jsonlint-mod';

import 'codemirror/theme/idea.css';

import 'codemirror/addon/lint/lint';
import 'codemirror/addon/lint/javascript-lint';
import 'codemirror/addon/lint/json-lint';
import 'codemirror/addon/selection/active-line';
import 'codemirror/addon/edit/matchbrackets';


declare let window: Record<string, unknown>;

window.JSHINT = JSHINT;
window.jsonlint = jsonlint;


  export interface CodeMirrorEditorRef {
    getValue: () => string;
    setValue: (value: string) => void;
  }
  
  export interface CodeMirrorEditorProps {
    mode: 'javascript' | 'json5' | 'sqlserver';
    readOnly?: boolean;
    defaultValue?: string;
    width?: string;
    height?: string;
    onChange?: (value?: string) => void;
  }
  
  export const CodeMirrorEditor = forwardRef<CodeMirrorEditorRef, CodeMirrorEditorProps>(
    ({ mode, readOnly, defaultValue, width, height, onChange }, ref) => {
      const [value, setValue] = useState(defaultValue);

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
  
      //let currentValue = defaultValue;
  
      /*
      const onBlur = () => {
        if (currentValue !== defaultValue && onChange) {
          onChange(currentValue);
        }
      };
      */
  
      useEffect(() => {
        if (editorRef.current && onChange && mode) {
          const editor = codeMirror(editorRef.current, {
            readOnly: readOnly,
            mode: mode === 'json5' ? 'json' : mode === 'sqlserver' ? 'sql' : 'javascript',                
            theme: 'idea',
            lineNumbers: true,
            lint: true,
            lineWrapping: true,
            gutters: ['CodeMirror-lint-markers'],
            value: defaultValue ?? ""            
          });

          editor.setSize("100%", "100%");
          editor.on('blur', (e) => {
            if (e.getValue() !== defaultValue && onChange) {
              onChange(e.getValue());
            }
          });
        }
      }, [editorRef, mode, readOnly, defaultValue, onChange]);

      return (
        <div ref={editorRef} style={{ width: width ?? '100%', height: height ?? '400px'}}></div>
      );
    }
  );
  