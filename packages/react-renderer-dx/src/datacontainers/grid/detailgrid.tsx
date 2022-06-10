/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
  useContext,
  useState,
  useCallback,
} from 'react';

import { useTranslation } from 'react-i18next';

import {
  EditLayoutItemOptions,
  GridLayoutColumn,
} from '@ballware/meta-interface';
import DataGrid, { Editing } from 'devextreme-react/data-grid';
import Toolbar, { Item } from 'devextreme-react/toolbar';
import {
  createColumnConfiguration,
  renderCellTemplates,
} from '../columns/columntemplates';
import { LookupContext, EditContext } from '@ballware/react-contexts';
import dxDataGrid, { dxDataGridColumn, dxDataGridRowObject } from 'devextreme/ui/data_grid';
import { EditItemsContext } from '@ballware/react-renderer';
import { componentToEditorRef } from '../../editing/items/common';
import { dxElement } from 'devextreme/core/element';
import { dxToolbarItem, dxToolbarOptions } from 'devextreme/ui/toolbar';
import { CodeEditor } from '../../editing/items/codeeditor';

export interface DetailGridRef {
  getValue: () => Array<Record<string, unknown>>;
  setValue: (value: Array<Record<string, unknown>>) => void;
}

export interface DetailGridItemOptions {  
  add?: boolean;
  update?: boolean;
  delete?: boolean;
  columns: Array<GridLayoutColumn>;
  showSource?: boolean;
}

export interface DetailGridProps {
  readonly: boolean;
  getValue: (dataMember?: string) => Record<string, unknown> | Array<Record<string, unknown>>;
  setValue: (value: Array<Record<string, unknown>>) => void;
  layoutItem: EditLayoutItemOptions;
  onInitialized: () => void;
}

export const DetailGrid = forwardRef<DetailGridRef, DetailGridProps>(
  (
    { readonly, getValue, setValue, onInitialized, layoutItem },
    ref
  ): JSX.Element => {
    const [allowAdd] = useState<boolean>(
      (!readonly && (layoutItem.itemoptions as DetailGridItemOptions).add) ??
        false
    );
    const [allowUpdate] = useState<boolean>(
      (!readonly && (layoutItem.itemoptions as DetailGridItemOptions).update) ??
        false
    );
    const [allowDelete] = useState<boolean>(
      (!readonly && (layoutItem.itemoptions as DetailGridItemOptions).delete) ??
        false
    );

    const [allowShowSource] = useState<boolean>(
      (layoutItem.itemoptions as DetailGridItemOptions).showSource ?? false
    );

    const [showSource, setShowSource] = useState<boolean>(false);


    const {
      editorValueChanged,
      detailGridRowValidating,
      initNewDetailItem,
      detailEditorPreparing,
      detailEditorInitialized,
      detailEditorValueChanged,
      detailEditorEntered,
    } = useContext(EditItemsContext);
    const { lookups } = useContext(LookupContext);
    const { item } = useContext(EditContext);
    const gridRef = useRef<DataGrid>(null);

    const { t } = useTranslation();

    useImperativeHandle(ref, () => ({
      getValue: () => {
        return gridRef.current?.instance.option('dataSource') as Record<string, unknown>[];
      },
      setValue: newValue => {
        gridRef.current?.instance.option('dataSource', newValue);
        setValue(newValue);
      },
    }));

    const dataMember = layoutItem.dataMember;

    const onGridEditorPreparing = useCallback(
      (e: {
        editorName?: string;
        editorOptions?: any;
        dataField?: string;
        parentType?: string;
        row?: dxDataGridRowObject;
      }) => {
        if (e.parentType === 'dataRow' && e.row && e.dataField) {
          if (dataMember && detailEditorPreparing) {
            detailEditorPreparing(
              dataMember,
              e.row.data,
              e.dataField,
              e.editorOptions
            );
          }

          const defaultValueChanged = e.editorOptions.onValueChanged;
          const defaultFocusIn = e.editorOptions.onFocusIn;

          e.editorOptions.onValueChanged = (args: {
            component: any;
            value: any;
          }) => {
            if (defaultValueChanged) defaultValueChanged(args);

            if (
              dataMember &&
              detailEditorValueChanged &&
              e.row &&
              e.dataField
            ) {
              detailEditorValueChanged(
                dataMember,
                e.row.data,
                e.dataField,
                args.value,
                true
              );
            }
          };

          e.editorOptions.onFocusIn = (args: any) => {
            if (defaultFocusIn) defaultFocusIn(args);

            if (dataMember && detailEditorEntered && e.row && e.dataField) {
              detailEditorEntered(dataMember, e.row.data, e.dataField);
            }
          };

          e.editorOptions.onInitialized = (args: any) => {
            if (dataMember && detailEditorInitialized && e.row && e.dataField) {
              detailEditorInitialized(
                dataMember,
                e.row.data,
                e.dataField,
                componentToEditorRef(args.component)
              );
            }
          };

          e.editorOptions.valueChangeEvent = 'blur change focusout';
        }
      },
      [
        dataMember,
        detailEditorEntered,
        detailEditorInitialized,
        detailEditorPreparing,
        detailEditorValueChanged,
      ]
    );

    const onGridRowValidating = useCallback(
      (e: {
        oldData?: object;
        newData?: object;
        isValid?: boolean;
        errorText?: string;
      }) => {
        const validatingData = { ...e.oldData, ...e.newData };

        if (dataMember && detailGridRowValidating) {
          const newErrorText = detailGridRowValidating(
            dataMember,
            validatingData
          );

          if (newErrorText) {
            e.errorText = newErrorText;
            e.isValid = false;
          }
        }
      },
      [dataMember, detailGridRowValidating]
    );

    const onInitNewDetailItem = useCallback(
      (dataMember: string, detailItem: any) => {
        if (initNewDetailItem) {
          initNewDetailItem(dataMember, detailItem);
        }
      },
      [initNewDetailItem]
    );

    const onToolbarPreparing = useCallback(({ toolbarOptions }: { component?: dxDataGrid, element?: dxElement, model?: any, toolbarOptions?: dxToolbarOptions }) => {

      if (allowShowSource && setShowSource && toolbarOptions?.items) {
        toolbarOptions.items.unshift({
          locateInMenu: 'auto',
          location: 'after',
          widget: 'dxButton',
          showText: 'inMenu',
          options: {
            hint: t('datacontainer.actions.showSource'),
            text: t('datacontainer.actions.showSource'),
            icon: 'bi bi-code',
            onClick: () => {
              setShowSource(true);
            },
          },
        } as dxToolbarItem);
      }

    }, [allowShowSource, setShowSource]);

    const columnConfiguration = useMemo(() => {
      const options = layoutItem.itemoptions as DetailGridItemOptions;

      return createColumnConfiguration<dxDataGridColumn>(
        t,
        options.columns,
        lookups,
        item as Record<string, unknown>,
        'detail',
        undefined,
        undefined
      );
    }, [t, layoutItem, lookups, item]);

    return (
      <React.Fragment>
        {dataMember &&
          getValue &&
          editorValueChanged &&
          detailGridRowValidating &&
          initNewDetailItem &&
          detailEditorPreparing &&
          detailEditorValueChanged &&
          detailEditorEntered && (
            <React.Fragment>{!showSource && <DataGrid
              ref={gridRef}
              width={layoutItem.width}
              height={layoutItem.height}
              repaintChangesOnly
              columnAutoWidth
              allowColumnResizing
              dataSource={getValue(dataMember)}
              onToolbarPreparing={onToolbarPreparing}
              onEditorPreparing={onGridEditorPreparing}
              onInitNewRow={e => onInitNewDetailItem(dataMember, e.data)}
              onRowValidating={onGridRowValidating}
              onInitialized={onInitialized}
              columns={columnConfiguration}
            >
              <Editing
                mode={'cell'}
                useIcons
                allowAdding={allowAdd}
                allowUpdating={allowUpdate}
                allowDeleting={allowDelete}
              />
              {renderCellTemplates({
                lookupParams: getValue() as Record<string, unknown>,
              })}
            </DataGrid>}
            {showSource && <React.Fragment><Toolbar className={'w-100'}><Item location="after" widget="dxButton" locateInMenu={'auto'} showText={'inMenu'} options={{
              hint: t('datacontainer.actions.showList'),
              text: t('datacontainer.actions.showList'),
              icon: 'bi bi-table',
              onClick: () => {
                setShowSource(false);
              },
            }} /></Toolbar><CodeEditor layoutItem={layoutItem} dialect={'json'} /></React.Fragment>}</React.Fragment>
          )}
      </React.Fragment>
    );
  }
);
