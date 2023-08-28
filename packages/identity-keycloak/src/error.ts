import { IdentityApiError } from '@ballware/identity-interface';
import { Observable, catchError, throwError } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';

export function catchApiError<T>(source: Observable<T>) {
    return source.pipe(catchError((error: AjaxError) => throwError(() => ({
        status: error.status,
        message: error.message,
        reason: error.response ?? error.message
    } as IdentityApiError))))
};