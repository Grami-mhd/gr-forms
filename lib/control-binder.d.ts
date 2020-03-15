import { Observable } from 'rxjs';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { FormDisable, ValueOverride } from './build-models/abstract';
export declare abstract class ControlBinder {
    static setUpSubscriptions(options: {
        disabled?: Observable<FormDisable>;
        valueOverride?: Observable<ValueOverride>;
    }, control: FormArray | FormGroup | FormControl): void;
    private static disabledCallback;
    private static valueOverrideCallback;
}
