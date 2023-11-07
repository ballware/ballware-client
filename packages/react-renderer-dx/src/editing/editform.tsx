/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useImperativeHandle,
  useEffect,
  useState,
  useContext,
  forwardRef,
} from 'react';
import cloneDeep from 'lodash/cloneDeep';

import { EditLayout, CrudItem, EntityCustomFunction } from '@ballware/meta-interface';

import { ValidationGroup } from 'devextreme-react/validation-group';
import { ValidationSummary } from 'devextreme-react/validation-summary';
import {
  CrudContext,
  EditContext,
} from '@ballware/react-contexts';
import { EditItemsProvider } from '@ballware/react-renderer';
import { Container } from '../layout/container';
import { RenderFactoryContext } from '@ballware/react-renderer';
import { useMetaCustomFunctions, useMetaEditLayout, useNotification } from '@ballware/react-provider';

export interface EditFormRef {
  validate(): boolean;
  submit(): void;
}

export interface EditFormProps {
  editFunction?: EntityCustomFunction;
  editLayout: EditLayout;
}

export const EditForm = forwardRef<EditFormRef, EditFormProps>(
  (
    { editFunction, editLayout }: EditFormProps,
    ref: React.Ref<EditFormRef>
  ) => {
    const [preparedEditLayout, setPreparedEditLayout] = useState<EditLayout>();

    const { showWarning } = useNotification();
    
    const { save, saveBatch } = useContext(CrudContext);
    const { item, mode } = useContext(EditContext);
    const { EditLayoutItem } = useContext(RenderFactoryContext);

    const { 
      prepareEditLayout
    } = useMetaEditLayout();

    const { evaluateCustomFunction } = useMetaCustomFunctions();

    const validationGroupRef = React.useRef<ValidationGroup>(null);

    useImperativeHandle(
      ref,
      () =>
        ({
          validate: () => {
            const validationResult = validationGroupRef.current?.instance.validate();

            return validationResult?.isValid ?? false;
          },
          submit: () => {
            if (editFunction && editFunction.id !== 'primary' && evaluateCustomFunction) {
              evaluateCustomFunction(
                editFunction.id,
                item as Record<string, unknown>,
                evaluatedItem => {
                  if (Array.isArray(evaluatedItem)) {
                    if (saveBatch) {
                      saveBatch(evaluatedItem, editFunction);
                    }
                  } else {
                    if (save) {
                      save(evaluatedItem as CrudItem, editFunction);
                    }
                  }
                },
                message => {
                  if (showWarning) {
                    showWarning(message);
                  }
                }
              );
            } else if (editFunction) {
              if (Array.isArray(item)) {
                if (saveBatch) {
                  saveBatch(item as Array<CrudItem>, editFunction);
                }
              } else {
                if (save) {
                  save(item as CrudItem, editFunction);
                }
              }
            }
          },
        } as EditFormRef),
      [
        validationGroupRef,
        save,
        saveBatch,
        showWarning,
        evaluateCustomFunction,
        editFunction,
        item,
      ]
    );

    useEffect(() => {
      if (prepareEditLayout && editLayout && mode) {
        const unpreparedEditLayout = cloneDeep(editLayout);

        prepareEditLayout(mode, unpreparedEditLayout);

        setPreparedEditLayout(unpreparedEditLayout);
      }
    }, [prepareEditLayout, editLayout, mode]);

    let key = 1;

    return (
      <form>
        {preparedEditLayout && EditLayoutItem && (
          <EditItemsProvider>
            <ValidationGroup
              className='container-fluid'
              ref={validationGroupRef}
              onInitialized={e => e.component?.validate()}
            >
              <Container>
                {preparedEditLayout.items?.map(item => (
                  <EditLayoutItem
                    key={key++}
                    colCount={preparedEditLayout.colCount}
                    layoutItem={item}
                  />
                ))}
              </Container>
              <div className="dx-fieldset">
                <ValidationSummary />
              </div>
            </ValidationGroup>
          </EditItemsProvider>
        )}
      </form>
    );
  }
);
