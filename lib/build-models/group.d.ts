import { GroupControls } from '../typed-forms/group-controls';
import { GrFormGroup } from '../typed-forms/gr-form-group';
import { GrAbstract, Options } from './abstract';
export declare class GrGroup extends GrAbstract {
    readonly group: {
        [key: string]: any;
    };
    constructor(group: {
        [key: string]: any;
    }, options?: Options);
    buildGroup<T extends GroupControls>(controls: T): GrFormGroup<T>;
}
