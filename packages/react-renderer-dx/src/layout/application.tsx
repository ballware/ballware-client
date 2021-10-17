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

import { useTheme, styled } from '@mui/material/styles';
import { CssBaseline, Drawer, Hidden, Box } from '@mui/material';

import { RenderFactoryContext } from '@ballware/react-renderer';
import { SessionButton } from './sessionbutton';
import { TenantContext } from '@ballware/react-contexts';
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
  drawerWidth?: string | number;
}

export const Application = ({
  drawerWidth,
  children,
}: PropsWithChildren<ApplicationProps>) => {
  //const classes = useStyles(drawerWidth ?? 240)();

  const theme = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);

  const { ApplicationBar, Navigation } = useContext(RenderFactoryContext);
  const { navigation } = useContext(TenantContext);

  const onToggleMenu = useCallback(() => {
    setMobileOpen(!mobileOpen);
  }, [setMobileOpen, mobileOpen]);

  const MemorizedApplicationBar = useMemo(
    () => () => (
      <React.Fragment>
        {ApplicationBar && (
          <ApplicationBar
            title={navigation?.title}
            onMenuToggle={onToggleMenu}
          >
            <SessionButton />
          </ApplicationBar>
        )}
      </React.Fragment>
    ),
    [ApplicationBar, onToggleMenu, navigation]
  );
  const MemorizedNavigation = useMemo(
    () => () => (
      <React.Fragment>
        {Navigation && <Navigation onMenuToggle={onToggleMenu} />}
      </React.Fragment>
    ),
    [Navigation, onToggleMenu]
  );

  const RootDiv = useMemo(() => styled('div')({
    display: 'flex',
    height: '100vh',
  }), []);

  const Nav = useMemo(() => styled('nav')({
    [theme.breakpoints.up('md')]: {
      width: drawerWidth ?? 240,
      flexShrink: 0
    }
  }), [theme]);

  const ToolbarPlaceholder = useMemo(() => styled('div')(theme.mixins.toolbar), [theme]);

  const ContentContainer = useMemo(() => styled('div')({
    height: `calc(100% - ${64}px)`
  }), []);

  return (
    <RootDiv>
      <CssBaseline />
      <MemorizedApplicationBar />
      <Nav>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={onToggleMenu}
            sx={{ 
              width: drawerWidth ?? 240,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth ?? 240, boxSizing: 'border-box' }
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <MemorizedNavigation />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer sx={{ 
              width: drawerWidth ?? 240,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth ?? 240, boxSizing: 'border-box' }
            }}
            variant="permanent"
            open
          >
            <MemorizedNavigation />
          </Drawer>
        </Hidden>
      </Nav>
      <Box sx={{      
          padding: theme.spacing(1),
          [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth ?? 240}px)`
          },
          [theme.breakpoints.down('sm')]: {
            width: '100%'
          }
        }}>
        <ToolbarPlaceholder/>
        <ContentContainer>{children}</ContentContainer>
      </Box>
    </RootDiv>
  );
};
