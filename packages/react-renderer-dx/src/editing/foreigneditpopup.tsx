/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useState, useEffect, useContext, useCallback } from 'react';
import { EntityCustomFunction } from '@ballware/meta-interface';
import { MetaContext, CrudContext, EditModes } from '@ballware/react-contexts';
import {
  ProviderFactoryContext,
  LookupContext,
} from '@ballware/react-contexts';
import {
  ForeignEditPopupProps,
  RenderFactoryContext,
} from '@ballware/react-renderer';
import { useMetaEditLayout } from '@ballware/react-provider';

export const ForeignEditPopup = ({
  functionIdentifier,
  selection,
  editingFinished,
}: ForeignEditPopupProps) => {
  const [customEditFunction, setCustomEditFunction] = useState<
    EntityCustomFunction
  >();
  const [isEditing, setIsEditing] = useState(false);

  const { EditPopup } = useContext(RenderFactoryContext);

  const { EditProvider } = useContext(ProviderFactoryContext);
  const { lookups } = useContext(LookupContext);
  const { customFunctions } = useContext(MetaContext);
  const { customEdit, customEditing, customEditParam } = useContext(
    CrudContext
  );

  const { getEditLayout } = useMetaEditLayout();

  const getEditLayoutForIdentifier = useCallback(
    (layoutIdentifier: string) => {
      if (getEditLayout) {
        return getEditLayout(layoutIdentifier ?? 'primary');
      }

      return undefined;
    },
    [getEditLayout]
  );

  useEffect(() => {
    if (customFunctions && functionIdentifier) {
      const customFunction = customFunctions?.find(
        f => f.id === functionIdentifier
      );

      setCustomEditFunction(customFunction);
    }
  }, [functionIdentifier, customFunctions]);

  useEffect(() => {
    if (customEdit && customEditFunction && selection && lookups) {
      customEdit(customEditFunction, selection);
    }
  }, [customEdit, customEditFunction, selection, lookups]);

  useEffect(() => {
    if (customEditing) {
      setIsEditing(true);
    } else {
      if (isEditing) {
        editingFinished(true);
      }
    }
  }, [customEditing, editingFinished, isEditing]);

  return (
    <React.Fragment>
      {EditProvider &&
        EditPopup &&
        getEditLayout &&
        customEditFunction &&
        customEditing && (
          <EditProvider
            item={customEditParam as Record<string, unknown>}
            mode={EditModes.EDIT}
            editLayout={getEditLayoutForIdentifier(
              customEditFunction?.editLayout
            )}
            editFunction={customEditFunction}
          >
            <EditPopup title={`${customEditFunction?.text}`} />
          </EditProvider>
        )}
    </React.Fragment>
  );
};
