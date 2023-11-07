/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useMemo, useContext, useRef, useEffect, useCallback } from 'react';

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
  StateStoring,
} from 'devextreme-react/data-grid';
import DataSource from 'devextreme/data/data_source';
import { exportDataGrid } from 'devextreme/excel_exporter';
import dxDataGrid, { Toolbar, dxDataGridColumn, dxDataGridRowObject, EditingStartEvent, RowKeyInfo, ExportingEvent } from 'devextreme/ui/data_grid';
import {
  CrudItem,
  GridLayout,
  EditUtil,
  EntityCustomFunction,
} from '@ballware/meta-interface';
import { GridDetail } from './griddetail';
import { Cancelable, dxEvent, EventInfo } from 'devextreme/events';
import { dxElement } from 'devextreme/core/element';
import { dxToolbarItem } from 'devextreme/ui/toolbar';
import { MetaContext, CrudContext, EditModes } from '@ballware/react-contexts';
import { useTranslation } from 'react-i18next';
import { ToolbarItem } from 'devextreme/ui/data_grid';
import dxButton from 'devextreme/ui/button';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { useMetaAllowed, useMetaEditing } from '@ballware/react-provider';

export interface DataGridProps {
  identifier?: string;
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
  identifier,
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
    displayName
  } = useContext(MetaContext);
  const { customEdit, isLoading } = useContext(CrudContext);

  const { editAllowed } = useMetaAllowed();
  const { editorValueChanged, editorEntered } = useMetaEditing();

  const selectedRowKeys = useRef<Array<string>>([] as string[]);
  const selectedRowData = useRef<Array<CrudItem>>([] as CrudItem[]);

  const grid = useRef<DxDataGrid>(null);
  const gridSelection = useRef<dxButton|undefined>(undefined);
  
  const onVisibleRowsChanged = useCallback((visibleKeys: string[]) => {
    if (gridSelection.current) {
      const invisibleKeys = selectedRowKeys.current.filter(sr => !visibleKeys.includes(sr));

      if (invisibleKeys.length && gridSelection.current) {
        gridSelection.current.option('hint', t('datacontainer.actions.selectionhint.danger'));
        gridSelection.current.option('type', 'danger');
        gridSelection.current.option('icon', 'bi bi-exclamation-triangle');
      } else {
        gridSelection.current.option('hint', t('datacontainer.actions.selectionhint.normal'));
        gridSelection.current.option('type', 'normal');
        gridSelection.current.option('icon', undefined);
      }
    }
  }, [t, gridSelection]);

  const onSelectAllClick = useCallback(() => {
    grid.current?.instance.selectAll();

    onVisibleRowsChanged(grid.current?.instance.getVisibleRows().map(vr => vr.key) ?? []);
  }, []);

  const onUnselectAllClick = useCallback(() => {
    grid.current?.instance.clearSelection();

    onVisibleRowsChanged(grid.current?.instance.getVisibleRows().map(vr => vr.key) ?? []);
  }, []);

  const onNavigateToSelection = useCallback(() => {
    if (selectedRowKeys.current.length) {
      grid.current?.instance.navigateToRow(selectedRowKeys.current[0]);
    }
  }, []);

  const onSelectionChanged = useCallback((selectedKeys: string[]) => {
    if (gridSelection.current) {
      gridSelection.current.option('visible', selectedKeys.length > 0);
      gridSelection.current.option('text', t('datacontainer.actions.selection', { count: selectedKeys.length }));
    }

    onVisibleRowsChanged(grid.current?.instance.getVisibleRows().map(vr => vr.key) ?? []);
  }, [t, gridSelection]);

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

    if (mode !== 'large') {
      selectedRowKeys.current = [];
      selectedRowData.current = [];
    }

    const onCustomizeColumnsDisableHidingPriority = (columns: Array<any>) => {
      columns?.forEach(c => (c.hidingPriority = null));
    };

    const toolbar = {
      items: []
    } as Toolbar;

    if (showReload) {
      toolbar.items?.unshift({
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

    if (showPrint) {
      toolbar.items?.unshift({
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

    if (showImport) {
      toolbar.items?.unshift({
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

    if (showExport) {
      toolbar.items?.unshift({
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

    if (mode === 'large' && layout.allowMultiselect) {
      customFunctions?.forEach(f => {
        toolbar.items?.unshift({
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
    }    

    if (showAdd) {
      toolbar.items?.unshift({
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

    if (mode === 'large' && layout.allowMultiselect) {
      toolbar.items?.unshift({
        locateInMenu: 'auto',
        location: 'after',
        widget: 'dxButton',
        showText: 'inMenu',
        options: {
          hint: t('datacontainer.actions.unselectall', {}),
          text: t('datacontainer.actions.unselectall', { count: 99 }),
          icon: 'bi bi-dash-square',
          onClick: () => {
            onUnselectAllClick();
          },
        }
      } as ToolbarItem);

      toolbar.items?.unshift({
        locateInMenu: 'never',
        location: 'after',
        widget: 'dxButton',
        showText: 'always',
        options: {
          visible: selectedRowKeys.current.length > 0,
          hint: t('datacontainer.actions.selectionhint.normal'),
          text: t('datacontainer.actions.selection', { count: selectedRowKeys.current.length }),
          onClick: () => {
            onNavigateToSelection();
          },
          onInitialized: (e: { component: dxButton }) => {
            gridSelection.current = e.component;
          }
        }
      } as ToolbarItem);

      toolbar.items?.unshift({
        locateInMenu: 'auto',
        location: 'after',
        widget: 'dxButton',
        showText: 'inMenu',
        options: {
          hint: t('datacontainer.actions.selectall', {}),
          text: t('datacontainer.actions.selectall', {}),
          icon: 'bi bi-check-square',
          onClick: () => {
            onSelectAllClick();
          },
        }
      } as ToolbarItem)
    }

    toolbar.items?.push('exportButton');

    if (mode === 'large') {
      toolbar.items?.push('columnChooserButton');
    }

    toolbar.items?.push('searchPanel');

    if (mode === 'large') {
      toolbar.items?.unshift('groupPanel');
    }

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
      
      e.cancel = rowData && isMasterDetailExpandable && !isMasterDetailExpandable({ data: rowData.data});
    };

    const onExporting = (e: ExportingEvent<any, any>) => {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet(displayName)

      exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true
      }).then(() => {
        workbook.xlsx.writeBuffer().then(buffer => {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), exportFileName + ".xlsx");
        })

      });

      e.cancel = true;  
    };

    return (
      <DxDataGrid
        ref={grid}
        style={{ height: height ?? '100%' }}
        dataSource={dataSource}
        repaintChangesOnly
        remoteOperations={{ sorting: false, filtering: false }}
        columnAutoWidth={true}
        rowAlternationEnabled
        onContentReady={e => onVisibleRowsChanged(e.component.getVisibleRows()?.map(r => r.key) ?? [])}
        onEditingStart={onEditingStart}
        onEditorPreparing={gridEditorPreparing}
        onSelectionChanged={e => {
          selectedRowKeys.current = e.selectedRowKeys as string[];
          selectedRowData.current = e.selectedRowsData as CrudItem[];

          onSelectionChanged(selectedRowKeys.current);
        }}
        onRowExpanding={onRowExpanding}
        toolbar={toolbar}
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
        onExporting={onExporting}
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
        <Export enabled allowExportSelectedData={layout.allowMultiselect}/>
        <MasterDetail
          enabled={!!(layout.details ?? false)}
          render={(props: { data: CrudItem }) => (
            <GridDetail detailLayout={layout.details} item={props.data} />
          )}
        />
        <StateStoring enabled={identifier ? true : false} type={"localStorage"} storageKey={identifier}/>
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
