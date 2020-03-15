(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/forms'), require('rxjs'), require('rxjs/operators'), require('lodash')) :
    typeof define === 'function' && define.amd ? define('gr-forms', ['exports', '@angular/forms', 'rxjs', 'rxjs/operators', 'lodash'], factory) :
    (global = global || self, factory(global['gr-forms'] = {}, global.ng.forms, global.rxjs, global.rxjs.operators, global.lodash));
}(this, (function (exports, forms, rxjs, operators, lodash) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            var control = new forms.FormControl(this.value || null, this.validators, this.asyncValidators);
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
    }(forms.FormArray));

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
    }(forms.FormGroup));

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
            this.valuesSubject = new rxjs.Subject();
        }
        Object.defineProperty(GrBuilder.prototype, "values$", {
            get: function () {
                return this.valuesSubject.asObservable()
                    .pipe(operators.distinctUntilChanged(lodash.isEqual));
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
            return this.values$.pipe(operators.map(function (value) { return projector(value, _this.form); }), operators.distinctUntilChanged(lodash.isEqual));
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
                return new forms.FormArray(__spread(data).map(function (item) { return _this.recursiveBuild(item); }));
            }
            else if (typeof data === 'object' && data !== null && data !== undefined) {
                // normal form group without any options
                var controls_2 = {};
                Object.keys(data).forEach(function (key) {
                    controls_2[key] = _this.recursiveBuild(data[key]);
                });
                var options = data;
                return new forms.FormGroup(controls_2);
            }
            else {
                // normal form control without any options
                return new forms.FormControl(data);
            }
        };
        return GrBuilder;
    }());

    exports.ControlBinder = ControlBinder;
    exports.GrAbstract = GrAbstract;
    exports.GrArray = GrArray;
    exports.GrBuilder = GrBuilder;
    exports.GrControl = GrControl;
    exports.GrFormArray = GrFormArray;
    exports.GrFormGroup = GrFormGroup;
    exports.GrGroup = GrGroup;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=gr-forms.umd.js.map
