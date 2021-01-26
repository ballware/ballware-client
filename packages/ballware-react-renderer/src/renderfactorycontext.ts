import { createContext } from 'react';

import {
  CrudItem,
  EditLayoutItem,
  EditLayoutItemOptions,
  GridLayoutColumn,
  PageLayoutItem,
  PageToolbarItem,
  ValueType,
} from '@ballware/meta-interface';
import { RouteProps } from 'react-router-dom';

export interface ApplicationProps {
  drawerWidth?: string | number;
  children?: JSX.Element | JSX.Element[] | never[];
}

export interface ApplicationBarProps {
  title?: string;
  drawerWidth: string | number;
  onMenuToggle?: () => void;
  children?: JSX.Element | JSX.Element[];
}

export interface NavigationProps {
  onMenuToggle?: () => void;
  children?: JSX.Element | JSX.Element[];
}

export interface PrivateRouteProps extends RouteProps {
  allowed: () => boolean;
}

export interface ContextProps {
  children?: JSX.Element | JSX.Element[];
}

export interface EditPopupProps {
  title: string;
}

export interface IframePopupProps {
  title: string;
  url: string;
}

export interface DeletePopupProps {
  title: string;
  message: string;
  id: string;
}

export interface ForeignEditPopupProps {  
  functionIdentifier: string;
  selection: Array<CrudItem>;
  editingFinished: (reload: boolean) => void;
}

export interface DetailEditPopupProps {  
  readonly: boolean;
  column: GridLayoutColumn;
  applyChanges: (e: { value: CrudItem | ValueType }) => void;
}

export interface RenderFactoryContextState {
  Context?: (props: { children: JSX.Element | JSX.Element[] }) => JSX.Element;
  Application?: (props: ApplicationProps) => JSX.Element;
  ApplicationBar?: (props: ApplicationBarProps) => JSX.Element;
  Navigation?: (props: NavigationProps) => JSX.Element;
  PrivateRoute?: (props: PrivateRouteProps) => JSX.Element;
  Routes?: (props: {}) => JSX.Element;
  Notification?: (props: {}) => JSX.Element;
  Page?: (props: {}) => JSX.Element;
  PageToolbar?: (props: {
    documentationIdentifier?: string;
    title?: string;
    items?: PageToolbarItem[];
  }) => JSX.Element;
  PageLayoutItem?: (props: {
    layoutItem: PageLayoutItem;
    colCount?: number;
    params?: Record<string, unknown>;
  }) => JSX.Element;
  EditLayoutItem?: (props: {
    layoutItem: EditLayoutItem;
    colCount?: number;
  }) => JSX.Element;
  Editor?: (props: {
    type: string;
    options: EditLayoutItemOptions;
  }) => JSX.Element;
  PageToolbarItem?: (props: { toolbarItem: PageToolbarItem }) => JSX.Element;
  EditPopup?: (props: EditPopupProps) => JSX.Element;
  IframePopup?: (props: IframePopupProps) => JSX.Element;
  DeletePopup?: (props: DeletePopupProps) => JSX.Element;
  ForeignEditPopup?: (props: ForeignEditPopupProps) => JSX.Element;
  DetailEditPopup?: (props: DetailEditPopupProps) => JSX.Element;
}

export const RenderFactoryContext = createContext<RenderFactoryContextState>(
  {}
);