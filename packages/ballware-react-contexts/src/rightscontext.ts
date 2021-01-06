import { createContext } from 'react';
import { Rights } from '@ballware/meta-interface';

export interface PersistedRightsState {
    rights?: Rights;
    timeout_in?: Date;
    token?: string;
    refresh_token?: string;
    expires_in?: number;
    error?: string;
}

export interface RightsContextState extends PersistedRightsState {
    login?: (username: string, password: string, redirect: string) => void;
    logout?: () => void;
    register?: (username: string, displayname: string, password: string) => void;
    forgotPassword?: (email: string) => void;
    resetPassword?: (email: string, code: string, newPassword: string) => void;
    changePassword?: (oldPassword: string, newPassword: string) => void;
    refresh?: () => void;
}

export const RightsContext = createContext({} as RightsContextState);
