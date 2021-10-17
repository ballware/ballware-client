/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, { useMemo, useEffect, useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import HelpIcon from '@mui/icons-material/Help';
import {
  Toolbar,
  Typography,
  IconButton,
  Hidden,
  Divider,
  DialogActions,
  Button,
  useMediaQuery
} from '@mui/material';
import { Dialog, DialogContent } from '@mui/material';
import { PageToolbarItem } from '@ballware/meta-interface';
import { PageContext } from '@ballware/react-contexts';
import {
  RenderFactoryContext,
  ToolbarItemsProvider,
} from '@ballware/react-renderer';
import { useTranslation } from 'react-i18next';

/*
const useStyles = makeStyles(theme => ({
  title: {
    flexGrow: 1,
  },
  toolbarItem: {
    marginRight: theme.spacing(1),
  },
}));
*/
export interface FilterBarProps {
  documentationIdentifier?: string;
  title?: string;
  items?: Array<PageToolbarItem>;
}

export const FilterBar = ({
  documentationIdentifier,
  title,
  items,
}: FilterBarProps) => {
  const { t } = useTranslation();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  //const classes = useStyles();
  const [popupOpen, setPopupOpen] = useState(false);
  const [initialized, setInitialized] = useState(false);

  const { PageToolbarItem } = useContext(RenderFactoryContext);
  const { paramsInitialized, loadDocumentation } = useContext(PageContext);

  const handleFilterClick = () => setPopupOpen(true);

  let dialogContentKey = 1;

  const children = useMemo(() => {
    if (PageToolbarItem) {
      return items?.map((sp, index) => (
        <PageToolbarItem key={index} item={sp} />
      ));
    }

    return undefined;
  }, [PageToolbarItem, items]);

  const dialogContent = children?.map((c: any) => (
    <DialogContent key={dialogContentKey++}>{c}</DialogContent>
  ));

  useEffect(() => {
    if (!initialized && paramsInitialized) {
      paramsInitialized(!matches);

      setInitialized(true);
    }
  }, [initialized, paramsInitialized, matches]);

  return (
    <React.Fragment>
      {t && (
        <Toolbar>
          {title && (
            <Typography sx={{ flexGrow: 1 }} variant="h6">
              {title}
            </Typography>
          )}
          {matches && <ToolbarItemsProvider>{children}</ToolbarItemsProvider>}
          {documentationIdentifier && loadDocumentation && (
            <IconButton
              color="primary"
              aria-label="Dokumentation"
              onClick={() => loadDocumentation(documentationIdentifier)}
            >
              <HelpIcon />
            </IconButton>
          )}
          <Hidden mdUp implementation="css">
            <IconButton
              sx={{ marginRight: theme.spacing(1) }}
              onClick={handleFilterClick}
            >
              <FilterListIcon />
            </IconButton>
            {popupOpen && (
              <Dialog open={popupOpen} fullWidth maxWidth={'sm'}>
                <ToolbarItemsProvider>{dialogContent}</ToolbarItemsProvider>
                <DialogActions>
                  <Button onClick={() => setPopupOpen(false)} color="primary">
                    {t('filterbar.actions.close')}
                  </Button>
                </DialogActions>
              </Dialog>
            )}
          </Hidden>
        </Toolbar>
      )}
      <Divider />
    </React.Fragment>
  );
};
