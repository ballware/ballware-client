/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useMemo, useContext, useRef, useEffect } from 'react';

import {
  DataGrid as DxDataGrid,
  SearchPanel,
  FilterRow,
  Editing,
  GroupPanel,
  Export,
  ColumnFixing,
  Selection,
  MasterDetail,
  ColumnChooser,
  Paging,
} from 'devextreme-react/data-grid';
import DataSource from 'devextreme/data/data_source';
import dxDataGrid, { dxDataGridColumn, dxDataGridRowObject, EditingStartEvent, RowKeyInfo } from 'devextreme/ui/data_grid';
import {
  CrudItem,
  GridLayout,
  EditUtil,
  EntityCustomFunction,
} from '@ballware/meta-interface';
import { GridDetail } from './griddetail';
import { Cancelable, dxEvent, EventInfo } from 'devextreme/events';
import { dxElement } from 'devextreme/core/element';
import { dxToolbarItem, dxToolbarOptions } from 'devextreme/ui/toolbar';
import { MetaContext, CrudContext, EditModes } from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';

export interface DataGridProps {
  height: string;
  mode: 'large' | 'medium' | 'small';
  layout: GridLayout;
  columns: Array<dxDataGridColumn>;
  summary: object;
  dataSource: DataSource;
  exportFileName: string;
  showReload: boolean;
  showAdd: boolean;
  showPrint: boolean;
  showExport: boolean;
  showImport: boolean;
  customFunctions: Array<EntityCustomFunction>;
  onReloadClick: (e: { target: Element }) => void;
  onAddClick: (e: { target: Element }) => void;
  onPrintClick: (e: { items: Array<CrudItem>; target: Element }) => void;
  onExportClick: (e: { items: Array<CrudItem>; target: Element }) => void;
  onImportClick: (e: { items: Array<CrudItem>; target: Element }) => void;
  onCustomFunctionClick: (e: {
    items: Array<CrudItem>;
    target: Element;
    id: string;
  }) => void;  
  onRowDblClick: (e: {
    event: dxEvent;
    data: CrudItem;
    element: dxElement;
  }) => void;
  isMasterDetailExpandable?: (e: {
    data: CrudItem
  }) => boolean;
}

export const DataGrid = ({
  mode,
  height,
  dataSource,
  layout,
  columns,
  summary,
  showReload,
  showPrint,
  showAdd,
  showImport,
  showExport,
  customFunctions,
  exportFileName,
  onRowDblClick,
  onPrintClick,
  onExportClick,
  onImportClick,
  onAddClick,
  onCustomFunctionClick,
  onReloadClick,
  isMasterDetailExpandable
}: DataGridProps) => {
  const { t } = useTranslation();

  const {
    displayName,
    editAllowed,
    editorValueChanged,
    editorEntered,
  } = useContext(MetaContext);
  const { customEdit, isLoading } = useContext(CrudContext);
  const selectedRowKeys = useRef<Array<string>>([] as string[]);
  const selectedRowData = useRef<Array<CrudItem>>([] as CrudItem[]);

  const grid = useRef<DxDataGrid>(null);

  useEffect(() => {
    if (isLoading) {
      grid.current?.instance.beginCustomLoading(
        t('datacontainer.messages.loading')
      );
    } else if (!isLoading) {
      grid.current?.instance.endCustomLoading();
    }
  }, [isLoading, t]);

  return useMemo(() => {
    const onCustomizeColumnsDisableHidingPriority = (columns: Array<any>) => {
      columns?.forEach(c => (c.hidingPriority = null));
    };

    const onToolbarPreparing = (e: { toolbarOptions?: dxToolbarOptions }) => {
      if (showReload && e.toolbarOptions?.items) {
        e.toolbarOptions.items.unshift({
          locateInMenu: 'auto',
          location: 'after',
          widget: 'dxButton',
          showText: 'inMenu',
          options: {
            hint: t('datacontainer.actions.refresh'),
            text: t('datacontainer.actions.refresh'),
            icon: 'bi bi-arrow-repeat',
            onClick: (e: { event: { currentTarget: Element } }) => {
              onReloadClick({ target: e.event.currentTarget });
            },
          },
        } as dxToolbarItem);
      }

      if (showPrint && e.toolbarOptions?.items) {
        e.toolbarOptions.items.unshift({
          locateInMenu: 'auto',
          location: 'after',
          widget: 'dxButton',
          showText: 'inMenu',
          options: {
            hint: t('datacontainer.actions.print'),
            text: t('datacontainer.actions.print'),
            icon: 'bi bi-printer-fill',
            onClick: (e: { event: { currentTarget: Element } }) => {
              onPrintClick({
                items: selectedRowData.current,
                target: e.event.currentTarget,
              });
            },
          },
        });
      }

      if (showImport && e.toolbarOptions?.items) {
        e.toolbarOptions.items.unshift({
          locateInMenu: 'auto',
          location: 'after',
          widget: 'dxButton',
          showText: 'inMenu',
          options: {
            hint: t('datacontainer.actions.import'),
            text: t('datacontainer.actions.import'),
            icon: 'bi bi-upload',
            onClick: (e: { event: { currentTarget: Element } }) => {
              onImportClick({
                items: selectedRowData.current,
                target: e.event.currentTarget,
              });
            },
          },
        });
      }

      if (showExport && e.toolbarOptions?.items) {
        e.toolbarOptions.items.unshift({
          locateInMenu: 'auto',
          location: 'after',
          widget: 'dxButton',
          showText: 'inMenu',
          options: {
            hint: t('datacontainer.actions.export'),
            text: t('datacontainer.actions.export'),
            icon: 'bi bi-download',
            onClick: (e: { event: { currentTarget: Element } }) => {
              onExportClick({
                items: selectedRowData.current,
                target: e.event.currentTarget,
              });
            },
          },
        });
      }

      customFunctions?.forEach(f => {
        e.toolbarOptions?.items?.unshift({
          locateInMenu: 'auto',
          location: 'after',
          widget: 'dxButton',
          showText: 'inMenu',
          options: {
            hint: `${f.text}`,
            text: `${f.text}`,
            icon: f.icon,
            onClick: (e: { event: { currentTarget: Element } }) => {
              onCustomFunctionClick({
                id: f.id,
                items: selectedRowData.current,
                target: e.event.currentTarget,
              });
            },
          },
        } as dxToolbarItem);
      });

      if (showAdd) {
        e.toolbarOptions?.items?.unshift({
          locateInMenu: 'auto',
          location: 'after',
          widget: 'dxButton',
          showText: 'inMenu',
          options: {
            hint: t('datacontainer.actions.add', { entity: displayName }),
            text: t('datacontainer.actions.add', { entity: displayName }),
            icon: 'bi bi-plus',
            onClick: (e: { event: { currentTarget: Element } }) => {
              onAddClick({ target: e.event.currentTarget });
            },
          },
        });
      }
    };

    const onEditingStart = (e: EditingStartEvent) => {
      e.cancel = !e.data || !editAllowed || !editAllowed(e.data);

      if (!e.cancel && e.column) {
        const column = layout.columns.find(
          c => c.dataMember === e.column?.dataField
        );

        if (column && column.editFunction) {
          e.cancel = true;

          const customFunction = customFunctions?.find(
            cf => cf.id === column.editFunction
          );

          if (customFunction && customEdit && e.data) {
            customEdit(customFunction, [e.data]);
          }
        }
      }
    };

    const gridEditorPreparing = (e: {
      editorName?: string;
      editorOptions?: any;
      dataField?: string;
      parentType?: string;
      row?: dxDataGridRowObject;
    }) => {
      if (e.parentType === 'dataRow') {
        const defaultValueChanged = e.editorOptions.onValueChanged;
        const defaultFocusIn = e.editorOptions.onFocusIn;

        e.editorOptions.onValueChanged = (args: {
          component: any;
          value: any;
        }) => {
          if (defaultValueChanged) defaultValueChanged(args);

          const editUtil = {
            getEditorOption: (dataMember, option) =>
              dataMember === e.dataField ? args.component.option(option) : null,
            setEditorOption: (dataMember, option, value) => {
              if (dataMember === e.dataField) {
                args.component.option(option, value);
              }
            },
          } as EditUtil;

          if (editorValueChanged && e.row && e.dataField) {
            editorValueChanged(
              EditModes.EDIT,
              e.row.data,
              editUtil,
              e.dataField,
              args.value
            );
          }
        };

        e.editorOptions.onFocusIn = (args: any) => {
          if (defaultFocusIn) defaultFocusIn(args);

          const editUtil = {
            getEditorOption: (dataMember, option) =>
              dataMember === e.dataField ? args.component.option(option) : null,
            setEditorOption: (dataMember, option, value) => {
              if (dataMember === e.dataField) {
                args.component.option(option, value);
              }
            },
          } as EditUtil;

          if (editorEntered && e.row && e.dataField) {
            editorEntered(EditModes.EDIT, e.row.data, editUtil, e.dataField);
          }
        };
      }
    };

    const onRowExpanding = (e: Cancelable & EventInfo<dxDataGrid<CrudItem, string>> & RowKeyInfo<string>) => {
      
      const rowData = e.component.getVisibleRows().find(row => row.rowType === 'data' && row.key === e.key);
      
      e.cancel = rowData && isMasterDetailExpandable && !isMasterDetailExpandable({ data: rowData});
    };

    return (
      <DxDataGrid
        ref={grid}
        style={{ height: height ?? 'calc(100vh - 140px)' }}
        dataSource={dataSource}
        repaintChangesOnly
        remoteOperations={{ sorting: false, filtering: false }}
        columnAutoWidth={true}
        rowAlternationEnabled
        onEditingStart={onEditingStart}
        onEditorPreparing={gridEditorPreparing}
        onSelectionChanged={e => {
          selectedRowKeys.current = e.selectedRowKeys as string[];
          selectedRowData.current = e.selectedRowsData as CrudItem[];
        }}
        onToolbarPreparing={onToolbarPreparing}
        onRowExpanding={onRowExpanding}
        customizeColumns={
          mode === 'large' ? onCustomizeColumnsDisableHidingPriority : undefined
        }
        allowColumnResizing={mode === 'large'}
        allowColumnReordering
        columns={columns}
        summary={summary}
        defaultSelectedRowKeys={selectedRowKeys.current}
        onRowDblClick={
          mode === 'small'
            ? e =>
                e.rowElement &&
                onRowDblClick({
                  event: e.event as dxEvent,
                  data: e.data,
                  element: e.rowElement,
                })
            : undefined
        }
      >
        <Paging enabled={mode === 'large'} />
        {mode === 'large' && <ColumnChooser enabled />}
        {mode === 'large' && (
          <Editing mode={'cell'} allowUpdating={layout.allowEditing ?? false} />
        )}
        {mode === 'large' && (
          <Selection mode={layout.allowMultiselect ? 'multiple' : 'none'} />
        )}
        <ColumnFixing enabled />
        <SearchPanel visible />
        {mode === 'large' && <FilterRow visible />}
        {mode === 'large' && <GroupPanel visible />}
        <Export enabled fileName={exportFileName} />
        <MasterDetail
          enabled={layout.details ?? false}
          render={(props: { data: CrudItem }) => (
            <GridDetail detailLayout={layout.details} item={props.data} />
          )}
        />
      </DxDataGrid>
    );
  }, [
    t,
    displayName,
    height,
    mode,
    layout,
    columns,
    summary,
    dataSource,
    exportFileName,
    showAdd,
    showReload,
    showPrint,
    customFunctions,
    customEdit,
    editAllowed,
    onAddClick,
    onCustomFunctionClick,
    onPrintClick,
    onReloadClick,
    onRowDblClick,
    isMasterDetailExpandable,
    editorValueChanged,
    editorEntered,
  ]);
};
