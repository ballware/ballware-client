import { createContext } from 'react';
import { StatisticLayout } from '@ballware/meta-interface';

export interface StatisticContextState {
    identifier?: string;
    name?: string;
    params?: Record<string, unknown>;
    layout?: StatisticLayout;
    data?: Array<Record<string, unknown>>;
    argumentAxisCustomizeText?: (value: unknown) => string | undefined;
}

export const StatisticContext = createContext({} as StatisticContextState);
