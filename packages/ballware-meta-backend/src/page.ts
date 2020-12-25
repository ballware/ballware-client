import { MetaPageApi, CompiledPageData } from '@ballware/meta-interface';
import JSON5 from 'json5';
import axios from 'axios';

interface PageData {
    Identifier: string;
    Name: string;
    Layout?: string;
    Lookups?: string;
    Picklists?: string;
    CustomScripts?: string;
}

interface PageCustomScripts {
    pageVisible?: string;
    pageEnabled?: string;
    prepareCustomParam?: string;
    paramsInitialized?: string;
    paramEditorInitialized?: string;
    paramEditorValueChanged?: string;
    paramEditorEvent?: string;
}
 
const compilePage = (pageData: PageData): CompiledPageData => {
  
    const compiledPageData = {
      identifier: pageData.Identifier,
      name: pageData.Name,
      lookups: pageData.Lookups ? JSON5.parse(pageData.Lookups) : [],
      layout: pageData.Layout ? JSON5.parse(pageData.Layout) : {},
    } as CompiledPageData;
  
    if (pageData.CustomScripts) {
      compiledPageData.compiledCustomScripts = {};
  
      const customScripts = JSON5.parse(pageData.CustomScripts) as PageCustomScripts;
  
      if (customScripts.pageVisible) {
        const compiledArgs = ['rights', 'page'];
        const compiledFn = Function.apply(Function, compiledArgs.concat(customScripts.pageVisible));
  
        compiledPageData.compiledCustomScripts.pageVisible = compiledFn ? (rights, page) => compiledFn.apply(compiledFn, [rights, page]) : null;
      }
  
      if (customScripts.pageEnabled) {
        const compiledArgs = ['rights', 'page'];
        const compiledFn = Function.apply(Function, compiledArgs.concat(customScripts.pageEnabled));
  
        compiledPageData.compiledCustomScripts.pageEnabled = compiledFn ? (rights, page) => compiledFn.apply(compiledFn, [rights, page]) : null;
      }
  
      if (customScripts.prepareCustomParam) {
        const compiledArgs = ['lookups', 'util', 'callback'];
        const compiledFn = Function.apply(Function, compiledArgs.concat(customScripts.prepareCustomParam));
  
        compiledPageData.compiledCustomScripts.prepareCustomParam = compiledFn ? (lookups, util, callback) => compiledFn.apply(compiledFn, [lookups, util, callback]) : null;
      }
      
      if (customScripts.paramsInitialized) {
        const compiledArgs = ['hidden', 'lookups', 'util', 'actions'];
        const compiledFn = Function.apply(Function, compiledArgs.concat(customScripts.paramsInitialized));
  
        compiledPageData.compiledCustomScripts.paramsInitialized = compiledFn ? (hidden, lookups, util, actions) => compiledFn.apply(compiledFn, [hidden, lookups, util, actions]) : null;
      }
  
      if (customScripts.paramEditorInitialized) {
        const compiledArgs = ['name', 'editUtil', 'lookups', 'util', 'actions'];
        const compiledFn = Function.apply(Function, compiledArgs.concat(customScripts.paramEditorInitialized));
  
        compiledPageData.compiledCustomScripts.paramEditorInitialized = compiledFn ? (name, editUtil, lookups, util, actions) => compiledFn.apply(compiledFn, [name, editUtil, lookups, util, actions]) : null;
      }
  
      if (customScripts.paramEditorValueChanged) {
        const compiledArgs = ['name', 'value', 'editUtil', 'lookups', 'util', 'actions'];
        const compiledFn = Function.apply(Function, compiledArgs.concat(customScripts.paramEditorValueChanged));
  
        compiledPageData.compiledCustomScripts.paramEditorValueChanged = compiledFn ? (name, value, editUtil, lookups, util, actions) => compiledFn.apply(compiledFn, [name, value, editUtil, lookups, util, actions]) : null;
      }
  
      if (customScripts.paramEditorEvent) {
        const compiledArgs = ['name', 'event', 'editUtil', 'lookups', 'util', 'actions', 'param'];
        const compiledFn = Function.apply(Function, compiledArgs.concat(customScripts.paramEditorEvent));
  
        compiledPageData.compiledCustomScripts.paramEditorEvent = compiledFn ? (name, event, editUtil, lookups, util, actions, param) => compiledFn.apply(compiledFn, [name, event, editUtil, lookups, util, actions, param]) : null;
      }
    }
  
    return compiledPageData;
}
  

const pageDataForIdentifier = (metaServiceBaseUrl: string) => (token: string, page: string): Promise<CompiledPageData> => {
    const url = `${metaServiceBaseUrl}api/page/pagedataforidentifier/${page}`;

    return axios.get<PageData>(url, { headers: { 'Authorization': `Bearer ${token}` }}).then(response => compilePage(response.data));
}

export function createMetaBackendPageApi(metaServiceBaseUrl: string): MetaPageApi {
    return {
        pageDataForIdentifier: pageDataForIdentifier(metaServiceBaseUrl),
    } as MetaPageApi;
}