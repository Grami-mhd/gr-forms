import { AbstractControl, FormArray } from '@angular/forms';
/**
 * GrFormArray
 * an angular FormArray class that provides strong typed getters for controls and value
 */
export declare class GrFormArray<ControlType extends AbstractControl, ValueType extends any = any> extends FormArray {
    /**
     * same as FormArray.controls with better type safety
     */
    readonly grControls: ControlType[];
    /**
     * same as FormArray.value with better type safety
     */
    readonly grValue: ValueType[];
}
