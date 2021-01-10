import { Rights } from './rights';
import { ScriptUtil } from './scriptutil';
import { ScriptActions, EditUtil } from './entity';

export interface TabItemOptions {
  caption: string;
}

export interface CrudContainerOptions {
  entity: string;
  query?: string;
}

export interface EntityGridOptions extends CrudContainerOptions {
  height?: string;
  layout?: string;
}

export interface EntityMapOptions extends CrudContainerOptions {
  height?: string;
  editLayout?: string;
  locationMember: string;
  displayMember: string;
}

export interface StatisticOptions {
  statistic: string;
}

export interface PageLayoutItemOptions {
  height?: string;
  width?: string;
  itemoptions?:
    | TabItemOptions
    | CrudContainerOptions
    | EntityGridOptions
    | EntityMapOptions
    | StatisticOptions;
}

export interface PageLayoutItem {
  type:
    | 'tabs'
    | 'tabitem'
    | 'entitygrid'
    | 'statistic'
    | 'crudcontainer'
    | 'grid'
    | 'map';
  options?: PageLayoutItemOptions;
  colCount?: number;
  colSpan?: number;
  items?: Array<PageLayoutItem>;
}

export interface PageToolbarItem {
  type: string;
  name: string;
  caption?: string;
  lookup?: string;
  width?: string;
  defaultValue: unknown | Array<unknown>;
  options: Record<string, unknown>;
}

export interface PageLayout {
  title?: string;
  documentationEntity?: string;
  /** @deprecated */ searchparams?: Array<PageToolbarItem>;
  toolbaritems?: Array<PageToolbarItem>;
  items: Array<PageLayoutItem>;
}

export interface CompiledPageCustomScripts {
  pageVisible?: (rights: Rights, page: string) => boolean;
  pageEnabled?: (rights: Rights, page: string) => boolean;
  prepareCustomParam?: (
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    callback: (customParam: Record<string, unknown>) => void
  ) => void;
  paramsInitialized?: (
    hidden: boolean,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions
  ) => void;
  paramEditorInitialized?: (
    name: string,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions
  ) => void;
  paramEditorValueChanged?: (
    name: string,
    value: unknown | Array<unknown>,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions
  ) => void;
  paramEditorEvent?: (
    name: string,
    event: string,
    editUtil: EditUtil,
    lookups: Record<string, unknown>,
    util: ScriptUtil,
    actions: ScriptActions,
    param?: Record<string, unknown>
  ) => void;
}

export interface CompiledPageData {
  identifier: string;
  name: string;
  layout: PageLayout;
  lookups: Array<{
    identifier: string;
    id: string;
    valueMember: string;
    displayMember: string;
    type: number;
    hasParam: boolean;
  }>;
  picklists: Array<{ identifier: string; entity: string; field: string }>;
  compiledCustomScripts?: CompiledPageCustomScripts;
}

export interface MetaPageApi {
  pageDataForIdentifier: (
    token: string,
    page: string
  ) => Promise<CompiledPageData>;
}
