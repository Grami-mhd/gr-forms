import { __extends } from "tslib";
import { FormControl } from '@angular/forms';
import { ControlBinder } from '../control-binder';
import { GrAbstract } from './abstract';
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
export { GrControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dyLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2J1aWxkLW1vZGVscy9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxVQUFVLEVBQVUsTUFBTSxZQUFZLENBQUM7QUFFL0M7SUFBK0IsNkJBQVU7SUFDdkMsbUJBQW1DLEtBQVUsRUFBRSxPQUFpQjtRQUFoRSxZQUNFLGtCQUFNLE9BQU8sQ0FBQyxTQUNmO1FBRmtDLFdBQUssR0FBTCxLQUFLLENBQUs7O0lBRTdDLENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUNFLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNGLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDOUI7WUFDRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQUFDLEFBaEJELENBQStCLFVBQVUsR0FnQnhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb250cm9sQmluZGVyfSBmcm9tICcuLi9jb250cm9sLWJpbmRlcic7XG5pbXBvcnQge0dyQWJzdHJhY3QsIE9wdGlvbnN9IGZyb20gJy4vYWJzdHJhY3QnO1xuXG5leHBvcnQgY2xhc3MgR3JDb250cm9sIGV4dGVuZHMgR3JBYnN0cmFjdCB7XG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgdmFsdWU6IGFueSwgb3B0aW9ucz86IE9wdGlvbnMpIHtcbiAgICBzdXBlcihvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBidWlsZENvbnRyb2woKTogRm9ybUNvbnRyb2wge1xuICAgIGNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy52YWx1ZSB8fCBudWxsLCB0aGlzLnZhbGlkYXRvcnMsIHRoaXMuYXN5bmNWYWxpZGF0b3JzKTtcbiAgICBDb250cm9sQmluZGVyLnNldFVwU3Vic2NyaXB0aW9ucyhcbiAgICAgIHtcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICAgIHZhbHVlT3ZlcnJpZGU6IHRoaXMudmFsdWVPdmVycmlkZVxuICAgICAgfSxcbiAgICAgIGNvbnRyb2xcbiAgICApO1xuICAgIHJldHVybiBjb250cm9sO1xuICB9XG59XG4iXX0=