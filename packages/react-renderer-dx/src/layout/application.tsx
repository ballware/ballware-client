/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  useState,
  useContext,
  useCallback,
  useMemo,
  PropsWithChildren,
} from 'react';

import { RenderFactoryContext } from '@ballware/react-renderer';
import { TenantContext } from '@ballware/react-contexts';
import { Drawer, Template } from 'devextreme-react';
import { useMedia } from 'react-media';
import { GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { useHistory } from 'react-router-dom';

export interface ApplicationProps {
  drawerWidth?: number;
}

export const Application = ({
  drawerWidth,
  children,
}: PropsWithChildren<ApplicationProps>) => {

  const history = useHistory();
  const mediaQuery = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
    
  const [menuOpen, setMenuOpen] = useState(mediaQuery.large);

  const { ApplicationBar, Navigation } = useContext(RenderFactoryContext);
  const { navigation } = useContext(TenantContext);

  const onToggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [setMenuOpen, menuOpen]);

  const onPageSelected = useCallback((url: string) => {
    if (history && url) {
      history.push(`/${url}`);

      if (mediaQuery.small || mediaQuery.medium) {
        setMenuOpen(false);
      }
    }
  }, [history, mediaQuery]);

  const MemorizedApplicationBar = useMemo(
    () => () => (
      <React.Fragment>
        {ApplicationBar && (
          <ApplicationBar
            title={navigation?.title}
            onMenuToggle={onToggleMenu}
          />
        )}
      </React.Fragment>
    ),
    [ApplicationBar, onToggleMenu, navigation]
  );

  const MemorizedNavigation = useMemo(
    () => () => (
      <React.Fragment>
        {Navigation && <Navigation onPageSelected={onPageSelected} />}
      </React.Fragment>
    ),
    [Navigation, onPageSelected]
  );

  return (
    <div className="application container-fluid vh-100 vw-100 px-0 d-flex flex-column overflow-hidden">
      <MemorizedApplicationBar />
      <Drawer className="flex-fill overflow-hidden pt-2" openedStateMode={mediaQuery.small ? 'overlap' : 'shrink'} opened={menuOpen} template="navigation" maxSize={drawerWidth ?? 240}>
        <Template name="navigation">      
          <div className="h-100" style={{ width: drawerWidth ?? 240 }}>
            <MemorizedNavigation/>
          </div>          
        </Template>
        <div className="h-100 p-2">
          {children}
        </div>        
      </Drawer>      
    </div>
  );
};
