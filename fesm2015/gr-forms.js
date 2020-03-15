import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isEqual } from 'lodash';

class ControlBinder {
    static setUpSubscriptions(options, control) {
        if (options.disabled) {
            options.disabled.subscribe(state => ControlBinder.disabledCallback(state, control));
        }
        if (options.valueOverride) {
            options.valueOverride.subscribe(state => ControlBinder.valueOverrideCallback(state, control));
        }
    }
    static disabledCallback(formDisable, control) {
        const isBoolean = typeof formDisable === 'boolean';
        const state = isBoolean ? formDisable : formDisable.enabled;
        if (control.disabled !== state) {
            (state ? control.disable : control.enable).bind(control)(isBoolean ? undefined : formDisable);
        }
    }
    static valueOverrideCallback(override, control) {
        control.setValue(override.value, override.options);
    }
}

class GrAbstract {
    constructor(options) {
        this.validators = options ? options.validators : [];
        this.asyncValidators = options ? options.asyncValidators : [];
        this.disabled = options ? options.disabler : null;
        this.valueOverride = options ? options.valueOverrider : null;
    }
}

class GrControl extends GrAbstract {
    constructor(value, options) {
        super(options);
        this.value = value;
    }
    buildControl() {
        const control = new FormControl(this.value || null, this.validators, this.asyncValidators);
        ControlBinder.setUpSubscriptions({
            disabled: this.disabled,
            valueOverride: this.valueOverride
        }, control);
        return control;
    }
}

/**
 * GrFormArray
 * an angular FormArray class that provides strong typed getters for controls and value
 */
class GrFormArray extends FormArray {
    /**
     * same as FormArray.controls with better type safety
     */
    get grControls() {
        return this.controls;
    }
    /**
     * same as FormArray.value with better type safety
     */
    get grValue() {
        return this.value;
    }
}

class GrArray extends GrAbstract {
    constructor(array, options) {
        super(options);
        this.array = array;
    }
    buildArray(controls) {
        const array = new GrFormArray(controls, this.validators, this.asyncValidators);
        ControlBinder.setUpSubscriptions({
            disabled: this.disabled,
            valueOverride: this.valueOverride
        }, array);
        return array;
    }
}

/**
 * GrFormGroup
 * an angular FormGroup class that provides strong typed getters for controls and value
 */
class GrFormGroup extends FormGroup {
    get grControls() {
        return this.controls;
    }
    get grValue() {
        return this.value;
    }
}

class GrGroup extends GrAbstract {
    constructor(group, options) {
        super(options);
        this.group = group;
    }
    buildGroup(controls) {
        const group = new GrFormGroup(controls, this.validators, this.asyncValidators);
        ControlBinder.setUpSubscriptions({
            disabled: this.disabled,
            valueOverride: this.valueOverride
        }, group);
        return group;
    }
}

class GrBuilder {
    constructor() {
        this.valuesSubject = new Subject();
    }
    get values$() {
        return this.valuesSubject.asObservable()
            .pipe(distinctUntilChanged(isEqual));
    }
    buildForm(data) {
        this.form = this.recursiveBuild(data);
        this.valuesSubject.next(this.form.value);
        this.form.valueChanges.subscribe(values => this.valuesSubject.next(values));
        return this.form;
    }
    createSelector(projector) {
        return this.values$.pipe(map((value) => projector(value, this.form)), distinctUntilChanged(isEqual));
    }
    recursiveBuild(data) {
        if (GrControl[Symbol.hasInstance](data)) {
            // hermes form Control
            const options = data;
            return options.buildControl();
        }
        else if (GrArray[Symbol.hasInstance](data)) {
            // hermes form array
            const options = data;
            return options.buildArray([...options.array].map(item => this.recursiveBuild(item)));
        }
        else if (GrGroup[Symbol.hasInstance](data)) {
            // hermes form group options
            const options = data;
            const controls = {};
            Object.keys(options.group).forEach(key => {
                controls[key] = this.recursiveBuild(data[key]);
            });
            return options.buildGroup(controls);
        }
        else if (Array.isArray(data)) {
            // normal form aray witout any options
            return new FormArray([...data].map(item => this.recursiveBuild(item)));
        }
        else if (typeof data === 'object' && data !== null && data !== undefined) {
            // normal form group without any options
            const controls = {};
            Object.keys(data).forEach(key => {
                controls[key] = this.recursiveBuild(data[key]);
            });
            const options = data;
            return new FormGroup(controls);
        }
        else {
            // normal form control without any options
            return new FormControl(data);
        }
    }
}

/*
 * Public API Surface of gr-forms
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ControlBinder, GrAbstract, GrArray, GrBuilder, GrControl, GrFormArray, GrFormGroup, GrGroup };
//# sourceMappingURL=gr-forms.js.map
