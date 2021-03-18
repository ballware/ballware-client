import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({  
  getUserConfirmation: (message, callback) => callback(window.confirm(message))
});