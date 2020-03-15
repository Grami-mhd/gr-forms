import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { GrAbstract } from './build-models/abstract';
export declare class GrBuilder<FORM_MODEL extends AbstractControl = AbstractControl, VALUE_MODEL = any> {
    private readonly valuesSubject;
    private form;
    readonly values$: Observable<VALUE_MODEL>;
    constructor();
    buildForm(data: GrAbstract): FORM_MODEL;
    createSelector<T>(projector: (values: VALUE_MODEL, form?: FORM_MODEL) => T): Observable<T>;
    private recursiveBuild;
}
