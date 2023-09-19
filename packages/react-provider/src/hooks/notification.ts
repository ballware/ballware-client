import Notify from 'devextreme/ui/notify';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export interface NotificationOperations {
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
}

export const useNotification = () => {
    const { t } = useTranslation();

    return useMemo(() => ({
        showInfo: (message) => Notify(t(message), 'info'),
        showWarning: (message) => Notify(t(message), 'warning'),
        showError: (message) => Notify(t(message), 'error')
    } as NotificationOperations), [t]);
};