import { Observable, catchError, throwError } from 'rxjs';
import { MetaApiError } from "@ballware/meta-interface";
import { IdentityApiError } from '@ballware/identity-interface';

export function catchApiError<T>(source: Observable<T>, log: (message: string) => void) {
    return source.pipe(catchError((error: MetaApiError|IdentityApiError) => {
        log(error.reason);

        return throwError(() => (error))
    }))
};