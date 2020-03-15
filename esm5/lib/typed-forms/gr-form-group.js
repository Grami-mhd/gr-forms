import { __extends } from "tslib";
import { FormGroup } from '@angular/forms';
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
export { GrFormGroup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3ItZm9ybS1ncm91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dyLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL3R5cGVkLWZvcm1zL2dyLWZvcm0tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6Qzs7O0dBR0c7QUFDSDtJQUdZLCtCQUFTO0lBSHJCOztJQWFBLENBQUM7SUFSQyxzQkFBVyxtQ0FBVTthQUFyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQXVCLENBQUM7UUFDdEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBVyxnQ0FBTzthQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQWtCLENBQUM7UUFDakMsQ0FBQzs7O09BQUE7SUFFSCxrQkFBQztBQUFELENBQUMsQUFiRCxDQUdZLFNBQVMsR0FVcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0dyb3VwQ29udHJvbHN9IGZyb20gJy4vZ3JvdXAtY29udHJvbHMnO1xuaW1wb3J0IHtGb3JtR3JvdXB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuLyoqXG4gKiBHckZvcm1Hcm91cFxuICogYW4gYW5ndWxhciBGb3JtR3JvdXAgY2xhc3MgdGhhdCBwcm92aWRlcyBzdHJvbmcgdHlwZWQgZ2V0dGVycyBmb3IgY29udHJvbHMgYW5kIHZhbHVlXG4gKi9cbmV4cG9ydCBjbGFzcyBHckZvcm1Hcm91cDxcbiAgQ29udHJvbFR5cGUgZXh0ZW5kcyBHcm91cENvbnRyb2xzID0gR3JvdXBDb250cm9scyxcbiAgVmFsdWVUeXBlIGV4dGVuZHMgeyBbIGtleSBpbiBrZXlvZiBDb250cm9sVHlwZSBdOiBhbnkgfSA9IHsgWyBrZXkgaW4ga2V5b2YgQ29udHJvbFR5cGUgXTogYW55IH1cbiAgPiBleHRlbmRzIEZvcm1Hcm91cCB7XG5cbiAgcHVibGljIGdldCBnckNvbnRyb2xzKCk6IENvbnRyb2xUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9scyBhcyBDb250cm9sVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZ3JWYWx1ZSgpOiBWYWx1ZVR5cGUgIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyBWYWx1ZVR5cGU7XG4gIH1cblxufVxuIl19