import { Rights } from './rights';

export interface NavigationLayoutItem {
  type: 'page' | 'group' | 'section';
  options: {
    page?: string;
    url?: string;
    caption?: string;
  };
  items?: Array<NavigationLayoutItem>;
}

export interface NavigationLayout {
  title: string;
  defaultUrl: string;
  items: Array<NavigationLayoutItem>;
}

export interface CompiledTenant {
  id: string;
  name: string;
  navigation?: NavigationLayout;
  pageVisible: (rights: Rights, page: string) => boolean;
}

export interface MetaTenantApi {
  metadataForTenant: (token: string, tenant: string) => Promise<CompiledTenant>;
}
