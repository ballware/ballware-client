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

import { useObservableState } from 'observable-hooks';

import { RenderFactoryContext } from '@ballware/react-renderer';
import { TenantContext } from '@ballware/react-contexts';
import { Drawer, Template } from 'devextreme-react';
import { useMedia } from 'react-media';
import { GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { useNavigate } from 'react-router-dom';
/*
const useStyles = (drawerWidth: string | number) =>
  makeStyles(theme => ({
    root: {
      display: 'flex',
      height: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('md')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      padding: theme.spacing(1),
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    client: {
      height: `calc(100% - ${64}px)`,
    },
  }));
*/
export interface ApplicationProps {
  drawerWidth?: number;
}

export const Application = ({
  drawerWidth,
  children,
}: PropsWithChildren<ApplicationProps>) => {

  const navigate = useNavigate();
  const mediaQuery = useMedia({ queries: GLOBAL_MEDIA_QUERIES });
    
  const [menuOpen, setMenuOpen] = useState(mediaQuery.large);

  const { ApplicationBar, Navigation } = useContext(RenderFactoryContext);
  const { navigation$ } = useContext(TenantContext);

  const navigation = useObservableState(navigation$, undefined);

  const onToggleMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [setMenuOpen, menuOpen]);

  const onPageSelected = useCallback((url: string) => {
    if (url) {
      navigate(`/${url}`);

      if (mediaQuery.small || mediaQuery.medium) {
        setMenuOpen(false);
      }
    }
  }, [navigate, mediaQuery]);

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



  /*
  const Nav = useMemo(() => styled('nav')({
    [theme.breakpoints.up('md')]: {
      width: drawerWidth ?? 240,
      flexShrink: 0
    }
  }), [theme]);
  */

  /*
  const ToolbarPlaceholder = useMemo(() => styled('div')(theme.mixins.toolbar), [theme]);

  const ContentContainer = useMemo(() => styled('div')({
    height: `calc(100% - ${64}px)`
  }), []);
  */
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
