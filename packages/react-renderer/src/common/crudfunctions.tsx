/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useEffect,
  useContext,
  useCallback,
  PropsWithChildren,
} from 'react';
import { useTranslation } from 'react-i18next';

import { CrudItem } from '@ballware/meta-interface';
import {
  ProviderFactoryContext,
  LookupContext,
  CrudContext,
  MetaContext,
  EditModes,
  DefaultEditFunction,
} from '@ballware/react-contexts';
import { RenderFactoryContext } from '../renderfactorycontext';
import { useMetaEditLayout } from '@ballware/react-provider';

/**
 * Properties for crud functions component
 */
export interface CrudFunctionsProps {}

/**
 * Component providing crud editing functionality with popups
 */
export const CrudFunctions = ({
  children,
}: PropsWithChildren<CrudFunctionsProps>) => {
  const { t } = useTranslation();

  const { lookups, lookupsComplete } = useContext(LookupContext);

  const { EditPopup, DeletePopup, IframePopup, ForeignEditPopup, ImportPopup } = useContext(
    RenderFactoryContext
  );

  const {
    LookupProvider,
    MetaProvider,
    AttachmentProvider,
    CrudProvider,
    EditProvider,
  } = useContext(ProviderFactoryContext);
  const { displayName, documents } = useContext(MetaContext);
  const {
    load,
    fetchParams,
    close,
    adding,
    viewing,
    editing,
    deleteing,
    importing,
    customEditing,
    customEditFunction,
    customEditTitle,
    customEditParam,
    editLayout,
    item,
  } = useContext(CrudContext);

  const { 
    getEditLayout
  } = useMetaEditLayout();

  useEffect(() => {
    if (load && fetchParams) {
      load(fetchParams);
    }
  }, [load, fetchParams]);

  const getEditLayoutForIdentifier = useCallback(
    (layoutIdentifier: string) => {
      if (getEditLayout) {
        return getEditLayout(layoutIdentifier ?? 'primary');
      }

      return undefined;
    },
    [getEditLayout]
  );

  return (
    <React.Fragment>
      {t && EditProvider && EditPopup && adding && item && editLayout && (
        <EditProvider
          mode={EditModes.CREATE}
          editLayout={getEditLayoutForIdentifier(editLayout)}
          item={item}
          editFunction={DefaultEditFunction}
        >
          <EditPopup
            title={t('datacontainer.titles.add', { entity: displayName })}
          />
        </EditProvider>
      )}
      {t && EditProvider && EditPopup && viewing && item && editLayout && (
        <EditProvider
          mode={EditModes.VIEW}
          editLayout={getEditLayoutForIdentifier(editLayout)}
          item={item}
          editFunction={DefaultEditFunction}
        >
          <EditPopup
            title={t('datacontainer.titles.view', { entity: displayName })}
          />
        </EditProvider>
      )}
      {t && EditProvider && EditPopup && editing && item && editLayout && (
        <EditProvider
          mode={EditModes.EDIT}
          editLayout={getEditLayoutForIdentifier(editLayout)}
          item={item}
          editFunction={DefaultEditFunction}
        >
          <EditPopup
            title={t('datacontainer.titles.edit', { entity: displayName })}
          />
        </EditProvider>
      )}
      {EditProvider &&
        EditPopup &&
        customEditing &&
        !customEditFunction?.externalEditor &&
        !customEditFunction?.entity &&
        customEditFunction?.editLayout &&
        getEditLayout && (
          <EditProvider
            mode={EditModes.EDIT}
            editLayout={getEditLayoutForIdentifier(
              customEditFunction?.editLayout
            )}
            item={customEditParam as Record<string, unknown>}
            editFunction={customEditFunction}
          >
            <EditPopup title={`${customEditTitle ?? customEditFunction?.text}`} />
          </EditProvider>
        )}
      {IframePopup && customEditing && customEditFunction?.externalEditor && (
        <IframePopup
          title={`${customEditFunction?.text}`}
          url={customEditParam as string}
        />
      )}
      {ForeignEditPopup &&
        LookupProvider &&
        MetaProvider &&
        AttachmentProvider &&
        CrudProvider &&
        customEditing &&
        !customEditFunction?.externalEditor &&
        customEditFunction?.entity &&
        close &&
        load && (
          <LookupProvider>
            <MetaProvider
              entity={customEditFunction.entity}
              readOnly={false}
              headParams={{}}
              initialCustomParam={{}}
            >
              <AttachmentProvider>
                <CrudProvider query={undefined} initialFetchParams={{}} identifier={undefined}>
                  <ForeignEditPopup
                    functionIdentifier={customEditFunction.id}
                    selection={customEditParam as CrudItem[]}
                    editingFinished={reload => {
                      close();

                      if (reload) {
                        load(fetchParams);
                      }
                    }}
                  />
                </CrudProvider>
              </AttachmentProvider>
            </MetaProvider>
          </LookupProvider>
        )}
      {t && DeletePopup && deleteing && item && (
        <DeletePopup
          title={t('datacontainer.titles.remove', { entity: displayName })}
          message={t('datacontainer.messages.remove', { entity: displayName })}
          id={item.Id}
        />
      )}
      {ImportPopup && importing && customEditFunction && <ImportPopup importFunction={customEditFunction} />}
      {displayName &&
        getEditLayout &&
        lookups &&
        documents &&
        lookupsComplete &&
        children}
    </React.Fragment>
  );
};
