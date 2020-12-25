import { DocumentSelectEntry } from './document';
import { ScriptUtil } from './scriptutil';
import { CrudItem, ValueType } from './cruditem';
import { ExtendedRightsCheckFunc } from './rights';

export interface EditUtil {
  getEditorOption: (dataMember: string, option: string) => unknown;
  setEditorOption: (dataMember: string, option: string, value: unknown) => void;
}

export interface ScriptActions {
  loadData: (params: Record<string, unknown>) => void;
}

export interface EntityCustomFunction {
  entity?: string;
  id: string;
  type: 'add' | 'edit';
  text: string;
  icon?: string;
  multi?: boolean;
  externalEditor?: boolean;
  editLayout: string;
}

export interface DetailLayout {
  colCount?: number;
  colCountByScreen?: { sm?: number; lg?: number };
  height?: string;
  items: Array<EditLayoutItem>;
}

export interface EditLayoutItemOptions {
  caption?: string;
  dataMember?: string;
  required?: boolean;
  readonly?: boolean;
  lookup?: string;
  lookupParam?: string;
  valueExpr?: string;
  displayExpr?: string;
  height?: string;
  width?: string;
  acceptCustomValue?: boolean;
  itemsMember?: string;
  hint?: string;
  items?: Array<{ Value: string; Text: string }>;
  itemoptions?: unknown;
  validations?: Array<{ identifier: string; message: string }>;
}

export interface EditLayoutItem {
  type: string;
  options?: EditLayoutItemOptions;
  colCount?: number;
  colSpan?: number;
  items?: Array<EditLayoutItem>;
}

export interface GridLayoutColumn {
  type: string;
  dataMember: string;
  caption: string;
  lookup?: string;
  lookupParam?: string;
  lookupMember?: string;
  displayExpr?: string;
  valueExpr?: string;
  width?: string;
  precision?: number;
  fixedPosition?: 'left' | 'right';
  sorting?: 'asc' | 'desc';
  position?: number;
  hidingPriority?: number;
  visible?: boolean;
  editable?: boolean;
  editFunction?: string;
  required?: boolean;
  popuplayout?: string;
  items?: Array<{ Value: unknown; Text: string }>;
}

export interface GridLayout {
  identifier: string;
  title: string;
  editLayout?: string;
  allowMultiselect?: boolean;
  allowEditing?: boolean;
  columns: Array<GridLayoutColumn>;
  summaries?: Array<{ dataMember: string; groupSummary: boolean; totalSummary: boolean; summaryType: string }>;
  details?: DetailLayout;
}

export interface EditLayout {
  identifier: string;
  colCount?: number;
  colCountByScreen?: { sm?: number; lg?: number };
  fullscreen?: boolean;
  items: Array<EditLayoutItem>;
}

export interface CompiledEntityCustomScripts {
  extendedRightsCheck?: ExtendedRightsCheckFunc;
  rightsParamForHead?: (customParam: unknown) => Record<string, unknown>;
  rightsParamForItem?: (item: Record<string, unknown>, customParam: unknown) => Record<string, unknown>;
  prepareCustomParam?: (
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    callback: (customParam: Record<string, unknown>) => void,
  ) => void;
  prepareGridLayout?: (
    lookups: Record<string, unknown>,
    customParam: unknown,
    util: ScriptUtil,
    gridLayout: GridLayout,
  ) => void;
  prepareEditLayout?: (
    mode: string,
    lookups: Record<string, unknown>,
    customParam: unknown,
    util: ScriptUtil,
    editLayout: EditLayout,
  ) => void;
  editorPreparing?: (
    mode: string,
    item: Record<string, unknown>,
    layoutItem: unknown,
    identifier: string,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
  ) => void;
  editorInitialized?: (
    mode: string,
    item: Record<string, unknown>,
    editUtil: EditUtil,
    identifier: string,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
  ) => void;
  editorValueChanged?: (
    item: Record<string, unknown>,
    editUtil: EditUtil,
    identifier: string,
    value: ValueType,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
  ) => void;
  editorEvent?: (
    item: Record<string, unknown>,
    editUtil: EditUtil,
    identifier: string,
    event: string,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
  ) => void;
  editorEntered?: (
    mode: string,
    item: Record<string, unknown>,
    editUtil: EditUtil,
    identifier: string,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
  ) => void;
  editorValidating?: (
    item: Record<string, unknown>,
    editUtil: EditUtil,
    identifier: string,
    value: ValueType,
    validation: string,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
  ) => boolean;
  detailGridCellPreparing?: (
    mode: string,
    item: CrudItem,
    detailItem: Record<string, unknown>,
    identifier: string,
    options: unknown,
    util: ScriptUtil,
  ) => void;
  detailGridRowValidating?: (
    mode: string,
    item: CrudItem,
    detailItem: Record<string, unknown>,
    identifier: string,
    util: ScriptUtil,
  ) => string;
  initNewDetailItem?: (
    dataMember: string,
    item: CrudItem,
    detailItem: Record<string, unknown>,
    util: ScriptUtil,
  ) => void;
  paramEditorInitialized?: (
    name: string,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions,
  ) => void;
  paramEditorValueChanged?: (
    name: string,
    value: Record<string, unknown> | Array<Record<string, unknown>>,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions,
  ) => void;
  paramEditorEvent?: (
    name: string,
    event: string,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions,
    param?: Record<string, unknown>,
  ) => void;
  prepareCustomFunction?: (
    identifier: string,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    executeCallback: (param: Record<string, unknown>) => void,
    messageCallback: (message: string) => void,
    selection?: Array<CrudItem>,
  ) => void;
  evaluateCustomFunction?: (
    identifier: string,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    param: Record<string, unknown>,
    saveCallback: (param: Record<string, unknown>) => void,
    messageCallback: (message: string) => void,
  ) => void;
}

export interface CompiledEntityMetadata {
  application: string;
  entity: string;
  displayName: string;
  baseUrl: string;
  itemMappingScript: (item: CrudItem, customParam: unknown, util: ScriptUtil) => CrudItem;
  itemReverseMappingScript: (item: CrudItem, customParam: unknown, util: ScriptUtil) => CrudItem;
  compiledCustomScripts?: CompiledEntityCustomScripts;
  customFunctions?: Array<EntityCustomFunction>;
  gridLayouts: Array<GridLayout>;
  editLayouts: Array<EditLayout>;
  lookups: Array<{
    identifier: string;
    id: string;
    valueMember: string;
    displayMember: string;
    type: number;
    hasParam: boolean;
  }>;
  picklists: Array<{ identifier: string; entity: string; field: string }>;
  stateColumn: string;
}

export interface MetaEntityApi {
  metadataForEntity: (token: string, entity: string) => Promise<CompiledEntityMetadata>;
  documentsForEntity: (token: string, entity: string) => Promise<Array<DocumentSelectEntry>>;
}
