import { __extends } from "tslib";
import { GrFormGroup } from '../typed-forms/gr-form-group';
import { ControlBinder } from '../control-binder';
import { GrAbstract } from './abstract';
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
export { GrGroup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nci1mb3Jtcy8iLCJzb3VyY2VzIjpbImxpYi9idWlsZC1tb2RlbHMvZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBVyxNQUFNLFlBQVksQ0FBQztBQUVqRDtJQUE2QiwyQkFBVTtJQUNyQyxpQkFBbUMsS0FBMkIsRUFBRSxPQUFpQjtRQUFqRixZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRmtDLFdBQUssR0FBTCxLQUFLLENBQXNCOztJQUU5RCxDQUFDO0lBRU0sNEJBQVUsR0FBakIsVUFBMkMsUUFBVztRQUNwRCxJQUFNLEtBQUssR0FBRyxJQUFJLFdBQVcsQ0FBSSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEYsYUFBYSxDQUFDLGtCQUFrQixDQUM5QjtZQUNFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsRUFDRCxLQUFLLENBQ04sQ0FBQztRQUNGLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBaEJELENBQTZCLFVBQVUsR0FnQnRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JvdXBDb250cm9scyB9IGZyb20gJy4uL3R5cGVkLWZvcm1zL2dyb3VwLWNvbnRyb2xzJztcbmltcG9ydCB7IEdyRm9ybUdyb3VwIH0gZnJvbSAnLi4vdHlwZWQtZm9ybXMvZ3ItZm9ybS1ncm91cCc7XG5pbXBvcnQgeyBDb250cm9sQmluZGVyIH0gZnJvbSAnLi4vY29udHJvbC1iaW5kZXInO1xuaW1wb3J0IHsgR3JBYnN0cmFjdCwgT3B0aW9ucyB9IGZyb20gJy4vYWJzdHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgR3JHcm91cCBleHRlbmRzIEdyQWJzdHJhY3Qge1xuICBwdWJsaWMgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGdyb3VwOiB7W2tleTogc3RyaW5nXTogYW55fSwgb3B0aW9ucz86IE9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZEdyb3VwPFQgZXh0ZW5kcyBHcm91cENvbnRyb2xzPihjb250cm9sczogVCk6IEdyRm9ybUdyb3VwPFQ+IHtcbiAgICBjb25zdCBncm91cCA9IG5ldyBHckZvcm1Hcm91cDxUPihjb250cm9scywgdGhpcy52YWxpZGF0b3JzLCB0aGlzLmFzeW5jVmFsaWRhdG9ycyk7XG4gICAgQ29udHJvbEJpbmRlci5zZXRVcFN1YnNjcmlwdGlvbnMoXG4gICAgICB7XG4gICAgICAgIGRpc2FibGVkOiB0aGlzLmRpc2FibGVkLFxuICAgICAgICB2YWx1ZU92ZXJyaWRlOiB0aGlzLnZhbHVlT3ZlcnJpZGVcbiAgICAgIH0sXG4gICAgICBncm91cFxuICAgICk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG59XG4iXX0=