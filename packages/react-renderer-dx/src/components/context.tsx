/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { PropsWithChildren, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
import '../react-renderer-dx.module.scss';

import moment from 'moment';
import deMessages from 'devextreme/localization/messages/de.json';
import { locale, loadMessages } from 'devextreme/localization';
import dxTextBox from 'devextreme/ui/text_box';
import dxSelectBox from 'devextreme/ui/select_box';
import dxTextArea from 'devextreme/ui/text_area';
import dxDateBox from 'devextreme/ui/date_box';
import dxNumberBox from 'devextreme/ui/number_box';
import dxTagBox from 'devextreme/ui/tag_box';
import React from 'react';

export const Context = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    loadMessages(deMessages);
    locale(navigator.language);

    moment.locale(
      navigator.languages ? navigator.languages[0] : navigator.language
    );

    dxTextBox.defaultOptions({
      options: {
        stylingMode: 'underlined'
      }
    });

    dxSelectBox.defaultOptions({
      options: {
        stylingMode: 'underlined'
      }
    });

    dxTagBox.defaultOptions({
      options: {
        stylingMode: 'underlined'
      }
    });

    dxTextArea.defaultOptions({
      options: {
        stylingMode: 'underlined'
      }
    });

    dxDateBox.defaultOptions({
      options: {
        stylingMode: 'underlined'
      }
    });

    dxNumberBox.defaultOptions({
      options: {
        stylingMode: 'underlined'
      }
    });
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
};
