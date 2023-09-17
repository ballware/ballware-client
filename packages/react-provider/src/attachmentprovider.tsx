/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import React, {
  PropsWithChildren,
} from 'react';
import {
  AttachmentContext,
} from '@ballware/react-contexts';
import { useAttachmentApi } from './hooks';

/**
 * Properties for attachment provider
 */
export interface AttachmentProviderProps {}

/**
 * Provides attachment operations for files attached to records with unique owner id
 */
export const AttachmentProvider = ({
  children,
}: PropsWithChildren<AttachmentProviderProps>): JSX.Element => {
  const attachmentApi = useAttachmentApi();

  return (
    <AttachmentContext.Provider value={{
        fetch: id => attachmentApi?.fetchQueryByOwner(id),
        upload: (id, file) => attachmentApi?.fetchUpload(id, file),
        open: (id, fileName) => attachmentApi?.fetchOpen(id, fileName),
        drop: (id, fileName) => attachmentApi?.fetchRemove(id, fileName),      
      }}>
      {children}
    </AttachmentContext.Provider>
  );
};
