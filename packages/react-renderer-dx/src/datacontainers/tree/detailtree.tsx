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

import {
  EditLayoutItemOptions,
  GridLayoutColumn,
} from '@ballware/meta-interface';
import TreeList, { Editing } from 'devextreme-react/tree-list';
import {
  createColumnConfiguration,
  renderCellTemplates,
  RenderCellTemplatesProps,
} from '../columns/columntemplates';
import { LookupContext } from '@ballware/react-contexts';
import dxTreeList, { dxTreeListColumn, dxTreeListRowObject } from 'devextreme/ui/tree_list';
import { EditItemsContext } from '@ballware/react-renderer';
import { useTranslation } from 'react-i18next';
import { dxElement } from 'devextreme/core/element';
import { dxToolbarItem, dxToolbarOptions } from 'devextreme/ui/toolbar';
import { Item, Toolbar } from 'devextreme-react/toolbar';
import { CodeEditor } from '../../editing/items/codeeditor';

export interface DetailTreeRef {
  getValue: () => Array<Record<string, unknown>>;
  setValue: (value: Array<Record<string, unknown>>) => void;
}

export interface DetailTreeItemOptions {
  add?: boolean;
  update?: boolean;
  delete?: boolean;
  columns: Array<GridLayoutColumn>;
  showSource?: boolean;
}

export interface DetailTreeProps {
  readonly: boolean;
  getValue: (dataMember?: string) => Record<string, unknown> | Array<Record<string, unknown>>;
  setValue: (value: Array<Record<string, unknown>>) => void;
  layoutItem: EditLayoutItemOptions;
}

export const DetailTree = forwardRef<DetailTreeRef, DetailTreeProps>(
  ({ readonly, getValue, setValue, layoutItem }, ref): JSX.Element => {
    const { t } = useTranslation();

    const {      
      detailGridRowValidating,
      initNewDetailItem,
      detailEditorPreparing,
      detailEditorValueChanged,
      detailEditorEntered,
    } = useContext(EditItemsContext);
    const { lookups } = useContext(LookupContext);

    const treeRef = useRef<TreeList>(null);

    const [allowShowSource] = useState<boolean>(
      (layoutItem.itemoptions as DetailTreeItemOptions).showSource ?? false
    );

    const [showSource, setShowSource] = useState<boolean>(false);


    useImperativeHandle(ref, () => ({
      getValue: () => {
        return treeRef.current?.instance.option('dataSource');
      },
      setValue: newValue => {
        treeRef.current?.instance.option('dataSource', newValue);
        setValue(newValue);
      },
    }));

    const dataMember = layoutItem.dataMember;
    const options = layoutItem.itemoptions as DetailTreeItemOptions;

    const treeEditorPreparing = (e: {
      editorName?: string;
      editorOptions?: any;
      dataField?: string;
      parentType?: string;
      row?: dxTreeListRowObject;
    }) => {
      if (
        e.parentType === 'dataRow' &&
        detailEditorPreparing &&
        dataMember &&
        e.row?.node &&
        e.dataField
      ) {
        detailEditorPreparing(
          dataMember,
          e.row.node.data,
          e.dataField,
          e.editorOptions
        );

        const defaultValueChanged = e.editorOptions.onValueChanged;
        const defaultFocusIn = e.editorOptions.onFocusIn;

        e.editorOptions.onValueChanged = (args: {
          component: any;
          value: any;
        }) => {
          if (defaultValueChanged) defaultValueChanged(args);

          if (detailEditorValueChanged && e.row?.node && e.dataField)
            detailEditorValueChanged(
              dataMember,
              e.row.node.data,
              e.dataField,
              args.value,
              true
            );
        };

        e.editorOptions.onFocusIn = (args: any) => {
          if (defaultFocusIn) defaultFocusIn(args);

          if (detailEditorEntered && e.row?.node && e.dataField) {
            detailEditorEntered(dataMember, e.row.node.data, e.dataField);
          }
        };

        e.editorOptions.valueChangeEvent = 'blur change focusout';
      }
    };

    const treeRowValidating = (e: {
      oldData?: object;
      newData?: object;
      isValid?: boolean;
      errorText?: string;
    }) => {
      if (detailGridRowValidating && dataMember) {
        const validatingData = { ...e.oldData, ...e.newData };

        const newErrorText = detailGridRowValidating(
          dataMember,
          validatingData
        );

        if (newErrorText) {
          e.errorText = newErrorText;
          e.isValid = false;
        }
      }
    };

    const onInitNewDetailItem = (dataMember: string, detailItem: any) => {
      if (initNewDetailItem) {
        initNewDetailItem(dataMember, detailItem);
      }
    };

    const onToolbarPreparing = useCallback(({ toolbarOptions }: { component?: dxTreeList, element?: dxElement, model?: any, toolbarOptions?: dxToolbarOptions }) => {

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

    const columnConfiguration = useMemo(
      () =>
        getValue &&
        createColumnConfiguration<dxTreeListColumn>(
          t,
          options.columns,
          lookups,
          getValue() as Record<string, unknown>,
          'detail',
          undefined,
          undefined
        ),
      [t, options, lookups, getValue]
    );

    return (<React.Fragment>{!showSource && 
      <TreeList
        ref={treeRef}
        width={layoutItem.width}
        repaintChangesOnly
        columnAutoWidth
        allowColumnResizing
        dataSource={getValue(dataMember)}
        onToolbarPreparing={onToolbarPreparing}
        onEditorPreparing={treeEditorPreparing}
        onInitNewRow={e =>
          dataMember && onInitNewDetailItem(dataMember, e.data)
        }
        onRowValidating={treeRowValidating}
        columns={columnConfiguration}
        dataStructure={'tree'}
        itemsExpr={'items'}
      >
        <Editing
          mode={'cell'}
          useIcons
          allowAdding={!readonly && options.add}
          allowUpdating={!readonly && options.update}
          allowDeleting={!readonly && options.delete}
        />
        {getValue &&
          renderCellTemplates({
            lookupParams: getValue(),
          } as RenderCellTemplatesProps)}
      </TreeList>}
      {showSource && <React.Fragment><Toolbar className={'w-100'}><Item location="after" widget="dxButton" locateInMenu={'auto'} showText={'inMenu'} options={{
              hint: t('datacontainer.actions.showList'),
              text: t('datacontainer.actions.showList'),
              icon: 'bi bi-table',
              onClick: () => {
                setShowSource(false);
              },
            }} /></Toolbar><CodeEditor layoutItem={layoutItem} dialect={'json'} /></React.Fragment>}
      </React.Fragment>
    );
  }
);
