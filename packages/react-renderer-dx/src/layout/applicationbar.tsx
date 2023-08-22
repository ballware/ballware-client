/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { RightsContext } from '@ballware/react-contexts';
import { useInterval } from '@ballware/react-renderer';
import { ActionSheet, Toolbar } from 'devextreme-react';
import { ItemClickEvent } from 'devextreme/ui/context_menu';
import { dxToolbarItem } from 'devextreme/ui/toolbar';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import React, { useContext, useMemo, useRef } from 'react';
import { useObservableState } from 'observable-hooks';
import { useTranslation } from 'react-i18next';
import { useMedia } from 'react-media';
import { GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';

export interface ApplicationBarProps {
  title?: string;
  onMenuToggle?: () => void;
}

interface SessionMenuItem {
  text: string,
  onClick: () => void;
}

export const ApplicationBar = ({
  title,
  onMenuToggle
}: ApplicationBarProps) => {

  momentDurationFormatSetup(moment);

  const { t } = useTranslation();

  const { small } = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const {
    timeout_in$,
    session$,
    expired,
    logout,
    refresh,
    manageAccount,
    tenant$,
    allowedTenants$,
    switchTenant
  } = useContext(RightsContext);

  const timeout_in = useObservableState(timeout_in$, undefined);
  const tenant = useObservableState(tenant$, undefined);
  const allowedTenants = useObservableState(allowedTenants$, undefined);
  const session = useObservableState(session$, undefined);

  const [timeoutIn, setTimeoutIn] = React.useState(
    timeout_in ? moment(timeout_in).diff(moment(), 'seconds') : 0
  );

  const sessionMenuRef = useRef<ActionSheet>(null);
  
  useInterval(() => {
    if (timeout_in) {
      let timeout_diff = Math.max(
        0,
        moment(timeout_in).diff(moment(), 'seconds')
      );

      if (timeout_diff === 0 && expired) {
        expired();
      } else {
        setTimeoutIn(timeout_diff);
      }
    } else {
      setTimeoutIn(0);
    }
  }, 1000);
  
  const sessionTimeoutDisplayText = useMemo(
    () => `${moment.duration(timeoutIn, 'seconds').format('m:ss')}`,
    [timeoutIn]
  );

  const sessionMenuItems = useMemo(() => {
    const menuItems = [] as SessionMenuItem[];

    if (session && refresh) {
      menuItems.push({
        text: t('session.refresh'),
        onClick: () => refresh()
      });      
    }

    if (session && manageAccount) {
      menuItems.push({
        text: t('session.manageaccount'),
        onClick: () => manageAccount()
      });      
    }

    if (session && allowedTenants && switchTenant) {
      menuItems.push(...allowedTenants.filter(at => at.Id !== tenant).map(allowedTenant => ({ 
          text: t('session.switchtenant', { tenant: allowedTenant.Name }),
          onClick: () => switchTenant(allowedTenant.Id)
        })
      ));
    }

    if (session && logout) {
      menuItems.push({        
        text: t('session.logout', { user: session.email }),
        onClick: () => logout()
      });      
    }
    
    return menuItems;
  }, [session, allowedTenants, tenant, t, refresh, manageAccount, switchTenant, logout]);


  const toolbarItems = useMemo(() => {
    const itemList = [] as dxToolbarItem[];

    if (onMenuToggle) {
      itemList.push({
        location: 'before',
        widget: 'dxButton',
        locateInMenu: 'never',
        options: {        
          elementAttr: {
            class: 'menubutton'
          },
          icon: 'bi bi-list',          
          onClick: () => onMenuToggle()
        }
      });
    }    

    if (title) {
      itemList.push({
        location: 'before',        
        locateInMenu: 'never',
        text: title
      });
    }

    if (session) {
      itemList.push({
        location: 'after',
        locateInMenu: 'never',
        widget: 'dxButton',
        options: {
          elementAttr: {
            class: 'menubutton'
          },
          icon: 'bi bi-person-circle',
          text: sessionTimeoutDisplayText,
          items: sessionMenuItems,          
          onClick: (e: ItemClickEvent) => {
            sessionMenuRef.current?.instance.option('target', e.element);
            sessionMenuRef.current?.instance.option('visible', true);
          }
        }      
      });
    }

    return itemList;
  }, [title, session, sessionMenuItems, sessionTimeoutDisplayText, onMenuToggle]);

  
  return <React.Fragment>
    <Toolbar items={toolbarItems} className={'applicationbar shadow'}/>
    <ActionSheet ref={sessionMenuRef} usePopover={!small} showTitle={false} width={'auto'} items={sessionMenuItems}/>
  </React.Fragment>
};
