import { __extends, __spread } from 'tslib';
import { FormControl, FormArray, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isEqual } from 'lodash';

var ControlBinder = /** @class */ (function () {
    function ControlBinder() {
    }
    ControlBinder.setUpSubscriptions = function (options, control) {
        if (options.disabled) {
            options.disabled.subscribe(function (state) { return ControlBinder.disabledCallback(state, control); });
        }
        if (options.valueOverride) {
            options.valueOverride.subscribe(function (state) { return ControlBinder.valueOverrideCallback(state, control); });
        }
    };
    ControlBinder.disabledCallback = function (formDisable, control) {
        var isBoolean = typeof formDisable === 'boolean';
        var state = isBoolean ? formDisable : formDisable.enabled;
        if (control.disabled !== state) {
            (state ? control.disable : control.enable).bind(control)(isBoolean ? undefined : formDisable);
        }
    };
    ControlBinder.valueOverrideCallback = function (override, control) {
        control.setValue(override.value, override.options);
    };
    return ControlBinder;
}());

var GrAbstract = /** @class */ (function () {
    function GrAbstract(options) {
        this.validators = options ? options.validators : [];
        this.asyncValidators = options ? options.asyncValidators : [];
        this.disabled = options ? options.disabler : null;
        this.valueOverride = options ? options.valueOverrider : null;
    }
    return GrAbstract;
}());

var GrControl = /** @class */ (function (_super) {
    __extends(GrControl, _super);
    function GrControl(value, options) {
        var _this = _super.call(this, options) || this;
        _this.value = value;
        return _this;
    }
    GrControl.prototype.buildControl = function () {
        var control = new FormControl(this.value || null, this.validators, this.asyncValidators);
        ControlBinder.setUpSubscriptions({
            disabled: this.disabled,
            valueOverride: this.valueOverride
        }, control);
        return control;
    };
    return GrControl;
}(GrAbstract));

/**
 * GrFormArray
 * an angular FormArray class that provides strong typed getters for controls and value
 */
var GrFormArray = /** @class */ (function (_super) {
    __extends(GrFormArray, _super);
    function GrFormArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GrFormArray.prototype, "grControls", {
        /**
         * same as FormArray.controls with better type safety
         */
        get: function () {
            return this.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrFormArray.prototype, "grValue", {
        /**
         * same as FormArray.value with better type safety
         */
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    return GrFormArray;
}(FormArray));

var GrArray = /** @class */ (function (_super) {
    __extends(GrArray, _super);
    function GrArray(array, options) {
        var _this = _super.call(this, options) || this;
        _this.array = array;
        return _this;
    }
    GrArray.prototype.buildArray = function (controls) {
        var array = new GrFormArray(controls, this.validators, this.asyncValidators);
        ControlBinder.setUpSubscriptions({
            disabled: this.disabled,
            valueOverride: this.valueOverride
        }, array);
        return array;
    };
    return GrArray;
}(GrAbstract));

/**
 * GrFormGroup
 * an angular FormGroup class that provides strong typed getters for controls and value
 */
var GrFormGroup = /** @class */ (function (_super) {
    __extends(GrFormGroup, _super);
    function GrFormGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GrFormGroup.prototype, "grControls", {
        get: function () {
            return this.controls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GrFormGroup.prototype, "grValue", {
        get: function () {
            return this.value;
        },
        enumerable: true,
        configurable: true
    });
    return GrFormGroup;
}(FormGroup));

var GrGroup = /** @class */ (function (_super) {
    __extends(GrGroup, _super);
    function GrGroup(group, options) {
        var _this = _super.call(this, options) || this;
        _this.group = group;
        return _this;
    }
    GrGroup.prototype.buildGroup = function (controls) {
        var group = new GrFormGroup(controls, this.validators, this.asyncValidators);
        ControlBinder.setUpSubscriptions({
            disabled: this.disabled,
            valueOverride: this.valueOverride
        }, group);
        return group;
    };
    return GrGroup;
}(GrAbstract));

var GrBuilder = /** @class */ (function () {
    function GrBuilder() {
        this.valuesSubject = new Subject();
    }
    Object.defineProperty(GrBuilder.prototype, "values$", {
        get: function () {
            return this.valuesSubject.asObservable()
                .pipe(distinctUntilChanged(isEqual));
        },
        enumerable: true,
        configurable: true
    });
    GrBuilder.prototype.buildForm = function (data) {
        var _this = this;
        this.form = this.recursiveBuild(data);
        this.valuesSubject.next(this.form.value);
        this.form.valueChanges.subscribe(function (values) { return _this.valuesSubject.next(values); });
        return this.form;
    };
    GrBuilder.prototype.createSelector = function (projector) {
        var _this = this;
        return this.values$.pipe(map(function (value) { return projector(value, _this.form); }), distinctUntilChanged(isEqual));
    };
    GrBuilder.prototype.recursiveBuild = function (data) {
        var _this = this;
        if (GrControl[Symbol.hasInstance](data)) {
            // hermes form Control
            var options = data;
            return options.buildControl();
        }
        else if (GrArray[Symbol.hasInstance](data)) {
            // hermes form array
            var options = data;
            return options.buildArray(__spread(options.array).map(function (item) { return _this.recursiveBuild(item); }));
        }
        else if (GrGroup[Symbol.hasInstance](data)) {
            // hermes form group options
            var options = data;
            var controls_1 = {};
            Object.keys(options.group).forEach(function (key) {
                controls_1[key] = _this.recursiveBuild(data[key]);
            });
            return options.buildGroup(controls_1);
        }
        else if (Array.isArray(data)) {
            // normal form aray witout any options
            return new FormArray(__spread(data).map(function (item) { return _this.recursiveBuild(item); }));
        }
        else if (typeof data === 'object' && data !== null && data !== undefined) {
            // normal form group without any options
            var controls_2 = {};
            Object.keys(data).forEach(function (key) {
                controls_2[key] = _this.recursiveBuild(data[key]);
            });
            var options = data;
            return new FormGroup(controls_2);
        }
        else {
            // normal form control without any options
            return new FormControl(data);
        }
    };
    return GrBuilder;
}());

/*
 * Public API Surface of gr-forms
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ControlBinder, GrAbstract, GrArray, GrBuilder, GrControl, GrFormArray, GrFormGroup, GrGroup };
//# sourceMappingURL=gr-forms.js.map
