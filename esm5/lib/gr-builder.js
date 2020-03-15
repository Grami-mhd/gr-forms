import { __read, __spread } from "tslib";
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { isEqual } from 'lodash';
import { GrControl } from './build-models/control';
import { GrArray } from './build-models/array';
import { GrGroup } from './build-models/group';
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
export { GrBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ItYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dyLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2dyLWJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBbUIsU0FBUyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRixPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ2pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRS9DO0lBU0U7UUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFlLENBQUM7SUFDbEQsQ0FBQztJQVBELHNCQUFXLDhCQUFPO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRTtpQkFDckMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFNTSw2QkFBUyxHQUFoQixVQUFpQixJQUFnQjtRQUFqQyxpQkFNQztRQUxDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQWUsQ0FBQztRQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxhQUFh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IEFic3RyYWN0Q29udHJvbCwgRm9ybUFycmF5LCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGlzRXF1YWwgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgR3JDb250cm9sIH0gZnJvbSAnLi9idWlsZC1tb2RlbHMvY29udHJvbCc7XG5pbXBvcnQgeyBHckFycmF5IH0gZnJvbSAnLi9idWlsZC1tb2RlbHMvYXJyYXknO1xuaW1wb3J0IHsgR3JBYnN0cmFjdCB9IGZyb20gJy4vYnVpbGQtbW9kZWxzL2Fic3RyYWN0JztcbmltcG9ydCB7IEdyR3JvdXAgfSBmcm9tICcuL2J1aWxkLW1vZGVscy9ncm91cCc7XG5cbmV4cG9ydCBjbGFzcyBHckJ1aWxkZXI8Rk9STV9NT0RFTCBleHRlbmRzIEFic3RyYWN0Q29udHJvbCA9IEFic3RyYWN0Q29udHJvbCwgVkFMVUVfTU9ERUwgPSBhbnk+IHtcbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZXNTdWJqZWN0OiBTdWJqZWN0PFZBTFVFX01PREVMPjtcbiAgcHJpdmF0ZSBmb3JtOiBGT1JNX01PREVMO1xuXG4gIHB1YmxpYyBnZXQgdmFsdWVzJCgpOiBPYnNlcnZhYmxlPFZBTFVFX01PREVMPiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzU3ViamVjdC5hc09ic2VydmFibGUoKVxuICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoaXNFcXVhbCkpO1xuICB9XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmFsdWVzU3ViamVjdCA9IG5ldyBTdWJqZWN0PFZBTFVFX01PREVMPigpO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkRm9ybShkYXRhOiBHckFic3RyYWN0KTogRk9STV9NT0RFTCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5yZWN1cnNpdmVCdWlsZChkYXRhKSBhcyBGT1JNX01PREVMO1xuICAgIHRoaXMudmFsdWVzU3ViamVjdC5uZXh0KHRoaXMuZm9ybS52YWx1ZSk7XG4gICAgdGhpcy5mb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUodmFsdWVzID0+IHRoaXMudmFsdWVzU3ViamVjdC5uZXh0KHZhbHVlcykpO1xuXG4gICAgcmV0dXJuIHRoaXMuZm9ybTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVTZWxlY3RvcjxUPihwcm9qZWN0b3I6ICh2YWx1ZXM6IFZBTFVFX01PREVMLCBmb3JtPzogRk9STV9NT0RFTCkgPT4gVCk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLnZhbHVlcyQucGlwZShcbiAgICAgIG1hcCgodmFsdWUpID0+IHByb2plY3Rvcih2YWx1ZSwgdGhpcy5mb3JtKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChpc0VxdWFsKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlY3Vyc2l2ZUJ1aWxkKGRhdGE6IEdyQWJzdHJhY3QpOiBBYnN0cmFjdENvbnRyb2wge1xuICAgIGlmIChHckNvbnRyb2xbU3ltYm9sLmhhc0luc3RhbmNlXShkYXRhKSkge1xuICAgICAgLy8gaGVybWVzIGZvcm0gQ29udHJvbFxuXG4gICAgICBjb25zdCBvcHRpb25zOiBHckNvbnRyb2wgPSBkYXRhIGFzIEdyQ29udHJvbDtcbiAgICAgIHJldHVybiBvcHRpb25zLmJ1aWxkQ29udHJvbCgpO1xuXG4gICAgfSBlbHNlIGlmIChHckFycmF5W1N5bWJvbC5oYXNJbnN0YW5jZV0oZGF0YSkpIHtcbiAgICAgIC8vIGhlcm1lcyBmb3JtIGFycmF5XG5cbiAgICAgIGNvbnN0IG9wdGlvbnM6IEdyQXJyYXkgPSBkYXRhIGFzIEdyQXJyYXk7XG4gICAgICByZXR1cm4gb3B0aW9ucy5idWlsZEFycmF5KFsuLi5vcHRpb25zLmFycmF5XS5tYXAoaXRlbSA9PiB0aGlzLnJlY3Vyc2l2ZUJ1aWxkKGl0ZW0pKSk7XG5cbiAgICB9IGVsc2UgaWYgKEdyR3JvdXBbU3ltYm9sLmhhc0luc3RhbmNlXShkYXRhKSkge1xuICAgICAgLy8gaGVybWVzIGZvcm0gZ3JvdXAgb3B0aW9uc1xuXG4gICAgICBjb25zdCBvcHRpb25zOiBHckdyb3VwID0gZGF0YSBhcyBHckdyb3VwO1xuICAgICAgY29uc3QgY29udHJvbHM6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9ID0ge307XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zLmdyb3VwKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnRyb2xzW2tleV0gPSB0aGlzLnJlY3Vyc2l2ZUJ1aWxkKGRhdGFba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBvcHRpb25zLmJ1aWxkR3JvdXAoY29udHJvbHMpO1xuXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAvLyBub3JtYWwgZm9ybSBhcmF5IHdpdG91dCBhbnkgb3B0aW9uc1xuXG4gICAgICByZXR1cm4gbmV3IEZvcm1BcnJheShbLi4uZGF0YV0ubWFwKGl0ZW0gPT4gdGhpcy5yZWN1cnNpdmVCdWlsZChpdGVtKSkpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCAmJiBkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIG5vcm1hbCBmb3JtIGdyb3VwIHdpdGhvdXQgYW55IG9wdGlvbnNcblxuICAgICAgY29uc3QgY29udHJvbHM6IHtba2V5OiBzdHJpbmddOiBBYnN0cmFjdENvbnRyb2x9ID0ge307XG4gICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnRyb2xzW2tleV0gPSB0aGlzLnJlY3Vyc2l2ZUJ1aWxkKGRhdGFba2V5XSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IG9wdGlvbnM6IEdyR3JvdXAgPSBkYXRhIGFzIEdyR3JvdXA7XG4gICAgICByZXR1cm4gbmV3IEZvcm1Hcm91cChjb250cm9scyk7XG5cbiAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG5vcm1hbCBmb3JtIGNvbnRyb2wgd2l0aG91dCBhbnkgb3B0aW9uc1xuXG4gICAgICAgIHJldHVybiBuZXcgRm9ybUNvbnRyb2woZGF0YSk7XG4gICAgfVxuICB9XG59XG4iXX0=