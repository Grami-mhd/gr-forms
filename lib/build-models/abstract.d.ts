import { AbstractControlOptions, AsyncValidatorFn, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
export declare type FormValidators = ValidatorFn | ValidatorFn[] | AbstractControlOptions | null;
export declare type AsyncFormValidators = AsyncValidatorFn | AsyncValidatorFn[] | null;
export interface FormDisableOptions {
    enabled: boolean;
    onlySelf?: boolean;
    emitEvent?: boolean;
}
export declare type FormDisable = boolean | FormDisableOptions;
export interface ValueOverride {
    value: any;
    options?: {
        onlySelf?: boolean;
        emitEvent?: boolean;
        emitModelToViewChange?: boolean;
        emitViewToModelChange?: boolean;
    };
}
export interface Options {
    validators?: FormValidators;
    asyncValidators?: AsyncFormValidators;
    disabler?: Observable<FormDisable>;
    valueOverrider?: Observable<ValueOverride>;
}
export declare abstract class GrAbstract {
    protected readonly validators: FormValidators;
    protected readonly asyncValidators: AsyncFormValidators;
    protected readonly disabled: Observable<FormDisable>;
    protected readonly valueOverride: Observable<ValueOverride>;
    constructor(options: Options);
}
