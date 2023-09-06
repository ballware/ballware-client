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
import { useMediaQuery, GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { useHistory } from 'react-router-dom';

export interface ApplicationProps {
  drawerWidth?: number;
}

export const Application = ({
  drawerWidth,
  children,
}: PropsWithChildren<ApplicationProps>) => {

  const history = useHistory();
  const smallScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.small);
  const largeScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.large);
  const smallOrMediumScreen = useMediaQuery(GLOBAL_MEDIA_QUERIES.small) || useMediaQuery(GLOBAL_MEDIA_QUERIES.medium);

  const [menuOpen, setMenuOpen] = useState(largeScreen);

  const { ApplicationBar, Navigation } = useContext(RenderFactoryContext);
  const { navigation } = useContext(TenantContext);

  const onToggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [setMenuOpen, menuOpen]);

  const onPageSelected = useCallback((url: string) => {
    if (history && url) {
      history.push(`/${url}`);

      if (smallOrMediumScreen) {
        setMenuOpen(false);
      }
    }
  }, [history, smallOrMediumScreen]);

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
      <Drawer className="flex-fill overflow-hidden pt-2" openedStateMode={smallScreen ? 'overlap' : 'shrink'} opened={menuOpen} template="navigation" maxSize={drawerWidth ?? 240}>
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
