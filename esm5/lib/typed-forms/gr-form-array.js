import { __extends } from "tslib";
import { FormArray } from '@angular/forms';
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
export { GrFormArray };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ItZm9ybS1hcnJheS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dyLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL3R5cGVkLWZvcm1zL2dyLWZvcm0tYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBa0IsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUQ7OztHQUdHO0FBQ0g7SUFBbUcsK0JBQVM7SUFBNUc7O0lBZ0JBLENBQUM7SUFYQyxzQkFBVyxtQ0FBVTtRQUhyQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBeUIsQ0FBQTtRQUN2QyxDQUFDOzs7T0FBQTtJQUtELHNCQUFXLGdDQUFPO1FBSGxCOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFFSCxrQkFBQztBQUFELENBQUMsQUFoQkQsQ0FBbUcsU0FBUyxHQWdCM0ciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5fSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogR3JGb3JtQXJyYXlcbiAqIGFuIGFuZ3VsYXIgRm9ybUFycmF5IGNsYXNzIHRoYXQgcHJvdmlkZXMgc3Ryb25nIHR5cGVkIGdldHRlcnMgZm9yIGNvbnRyb2xzIGFuZCB2YWx1ZVxuICovXG5leHBvcnQgY2xhc3MgR3JGb3JtQXJyYXk8Q29udHJvbFR5cGUgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2wsIFZhbHVlVHlwZSBleHRlbmRzIGFueSA9IGFueT4gZXh0ZW5kcyBGb3JtQXJyYXkge1xuXG4gIC8qKlxuICAgKiBzYW1lIGFzIEZvcm1BcnJheS5jb250cm9scyB3aXRoIGJldHRlciB0eXBlIHNhZmV0eVxuICAgKi9cbiAgcHVibGljIGdldCBnckNvbnRyb2xzKCk6IENvbnRyb2xUeXBlW10ge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xzIGFzIENvbnRyb2xUeXBlW11cbiAgfVxuXG4gIC8qKlxuICAgKiBzYW1lIGFzIEZvcm1BcnJheS52YWx1ZSB3aXRoIGJldHRlciB0eXBlIHNhZmV0eVxuICAgKi9cbiAgcHVibGljIGdldCBnclZhbHVlKCk6IFZhbHVlVHlwZVtdIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG59XG4iXX0=