import { AbstractControl } from '@angular/forms';
import { GrFormArray } from '../typed-forms/gr-form-array';
import { GrAbstract, Options } from './abstract';
export declare class GrArray extends GrAbstract {
    readonly array: any[];
    constructor(array: any[], options?: Options);
    buildArray<T extends AbstractControl>(controls: T[]): GrFormArray<T>;
}
