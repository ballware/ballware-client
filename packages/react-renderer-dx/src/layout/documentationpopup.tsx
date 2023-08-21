/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */
import { useTranslation } from 'react-i18next';
import { HtmlEditor } from '../components/htmleditor';
import { useMedia } from 'react-media';
import { GLOBAL_MEDIA_QUERIES } from '../util/mediaquery';
import { Popup } from 'devextreme-react';
import { Position, ToolbarItem } from 'devextreme-react/popup';

export interface DocumentationPopupProps {
  title: string;
  documentation: string;
  close: () => void;
}

export const DocumentationPopup = ({
  title,
  documentation,
  close,
}: DocumentationPopupProps) => {
  const { t } = useTranslation();

  const onClose = () => {
    close();
  };

  const fullScreen = useMedia({ queries: GLOBAL_MEDIA_QUERIES }).small;

  return (
    <Popup visible
      title={t('documentation.popuptitle', { entity: title })}
      fullScreen={fullScreen}
      >
      <Position            
        at="center"
        my="center"
        of={window}
      />
      <ToolbarItem widget='dxButton' toolbar='bottom' location='after' options={{
        text: t('editing.actions.close'),
        onClick: () => onClose()
      }} />
      <HtmlEditor readOnly defaultValue={documentation} />
    </Popup>
  );
};
