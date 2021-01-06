import { createContext } from 'react';

export interface NotificationContextState {
    showInfo?: (message: string) => void;
    showWarning?: (message: string) => void;
    showError?: (message: string) => void;
    hide?: () => void;
}

export interface NotificationDisplayContextState {
    message?: { type: 'error' | 'info' | 'warning'; text: string };
}

export const NotificationContext = createContext({} as NotificationContextState);
export const NotificationDisplayContext = createContext({} as NotificationDisplayContextState);
