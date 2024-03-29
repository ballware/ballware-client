/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useContext, useState, useEffect } from 'react';

import { ProviderFactoryContext } from '@ballware/react-contexts';

import { EditItemProps } from './common';
import { EntityGrid } from '../../datacontainers/grid/entitygrid';
import { EditItemsContext, CrudFunctions } from '@ballware/react-renderer';

export interface EditableEntityGridProps extends EditItemProps {}

export interface EditableEntityGridItemOptions {
  uniqueKey?: string;
  query?: string;
  layout?: string;
  fetchParams?: Record<string, unknown>;
  headParams?: Record<string, unknown>;
  //lookupParams?: object;
  readOnly?: boolean;
  customParam?: Record<string, unknown>;
}

export const EditableEntityGrid = ({ layoutItem }: EditableEntityGridProps) => {
  const { editorPreparing } = useContext(EditItemsContext);
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    if (editorPreparing && layoutItem && layoutItem.dataMember) {
      editorPreparing(layoutItem.dataMember, layoutItem);
      setPrepared(true);
    }
  }, [editorPreparing, layoutItem]);

  const {
    CrudProvider,
    MetaProvider,
  } = useContext(ProviderFactoryContext);
  const gridProps = layoutItem.itemoptions as EditableEntityGridItemOptions;

  return (
    <React.Fragment>
      {prepared &&
        layoutItem &&
        layoutItem.dataMember &&
        CrudProvider &&
        MetaProvider && (
          <MetaProvider
            entity={layoutItem.dataMember}
            initialCustomParam={gridProps?.customParam ?? {}}
            readOnly={gridProps?.readOnly ?? false}
            headParams={gridProps?.headParams ?? {}}
          >
            <CrudProvider
              identifier={undefined}
              query={gridProps?.query ?? 'primary'}
              initialFetchParams={gridProps?.fetchParams}
            >
              <CrudFunctions>
                <EntityGrid
                  layout={gridProps?.layout ?? 'primary'}
                  height={layoutItem.height}
                />
              </CrudFunctions>
            </CrudProvider>
          </MetaProvider>
        )}
    </React.Fragment>
  );
};
