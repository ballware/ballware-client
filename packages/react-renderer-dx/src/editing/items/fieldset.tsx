/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { PropsWithChildren } from 'react';
import { EditLayoutItemOptions } from '@ballware/meta-interface';

export const FieldSet = ({
  layoutItem,
  height,
  children,
}: PropsWithChildren<{
  layoutItem: EditLayoutItemOptions;
  height?: string;
}>) => {
  return (
    <div className="dx-fieldset" style={{ height: height }}>
      {layoutItem.caption && (
        <div className="dx-field-label" style={{ width: '200px' }}>
          {layoutItem.caption}
        </div>
      )}
      <div className="dx-field-value" style={{ width: '100%', height: height }}>
        {children}
      </div>
    </div>
  );
};
