import { Observable, catchError, throwError } from 'rxjs';
import { AjaxError } from 'rxjs/ajax';
import { MetaApiError } from "@ballware/meta-interface";

export function catchApiError<T>(source: Observable<T>) {
    return source.pipe(catchError((error: AjaxError) => throwError(() => ({
        status: error.status,
        message: error.message,
        reason: error.response ?? error.message
    } as MetaApiError))))
};