/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useContext,
  useCallback,
} from 'react';

import cloneDeep from 'lodash/cloneDeep';

import { ActionSheet } from 'devextreme-react/action-sheet';

import {
  EntityCustomFunction,
  GridLayout,
  CrudItem,
} from '@ballware/meta-interface';
import moment from 'moment';
import {
  createColumnConfiguration,
  OptionButtons,
} from '../columns/columntemplates';
import { createSummaryConfiguration } from './gridsummary';
import { createEditableGridDatasource } from '../../util/datasource';
import { useMediaQuery, GLOBAL_MEDIA_QUERIES } from '../../util/mediaquery';
import {
  MetaContext,
  CrudContext,
  LookupContext,
} from '@ballware/react-contexts';

import {
  useMetaGridLayout,
  useMetaAllowed, 
  useMetaOperations
} from '@ballware/react-provider';

import { dxElement } from 'devextreme/core/element';
import { dxEvent } from 'devextreme/events';
import { DataGrid } from './datagrid';
import { dxDataGridColumn } from 'devextreme/ui/data_grid';
import { useTranslation } from 'react-i18next';

export interface GridProps {
  layout: string;
  height?: string;
}

export const EntityGrid = ({ layout, height }: GridProps) => {
  const { t } = useTranslation();
  const smallScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.small);
  const mediumScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.medium);

  const [preparedGridLayout, setPreparedGridLayout] = useState<GridLayout>();
  const [editLayout, setEditLayout] = useState<string>();
  const [renderGrid, setRenderGrid] = useState(false);
  const [addMenuItems, setAddMenuItems] = useState<
    Array<{ id: string; text: string; customFunction?: EntityCustomFunction }>
  >();
  const [exportMenuItems, setExportMenuItems] = useState<
    Array<{ id: string; text: string; customFunction?: EntityCustomFunction }>
  >();
  const [importMenuItems, setImportMenuItems] = useState<
    Array<{ id: string; text: string; customFunction?: EntityCustomFunction }>
  >();

  const { lookups } = useContext(LookupContext);
  const {
    displayName,
    customFunctions,
    headParams,
    customParam,
    documents,    
  } = useContext(MetaContext);

  const {
    getGridLayout, 
    prepareGridLayout
  } = useMetaGridLayout();

  const {
    addAllowed,
    viewAllowed,
    editAllowed,
    dropAllowed,
    printAllowed,
    customFunctionAllowed,
  } = useMetaAllowed();

  const {
    print
  } = useMetaOperations();

  const {
    load,
    add,
    view,
    edit,
    remove,
    customEdit,
    save,
    exportItems,
    importItems,
    fetchedItems,    
  } = useContext(CrudContext);

  const actionRows = useRef<Array<CrudItem>>();

  const actionMenu = useRef<ActionSheet>(null);
  const printMenu = useRef<ActionSheet>(null);
  const addMenu = useRef<ActionSheet>(null);
  const exportMenu = useRef<ActionSheet>(null);
  const importMenu = useRef<ActionSheet>(null);

  const viewExecute = useCallback(
    (row: CrudItem, _target: Element) => {
      if (view && editLayout) {
        view(row.Id, editLayout);
      }
    },
    [editLayout, view]
  );

  const editExecute = useCallback(
    (row: CrudItem, _target: Element) => {
      if (edit && editLayout) {
        edit(row.Id, editLayout);
      }
    },
    [editLayout, edit]
  );

  const deleteExecute = useCallback(
    (row: CrudItem, _target: Element) => {
      if (remove) {
        remove(row.Id);
      }
    },
    [remove]
  );

  const printExecute = useCallback(
    (row: CrudItem, target: Element) => {
      actionRows.current = [row];

      if (printMenu.current) {
        printMenu.current.instance.option('target', target);
        printMenu.current.instance.option('visible', true);
      }
    },
    [actionRows, printMenu]
  );

  const printMenuItemClicked = useCallback(
    (e: { itemData?: { id: string; text: string } }) => {
      if (
        e.itemData &&
        print &&
        actionRows.current &&
        actionRows.current?.length > 0
      ) {
        const item = e.itemData;

        print(
          item.id,
          actionRows.current.map(item => item.Id)
        );
      }
    },
    [actionRows, print]
  );

  const actionMenuExecute = useCallback(
    (row: CrudItem, target: Element) => {
      const actions = [];

      if (t && viewAllowed && editAllowed && dropAllowed && printAllowed && customFunctionAllowed && customFunctions) {          
        const defaultViewFunction = customFunctions
          .map(f =>
            Object.assign({}, f, { row: row, originalTarget: target })
          )
          .find(f => f.type === 'default_view' && customFunctionAllowed(f, row));

        const defaultEditFunction = customFunctions
          .map(f =>
            Object.assign({}, f, { row: row, originalTarget: target })
          )
          .find(f => f.type === 'default_edit' && customFunctionAllowed(f, row));

        if (defaultViewFunction) {
          actions.push(defaultViewFunction);
        } else if (viewAllowed && viewAllowed(row)) {
          actions.push({
            id: 'view',
            text: t('datacontainer.actions.show'),
            icon: 'bi bi-eye-fill',
            row: row,
            originalTarget: target,
            execute: viewExecute,
          });
        }

        if (defaultEditFunction) {
          actions.push(defaultEditFunction);
        } else if (editAllowed && editAllowed(row)) {
          actions.push({
            id: 'edit',
            text: t('datacontainer.actions.edit'),
            icon: 'bi bi-pencil-fill',
            row: row,
            originalTarget: target,
            execute: editExecute,
          });
        }

        if (dropAllowed && dropAllowed(row)) {
          actions.push({
            id: 'delete',
            text: t('datacontainer.actions.remove'),
            icon: 'bi bi-trash-fill',
            row: row,
            originalTarget: target,
            execute: deleteExecute,
          });
        }

        if (printAllowed && printAllowed(row)) {
          actions.push({
            id: 'print',
            text: t('datacontainer.actions.print'),
            icon: 'bi bi-printer-fill',
            row: row,
            originalTarget: target,
            execute: printExecute,
          });
        }

        if (customFunctions && customFunctionAllowed) {
          const additionalFunctions = customFunctions
            ?.filter(f => f.type === 'edit' && customFunctionAllowed(f, row))
            .map(f =>
              Object.assign({}, f, { row: row, originalTarget: target })
            );

          additionalFunctions?.forEach(f => actions.push(f));
        }

        if (actionMenu.current) {
          actionMenu.current.instance.option('dataSource', actions);
          actionMenu.current.instance.option('target', target);
          actionMenu.current.instance.option('visible', true);
        }
      }
    },
    [
      t,
      viewAllowed,
      editAllowed,
      dropAllowed,
      printAllowed,
      customFunctionAllowed,
      viewExecute,
      editExecute,
      deleteExecute,
      printExecute,
      customFunctions,
      actionMenu,
    ]
  );

  const additionalActionMenuExecute = useCallback(
    (row: CrudItem, target: Element) => {
      const actions: Array<any> = [];

      if (customFunctions && customFunctionAllowed) {
        const additionalFunctions = customFunctions
          ?.filter(f => (f.type === 'edit' || f.type === 'export') && customFunctionAllowed(f, row))
          .map(f => Object.assign({}, f, { row: row, originalTarget: target }));

        additionalFunctions?.forEach(f => actions.push(f));
      }

      if (actionMenu.current) {
        actionMenu.current.instance.option('dataSource', actions);
        actionMenu.current.instance.option('target', target);
        actionMenu.current.instance.option('visible', true);
      }
    },
    [customFunctionAllowed, customFunctions, actionMenu]
  );

  const actionItemClicked = useCallback(
    (e: {
      itemData?: EntityCustomFunction & {
        row: CrudItem;
        originalTarget: Element;
      };
    }) => {
      if (e.itemData) {
        switch (e.itemData.id) {
          case 'view':
            viewExecute(e.itemData.row, e.itemData.originalTarget);
            break;
          case 'edit':
            editExecute(e.itemData.row, e.itemData.originalTarget);
            break;
          case 'delete':
            deleteExecute(e.itemData.row, e.itemData.originalTarget);
            break;
          case 'print':
            printExecute(e.itemData.row, e.itemData.originalTarget);
            break;
          default: {
            switch (e.itemData.type) {              
              case 'edit':
              case 'default_edit':
              case 'default_view':
                if (customEdit) {
                  customEdit(e.itemData, [e.itemData.row]);
                }
                break;
            }
          }
        }
      }
    },
    [customEdit, printExecute, deleteExecute, editExecute, viewExecute]
  );

  const onRowDblClick = useCallback(
    (e: { event: dxEvent; data: CrudItem; element: dxElement }) => {
      e.event.stopPropagation();

      actionRows.current = [e.data];
      actionMenuExecute(e.data, e.element);
    },
    [actionRows, actionMenuExecute]
  );

  const addMenuItemClicked = useCallback(
    (e: {
      itemData?: {
        id: string;
        text: string;
        customFunction?: EntityCustomFunction;
      };
    }) => {
      if (e.itemData) {
        const item = e.itemData;

        if (item.id === 'none') {
          if (add && editLayout) {
            add(editLayout);
          }
        } else {
          if (item.customFunction && customEdit) {
            customEdit(item.customFunction);
          }
        }
      }
    },
    [add, customEdit, editLayout]
  );

  const exportMenuItemClicked = useCallback(
    (e: {
      itemData?: {
        id: string;
        text: string;
        customFunction?: EntityCustomFunction;
      };
    }) => {
      if (e.itemData 
        && e.itemData.customFunction
        && exportItems         
        && actionRows.current) {
        
        exportItems(e.itemData.customFunction, actionRows.current).then(response => {
          if (response) {
            window.open(response, '_blank');
          }
        });
      }                 
    },
    [exportItems]
  );

  const importMenuItemClicked = useCallback(
    (e: {
      itemData?: {
        id: string;
        text: string;
        customFunction?: EntityCustomFunction;
      };
    }) => {
      if (e.itemData 
        && e.itemData.customFunction
        && importItems) {        
          importItems(e.itemData.customFunction);
      }  
    },
    [importItems]
  );

  const addButtonClicked = useCallback(
    (e: { target: Element }) => {
      if (addMenu.current && addMenuItems && addMenuItems.length > 1) {
        addMenu.current.instance.option('dataSource', addMenuItems);
        addMenu.current.instance.option('target', e.target);
        addMenu.current.instance.option('visible', true);
      } else if (addMenuItems) {
        addMenuItemClicked({ itemData: addMenuItems[0] });
      }
    },
    [addMenuItemClicked, addMenuItems]
  );

  const printButtonClicked = useCallback(
    (e: { target: Element; items: Array<CrudItem> }) => {
      actionRows.current = e.items;

      if (printMenu.current) {
        printMenu.current.instance.option('target', e.target);
        printMenu.current.instance.option('visible', true);
      }
    },
    [printMenu]
  );

  const exportButtonClicked = useCallback(
    (e: { target: Element; items: Array<CrudItem> }) => {
      actionRows.current = e.items;

      if (exportMenu.current && exportMenuItems && exportMenuItems.length > 0) {
        exportMenu.current.instance.option('dataSource', exportMenuItems);
        exportMenu.current.instance.option('target', e.target);
        exportMenu.current.instance.option('visible', true);
      }
    },
    [exportMenu, exportMenuItems]
  );

  const importButtonClicked = useCallback(
    (e: { target: Element; items: Array<CrudItem> }) => {
      actionRows.current = e.items;

      if (importMenu.current && importMenuItems && importMenuItems.length > 0) {
        importMenu.current.instance.option('dataSource', importMenuItems);
        importMenu.current.instance.option('target', e.target);
        importMenu.current.instance.option('visible', true);
      }
    },
    [importMenu, importMenuItems]
  );

  const customFunctionButtonClicked = useCallback(
    (e: { id: string; target: Element; items: Array<CrudItem> }) => {
      if (customFunctions && customEdit) {
        const customFunction = customFunctions.find(f => f.id === e.id);

        if (customFunction) {
          customEdit(customFunction, e.items);
        }
      }
    },
    [customEdit, customFunctions]
  );

  const optionButtonClicked = useCallback(
    (button: OptionButtons, data: CrudItem, target: Element) => {
      if (customFunctionAllowed && customFunctions && customEdit) {          
        const defaultViewFunction = customFunctions          
          .find(f => f.type === 'default_view' && customFunctionAllowed(f, data));

        const defaultEditFunction = customFunctions          
          .find(f => f.type === 'default_edit' && customFunctionAllowed(f, data));      

        switch (button) {
          case 'view':
            if (defaultViewFunction) {
              customEdit(defaultViewFunction, [data])
            } else {
              viewExecute(data, target);
            }            
            break;
          case 'edit':
            if (defaultEditFunction) {
              customEdit(defaultEditFunction, [data])
            } else {
              editExecute(data, target);
            }
            break;
          case 'delete':
            deleteExecute(data, target);
            break;
          case 'print':
            printExecute(data, target);
            break;
          case 'options':
            actionRows.current = [data];
            actionMenuExecute(data, target);
            break;
          case 'customoptions':
            actionRows.current = [data];
            additionalActionMenuExecute(data, target);
            break;
        }
      }
    },
    [
      customFunctionAllowed,
      customFunctions,
      customEdit,
      viewExecute,
      editExecute,
      deleteExecute,
      printExecute,      
      actionMenuExecute,
      additionalActionMenuExecute,
    ]
  );

  const optionButtonAllowed = useCallback(
    (button: OptionButtons, data?: CrudItem): boolean => {
      if (addAllowed && viewAllowed && editAllowed && dropAllowed && printAllowed && customFunctions && customFunctionAllowed) {
        const defaultAddFunction = customFunctions          
          .find(f => f.type === 'default_add' && customFunctionAllowed(f));

        const defaultViewFunction = customFunctions          
          .find(f => !!data && f.type === 'default_view' && customFunctionAllowed(f, data));

        const defaultEditFunction = customFunctions          
          .find(f => !!data && f.type === 'default_edit' && customFunctionAllowed(f, data));      

        switch (button) {
          case 'add':
            return (!!defaultAddFunction || addAllowed());
          case 'view':
            return !!data && (!!defaultViewFunction || viewAllowed(data));
          case 'edit':
            return !!data && (!!defaultEditFunction || editAllowed(data));
          case 'delete':
            return (data && dropAllowed && dropAllowed(data)) ?? false;
          case 'print':
            return (data && printAllowed && printAllowed(data)) ?? false;
          case 'options':
            return true;
          case 'customoptions': {
            if (data && customFunctions && customFunctionAllowed) {
              const allowedAdditionalFunctions = customFunctions?.filter(f =>
                customFunctionAllowed(f, data)
              );

              return allowedAdditionalFunctions?.length > 0;
            }

            return false;
          }
          default:
            return false;
        }
      } else { 
        return false;
      }
    },
    [
      addAllowed,
      viewAllowed,
      editAllowed,
      dropAllowed,
      printAllowed,
      customFunctionAllowed,
      customFunctions,
    ]
  );

  useEffect(() => {
    if (preparedGridLayout) {
      const nextEditLayout =
        preparedGridLayout.editLayout ??
        preparedGridLayout.identifier ??
        'primary';

      setEditLayout(nextEditLayout);
    }
  }, [preparedGridLayout]);

  useEffect(() => {
    if (
      getGridLayout &&
      lookups &&
      customParam &&
      layout &&
      prepareGridLayout
    ) {
      const gridLayout = getGridLayout(layout);

      if (gridLayout) {
        const unpreparedGridLayout = cloneDeep(gridLayout);

        prepareGridLayout(unpreparedGridLayout);

        setPreparedGridLayout(unpreparedGridLayout);
      }
    }
  }, [getGridLayout, lookups, customParam, layout, prepareGridLayout]);

  useEffect(() => {
    if (
      displayName &&
      addAllowed &&
      viewAllowed &&
      editAllowed &&
      printAllowed &&
      dropAllowed &&
      customFunctionAllowed &&
      add &&
      view &&
      edit &&
      customEdit &&
      print &&
      remove
    ) {
      setRenderGrid(true);
    }
  }, [
    t,
    displayName,
    addAllowed,
    viewAllowed,
    editAllowed,
    printAllowed,
    dropAllowed,
    customFunctionAllowed,
    add,
    view,
    edit,
    customEdit,
    print,
    remove,
  ]);

  useEffect(() => {
    if (
      displayName &&
      customFunctions &&
      addAllowed &&
      customFunctionAllowed
    ) {
      const addItems = [];

      const defaultAddFunction = customFunctions        
        .find(f => f.type === 'default_add' && customFunctionAllowed(f));

      if (defaultAddFunction) {
        addItems.push({ id: defaultAddFunction.id, text: defaultAddFunction.text, customFunction: defaultAddFunction })
      } else if (addAllowed()) {
        addItems.push({
          id: 'none',
          text: t('datacontainer.actions.add', { entity: displayName }),
        });
      }

      addItems.push(
        ...customFunctions
          ?.filter(f => f.type === 'add' && customFunctionAllowed(f))
          .map(f => {
            return { id: f.id, text: f.text, customFunction: f };
          })
      );
      
      setAddMenuItems(addItems);
      setExportMenuItems(
        customFunctions
          ?.filter(f => f.type === 'export' && customFunctionAllowed(f))
          .map(f => {
            return { id: f.id, text: f.text, customFunction: f };
          }));
      setImportMenuItems(
        customFunctions
          ?.filter(f => f.type === 'import' && customFunctionAllowed(f))
          .map(f => {
            return { id: f.id, text: f.text, customFunction: f };
          }));
    }
  }, [t, displayName, customFunctions, addAllowed, customFunctionAllowed]);

  const smallColumnConfiguration = useMemo(
    () =>
      renderGrid && headParams && preparedGridLayout
        ? createColumnConfiguration<dxDataGridColumn>(
            t,
            preparedGridLayout.columns,
            lookups,
            headParams,
            'small',
            optionButtonClicked,
            optionButtonAllowed
          )
        : [],
    [
      renderGrid,
      t,
      preparedGridLayout,
      lookups,
      headParams,
      optionButtonAllowed,
      optionButtonClicked,
    ]
  );
  const mediumColumnConfiguration = useMemo(
    () =>
      renderGrid && headParams && preparedGridLayout
        ? createColumnConfiguration<dxDataGridColumn>(
            t,
            preparedGridLayout.columns,
            lookups,
            headParams,
            'medium',
            optionButtonClicked,
            optionButtonAllowed
          )
        : [],
    [
      renderGrid,
      t,
      preparedGridLayout,
      lookups,
      headParams,
      optionButtonAllowed,
      optionButtonClicked,
    ]
  );
  const largeColumnConfiguration = useMemo(
    () =>
      renderGrid && headParams && preparedGridLayout
        ? createColumnConfiguration<dxDataGridColumn>(
            t,
            preparedGridLayout.columns,
            lookups,
            headParams,
            'large',
            optionButtonClicked,
            optionButtonAllowed
          )
        : [],
    [
      renderGrid,
      t,
      preparedGridLayout,
      lookups,
      headParams,
      optionButtonAllowed,
      optionButtonClicked,
    ]
  );
  const summaryConfiguration = useMemo(
    () =>
      renderGrid && preparedGridLayout
        ? createSummaryConfiguration(preparedGridLayout)
        : null,
    [renderGrid, preparedGridLayout]
  );

  const headCustomFunctions = useMemo(
    () =>
      renderGrid && customFunctionAllowed
        ? customFunctions?.filter(f => f.multi && f.type === 'edit' && customFunctionAllowed(f))
        : null,
    [renderGrid, customFunctions, customFunctionAllowed]
  );

  const dataSource = useMemo(
    () =>
      fetchedItems && save
        ? createEditableGridDatasource(fetchedItems, (item) => save(item, { id: 'primary', type: 'edit', text: 'Default', editLayout: 'primary' }))
        : undefined,
    [fetchedItems, save]
  );

  return (
    <React.Fragment>
      {renderGrid &&
      load &&
      preparedGridLayout &&
      summaryConfiguration &&
      dataSource && (
          <DataGrid
            customFunctions={headCustomFunctions ?? []}
            showReload={true}
            showAdd={(addMenuItems && addMenuItems?.length > 0) ?? false}
            showPrint={(preparedGridLayout.allowMultiselect && documents && documents.length > 0) ?? false}
            showExport={(exportMenuItems && exportMenuItems.length > 0) ?? false}
            showImport={(importMenuItems && importMenuItems.length > 0) ?? false}
            onReloadClick={() => load()}
            onCustomFunctionClick={customFunctionButtonClicked}
            onAddClick={addButtonClicked}
            onPrintClick={printButtonClicked}
            onExportClick={exportButtonClicked}
            onImportClick={importButtonClicked}
            onRowDblClick={onRowDblClick}
            isMasterDetailExpandable={(e) => optionButtonAllowed('view', e.data)}
            exportFileName={`${displayName}_${moment().format('YYYYMMDD')}`}
            layout={preparedGridLayout}
            summary={summaryConfiguration}
            mode={
              smallScreen ? 'small' : mediumScreen ? 'medium' : 'large'
            }
            height={height ?? '100%'}
            dataSource={dataSource}
            columns={
              smallScreen
                ? smallColumnConfiguration
                : mediumScreen
                ? mediumColumnConfiguration
                : largeColumnConfiguration
            }
          />
        )}
      <ActionSheet
        ref={actionMenu}
        width={'auto'}
        title={t('datacontainer.actionsheet.title')}
        usePopover={!smallScreen}
        showCancelButton
        onItemClick={actionItemClicked}
      />
      {documents && (
        <ActionSheet
          width={'auto'}
          title={t('datacontainer.actions.print')}
          usePopover={!smallScreen}
          ref={printMenu}
          dataSource={documents}
          onItemClick={printMenuItemClicked}
        />
      )}
      {displayName && (
        <ActionSheet
          ref={addMenu}
          width={'auto'}
          title={t('datacontainer.actions.add', { entity: displayName })}
          showCancelButton
          usePopover={!smallScreen}
          onItemClick={addMenuItemClicked}
        />
      )}
      {exportMenuItems && (<ActionSheet
          ref={exportMenu}
          width={'auto'}
          title={t('datacontainer.actions.export', { entity: displayName })}
          showCancelButton
          usePopover={!smallScreen}
          onItemClick={exportMenuItemClicked}
        />
      )}
      {importMenuItems && (<ActionSheet
          ref={importMenu}
          width={'auto'}
          title={t('datacontainer.actions.import', { entity: displayName })}
          showCancelButton
          usePopover={!smallScreen}
          onItemClick={importMenuItemClicked}
        />
      )}
    </React.Fragment>
  );
};
