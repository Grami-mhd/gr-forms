import { GroupControls } from './group-controls';
import { FormGroup } from '@angular/forms';
/**
 * GrFormGroup
 * an angular FormGroup class that provides strong typed getters for controls and value
 */
export declare class GrFormGroup<ControlType extends GroupControls = GroupControls, ValueType extends {
    [key in keyof ControlType]: any;
} = {
    [key in keyof ControlType]: any;
}> extends FormGroup {
    readonly grControls: ControlType;
    readonly grValue: ValueType;
}
