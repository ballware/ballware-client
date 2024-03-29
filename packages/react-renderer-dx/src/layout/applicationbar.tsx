/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { RightsContext } from '@ballware/react-contexts';
import { useInterval } from '@ballware/react-renderer';
import { ContextMenu, Toolbar } from 'devextreme-react';
import { ClickEvent } from 'devextreme/ui/button';
import { ItemClickEvent } from 'devextreme/ui/context_menu';
import { dxToolbarItem } from 'devextreme/ui/toolbar';
import moment from 'moment';
import 'moment-duration-format';
import React, { useCallback, useContext, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';


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

  const { t } = useTranslation();

  const {
    timeout_in,
    session,
    expired,
    logout,
    refresh,
    manageAccount,
    tenant,
    allowedTenants,
    switchTenant
  } = useContext(RightsContext);

  const [timeoutIn, setTimeoutIn] = React.useState(
    timeout_in ? moment(timeout_in).diff(moment(), 'seconds') : 0
  );

  const [sessionMenuVisible, setSessionMenuVisible] = useState(false);
  const [sessionMenuTarget, setSessionMenuTarget] = useState<Element|undefined>(undefined);

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
          onClick: (e: ClickEvent) => {
            setSessionMenuTarget(e.element);
            setSessionMenuVisible(true);
          }
        }      
      });
    }

    return itemList;
  }, [title, session, sessionTimeoutDisplayText, onMenuToggle]);

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
  }, [session, refresh, manageAccount, switchTenant, logout]);

  const onSessionMenuItemClick = useCallback((e: ItemClickEvent) => {
    e.itemData 
  }, []);

  return <React.Fragment>
    <Toolbar items={toolbarItems} className='applicationbar shadow'/>
    <ContextMenu hideOnOutsideClick items={sessionMenuItems} visible={sessionMenuVisible} target={sessionMenuTarget} onItemClick={onSessionMenuItemClick} onHiding={() => setSessionMenuVisible(false)}></ContextMenu>
  </React.Fragment>
};
