import { __extends } from "tslib";
import { GrFormArray } from '../typed-forms/gr-form-array';
import { ControlBinder } from '../control-binder';
import { GrAbstract } from './abstract';
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
export { GrArray };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyYXkuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nci1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9idWlsZC1tb2RlbHMvYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFVBQVUsRUFBVSxNQUFNLFlBQVksQ0FBQztBQUUvQztJQUE2QiwyQkFBVTtJQUNyQyxpQkFDa0IsS0FBWSxFQUFFLE9BQWlCO1FBRGpELFlBRUUsa0JBQU0sT0FBTyxDQUFDLFNBQ2Y7UUFGaUIsV0FBSyxHQUFMLEtBQUssQ0FBTzs7SUFFOUIsQ0FBQztJQUVNLDRCQUFVLEdBQWpCLFVBQTZDLFFBQWE7UUFDeEQsSUFBTSxLQUFLLEdBQUcsSUFBSSxXQUFXLENBQUksUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xGLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDOUI7WUFDRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLEVBQ0QsS0FBSyxDQUNOLENBQUM7UUFDRixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQyxBQWpCRCxDQUE2QixVQUFVLEdBaUJ0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QWJzdHJhY3RDb250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0dyRm9ybUFycmF5fSBmcm9tICcuLi90eXBlZC1mb3Jtcy9nci1mb3JtLWFycmF5JztcbmltcG9ydCB7Q29udHJvbEJpbmRlcn0gZnJvbSAnLi4vY29udHJvbC1iaW5kZXInO1xuaW1wb3J0IHtHckFic3RyYWN0LCBPcHRpb25zfSBmcm9tICcuL2Fic3RyYWN0JztcblxuZXhwb3J0IGNsYXNzIEdyQXJyYXkgZXh0ZW5kcyBHckFic3RyYWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBhcnJheTogYW55W10sIG9wdGlvbnM/OiBPcHRpb25zKSB7XG4gICAgc3VwZXIob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgYnVpbGRBcnJheTxUIGV4dGVuZHMgQWJzdHJhY3RDb250cm9sPihjb250cm9sczogVFtdKTogR3JGb3JtQXJyYXk8VD4ge1xuICAgIGNvbnN0IGFycmF5ID0gbmV3IEdyRm9ybUFycmF5PFQ+KGNvbnRyb2xzLCB0aGlzLnZhbGlkYXRvcnMsIHRoaXMuYXN5bmNWYWxpZGF0b3JzKTtcbiAgICBDb250cm9sQmluZGVyLnNldFVwU3Vic2NyaXB0aW9ucyhcbiAgICAgIHtcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIHZhbHVlT3ZlcnJpZGU6IHRoaXMudmFsdWVPdmVycmlkZVxuICAgICAgfSxcbiAgICAgIGFycmF5XG4gICAgKTtcbiAgICByZXR1cm4gYXJyYXk7XG4gIH1cbn1cbiJdfQ==