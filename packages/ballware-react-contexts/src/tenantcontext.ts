import { createContext } from 'react';
import { NavigationLayout, NavigationLayoutItem } from '@ballware/meta-interface';

export interface TenantContextState {
    name?: string;
    navigation?: NavigationLayout;
    pages?: Array<NavigationLayoutItem>;
    pageAllowed?: (page: string) => boolean;
}

export const TenantContext = createContext({} as TenantContextState);
