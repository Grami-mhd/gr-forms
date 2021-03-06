import { FormControl } from '@angular/forms';
import { ControlBinder } from '../control-binder';
import { GrAbstract } from './abstract';
export class GrControl extends GrAbstract {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dyLWZvcm1zLyIsInNvdXJjZXMiOlsibGliL2J1aWxkLW1vZGVscy9jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLFVBQVUsRUFBVSxNQUFNLFlBQVksQ0FBQztBQUUvQyxNQUFNLE9BQU8sU0FBVSxTQUFRLFVBQVU7SUFDdkMsWUFBbUMsS0FBVSxFQUFFLE9BQWlCO1FBQzlELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQURrQixVQUFLLEdBQUwsS0FBSyxDQUFLO0lBRTdDLENBQUM7SUFFTSxZQUFZO1FBQ2pCLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzNGLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDOUI7WUFDRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1NBQ2xDLEVBQ0QsT0FBTyxDQUNSLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbnRyb2xCaW5kZXJ9IGZyb20gJy4uL2NvbnRyb2wtYmluZGVyJztcbmltcG9ydCB7R3JBYnN0cmFjdCwgT3B0aW9uc30gZnJvbSAnLi9hYnN0cmFjdCc7XG5cbmV4cG9ydCBjbGFzcyBHckNvbnRyb2wgZXh0ZW5kcyBHckFic3RyYWN0IHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSB2YWx1ZTogYW55LCBvcHRpb25zPzogT3B0aW9ucykge1xuICAgIHN1cGVyKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIGJ1aWxkQ29udHJvbCgpOiBGb3JtQ29udHJvbCB7XG4gICAgY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0aGlzLnZhbHVlIHx8IG51bGwsIHRoaXMudmFsaWRhdG9ycywgdGhpcy5hc3luY1ZhbGlkYXRvcnMpO1xuICAgIENvbnRyb2xCaW5kZXIuc2V0VXBTdWJzY3JpcHRpb25zKFxuICAgICAge1xuICAgICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcbiAgICAgICAgdmFsdWVPdmVycmlkZTogdGhpcy52YWx1ZU92ZXJyaWRlXG4gICAgICB9LFxuICAgICAgY29udHJvbFxuICAgICk7XG4gICAgcmV0dXJuIGNvbnRyb2w7XG4gIH1cbn1cbiJdfQ==