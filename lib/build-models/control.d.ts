import { FormControl } from '@angular/forms';
import { GrAbstract, Options } from './abstract';
export declare class GrControl extends GrAbstract {
    readonly value: any;
    constructor(value: any, options?: Options);
    buildControl(): FormControl;
}
