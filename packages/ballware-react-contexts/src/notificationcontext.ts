/**
 * @license
 * Copyright 2021 Frank Ballmeyer
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */

import { createContext } from 'react';

/**
 * Context for triggering user notification functionality
 */
export interface NotificationContextState {
  /**
   * Show information message to user
   * @param message Message content or translation identifier
   */
  showInfo?: (message: string) => void;

  /**
   * Show warning message to user
   * @param message Message content or translation identifier
   */
  showWarning?: (message: string) => void;

  /**
   * Show error message to user
   * @param message Message content or translation identifier
   */
  showError?: (message: string) => void;

  /**
   * Hide current shown user notification
   */
  hide?: () => void;
}

/**
 * Context for displaying user notification functionality
 */
export interface NotificationDisplayContextState {
  /**
   * Current triggered notification message
   */
  message?: {
    /**
     * Severity of message
     */
    type: 'error' | 'info' | 'warning';

    /**
     * Message text or translation identifier
     */
    text: string;
  };
}

export const NotificationContext = createContext(
  {} as NotificationContextState
);
export const NotificationDisplayContext = createContext(
  {} as NotificationDisplayContextState
);
